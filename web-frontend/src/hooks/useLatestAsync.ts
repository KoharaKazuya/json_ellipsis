import { Inputs, useEffect, useRef, useState } from "preact/hooks";

export interface AbortSignal {
  addEventListener(type: "abort", listener: () => void): void;
}
export type AbortableAsyncFunction<T> = (signal: AbortSignal) => Promise<T>;
export type AbortableAsyncResult<T> =
  | { state: "pending" }
  | { state: "resolved"; result: T }
  | { state: "error"; error: unknown };

export default function useLatestAsync<T>(
  f: AbortableAsyncFunction<T>,
  inputs?: Inputs
): AbortableAsyncResult<T> {
  const [result, setResult] = useState<AbortableAsyncResult<T>>({
    state: "pending"
  });
  const lastPromise = useRef<[Promise<T>, () => void] | null>(null);

  useEffect(() => {
    if (lastPromise.current !== null) lastPromise.current[1]();

    const abortListeners: Array<() => void> = [];
    const signal: AbortSignal = {
      addEventListener(type, listener) {
        if (type !== "abort") return;
        abortListeners.push(listener);
      }
    };
    const promise = f(signal);
    const abort = () => {
      abortListeners.forEach(l => l());
    };

    setResult({ state: "pending" });
    const current = (lastPromise.current = [promise, abort]);

    promise
      .then(result => {
        if (lastPromise.current === current)
          setResult({ state: "resolved", result });
      })
      .catch(error => {
        if (lastPromise.current === current)
          setResult({ state: "error", error });
      });

    return abort;
  }, inputs);

  return result;
}

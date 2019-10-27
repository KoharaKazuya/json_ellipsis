import useLatestAsync from "./useLatestAsync";

export default function useJsonEllipsis(
  text: string,
  maxBytes: number,
  ellipsis: string
) {
  return useLatestAsync(
    async signal => {
      const worker = new Worker("../worker", {
        name: "background-json-ellipsis-worker",
        type: "module"
      });
      signal.addEventListener("abort", () => {
        worker.terminate();
      });
      return await runOnWorker(worker, { text, maxBytes, ellipsis });
    },
    [text, maxBytes, ellipsis]
  );
}

function runOnWorker(
  worker: Worker,
  payload: { text: string; maxBytes: number; ellipsis: string }
) {
  return new Promise<string>((resolve, reject) => {
    worker.addEventListener("message", event => {
      if (event.data.type === "run success") resolve(event.data.payload);
      if (event.data.type === "run error") reject(event.data.error);
    });
    worker.addEventListener("error", reject);
    worker.postMessage({ type: "run", payload });
  });
}

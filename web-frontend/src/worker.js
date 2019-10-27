import { highlight } from "highlight.js";

const rustModule = import("../pkg").catch(err => {
  console.error(err);
  throw err;
});

self.addEventListener("message", async event => {
  if (event.data.type === "run") {
    try {
      const { text, maxBytes, ellipsis } = event.data.payload;
      const json = (await rustModule).run(text, maxBytes, ellipsis);
      const result = highlight("json", json);
      self.postMessage({ type: "run success", payload: result.value });
    } catch (error) {
      self.postMessage({ type: "run error", error });
    }
  }
});

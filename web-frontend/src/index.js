import { h, render } from "preact";
import App from "./components/App";

const container = document.querySelector("#app");
render(h(App), container, container.firstElementChild);

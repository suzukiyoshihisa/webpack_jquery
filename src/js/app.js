"use strict";
import putStone from "./modules/putStone";
import "../scss/style.scss";
import drawboard from "./modules/canvas";

const $canvas = document.querySelector("#reversi");
const ctx = $canvas.getContext("2d");

drawboard(ctx);

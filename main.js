import { interpolateMoo } from "./moo.js";
import { say } from "cowsay"

console.log(say({text: interpolateMoo("Margot")}));
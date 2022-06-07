import fs, { read, writeFile } from "fs";
import readline from "readline";
import { stdin, stdout } from "process";
import makeFile from "./makeFile.js";

const rl = readline.createInterface({ input: stdin, output: stdout });

rl.question("What is the Name of your function?", (answer) => {
  makeFile(answer);

  rl.close();
});

function writFile(name) {
  fs.writeFileSync(`./${name}.js`, `function ${name}(){}`);
}

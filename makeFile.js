function makeFile(name) {
  fs.writeFileSync(`./${name}.js`, `function ${name}(){}`);
}

export default makeFile;

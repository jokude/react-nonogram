const { resolve } = require("path");
const {
  compilerOptions: { paths }
} = require("../tsconfig.json");

const resolveTsconfigPathsToAlias = () => {
  const aliases = {};

  Object.keys(paths).forEach(item => {
    const key = item.replace("/*", "");
    const value = resolve("./", paths[item][0].replace("/*", ""));

    aliases[key] = value;
  });

  return aliases;
};

module.exports = resolveTsconfigPathsToAlias;

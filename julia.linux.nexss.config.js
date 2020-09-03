let languageConfig = Object.assign({}, require("./julia.win32.nexss.config"));
const installJulia = `${__dirname}/install/installJulia.sh`;
languageConfig.compilers = {
  julia: {
    install: `bash ${installJulia}`,
    command: "julia",
    args: "<file>",
    help: ``,
  },
};

module.exports = languageConfig;

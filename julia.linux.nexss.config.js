let languageConfig = Object.assign({}, require("./julia.win32.nexss.config"));

languageConfig.compilers = {
  julia: {
    install: "apt install -y julia",
    command: "julia",
    args: "<file>",
    help: ``,
  },
};

module.exports = languageConfig;

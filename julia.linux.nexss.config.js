let languageConfig = Object.assign({}, require("./julia.win32.nexss.config"));
const installJulia = `${__dirname}/install/installJulia.sh`;
languageConfig.compilers = {
  julia: {
    install: `snap install julia --classic`, //ubuntu
    command: "julia",
    args: "<file>",
    help: ``,
  },
};

module.exports = languageConfig;

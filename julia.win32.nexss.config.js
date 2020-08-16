let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Julia";
languageConfig.description =
  "Julia was designed from the beginning for high performance. Julia programs compile to efficient native code for multiple platforms via LLVM.";
languageConfig.url = "https://julialang.org/";
languageConfig.founders = [
  "Jeff Bezanson",
  "Alan Edelman",
  "Stefan Karpinski",
  "Viral B. Shah",
];
languageConfig.developers = [
  "Jeff Bezanson",
  "Stefan Karpinski",
  "Viral B. Shah",
  "Other contributors",
];
languageConfig.years = ["2012"];
languageConfig.extensions = [".jl"];
languageConfig.builders = {};
languageConfig.compilers = {
  julia: {
    install: "scoop install julia",
    command: "julia",
    args: "<file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.julia.errors");
languageConfig.languagePackageManagers = {
  juliapm: {
    // TODO:
    installation: "julia -e 'using jlpkg;import jlpkg; jlpkg.install()'",
    messageAfterInstallation: "",
    installed: "",
    search: "jlpkg  search",
    install: "jlpkg install",
    uninstall: "jlpkg remove",
    help: "jlpkg",
    version: "julia --version",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "jlpkg",
  },
};

module.exports = languageConfig;

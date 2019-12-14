let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Julia";
languageConfig.description =
  "Julia was designed from the beginning for high performance. Julia programs compile to efficient native code for multiple platforms via LLVM.";
languageConfig.url = "https://julialang.org/";
languageConfig.extensions = [".jl"];
languageConfig.builders = {};
languageConfig.compilers = {
  julia: {
    install: "scoop install julia",
    // Cpp does not have possibility to compile and run on the fly. We need to save it as a exe file first.
    command: "julia",
    args: "<file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.julia.errors");
languageConfig.languagePackageManagers = {
  juliapm: {
    // TODO:
    installation: "PowerShell.exe -File juliaPackageManager.ps1",
    messageAfterInstallation: "",
    installed: "",
    search: "juliapm search",
    install: "juliapm require",
    uninstall: "juliapm remove <args>",
    help: "juliapm",
    version: "juliapm version",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "juliapm"
  }
};

module.exports = languageConfig;

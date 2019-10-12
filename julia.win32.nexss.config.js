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
    installation: "PowerShell.exe -File installComposer.ps1",
    messageAfterInstallation:
      "Add to the top of your php file(s): require __DIR__ . '/vendor/autoload.php';", //this message will be displayed after this package manager installation, maybe some action needed etc.
    installed: "composer installed <args>",
    search: "composer search <args>",
    install: "composer require <args>",
    uninstall: "composer remove <args>",
    help: "composer <args>",
    version: "composer version",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "composer <default> <args>"
  }
};

module.exports = languageConfig;

module.exports = {
  description: "Julia",
  type: "language",
  author: "Marcin Polak <mapoart@gmail.com>",
  version: "1.0",
  compiler: "julia",
  extension: ".jl",
  errors: {
    "'julia' is": {
      win32: "scoop install julia",
      darwin: "brew install julia",
      linux: "apt install julia -y"
    },
    "you may need to install": {
      win32: "tocomplete <module>",
      darwin: "tocompletejuliainslta <module>",
      linux: "<module>"
    }
  },
  url: ""
};

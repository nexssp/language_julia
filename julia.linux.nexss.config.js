let languageConfig = Object.assign({}, require("./julia.win32.nexss.config"));
const installJulia = `${__dirname}/install/installJulia.sh`;

let sudo = process.sudo;

languageConfig.compilers = {
  julia: {
    install: ` if [ ! -f ${process.env.NEXSS_APPS_PATH}/julia-1.6.1-linux-x86_64.tar.gz ];then wget https://julialang-s3.julialang.org/bin/linux/x64/1.6/julia-1.6.1-linux-x86_64.tar.gz -P ${process.env.NEXSS_APPS_PATH}/; fi
if [ ! -d "${process.env.NEXSS_APPS_PATH}/julia" ]; then mkdir ${process.env.NEXSS_APPS_PATH}/julia ; fi
tar -xzf ${process.env.NEXSS_APPS_PATH}/julia-1.6.1-linux-x86_64.tar.gz --strip-components 1 -C ${process.env.NEXSS_APPS_PATH}/julia
cd ${process.env.NEXSS_APPS_PATH}/julia
${sudo}ln -s ${process.env.NEXSS_APPS_PATH}/julia/bin/julia /usr/bin/julia`,
    command: "julia",
    args: "<file>",
    help: ``,
  },
  juliaLatestFromSources: {
    install: `${sudo}git clone https://github.com/JuliaLang/julia.git ${process.env.NEXSS_APPS_PATH}/julia
cd ${process.env.NEXSS_APPS_PATH}/julia
make
make clean
${sudo}make install`,
    command: "julia",
    args: "<file>",
    help: ``,
  },
};

const distName = process.distro;
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  case process.distros.ARCH:
    languageConfig.compilers.julia.install = process.replacePMByDistro(
      `${sudo}pacman -S --noconfirm julia`
    );
    break;
  // case process.distros.UBUNTU:
  //   languageConfig.compilers.julia.install = process.replacePMByDistro(
  //     `${sudo}apt-get update && ${sudo}apt-get install julia -y`
  //   );
  //   break;
  default:
    languageConfig.compilers.julia.install = process.replacePMByDistro(
      languageConfig.compilers.julia.install
    );
    break;
}

module.exports = languageConfig;

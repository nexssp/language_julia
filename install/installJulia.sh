git clone -b master git://github.com/JuliaLang/julia.git

apt update
apt install gcc g++ gfortran make

cd julia
make

export PATH="$(pwd):$PATH"
julia
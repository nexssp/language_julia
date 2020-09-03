git clone -b master --depth=1 git://github.com/JuliaLang/julia.git ~/.nexssApps/Julia/

cd ~/.nexssApps/Julia/julia
apt update
apt install gcc g++ gfortran make

make

export PATH="$(pwd):$PATH"
echo export PATH="$(pwd):$PATH" > ~/.bashrc
julia
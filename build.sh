docker run --rm -it --platform=linux/amd64 -v "$PWD:/work" doom-asmjs bash
ln -sf /usr/bin/python3 /usr/bin/python
cd /work/doomgeneric
source /emsdk/emsdk_env.sh
emmake make -f Makefile.emscripten clean
emmake make -f Makefile.emscripten -j
exit
python3 -m http.server 8000 
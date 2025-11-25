#!/bin/zsh
set -e

rm -f -- *~ *gf *pk *dvi *l*g *ps *tfm *png *gif *pdf *ind *idx

touch *

mpost emblem.mp

uplatex reference.tex

# upmendex reference.idx

uplatex reference.tex

uplatex reference.tex

dvipdfmx reference.dvi

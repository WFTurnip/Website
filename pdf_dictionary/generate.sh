#!/bin/zsh
set -e

echo "実行モードを選択して下さい。"
echo "latex / metafont / erase"

read -p ">>> " readmode

case "$readmode" in
    metafont)
        echo "METAFONTモードを実行します。"
        sh mf_compile.sh
        echo "METAFONTモードを実行しました。"
        ;;
    latex)
        echo "LaTeXモードを実行します。"
        sh latex_compile.sh
        echo "LaTeXモードを実行しました。"
        ;;
    erase)
        echo "成果物を消去します。"
        touch *
        rm -f -- *~ *gf *pk *dvi *aux *l*g *ps *tfm *png *gif *pdf *ind *idx
        touch *
        echo "成果物を消去しました。"
        ;;
    *)
        echo "無効な出力方式です。終了します。"
        exit 1
        ;;
esac

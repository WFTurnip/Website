#!/bin/zsh
set -e

echo "実行モードを選択して下さい。"
echo "latex / metafont / erase"

read -p ">>> " readmode

case "$readmode" in
    metafont)
        echo "METAFONTモードを実行します。"
        sh compile_mf.sh
        echo "METAFONTモードを実行しました。"
        ;;
    latex)
        echo "LaTeXモードを実行します。"
        sh compile_latex.sh
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

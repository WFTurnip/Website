#!/bin/zsh
set -e

rm -f -- *~ *gf *pk *dvi *l*g *ps *tfm *png *gif *pdf *ind *idx

touch *

for mp in *mp; do
    echo "${mp}からEPSを生成開始。"
    mpost "$mp"
    echo "EPS生成完了。"
done
echo "生成ファイル一覧"
ls *eps 2>/dev/null || echo "生成ファイルなし。"

uplatex reference.tex
uplatex reference.tex

# upmendex reference.idx

uplatex reference.tex
uplatex reference.tex

dvipdfmx reference.dvi

echo "生成したPDFファイルを表示します。"
ls *pdf 2>/dev/null || echo "生成ファイルなし。"
echo "ファイルを開きますか？"
echo "yes / no"
read -p ">>> " check
if [ "$check" = "yes" ]; then
    open *pdf
    echo "ファイルを開きました。"
elif [ "$check" = "no" ]; then
    echo "ファイルを開きません。"
fi

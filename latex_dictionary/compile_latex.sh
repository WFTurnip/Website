#!/bin/zsh
set -e

rm -f -- *~ *gf *pk *dvi *l*g *ps *tfm *png *gif *pdf *ind *idx

touch *

mpost emblem.mp

mpost adjective_conjugation_figure.mp
mpost adverb_conjugation_figure.mp
mpost article_conjugation_figure.mp
mpost circumfix_consonants_figure.mp
mpost conjunct_case_figure.mp
mpost consonant_concept_figure.mp
mpost consonants_figure.mp
mpost first_case_figure.mp
mpost ltr_figure.mp
mpost noun_conjugation_figure.mp
mpost part_of_speach_figure.mp
mpost particle_conjugation_figure.mp
mpost prefix_case_figure.mp
mpost prefix_consonants_figure.mp
mpost rtl_figure.mp
mpost second_case_figure.mp
mpost suffix_case_figure.mp
mpost suffix_consonants_figure.mp
mpost verb_conjugation_figure.mp
mpost vowels_figure.mp

uplatex reference.tex

# upmendex reference.idx

uplatex reference.tex

uplatex reference.tex

dvipdfmx reference.dvi

echo "生成ファイル一覧"
ls *pdf 2>/dev/null || echo "生成ファイルなし。"
echo "画像を開きますか？"
echo "yes / no"
read -p ">>> " check
if [ "$check" = "yes" ]; then
    open *pdf
    echo "画像を開きました。"
elif [ "$check" = "no" ]; then
    echo "画像を開きません。"
fi

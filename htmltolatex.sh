echo "HTMLをLaTeXに変換します。"
pandoc -f html -t latex -s -o pdf_dictionary/reference/reference.tex dictionary/reference/reference.html --toc --pdf-engine=latexmk --pdf-engine-opt="-r"
pandoc -f html -t latex -s -o pdf_dictionary/cantillation/cantillation.tex dictionary/cantillation/cantillation.html --toc --pdf-engine=latexmk --pdf-engine-opt="-r" --pdf-engine-opt="./htmltolatex.latexmk"
echo "HTMLをLaTeXに変換しました。"

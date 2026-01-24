echo "HTMLをLaTeXに変換します。"
pandoc -f html -t latex -s -o pdf_dictionary/reference/reference.tex dictionary/reference/reference.html --toc
pandoc -f html -t latex -s -o pdf_dictionary/cantillation/cantillation.tex dictionary/cantillation/cantillation.html --toc
echo "HTMLをLaTeXに変換しました。"

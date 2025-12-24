echo "HTMLをLaTeXに変換します。"
pandoc -f html -t latex -s -o pdf_dictionary/reference.tex dictionary/reference/reference.html --toc
echo "HTMLをLaTeXに変換しました。"

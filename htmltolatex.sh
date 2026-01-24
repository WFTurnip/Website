echo "HTMLをLaTeXに変換します。"
pandoc -f html -t latex -s -o pdf_dictionary/reference/reference.tex dictionary/reference/reference.html --toc --variable documentclass=uplatex --variable classoption=jsbook
pandoc -f html -t latex -s -o pdf_dictionary/cantillation/cantillation.tex dictionary/cantillation/cantillation.html --toc  --variable documentclass=uplatex --variable classoption=jsbook
echo "HTMLをLaTeXに変換しました。"

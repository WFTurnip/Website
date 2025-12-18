echo "HTMLをLaTeXに変換します。"
pandoc -f html -t latex -s -o latex_dictionary/reference.tex dictionary/reference/reference.html
echo "HTMLをLaTeXに変換しました。"

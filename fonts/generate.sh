read option

case $option in
each)
echo "生成するフォントのファイル名を入力してください。"
ls -d *.sfd
read fontname

fontforge -script generate.ff $fontname

echo "フォント${fontname}の生成が完了しました。"
;;
all)
for fontfile in *.sfd; do
    fontforge -script generate.ff "$fontfile"
    echo "フォント${fontfile}の生成が完了しました。"
done
;;
*)
echo "無効なオプションです。eachまたはallを入力してください。"
;;
esac
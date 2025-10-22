echo "生成するフォントのファイル名を入力してください。"
ls -d *.sfd
read fontname

fontforge -script generate.ff $fontname

echo "フォント${fontname}の生成が完了しました。"
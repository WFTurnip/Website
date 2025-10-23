echo "フォント生成スクリプトへようこそ。"
echo "以下のオプションから選択してください："
echo "1. each - 個別のフォントファイルを指定して生成"
echo "2. all  - ディレクトリ内のすべてのフォントファイルを生成"
echo "オプションを入力してください（each / all）："

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
            echo "${fontfile}からのフォント生成が完了しました。"
        done
        ;;
    *)
        echo "無効なオプションです。eachまたはallを入力してください。"
        ;;
esac

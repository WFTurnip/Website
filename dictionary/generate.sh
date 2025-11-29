echo "ビルド用パッケージのアップデート開始"
npm install jsdom
npm install js-beautify
npm install json-beautify
echo "ビルド用パッケージのアップデート終了"

echo "どのフォルダ内部を作りますか？"
echo "html / json / favicon / figure / all"

read -p ">>> " option

case "$option" in
    html)
        node make_html.js
        ;;
    json)
        node make_json.js
        ;;
    favicon)
        node make_favicon.js
        ;;
    figure)
        node make_figure.js
        ;;
    all)
        node make_html.js
        node make_json.js
        node make_favicon.js
        node make_figure.js
        ;;
    *)
        echo "無効な出力方式です。終了します。"
        exit 1
        ;;
esac

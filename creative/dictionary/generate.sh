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
        node generate_html.js
        ;;
    json)
        node generate_json.js
        ;;
    favicon)
        node generate_favicon.js
        ;;
    figure)
        node generate_figure.js
        ;;
    all)
        node generate_html.js
        node generate_json.js
        node generate_favicon.js
        node generate_figure.js
        ;;
    *)
        echo "無効な出力方式です。終了します。"
        exit 1
        ;;
esac

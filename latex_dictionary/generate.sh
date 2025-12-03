#!/bin/zsh

echo "コンパイルをどちらで実行するか選んで下さい。"
echo "metafont / latex"

read -p ">>> " readmode

case "$readmode" in
    metafont)
        sh compile_mf.sh        
        ;;
    latex)
        sh compile_tex.sh        
        ;;
    *)
        echo "無効な出力方式です。終了します。"
        exit 1
        ;;
esac



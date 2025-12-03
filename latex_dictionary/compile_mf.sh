#!/bin/zsh
set -e

rm -f -- *~ *gf *pk *dvi *log *ps *tfm *png *gif *pdf

touch *

echo "コンパイルするファイル名を入力してください。"
ls *.mf
read -p ">>> " mffile
echo "ファイル名を${mffile}に確定しました。"

grep '^mode_def' "$(kpsewhich modes.mf)"

echo "METAFONTのコンパイルオプションを選択してください。"
read -p ">>> " compileoption
echo "${mffile}のコンパイルをモード${compileoption}で実行します。"

mf-nowin "\mode=${compileoption}; mode_setup; input ${mffile}";
echo "GFファイル生成完了。"

ls *gf 2>/dev/null || echo "生成ファイルなし。"

for gf in *gf; do
    echo "${gf}からDVI / PKを生成開始。"
    gftopk "$gf"
    gftodvi "$gf"
    echo "DVI / PK生成完了。"
done
echo "生成ファイル一覧"
ls *dvi 2>/dev/null || echo "生成ファイルなし。"
ls *pk 2>/dev/null || echo "生成ファイルなし。"

echo "フォントテーブルを出力しますか？"
echo "yes / no"
read -p ">>> " check
if [ "$check" = "yes" ]; then
    tex testfont
    echo "フォントテーブルを出力しました。"
elif [ "$check" = "no" ]; then
    echo "フォントテーブルを出力しません。"
fi

for dvi in *dvi; do
    echo "${dvi}からPSファイルを生成開始。"
    dvips "$dvi"
    echo "PSファイル生成完了。"
done
echo "生成ファイル一覧"
ls *ps 2>/dev/null || echo "生成ファイルなし。"

echo "出力画像のファイル形式を入力してください。"
echo "png / gif / pdf / dvi"
read -p ">>> " output
echo "ファイル形式${output}で出力します。"

case "$output" in
    png)
        echo "出力画像の解像度を数字で入力してください。"
        read -p ">>> " density
        echo "解像度${density}で出力します。"
        for ps in *ps; do
            pstoimg -density $density -type png -multipage "$ps"
        done
        echo "画像出力完了。"
        touch *png
        echo "生成ファイル一覧"
        ls *png 2>/dev/null || echo "生成ファイルなし。"
        echo "画像を開きますか？"
        echo "yes / no"
        read -p ">>> " check
        if [ "$check" = "yes" ]; then
            open *png
            echo "画像を開きました。"
        elif [ "$check" = "no" ]; then
            echo "画像を開きません。"
        fi
        ;;
    gif)
        echo "出力画像の解像度を数字で入力してください。"
        read -p ">>> " density
        echo "解像度${density}で出力します。"
        for ps in *ps; do
            pstoimg -density $density -type gif -multipage "$ps"
        done
        echo "画像出力完了。"
        touch *gif
        echo "生成ファイル一覧"
        ls *gif 2>/dev/null || echo "生成ファイルなし。"
        echo "画像を開きますか？"
        echo "yes / no"
        read -p ">>> " check
        if [ "$check" = "yes" ]; then
            open *gif
            echo "画像を開きました。"
        elif [ "$check" = "no" ]; then
            echo "画像を開きません。"
        fi
        ;;
    pdf)
        echo "画像出力します。"
        for ps in *ps; do
            ps2pdf "$ps"
        done
        echo "画像出力完了。"
        touch *pdf
        echo "生成ファイル一覧"
        ls *pdf 2>/dev/null || echo "生成ファイルなし。"
        echo "画像を開きますか？"
        echo "yes / no"
        read -p ">>> " check
        if [ "$check" = "yes" ]; then
            open *pdf
            echo "画像を開きました。"
        elif [ "$check" = "no" ]; then
            echo "画像を開きません。"
        fi
        ;;
    dvi)
        ls *dvi 2>/dev/null || echo "生成ファイルなし。"
        echo "画像を開きますか？"
        echo "yes / no"
        read -p ">>> " check
        if [ "$check" = "yes" ]; then
            open *dvi
            echo "画像を開きました。"
        elif [ "$check" = "no" ]; then
            echo "画像を開きません。"
        fi
        ;;
    *)
        echo "無効な出力方式です。終了します。"
        exit 1
        ;;
esac

echo "コンパイル処理完了。"

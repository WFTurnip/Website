fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")

for fontname in "${fontname[@]}"; do
    echo "ディレクトリ${fontname}の基本大文字から基本小文字へのコピーをします。"

    cp $fontname/uni0041.svg $fontname/uni0061.svg
    cp $fontname/uni0042.svg $fontname/uni0062.svg
    cp $fontname/uni0043.svg $fontname/uni0063.svg
    cp $fontname/uni0044.svg $fontname/uni0064.svg
    cp $fontname/uni0045.svg $fontname/uni0065.svg
    cp $fontname/uni0046.svg $fontname/uni0066.svg
    cp $fontname/uni0047.svg $fontname/uni0067.svg
    cp $fontname/uni0048.svg $fontname/uni0068.svg
    cp $fontname/uni0049.svg $fontname/uni0069.svg
    cp $fontname/uni004a.svg $fontname/uni006a.svg
    cp $fontname/uni004b.svg $fontname/uni006b.svg
    cp $fontname/uni004c.svg $fontname/uni006c.svg
    cp $fontname/uni004d.svg $fontname/uni006d.svg
    cp $fontname/uni004e.svg $fontname/uni006e.svg
    cp $fontname/uni004f.svg $fontname/uni006f.svg
    cp $fontname/uni0050.svg $fontname/uni0070.svg
    cp $fontname/uni0051.svg $fontname/uni0071.svg
    cp $fontname/uni0052.svg $fontname/uni0072.svg
    cp $fontname/uni0053.svg $fontname/uni0073.svg
    cp $fontname/uni0054.svg $fontname/uni0074.svg
    cp $fontname/uni0055.svg $fontname/uni0075.svg
    cp $fontname/uni0056.svg $fontname/uni0076.svg
    cp $fontname/uni0057.svg $fontname/uni0077.svg
    cp $fontname/uni0058.svg $fontname/uni0078.svg
    cp $fontname/uni0059.svg $fontname/uni0079.svg
    cp $fontname/uni005a.svg $fontname/uni007a.svg

    echo "ディレクトリ${fontname}の基本大文字から基本小文字へのコピーが完了しました。"
done

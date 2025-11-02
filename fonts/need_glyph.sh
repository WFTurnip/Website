fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")

for fontname in "${fontname[@]}"; do
    # cat $fontname/uni0050.svg $fontname/uni0051.svg > $fontname/tmp.svg
    # open -a /Applications/Visual\ Studio\ Code.app/ $fontname/tmp.svg
    # inkscape $fontname/tmp.svg
    # cat $fontname/tmp.svg>>$fontname/uni25cc.svg
    # open -a /Applications/Visual\ Studio\ Code.app $fontname/uni25cc.svg
    inkscape $fontname/uni25cc.svg
done

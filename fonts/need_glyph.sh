fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")

for fontname in "${fontname[@]}"; do
    # cat $fontname/uni0070.svg $fontname/uni0071.svg > $fontname/uni25cc.svg
    # cat $fontname/uni005c.svg $fontname/uni0030.svg >> $fontname/uni25cc.svg
    open -a /Applications/Visual\ Studio\ Code.app $fontname/uni25cc.svg
    # inkscape $fontname/uni25cc.svg
done
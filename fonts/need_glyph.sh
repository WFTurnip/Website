fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")

for fontname in "${fontname[@]}"; do
    # cat $fontname/uni0021.svg $fontname/uni0022.svg >>$fontname/uni25cc.svg
    # open -a /Applications/Visual\ Studio\ Code.app $fontname/uni25cc.svg
    inkscape $fontname/uni25cc.svg
done

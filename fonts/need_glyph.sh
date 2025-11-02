fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")

for fontname in "${fontname[@]}"; do
    cat $fontname/uni0046.svg $fontname/uni0054.svg > $fontname/tmp.svg
    open -a /Applications/Visual\ Studio\ Code.app/ $fontname/tmp.svg
    # inkscape $fontname/tmp.svg
done

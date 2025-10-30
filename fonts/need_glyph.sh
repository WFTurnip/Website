fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")

for fontname in "${fontname[@]}"; do
    # cat $fontname/uni002c.svg $fontname/uni0030.svg > $fontname/uni003b.svg
    # cat $fontname/uni002e.svg $fontname/uni0030.svg > $fontname/uni003a.svg
    open -a /Applications/Visual\ Studio\ Code.app/ $fontname/uni003b.svg
    open -a /Applications/Visual\ Studio\ Code.app/ $fontname/uni003a.svg
done

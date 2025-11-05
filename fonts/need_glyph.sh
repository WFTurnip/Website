fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")

for fontname in "${fontname[@]}"; do
    cat $fontname/uni0044.svg $fontname/uni007c.svg > $fontname/uni0024.svg
    open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0024.svg
done

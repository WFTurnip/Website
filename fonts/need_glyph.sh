fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")

for fontname in "${fontname[@]}"; do
    # cat $fontname/uni002f.svg $fontname/uni005c.svg $fontname/uni003d.svg > $fontname/uni0023.svg
    open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0023.svg
done

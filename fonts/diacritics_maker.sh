fontname=("kodito" "lekuta" "lozegw" "silwki" "xavani" "xesada" "xidili")

for fontname in "${fontname[@]}"; do
    # cp ${fontname}.svg ${fontname}/uni0307.svg
    # cp ${fontname}.svg ${fontname}/uni0323.svg

    rm ${fontname}/uni02d9.svg
    # inkscape ${fontname}/uni0307.svg
    # inkscape ${fontname}/uni0323.svg
done

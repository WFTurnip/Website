fontname=("kodito" "lekuta" "lozegw" "silwki" "xavani" "xesada" "xidili")

for fontname in "${fontname[@]}"; do
    # cp ${fontname}/uni0308.svg ${fontname}/uni0300.svg
    # cp ${fontname}/uni0324.svg ${fontname}/uni0316.svg

    # inkscape ${fontname}/uni0307.svg
    # inkscape ${fontname}/uni0323.svg
    # inkscape ${fontname}/uni0308.svg
    # inkscape ${fontname}/uni0324.svg

    inkscape ${fontname}/uni0301.svg
    # inkscape ${fontname}/uni0317.svg

    # inkscape ${fontname}/uni0300.svg
    # inkscape ${fontname}/uni0316.svg
done

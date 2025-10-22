fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")

for fontname in "${fontname[@]}"; do
echo "" > ${fontname}.svg
            for svg in ${fontname}/*svg; do
        cat $svg >> ${fontname}.svg
    done
done

fontnames=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")

for fontname in "${fontnames[@]}"; do
    cd "$fontname" || continue

    for f in *.svg; do
        inkscape "$f" \
          --actions="select-all;object-to-path;transform-apply;export-filename=$f;export-plain-svg;quit"
    done

    cd - >/dev/null
done

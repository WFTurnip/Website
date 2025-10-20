font=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "xavani" "xesada" "xidili" "zosokw")

for font in "${font[@]}"; do
    cat $font/uni004b.svg $font/uni0054.svg $font/uni0053.svg $font/uni0051.svg $font/uni0052.svg $font/uni0050.svg $font/uni0048.svg $font/uni0046.svg $font/uni004d.svg > $font.svg
done

open -a /Applications/Visual\ Studio\ Code.app kodito.svg
open -a /Applications/Visual\ Studio\ Code.app lekuta.svg
open -a /Applications/Visual\ Studio\ Code.app lozegw.svg
open -a /Applications/Visual\ Studio\ Code.app makina.svg
open -a /Applications/Visual\ Studio\ Code.app piswpi.svg
open -a /Applications/Visual\ Studio\ Code.app polwgo.svg
open -a /Applications/Visual\ Studio\ Code.app silwki.svg
open -a /Applications/Visual\ Studio\ Code.app sulive.svg
open -a /Applications/Visual\ Studio\ Code.app xavani.svg
open -a /Applications/Visual\ Studio\ Code.app xesada.svg
open -a /Applications/Visual\ Studio\ Code.app xidili.svg
open -a /Applications/Visual\ Studio\ Code.app zosokw.svg

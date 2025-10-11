cat zosokw/uni003C.svg zosokw.svg >zosokw/uni0028.svg
cat zosokw/uni003E.svg zosokw.svg >zosokw/uni0029.svg

cat zosokw/uni003C.svg zosokw.svg >zosokw/uni005B.svg
cat zosokw/uni003E.svg zosokw.svg >zosokw/uni005D.svg

cat zosokw.svg >>zosokw/uni007B.svg
cat zosokw.svg >>zosokw/uni007D.svg

cp zosokw/uni0028.svg zosokw/uni005B.svg
cp zosokw/uni0029.svg zosokw/uni005D.svg

cat zosokw/uni0028.svg zosokw/uni0029.svg >zosokw/uni007B.svg
cat zosokw/uni0028.svg zosokw/uni0029.svg >zosokw/uni007D.svg

open -a /Applications/Visual\ Studio\ Code.app zosokw/uni003C.svg
open -a /Applications/Visual\ Studio\ Code.app zosokw/uni003E.svg
open -a /Applications/Visual\ Studio\ Code.app zosokw/uni0028.svg
open -a /Applications/Visual\ Studio\ Code.app zosokw/uni0029.svg
open -a /Applications/Visual\ Studio\ Code.app zosokw/uni005B.svg
open -a /Applications/Visual\ Studio\ Code.app zosokw/uni005D.svg
open -a /Applications/Visual\ Studio\ Code.app zosokw/uni007B.svg
open -a /Applications/Visual\ Studio\ Code.app zosokw/uni007D.svg

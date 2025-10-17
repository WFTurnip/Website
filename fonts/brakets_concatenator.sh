cat sulive/uni003C.svg zosokw.svg >sulive/uni0028.svg
cat sulive/uni003E.svg zosokw.svg >sulive/uni0029.svg

cat sulive/uni003C.svg zosokw.svg >sulive/uni005B.svg
cat sulive/uni003E.svg zosokw.svg >sulive/uni005D.svg

cat zosokw.svg >>sulive/uni007B.svg
cat zosokw.svg >>sulive/uni007D.svg

cp sulive/uni0028.svg sulive/uni005B.svg
cp sulive/uni0029.svg sulive/uni005D.svg

cat sulive/uni0028.svg sulive/uni0029.svg >sulive/uni007B.svg
cat sulive/uni0028.svg sulive/uni0029.svg >sulive/uni007D.svg

open -a /Applications/Visual\ Studio\ Code.app sulive/uni003C.svg
open -a /Applications/Visual\ Studio\ Code.app sulive/uni003E.svg
open -a /Applications/Visual\ Studio\ Code.app sulive/uni0028.svg
open -a /Applications/Visual\ Studio\ Code.app sulive/uni0029.svg
open -a /Applications/Visual\ Studio\ Code.app sulive/uni005B.svg
open -a /Applications/Visual\ Studio\ Code.app sulive/uni005D.svg
open -a /Applications/Visual\ Studio\ Code.app sulive/uni007B.svg
open -a /Applications/Visual\ Studio\ Code.app sulive/uni007D.svg

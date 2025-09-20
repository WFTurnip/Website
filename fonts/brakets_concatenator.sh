cat polwgo/uni003C.svg polwgo.svg >polwgo/uni0028.svg
cat polwgo/uni003E.svg polwgo.svg >polwgo/uni0029.svg

cat polwgo/uni003C.svg polwgo.svg >polwgo/uni005B.svg
cat polwgo/uni003E.svg polwgo.svg >polwgo/uni005D.svg

cat polwgo.svg >>polwgo/uni007B.svg
cat polwgo.svg >>polwgo/uni007D.svg

cp polwgo/uni0028.svg polwgo/uni005B.svg
cp polwgo/uni0029.svg polwgo/uni005D.svg

cat polwgo/uni0028.svg polwgo/uni0029.svg >polwgo/uni007B.svg
cat polwgo/uni0028.svg polwgo/uni0029.svg >polwgo/uni007D.svg

open -a /Applications/Visual\ Studio\ Code.app polwgo/uni003C.svg
open -a /Applications/Visual\ Studio\ Code.app polwgo/uni003E.svg
open -a /Applications/Visual\ Studio\ Code.app polwgo/uni0028.svg
open -a /Applications/Visual\ Studio\ Code.app polwgo/uni0029.svg
open -a /Applications/Visual\ Studio\ Code.app polwgo/uni005B.svg
open -a /Applications/Visual\ Studio\ Code.app polwgo/uni005D.svg
open -a /Applications/Visual\ Studio\ Code.app polwgo/uni007B.svg
open -a /Applications/Visual\ Studio\ Code.app polwgo/uni007D.svg

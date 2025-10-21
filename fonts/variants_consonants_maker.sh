echo "開くフォントのディレクトリ名を入力してください。"
ls -d */
read fontname

# Isolate Form -------------------------------------------------------
cp $fontname/uni004B.svg $fontname/uni004B.isol.svg
cp $fontname/uni0054.svg $fontname/uni0054.isol.svg
cp $fontname/uni0053.svg $fontname/uni0053.isol.svg
cp $fontname/uni0051.svg $fontname/uni0051.isol.svg
cp $fontname/uni0052.svg $fontname/uni0052.isol.svg
cp $fontname/uni0050.svg $fontname/uni0050.isol.svg
cp $fontname/uni0048.svg $fontname/uni0048.isol.svg
cp $fontname/uni0046.svg $fontname/uni0046.isol.svg
cp $fontname/uni004D.svg $fontname/uni004D.isol.svg
# Initial Form -------------------------------------------------------
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni004B.init.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0054.init.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0053.init.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0051.init.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0052.init.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0050.init.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0048.init.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0046.init.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni004D.init.svg
# Medial Form --------------------------------------------------------
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni004B.medi.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0054.medi.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0053.medi.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0051.medi.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0052.medi.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0050.medi.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0048.medi.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0046.medi.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni004D.medi.svg
# Final Form ---------------------------------------------------------
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni004B.fina.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0054.fina.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0053.fina.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0051.fina.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0052.fina.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0050.fina.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0048.fina.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0046.fina.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni004D.fina.svg

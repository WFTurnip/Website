echo "結合するフォントのディレクトリ名を入力してください。"
ls -d */
read fontname

# Isolate Form --------------------------------------------------------
cat $fontname/uni004B.isol.svg $fontname/uni005c.svg >$fontname/uni0047.isol.svg
cat $fontname/uni0054.isol.svg $fontname/uni005c.svg >$fontname/uni0044.isol.svg
cat $fontname/uni0053.isol.svg $fontname/uni005c.svg >$fontname/uni005A.isol.svg
cat $fontname/uni0051.isol.svg $fontname/uni005c.svg >$fontname/uni0043.isol.svg
cat $fontname/uni0052.isol.svg $fontname/uni005c.svg >$fontname/uni004C.isol.svg
cat $fontname/uni0050.isol.svg $fontname/uni005c.svg >$fontname/uni0042.isol.svg
cat $fontname/uni0048.isol.svg $fontname/uni005c.svg >$fontname/uni0058.isol.svg
cat $fontname/uni0046.isol.svg $fontname/uni005c.svg >$fontname/uni0056.isol.svg
cat $fontname/uni004D.isol.svg $fontname/uni005c.svg >$fontname/uni004E.isol.svg
cat $fontname/uni0053.isol.svg $fontname/uni005c.svg $fontname/uni0030.svg >$fontname/uni004a.isol.svg
cat $fontname/uni0051.isol.svg $fontname/uni005c.svg $fontname/uni0030.svg >$fontname/uni0059.isol.svg
# Initial Form --------------------------------------------------------
cat $fontname/uni004B.init.svg $fontname/uni005c.svg >$fontname/uni0047.init.svg
cat $fontname/uni0054.init.svg $fontname/uni005c.svg >$fontname/uni0044.init.svg
cat $fontname/uni0053.init.svg $fontname/uni005c.svg >$fontname/uni005A.init.svg
cat $fontname/uni0051.init.svg $fontname/uni005c.svg >$fontname/uni0043.init.svg
cat $fontname/uni0052.init.svg $fontname/uni005c.svg >$fontname/uni004C.init.svg
cat $fontname/uni0050.init.svg $fontname/uni005c.svg >$fontname/uni0042.init.svg
cat $fontname/uni0048.init.svg $fontname/uni005c.svg >$fontname/uni0058.init.svg
cat $fontname/uni0046.init.svg $fontname/uni005c.svg >$fontname/uni0056.init.svg
cat $fontname/uni004D.init.svg $fontname/uni005c.svg >$fontname/uni004E.init.svg
cat $fontname/uni0053.init.svg $fontname/uni005c.svg $fontname/uni0030.svg >$fontname/uni004a.init.svg
cat $fontname/uni0051.init.svg $fontname/uni005c.svg $fontname/uni0030.svg >$fontname/uni0059.init.svg
# Medial Form ---------------------------------------------------------
cat $fontname/uni004B.medi.svg $fontname/uni005c.svg >$fontname/uni0047.medi.svg
cat $fontname/uni0054.medi.svg $fontname/uni005c.svg >$fontname/uni0044.medi.svg
cat $fontname/uni0053.medi.svg $fontname/uni005c.svg >$fontname/uni005A.medi.svg
cat $fontname/uni0051.medi.svg $fontname/uni005c.svg >$fontname/uni0043.medi.svg
cat $fontname/uni0052.medi.svg $fontname/uni005c.svg >$fontname/uni004C.medi.svg
cat $fontname/uni0050.medi.svg $fontname/uni005c.svg >$fontname/uni0042.medi.svg
cat $fontname/uni0048.medi.svg $fontname/uni005c.svg >$fontname/uni0058.medi.svg
cat $fontname/uni0046.medi.svg $fontname/uni005c.svg >$fontname/uni0056.medi.svg
cat $fontname/uni004D.medi.svg $fontname/uni005c.svg >$fontname/uni004E.medi.svg
cat $fontname/uni0053.medi.svg $fontname/uni005c.svg $fontname/uni0030.svg >$fontname/uni004a.medi.svg
cat $fontname/uni0051.medi.svg $fontname/uni005c.svg $fontname/uni0030.svg >$fontname/uni0059.medi.svg
# Final Form ----------------------------------------------------------
cat $fontname/uni004B.fina.svg $fontname/uni005c.svg >$fontname/uni0047.fina.svg
cat $fontname/uni0054.fina.svg $fontname/uni005c.svg >$fontname/uni0044.fina.svg
cat $fontname/uni0053.fina.svg $fontname/uni005c.svg >$fontname/uni005A.fina.svg
cat $fontname/uni0051.fina.svg $fontname/uni005c.svg >$fontname/uni0043.fina.svg
cat $fontname/uni0052.fina.svg $fontname/uni005c.svg >$fontname/uni004C.fina.svg
cat $fontname/uni0050.fina.svg $fontname/uni005c.svg >$fontname/uni0042.fina.svg
cat $fontname/uni0048.fina.svg $fontname/uni005c.svg >$fontname/uni0058.fina.svg
cat $fontname/uni0046.fina.svg $fontname/uni005c.svg >$fontname/uni0056.fina.svg
cat $fontname/uni004D.fina.svg $fontname/uni005c.svg >$fontname/uni004E.fina.svg
cat $fontname/uni0053.fina.svg $fontname/uni005c.svg $fontname/uni0030.svg >$fontname/uni004a.fina.svg
cat $fontname/uni0051.fina.svg $fontname/uni005c.svg $fontname/uni0030.svg >$fontname/uni0059.fina.svg
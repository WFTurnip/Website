/**
 * `contact.js`は、連絡先ページのJavaScriptコードを含むファイルです。
 * このコードは、ページが読み込まれたときに、メールアドレスを動的に生成し、リンクに設定するためのものです。
 * これにより、スパムボットによるメールアドレスの収集を防ぐことができます。
 */
window.addEventListener("DOMContentLoaded", () => {
    const user = "tomohiro.kabura";
    const domain = "icloud.com";
    const email = user + "@" + domain;
    const link = document.getElementById("emailLink");
    link.href = "mailto:" + email;
});
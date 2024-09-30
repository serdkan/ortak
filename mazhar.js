/**
 *
 * @param {string} text buton içine gelecek yazı
 * @param {string} className component için class belirleyici
 */
function gonder(text, className, turu) {
  if (turu == "buton") {
    document.getElementById(
      "mazhar"
    ).innerHTML = `<button class="btn btn-${className}">${text}</button>`;
  }
  if (turu == "alert") {
    document.getElementById(
      "mazhar"
    ).innerHTML = `<div class="alert alert-primary" role="alert">
${text}
    </div>`;
  }
}
export default gonder;

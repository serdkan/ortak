/**
 *
 * @param {string} text buton içine gelecek yazı
 * @param {string} className component için class belirleyici
 */
function gonder(text, className, turu) {
  if (turu == "buton") {
    document.getElementById(
      "efe"
    ).innerHTML = `<button class="btn btn-${className}">${text}</button>`;
  }
  if (turu == "alert") {
    document.getElementById(
      "efe"
    ).innerHTML = `<div class="${className}" role="alert">
    ${text}
      </div>`;
  }
}
export default gonder;

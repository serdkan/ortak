/**
 *
 * @param {string} text buton içine gelecek yazı
 * @param {string} className component için class belirleyici
 */
function gonder(text, className, turu) {
  if (turu == "buton") {
    document.getElementById(
      "serdar"
    ).innerHTML = `<button class="btn btn-${className}">${text}</button>`;
  }
  if (turu == "alert") {
    document.getElementById(
      "serdar"
    ).innerHTML = `<div class="${className}" role="alert">
        ${text}
    </div>`;
  }

  if (turu == "card") {
    document.getElementById(
      "serdar"
    ).innerHTML = `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${className}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${text}</p>
  </div>
</div>`;
  }
}
export default gonder;

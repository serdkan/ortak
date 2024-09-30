/**
 *
 */

function gonder(text,className,turu)
{
    document.getElementById("ba").innerHTML=`<button class="btn btn-${className}">${text}</button>`;

    if (turu == "buton") {
      document.getElementById(
        "ba"
      ).innerHTML = `<button class="btn btn-${className}">${text}</button>`;
    }
    if (turu == "alert") {
      document.getElementById(
        "ba"
      ).innerHTML = `<div class="alert alert-primary" role="alert"> ${text} </div>`;
    }
}
export default gonder;
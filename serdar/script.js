async function kontrol() {
    const gelenArray = await fetch("https://fakestoreapi.com/products").then(
      (response) => response.json()
    );
  
    for (let item of gelenArray) {
      document.getElementById("data").innerHTML+=card(item.image,item.title,item.description, item.price);
    }
  
  }
  
  kontrol();
  
  function card(resim, title, aciklama, fiyat) {
    let html = `<article class="profile">
              <div class="profile__preview">
                <img src="${resim}" alt="" />
              </div>
              <div class="profile__right">
                <div class="profile__content">
                  <h2>${title}</h2>
                  <div class="profile__skills">
                    <div class="profile__skill profile__skill--typescript">
                      TypeScript
                    </div>
                    <div class="profile__skill profile__skill--react">
                      React
                    </div>
                    <div class="profile__skill profile__skill--vue">
                      Vue
                    </div>
                  </div>
                  <p class="profile__description">
                    ${aciklama}
                  </p>
                </div>
                <div class="profile__footer">
                  <button class="btn btn--primary">${fiyat} $</button>
                </div>
              </div>
            </article>
            <br>
            <hr>
            <br>`;
    return html;
  }
  
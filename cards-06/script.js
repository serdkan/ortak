async function kontrol() {
    const gelenArray = await fetch("https://fakestoreapi.com/products").then(
      (response) => response.json()
    );
  
    for (let item of gelenArray) {
      document.getElementById("container").innerHTML+=card(item.image,item.category,item.price,item.title,item.description);
    }
  
  }
  
  kontrol();
  
  function card(foto,category,para,baslik,aciklama) {
    let html = `<article class="card">
            <div class='background'>
                <img src="${foto}" alt="">
            </div>
            <div class='content'>
                <div class="card-header">
                    <div class="card-type">
                        ${category}
                    </div>
                    <div class="latest-article">
                       $${para} 
                    </div>
                </div>
                <div class="card-content">
                    <h2>${baslik}</h2>
                    <p>
                       ${aciklama}
                    </p>
                </div>
                <div class="blog-preview__bottom">
                    <div class="blog-author">
                        <img src="https://lh3.googleusercontent.com/a/ACg8ocJC6hCPul7RMVOAHFAKlutyThY4S_hPQUnsckDmj2Z-iufJ9ASK=s360-c-no" alt="Avatar">
                        <div class="blog-author__name">
                            <div class="blog-author__name">
                                bA
                            </div>
                            <a rel="author" href="mailto:david@atheros.ai" class="blog-author__alias">
                                @ba555
                            </a>
                        </div>
                    </div>
                    <a class="go-to-article-button" href="/my-blog" title="New Blog">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right"
                            width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                            <path d="M15 16l4 -4" />
                            <path d="M15 8l4 4" />
                        </svg>
                    </a>
                </div>
            </div>
        </article>  <br> <hr> <br>`;
    return html;
  }
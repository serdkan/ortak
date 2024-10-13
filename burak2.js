const data = await fetch("https://jsonplaceholder.org/users").then((response) =>
    response.json()
  );
  
  for (let burak of data) {
    let ilkkarakter = veri.address.zipcode.substring(0, 1);
    if (ilkkarakter == 1) {
      console.log(burak.address.zipcode);
    }
  }
  

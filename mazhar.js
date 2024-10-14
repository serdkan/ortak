async function control(){
  const data = await fetch("https://jsonplaceholder.org/users").then((response) =>
    response.json()
  );


  for (let mazhar of data) {

    if(mazhar.firstname == "Jane" && mazhar.lastname == "Smith"){
         console.log("Hosgeldin Jane Smith");
         return true;
    }
  
  }
}


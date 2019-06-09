function go() {
  fetch("./district.json")
    //   .then(response => {
    //     console.log(response);
    //     if (response.ok) return response;
    //   })
    .then(response => console.log(response.json()))
    .then(myJson => console.log(myJson))
    .catch(error => alert(error + " =>id"));
}
go();

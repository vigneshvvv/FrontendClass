async function fetchTableData(){
    console.log("Entered  the fetch data method");
   let output = await fetch("https://dummyjson.com/users");
   let result = await output.json();
   let data = result.users;
   console.log(data);

   data.forEach(element => {
    
    let tb = document.getElementById("tbody");
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${element.id}</td>
    <td>${element.firstName}</td>
    <td>${element.lastName}</td>
    <td>${element.email}</td>
    <td>${element.phone}</td>
    `
    tb.append(tr);
   });
}

fetchTableData();
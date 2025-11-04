
let name1 = "Testing"
let sample = "the content"

function sampleFunction(sample1, sample2 ){
    // console.log(sample1, sample2);
}

sampleFunction(name1, sample);

let merge = (sample1, sample2) => console.log(sample1, sample2);

merge(name1, sample);

let sampleProduct = [{
    name: "nothing",
    price: 20000,
    quantity: 2,
    isAvailable: true

},
{
    name: "samsung",
    price: 30000,
    quantity: 3,
    isAvailable: true

},
{
    name: "oneplus",
    price: 20000,
    quantity: 5,
    isAvailable: true

}]

function alteringData(){
    let output = sampleProduct.filter((e) => e.price >10000);
    // console.log(output);
    return output;
}

function sampleData(){
    let sampleUser = alteringData();
    // let outval =  alteringData.map((e) => ({...e, price:6000}));
    // console.log(outval);
}

sampleData();

let onUser = {
    name: "nothing",
    price: 20000,
    quantity: 2,
    isAvailable: true

}

let sam = {...onUser, price:6000};
onUser.price = 30000;
console.log(sam);
console.log(onUser);

let sam1 = {...onUser, total:12000};
console.log(sam1);

let usedsample = sampleProduct.map((e) => {
    let filters = {...e, totalPrice: e.price*e.quantity};
    return filters;
})
console.log(usedsample);
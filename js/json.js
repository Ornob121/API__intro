const user = {id: 1, name: 'Gorib Amir', job: 'Actor'};
// console.log(user);
const string = JSON.stringify(user);
// console.log(parse)


const shop = {
    owner: 'Alia', 
    address:{
        street : 'Kochukhet vooter bari', 
        city : 'Dhaka', 
        country : 'BD'
    }, 
    products : ['laptop', 'mic', 'monitor', 'keyboard'], 
    revenue : 450000, 
    isOpen : true, 
    isNew : false
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
const stringObj = JSON.parse(string);
console.log(string);
console.log(stringObj);
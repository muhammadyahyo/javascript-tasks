let users = [
    {id: 1, year: 1998, engine:1, name: "Tico"},
    {id: 2, year: 2005, engine:1.2, name: "Matiz"},
    {id: 3, year: 2010, engine:1.6, name: "Gentra"},
    {id: 4, year: 2010, engine:1.5, name: "Cobalt"},
    {id: 5, year: 2012, engine:2, name: "Malibu"},
    {id: 6, year: 2000, engine:1.2, name: "Damas"},
    {id: 7, year: 2018, engine:2.4, name: "Tracker"},

]


// console.log(users.filter(vl => vl.year <= 2000), "2000 yildan oldingi mashinalar");
// console.log(users.filter(vl => vl.year >= 2010), "2010 yilda keyingi mashinalar" );
// console.log(users.sort((a,b) => a.engine-b.engine), "engine kuchiga qarab malumotlarni sort qilish");
// console.log(users.sort((a,b) => a.year-b.year), "chiqarilgan yiliga qarab malumotlarni sort qilish");
// console.log(users.sort((a,b) => a.name.localeCompare(b.name)), "Mashina nomiga qarab malumotlarni sort qilish");
let a = users.filter(vl => vl.year < 2000);
a.push("eski")
let b = users.filter(vl => vl.year > 2000 && vl.year <10);
b.push("o'rta")
let c = users.filter(vl =>  vl.year >10);
c.push("yangi")
console.log(c);


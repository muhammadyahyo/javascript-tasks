let users = [
    {id: 1, year: 1998, engine:1, name: "Tico"},
    {id: 2, year: 2005, engine:1.2, name: "Matiz"},
    {id: 3, year: 2010, engine:1.6, name: "Gentra"},
    {id: 4, year: 2010, engine:1.5, name: "Cobalt"},
    {id: 5, year: 2012, engine:2, name: "Malibu"},
    {id: 6, year: 2000, engine:1.2, name: "Damas"},
    {id: 7, year: 2018, engine:2.4, name: "Tracker"},

]
// Read

const sortByYear =()=>{
    let res = users.sort((a,b) => a.year - b.year)
    users = res
}
const sortByName =()=>{
    let res = users.sort((a,b)=> a.name.localeCompare(b.name))
    users = res
}

const getFilter =(key)=>{
    let res = users.filter((vl) => vl.name.toLowerCase().includes(key.toLowerCase()));
    users = res;
}
const getfilterBig =({value, key})=>{
    // const {value, key} = data
    let res = users.filter((vl) => 
        `${vl[key]}`.toLowerCase().includes(`${value}`.toLowerCase())
    )
    users = res;
    console.log(value, key);
}


// Delete

const deleteUser =(id)=>{
    let res = users.filter((vl)=> vl.id !== id);
    users = res;
}

// Create

const addUser =(user)=>{
    let id = users.length+1
    users = [...users, {id, ...user}]
    console.log();
}

// Update 

const updateUser =(data)=>{
    let res = users.map((vl) => vl.id === data.id ? {...vl , [data.type]: data.value} : vl)
    users = res
}

// updateUser({id:2, type: "name", value: "Equonix"})

// addUser({ year: 2023, engine: 1.5, name: "Onix"})
// sortByYear();
// sortByName();
// getFilter("Mat")
// deleteUser(4);
getfilterBig({value: "Matiz", key: "name"})



console.log(users);

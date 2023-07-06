import users from './mock.js'


let data = users



const tbody = document.querySelector("#tbody")
const displayData = (info) => {
    tbody.innerHTML = "";
    info.map((usr) => {
    const tr = document.createElement('tr')
    const th1 = document.createElement("th")
    const th2 = document.createElement("th")
    const button = document.createElement("button")

    const onDelete = (id) =>{
        data = info.filter((user) => {
        return user.id !== id;
    });
    displayData(data)
    }

    th1.innerText = `${usr.id}`
    th2.innerText = `${usr.fullName}`
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" width="17" height="16"><path d="m2.155.595 13.75 13.75a.749.749 0 1 1-1.06 1.06l-3.311-3.31-.14.588c-.317 1.332-1.972 1.8-2.94.832L6.25 11.311 2.28 15.28a.749.749 0 1 1-1.06-1.06l3.969-3.97-2.204-2.204c-.968-.968-.5-2.623.832-2.94l.588-.14-3.31-3.311a.749.749 0 1 1 1.06-1.06Zm8.134 10.254L5.651 6.211l-1.486.354a.25.25 0 0 0-.119.42l2.731 2.732.003.003.003.003 2.732 2.731a.25.25 0 0 0 .42-.119ZM11.794.984l3.722 3.722a1.75 1.75 0 0 1-.504 2.826l-1.627.751a1.25 1.25 0 0 0-.355.247.749.749 0 1 1-1.06-1.06c.228-.228.494-.414.787-.549l1.627-.751a.25.25 0 0 0 .072-.404l-3.722-3.722a.25.25 0 0 0-.404.072l-.751 1.627a2.726 2.726 0 0 1-.549.787.749.749 0 1 1-1.06-1.06 1.25 1.25 0 0 0 .247-.355l.751-1.627a1.75 1.75 0 0 1 2.826-.504Z"></path></svg>`
    button.setAttribute("class", "btn btn-danger m-1 p-1")
    button.onclick = () => onDelete(usr.id);


    tr.append(th1)
    tr.append(th2)
    tr.append(button)
    tbody.append(tr)

})

}
displayData(data)


// Sort 

const sort =()=> {
    data = data.sort((a, b) => a.fullName.localeCompare(b.fullName));
    displayData(data);
}
const sortButton = document.querySelector("#sort");
sortButton.onclick =()=> sort()

// Input
const searchInput = document.querySelector("#searchInput");
searchInput.oninput = ({ target: { value } }) => {
  value = value.toLowerCase();
  let res = [];
  res = data.filter((user) => {
    return user.fullName.toLowerCase().includes(value);
  });
  displayData(res);
};

// add
const addButton = document.querySelector("#addButton");
const addInput = document.querySelector("#addInput");
let newName = "";
addInput.oninput = ({ target: { value } }) => {
  newName = value;
};
addButton.onclick = () => {
      data = [...data, { id: data.length + 1, fullName: newName }];
  displayData(data);
  addInput.value = "";
}





const inputbox = document.querySelector(".inputfield input");
const addtn = document.querySelector(".inputfield button");
const todolist = document.querySelector(".todo");
const pendingnum= document.querySelector(".pendingnum");
const deleteall = document.querySelector(".footer button");

inputbox.onkeyup =() =>{
    let userdata = inputbox.value;
    if(userdata.trim() !=0){
        addtn.classList.add("active");
    }
    else{
        addtn.classList.remove("active");
    }
}

showtasks()

addtn.onclick = ()=>{
    let userdata = inputbox.value;
    let getlocalstorage = localStorage.getItem("New Todo");
    if(getlocalstorage == null){
        listArr = [];

    }else{
        listArr = JSON.parse(getlocalstorage);
    }
    listArr.push(userdata);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showtasks();
    addtn.classList.remove("active");
}

function showtasks(){
    
    let getlocalstorage = localStorage.getItem("New Todo");
    if(getlocalstorage == null){
        listArr = [];

    }else{
        listArr = JSON.parse(getlocalstorage);
    } 
    
    pendingnum.textContent = listArr.length;
    if(listArr.length > 0){
        deleteall.classList.add("active");
    }
    else{
        deleteall.classList.remove("active");
    
    }
    let newlitag = '';
    listArr.forEach((element, index) =>{
        newlitag += `<li> ${element} <span onclick="deletetask(${index})"; ><i class="fas fa-trash"></i></span></li>`;
    });
    todolist.innerHTML= newlitag;
    inputbox.value = "";
}

function deletetask(index){
    let getlocalstorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getlocalstorage);
    listArr.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showtasks();
}

deleteall.onclick=()=>{
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showtasks();
}

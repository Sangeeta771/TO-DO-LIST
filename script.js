 const inputBox=document.getElementById('inputBox');
 const listContainer=document.getElementById("listContainer");

 let addTask=()=>{
    if(inputBox.value===''){
        alert('you must write something to add..')
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=`<p>${inputBox.value}</p> <i id="cross" class="fa-solid fa-xmark"></i>`;
        listContainer.appendChild(li);   
    }
    inputBox.value='';
    saveData()
 }

listContainer.addEventListener('click',function (e) {
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
    if(e.target.id==='cross'){
        e.target.parentElement.remove()
        saveData();
    }
    
},false)


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}


// This is for Keyboard event ....

        inputBox.addEventListener("keydown", function(e) {
            if (e.key=== "Enter") {
                addKeyTask();
            }
        });

        function addKeyTask() {
            if(inputBox.value===''){
                alert('you must write something to add..')
            }
            else{
                let li=document.createElement('li');
                li.innerHTML=`<p>${inputBox.value}</p> <i id="cross" class="fa-solid fa-xmark"></i>`;
                listContainer.appendChild(li);   
            }
            inputBox.value='';
            saveData()
            
        }


        function saveData() {
            localStorage.setItem("data", listContainer.innerHTML);
        }
        
        function showTask(){
            listContainer.innerHTML=localStorage.getItem("data");
        }

        showTask();

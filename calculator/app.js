function display(num){
    document.getElementById("resDisplay").value += num;
}

function calculate(){
    let values = document.getElementById("resDisplay").value;
    let res = eval(values);
     document.getElementById("resDisplay").value = res;

}


function clrscr(){
    document.getElementById("resDisplay").value = "";
    
}


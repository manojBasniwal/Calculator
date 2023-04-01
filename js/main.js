let string = " ";

let buttons = document.querySelectorAll('.button');
for(let i=0; i<buttons.length; i++){
  let element = buttons[i];
    element.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
           string = eval(string);
           document.querySelector('input').value = string; 
        }
        else if(e.target.innerHTML == "C"){
            string = ""
            document.querySelector('input').value = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
}


function delet(){
    let buttons = document.getElementsByClassName('.input');
        let remove = buttons.string;
        string = string.slice(0,-1);
        buttons.string = remove;
}
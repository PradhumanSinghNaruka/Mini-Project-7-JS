let change1=document.querySelector("#main1");
let btn1=document.querySelector("#btn");
let choose=document.querySelector("#option1");
let ans1=document.querySelector("#ans");
let image1=document.querySelector("#image")

btn1.addEventListener('click', execute);
function execute(){
    let value1=choose.value;
    switch (value1) {
        case 'backgroundColor':
            change1.style.backgroundColor = input.value;
            break;
        case 'Padding':
            image1.style.padding = input.value + 'px'; 
            break;
        case 'Width':
            image1.style.width = input.value + 'px'; 
            break;
        default:
    }
}

// Select all the buttons
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");

let list = document.querySelector("#cart-list");

// Add Event Listener
btn1.addEventListener("click", addtoCart);
btn2.addEventListener("click", addtoCart);
btn3.addEventListener("click", addtoCart);
btn4.addEventListener("click", addtoCart);
btn5.addEventListener("click", addtoCart);

list.addEventListener("click", rmitem);

function addtoCart(e) {
    let iname = e.target.parentElement.parentElement.children[0].innerHTML;
    let iprice = e.target.parentElement.parentElement.children[1].innerHTML;

    let item = document.createElement("tr");
    item.innerHTML = `
    <td>${iname}</td>
    <td>${iprice}</td>
    <td><button type="button">Remove</button></td>`;
    list.appendChild(item);
}

function rmitem(e){
    if (e.target.hasAttribute("type")){
        if(confirm("Are you sure?")){
            let item = e.target.parentElement.parentElement;
            item.remove();
        }
    }
}
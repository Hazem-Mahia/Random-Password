let one = ["A", "B", "c", "d", "E", "F", "g", "h", "I", "J", "K", "L", "M", "n", "o", "p", "V", "q", "R", "X", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, "@", "#", "$", "&", "*"];

let two = [];

let randomPass = document.querySelector("button");

randomPass.onclick = function () {
    let yourPass = document.querySelector(".Password")
        clear ();
        (two.push(one[Math.floor(Math.random() * one.length)])); 
        (two.push(one[Math.floor(Math.random() * one.length)])); 
        (two.push(one[Math.floor(Math.random() * one.length)])); 
        (two.push(one[Math.floor(Math.random() * one.length)])); 
        (two.push(one[Math.floor(Math.random() * one.length)])); 
        (two.push(one[Math.floor(Math.random() * one.length)])); 
        (two.push(one[Math.floor(Math.random() * one.length)])); 
        (two.push(one[Math.floor(Math.random() * one.length)])); 
        (two.push(one[Math.floor(Math.random() * one.length)])); 
        (two.push(one[Math.floor(Math.random() * one.length)])); 
        (two.push(one[Math.floor(Math.random() * one.length)])); 
            yourPass.innerHTML = (two.join(""));
}

function clear () {
    two = [""];
}
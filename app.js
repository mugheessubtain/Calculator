// let inputEl = document.querySelector(".value");
// let buttons = document.querySelectorAll("button");

// let str = "";
// let allArry = Array.from(buttons);

// allArry.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         if (e.target.innerHTML == "=") {
//             str = eval(str);
//             inputEl.value = str;
//         } else if (e.target.innerHTML == "AC") {
//             str = "";
//             inputEl.value = str;
//         } else if (e.target.innerHTML == "DEL") {
//             str = str.substring(0, str.length - 1);
//             inputEl.value = str;
//         } else {
//             str += e.target.innerHTML;
//             inputEl.value = str;
//         }
//     });
// });


let inputEl = document.querySelector(".value");

let str = "";

function calculation(button) {
    let value = button.innerHTML;

    if (value == "=") {
        str = eval(str);
        inputEl.value = str;
    } else if (value == "AC") {
        str = "";
        inputEl.value = str;
    } else if (value == "DEL") {
        str = str.splice
        inputEl.value = str;
    } else {
        str += value;
        inputEl.value = str;
    }
}


// let text = "Hello world!";
// let result = text.substring(0,2);// first parameter describes the starting valua and last parameter describes the endindex which is not include in copy of array
// indexStart: Required, specifies where to start extracting (inclusive).
// indexEnd: Optional, specifies where to stop extracting (exclusive). If omitted, extracts to the end of the string.
// Syntax: string.substring(indexStart, indexEnd)
// it is string method we cannot use splice bcz splice is for array


// eval()
// this evaluates the expression which is in its parenthesis
// function toggleFunction()
// {
//     var element = document.getElementById("toggle");
//     element.classList.toggle("sidebar-toggle");
// }
function toggleFunction()
{
    var element = document.getElementById("toggle");

    if (element.classList) {
        element.classList.toggle("sidebar-toggle");
    } else {
        // For IE9
        var classes = element.className.split(" ");
        var i = classes.indexOf("sidebar-toggle");

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("sidebar-toggle");
        element.className = classes.join(" ");
    } 
}

// type writer
const text = ["Website Design", "Web Application", "Wordpress Theme", "Android App"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
(function type() {
    if (count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);
    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 250);
})();
// skill counter
const numb = document.querySelector(".numb");
let counter = 0;
setInterval(() => {
    if (counter == 70) {
        clearInterval();
    } else {
        counter += 1;
        numb.textContent = counter + "%";
    }
}, 80);
const numb_two = document.querySelector(".numb_two");
let counter_two = 0;
setInterval(() => {
    if (counter_two == 85) {
        clearInterval();
    } else {
        counter_two += 1;
        numb_two.textContent = counter_two + "%";
    }
}, 80);

const numb_three = document.querySelector(".numb_three");
let counter_three = 0;
setInterval(() => {
    if (counter_three == 75) {
        clearInterval();
    } else {
        counter_three += 1;
        numb_three.textContent = counter_three + "%";
    }
}, 80);

const numb_four = document.querySelector(".numb_four");
let counter_four = 0;
setInterval(() => {
    if (counter_four == 90) {
        clearInterval();
    } else {
        counter_four += 1;
        numb_four.textContent = counter_four + "%";
    }
}, 80);
// msg section code here

let nextOption = document.getElementById("spanone");
let nextOption2 = document.getElementById("spantwo");
let name = document.getElementById("fromdiv1");
let email = document.getElementById("fromdiv2");
let phone = document.getElementById("fromdiv3");
let budget = document.getElementById("fromdiv4");
let details = document.getElementById("fromdiv5");
let nextone = document.getElementById("nextOne");
let nextTwo = document.getElementById("nextTwo");
let previousone = document.getElementById("previousone");
let previoustwo = document.getElementById("previoustwo");
let submitbutton = document.getElementById("submitbutton");
function FunctionNextOne()
{
    nextOption.classList.add("msgCirOnespan");
    name.classList.add("d-none");
    email.classList.add("d-none");
    nextone.classList.add("d-none");
    phone.classList.remove("d-none");
    budget.classList.remove("d-none");
    previousone.classList.remove("d-none");
    nextTwo.classList.remove("d-none");
}
function previousonefunction()
{
    nextOption.classList.remove("msgCirOnespan");
    name.classList.remove("d-none");
    email.classList.remove("d-none");
    nextone.classList.remove("d-none");
    phone.classList.add("d-none");
    budget.classList.add("d-none");
    previousone.classList.add("d-none");
    nextTwo.classList.add("d-none");
    details.classList.add("d-none");
    submitbutton.classList.add("d-none");

}
function FunctionNextTwo()
{
    nextOption2.classList.add("msgCirOnespan");
    details.classList.remove("d-none");
    submitbutton.classList.remove("d-none");
    phone.classList.add("d-none");
    nextTwo.classList.add("d-none");
    budget.classList.add("d-none");
    previousone.classList.add("d-none");
    previoustwo.classList.remove("d-none");

}
function previousonefunctiontwo(){
    previoustwo.classList.add("d-none");
    previousone.classList.remove("d-none");
    nextOption2.classList.remove("msgCirOnespan");
    details.classList.add("d-none");
    phone.classList.remove("d-none");
    budget.classList.remove("d-none");

}
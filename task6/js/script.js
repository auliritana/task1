let menuItems = document.getElementsByClassName("menu-item"),
    menu = document.querySelector(".menu"),
    adv = document.querySelector(".adv"),
    title = document.getElementById("title");

menu.insertBefore(menuItems[2], menuItems[1]);

let li = document.createElement("li");
li.classList.add("menu-item");
li.textContent = "Пятый пункт";
menu.appendChild(li);

document.body.style.backgroundImage = "url(img/apple_true.jpg)";

adv.remove();

title.textContent = "Мы продаем только подлинную технику Apple";

function askQuestion() {
    let answer = document.getElementById("prompt");
    answer.textContent = prompt("Как Вы относитесь к технике Apple?", "");
    while (answer.textContent == "" || answer.textContent == null) {
        answer.textContent = prompt("Как Вы относитесь к технике Apple?", "");
    }
}

setTimeout(askQuestion, 1000);

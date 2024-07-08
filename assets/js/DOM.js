'use strict';
// // 1. За допомогою DOM створити елемент section. Встановити 
// у нього атрибут id зі значенням “root”. Всередину цього 
// елемента прописати довільний рядок тексту. Встановити колір 
// тексту для елемента. Відобразити елемент, зробивши його 
// дочірнім до <body>

const section = document.createElement('section')
section.id = 'root'
section.textContent = 'Hello World'
document.body.insertAdjacentElement('afterbegin', section) //Для відображення елемента до наявних на сторінці
// document.body.append(section)


// // 2. За допомогою DOM отримати посилання на існуючий на 
// сторінці елемент (div або section, який заздалегідь має 
// існувати в розмітці і містити якийсь тексту) та змінити йому 
// колір тла на фіолетовий, а колір тексту на білий.

const div = document.querySelector('div')
div.style.backgroundColor = 'violet'
div.style.color = 'white'


// // 3. За допомогою prompt отримати у користувача його ім’    
// я, після чого створити і відобразити на сторінці елемент <
// h1>, який містить текст “Вітаю, (введене користувачем ім’я)”


let userName = prompt("Будь ласка, введіть своє ім'я")
const greedingEl = document.createElement('h1')
greedingEl.textContent = `Вітаю, ${userName}`
document.body.append(greedingEl)

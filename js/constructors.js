// function User (name, id) { 
// // функция по классификации относится к объекту. т.е. в нее м-о записать методы и св-ва
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log ('hello ' + this.name);
//     };
// };

// // конструкция this.name == "Alex" или "Игорь "

// //теперь наша функция стала конструктором. с помощью нее мы можем создавать новые объекты


// let Ivan = new User ('Игорь', 25); // новую функцию можно задать с помощью оператора new
//     // Alex = new User ('Alex', 20);

// console.log(Ivan.name);
// console.log (Ivan); 
// console.log (Alex);    

// так я вывел в консоль два новых Объекта, а не функции. эти объекты были созданы с помощью конструктора function User (name, id)  

// чтбы вывести из функции переменные во внешний мир, не надо использовать return

// User.prototype.exit = function (name) {
//     console.log('пользователь ' + this.name + ' ушел');

// };

// Ivan.exit ();

// все это было прописано в стандарте ES5







                                                    //Контекст вызова

//контекст вызова - это то, что окружает функцию. то, в каких условиях она вызывается.
// Функция может вызываться четырьмя способами. В каждом из них контекст вызова разный


                                                //1. Обычный вызов функции (контекст вызова - window / undefined)

// function showThis () {
//     console.log(this);
// }

// showThis ();
// здесь контекст вызова - объект window, т.к функция не привязана к аккому-то конкретному объекту

// function showThis (a, b) {
//     console.log(this);
//     function sum () {
//         console.log (this);
//         return this.a + this.b; // NaN
//     }
//     console.log(sum());
// }

// showThis (4, 5);
// showThis (5, 5);

// функция внутри функции имеет контекст вызова объект window


// function showThis (a, b) {
//     console.log(this);
//     function sum () {
//         console.log (this);
//         return a + b; 
//     }
//     console.log(sum());
// }

// showThis (4, 5); // 9
// showThis (5, 5); // 10

// здесь мы уже можем посчитать сумму, т.к. тут используется замыкание. т.е функция sum не находит внутри себя аргументы a и b, она пытается найти их вне себя (выше)

// 'use strict';
// function showThis (a, b) {
//     console.log(this);
//     function sum () {
//         console.log (this);
//         return a + b; 
//     }
//     console.log(sum());
// }

// showThis (4, 5); // 9
// showThis (5, 5); // 10
// при использовании строго режима контекст  простого вызова функции - undefined



                                                                // 2. 


// let obj = {
//     a: 20,
//     b: 40,
//     sum: function () {
//         console.log(this);
//         function shout () {
//             console.log (this);
//         }
//         shout ();
//     }
// };

// obj.sum();

// контекст вызова функции как метода объекта - есть сам объект
//а если внутри данной функции прописать еще одну, то уже контекст ее вызова - window / undefined



                                                        // 3
// при вызове функции-конструктора (new) контекстом вызова будет новый созданный объект






                                                        //  4 
// Ручное присваивание this любой функции  

// let user = {
//     name: 'john'
// };
 
// function sayName () {
//     console.log (this);
//     console.log (this.name);
// };



// console.log (sayName.call (user));
// console.log (sayName.apply (user));
//при помощи этих методов мы насильно связали отдельную функцию и объект, т.е. насильно привязали контекст вызова;

// let user = {
//     name: 'john'
// };
 
// function sayName (surname) {
//     console.log (this);
//     console.log (this.name + surname);
// };

// sayName.call (user, ' fayl');
// sayName.apply (user, [' smith']);
// отличие call от apply в том, что в первом случае мы можем дополнительно передать еще аргумент в виде строки, а во втором - аргумент в виде массива

// function count (number) {
//     return this * number;
// }

// let double = count.bind(2);

// console.log(double (4));
// сначала задаем функцию. у нее нет четкого контекста. он равен window. затем задаю переменную,  в которую помещаю вызов функции count через метод bind, который говорит, что контекстом count будет 2. 
// и уже потом вызываю переменную/функцию double, в которой аргументом number будет 4


// let btn = document.getElementsByTagName('button') ;


// btn [0].addEventListener('click', function () {
//     console.log(this);
//     this.style.backgroundColor = 'red';

// });

// в данном случае контекст вызова функции внутри обработчика события равен тому элементу, к какторому привязан данный обработчик


// console.log(a);
// console.log(typeof(a));

                                                  //  interpolation

let name = 'ivan',
    age = 30,
    mail = 'dfayl@mail.ru';


// document.write('пользователю ' + name + ' ' + age + ' лет. Его почтовый адрес ' + mail); 
// Данный способ записи не совсем удобен. ниже используется интерполяция

document.write(`пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`); 




                                                      //  let / const

function makeArray () {
    var items = [];

    for (var i = 0; i < 10; i++) {

        var item = function () {
            console.log(i);
        };

        items.push(item);
    }

    return items;
};

var x = makeArray();
// console.log(x); вывел общий массив, в котором в каждой итерации записана однаи та же функция

// x[5](); таким образом я вызываю функцию из 211 строки с номером итерации, равным 5. Если переменная-итератор задана через var, то 5 итерация будет равна 10, т.к. после исполнения все цикла, ячейка перезаписывает саму себя

// x[3]();
// x[7]();


                                                       // стрелочные функции


let fun = () => {
    console.log(this);
};

fun ();

//стрелочная функция анонимна. не сможем управлять обработчиками событий, если нам это нужно. эту функцию нельзя вызвать внутри себя

// let obj = {
//     number: 5,
//     sayNumber: function () {
//         let say = () => {
//             console.log (this);
//         };
//         say();
//     }
// };

// obj.sayNumber();

// Итак, стрелочная функция не имеет своего контекста. Т.е, контекстом вызова в данном случае будет контекст вызова ее родительской функции, т.е объект. 

let btn = document.querySelector('button'); 

btn.addEventListener('click', function() {
    let show = () => { 
        console.log(this);
    };
    show();
});

// т.е. в данном случае мы опять получили контекст вызова стрелочной функции как контекст вышестоящей функции



                                                        // параметры по умолчанию

function calcOrDouble (number, basis = 2) {
    // basis = basis || 2;
    // если пользователь задал basis, то он и подставляется в перемменную basis, если нет, то просто функция удваивает аргумент. Это пример формата ES5
    console.log(number*basis);
};

calcOrDouble(3, 5);
calcOrDouble(6);

//в формате ES6 мы прям в скобках ставим значение по умолчанию, т.е. то, которое автоматически будет приходить, если пользователь не задал basis

                                                        // classes

class Rectangle {
    constructor (height, width = 20) {
        this.heigth = height;
        this.width = width;
    }
    calcArea() {
        return this.heigth * this.width;
    }
}

const square = new Rectangle (10);

console.log (square.calcArea());


                                                   // spread-операторы

//данные операторы разворачивают массивы и превращают их в набор данных

let video = ['youtube', 'vimeo', 'sfaza'],
    blogs = ['wordpress', 'kfc', 'word of tanks'],
    internet = [...video, ...blogs, 'google chrome', 'yandex'];
    // если не постаавить перед переменной оператор-спред, то в в консоль мы виведим массив internet, в котором будет записанотолько лишь array вместо video и blogs

console.log (internet);    


function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
};

let numbers = [2, 5, 7];

log (...numbers);


                                                        //Homework

class Options {
    constructor (height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv () {
        let div = document.createElement('div');
        document.body.appendChild(div);
        
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;

        div.style.cssText = param;
		
    }
}
    

const newDiv = new Options (300, 350, "red", 14, "center");

newDiv.createDiv();

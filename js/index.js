// ======== htmel ic element vercnel u hed veradarcnel===== HTML
// let test = document.querySelectorAll(" p ");
// console.log(test[2].innerText);
//
// test.forEach((e)=>{
//     e.style.color = "red";
// })
//
// let out = document.querySelector(".out").innerHTML = test[2].innerText;

// function readNumber() {
//     let num = prompt("Enter a number please?", 0);
//     do{
//     num = prompt("grek tiv?", 0);
//     }while ( !isFinite(num) );
//
//
//     return alert(+num);
// }
// readNumber();

// sum = 0;
// let ked = document.querySelector(".out");
// let out = ""
// let flag = 10;
//
// while ( sum < 10 ){
//     let s = 0;
//     while (s <= 10){
//         if (flag < s){
//             out += "0";
//             alert(out);
//         }else {
//             out += "*";
//
//         }
//         s++;
//     }
//     flag--;
//     out += "<br>";
//     sum++;
// }
// ked.innerHTML = out;

// let test = document.querySelector(".test");
// let inf = 0;
// let ht= " ";
// while (inf < 10){
//     ht += `<div class="valod${inf}"> ${inf} </div>`;
//     inf++;
// }
// test.innerHTML =  ht;

// let w = 0;
// while (w < 10){
//     alert(w);
//     w++;
// }

// let str = 'Ослик Иа-Иа посмотрел на виадук Иа Иа';
//
// let target = 'Иа'; // цель поиска
//
// let pos = 0;
// while (true) {
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos == -1) break;
//
//     alert( `Найдено тут: ${foundPos}` );
//     pos = foundPos + 1; // продолжаем со следующей позиции
// };

// let str = "Inte132rfaceMMMMM";
//
// function z(n){
//     var newString = n.toLowerCase();
//     alert(newString);
// }
// z(str);

// let m = ["a","valod","hambal","jael","malod1"];
// // for (let i=0; i<m.length; i++){
// //     alert( m[i].codePointAt(0) );
// // }
// let b =0;
// while (b < m.length){
//     alert( m[b].codePointAt(0) );
//     b++;
// };

// function truncate(str, maxlength){
//     if (str.length >= maxlength){
//         str = str.substr(0, maxlength) + "...";
//         document.write(str);
//     }else if (str.length < maxlength){
//         document.write(str);
//     }
// }
// truncate("hdgaaaaaaaaaaaaaaav", 10);

// let n = "hi";
// n = n[1]+ "j";
// alert(n);

// let arry = ["a","valod","hambal","jael","malod1","Zealand","zzz","hrip"];
// let m=0;
// let x = "a";
//
//     let test = document.querySelector(".test");
//     let inner = "";
//     console.log(x);
//
//     while (m < arry.length) {
//         if (arry[m].indexOf(x) != -1) {
//             inner += `<div class="active">${arry[m]}</div>`;
//         }
//         m++;
//     }
//     test.innerHTML = inner;

// POISK JIVOI
// document.querySelector("#elastic").oninput = function (){
//     let val = this.value.trim();
//     let elastikItom = document.querySelectorAll(".elstic li");
//     if (val != ""){
//         elastikItom.forEach(function (elem){
//             if (elem.innerText.search(val) == -1){
//                 elem.classList.add("hide");
//                 elem.innerHTML = elem.innerText;
//             }else {
//                 elem.classList.remove("hide");
//                 let str = elem.innerText;
//                 elem.innerHTML = inserMak(str,elem.innerText.search(val),val.length );
//             }
//         });
//     }else {
//         elastikItom.forEach(function (elem){
//             elem.classList.remove("hide");
//             elem.innerHTML = elem.innerText;
//         });
//     }
// }
// function inserMak(string,pos,len){
//     return string.slice(0, pos) + '<mark>' + string.slice(pos, pos+len)+ '</mark>' + string.slice(pos+len);
// }

// masivi amboxj tver@ irae gumarvum
// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let sumFixedStart = 0;
//         for (let j = i; j < arr.length; j++) {
//             sumFixedStart += arr[j];
//             maxSum = Math.max(maxSum, sumFixedStart);
//         }
//     }
//     return maxSum;
// }
//
// alert( getMaxSubSum([100, -9, 99, 82 ,41]) ); // 100

// let arr = ["n", "s","n"];
//
// // начиная с индекса -1 (перед последним элементом)
// // удалить 0 элементов,
// // затем вставить числа 3 и 4
// arr.splice(-1, 0, "h","a");
// document.write( arr );

//concat
// let arr = [1, 2];
//
// let arrayLike = {
//     0: "что-то",
//     1: "ещё",
//     2:["nshan", "nshan"],
//     [Symbol.isConcatSpreadable]: true,
//     length: 4
// };
// document.write( arr.concat(arrayLike) );
// console.log( arr.concat(arrayLike) );

//forEach
// ["Bilbo", "Gandalf", "Nazgul"].forEach((a, z, x) => {
//     document.write(`${a} <br> ${z}  ${x} <br>`);
// });

// //find
// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
// ];
// let user = users.find(item => item.id == 1);
// document.write(user.name );

// //sort
// let arr = [ 1, 200, 2, 15 ];
// arr.sort(function(a, b) { return a - b; });
// alert(arr[arr.length-1]);
// let mecTiv= arr.sort( (a, b) => a - b );
// console.log(mecTiv[mecTiv.length-1]);

// методы split и join
// let n = "nshan ares";
// let a = n.split( " " ,2);
// document.write(a);
//
// let arry = ["H","e","l","o"];
// let m = arry.join("-");
// document.write(m)

//reduce/reduceRight
// let arry = [5,6,7,8,9];
// let a = arry.reduce(function (acum, curryValue, index,m){
//     console.log( "acum =" + acum );
//     console.log( "curryValue =" + curryValue);
//     console.log( "index =" + index);
//     console.log( "m =" + m);
//     return  acum + curryValue
// })
// console.log(a);
// let result = arry.reduce((sum, current) => sum + current);
// alert( result );

// reduce masivi mec tiv@
// let a = [-1, 2, -7, 5, 140, -3,];
// let d = a.reduce(function (acum, itms){
//     if (itms > acum){
//         acum = itms;
//     }
//     return acum;
// }, 0);
// console.log(d);


// // heracngume gcer@ bari mijiv --- 2 dzev ka
// let n = "-nshan ares -";
// let a = n.split( "" );
//
// let x = 0;
// let zod;
//
// while (x < a.length){
//      zod = a[x];
//      if (zod === "-"){
//          console.log(zod);
//      }else {
//          document.write(zod);
//      }
//     x++;
// }
//
// function camelize(str) {
//     return str
//         .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//         .map(
//             (word, index)=> index == 0 ? word : word[0] .toUpperCase() + word.slice(1)
//
//         )
//         .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
// }
// document.write(camelize(".my-long-word"));

// //masivi amena mec arjek@
// let a = [1,2,4,3];
//              min
// let m = Math.max().apply(null, a);
// alert(m);
// let m = Math.max(...a);
// alert(m);

//Перебираемые объекты
// let user = {
//     from:0,
//     to:10,
//     [Symbol.iterator](){
//         return{
//             conect: this.from -1,
//             last: this.to,
//             next(){
//                 this.conect += 1;
//                 return{
//                     done: this.conect > this.last,
//                     value: this.conect,
//                 }
//             }
//         }
//     }
// }
// for (let valod of user){
//     document.write(valod);
// }

//Перебираемые объекты urish dzev
// let range = {
//     from: 1,
//     to: 5,
// };
// range[Symbol.iterator] = function (){
//     return{
//         current: this.from,
//         last: this.to,
//         next(){
//             if (this.current <= this.last){
//                 return{done: false, value: this.current++} ;
//             }else {
//                 return{ done: true};
//             }
//         }
//     }
// }
// for (let num of range){
//     document.write(num);
// }

//Перебираемые объекты urish dzev
// let str = "Hello";
// let iterator = str[Symbol.iterator]();
//
// while (true) {
//     let result = iterator.next();
//     if (result.done) break;
//     alert(result.value); // выводит символы один за другим
// }

//Array.from
// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     length: 3,
//     2: "Valod",
// };
// let arr = Array.from(arrayLike); // (*)
//
// // for (let itm of arr){
//     document.write(arr);
// // }

//mec ev poqr tiv arry - i mejic MIJIN TIV
// let arry = [1,545,51,1,5,8];
//
// let m = Math.max(...arry);
// alert(m);
//
//
//

//havasar dasavorum sort
// var numbers = [4, 2, 5, 13, 3];
// numbers.sort(function(a, b) {
//     return a - b;
// });
// console.log(numbers);// [1, 2, 3, 4, 5]

// function f( n ){
//     let m = n.length / 2;
//     let z = m.toFixed(0) - 1;
//     console.log(n[z]);
// }
// f(numbers);

//mec ev poqr tiv arry - i mejic MIJIN TIV
// var arr = [1, 2, 3, 4, 5, 89,20, 6, 7, 8, 9, 10];
// var num = 0;
//
// function findBiggestNumbers(num) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > num) {
//             num = arr[i];
//         }
//     }
//     return num;
// }
//     console.log(findBiggestNumbers(num));
// var arr1 = [1, 2,0, -3, 4, 5, 80,20, 6, 709, 8, 9, 10,90];
// var number = 0;
// function f(arry){
//     for (var index = 0; index < arry.length; index++){
//         if(arry[index] > number){
//             console.log(arry[index]);
//             number = arry[index];
//         }else {
//             // console.log(arry[index]);
//         }
//     }
//     return number;
// }
// document.write(f(arr1));

// ==================================== map ===========================================

// let n = {
//     title:"name"
// }
//
// let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('1', 21);
// map.set('meat', 4);
// map.set(undefined, 41);
// map.set(n.title, ["2112","sjfhjsd",12,51]);
//
// for (let i = 0; i < map.get(n.title).length ; i++){
//     console.log(map.get(n.title)[i]);
// }
// console.log(n.title);

// set arry ic veradarcnume barer voronk chen krgnvum
// function unique(arr) {
//     let set = new Set(arr);
//     let arry_zona = [];
//     console.log(set);
//
//     // for (let user of set) {
//     //     arry_zona.push(user);
//     //     console.log(arry_zona);
//     // }
// }
//
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// alert( unique(values) );

// function aclean(arr) {
//     let obj = {};
//
//     for (let i = 0; i < arr.length; i++) {
//         let sorted = arr[i].toLowerCase().split("").sort().join("");
//         obj[sorted] = arr[i];
//     }
//
//     return Object.values(obj);
// }
//
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// document.write( aclean(arr) );


// let yus = {
//     name:"name1 ",
//     age:30,
// }
//
// let m = new Map();
// m.set(yus.name, "valod")
// .set(yus.age, "tarik");
//
// // for (let [key , value] of m){
// //     console.log(key , value);
// // }
//
// // let array =[...m];
//
// let array = Array.from(m);
// console.log(array);
//
// let arr = [];
//  for (let Yus in yus){
//      // console.log(Yus);
//      // console.log(yus[Yus]);
//      arr.push(yus[Yus]);
//  }
// console.log(...arr);

//=========================Object.keys, values, entries===============================


// let user = {
//     name : "valod",
//     age: 30,
//     boss: "web",
//
// };
// Object.defineProperty(user, "pasport", {
//     value: "ap0182142",
//     enumerable: false
// });
//
// console.log(user);
//
// let keys = Object.keys(user);
// console.log(keys);
//
//
// let values = Object.values(user);
// console.log(values);
//
// let entries = Object.entries(user);
// console.log(entries);
//
//
// entries.map(([index, itm])=>{
//     console.log(index, itm);
// })
//
// // zadanya
// function sumSalaries(salaries) {
//
//     let sum = 0;
//     for (let salary of Object.values(salaries)) {
//         sum += salary;
//     }
//
//     return sum; // 650
// }
//
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
//
// alert( sumSalaries(salaries) ); //

////////====================promise=================

// let a = 7;
//
// console.log(a);
// let b = new Promise(function (resolve, reject){
//     setTimeout(()=>{
//         resolve(a = 99);
//     },2000);
// });
//
// b.then(function (){
//     console.log(a);
// });

//===================register
// let go = document.getElementById("go");
// let name = document.getElementById("name");
// let Password = document.getElementById("password");
// let dublPassword = document.getElementById("dubl-password");
// let email = document.getElementById("email");
// let EElement = document.getElementById("EElement");
// let from = document.getElementById("from");
//
// let masages = [];
// from.addEventListener("submit", function(event){
//     event.preventDefault();
//     if (name.value === "" || name.value === " "){
//         masages[0] = "grek anun";
//     }
//     if (Password.value === dublPassword.value){
//         Password.style.borderColor= "#00e600";
//     }else {
//         Password.style.borderColor = "red";
//         masages.push("pasvord chist che");
//     }
//     if (masages.length > 0){
//         alert(masages.pop());
//     }
// });

//==================Деструктурирующее присваивание
//arajadrank1
// let user = { name: "John", years: 30 };
//
// let {name, years:age, isAdmin=false } = user;
//
// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin );


// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250,
//     "nshan": 3000,
// };
//
// function f(user){
//     let sum ;
//     let arry = [];
//     let arryValue = [];
//
//     for (const [key, value] of Object.entries(user)) {
//         console.log(`${key}: ${value}`);
//         arry.push(key, value);
//         arryValue.push( value);
//     }
//
//     let M = Math.max.apply(null, arryValue);
//     for (let index = 0 ; index < arry.length; index++){
//         if(arry[index] === M){
//             sum = arry[index-1];
//         }
//     }
//     return sum;
// }
//
// console.log(f(salaries));


//========================Дата и время new Date

// let arr = [];
// let click = document.querySelector("#clik");
// let chang = document.querySelector("#chang");
// // click.addEventListener("click", f);
// // chang.addEventListener("click", f);
//
// chang.addEventListener("click", f);
// click.addEventListener("click", f);
//
// function f(){
//     let m = new Date();
//     arr.push(m);
//     console.log(arr);
// }
//
// let zaa = [1,2,5,2,9,5];
// let sum = 0;
// let sd = [];
// function fn(e){
//
//     for (let i = 0; i < e.length; i++){
//         if(sum < e[i]){
//             sd.push(e[i]);
//             sum = e[i];
//             // console.log(sum);
//         }
//     }
//     console.log(sd[sd.length-1]);
// }
// // console.log(fn(zaa));
// fn(zaa);

// let a =Date.now(new Date());
// for (let index= 0; index< 100; index++){
//      console.log(index);
// }
// let b = Date.now(new Date());
//
// console.log(b - a);


// let Jan02_1970 = new Date(24 * 3600 * 1000);
// document.write( Jan02_1970 );
//
// let date = new Date("2017-01-26");
// document.write(date);
//
// let Masiv = [
//     "hunvar 1","petrvar 2","mart 3","april 4","mais 5","hunis 6","hulis 7","ogostos 8","sektember 9","hoqtember 10","noember 11","dektember 12",
// ];
//
// function mount({first = true}){
//     let curentDate = new Date();
//     let mounte = curentDate.getMonth();
//
//     return first ? `${Masiv[mounte]}` : `${mounte + 1}`;
// }
// console.log(mount({first: false}));
//
//
// let taim = new Date(2011, 11, 12, 2, 3, 4, 567);
// console.log(taim.getFullYear());
// console.log(taim.getMonth());
// console.log(taim.getDate());

// let nume = new Date(2012, 2, 20, 3,12,0,0);
// alert(nume);


// let dateaa = new Date(2012, 0, 3);
//
// function getWeekDay(dat){
//     let day = ["«ПН»", "«ВТ»", "«СР»", "«ЧТ»", "«ПТ»", "«СБ»", "«ВС»"];
//     return day[dat.getDay() - 1];
// }
// alert( getWeekDay(dateaa) );

// let dateshapat7 = new Date(2012, 0, 3);  // 3 января 2012 года
// let start = new Date();
//
// function getLocalDay(date){
//     // let dayArry = {};
//     // for (let i = 1; i <= 7; i++){
//     //     if (i === 7){
//     //         dayArry[0]= i;
//     //     }else {
//     //         dayArry[i]= i;
//     //     }
//     // }
//     // console.log(dayArry[date.getDay()]);
//
//     let day = date.getDay();
//     if (day === 0){
//         day = 7;
//     }
//     console.log(day);
// }
//
// getLocalDay(dateshapat7);
//
// let end = new Date();
//
// console.log(end - start);


// document.querySelector("#click_button").onclick = function () {
//     let start_data = document.querySelector("#start_date").value;
//     let ent_date = document.querySelector("#ent_date").value;
//     start_data = Date.parse(start_data);
//     ent_date = Date.parse(ent_date);
//     let data_aut = document.querySelector("#data_aut");
//
//     for (let i = start_data; i <= ent_date; i = i + 24 * 60 * 60 * 1000){
//         data_aut.innerHTML += new Date(i).toISOString().substr(0,10) + `${"<br>"}`;
//     }
//     // console.log(start_data);
// }



//===============JSON=========

// let room = {
//     number: 23
// };
//
// let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room // meetup ссылается на room
// };
//
// room.occupiedBy = meetup; // room ссылается на meetup
//
// alert( JSON.stringify(meetup, function replacer(key, value) {
//     console.log(`${key}: ${value}`);
//     return (key == 'occupiedBy') ? undefined : value;
// }));

// let user = {
//     name: "Василий Иванович",
//     age: 35
// };
//
// let Jsone = JSON.stringify(user);
// console.log(Jsone);
// let pars = JSON.parse(Jsone);
// console.log(pars);
// // varyant 2
// let user2 = JSON.parse(JSON.stringify(user));


// let room = {
//     number: 23
// };
//
// let meetup = {
//     title: "Совещание",
//     occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//     place: room
// };
//
// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;
//
// alert( JSON.stringify(meetup, function replacer(key, value) {
//     return (key != "" && value == meetup)? undefined : value;
// }));

// let count = 0;
// document.querySelector("#clickPlus").onclick = () =>{
//     count++;
//     localStorage.setItem("b1", count);
// }

// ======= Рекурсия и стек =======
// let a = 0;
// function rec(){
//     a += 0.1;
//     document.querySelector("#shouAnim").style.marginLeft =  a+"px";
//     if (a > 100){
//         return a=0;
//     }
//     setTimeout(rec,5);
// };
//
// document.querySelector("#shouClick").onclick = () =>{
//     rec();
// }

//------------------------
// function pow(x, n) {
//     if (n == 1) {
//         return x;
//     } else {
//         console.log(x , n);
//         return x * pow(x, n-1);
//     }
// }
// alert( pow(2, 3) ); // 8
//-----------------------------------------
// function sumTo(n) {
//     if (n == 1){
//         return n;
//     }else {
//         console.log(n)
//         return n + sumTo( n-1);
//     }
// }
// console.log( sumTo(4) );
//------------------------------------------

// let company = {
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//     development: {
//         sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//         internals: [{name: 'Jack', salary: 1300}],
//     }
// };
// function sumSalaries(department) {
//     if (Array.isArray(department)) {
//         return department.reduce((prev, current) => prev + current.salary, 0);
//     } else {
//         let sum = 0;
//         for (let subdep of Object.values(department)) {
//             sum += sumSalaries(subdep);
//         }
//         return sum;
//     }
// }
// console.log(sumSalaries(company));

//=================Замыкание===============


// function makeWorker() {
//     let name = "Pete";
//     return function() {
//         alert(name);
//     };
// }
// let name = "John";
//
// let work = makeWorker();
//
// // call it
// work();
// sartirovka usera---------------------
// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];
//
// function byField(field) {
//     return (a, b) => a[field] > b[field] ? 1 : -1;
// }
//
// users.sort(byField('name'));
// users.forEach(user => alert(user.name)); // Ann, John, Pete
//
// users.sort(byField('age'));
// users.forEach(user => alert(user.name)); // Pete, Ann, John

//=============Синтаксис "new Function"=================================
// let fun = new Function ('a', 'b', 'return a + b');
//
// alert(fun(1,2));

// =============== Планирование: setTimeout и setInterval ==============
//rekurcivni setTimeout

// function sayHi(phrase, who, ...v) {
//     console.log( phrase + ', ' + who +"..."+ v);
//     setTimeout(sayHi, 2000, phrase, who, ...v);
// };
// setTimeout(sayHi, 2000, "Привет", "Джон","balod","aaaaaa");


// function sayHi(sum){
//     console.log(sum);
//     let timeout = setTimeout(sayHi , 1000, ++sum);
//     if (sum === 6){
//         clearTimeout(timeout);
//     }
// }
// setTimeout(sayHi , 1000, 1);

//===============Декораторы и переадресация вызова, call/apply ======================

// let b1 = document.querySelector("#b-1");
// let b2 = document.querySelector("#b-2");
//
// // b1.onclick = test;
// // b2.onclick = test;
//
// function test(color, sum){
//     console.log(this);
//     console.log(sum);
//     this.style.background = color;
// }
// // b2.onclick = function (){
// //     test.apply(b1, ["red", 555]);
// // }
//
// let ashov = test.bind(b1, "orange", 7777);
// let b = test.bind(b2, "red", 5555);
//
// b2.onclick = ashov;
// b1.onclick = b;

//----tnain
// function delay(f, ms) {
//
//     return function() {
//         setTimeout(function (){
//             console.log(f);
//             alert(f);
//         }, ms);
//     };
//
// }
//
// let f1000 = delay("test", 1000);
// f1000();

// let fib = function fibanachi(n){
//      return n <= 1 ? n : fibanachi(n - 1) + fibanachi(n - 2);
// }
//
//
// let rec = function func(n){
//     return n !== 1 ? func(n-1) * n : n;
// }
//
// function logResautDeclareshn(f, fanqNam) {
//     return function (){
//         let result = f.apply(this, arguments);
//         console.log(`gumar@ kstacvi ${result}----- ${fanqNam}`);
//         return result;
//     }
// }
// function countClickDecoration(f, fancName){
//     let count = 0;
//     return function (){
//         count++;
//         console.log(`functian ashxatela ${count} -------- ${fancName}`);
//         let funcArg = f.apply(this, arguments);
//         return funcArg;
//     }
// }
//
// function timeDeqlaretion(f, funcName){
//     return function(){
//         let star = Date.now();
//         let fun = f.apply(this, arguments);
//         let end = Date.now() - star;
//         console.log(`${end} ${funcName} ${fun}`);
//         return fun;
//     }
// }
//
// function cashDecorator(f){
//     let cesh = {};
//     return function (n){
//         if (cesh[n] === undefined){
//             cesh[n] = f.apply(this, arguments);
//         }
//         console.log(cesh);
//         return cesh[n];
//     }
// }
//
// function argumentsDeclaration(f , ArgumentyNumber){
//     return function (){
//         let arh = arguments.length;
//         if (ArgumentyNumber !== arh){
//             console.warn(`argumenti ne sovpadayut ArgumentyNumber ${ArgumentyNumber}`);
//         }
//         return f.apply(this, arguments);
//     }
// }
//
// rec = argumentsDeclaration(rec, 1);
// rec = cashDecorator(rec);
// rec = logResautDeclareshn(rec, "bazmapatkum");
// rec = countClickDecoration(rec, "cani angame gorcacvel funqtian");
// rec = timeDeqlaretion(rec, "araga chap");
// // rec(5);
//
//
// fib = argumentsDeclaration(fib, 1);
// fib = cashDecorator(fib);
// fib = logResautDeclareshn(fib, "bazmapatkum fibanachi!!!");
// fib = countClickDecoration(fib, "cani angame gorcacvel funqtian fibanachi!!!");
// fib = timeDeqlaretion(fib, "araga chap fibanachi!!!");
//
// fib(7);

// function hello(){
//     console.log("hello", this);
// }
// const person={
//     name: "Vladilen",
//     age: 25,
//     seyHello: "hello",
//     seyHelloWindoc: hello.bind(document),
//     loginfo: function (fromtend, phone) {
//         console.group(`${this.name}`);
//         console.log(`name ${this.name} `);
//         console.log(`tarik ${this.age}`);
//         console.log(`${this.name}`);
//         console.log(`${fromtend} ${phone}`);
//         console.groupEnd("111");
//     }
// }
//
// let nshan= {
//     age: 24,
//     name: "nshan",
// }
//
// // person.loginfo.bind(nshan,"react", "098765152")();
// // person.loginfo.call(nshan,"react", "098765152");
// person.loginfo.apply(nshan,["react", "098765152"]);
//
//-------------------------------------------
// const arry = [1,2,3,4,5];

// Array.prototype.mautby = function (n){
//     return this.map(function (i){
//         console.log(i);
//         return i * n;
//     })
// };
// console.log(arry.mautby(2));


// ======================Флаги и дескрипторы свойств====================



// let user = {
//     name: "John"
//   };

//   let descriptor = Object.getOwnPropertyDescriptor(user, "name");

//   console.log( JSON.stringify(descriptor, null , 3) );


// const person = Object.create(
//     {
//         calAge() {
//             let zes =  1;
//             console.log("age :", this.berfYear - zes );
//         }
//     },
//     {
//         name:{
//             value: "vladilin",
//             writable: true,
//             enumerable: true,
//             configurable: false
//         },
//         berfYear:{
//             value: 1998,
//             writable: false,
//             enumerable: false,
//             configurable: false
//         },
//         age:{
//             get() {
//                 return new Date().getFullYear() - this.berfYear;
//             },
//             Set(value) {
//                 console.log("set" , value);
//             }
//         }
//     }
// );

// console.log(person);
// person.berfYear = 10;

// for(let key in person){
//     if(person.hasOwnProperty(key)){
//         console.log("key", key ,person[key]);
//     }
// }
// console.log(person.age);


//================ Свойства - геттеры и сеттеры=========================


// let user = {
//     name: "John",
//     surname: "Smith",
//     age: 30,

//     get fullName() {
//       return `${this.name} ${this.surname} ${this.age}`;
//     },

//     set fullName(value) {
//       [this.name, this.surname ,this.age ] = value.split(" ");
//     }
//   };

//   // set fullName запустится с данным значением
//   user.fullName = "Alice Cooper 10";


//   alert(user.name); // Alice
//   alert(user.surname); // Cooper
//   alert(user.age);



// let user = {
//     get name() {
//       return this._name;
//     },

//     set name(value) {
//       if (value.length < 4) {
//         alert("Имя слишком короткое, должно быть более 4 символов");
//         return;
//       }
//       this._name = value;
//     }
//   };

//   user.name = "Petea";

//   user.name = "";
//---------------------------------------------------------
// function User(name, birthday) {
//   this.name = name;
//   this.birthday = birthday;

//   // возраст рассчитывается из текущей даты и дня рождения
//   Object.defineProperty(this, "age", {
//     get() {
//       let todayYear = new Date().getFullYear();
//       return todayYear - this.birthday.getFullYear();
//     }
//   });
// }

// let john = new User("John", new Date(1992, 6, 1));

// alert( john.birthday ); // доступен как день рождения
// alert( john.age );

//================= Прототипное наследование =======================
// const person = new Object({
//   name: "nahan",
//   age: 30,
//   greet: function(){
//     console.log("greet");
//   }
// });


// Object.prototype.sheyHello = function (){
//   console.log("sheyHello");
// }

// const lena = Object.create(person);
// lena.name = "sasha";

// let sum =  new String("nshan");

// ---------------------------------------------------------------------------

// function Auto(name, age){
//   this.name = name;
//   this.age = age;
//   if (this.name.length <= 5){
//     this.name =  this.name + " " + "nshan";
//     alert(this.name);
//   }
// };

// Auto.prototype.drive = function(){
//   if (this.age == 0){
//     return "tarik@ havasarvele 0 - i";
//   }else{
//     return this.age = this.age - 10;
//   }
// }

// let bmw = new Auto("bmw", 30);
// let nisan = new Auto("nisan", 40);

//-------------------------------------------------------------------------

// let u = {
//   firstName: "111",
//   valod: "22222"
// }

// let animal = {
//   eats: true,
//   __proto__: u
// };

// let rabbit = {
//   jumps: true,
//   name: "nshan",
//   __proto__: animal
// };

// for(let prop in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(prop);
//   console.log(isOwn);

//   if (isOwn) {
//     alert(`Our: ${prop} value ${rabbit[prop]}`); // Our: jumps
//   } else {
//     alert(`Inherited: ${prop} value elsi ${rabbit[prop]}`); // Inherited: eats
//   }
// }

//-----------------------------------------------------------------------------------

// let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true
// };

// alert( rabbit.jumps ); // ? (1)

// delete rabbit.jumps;

// alert( rabbit.jumps ); // ? (2)

// delete animal.jumps;

// alert( rabbit.jumps ); // ? (3)

//----------------------------------------------------------------------------

// let hamster = {
//   stomach: [],
//   eat(food) {
//     // присвоение значения this.stomach вместо вызова this.stomach.push
//     // this.stomach = [food];
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//    __proto__: hamster,
//    stomach: []
// };

// let lazy = {
//   __proto__: hamster,
//   stomach: []
// };

// // Шустрый хомяк нашёл еду
// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// // Живот ленивого хомяка пуст
// alert( lazy.stomach ); // <ничего>

// -------------------------------------------------------------------------

// let ns = {
//   end: function(e){
//       this.arry.push(e);
//       alert(this.nsm);
//   }
// }

// let nshan = {
//   __proto__: ns,
//   arry: [],
//   nsm: "nshan"
// }

// let nshan1 = {
//   __proto__: ns,
//   arry: [],
//   nsm: "nshan"
// }
// nshan.end("aaapple");

// alert(nshan.arry);
// alert(nshan1.arry);

//==============================F.prototype=========================

// function Rabbit(){};
// let Rapit = new Rabbit();

// alert(Rapit.constructor == Rabbit);

//----------------------------------------------------------
// function Rabbit(name) {
//   this.name = name;
//   alert(name);
// }

// let rabbit = new Rabbit("White Rabbit");

// let rabbit2 = new rabbit.constructor("Black Rabbit2222");

// let rabbit3 = new rabbit2.constructor("Black Rabbit33333");

//------------------------------------------------------------------

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete Rabbit.prototype.eats;

// alert( rabbit.eats ); // undefined

//-------------------------------------------------------------

// let a = [1,2,3];

// alert(a.__proto__ === Array.prototype);

// console.dir([1,2,3]);

//-------------------------------------------------------------------

// let obj = {
//     0: "Hello",
//     1: "world!",
//     2: "nshan",
//     length: 3,
//   };

//   obj.join = Array.prototype.join;
//   console.log(obj.join());
//   alert( obj.join() ); // Hello,world!
//--------------------------------------------------------------

// Object.prototype.defer = function(){
//     // let f = this;
//     // setTimeout(f , n);
//     console.log(this);
// }

// let mmm = {
//     name: "nshan"
// }
// mmm.defer();

// function f() {
//     alert("Hello!");
// }

// f.defer(1000);

//------------------------------------------------------------

// String.prototype.repeat = function(n) {
//     return new Array(n + 1).join(this);
//   };

// alert("m1".repeat(3));

//------------------------------------------------------------

// let ster = "nshan lav txa";
// let nevSter = ster.split("").reverse().join("");

// console.log(nevSter);

//---------------------------------------------------------------
//=======================Методы прототипов, объекты без свойства __proto__===============================
// let animal = {
//     eats: true
//   };

//   let rabbit = Object.create(animal, {
//     jumps: {
//       value: true
//     }
//   });

//   console.log(rabbit.jumps);

//------------------------------------------------------


// let chineseDictionary = Object.create(null);
// chineseDictionary.hello = "1";
// chineseDictionary.bye = "21212";

// let user = {};
// user.age= 30;
// user.nshan= "nnn";
// let arre = [10,2,3,5];

// alert(Object.keys(user));

//--------------------------------------------------------

// let user = {
//     0: "nshan",
//     1: "valod",
//     length: 2,
//   };

//   user.join = Array.prototype.join;

//   alert( user.join(","));

//   console.log(user);


//------------------------------------------------------------

//===========================Классы===============================


// const Animal = function (options) {
//     this.name = options.name;
//     this.color = options.color;
// };
//
//
// Animal.prototype.voise = function(){
//    console.log("base voise", this.name);
// };
//
//
// let dog = new Animal({name: "rex", color: "#fff"});
// console.log(dog);
//
//
// const Cat = function(options) {
//     Animal.apply(this, arguments);
//     this.hasTail = options.hasTail;
//     this.type = "cat";
// };
//
// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;
//
// Animal.prototype.voise = function(){
//     console.log("this sound goes from: ", this.name);
// };
//
// Cat.prototype.voise = function(){
//     Animal.prototype.voise.apply(this, arguments);
//     console.log("this Cat vois :" + this.name);
// };
//
//
// let cat = new  Cat({name: "murzik", color: "#000", hasTail: true});
// console.log(cat);

//---------------------------------Etmaskript6-----------------------------------------------

// class Animal {
//     constructor(options) {
//         this.name = options.name;
//         this.color = options.color;
//     }
//     voise(){
//         console.log("etmaskript 6:", this.name);
//     }
// }
//
// const dog = new Animal({name:"rex", color:"#fff"});
//
// class Cat extends Animal {
//     constructor(options){
//         super(options);
//         this.hasTail = options.hasTail;
//         this.type = "cat";
//     }
//     voise() {
//         super.voise();
//         console.log("cat vois:", this.name);
//     }
// }
//
// let cat = new Cat({name: "murzik", color: "#000", hasTail: true});
// console.log(dog);
// console.log(cat);
//
// //Examples---------------------------------------------------------------------
//
// Object.prototype.print = function(){
//     console.log("I am object", this);
// };
//
// cat.print();
//
//
// Array.prototype.mayAndLog = function() {
//     console.log("arguments to map", this);
//     return this.map.apply(this, arguments);
// };
//
// console.log([1,2,3,4].mayAndLog(x => x * 2));
//
//
// String.prototype.tagName = function (tag) {
//     return `<${tag}>${this}</${tag}>`;
// };
// console.log("eminem".tagName("div"));

//--------------------------------------------------------------------------
// Object.prototype.RevString = function () {
//     if (this.__proto__ === String.prototype) {
//         alert(this.split("").reverse().join(""));
//     }
//     if (this.__proto__ === Array.prototype) {
//         alert(this.reverse());
//     }
//     if (this.__proto__ === Boolean.prototype) {
//         alert(this);
//     }
//
// };
//
// let mstr = "nshan";
// let masiv = [1, 23, 354, 65, 5654, 4545, 41231, "nshan"];
// let bul = false;
// let sort;
//
// sort = mstr;
// sort.RevString();
// sort = masiv;
// sort.RevString();
// sort = bul;
// sort.RevString();

//-----------------------------------------------------------------

// class User {
//     constructor(name) {
//         // вызывает сеттер
//         this.name = name;
//     }
//
//     get name() {
//         return this._name;
//     }
//     set name(value) {
//         if (value.length < 4) {
//             console.log("Имя слишком короткое.", value);
//             return;
//         }
//         this._name = value;
//     }
// }
//
// let user = new User("Иван");
// console.log(user.name); // Иван
// user = new User("");

//---------------------------------------------------------------
// class Clock{
//     constructor({template}){
//         this.template = template;
//     }
//
//     render(){
//         let date = new Date();
//
//         let hours = date.getHours();
//         if (hours < 10){hours = "0" + hours};
//         let mins = date.getMinutes();
//         if (mins < 10){mins = "0" + mins};
//         let secs = date.getSeconds();
//         if (secs < 10){secs = "0" + secs};
//
//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//
//         console.log(output);
//         // return output;
//     }
//     stop(){
//         clearInterval(this.timer);
//     }
//     start(){
//         // this.render();
//          this.timer = setInterval(()=> this.render(), 1000);
//     }
//
// }
// let clock = new Clock({template: 'h:m:s'});
// // clock.start();
//----------------------------

// veradarnal das 66 in u noric katarel tnain ashxatank@

// class Clock {
//     constructor({template}){
//         this.template = template;
//     }
//     reduce(){
//         let date = new Date();
//
//         let hours = date.getHours();
//         if (10 > hours){hours = "0" + hours};
//
//         let min = date.getMinutes();
//         if (10 > min){min = "0" + min};
//
//         let secunt = date.getSeconds();
//         if (10 > secunt){secunt = "0" + secunt};
//
//         let output = this.template
//             .replace("h", hours)
//             .replace("m", min)
//             .replace("s", secunt);
//
//         console.log(output);
//     }
//     stop(){
//          clearInterval(this.timer);
//     }
//     start(){
//         this.timer = setInterval(()=> {this.reduce()}, 1000);
//     }
// }
//
// let clock = new Clock({template:'h:m:s'});



//===========Наследование классов========================================================


// class Clock {
//     constructor({ template }) {
//         this.template = template;
//     }
//
//     render() {
//         let date = new Date();
//
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
//
//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//
//         console.log(output);
//     }
//     stop() {
//         clearInterval(this.timer);
//     }
// }

//=================Статические свойства и методы ===========================

// class Article {
//     constructor(title, date) {
//         this.title = title;
//         this.date = date;
//     }
//
//     static compare(articleA, articleB) {
//         return articleA.date - articleB.date;
//
//     }
// }
//
// // использование
// let articles = [
//     new Article("HTML", new Date(2022, 1, 1)),
//     new Article("CSS", new Date(2020, 0, 1)),
//     new Article("Java", new Date(2016, 11, 1)),
//     new Article("nshan", new Date(2015, 12, 1)),
// ];
//
// articles.sort(Article.compare);
// alert( articles[0].title );



// let unsort = [4,3,1,2,5];
//
// let sorting = [...unsort].sort((a, b)=>{
//     // console.log(b);
//     // console.log(b);
//    return  a - b;
// });
// console.log({...sorting});




// class ClasTest {
//     constructor(str, numbe){
//         this.str = str;
//         this.numbe = numbe;
//     }
//     static testF(A, B){
//         return A.numbe - B.numbe;
//     }
// }
//
// let ar = [
//     new ClasTest("nshan", new Date(1998)),
//     new ClasTest("Sasha", new Date(1996)),
//     new ClasTest("valod", new Date(1995))
// ];
//
// let m = ar.sort(ClasTest.testF);
// alert(m[0].str + "||" + m[0].numbe);

//-------------------------------------------------------

// class Article {
//     constructor(title, date) {
//         this.title = title;
//         this.date = date;
//     }
//     static createTodays() {
//         return  new this("Nshan Antonyan", new Date());
//     }
// }
//
// let article  =  Article.createTodays().title;
//
// alert(article);

//-----------------------------------------------------------------------


// class Animal {
//
//     constructor(name, speed) {
//         this.speed = speed;
//         this.name = name;
//     }
//
//     run(speed = 0) {
//         this.speed += speed;
//         alert(`${this.name} бежит со скоростью ${this.speed}.`);
//     }
//
//     static compare(animalA, animalB) {
//         return animalA.speed - animalB.speed;
//     }
//
// }
//
// // Наследует от Animal
// class Rabbit extends Animal {
//     hide() {
//         alert(`${this.name} прячется!`);
//     }
// }
//
// let rabbits = [
//     new Rabbit("Белый кролик", 10),
//     new Rabbit("Чёрный кролик", 5)
// ];
//
// rabbits.sort(Rabbit.compare);
//
// rabbits[0].run();

//-------------------------------------------------------------


// class Rabbit extends Object {
//     constructor(name) {
//         super();
//         this.name = name;
//     }
// }
//
// let rabbit = new Rabbit("Кроль");
//
// alert(rabbit.hasOwnProperty('name'));

//-----------------------------------------------------------

// class Index{
//     static countUser = 0;
//     constructor(name, age) {
//         Index.countUser++;
//         this.name = name;
//         this.age = age;
//     }
//     static indexA(){
//         return new this(name, age);
//     }
// }
//
// class Redu extends Index{
//     constructor(name, age) {
//         super(name, age);
//     }
// }
//
//
//
// let m = new Redu("nsha","30");
//
// console.log(m);
//
// console.log(Redu.countUser);
//-----------------------------------------------------------

// class Users {
//     // static countUser = 0;
//     constructor(name, old) {
//         Users.countUser++;
//         this.name = name;
//         this.old = old;
//     }
//     getName(){return name;}
//
//     static comproeOld(user1, user2){
//         return user1.old == user2.old;
//     }
// }
// Users.countUser = 0;
//
// class Admin extends Users{
//     constructor(name, old, login, psv) {
//         super(name, old);
//         this.login = login;
//         this.psv = psv;
//     }
// }
// let u1 = new Users("Mxial", 19);
// let u2 = new Admin("Mxial", 19, "aaa", "0123");
//
//
// console.log(Users.countUser);
// console.log( Users.comproeOld(u1, u2) );
//--------------------------------------------------------------------
//========Приватные и защищённые методы и свойства================================
// class User{
//     #test = "nsha";
//     funk(){
//          return  this.#test;
//     }
//     get name(){
//         return _name;
//     }
//     set name(_name){
//         return _name;
//     }
// }
//
// let user = new User();
// console.log(user.name("vaodia"));
//
// class User2 extends User{
//
// }
//
// let user2 = new User2();
// console.log(user2.funk());
//---------------------------------------------------------------
// class CoffeeMachine {
//     _waterAmount = 0;
//     set waterAmount(value){
//         if (value < 0) throw new Error("Отрицательное количество воды");
//         this._waterAmount = value;
//     }
//     get waterAmount(){
//         this._pover = pover;
//     }
//
//     constructor(pover) {
//         this.pover = pover;
//     }
// }
// let coffeeMachine = new CoffeeMachine(100);
// coffeeMachine.waterAmount = 10;
//----------------------------------------------------------------

// class CoffeeMachine {
//
//     constructor(power) {
//         this._power = power;
//     }
//
//     get power() {
//         return this._power;
//     }
// }
//
// // создаём кофеварку
// let coffeeMachine = new CoffeeMachine(100);
//
// alert(`Мощность: ${coffeeMachine.power}W`); // Мощность: 100W
//
// coffeeMachine.power = 25;
//---------------------------------------------------------------
// class CoffeeMachine {
//
//     #waterAmount = 0;
//
//     get waterAmount() {
//         return this.#waterAmount;
//     }
//
//     set waterAmount(value) {
//         if (value < 0) throw new Error("Отрицательный уровень воды");
//         this.#waterAmount = value;
//         alert(this.#waterAmount);
//     }
// }
//
// let machine = new CoffeeMachine();
//
// machine.waterAmount = 5;
//
// class MegaCoffeeMachine extends CoffeeMachine {
//     method() {
//         console.log(this.waterAmount);
//     }
// }
//
// let m = new MegaCoffeeMachine();
// m.method();

//===========Расширение встроенных классов=================================
// class PoverArry extends Array{
//     isEmpty(){
//         return this.length === 0 ;
//     }
// }
//
// let arr = new PoverArry(1, 2, 5, 10, 50);
// console.log(arr);
// alert(arr.isEmpty());
//
// let filteredArr = arr.filter(item => item >= 10);
// alert(filteredArr);
// alert(filteredArr.isEmpty());
//-------------------------------------------------------------------------

// class PowerArray extends Array {
//     isEmpty() {
//         return this.length === 0;
//     }
//
//     static get [Symbol.species]() {
//         return Array;
//     }
// }
//
// let arr = new PowerArray(1, 2, 5, 10, 50);
// alert(arr.isEmpty()); // false
//
// let filteredArr = arr.filter(item => item >= 10);
// console.log(filteredArr);
//
// alert(filteredArr);
//------------------------------------------------------------------------------
//===============Проверка класса: "instanceof"====================================

// let user = {
//     [Symbol.toStringTag]: "User1111"
// };
//
// alert( {}.toString.call(user) ); // [object User]


// toStringTag для браузерного объекта и класса
// alert( window[Symbol.toStringTag]); // window
// alert( XMLHttpRequest.prototype[Symbol.toStringTag] ); // XMLHttpRequest
//
// alert( {}.toString.call(window) ); // [object Window]
// alert( {}.toString.call(new XMLHttpRequest()) ); // [object XMLHttpRequest]

// let arr = true;
//
// console.log({}.toString.call(arr));
//=======================Примеси================================
// let sayMixin = {
//     sayHi() {
//         // вызываем метод родителя
//         alert(`Привет, ${this.name}`); // (*)
//     },
//     sayBye() {
//         alert(`Пока, ${this.name}`); // (*)
//     }
// };
//
// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }
// Object.assign(User.prototype, sayMixin);
//
// new User("valod").sayHi();
//---------------------------------------------------------------------

// let sayMixin = {
//     say(phrase) {
//         alert(phrase);
//     }
// }
// let sayHiMixin = {
//     __proto__:sayMixin,
//     sayHi(){
//         super.say(`privet ${this.name}`);
//     },
//     sayBay(){
//         super.say(`poka ${this.name}`);
//     }
// }
// class User{
//     constructor(name) {
//         this.name = name;
//     }
// }
//
// Object.assign(User.prototype, sayHiMixin);
//
// new User("nshan").sayHi();
//---------------------------------------------------------------------
//======================Обработка ошибок, "try..catch"============================

// let a = 10;
// try {
//     alert('Начало блока try1');  // (1) <--
//     alert('Конец блока try2');
// } catch (err) {
//     console.log(err);
//     console.log("aystex ka error");
// }
//--------------------------------------------------------------------------

// let json =  "{ некорректный JSON }";
// try {
//     let user = JSON.parse(json);
//     alert(user.name);
// }catch (e){
//     console.log(e);
// }
//--------------------------------------------------------------------------

// function f() {
//     try {
//         alert('начало');
//         throw new Error("ошибка");
//     } catch (e) {
//         console.log(e);
//         if("не могу обработать ошибку") {
//             throw e;
//         }
//     } finally {
//         alert('очистка!');
//     }
// }
// f();

//--------------------------------------------------------------

// let Flsent = false;
// try {
//     if (!Flsent){
//         Flsent = true;
//     }
// }catch (error){
//     console.log("oshibka obrabotki zaprosa");
// }finally {
//     Flsent = false;
// }
// console.log(Flsent);
//--------------------------------------------------------------

// class ValidationError extends Error{
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }
// function test(){
//     throw new ValidationError("ups!!!!!!!");
// }
//
// try {
//     test();
// }catch (err){
//     console.log(err.message);
//     console.log(err.name);
//     console.log(err.stack);
// }
//------------------------------------------------------------
// class FormatError extends SyntaxError{
//     constructor(message) {
//         super(message);
//         this.name = "FormatError";
//     }
// }
//
// let err = new FormatError("ошибка форматирования");
//
// console.log( err.message ); // ошибка форматирования
// console.log( err.name ); // FormatError
// console.log( err.stack ); // stack
//
// console.log( err instanceof FormatError ); // true
// console.log( err instanceof SyntaxError ); // true (потому что наследует от SyntaxError)
//--------------------------------------------------------------------------------
//=====================Промисы, async/await======================
//=====================Введение: колбэки=========================
// sortavorum ciklerov
// let arr = [
// 	{name: "alur", gin: 10},
// 	{name: "bribc", gin: 20},
// 	{name: "kat", gin: 40},
// 	{name: "vosp", gin: 30},
// ];
//
// function hashvark(){
// 	for (let i = 0; i<arr.length; i++){
// 		for (let j = i+1; j <arr.length; j++){
// 			if (arr[i].gin > arr[j].gin){
// 				const sum = arr[i];
// 				arr[i] = arr[j];
// 				arr[j] = sum;
// 			}
// 		}
// 	}
//
// }
// hashvark();
// console.log(arr);


// function go() {
//     showCircle(150, 150, 100, div => {
//         div.classList.add('message-ball');
//         div.append("Hello, world!");
//     });
// }
//
// function showCircle(cx, cy, radius, callback) {
//     let div = document.createElement('div');
//     div.style.width = 0;
//     div.style.height = 0;
//     div.style.left = cx + 'px';
//     div.style.top = cy + 'px';
//     div.className = 'circle';
//     document.body.append(div);
//
//     setTimeout(() => {
//         div.style.width = radius * 2 + 'px';
//         div.style.height = radius * 2 + 'px';
//         div.style.background = "green";
//
//         div.addEventListener('transitionend', function handler() {
//             div.removeEventListener('transitionend', handler);
//             callback(div);
//             console.log(div);
//             console.log(callback);
//         });
//     });
// }
// //----------------------------------------------------------------------------------------
// let raznzit = document.querySelector(".raznzit");
// raznzit.addEventListener("mouseover",()=>goFank());
//
// function goFank(){
//     transit(
//         raznzit=>{
//             raznzit.style.color= "red";
//             raznzit.innerHTML = "nshan";
//             raznzit.classList.add('message-ball');
//             raznzit.append("Hello, world!");
//         }
//     );
// }
//
// function transit(callback){
//         raznzit = document.createElement('div');
//         raznzit.className = 'raznzit';
//         document.body.append(raznzit);
//     setTimeout(() => {
//         raznzit.style.width = 200+"px";
//         raznzit.style.height = 200+"px";
//         raznzit.style.position= "absolute";
//
//         setTimeout(()=>{callback(raznzit);},2000);
//     });
//
// }

// ================= Промисы =================================

// function f(val){
//     return  new Promise(function(resolve, reject) {
//         setTimeout(()=>{
//             resolve(val + 8);
//             // reject("vay vay");
//         },2000);
//     });
// }
//
//
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(()=>{
//         resolve(8);
//         // reject("vay vay");
//     },2000);
// });
//
// promise.then(function (e){
//     return e + 1;
// }).then(function (e){
//    return f(e);
// }).then(function (e){
//     console.log(e);
// }).catch(function (eror){
//     console.log(eror);
// });

// promise.catch(function (e){
//    console.log(e);
// });

//-------------------------------tnayin ashxatank-----------
// function delay(ms) {
//     // ваш код
//     return new Promise(function (resolve, reject){
//         setTimeout(resolve, ms);
//     })
// }
//
// delay(3000).then(() => alert('выполнилось через 3 секунды'));
//-------------------------------tnayin ashxatank----------------
//==========================Promise API =========================

// Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/todos/1"), // 1
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//     new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then(a=>{
//     return a[0].json();
// }).then(tabl =>{
//     console.log(tabl);
// });

// ==================Async/await ==========================
// function f1() {
//     return new Promise(function (resolve, reject){
//         fetch("https://jsonplaceholder.typicode.com/todos/1")
//             .then(function (res){
//                 return res.json();
//             })
//             .then(function (res){
//                 resolve(res);
//             });
//     })
//
// }
//
// async function f() {
//     let sum = await f1();
//     return sum.id + 10;
// }
//
// f().then(function (result){
//     console.log(result);
// }).catch(function (e){
//     console.log(e);
// });

//---------------------------------------------------------------

// async function f(){
//     let result = await fetch("https://jsonplaceholder.typicode.com/todos/",{
//         method: "GET",
//     });
//     return await result.json();
// }
//
// // f().then(data =>{
// //     console.log(data);
// // });
//
// async function f2(){
//     console.log(await f());
// }
// f2();

//==============================================================================================

//masivi mec tiv@
// let arr = [0,1,2,30,4,5,6];
//
//
// function f(arr) {
//     let sum = arr[0];
//     for (let i = 0; i < arr.length; i++){
//         if (sum < arr[i]){
//              sum = arr[i];
//         }
//     }
// }
// console.log(f(arr));

// masivi sortavorum
// let arr = [0,1,2,30,4,5,6];
//
// function f(arr) {
//     for (let i = 0; i<arr.length; i++){
//         for (let j = i; j<arr.length ; j++){
//             if (arr[i] > arr[j]){
//                 [arr[i], arr[j]] = [arr[j], arr[i]];
//             }
//         }
//     }
//     console.log(arr);
// }
// f(arr);

// ========================reduce======================
// let arr = [1,2,-30,4,5,6];
// let sum = 0;
//
// function reduce(arr) {
//     return arr.reduce(function (prev, itme , index) {
//         // console.log(prev, "prev");
//         // console.log(itme, "itme");
//         // console.log(index, "index");
//
//         //tveri @ndhanur gumar-------
//         //  sum += itme;
//         //tveri @ndhanur gumari verj--------
//
//         //---mec u pokr tver--
//         // if (prev < itme) {
//         //     return itme;
//         // } else {
//         //     return prev;
//         // }
//         //---mec u pokr tveri-verj
//
//         // if (prev[0] < itme) {
//         //     return [itme, index];
//         // } else {
//         //     return prev;
//         // }
//     },[0, arr[0]]);
// }
//
// // reduce(arr);
// // console.log(reduce(arr));
// // console.log(sum);

//-----------------------------

// let a = [[123],[345],[567]];
// let sum= [];
//
// let b = a.reduce(function (prev, itme , index) {
//     // sum.push(...itme);
//     // return sum;
//     //-----0)----/|\-------
//     return prev.concat(itme);
// });
// console.log(b);

//=======================api ====================

// let arr = [];
//
// async function api() {
//     return fetch("https://jsonplaceholder.typicode.com/todos/");
// }
//
// api().then(function (data){
//     return data.json();
// }).then((data)=>{
//     // console.log(data);
//     for (let i = 0; i< data.length; i++){
//         arr.push(data[i]);
//     }
//     console.log(...arr);
// });
//
//
// async function apiDelete(id, newPublication) {
//     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
//         method:"PUT",
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(newPublication)
//     })
//         .then(response => response.json())
//         .then(function (json){
//             console.log(json);
//         } )
// }
// apiDelete( 1,{"title": "valod"});


//===================rekursia===================
// function prw(x, n){
//     if (n === 1){
//         return x;
//     }else {
//         console.log(x, "prw(x, n - 1)" );
//         return x * prw(x, n - 1);
//     }
// }
// console.log(prw(2,4));

// let company = {
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//     development: {
//         sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//         internals: [{name: 'Jack', salary: 1300}],
//         aaaa: [{name: 'Jaaack', salary: 13000}, {name: "nnnn", salary: 100}],
//     }
// };
//
// function sumSalaries(department) {
//     if (Array.isArray(department)) {
//         return department.reduce((prev, current) => prev + current.salary, 0);
//     } else {
//         let sum = 0;
//         for (let subdep of Object.values(department)) {
//             sum += sumSalaries(subdep);
//         }
//         return sum;
//     }
// }
//
// console.log(sumSalaries(company));

// ====================== WeakMap и WeakSet=============================


// let weakmap = new Map();
//
// let deiv = {name: "deiv"};
//
// weakmap.set(deiv, "10");
//
// deiv = null;
//
// console.log(weakmap.values());
// console.log(weakmap.keys());
//
// for (let v of weakmap){
//     console.log(v);
// }


//==============================Генераторы ====================================
// function* gen(n = 100) {
//     let arr = [];
//     for (let i = 0; i < n; i++) {
//         arr.push(i);
//     }
//     for (let i = 0; i < n; i++) {
//         let random = Math.floor(Math.random() * arr.length);
//         let randomEl = arr[random];
//         arr.splice(random, 1);
//         yield randomEl;
//     }
//
// }
//
// for (let value of gen(10)) {
//     console.log(value);
// }

//==============================Асинхронные итераторы и генераторы ====================================



//=========================revers string==========

function stringRevers(str) {
    return str.split("").reverse().join("") === str;
}

console.log(stringRevers("baba"));








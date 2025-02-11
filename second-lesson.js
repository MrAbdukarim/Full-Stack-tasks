// let a = 100, b = 200
//
// document.write(`Uning perimeteri: ${2 * (a + b)}`)
// document.write(`\n\nUning Yuzi: ${a * b}`)


// let w = "200px"
// let h = "100px"
//
// let perem = 2 * (parseFloat(w) + parseFloat(h))
// let yuzi = (parseFloat(w) * parseFloat(h))
// console.log(`${perem} ${yuzi}`)


// let uzunlik = document.querySelector('div').style.width
// let balandlik = document.querySelector('div').style.height
// let perem = 2 * (parseFloat(uzunlik) + parseFloat(balandlik))
// let yuzi = parseFloat(balandlik) * parseFloat(balandlik)
//
// console.log(`${balandlik} - ${yuzi}`)


// let num = 47
// num += 7
// num -= 18
// num *= 10
// num /= 15
// console.log(num)


// let a = 1
// // console.log(++a) //2
// console.log(a++) //1


// let name = prompt("What is your name?");
// alert(`Your name: ${name}`);


// let a = prompt('A?')
// let b = prompt('B?')
// document.write(a + b)
// document.write(Number(a) + Number(b))


// document.write(`<input type="text">`)
// document.write("<input type=" + "text" + ">") // React


// document.write(`
// 24 soat: ${24 * 60 * 60}
// 30 soat: ${30 * 60 * 60}
// 1 yil: ${365 * 24 * 60 * 60}
// `)


// let arr = ['a', 'b', 'c'];
// arr[0] = '!';
// console.log(arr);


// let lst = ["Ali", "Umar", "Alisher"]
// lst[0] = "Alimardon"
// console.log(lst)

// // Homeworks
// // Kod raqamlar yig'indisini topishi kerak:
// let num1 = 1;
// let num2 = 2;
// console.log("Sum: " + (num1 + num2));


// // Kod raqamlar yig'indisini topishi kerak:
// let a = 1;
// let b = 2;
// console.log(a + b);


// // Kod raqamning raqamlari yig'indisini topishi kerak:
// let num = '123';
// let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
// console.log(sum);


// //Kod raqamning birinchi raqamini chiqarishi kerak:
// let num = "123";
// console.log(num[0]);


// // Kod raqamni 1konsolga chop etishi kerak edi, lekin u chop etadi 0:
// let a = 0;
// console.log(++a);


// //Kod raqamdagi raqamlar sonini chiqarishi kerak:
// let num = "123";
// console.log(num.length);
//
// // Yoki
// // https://stackoverflow.com/questions/10952615/how-can-i-find-the-length-of-a-number
// let x = 1234567;
// console.log(x.toString().length)


// //Kod kuniga soniyalar sonini olishi kerak:
// let a = 24 * (60 * 60);
// console.log(a);


// // Kod raqamdagi raqamlar sonini chiqarishi kerak:
// let num = 123;
// let str = String(num);
// console.log(str.length);


// //Kod raqamning oxirgi raqamini chiqarishi kerak:
// let num = 123;
// let str = String(num);
// console.log(str[str.length - 1]);


// // Kod raqamdagi raqamlar sonini chiqarishi kerak:
// let num = 123;
// let str = String(num);
// console.log(str.length);


//Kod raqamning oxirgi raqamini chiqarishi kerak:
// let num = 123;
// let str = String(num);
// console.log(str[str.length - 1]);


// //Kod raqamlar yig'indisini topishi kerak:
// let a = '123';
// let b = '456';
// let s = Number(a) + Number(b);
// console.log(s);


// // Kod raqamlar yig'indisini topishi kerak:
// let aaa = 1;
// let bbb = 2;
// let ccc = 3;
// console.log(aaa + bbb + ccc);


// /* rDoira radiusi bo'lgan o'zgaruvchi berilgan bo'lsin .
//      Tegishli formuladan foydalanib, aylananing maydonini toping va uni o'zgaruvchiga yozing s.
//      Ushbu o'zgaruvchining tarkibini ekranga chop eting. */
//
// let r = prompt("Aylana radiusini kiriting: ");
// const pi = 3.14
// s = pi * r ** 2
// document.write("Aylananing maydoni: " + s)


// /* a Kvadrat tomoni bilan o'zgaruvchi berilsin.
//     Kvadratning maydonini toping va uni o'zgaruvchiga yozing s.
//     Ushbu o'zgaruvchining tarkibini ekranga chop eting. */
//
// let a = prompt("Kvadrat tomonini kiriting: ")
// s = a ** 2
// document.write("Kvadrat maydoni: " + s)


// /* To'rtburchakning tomonlari bilan ava o'zgaruvchilari berilsin.
//     bTo'rtburchakning maydonini toping va uni o'zgaruvchiga yozing s.
//     Ushbu o'zgaruvchining tarkibini ekranga chop eting. */
//
// let a = prompt("To'rtburchakni bo'yini kiriting: ")
// let b = prompt("To'rtburchakni enini kiriting: ")
// s = a * b
// document.write("To'rtbuchakni maydoni: " + s)


/* To'rtburchakning tomonlari bilan ava o'zgaruvchilari berilsin.
    bTo'rtburchakning perimetrini toping va uni o'zgaruvchiga yozing p.
    Ushbu o'zgaruvchining tarkibini ekranga chop eting. */

// let a = prompt("To'rtburchakni bo'yini kiriting: ")
// let b = prompt("To'rtburchakni enini kiriting: ")
// s = 2 * (a + b)
// document.write("To'rtbuchakni perimetri: " + s)


// /*
// * tcTselsiy bo'yicha harorat bilan o'zgaruvchi berilsin.
// * Bu haroratni Farengeyt darajasiga aylantirish uchun tegishli formuladan foydalaning.
// *  */
// let tc = prompt("Selsiy bo'yicha darajani kiriting: ")
// F = tc * (9/5) + 32
// document.write("Natija: " + F)


/* tfFarengeyt gradusdagi haroratli o'zgaruvchi berilsin.
    Tegishli formuladan foydalanib,
    bu haroratni Selsiy gradusiga aylantiring. */
// let tc = prompt("Farengeyt bo'yicha darajani kiriting: ")
// C = (F - 32) * 5/9
// document.write("Natija: " + C)
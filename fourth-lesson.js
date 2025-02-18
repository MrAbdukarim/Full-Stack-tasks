// let number = +prompt('1-12 raqam kiriting: ');
//
// if (number >= 1 && number <= 12) {
//     if (number === 12 || number === 1 || number === 2) {
//         alert('Bu oy qish faslida');
//     } else if (number >= 3 && number <= 5) {
//         alert('Bu oy bahor faslida');
//     } else if (number >= 6 && number <= 8) {
//         alert('Bu oy yoz faslida');
//     } else if (number >= 9 && number <= 11) {
//         alert('Bu oy kuz faslida');
//     }
// } else {
//     alert('1dan 12gacha raqam kiritish shart!');
// }


// let user = ["Anna", "Tommy", "George", "John"]
//
// for (let elem of user) {
//     if (elem === "Anna") document.write(`<b>${elem}</b> <br>`)
//     else if (elem === "Tommy") document.write(`<i>${elem}</i> <br>`)
//     else if (elem === "George") document.write(`<u>${elem}</u> <br>`)
//     else document.write(`${elem}`)
// }

// let parking = {
//     "1-qavat": {
//         "l": [1, 2, 3, 4, 5],
//         "m": 1990
//     },
//     "2-qavat": 2005,
//     "3-qavat": "2025"
// }
//
// let result = parking["2-qavat"] + Number(parking["3-qavat"]) + parking["1-qavat"].m
//
// let num = 0
// for (let i of parking["1-qavat"].l) {
//     num += i
// }
//
// console.log(result + num)


// let parking = {
//     "1-qavat": {
//         "l": [1, 2, 3, 4, 5],
//         "m": 1990
//     },
//     "2-qavat": 2005,
//     "3-qavat": "2005"
// }
//
// let result = 0;
//
// if ("2-qavat" in parking) {
//     result += parking["2-qavat"];
// }
//
// if ("3-qavat" in parking) {
//     result += Number(parking["3-qavat"]);
// }
//
// if ("1-qavat" in parking) {
//     if ("m" in parking["1-qavat"]) {
//         result += parking["1-qavat"]["m"];
//     }
//
//     if ("l" in parking["1-qavat"]) {
//         let num = 0;
//         for (let i = 0; i < parking["1-qavat"]["l"].length; i++) {
//             num += parking["1-qavat"]["l"][i];
//         }
//         result += num;
//     }
// }
//
// console.log(result);

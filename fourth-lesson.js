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
//
//
// let parking = {
//     "1-qavat": {
//         "l": [1, 2, 3, 4, 5],
//         "m": 1990
//     },
//     "2-qavat": 2005,
//     "3-qavat": "2025"
// }
//
// let num = 0
// for (let key in parking) {
//     if (typeof parking[key] != "object") {
//         num += Number(parking[key])
//     } else {
//         for (let keys in parking[key]) {
//             if (Array.isArray(parking[key][keys])) {
//                 for (let elem of parking[key][keys]) {
//                     num += Number(elem)
//                 }
//             } else {
//                 num += Number(parking[key][keys])
//             }
//         }
//     }
// }
//
// console.log(num)


// Homework
let uzb = {
    maydoni: 448900,
    axolisi: 35650000,
    poytaxti: "Toshkent",
    viloyatlari: {
        "Andijon": {
            shaharlari: ["Asaka", "Andijon", "Shahrixon"],
            maydon: 4027,
            markazi: "Andijon",
            axolisi: 3420000,
        },
        "Farg'ona": {
            shaharlari: ["Qo'qon", "Farg'ona", "Dang'ara"],
            maydon: 6800,
            markazi: "Farg'ona",
            axolisi: 4123000,
        },
        "Namangan": {
            shaharlari: ["Chust", "Namangan", "Kosonsoy"],
            maydon: 7900,
            markazi: "Namangan",
            axolisi: 3100000,
        },
        "Toshkent": {
            shaharlari: ["Zangiota", "Toshkent", "Qibray"],
            maydon: 15300,
            markazi: "Toshkent",
            axolisi: 6150000,
        },
        "Sirdaryo": {
            shaharlari: ["Yangiyer", "Gulistin", "Sirdaryo"],
            maydon: 4028,
            markazi: "Guliston",
            axolisi: 914000,
        },
        "Jizzax": {
            shaharlari: ["Do'stlik", "Jizzah", "Zomin"],
            maydon: 21200,
            markazi: "Jizzax",
            axolisi: 1500000,
        },
        "Samarqand": {
            shaharlari: ["Ishtixon", "Samarqand", "Jomboy"],
            maydon: 16400,
            markazi: "Samarqand",
            axolisi: 4159000,
        },
        "Qashqadaryo": {
            shaharlari: ["Shahrisabiz", "Qarshi", "Kitob"],
            maydon: 28500,
            markazi: "Qarshi",
            axolisi: 3500000,
        },
        "Surxandaryo": {
            shaharlari: ["Denov", "Termiz", "Boysun"],
            maydon: 20000,
            markazi: "Termiz",
            axolisi: 3000000,
        },
        "Buxoro": {
            shaharlari: ["G'ishdivon", "Buxoro", "Vobkent"],
            maydon: 40000,
            markazi: "Buxoro",
            axolisi: 2000000,
        },
        "Navoiy": {
            shaharlari: ["Zarafshon", "Navoiy", "Uchquduq"],
            maydon: 111100,
            markazi: "Navoiy",
            axolisi: 1075000,
        },
        "Xorazm": {
            shaharlari: ["Xiva", "Urganch", "Xazorasp"],
            maydon: 6300,
            markazi: "Urganch",
            axolisi: 2000000,
        },

        "Qoraqolpog'iston": {
            shaharlari: ["Xo'jali", "Nukus", "Qo'ng'irot"],
            maydon: 166000,
            markazi: "Nukus",
            axolisi: 2000000,
        }
    },
    telefonKodi: "+998"
}

let enter_str = prompt("Ma'lumot kiriting: ")
let viloyat = uzb.viloyatlari[enter_str]

if (viloyat) {
    let info = uzb.viloyatlari[enter_str];
    document.write(`
            <b><u>${enter_str}</u> viloyati</b><br>
            shaharlari: ${info.shaharlari}<br>
            maydon: ${info.maydon}<br>
            markazi: ${info.markazi}<br>
            axolisi: ${info.axolisi}<br>
        `);
} else if (enter_str === "telefonKodi" || enter_str === "Telefon kodi") {
    document.write(`O'zbekiston telefon raqamining kodi: ${uzb.telefonKodi}`)
} else if (enter_str) {
    for (let v in uzb.viloyatlari) {
        if (uzb.viloyatlari[v].markazi.includes(enter_str)) {
            document.write(`${enter_str} shahri ${v} viloyatida joylashgan.`);
        }
    }
} else {
    document.write("Xato ma'lumot kiritdingiz.");
}

// 1) Prompt yordamida berilgan so'rovga tegishli malumotlarni chiqarib beramiz
// Nukus deb yozilsa => Qoraqolpog'iston
// Qoraqolpog'iston deb yozilsa => maydoni, aholisi, markazi
// 2) Urganch deb yozilsa axolisi yoki maydoni boyicha nechinchi o'rindaligini
// chiqarishimiz kerak boladi
// 3) telefonKodi yozilsa uzbekistan telefon kodi chiqishi kerak

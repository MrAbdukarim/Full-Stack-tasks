let number = +prompt('1-12 raqam kiriting: ');

if (number >= 1 && number <= 12) {
    if (number === 12 || number === 1 || number === 2) {
        alert('Bu oy qish faslida');
    } else if (number >= 3 && number <= 5) {
        alert('Bu oy bahor faslida');
    } else if (number >= 6 && number <= 8) {
        alert('Bu oy yoz faslida');
    } else if (number >= 9 && number <= 11) {
        alert('Bu oy kuz faslida');
    }
} else {
    alert('1dan 12gacha raqam kiritish shart!');
}

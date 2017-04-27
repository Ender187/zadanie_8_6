var a = prompt('wpisz wielkość a ');
var b = prompt('wpisz wielkość b ');
var value = (a * a) + (2 * a * b) - (b * b);
alert(' Wynik wynosi: ' + value);
console.log(' Wynik wynosi: ' + value);
if (value<0) {

    alert('wynik jest ujemny');
    
} else if (value>0) {

    alert('wynik jest dodatni');

} else {

    alert('wynik jest równy zero');

}


// Telefone
function reverseString(str) {
    return str.split(',');
}

var str = '5802-1233 )33(';
var strReverse = str.split('').reverse().join('');

var $wrapper = document.querySelector('.phone');
$wrapper.innerHTML = strReverse;

// E-mail
function reverseString(str) {
    return str.split(',');
}

var str = 'rb.moc.anuatiairaoler@cas';
var strReverse = str.split('').reverse().join('');

var $wrapper = document.querySelector('.email');
$wrapper.innerHTML = strReverse;

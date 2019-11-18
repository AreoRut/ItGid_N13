
//Accociated Array

const a = {
    'a': 3,
    'b': 44,
    'z': 'Hello',
    y43: 1999,
    'villa de': 2090,
};
a.yyy = 555;
a.b = 'yyy';
//delete a.a;
console.log(a);
console.log(a.z);
let k = 'y43';

console.log(a[k]);

//document.querySelector('#out').innerHTML = a;

let out = ' ';
for (let key in a) {
    out += key + '---' + a[key] + '<br>';
}

document.querySelector('#out').innerHTML = out;

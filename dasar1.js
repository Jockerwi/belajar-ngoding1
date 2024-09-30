//cara membuat variable
var a = 'a';
let b = 'b';
const c = 'b'

//variable bisa nemampung data bisa string (text), number/integet, boolean, array, object
//untuk awalan kita belajar 3 data ini terlebih dahulu (string (text), number/integet, boolean)

let nama = "iwan"; //string
let umur = "27"; //number
let apakahbenar = true; //boolean
let uang ="5000,5" //number tapi ada uang

//oprator arimatika

let angka1 = "10";
let angka2 = "20";
console.log(angka1 + angka2, 'pertambahan');
console.log(angka1 - angka2, 'pengurangan');
console.log(angka1 / angka2, 'pembagian');
console.log(angka1 * angka2, 'pengalian');
console.log(angka1 % angka2, 'modulus');

//belajar mengisi variable
let penampungHasilOpratorAritmatika = angka1 + angka2;
console.log(penampungHasilOpratorAritmatika);

penampungHasilOpratorAritmatika = angka1 - angka2;
console.log(penampungHasilOpratorAritmatika);

penampungHasilOpratorAritmatika = angka1 / angka2;
console.log(penampungHasilOpratorAritmatika);

penampungHasilOpratorAritmatika = angka1 * angka2;
console.log(penampungHasilOpratorAritmatika);

penampungHasilOpratorAritmatika = angka1 % angka2;
console.log(penampungHasilOpratorAritmatika);

//string (text) bisa di tambah namun tidak bisa di kurangi secara oprator aritmatika contoh =
let firstname = 'iwan';
let lastname = 'nugraha';
let fullname = firstname + ' ' + lastname; //ini logicnya jika mau menambahakan space di nama menambahkan string(text) (' ' " ")
console.log(fullname);
console.log(firstname + ' ' + lastname);
console.log(firstname - lastname); //ingat ini bukan angka melain kan string(text) hasilnya pasti bernial NaN 

//pembelajaran alur pembelajaran code
//untuk membaca alurnya kiri ke kanan dan atas ke bawah
//contoh

let number = 20;
console.log(number + 10); //1st code yang diproses dan hasilnya pasti 30 karna number di code yang pertama ber nilai 20
number = 10;
console.log(number + 10); //2st code yang diproses dan hasilnya pasti 20 karna number di code yang pertama ber nilai 10
number = false;
console.log(number + 10); //3st code yang diproses dan hasilnya pasti 10 karna false = 0 
number = true;
console.log(number + 10); //4st code yang diproses dan hasilnya pasti 11 karna true = 1

//bersyukurlah kalau emang ada error dari pada error tapi tidak ada notifnya

//contoh error
const hewan = 'jerapah';
console.log(hewan)
hewan = 'buaya'
//kenapa error karna const itu constan tidak bisa di ubah
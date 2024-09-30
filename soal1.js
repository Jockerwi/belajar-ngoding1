// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. 
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
// Jika kedua angka bernilai sama, function akan me-return -1.

function bandingkanAngka(angka1, angka2) {
   if (angka2 > angka1){
    return true;
   } else if (angka2 < angka1){
    return false;
   } else {
    return -1;
   }
    //code disini    
}
  
    
    // TEST CASES
    console.log(bandingkanAngka(5, 8)); // true
    console.log(bandingkanAngka(5, 3)); // false
    console.log(bandingkanAngka(4, 4)); // -1
    console.log(bandingkanAngka(3, 3)); // -1
    console.log(bandingkanAngka(17, 2)); // false
  
  
  // ------------------------------------
  console.log('')
  // ------------------------------------
  
  // Problem
  // Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. 
  // Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".
  
  function balikKata(kata) {
    return kata.split('').reverse().join('');
      // you can only write your code here!
  }
    

    // TEST CASES
    console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
    console.log(balikKata('John Doe')); // eoD nhoJ
    console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
    console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
    console.log(balikKata('Super')); // repuS
  
  // ------------------------------------
  console.log('')
  // ------------------------------------

//   Soal 1: Perbandingan Usia

//   Buat sebuah fungsi bandingkanUsia(usia1, usia2) yang menerima dua parameter berupa angka (usia). Fungsi akan mengembalikan:
  
//       true jika usia2 lebih besar dari usia1.
//       false jika usia2 lebih kecil dari usia1.
//       -1 jika kedua usia sama.

function bandingkanUsia(angka4, angka5) {
if (angka4 < angka5){
    return true;
} else if (angka4 > angka5){
    return false;
}else {
    return -1;
}
}
  console.log(bandingkanUsia(25, 30)); // true
  console.log(bandingkanUsia(40, 20)); // false
  console.log(bandingkanUsia(50, 50)); // -1

//=================================================
function balikAngka(angka6){
let angkaTerbalik = angka6.toString().split('').reverse().join('');
return parseInt(angkaTerbalik);
}

console.log(balikAngka(12345)); // 54321
console.log(balikAngka(9876));  // 6789
console.log(balikAngka(1000));  // 1

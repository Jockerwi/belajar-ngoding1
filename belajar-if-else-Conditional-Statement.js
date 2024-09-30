//&& bisa d artikan dan
//&& semua kebutuhan harus terpenuhi
let nilai = 1;

if(nilai >= 80 && nilai <= 100 ) {nilai = "A"    
}else if(nilai >= 70 && nilai < 80 ) {nilai = "V"    
}else if(nilai >= 60 && nilai < 70 ) {nilai = "C"
}else {nilai = "D"
}
console.log(nilai)

//or (||) bisa di pakai saat salah satu kondisi terpenuhi lalu dia akan menghasilakan nilai true
nilai = 50;
let banding = nilai >= 80 && nilai <= 100; //kenapa false karna tidak terpenuhi jadi hasilnya dan &&
console.log(banding, "&&")
banding2 = nilai >= 80 || nilai <= 100; //kenapa hasil nya jadi true karna nilai nya 50 kurang dari 100 jadi true
console.log(banding2, "||")
//! artinya tidak jika bernilai sama dengan ! jadi false
let banding3 = nilai != 50; 
console.log(banding3, "!" )

//apabedannya == dan ===
let x = 50; //number
let y = "50"; //string
let banding4 = x == y;
console.log(banding4, "4")
let banding5 = x === y;
console.log(banding4, "4")

let number =3;
if (number>5) {
    if (number % 2 === 0){
        console.log("lebih besar dari 5 dan genap")
    } else {
        console.log("lebih besar dari 5 dan ganjil")
    }
}else {
    if (number % 2 === 0){
        console.log("lebih kecil dari 5 dan genap")
    } else {
        console.log("lebih kecil dari 5 dan ganjil")
    }
}
// == akan melakukan konversi jadi bisa bertemu dengan beda data tapi string akan ter ubah jadi number
// === data harus sesuai jika tidak akan menjadi false karna tidak ada konversi
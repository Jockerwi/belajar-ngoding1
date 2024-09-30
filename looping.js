//while
//for

// let i = 5;
// while (i >= 0) {
//     console.log(i)
// i--
// }

//< bertambah, > berkurang
//dalam looping ada yang namanya arah, kiri atau kanan, kiri itu pengurangan dan kanan itu penambahan
//hati hati akan ada infinite looping dan ada yang tidak jalan 

// for (let i = 0; i <= 5; i++){
//     console.log(i)
// }

//length string(text), array
//method length itu

// let name = "nurul";
// // for (let i = 0; i < name.length; i++){ // hasilnya nurul
// //     console.log(name[i])
// // }

// //pada tipe data string atau array di javascript, ada yang namanya indexing
// //dimana index itu sudah pasti berawal dari 0
// //sebagai contoh=

// console.log(name[0] + name[4]) //jadi yang di ambil huruf ke1 dan ke3

//membalikan kata tanpa metode reverse

// let name = "nurul"; //length itu kan dari 4 kalau index dari 0, a>0, g>1, u>2, s>3
// let result = "";

// for (let i = name.length - 1; i >= 0; i--) {
//     result += name[i];
// }
// console.log(result)


for (let i = 0; i <= 5; i++){
    for (let j = 0; j <= 5; j++){
        console.log(j)
    }
console.log(i)
}
console.log(' ')
console.log("LIEUR")
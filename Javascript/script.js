// UYGULAMA 1

// let ogr1_name = "ADA";
// let ogr1_surname = "Bilge";
// let ogr1_borndate = 2012;
// let ogr1_exam_notes = [70, 70, 80];

// let ogr2_name = "Yigit";
// let ogr2_surname = "Bilge";
// let ogr2_borndate = 2010;
// let ogr2_exam_notes = [40, 40, 50];

// let ages1 = 2024 - ogr1_borndate;
// let ages2 = 2024 - ogr2_borndate;

// UYGULAMA 2

// let meyveler = ["Kiraz", "Karpuz", "kavun", "Erik"];
// sonuc = meyveler.length;
// console.log(sonuc);

// console.log(meyveler[0], meyveler[meyveler.length - 1]);
// console.log(meyveler.includes("kavun"));
// let add = meyveler.concat("cilek");
// console.log(add);
// console.log(meyveler.splice(0, meyveler.length - 2));

// UYGULAMA 3

let ogrenci1 = ["Yigit", "Bilge", 2010, [60, 90, 80]];

let ogrenci2 = ["ada", "Bilge", 2012, [70, 80, 85]];

let ogrenci3 = ["Cinar", "Turan", 2017, [60, 50, 80]];

let ogrenciler = [ogrenci1, ogrenci2, ogrenci3];
// Yaslar
let hesapla1 = 2025 - ogrenci1[2];
console.log(hesapla1);

let hesapla2 = 2025 - ogrenci2[2];
console.log(hesapla2);

let hesapla3 = 2025 - ogrenci3[2];
console.log(hesapla3);

let yigitnot = (ogrenci1[3][0] + ogrenci1[3][1] + ogrenci1[3][2]) / 3;
console.log(yigitnot);
let adanot = (ogrenci2[3][0] + ogrenci2[3][1] + ogrenci2[3][2]) / 3;
console.log(adanot);
let cinarnot = (ogrenci3[3][0] + ogrenci3[3][1] + ogrenci3[3][2]) / 3;
console.log(cinarnot);

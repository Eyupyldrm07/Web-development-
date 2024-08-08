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

// let ogrenci1 = ["Yigit", "Bilge", 2010, [60, 90, 80]];

// let ogrenci2 = ["ada", "Bilge", 2012, [70, 80, 85]];

// let ogrenci3 = ["Cinar", "Turan", 2017, [60, 50, 80]];

// let ogrenciler = [ogrenci1, ogrenci2, ogrenci3];
// // Yaslar
// let hesapla1 = 2025 - ogrenci1[2];
// console.log(hesapla1);

// let hesapla2 = 2025 - ogrenci2[2];
// console.log(hesapla2);

// let hesapla3 = 2025 - ogrenci3[2];
// console.log(hesapla3);

// let yigitnot = (ogrenci1[3][0] + ogrenci1[3][1] + ogrenci1[3][2]) / 3;
// console.log(yigitnot);
// let adanot = (ogrenci2[3][0] + ogrenci2[3][1] + ogrenci2[3][2]) / 3;
// console.log(adanot);
// let cinarnot = (ogrenci3[3][0] + ogrenci3[3][1] + ogrenci3[3][2]) / 3;
// console.log(cinarnot);

// Uygulama 4

// let siparis_1 = {
//   id: 101,
//   muster_id: 12,
//   tarih: "31.12.2025",
//   odeme_sekli: "kredi karti",
//   kargo_adresi: {
//     mahalle: "Yahya kaptan mah.",
//     ilce: "izmit",
//     sehir: "kocaeli",
//   },
//   urunler: [
//     { urun_id: 5, urun_adi: "iphone 16 pro", urun_url: "#", fiyat: 75000 },
//     { urun_id: 6, urun_adi: "iphone 16 pro max", urun_url: "#", fiyat: 85000 },
//   ],
// };

// let siparis_2 = {
//   id: 102,
//   muster_id: 12,
//   tarih: "31.12.2025",
//   odeme_sekli: "kredi karti",
//   kargo_adresi: {
//     mahalle: "Yahya kaptan mah.",
//     ilce: "izmit",
//     sehir: "kocaeli",
//   },
//   urunler: [
//     { urun_id: 5, urun_adi: "iphone 16 pro", urun_url: "#", fiyat: 75000 },
//   ],
// };
// let siparis1_toplam =
//   (siparis_1.urunler[0].fiyat + siparis_1.urunler[1].fiyat) * 1.2;
// let siparis2_toplam = siparis_2.urunler[0].fiyat * 1.2;

// console.log(
//   "Kdv siz Fiyati:",
//   siparis_1.urunler[0].fiyat + siparis_1.urunler[1].fiyat,
//   "kdv dahil Toplam fiyat:",
//   siparis1_toplam
// );
// console.log(siparis2_toplam);
// toplam_siparis = siparis1_toplam + siparis2_toplam;
// console.log(toplam_siparis);

// Uyguluma 5

// let sayilar = [3, 5, 7, 8, 12, 23, 45, 66];

// for (i = 0; i < sayilar.length; i++) {
//   kare = sayilar[i] * sayilar[i];
//   console.log(kare);
// }

// for (i = 0; i < sayilar.length; i++) {
//   if (sayilar[i] % 5 == 0) {
//     console.log("5 in kati sayilar", sayilar[i]);
//   }
// }

// for (let i = 100; i > 50; i--) {
//   console.log(i);
// }

// let urunler = ["iphone 16 ", "samsung s25", "iphone 17", "samsung s26"];

// for (i = 0; i < urunler.length; i++) {
//   let buyuk = urunler[i].toUpperCase();
//   console.log(buyuk);
// }

// for (i = 0; i < urunler.length; i++) {
//   console.log(urunler[i].match("samsung"));
// }

// let ogrenciler = [
//   { ad: "Yigit", soyad: "bilge", notlar: [60, 70, 80] },
//   { ad: "ada", soyad: "bilge", notlar: [80, 50, 75] },
//   { ad: "cinar", soyad: "turan", notlar: [70, 70, 80] },
// ];

// for (i = 0; (i = ogrenciler.length); i++) {
//   let not_toplam = 0;
//   let adet = 0;
//   let ortalama = 0;
//   for (x = 0; x < ogrenciler[i], notlar.length; x++) {
//     (not_toplam += ogrenciler[i]), notlar[x];
//     adet += 1;
//   }
//   ortalama = not_toplam / adet;
//   console.log(
//     `${ogrenciler[i].ad} ${ogrenciler[i].soyad} isimli ogrencinin not ortalamasi ${ortalama}`
//   );
// }

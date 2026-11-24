import groomPhoto from '../assets/Pas Foto Mamitt.png'
import bridePhoto from '../assets/Pas Foto Calon.png'

import pwk07605 from '../assets/optimized/PWK07605.jpg'
import pwk07636 from '../assets/optimized/PWK07636.jpg'
import pwk07799 from '../assets/optimized/PWK07799.jpg'
import pwk07915 from '../assets/optimized/PWK07915.jpg'
import pwk07950 from '../assets/optimized/PWK07950.jpg'
import pwk07975 from '../assets/optimized/PWK07975.jpg'
import pwk08002 from '../assets/optimized/PWK08002.jpg'
import pwk08030 from '../assets/optimized/PWK08030.jpg'
import pwk08047 from '../assets/optimized/PWK08047.jpg'
import pwk07966 from '../assets/PWK07966.jpg'

export interface Wish {
  id: string
  name: string
  message: string
  createdAt: string
}

export const INVITATION_DATA = {
  couple: {
    groom: {
      name: "Ahmad Muis ",
      nickname: "Ahmad",
      parents: "Putra Ke-2 dari Bpk. Jupri & Ibu Nur Aisyah",
      instagram: "romeo.wedding",
      photo: groomPhoto
    },
    bride: {
      name: "Putri Vira Nopebriyanti",
      nickname: "Putri",
      parents: "Putri Ke-2 dari Bpk. Uus Kusnadi & Ibu Iyul Yulianti",
      instagram: "juliet.wedding",
      photo: bridePhoto
    }
  },
  event: {
    targetDate: "2027-01-03T09:00:00+07:00",
    akad: {
      title: "Akad Nikah",
      date: "Minggu, 03 Januari 2027",
      time: "08:00 - 09:00 WIB",
      venue: "Gedung STAI Kharisma",
      address: "Kp. Cipanggulaan RT.11/ RW.03, Desa Kompa, Kec. Parungkuda, Kab. Sukabumi"
    },
    resepsi: {
      title: "Resepsi Pernikahan",
      date: "Minggu, 03 Januari 2027",
      time: "09:00 WIB - Selesai",
      venue: "Gedung STAI Kharisma",
      address: "Kp. Cipanggulaan RT.11/ RW.03, Desa Kompa, Kec. Parungkuda, Kab. Sukabumi"
    },
    mapsUrl: "https://maps.app.goo.gl/huTVdEo4x5Ky6EbG6?g_st=ic",
    mapsEmbed: "https://maps.google.com/maps?q=STAI%20Kharisma%20Sukabumi&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  gallery: [
    { url: pwk07605, caption: "Momen Bahagia 1" },
    { url: pwk07636, caption: "Momen Bahagia 2" },
    { url: pwk07799, caption: "Momen Bahagia 3" },
    { url: pwk07915, caption: "Momen Bahagia 4" },
    { url: pwk07950, caption: "Momen Bahagia 5" },
    { url: pwk07975, caption: "Momen Bahagia 6" },
    { url: pwk08002, caption: "Momen Bahagia 7" },
    { url: pwk08030, caption: "Momen Bahagia 8" },
    { url: pwk08047, caption: "Momen Bahagia 9" },
    { url: pwk07966, caption: "Momen Bahagia 10" }
  ],
  turutMengundang: {
    keluargaPria: [
      "Bpk. KH. Abdul Kholik/Aa Pikpik(Guru)",
      "Bpk. H. Nanang Abdul Latif(Guru)",
      "Bpk. Samsu Rangkuti(Mamang)",
      "Bpk. Haris Muda Nasution(Uwa)",
      "Bpk. Sopian Batubara(Saudara)",
    ],
    keluargaWanita: [
      "Kelbes Alm. Bpk. Julan(Kakek)",
      "Bpk. Imam Sudirman(Uwa)",
      "Bpk. Ujang Sugih Kusdiana(Kakak)",
      "Bpk. Agung Gunawan(Mamang)",
      "Bpk. KH. Dadun Muda(Guru)",
      "Bpk. Ust. Jama(Guru)",
      "Bpk. Gagan Suganda(Uwa)",
      "Kelbes Bpk. Sarkoni"
    ],
  },
  gifts: [
    {
      bank: "BNI",
      accountNumber: "2039864101",
      holder: "Putri Vira Nopebriyanti"
    },
  ],
  musicUrl: "/lagu-pernikahan-kita.mp3"
}

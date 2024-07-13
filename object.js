//  cara membuat object

// literal object

let manusia = {
  nama: "mochamad",
  usia: 12,
  energi: 10,
  // di bawah penggunaan method pada object
  makan: function (makan) {
    let pointMakanan = cekMakanan(makan);
    this.energi += pointMakanan;
    return `${this.nama}, telah makan ${makan}, energi telah bertambah ${this.energi}`;
  },
};

function cekMakanan(makan) {
  if (makan == "sop") {
    return 30;
  } else if (makan == "gulai") {
    return 60;
  } else {
    return 0;
  }
}

console.log(manusia.nama);
console.log(manusia.usia);
console.log(manusia.makan("gulai"));
console.log(manusia.makan("sop"));

// object declaration

function nilai(nama, sks) {
  mahasiswa = {};
  (mahasiswa.nama = nama),
    (mahasiswa.sks = sks),
    (mahasiswa.her = function (nilaiHer) {
      let nilaiHerSms = hasilHer(nilaiHer);
      return `${this.nama} memiliki nilai her ${nilaiHer},${nilaiHerSms}`;
    });
  return mahasiswa;
}

function hasilHer(nilai) {
  if (nilai >= 70) {
    if (nilai >= 80) {
      return `selamat kamu mendapatkan nilai ${nilai}, nyaris sempurna`;
    } else if (nilai >= 70) {
      return `nilai kamu ${nilai}, kerja bagus dan selamat kamu tidak her`;
    }
  } else {
    return `coba lagi ya, jangan patah semangat`;
  }
}

let farchan = nilai("farchan", 2.8);
console.log(farchan);
console.log(farchan.her(70));

// constracture object

function biodata(nama, alamat, nomor, usia, sekolah) {
  (this.nama = nama),
    (this.alamat = alamat),
    (this.nomor = nomor),
    (this.usia = usia),
    (this.sekolah = sekolah),
    (this.Cetakbiodata = function (question) {
      if (question === "ya") {
        const cetak = print(this);
        console.log(this);
        return cetak;
      }
    });
}

function print(data) {
  return `
  ============== BIODATA MAHASISWA ================
  nama     :${data.nama} 
  alamat   :${data.alamat}
  nomor    :${data.nomor}
  usia     :${data.usia}
  sekolah  :${data.sekolah}`;
}

let farchanA = new biodata("mochamad farchan asadillah", "jln gurame 1 no 30", 87868048247, 22, "universitas bina sarana informatika");
console.log(farchanA.Cetakbiodata("ya"));

// Objek dengan metode cetak

// Constructor untuk objek biodata
function Biodata(nama, alamat, nomor, usia, sekolah) {
  this.nama = nama;
  this.alamat = alamat;
  this.nomor = nomor;
  this.usia = usia;
  this.sekolah = sekolah;
}

// Mengatur prototipe untuk menggunakan mahasiswaCetak
Biodata.prototype.cetakBaru = function (question) {
  if (question === "ya") {
    const cetak = print(this);
    console.log(this);
    return cetak;
  }
};

// Fungsi untuk mencetak data
function print(data) {
  return `
      ============== BIODATA MAHASISWA ================
      Nama     : ${data.nama}
      Alamat   : ${data.alamat}
      Nomor    : ${data.nomor}
      Usia     : ${data.usia}
      Sekolah  : ${data.sekolah}
    ================================================`;
}

// Contoh penggunaan
let farchan = new Biodata("mochamad farchan asadillah", "jln gurame", 87868048247, 22, "bsi");

console.log(farchan.cetakBaru("ya"));

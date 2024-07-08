// pertama ambil semua data list

const javdur = Array.from(document.querySelectorAll("[data-duration]"));
// note : 1 karna harus berupa array maka node list harus berubah menjadi array, mengunakan
// array.from
// ("[data-duration]")) = artinya carikan data/ atribut yang bernama [data-duration]

// lalu ambil hanya  javascript lanjutan

let jsLanjutList = javdur
  .filter((javdur) => javdur.textContent.includes("JAVASCRIPT LANJUTAN"))

  // artinya saya akan membuat varibael jsLanjutList yang berisikan= tolong filter data list yang
  // terdapat pada javdur yang terdapat kata yang berisikan JAVASCRIPT LANJUTAN

  // ambil duration
  .map((item) => item.dataset.duration)
  // ubah int, ubah menit menjadi detik
  .map((waktu) => {
    const part = waktu.split(":").map((waktu) => parseFloat(waktu));
    return part[0] * 60 + part[1];
  })
  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);

//jam

const jam = math.floor(jsLanjutList / 3600);

jslanjut = jsLanjutList - jam * 3600;

// jumlahkan semua detik
console.log(jsLanjutList);

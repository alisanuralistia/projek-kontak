document.getElementById("formKontak").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  // Simpan ke localStorage
  const data = {
    nama: nama,
    email: email,
    pesan: pesan
  };
  localStorage.setItem("dataKontak", JSON.stringify(data));

  // Tampilkan ke halaman
  tampilkanData(data);
});

// Fungsi menampilkan data
function tampilkanData(data) {
  const output = document.getElementById("output");
  output.innerHTML = `
    <strong>Pesan terakhir disimpan:</strong><br>
    Nama: ${data.nama}<br>
    Email: ${data.email}<br>
    Pesan: ${data.pesan}
  `;
  output.style.display = "block";
}

// Saat halaman dibuka, cek jika ada data
window.addEventListener("load", function () {
  const dataTersimpan = localStorage.getItem("dataKontak");
  if (dataTersimpan) {
    const data = JSON.parse(dataTersimpan);
    tampilkanData(data);
  }
});

   
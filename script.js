// --- 1. Logika Menampilkan Tanggal (Wajib Tugas) ---
let tanggal = new Date();
document.getElementById("tanggal").innerHTML = "Diakses pada: " + tanggal.toLocaleString();

// --- 2. Fungsi Alert tampil() (Wajib Tugas) ---
function tampil() {
    alert("Halo sahabat! Facebook saya adalah https://www.facebook.com/username. Silakan kunjungi profil saya untuk mengetahui lebih banyak tentang saya!");
}

// --- 3. Fungsi Alert show() (Wajib Tugas) ---
function show() {
    alert("Halo! 081234567890 adalah nomor WhatsApp saya. Silakan hubungi saya jika Anda ingin berkenalan!");
}


window.onload = function() {
    
    // --- Efek Munculkan Card ---
    const myCard = document.getElementById('myCard');
    myCard.classList.add('card-visible');

    // Kode tanggal tetap di sini
    let tanggal = new Date();
    document.getElementById("tanggal").innerHTML = "Diakses pada: " + tanggal.toLocaleString();
};
document.getElementById('formTransaksi').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const jumlah = document.getElementById('jumlah').value;
    const kategori = document.getElementById('kategori').value;
    const errorMsg = document.getElementById('errorMsg');

    if (!nama || !jumlah || !kategori) {
        errorMsg.textContent = "Semua field harus diisi.";
        return;
    }

    errorMsg.textContent = "";

    const row = `<tr><td>${nama}</td><td>${jumlah}</td><td>${kategori}</td></tr>`;
    document.getElementById('daftarTransaksi').insertAdjacentHTML('beforeend', row);

    document.getElementById('formTransaksi').reset();
});

document.getElementById('formLogin').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginErrorMsg = document.getElementById('loginErrorMsg');

    if (!username || !password) {
        loginErrorMsg.textContent = "Username dan password harus diisi.";
        return;
    }

    loginErrorMsg.textContent = "Login berhasil! (Simulasi)";
});

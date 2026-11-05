const express = require('express');
const app = express();

const waktuMulai = new Date();

const anggota = [
    { nama: 'Memey Meilani', NIM: '20250040074' },
    { nama: 'Dika', NIM: 'ISI_NIM_DIKA' },
    { nama: 'Sehan', NIM: 'ISI_NIM_SEHAN' },
    { nama: 'Khoerul', NIM: 'ISI_NIM_KHOERUL' }
];

// Route /
app.get('/', (req, res) => {
    res.send('Selamat datang di server Kelompok 7!');
});

// Route /info
app.get('/info', (req, res) => {
    res.send('Server dijalankan pada: ' + waktuMulai.toLocaleString('id-ID'));
});

// Route /anggota
app.get('/anggota', (req, res) => {
    res.json(anggota);
});

app.listen(8000, () => console.log('Server Express berjalan di http://localhost:8000'));
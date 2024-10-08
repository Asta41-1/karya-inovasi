const desas = document.querySelectorAll('.desaorange, .desa, .desamerah');
const descriptionBox = document.querySelector('#desc-box');


// wilayah Box Kesehatan

const desa = document.getElementsByClassName('desaorange, desa, desamerah');
const tooltip = document.getElementById('tooltip');
const tabel = document.getElementById('tabel')

Tabanan.addEventListener('mouseover', (event) => {
  tooltip.style.display = 'block';
  tooltip.style.left = `${event.pageX + 10}px`; // Atur posisi tooltip berdasarkan mouse
  tooltip.style.top = `${event.pageY + 10}px`;
});

Tabanan.addEventListener('mouseout', () => {
  tooltip.style.display = 'none';
});

const wilayahData = {
    "datakerambitan": {
        "nama": "Wilayah 1",
        "url": "https://example.com/wilayah1" // URL untuk tab Wilayah 1
    },
    "wilayah2": {
        "nama": "Wilayah 2",
        "url": "https://example.com/wilayah2" // URL untuk tab Wilayah 2
    },
    "wilayah3": {
        "nama": "Wilayah 3",
        "url": "https://example.com/wilayah3" // URL untuk tab Wilayah 3
    },


    Tabanan: {
        tingkat: 7,
        kesehatan: [
            { jenis: 'Lingkungan', persen: '100-90%', color: 'green' },
            { jenis: 'Mental', persen: '90-30%', color: 'orange' },
            { jenis: 'Fisik', persen: '30-0%', color: 'red' },
            
        ],
    },
    Pupuan: {
        tingkat: 5,
        kesehatan: [
            { jenis: 'Lingkungan', persen: '80-70%', color: 'green' },
            { jenis: 'Mental', persen: '60-50%', color: 'orange' },
            { jenis: 'Fisik', persen: '20-10%', color: 'red' },
        ],
    },

    Marga: {
        tingkat: 5,
        kesehatan: [
            { jenis: 'Lingkungan', persen: '80-70%', color: 'green' },
            { jenis: 'Mental', persen: '60-50%', color: 'orange' },
            { jenis: 'Fisik', persen: '20-10%', color: 'red' },
        ],
    },
    Selemadeg: {
        tingkat: 5,
        kesehatan: [
            { jenis: 'Lingkungan', persen: '80-70%', color: 'green' },
            { jenis: 'Mental', persen: '60-50%', color: 'orange' },
            { jenis: 'Fisik', persen: '20-10%', color: 'red' },
        ],
    },
    Kerambitan: {
        tingkat: 5,
        kesehatan: [
            { jenis: 'Lingkungan', persen: '80-70%', color: 'green' },
            { jenis: 'Mental', persen: '60-50%', color: 'orange' },
            { jenis: 'Fisik', persen: '20-10%', color: 'red' },
 
        ],
    },
    Baturiti: {
        tingkat: 5,
        kesehatan: [
            { jenis: 'Lingkungan', persen: '80-70%', color: 'green' },
            { jenis: 'Mental', persen: '60-50%', color: 'orange' },
            { jenis: 'Fisik', persen: '20-10%', color: 'red' },
        ],
    },
    Kediri: {
        tingkat: 5,
        kesehatan: [
            { jenis: 'Lingkungan', persen: '80-70%', color: 'green' },
            { jenis: 'Mental', persen: '60-50%', color: 'orange' },
            { jenis: 'Fisik', persen: '20-10%', color: 'red' },
        ],
    },
    Selemadeg_Barat: {
        tingkat: 5,
        kesehatan: [
            { jenis: 'Lingkungan', persen: '80-70%', color: 'green' },
            { jenis: 'Mental', persen: '60-50%', color: 'orange' },
            { jenis: 'Fisik', persen: '20-10%', color: 'red' },
        ],
    },
    Selemadeg_Timur: {
        tingkat: 5,
        kesehatan: [
            { jenis: 'Lingkungan', persen: '80-70%', color: 'green' },
            { jenis: 'Mental', persen: '60-50%', color: 'orange' },
            { jenis: 'Fisik', persen: '20-10%', color: 'red' },
        ],
    },
    Penebel: {
        tingkat: 5,
        kesehatan: [
            { jenis: 'Lingkungan', persen: '80-70%', color: 'green' },
            { jenis: 'Mental', persen: '60-50%', color: 'orange' },
            { jenis: 'Fisik', persen: '20-10%', color: 'red' },
        ],
    },
    // Tambahkan wilayah lainnya di sini
};

desas.forEach(desa => {
    desa.addEventListener('mouseover', (event) => {
        // Ambil ID wilayah dari elemen yang dihover
        const wilayah = event.target.id;

        // Ambil data dari objek berdasarkan ID
        const dataWilayah = wilayahData[wilayah];

        // Update isi tooltip dan deskripsi
        const tooltip = document.getElementById('tooltip');
        tooltip.innerHTML = `
            <div>
                <svg height="50" width="50">
                    <circle cx="25" cy="25" r="20" stroke="green" stroke-width="4" fill="white" />
                    <text x="22" y="30" font-family="Arial" font-size="16" fill="black">${dataWilayah.tingkat}</text>
                </svg>
                <p>Tingkat Kesehatan Wilayah</p>
                <ul>
                    ${dataWilayah.kesehatan.map(item => `
                        <li>
                            <span style="color: ${item.color};">●</span> ${item.jenis}
                            <span style="float: right;">${item.persen}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;

        // Tampilkan tooltip di posisi mouse
        tooltip.style.display = 'block';
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
    });

    desa.addEventListener('mouseout', () => {
        // Sembunyikan tooltip saat kursor keluar
        tooltip.style.display = 'none';
    });
});

Tabanan.addEventListener('mouseover', (event) => {
    console.log('Mouse over:', event.target.id); // Cek apakah event berfungsi
    tooltip.style.display = 'block';
    tooltip.style.left = `${event.pageX + 10}px`; 
    tooltip.style.top = `${event.pageY + 10}px`;
    tooltip.classList.add('visible');
});




// Pastikan elemen wilayah ditemukan
console.log('Jumlah wilayah ditemukan: ', desas.length);

// Tambahkan event listener untuk klik wilayah
desas.forEach(desa => {
    desa.addEventListener('click', (event) => {
        console.log("Wilayah diklik:", event.target.id); // Tambahkan log untuk memeriksa klik

        // Ambil ID wilayah dari elemen yang diklik
        const wilayah = event.target.id;

        // Pastikan wilayahData memiliki data untuk wilayah yang diklik
        if (wilayahData[wilayah]) {
            console.log("Data ditemukan untuk wilayah2222:", wilayah);
            
            // Ambil data dari objek berdasarkan ID wilayah yang diklik
            const dataWilayah = wilayahData[wilayah];

            // Update isi tabel di sebelah kanan
            const tabel = document.getElementById('tabel');
            tabel.innerHTML = `
                <h2>Kecamatan ${wilayah}</h2>

                <button id="datakerambitan">Buka Tab ${dataWilayah.nama}
                </button>
                    ${dataWilayah.kesehatan.map(item => `
                    `).join('')}
            `;

            
            // Tampilkan tabel dengan animasi keluar dari kanan
            tabel.classList.add('visible');
        } else {
            console.error("Tidak ada data untuk wilayah:", wilayah);
        }
    });
});
const closeTabel = document.getElementById('close-tabel');
closeTabel.addEventListener('click', () => {
    const tabel = document.getElementById('tabel');
    tabel.classList.remove('visible');
});






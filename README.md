# Simple Cart App
Aplikasi cart sederhana. Disadur dan dimodifikasi dari [https://github.com/kodeid-resources/simple-cart-app](https://github.com/kodeid-resources/simple-cart-app)

# Acknowledgment
[Riza Fahmi](https://github.com/rizafahmi)

# Perubahan Source Code
Berikut ini adalah daftar perubahan source code keranjang belanja ini :

1. Mengubah input price dan qty menjadi number dan juga mengubahnya menjadi readonly. Alasan saya mengubah kedua input tersebut menjadi readonly karena ketika barang sudah masuk ke keranjang belanja, user tidak dapat mengubah harga, hanya bisar merubah qty saja. Mengubah qty saya buat hanya bisa diubah melalui tombol plus(+) dan minus(-) saja, tidak melalui field input secara langsung.
2. Membuat function disableDecrement dan juga testingnya.
3. Membetulkan function incrementQty.
4. Membuat function subTotal dan juga testingnya.
5. Membuat function diskon dan juga testingnya.

Berikut ini adalah daftar testing yang dilakukan :
1. Testing incrementQty.
2. Testing decrementQty.
3. Testing subTotal.
4. Testing disableDecrement.
5. Testing diskon 50 persen.
6. Testing kode diskon tidak diisi.
7. Testing kode diskon diisi random.

Berikut ini adalah kode diskon yang bisa dipakai:
1. KD100 = diskon 100%.
2. KD75 = diskon 75%.
3. KD50 = diskon 50%.
4. KD25 = diskkon 25%.
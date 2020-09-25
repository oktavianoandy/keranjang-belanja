# Simple Cart App
Aplikasi cart sederhana. Disadur dan dimodifikasi dari [https://github.com/kodeid-resources/simple-cart-app](https://github.com/kodeid-resources/simple-cart-app)

# Acknowledgment
[Riza Fahmi](https://github.com/rizafahmi)

# Perubahan Sourcode
Berikut ini adalah daftar perubahan source code keranjang belanja ini :

1. Mengubah input price dan qty menjadi number dan juga mengubahnya menjadi readonly. Alasan saya mengubah kedua input tersebut menjadi readonly karena ketika barang sudah masuk ke keranjang belanja, user tidak dapat mengubah harga, hanya bisar merubah qty saja. Mengubah qty saya buat hanya bisa diubah melalui tombol plus(+) dan minus(-) saja, tidak melalui field input secara langsung.
2. Membuat function disableDecrement dan juga testingnya.
3. Membetulkan function incrementQty.
4. Membuat function subTotal dan juga testingnya.

Berikut ini adalah daftar testing yang dilakukan :
1. Testing incrementQty.
2. Testing decrementQty.
3. Testing subTotal.
4. Testing disableDecrement.
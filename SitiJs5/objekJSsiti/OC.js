function guru(nama, mapel, umur, email, alamat){
    this.nama = nama;
    this.mapel = mapel;
    this.umur = umur;
    this.email = email;
    this.alamat = alamat;
}

const guru1= new guru("hallo nama saya indah", "saya adalah guru pai", "umur saya 35 tahun", "tugas bisa kalian kirim ke email indah27@gmail.com", "saya tinggal di jakarta");
console.log(guru1);
function person(nama, kelas, favColor, jurusan, hobby, alamat){
    const myFD={}
    myFD.nama=nama
    myFD.kelas=kelas
    myFD.favColor=favColor
    myFD.jurusan=jurusan
    myFD.hobby=hobby
    myFD.alamat=alamat
    return myFD
}
const myFD1=person("hi nama saya siti,panggil aku sit", "kelas 11", "favcolor purple ", "aku masuk jurusan RPL", "Hobbyku menggambar", "aku tinggal di bandung")
console.log(myFD1)
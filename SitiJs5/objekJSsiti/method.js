const person={
    nama:"hai namaku siti munika",
    sekolah:"aku sekolah di smk yadika soreang kelas",
    kelas:11,
    hobby:"hobbyku menggambar",
    perkenalan: function(){
        return this.nama + " " + this.sekolah + " " + this.kelas + " " + this.hobby;
    },
};
console.log(person.perkenalan());
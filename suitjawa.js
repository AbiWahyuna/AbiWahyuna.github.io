var tanya = true
while(tanya){


    //menangkap pilihan player
    var p = prompt('Pilih : Gajah, Semut, Orang');

    //menangkap pilihan computer
    //membangkitkan bilangan random
    var comp = Math.random();

    if( comp < 0.34 ){
        comp ='gajah';
    }else if( comp >= 0.34 && comp < 0.67){
        comp = 'orang';
    }else{
        comp = 'semut';
    }

    console.log(comp);


    var hasil = '';
    //menentukan rules
    if( p == comp ){
        hasil = 'SERI!';
    } else if( p == 'gajah') {
        hasil = ( comp == 'orang') ? 'MENANG!' : 'KALAH!';
        // if( comp == 'orang') {
        //     hasil = 'MENANG!';
        // } else {
        //     hasil = 'KALAH!';
        // }
    } else if( p == 'orang' ){
        hasil = ( comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    //     if( comp == gajah ){
    //         hasil = 'KALAH';
    //     } else {
    //         hasil = 'MENANG!';
    //     }
    } else if( p == 'semut' ){
        hasil = ( comp == 'orang') ? 'kalah' : 'MENANG!';
    } else {
        hasil = 'MEMASUKAN PILIHAN YANG SALAH!';
    }



    //tampilkan rules
    alert('Kamu Memilih : ' + p + '\nKomputer memilih :' + comp + '\n\n\nMaka hasilnya : kamu ' + hasil);

    tanya = confirm('lagi?');
}

alert('Terimakasih sudah bermain ^-^');
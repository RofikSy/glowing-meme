function inputTabel(){
var norm = document.getElementById("norm").value
var nama_pasien = document.getElementById("nama_pasien").value;
var jenis_kelamin = document.getElementById("jenis_kelamin").value;
var age = document.getElementById("umur").value;
var address = document.getElementById("alamat").value;
var date = document.getElementById("tanggal").value;
var check = document.getElementById("pemeriksaan").value;
var icd = document.getElementById("diagnosa_icd").value;
var terapiObat = document.getElementById("terapi").value;
var bb = document.getElementById("b").value;
var ll = document.getElementById("l").value;
var kk = document.getElementById("k").value;
var nama_dpjp = document.getElementById("dpjp").value;


var tabel = document.getElementById("tabelPasien")[0];

var barisBaru = tabelPasien.insertRow(tabelPasien.rows.length);

var kolom = barisBaru.insertCell(0);
var kolom1 = barisBaru.insertCell(1);
var kolom2 = barisBaru.insertCell(2);
var kolom3 = barisBaru.insertCell(3);
var kolom4 = barisBaru.insertCell(4);
var kolom5 = barisBaru.insertCell(5);
var kolom6 = barisBaru.insertCell(6);
var kolom7 = barisBaru.insertCell(7);
var kolom8 = barisBaru.insertCell(8);
var kolom9 = barisBaru.insertCell(9);
var kolom10 = barisBaru.insertCell(10);
var kolom11 = barisBaru.insertCell(11);
var kolom12 = barisBaru.insertCell(12);

kolom.innerHTML = norm;
kolom1.innerHTML = nama_pasien;
kolom2.innerHTML = jenis_kelamin;
kolom3.innerHTML = age;
kolom4.innerHTML = address;
kolom5.innerHTML = date;
kolom6.innerHTML = check
kolom7.innerHTML = icd;
kolom8.innerHTML = terapiObat;
kolom9.innerHTML = bb;
kolom10.innerHTML = ll
kolom11.innerHTML = kk;
kolom12.innerHTML = nama_dpjp;
}
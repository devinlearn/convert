// Function Convert PDT
document.getElementById('formFile').addEventListener('change', ()=> {
    let fr = new FileReader();
    fr.readAsText(document.getElementById('formFile').files[0]);
    fr.onload = function () {
        document.getElementById('teks').innerHTML = fr.result;
    }
})

function Jebek() {
    let timpa = document.getElementById('teks').value.trim();
    let barcodes = timpa.split("\n").map(str => str.replace(/\s/g, ''));
    barcodes.sort((a,b)=> a.substr(0, 7).localeCompare(b.substr(0, 7)));
    console.log(barcodes);
    let newBarcodes = barcodes.map(a => `${a.slice(-7)},1\n`);        
    document.getElementById('result').innerHTML = newBarcodes.join('');
    Swal.fire({
        icon: "success",
        title: "Berhasil, berhasil, horee!",
        showConfirmButton: false,
        timer: 1100
    });
}
document.getElementById('btn').addEventListener('click', Jebek);

function copy() {
    let text = document.getElementById("result");
    text.select();
    text.setSelectionRange(0,9999);
    document.execCommand("copy");
    Swal.fire({
        title: "Berhasil menyalin!!",
        text: "Lanjut paste teks ke file..",
        icon: "success",
        timer: 1600
    });
}

// Function Convert QTA
document.getElementById('formQTA').addEventListener('change', ()=> {
    let fr = new FileReader();
    fr.readAsText(document.getElementById('formQTA').files[0]);
    fr.onload = function () {
        document.getElementById('teksQTA').innerHTML = fr.result;
    }
})

function convertQTA() {
    let arry = document.getElementById('teksQTA').value.trim();
    let barcodes = arry.split("\n").map(str => str.replace(/\s/g, ''));
    barcodes.sort((a,b)=> a.substr(2, 7).localeCompare(b.substr(2, 7)));
    let newBarcodes = barcodes.map(a => `${a.slice(10)},1\n`);        
    document.getElementById('result2').innerHTML = newBarcodes.join('');
    Swal.fire({
        icon: "success",
        title: "Berhasil!",
        showConfirmButton: false,
        timer: 1100
    });
}
document.getElementById('btn2').addEventListener('click', convertQTA);

function copy2() {
    let text = document.getElementById("result2");
    text.select();
    text.setSelectionRange(0,9999);
    document.execCommand("copy");
    Swal.fire({
        title: "Berhasil menyalin!!",
        text: "Lanjut paste teks ke file..",
        icon: "success",
        timer: 1800
    });
}
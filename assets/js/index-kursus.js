$(document).ready(function() {
    $(".cari-kursus").click(function() {
        // $(".topmenu").removeClass("d-none");
        $(".pencarian1").css("right", "0");
        // $(".topmenu").css("background", "blue");
    });

    $(".keluar").click(function() {
        // .dblclick

        $(".pencarian1").css("right", "-100vw");
    });
});


$(document).ready(function() {
    $(".checkout").click(function() {
        // $(".topmenu").removeClass("d-none");
        $(".chekout5").css("right", "0");
        // $(".topmenu").css("background", "blue");
    });

    $(".bag-head").click(function() {
        // .dblclick

        $(".chekout5").css("right", "-100vw");
    });
});


// Saat pengguna menggulir ke bawah 80px dari bagian atas dokumen, ubah ukuran padding bar navigasi dan ukuran font logo
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "10px 10px";
        document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("navbar").style.padding = "20px 10px";
        document.getElementById("logo").style.fontSize = "25px";
    }
}
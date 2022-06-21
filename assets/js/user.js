$(document).ready(function() {
    $(".pengaturan").click(function() {
        $(".form-edit").css("right", "0");
    });

    $(".close").click(function() {
        $(".form-edit").css("right", "-100vw");
    });
});


$(document).ready(function() {
    $(".kursus").click(function() {
        $(".kursus-saya").css("z-index", "5");
        $(".pesan-saya").css("z-index", "4");
        $(".sertifikat-saya").css("z-index", "3");
        $(".pesan-lengkap").css("z-index", "2");
        $(".edit-profile").css("z-index", "1");
    });

    $(".pesan").click(function() {
        $(".pesan-saya").css("z-index", "5");
        $(".kursus-saya").css("z-index", "4");
        $(".sertifikat-saya").css("z-index", "3");
        $(".pesan-lengkap").css("z-index", "2");
        $(".edit-profile").css("z-index", "1");
    });

    $(".sertifikat").click(function() {
        $(".pesan-saya").css("z-index", "4");
        $(".kursus-saya").css("z-index", "3");
        $(".sertifikat-saya").css("z-index", "5");
        $(".pesan-lengkap").css("z-index", "2");
        $(".edit-profile").css("z-index", "1");
    });

    $(".edit").click(function() {
        $(".pesan-saya").css("z-index", "1");
        $(".kursus-saya").css("z-index", "2");
        $(".sertifikat-saya").css("z-index", "3");
        $(".pesan-lengkap").css("z-index", "4");
        $(".edit-profile").css("z-index", "5");

    });
    $(".card-pesan").click(function() {
        $(".pesan-saya").css("z-index", "1");
        $(".kursus-saya").css("z-index", "2");
        $(".sertifikat-saya").css("z-index", "3");
        $(".pesan-lengkap").css("z-index", "5");
        $(".edit-profile").css("z-index", "4");
    });
});
$(document).ready(function() {
    $(".sign-up").click(function() {
        $(".registrasi").css("left", "0");
    });

    $(".close").click(function() {
        $(".registrasi").css("left", "-100vw");
    });
});
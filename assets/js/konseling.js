$(document).ready(function() {
    $(".kirim").click(function() {
        $(".submit").css("right", "0");
    });
    $(".batal").click(function() {
        $(".submit").css("right", "-100vw");
    });
});
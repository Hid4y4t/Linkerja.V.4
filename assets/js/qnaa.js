$(document).ready(function() {
    $(".qnastar").click(function() {
        $(".qna").css("left", "0");
    });

    $(".keluar").click(function() {
        $(".qna").css("left", "-100vw");
    });
});
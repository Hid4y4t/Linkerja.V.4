$(document).ready(function() {
    $(".soal .button").click(function() {
        var button = $(this);
        var currentSection = button.parents(".section");
        var currentSectionIndex = currentSection.index();
        var headerSection = $('.steps li').eq(currentSectionIndex);
        currentSection.removeClass("is-active").next().addClass("is-active");
        headerSection.removeClass("is-active").next().addClass("is-active");

        $(".soal").submit(function(e) {
            e.preventDefault();
        });

        if (currentSectionIndex === 3) {
            $(document).find(".soal .section").first().addClass("is-active");
            $(document).find(".steps li").first().addClass("is-active");
        }
    });
});
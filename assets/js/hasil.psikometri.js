var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["R", "I", "A", "S", "E", "C"],
        datasets: [{
            label: 'HASIL TES RIASEC',
            data: [12, 30, 20, 25, 60, 3],
            backgroundColor: [
                'rgba(255, 99, 132 )',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192 )',
                'rgba(153, 102, 255 )',
                'rgba(255, 159, 64)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});




const rows = Array.from(document.querySelectorAll('tr'));

function slideOut(row) {
    row.classList.add('slide-out');
}

function slideIn(row, index) {
    setTimeout(function() {
        row.classList.remove('slide-out');
    }, (index + 5) * 200);
}

rows.forEach(slideOut);

rows.forEach(slideIn);



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});
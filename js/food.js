let allMenuTabs = document.querySelectorAll('.menu-tabs a');
allMenuTabs.forEach(tab => tab.addEventListener('click', e => {
    allMenuTabs.forEach(remove => {
        remove.classList.remove('new');
    })
    tab.classList.add('new')
}))
$(() => {
    $('.openSearch').click((kirchiespy) => {
        kirchiespy.preventDefault();
        $('.search').toggleClass('active');
        $('body').toggleClass('active');
    })
    $('.closeSearch').click((amalik) => {
        amalik.preventDefault();

        $('.search').removeClass('active')
        $('body').toggleClass('active');
        // $('.search').addClass('active2')
    })
    $(".menu-tabs a ").click(function(e) {
        e.preventDefault();
        let activeLinkId = $(this).attr("href");
        $(".food").removeClass("active");
        $(".food" + activeLinkId).addClass("active ");



    });
    $(".togglers a ").click(function(e) {
        e.preventDefault();
        let activeLinkId2 = $(this).attr("href");
        $(".contentBox").removeClass("active");
        $(".contentBox" + activeLinkId2).addClass("active ");



    });
    $(this).scroll(() => {
            if ($(this).scrollTop() > 80) {
                $('header').addClass('sticky');
            } else {
                $('header').removeClass('sticky');
            }
        })
        // $('.counter').counterUp({

    //     time: 1000,
    //     loop: true
    // });
    $('#review_slider').owlCarousel({
        items: 1,
        margin: 10,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        nav: true,
        dots: false,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        autoplayHoverPause: true,


    })
    $('.toggler').click((e) => {
        $('.navigation').toggleClass('active')

    })
    $('.navigation ul li a').click(e => {

        $('.navigation').toggleClass('active')

    })
    $('#openForm').on('click', (e) => {
        $('.tableContent').toggleClass('active');
        $('body').toggleClass('active');
    })
    $('.formClose').on('click', (e) => {
        $('.tableContent').toggleClass('active');
        $('body').toggleClass('active');
    })
    $('.gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        width: 200,
        gallery: {
            enabled: true
        }
    });
    $('.closeCart').on('click', e => {

        $('.shadow').removeClass('active');
        $('.cartPage').removeClass('active')

    })
    $('.modal-header').on('click', e => {

        $('.shadow').removeClass('active');
        $('.cartPage').removeClass('active')
    })
    $(".shadow").on('click', e => {
        $('.cartPage').removeClass('active')
        $('.shadow').removeClass('active');

    })
});
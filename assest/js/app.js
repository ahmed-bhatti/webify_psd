$('#project_carousel').owlCarousel({
    loop:true,
    margin:24,
    dots:false,
    nav:false,
    smartspeed:1000,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('#project_carousel1').owlCarousel({
    loop:true,
    margin:24,
    dots:false,
    autoWidth:true,
    nav:true,
    smartspeed:1000,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
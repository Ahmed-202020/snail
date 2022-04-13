function consultant_slider(){
    var owl = $("#consultant-slider");
    let cards = document.querySelectorAll(".slider-1 .card") ; 
    if(cards.length >= 5){
        owl.owlCarousel({
            loop: true ,
            margin: 15,
            navigation: true,
            items: 5,
            smartSpeed: 1000,
            dots: true,
            autoplay: true,
            center: true,
            autoplayTimeout: 2000,
            dotsEach: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767: {
                    items: 3
                },
                992: {
                    items: 5
                },
                1920: {
                    items: 5
                }
            }
        });
    }else{
        owl.owlCarousel({
            loop: false ,
            margin: 15,
            navigation: true,
            items: 5,
            smartSpeed: 1000,
            dots: true,
            autoplay: true,
            center: false,
            autoplayTimeout: 2000,
            dotsEach: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767: {
                    items: 3
                },
                992: {
                    items: 5
                },
                1920: {
                    items: 5
                }
            }
        });
    }
}
consultant_slider();


function clients_preview(){
    var owl = $("#preview-slider");
    let cards = document.querySelectorAll(".slider-2 .card") ; 
    if(cards.length >= 3){
        owl.owlCarousel({
            loop: true ,
            margin: 75 ,
            navigation: true,
            items: 3 ,
            smartSpeed: 1000,
            dots: true,
            autoplay: true,
            center: true,
            autoplayTimeout: 2000,
            dotsEach: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1920: {
                    items: 3
                }
            }
        });
    }else{
        owl.owlCarousel({
            loop: false ,
            margin: 75 ,
            navigation: true,
            items: 3 ,
            smartSpeed: 1000,
            dots: true,
            autoplay: true,
            center: false,
            autoplayTimeout: 2000,
            dotsEach: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1920: {
                    items: 3
                }
            }
        });
        $(".vip-consultant.clients-preview .container-fluid").css("margin-right" , "0") ;
    }
}
clients_preview();
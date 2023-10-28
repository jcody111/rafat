jQuery(document).ready(function ($) {

    let closeIcon = document.getElementById("close")
    let box = document.getElementById("right__side-menu")
    let openIcon = document.getElementById("hamber__icon")

    closeIcon.addEventListener('click', function () {
        box.style.transform = "translateX(400px)"
        openIcon.style.zIndex = "1001"

    })

    openIcon.addEventListener('click', function () {
        box.style.transform = "translateX(0px)"
        openIcon.style.zIndex = "0"
    })

    /* ===================================== Slider */
    if ($(".main-slider").length) {
        $(".main-slider").owlCarousel({
            items: 1,
            loop: true,
            rewind: false,
            navText: ["", ""],
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 5000,
            slideSpeed: 600,
            smartSpeed: 1000,
            responsiveClass: true,
            margin: 0,
        });
    }

    /* ===================================== map */
    if ($(".map").length) {
        let map = $(".map");
        map.each(function (i, el) {
            let latitude = $(el).attr("data-latitude");
            let longitude = $(el).attr("data-longitude");
            let options = {
                scrollwheel: true,
                maptype: "TERRAIN",
                markers: [
                    {
                        latitude: latitude,
                        longitude: longitude,
                    },
                ],
                icon: {
                    image: "http://www.google.com/mapfiles/marker.png",
                    iconsize: [20, 34],
                    shadowsize: [0, 0],
                    iconanchor: [9, 34],
                    shadowanchor: [0, 0],
                },
                latitude: latitude,
                longitude: longitude,
                zoom: 16,
            };
            $(el).gMap(options);
        });
    }

    /* ===================================== Fancybox gallery */
    if ($(".fancybox-gallery").length) {
        $('[data-fancybox*="gallery"]').fancybox({
        loop: false,
        buttons: [
            "zoom",
            //"share",
            "slideShow",
            "fullScreen",
            //"download",
            "thumbs",
            "close",
        ],
    
        lang: rtl === true ? "fa" : "en",
        i18n: {
            fa: {
            CLOSE: "بستن",
            NEXT: "بعدی",
            PREV: "قبلی",
            ERROR: "اشکال در بارگذاری تصویر <br/> لطفا مجددا تلاش کنید",
            PLAY_START: "نمایش اسلایشو",
            PLAY_STOP: "توقف اسلایشو",
            FULL_SCREEN: "تمام صفحه",
            THUMBS: "تصاویر بندانگشتی",
            DOWNLOAD: "دانلود",
            SHARE: "اشتراک گذاری",
            ZOOM: "بزرگنمایی",
            },
        },
        });
        $.fancybox.defaults.animationEffect = "fade";
    }
});
(function ($) {
    console.log(1+1);
    
    'use strict';

    //  Search Form Open
    $('#searchOpen').on('click', function () {
        $('.search-form').addClass('open');
    });
    $('#searchClose').on('click', function () {
        $('.search-form').removeClass('open');
    });


    // Accordions
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
    });




    // filter
    $(document).ready(function () {
        var containerEl = document.querySelector('.filtr-container');
        var filterizd;
        if (containerEl) {
            filterizd = $('.filtr-container').filterizr({});
        }
        //Active changer
        $('.fltr-controls').on('click', function () {
            $('.fltr-controls').removeClass('active');
            $(this).addClass('active');
        });
    });

    // animation scroll js
    var html_body = $('html, body');
    $('nav a, .page-scroll').on('click', function () { //use page-scroll class in any HTML tag for scrolling
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 90
                }, 1500, 'easeInOutExpo');
                return false;
            }
        }
    });

    // easeInOutExpo Declaration
    jQuery.extend(jQuery.easing, {
        easeInOutExpo: function (x, t, b, c, d) {
            if (t === 0) {
                return b;
            }
            if (t === d) {
                return b + c;
            }
            if ((t /= d / 2) < 1) {
                return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            }
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    });

    // back to top button
    $('.back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000, 'easeInOutExpo');
    });

    // -----------------------------
    //  Count Up
    // -----------------------------
    function counter() {
        var oTop;
        if ($('.count').length !== 0) {
            oTop = $('.count').offset().top - window.innerHeight;
        }
        if ($(window).scrollTop() > oTop) {
            $('.count').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
            });
        }
    }
    // -----------------------------
    //  On Scroll
    // -----------------------------
    $(window).on('scroll', function () {
        counter();
    });


})(jQuery);
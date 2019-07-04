
$(document).ready(function () {

    $('.invest-modal__button .btn').click(function(e){
        e.preventDefault();
        $.fancybox.close();
    });

    // Accordion
    if ($(window).width() >= 1100) {
        $(function(){
            $('.pd__block_items .faq__accordion-items').trigger('click');
        });
    }
    if ($(window).width() <= 1000) {
        $('.remove-fancybox-mobile').each(function(){
            $('.remove-fancybox-mobile').removeAttr('data-fancybox').removeAttr('data-type').removeAttr('data-src').attr('target', '_blank');
        })

    }

    $('.faq__accordion-items').click(function () {
        $this = $(this);
        $target = $this.parent().find(".faq__content");
        if ($target.hasClass('active')) {
            $target.prev().removeClass('active');
            $target.removeClass('active').slideUp(350);
        } else {
            $('.faq__accordion-items').removeClass('active');
            $('.faq__content').removeClass('active').slideUp(350);
            $target.prev().addClass('active');
            $target.addClass('active').slideDown(350);
        }
        setTimeout(function(){
            $('html, body').animate({ scrollTop: $this.offset().top - 90}, 300);
        },350);

        return false;
    });

    $('.pickup__question .btn:not(.btn-not-closed)').click(function () {
        $(this).parent().parent().parent().parent().addClass("payment__content_hide");
    });

    $('.pd__table-link').click(function () {
        $(this).toggleClass("active");
        $(".pd__table-td").toggleClass("active");
    });

    $('.pd__table-delite').click(function () {
        $(this).parent().parent().slideUp();
    });




    $('.ycf__coll-title_visible').click(function () {
        var title = $(this).next();
        $('.ycf__content_visible').not(title).addClass('ycf__content_hide');
        $(this).next().toggleClass('ycf__content_hide');
        $('html, body').animate({ scrollTop: title.offset().top - 200 }, 500);
    });






    // Offers slider
    if ($(".offers__slick").length > 0) {
        $('.offers__slick').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000

        });
        $('.arrow.arrow_prev').click(function (event) {
            $(this).parents('.offers__body').find('.offers__slick').slick('slickPrev');
        });
        $('.arrow.arrow_next').click(function (event) {
            $(this).parents('.offers__body').find('.offers__slick').slick('slickNext');
        });
    }

    if ($("#myChart").length > 0) {
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'doughnut',

            // The data for our dataset
            data: {
                labels: ['Мой сейф + ИИС', 'Еврооблигации', 'Базовый тариф', 'технологии будущего + ИИС', 'Золотое сечение +', 'Персональный брокер + ИИС'],
                datasets: [{
                    backgroundColor: ['#172e44', '#919090', '#63a945', '#295784', '#b56718', '#5779ba'],
                    data: [16.5, 16.5, 11.5, 16.5, 16.5, 8.5],
                    borderColor: '#fff',
                    borderWidth: 5,
                    //hoverBorderColor: '#FFFFFF',
                    //weight: 0.1,
                    //borderAlign:'inner',
                }]
            },

            // Configuration options go here
            options: {
                legend: {
                    display: false
                },
                //tooltips: {enabled: false},
                hover: {
                    mode: null
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                cutoutPercentage: 85,
                responsive: true,
                aspectRatio: 1
            }
        });
    }

    if ($("#myChartPD").length > 0) {
        var ctxs = document.getElementById('myChartPD').getContext('2d');
        var charts = new Chart(ctxs, {
            // The type of charts we want to create
            type: 'doughnut',

            // The data for our dataset
            data: {
                labels: ['ПАО «Сургутнефтегаз»', 'ПАО «Магнит»', 'ПАО «Сбербанк»', 'Банк ВТБ (ПАО)', 'ПАО «Московская биржа»', 'ПАО «Интер РАО»', 'ПАО «НК «Роснефть»', 'ПАО «Группа компаний ПИК»', 'ПАО «Московская биржа»', 'ПАО «Интер РАО»', 'ПАО «НК «Роснефть»', 'Другое'],
                datasets: [{
                    backgroundColor: ['#00a1a7', '#00b453', '#9b6d8c', '#e5dc3b', '#28a8c6', '#347272', '#dbadc7', '#36ad8a', '#ff6d4a', '#969696', '#bcbcbc', '#909847'],
                    data: [10, 10, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
                    borderColor: '#fff',
                    borderWidth: 5,
                    //hoverBorderColor: '#FFFFFF',
                    //weight: 0.1,
                    //borderAlign:'inner',
                }]
            },

            // Configuration options go here
            options: {
                legend: {
                    display: false
                },
                //tooltips: {enabled: false},
                hover: {
                    mode: null
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                cutoutPercentage: 88,
                responsive: true,
                aspectRatio: 1
            }
        });
    }

    if ($("#linear").length > 0) {
        window.onload = function() {
            var ctxt = document.getElementById('linear').getContext('2d');
            window.myLine = Chart.Line(ctxt, {
                data: {
                    labels: ['12.11.18', '23.11.18', '05.12.18', '17.12.18', '28.12.18', '09.01.19', '20.01.19'],
                    datasets: [{
                        label: 'My First dataset',
                        borderColor: '#2db2ad',
                        backgroundColor: '#2db2ad',
                        fill: false,
                        data: [0, 5, -1, 2, 3, -2, 5],
                        yAxisID: 'y-axis-1',
                    }]
                },
                options: {
                    responsive: true,
                    hoverMode: 'index',
                    stacked: false,
                    title: {
                        display: true,
                    },
                    scales: {
                        yAxes: [{
                            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                            display: true,
                            position: 'left',
                            id: 'y-axis-1',
                        }],
                    },
                    legend: {
                        display: false
                    },
                    //tooltips: {enabled: false},
                    hover: {
                        mode: null
                    },
                    maintainAspectRatio: false,
                    responsive: true,
                }
            });
        };
    }

    if ($("#linearTwo").length > 0) {

        var ctxd = document.getElementById('linearTwo').getContext('2d');
        window.myLined = Chart.Line(ctxd, {
            data: {
                labels: ['12.11.18', '23.11.18', '05.12.18', '17.12.18', '28.12.18', '09.01.19', '20.01.19'],
                datasets: [{
                    label: 'My First dataset',
                    borderColor: '#2db2ad',
                    backgroundColor: '#2db2ad',
                    fill: false,
                    data: [0, 5, -1, 2, 3, -2, 5],
                    yAxisID: 'y-axis-2',
                }]
            },
            options: {
                responsive: true,
                hoverMode: 'index',
                stacked: false,
                title: {
                    display: true,
                },
                scales: {
                    yAxes: [{
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'left',
                        id: 'y-axis-2',
                    }],
                },
                legend: {
                    display: false
                },
                //tooltips: {enabled: false},
                hover: {
                    mode: null
                },
                maintainAspectRatio: false,
                responsive: true
            }
        });
    }

    /*/ DATEPICKER  /*/
    if ($(".datepicker-here").length > 0) {
        $('.datepicker-here ').datepicker({multipleDates: false});
    }

    if ($("#myChartCB").length > 0) {
        var ctxs = document.getElementById('myChartCB').getContext('2d');
        var charts = new Chart(ctxs, {
            // The type of charts we want to create
            type: 'doughnut',

            // The data for our dataset
            data: {
                labels: ['ПАО «Сургутнефтегаз»', 'ПАО «Магнит»', 'ПАО «Сбербанк»', 'Freeport-McMoRan Inc.', 'Tata Motors Corporation', 'Hasbro, Inc.', 'The Home Depot Inc.', 'Amazon.com, Inc'],
                datasets: [{
                    backgroundColor: ['#00a1a7', '#00b453', '#9b6d8c', '#e5dc3b', '#28a8c6', '#347272', '#dbadc7', '#36ad8a'],
                    data: [10, 10, 8, 10, 10, 8, 10, 10],
                    borderColor: '#fff',
                    borderWidth: 5,
                    //hoverBorderColor: '#FFFFFF',
                    //weight: 0.1,
                    //borderAlign:'inner',
                }]
            },

            // Configuration options go here
            options: {
                legend: {
                    display: false
                },
                //tooltips: {enabled: false},
                hover: {
                    mode: null
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                cutoutPercentage: 88,
                responsive: true,
                aspectRatio: 1
            }
        });
    }

    if ($("#myChartRUB").length > 0) {
        var ctxs = document.getElementById('myChartRUB').getContext('2d');
        var charts = new Chart(ctxs, {
            // The type of charts we want to create
            type: 'doughnut',

            // The data for our dataset
            data: {
                labels: ['ПАО «Сургутнефтегаз»', 'ПАО «Магнит»', 'ПАО «Сбербанк»'],
                datasets: [{
                    backgroundColor: ['#00a1a7', '#00b453', '#9b6d8c'],
                    data: [10, 10, 8],
                    borderColor: '#fff',
                    borderWidth: 5,
                    //hoverBorderColor: '#FFFFFF',
                    //weight: 0.1,
                    //borderAlign:'inner',
                }]
            },

            // Configuration options go here
            options: {
                legend: {
                    display: false
                },
                //tooltips: {enabled: false},
                hover: {
                    mode: null
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                cutoutPercentage: 88,
                responsive: true,
                aspectRatio: 1
            }
        });
    }

    if ($("#myChartUSD").length > 0) {
        var ctxs = document.getElementById('myChartUSD').getContext('2d');
        var charts = new Chart(ctxs, {
            // The type of charts we want to create
            type: 'doughnut',

            // The data for our dataset
            data: {
                labels: ['Freeport-McMoRan Inc.', 'Tata Motors Corporation', 'Hasbro, Inc.'],
                datasets: [{
                    backgroundColor: ['#e5dc3b', '#28a8c6', '#347272'],
                    data: [10, 10, 8],
                    borderColor: '#fff',
                    borderWidth: 5,
                    //hoverBorderColor: '#FFFFFF',
                    //weight: 0.1,
                    //borderAlign:'inner',
                }]
            },

            // Configuration options go here
            options: {
                legend: {
                    display: false
                },
                //tooltips: {enabled: false},
                hover: {
                    mode: null
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                cutoutPercentage: 88,
                responsive: true,
                aspectRatio: 1
            }
        });
    }

    if ($("#myChartEUR").length > 0) {
        var ctxs = document.getElementById('myChartEUR').getContext('2d');
        var charts = new Chart(ctxs, {
            // The type of charts we want to create
            type: 'doughnut',

            // The data for our dataset
            data: {
                labels: ['The Home Depot Inc.', 'Amazon.com, Inc'],
                datasets: [{
                    backgroundColor: ['#dbadc7', '#36ad8a'],
                    data: [10, 10],
                    borderColor: '#fff',
                    borderWidth: 5,
                    //hoverBorderColor: '#FFFFFF',
                    //weight: 0.1,
                    //borderAlign:'inner',
                }]
            },

            // Configuration options go here
            options: {
                legend: {
                    display: false
                },
                //tooltips: {enabled: false},
                hover: {
                    mode: null
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                cutoutPercentage: 88,
                responsive: true,
                aspectRatio: 1
            }
        });
    }

    // Offers slider
    if ($(".du-list__box-slick").length > 0) {
        $('.du-list__box-slick').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000

        });
        $('.arrow.arrow_prev').click(function (event) {
            $(this).parents('.du-list__box-row').find('.du-list__box-slick').slick('slickPrev');
        });
        $('.arrow.arrow_next').click(function (event) {
            $(this).parents('.du-list__box-row').find('.du-list__box-slick').slick('slickNext');
        });
    }





    function addSpaces(nStr) {
    	nStr += '';
    	x = nStr.split('.');
    	x1 = x[0];
    	x2 = x.length > 1 ? '.' + x[1] : '';
    	var rgx = /(\d+)(\d{3})/;
    	while (rgx.test(x1)) {
    		x1 = x1.replace(rgx, '$1' + ' ' + '$2');
    	}
    	return x1 + x2;
    };



    function calc() {
        var summa = parseInt($("#slider-non-linear-money .noUi-handle-lower[aria-valuetext]").attr("aria-valuetext"));
        var limit = parseInt($("#slider-step-value").text());
        var prs = parseFloat($('.calc').data('persent'));
        var parcent = 1 + prs / 100;
        //alert(summa);
        var total = summa * (Math.pow(parcent, limit)) - summa;

        total = parseFloat(total).toFixed(0);



        var month = total / 12 / limit;
        month = parseFloat(month).toFixed(0);

        total = addSpaces(total);
        month = addSpaces(month);
        $("#total_summ").html(total + "<span> ₽</span>");
        $("#month_summ").html(month + "<span> ₽</span>");
    }
    if ($("#slider-non-linear").length > 0) {
        var nonLinearSlider = document.getElementById('slider-non-linear');
        noUiSlider.create(nonLinearSlider, {
            start: [3],
            behaviour: 'tap',
            connect: true,
            step: 1,
            range: {
                'min': [1],
                'max': [9]
            }
        });
    }
    if ($("#slider-step-value").length > 0) {
        var stepSliderValueElement = document.getElementById('slider-step-value');
        nonLinearSlider.noUiSlider.on('update', function(values, handle) {
            var year = 'год';
            var val = parseFloat(values[handle]);
            if (val > 1 && val < 5) {
                year = 'года';
            }
            if (val > 4 && val < 10) {
                year = 'лет';
            }
            stepSliderValueElement.innerHTML = val + " " + year;
            calc();
        });
    }
    if ($("#slider-non-linear-money").length > 0) {
        var nonLinearSliderMoney = document.getElementById('slider-non-linear-money');
        noUiSlider.create(nonLinearSliderMoney, {
            start: [1000000],
            behaviour: 'tap',
            connect: true,
            step: 10000,
            range: {
                'min': [0],
                'max': [10000000]
            }
        });
    }
    if ($("#slider-step-value-money").length > 0) {
        var stepSliderValueElementMoney = document.getElementById('slider-step-value-money');
        nonLinearSliderMoney.noUiSlider.on('update', function(values, handle) {
            var val = parseInt(values[handle]);
            val = addSpaces(val);
            stepSliderValueElementMoney.innerHTML = val;
            calc();
        });
    }

    // Offers slider
    if ($(".sidebar__slick").length > 0) {
        $('.sidebar__slick').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
        });
        $('.arrow.arrow_prev').click(function (event) {
            $(this).parents('.sidebar__row').find('.sidebar__slick').slick('slickPrev');
        });
        $('.arrow.arrow_next').click(function (event) {
            $(this).parents('.sidebar__row').find('.sidebar__slick').slick('slickNext');
        });
    }

    // Bo body slider
    if ($(".bo-body__slick").length > 0) {
        $('.bo-body__slick').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1500,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 1100,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
            ]
        });
        $('.bo-body__arrow.bo-body__arrow_left').click(function (event) {
            $(this).parents('.bo-body__block').find('.bo-body__slick').slick('slickPrev');
        });
        $('.bo-body__arrow.bo-body__arrow_right').click(function (event) {
            $(this).parents('.bo-body__block').find('.bo-body__slick').slick('slickNext');
        });
    }

    // About services tabs
    if ($(".bo-body__tab").length > 0) {
        $(function() {
            $('.bo-body__top').each(function() {
                $(this).find('.bo-body__tab').each(function(i) {
                    $(this).click(function(){
                        $(this).addClass('active').siblings().removeClass('active').closest('.bo-body__content').find('.bo-body__block').removeClass('active').eq(i).addClass('active');
                    });
                });
            });
        })
    }

    // Offer bo slider
    if ($(".offer-bo__slick").length > 0) {
        $('.offer-bo__slick').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                  breakpoint: 1100,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
            ]
        });
        $('.bo-body__arrow.bo-body__arrow_left').click(function (event) {
            $(this).parents('.offer-bo__body').find('.offer-bo__slick').slick('slickPrev');
        });
        $('.bo-body__arrow.bo-body__arrow_right').click(function (event) {
            $(this).parents('.offer-bo__body').find('.offer-bo__slick').slick('slickNext');
        });
    }

    // About services tabs
    if ($(".offer-bo__tab").length > 0) {
        $(function() {
            $('.offer-bo__top').each(function() {
                $(this).find('.offer-bo__tab').each(function(i) {
                    $(this).click(function(){
                        $(this).addClass('active').siblings().removeClass('active').closest('.offer-bo').find('.offer-bo__body').removeClass('active').eq(i).addClass('active');
                    });
                });
            });
        })
    }

    // Du list tabs
    if ($(".du-list__tab").length > 0) {
        $(function() {
            $('.du-list__top').each(function() {
                $(this).find('.du-list__tab').each(function(i) {
                    $(this).click(function(){
                        $(this).addClass('active').siblings().removeClass('active').closest('.du-list').find('.du-list__item_block').removeClass('active').eq(i).addClass('active');
                    });
                });
            });
        })
    }

    // Analytics slider
    if ($(".analytics__slick").length > 0) {
        $('.analytics__slick').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
        });
        $('.bo-body__arrow.bo-body__arrow_left').click(function (event) {
            $(this).parents('.analytics__body').find('.analytics__slick').slick('slickPrev');
        });
        $('.bo-body__arrow.bo-body__arrow_right').click(function (event) {
            $(this).parents('.analytics__body').find('.analytics__slick').slick('slickNext');
        });
    }

    /*************************************/
        function calc1() {

            var summa = parseInt($("#slider-non-linear-money1 .noUi-handle-lower[aria-valuetext]").attr("aria-valuetext"));
            var limit = parseInt($("#slider-step-value1").text());
            var sep = parseInt($("#slider-non-linear-summ .noUi-handle-lower[aria-valuetext]").attr("aria-valuetext"));
            var prs = 20;//parseFloat($('.calc').data('persent'));
            var parcent = 0.2;

            var portfel = 0;
            for(var i=1; i<=limit; i++){
                if(i==1){
                    portfel = summa * (1 + parcent);
                } else {
                    portfel = (portfel+sep) * (1 + parcent);
                }
                console.log(i+". "+portfel+" sep: "+sep);
            }
            //$("#total_summ").html(portfel + "<span>Ñ€ÑƒÐ±</span>");

            if(sep<400000){
                var nv = sep*0.13;
            } else {
                var nv = 52000;
            }

            var total = portfel + nv - summa - sep * (limit - 1);
            total = parseFloat(total).toFixed(0);

            var month = total / (limit * 12);
            month = parseFloat(month).toFixed(0);

            total = addSpaces(total);
            month = addSpaces(month);
            $("#total_summ").html(total + "<span> ₽</span>");
            $("#month_summ").html(month + "<span> ₽</span>");
        }
        var nonLinearSlider1 = document.getElementById('slider-non-linear1');
        noUiSlider.create(nonLinearSlider1, {
            start: [4],
            behaviour: 'tap',
            connect: true,
            step: 1,
            range: {
                'min': [3],
                'max': [10]
            }
        });
        var stepSliderValueElement1 = document.getElementById('slider-step-value1');
        nonLinearSlider1.noUiSlider.on('update', function(values, handle) {
            var year = 'год';
            var val = parseFloat(values[handle]);
            if (val > 1 && val < 5) {
                year = 'годa';
            }
            if (val > 4 && val < 20) {
                year = 'лет';
            }
            stepSliderValueElement1.innerHTML = val + " " + year;
            calc1();
        });
        var nonLinearSliderMoney1 = document.getElementById('slider-non-linear-money1');
        noUiSlider.create(nonLinearSliderMoney1, {
            start: [140000],
            behaviour: 'tap',
            connect: true,
            step: 10000,
            range: {
                'min': [0],
                'max': [1000000]
            }
        });
        var stepSliderValueElementMoney1 = document.getElementById('slider-step-value-money1');
        nonLinearSliderMoney1.noUiSlider.on('update', function(values, handle) {
            var val = parseInt(values[handle]);
            val = addSpaces(val);
            stepSliderValueElementMoney1.innerHTML = val;
            calc1();
        });
        var nonLinearSliderSumm = document.getElementById('slider-non-linear-summ');
        noUiSlider.create(nonLinearSliderSumm, {
            start: [140000],
            behaviour: 'tap',
            connect: true,
            step: 10000,
            range: {
                'min': [0],
                'max': [1000000]
            }
        });
        var stepSliderValueElementSumm = document.getElementById('slider-step-value-summ');
        nonLinearSliderSumm.noUiSlider.on('update', function(values, handle) {
            var val = parseInt(values[handle]);
            val = addSpaces(val);
            stepSliderValueElementSumm.innerHTML = val;
            calc1();
        });

        $('[data-fancybox-pdf]').fancybox({
        	iframe : {
        		preload : true
        	}
        })

});

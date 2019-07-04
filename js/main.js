
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


    
    

    /*/ DATEPICKER  /*/
    if ($(".datepicker-here").length > 0) {
        $('.datepicker-here ').datepicker({multipleDates: false});
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

/********************************************Optimized functions****************************************************/

$(document).ready(function(){
// sliders 
function startSlider(slider_box, arrowPrev_block_name, arrowNext_block_name, parent_slider_block){
 if ($(slider_box).length > 0) {
    switch(slider_box){
      case ".offers__slick":
      case ".du-list__box-slick" :
      $(slider_box).slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
      break;
      case ".offer-bo__slick":
      $(slider_box).slick({
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
      break;
      case ".sidebar__slick" : 
      $(slider_box).slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
      break;
      case ".bo-body__slick" :        
      $(slider_box).slick({
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
      break;
      case ".analytics__slick": 
      $(slider_box).slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });
      break;
  }
  $(arrowPrev_block_name).click(function (event) {
    $(this).parents(parent_slider_block).find(slider_box).slick('slickPrev');
});
  $( arrowNext_block_name).click(function (event) {
    $(this).parents(parent_slider_block).find(slider_box).slick('slickNext');
});
}

}

startSlider(".offers__slick",".arrow.arrow_prev",".arrow.arrow_next",".offers__body");
startSlider(".du-list__box-slick",".arrow.arrow_prev",".arrow.arrow_next",".du-list__box-row");
startSlider(".sidebar__slick",".arrow.arrow_prev",".arrow.arrow_next",".sidebar__row");
startSlider(".bo-body__slick",".bo-body__arrow.bo-body__arrow_left",".bo-body__arrow.bo-body__arrow_right",".bo-body__block");
startSlider(".offer-bo__slick",".bo-body__arrow.bo-body__arrow_left",".bo-body__arrow.bo-body__arrow_right",".offer-bo__body");
startSlider(".analytics__slick",".bo-body__arrow.bo-body__arrow_left",".bo-body__arrow.bo-body__arrow_right",".analytics__body");    
// sliders

// tabs
function startTabs(tab_item, tab_block, tab_block_parent, tab_block_content){
   if ($(tab_item).length > 0) {
    $(function() {
        $(tab_block).each(function() {
            $(this).find(tab_item).each(function(i) {
                $(this).click(function(){
                    $(this).addClass('active').siblings().removeClass('active').closest(tab_block_parent).find(tab_block_content).removeClass('active').eq(i).addClass('active');
                });
            });
        });
    })
}
}

startTabs(".bo-body__tab",'.bo-body__top','.bo-body__content','.bo-body__block');
startTabs(".offer-bo__tab",'.offer-bo__top','.offer-bo','.offer-bo__body');
startTabs(".du-list__tab",'.du-list__top','.du-list','.du-list__item_block');


// tabs

// charts
function startCharts(chart_block, cutoutPercentage){
    if ($(chart_block).length > 0) {
        var ctx = document.querySelector(chart_block).getContext('2d');
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
                cutoutPercentage: cutoutPercentage,
                responsive: true,
                aspectRatio: 1
            }
        });
    }

}

startCharts('#myChart', 85);
startCharts('#myChartPD', 88);
startCharts('#myChartCB', 88);
startCharts('#myChartRUB', 88);
startCharts('#myChartUSD', 88);
startCharts('#myChartEUR', 88); 




function startChartLinear(chart_linear_block, yAxisID, label ){
 if ($(chart_linear_block).length > 0) {
    var ctxt = document.querySelector(chart_linear_block).getContext('2d');
    window.myLine = Chart.Line(ctxt, {
        data: {
            labels: ['12.11.18', '23.11.18', '05.12.18', '17.12.18', '28.12.18', '09.01.19', '20.01.19'],
            datasets: [{
                label: label,
                borderColor: '#2db2ad',
                backgroundColor: '#2db2ad',
                fill: false,
                data: [0, 5, -1, 2, 3, -2, 5],
                yAxisID: yAxisID,
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
                            id:yAxisID,
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
}

startChartLinear("#linear", 'y-axis-1','My First dataset');
startChartLinear("#linearTwo", 'y-axis-2','My Second dataset');
});


// charts



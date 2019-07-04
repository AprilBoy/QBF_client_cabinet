$(document).ready(function () {


    $('.footer__links ul li a[href="mailto:MAIL@QBFIN.RU"]').hide().prev().remove(); //удалить после беккенда
    $('.footer__links ul li a[href="tel:+74959889821"]').html("+7 (499) 110-66-82");  //удалить после беккенда
    $('.sidebar__contacts-title:contains("Техническая поддержка аккаунта")').next('a').html("+7 (499) 110-66-82");   //удалить после беккенда
    $('.main-breadcrumbs__link:contains("Редактировать >"):nth(0)').attr('href', 'account-customer-questionnaire.html');   //удалить после беккенда
    $('.main-breadcrumbs__link:contains("Редактировать >"):nth(1)').attr('href', 'questionnaire-investment-profile.html');   //удалить после беккенда
    $('[src="images/main/header-icon-2.svg"]').parent().attr('href', 'products-IIS.html');  //удалить после беккенда
    $('.iis-link:not(.not-iis-link)').attr('href', 'products-IIS.html');  //удалить после беккенда
    $('.user__replenish').attr('href', 'requisites.html');  //удалить после беккенда
    $('.user__exit').attr('href', 'cabinet-login.html');  //удалить после беккенда

    $('li a:contains("аккаунт")').attr('href', 'client-account.html');  //удалить после беккенда
    $('li a:contains("QBF ||| Portfolio management")').attr('href', 'https://qbfin.ru').attr('target', '_blank');  //удалить после беккенда
    $('li a:contains("QBF ||| Aset management")').attr('href', 'http://qbfam.ru').attr('target', '_blank');  //удалить после беккенда


    $('li a:contains("Реквизиты")').attr('href', 'requisites.html');  //удалить после беккенда

    $('.user__messages').attr('href', 'notifications-and-messages.html');  //удалить после беккенда
    $('.user__name').click(function () {  //удалить после беккенда
        window.location.href = "your-case-full.html";  //удалить после беккенда
    });  //удалить после беккенда
    $('.main-menu ul li a:contains("аккаунт")').parent().after('<li><a href="frequently-asked-questions.html">FAQ</a></li>');  //удалить после беккенда


    // Phone mask
    if ($('.field-phone').length > 0) {
        $(".field-phone").mask("+7 999 999 99 99");
    }
    if ($('.field-number').length > 0) {
        $(".field-number").mask("9 9 9 9 9 9");
    }
    if ($('.field-data').length > 0) {
        $(".field-data").mask("99.99.9999");
    }
    if ($('.field-seria').length > 0) {
        $(".field-seria").mask("99 99");
    }
    if ($('.field-numer').length > 0) {
        $(".field-numer").mask("999 99 99");
    }
    if ($('.field-code').length > 0) {
        $(".field-code").mask("999 - 999");
    }
    if ($('.field-snils').length > 0) {
        $(".field-snils").mask("999 - 999 - 999 - 99");
    }
    if ($('.field-inn').length > 0) {
        $(".field-inn").mask("999999999");
    }


    $('.header-mobile__burger--js').click(function () {
        /*var height = $('.sidebar').height();
        var heightHeaderMobile = $('.header-mobile').height();*/
        $('body').css('overflow', 'hidden').css('height', '100vh').css('background', '#333');
        $('.header-mobile__burger--js').hide();
        $('.header-mobile__close--js').show();
        $('.sidebar').addClass('sidebar_active');
        $('.header-entrance-mobile').addClass('header-entrance-mobile_active');
    });
    $('.header-mobile__close--js').click(function () {
        $('body').css('overflow', 'auto').css('height', 'auto').css('background', '#fff');;
        $('.header-mobile__burger--js').show();
        $('.header-mobile__close--js').hide();
        $('.sidebar').removeClass('sidebar_active');
        $('.header-entrance-mobile').removeClass('header-entrance-mobile_active');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
    });
    $('.scroll-top a').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 300);
        return false;
    });

    if ($('.user_fixed').length > 0) {
        $(window).scroll(function () {
            if ($(window).width() > 1100) {
                if ($(this).scrollTop() > 75) {
                    var wrapperContent = $('.content').innerWidth();
                    var wrapperWidth = $('.wrapper').innerWidth();
                    //alert(wrapperContent);
                    $('.user_fixed').addClass('active').width(wrapperContent / 100 * wrapperWidth);
                    $('.top-panel').first().css('padding-top', '105px');
                } else {
                    $('.user_fixed').removeClass('active').width('auto');
                    $('.top-panel').first().css('padding-top', '0px');
                }
            }
        });
    }


    $('body').on('click', '.add-document--js', function (e) {
        e.preventDefault();

        var html = '<div class="fields__row flex">';
        html = html + '<div class="fields__col">';
        html = html + '<label class="fields__label">';
        html = html + '<div class="fields__name">Страна</div>';
        html = html + '<input type="text" class="field">';
        html = html + '</label>';
        html = html + '</div>';
        html = html + '<div class="fields__col">';
        html = html + '<label class="fields__label">';
        html = html + '<div class="fields__name">ИНН / Аналог</div>';
        html = html + '<input type="text" class="field">';
        html = html + '</label>';
        html = html + '</div>';
        html = html + ' <span class="fields__row-delete fields__row-delete--js" title="Удалить строку"><img src="images/main/delete-icon.png" alt=""></span>';
        html = html + '</div>';

        $(this).parent().before(html);

    });
    $('body').on('click', '.fields__row-delete--js', function () {
        $(this).parent().remove();
    });
});


$(function () {
    'use strict';

    var url = 'libs/jQuery-File-Upload-9.30.0/server/php/';

    $('#fileupload').fileupload({
            url: url,
            dataType: 'json',
            done: function (e, data) {
                $.each(data.result.files, function (index, file) {
                    $('<p/>').html('<span class="files__delete"><img src="images/main/delete-icon.png" alt=""></span>' + file.name).appendTo('#files');
                });
            },
            progressall: function (e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
            }
        }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');


    $('#fileupload-2').fileupload({
            url: url,
            dataType: 'json',
            done: function (e, data) {
                $.each(data.result.files, function (index, file) {
                    $('<p/>').html('<span class="files__delete"><img src="images/main/delete-icon.png" alt=""></span>' + file.name).appendTo('#files-2');
                });
            },
            progressall: function (e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
            }
        }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');

    $('#fileupload-3').fileupload({
            url: url,
            dataType: 'json',
            done: function (e, data) {
                $.each(data.result.files, function (index, file) {
                    $('#files-3').html(file.name);
                });
            },
            progressall: function (e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
            }
        }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');

    $('.files__list').on('click', '.files__delete', function () {
        $(this).parent().remove();
    });

    $(".btn-not-closed").click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 240;
        $('body,html').animate({scrollTop: top}, 1200);
    });

    $(".pickup__info .btn:not(.btn-not-closed)").click(function (event) {
        $('body,html').animate({scrollTop: 0}, 100);
    });


});


/********************************************Optimized functions****************************************************/
// titleToggle
    function titleSlideToggle(title_block, title_block_items, hide_class) {
         $(title_block).click(function () {
        var title = $(this).next();
        $(title_block_items).not(title).addClass(hide_class);
        title.toggleClass(hide_class);
        $('html, body').animate({
            scrollTop: title.offset().top - 200
        }, 500);
    });
    }
    
    titleSlideToggle('.settings__title--js', '.settings__items--js', 'settings__items_hide');
    titleSlideToggle('.settings_title_pickup--js', '.payment__content', 'payment__content_hide');

// titleToggle

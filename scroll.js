jQuery(function ($) {
    //resetowanie scrolla
    $.scrollTo(0);
    $('#link1').click(function () { $.scrollTo($('#monitorykineskopowe'), 500); });
    $('#link2').click(function () { $.scrollTo($('#zasadakineskop'), 500); });
    $('#link3').click(function () { $.scrollTo($('#maskakineskop'), 500); });
    $('#link4').click(function () { $.scrollTo($('#wadyzaletykineskop'), 500); });
    $('#link5').click(function () { $.scrollTo($('#parametrykineskop'), 500); });
    $('#link6').click(function () { $.scrollTo($('#budowaLCD'), 500); });
    $('#link7').click(function () { $.scrollTo($('#zasadaLCD'), 500); });
    $('#link8').click(function () { $.scrollTo($('#matryceLCD'), 500); });
    $('#link9').click(function () { $.scrollTo($('#wadyzaletyLCD'), 500); });
    $('#link10').click(function () { $.scrollTo($('#parametryLCD'), 500); });
    $('#link11').click(function () { $.scrollTo($('#dsub'), 500); });
    $('#link12').click(function () { $.scrollTo($('#dvi'), 500); });
    $('#link13').click(function () { $.scrollTo($('#hdmi'), 500); });
    $('.scrollup').click(function () { $.scrollTo($('body'), 1000); });
}

);

//ukazanie przycisku

$(window).scroll(function () {
    if ($(this).scrollTop() > 300) $('.scrollup').fadeIn();
    else $('.scrollup').fadeOut();
}
);
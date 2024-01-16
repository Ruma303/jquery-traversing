$(document).ready(function() {

    //% Metodi traversing

    //# parent()
    //$("li").parent().parent().css("background-color", "aqua");

    //# parents()
    //$("li").parents().css("color", "aqua");

    //# parentsUntil()
    //$("li").parentsUntil("section").css("color", "aqua");

    //# closest()
    //$("li").closest("div").css("color", "aqua");

    //# children()
    //$("section").children().css("background-color", "violet");

    //# find()
    //$("section").find("li:first-child").css("color", "red");

    //# siblings()
    //$("li").siblings("li").css("color", "red");z

    //# next()
    //$("li").next("li").css("color", "red");

    //# nextAll()
    //$("li").nextAll("li").css("color", "red");

    //# nextUntil()
    //$("li").nextUntil("li:nth-of-type(2n)").css("color", "red");

    //# prev()
    //$("li:last-of-type").prev().css("color", "red");

    //# prevAll()
    //$("li:nth-last-of-type(3)").prevAll().css("color", "red");

    //# prevUntil()
    //$("li:nth-last-of-type(2)").prevUntil("li:nth(2)").css("color", "red");



    //% Filtering
    //# filter()
    //$('li').filter(':even').css('background-color', 'yellow');

    /* $('li').filter(function () {
        return 10 > 3;
    }).css('background-color', 'yellow'); */

   /*  $('li').filter(function(index) {
        console.log(index) //0, 1, 2, 3...
        return index > 4;
    }).css('color', 'blue'); */

    //# first()
    //$('li').first().css('font-weight', 'bold');

    //# last()
    //$('li').last().css('font-weight', 'bold');

    //# eq()
    //$("li").eq(2).css("background-color", "red");

    //# not()
    //('li').not(':contains("3")').css("background-color", "red");

    //# lt()
    //$('li').filter(':lt(2)').css('color', 'lime');

    //# gt()
    //$('li').filter(':gt(4)').css('color', 'blue');

});
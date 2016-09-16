$(document).ready(function(){

    // scrolly top thing
    $(window).scroll(function(){
        var toppy = $(window).scrollTop();
        if ( $(window).innerWidth() > 599 ) {
            $('#big_pic').css({'background-position-y':(toppy*-.5)+'px', 'height':(700-(toppy*.75))+'px'});
            $('#big_pic .diagonal').css('top',(700-(toppy*.75))+'px');
        }
        else {
            $('#big_pic').css({'background-position-y':(toppy*-.5)+'px', 'height':(600-(toppy*.75))+'px'});
            $('#big_pic .diagonal').css('top',(600-(toppy*.75))+'px');
        }
    });

    // resize window, move diagonal thing's position
    $(window).resize(function(){
        var toppy = $(window).scrollTop();
        if ( $(window).innerWidth() > 599 ) {
            $('#big_pic').css({'background-position-y':(toppy*-.5)+'px', 'height':(700-(toppy*.75))+'px'});
            $('#big_pic .diagonal').css('top',(700-(toppy*.75))+'px');
        }
        else {
            $('#big_pic').css({'background-position-y':(toppy*-.5)+'px', 'height':(600-(toppy*.75))+'px'});
            $('#big_pic .diagonal').css('top',(600-(toppy*.75))+'px');
        }
    });

});
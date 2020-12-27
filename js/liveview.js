var at_least_one_menu_open = false
$('#thermal-options').hide()
$('#close_menu').hide()
$('#video_duration_timer').hide()
$('#video_settings').hide()
$(".navbar").hide()
$("#video_button").hide()




var cm = $('#commorose')

cm.hide()



var video_on = false;

var video_duration = 0;
var timer;
var commorose_out = false;

var cw = $('.corner_buttons').width();
$('.corner_buttons').css({'height':cw+'px'});

let nav = $(".navbar")

function hide_when_open_menu(){
    at_least_one_menu_open = true;
    cm.hide('fast')
    // cm_area.hide('fast')
    nav.hide('fast')
    commorose_out=false
}


$('#upperleft_corner').click(function () {
    if (!at_least_one_menu_open) {
        $('#thermal-options').show('fast')
        $('#close_menu').show('fast')
        hide_when_open_menu()
    }
})

$('#upperright_corner').click(function () {
    if (!at_least_one_menu_open) {
        $('#video_settings').show('fast')
        $('#close_menu').show('fast')
        hide_when_open_menu()
    }
})



$(".corner_buttons").mousedown(function (){
    $(this).css('background-color',"#E0691C")
})

$(".corner_buttons").mouseover(function (){
    $(this).css('background-color',"#85888c")
})
$(".corner_buttons").mouseout(function (){
    $(this).css('background-color',"#4e555b")
})

$(".corner_buttons").mouseup(function (){
    $(this).css('background-color',"#4e555b")
})


$("#lowerright_corner").click(function (){
    video_on=!video_on;
    if(video_on){
        $("#video_button").show()
        video_duration=0;
        $(".spinner_video").show()
    }
    else {
        video_duration=0;
        $("#video_button").hide()
        $(".spinner_video").hide()
    }
})


$('#close_menu').click(function (){
    if (at_least_one_menu_open) {
        $('#thermal-options').hide('fast')
        $('#video_settings').hide('fast')
        $('#close_menu').hide()
        at_least_one_menu_open = false;
        $("#corner_button_div").show()
        cm_area.show()
    }
})


var mousedown = false;
var cm_area = $('#commorose_area');

cm_area.click(function (event){

        if(commorose_out){
            commorose_out=false;
            cm.hide('fast')
            nav.hide('fast')
        }
        else{

            if (at_least_one_menu_open) {
                $('#thermal-options').hide('fast')
                $('#video_settings').hide('fast')
                $('#close_menu').hide()
                at_least_one_menu_open = false;
                $("#corner_button_div").show()
                cm_area.show()
            }
            else {
                commorose_out=true;
                $('#commorose').css({top: event.clientY, left: event.clientX, position:'fixed'});
                var posx = event.clientX;
                var posy = event.clientY;
                var buttonsize =  $(document).width()*0.13;
                $('.corner_buttons').css({width: buttonsize, height: buttonsize,zIndex:100, position:'fixed'})
                $('#upperright_corner').css({top: posy-buttonsize, left: posx});
                $('#lowerright_corner').css({top: posy, left: posx, position:'fixed'});
                $('#upperleft_corner').css({top: posy-buttonsize, left: posx-buttonsize});
                $('#lowerleft_corner').css({top: posy, left: posx-buttonsize});
                cm.show('fast')
                nav.show('fast')
                if(!video_on){
                    $("video_button").hide()
                }
            }
        }


})


var at_least_one_menu_open = false
$('#thermal-options').hide()
$('#close_menu').hide()
$('#video_duration_timer').hide()
$('#video_settings').hide()
let nav = $(".navbar")
$("#video_button").hide()
$(".spinner_video").hide()
var cm = $('#commorose')
var cm_area = $('#commorose_area');
cm.hide()
nav.hide()
commorose_out=true;
var cw = $('.corner_buttons').width();
$('.corner_buttons').css({'height':cw+'px'});
commorose_start()



function commorose_start(){
    commorose_out=true;
    $('#commorose').css({top: screen.height/2, left: screen.width/2, position:'fixed'});
    var posx = screen.width/2;
    var posy = screen.height/2;
    var buttonsize =  $(document).width()*0.13;
    var upbut = buttonsize*2
    $('.corner_buttons').css({width: buttonsize, height: buttonsize,zIndex:100, position:'fixed'})
    $('#upperright_corner').css({top: posy-buttonsize, left: posx});
    $('#lowerright_corner').css({top: posy, left: posx, position:'fixed'});
    $('#upperleft_corner').css({ width: upbut, top: posy-buttonsize, left: posx-buttonsize});
    $('#upperleft_corner').css({"border-top-left-radius":buttonsize*2})
    $('#upperleft_corner').css({"border-top-right-radius":buttonsize*2})
    $('#lowerleft_corner').css({top: posy, left: posx-buttonsize});
    cm.show('fast')
    nav.show('fast')
    if(!video_on){
        $("video_button").hide() //
    }
}

screen.orientation.lock('landscape');






var video_on = false;

var video_duration = 0;
var timer;





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


/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}




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

$("#lowerleft_corner").click(function (){

}
)

$("#fullscreenbutton").click(function (){
    openFullscreen();
    //adhauwduiawd
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
                var upbut = buttonsize*2
                $('.corner_buttons').css({width: buttonsize, height: buttonsize,zIndex:100, position:'fixed'})
                $('#upperright_corner').css({top: posy-buttonsize, left: posx});
                $('#lowerright_corner').css({top: posy, left: posx, position:'fixed'});
                $('#upperleft_corner').css({ width: upbut, top: posy-buttonsize, left: posx-buttonsize});
                $('#upperleft_corner').css({"border-top-left-radius":buttonsize*2})
                $('#upperleft_corner').css({"border-top-right-radius":buttonsize*2})
                $('#lowerleft_corner').css({top: posy, left: posx-buttonsize});
                cm.show('fast')
                nav.show('fast')
                if(!video_on){
                    $("video_button").hide() //
                }
            }
        }


})



$("#customRange3").on('input',function (){
     console.log("brightness("+$(this).val()+")");

    document.getElementById("videostream").style.filter = "brightness("+$(this).val()+")"
})

$("#customRange4").on('input',function (){
    console.log("brightness("+$(this).val()+")");

    document.getElementById("videostream").style.filter = "contrast("+$(this).val()+")"
})

function snap(){
    $("#videostream").fadeOut("fast")
    $("#videostream").fadeIn("fast")
}

$("#lowerright_corner").on("click",function(){
    $("#lowerright_corner").fadeOut("fast")
    $("#lowerright_corner").fadeIn("fast")
})
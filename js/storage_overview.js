
$(".days_list").hide()
$(".month_list").hide()



$(".year").click(function (){
    $(".month_list").toggle()
})

$(".month").click(function (){
    $(".days_list").toggle()
})

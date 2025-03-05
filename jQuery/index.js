console.log($('button'))

$('button').click(function() {
    $('button').css('background-color', 'aqua')
})

// $(document).keydown((e) => {
//      $("h1").text(e.key)
// })

$("h1").on("mouseover",function() {
    $("h1").css("color", "red") 
})
$("h1").on("mouseout",function() {
    $("h1").css("color", "black") 
})
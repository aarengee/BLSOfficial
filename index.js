$(document).ready(function(){   
       
    var $navbar = $("#xyz"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > y_pos) 
            $navbar.addClass("fixit");
        else if (scrollTop <= y_pos) 
            $navbar.removeClass("fixit");
                
    })
});



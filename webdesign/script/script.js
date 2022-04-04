(function($){

    //$(".submenu").css("display","block");

    //this 를 선택했을땐 자기 자신만 자기 밑에있는것만 사용
    // $(".nav > ul > li").mouseover(function(){
    //     $(this).find(".submenu").css("display","block");
    // });
    // $(".nav > ul > li").mouseout(function(){
    //     $(this).find(".submenu").css("display","none");
    // });

    //아래는 다중으로 선택
    // $(".nav > ul > li").mouseover(function(){
    //     $(".nav > ul > li").find(".submenu").css("display","block");
    // });
    // $(".nav > ul > li").mouseout(function(){
    //     $(".nav > ul > li").find(".submenu").css("display","none");
    // });

    // $(".nav > ul > li").mouseover(function(){
    //     $(this).find(".submenu").stop().show(500);
    // });
    // $(".nav > ul > li").mouseout(function(){
    //     $(this).find(".submenu").stop().hide(500);
    // });

    // $(".nav > ul > li").mouseover(function(){
    //     $(this).find(".submenu").stop().slideDown(500);
    // });
    // $(".nav > ul > li").mouseout(function(){
    //     $(this).find(".submenu").stop().slideUp(500);
    // });

    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li").find(".submenu").stop().slideDown(500);
    });
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li").find(".submenu").stop().slideUp(500);
    });
    

    //탭메뉴
    var tabMenu = $(".notice");

    tabMenu.find("ul > li > ul").hide();
    tabMenu.find("ul > li.active > ul").show();

    function tabList(e){
        e.preventDefault();
        var target = $(this);
        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
    }

    tabMenu.find("ul > li > a").click(tabList);

    // var tabMenu = $(".notice");

    // tabMenu.find("ul > li > ul").hide();
    // tabMenu.find("ul > li.active > ul").show();

    // function tabList(e){
    //     e.preventDefault();
    //     var target = $(this);
    //     target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
    // };

    // tabMenu.find("ul > li > a").click(tabList).focus(tabList);

    // document.querySelector("ul > li > ul").style.display = "none";
    
})(jQuery);
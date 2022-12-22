$(document).ready(function(){
    
    // Start Info
    $(window).scroll(function(){
        
        let getscrollpoint = $(this).scrollTop();
        // console.log(getscrollpoint);

        if(getscrollpoint >= 430){
            $(".leftanis").addClass("fromlefts");
            $(".rightanis").addClass("fromrights");
        }else{
            $(".leftanis").removeClass("fromlefts");
            $(".rightanis").removeClass("fromrights");
        }

    });
    // End Info

    // Start Adv 
    $("#video").click(function(){
        var getmodal = $(this).data("bs-target");
        var getvideosrc = $(this).data("video");
        var videourlwithauto = getvideosrc + "?autoplay=1";

        $(getmodal + " iframe").attr("src",videourlwithauto);

        $(getmodal + " button.btn-close").click(function(){
            $(getmodal + " iframe").attr("src",getvideosrc);
        })

        $(getmodal).click('hidden.bs.modal',function(){
            $(getmodal + " iframe").attr("src",getvideosrc);
        })
    })
    // End Adv

    // Start Premises
    $("#lightslider").lightSlider({
        item: 4,
        loop: true,
        speed: 600
    }).play();
    // End Premises

    // Start Pricing
    $(window).scroll(function(){

        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        if(getscrolltop >= 2150){
            $(".cardones").addClass("movelefts");
            $(".cardtwos").addClass("movebottoms");
            $(".cardthrees").addClass("moverights");
        }else{
            $(".cardones").removeClass("movelefts");
            $(".cardtwos").removeClass("movebottoms");
            $(".cardthrees").removeClass("moverights");
        }

    });
    // End Pricing

    // Start Join Us
    $("#accordion").accordion();
    // End Join Us

    // Start Footer
    $("#autoyear").text(new Date().getUTCFullYear());
    // End Footer

    // Start Progress
    $(window).scroll(function(){

        var getprogress = $("#progresses");
        var getprogressval = $("#progressvalues");
        var getscrollTop = $(this).scrollTop();

        var getscrollheight = $(document).height();
        var getclientheight = $(window).height();

        var calcheight = getscrollheight - getclientheight;

        var getfinal = Math.round((getscrollTop * 100) / calcheight);
        // console.log(getfinal);

        getprogress.css({
            "background": `conic-gradient(
                steelblue ${getfinal}%,
                #eee ${getfinal}%
            )`
        })

        getprogressval.text(`${getfinal}%`)

    })
    // End Progress

})
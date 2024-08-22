$(function(){

    // popup / close
    $('.notice>li:first-child').on('click',function(){
        $('.popup').show();
        $('.cover').show();
    })

    $('.popup .close').on('click',function(){
        $('.popup').hide();
        $('.cover').hide();
    })

    // gnb
    $('.gnb>li').on('mouseenter',function(){
        $('.depth2').stop().fadeIn()
    })

    $('.gnb>li').on('mouseleave',function(){
        $('.depth2').stop().fadeOut()
    })

    // slide
    setInterval(function(){
        $('main ul li:last-child').insertBefore('main ul li:first-child')
        $('main ul').css({'margin-left':-800})
        $('main ul').animate({'margin-left':0})
    },3000)

    // tab
    $('.tab>li').on('click',function(){
        let num = $(this).index()
        $('.tab>li').removeClass('on')
        $(this).addClass('on')

        $('.box').hide()
        $('.box').eq(num).show()

    })


})
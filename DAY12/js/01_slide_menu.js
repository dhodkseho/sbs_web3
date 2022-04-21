

// 슬라이드 바 ON/OFF
let slideOn = 'off'

// 문서 준비 이벤트
$(function() {

    //메인메뉴 - 마우스 올렸을 때
    $('.mainmenu').on('mouseover', function() {
        
        $('header').addClass('active')
        $('.submenu').removeClass('active')
        $(this).children('.submenu').addClass('active')
    })

    //메인메뉴 - 마우스 벗어날 때
    $('.mainmenu').on('mouseleave', function() {
        $('header').removeClass('active')
        $('.submenu').removeClass('active')
    })

    /* 햄버거메뉴 클릭 이벤트 */
    $('.slide-open').on('click', function() {
        // 햄버거 -> x(버튼) (슬라이드 메뉴 오픈)
        if(slideOn == 'off') {
            slideBarOpen()
        }
        // x버튼 -> 햄버거 (슬라이드 메뉴 종료)
        else {
            slideBarClose()
        }
    })

    //슬라이드 바 바깥, x버튼 클릭 시 슬라이드 종료
    $('.bg, .cancel').on('click', function() {
        slideBarClose()
    })

})

// 슬라이드 바 오픈
function slideBarOpen() {
    //슬라이드 오픈 애니메이션
    $('.slide').animate({left: 0}, 1000)

    // 햄버거 -> x버튼 애니메이션
    $('.slide-open').addClass('on')

    // 슬라이드 바 바깥 영역 fadeIn
    $('.bg').fadeIn(1000)

    slideOn = 'on'
}

// 슬라이드 바 종류
function slideBarClose() {
    //슬라이드 오픈 애니메이션
    $('.slide').animate({left: '-400px'}, 1000)

    // x버튼 -> 햄버거 애니메이션
    $('.slide-open').removeClass('on')

    // 슬라이드 바 바깥 영역 fadeOut
    $('.bg').fadeOut(1000)

    slideOn = 'off'
}


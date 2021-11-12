// 햄버거 버튼
const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => 
{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
}
);




//페이드
var animateHTML = function() 
{
    var elems,
        windowHeight
    
    var init = function() 
    {
      elems = document.getElementsByClassName("hidden");
      windowHeight = window.innerHeight;
      _addEventHandlers();
    }
    
    var _addEventHandlers = function() 
    {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("resize", init)
    }
    var _checkPosition = function() 
    {
      for ( var i = 0; i < elems.length; i++ ) 
      {
        var posFromTop = elems[i].getBoundingClientRect().top;
        if ( posFromTop - windowHeight <= 0) 
        { 
          elems[i].className = elems[i].className.replace( "hidden", "fade-in" );
        }
      }    
    }
    
    return {
      init: init
    }
  }

  animateHTML().init();



  // 사이드네비버튼

  function navigo (){
    const header = document.querySelector('header'); //헤더부분획득
    const headerheight = header.clientHeight;//헤더높이
  document.addEventListener('scroll', onScroll, { passive: true });//스크롤 이벤트
   function onScroll () {
       const scrollposition = pageYOffset;//스크롤 위치
     const nav = document.querySelector('nav');//네비게이션
     if (headerheight<=scrollposition){//만약 헤더높이<=스크롤위치라면
       nav.classList.add('fix')//fix클래스를 네비에 추가
     }
     else {//그 외의 경우
       nav.classList.remove('fix');//fix클래스를 네비에서 제거
     }
   } 
    
  }

  
  navigo()

    // 스크롤섹션이동 스크립트
    window.onload = function(){  //함수 재정의
      const elm = document.querySelectorAll("DIV"); //왜 되는건지 모름
      const elmCount = elm.length;
      elm.forEach(function(item, index){
        item.addEventListener('mousewheel', function(event){
          event.preventDefault();
          let delta = 0;

          if (!event) event = window.event; // 웹 사이트의 코드가 현재 처리 중인 Event를 반환합니다. 이벤트 처리기 바깥에서는 항상 undefined입니다.
          if (event.wheelDelta) {
              delta = event.wheelDelta / 120;
              if (window.opera) delta = -delta;
          } 
          else if (event.detail)
              delta = -event.detail / 3;

          let moveTop = window.scrollY;
          let elmSelector = elm[index];

    

          // wheel down : move to next section
          if (delta < 0){
            if (elmSelector !== elmCount-1){
              try{
                moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
              }catch(e){}
            }
          }
          
          // wheel up : move to previous section
          else{
            if (elmSelector !== 0){
              try{
                moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
              }catch(e){}
            }
          }

          const body = document.querySelector('html');
          window.scrollTo({top:moveTop, left:0, behavior:'smooth'}); //문서의 지정된 위치로 스크롤
        });
      });
    }
    
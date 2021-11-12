  //적용될 태그 id=withRight----

// <div id="getBoardForm">
// <div id="boardBox"></div>
//         <div id="withLeft">
//             <div class="container2">
//                 <h1>함께라면,</h1>
//                 <p>여러분 모두 개발자가</p>
//                 <p>될 수 있습니다</p>
//                 <h2>KGA 멤버들과 소통을 통해 정보를 공유하세요</h2><br>
//                 <p><a href="#" class="btn">클릭 하기!</a></p>
//             </div>
//             <div class="container2-img">
//                 <img src="../static/img/communication.jpg" style="width: 50vw; height: 100%;" alt="communication">
//             </div>
//         </div>
        
//         <div id="withRight"></div>
          
// </div>


//document.write("<div id='getBoardForm'></div>");
         //배열 임의값 생성
         let idx=[], title=[], content=[], img=[]; 
         idx.push(1,2,3,4,5,6,7,8,9,10,11,12), title.push(1,2,3,4,5,6,7,8,9,10,11,12), content.push(1,2,3,4,5,6,7,8,9,10,11,12);
         for(i=0; i<idx.length; i++){
             img.push('https://picsum.photos/300/120');
         }
         
         //카드세팅
  let cardsprint = "";
         
         for(i=0;i<idx.length;i++){
        cardsprint += 
            `<style>a:link,a:hover,a:visited,a:active{text-decoration: none; color:black;}</style>
            <a href="#"><div class="cardframe">
    <img src="https://picsum.photos/300/120">
    <div class="title" style="padding:10px;">`
        //배열에 title 값
            +title[i]+`</div>
    <div class="contents" style="padding:20px;">`
      //배열에 내용값      
    +content[i]+`
         </div>
</div></a>
`;
         }//end of for idx.length
         cardsprint += 
             `
             <style>
             #getBoardForm{display:flex;}
             
             #withRight{ 
             
             overflow:hidden; display:flex; 
             border:solid blue 1px;height:450px;
             
             width:calc(100% /2 );
    
             }
             
  .cardframe{ 
    margin: 5px; 
    border:solid lightgrey 0.5px; 
    width:300px; height:440px;
    border-radius: 10px;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
    animation:slide 8s infinite; 
    width:calc(100 * 4);
    //width:calc(300px * `+idx.length+`);//이 값이 없어지면 카드가 다뜸.
    //problem - 카드가 점점 겹친다. 왜겹치지? --- 아래 px로맞춰놨더니 안됨. 결국 이동은 카드가 움직이는게 아니라 카드영역자체를 움직여 보이는것.
    }
   
  .cardframe img{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    }.title{text-align:center; font-weight:bold;}
    @keyframes slide {
      0% {margin-left:0;} /* 0 ~ 10  : 정지 */
      10% {margin-left:0;} /* 10 ~ 25 : 변이 */
      25% {margin-left:-100%;opacity:0.5} /* 25 ~ 35 : 정지 */
      35% {margin-left:-100%;} /* 35 ~ 50 : 변이 */
      50% {margin-left:-200%;}
      60% {margin-left:-200%;}
      75% {margin-left:-300%;}
      85% {margin-left:-300%;}
      100%{left:-130%;}
    }
</style>
`;
        document.getElementById("withRight").innerHTML= cardsprint;
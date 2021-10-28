 let year = 2021, month=04;
function makeCal(year, month){
    let m = month;
    month-= 1;
    let d = new Date(year, month);
        
    
    //달력 기본
    let cal  = [year, '년 ',parseInt(month)+1, '월', '\n'];
        cal  +=['일', '월', '화', '수', '목', '금', '토','\n'];
    
    
    //일
    let days = [];
    
        //마지막날 찾기
    let where = new Date(year, month+1,0)
    let lastdate = where.getDate();
    
    for(i=1;i<lastdate+1; i++){
        days.push(i+'\t')
        let day = d.getDay()
        if(day==6){days.push('\n'); day=0;}
        day++
    }
    let title = days.join('');
    
    for(i=0; i<d.getDay();i++){
        cal.push('\t');
    } 
    let contents = cal.join('')
    
    
    console.log(title);
    console.log(contents);
}    
    makeCal(2021,04);
    makeCal(2021,02);
     





    
// let firstdaylocation = '\t';
// days.push(firstdaylocation);
// for(i=1;i<lastdate+1; i++){
//     days.push(i)
//     day++
//     if(day==6){days.push('\n'); day=0;}
// }
// let cal = days.join('\t');
// let i= 1;
    // while(i<lastdate+1){
    //     days.push(i);
    //     let day = d.getDay();
    //     if(day==6){ days.push('\n'); day==0;}
    //     day++
    // }

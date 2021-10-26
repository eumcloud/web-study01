#include <sdio.h>

// sum 전역변수
int sum;

void main(int argc, char* argv[])
{
    // 위에서의 sum 변수와 다르다. 지역변수
    int sum;
    
    sum = sum +1;
           

    for(int sum; sum<100; sum++)
    { //여기서의 sum도 다른변수이다.
        sum = sum + 1;
    }
}

void add()
{
//     지역변수
    sum = sum + 1; 
}
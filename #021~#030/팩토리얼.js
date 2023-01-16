/*
i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 
예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 
정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
*/


function solution(n) {
    var answer = 1;
    for(let i = 1; i < 100; i++) {
        answer = answer * i
        if (n < answer) {
            return i - 1
        }
    }
}

/* 참고할 만한 다른 풀이

function solution(n) {
    let i = 1;
    let f = 1;
    
    while (f * i < n) f *= ++i;
    
    return i;
}

*/

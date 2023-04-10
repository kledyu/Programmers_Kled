/*
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
*/

const solution = (a, b) => {
    let answer = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        answer += i
    }
    
    return answer;
}

/* 가우스 공식을 이용한 다른 풀이

const solution = (a, b) => {
    let result = 0
    return (a + b) * (Math.abs(a - b) + 1) / 2;
}

*/

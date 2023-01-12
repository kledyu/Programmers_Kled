/*
정수 n과 정수 배열 numlist가 매개변수로 주어질 때, 
numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(n, numlist) {
    return numlist.filter(x => Number.isInteger(x/n))
}

/* 참고할 만한 다른 풀이

function solution(n, numlist) {
    return numlist.filter(x => x % n === 0);  // 나머지 활용
}

*/

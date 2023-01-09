/*
두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
*/

function solution(s1, s2) {
    var answer = 0;
    for(i = 0; i <= s1.length; i++){
        for(j = 0; j <= s2.length; j++){
            answer += s1[i] === s2[j] ? 1 : 0
            
        }
    }
    
    return answer - 1;
}

/* 참고할 만한 풀이
function solution(s1, s2) {
    const answer = s1.filter((x) => s2.includes(x));
    return answer.length;
}
*/

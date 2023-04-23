/*
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 
예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
인덱스 n의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
*/

function solution(strings, n) {
   return strings.sort().sort((a, b) => a[n] < b[n] ? -1 : a[n] > b[n] ? 1 : 0)
}

/* 참고해야할 다른 풀이
function solution(strings, n) {
    // n 번째 문자열 비교
    return strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
}
1. 인덱스 n의 문자가 같은 문자열일 경우 전체 문자열 기준 정렬, 인덱스 n의 문자가 다른 문자열일 경우 n 번째 인덱스를 기준으로 정렬
*/

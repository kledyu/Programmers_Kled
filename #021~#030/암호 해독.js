/*
군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.

암호화된 문자열 cipher를 주고받습니다.
그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.

문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(cipher, code) {
    var answer = '';
    arr = Array.from(cipher);
    for (i = code; i <= arr.length; i += code) {
        answer += arr[i - 1]
    }
    return answer;
}

/* 참고할 만한 다른 풀이

function solution(cipher, code) {
    return cipher.split('').filter( (value, index) => (index + 1) % code === 0 ).join('');
}

*/

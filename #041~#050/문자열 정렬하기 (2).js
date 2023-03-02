/*
영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때, 
my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
*/

function solution(my_string) {
    let newString = my_string.split(' ');
    let answer = 0;
    
    for (let i = 0; i < newString.length; i++) {
        
        if (newString[i] === '+') {
            answer += newString[i + 1] * (1)
            i++
        } else if (newString[i] === '-') {
            answer += newString[i + 1] * (-1)
            i++
        } else {
            answer += newString[i] * 1
        }
    }
    return answer
}

/* 참고할 만한 다른 풀이
function solution(my_string) {
    const stack = [];
    let sign = 1;
    
    for (const ch of my_string.split(" ")) {
        if (ch === "+") {
            sign = 1;
        } else if (ch === "-") {
            sign = -1;
        } else {
            stack.push(ch * sign);
        }
    }
    return stack.reduce((a,b) => a + b, 0);
}
*/

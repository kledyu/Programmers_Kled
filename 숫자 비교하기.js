function solution(num1, num2) {
    var answer = 0;
    if (num1 == num2) 
        answer = 1;
    else
        answer = -1;
    return answer;
}


### 더 나은 풀이 ###

function solution(num1, num2) {
    var answer = num1 === num2 ? 1 : -1;
    return answer;
}

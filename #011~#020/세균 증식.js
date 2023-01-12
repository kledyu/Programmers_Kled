/*
어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 
처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.
*/

function solution(n, t) {
    var answer = n
    for (i = 0; i < t; i++) {
        answer *= 2
    }
    return answer;
}

/* 참고해야하는 다른 풀이 

1. 비트 연산
<< 연산자는 첫 번째 피연산자를 명시된 비트 수(32의 나머지)만큼 왼쪽으로 이동합니다. 
왼쪽으로 이동된 초과 비트는 폐기됩니다. 오른쪽은 움직인 비트 수 만큼 0비트로 채워집니다.

function solution(n, t) {
  return n << t;
}



2. Math.pow()

function solution(n, t) {

    return n * Math.pow(2, t);
}
*/

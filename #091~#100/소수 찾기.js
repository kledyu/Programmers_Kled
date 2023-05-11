/*
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)
*/

function solution(n) {
    let numbers = []
    let answer = []
    const root = Math.sqrt(n)

    for (let a = 0; a <= n; a++) {
        numbers.push(true)
    }
    numbers[0] = false
    numbers[1] = false

    // 합성수는 false로 교체
    for (let i = 2; i < root; i++) {
        if (numbers[i]) {            
            for (let j = i * i; j <= n; j += i) {
                numbers[j] = false;
                
                console.log(j)
            }
        }
    }

    answer = numbers.filter(num => num === true)
    return answer.length
}

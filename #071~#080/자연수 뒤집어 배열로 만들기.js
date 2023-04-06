/*
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
*/

/* for 반복문 사용 ver */
const solution1 = (n) => {
    let answer = [];
    let arr = [...(n + '')]

    for (let i = (arr.length - 1); i >= 0; i--) {
        answer.push(arr[i] * 1)
    }
    return answer;
}

// for 반복문 미사용 ver

const solution2 = (n) => {
    return [...(n + '')].reverse('').map(v => (v * 1))
}

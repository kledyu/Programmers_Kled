/*
외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다.
정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(emergency) {
    let answer = emergency.slice().sort((a, b) => (b - a))
    console.log(answer)
    return emergency.map(v => answer.indexOf(v) + 1)
}

/* 참고할 만한 다른 풀이 ([...emergency] 사용으로 slice() 메소드 사용 안하고 배열의 변화를 막을 수 있다
  function solution(emergency) {
    let answer = [...emergency].sort((a, b) => (b - a))
    console.log(answer)
    return emergency.map(v => answer.indexOf(v) + 1)
}
*/

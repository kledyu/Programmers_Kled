/*
머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 
머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, 
balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.
*/

function fac(num) {
    let sum = 1;
    for (num; num > 0; num--) {
        sum = sum * num
    }
    return sum
}

function solution(balls, share) {
        return Math.round((fac(balls) / (fac(balls-share) * fac(share)))) 
}

/* 참고해야할 다른 풀이 (재귀함수를 통한 팩토리얼 구현)

const factorial = (num) => num === 0 ? 1 : num * factorial(num - 1)

function solution(balls, share) {
  return Math.round(factorial(balls) / factorial(balls - share) / factorial(share))
}

*/

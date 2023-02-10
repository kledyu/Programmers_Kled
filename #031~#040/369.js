/*
3, 6, 9게임의 규칙에 맞게 1부터 30까지 출력되는 결과를 배열에 담아 solution 함수 안에서 return 해주세요.
*/

function solution(input) {
  let answer = [];

  for (i = 1; i <= 30; i++) {
      if (i % 10 === 3) {
          answer.push('짝!')
      } else if (i % 10 === 6) {
          answer.push('짝!')
      } else if (i % 10 === 9) {
          answer.push('짝!')
      } else if (Math.floor(i / 10) === 3) {
          answer.push('짝!')
      } else {
          answer.push(i)
      }
  }
  return answer
}

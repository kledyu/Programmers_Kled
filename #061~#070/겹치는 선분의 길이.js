/*
선분 3개가 평행하게 놓여 있습니다. 
세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 
두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.
*/

function solution(lines) {
  let answer = 0;
  let lineMap = new Array(200).fill(0) // start와 end에 해당하는 배열에 0을 채워놓음

  for (let i = 0; i < 3; i++) {
    let left = lines[i][0];
    let right = lines[i][1];

    for (let j = left; j < right; j++) {
      lineMap[j + 100] += 1; // 선분이 지나는 자리에 1을 더함
    }
  }

  for (let k in lineMap) {
    if (lineMap[k] >= 2) { // 두 개 이상의 선분이 겹쳐 0과 1이 아닌 2 이상의 수를 판별
      answer++
    }
  }

  return answer;
}

/*
반복문과 조건문을 이용해 1이상 200이하의 자연수 중 소수를 판별하고,
그 합을 구해 solution 함수 안에서 return 하세요.
*/

function solution() {
    let answer = 0;
    for (i = 2; i <= 200; i++) {
        let arr = []
        for (j = 1; j <= i; j++) {        
            if (i % j === 0) {
                arr.push(i)
            } 
        } if (arr.length === 2) {
            answer += arr[0]
        }
    }
    return answer; 
}

/* break를 통해 불필요한 반복문 줄이기

function solution() {
  let answer = 0;

  for (let i = 1; i <= 200; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j == 0) {
        break;
      }
    }
    if (j == i) {
      sum += j;
    }
  }

  return answer; 
}

*/

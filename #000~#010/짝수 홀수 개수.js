/*
정수가 담긴 리스트 num_list가 주어질 때, 
num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/

function solution(num_list) {
  return [
    num_list.filter((a) => a % 2 === 0).length,
    num_list.filter((a) => a % 2 === 1).length,
  ];
}

/* 참고할 만한 다른 풀이
function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a % 2] += 1 // 인덱스 활용
    }

    return answer;
}
*/

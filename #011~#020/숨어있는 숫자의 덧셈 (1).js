/*
문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
연속된 숫자도 각각 한 자리 숫자로 취급합니다.
*/

function solution(my_string) {
    const answer = my_string.replace(/[^0-9]/g, '').split('').reduce((acc, curr) => acc + Number(curr), 0);                       
                            
    return answer;
}

/*
0-9의 숫자를 제외한 나머지 String을 공백으로 치환 (replace(/[^0-9]/g, '')
reduce 메소드를 통해 요소들을 모두 합함
*/

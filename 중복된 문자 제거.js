/*
문자열 my_string이 매개변수로 주어집니다. 
my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(my_string) {
    let answer = [...my_string]; 
    const setArray = new Set(answer); // Set : 자바스크립트에서 중복되는 데이터를 제거
    return [...setArray].join('') // set 객체를 배열 형태로 저장해야 정상적으로 데이터가 출력
}

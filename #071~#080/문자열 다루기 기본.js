/*
문제 설명
- 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

제한 사항
- s는 길이 1 이상, 길이 8 이하인 문자열입니다.
- s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.
*/

const solution = (s) => {
  let temp = parseInt(s)
    console.log(temp)
  if (s == temp && (s.length === 4 || s.length === 6)){
    return true;
  }
  return false;
}

/*
// 1. s가 a123일 때
console
'NaN'

// 2. s가 1234일 떄
console
'1234'

// 1번 case는 NaN, 2번 케이스는 Number임을 알 수 있다.
// 그러나 temp의 type은 두 input 모두 Number로 출력되므로 type에서 혼동하지 말자
*/

/*
PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 
알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. 
spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.
*/

function solution(spell, dic) {
    var answer = 0;
    let newSpell = spell.sort().join("")
    for (let i = 0; i < dic.length; i++) {
        if (newSpell === dic[i].split('').sort().join('')) {
            return 1
        } else {}
    }
    return 2
}

/*    Array.prototype.some() 사용
function solution(spell, dic) {
    return dic.some( v => spell.sort().toString() == [...v].sort().toString() ) ? 1 : 2;
}
*/

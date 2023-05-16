/*
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
*/

// 처음 실패한 나의 풀이
function solution(par, com) {
    let answer = '';
    par.map(v => com.includes(v) ? com.splice(com.indexOf(v), 1) : answer += v)
    return answer //
}

// 수정
function solution(par, com) {
    let hashed = []
    
    // 최초 hashed 설정
    par.forEach(v => {
        hashed[v] = hashed[v] ? hashed[v] + 1 : 1       
    })

    // 완주자 제거 작업
    com.forEach(v => {
        hashed[v] -= 1
    })

    // 미완주자 return 작업
    for (let key in hashed) {
        if (hashed[key] >= 1) return key
    }
}

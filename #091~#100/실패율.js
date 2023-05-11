/*
전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 
실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.
*/

function solution(N, stages) {
    let answer = [];
    // stages 배열의 길이 = player의 수
    let player = stages.length
    
    // N + 1은 마지막 스테이지까지 클리어 한 사용자이므로, 실패율 계산할 필요 X
    for (let i = 1; i <= N; i++) {
        // 현재 도전 중인 스테이지의 수
        let nowStage = stages.filter(v => v === i).length
        // i는 stage 번호, nowStage / player는 실패율
        answer.push([i, nowStage / player])
        // 다음 스테이지 계산을 위해, 현재 스테이지에 머물고 있는 플레이어 수를 빼준다.
        player -= nowStage
    }
    // 실패율 기준으로 내림차순 정렬
    answer.sort((a, b) => b[1] - a[1])
    return answer.map(v => v[0]);
}

/* 참고할 만한 다른 풀이

function solution(N, stages) {
    let result = [];
    for(let i = 1; i <= N; i++){
        // 현재 i 스테이지보다 같거나 높은 수를 가진 value는 해당 스테이지를 진행한 플레이어이므로, 해당 스테이지에 맞는 실패율을 구할 수 있다.
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}
*/

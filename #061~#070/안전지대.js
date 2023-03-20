/*
다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.
*/

function solution(board) {
    let answer = 0;    
    let max = board.length - 1
    for (let i = 0; i <= max; i++) {
        for (let j = 0; j <= max; j++) {
            if (board[i][j] === 1) {
                // 맨 윗줄이 아닌 경우
                if (i !== 0 && board[i - 1][j] !== 1) {  
                    board[i - 1][j] = 4;
                } 
                // 맨 아랫줄이 아닌 경우
                if (i !== max && board[i + 1][j] !== 1) {
                    board[i + 1][j] = 4;
                }
                // 맨 좌측 줄이 아닌 경우
                if (j !== 0 && board[i][j - 1] !== 1) {
                    board[i][j - 1] = 4;
                }
                // 맨 우측 줄이 아닌 경우
                if (j !== max && board[i][j + 1] !== 1) {
                    board[i][j + 1] = 4;
                }
                // 북서측이 아닌 경우
                if (i !== 0 && j !== 0 && board[i - 1][j - 1] !== 1) {  
                    board[i - 1][j - 1] = 4;
                } 
                // 북동측이 아닌 경우
                if (i !== 0 && j !== max && board[i - 1][j + 1] !== 1) {
                    board[i - 1][j + 1] = 4;
                }
                // 남서측이 아닌 경우
                if (j !== 0 && i !== max && board[i + 1][j - 1] !== 1) {
                    board[i + 1][j - 1] = 4;
                }
                // 남동측이 아닌 경우
                if (j !== max && i !== max&& board[i + 1][j + 1] !== 1) {
                    board[i + 1][j + 1] = 4;
                }
            }
        }
    }
    console.log(board)
    board.map(v => v.forEach(a => a === 0 ? answer++ : null))
    return answer
}

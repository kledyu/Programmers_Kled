/*
2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다.
직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 
직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.
*/

function solution(dots) {
    let newDots = dots.sort();
    
    return Math.abs(newDots[0][0] - newDots[2][0]) * Math.abs(newDots[0][1] - newDots[1][1])
}

/* 참고할 만한 다른 풀이
function solution(dots) {
    let x = [],
        y = [];

    for (let pos of dots) {
        x.push(pos[0]);
        y.push(pos[1]);
    }
    
    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
}
*/

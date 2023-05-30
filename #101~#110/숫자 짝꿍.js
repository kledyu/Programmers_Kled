function solution(X, Y) {
    let answer = ''
    let temp = []
    if (X.length <= Y.length) {
        for (let i = 0; i < X.length; i++) {
            [...Y].includes([...X][i]) ? temp.push([...X][i] * 1) : temp
            console.log(temp)
        }
    } else {
        for (let i = 0; i < X.length; i++) {
            [...X].includes([...Y][i]) ? temp.push([...Y][i] * 1) : temp
        }
    }
    if (temp.length === 0) return '-1'
    else if (temp.filter(v => v === 0).length >= 2) return '0'
    else {
         return temp.sort((a, b) => b - a).join('');
    }
    
}

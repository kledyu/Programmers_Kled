function solution() {
    let string = ''
    for (let ans = 2; ans <= 81; ans++) {
        for (let i = 2; i <= 9; i++) {
            if (ans % i === 0 && ans % i <= 9) {
                string += ` ${i} * ${ans / i} = ${ans} `
            } 
        } 
    } return string
}

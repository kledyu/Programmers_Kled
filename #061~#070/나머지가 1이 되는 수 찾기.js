/*
자연수 n이 매개변수로 주어집니다. 
n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 
답이 항상 존재함은 증명될 수 있습니다.
*/

const solution = (n) => {
    for(let i = 1; i < n; i++) {
        if (n % i === 1) {
            return i
        }
    }
}

/* 다른 풀이도 런타임이 비슷하여 for문이냐 while문 사용이냐의 차이 정도

const solution = (n, i = 1) => {
    while(i++) {
        if (n % i === 1) {
            return i
        }
    }
}

*/

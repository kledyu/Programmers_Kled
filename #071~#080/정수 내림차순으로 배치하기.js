/*
함수 solution은 정수 n을 매개변수로 입력받습니다. 
n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
예를들어 n이 118372면 873211을 리턴하면 됩니다.
*/

const solution = (n) => {
    return [...('' + n)].sort().reverse().join('') * 1;
}

/* 숫자를 이용해 푸는것이 실행속도가 더 빠르다
const solution = (n) => {
    let nums =[];
    do{
        nums.push(n % 10);
        n=Math.floor(n / 10);
    } while(n > 0)

    return nums.sort((a, b) => b - a).join('') * 1;
*/

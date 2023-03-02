/*
첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 
두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/

function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    let numer = numer1 * denom2 + numer2 * denom1
    let denom = denom1 * denom2
    
    for(let i = Math.max(numer, denom); i >= 1 ; i--) {
        if (numer % i === 0 && denom % i === 0) {
            answer.push(numer / i, denom / i)
            return answer
        }
    }
}

/* 참고해야할 다른 풀이 

function fnGCD(a, b){   // 최대공약수를 찾는 함수

    return (a % b) ? fnGCD(b, a % b) : b;
    // (a % b)는 나머지가 있으면 true가 되고, fnGCD(b, a % b)가 실행
	  // 유클리드 호제법에 따라 b를 a % b로 나눈다.
	  // 이를 나머지가 0이 될 때 까지 반복한다.
	  // 0이 된다면 마지막으로 나눈수가 최대공약수가 된다.
}

function solution(denum1, num1, denum2, num2) {
    let denum = denum1*num2 + denum2*num1;
    let num = num1 * num2;
    let gcd = fnGCD(denum, num); //최대공약수

    return [denum/gcd, num/gcd];
}

*/

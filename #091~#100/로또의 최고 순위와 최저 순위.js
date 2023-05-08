/*
로또를 구매한 민우는 당첨 번호 발표일을 학수고대하고 있었습니다. 하지만, 민우의 동생이 로또에 낙서를 하여, 일부 번호를 알아볼 수 없게 되었습니다. 
당첨 번호 발표 후, 민우는 자신이 구매했던 로또로 당첨이 가능했던 최고 순위와 최저 순위를 알아보고 싶어 졌습니다.
민우가 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다.
이때, 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return 하도록 solution 함수를 완성해주세요.
*/

const solution = (lottos, win_nums) => {
    // 당첨된 번호의 개수
    let corrects = 0;
    // 0으로 표기된 개수
    let zeros = 0;
    let answer = [];
    
    for (let i = 0; i < win_nums.length; i++) {
        lottos.includes(win_nums[i]) ? corrects++ : corrects
        lottos[i] === 0 ? zeros++ : zeros
    }
     // 최고 순위
    answer.push(7 - (corrects + zeros) === 7 ? 6 : 7 - (corrects + zeros))
    
    // 최저 순위
    // 낙첨 외, 순위와 일치 번호의 개수의 합은 7임을 이용
    answer.push((7 - corrects) > 5 ? 6 : 7 - corrects) 
   
    return answer;
}

/*
머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다.
문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
*/
function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"]
    let answer = 0;

    // 주어진 단어를 하나씩 테스트 해봅니다.
    babbling.map(babyword => {
        let progress = true;
        let before = "";

        while (progress) {
            for (let i = 0; i < words.length; i++) {
                // 단어의 맨 앞이 머쓱이가 읽을 수 있는 부분인가?
                if (babyword.indexOf(words[i]) == 0) {
                    // 읽을 수 있더라도 연속하지는 않는가?
                    if (before != words[i]) {
                        before = words[i]
                        babyword = babyword.slice(words[i].length)
                        break;
                    } else {
                        progress = false;
                        break;
                    }
                } else {
                    if (i == words.length - 1) {
                        progress = false;
                        break;
                    }
                }
            }
            // 한 차례 판별이 끝난 후, 끝까지 다 읽었다면 발음 가능한 단어의 수(answer) + 1
            if (babyword.length == 0) {
                answer++;
                progress = false;
            }
        }
    })
    return answer;
}


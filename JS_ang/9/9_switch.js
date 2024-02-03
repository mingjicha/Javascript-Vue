// 사과 : 100원
// 바나나 : 200원
// 키위 : 300원
// 멜론 : 500원
// 수박 : 500원
// 사고 싶은 과일을 물어보고 가격 알려주기

let fruit = prompt('무슨 과일을 사고 싶나요?');

switch(fruit) {
  case '사과' : 
    console.log('100원 입니다.');
    break;
  case '바나나' : 
    console.log('200원 입니다.');
    break;
  case '키위' : 
    console.log('300원 입니다.');
    break;
  // 동일한 결과값이라면, 아래처럼 줄일 수 있음 
  case '멜론' : 
  case '수박' : 
    console.log('500원 입니다.');
    break;
  // 사용자가 없는 과일을 입력하게 되면 아무일도 안 생김
  // if문일 경우 else를 사용
  // switch는 default사용
  default : 
    console.log('그런 과일은 없습니다.');
}


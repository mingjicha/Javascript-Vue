console.log(10 > 5);
console.log(10 == 5); // 동등 연산자
console.log(10 != 5);

// 동등 연산자가 이상할 때가 있는데...
const a = 1;
const b = "1";

console.log( a == b ); // true
// 숫자형이랑 문자형인데 같다?
// 에러 발생할 확률이 높아짐

console.log( a === b ); // false
// === : =을 세 번 쓸 경우 일치 연산자라고 하는데 타입까지 비교함
// 가급적 일치 연산자를 사용하는 것이 좋음

// if, else, else if
console.log('***********if문 시작***********');

const age1 = 30;

if(age1 > 19) {
  console.log('환영 합니다.');
} else {
  console.log('안녕히 가세요.');
}

// 추가 요구사항 : 19살이면 수능 잘치세요 라는 문구를 보여주세요.
console.log('***********추가 요구사항 반영***********');

// 먼저 19살이 맞는지부터 확인을 해야 함
// age2 === 19 // 숫자 타입을 비교 해야하니까,

// const age2 = 39;
const age2 = 19;

if(age2 > 19) {
  console.log('환영 합니다.');
} else if(age2 === 19) {
  console.log('수능 잘치세요.');
} else {
  console.log('안녕히 가세요.');
}


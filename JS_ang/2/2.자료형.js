// 문자형을 작성하는 세가지 방법
const name1 = "Mike";
const name2 = 'Mike';
const name3 = `Mike`;

const message = "I'm a boy.";
const message2 = 'I\'m a boy.'; // \를 앞에 사용해주면 특수문자로 인식함

const message3 = `My name is ${name1}`; // 문자열 내부에 변수를 표현해 줄 떄 사용
console.log(message3);

const message4 = `나는 ${30+1}살 입니다.`;
console.log(message4);

// 숫자형
const age = 30;
const PI = 3.14;

console.log(1 + 2); // 더하기
console.log(10 - 3); // 빼기
console.log(3 * 2); // 곱하기
console.log(6 / 3); // 나누기
console.log(6 / 4); // 나머지

const x = 1/0; // 0으로 나누면 무한
const y = name/2; // 숫자를 문자로 나누면 NaN(Not a number)
// 숫자 관련 작업할 때 NaN이 아닌지 확인하면서 작업해야 함

// Boolean
const a = true; // 참
const b = false; // 거짓

console.log(name == "Mike"); //true;
console.log(age > 40); // false

// null과 undefined
let coffee;
console.log(coffee); // undefined

let user = null; // user는 존재하지 않는다

// typeof 연산자
console.log(typeof 3); // number
console.log(typeof name); // string
console.log(typeof true); // boolean
console.log(typeof "XXX"); // string
console.log(typeof null); // object *null 객체가 아님
console.log(typeof undefined); // undefined
// 다른 개발자가 작성한 변수의 타입을 알아야 하거나 api 통신을 통해 받아온 데이터를 타입에 따라 다른 방식으로 처리해야 할 때 사용 됨

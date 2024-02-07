// 매개변수가 없는 함수
// 에러 메시지를 보여줌
function showError() {
  alert('에러가 발생했습니다. 새로고침 해주세요.');
}
showError();

// 매개변수가 있는 함수
console.log('*********sayHello 시작*********');

function sayHello(name) {
  const msg = `Hello, ${name}`;
  console.log(msg);
}
sayHello('Mike');
sayHello('Tom');
sayHello('Jane');
// 함수를 만들어 놓으면 매개변수를 바꿔서 다양하게 사용 가능

// 만약에 사용자 이름을 모를 경우?
console.log('*********sayHello2 시작*********');

function sayHello2(name) {
  let msg = 'Hello'; 
  // let으로 바꾼 이유 메시지 내용이 달라질 수 있기 때문에
  if(name) {
    msg += ', ' + name;
		// msg = msg + ', ' + name;
    // 백팁을 사용할 경우는 아래처럼 사용
    // msg += `, ${name}`;
  }
  console.log(msg);
}
sayHello2();
sayHello2('Mike');
// ⛔주의할 점
// 함수 안에 msg는 함수 밖에서 사용할 수 없음
// 이렇게 함수 내에서만 사용하는 것을 지역변수라고 함
// console.log(msg); // msg를 찾지 못해서 에러가 남

// 함수 밖에서 사용하고 싶으면 
// let msg = 'Hello'; 밖으로 빼줘야 함
console.log('*********sayHello3 시작*********');

let msg = 'Hello';
console.log('함수 호출 전');
console.log(msg);

function sayHello3(name) {
  if(name) {
    msg += `, ${name}`;
  }
  console.log('함수 내부');
  console.log(msg);
}
sayHello3('Mike');
console.log('함수 호출 후');
console.log(msg);
// 이렇게 밖으로 뺴준 것을 전역 변수라고 함

// 전역변수와 지역변수
console.log('*********sayHello4 시작*********');

// msg2는 전역변수
let msg2 = "welcome";
console.log(msg2);

function sayHello4(name) {
  // msg2는 지역변수 
  let msg2 = "Hello"
  console.log(msg2 + ', ' + name);
}
sayHello4('Mike');
console.log(msg2);
// 전역변수와 지역변수는 동일한 함수명을 사용할 수 있고 서로 간섭을 받지 않음

// ⛔주의할 점
console.log('*********sayHello5 시작*********');
let name = "Mike";

function sayHello5(name) {
  console.log(name);
}
sayHello5(); // undefined
sayHello5('Jane'); // Jane
// 매개변수로 받은 값은 복사된 후 함수의 지역변수가 됨
// 전체 서비스에서 공통으로 받아와야 되는 변수를 제외하고는 지역변수를 쓰는 습관을 들여야 함
// 전역변수가 많아지면 관리하기 힘들기 때문에

// or연산자 활용
console.log('*********sayHello6 시작*********');

function sayHello6(name) {
  let newName = name || 'friend';
  let msg = `Hello, ${newName}`;
  console.log(msg);
}
sayHello6(); // Hello, Friend
sayHello6('Jane'); // Hello, Jane

// 매개변수 기본값 설정 default value
console.log('*********sayHello7 시작*********');

function sayHello7(name = 'friend') {
  let msg = `Hello, ${name}`;
  console.log(msg);
}
sayHello7(); // Hello, Friend
sayHello7('Jane'); // Hello, Jane

// return으로 값 반환
console.log('*********add 시작*********');

function add(num1, num2) {
  return num1 + num2;
}
const result = add(2, 3);
console.log(result); // 5

console.log('*********showError2 시작*********');

function showError2() {
  alert('에러가 발생했습니다.');
  return; // return만 있으면 그 즉시 오른쪽에 있는 값을 반환, 종료 함수를 종료하는 목적으로도 사용함
  alert('이 코드는 절대 실행되지 않습니다.');
}
const result2 = showError2();
console.log(result2); // undefined
// return문이 없는 함수도 항상 undefined로 반환
// 혹은 함수안에 return문만 있어도 undefined로 반환


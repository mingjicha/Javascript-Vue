// 함수 표현식
// showError();
// let showError = function(){
//   console.log('error');
// }
// 에러 발생

// 함수 선언문
showError(); // error
function showError() {
  console.log("error");
}

// 화살표 함수
let showError = () => {
  console.log("error");
}

// const sayHello = function(name) {
//   const msg = `Hello, ${name}`;
//   console.log(msg);
// };
// 를 화살표 함수로 바꾸면
const sayHello = (name) => {
  const msg = `Hello, ${name}`;
  console.log(msg);
}

// const add = function(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }
// 를 화살표 함수로 바꾸면
const add = (num1, num2) => {
  return num1 + num2;
}
// const add = (num1, num2) => (
//   num1 + num2;
// )
// 도 가능


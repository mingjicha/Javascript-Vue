// 호이스팅

let age = 30; // 문제 없음
function showAge() {
  console.log(age);
  let age = 20; // 문제 발생
}
showAge();

// 변수의 생성단계
let name;
name = 'Mike';

var age;
age = 30;

const gender;
gender = 'male';
// const만 에러발생

// 스코프
const age = 30;
if(age>19) {
  var txt = '성인';
}
console.log(txt); // 성인 
// var는 if문 밖에서도 사용 가능

// 단! 함수 스코프도 함수 내에서만 사용 가능함
function add(num1, num2) {
  var result = num1 + num2;
}
add(2,3);
console.log(result);
// 이럴 때 var도 에러 발생
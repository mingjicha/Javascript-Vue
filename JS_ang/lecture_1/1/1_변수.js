name = "Mike";
age = 30;
alert(name);
console.log(age);
// 위에 처럼 변수를 선언하면 위험
// 여러 개발자들이 name이란 변수를 사용하게 되면 마지막으로 선언된 name으로 덮어씌워 짐

let name = "Mike";
let name = "google";
// 에러발생
// let은 선언하고 다른 값으로 바꿀 수 있음, 보통 생략해서 사용

// const 절대로 바뀌지 않는 상수, 수정 불가능
// 보통 대문자로 선언해서 상수라는 것을 다른 개발자에게 알려줌

// 😁모든 변수를 const로 선언하고 나중에 변경될 여지가 보이는 것은 let으로 바꿔주면 됨

// 객체
console.log('***********객체 시작***********');
const superman = {
  name : 'clark',
  age : 30,
}

// 객체의 접근
// console.log(superman) // Object
console.log(superman.name); // clark
console.log(superman['age']); // 30

// 객체의 추가
superman.hairColor = 'black'
superman['hobby'] = 'football';
// console.log(superman) // Object

// 객체의 삭제
delete superman.age;
// console.log(superman) // Object

// 이름과 나이를 받아서 객체를 반환하는 함수 
console.log('***********makeObject 시작***********');
function makeObject(name, age) {
  return {
    name,
    age,
    hobby: 'football'
  }
}
const Mike = makeObject('Mike', 30);
console.log(Mike);

// in을 이용하여 프로퍼티 존재 여부 확인
console.log('***********in 시작***********');
console.log('age' in Mike); // true
console.log('birthday' in Mike); // false

// 나이를 확인하고 성인인지 아닌지 확인하는 함수
console.log('***********isAdult 시작***********');
function isAdult(user) {
  if(user.age < 20) {
    return false;
  } 
    return true;
}
const Marin = {
  name: 'Marin',
  age: 30
}
// Jane은 나이를 입력하지 않음
const Jane = {
  name: 'Jane'
}
console.log(isAdult(Marin)); // true
console.log(isAdult(Jane)); // true
// 나이를 입력하지 않았는데 true로 나옴
// user.age에 age가 없어서 undefined라서 user.age < 20 자체가 false가 돼서 true를 반환

// 정확하게 확인하려면,
console.log('***********isAdult2 시작***********');
function isAdult2(user) {
  // 나이가 없으면 일단 성인이 아니라고 판단하는게 좋음
  if(!('age' in user) || user.age < 20) { 
    return false;
  } 
    return true;
}
console.log(isAdult2(Marin)); // true
console.log(isAdult2(Jane)); // false

// for ... in
console.log('***********for ... in 시작***********');
const Tom = {
  name: "Tom",
  age: 30
}
for(key in Tom){
  // console.log(key); // name, age
  console.log(Tom[key]); // Tom, 30
}
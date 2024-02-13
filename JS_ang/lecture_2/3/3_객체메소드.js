let n = "name";
let a = "age";
const user = {
  [n] : "Mike",
  [a] : 30,
  [1 + 4] : 5, // 계산식도 가능
};
console.log(user); // user의 객체

function makeObj(key, val){
  return {
    [key] : val
  }
}
const obj = makeObj('나이', 33);
// makeObj('나이', 33); 나이 자리에 넣는 값이 키가 됨
console.log(obj); // {나이: 33}
// 어떨 떄 키가 될지 모르는 객체를 만들 떄 유용함

// 객체 메소드
const user = {
  name: "Mike"
  age: 30,
};
const user2 = user; // 이렇게 사용하면 안됨❌
user2.name = "Tom";
console.log(user); // {name:"Mike", age:30}
console.log(user2); // {name:"Mike", age:30}
// 기존에 있던 user와 user2의 이름이 둘다 바뀜

const user2 = Object.assign({}, user);
user2.name = "Tom";
console.log(user); // {name:"Mike", age:30}
console.log(user2); // {name:"Tom", age:30}

let arr = [
  ['mon', '월'],
  ['tue', '화'],
]
const result = Object.fromEntries(arr);
console.log(result);
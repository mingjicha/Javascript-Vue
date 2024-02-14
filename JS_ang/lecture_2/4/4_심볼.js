// 다른 개발자가 만들어 놓은 객체
const user = {
  name: "Mike",
  age: 30,
};

// 내가 작업
// user에 무언가를 추가
user.showName = function() {}; // His showName is funciton() {}. 라고 사용자한테 보여짐
// 🚫이렇게 하면 안 됨
// 심볼로 만들어야 함 그러면 사용자한테 안 보임
const showName = Symbol('show name');
user[showName] = function() {
  console.log(this.name); // "Mike"
};

user[showName]();

// 사용자가 접속하면 보는 메세지
for(let key in user) {
  console.log(`His ${key} is ${user[key]}.`);
}
// His name is Mike.
// His age is 30.
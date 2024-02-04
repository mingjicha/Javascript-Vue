// method
console.log('************boy 시작************')
let boy = {
  name: "Mike",
  showName: function() {
    console.log(boy.name)
  }
}
// boy.showName(); // Mike

let man = boy;
// man.name = boy.name -> name을 Mike에서 Tom으로 바꾸기
// man.name = "Tom"
// console.log(boy.name); // Tom

// man.showName(); // Mike

boy = null;
// 이러면 man으로만 접근할 수 있음

// man.showName(); // name이 없다고 에러 발생
// boy.name은 사라짐
// boy의 name 그리고 showName도 사라짐 그래서 동작할 수가 없음

// 이럴 때 this 사용
console.log('************boy2 시작************')
let boy2 = {
  name: "Mike",
  showName: function() {
    console.log(this.name)
  }
}
let man2 = boy2;
boy2 = null;
man2.showName(); // Mike

// 결론적으로 메소드에서는 객체명을 직접 써주는 것보다는 this를 활용하는 것이 좋음

// 화살표 함수를 쓴다면,
console.log('************boy3 시작************')
let boy3 = {
  name: 'Mike',
  sayThis: () => {
    console.log(this);
  }
}
boy3.sayThis(); // window 객체

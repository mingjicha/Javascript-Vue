// ✔ 자바스크립트, this란❓ 객체를 가리키는 것
//     👉this = 객체
//         this는 어떤 객체인가 : this는 호출한 놈.
//          - 호출한 놈이 없을 경우 기본값으로 window객체

// 💡window 전역 객체는 브라우저 창이라고 생각하면 됨
//      - 브라우저 창은 자바스크립트로 브라우저를 제어할 수 있도록 브라우저에서 제어할 수 있도록 제공하는 전역 객체

// 📢this를 아라보자.
// let person = {
//     fullname: '민지',
//     age: 28,
//     printThis: function() {
//         console.log(this); // this = person 🧐{fullname: '민지', age: 28, printThis: ƒ} *ƒ : 함수
//         console.log(this.fullname); // this.fullname = person.fullname 🧐민지
//         console.log(this.age); // this.age = person.age 🧐28
//         console.log('this === person: ', this === person); // true
//         console.log('this === window: ', this === window); // false
//     },
// };
//     1) person 해석💁‍♀️
//         👩‍💻Console에다가,
//             1-1) console.log(person);
//             > {fullname: '민지', age: 28, printThis: ƒ}
//             1-2) person.printThis();
//             > {fullname: '민지', age: 28, printThis: ƒ}
//             ,민지
//             ,28
//             ,this === person:  true 
//             ,this === window:  false
// let printThis = person.printThis; 
//      - 위에 선언해준 person의 printThis를 PrintThis로 선언한다.
//     2) printThis 해석💁‍♀️
//         👩‍💻printThis();
//         > window 객체 정보
//         ,undefined
//         ,undefined
//         ,this === person:  false
//         ,this === person:  true

// 📣this의 호출여부 아라보자.
// function printThis() {
//     console.log(this); 
//     }
//    3-1) function printThis() 해석💁‍♀️
//         👩‍💻printThis();
//         > window 객체 정보
//            - 호출한 놈이 없기 때문에 default this => window
// let person = {
//     name: '홍길동1',
//     p: printThis,
// };
//    3-2) let person 해석💁‍♀️
//         👩‍💻person.p();
//         > {name: '홍길동1', printThis: f}
//             - this => person

// 💡대부분의 경우 this의 값은 함수를 호출한 방법에 의해 결정된다

// ✔ 안에 있는 this를 우리 마음대로 객체를 바꿀 수 있는 방법❗
//     ES5에서 this를 설정할 수 있는 😎bind 메소드 - this를 설정할 수 있음
//     1) 호출하지 않고 this 설정
//         function printThis() {
//             console.log(this); 
//         }
//         👩‍💻printThis();
//         > default this => window
//             - printThis를 그냥 호출하게 되면 호출한 놈이 없기 때문에 printThis는 window객체인 것을 확인
//     2) person1을 설정
//         let person1 = {
//             name: '홍길동'
//         };
//     3) bind 사용
//         let printThis1 = printThis.bind(person1); 
//         👩‍💻printThis1();
//         > {name: '홍길동'}
//             - printThis를 person1으로 bind하면 this설정된 것을 확인
//     4) 한 번 더 bind 설정
//         let person2 = {
//             name: '김길동',
//         };
//         let printThis2 = printThis1.bind(person2);
//         👩‍💻printThis1();
//         > {name: '홍길동'} 
//             - person1이 찍힘
//                 ⛔bind는 원래 함수에 단 한 번만 사용할 수 있음

// 💥this, 이럴 때는 또 다르다.
// setTimeout(function() { 
//     alert('Hello');
// }, 3000); 
//     : 3초 후에 함수를 실행하는 기능
//         - 브라우저에서 setTimeout이라는 함수를 제공하는데 함수의 파라미터는 콜백함수와 시간이라는 인자를 받음. 시간의 단위는 1ms
// 1) setTimeout 안에서 사용할 때
//     let person = {
//         name: '차민지',
//         age: 28,
//         hello: function() {
//             setTimeout(function() { 
//                 console.log(this); // Window객체
//                 console.log(this.name);
//                 console.log(this.age);
//             }, 1000);
//         },
//     };
//     👩‍💻person.hello();
//     > undefined
// 2) setTimeout 밖에서 사용할 때
// let person = {
//     name: '차민지',
//     age: 28,
//     hello: function() {
//         console.log(this); // this = person 🧐{name: '차민지', age: 28, hello: ƒ}
//         function printHello() {
//             console.log(this); // this = Window
//             console.log(this.name);
//             console.log(this.age);
//         }
//         setTimeout(printHello.bind(this), 1000); // 1초 뒤에 this = printHello
//     },
// };
//     👩‍💻person.hello();
//     > {name: '차민지', age: 28, hello: ƒ}
//         ,undefined
//         👇아래는 setTimeout(printHello.bind(this), 1000); 출력
//         ,{name: '차민지', age: 28, hello: ƒ}
//         ,차민지
//         ,28

// 예외🙌
// 1) 전역스코프에서 this는 window객체
// 2) 화살표 함수(Arrow Function)는 자신을 포함하고 있는 외부 스코프에서 this를 계승받는다. ES6
//     2-1) let person = {
//             name: '차민지',
//             age: 28,
//             hello: function() {
//                 setTimeout(function() { // 익명함수
//                     console.log(this);
//                 }, 1000);
//             },
//         };
//         👩‍💻person.hello();
//         > window 정보
//     2-2) let person = {
//             name: '차민지',
//             age: 28,
//             hello: function() { 
//                 setTimeout(() => { // 화살표 함수
//                     console.log(this);
//                 }, 1000);
//             },
//         };
//         👩‍💻person.hello();
//         > {name: '차민지', age: 28, hello: ƒ} // this = person
//             - 자신(화살표 함수)을 포함하고 있는 스코프에서 this를 물려 받음
//     화살표 함수 없을 때는,
//     2-3) let person = {
//             name: '차민지',
//             age: 28,
//             hello: function() { 
//                 let that = this; // that으로 접근해서 사용
//                 setTimeout(function() {
//                     console.log(this);
//                     console.log(that.name);
//                     console.log(that.age);
//                 }, 1000);
//             },
//         };
//     3) strict mode(엄격 모드)에서는 호출한 놈이 없을 경우 기본값을 undefined로 한다.
//         'use strict';
//         function printThis() {
//             console.log(this);
//         }
//         👩‍💻printThis();
//         > undefined

// 화살표 함수를 사용하면 안 되는 경우
// 객체 메소드를 선언할 때 사용하면 안 됨
// let person = {
//     name: '차민지',
//     printThis: () => {
//         console.log(this); // window 객체 출력
//     },
// };
// 👩‍💻person.printThis();
// > undefined

// addEventListener 함수의 콜백 함수에서 사용하면 this가 상위 컨택스트를 가리킨다.
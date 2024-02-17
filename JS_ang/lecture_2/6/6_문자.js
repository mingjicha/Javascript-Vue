// 어떤 책의 목차가 있을 때
let list = [
  "01. 들어가며",
  "02. JS의 역사",
  "03. 자료형",
  "04. 함수",
  "05. 배열",
];

let newList = [];
for(let i=0; i<list.length; i++){
  newList.push(
    list[i].slice(4)
  );
}
console.log(newList);
// 0: "들어가며"
// 1: "JS의 역사"
// 2: "자료형"
// 3: "함수"
// 4: "배열"

// 금칙어 : 콜라
function hasCola(str){
  if(str.indexOf('콜라')){
    console.log('금칙어가 있습니다.');
  } else {
    console.log('통과');
  }
}
hasCola("와 사이다가 짱이야!"); // 금칙어가 있습니다.
// 콜라가 없는데 금칙어가 있다고 함
// -1은 if에서 true기 때문에 통과가 됨
hasCola("무슨소리, 콜라가 최고"); // 금칙어가 있습니다.
hasCola("콜라"); // 통과
// 콜라라고 적었는데 통과됨
// 0은 if에서 false기 때문에 못들어 감

// 이게 맞는 식으로 만들려면
function hasCola2(str){
  if(str.indexOf('콜라') > -1){
    console.log('금칙어가 있습니다.');
  } else {
    console.log('통과');
  }
}
hasCola2("와 사이다가 짱이야!"); // 통과
hasCola2("무슨소리, 콜라가 최고"); // 금칙어가 있습니다.
hasCola2("콜라"); // 금칙어가 있습니다.

// includes를 사용
// 문자가 있으면 true
// 없으면 false 반환
function hasCola3(str){
  if(str.includes('콜라')){
    console.log('금칙어가 있습니다.');
  } else {
    console.log('통과');
  }
}
hasCola2("와 사이다가 짱이야!"); // 통과
hasCola2("무슨소리, 콜라가 최고"); // 금칙어가 있습니다.
hasCola2("콜라"); // 금칙어가 있습니다.

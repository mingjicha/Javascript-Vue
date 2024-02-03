// for문
console.log('for 1번');
for(let i = 0; i < 10; i++){
  console.log(i);
}
console.log('for 2번');
for(let i = 0; i < 10; i++){
  console.log(i+1);
}
console.log('for 3번');
for(let i = 0; i < 11; i++){
  console.log(i);
}
console.log('for 4번');
for(let i = 0; i <= 10; i++){
  console.log(i);
}
// 같은 결과 반복

// while문
console.log('while');
let i = 0;
while(i < 10) {
  console.log(i);
  i++;
}

// break
console.log('break');
while(true) { // 참고로 while(true)는 무한 반복되므로 조심해서 사용
  let answer = confirm('계속 할까요?'); // 확인을 누르면 계속하고 취소를 누르면 false
  if(!answer) {
    break; // break문을 만나려면 answer가 false가 되어야 함
  }
}
// 이렇게 무한 반복일 때 break문을 걸어주는 것이 중요

// continue
// 짝수만
console.log('continue');
for(let i = 0; i < 10; i++) {
  if(i%2) {
    continue;
  }
  console.log(i)
}
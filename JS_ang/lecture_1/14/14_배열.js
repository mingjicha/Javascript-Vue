// array
let days = ["mon", "tue", "wed"];

// 배열의 접근
console.log(days[1]); // tue

// 배열의 수정
days[2] = '수요일';
console.log(days); // ['mon', 'tue', '수요일']

// 배열의 길이
console.log(days.length); // 3

// 배열의 추가
days.push('thu');
console.log(days); // ['mon', 'tue', '수요일', 'thu']

days.unshift('sun');
console.log(days); // ['sun', 'mon', 'tue', '수요일', 'thu']

// for문
console.log('***********for문 시작***********');
for(let index = 0; index < days.length; index++) {
  console.log(days[index]); // 'sun', 'mon', 'tue', '수요일', 'thu' 각각
}

// for ... of
console.log('***********for ... of 시작***********');
for(let day of days) {
  console.log(day); // 'sun', 'mon', 'tue', '수요일', 'thu' 각각
}
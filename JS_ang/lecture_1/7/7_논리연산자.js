// or
// 이름이 Tom이거나, 성인이면 통과
console.log('***********or 시작***********');

const name = "Mike";
const age = 30;

if(name === 'Tom' || age > 19){
  console.log('통과');
}
// 이름은 Tom이 아니지만 성인이므로 통과

// and
// 이름이 Mike이고, 성인이면 통과
console.log('***********and 시작***********');

if(name === 'Mike' && age > 19){
  console.log('통과');
} else {
  console.log('돌아가');
}
// 이름이 Mike이고 성인이므로 통과

// not
// 나이를 입력받아 성인이 아니라면 돌아가
console.log('***********not 시작***********');

const age2 = prompt('나이가?');
const isAdult = age2 > 19;

if(!isAdult) {
  console.log('돌아가');
}
// 입력 받은 나이를 age2에 넣어주고
// age2가 성인인지 아닌지 isAdult에 ture 또는 false를 넣어줌

// 우선순위
// 남자이고, 이름이 Mike이거나 성인이면 통과
console.log('***********우선순위 시작***********');

const gender = 'F';
const name2 = 'Jane';
const isAdult2 = true;

if(gender === 'M' && name2 === 'Mike' || isAdult2) {
  console.log('통과');
} else {
  console.log('돌아가');
}
// and가 or보다 우선순위가 먼저 임
// gender === 'M' && name2 === 'Mike' 이 부분이 먼저 평가가 되어서 false로 나옴
// 후에 false || isAdult2가 평가 되는데 isAdult2가 ture이므로(성인이면 무조건 다 통과)
// 둘 중에 하나라도 true라서 '통과'로 출력되는 것 

// 우선순위를 올바로 평가하기 위해서는
console.log('***********우선순위를 제대로 평가***********');
if(gender === 'M' && (name2 === 'Mike' || isAdult2)) {
  console.log('통과');
} else {
  console.log('돌아가');
}
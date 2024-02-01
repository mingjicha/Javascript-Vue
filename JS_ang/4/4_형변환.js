const mathScore = prompt("수학 몇점?");
const engScore = prompt("영어 몇점?");
const result = (mathScore + engScore) / 2;

console.log(result);
// prompt에서 입력 받으면 무조건 문자형
// 예로 수학 90 영어 80 이면 9080 / 2 = 4540으로 나옴
// 왜 9080에서는 나누기가 될까?
// 나누기 같은 경우는 자동으로 숫자로 자동 형변환을 해주기 떄문

// 명시적 형변환
// 앞에는 대문자로
console.log(
  String(3),
  String(true),
  String(false),
  String(null),
  String(undefined)
)
// -> "3", "true", "false", "null", "undefined"

// 사용자한테 입력 받는 경우 문자일 때 숫자로 형변환 자주 사용
console.log(
  Number("1234"),
  // Number("문자"), // 문자는 NaN
  Number(true), // 1
  Number(false), // 0
  // 주의사항
  Number(null), // 0 -> 사용자한테 나이를 입력 받는데 취소 버튼을 누르면 null이 되고 Number는 0으로
  Number(undefined) // NaN
)

// Boolean 불린형은 false만 기억하면 됨
console.log(
  Boolean(0),
  Boolean(""),
  Boolean(null),
  Boolean(undefined),
  Boolean(NaN),
  // 주의사항
  Boolean(0), // false
  Boolean('0'), // true
  Boolean(''), // 빈문자열 false
  Boolean(' '), // 공백 true
)
// 외에는 true로 반환


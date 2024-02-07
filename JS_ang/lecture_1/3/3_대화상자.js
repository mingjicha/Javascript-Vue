// alert는 확인 버튼만

// const name = prompt("이름을 입력하세요.");
// alert("환영합니다, " + name + "님");
// alert(`안녕하세요, ${name}님. 환영합니다.`);
// 아무것도 입력 안 하면 null

// prompt는 default값 설정 가능
// const name = prompt("예약일을 입력해주세요.", "2024-02-");
// prompt("입력 메시지", "입력받을 default값")

// confirm은 확인/취소 버튼 둘다 있음
const isAdult = confirm("당신은 성인입니까?");
console.log(isAdult); // 확인을 누르면 true 취소를 누르면 false
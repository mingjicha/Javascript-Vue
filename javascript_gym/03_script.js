// 🔼head에 자바스크립트 연결 했을 경우 📍03_HTML_parsing1.png 참고 
console.log('Hello World!'); 
// 출력 ⭕
let btn = document.querySelector('#btn')
btn.addEventListener('click', function() {
    alert('Hello World!');
});
// 출력 ❌
// > Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
// at 03_script.js:4:5

// ✔ 왜 출력이 안 될까❓
//     브라우저에서는 html 파일을 만났을 때 위에서 아래로 순차적으로 코드를 파싱한다.
//     파싱을 하다가 script 태그를 만나면, 파싱을 멈추고✋ script 파일을 가져온다.
//     버튼은 브라우저에서 파싱을 완료한 후에 버튼 DOM 요소를 생성하지만,
//     파싱 완료 전에 script 태그를 만났기 때문에 버튼 요소를 가져올 수 없다.
//     파싱이 완료되지 않았는데🤔 script 태그를 가져오려니까 DOM요소를 잘 가져오지 못했던 것!
//     👩‍💻console.log('btn: ', btn); 
//     > btn: null

// 🔽body 하단에 자바스크립트 연결 했을 경우 📍03_HTML_parsing2.png 참고 
//     브라우저에서 버튼 태그를 먼저 파싱 완료 후 버튼 DOM 요소를 생성하고 script 파일을 가져온다.
//     👩‍💻console.log('btn: ', btn); 
//     > btn: <button id="btn">버튼</button>

// 💡자바스크립트 연결하는 또 다른 방법 : load 관련 이벤트 사용
//     1) window.onload : HTML파싱 DOM생성 그리고 외부 콘텐츠(img, script, css, etc)가 로드된 후 발생하는 이벤트
//     window.onload = function() {
//         let btn = document.querySelector('#btn')
//         btn.addEventListener('click', function() {
//             alert('Hello World!');
//         });
//     }
//         - 비효율적, 이미지가 많을 경우 이미지 다 가져올 때까지 기다려야 함 
//     2) DOMContentLoaded : HTML파싱, DOM생성 후 발생하는 이벤트(외부 콘텐츠 안 기다림)
//     document.addEventListener('DOMContentLoaded', function() {
//         let btn = document.querySelector('#btn')
//         btn.addEventListener('click', function() {
//             alert('Hello World!');
//         });
//     });

// 😇HTML5에서 나온 자바스크립트를 효과적으로 가져올 수 있는 속성
//     - 두 가지 속성 다 HTML 파싱과 함께 비동기로 JavaScript 파일을 불러온다.
//     1) defer : HTML 파싱이 완료된 후 js코드를 실행한다. 📍03_HTML_parsing3.png 참고 
//         <script src="03_script.js" defer></script>
//     2) async : HTML 파싱이 완료되지 않았더라도, 먼저 로딩되는 js파일부터 실행이 시작된다. 📍04_HTML_parsing3.png 참고
//         - js 실행할 때는 html이 중지가 됨, 순서에 따라서 원활하게 잘 못가져올 경우가 있음

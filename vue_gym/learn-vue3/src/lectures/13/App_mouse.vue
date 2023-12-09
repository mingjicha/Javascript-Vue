<template>
	<div>
		<div id="modifiers">
			<!-- capture넣어주면 div부터 실행 -->
			<!-- <div @click.capture="clickDiv"> -->
			<div @click="clickDiv">
				DIV 영역
				<!-- 클릭한 요소가 나 자신일 때 이벤트 실행 -->
				<!-- <p @click.self="clickP"> -->
				<p @click.self="clickP">
					p 영역
					<!-- stop : 클릭 이벤트 전파가 중단 -->
					<!-- <span @click.stop="clickSpan">span 영역</span> -->
					<span @click="clickSpan">span 영역</span>
					<!-- prevent : 제출 이벤트가 페이지를 다시 로드하지 않음 -->
					<!-- stop.prevent : 수정자는 체이닝이 가능 -->
					<a href="http://naver.com" @click.prevent.stop="clickA">a 영역</a>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		const clickDiv = () => {
			console.log('clickDiv');
			// location.href = 'http://naver.com';
		};
		const clickP = () => {
			console.log('clickP');
		};
		// span을 누르면 좋아요가 클릭되고 naver로 이동된다. -> 버블링때문에
		// 이러한 전파를 막기 위해서 stopPropagation 사용
		// 또는 template에서 stop 사용해도 됨
		// const clickSpan = (e) => {
		const clickSpan = () => {
			console.log('clickSpan');
			// e.stopPropagation();
			// alert('좋아요');
		};
		const clickA = e => {
			e.preventDefault();
			alert('어떤기능~');
		};
		return {
			clickDiv,
			clickP,
			clickSpan,
			clickA,
		};
	},
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
	padding: 40px;
}
#modifiers div {
	background-color: #ccc;
}
#modifiers p {
	background-color: #999;
}
#modifiers span {
	background-color: #666;
	display: block;
}
</style>

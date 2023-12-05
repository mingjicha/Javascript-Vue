<template>
	<div>
		<!-- 
			템플릿 표현식 내 코드가 길어질 경우 가독성이 떨어지고 유지보수가 어려워질 수 있음
			이럴때 사용하는 것이 계산된 속성(computed property)
		-->
		<h2>{{ teacher.name }}</h2>
		<h3>강의가 있습니까?</h3>
		<!-- <p>{{ teacher.lectures.length > 0 ? '있음😊' : '없음😥' }}</p> -->
		<p>{{ hasLecture }}</p>
		<p>{{ hasLecture }}</p>
		<!-- 
			computed는 한 번만 출력 
			캐시를 보관하고 있다가 캐시된 데이터를 돌려줌
			: 성능면에서 좋음
		-->
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<!-- method는 실행한만큼 -->
		<h2>이름 : {{ fullName }}</h2>
	</div>
</template>

<script>
import { reactive, computed, ref } from 'vue';

export default {
	setup() {
		const teacher = reactive({
			name: '짐코딩',
			lectures: ['HTML/CSS', 'JavaScript', 'Vue3'],
		});

		// const hasLecture = computed(() =>
		// 	teacher.lectures.length > 0 ? '있음😊' : '없음😥',
		// );
		const hasLecture = computed(() => {
			console.log('computed');
			return teacher.lectures.length > 0 ? '있음😊' : '없음😥';
		});

		// 메서드를 활용하면 computed와 동일한 효과를 얻을 수 있음
		// const existLecture = () =>
		// 	teacher.lectures.length > 0 ? '있음😊' : '없음😥';
		const existLecture = () => {
			console.log('method');
			return teacher.lectures.length > 0 ? '있음😊' : '없음😥';
		};

		// Computed는 기본적으로 getter전용
		// 계산된 속성에 새 값을 할당하려고 하면 런타임 경고가 표시
		//  새로운 계산된 속성이 필요한 경우에 getter와 setter를 모두 제공하여 속성을 만들 수 있음
		const firstName = ref('홍');
		const lastName = ref('길동');

		const fullName = computed({
			// 위에 홍 길동으로 초기값 설정
			get() {
				return firstName.value + ' ' + lastName.value;
			},
			set(value) {
				// 반응형 데이터 값이 바꼈기 때문에 다시 갱신해서 짐 코딩 출력
				// console.log('value: ', value); // 짐 코딩
				// console.log(value.split(' ')); // 배열 ['짐', '코딩']
				[firstName.value, lastName.value] = value.split(' ');
				// console.log('first: ', firstName); // 짐
				// console.log('last: ', lastName); // 코딩
			},
		});
		console.log('Console 출력: ', fullName.value);
		fullName.value = '짐 코딩';
		return {
			teacher,
			hasLecture,
			existLecture,
			firstName,
			lastName,
			fullName,
		};
	},
};
</script>

<style lang="scss" scoped></style>

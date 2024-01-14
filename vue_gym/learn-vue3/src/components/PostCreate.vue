<!-- 상단 Create부분 -->
<template>
	<div class="row g-3">
		<div class="col col-2">
			<select
				v-model="type"
				class="form-select"
				aria-label="Default select example"
			>
				<option value="news">뉴스</option>
				<option value="notice">공지사항</option>
			</select>
		</div>
		<div class="col col-8">
			<input v-model="title" type="text" class="form-control" />
		</div>
		<div class="col col-2 d-grid">
			<!-- @click="$emit('createPost', 1, 2, 3, '김길동')" -->
			<button class="btn btn-primary" @click="createPost">추가</button>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	// emits: ['createPost'],
	// emits를 객체로 선언을 해줘서 빈값으로 올 경우 경고 표시
	emits: {
		createPost: newPost => {
			// console.log('validator: ', newPost);
			if (!newPost.type) {
				return false;
			} else if (!newPost.title) {
				return false;
			}
			return true;
		},
		// 유효성 체크 없을 경우
		// createPost: null,
	},
	setup(props, { emit }) {
		/// context.emit
		const type = ref('news');
		const title = ref('');
		const createPost = () => {
			const newPost = {
				type: type.value,
				title: title.value,
			};
			emit('createPost', newPost);
			// 추가 버튼 클릭 후 값 초기화 세팅
			type.value = 'news';
			title.value = '';
		};
		return { createPost, type, title };
	},
};
</script>

<style lang="scss" scoped></style>

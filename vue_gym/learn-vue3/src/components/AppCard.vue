<!-- 게시글이 추가되는 부분 -->
<template>
	<div class="card">
		<!-- <img src="..." class="card-img-top" alt="..." /> -->
		<div class="card-body">
			<!-- type : news, notice -->
			<!-- <span class="badge bg-secondary">{{
				type === 'news' ? '뉴스' : '공지사항'
			}}</span> -->
			<!-- 바인딩 사용해서 한줄 만들기 -->
			<span class="badge bg-secondary">{{ typeName }}</span>
			<h5 class="card-title mt-2">{{ title }}</h5>
			<p class="card-text">
				{{ contents }}
			</p>
			<!-- 바인딩을 사용해서 한줄 만들기 -->
			<!-- <a v-if="isLike" href="#" class="btn btn-danger">좋아요</a>
			<a v-else href="#" class="btn btn-outline-danger">좋아요</a> -->
			<a href="#" class="btn" :class="isLikeClass" @click="toggleLike"
				>좋아요</a
			>
		</div>
	</div>
</template>

<script>
import { computed } from 'vue';

export default {
	// props 사용을 위한 선언
	// props: ['title', 'contents'],
	props: {
		type: {
			type: String,
			default: 'news',
			// 유효성 검사 -> news말고 news112들어간다면 유효하지 않은 값이라고 console에 출력 됨
			validator: value => {
				return ['news', 'notice'].includes(value);
			},
		},
		title: {
			type: String,
			required: true,
		},
		contents: {
			type: String,
			required: true,
		},
		isLike: {
			type: Boolean,
			default: false,
		},
		/* 주의사항⛔
		  객체나 배열같은 레퍼런스의 타입을 디폴트 설정할 때 팩토리함수를 선언해야 함 */
		obj: {
			type: Object,
			default: () => ({}),
		},
	},
	emits: ['toggleLike'],
	setup(props, context) {
		// console.log('props.title: ', props.title);
		const isLikeClass = computed(() =>
			props.isLike ? 'btn-danger' : 'btn-outline-danger',
		);
		const typeName = computed(() =>
			props.type === 'news' ? '뉴스' : '공지사항',
		);
		const toggleLike = () => {
			// props.isLike = !props.isLike;
			context.emit('toggleLike');
		};
		return { isLikeClass, typeName, toggleLike };
	},
};
</script>

<style lang="scss" scoped></style>

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
console.log('Normal Script');
</script>

<script setup>
import { computed } from 'vue';
console.log('Script Setup');

const props = defineProps({
	type: {
		type: String,
		default: 'news',
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
	obj: {
		type: Object,
		default: () => ({}),
	},
});
const emit = defineEmits(['toggleLike']);
const isLikeClass = computed(() =>
	props.isLike ? 'btn-danger' : 'btn-outline-danger',
);
const typeName = computed(() => (props.type === 'news' ? '뉴스' : '공지사항'));
const toggleLike = () => {
	// props.isLike = !props.isLike;
	emit('toggleLike');
};
</script>

<style lang="scss" scoped></style>

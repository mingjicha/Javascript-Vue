<template>
	<header class="header">
		<div class="header_left">
			<a href="#" class="logo">안냥</a>
		</div>
		<div class="header_mid">
			<nav class="lnb">
				<ul class="nav">
					<li>
						<a href="#" target="_self">홈이야요</a>
						<ul class="depth1">
							<li>
								<a href="#" target="_self" onclick="">블루베리</a>
							</li>
							<li>
								<a href="#" target="_self" onclick="">스우므디</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#" target="_self">경상도오</a>
						<ul class="depth1">
							<li>
								<!-- 아예 페이지를 새로 불러옴(created 구문을 실행하기 위해서) -->
								<a href="#">경상남도구</a>
							</li>
							<li>
								<a href="#">경상북돈디</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#" target="_self">배고프당</a>
						<ul class="depth1">
							<li>
								<a href="#" target="_self" onclick="">마아라탕</a>
							</li>
							<li>
								<a href="#" target="_self" onclick="">먹구시펑</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
		<div class="header_right">
			<ul class="gnb">
				<li>
					<a href="#">로그인</a>
				</li>
				<li>
					<a href="#">회원가입</a>
				</li>
			</ul>
		</div>
		<!-- <div class="header_right">
			<ul class="gnb">
				<li>
					<div class="header_icon">
						<div>
							<font-awesome-icon :icon="['fas', 'circle-user']" />
						</div>
					</div>
				</li>
				<li>로그아웃</li>
			</ul>
		</div> -->
	</header>
	<a href="javascript:void(0);" class="menu_btn" @click="toggleMenu">
		<span></span>
		<span></span>
		<span></span>
		<i class="sound_only">메뉴</i>
	</a>
	<div :class="{ ov_hidden: isMenuActive, mo_header: isMenuActive }">
		<!-- 내용이 들어갈 부분 -->
	</div>
</template>

<script>
export default {
	name: 'HeaderComponent',
	data: function () {
		return {
			isMenuActive: false,
			menuItems: [{ active: false, children: [] }],
		};
	},
	methods: {
		toggleMenu: function () {
			this.isMenuActive = !this.isMenuActive;
		},
		toggleAccordion: function (item) {
			item.active = !item.active;
			if (item.active) {
				this.menuItems.forEach(otherItem => {
					if (otherItem !== item) {
						otherItem.active = false;
					}
				});
			}
		},
	},
};
</script>

<style lang="scss" scoped></style>

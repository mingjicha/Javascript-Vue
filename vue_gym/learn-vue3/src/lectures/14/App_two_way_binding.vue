<template>
	<div>
		<h2>input value</h2>
		<!-- 프론트엔드에서 입력 양식을 처리할 때 입력 요소의 상태와 자바스크립트의 상태를 동기화해야 하는 경우가 많음 -->
		<!-- value를 바인딩하고 @input이벤트로 text를 변경하는 것 -->
		<!-- <input
			type="text"
			:value="inputValue"
			@input="event => (inputValue = event.target.value)"
		/> -->
		<!-- Vue에서는 이러한 작업은 단순화 하도록 양방향을 바인딩할 수 있는 v-model디렉티브를 제공 -->
		<input type="text" v-model="inputValue" />
		<div>{{ inputValue }}</div>

		<h2>textarea value</h2>
		<!-- <textarea
			:value="textareaValue"
			@input="event => (textareaValue = event.target.value)"
		></textarea> -->
		<textarea v-model="textareaValue"></textarea>
		<div>{{ textareaValue }}</div>
		<!-- v-model은 내부적으로 HTML 요소가 어떤 요소냐에 따라 서로 다른 속성(:value)과 이벤트(@input)를 사용 -->
		<!-- 1. input type=”text”와 textarea는 value 속성과 input 이벤트를 사용 -->

		<!-- 2. checkbox와 radio버튼은 checked 속성과 change 이벤트를 사용 -->
		<h2>checkbox value</h2>
		<label for="checkbox">{{ checkboxValue }}</label>
		<input
			type="checkbox"
			id="checkbox"
			v-model="checkboxValue"
			true-value="Yes"
			false-value="No"
		/>
		<!-- 			
			true-value="Yes"
			false-value="No" 
			이거 두 줄은 true일 때 Yes로 checkbox를 띄우겠다는 뜻
		-->

		<!-- 체크박스를 여러개 사용할 경우 -->
		<h3>checkbox values</h3>
		<label>
			<input type="checkbox" value="html" v-model="checkboxValues" />
			HTML
		</label>
		<label>
			<input type="checkbox" value="css" v-model="checkboxValues" />
			CSS
		</label>
		<label>
			<input type="checkbox" value="javascript" v-model="checkboxValues" />
			JavaScript
		</label>
		<div>{{ checkboxValues }}</div>

		<h2>radio value</h2>
		<label>
			<input type="radio" name="type" value="O" v-model="radioValue" />
			O형
		</label>
		<label>
			<input type="radio" name="type" value="A" v-model="radioValue" />
			A형
		</label>
		<div>
			{{ radioValue }}
		</div>

		<!-- select 태그는 value 속성과 change 이벤트를 사용 -->
		<h2>select value</h2>
		<select v-model="selectValue">
			<option value="html">HTML 수업</option>
			<option value="css">CSS 수업</option>
			<option value="javascript">JavaScript 수업</option>
		</select>
		<div>{{ selectValue }}</div>

		<!-- .lazy -->
		<!-- 기본적으로, v-model은 각 input 이벤트 후 입력과 데이터를 동기화 -->
		<!-- lazy 수식어를 추가하여 change 이벤트 이후에 동기화 -->
		<!-- <input v-model.lazy="text" /> -->

		<!-- .number -->
		<!-- 기본적으로 입력받은 값은 문자열인데 number로 형변환 하기 위해 사용 -->
		<!-- <input v-model.number="text" /> -->

		<!-- .trim -->
		<!-- 사용자가 입력한 내용에서 자동으로 앞뒤 공백을 제거 -->
		<!-- <input v-model.trim="text" /> -->
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref('');
		const textareaValue = ref('');
		const checkboxValue = ref(true);
		const radioValue = ref('O');
		const selectValue = ref('html');
		const checkboxValues = ref([]);
		return {
			inputValue,
			textareaValue,
			checkboxValue,
			radioValue,
			selectValue,
			checkboxValues,
		};
	},
};
</script>

<style lang="scss" scoped></style>

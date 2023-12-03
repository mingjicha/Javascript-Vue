1. vite.config.js : alias같은 걸 설정하는 곳

2. package.json : npm으로 관리하기 위한 프로젝트 정보를 담아두는 곳

3. .eslintrc.cjs : 우리의 프로젝트 규칙을 정하는 곳 - 
    Vue style 가이드 : 
        A순위. 컴포넌트 이름은 합성어 사용 ex. todo-item or TodoItem
                Props 객체로 상세하게 정의하기
    eslint 규칙 설정 : user guide - rule

    ✔ ESLint, Prettiser
        1. ESLint : ESLint는 코드 검사기로 코드에 에러가 있는지 검사해주 도구
        2. Prettier : Prettier는 코드 포매터로 코드를 일관성있고 예쁘게 정렬해 주는 도구
            - 현업에서는 대부분 ESLint와 Prettier를 함께 사용
            - 참고 : https://www.gymcoding.co/0a2d35ba-b925-4c26-b425-7e53bba218f7

4. App.vue
    vbase
    vbase-3
// 생성자 함수 : 상품 객체를 생성해보자.

function Item(title, price){
  // this = {};
  this.title = title;
  this.price = price;
  this.showPrice = function(){
    console.log(`가격은 ${price}원 입니다.`);
  }
  // return this;
}
const item1 = new Item('인형', 3000);
const item2 = new Item('가방', 4000);
const item3 = new Item('지갑', 9000);
// new를 안 붙이고 호출하면 undefined로 나옴 
// why? 그냥 함수만 실행하는 거고 리턴해주는게 없기 떄문 

console.log(item1, item2, item3); // 각 Item 객체

item3.showPrice(); // 가격은 9000원 입니다.

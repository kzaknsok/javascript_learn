// constによる変数宣言とオブジェクトの上書き

// const val = {
//   name: "にしおか",
//   age: 35,
// };
// console.log(val);

//オブジェクトの上書きと追加
const val = {
  name: "にしおか",
  age: 35,
};
val.name = "Nishioka";
val.address = "Osaka"
console.log(val);

//配列の上書きと追加
const val2 = ['dog', 'cat'];
val2[0] = "bird";
val2.push("monkey");
console.log(val2);
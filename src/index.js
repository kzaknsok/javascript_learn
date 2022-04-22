// constによる変数宣言とオブジェクトの上書き

// const val = {
//   name: "にしおか",
//   age: 35,
// };
// console.log(val);

//オブジェクトの上書きと追加
// const val = {
//   name: "にしおか",
//   age: 35,
// };
// val.name = "Nishioka";
// val.address = "Osaka"
// console.log(val);

// //配列の上書きと追加
// const val2 = ['dog', 'cat'];
// val2[0] = "bird";
// val2.push("monkey");
// console.log(val2);

// /**
//  * テンプレート文字列
//  * バッククォートとダラー、波カッコをつかう
//  */
// const name = "Kazu";
// const age = 35;

// const message = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message);

// /**
//  * アロー関数
//  */
// // const func1 = (num1, num2) => {
// //   return num1 + num2;
// // }
// // console.log(func1(20, 20));

// const func1 = (num1, num2) => num1 + num2;
// console.log(func1(20, 20));

/**
 * 分割代入
 */

// オブジェクトのとき
//  const myProfile = {
//   name: "Kazu",
//   age: 35,
//  };
// const { name, age } = myProfile;
// const message1 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message1);

// 配列のとき
// const myProfile = ["kazu", 35];
// const [name, age] = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * デフォルト値
 * 関数の値が未設定の場合はUndifinedになるため
 * =を使ってデフォルト値を設定できる
 */

//  const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん。`);
//  sayHello();

/**
 * スプレッド構文
 * 「...」を書く
 * 配列の中身を分割して出力してくれるので足し算の関数を作り
 * その中で展開するだけで足し算の結果を得られる
 */

//  const arr1 = [1,2];
// //  console.log(arr1);
// //  console.log(...arr1);
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(...arr1);

//まとめる時にも使える
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピーと結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// //コピーはスプレッド構文で行うことで元の配列に影響を与えることなくコピー先の配列の中身を書き換える事が出来る
// const arr6 = [...arr4];
// const arr7 = [...arr4, ...arr5];

// console.log(arr6);
// console.log(arr7);

/**
 * map
 * indexを引数にもけることで配列のインデックスを管理できる
 * if文を使って出力の仕方を変えられる
 */
const nameArr = ["ごろう", "たいすけ", "かず"];

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
//以下省略版

// nameArr.map((name) => console.log(name));
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}さんです。`));
const newNameArr = nameArr.map((name) => {
  if (name === "かず") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/**
 * filter
 * 条件を絞ってフィルターにかけて出力できる
 */
// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

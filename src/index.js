/**
 * 変数定義
 */
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let var2 = "let変数";
// console.log(var2);

// var2 = "let変数を上書き";
// console.log(var2);

// const val3 = "const変数";
// console.log(val3);

//constで定義したオブジェクトのプロパティは変更可能
// const val4 = {
//   name:"atusi.kaze",
//   age:50,
// };
// val4.name = "acchan";
// val4.address = "Tokyo";
// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "atusi.kaze";
// const age = 50;

// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// const func2 = (str) => {
//   return str;
// }
// const func2 = (str) => str;
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(1,3));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "atusi.kaze",
//   age: 50
// };
// // const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// // console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["atusi.kaze", 50];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const myProfile = ["atusi.kaze", 50];
// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();

/**
 * スプレッド構文
 */
//配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(arr3);

//コピー、結合
// const arr3 = [10, 20];
// const arr4 = [30, 40];

// const arr5 = [...arr3];
// console.log(arr5);

// const arr6 = [...arr3, ...arr4];
// console.log(arr6);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["acchan", "nike", "atusi.kaze"];
// nameArr.map((name) => console.log(name));
// nameArr.map((name, index) => console.log(`${index + 1}番目の名前は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNunArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNunArr);

// const newNameArr = nameArr.map((name) => {
//   if(name === "acchan") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// const num = "1300";

// const formattedNum = typeof(num) === 'number' ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

/**
 * $$と||の本当の意味
 */

// ||の左側がfalseなら右側を返す
// const num1 = null;
// const fee = num1 || "金額未設定です。";
// console.log(fee);

// &&の左側がtrueなら右側を返す
const num2 = 100;
const fee = num2 && "何か設定されました。";
console.log(fee);

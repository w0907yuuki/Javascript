function butotnClick(){
 if (!nameText.value){
  msg.innerText = '名前を入力してください'
}
else{
  msg.innerText = 'お名前は' + nameText.value + 'さんですね';
}
}

let nameText = document.getElementById('nameText');
let msg = document.getElementById('msg');


let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', butotnClick);

　function textCheck($this)
　　　{
　　　　let str=$this.value;
　　　　// 文頭から文末まで全て0-9かチェック
　　　　if(!str.match(/^[0-9]+$/)){
　　　　　// そうでなければ入力文字を空白に変換
　　　　　str="";
　　　　}
　　　　$this.value=str;
　　　}
　　　
　　　function buttonClick(){
　　　　// 入力値取得
　　　　let input = document.getElementById("text").value;
　　　　let output = input;
　　　　// 表示
　　　　document.getElementById("html").innerHTML
　　　　　= output;
　　　}

var input = document.getElementById("sampleForm");
var span = document.getElementById("inputCounter");
input.addEventListener("keyup", function() {
  span.textContent = input.value.length;
});

window.addEventListener('DOMContentLoaded', function(){

	// (1)パスワード入力欄とボタンのHTMLを取得
	let btn_passview = document.getElementById("btn_passview");
	let input_pass = document.getElementById("input_pass");

	// (2)ボタンのイベントリスナーを設定
	btn_passview.addEventListener("click", (e)=>{

		// (3)ボタンの通常の動作をキャンセル（フォーム送信をキャンセル）
		e.preventDefault();

		// (4)パスワード入力欄のtype属性を確認
		if( input_pass.type === 'password' ) {

			// (5)パスワードを表示する
			input_pass.type = 'text';
			btn_passview.textContent = '非表示';

		} else {

			// (6)パスワードを非表示にする
			input_pass.type = 'password';
			btn_passview.textContent = '表示';
		}
	});

});

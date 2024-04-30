const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});




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


function PassCheck() {
let PassText = document.getElementById('PassText');
let ErrorMsg = document.getElementById('ErrorMsg');
let CountPass = PassText.value.length;
let bolUpperCase = false;
let bolNumber = false;
let bolAlphabet = false;

 if (!PassText.value){
  ErrorMsg.innerText = '空欄です';
 }
 else{
    ErrorMsg.innerText = PassText.value;
 }
 if (CountPass <= 6){
  ErrorMsg.innerText +="\n" + '７文字以上入力してください';
 }
else{
ErrorMsg.innerText +="\n" + "成功";
}

for(let i = 0 ; i<PassText.value.length; ++i){
 if (PassText.value[i] === PassText.value[i].toUpperCase() && PassText.value[i] !==   PassText.value[i].toLowerCase()){
   bolUpperCase = true;
 }
 else if(!isNaN(PassText.value[i])){
  bolNumber = true;
 }
 else if(PassText.value.match(/^[A-Za-z0-9]*$/)){
  bolAlphabet = true;
 }
}
if(bolUpperCase){
 ErrorMsg.innerText+="\n" + "成功";
}
else{
 ErrorMsg.innerText +="\n" + '大文字を使用してください';
}
if(bolNumber){
 ErrorMsg.innerText+="\n" + "成功";
}
else{
 ErrorMsg.innerText +="\n" + '数字を使用してください';
}
if(bolAlphabet){
 ErrorMsg.innerText+="\n" + "成功";
}
else{
 ErrorMsg.innerText +="\n" + 'アルファベットを使用してください';
}


}

let checkPassword = document.getElementById('checkPassword');
checkPassword.addEventListener('click', PassCheck);
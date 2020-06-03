console.log('hello world!');
//комментарий
/*длинный ком*/
// alert('hello');
// prompt('prompt');
// confirm('hola!');
// var bitInbite = 8;
// var biteinKilb = 1024;
// var numb = +prompt('Сколько килобайт?');
// alert(bitInbite*biteinKilb*numb); 
// var summ = 0.1+0.2;
// console.log(+summ.toFixed(1));
// console.log(numb/0);
// var FirstString = '';
// var SecondString = 'строчка2';
// alert(FirstString+' '+SecondString);
// var name = prompt('Имя');
// var lastname = prompt('Фамилия');
// alert('Здравствуйте, '+ name + ' ' + lastname + ' ' + 'годен!');
// alert(FirstString.length);
// alert(prompt('слово').length);
// var one = true;
// var two = false;
// alert(one && !two);
// var result = '0';
// console.log(typeof(result));
// var one = 47;
// var two =26;
// alert(one <= two);
// var one = Number(prompt('Введите число:'));
// alert(one >= 1);
// var one = Number(prompt('Введите число'));
// alert((one >=10 && one <=99) || one< -10);
// if(one >= 3){
// 	alert('banana');
// }
// var years = prompt('Возраст ваш мне нужен');
// if(years<18){
// 	alert('Уйдите пожалуйста отсюда!')
// }
// else if(years>=65){

// 	alert("Проходите пожалуйста челодой старовек");
// }
// else{
// 	alert("Проходите пожалуйста челодой моловек");
// }
// while(years<=40){
// 	years++;
// 	alert('Здравствуйте я из компании орифлейм');
// }
// var i = 0;
// var summ = 0;
// while(i<=99){
// 	i++;
// 	summ+=i;
// }
// var value = 0; 
// alert(summ);
// do{
// 	value++;
// }while(value<0);
// while(value<0){
// 	value++;
// }
// for(var i = 0; i <= 128; i++){
// 	alert('hello!')
// }
one = Number(prompt('Введите число'))
proiz = 1;
for(var i=1; i<=one; i++){
	proiz *=i;
}
alert(proiz);

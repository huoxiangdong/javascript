console.log('数组');
/*var name = ['a','b','c'];
var score = ['50','20','30'];*/
/*name.length = 20;*/
/*console.log(name.indexOf('c'));
console.log(score[4])
console.log(name.length,score.length)*/
/*var acopy = name.slice()*/
/*name.join('-');*/
/*console.log(name);*/
/*console.log(score.indexOf('20'),score.length);*/

var arr = [[1, 2, 3], [400, 500, 600], '-']; //多维数组
var x = arr[1].slice(1,2);
console.log(x);
/*var arr = ['小明', '小红', '大军', '阿黄'];
arr.length = 30;
alert(arr.length);
alert('欢迎'+arr.slice(0,3)+'和'+arr[3]+'同学！');*/

console.log('对象');
// 多个属性   对象 与 方法 函数
/*var ob = {
    name: 
         [1,2,4],
    birth: 2,
    school: 3,
    height: 4,
    weight: 5
};

console.log(ob.name);*/
/*var a = 8/6;
var i;
for (i=1; i<=a; i++) {
    x = x + i;
}

 
 console.log(x);*/
/*
 var ob = {

 };
 ob.name = 'xiaoming';
 delete ob.name;
 var x = ob.hasOwnProperty('name'); //判断属性源自自身
 console.log(x);*/

 /*var x = 1;
var i;
for (i=2; i<=10; i++) {
    //alert(i)
    x = x * i;
};
console.log(x);
if (x === 3628800) {
    console.log('1 x 2 x 3 x ... x 10 = ' + x);
}
else {
   console.log('计算错误');
}*/

/*var arr = ['apple','goole','alibaba'];
var x;
var i;
for (i=0;i<arr.length;i++){
    x = arr[i];
    
    console.log(x,arr.length);
}*/
//死循环
/*var x = 0;
for (;;){
    console.log(x);
}*/

//location.reload();
//location.assign('/');

console.log('BOM','---','document','a Key');
//console.log(document.cookie)
document.title = 'JavaScript learn';

/*console.log('DOM','---');
num = 10;
foo();
function foo(){
    console.log(num);
    num = 20;
}*/
//遍历： 是指沿着某条搜索路线，一次对树中每个节点均做一次且仅做一次访问。

console.log(document.querySelector('body > h1'));
console.log(document.getElementsByTagName('h1'));

//闭包 容器
//面向接口 数据私有 可复用  容器内 )作用域  访问方法
//面向实现


//操作符
//一元操作符  ++ -- + -
//位操作符 非 ~ ，与 &，或 |，异或 ^,左移 <<,右移 >>>
//---补充知识
//二进制 1位==1bit，既 位==bit(Binary digit)，数据存储最小单位  8bit(位)==1字节(B)
//cpu位数指的是cpu一次能处理的最大位数  32位（一次处理32位数据） or 64 位
//原码 补码 发码 ？？？
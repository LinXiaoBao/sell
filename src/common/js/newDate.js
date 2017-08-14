// 比如需要这样的格式 yyyy-MM-dd hh:mm:ss
var date = new Date(139825054949);
Y = date.getFullYear() + '-';
M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
D = date.getDate() + ' ';
h = date.getHours() + ':';
m = date.getMinutes();
s = date.getSeconds(); 
console.log(Y+M+D+h+m);
// 输出结果：2014-04-23 18:55
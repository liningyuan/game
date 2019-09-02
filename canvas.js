var canvas=document.createElement("canvas");
var cvw=1024,cvh=512;
canvas.width=cvw;
canvas.height=cvh;
canvas.setAttribute("style","background:#333;");
document.body.appendChild(canvas);
var ctx=canvas.getContext("2d");
ctx.fillStyle="#66CCFF";
ctx.strokeStyle="#EE0000";
var clearcv=function(){ctx.clearRect(0,0,cvw,cvh);}
//leftbottom(0,0)
var drawline=function(x1,y1,x2,y2){
	ctx.beginPath();
	ctx.moveTo(x1,cvh-y1);
	ctx.lineTo(x2,cvh-y2);
	ctx.stroke();
}
var drawcircle=function(x,y,r,fi=false,st=true,begin=0,end=2*Math.PI){
	ctx.beginPath();
	ctx.arc(x,cvh-y,r,begin,end);
	ctx.closePath();
	if(fi)ctx.fill();
	if(st)ctx.stroke();
	return;
}
var drawrect=function(x,y,a,b,ang,fi=false,st=true){
	var co=Math.cos(ang),si=Math.sin(ang);
	ctx.beginPath();
	ctx.moveTo(x+a*co-b*si,cvh-(y+a*si+b*co));
	ctx.lineTo(x-a*co-b*si,cvh-(y-a*si+b*co));
	ctx.lineTo(x-a*co+b*si,cvh-(y-a*si-b*co));
	ctx.lineTo(x+a*co+b*si,cvh-(y+a*si-b*co));
	ctx.closePath();
	if(fi)ctx.fill();
	if(st)ctx.stroke();
	return;
}
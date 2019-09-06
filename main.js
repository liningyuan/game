var nowdown={mouse:0,KeyS:0};
function clearcnt(){
	for(var i1 in nowdown){
		nowdown[i1]=0;
	}
	return;
}
function handledown(x){
	if(nowdown[x]===undefined)return;
	console.log(x);
	nowdown[x]=1;
}
function handleup(x){
	if(nowdown[x]===undefined)return;
	console.log(x);
	nowdown[x]=0;
}
function msdownlisten(e){
	console.log(e);
	if(e.button===0)handledown("mouse");
}
function msuplisten(e){
	console.log(e);
	if(e.button===0)handleup("mouse");
}
document.addEventListener("mousedown",msdownlisten);
document.addEventListener("mouseup",msuplisten);
function keydownlisten(e){
	console.log(e);
	handledown(e.Code);
}
function keyuplisten(e){
	console.log(e);
	handleup(e.Code);
}
document.addEventListener("keydown",keydownlisten);
document.addEventListener("keyup",keyuplisten);

//dom
var titlediv=document.getElementById("title");
var levelsdiv=document.getElementById("levels");
var instr='<div style="font-size:64px;">Levels</div>';
for(var i=1;i<=8;++i){
	instr+='<div id="levdiv'+i+'" style="margin:40px 100px;cursor:pointer;background:#233;display:inline-block;" onclick="alert('+i+');">'+i+'</div>';
}
levelsdiv.innerHTML=instr;

function showcanvas(){
	canva.style.display=null;
	levelsdiv.style.display="none";
	titlediv.style.display="none";
}
function showlevels(){
	canva.style.display="none";
	levelsdiv.style.display="inline-block";
	titlediv.style.display="none";
}
function showtitle(){
	canva.style.display="none";
	levelsdiv.style.display="none";
	titlediv.style.display=null;
}
showtitle();
function gotolevels(){
	showlevels();
}
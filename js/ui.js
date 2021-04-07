function startsearch(){
    $(".search").attr("style","height:55px;width:90%;top:100px")
    $(".mask").fadeIn(200);
    $(".main").attr("style","z-index:5");
    $("#time").fadeOut(200);
    $(".yiyan").fadeOut(200);
	if(localStorage.getItem('searchid') == "morebutton"){setTimeout("$('#moresearch').fadeIn(200);","200");}
}
function stopsearch(){
    $(".search").attr("style","")
    $(".mask").fadeOut(200);
	setTimeout(function(){$(".main").attr("style","");}, 250);
    $("#time").fadeIn(200);
    $(".yiyan").fadeIn(200);
	$("#words").fadeOut(200);$('#moresearch').attr('style','display:none')
}

//搜索模块

function savename(){
var name=document.getElementById("nameinp").value;
localStorage.setItem('username',name);loadname()}
function loadname(){
var name=localStorage.getItem('username');
if(name.length>0){localStorage.setItem('helloname',"，"+name)}else{localStorage.setItem('helloname',"")}
$("#nameinp").attr("value",name)}
//用户名

function saveback(img) {
    const reader = new FileReader();
    reader.onload = function (ev) {
        var imgFile =ev.target.result;
        localStorage.setItem("backgroundurl", ev.target.result);
        localStorage.setItem("backgroundid", "diy");
        loadbackground()}
    reader.readAsDataURL(img.files[0]);}
function savebackimg(id,url){
    localStorage.setItem("backgroundurl", url);
    localStorage.setItem("backgroundid", id);
    loadbackground()}
function loadbackground(){
    var url=localStorage.getItem("backgroundurl")
    $("#background").attr("src",url)
    var id=localStorage.getItem("backgroundid")
    $(".backimgs").attr("class","backimg")
    $("#img" + id).attr("class","backimgs")
}
//背景模块

function openset(){$(".setting").attr("style","");$(".mask").fadeIn(200);}
function closebox(id){$(id).attr("style","top:-100%");$(".mask").fadeOut(200);}
//设置和框架盒子模块

function showtime() { 
    var today = new Date() 
    var h = today.getHours() 
    var m = today.getMinutes() 
    h=checkTime(h) 
    m=checkTime(m) 
    document.getElementById('time').innerHTML=h+":"+m 
    t=setTimeout('showtime()',1000) }  
    function checkTime(i) { if (i<10) { i="0" + i } return i }
//时间显示模块

function notice(info){$(".notice").attr("style","");
document.getElementById('notice').innerHTML=info;
setTimeout("$('.notice').attr('style','bottom:-100px')", 5000);
}
//全局通知

function yiyannotice(from){notice("来自《" + from + "》丨<a href=https://hanyu.baidu.com/s?wd=" + from + " target=_blank>查看详情</a>")}
$.get("https://v1.hitokoto.cn/?c=i&max_length=20",function(data,status){
if (status == 'success'){
    $('.yiyan').text(data.hitokoto);
    $('.yiyan').attr('onclick',"yiyannotice('" + data.from + "')")
}else{
    $('.yiyan').text('网络不可用');
	notice('诗句加载失败')
}
});
//一言诗句

function changecss(url,id){
    localStorage.setItem('cssurl',url);
    localStorage.setItem('cssid',id);
	notice('主题设置已保存')
	loadcss()
}
function loadcss(){
	var url=localStorage.getItem('cssurl')
	var id=localStorage.getItem('cssid')
    $("#styles").attr("href",url)
    $(".setcolorbtns").attr("class","setcolorbtn")
    $("#style" + id).attr("class","setcolorbtns")
}
//主题色

function loadheibian(){
	var set=localStorage.getItem('heibian')
	if(set=='off'){$(".topshadow").attr("style","display:none");
				   $(".heibianbtn").attr("onclick","heibianon()");
				   $(".heibianbtn").attr("id","setbtnoff")}
	if(set=='on'){$(".topshadow").attr("style","");
				  $(".heibianbtn").attr("onclick","heibianoff()");
				  $(".heibianbtn").attr("id","setbtnon")}
}
function heibianoff(){localStorage.setItem('heibian','off');loadheibian();notice('顶栏黑边已关闭')}
function heibianon(){localStorage.setItem('heibian','on');loadheibian();notice('顶栏黑边已开启')}
//顶栏黑边

function bluroff(){localStorage.setItem('blur','off');loadblur();notice('毛玻璃特效已关闭')}
function bluron(){localStorage.setItem('blur','on');loadblur();notice('毛玻璃已开启，如有卡顿请关闭此项')}
function loadblur(){
	var set=localStorage.getItem('blur')
	if(set=='on'){$(".mask").attr("style","backdrop-filter: blur(10px);");
				   $(".blurbtn").attr("onclick","bluroff()");
				   $(".blurbtn").attr("id","setbtnon")}
	if(set=='off'){$(".mask").attr("style","");
				   $(".blurbtn").attr("id","setbtnoff");
				   $(".blurbtn").attr("onclick","bluron()");}
}//毛玻璃

function savetitle(){
var title=document.getElementById("setinp").value;notice('顶栏标题已保存')
localStorage.setItem('title',title);loadtitle()}
function loadtitle(){
var title=localStorage.getItem('title');
$(".title").html(title);
$("#setinp").attr("value",title)}
//顶栏标题

function sbaidu(){localStorage.setItem('search','https://www.baidu.com/s?ie=utf-8&wd=');
			            	localStorage.setItem('searchid','baidubutton');loadsearch()}
function sbing(){localStorage.setItem('search','https://cn.bing.com/search?q=');
			            	localStorage.setItem('searchid','bingbutton');loadsearch()}
function sgoogle(){localStorage.setItem('search','https://www.google.com/search?q=');
			            	localStorage.setItem('searchid','googlebutton');loadsearch()}
function sbili(){localStorage.setItem('search','https://search.bilibili.com/all?keyword=');
			            	localStorage.setItem('searchid','bilibutton');loadsearch()}
function syouku(){localStorage.setItem('search','https://so.youku.com/search_video/q_');
			            	localStorage.setItem('searchid','youkubutton');loadsearch()}
function smore(){localStorage.setItem('search',localStorage.getItem('moreurl'));
			            	localStorage.setItem('searchid','morebutton');loadsearch();$('#words').attr('style','display:none');$('#moresearch').attr('style','')}
function diysearch(url,id){localStorage.setItem('moreurl',url);localStorage.setItem('moreid',id);loaddiy()}
function loaddiy(){$('.morebtns').attr('class','morebtn');$('#' + localStorage.getItem('moreid')).attr('class','morebtns')}
function loadsearch(){
var id=localStorage.getItem('searchid')
$(".searchbuttonselected").attr("class","searchbutton")
$("#" + id).attr("class","searchbuttonselected")}
$("#search").keydown(function (key) {
    if (key.which == 13) {
search()}});
function search(){
var url=localStorage.getItem('search');
var word=document.getElementById("search").value;
window.location.href=url + word
}
//搜索

function yiyanoff(){localStorage.setItem('yiyan','off');loadyiyanset()}
function yiyanon(){localStorage.setItem('yiyan','on');loadyiyanset()}
function loadyiyanset(){
	var set=localStorage.getItem('yiyan')
	if(set=='on'){$("#yiyan").attr("style","");
				   $(".yiyanbtn").attr("onclick","yiyanoff()");
				   $(".yiyanbtn").attr("id","setbtnon")}
	if(set=='off'){$("#yiyan").attr("style","display:none");
				   $(".yiyanbtn").attr("id","setbtnoff");
				   $(".yiyanbtn").attr("onclick","yiyanon()");}
}//一言开关


function tongjioff(){localStorage.setItem('tongji','off');loadtongji();notice('统计已禁用')}
function tongjion(){localStorage.setItem('tongji','on');loadtongji();notice('统计已启用，我们不会收集隐私信息，请放心使用')}
function loadtongji(){
	var set=localStorage.getItem('tongji')
	if(set=='on'){
		var _hmt = _hmt || [];
		(function() {
 		 var hm = document.createElement("script");
  		hm.src = "https://hm.baidu.com/hm.js?5072a47bfe1ceef3c063d6eba76beb9f";
  		var s = document.getElementsByTagName("script")[0]; 
 		s.parentNode.insertBefore(hm, s);
})();
				   $(".tongjibtn").attr("onclick","tongjioff()");
				   $(".tongjibtn").attr("id","setbtnon")}
	if(set=='off'){
				   $(".tongjibtn").attr("id","setbtnoff");
				   $(".tongjibtn").attr("onclick","tongjion()");}
}//访客统计


function check() {
var word=document.getElementById("search").value
var set=localStorage.getItem('lianxiang')
if (word.length>0 && set=="on"){
	var sugurl = "http://suggestion.baidu.com/su?wd=#content#&cb=window.baidu.sug";                
	var content = document.getElementById("search").value
    sugurl = sugurl.replace("#content#", content);
    window.baidu = {
    sug: function(json) {
        var json = json
		var obj = eval(json);
		if (obj.s[5] == undefined){}else{$("#words").attr("style","");
		document.getElementById('word1').innerHTML=(obj.s[1]);
		document.getElementById('word2').innerHTML=(obj.s[2]);
		document.getElementById('word3').innerHTML=(obj.s[3]);
		document.getElementById('word4').innerHTML=(obj.s[4]);
		document.getElementById('word5').innerHTML=(obj.s[5]);}
}} 
		var script = document.createElement("script");
		script.src = sugurl;document.getElementsByTagName("head")[0].appendChild(script);
}else {$("#words").fadeOut(200);}}
function searchword(id){
var word=document.getElementById(id).innerHTML
var url=localStorage.getItem('search');
window.location.href=url + word	}
//搜索联想

function lianxiangoff(){localStorage.setItem('lianxiang','off');loadlianxiang();notice("联想已关闭")}
function lianxiangon(){localStorage.setItem('lianxiang','on');loadlianxiang();notice("联想已开启")}
function loadlianxiang(){
	var set=localStorage.getItem('lianxiang')
	if(set=='off'){$(".lianxiangbtn").attr("onclick","lianxiangon()");
				   $(".lianxiangbtn").attr("id","setbtnoff")}
	if(set=='on'){$(".lianxiangbtn").attr("onclick","lianxiangoff()");
				  $(".lianxiangbtn").attr("id","setbtnon")}
}//联想开关

function hellooff(){localStorage.setItem('helloset','off');loadhello();notice('问候语关闭成功')}
function helloon(){localStorage.setItem('helloset','on');loadhello();sayhello()}
function loadhello(){
	var set=localStorage.getItem('helloset')
	if(set=='off'){$(".hellobtn").attr("onclick","helloon()");
				   $(".hellobtn").attr("id","setbtnoff")}
	if(set=='on'){$(".hellobtn").attr("onclick","hellooff()");
				  $(".hellobtn").attr("id","setbtnon")}
}//问候开关


document.onselectstart = function() {return false}; 
document.ondragstart = function() {return false}; 
document.oncontextmenu = function() {return false}; 
//防止右键选择拖拽，提高体验

function sayhello(){var set=localStorage.getItem("helloset")
if(set=="on"){
var name=localStorage.getItem("helloname")
now = new Date(),hour = now.getHours()
if(hour < 6){var word="凌晨好"}
else if (hour < 9){var word="早上好"}
else if (hour < 12){var word="上午好"}
else if (hour < 14){var word="中午好"}
else if (hour < 17){var word="下午好"}
else if (hour < 19){var word="傍晚好"}
else if (hour < 22){var word="晚上好"}
else {var word="夜里好"}
var hellotxt=word + name + "！"
notice(hellotxt)}
}//问候语

function welcome(){
$(".welcome").attr("style","top:50px;height:500px;width:300px");
$(".welcomeframe").attr("src","/welcome/1.html");
}
function finishwelcome(){
$(".welcome").attr("style","top:-200vh");
$(".welcomeframe").attr("src","");
}
//首次欢迎界面

function showsecondpage(){
$(".mask").fadeIn(500)
$(".main").fadeOut(500)
$(".top").fadeOut(500)
$(".secondpage").attr("style","")
}
function hidesecondpage(){
$(".mask").fadeOut(500)
$(".main").fadeIn(500)
$(".top").fadeIn(500)
$(".secondpage").attr("style","top:200vh")
}
//二级页面

msg = function (...args){queueMicrotask(console.log.bind(console, ...args))}

function load(){loadbackground();showtime();loadcss();loadheibian();loadtitle();loadblur();loadyiyanset();loadsearch();loadtongji();loadset();loadlianxiang();sayhello();loadname();loadhello();
			   $(".mask").fadeOut(1);loaddiy();
			   msg('%c$ḯм✝αß新标签页', 'color: white;background:#00a2e8;padding:5px;border-radius:10px;font-size: 30px;font-weight: bold;font-family:等线');
	     	   msg('%c请勿盗用本站源代码，否则将追责到底！下方为SimSoft官方网址：\n正式版:http://h.simsoft.top/\n开发版:http://simtabdev.simsoft.top/', 'color:red;padding:3px;font-size:1.5em');
}

function loadset(){
var loaded=localStorage.getItem('loaded')
if (loaded=="loaded"){}else{
	lianxiangon()//联想
	savebackimg('ran','https://api.ixiaowai.cn/gqapi/gqapi.php')//背景
	changecss('/css/blue.css','blue')//主题
	localStorage.setItem('title',"SimTab")//标题
	bluroff()//毛玻璃
	yiyanon()//一言
	tongjioff()//统计
	sbaidu()//搜索引擎
	helloon()//问候
    localStorage.setItem('username','')//用户名
	welcome();//弹出欢迎界面
	diysearch('https://zh.wikipedia.org/wiki/','wikipedia');//自定义搜索引擎
	$("#moresearch").hide()
	notice("页面正在初始化...")
	localStorage.setItem('loaded','loaded');
	setTimeout(function(){load()}, 10);
}}

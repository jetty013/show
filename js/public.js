//创建轮播图
createBanner({
    element : "banner",
    data : bannerData
});
//数组forEach方法补丁
Array.prototype.forEach = function(callback){
    var a = 0,
        len = this.length;
    while(a < len){
        callback(this[a], a++, this);
    }
};
//数组map方法补丁
Array.prototype.map = function(callback){
    var a = 0,
        len = this.length,
        result = [];
    while(a < len){
        result.push(callback(this[a], a++, this));
    }
    return result;
};
//数组map方法补丁
Array.prototype.filter = function(callback){
    var a = -1,
        len = this.length,
        result = [];
    while(++a < len){
        callback(this[a], a, this) && result.push(this[a]);
    }
    return result;
};
var header = document.getElementById("header"),
    headerClassName = header.className;
onscroll = function(){
    header.className = headerClassName + (document.documentElement.scrollTop || scrollY >= 50 ? " fixed" : " normal");
};
//车展览
function createBox(option){
    var a = document.createElement("a");
    a.style.backgroundImage = "url(" + option.bigUrl + ")";
    a.href = option.href;
    a.innerHTML = "<h2>" + option.title + "</h2>"
        + "<p>" + option.label + "</p>"
        + "<img src=\"" + option.smallUrl + "\" />";
    return a;
}
var exhibitionData = [
    {
        href : "#",
        bigUrl : "./images/exhibition.jpg",
        smallUrl : "./images/s_1.png",
        title : "豪车不止BBA",
        label : "德系三架马车，是时候退位让贤啦"
    },
    {
        href : "#",
        bigUrl : "./images/1_2.jpg",
        smallUrl : "./images/s_2.png",
        title : "百年大厂杰作",
        label : "时间在流逝,品质永流传"
    },
    {
        href : "#",
        bigUrl : "./images/1_3.jpg",
        smallUrl : "./images/s_3.png",
        title : "便宜才是王道",
        label : "谁说便宜没好车?"
    },
    {
        href : "#",
        bigUrl : "./images/1_4.jpg",
        smallUrl : "./images/s_4.png",
        title : "驾校毕业生",
        label : "那些年,我们练过的普桑和捷达"
    },
    {
        href : "#",
        bigUrl : "./images/1_5.jpg",
        smallUrl : "./images/s_5.png",
        title : "明星也抠门",
        label : "明星都买二手车了,你还等什么"
    },
    {
        href : "#",
        bigUrl : "./images/1_6.jpg",
        smallUrl : "./images/s_6.png",
        title : "全能的大玩具",
        label : "越野帮手、四驱利器"
    }
];
var fragment = document.createDocumentFragment();
exhibitionData.forEach(function(item){
    fragment.appendChild(createBox(item));
});
document.getElementById("exhibition").appendChild(fragment);
document.getElementById("top").onclick = function(){
    scrollTo(0, 0);
};
//底部导航
//(function  (){
//    var footerTop=document.createElement("div"),
//        footerMiddle=document.createElement("div"),
//        footerBottom=document.createElement("div");
//        footerTop.className="footer_top";
//        footerMiddle.className="footer_middle";
//        footerBottom.className="footer_bottom";
//    document.getElementById("rim").appendChild(footerTop);
//    document.getElementById("rim").appendChild(footerMiddle);
//    document.getElementById("rim").appendChild(footerBottom);
//})();
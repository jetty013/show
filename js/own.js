var pd_right_top = document.getElementById("pd_right_top"),
    pd_right_topClassName = pd_right_top.className;
onscroll = function(){
    //console.log(2333);
    pd_right_top.className=pd_right_topClassName + (document.documentElement.scrollTop || scrollY >= 100 ? " fixed" : " normal");
};

window.onscroll = function(){
    //console.log(2333);
    //document.getElementById("pd_right_top").className="1 " ;
    document.getElementById("pd_right_top").className="pd_right_top" + (document.documentElement.scrollTop || document.body.scrollTop >= 100 ? " fixed" : " normal");
    console.log(document.documentElement.scrollTop)
}; 0
//车的商品展览
function createBox(option){
    var  a=document.createElement('a');
    a.style.backgroundImage="url("+option.bgimg+")";
    a.href=option.href;
    a.innerHTML="<h3>"+option.title+"</h3>"
        +"<span>"+option.price+"</span>"
        +"<p>"+option.info+"</p>"
        + "<img src=\"" + option.approve + "\" />";
    return a;
}
var productsDate=[
    {
        href:"#",
        bgimg:"images/01.jpg",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2014/02  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/02.jpg",
        title:"2012款 一汽丰田RAV4 2.4L 自动 豪华版",
        price:"13.8万",
        info:"2014/02  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/03.jpg",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2012/08  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/04.jpg",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2014/02  上牌|16.00万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/05.jpg",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2014/02  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/06.jpg",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2014/02  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/07.jpg",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2014/02  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/08.jpg",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2014/02  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/09.jpg",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2014/02  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/10.jpg",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2014/02  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/11.jpg",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2014/02  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/12.jpg",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2014/02  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/13.jpg",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2014/02  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/14.png",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2014/02  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/15.png",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2014/02  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/16.png",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2014/02  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/17.jpg",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2014/02  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/18.jpg",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2014/02  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/19.jpg",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2014/02  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/20.jpg",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2014/02  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/21.jpg",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2014/02  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/22.jpg",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2014/02  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/23.jpg",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2014/02  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    },
    {
        href:"#",
        bgimg:"images/24.jpg",
        title:"大众 2014款  宝来  1.6L 自动舒适型",
        price:"8.5万",
        info:"2014/02  上牌|6.40万公里|北京",
        approve:"images/approve.png"
    }];
var fragment = document.createDocumentFragment();
productsDate.forEach(function(item){
    fragment.appendChild(createBox(item));
});
document.getElementById("products").appendChild(fragment);
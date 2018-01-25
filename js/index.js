$("#container").fullpage({
    verticalCentered: false,
    anchors: ["p1", "p2", "p3", "p4", "p5"],
    // sectionsColor: ["#ccc", "yellow", "red", "#f88", "#99f"],
    scrollingSpeed: 1000,
    navigation: true,
    navigationPosition: "left",
    // navigationTooltips: ["111", "222", "333", "444"],
    continuousVertical: true,
    fixedElements:"#menu",
    menu:"#menu",
    afterLoad:function(anchor,index){
        if(index===2){
            $(".two-left").css("transform","translateX(0)");
            $(".two-right").css("transform","translateX(0)");
        }
    },
    onLeave:function(index){
        if(index===2){
            $(".two-left").css("transform","translateX(-1000px)");
            $(".two-right").css("transform","translateX(1000px)");
        }
    }
});
// $(function(){
//     $('#dowebok').fullpage({
//         sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
//         'navigation': true,
//     });
// });
// 
// 

{
     let canvasObj=document.querySelectorAll("canvas");
    function prgress (canvasObj,max) {
    let cobj=canvasObj.getContext("2d");
     cobj.lineWidth=20;
     cobj.lineCap="round";
     cobj.font="20px 微软雅黑";
     cobj.textAlign="center";
     cobj.textBaseline="middle";
        cobj.fillStyle="#fff";
    //   requestAnimationFrame    开始一个动画效果
    //   cancelAnimationFrame      清除动画效果
    let n=0;
    // let t;
    function fn () {
        n++;
        if(n<max){
        requestAnimationFrame(fn)     //t= requestAnimationFrame(fn)  停
        }
        let angle=2*Math.PI*n/100-Math.PI/2;
        cobj.save();
        cobj.shadowColor="#fff";
        cobj.shadowBlur=10;
        cobj.beginPath();
        cobj.clearRect(0,0,500,500);
        cobj.arc(100,100,60,-Math.PI/2,angle);
        cobj.stroke();
        cobj.restore();
        cobj.fillText(n+"%",100,100);
        cobj.strokeStyle="red";

    }
    fn();
    }
    prgress(canvasObj[0],90);
    prgress(canvasObj[1],85);
    prgress(canvasObj[2],75);
}
{
     $(".next").click(function () {
        $(".scene ul").transition({rotateY:"-=60"})
    })
    $(".prev").click(function () {
        $(".scene ul").transition({rotateY:"+=60"})
    })
}

var items = document.getElementsByClassName("item");
var goNextBtn = document.getElementById("goNext");
var goPreBtn = document.getElementById("goPre");
var points = document.getElementsByClassName("point");
var lunbotu = document.getElementById("lunbotu");
var index = 0;
// 下一张
goNextBtn.addEventListener("click", function() {
        clearInterval(timer);
        goNext();
        timer = setInterval(timeFunc, 2000);
    })
    // 上一张
goPreBtn.addEventListener("click", function() {
        clearInterval(timer);
        goPre();
        timer = setInterval(timeFunc, 2000);
    })
    // 跳转至点击的那一张
    // 循环为每一个点注册事件
for (let i = 0; i < points.length; i++) {
    points[i].addEventListener("click", function() {
        var pointIndex = this.getAttribute('pointIndex');
        console.log(pointIndex);
        index = pointIndex;
        // 清除定时器
        clearInterval(timer);
        cleanCurrent();
        items[index].className = "item current";
        points[index].className = "point active";
        // 重启定时器
        timer = setInterval(timeFunc, 2000)
    })
}

// 自动循环播放
var timer = setInterval(timeFunc, 2000)


// 函数封装
// 清除current类
function cleanCurrent() {
    for (var i = 0; i < items.length; i++) {
        items[i].className = "item";
        points[i].className = "point";
    }
}
// 下一张
function goNext() {
    cleanCurrent();
    if (index < 4) {
        index++;
    } else {
        index = 0;
    }
    items[index].className = "item current";
    points[index].className = "point active";
}
// 下一张
function goPre() {
    cleanCurrent();
    if (index == 0) {
        index = 4;
    } else {
        index--;
    }
    items[index].className = "item current";
    points[index].className = "point active";
}
// 定时器函数
function timeFunc() {
    if (index < 4) {
        index++;
    } else {
        index = 0;
    }
    cleanCurrent();
    items[index].className = "item current";
    points[index].className = "point active";
}
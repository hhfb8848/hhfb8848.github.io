// 导航栏
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 40) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}
// 滑动效果
// 倒计时模块
// 获取进度条的元素
var progressHour = document.querySelector(".progress-bar1 .progress-done");
var progressWeek = document.querySelector(".progress-bar2 .progress-done");
var progressMonth = document.querySelector(".progress-bar3 .progress-done");
var progressYear = document.querySelector(".progress-bar4 .progress-done");
var progressGraduation = document.querySelector(".progress-bar5 .progress-done");
// 获取一天过去的小时数、一周过去的天数、一月过去的天数、一年过去的月数
var differ_hour = document.querySelector(".differ-hour");
var differ_week = document.querySelector(".differ-week");
var differ_month = document.querySelector(".differ-month");
var differ_year = document.querySelector(".differ-year");
var differ_graduation = document.querySelector(".differ-graduation");
// 对时间格式进行处理
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //月份 
        "d+": this.getDate(),                    //日 
        "h+": this.getHours(),                   //小时 
        "m+": this.getMinutes(),                 //分 
        "s+": this.getSeconds(),                 //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds()             //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}
// 获取当前时间
function currentTime() {
    //获取定义时间的元素currentTime
    let timeEle = document.getElementById("currentTime");
    var time = new Date();
    let format_time = time.format("yyyy-MM-dd hh:mm:ss")
    timeEle.innerHTML = format_time;
    return time;
}
//获取当前月份的总天数
function getDaysOfMonth() {
    var date = currentTime();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var d = new Date(year, month, 0);
    return d.getDate();
}

// 实时获取时间
setInterval(currentTime, 1000);

// 2、获取一天、一周、一月、一年的倒计时
var finally_time = new Date(currentTime().format("yyyy-MM-dd") + ' 00:00');
// 5、获取毕业的倒计时
var graduation_time = new Date('2024-07-01 00:00');
function getDayCountdown() {
    // 一天倒计时
    let differ_time = currentTime() - finally_time;
    let hour = Math.floor(differ_time / 1000 / 60 / 60 % 24);
    differ_hour.innerHTML = hour;
    let differ_hour_present = Math.ceil(hour / 24 * 100);
    changeWidth1(differ_hour_present);
    //一周倒计时
    let week = currentTime().getDay();
    differ_week.innerHTML = week;
    let differ_week_present = Math.ceil(week / 7 * 100);
    changeWidth2(differ_week_present);
    //一月倒计时
    let month = currentTime().getDate();
    differ_month.innerHTML = month;
    let differ_month_present = Math.ceil(month / getDaysOfMonth() * 100);
    changeWidth3(differ_month_present);
    //一年倒计时
    let year = currentTime().getMonth()+1;
    differ_year.innerHTML = year;
    let differ_year_present = Math.ceil(year / 12 * 100);
    changeWidth4(differ_year_present);
    //毕业倒计时
    let nowTime = currentTime();
    let differ_graduationTime = graduation_time-nowTime;
    let differ_graduationDays = Math.floor(differ_graduationTime/1000/60/60/24);
    differ_graduation.innerHTML = differ_graduationDays;
    let differ_graduationDays_present = Math.ceil(((1399 - differ_graduationDays)/1399*100));
    changeWidth5(differ_graduationDays_present);
}
getDayCountdown();
setInterval(getDayCountdown, 10000);

// 5结束
// 改变进度条1宽度
function changeWidth1(width) {
    progressHour.style.width = width + '%';
    progressHour.innerHTML = width + '%';
}
// 改变进度条2宽度
function changeWidth2(width) {
    progressWeek.style.width = width + '%';
    progressWeek.innerHTML = width + '%';
}
// 改变进度条3宽度
function changeWidth3(width) {
    progressMonth.style.width = width + '%';
    progressMonth.innerHTML = width + '%';
}
// 改变进度条4宽度
function changeWidth4(width) {
    progressYear.style.width = width + '%';
    progressYear.innerHTML = width + '%';
}
// 改变进度条5宽度
function changeWidth5(width) {
    progressGraduation.style.width = width + '%';
    progressGraduation.innerHTML = width + '%';
}
// 倒计时模块结束
var removeVideo = document.querySelector(".video-container");
if(screen.width<991){
    removeVideo.parentNode.removeChild(removeVideo)
}
//在页面未加载完毕之前显示的loading效果
var loading = document.querySelector(".loading-position")
//监听加载状态改变
document.onreadystatechange = completeLoading;
//加载状态为complete时移除loading效果
function completeLoading() {
    if (document.readyState == "complete") {
        loading.parentNode.removeChild(loading);
    }
}

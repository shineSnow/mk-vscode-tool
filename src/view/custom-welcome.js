// const vscode = acquireVsCodeApi();
const callbacks = {};

/**
 * 调用vscode原生api
 * @param data 可以是类似 {cmd: 'xxx', param1: 'xxx'}，也可以直接是 cmd 字符串
 * @param cb 可选的回调函数
 */
function callVscode(data, cb) {
    if (typeof data === 'string') {
        data = { cmd: data };
    }
    if (cb) {
        // 时间戳加上5位随机数
        const cbid = Date.now() + '' + Math.round(Math.random() * 100000);
        callbacks[cbid] = cb;
        data.cbid = cbid;
    }
    // vscode.postMessage(data);
}

window.addEventListener('message', event => {
    const message = event.data;
    switch (message.cmd) {
        case 'vscodeCallback':
            console.log(message.data);
            (callbacks[message.cbid] || function () { })(message.data);
            delete callbacks[message.cbid];
            break;
        default: break;
    }
});

new Vue({
    el: '#app',
    data: {
        userName: '',
        time: '',
        show: true,
        dutyArr: ["余杰", "陈聪", "张晓旭", "徐文华", "薛纪宏", "林紫薇", "王瑞平", "佟刚", "夏创易", "雷涛", "张圆圆", "赵博文", "姚俊", "林海岳"],
        choosedList: []
    },
    mounted() {
        this.time = this.getTime();
        callVscode({ cmd: 'getConfig', key: 'vscodePluginDemo.yourName' }, userName => this.userName = userName);
        callVscode({ cmd: 'getConfig', key: 'vscodePluginDemo.showTip' }, show => this.show = show);
        this.todyIsWho()
    },
    watch: {
        show(nv, ov) {
            callVscode({ cmd: 'setConfig', key: 'vscodePluginDemo.showTip', value: nv }, null);
        }
    },
    methods: {
        todyIsWho() {
            let startDay = this.getTargetTime("2020-08-18 00:00:00");
            let dayTotalSeconds = 24 * 60 * 60 * 1000;
            let now = new Date();
            let lastTherrDay = now.getTime() - dayTotalSeconds * 4;
            let passDay = this.diffTime(now, '2020-8-18 00:00:00');
            let totalDays = passDay.days;
            let dutyArrLen = this.dutyArr.length;
            let choosedIndex = totalDays % dutyArrLen;
            let featureTenDay = [];
            console.log(choosedIndex);
            // console.log(this.dutyArr[choosedIndex]);

            // console.log(111, this.timeStampToDate(startDay));
            for (let i = 0; i < dutyArrLen; i++) {
                let time = now.getTime() + (dayTotalSeconds * i);
                let goodDay = this.timeStampToDate(time);
                let choosedMan = this.dutyArr[(choosedIndex + i) % dutyArrLen];
                goodDay['choosedMan'] = choosedMan;
                featureTenDay.push(goodDay)
                // console.log(featureTenDay);
            }
            this.choosedList = featureTenDay;
        },
        // t = "2014-08-08 08:08:08" 日期转为时间戳
        getTargetTime(t) {
            let d = t.split(" ")[0],
                h = t.split(" ")[1],
                date = new Date()

            date.setYear(d.split("-")[0])
            date.setMonth(d.split("-")[1] - 1)
            date.setDate(d.split("-")[2])

            date.setHours(h.split(":")[0])
            date.setMinutes(h.split(":")[1])
            date.setSeconds(h.split(":")[2])

            return date.getTime()
        },
        // 时间戳转为日期
        timeStampToDate(timeStamp) {
            let time = new Date(timeStamp);
            let year = time.getFullYear();
            let month = time.getMonth() + 1;
            let day = time.getDate();
            month = month < 10 ? ('0' + month) : month;
            day = day < 10 ? ('0' + day) : day;
            let week = "日一二三四五六".charAt(time.getDay());
            let obj = { year, month, day, week };
            // console.log(obj);
            return obj;
        },
        // console.log(diffTime(new Date(), '2019-8-19 16:00:00','Minutes'))
        diffTime(startDate, endDate, location) {
            let diff = new Date(endDate).getTime() - startDate;//时间差的毫秒数
            diff = Math.abs(diff)
            //计算出相差天数
            let days = Math.floor(diff / (24 * 3600 * 1000));

            //计算出小时数
            let leave1 = diff % (24 * 3600 * 1000);    //计算天数后剩余的毫秒数
            let hours = Math.floor(leave1 / (3600 * 1000));

            //计算相差分钟数
            let leave2 = leave1 % (3600 * 1000);        //计算小时数后剩余的毫秒数
            let minutes = Math.floor(leave2 / (60 * 1000));

            //计算相差秒数
            let leave3 = leave2 % (60 * 1000);      //计算分钟数后剩余的毫秒数
            let seconds = Math.round(leave3 / 1000);
            let returnStr = "";
            if (location === "Day") {
                return returnStr = "还有" + days + "天";
            } else if (location === "Hours") {
                return returnStr = "还有" + (hours + days * 24) + "小时";
            } else if (location === "Minutes") {
                return returnStr = "还有" + (minutes + (hours + days * 24) * 60) + "分钟";
            } else if (location === "Seconds") {
                return returnStr = "还有" + (seconds + (minutes + (hours + days * 24) * 60) * 60) + "秒";
            } else {
                // return returnStr = "还有" + days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒";
                return { days, hours, minutes, seconds };
            }
        },
        toggleShowTip() {
            this.show = !this.show;

        },
        getTime() {
            const hour = new Date().getHours();
            if (hour <= 8) return '早上';
            else if (hour < 12) return '上午';
            else if (hour < 14) return '中午';
            else if (hour < 18) return '下午';
            return '晚上';
        }
    }
});
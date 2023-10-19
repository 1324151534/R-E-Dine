document.getElementById("modeswitch").addEventListener('click', () => {
    console.log(document.getElementById("modeswitch").className);
    if(document.getElementById("modeswitch").className == 'btn darkmode-btn') {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './css/dark-mode.css';
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(link);
        document.getElementById("modeswitch").className = 'btn lightmode-btn';
    }
    else if(document.getElementById("modeswitch").className == 'btn lightmode-btn') {
        var filename = './css/dark-mode.css';
        var targetelement = "link";
        var targetattr = "href";
        var allsuspects = document.getElementsByTagName(targetelement);
        for (var i = allsuspects.length; i>=0 ; i--){
            if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1) {
                allsuspects[i].parentNode.removeChild(allsuspects[i])
            }
        }
        document.getElementById("modeswitch").className = 'btn darkmode-btn';
    }
})
/*
const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)"); // 是深色
if (isDarkTheme.matches) { // 是深色
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = './css/dark-mode.css';
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
    document.getElementById("modeswitch").className = 'btn lightmode-btn';
} else { // 不是深色
    var filename = './css/dark-mode.css';
    var targetelement = "link";
    var targetattr = "href";
    var allsuspects = document.getElementsByTagName(targetelement);
    for (var i = allsuspects.length; i>=0 ; i--){
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1) {
            allsuspects[i].parentNode.removeChild(allsuspects[i])
        }
    }
    document.getElementById("modeswitch").className = 'btn darkmode-btn';
}
*/
let h, m, s;
h = document.getElementsByClassName("h")[0];
m = document.getElementsByClassName("m")[0];
s = document.getElementsByClassName("s")[0];
setInterval(() => {
    let dia = new Date();
    let [hora, minu, secu] = [
        dia.getHours(),
        dia.getMinutes(),
        dia.getSeconds(),
    ];
    h.style.transform = `translateY(-75px)  rotateZ(${hora * 30}deg)`;
    m.style.transform = `translateY(-105px) rotateZ(${minu * 6}deg)`;
    s.style.transform = `translateY(-125px) rotateZ(${secu * 6}deg)`;
}, 500);

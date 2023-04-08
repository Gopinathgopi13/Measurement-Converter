function cmTom(){
    let cmVal;
    cmVal = Number(document.getElementById("input").value);
    let mVal = cmVal / 100
    let result = document.getElementById("result")
    result.innerHTML = mVal + "m"
}
function mTocm(){
    let cmVal;
    cmVal = Number(document.getElementById("input").value);
    let mVal = cmVal * 100;
    let result = document.getElementById("result")
    result.innerHTML = mVal + "cm"
}
function mmTocm(){
    let cmVal;
    cmVal = Number(document.getElementById("input").value);
    let mVal = cmVal / 10;
    let result = document.getElementById("result")
    result.innerHTML = mVal + "cm"
}
function cmTomm(){
    let cmVal;
    cmVal = Number(document.getElementById("input").value);
    let mVal = cmVal * 10;
    let result = document.getElementById("result")
    result.innerHTML = mVal + "mm"
}
function kmTom(){
    let cmVal;
    kmVal = Number(document.getElementById("input").value);
    let mVal = kmVal * 1000;
    let result = document.getElementById("result")
    result.innerHTML = mVal + "m"
}
function mTokm(){
    let cmVal;
    kmVal = Number(document.getElementById("input").value);
    let mVal = kmVal / 1000;
    let result = document.getElementById("result")
    result.innerHTML = mVal + "m"
}
function cTof(){
    let cmVal;
    cVal = Number(document.getElementById("input").value);
    let mVal = (cVal * 9/5) + 32;
    let result = document.getElementById("result")
    result.innerHTML = mVal + "f"
}
var tween = TweenMax.to($box, 1, {
x: '-=50', // Tween to the current x value minus 50
y: '+=50', // Tween to the current y value plus 50
onComplete: myFunction,
ease:Back.easeOut
});
tl.add(tween, 2); // Add tween 2 seconds into the timeline



function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function myFunction (){

    var hour = new Date().getHours();
    var time;

    if (hour < 9) {
        time ="Good morning";
    }

    else if (hour == 9) {
        time = "Breakfast time";
    }

    else if (hour == 13){
        time = "Lunch time";
    }
    
    else if (hour == 18) {
        time = "Dinner time";
    }

    else if (hour == 23){
        time = "Time to sleep";
    }

    else {
        time = "Have a nice day";

    }
    document.getElementById("demo").innerHTML = time;
    }
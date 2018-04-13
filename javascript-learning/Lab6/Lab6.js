// var anh1 = new Image(), anh2 = new Image();
// function imgload() {
//     anh1.src = "a.jpg";
//     anh2.src = "b.jpg";
// }

function onMouseOverEvent() {
    document.picsbox.src = anh1.src;
}
function onMouseOutEvent() {
    document.picsbox.src = anh2.src;
}

var imgArr = [];
var currentIndex = 1;

function imgload() {
    for (var i = 1; i < 7; i++) {
        imgArr[i] = new Image();
        imgArr[i].src = "nat-" + i + ".jpg"
    }
    var a= document.getElementById("picsbox").src;
   
}

function next() {
    if (currentIndex < 7) {
        currentIndex++;
        if (currentIndex >= 7) {
            currentIndex = 1;
        }
        console.log(currentIndex);
        document.getElementById("picsbox").src = imgArr[currentIndex].src;
    }
    
}


function back() {
    if (currentIndex > 0) {
        currentIndex--;
        if (currentIndex <= 0) {
            currentIndex = 6;
        }
        document.getElementById("picsbox").src = imgArr[currentIndex].src;
    }
  
}

//toi uu slide
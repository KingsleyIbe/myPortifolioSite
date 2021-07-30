window.onscroll = function() { scrollFunction() };
let header = document.getElementById('myHeader');
let sticky = header.offsetTop;

function scrollFunction() {

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");

    } else {
        header.classList.remove("sticky");

    }

}

function cssFunction() {

    let cssDisplay = document.getElementById('cssDiv');
    if (cssDisplay.style.display === "block") {
        cssDisplay.style.display = "none";
    } else {
        cssDisplay.style.display = "block";
    }
}

function htmlFunction() {
    let htmlDisplay = document.getElementById('htmlDiv');
    if (htmlDisplay.style.display === "block") {
        htmlDisplay.style.display = "none";
    } else {
        htmlDisplay.style.display = "block";
    }
}

function javascriptFunction() {
    let javascriptDisplay = document.getElementById('javascriptDiv');
    if (javascriptDisplay.style.display === "block") {
        javascriptDisplay.style.display = "none";
    } else {
        javascriptDisplay.style.display = "block";
    }
}

function nodeFunction() {
    let nodeDisplay = document.getElementById('nodeDiv');
    if (nodeDisplay.style.display === "block") {
        nodeDisplay.style.display = "none";
    } else {
        nodeDisplay.style.display = "block";
    }
}

function reactFunction() {
    let reactDisplay = document.getElementById('reactDiv');
    if (reactDisplay.style.display === "block") {
        reactDisplay.style.display = "none";
    } else {
        reactDisplay.style.display = "block";
    }

}

function wordpressFunction() {
    let wordpressDisplay = document.getElementById('wordpressDiv');
    if (wordpressDisplay.style.display === "block") {
        wordpressDisplay.style.display = "none";
    } else {
        wordpressDisplay.style.display = "block";
    }
}

function jQueryFunction() {
    let jQueryDisplay = document.getElementById('jQueryDiv');
    if (jQueryDisplay.style.display === "block") {
        jQueryDisplay.style.display = "none";
    } else {
        jQueryDisplay.style.display = "block";
    }
}

function bootstrapFunction() {
    let bootstrapDisplay = document.getElementById('bootstrapDiv');
    if (bootstrapDisplay.style.display === "block") {
        bootstrapDisplay.style.display = "none";
    } else {
        bootstrapDisplay.style.display = "block";
    }
}
// var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = $('.myImg');
// var modalImg = $("#img01");
// var captionText = document.getElementById("caption");
// $('.myImg').click(function() {
//     modal.style.display = "block";
//     var newSrc = this.src;
//     modalImg.attr('src', newSrc);
//     captionText.innerHTML = this.alt;
// });

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }
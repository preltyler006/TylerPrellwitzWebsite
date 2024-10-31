window.onscroll = function() { updateScrollIndicator() };

function updateScrollIndicator() {
    const scrollProgress = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    document.getElementById("scrollIndicator").style.width = scrollProgress * 100 + "%";
}

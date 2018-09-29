function fadeOut(el, duration) {
    var s = el.style, step = 25/(duration || 300);
    s.opacity = s.opacity || 1;
    (function fade() { (s.opacity -= step) < 0 ? s.display = "none" : setTimeout(fade, 25); })();
}

window.onload = () => {
    fadeOut(document.getElementsByClassName('page-loader')[0], 1000);
};

$(document).on("click", "a.page-scroll", function(e){
    e.preventDefault();
    e.stopPropagation();
    $('#partialLoad').hide().fadeIn('slow');    
    $('#partialLoad').load(`${this.href}`);
    $('html,body').animate({scrollTop: $('#partialLoad').offset().top - 30});
});

$(document).on("click", "#close", function(){
    var partialLoad = document.getElementById('partialLoad');
    var partial = document.getElementById('partial');
    partialLoad.removeChild(partial);
});
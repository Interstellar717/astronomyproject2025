qs("#sun-img-link").addEventListener("click", e => {
    redirect("sun/");
});

qs("#earth-img-link").addEventListener("click", e => {
    redirect("earth/");
});

qs("#moon-img-link").addEventListener("click", e => {
    redirect("moon/");
});

qs("#video-img-link").addEventListener("click", e => {
    qs("#video-display").style.display = "block";
    setTimeout(() => {
        qs("#video-display").style.opacity = 1;
    }, 100);
});

qs("#close-video-display").addEventListener("click", e => {
    qs("#video-display").style.opacity = 0;
    setTimeout(() => {
        qs("#video-display").style.display = "none";
    }, 500)
})

qs("#quiz-img-link").addEventListener("click", e => {
    window.open("https://play.blooket.com/solo?id=68ef9a63bc9c9ea1032fca71");
});
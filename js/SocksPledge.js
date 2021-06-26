var basicTimeline = anime.timeline({
  autoplay: false
});

var pathEls = $(".check");
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute("stroke-dashoffset", offset);
}

basicTimeline
  .add({
    targets: ".text-sp",
    duration: 1,
    opacity: "0"
  })
  .add({
    targets: ".button-special",
    duration: 1300,
    height: 10,
    width: 300,
    backgroundColor: "#EBFAF9",
    border: "0",
    borderRadius: 100
  })
  .add({
    targets: ".progress-bar-sp",
    duration: 1000,
    width: 300,
    easing: "linear"
  })
  .add({
    targets: ".button-special",
    width: 0,
    duration: 1
  })
  .add({
    targets: ".progress-bar-sp",
    width: 80,
    height: 80,
    delay: 200,
    duration: 500,
    borderRadius: 80,
    backgroundColor: "#6ADCD5"
  })
  .add({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: 200,
    easing: "easeInOutSine"
  });

$(".button-special").click(function() {
  basicTimeline.play();
});

$(".text-sp").click(function() {
  basicTimeline.play();
});


// log textarea scroll-lock
(function () {
  var log = $("log");
  if (!log) return;

  var scrollMode = false;
  var lastOkKeyTime = 0;

  function nowMs() {
    return new Date().getTime();
  }

  function setScrollMode(on) {
    on = !!on;
    if (on === scrollMode) return;
    scrollMode = on;

    var cls = log.className || "";
    var has = /(^|\s)scrollmode(\s|$)/.test(cls);

    if (scrollMode && !has) {
      log.className = cls ? cls + " scrollmode" : "scrollmode";
    } else if (!scrollMode && has) {
      log.className = cls.replace(/(^|\s)scrollmode(\s|$)/, " ");
    }

    if (window.SpatialNavigation) {
      if (scrollMode && SpatialNavigation.pause) {
            console.log("pause nav from scrollmode");
        SpatialNavigation.pause();
      } else if (!scrollMode && SpatialNavigation.resume) {
            console.log("resume nav from scrollmode");
        SpatialNavigation.resume();
      }
    }
  }

  log.addEventListener("blur", function () {
    if (scrollMode) {
      setScrollMode(false);
    }
  }, false);

  log.addEventListener("keydown", function (e) {
    var code = e.keyCode || e.which;

    // OK / Enter toggles scroll mode
    if (code === 13) {
    console.log("Toggle scroll mode");
      lastOkKeyTime = nowMs();
      setScrollMode(!scrollMode);
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // BACK exits scroll mode only
    if (scrollMode && code === 461) {
    console.log("disable scroll mode");
      setScrollMode(false);
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Left / Right exit scroll mode
    if (scrollMode && (code === 37 || code === 39)) {
    console.log("disable scroll mode");
      setScrollMode(false);
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Up / Down scroll in scroll mode
    if (scrollMode && (code === 38 || code === 40)) {
      log.scrollTop += (code === 40 ? 80 : -80);
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, false);

  log.addEventListener("click", function () {
    // ignore synthetic click from OK
    if (nowMs() - lastOkKeyTime < 150) return;
    console.log("toggle from click scroll mode");
    setScrollMode(!scrollMode);
  }, false);
})();


// SpatialNavigation sections
function initSpatialNav() {
  console.log("init spartial nav...");
  SpatialNavigation.init();
  console.log("add spartial nav...");
  SpatialNavigation.add("main",{ selector: "button, .item" });
  console.log("setDefaultSection spartial nav...");
  SpatialNavigation.setDefaultSection("main");
  console.log("makeFocusable spartial nav...");
  SpatialNavigation.makeFocusable();
  console.log("focus spartial nav...");
  SpatialNavigation.focus("button");
  console.log("Loaded spartial nav");
}

window.addEventListener("load", function () {
    initSpatialNav();

    document.addEventListener("mouseover", function (e) {
        var t = e.target;
        console.log(e);
        if (!t) return;
        if (t.classList.contains("item")) {
            t.focus();
        }
    }, false);
});

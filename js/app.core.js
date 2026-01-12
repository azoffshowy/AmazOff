// app.core.js - state, UI, fake backend (ES5-only)
var APP_ID = 'com.amazoff.patcher';
var PATCHCTL = '/media/developer/apps/usr/palm/applications/' + APP_ID + '/tools/patchctl.sh';
var SERVICE_RUNNING = "running";
var SERVICE_STOPPED = "stopped";
var SERVICE_ERROR = "error";
var SERVICE_UNKOWN = "unknown";


var state = {
  service: "running",   // "running" | "stopped" | "error" | "unknown"
  autostart: true,
  valid: true,
  details: false
};

function $(id) {
  return document.getElementById(id);
}


function hbExecCb(command, completedCb, timeoutMs) {
  console.log("Running HBExec with: " + command);

  if (!window.webOS || !webOS.service || typeof webOS.service.request !== "function") {
    var e0 = { returnValue: false, errorText: "webOS.service.request not available"};
    completedCb(e0);
    return null;
  }

  var requestFinalized = false;
  var timer = null;
  var req = null;
  // client-side timeout: cancel request and report as failure
  if (typeof timeoutMs === "number" && timeoutMs > 0) {
    timer = setTimeout(function () {
      if (requestFinalized) return;
      requestFinalized = true;
      if (req && typeof req.cancel === "function") req.cancel();
      var eTO = { returnValue: false, errorText: "Timeout"};
      completedCb(eTO);
    }, timeoutMs);
  }

  req = webOS.service.request("luna://org.webosbrew.hbchannel.service", {
    method: "exec",
    parameters: { command: command },

    onComplete: function (resp) {
      console.log('system on completed', resp);
      if (requestFinalized) return;
        requestFinalized = true;
      if (timer) { try { clearTimeout(timer); } catch (e1) {} timer = null; }
      completedCb(resp);
    }
  });

  return req;
}

function setLoading(on, text) {
  var layer = $("loading");
  if (on) {
    var t = $("loadText");
    if (t) {
      t.innerHTML = text || "Working…";
    }
    layer.style.display = "block";
  } else {
    layer.style.display = "none";
  }
}

function render() {
  var pill = $("pill");
  pill.className = "pill " + state.service;
  pill.innerHTML =
    state.service === SERVICE_RUNNING ? "RUNNING" :
    state.service === SERVICE_STOPPED ? "STOPPED" :
    state.service === SERVICE_UNKOWN ? "UNKNOWN" : "ERROR";

  var autoBtn = $("autoBtn");
  autoBtn.className = state.valid ? (state.autostart ? "switch on" : "switch") : "switch mixed";
  autoBtn.setAttribute("aria-pressed", state.valid ? (state.autostart ? "true" : "false") : "mixed");
  if(state.valid)
  {
    autoBtn.removeAttribute("disabled");
  }
  else
  {
    autoBtn.setAttribute("disabled","true");
  }

  var svcBtn = $("svcBtn");
  if (state.service === "running") {
    svcBtn.innerHTML = "Stop Service";
  } else {
    svcBtn.innerHTML = "Start Service";
  }

  var details = $("details");
  details.style.display = state.details ? "block" : "none";
}

function triggerScriptCommand(command, loadingMessage, timeout)
{
  if(loadingMessage)
  {
    setLoading(true, loadingMessage);
  }
  if(!timeout)
  {
    timeout = 5000;
  }

  function onResponse(response){
    //state: unknown or object
      //autostart: boolean
      //service: enum [running, stopped, error]
      //logs: string (base64)
    console.log("on response:",response);
    if(!response || !response.returnValue || !response.stdoutString)
    {
      //Unkown state
      state.valid = false;
      state.service = SERVICE_ERROR;
      if(response.errorText)
        $("log").innerHTML = response.errorText;
    }else{
      responseState = JSON.parse(response.stdoutString);
      state.valid = true;
      state.service = responseState.state.service;
      state.autostart = responseState.state.autostart;
      $("log").innerHTML = atob(responseState.state.logs);
    }
    setLoading(false);
    render();    
  }

  hbExecCb(PATCHCTL+" "+command,onResponse,timeout);
}

// fake async backend operations (replace with real webOS service calls)
function boot() {
  triggerScriptCommand("status", "Starting...", 10000);
}

function toggleService() {
  if(state.service === "running")
  {
    triggerScriptCommand("stop", "Stopping service...");
  }else{
    triggerScriptCommand("start", "Starting service...");
  }
}

function toggleAutostart() {
  triggerScriptCommand("autostart_toggle", "Toggling Autostart...");
}

function launch() {
  webOS.service.request('luna://com.webos.applicationManager', {
    method: 'launch',
    parameters: {"id": "amazon"}
  });
  webOS.service.request('luna://com.webos.applicationManager', {
    method: 'launch',
    parameters: {"id": "lovefilm"}
  });
}

function toggleDetails(force) {
  if (typeof force === "boolean") {
    state.details = force;
  } else {
    state.details = !state.details;
  }

  render();

  if (state.details) {
    var log = $("log");
    if (log) {
      log.focus();
    }
  } else {
    var btn = $("detailsBtn");
    if (btn) {
      btn.focus();
    }
  }
}

function showHelp() {
  var layer = $("helpLayer");
  if (!layer) return;

  layer.style.display = "block";

  var closeBtn = $("closeBtn");
  if (closeBtn) {
    closeBtn.focus();
  }

  if (window.SpatialNavigation) {
    console.log("pause nav from help");
    SpatialNavigation.pause();
  }
}

function hideHelp() {
  var layer = $("helpLayer");
  if (!layer) return;

  layer.style.display = "none";

  var helpBtn = $("helpBtn");
  if (helpBtn) {
    helpBtn.focus();
  }

  if (window.SpatialNavigation) {
            console.log("resume nav from help");
    SpatialNavigation.resume();
  }
}

function bindUi() {
  var el;

  el = $("svcBtn");
  if (el) el.onclick = toggleService;

  el = $("launchBtn");
  if (el) el.onclick = launch;

  el = $("detailsBtn");
  if (el) el.onclick = function () { toggleDetails(); };

  el = $("autoBtn");
  if (el) el.onclick = toggleAutostart;

  el = $("helpBtn");
  if (el) el.onclick = showHelp;

  el = $("closeBtn");
  if (el) el.onclick = hideHelp;
}

// expose for app.nav.js
window.state = state;
window.showHelp = showHelp;
window.hideHelp = hideHelp;
window.toggleDetails = toggleDetails;

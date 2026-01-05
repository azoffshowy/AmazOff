(function () {
  'use strict';

  // ---- Config (keep these aligned with your IPK) ----
  var APP_ID = 'com.amazoff.patcher';
  var PATCHCTL = '/media/developer/apps/usr/palm/applications/' + APP_ID + '/tools/patchctl.sh';
  var LOG_PATH = '/tmp/patcher/patcher.log';

  // ---- DOM ----
  var el = {
    toast: document.getElementById('toast'),
    spinner: document.getElementById('spinner'),
    log: document.getElementById('log'),
    //btnRun: document.getElementById('btnRun'),
    btnStart: document.getElementById('btnStart'),
    btnStop: document.getElementById('btnStop'),
    btnStatus: document.getElementById('btnStatus'),
    //btnPatch: document.getElementById('btnPatch'),
    //btnUnpatch: document.getElementById('btnUnpatch'),
    btnClear: document.getElementById('btnClear'),
    btnDebug: document.getElementById('btnDebug')
  };

  function setBusy(busy) {
    document.body.setAttribute('data-busy', busy ? '1' : '0');
    if (el.spinner) el.spinner.style.display = busy ? 'flex' : 'none';
    var buttons = [el.btnStart, el.btnStop, el.btnStatus, el.btnClear, el.btnDebug];
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i]) buttons[i].disabled = !!busy;
    }
  }

  var toastTimer = null;
  function showToast(text, kind, ms) {
    return;
    if (!el.toast) return;
    if (toastTimer) { clearTimeout(toastTimer); toastTimer = null; }
    el.toast.textContent = text || '';
    el.toast.setAttribute('data-kind', kind || 'neutral');
    el.toast.style.display = text ? 'block' : 'none';
    if (text) {
      toastTimer = setTimeout(function () {
        el.toast.style.display = 'none';
      }, typeof ms === 'number' ? ms : 1800);
    }
  }

  function setLogText(s) {
    if (!el.log) return;
    el.log.textContent = s || '';
  }

  // ---- Exec helper (HBChannel) ----
  function hbExecCb(command, onOk, onErr) {
    console.log("Running HBExec with: "+command);
    if (!window.webOS || !webOS.service || !webOS.service.request) {
      if (onErr) onErr({ errorText: 'webOS.service.request not available' });
      return;
    }
    webOS.service.request('luna://org.webosbrew.hbchannel.service', {
      method: 'exec',
      parameters: { command: command },
      onSuccess: onOk,
      onFailure: onErr
    });
  }

  function hbExec(command, timeoutMs) {
    if (!window.ls2Call) return Promise.reject(new Error('ls2Call not available'));
    return window.ls2Call(
      'luna://org.webosbrew.hbchannel.service',
      'exec',
      { command: command },
      { timeoutMs: typeof timeoutMs === 'number' ? timeoutMs : 10000 }
    );
  }

  function readLog() {
    var cmd = "/bin/sh -c 'test -f \"" + LOG_PATH + "\" && tail -n 400 \"" + LOG_PATH + "\" || true'";
    hbExecCb(cmd,function (res) {
      var out = '';
      var err = '';
      if (res && typeof res === 'object') {
        out = res.stdoutString || '';
        err = res.stderrString || '';
      }
      var merged = (String(out || '') + (err ? '\n' + String(err) : '')).replace(/\s+$/g, '');
      if (merged) setLogText(merged);
      console.log("call returned: ",res);
      setBusy(false);
    },function (e) {
      console.log("call failed: ",e);
      //setLogText(String(e && e.message ? e.message : e));
      console.log("Call failed. Please try again.")
      setBusy(false);
    })
  }

  function action(kind) {
    setBusy(true);
    showToast(String(kind || '').toUpperCase(), 'neutral', 900);
    console.log("Running action with: "+kind);

    hbExecCb(PATCHCTL + ' ' + kind,function () {
      console.log("Returned hbexec kind");
      readLog();
      showToast('Done', 'ok', 1400);
    },function (e) {
      // Try to refresh log even on failure
      console.log("Returned hbexec kind failed");
      console.log(e);
      //readLog();
      showToast('Failed', 'err', 2200);
      //var current = el.log ? (el.log.textContent || '') : '';
      setLogText("Call failed, try again");
      setBusy(false);
    });
  }

  function clearLog() {
    setLogText('');
    showToast('Cleared', 'neutral', 900);
  }

  // ---- Wiring ----
  //if (el.btnRun) el.btnRun.addEventListener('click', function () { action('runonce'); });
  if (el.btnStart) el.btnStart.addEventListener('click', function () { action('start'); });
  if (el.btnStop) el.btnStop.addEventListener('click', function () { action('stop'); });
  //if (el.btnPatch) el.btnPatch.addEventListener('click', function () { action('patch'); });
  if (el.btnStatus) el.btnStatus.addEventListener('click', function () { action('status'); });
  //if (el.btnUnpatch) el.btnUnpatch.addEventListener('click', function () { action('unpatch'); });
  if (el.btnDebug) el.btnDebug.addEventListener('click', function () { action('debug'); });
  if (el.btnClear) el.btnClear.addEventListener('click', clearLog);

  // ---- Remote navigation ----
  (function setupRemoteNav() {
    var buttons = [];
    //if (el.btnRun) buttons.push(el.btnRun);
    if (el.btnStart) buttons.push(el.btnStart);
    if (el.btnStop) buttons.push(el.btnStop);
    //if (el.btnPatch) buttons.push(el.btnPatch);
    //if (el.btnUnpatch) buttons.push(el.btnUnpatch);
    if (el.btnStatus) buttons.push(el.btnStatus);
    if (el.btnClear) buttons.push(el.btnClear);
    if (el.btnDebug) buttons.push(el.btnDebug);

    if (!buttons.length) return;

    var idx = 0;
    function focusAt(i) {
      idx = (i + buttons.length) % buttons.length;
      try { buttons[idx].focus(); } catch (e) {}
    }
    setTimeout(function(){ focusAt(0); }, 0);

    document.addEventListener('keydown', function (ev) {
      var k = ev.key;
      var code = ev.keyCode || ev.which || 0;
      var isLeft  = (k === 'ArrowLeft'  || k === 'Left'  || code === 37);
      var isUp    = (k === 'ArrowUp'    || k === 'Up'    || code === 38);
      var isRight = (k === 'ArrowRight' || k === 'Right' || code === 39);
      var isDown  = (k === 'ArrowDown'  || k === 'Down'  || code === 40);
      var isEnter = (k === 'Enter' || k === 'OK' || code === 13);
      if (isLeft)  { focusAt(idx - 1); ev.preventDefault(); return; }
      if (isRight) { focusAt(idx + 1); ev.preventDefault(); return; }
      if (isEnter) { buttons[idx].click(); ev.preventDefault(); return; }
      if (isDown && el.log) { el.log.scrollTop += 140; ev.preventDefault(); return; }
      if (isUp   && el.log) { el.log.scrollTop -= 140; ev.preventDefault(); return; }
    });
  })();
  
  setBusy(true);
  readLog();
})();

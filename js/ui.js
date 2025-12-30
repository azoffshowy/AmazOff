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
    btnPatch: document.getElementById('btnPatch'),
    btnUnpatch: document.getElementById('btnUnpatch'),
    btnClear: document.getElementById('btnClear')
  };

  function setBusy(busy) {
    document.body.setAttribute('data-busy', busy ? '1' : '0');
    if (el.spinner) el.spinner.style.display = busy ? 'flex' : 'none';
    var buttons = [el.btnPatch, el.btnUnpatch, el.btnClear];
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i]) buttons[i].disabled = !!busy;
    }
  }

  var toastTimer = null;
  function showToast(text, kind, ms) {
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
    return hbExec(cmd, 20000).then(function (res) {
      var out = '';
      var err = '';
      if (res && typeof res === 'object') {
        out = res.stdoutString || '';
        err = res.stderrString || '';
      }
      var merged = (String(out || '') + (err ? '\n' + String(err) : '')).replace(/\s+$/g, '');
      if (merged) setLogText(merged);
      console.log("call returned: ",res);
    }).catch(function (e) {
      setLogText(String(e && e.message ? e.message : e));
    }).then(function () {
      setBusy(false);
    });
  }

  function action(kind) {
    setBusy(true);
    showToast(String(kind || '').toUpperCase(), 'neutral', 900);

    return hbExec(PATCHCTL + ' ' + kind, 30000).then(function () {
      return readLog();
    }).then(function () {
      showToast('Done', 'ok', 1400);
    }).catch(function (e) {
      // Try to refresh log even on failure
      return readLog().catch(function () {}).then(function () {
        showToast('Failed', 'err', 2200);
        var msg = String(e && e.message ? e.message : e);
        var current = el.log ? (el.log.textContent || '') : '';
        setLogText((msg + '\n\n' + current).replace(/\s+$/g, ''));
      });
    }).then(function () {
      setBusy(false);
    });
  }

  function clearLog() {
    setLogText('');
    showToast('Cleared', 'neutral', 900);
  }

  // ---- Wiring ----
  //if (el.btnRun) el.btnRun.addEventListener('click', function () { action('runonce'); });
  if (el.btnPatch) el.btnPatch.addEventListener('click', function () { action('patch'); });
  if (el.btnUnpatch) el.btnUnpatch.addEventListener('click', function () { action('unpatch'); });
  if (el.btnClear) el.btnClear.addEventListener('click', clearLog);

  // ---- Remote navigation ----
  (function setupRemoteNav() {
    var buttons = [];
    //if (el.btnRun) buttons.push(el.btnRun);
    if (el.btnPatch) buttons.push(el.btnPatch);
    if (el.btnUnpatch) buttons.push(el.btnUnpatch);
    if (el.btnClear) buttons.push(el.btnClear);

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

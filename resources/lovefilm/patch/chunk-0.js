var _HOMEBREW_NO_AD_IN_RESPONSE = !0;
(globalThis.webpackChunkPhoton = globalThis.webpackChunkPhoton || []).push([
    [384], {
        6331: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initializeMetricsRouting: function() {
                    return u
                }
            });
            var r = n(70655),
                i = n(46255),
                o = n(1293),
                a = n(92017),
                s = n(25770),
                c = n(96116);

            function u() {
                return (0, r.__awaiter)(this, void 0, Promise, (function() {
                    var e, t, n, u, l, d;
                    return (0, r.__generator)(this, (function(r) {
                        return e = a.b.getInstance(), t = e.isFeatureEnabledNoTrigger(s.L
                            .ENABLE_METRICS_PROXY_REPORTING_VIA_SUSHI), n = e.isFeatureEnabledNoTrigger(s.L
                            .ENABLE_METRICS_PROXY_MIGRATION_FOR_ALL_LRC_METRICS), u = e.isFeatureEnabledNoTrigger(s.L
                            .ENABLE_METRICS_PROXY_MIGRATION_FOR_NETWORK_EDGE), t ? (l = ["SDK.InputProcessing",
                            "PlayerCallbackDuration", "EventTransmitter.ReportingResult"
                        ], d = u ? [] : Object.keys(c.B), i.y.setup().getMetricUploader().instance
                    .setRoutingConfig({
                            enabled: !0,
                            enabledForAllLrcMetrics: n,
                            enabledForNetworkEdge: u,
                            metricAllowList: new Set(l),
                            metricBlockList: new Set(d)
                        }), i.y.info("Sushi metrics routing enabled", o.R.LRCP)) : i.y.info(
                            "Sushi metrics routing disabled", o.R.LRCP), [2]
                    }))
                }))
            }
        },
        50956: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initializeTextToSpeech: function() {
                    return _
                }
            });
            var r = n(70655),
                i = n(1293),
                o = n(46255),
                a = n(19770),
                s = n(14382),
                c = n(14213),
                u = n(48837),
                l = n(16177),
                d = n(8019),
                p = n(30165),
                f = n(4029),
                h = n(11431),
                m = {
                    customContext: {
                        appLayer: "AVLRC"
                    },
                    reportOwner: i.R.LRAPS
                },
                g = "TTSManager",
                v = [g, "CapCom"],
                y = function(e) {
                    l.ZP.error("TTS Failure: ".concat(e.message), v, void 0, void 0, e.stack), d.ZE.reportDataPoint("TTS.FailedToSpeak", g, 1), o.y
                        .metric("TTS.FailedToSpeak", 1, m)
                },
                E = {
                    customContext: {
                        appLayer: "AVLRC"
                    },
                    reportOwner: i.R.LRAPS
                },
                T = ["TTS", "TTSDisabledInBackground"],
                P = "TTSSetLocaleError",
                C = "initializeTextToSpeech",
                I = "TTSEnabled",
                _ = function() {
                    var e = (0, h.m7)() || p.h0.getInstance().isSettingEnabled(p.sW.TTS);
                    c.Z.getAppLifeCycleState() === c.e.BACKGROUND && e ? S(!1) : e && S(!0), u.Sj.subscribe(b), s.IT.subscribe(R), h.JP
                        .setErrorHandler(y), e ? (A(u.vQ.getInstance().locale).then((function(e) {
                            d.ZE.reportDataPoint(P, C, e ? 0 : 1), o.y.metric(P, e ? 0 : 1, E)
                        })), d.ZE.reportDataPoint(I, C, 1), o.y.metric(I, 1, E)) : (d.ZE.reportDataPoint(I, C, 0), o.y.metric(I, 0, E))
                };

            function R(e) {
                e.type === s.Y5.ENTER_FOREGROUND && (0, h.m7)() ? (S(!0), A(u.vQ.getInstance().locale)) : e.type === s.Y5.ENTER_BACKGROUND && (0, h
                    .m7)() ? S(!1) : e.type === s.Y5.APP_RESTART && (s.IT.unsubscribe(R), u.Sj.unsubscribe(b))
            }

            function b(e) {
                var t = e.type,
                    n = e.locale;
                t === u.uT.LOCALE_CHANGED && (0, h.m7)() && A(n)
            }

            function S(e) {
                l.ZP.info("TTS set to ".concat(e, " - app changed lifecycle state"), T), f.default.dispatch((0, a.JC)(e)), h.IK.setAccessibility(e)
            }

            function A(e) {
                return (0, r.__awaiter)(this, void 0, Promise, (function() {
                    var t;
                    return (0, r.__generator)(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, h.JP.setLocaleAsync(e)];
                            case 1:
                                return (t = n.sent()) ? l.ZP.info('Locale "'.concat(e,
                                    '" or a fallback locale is set for TextToSpeechManager'), [P, C]) : l.ZP.error(
                                    'Failed to set locale "'.concat(e,
                                        '" or find a fallback locale for TextToSpeechManager'), [P, C]), [2, t]
                        }
                    }))
                }))
            }
        },
        56933: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startAdIdentity: function() {
                    return A
                }
            });
            var r = n(70655),
                i = n(17247),
                o = n(46255),
                a = n(1293),
                s = n(88280),
                c = n(10984),
                u = n(92017),
                l = n(25770),
                d = n(14382),
                p = n(16177),
                f = n(38913),
                h = n(8019),
                m = n(82283),
                g = "android",
                v = "tvos",
                y = "x1",
                E = "webOs",
                T = "roku",
                P = "tizen",
                C = "smartcast",
                I = "windows",
                _ = function() {
                    function e() {}
                    return e.getConsolidatedOS = function(t) {
                        var n, i;
                        if (!t || t.length < 1) return null;
                        try {
                            for (var s = (0, r.__values)(t), c = s.next(); !c.done; c = s.next()) {
                                var u = c.value,
                                    l = e.OS_CONSOLIDATE_MAP.get(u.toLowerCase());
                                if (l) return o.y.metric("AdIdentity.OSConsolidation.Success", 1, a.R.LRAPS), h.ZE.reportDataPoint(
                                    "ad_identity.os_consolidation.success", "AdIdentity", 1), l;
                                o.y.metric("AdIdentity.UnconsolidatedOS", 1, {
                                    reportOwner: a.R.LRAPS,
                                    customContext: {
                                        osSignal: u
                                    }
                                }), h.ZE.reportDataPoint("ad_identity.unconsolidated_os.".concat(u), "AdIdentity", 1)
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                c && !c.done && (i = s.return) && i.call(s)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return o.y.metric("AdIdentity.OSConsolidation.Failure", 1, a.R.LRAPS), h.ZE.reportDataPoint(
                            "ad_identity.os_consolidation.failure", "AdIdentity", 1), null
                    }, e.getOptOutAsString = function(e) {
                        return e ? "1" : "0"
                    }, e.reportAdIdentityMetrics = function(t, n) {
                        var r = e.getOptOutAsString(n),
                            i = "0" === r ? "AdIdentity.OptOut" : "AdIdentity.OptIn";
                        o.y.metric(i, 1, {
                            reportOwner: a.R.LRAPS,
                            customContext: {
                                osName: t
                            }
                        }), h.ZE.reportDataPoint("ad_identity.".concat(t, ".optout.").concat(r), "AdIdentity", 1)
                    }, e.OS_CONSOLIDATE_MAP = new Map([
                        [g, g],
                        ["android-tv", g],
                        ["a1kaxig6vxsg8y", g],
                        [v, v],
                        [y, y],
                        ["comcast", y],
                        [E, E],
                        [T, T],
                        ["a3vn4e5f7bbc7s", T],
                        ["roku os", T],
                        ["rokuos", T],
                        [P, P],
                        ["a1mwyrs2qvqh2n", P],
                        ["a3e60svkqxj0z8", P],
                        ["amgz4ckcwikyf", P],
                        ["aydgjrhm5vyk4", P],
                        [C, C],
                        ["vizio", C],
                        [E, E],
                        ["LG", E],
                        ["lg", E],
                        ["ab6mi2q1s9jsl", E],
                        ["apg14wg337e8n", E],
                        ["a1pckt065nvg32", E],
                        ["a2ebwpulff0rjl", C],
                        ["a3lp5wn9h3w47q", C],
                        ["a15uvrhyxwtwsg", C],
                        ["a1qfjobzzsjave", C],
                        ["a3ps099jegs2wl", C],
                        ["a3k79c2m17r8ae", C],
                        [I, I]
                    ]), e
                }(),
                R = ["AIP", "Ad Identity"],
                b = (0, f.P)("AdIdentity"),
                S = function() {
                    function e() {}
                    return e.onLifeCycleEvent = function(t) {
                        t.type === d.Y5.APP_EXIT && e.terminate(), t.type !== d.Y5.APP_EXIT && t.type !== d.Y5.ENTER_BACKGROUND && t.type !== d
                            .Y5.ENTER_FOREGROUND || e.sendAdIdentityToMAUI()
                    }, e.start = function() {
                        u.b.getInstance().isFeatureEnabled(l.L.ENABLE_AD_IDENTITY) && (e.httpClient = m.Z.deviceProxyClient(), d.IT.subscribe(e
                            .onLifeCycleEvent), e.sendAdIdentityToMAUI())
                    }, e.terminate = function() {
                        d.IT.unsubscribe(e.onLifeCycleEvent)
                    }, e.sendAdIdentityToMAUI = function() {
                        return (0, r.__awaiter)(this, void 0, Promise, (function() {
                            return (0, r.__generator)(this, (function(t) {
                                return e.createRequestPayload().then((function(t) {
                                    if (t.idfa) {
                                        o.y.metric("AdIdentityMAUICall", 1, a.R.LRAPS), h.ZE
                                            .reportDataPoint("AD_IDENTITY_MAUI_CALL", "AdIdentity", 1);
                                        var n = Date.now();
                                        return h.ZE.startTimer("AD_IDENTITY_MAUI_LATENCY", "AdIdentity"), e
                                            .makeRequest(t).then((function() {
                                                var e = Date.now() - n;
                                                o.y.metric("AdIdentityMAUICall.Latency", e, a.R
                                                    .LRAPS), h.ZE.stopTimer(
                                                    "AD_IDENTITY_MAUI_LATENCY")
                                            }), (function(e) {
                                                var t = Date.now() - n;
                                                o.y.metric("AdIdentityMAUICall.Latency", t, a.R
                                                        .LRAPS), h.ZE.stopTimer(
                                                        "AD_IDENTITY_MAUI_LATENCY"), o.y.metric(
                                                        "AdIdentityMAUICall.Error", 1, a.R.LRAPS), p
                                                    .ZP.error("".concat(b("SendToMAUI"), " ")
                                                        .concat(e.message), R), h.ZE
                                                    .reportDataPoint("AD_IDENTITY_MAUI_CALL_ERROR",
                                                        "AdIdentity", 1)
                                            }))
                                    }
                                    return Promise.resolve()
                                })), [2]
                            }))
                        }))
                    }, e.makeRequest = function(t) {
                        return e.httpClient.fetch("/cdp/maui/RegisterCustomerID", {
                            method: "post",
                            body: JSON.stringify(t),
                            identifier: "AdIdentity"
                        })
                    }, e.getAuthenticationDomain = function() {
                        var e = s.XL.getInstance().getAuthConfiguration().oAuthEndpoint.split(".");
                        return e.shift(), e.join(".")
                    }, e.createRequestPayload = function() {
                        return (0, r.__awaiter)(this, void 0, Promise, (function() {
                            return (0, r.__generator)(this, (function(t) {
                                return [2, new Promise((function(t) {
                                    i.o.getAdvertisingParams((function(n, r) {
                                        var i = null,
                                            o = null;
                                        n ? p.ZP.error("".concat(b("createRequestPayload"),
                                            " ").concat(n.message), R) : (i = r
                                            .isAdvertisingOptOut, o = r.advertisingId);
                                        var a = c.LK.getInstance(),
                                            s = a.osName,
                                            u = a.osLocale,
                                            l = a.firmwareVersion,
                                            d = a.modelName,
                                            f = a.manufacturer,
                                            h = a.deviceTypeId,
                                            m = e.getAuthenticationDomain(),
                                            g = _.getConsolidatedOS([s, h]);
                                        g || (g = s), _.reportAdIdentityMetrics(g, i);
                                        var v = {
                                            make: f,
                                            model: d,
                                            os: s,
                                            osVersion: l,
                                            language: u,
                                            dtid: h
                                        };
                                        t({
                                            dt: g,
                                            app: "primevideoott",
                                            aud: m,
                                            idfa: o,
                                            dinfo: JSON.stringify(v),
                                            lmt: _.getOptOutAsString(i),
                                            appId: "primevideoott"
                                        })
                                    }))
                                }))]
                            }))
                        }))
                    }, e
                }(),
                A = function() {
                    S.start()
                }
        },
        11742: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initializeAdvertisingParamsCache: function() {
                    return i
                }
            });
            var r = n(31051),
                i = function() {
                    r.G.init()
                }
        },
        49544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initializeAppConfig: function() {
                    return s
                }
            });
            var r = n(70655),
                i = n(46255),
                o = n(10984),
                a = n(22782),
                s = function() {
                    return (0, r.__awaiter)(void 0, void 0, Promise, (function() {
                        var e;
                        return (0, r.__generator)(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, a.Z.initialize(o.LK.getInstance())];
                                case 1:
                                    return e = t.sent(), i.y.setup().updateLogEndpoint(e.getFirewoodConfiguration()
                                        .firewoodEndpoint), [2]
                            }
                        }))
                    }))
                }
        },
        46934: function(e, t, n) {
            "use strict";
            n.d(t, {
                x: function() {
                    return o
                }
            });
            var r = n(70655),
                i = n(5371);

            function o() {
                var e, t, n, o, a = ["APP_LOAD_DURATION"];
                if (i.ZP.isLastKnownStateUserSignedIn()) try {
                    for (var s = (0, r.__values)(Object.values(a)), c = s.next(); !c.done; c = s.next()) {
                        var u = c.value;
                        a.push(u + ".SIGNED_IN")
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        c && !c.done && (t = s.return) && t.call(s)
                    } finally {
                        if (e) throw e.error
                    }
                } else try {
                    for (var l = (0, r.__values)(Object.values(a)), d = l.next(); !d.done; d = l.next()) u = d.value, a.push(u +
                        ".SIGNED_OUT")
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        d && !d.done && (o = l.return) && o.call(l)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return a
            }
        },
        51093: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initializeSsoConfigStore: function() {
                    return o
                }
            });
            var r = n(10297),
                i = n(62330);

            function o() {
                return i.M.initialize(r.ZQ.getConfig().ssoClientConfig)
            }
        },
        26861: function(e, t, n) {
            "use strict";

            function r() {}
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        90385: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                registerOOBERefMarker: function() {
                    return a
                }
            });
            var r = n(88280),
                i = n(26855),
                o = n(61952);

            function a() {
                if (o.p.getShouldRegisterRefMarker()) {
                    var e = r.XL.getInstance().getLocalizationConfiguration().geoLocation;
                    e = void 0 === e ? "xx" : e;
                    var t = {
                        action: "PageNavigate",
                        hitType: "pageHit",
                        pageType: "LRC",
                        refMarker: o.p.getProvidedRefMarker() || "dvm_liv_xxx_".concat(e, "_bd_x_obe"),
                        startTime: Date.now()
                    };
                    (0, i.XZ)("OAUTH_OOBE_FLOW", "ODE", t), o.p.setShouldRegisterRefMarker(!1)
                }
            }
        },
        27207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initAuth: function() {
                    return q
                }
            });
            var r = n(70655),
                i = n(3821),
                o = n(93586),
                a = n(69366),
                s = n(46255),
                c = n(1293),
                u = n(10297),
                l = n(88280),
                d = n(75429),
                p = n(82845),
                f = n(41833),
                h = n(86560),
                m = n(10351),
                g = n(37310),
                v = n(16177),
                y = n(38913),
                E = n(3444),
                T = n(86415),
                P = n(31329),
                C = n(66180),
                I = n(18446),
                _ = n.n(I),
                R = (0, y.P)("postProcessCommonFunctions"),
                b = "^https?://",
                S = function(e) {
                    return e.match(b) ? e : "https://" + e
                },
                A = ["UpdateAppConfig", "postNetworkProcess", "CapCom"],
                O = (0, y.P)("postProcess");

            function N(e) {
                var t = this;
                void 0 === e && (e = !1);
                var n = M(),
                    i = function(e) {
                        return (0, r.__awaiter)(this, void 0, Promise, (function() {
                            var t, n, i, o, a, u, p;
                            return (0, r.__generator)(this, (function(y) {
                                switch (y.label) {
                                    case 0:
                                        return [4, D()];
                                    case 1:
                                    case 3:
                                        return t = y.sent(), [4, (I = t, N = !1, L = function(e) {
                                            if (e) {
                                                var t = e.customerConfig,
                                                    n = e.deviceConfig,
                                                    r = e.resiliencyConfig;
                                                if (Array.isArray(null == r ? void 0 : r
                                                        .orderedFallbackBaseUrls) && (null == r ? void 0 : r
                                                        .orderedFallbackBaseUrls.length)) {
                                                    var i = r.orderedFallbackBaseUrls;
                                                    return {
                                                        primaryEndpoint: S(i[0]),
                                                        resiliencyEndpoints: i.slice(1).map((function(e) {
                                                            return S(e)
                                                        }))
                                                    }
                                                }
                                                if (t && t.baseUrl) return {
                                                    primaryEndpoint: S(t.baseUrl)
                                                };
                                                if (n && n.url) return {
                                                    primaryEndpoint: S(n.url)
                                                }
                                            }
                                        }(I), v.ZP.info("".concat(O("postGascProcess"),
                                            " Retrieved GascEndpoints from GASC: ").concat(JSON.stringify(
                                            L))), "string" == typeof L || (null == L ? void 0 : L
                                            .primaryEndpoint) ? function(e) {
                                            var t;
                                            return (0, r.__awaiter)(this, void 0, Promise, (function() {
                                                var n, i, o, a, s, c;
                                                return (0, r.__generator)(this, (function(r) {
                                                    switch (r.label) {
                                                        case 0:
                                                            return [4, (0, T.ur)()];
                                                        case 1:
                                                            return n = r.sent(), i = (0,
                                                                    T.G_)(n) ? n
                                                                .primaryEndpoint : n,
                                                                o = !1, a = null, s =
                                                                null, (0, T.G_)(e) ? (
                                                                    a = e
                                                                    .primaryEndpoint
                                                                    .match(b) && e
                                                                    .primaryEndpoint,
                                                                    c = null === (t = e
                                                                        .resiliencyEndpoints
                                                                        ) || void 0 ===
                                                                    t ? void 0 : t
                                                                    .filter((function(
                                                                    e) {
                                                                        return e
                                                                            .match(
                                                                                b
                                                                                )
                                                                    })), s = a && JSON
                                                                    .stringify({
                                                                        primaryEndpoint: a,
                                                                        resiliencyEndpoints: c
                                                                    })) : (a = e.match(
                                                                    b) && e, s = a),
                                                                a && s && !_()(s, JSON
                                                                    .stringify(n)) ? [2,
                                                                    E.H.setItem(T.Tu, s)
                                                                    .then((function() {
                                                                        P.ZP.info(
                                                                                ""
                                                                                .concat(
                                                                                    R(
                                                                                        "updateGascEndpointsInStorage"),
                                                                                    " Updated gascEndpoints in storage to "
                                                                                    )
                                                                                .concat(
                                                                                    s
                                                                                    )
                                                                                ),
                                                                            o =
                                                                            a !==
                                                                            i
                                                                    })).catch((function(
                                                                        e) {
                                                                        P.ZP.error(
                                                                            ""
                                                                            .concat(
                                                                                R(
                                                                                    "updateGascEndpointsInStorage"),
                                                                                " Failed to set "
                                                                                )
                                                                            .concat(
                                                                                T
                                                                                .Tu,
                                                                                " to "
                                                                                )
                                                                            .concat(
                                                                                s,
                                                                                " in storage: "
                                                                                )
                                                                            .concat(
                                                                                (0, C
                                                                                    .vz
                                                                                    )
                                                                                (
                                                                                    e)
                                                                                ),
                                                                            void 0,
                                                                            void 0,
                                                                            void 0,
                                                                            e
                                                                            .stack
                                                                            )
                                                                    })).then((
                                                                function() {
                                                                        return o
                                                                    }))
                                                                ] : [2, Promise.resolve(
                                                                    o)]
                                                    }
                                                }))
                                            }))
                                        }(L).then((function(e) {
                                            var t = {
                                                atvEndpoint: "string" == typeof L ? L : L
                                                    .primaryEndpoint
                                            };
                                            return N = e, g.Fe.updateConfig(t).catch((function(e) {
                                                N = !1, v.ZP.error("".concat(O(
                                                        "postGascProcess"),
                                                    " Failed to update EndpointConfig: "
                                                    ).concat(e), A)
                                            })).then((function() {
                                                return N
                                            }))
                                        })) : (v.ZP.warn("".concat(O("postGascProcess"),
                                                " Missing primary GASC endpoint in appStartupConfig"), A),
                                            Promise.resolve(N)))];
                                    case 2:
                                        return n = y.sent(), [4, w(n)];
                                    case 4:
                                        return y.sent(), i = t.customerConfig, o = t.testGroups, a = t.deviceConfig, u = t
                                            .dctrConfig, s.y.info("GASC customerConfig: ".concat(JSON.stringify(i)), {
                                                reportOwner: c.R.CORE,
                                                tags: ["UpdateAppConfig", "GASC"]
                                            }), p = function(e) {
                                                var t = l.XL.getInstance().getLocalizationConfiguration().marketplaceId;
                                                return e.marketplaceId !== t
                                            }(i), l.XL.updateConfiguration({
                                                appConfig: k(i, o),
                                                serverConfig: F(a)
                                            }), s.y.info("Received GASC config version: ".concat(d.Z.getConfigVersion()), {
                                                reportOwner: c.R.TERMINATION,
                                                tags: ["UpdateAppConfig", "GASC"]
                                            }), d.Z.getConfigVersion() && f.C.updateConfiguration(h.le
                                                .DCTR_COHORT_FROM_GASC, u), e || m.y.emit({
                                                type: m.m.APP_CONFIG_UPDATED,
                                                marketplaceIdChanged: p
                                            }), [2]
                                }
                                var I, N, L
                            }))
                        }))
                    }(e).catch((function(e) {
                        return s.y.error("Failed to update app config: ".concat(e), c.R.CORE), Promise.reject(e)
                    }));
                return Promise.all([n, i]).then((function() {
                    return (0, r.__awaiter)(t, void 0, void 0, (function() {
                        return (0, r.__generator)(this, (function(t) {
                            return e ? [2] : [2, p.O.updateLocalizationConfig(d.Z.getCustomerConfig())]
                        }))
                    }))
                }))
            }
            var L = function(e, t, n) {
                    return function(r) {
                        return i.Sj.mark(e), n(r).finally((function() {
                            return i.Sj.mark(t)
                        }))
                    }
                },
                M = L(o.Od.Bootstrap_ACM_Start, o.Od.Bootstrap_ACM_End, (function() {
                    return u.ZQ.loadConfig()
                })),
                D = L(o.Od.Bootstrap_GASC_Start, o.Od.Bootstrap_GASC_End, (function() {
                    return d.Z.loadConfig(!0)
                })),
                w = L(o.Od.Bootstrap_Second_GASC_Start, o.Od.Bootstrap_Second_GASC_End, (function(e) {
                    return d.Z.loadConfig(e)
                }));

            function k(e, t) {
                void 0 === t && (t = []);
                var n = l.XL.getInstance();
                return {
                    localizationConfiguration: {
                        locale: e.locale,
                        marketplaceId: e.marketplaceId,
                        geoLocation: e.currentTerritory,
                        videoCountryOfRecord: e.videoCountryOfRecordAvailable && e.videoCountryOfRecord || void 0,
                        territoryPivotRollup: e.territoryPivotRollup
                    },
                    authConfiguration: {
                        oAuthEndpoint: n.getAuthConfiguration().oAuthEndpoint
                    },
                    firewoodConfiguration: {
                        firewoodEndpoint: n.getFirewoodConfiguration().firewoodEndpoint
                    },
                    testGroups: t
                }
            }

            function F(e) {
                return (e && e.additionalConfig && e.additionalConfig.values || []).reduce((function(e, t) {
                    return e[t.key] = t.value, e
                }), {})
            }
            var x = n(5371),
                U = n(48180),
                B = n(82283),
                H = n(47755),
                G = n(15988),
                W = n(78701),
                V = n(89251),
                K = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return (0, r.__extends)(t, e), t.prototype.decorateFetch = function(e, t) {
                        return this.executeFetch(e, t)
                    }, t.prototype.executeFetch = function(e, t) {
                        var n = this;
                        return this.delegate.fetch(e, t).catch((function(r) {
                            if ("HttpError" === r.name && 401 === r.response.status && "ProfileNotVideoEnabled" === r.response
                                .headers.get("x-atv-error-type")) {
                                v.ZP.info("Current active profile has been disabled", ["ProfileEnablementDecorator"]);
                                var i = x.ZP.clearAccessToken().catch((function() {
                                    return {}
                                }));
                                return (0, V.pJ)().then((function() {
                                    var o = H.Z.getCurrentPage();
                                    return i.then(x.ZP.refreshAccessToken).then((function() {
                                        return o === W.Z.PROFILE_SELECTION_PAGE ? (v.ZP.info(
                                                "Successfully refreshed access token. Redirecting to profiles page.",
                                                ["ProfileEnablementDecorator"]), Promise.reject(r)) : o ===
                                            W.Z.UNLOADED ? (v.ZP.info(
                                                "Successfully refreshed access token. Retrying the request.",
                                                ["ProfileEnablementDecorator"]), n.executeFetch(e, t)) : (G
                                                .Z.emit({
                                                    type: G.R.NAVIGATE,
                                                    pageType: W.Z.PROFILE_SELECTION_PAGE
                                                }), Promise.resolve({}))
                                    }))
                                }))
                            }
                            return Promise.reject(r)
                        }))
                    }, t
                }(n(15218).Z),
                Z = K,
                q = function() {
                    return (0, r.__awaiter)(void 0, void 0, Promise, (function() {
                        var e;
                        return (0, r.__generator)(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return i.Sj.mark(o.Od.Bootstrap_Auth_Start), e = function(e) {
                                        var t = new U.Z(e);
                                        return new Z(t)
                                    }, B.Z.addCustomDeviceProxyClientDecorator(e), a.Z.addCustomOptimusClientDecorator(
                                        e), [4, x.ZP.initialize().finally((function() {
                                        x.ZP.addStateChangeHandler("SignedOut", N), x.ZP
                                            .addStateChangeHandler("SignedIn", N), i.Sj.mark(o.Od
                                                .Bootstrap_Auth_End)
                                    }))];
                                case 1:
                                    return t.sent(), [4, N(!0)];
                                case 2:
                                    return t.sent(), [2]
                            }
                        }))
                    }))
                }
        },
        20202: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initializeBundleCache: function() {
                    return y
                }
            });
            var r = n(1293),
                i = n(46255),
                o = n(10984),
                a = n(92017),
                s = n(25770),
                c = n(89875),
                u = n(14382),
                l = n(14213),
                d = n(38913),
                p = n(70655),
                f = function() {
                    function e() {}
                    return e.startBundleCacheProcess = function() {
                        return (0, p.__awaiter)(this, void 0, Promise, (function() {
                            return (0, p.__generator)(this, (function(e) {
                                return [2, !1]
                            }))
                        }))
                    }, e
                }(),
                h = (0, d.P)("BundleCache"),
                m = {
                    reportOwner: r.R.LRCP,
                    tags: ["BundleCache"]
                },
                g = 36e5,
                v = function() {
                    function e() {
                        this.isInBackground = !1, this.timer = void 0, this.isInitialized = !1, this.isProcessing = !1, this.lastIdleDetected =
                            void 0, this.lifeCycleEventHandler = this.lifeCycleEventHandler.bind(this)
                    }
                    return e.getInstance = function() {
                        return this.instance || (this.instance = new e), this.instance
                    }, e.prototype.initialize = function() {
                        try {
                            if (this.isInitialized) return;
                            if (!(0, c.Jt)() && !this.isBundleCacheEnabled()) return;
                            i.y.info("".concat(h("initialize"), " subscribing to background"), m), u.IT.subscribe(this.lifeCycleEventHandler), l
                                .Z.isInBackground() && this.onEnterBackground(), this.isInitialized = !0
                        } catch (e) {
                            i.y.error("".concat(h("initialize"),
                                " Error happened while trying to initialize the bundle cache process, ignoring... ").concat(e), m)
                        }
                    }, e.prototype.lifeCycleEventHandler = function(e) {
                        e.type === u.Y5.ENTER_BACKGROUND ? this.onEnterBackground() : e.type === u.Y5.ENTER_FOREGROUND ? this
                        .onEnterForeground() : e.type !== u.Y5.APP_RESTART && e.type !== u.Y5.APP_EXIT || this.destroy()
                    }, e.prototype.onEnterBackground = function() {
                        var e = this;
                        i.y.info("".concat(h("onEnterBackground"), " starting bundle cache polling"), m), this.isInBackground = !0, this
                            .timer || (this.startBundleCache(), this.timer = setInterval((function() {
                                e.isInBackground && e.startBundleCache()
                            }), g))
                    }, e.prototype.onEnterForeground = function() {
                        i.y.info("".concat(h("onEnterForeground"), " stop bundle cache polling"), m), this.isInBackground = !1, this.timer && (
                            clearInterval(this.timer), this.timer = void 0)
                    }, e.prototype.destroy = function() {
                        i.y.info("".concat(h("destroy"), " destroy bundle cache"), m), u.IT.unsubscribe(this.lifeCycleEventHandler), this
                            .timer && (clearInterval(this.timer), this.timer = void 0)
                    }, e.prototype.isBundleCacheEnabled = function() {
                        return a.b.getInstance().isFeatureEnabled(s.L.ENABLE_BUNDLE_CACHE_SINGLE_ANDROID) || this.isAndroidTVDevice()
                    }, e.prototype.isAndroidTVDevice = function() {
                        return "android" === o.LK.getInstance().osName.toLowerCase()
                    }, e.prototype.startBundleCache = function(e) {
                        var t = this;
                        void 0 === e && (e = !1);
                        var n = e ? "Foreground" : "Background";
                        if (e && this.lastIdleDetected) {
                            var o = Date.now() - this.lastIdleDetected;
                            if (o < g) return void i.y.info("".concat(h("startBundleCache{".concat(n, "}")),
                                " skipping foreground cache, last call was ").concat(Math.floor(o / 1e3), "s ago"), m)
                        }
                        if (this.isProcessing) i.y.info("".concat(h("startBundleCache{".concat(n, "}")),
                            " skipping bundle cache, there is already a running instance"), m);
                        else {
                            this.isProcessing = !0, i.y.info("".concat(h("startBundleCache{".concat(n, "}")), " starting bundle cache"), m);
                            var a = i.y.metricTimer("BundleCache.Latency", {
                                reportOwner: r.R.LRCP,
                                customContext: {
                                    lifecycle: n
                                }
                            });
                            a.start(), e && (this.lastIdleDetected = Date.now()), f.startBundleCacheProcess().then((function(e) {
                                e ? (a.stop(), i.y.metric("BundleCache.Success", 1, {
                                    reportOwner: r.R.LRCP,
                                    customContext: {
                                        lifecycle: n
                                    }
                                }), i.y.info("".concat(h("startBundleCache{".concat(n, "}")),
                                    " finished cache the latest version bundle"), m)) : (a.clear(), i.y.info("".concat(h(
                                        "startBundleCache{".concat(n, "}")),
                                    " skipped bundle cache, the current version is the latest prod version."), m))
                            })).catch((function(e) {
                                a.clear(), i.y.metric("BundleCache.Success", 0, {
                                    reportOwner: r.R.LRCP,
                                    customContext: {
                                        lifecycle: n
                                    }
                                }), i.y.error("".concat(h("startBundleCache{${lifecycle}}"),
                                    " failed cache the latest bundle, error: ").concat(e), m)
                            })).finally((function() {
                                t.isProcessing = !1
                            }))
                        }
                    }, e
                }(),
                y = function() {
                    v.getInstance().initialize()
                }
        },
        9877: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(70655),
                i = n(76004),
                o = n(89415),
                a = n(16177),
                s = n(38913),
                c = n(8019),
                u = n(52708),
                l = n(85397),
                d = (0, s.P)("clickstreamMiddleware"),
                p = ["Clickstream", "clickstreamMiddleware", "CapCom"];
            t.default = function(e) {
                return function(e) {
                    return function(t) {
                        var n, s, f, h, m = (0, u.w)(),
                            g = e(t),
                            v = m[t.type];
                        if (!v) return g;
                        try {
                            for (var y = (0, r.__values)(v), E = y.next(); !E.done; E = y.next()) {
                                var T = E.value;
                                if (T.type === l.t.ClickstreamInstantMetric || T.type === l.t.ClickstreamTransitionMetric) {
                                    var P = null === (h = null === (f = null == t ? void 0 : t.meta) || void 0 === f ? void 0 : f
                                        .metrics) || void 0 === h ? void 0 : h.clickstreamPayload;
                                    P ? (i.AppEvents.log((0, o.dQ)(T.name, T.type, P)), i.AppEvents.dispatch()) : (a.ZP.warn("".concat(
                                            d("clickstreamMiddleware"),
                                            "\n                        Registered Clickstream action raised without payload: ")
                                        .concat(JSON.stringify(t)), p), c.ZE.reportDataPoint("ClickstreamValidationError",
                                        "clickstreamMiddleware", 1))
                                }
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                E && !E.done && (s = y.return) && s.call(y)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return g
                    }
                }
            }
        },
        59148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                cacheInvalidationMiddleware: function() {
                    return h
                }
            });
            var r = n(46422),
                i = n(91204),
                o = n(59743),
                a = n(85909),
                s = n(41933),
                c = n(78701),
                u = n(55499),
                l = n(87131),
                d = n(5074),
                p = n(71287),
                f = n(71792),
                h = function() {
                    return function(e) {
                        return function(t) {
                            switch (t.type) {
                                case p.g.TOGGLE_WATCHLIST_FULFILLED_PAGE_TITLE:
                                case l.b.CAROUSEL_CARD_TOGGLE_WATCHLIST_FULFILLED:
                                    i.x.emit(o.ZP.WATCHLIST_TOGGLED);
                                    break;
                                case l.b.CAROUSEL_CARD_REMOVE_FROM_LIST_FULFILLED:
                                case d.h.HIDE_CARD_CALL_FULFILLED:
                                    i.x.emit(o.ZP.DROPPED_CARD);
                                    break;
                                case r.U.CALLING_WORKFLOW_START:
                                    i.x.emit(o.ZP.ACQUISITION_START);
                                    break;
                                case s.h.PAGE_TRANSITION_ACTION:
                                    var n = t.payload;
                                    (0, f.Z)() === a.M.C ? n.pageType === c.Z.PLAYBACK_PAGE && n.pageParams.videoMaterialType !== u.g
                                        .Trailer && i.x.emit(o.ZP.TRANSITIONED_TO_PLAYBACK) : n.pageType === c.Z.PLAYBACK_PAGE && !0 !== n
                                        .pageParams.trailerOrExtraContent && i.x.emit(o.ZP.TRANSITIONED_TO_PLAYBACK)
                            }
                            return e(t)
                        }
                    }
                }
        },
        62098: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initializeConfigurationStores: function() {
                    return f
                }
            });
            var r = n(70655),
                i = n(10297),
                o = n(47169),
                a = n(10984),
                s = n(92017),
                c = n(4292),
                u = n(10833),
                l = n(1360),
                d = n(2406),
                p = function() {
                    function e(e) {
                        var t = this;
                        this.onSDKConfigChange = function(e) {
                            return t.setConfigIfChanged(e), Promise.resolve()
                        }, this.setConfigIfChanged(e), this.updateListenerSubscription = i.ZQ.addPartialConfigChangeListener(this
                            .onSDKConfigChange, "lrsdkConfig")
                    }
                    return e.initialize = function(t) {
                        return this.instance || (this.instance = new e(t)), this.instance
                    }, e.getInstance = function() {
                        if (!this.instance) throw new Error("LRSDKConfigManagerAdapter not initialised");
                        return this.instance
                    }, e.destroy = function() {
                        this.instance && (this.instance.removeListeners(), delete this.instance)
                    }, e.isInitialised = function() {
                        return !!this.instance
                    }, e.prototype.setConfigIfChanged = function(e) {
                        this.config !== e && (d.F_.getInstance().setConfig(null != e ? e : {}), this.config = e)
                    }, e.prototype.removeListeners = function() {
                        this.updateListenerSubscription && (this.updateListenerSubscription.removeListener(), delete this
                            .updateListenerSubscription)
                    }, e
                }();

            function f() {
                return (0, r.__awaiter)(this, void 0, Promise, (function() {
                    var e, t, n, d;
                    return (0, r.__generator)(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return e = i.ZQ.getConfig(), t = o.Z.getBundleVersion(), n = o.Z.getStage(), d = a.LK
                                    .getInstance(), [4, Promise.all([s.b.initialize(e.featureConfig, {
                                        bundleVersion: t,
                                        appStage: n
                                    }), c.g.initialize(e.pilotConfig, {
                                        bundleVersion: t,
                                        appStage: n
                                    }), u.DE.initialize(e.clientResiliencyConfig, {
                                        deviceId: d.deviceId,
                                        deviceTypeId: d.deviceTypeId
                                    }), p.initialize(e.lrsdkConfig), l.l.initialize(e.criticalEventsConfig)])];
                            case 1:
                                return r.sent(), [2]
                        }
                    }))
                }))
            }
        },
        59161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n(46255),
                i = n(1293),
                o = n(35934),
                a = n(69033),
                s = n(41946),
                c = n(32967),
                u = function() {
                    function e() {
                        this.synchronisedState = new s.L(a.$.CONSUMPTION_ONLY, {
                            loaded: !1,
                            primeAddOn: !1,
                            channels: !1
                        })
                    }
                    return e.getInstance = function() {
                        return e.instance || (e.instance = new e), e.instance
                    }, e.prototype.getState = function() {
                        return this.synchronisedState.get()
                    }, e.prototype.load = function() {
                        var e = {
                            loaded: !0,
                            primeAddOn: (0, c.Dy)(o.gi.PRIME_ADD_ON, !0),
                            channels: (0, c.Dy)(o.gi.CHANNELS, !0)
                        };
                        r.y.info("[ConsumptionOnlyStore] Loaded with: PrimeAddOn=".concat(e.primeAddOn), i.R.RUST), this.synchronisedState.set(
                            e)
                    }, e
                }();

            function l() {
                u.getInstance().load()
            }
        },
        68976: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initializeApplicationLevelCRFHandlers: function() {
                    return de
                }
            });
            var r, i = n(70655),
                o = n(25168),
                a = n(49573),
                s = n(77275),
                c = n(61481);
            ! function(e) {
                e.HOME = "home", e.ORIGINALS = "merch", e.MOVIES = "movie", e.TV = "tv", e.KIDS = "merch", e.KIDS_HOME = "merch", e.MY_STUFF =
                    "home"
            }(r || (r = {}));
            var u, l = r;
            ! function(e) {
                e.HOME = "home", e.ORIGINALS = "originals1", e.MOVIES = "home", e.TV = "home", e.KIDS = "primevideokids", e.KIDS_HOME = "kids", e
                    .MY_STUFF = "MyStuff"
            }(u || (u = {}));
            var d, p, f = u,
                h = n(16177),
                m = n(38913),
                g = n(78701),
                v = n(21970),
                y = n(61390),
                E = n(81839),
                T = n(87361),
                P = n(83872),
                C = n(46255),
                I = n(1293),
                _ = n(22563),
                R = n(79485),
                b = n(47755),
                S = n(10677),
                A = n(69339),
                O = n(8019),
                N = n(33299),
                L = n(40580),
                M = n(29055),
                D = n(26211),
                w = n(79379),
                k = n(5274),
                F = n(73842),
                x = n(11431),
                U = ["LRAK", "CRF", "ApplicationLevelCommandHandler"],
                B = (0, m.P)("ApplicationLevelCommandExecutor"),
                H = function(e, t, n) {
                    return (0, i.__awaiter)(void 0, void 0, void 0, (function() {
                        var r, o, a, s, c, u, l, d;
                        return (0, i.__generator)(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return h.ZP.info("".concat(B("handleApplicationLevelAction"),
                                            " handling application level action."), U, void 0), b.Z.getCurrentPage() !== g.Z
                                        .PROFILE_SELECTION_PAGE ? [3, 3] : (r = _.Z.location.state.isAppLoad, o = y.f
                                            .getInstance().getActiveProfile(), a = (0, F.Z)(t.pageTransitionParameters, t
                                                .pageType, o), s = void 0, t.pageType = a.pageType, t
                                            .pageTransitionParameters = a.pageParameters, W(r) && void 0 !== o ? [4, L.Z
                                                .getInstance().exchangeAccountAccessTokenForActorAccessToken(o.id, o
                                                    .profileIsImplicit || !1).then((function() {
                                                    h.ZP.info("".concat(B("handleApplicationLevelAction"),
                                                        " has successfully requested access token refresh for "
                                                        ).concat(o.id,
                                                        " on first app load on ProfileSelectionPage"), U)
                                                })).catch((function(e) {
                                                    h.ZP.error("".concat(B("handleApplicationLevelAction"),
                                                            " has failed to load profile access token for ")
                                                        .concat(o.id,
                                                            " on first app load on ProfileSelectionPage"), U,
                                                        void 0, e instanceof Error ? e.message :
                                                        "ProfileAccessTokenExchanger failed but returned no error"
                                                        ), s = e
                                                }))
                                            ] : [3, 2]);
                                case 1:
                                    i.sent(), i.label = 2;
                                case 2:
                                    s && (c = {
                                        error: s,
                                        errorCode: v.Z.VOICE_COMMAND_ERROR,
                                        closeAppButtonEnabled: !1,
                                        redirectButtonsEnabled: !1,
                                        restartAppButtonEnabled: !0,
                                        showErrorCode: !0
                                    }, t.pageType = g.Z.ERROR_PAGE, t.pageTransitionParameters = c), i.label = 3;
                                case 3:
                                    return t.isActionBlocked ? (h.ZP.info("".concat(B("handleApplicationLevelAction"),
                                        " action was blocked since it is invalid for this user")), [2]) : (x.N1
                                        .dismiss(), V(), K(t), S.Z.storeCurrentFocusRestorationPointInNavStack(), t
                                        .newNavigationStackPageProperties && A.ZP.pushToNavigationHistory({
                                            pageParams: t.newNavigationStackPageProperties.pageTransitionParameters,
                                            pageType: t.newNavigationStackPageProperties.pageType
                                        }), u = "".concat(w.ZP.APPLICATION_ACTIONS_DIRECTIVE, "_").concat(t.pageType), O
                                        .ZE.reportDataPoint(u, n, 1), C.y.metric("Directives.Count", 1, {
                                            reportOwner: I.R.VOICE,
                                            customContext: {
                                                directiveType: "Navigate_".concat(t.pageType)
                                            }
                                        }), b.Z.getCurrentPage() === g.Z.UNLOADED ? k.Xs(t.pageType, t
                                            .pageTransitionParameters) : t.pageType === g.Z.PLAYBACK_PAGE ? (l = new R
                                            .Fg, d = {
                                                metadataActionType: D.a4.Playback,
                                                refMarker: t.pageTransitionParameters.refMarker,
                                                userPlaybackMetadata: t.pageTransitionParameters.userPlaybackMetadata,
                                                userEntitlementMetadata: t.pageTransitionParameters
                                                    .userEntitlementMetadata,
                                                playbackExperienceMetadata: t.pageTransitionParameters
                                                    .playbackExperienceMetadata,
                                                videoMaterialType: t.pageTransitionParameters.videoMaterialType,
                                                position: t.pageTransitionParameters.position,
                                                regulatoryRating: t.pageTransitionParameters.regulatoryRating,
                                                contentDescriptors: t.pageTransitionParameters.contentDescriptors,
                                                startPositionEpochUtc: t.pageTransitionParameters.startPositionEpochUtc,
                                                playbackTitle: t.pageTransitionParameters.playbackTitle,
                                                catalogMetadata: t.pageTransitionParameters.catalogMetadata,
                                                isTrailer: t.pageTransitionParameters.isTrailer,
                                                navigationTimestamp: t.pageTransitionParameters.navigationTimestamp
                                            }, (0, N.q4)({
                                                metadata: d,
                                                titleId: t.pageTransitionParameters.titleId,
                                                navigateTo: l.to.bind(l),
                                                contentType: t.pageTransitionParameters.videoMaterialType
                                            })) : (new R.Fg).to(t.pageType, t.pageTransitionParameters), G(e, t) && A.ZP
                                        .resetHistory(), [2])
                            }
                        }))
                    }))
                },
                G = function(e, t) {
                    return e === o.CommonCommands.NAVIGATE_TO_PAGE && t.pageType === g.Z.HOMEPAGE
                },
                W = function(e) {
                    return !!e && (0, M.O)()
                },
                V = function() {
                    var e = A.ZP.peekNavigationHistory();
                    !e || e.pageType !== g.Z.PLAYBACK_PAGE && e.pageType !== g.Z.LIVE_PLAYBACK_PAGE || A.ZP.popNavigationHistory()
                },
                K = function(e) {
                    var t = A.ZP.peekNavigationHistory();
                    t && Z(t.pageType) && t.pageParams.titleId === e.pageTransitionParameters.titleId && A.ZP.popNavigationHistory()
                },
                Z = function(e) {
                    return e === g.Z.DETAILS_PAGE || e === g.Z.LIVE_EVENT_DETAILS_PAGE || e === g.Z.NEW_DETAILS_PAGE
                },
                q = ["LRAK", "CRF", "NavigateToPageCommandHandler"],
                Y = (0, m.P)("NavigateToPageCommandHandler"),
                z = ((d = {})[a.COMMON_PAGES.HOME] = g.Z.HOMEPAGE, d[a.COMMON_PAGES.DETAILS] = g.Z.DETAILS_PAGE, d[a.COMMON_PAGES.MY_VIDEOS] = g.Z
                    .HOMEPAGE, d[a.COMMON_PAGES.WATCHLIST] = g.Z.HOMEPAGE, d[a.COMMON_PAGES.MY_STUFF] = g.Z.HOMEPAGE, d[a.COMMON_PAGES.KIDS] = g.Z
                    .HOMEPAGE, d[a.COMMON_PAGES.MOVIES] = g.Z.HOMEPAGE, d[a.COMMON_PAGES.ORIGINALS] = g.Z.HOMEPAGE, d[a.COMMON_PAGES.TV_SHOWS] = g.Z
                    .HOMEPAGE, d[a.COMMON_PAGES.SETTINGS] = g.Z.SETTINGS_PAGE, d[a.COMMON_PAGES.PARENTAL_CONTROLS] = g.Z.SETTINGS_PAGE, d[a
                        .COMMON_PAGES.VOICE_SETTINGS] = g.Z.SETTINGS_PAGE, d[a.COMMON_PAGES.SECOND_SCREEN_READY_TO_CAST_PAGE] = g.Z
                    .SECOND_SCREEN_READY_TO_CAST_PAGE, d),
                j = ((p = {})[a.COMMON_PAGES.HOME] = {
                    pageType: l.HOME,
                    pageId: f.HOME
                }, p[a.COMMON_PAGES.MY_VIDEOS] = {
                    pageType: l.MY_STUFF,
                    pageId: f.MY_STUFF
                }, p[a.COMMON_PAGES.WATCHLIST] = {
                    pageType: l.MY_STUFF,
                    pageId: f.MY_STUFF
                }, p[a.COMMON_PAGES.MY_STUFF] = {
                    pageType: l.MY_STUFF,
                    pageId: f.MY_STUFF
                }, p[a.COMMON_PAGES.KIDS] = {
                    pageType: l.KIDS,
                    pageId: f.KIDS
                }, p[a.COMMON_PAGES.MOVIES] = {
                    pageType: l.MOVIES,
                    pageId: f.MOVIES
                }, p[a.COMMON_PAGES.ORIGINALS] = {
                    pageType: l.ORIGINALS,
                    pageId: f.ORIGINALS
                }, p[a.COMMON_PAGES.TV_SHOWS] = {
                    pageType: l.TV,
                    pageId: f.TV
                }, p[a.COMMON_PAGES.SETTINGS] = {
                    pageType: g.Z.SETTINGS_PAGE,
                    pageId: void 0
                }, p[a.COMMON_PAGES.PARENTAL_CONTROLS] = {
                    pageType: g.Z.SETTINGS_PAGE,
                    pageId: P.At.Parental
                }, p[a.COMMON_PAGES.VOICE_SETTINGS] = {
                    pageType: g.Z.SETTINGS_PAGE,
                    pageId: P.At.Voice
                }, p[a.COMMON_PAGES.SECOND_SCREEN_READY_TO_CAST_PAGE] = {
                    pageType: g.Z.SECOND_SCREEN_READY_TO_CAST_PAGE,
                    pageId: void 0
                }, p);

            function Q() {
                return {
                    pageType: g.Z.ERROR_PAGE,
                    pageTransitionParameters: {
                        errorCode: v.Z.VOICE_COMMAND_ERROR,
                        goToHomeButtonEnabled: !0,
                        closeAppButtonEnabled: !1,
                        showErrorCode: !0
                    }
                }
            }
            var X, J = new(function() {
                    function e() {}
                    return e.prototype.execute = function(e) {
                        var t, n = e.commandId,
                            r = z[e.pageId],
                            o = e.metadata.commandSource.name,
                            a = j[e.pageId] || {};
                        if (T.c.info("".concat(Y("execute"), " Executing NavigateToPageCommand with pageId:").concat(e.pageId, ",pageType:")
                                .concat(r, ",commandId:").concat(n, ",pageTransitionParameters: ").concat(JSON.stringify(a),
                                    ",pageParameters: ").concat(JSON.stringify(e.pageParameters), ". "), q), void 0 === r) T.c.error(""
                            .concat(Y("execute"), " PageType not found for pageId: ").concat(e.pageId), q), t = Q();
                        else if (r === g.Z.DETAILS_PAGE) void 0 === e.pageParameters || void 0 === e.pageParameters.titleId ? (h.ZP.error(""
                            .concat(Y("execute"), " No titleID provided With Details Page Type"), q), t = Q()) : t = {
                            pageType: g.Z.DETAILS_PAGE,
                            pageTransitionParameters: {
                                titleId: e.pageParameters.titleId
                            }
                        };
                        else {
                            var s = function(e, t) {
                                var n = y.f.getInstance().getActiveProfile();
                                return e === g.Z.SETTINGS_PAGE ? (null == n ? void 0 : n.profileAgeGroup) === E.Le.CHILD : e === g.Z
                                    .HOMEPAGE && function(e, t) {
                                        var n = e.pageType,
                                            r = e.pageId;
                                        if ("string" != typeof n || "string" != typeof r) return !0;
                                        try {
                                            if (c.l.getInstance().isSwiftPageInTopNav(n, r)) return !1
                                        } catch (e) {
                                            if (h.ZP.error("".concat(Y("isCollectionPageBlocked"),
                                                    " GlobalNavStore initialised before voice command. Using always on items to check."
                                                    ), q), function(e, t, n) {
                                                    return (null == n ? void 0 : n.profileAgeGroup) === E.Le.CHILD ? "merch" === e &&
                                                        "kids" === t : e === l.HOME && t === f.HOME || e === l.MOVIES && t === f.HOME ||
                                                        e === l.TV && t === f.HOME
                                                }(n, r, t)) return T.c.info("".concat(Y("isCollectionPageBlocked"),
                                                " GlobalNavStore un-instantiated. Not blocking pageType:").concat(n,
                                                ", pageId:").concat(r), q), !1;
                                            T.c.info("".concat(Y("isCollectionPageBlocked"),
                                                    " GlobalNavStore un-instantiated. Skipping top nav evaluation for pageType:")
                                                .concat(n, ", pageId:").concat(r), q)
                                        }
                                        return !t || ! function(e, t) {
                                            return e === f.HOME && t === f.MY_STUFF
                                        }(n, r)
                                    }(t, n)
                            }(r, a);
                            T.c.info("".concat(Y("execute"), " Action Blocked: ").concat(s), q), t = {
                                pageType: r,
                                pageTransitionParameters: (0, i.__assign)((0, i.__assign)({}, a), e.pageParameters),
                                isActionBlocked: s
                            }
                        }
                        return H(n, t, o), Promise.resolve(!0)
                    }, e
                }()),
                $ = n(76004),
                ee = n(32729),
                te = n(25865),
                ne = n(14596);
            ! function(e) {
                e.Alexa = "Alexa", e.LG = "LG", e.CRF = "CRF"
            }(X || (X = {}));
            var re, ie = function() {
                    function e() {}
                    return e.prototype.execute = function(e) {
                        var t, n, r = e.playbackParameters,
                            i = e.metadata.commandSource.name;
                        return r.isEntitlementInfoKnown ? (t = function(e) {
                            var t, n, r = {
                                pageType: g.Z.PLAYBACK_PAGE,
                                pageTransitionParameters: {
                                    titleId: e.titleId,
                                    videoMaterialType: e.videoMaterialType,
                                    streamingType: te.S.Unknown,
                                    position: null !== (t = e.position) && void 0 !== t ? t : 0,
                                    correlationId: null === (n = e.playbackExperience) || void 0 === n ? void 0 : n.correlationId,
                                    playbackEnvelope: oe(e.playbackExperience)
                                }
                            };
                            return "LiveStreaming" != e.videoMaterialType && (r.newNavigationStackPageProperties = {
                                pageType: g.Z.DETAILS_PAGE,
                                pageTransitionParameters: {
                                    titleId: e.titleId
                                }
                            }), r
                        }(r), i === X.Alexa && $.AppEvents.log((0, ne.rj)())) : (n = r, t = {
                            pageType: g.Z.NAVIGATION_GATEWAY,
                            pageTransitionParameters: {
                                gti: n.titleId,
                                isVoiceControlled: !0,
                                navigationTrigger: ee.b.VoiceCommand
                            }
                        }), H(e.commandId, t, i), Promise.resolve(!0)
                    }, e
                }(),
                oe = function(e) {
                    if (e) return {
                        envelope: e.playbackEnvelope,
                        expiration: e.expiryTime
                    }
                },
                ae = new ie,
                se = new(function() {
                    function e() {}
                    return e.prototype.execute = function(e) {
                        var t = "".concat(w.ZP.APPLICATION_ACTIONS_DIRECTIVE, "_BACK");
                        return O.ZE.reportDataPoint(t, e.metadata.commandSource.name, 1), C.y.metric("Directives.Count", 1, {
                            reportOwner: I.R.VOICE,
                            customContext: {
                                directiveType: "Navigate_BACK"
                            }
                        }), R.W_.navigateBack(), Promise.resolve(!0)
                    }, e
                }()),
                ce = new(function() {
                    function e() {}
                    return e.prototype.execute = function(e) {
                        var t = {
                            pageType: g.Z.FIND_PAGE,
                            pageTransitionParameters: {
                                isAlexaQuery: !0,
                                initialQuery: e.query,
                                voiceQueryId: Date.now().toString()
                            }
                        };
                        return H(e.commandId, t, e.metadata.commandSource.name), Promise.resolve(!0)
                    }, e
                }()),
                ue = new(function() {
                    function e() {}
                    return e.prototype.execute = function(e) {
                        var t = e.commandId,
                            n = e.metadata.commandSource.name,
                            r = (0, i.__assign)((0, i.__assign)({}, e.voiceParameters), {
                                navigationTrigger: ee.b.VoiceCommand
                            }),
                            o = g.Z.NAVIGATION_GATEWAY;
                        return H(t, {
                            pageType: o,
                            pageTransitionParameters: r
                        }, n), Promise.resolve(!0)
                    }, e
                }()),
                le = ((re = {})[o.CommonCommands.NAVIGATE_TO_PAGE] = J, re[o.CommonCommands.START_PLAYBACK] = ae, re[o.CommonCommands
                    .NAVIGATE_BACK] = se, re[o.CommonCommands.SEARCH] = ce, re[o.CommonCommands.TRANSFORM_DIRECTIVE] = ue, re),
                de = function() {
                    var e, t;
                    try {
                        for (var n = (0, i.__values)(Object.entries(le)), r = n.next(); !r.done; r = n.next()) {
                            var o = (0, i.__read)(r.value, 2),
                                c = o[0],
                                u = o[1];
                            a.commandRouterHandlerRegistry.registerHandler(c, u)
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (t = n.return) && t.call(n)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    s.k.emit({
                        type: s.u.IS_REGISTERED
                    })
                }
        },
        13269: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getObject: function() {
                    return o
                }
            });
            var r = n(70655),
                i = n(10984);

            function o() {
                return (0, r.__awaiter)(this, void 0, void 0, (function() {
                    return (0, r.__generator)(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, i.LK.initialize()];
                            case 1:
                                return e.sent(), [2, i.LK.getInstance()]
                        }
                    }))
                }))
            }
        },
        50627: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initializeDeviceCapabilities: function() {
                    return s
                },
                initializeDeviceInformation: function() {
                    return a
                }
            });
            var r = n(70655),
                i = n(998),
                o = n(10984);

            function a() {
                return (0, r.__awaiter)(this, void 0, Promise, (function() {
                    return (0, r.__generator)(this, (function(e) {
                        return [2, o.LK.initialize()]
                    }))
                }))
            }

            function s() {
                return (0, r.__awaiter)(this, void 0, Promise, (function() {
                    return (0, r.__generator)(this, (function(e) {
                        return [2, i.s.initialize()]
                    }))
                }))
            }
        },
        55014: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                bootstrapEmp: function() {
                    return r
                }
            });
            var r = function() {}
        },
        29095: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initializeEndpointConfig: function() {
                    return o
                }
            });
            var r = n(70655),
                i = n(37310),
                o = function() {
                    return (0, r.__awaiter)(void 0, void 0, Promise, (function() {
                        return (0, r.__generator)(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, i.Fe.initialize()];
                                case 1:
                                    return e.sent(), [2]
                            }
                        }))
                    }))
                }
        },
        64880: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n(67294),
                i = n(34988),
                o = n(10984),
                a = n(21970),
                s = new Map([
                    ["AR8DE21S8PINM", a.Z.SONY_GOOGLE_TALKBACK_ERROR]
                ]),
                c = function(e) {
                    var t = o.LK.getInstance(),
                        n = s.get(t.deviceTypeId) || a.Z.GOOGLE_TALKBACK_ERROR;
                    return r.createElement(i.m, {
                        errorCode: n,
                        redirectButtonsEnabled: n !== a.Z.SONY_GOOGLE_TALKBACK_ERROR,
                        closeAppButtonEnabled: !0,
                        showErrorCode: !1,
                        closeAppButtonFocused: !0,
                        onPageLoaded: e.onPageLoaded
                    })
                },
                u = n(7103),
                l = n(90070);

            function d(e) {
                return r.createElement(u.y, {
                    key: "TalkBackErrorPage ",
                    name: "TalkBackErrorPage "
                }, r.createElement(c, {
                    onPageLoaded: l.Y
                }))
            }
        },
        16808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n(89875),
                i = n(74046),
                o = function() {
                    return (0, r.bX)()
                };

            function a() {
                return (0, r.Jt)() ? (o(), (0, i.Ai)()) : Promise.resolve()
            }
        },
        84420: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n(70655),
                i = n(16177),
                o = n(96265);

            function a() {
                return (0, r.__awaiter)(this, void 0, void 0, (function() {
                    return (0, r.__generator)(this, (function(e) {
                        return [2, (0, o.h2)().catch((function(e) {
                            i.ZP.error("Error initializing fonts: " + e, ["FontLoader"])
                        }))]
                    }))
                }))
            }
        },
        30494: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initializeStore: function() {
                    return H
                }
            });
            var r = n(10297),
                i = n(70655),
                o = n(84614),
                a = n(48898),
                s = n(59743),
                c = n(91204),
                u = n(75429),
                l = n(48837),
                d = n(38913),
                p = n(78701),
                f = n(61390),
                h = n(81839),
                m = n(89418),
                g = n(44732),
                v = n(10984),
                y = n(82283),
                E = n(31682),
                T = n(19024),
                P = n(77209),
                C = n(72978),
                I = n(18251),
                _ = n(87663),
                R = function(e) {
                    function t() {
                        var t = e.call(this) || this;
                        return t.transformName = "topnav/channelSubscription", t
                    }
                    return (0, i.__extends)(t, e), t.prototype.getHttpClient = function() {
                        return new T.P(y.Z.deviceProxyClient(), this.transformName)
                    }, t.prototype.getBaseUrl = function(e) {
                        var t = [],
                            n = (0, g.Fd)(),
                            r = (0, g.Vu)(),
                            i = (0, g.fe)(),
                            o = (0, C.A)(!0),
                            a = (0, g.Vi)();
                        t.push(["featureScheme", n]), t.push(["pageType", e.pageType]), t.push(["pageId", e.pageId]), t.push(["dynamicFeatures",
                            i
                        ]), t.push(["decorationScheme", r]), t.push(["presentationScheme", o]), t.push(["widgetScheme", a]);
                        var s = v.LK.getInstance().osLocale;
                        return s && t.push(["osLocale", s]), new E.Z("", t).buildQueryParamsOnly()
                    }, t.prototype.call = function(t) {
                        var n = {
                            headers: new P.G([], (0, _.j)(t.pageType, t.pageId))
                        };
                        return e.prototype.call.call(this, t, n)
                    }, t.prototype.getHttpMethod = function() {
                        return I.Z.GET
                    }, t
                }(n(90393).B),
                b = n(7284),
                S = n(87361),
                A = n(18671),
                O = n(74090),
                N = n(56677),
                L = n(22769),
                M = "mainnav",
                D = "channels",
                w = "lr/topnav/channelSubscription",
                k = 3600,
                F = ["subscription"],
                x = function() {
                    function e() {
                        var e, t = this;
                        this.defaultErrorResponse = {
                            id: "error",
                            items: []
                        }, this.defaultLoadingResponse = {
                            id: "loadingNavigation",
                            items: []
                        }, this.inflightRequest = new Set, this.collectionPageInvalidationEventSwiftMapping = ((e = {})[s.ZP
                            .ACQUISITION_START] = ["ownership"], e[s.ZP.WATCHLIST_TOGGLED] = ["watchlist"], e[s.ZP.DROPPED_CARD] = [
                                "listRemove"], e[s.ZP.TRANSITIONED_TO_PLAYBACK] = ["playback"], e), this.logPrefix = (0, d.P)(
                            "ChannelSubscriptionNavigationStore"), this.isValidFallbackResponse = function(e) {
                            var t;
                            return Boolean(null == e ? void 0 : e.addOnButton) || (null === (t = null == e ? void 0 : e.items) || void 0 === t ?
                                void 0 : t.length) > 0
                        }, this.fallbackCdnUrlBuilder = function(e) {
                            var t = e.targetPageId,
                                n = e.targetPageType,
                                r = e.cdnBaseUrl,
                                i = g.Fd(),
                                o = (0, g.Vi)(),
                                a = l.vQ.getInstance().locale,
                                s = u.Z.getCustomerConfig().currentTerritory,
                                c = u.Z.getCustomerConfig().videoCountryOfRecord,
                                d = U(),
                                p = [w, n, t, i, o, a, s, c, d, 1].join("/").toLowerCase(),
                                f = "".concat(r).concat(p);
                            return encodeURI(f)
                        }, this.onAuthEvent = function(e) {
                            var n = "AuthEvent-".concat(e.type);
                            e.type !== a.Kp.TOKEN_DEREGISTERED && e.type !== a.Kp.TOKEN_REGISTERED || (t.channelNavCache.invalidateAllEntryData(
                                n), t.getChannelNavigationItems(n))
                        }, this.onPageTransitionEvent = function(e) {
                            var n = e.page,
                                r = e.previousPage,
                                i = e.rustPageType;
                            if (r === p.Z.NEW_CONFIRMATION_PAGE) return t.invalidateByMetadataEvent(F, "TransitioningFromNewConfirmationPage"),
                                void t.getChannelNavigationItems("TransitioningFromNewConfirmationPage");
                            switch (n) {
                                case p.Z.CATEGORY_PAGE:
                                case p.Z.SETTINGS_PAGE:
                                case p.Z.FIND_PAGE:
                                case p.Z.HOME_PAGE:
                                case p.Z.LIVE_PAGE:
                                case p.Z.COLLECTION_PAGE:
                                case p.Z.TEST_PLAYGROUND:
                                case p.Z.DETAILS_PAGE:
                                case p.Z.SEASON_BROWSE_PAGE:
                                case p.Z.LIVE_EVENT_DETAILS_PAGE:
                                    return void t.getChannelNavigationItems("onPageTransitionEvent_JS")
                            }
                            switch (i) {
                                case p.Z.RUST_COLLECTIONS:
                                case p.Z.RUST_LIVE_TV:
                                    return void t.getChannelNavigationItems("onPageTransitionEvent_Rust")
                            }
                        }, this.onActiveProfileChange = function(e, n) {
                            n && t.getChannelNavigationItems("ActiveProfileChange")
                        }, this.onLocaleChange = function(e) {
                            var n = "".concat(e.type, "-").concat(e.locale);
                            t.channelNavCache.invalidateAllEntryData(n), t.getChannelNavigationItems(n)
                        }, this.onCollectionPageCacheInvalidationEvent = function(e) {
                            var n = t.collectionPageInvalidationEventSwiftMapping[e];
                            n && (t.invalidateByMetadataEvent(n, e), t.getChannelNavigationItems("onCollectionPageCacheInvalidationEvent"))
                        }, this.channelNavCache = new b.Z, this.listeners = new Set, ((0, m._k)() || O.Gb.getInstance()
                            .isRustCollectionsEnabled()) && this.addListeners()
                    }
                    return e.prototype.getChannelNavigationItems = function(e) {
                        this.invalidateExpiredCacheEntries();
                        var t = f.f.getInstance().getActiveProfileId() || "signedOut",
                            n = this.channelNavCache.getLastEntryForKey(t);
                        if (!(null == n ? void 0 : n.invalidationReason) && (null == n ? void 0 : n.data)) {
                            var r = Date.now() - n.metadata.cacheCreateTimeInEpoch;
                            return S.c.trace("".concat(this.logPrefix("refreshCache"), " Cached response found for ").concat(e,
                                ". cacheAgeInSeconds: ").concat(r / 1e3)), n.data
                        }
                        var i = (null == n ? void 0 : n.invalidationReason) || "noRecords";
                        return this.fetchAndCacheTransformResponse(t, "".concat(e, "::").concat(i)), this.defaultLoadingResponse
                    }, e.prototype.addListener = function(e) {
                        var t = this;
                        return this.listeners.add(e), {
                            removeListener: function() {
                                return t.listeners.delete(e)
                            }
                        }
                    }, e.prototype.fetchAndCacheTransformResponse = function(e, t) {
                        var n = this,
                            r = function(e) {
                                S.c.info("".concat(n.logPrefix("fetchAndCacheTransformResponse"), " ").concat(e))
                            };
                        if ((0, m._k)() || O.Gb.getInstance().isRustCollectionsEnabled())
                            if (this.inflightRequest.has(e)) r("".concat(e, " already inflight, aborting ").concat(t, " fetch"));
                            else {
                                this.inflightRequest.add(e), r("Fetching Channel Navigation for ".concat(e, ". Reason:").concat(t)), S.c
                                    .pageMetric.begin(A.p.COLLECTION, "Load.TopNavSubscriptionItems");
                                var i = Date.now();
                                (0, N.A)({
                                    pageType: M,
                                    pageId: D,
                                    clientEdgeRequest: function() {
                                        return (new R).call({
                                            pageId: D,
                                            pageType: M
                                        })
                                    },
                                    fallbackPageValidator: this.isValidFallbackResponse,
                                    fallbackCdnUrlBuilder: this.fallbackCdnUrlBuilder
                                }).then((function(r) {
                                    var o = n.defaultErrorResponse;
                                    r ? (0, L.T)(r) ? r.response && (o = r.response, n.logChannelNavigationResponseSummary(
                                            "resiliency", o), S.c.pageMetric.failure(A.p.COLLECTION,
                                            "Load.TopNavSubscriptionItems"), S.c.pageMetric.count(1, A.p.COLLECTION,
                                            "Load.TopNavSubscriptionItems.ResiliencyResponse")) : (o = r, n
                                            .logChannelNavigationResponseSummary("network", o), S.c.pageMetric.success(A.p
                                                .COLLECTION, "Load.TopNavSubscriptionItems")) : (S.c.pageMetric.failure(A.p
                                            .COLLECTION, "Load.TopNavSubscriptionItems"), S.c.pageMetric.count(1, A.p
                                            .COLLECTION, "Load.TopNavSubscriptionItems.InvalidResponse"), S.c.error("".concat(n
                                            .logPrefix("callTransform"), " Invalid channel response: ").concat(r))), S.c.pageMetric
                                        .networkLatency(Date.now() - i, A.p.COLLECTION, "Load.TopNavSubscriptionItems"), n
                                        .channelNavCache.createEntry(e, o, n.getCacheMetadata(o)), n.notifyListeners(o, t)
                                })).catch((function(e) {
                                    S.c.error("".concat(n.logPrefix("callTransform"), ": Caught error: ").concat(e.message)), S.c
                                        .pageMetric.failure(A.p.COLLECTION, "Load.TopNavSubscriptionItems"), n.notifyListeners(n
                                            .defaultErrorResponse, "error-".concat(t))
                                })).finally((function() {
                                    n.inflightRequest.delete(e)
                                }))
                            }
                    }, e.prototype.addListeners = function() {
                        f.f.getInstance().addStateChangeHandler(f.v.ActiveProfile, this.onActiveProfileChange), a.Ws.subscribe(this
                            .onAuthEvent), l.Sj.subscribe(this.onLocaleChange), (0, o.pD)(this.onPageTransitionEvent), c.x.subscribe(this
                                .onCollectionPageCacheInvalidationEvent)
                    }, e.prototype.invalidateByMetadataEvent = function(e, t) {
                        this.channelNavCache.invalidateByCriteria((function(t) {
                            return e.some((function(e) {
                                return !!t.metadata.cacheInvalidationEvents.find((function(t) {
                                    return t === e
                                }))
                            }))
                        }), t)
                    }, e.prototype.notifyListeners = function(e, t) {
                        var n, r;
                        S.c.info("".concat(this.logPrefix("notifyListeners"),
                            " Notifying listeners of channel navigation change. Fetch reason: ").concat(t, " Listener length: ").concat(
                            this.listeners.size));
                        try {
                            for (var o = (0, i.__values)(this.listeners), a = o.next(); !a.done; a = o.next())(0, a.value)(e)
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (r = o.return) && r.call(o)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    }, e.prototype.getCacheMetadata = function(e) {
                        var t = e.cache || {},
                            n = t.ttl,
                            r = t.eventTypes,
                            i = k;
                        "number" == typeof n ? n > 60 ? i = n : S.c.error("".concat(this.logPrefix("getCacheMetadata"), " TTL for cache was ")
                            .concat(n, " and is unreasonably low. Using default ").concat(k)) : S.c.error("".concat(this.logPrefix(
                            "getCacheMetadata"), " Unexpected ttl ").concat(n, " - returning default ").concat(k));
                        var o = 1e3 * i,
                            a = Date.now();
                        return {
                            cacheCreateTimeInEpoch: a,
                            cacheExpireTimeInEpoch: a + o,
                            cacheInvalidationEvents: r || [],
                            ttlInSeconds: i
                        }
                    }, e.prototype.invalidateExpiredCacheEntries = function() {
                        var e = Date.now();
                        this.channelNavCache.invalidateByCriteria((function(t) {
                            return t.metadata.cacheExpireTimeInEpoch < e
                        }), "ttlExpired")
                    }, e.prototype.logChannelNavigationResponseSummary = function(e, t) {
                        var n = t.items ? t.items.length : 0,
                            r = n > 0 ? t.items.map((function(e) {
                                return e.id
                            })).join() : "",
                            i = !!t.addOnButton;
                        S.c.info("".concat(this.logPrefix("ChannelResponse"), " type:").concat(e, ".#Channels:").concat(n, ".ids:").concat(r,
                            ".hasAddonButton:").concat(i))
                    }, e
                }(),
                U = function() {
                    var e;
                    switch (null === (e = f.f.getInstance().getActiveProfile()) || void 0 === e ? void 0 : e.profileAgeGroup) {
                        case h.Le.CHILD:
                            return "child";
                        case h.Le.ADULT:
                            return "adult";
                        case h.Le.TEEN:
                            return "teen";
                        default:
                            return "adult"
                    }
                },
                B = n(61481);

            function H() {
                return B.l.initialize(new x, r.ZQ.getConfig().globalNavConfig)
            }
        },
        197: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                overrideKeyCodes: function() {
                    return s
                }
            });
            var r = n(70655),
                i = n(22664),
                o = n(88280),
                a = n(16177),
                s = function() {
                    var e, t, n = o.XL.isInitialized() && o.XL.getInstance() && o.XL.getInstance().getDeviceConfiguration();
                    if (n) {
                        var s = [],
                            c = [{
                                nativeKeyCodeName: "greenButtonCode",
                                applicationKeyCode: i.UL.GREEN
                            }, {
                                nativeKeyCodeName: "blueButtonCode",
                                applicationKeyCode: i.UL.BLUE
                            }, {
                                nativeKeyCodeName: "redButtonCode",
                                applicationKeyCode: i.UL.RED
                            }, {
                                nativeKeyCodeName: "yellowButtonCode",
                                applicationKeyCode: i.UL.YELLOW
                            }, {
                                nativeKeyCodeName: "backButtonCode",
                                applicationKeyCode: i.UL.BACK
                            }, {
                                nativeKeyCodeName: "exitButtonCode",
                                applicationKeyCode: i.UL.EXIT
                            }, {
                                nativeKeyCodeName: "playPauseButtonCode",
                                applicationKeyCode: i.UL.PLAY_OR_PAUSE
                            }, {
                                nativeKeyCodeName: "pauseButtonCode",
                                applicationKeyCode: i.UL.PAUSE
                            }, {
                                nativeKeyCodeName: "rewindButtonCode",
                                applicationKeyCode: i.UL.REWIND
                            }, {
                                nativeKeyCodeName: "forwardButtonCode",
                                applicationKeyCode: i.UL.FAST_FORWARD
                            }, {
                                nativeKeyCodeName: "stopButtonCode",
                                applicationKeyCode: i.UL.STOP
                            }, {
                                nativeKeyCodeName: "upButtonCode",
                                applicationKeyCode: i.UL.NAVIGATION_UP
                            }, {
                                nativeKeyCodeName: "downButtonCode",
                                applicationKeyCode: i.UL.NAVIGATION_DOWN
                            }, {
                                nativeKeyCodeName: "leftButtonCode",
                                applicationKeyCode: i.UL.NAVIGATION_LEFT
                            }, {
                                nativeKeyCodeName: "rightButtonCode",
                                applicationKeyCode: i.UL.NAVIGATION_RIGHT
                            }, {
                                nativeKeyCodeName: "selectButtonCode",
                                applicationKeyCode: i.UL.SELECT
                            }, {
                                nativeKeyCodeName: "playButtonCode",
                                applicationKeyCode: i.UL.PLAY
                            }, {
                                nativeKeyCodeName: "escapeButtonCode",
                                applicationKeyCode: i.UL.ESCAPE
                            }, {
                                nativeKeyCodeName: "spaceButtonCode",
                                applicationKeyCode: i.UL.SPACE
                            }, {
                                nativeKeyCodeName: "replayButtonCode",
                                applicationKeyCode: i.UL.INSTANT_REPLAY
                            }, {
                                nativeKeyCodeName: "skipButtonCode",
                                applicationKeyCode: i.UL.SKIP
                            }, {
                                nativeKeyCodeName: "subtitleButtonCode",
                                applicationKeyCode: i.UL.SUBTITLE
                            }, {
                                nativeKeyCodeName: "number0ButtonCode",
                                applicationKeyCode: i.UL.NUMBER0
                            }, {
                                nativeKeyCodeName: "number1ButtonCode",
                                applicationKeyCode: i.UL.NUMBER1
                            }, {
                                nativeKeyCodeName: "number2ButtonCode",
                                applicationKeyCode: i.UL.NUMBER2
                            }, {
                                nativeKeyCodeName: "number3ButtonCode",
                                applicationKeyCode: i.UL.NUMBER3
                            }, {
                                nativeKeyCodeName: "number4ButtonCode",
                                applicationKeyCode: i.UL.NUMBER4
                            }, {
                                nativeKeyCodeName: "number5ButtonCode",
                                applicationKeyCode: i.UL.NUMBER5
                            }, {
                                nativeKeyCodeName: "number6ButtonCode",
                                applicationKeyCode: i.UL.NUMBER6
                            }, {
                                nativeKeyCodeName: "number7ButtonCode",
                                applicationKeyCode: i.UL.NUMBER7
                            }, {
                                nativeKeyCodeName: "number8ButtonCode",
                                applicationKeyCode: i.UL.NUMBER8
                            }, {
                                nativeKeyCodeName: "number9ButtonCode",
                                applicationKeyCode: i.UL.NUMBER9
                            }, {
                                nativeKeyCodeName: "pointerNoneButtonCode",
                                applicationKeyCode: i.UL.POINTER_NONE
                            }, {
                                nativeKeyCodeName: "pointerLeftButtonCode",
                                applicationKeyCode: i.UL.POINTER_LEFT
                            }, {
                                nativeKeyCodeName: "pointerRightButtonCode",
                                applicationKeyCode: i.UL.POINTER_RIGHT
                            }, {
                                nativeKeyCodeName: "pointerMiddleButtonCode",
                                applicationKeyCode: i.UL.POINTER_MIDDLE
                            }, {
                                nativeKeyCodeName: "pointerScrollupButtonCode",
                                applicationKeyCode: i.UL.POINTER_SCROLL_UP
                            }, {
                                nativeKeyCodeName: "pointerScrolldownButtonCode",
                                applicationKeyCode: i.UL.POINTER_SCROLL_DOWN
                            }];
                        try {
                            for (var u = (0, r.__values)(c), l = u.next(); !l.done; l = u.next()) {
                                var d = l.value,
                                    p = d.nativeKeyCodeName,
                                    f = d.applicationKeyCode,
                                    h = n[p];
                                "number" == typeof h && (a.ZP.info("Overriding ".concat(p, " to use native key code ").concat(h)), s.push({
                                    nativeKeyCode: h,
                                    applicationKeyCode: f
                                }))
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                l && !l.done && (t = u.return) && t.call(u)
                            } finally {
                                if (e) throw e.error
                            }
                        }(0, i.$U)(s)
                    }
                }
        },
        66192: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ivaJSIDFChunkDownloader: function() {
                    return l
                },
                logTag: function() {
                    return u
                }
            });
            var r = n(70655),
                i = n(252),
                o = n(26650),
                a = n(1293),
                s = n(46255),
                c = n(34480),
                u = {
                    reportOwner: a.R.IVS,
                    tags: ["ivaJSIDFChunkDownloader"]
                },
                l = function() {
                    return (0, r.__awaiter)(void 0, void 0, Promise, (function() {
                        return (0, r.__generator)(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return s.y.debug("Launching iva JSIDF Chunk Downloader", u), (0, c.o)() ? (s.y.info(
                                        "Requesting the IVA chunk to download.", u), [4, i.$.instance
                                        .fulfilPrecondition(o.N).catch((function(e) {
                                            s.y.metric("Ivs.Jsidf.BundleError", 1, {
                                                reportOwner: a.R.IVS
                                            }), s.y.error("Faild to fullfill the precondition due to : "
                                                .concat(e), u)
                                        }))
                                    ]) : (s.y.debug("IVA JS-IDF support is not enabled.", u), [2]);
                                case 1:
                                    return e.sent(), s.y.debug("precondition fullfilled.", u), [2]
                            }
                        }))
                    }))
                }
        },
        55110: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initializeLimitedAvailabilityAdsConfigStore: function() {
                    return i
                }
            });
            var r = n(34572),
                i = function() {
                    r.GK.initialize()
                }
        },
        97879: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initializeLocalizationConfig: function() {
                    return c
                }
            });
            var r = n(70655),
                i = n(88280),
                o = n(10984),
                a = n(4029),
                s = n(51315);

            function c() {
                return (0, r.__awaiter)(this, void 0, Promise, (function() {
                    return (0, r.__generator)(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, s.vQ.initializeWithRTL(o.LK.getInstance(), i.XL.getInstance(), a.default)];
                            case 1:
                                return e.sent(), [2]
                        }
                    }))
                }))
            }
        },
        85898: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clickstreamMetadataMiddleware: function() {
                    return u
                }
            });
            var r = n(70655),
                i = n(52708),
                o = n(78701),
                a = n(44707);

            function s(e) {
                switch (e) {
                    case a.x.Episode:
                    case a.x.Season:
                        return o.Z.SEASON_BROWSE_PAGE;
                    case a.x.Movie:
                        return o.Z.DETAILS_PAGE;
                    case a.x.Live:
                        return o.Z.LIVE_EVENT_DETAILS_PAGE;
                    default:
                        return null
                }
            }

            function c(e, t) {
                switch (e) {
                    case a.x.Episode:
                    case a.x.Season:
                        return t ? "dp_tv" : "more_eps";
                    case a.x.Movie:
                        return "dp_mv";
                    case a.x.Live:
                        return "dp_le";
                    default:
                        return null
                }
            }
            var u = function(e) {
                return function(t) {
                    return function(n) {
                        return function(e, t) {
                            var n = (0, i.s)(),
                                o = (0, i.w)(),
                                u = t.details;
                            (function(e, t, n) {
                                return e.type && (t[e.type] || e.meta && n[e.type] && e.meta.metrics && e.meta.metrics
                                    .detailsPageClickstreamMiddlewareHints)
                            })(e, n, o) && function(e, t) {
                                if (e && e.titleInformation && e.titleInformation.titleDetails) {
                                    var n = e.titleInformation.titleDetails.titleType,
                                        i = e.titleInformation.titleId,
                                        o = (0, r.__assign)({
                                                pageTypeId: i,
                                                pageTypeIdSource: "ASIN",
                                                currentPage: s(n)
                                            }, t.meta && t.meta.metrics && t.meta.metrics.clickstreamPayload ? t.meta.metrics
                                            .clickstreamPayload : void 0);
                                    ! function(e, t, n) {
                                        if (e.meta && e.meta.metrics && e.meta.metrics.detailsPageClickstreamMiddlewareHints) {
                                            var r = e.meta.metrics.detailsPageClickstreamMiddlewareHints;
                                            if (r.shouldAddRefmarkerContentTypePrefix) {
                                                var i = c(t, r.shouldUseNewContentTypeSubstrings);
                                                i && (n.refMarker = i + "_" + n.refMarker)
                                            }
                                            if (r.shouldAddRefmarkerContentTypeSuffix) {
                                                var o = c(t, r.shouldUseNewContentTypeSubstrings);
                                                o && (n.refMarker = n.refMarker + "_" + o)
                                            }
                                            r.shouldSetPageTypeBasedOnContentType && (n.pageType = function(e) {
                                                switch (e) {
                                                    case a.x.Episode:
                                                    case a.x.Season:
                                                        return "Browse";
                                                    case a.x.Movie:
                                                    case a.x.Live:
                                                        return "Detail";
                                                    default:
                                                        return null
                                                }
                                            }(t))
                                        }
                                    }(t, n, o), t.meta = (0, r.__assign)((0, r.__assign)({}, t.meta), {
                                        metrics: (0, r.__assign)((0, r.__assign)({}, t.meta && t.meta.metrics ? t.meta
                                            .metrics : void 0), {
                                            clickstreamPayload: o
                                        })
                                    })
                                }
                            }(u, e)
                        }(n, e.getState()), t(n)
                    }
                }
            }
        },
        52708: function(e, t, n) {
            "use strict";
            n.d(t, {
                s: function() {
                    return c
                },
                w: function() {
                    return s
                }
            });
            var r = n(70655),
                i = n(90148),
                o = n(35286),
                a = null,
                s = function() {
                    return (null === a || (0, i.QS)()) && (a = u((0, i.oM)())), a
                },
                c = function() {
                    return u(o.Z)
                };

            function u(e) {
                var t, n, i, o, a, s, c, u, d, p, f, h, m, g, v = {};
                try {
                    for (var y = (0, r.__values)(e), E = y.next(); !E.done; E = y.next()) {
                        var T = E.value;
                        if ("actionType" in T && l(T.actionType, v, T), "actionTypes" in T) try {
                            for (var P = (i = void 0, (0, r.__values)(T.actionTypes)), C = P.next(); !C.done; C = P.next()) l(C.value, v, T)
                        } catch (e) {
                            i = {
                                error: e
                            }
                        } finally {
                            try {
                                C && !C.done && (o = P.return) && o.call(P)
                            } finally {
                                if (i) throw i.error
                            }
                        }
                        if ("startActionTypes" in T) try {
                            for (var I = (a = void 0, (0, r.__values)(T.startActionTypes)), _ = I.next(); !_.done; _ = I.next()) l(_.value, v,
                                T)
                        } catch (e) {
                            a = {
                                error: e
                            }
                        } finally {
                            try {
                                _ && !_.done && (s = I.return) && s.call(I)
                            } finally {
                                if (a) throw a.error
                            }
                        }
                        if ("updateActionTypes" in T) try {
                            for (var R = (c = void 0, (0, r.__values)(T.updateActionTypes)), b = R.next(); !b.done; b = R.next()) l(b.value, v,
                                T)
                        } catch (e) {
                            c = {
                                error: e
                            }
                        } finally {
                            try {
                                b && !b.done && (u = R.return) && u.call(R)
                            } finally {
                                if (c) throw c.error
                            }
                        }
                        if ("countActionTypes" in T) try {
                            for (var S = (d = void 0, (0, r.__values)(T.countActionTypes)), A = S.next(); !A.done; A = S.next()) l(A.value, v,
                                T)
                        } catch (e) {
                            d = {
                                error: e
                            }
                        } finally {
                            try {
                                A && !A.done && (p = S.return) && p.call(S)
                            } finally {
                                if (d) throw d.error
                            }
                        }
                        if ("stopActionTypes" in T) try {
                            for (var O = (f = void 0, (0, r.__values)(T.stopActionTypes)), N = O.next(); !N.done; N = O.next()) l(N.value, v, T)
                        } catch (e) {
                            f = {
                                error: e
                            }
                        } finally {
                            try {
                                N && !N.done && (h = O.return) && h.call(O)
                            } finally {
                                if (f) throw f.error
                            }
                        }
                        if ("clearActionTypes" in T) try {
                            for (var L = (m = void 0, (0, r.__values)(T.clearActionTypes)), M = L.next(); !M.done; M = L.next()) l(M.value, v,
                                T)
                        } catch (e) {
                            m = {
                                error: e
                            }
                        } finally {
                            try {
                                M && !M.done && (g = L.return) && g.call(L)
                            } finally {
                                if (m) throw m.error
                            }
                        }
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        E && !E.done && (n = y.return) && n.call(y)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return v
            }

            function l(e, t, n) {
                void 0 === t[e] && (t[e] = []), t[e].push(n)
            }
        },
        67720: function(e, t, n) {
            "use strict";

            function r() {}
            n.r(t), n.d(t, {
                initializeMultiDevicesSingleSignOn: function() {
                    return r
                }
            })
        },
        86646: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n(70655),
                i = n(3444),
                o = n(10984),
                a = n(92017),
                s = n(85909),
                c = n(25770),
                u = "AFOQV1TK6EU6O",
                l = "wasmAnalysisWeblabTreatment",
                d = "wasmAnalysisWeblabShouldTrigger";

            function p() {
                return (0, r.__awaiter)(this, void 0, void 0, (function() {
                    var e, t, n;
                    return (0, r.__generator)(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return o.LK.getInstance().deviceTypeId !== u ? [3, 7] : (e = c.L.WASM_ANALYSIS_PS4, t = a.b
                                    .getInstance().getFeatureTreatmentNoTrigger(e), [4, f()]);
                            case 1:
                                return (n = r.sent()) ? n.treatment !== t ? [3, 2] : (a.b.getInstance()
                                    .getFeatureTreatmentNoTrigger(c.L.WASM_ANALYSIS_GUARD_PS4) == s.M.T1 && n
                                    .shouldTrigger && a.b.getInstance().getFeatureTreatment(e), [3, 4]) : [3, 5];
                            case 2:
                                return [4, h(t)];
                            case 3:
                                r.sent(), r.label = 4;
                            case 4:
                                return [3, 7];
                            case 5:
                                return [4, h(t)];
                            case 6:
                                r.sent(), r.label = 7;
                            case 7:
                                return [2]
                        }
                    }))
                }))
            }

            function f() {
                return (0, r.__awaiter)(this, void 0, Promise, (function() {
                    var e, t;
                    return (0, r.__generator)(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, i.H.getItem(l)];
                            case 1:
                                return e = n.sent(), [4, i.H.getItem(d)];
                            case 2:
                                return t = n.sent(), e && t ? [2, {
                                    treatment: "T1" === e ? s.M.T1 : s.M.C,
                                    shouldTrigger: "1" === t
                                }] : [2, null]
                        }
                    }))
                }))
            }

            function h(e) {
                return (0, r.__awaiter)(this, void 0, void 0, (function() {
                    return (0, r.__generator)(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, i.H.setItem(l, e === s.M.T1 ? "T1" : "C")];
                            case 1:
                                return t.sent(), [4, i.H.setItem(d, "0")];
                            case 2:
                                return t.sent(), [2]
                        }
                    }))
                }))
            }
        },
        61071: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var r, i = n(70655),
                o = n(67294),
                a = n(16177),
                s = n(38913),
                c = n(8019),
                u = n(45955),
                l = ["CapCom", "NavigationGatewayContainer", "NavigationGatewayEvents"],
                d = (0, s.P)("NavigationGatewayEvents");
            ! function(e) {
                e[e.NavigationGatewayEntered = 0] = "NavigationGatewayEntered", e[e.NavigationGatewayExiting = 1] = "NavigationGatewayExiting"
            }(r || (r = {}));
            var p = new(function() {
                    function e() {
                        var e;
                        this.callbacks = [], this.eventToCallbacks = ((e = {})[r.NavigationGatewayEntered] = new Set, e[r
                            .NavigationGatewayExiting] = new Set, e)
                    }
                    return e.prototype.registerCallback = function(e, t) {
                        var n;
                        do {
                            n = Math.floor(1e6 * Math.random())
                        } while (void 0 !== this.callbacks[n]);
                        return this.callbacks[n] = {
                            event: e,
                            callback: t
                        }, this.eventToCallbacks[e].add(n), n
                    }, e.prototype.deregisterCallback = function(e) {
                        var t = this.callbacks[e];
                        void 0 !== t && (delete this.callbacks[e], this.eventToCallbacks[t.event].delete(e))
                    }, e.prototype.activate = function(e) {
                        return (0, i.__awaiter)(this, void 0, void 0, (function() {
                            var t, n, r, o, s, c, p, f;
                            return (0, i.__generator)(this, (function(h) {
                                switch (h.label) {
                                    case 0:
                                        t = [], n = function(e) {
                                            var n = (0, r.callbacks[e].callback)();
                                            if (n instanceof Promise) {
                                                var i = (0, u.n)(n, 1e4).catch((function(t) {
                                                    a.ZP.warn("".concat(d("activate"), " Callback ")
                                                        .concat(e,
                                                            " rejected with error message e: ")
                                                        .concat(t.message), l, void 0, t
                                                        .message, t.stack)
                                                }));
                                                t.push(i)
                                            }
                                        }, r = this;
                                        try {
                                            for (o = (0, i.__values)(this.eventToCallbacks[e]), s = o.next(); !s
                                                .done; s = o.next()) c = s.value, n(c)
                                        } catch (e) {
                                            p = {
                                                error: e
                                            }
                                        } finally {
                                            try {
                                                s && !s.done && (f = o.return) && f.call(o)
                                            } finally {
                                                if (p) throw p.error
                                            }
                                        }
                                        return [4, Promise.all(t)];
                                    case 1:
                                        return h.sent(), [2]
                                }
                            }))
                        }))
                    }, e
                }()),
                f = n(6419),
                h = n(74702),
                m = n(32729),
                g = n(21970),
                v = n(32841),
                y = n(5274),
                E = n(67747),
                T = n(11431),
                P = (0, s.P)("NavigationGatewayContainer"),
                C = ["CapCom", "NavigationGatewayContainer"],
                I = function(e) {
                    c.ZE.reportDataPoint("NavigationGateway", "NavigationGatewayContainer", e)
                },
                _ = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return (0, i.__extends)(t, e), t.prototype.componentDidMount = function() {
                        var e, t = this;
                        p.activate(r.NavigationGatewayEntered).then((function() {
                            var e;
                            return e = t.props.navigationTrigger === m.b.DeepLink ? f.XP(t.props) : t.props.navigationTrigger === m
                                .b.VoiceCommand ? y.ZW(t.props) : Promise.reject(new Error("Not implemented")), (0, u.n)(e, 3e4,
                                    "NavigationGatewayContainer#componentDidMount navigationPromise")
                        })).then((function(t) {
                            return e = t, p.activate(r.NavigationGatewayExiting)
                        })).then((function() {
                            I(1)
                        })).catch((function(n) {
                            a.ZP.error("".concat(P("componentDidMount"), " Navigation failure OR timeout (").concat(3e4, "ms)"), C,
                                void 0, n.message, n.stack);
                            var r = g.Z.GENERIC_ERROR;
                            t.props.navigationTrigger === m.b.DeepLink && (r = g.Z.DEEP_LINK_ERROR), e = new h.Z(r, n), I(0)
                        })).then((function() {
                            e.navigate()
                        }))
                    }, t.prototype.render = function() {
                        return o.createElement(T.G7, {
                            style: R.root
                        }, o.createElement(v.U, {
                            size: "large"
                        }))
                    }, t
                }(o.PureComponent),
                R = T.mM.create({
                    root: {
                        width: 1920,
                        height: 1080,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: E.i.DEEP_BLUE
                    }
                }),
                b = n(7103);

            function S(e) {
                var t = e.navigationState;
                return o.createElement(b.y, {
                    key: "NavigationGatewayContainer",
                    name: "NavigationGatewayContainer"
                }, o.createElement(_, (0, i.__assign)({}, t)))
            }
        },
        22891: function(e, t, n) {
            "use strict";
            n.d(t, {
                f: function() {
                    return c
                }
            });
            var r = n(70655),
                i = n(46255),
                o = n(1293),
                a = n(10297),
                s = n(38913),
                c = function() {
                    function e(e, t, n, i) {
                        var o = this;
                        void 0 === i && (i = !0), this.pollingInterval = 0, this.reportOwner = n, this.pollerName = "".concat(e.charAt(0)
                            .toUpperCase()).concat(e.slice(1), "Poller"), this.currentPollingIntervalMs = t, this.logPrefix = (0, s.P)(this
                            .pollerName), this.acmChangeSubscription = a.ZQ.addPartialConfigChangeListener((function(e) {
                            return (0, r.__awaiter)(o, void 0, void 0, (function() {
                                return (0, r.__generator)(this, (function(t) {
                                    return [2, this.updateConfig(e)]
                                }))
                            }))
                        }), e), i && this.startConfigRefreshInterval()
                    }
                    return e.createInstance = function() {
                        throw new Error("createInstance method must be implemented by subclass")
                    }, e.initialize = function() {
                        return this.instance ? (i.y.error("".concat((0, s.P)(this.name)("initialize"), " Trying to initialize ").concat(this
                            .name, ", but it was already initialized"), {
                            reportOwner: o.R.TERMINATION,
                            tags: [this.name]
                        }), this.instance) : (i.y.info("".concat((0, s.P)(this.name)("initialize"), " ").concat(this.name,
                        " initializing"), {
                            reportOwner: o.R.TERMINATION,
                            tags: [this.name]
                        }), this.instance = this.createInstance(), this.instance)
                    }, e.getInstance = function() {
                        return this.instance ? this.instance : this.initialize()
                    }, e.destroy = function() {
                        var e;
                        null === (e = this.instance) || void 0 === e || e.destroy(), this.instance = void 0
                    }, e.prototype.unsubscribeConfigChangeListener = function() {
                        var e;
                        null === (e = this.acmChangeSubscription) || void 0 === e || e.removeListener(), this.acmChangeSubscription = void 0
                    }, e.prototype.destroy = function() {
                        this.clearConfigRefreshInterval(), this.unsubscribeConfigChangeListener()
                    }, e.prototype.loadConfigAndReturnSuccess = function(e, t) {
                        var n = this;
                        return a.ZQ.loadConfig(e, t).then((function() {
                            return !0
                        })).catch((function(e) {
                            return i.y.error("".concat(n.logPrefix("pollConfig"), " Failed polling config with error ").concat(e
                                .name), {
                                reportOwner: n.reportOwner,
                                tags: [n.pollerName]
                            }), !1
                        }))
                    }, e.prototype.startConfigRefreshInterval = function() {
                        var e = this;
                        this.pollingInterval || (i.y.info("".concat(this.logPrefix("startConfigRefreshInterval"),
                            " Start config polling interval"), {
                            reportOwner: this.reportOwner,
                            tags: [this.pollerName]
                        }), this.pollingInterval = setInterval((function() {
                            return e.pollConfig()
                        }), this.currentPollingIntervalMs))
                    }, e.prototype.clearConfigRefreshInterval = function() {
                        this.pollingInterval && (i.y.info("".concat(this.logPrefix("clearConfigRefreshInterval"),
                            " Clear config polling interval"), {
                            reportOwner: this.reportOwner,
                            tags: [this.pollerName]
                        }), clearInterval(this.pollingInterval), this.pollingInterval = 0)
                    }, e.prototype.setPollingActive = function(e) {
                        this.setPollingActiveWithIntervalDurationChanged(e, !1)
                    }, e.prototype.setPollingActiveWithIntervalDuration = function(e, t) {
                        var n = this.currentPollingIntervalMs !== t;
                        n && (i.y.info("".concat(this.logPrefix("updatePollingInterval"), " Updating polling interval from ").concat(this
                            .currentPollingIntervalMs, "ms to ").concat(t, "ms"), {
                            reportOwner: this.reportOwner,
                            tags: [this.pollerName]
                        }), this.currentPollingIntervalMs = t), this.setPollingActiveWithIntervalDurationChanged(e, n)
                    }, e.prototype.setPollingActiveWithIntervalDurationChanged = function(e, t) {
                        e && !t || this.clearConfigRefreshInterval(), e && (t || i.y.info("".concat(this.logPrefix("setPollingActive"),
                            " Set polling active: ").concat(e), {
                            reportOwner: this.reportOwner,
                            tags: [this.pollerName]
                        }), this.startConfigRefreshInterval())
                    }, e.prototype.logOnFailedUpdate = function(e) {
                        i.y.warn("".concat(this.logPrefix("updateConfig"), " invalid ACM configuration: ").concat(JSON.stringify(e)), {
                            reportOwner: this.reportOwner,
                            tags: [this.pollerName]
                        })
                    }, e
                }()
        },
        93253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ACM_DCTR_CONFIG_ID: function() {
                    return f
                },
                DCTR_CONFIG_LOAD_OPTIONS: function() {
                    return h
                },
                DCTR_CONFIG_POLLING_INTERVAL: function() {
                    return m
                },
                DctrCohortConfigPoller: function() {
                    return g
                },
                initializeDctrCohortConfigPoller: function() {
                    return v
                }
            });
            var r = n(70655),
                i = n(3821),
                o = n(1293),
                a = n(75429),
                s = n(22130),
                c = n(41833),
                u = n(86560),
                l = n(22891),
                d = n(70706),
                p = n(43575),
                f = "dctrCohortConfig",
                h = {
                    partialConfigName: f,
                    isPlainTextClient: !1,
                    retryOptions: {
                        metricPivots: [f],
                        backoffOptions: {
                            maxAttempts: 6,
                            exponentialFactor: 2,
                            initialIntervalMs: 50,
                            randomizationFactor: 1e3,
                            statusCodeBasedRetryBehaviorDefinition: p.s.makeDefaultBehavior().withCode(421, !0).withCode(429, !0).withRange(500,
                                599, !0)
                        }
                    },
                    shouldRejectOnFailedRequest: !0
                },
                m = 18e5,
                g = function(e) {
                    function t() {
                        var t = this,
                            n = !!a.Z.getConfigVersion();
                        return t = e.call(this, f, m, o.R.TERMINATION, n) || this, s.w.subscribe((function(e) {
                            e.type === s.r.POLL_COHORT_CONFIG && t.pollConfig()
                        })), t
                    }
                    return (0, r.__extends)(t, e), t.createInstance = function() {
                        return new t
                    }, t.prototype.updateConfig = function(e) {
                        c.C.updateConfiguration(u.le.DCTR_COHORT_FROM_POLL, e)
                    }, t.prototype.pollConfig = function() {
                        var e, t, n, r = {
                                CohortId: null !== (t = null === (e = c.C.getConfig().cohort) || void 0 === e ? void 0 : e.id) && void 0 !== t ?
                                    t : null,
                                TestGroupId: null !== (n = c.C.getConfig().testGroupId) && void 0 !== n ? n : null,
                                DctrOperatingMode: c.C.operatingMode,
                                DctrConfigType: u.le.DCTR_COHORT_FROM_POLL
                            },
                            o = new i.G9;
                        o.start(), this.loadConfigAndReturnSuccess(h).then((function(e) {
                            d.J.getInstance().reportDctrConfigPollingMetrics(r, o.measureAndReset(), e)
                        }))
                    }, t
                }(l.f),
                v = function() {
                    g.initialize()
                }
        },
        82655: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ACM_DCTR_ENDPOINT_CONFIG_ID: function() {
                    return v
                },
                DCTR_ENDPOINT_CONFIG_LOAD_OPTIONS: function() {
                    return y
                },
                DctrEndpointConfigPoller: function() {
                    return T
                },
                initializeDctrEndpointConfigPoller: function() {
                    return P
                }
            });
            var r = n(70655),
                i = n(3821),
                o = n(1293),
                a = n(46255),
                s = n(14382),
                c = n(14213),
                u = n(82283),
                l = n(22130),
                d = n(41833),
                p = n(16179),
                f = n(86560),
                h = n(22891),
                m = n(70706),
                g = n(43575),
                v = "dctrEndpointConfig",
                y = {
                    partialConfigName: v,
                    isPlainTextClient: !0,
                    retryOptions: {
                        metricPivots: [v],
                        backoffOptions: {
                            maxAttempts: 5,
                            exponentialFactor: 2,
                            initialIntervalMs: 50,
                            randomizationFactor: 1e3,
                            statusCodeBasedRetryBehaviorDefinition: g.s.makeDefaultBehavior().withCode(421, !0).withCode(429, !0).withRange(500,
                                599, !0)
                        }
                    },
                    shouldRejectOnFailedRequest: !0,
                    shouldHandleEdgeCachedResponse: !0
                },
                E = (0, r.__spreadArray)([l.r.OPERATING_MODE_CHANGED, l.r.DCTR_POLL_INTERVAL_CHANGED], (0, r.__read)(Object.values(s.Y5)), !1),
                T = function(e) {
                    function t() {
                        var n = e.call(this, v, 1e3 * d.C.getPollingConfigs().dctrEndpoint.intervalSeconds, o.R.TERMINATION, d.C.operatingMode === p
                            .zp.ON && d.C.getPollingConfigs().dctrEndpoint.enabled) || this;
                        return n.dctrEndpointConfigClient = u.Z.createDctrEndpointConfigClient(), s.IT.subscribe(t.processLifeCycleEvent), l.w
                            .subscribe(t.processLifeCycleEvent), n
                    }
                    return (0, r.__extends)(t, e), t.createInstance = function() {
                        return new t
                    }, t.prototype.updateConfig = function(e) {
                        d.C.updatePolledEndpoints(e)
                    }, t.prototype.pollConfig = function() {
                        var e, t, n, r = c.Z.isInBackground(),
                            o = d.C.operatingMode,
                            s = d.C.getPollingConfigs().dctrEndpoint.enabled;
                        if (r || o !== p.zp.ON || !s) {
                            var u = this.logPrefix("pollConfig");
                            return a.y.warn("".concat(u, " attempted to poll in background (").concat(r, ") or while DCTR is not ON (").concat(
                                o, ") or while polling is explicitly disabled: (enabled=").concat(s, ")."), {
                                reportOwner: this.reportOwner,
                                tags: [this.pollerName]
                            }), void this.setPollingActive(!1)
                        }
                        var l = {
                                CohortId: null !== (t = null === (e = d.C.getConfig().cohort) || void 0 === e ? void 0 : e.id) && void 0 !== t ?
                                    t : null,
                                TestGroupId: null !== (n = d.C.getConfig().testGroupId) && void 0 !== n ? n : null,
                                DctrOperatingMode: d.C.operatingMode,
                                DctrConfigType: f.le.DCTR_ENDPOINT_FROM_POLL
                            },
                            h = new i.G9;
                        h.start(), this.loadConfigAndReturnSuccess(y, this.dctrEndpointConfigClient).then((function(e) {
                            m.J.getInstance().reportDctrConfigPollingMetrics(l, h.measureAndReset(), e)
                        }))
                    }, t.prototype.destroy = function() {
                        e.prototype.destroy.call(this), s.IT.unsubscribe(t.processLifeCycleEvent), l.w.unsubscribe(t.processLifeCycleEvent)
                    }, t.processLifeCycleEvent = function(e) {
                        if (-1 !== E.indexOf(e.type)) {
                            var n = e.type === s.Y5.ENTER_FOREGROUND,
                                r = e.type === s.Y5.ENTER_BACKGROUND || e.type === s.Y5.ENTER_BACKGROUND_VISIBLE || c.Z.isInBackground(),
                                i = d.C.getPollingConfigs().dctrEndpoint,
                                o = (n || !r) && d.C.operatingMode === p.zp.ON && i.enabled;
                            t.getInstance().setPollingActiveWithIntervalDuration(o, 1e3 * i.intervalSeconds)
                        }
                    }, t
                }(h.f),
                P = function() {
                    T.initialize()
                }
        },
        92143: function(e, t, n) {
            "use strict";
            var r, i, o, a;
            n.r(t), n.d(t, {
                    NI_DEFAULT_INACTIVITY_DELAY_MS: function() {
                        return j
                    },
                    initialise: function() {
                        return Q
                    }
                }),
                function(e) {
                    e.Foreground = "Foreground", e.Background = "Background"
                }(r || (r = {})),
                function(e) {
                    e.http = "http", e.https = "https"
                }(i || (i = {})),
                function(e) {
                    e.HTTP = "HTTP"
                }(o || (o = {})),
                function(e) {
                    e.GET = "GET"
                }(a || (a = {}));
            var s = n(36904),
                c = n(16177),
                u = n(70655),
                l = n(46255),
                d = n(1293),
                p = n(47169),
                f = n(10984),
                h = n(37310),
                m = n(45503),
                g = n(41609),
                v = n.n(g),
                y = n(69983),
                E = n.n(y),
                T = n(3821),
                P = n(20065),
                C = n(21242),
                I = n(12752),
                _ = n(45955),
                R = n(33578),
                b = "networkInspectorError",
                S = "NI:",
                A = 10,
                O = n(42604);

            function N(e) {
                if (void 0 !== e) try {
                    var t = (0, O.Qc)(e);
                    return 1e3 * (0, O.my)(t)
                } catch (e) {
                    return
                }
            }

            function L(e) {
                var t, n = (0, R.Y)(),
                    r = new T.G9;
                r.start();
                try {
                    t = (0, P.h)(function(e, t) {
                        var n = e.httpTargetProtocol + "://" + e.targetDomain.toLowerCase() + "/" + e.httpTargetPath,
                            r = n.indexOf("?") > 0 ? "&" : "?";
                        return n + r + "attemptId=" + t
                    }(e, n), function(e) {
                        var t, n = Object.entries(null !== (t = e.httpHeaders) && void 0 !== t ? t : {});
                        return n.find((function(e) {
                            var t = (0, u.__read)(e, 2),
                                n = t[0],
                                r = t[1];
                            return "pragma" == n.toLowerCase() && r.split(C.P.HEADER_SEPARATOR).find((function(e) {
                                return "server-timing" == e.toLowerCase()
                            }))
                        })) || n.push(["Pragma", "server-timing"]), {
                            method: e.httpTargetMethod,
                            headers: new C.P(n)
                        }
                    }(e), {
                        skipDecodingResponseBody: !0,
                        skipEncodingRequestBody: !0
                    })
                } catch (e) {
                    return Promise.reject(e)
                }
                return new Promise((function(i) {
                    var o = N(e.overallTimeout);
                    (0, _.n)(t, o, "NetworkInspectorFetch").then((function(t) {
                        var o, a, s;
                        t ? i({
                            id: n,
                            tag: e.tag,
                            status: t.status,
                            outcome: t.ok ? "SUCCESS" : "ERROR",
                            latency: r.measureAndReset(),
                            requestId: null === (a = null === (o = null == t ? void 0 : t.headers) || void 0 === o ?
                                void 0 : o.get("x-amzn-requestid")) || void 0 === a ? void 0 : a.toString(),
                            cfServerTimings: (0, I.x)(null === (s = t.headers) || void 0 === s ? void 0 : s.get(
                                "Server-Timing"))
                        }) : (c.ZP.error("".concat(S, " invalidResponse ").concat(t), [b, e.tag]), i({
                            id: n,
                            tag: e.tag,
                            message: "UnknownResponse",
                            outcome: "ERROR",
                            latency: r.measureAndReset()
                        }))
                    })).catch((function(t) {
                        i({
                            id: n,
                            tag: e.tag,
                            message: t.message,
                            outcome: "ERROR",
                            latency: r.measureAndReset()
                        })
                    }))
                }))
            }
            var M = n(10297),
                D = n(10833),
                w = n(60628),
                k = n(1469),
                F = n.n(k),
                x = n(81763),
                U = n.n(x),
                B = n(47037),
                H = n.n(B),
                G = 100,
                W = 20,
                V = 1e3;

            function K(e) {
                return H()(e) && !v()(e)
            }

            function Z(e) {
                return !!e && K(e.warrantId) && (void 0 === (n = e.maxRuns) || U()(n) && n > 0 && n < G) && !!(t = e.interactions) && F()(t) && t
                    .length > 0 && t.length <= A && t.every(q);
                var t, n
            }

            function q(e) {
                return !!e && K(e.tag) && !!(t = e.targetType) && H()(t) && t in o && K(e.targetDomain) && function(e) {
                    return !!e && H()(e) && e in i
                }(e.httpTargetProtocol) && K(e.httpTargetPath) && function(e) {
                    return !!e && H()(e) && e in a
                }(e.httpTargetMethod) && function(e) {
                    if (! function(e) {
                            return void 0 === e || K(e)
                        }(e)) return !1;
                    var t = N(e);
                    return void 0 !== t && t >= 1
                }(e.overallTimeout);
                var t
            }

            function Y() {
                var e;
                if (function() {
                        try {
                            return D.DE.getInstance().isClientResiliencySwitchEnabled(w.R.DISABLE_NETWORK_INSPECTOR)
                        } catch (e) {
                            c.ZP.error("".concat(S, " could not get state of resiliency switches, disabling NI ").concat(e), [b])
                        }
                        return !0
                    }()) c.ZP.info("".concat(S, " disabled"));
                else {
                    var t = null === (e = M.ZQ.getConfig()) || void 0 === e ? void 0 : e.networkInspectorConfig;
                    if (t) {
                        if (function(e) {
                                return !!e && !!(n = e.executionInInactiveState) && H()(n) && n in r && U()(e
                                    .periodOfInactivityBeforeExecutionMs) && e.periodOfInactivityBeforeExecutionMs >= V && !!(t = e
                                    .searchWarrants) && F()(t) && t.length >= 0 && t.length < W && t.every(Z);
                                var t, n
                            }(t)) return t;
                        c.ZP.info("".concat(S, " config defined is invalid"))
                    } else c.ZP.info("".concat(S, " no config defined"))
                }
            }
            var z = function() {
                    function e() {
                        this.executedSearchWarrant = new Map
                    }
                    return e.prototype.setDeregisterFromActivityTrackerCallback = function(e) {
                        this.deregisterFromActivityTracker = e
                    }, e.prototype.setRegisterInActivityTrackerCallback = function(e) {
                        this.registerInActivityTracker = e
                    }, e.prototype.execute = function() {
                        var e = this;
                        return this.selectAndExecuteSearchWarrants().catch((function(e) {
                            c.ZP.error("".concat(S, " caught exception while selecting and executing search warrants ").concat(e), [
                                b
                            ])
                        })).finally((function() {
                            e.deregisterFromActivityTracker(), e.hasExecutedAllSearchWarrant() || setTimeout(e
                                .registerInActivityTracker, 36e5)
                        }))
                    }, e.prototype.selectAndExecuteSearchWarrants = function() {
                        var e;
                        return (0, u.__awaiter)(this, void 0, Promise, (function() {
                            var t, n, r, i, o, a, s, c, l, d, p, f, h, m;
                            return (0, u.__generator)(this, (function(g) {
                                switch (g.label) {
                                    case 0:
                                        t = this.selectSearchWarrantsToBeExecuted(), g.label = 1;
                                    case 1:
                                        g.trys.push([1, 6, 7, 8]), n = (0, u.__values)(t), r = n.next(), g.label = 2;
                                    case 2:
                                        if (r.done) return [3, 5];
                                        i = r.value, o = null !== (e = this.executedSearchWarrant.get(i.warrantId)) &&
                                            void 0 !== e ? e : 0, this.executedSearchWarrant.set(i.warrantId, o + 1),
                                            a = [];
                                        try {
                                            for (h = void 0, s = (0, u.__values)(E()(i.interactions)), c = s.next(); !c
                                                .done; c = s.next()) l = c.value, a.push(L(l))
                                        } catch (e) {
                                            h = {
                                                error: e
                                            }
                                        } finally {
                                            try {
                                                c && !c.done && (m = s.return) && m.call(s)
                                            } finally {
                                                if (h) throw h.error
                                            }
                                        }
                                        return [4, this.logSearchWarrantResult(i, a)];
                                    case 3:
                                        g.sent(), g.label = 4;
                                    case 4:
                                        return r = n.next(), [3, 2];
                                    case 5:
                                        return [3, 8];
                                    case 6:
                                        return d = g.sent(), p = {
                                            error: d
                                        }, [3, 8];
                                    case 7:
                                        try {
                                            r && !r.done && (f = n.return) && f.call(n)
                                        } finally {
                                            if (p) throw p.error
                                        }
                                        return [7];
                                    case 8:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.selectSearchWarrantsToBeExecuted = function() {
                        var e, t;
                        try {
                            var n = Y();
                            if (n) {
                                var r = E()(this.filterExecutableSearchWarrant(n.searchWarrants)),
                                    i = [],
                                    o = 0;
                                try {
                                    for (var a = (0, u.__values)(r), s = a.next(); !s.done; s = a.next()) {
                                        var l = s.value;
                                        o + l.interactions.length <= A && (o += l.interactions.length, i.push(l))
                                    }
                                } catch (t) {
                                    e = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        s && !s.done && (t = a.return) && t.call(a)
                                    } finally {
                                        if (e) throw e.error
                                    }
                                }
                                return i
                            }
                        } catch (e) {
                            c.ZP.error("".concat(S, " Error while getting search warrant ").concat(e), [b])
                        }
                        return []
                    }, e.prototype.logSearchWarrantResult = function(e, t) {
                        var n = this;
                        return new Promise((function(r) {
                            var i, o, a = null === (i = h.Fe.getInstance()) || void 0 === i ? void 0 : i.atvEndpoint,
                                s = null === (o = h.Fe.getInstance()) || void 0 === o ? void 0 : o.terminatorId;
                            Promise.all(t).then((function(t) {
                                var r = {
                                    id: e.warrantId,
                                    atvEndpoint: a,
                                    tid: s,
                                    deviceTier: (0, m.y)(),
                                    avpkVersion: f.LK.getInstance().avpkVersion,
                                    osName: f.LK.getInstance().osName,
                                    osLocale: f.LK.getInstance().osLocale,
                                    buildFlavor: p.Z.getBuildFlavor(),
                                    bundleFlavor: p.Z.getBundleFlavor(),
                                    results: t
                                };
                                n.emitSuccessMetricsForInteractions(e.warrantId, t), c.ZP.info("".concat(S, " ").concat(
                                    JSON.stringify(r)), ["networkInspector", e.warrantId])
                            })).catch((function(t) {
                                var n = {
                                    id: e.warrantId,
                                    atvEndpoint: a,
                                    tid: s,
                                    results: [],
                                    error: t
                                };
                                l.y.metric("NetworkInspector.InteractionExecutionResult.Failure", 1, {
                                    reportOwner: d.R.TERMINATION,
                                    customContext: {
                                        SearchWarrantID: e.warrantId
                                    }
                                }), c.ZP.info("".concat(S, " ").concat(JSON.stringify(n)), ["networkInspector", e
                                    .warrantId
                                ])
                            })).finally((function() {
                                r()
                            }))
                        }))
                    }, e.prototype.emitSuccessMetricsForInteractions = function(e, t) {
                        var n, r, i, o, a;
                        try {
                            for (var s = (0, u.__values)(t), c = s.next(); !c.done; c = s.next()) {
                                var p = c.value,
                                    f = p.cfServerTimings,
                                    h = void 0 === (null == f ? void 0 : f.upstreamConnect) ? "undefined" : String(0 === (null == f ? void 0 : f
                                        .upstreamConnect));
                                l.y.metric("NetworkInspector.InteractionExecutionResult.Success", 1, {
                                    reportOwner: d.R.TERMINATION,
                                    customContext: {
                                        SearchWarrantID: e,
                                        Tag: p.tag,
                                        InteractionOutcome: p.outcome,
                                        CDNLayer: null !== (a = null == f ? void 0 : f.layer) && void 0 !== a ? a : "undefined",
                                        CacheHit: String(null == f ? void 0 : f.cacheHit),
                                        ReusingUpstreamConnection: h
                                    }
                                });
                                try {
                                    for (var m = (i = void 0, (0, u.__values)(Object.entries({
                                            Latency: p.latency,
                                            UpstreamDNS: null == f ? void 0 : f.upstreamDns,
                                            UpstreamConnect: null == f ? void 0 : f.upstreamConnect,
                                            UpstreamFBL: null == f ? void 0 : f.upstreamFbl,
                                            DownstreamFBL: null == f ? void 0 : f.downstreamFbl
                                        }))), g = m.next(); !g.done; g = m.next()) {
                                        var v = (0, u.__read)(g.value, 2),
                                            y = v[0],
                                            E = v[1];
                                        void 0 !== E && l.y.metric("NetworkInspector.InteractionExecutionResult.".concat(y), E, {
                                            reportOwner: d.R.TERMINATION,
                                            customContext: {
                                                SearchWarrantID: e,
                                                Tag: p.tag,
                                                InteractionOutcome: p.outcome
                                            }
                                        })
                                    }
                                } catch (e) {
                                    i = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        g && !g.done && (o = m.return) && o.call(m)
                                    } finally {
                                        if (i) throw i.error
                                    }
                                }
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                c && !c.done && (r = s.return) && r.call(s)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    }, e.prototype.hasExecutedAllSearchWarrant = function() {
                        try {
                            var e = Y();
                            return !!e && v()(this.filterExecutableSearchWarrant(e.searchWarrants))
                        } catch (e) {
                            c.ZP.error("".concat(S, " Error while getting search warrant ").concat(e), [b])
                        }
                        return !0
                    }, e.prototype.filterExecutableSearchWarrant = function(e) {
                        var t = this;
                        return e.filter((function(e) {
                            var n, r;
                            return (null !== (n = t.executedSearchWarrant.get(e.warrantId)) && void 0 !== n ? n : 0) < (null !== (
                                r = e.maxRuns) && void 0 !== r ? r : 1)
                        }))
                    }, e
                }(),
                j = 1e3,
                Q = function() {
                    var e;
                    try {
                        var t = Y(),
                            n = (null == t ? void 0 : t.executionInInactiveState) !== r.Background,
                            i = null !== (e = null == t ? void 0 : t.periodOfInactivityBeforeExecutionMs) && void 0 !== e ? e : j,
                            o = s.a.getInstance(),
                            a = new z,
                            u = a.execute.bind(a);
                        if (n) {
                            a.setDeregisterFromActivityTrackerCallback((function() {
                                o.clearForegroundInactivityActiveEvent(u)
                            }));
                            var l = function() {
                                o.registerForegroundInactivityActiveEvent("networkInspector", u, i)
                            };
                            a.setRegisterInActivityTrackerCallback(l.bind(a)), l()
                        } else {
                            a.setDeregisterFromActivityTrackerCallback((function() {
                                o.clearBackgroundInactivityEvent(u)
                            }));
                            var d = function() {
                                o.registerBackgroundInactivityEvent("networkInspector", u, i)
                            };
                            a.setRegisterInActivityTrackerCallback(d.bind(a)), d()
                        }
                        c.ZP.info("".concat(S, " NetworkInspector initialised"))
                    } catch (e) {
                        return void c.ZP.error("".concat(S, " failed to register: ").concat(e), [b])
                    }
                }
        },
        42587: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initializeConfigStore: function() {
                    return o
                }
            });
            var r = n(10297),
                i = n(59709);

            function o() {
                return i.O.initialize(r.ZQ.getConfig().outOfAppRecommendationsConfig)
            }
        },
        91433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initializeEventManager: function() {
                    return A
                }
            });
            var r = n(70655),
                i = n(5371),
                o = n(48898),
                a = n(14382),
                s = n(59709),
                c = n(86735),
                u = n(55545),
                l = n(99898),
                d = n(7492),
                p = n(18414),
                f = n(25346),
                h = n(76004),
                m = n(1293),
                g = n(46255),
                v = n(48837),
                y = n(38913),
                E = n(95750),
                T = n(30597),
                P = n(25865),
                C = n(91629),
                I = ["recommendations-v1"],
                _ = "recommendations-v1",
                R = (0, y.P)("OutOfAppRecommendationsEventManager"),
                b = {
                    reportOwner: m.R.OAE,
                    tags: ["OutOfAppRecommendationsEventManager"]
                },
                S = new(function() {
                    function e() {
                        var e = this;
                        this.delayOnStreamEventTimeout = void 0, this.onStreamEvent = function(t) {
                            if (e.isRecommendationsGMBSupported() && t.eventType === p.i.SESSION_STOPPED && t.isPageTransition) {
                                e.clearTimeout();
                                var n = s.O.getInstance().getRandomAPICallDelayInSecondsOnStreamEvent();
                                t.content.streamingType === P.S.LiveEvent && n ? e.delayOnStreamEventTimeout = setTimeout(e.sendRefreshHint
                                    .bind(e), 1e3 * n) : e.sendRefreshHint()
                            }
                        }, this.onLifeCycleEvent = function(t) {
                            switch (t.type) {
                                case a.Y5.ENTER_FOREGROUND:
                                    e.onEnterForeground();
                                    break;
                                case a.Y5.APP_RESTART:
                                    e.onAppRestart()
                            }
                        }, this.onEnterForeground = function() {
                            e.isRecommendationsGMBSupported() && (e.clearTimeout(), e.sendRefreshHint())
                        }, this.onAppRestart = function() {
                            e.isRecommendationsEnabled() && (p.Q.unsubscribe(e.onStreamEvent), o.Ws.unsubscribe(e.onAuthEvent), a.IT
                                .unsubscribe(e.onLifeCycleEvent), E.s.unsubscribe(e.onConsentEvent), h.AppEvents.deregister(e
                                    .onProfileEvent()), v.Sj.unsubscribe(e.onLocalizationEvent))
                        }, this.onAuthEvent = function(t) {
                            e.isRecommendationsGMBSupported() && t.type === o.Kp.TOKEN_DEREGISTERED && (e.clearTimeout(), e
                                .pushGenericUpdateStructure("SignOut"), (0, T.XX)())
                        }, this.onConsentEvent = function(t) {
                            if (e.isRecommendationsGMBSupported()) switch (e.clearTimeout(), t.type) {
                                case E.X.PUT_CONSENT:
                                    e.pushPersonalizedUpdateStructure("ConsentSet");
                                    break;
                                case E.X.REVOKE_CONSENT:
                                    e.pushGenericUpdateStructure("ConsentRevoked")
                            }
                        }, this.onProfileSelected = function() {
                            e.isRecommendationsGMBSupported() && (e.clearTimeout(), e.pushUpdateStructureBasedOnConsentStatus(
                                "ProfileChange").catch((function(e) {
                                var t = (0, r.__assign)((0, r.__assign)({}, b), {
                                    exceptionMessage: e.message
                                });
                                g.y.error("".concat(R("onProfileSelected"),
                                    " cannot push update structure based on consent status with error: ").concat(e
                                    .name), t)
                            })))
                        }, this.onProfileEvent = function() {
                            var t, n;
                            return {
                                id: "ProfileConsentEvent",
                                state: null,
                                handlers: (t = {}, t[C.Cm] = (n = {}, n[C.Bo] = e.onProfileSelected, n), t)
                            }
                        }, this.onDeviceRequestedUpdate = function() {
                            return e.isRecommendationsGMBSupported() ? (e.clearTimeout(), i.ZP.isLastKnownStateUserSignedIn() ? e
                                .pushUpdateStructureBasedOnConsentStatus("DeviceRequested") : Promise.resolve(e
                                    .pushGenericUpdateStructure("DeviceRequested"))) : Promise.reject(new Error(
                                "Recommendation is not enabled"))
                        }, this.onLocalizationEvent = function(t) {
                            e.isRecommendationsGMBSupported() && (e.clearTimeout(), i.ZP.isLastKnownStateUserSignedIn() ? e
                                .pushUpdateStructureBasedOnConsentStatus("LocaleChanged").catch((function(e) {
                                    var t = (0, r.__assign)((0, r.__assign)({}, b), {
                                        exceptionMessage: e.message
                                    });
                                    g.y.error("".concat(R("onLocalizationEvent"),
                                        " cannot push update structure based on consent status with error: ").concat(e
                                        .name), t)
                                })) : e.pushGenericUpdateStructure("LocaleChanged"))
                        }
                    }
                    return e.prototype.initialize = function() {
                        this.delayOnStreamEventTimeout = void 0, c.i.initialize(), this.isRecommendationsEnabled() && (p.Q.subscribe(this
                            .onStreamEvent), o.Ws.subscribe(this.onAuthEvent), a.IT.subscribe(this.onLifeCycleEvent), E.s.subscribe(
                            this.onConsentEvent), h.AppEvents.register(this.onProfileEvent()), v.Sj.subscribe(this
                            .onLocalizationEvent), c.i.registerDeviceRequestedUpdate(this.onDeviceRequestedUpdate).catch((function(
                            e) {
                            var t = (0, r.__assign)((0, r.__assign)({}, b), {
                                exceptionMessage: e.message
                            });
                            g.y.error("".concat(R("initialize"),
                                    " cannot register device requested updated callback with error: ").concat(e.name),
                                t)
                        })))
                    }, e.prototype.isRecommendationsEnabled = function() {
                        return c.i.isGenericMessageBusSupported() && s.O.getInstance().isRecommendationsEnabled()
                    }, e.prototype.isRecommendationsGMBSupported = function() {
                        return this.isRecommendationsEnabled() && c.i.isRecommendationsGMBSupported()
                    }, e.prototype.pushUpdateStructure = function(e, t, n, i, o, a) {
                        c.i.pushUpdateStructure(e, t, n, i, o, a).catch((function(e) {
                            var t = (0, r.__assign)((0, r.__assign)({}, b), {
                                exceptionMessage: e.message
                            });
                            g.y.error("".concat(R("pushUpdateStructure"),
                                " cannot push update structure into device layer with error: ").concat(e.name), t)
                        }))
                    }, e.prototype.sendRefreshHint = function() {
                        s.O.getInstance().isRefreshHintDisabled() || c.i.sendRefreshHint((0, f.p)(), I).catch((function(e) {
                            var t = (0, r.__assign)((0, r.__assign)({}, b), {
                                exceptionMessage: e.message
                            });
                            g.y.error("".concat(R("pushUpdateStructure"),
                                " cannot send refresh hint to device layer with error: ").concat(e.name), t)
                        }))
                    }, e.prototype.pushGenericUpdateStructure = function(e) {
                        this.pushUpdateStructure((0, f.p)(), e, _)
                    }, e.prototype.pushPersonalizedUpdateStructure = function(e) {
                        var t = this;
                        new l.Z(d.Q.GET_REFRESH_TOKEN).call().then((function(n) {
                            (0, u.E3)(u.jb.GET_REFRESH_TOKEN_SUCCESS), t.pushUpdateStructure((0, f.p)(), e, _, "api.amazon.com",
                                n, s.O.getInstance().getUpdateParameters().ticunaClientId)
                        })).catch((function(n) {
                            var i = (0, r.__assign)((0, r.__assign)({}, b), {
                                exceptionMessage: n.message
                            });
                            g.y.error("".concat(R("pushPersonalizedUpdateStructure"),
                                    " failed to get refresh token: with error: ").concat(n.name,
                                    ", push generic recommendations instead"), i), (0, u.E3)(u.jb.GET_REFRESH_TOKEN_FAILURE), t
                                .pushGenericUpdateStructure(e)
                        }))
                    }, e.prototype.pushUpdateStructureBasedOnConsentStatus = function(e) {
                        var t = this;
                        return (0, T.t6)("PushUpdateStructure").then((function(n) {
                            "GRANTED" === n ? t.pushPersonalizedUpdateStructure(e) : t.pushGenericUpdateStructure(e)
                        })).catch((function(n) {
                            var i = (0, r.__assign)((0, r.__assign)({}, b), {
                                exceptionMessage: n.message
                            });
                            g.y.error("".concat(R("pushUpdateStructureBasedOnConsentStatus"),
                                " Failed to check consent status with error: ").concat(n.name,
                                ", push generic recommendations instead"), i), t.pushGenericUpdateStructure(e)
                        }))
                    }, e.prototype.clearTimeout = function() {
                        this.delayOnStreamEventTimeout && (clearTimeout(this.delayOnStreamEventTimeout), this.delayOnStreamEventTimeout =
                            void 0)
                    }, e
                }());

            function A() {
                return S.initialize()
            }
        },
        28736: function(e, t, n) {
            "use strict";

            function r() {}
            n.r(t), n.d(t, {
                initializeClickstreamPerformanceMetricsReporting: function() {
                    return r
                }
            })
        },
        59931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n(70655),
                i = n(93654);

            function o() {
                return (0, r.__awaiter)(this, void 0, void 0, (function() {
                    return (0, r.__generator)(this, (function(e) {
                        return [2, i.m.getInstance().initialize()]
                    }))
                }))
            }
        },
        36792: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Lc
                }
            });
            var r, i, o = n(10351),
                a = n(16177),
                s = n(70655),
                c = n(53259),
                u = function() {
                    function e(e) {
                        this.context = e
                    }
                    return e.prototype.setAuthContext = function(e) {
                        this.context = e
                    }, e.prototype.getAuthContext = function() {
                        return this.context
                    }, e
                }(),
                l = n(92017),
                d = n(25770),
                p = n(50361),
                f = n.n(p),
                h = n(46255),
                m = n(1293),
                g = n(51863),
                v = n(25865),
                y = n(55499),
                E = n(17187),
                T = function(e) {
                    var t = new E.EventEmitter;
                    return {
                        name: e,
                        subscribe: function(n) {
                            return t.addListener(e, n)
                        },
                        once: function(n) {
                            return t.once(e, n)
                        },
                        unsubscribe: function(n) {
                            t.removeListener(e, n)
                        },
                        unsubscribeAll: function() {
                            t.removeAllListeners(e)
                        },
                        emit: function(n) {
                            t.emit(e, n)
                        }
                    }
                },
                P = T("StreamEventPlaybackProgressWithEpochOffset"),
                C = T("InterpolatedPlaybackProgress"),
                I = T("StreamEventPlaybackProgress"),
                _ = function(e) {
                    var t, n, r = 0,
                        i = function(n) {
                            var i = null !== n.livehead ? n.livehead + e : null;
                            P.emit({
                                elapsedTimeMillis: n.elapsedTimeMillis + e,
                                livehead: i
                            }), t = Date.now(), r = Math.trunc(n.elapsedTimeMillis)
                        },
                        o = function(e) {
                            C.emit({
                                elapsedTimeMs: e
                            })
                        },
                        a = function() {
                            if (void 0 !== n && void 0 !== t) {
                                var e = Date.now() - t;
                                o(r + e)
                            }
                        };
                    return {
                        start: function(e) {
                            void 0 === n && (e && o(e), I.subscribe(i), n = setInterval(a, 200))
                        },
                        stop: function() {
                            void 0 !== n && (I.unsubscribe(i), clearInterval(n), n = void 0, t = void 0)
                        },
                        update: function(e) {
                            t = void 0, o(e)
                        }
                    }
                },
                R = n(29288),
                b = n(10984),
                S = n(92627),
                A = T("DrmLicenseRequested"),
                O = T("NetworkDisconnected"),
                N = T("StreamEventPlaybackStart"),
                L = T("PlayerStateChangingFinish"),
                M = T("ResumePlayback"),
                D = T("StreamEventPause"),
                w = T("StreamEventBuffering"),
                k = T("StreamEventPlaybackComplete"),
                F = T("NetworkConnected"),
                x = T("PlayerCapabilitiesUpdate"),
                U = T("StreamEventStop"),
                B = T("DrmLicenseReceived"),
                H = T("MetadataLoaded"),
                G = T("StreamEventBitrateSwitched"),
                W = T("PlayerTearDownComplete");
            ! function(e) {
                e[e.Video = 0] = "Video", e[e.Audio = 1] = "Audio"
            }(i || (i = {}));
            var V, K, Z, q = T("MediaQualityChange"),
                Y = T("PlayerHeuristic"),
                z = T("StreamEventPlayerCreated"),
                j = T("FirstPlayerConnectionEstablished"),
                Q = T("StreamEventManifestDownloadSuccess"),
                X = T("DroppedFramesUpdated"),
                J = T("StreamEventManifestDownloadFailure"),
                $ = T("StreamEventFragmentDownloadFailure"),
                ee = T("StreamEventPlaybackError"),
                te = T("NewFragmentDownloaded"),
                ne = function(e) {
                    return function(t) {
                        var n = t.length > 0 ? "#" : "";
                        return "[".concat(e).concat(n).concat(t, "]")
                    }
                },
                re = new(n(84243).Yd)("Player"),
                ie = "MetricsClientProxy called and not yet initialized",
                oe = function() {
                    function e() {}
                    return e.prototype.initialize = function(e) {
                        this.metricsClient = e
                    }, e.prototype.startTimer = function(e, t, n) {
                        this.metricsClient ? this.metricsClient.startTimer(e, t, n) : re.error(ie)
                    }, e.prototype.stopTimer = function(e, t) {
                        this.metricsClient ? this.metricsClient.stopTimer(e, t) : re.error(ie)
                    }, e.prototype.clearTimer = function(e) {
                        this.metricsClient ? this.metricsClient.clearTimer(e) : re.error(ie)
                    }, e.prototype.reportDataPoint = function(e, t, n, r) {
                        this.metricsClient ? this.metricsClient.reportDataPoint(e, t, n, r) : re.error(ie)
                    }, e
                }(),
                ae = new oe;
            ! function(e) {
                e.PLAYER = "Player"
            }(V || (V = {})),
            function(e) {
                e.AUDIT_PING_ERROR = "AuditPingFailure", e.PRS_HTTP_ERROR = "PrsHttpError", e.PLAYER_DRM_ERROR = "LivingRoomPlayerDrmError", e
                    .PLAYER_RECOVERABLE_ERROR = "LivingRoomPlayerRecoverableError", e.PLAYER_NON_RECOVERABLE_ERROR =
                    "LivingRoomPlayerNonRecoverableError", e.RUBY_PLAYER_INIT = "RubyPlayerInit", e.RUBY_PLAYER_INIT_WITHOUT_VERSION =
                    "RubyPlayerInitWithoutVersion", e.PLAYBACK_RESOURCES_LATENCY = "PlaybackResourcesLatency", e.DRM_REQUEST_LATENCY =
                    "DrmRequestLatency", e.VAST_MANIFEST_WITH_PRIME_PROMO = "VastManifestWithPrimePromo", e
                    .VAST_MANIFEST_WITH_PRIME_PROMO_BYPASSED = "VastManifestWithPrimePromoBypassed", e.CONTENT_DURATION_MISMATCH_WITHOUT_AD =
                    "ContentDurationMismatchWithoutAd", e.CONTENT_DURATION_MISMATCH_WITH_AD = "ContentDurationMismatchWithAd", e
                    .ELAPSED_TIME_BELOW_ZERO_COUNT = "ElapsedTimeBelowZeroCount", e.ELAPSED_TIME_OVER_END_TIME_COUNT =
                    "ElapsedTimeOverEndTimeCount", e.QOS_REPORTING_BOOTSTRAP_FAILURE_RATE = "QosReportingBootstrapFailureRate", e
                    .QOS_REPORTING_FAILURE_RATE = "QosReportingFailureRate", e.QOS_REPORTING_FAILED_4XX = "QosReportingFailed4XX", e
                    .QOS_REPORTING_FAILED_5XX = "QosReportingFailed5XX", e.QOS_REPORTING_PRE_FETCH_PROCESSING_DURATION =
                    "QosReportingPreFetchProcessingDuration", e.VAST_MANIFEST_PARSE_ERROR = "VASTManifestParseError", e
                    .VAST_MANIFEST_DOWNLOAD_ERROR = "VASTManifestDownloadError", e.VOD_ADS_TRACKING_REPORTING_SUCCESS =
                    "VodAdsTrackingEventReportingSuccess", e.VOD_ADS_TRACKING_REPORTING_FAILURE = "VodAdsTrackingEventReportingFailure", e
                    .VOD_ADS_IMPRESSION_REPORTING_SUCCESS = "VodAdsImpressionEventReportingSuccess", e.VOD_ADS_IMPRESSION_REPORTING_FAILURE =
                    "VodAdsImpressionEventReportingFailure", e.FORCED_NARRATIVES_DOWNLOAD_ERROR = "ForcedNarrativesDownloadError", e
                    .FORCED_NARRATIVES_DOWNLOAD_SUCCESS = "ForcedNarrativesDownloadSuccess", e.SUBTITLES_DOWNLOAD_ERROR = "SubtitlesDownloadError",
                    e.SUBTITLES_DOWNLOAD_SUCCESS = "SubtitlesDownloadSuccess", e.TIMED_TEXT_DOWNLOAD_LATENCY = "TimedTextDownloadLatency", e
                    .PSEUDO_LIVE_CAPTIONS_DOWNLOAD_LATENCY = "PseudoLiveCaptionsDownloadLatency", e.PSEUDO_LIVE_CAPTIONS_DOWNLOAD_ERROR =
                    "PseudoLiveCaptionsDownloadError", e.PSEUDO_LIVE_CAPTIONS_DOWNLOAD_SUCCESS = "PseudoLiveCaptionsDownloadSuccess", e
                    .CDN_WINDOW_RELOAD = "CdnWindow_Reload", e.MANIFEST_SWITCH_RELOAD = "ManifestSwitch_Reload", e.MANIFEST_SWITCH_ERROR =
                    "ManifestSwitch_Error", e.MANIFEST_SWITCH_TIME_TO_FIRST_FRAME = "ManifestSwitch_TimeToFirstFrame", e
                    .UPDATE_STREAM_STOP_WITH_FULL_DURATION_REPORTED = "UpdateStream_StopWithFullDurationReported", e.STARTED_PLAYBACK_PAST_CREDITS =
                    "StartedPlaybackPastCredits", e.LIVE_STREAMING_FREEZE = "LiveStreamingFreeze", e.LIVE_STREAMING_UNFREEZE =
                    "LiveStreamingUnfreeze", e.LIVE_ADS_MANIFEST_DOWNLOAD_4XX = "LiveAdsManifestDownload4XX", e.LIVE_ADS_MANIFEST_DOWNLOAD_5XX =
                    "LiveAdsManifestDownload5XX", e.LIVE_ADS_MANIFEST_DOWNLOAD_SUCCESS_RATE = "LiveAdsDownloadSuccessRate", e
                    .CUSTOM_CLICK_FAILURE_RATE = "CustomClickFailureRate", e.MEDIATEK_TRUNCATE_DRM_CHALLENGE = "MEDIATEK_TRUNCATE_DRM_CHALLENGE"
            }(K || (K = {})),
            function(e) {
                e.SD = "SD", e.HD = "HD", e.UHD = "UHD"
            }(Z || (Z = {}));
            var se, ce = {
                    SUPPORTS_CONFIGURABLE_NUMBER_OF_AUDIO_CHANNELS: !0,
                    playback: {
                        video: {
                            PRE_LOAD_DURATION: [3e4, 3e4, 3e4]
                        },
                        numOfFragmentsToDownload: [50, 20],
                        autoplay: !0,
                        PLAYBACK_START_TIMEOUT_VAL_MS: 15e3,
                        BUFFER_TIMEOUT_VAL_MS: 3e4,
                        PLAYBACK_TIME_TIMEOUT_MS: 15e3,
                        MANIFEST_DOWNLOAD_FAIL_RETRY_NO: 4,
                        encodedSoapChallenge: !0,
                        fragmentsDownloadedEventFrequency: 10
                    },
                    qualities: {
                        SD: [{
                            bitrate: 15e4,
                            icon: "hdIcon"
                        }, {
                            bitrate: 25e5,
                            icon: "glowHdIcon"
                        }, {
                            bitrate: 1e7,
                            icon: "glowFullHdIcon"
                        }, {
                            bitrate: 15e4,
                            icon: "hdIcon"
                        }, {
                            bitrate: 25e5,
                            icon: "glowHdIcon"
                        }, {
                            bitrate: 1e7,
                            icon: "glowFullHdIcon"
                        }],
                        HD: [{
                            bitrate: 15e4,
                            icon: "hdIcon"
                        }, {
                            bitrate: 25e5,
                            icon: "glowHdIcon"
                        }, {
                            bitrate: 1e7,
                            icon: "glowFullHdIcon"
                        }, {
                            bitrate: 15e4,
                            icon: "hdIcon"
                        }, {
                            bitrate: 25e5,
                            icon: "glowHdIcon"
                        }, {
                            bitrate: 1e7,
                            icon: "glowFullHdIcon"
                        }],
                        UHD: [{
                            bitrate: 225e3,
                            icon: "hdIcon"
                        }, {
                            bitrate: 2604e3,
                            icon: "glowHdIcon"
                        }, {
                            bitrate: 3125e3,
                            icon: "glowFullHdIcon"
                        }, {
                            bitrate: 6246e3,
                            icon: "glowUhdIcon"
                        }, {
                            bitrate: 225e3,
                            icon: "hdIcon"
                        }, {
                            bitrate: 2604e3,
                            icon: "glowHdIcon"
                        }, {
                            bitrate: 3125e3,
                            icon: "glowFullHdIcon"
                        }, {
                            bitrate: 6246e3,
                            icon: "glowUhdIcon"
                        }]
                    },
                    HD_BITRATE: [2500, 2500],
                    REPORT_BANDWIDTH_ESTIMATE_TO_RUBY: !0,
                    CLIENT_GEOLOCATION: "us",
                    ADS_MANIFEST_DOWNLOAD_INTERVAL_SECONDS: 6
                },
                ue = "missing",
                le = "HD",
                de = 1920,
                pe = 1080;
            ! function(e) {
                e.CONNECTION_FAILED = "Player.ConnectionFailed", e.NETWORK_DISCONNECTED = "Player.NetworkDisconnected", e.BUFFER_EMPTIED =
                    "Player.BufferEmptied", e.LICENCE_NOT_RECEIVED = "Player.LicenceNotReceived", e.LICENCE_ACQUISITION_ERROR =
                    "Player.LicenceAcquisitionError", e.RENDERING_FAILED = "Player.RenderingFailed", e.RECOVERABLE_RENDERING_FAILED =
                    "Player.RecoverableRenderingFailed", e.MANIFEST_DOWNLOAD_FAILED = "Player.ManifestDownloadFailed", e.MANIFEST_DOWNLOAD_RETRY =
                    "Player.ManifestDownloadRetry", e.STREAM_NOT_FOUND = "Player.StreamNotFound", e.BUFFER_FAILED = "Player.BufferFailed", e
                    .UNEXPECTED_PAUSE = "Player.UnexpectedPause", e.UNEXPECTED_REBUFFER = "Player.UnexpectedRebuffer", e.CLOSED_AFTER_ERROR =
                    "Player.ClosedAfterError", e.GENERIC = "Player.Generic", e.GENERIC_RECOVERABLE = "Player.GenericRecoverable", e
                    .DRMLICENSEERROR = "Player.DRMLicenseError", e.RUBY_DEADLOCK_WARNING = "Player.RubyDeadlockWarning", e.RUBY_DEADLOCK_ERROR =
                    "Player.RubyDeadlockError", e.PLAYBACK_TIME_TIMEOUT_WARNING = "Player.PlaybackTimeTimeoutWarning", e
                    .PLAYBACK_TIME_TIMEOUT_ERROR = "Player.PlaybackTimeTimeoutError", e.CONTENT_NOT_OWNED = "Player.ContentNotOwned", e
                    .MESSAGE_BUS_UNRESPONSIVE = "Player.MessageBusUnresponsive", e.DOWNLOAD_FONT_FAILED = "Player.DownloadFontFailed", e
                    .AUTHENTIFICATION_FAILED = "Player.AuthentificationFailed", e.LICENCE_NOT_ACCEPTED = "Player.LicenseNotAccepted", e
                    .LICENCE_ACQUISITION_TIMEOUT = "Player.LicenceAcquisitionTimeout", e.ABRSETUPFAILURE = "Player.ABRSetupFailed", e
                    .DRMEMPTYLICENSE = "Player.DRMEmptyLicense", e.RESOURCE_STOLEN_ERROR = "Player.ResourceStolen", e.LIVE_STREAMING_FREEZE =
                    "Player.LiveStreamingFreeze", e.RECOVERABLE_LIVE_STREAMING_FREEZE = "Player.RecoverableLiveStreamingFreeze", e.SHUTDOWN_FAILED =
                    "Player.ShutDownFailed", e.UNIDENTIFIED_ERROR = "Player.UnidentifiedError", e.OUT_OF_MEMORY = "Player.OutOfMemory", e
                    .HDMI_DISCONNECT_ERROR = "Player.DisplayDisconnectedError"
            }(se || (se = {}));
            var fe, he, me = [se.DRMLICENSEERROR, se.DRMEMPTYLICENSE, se.LICENCE_NOT_RECEIVED, se.LICENCE_ACQUISITION_TIMEOUT, se
                .LICENCE_ACQUISITION_ERROR
            ];
            ! function(e) {
                e[e.ONE = 1] = "ONE", e[e.TWO = 2] = "TWO", e[e.THREE = 3] = "THREE", e[e.FOUR = 4] = "FOUR", e[e.FIVE = 5] = "FIVE"
            }(he || (he = {}));
            var ge, ve, ye = ((fe = {})[se.RENDERING_FAILED] = he.TWO, fe[se.RECOVERABLE_RENDERING_FAILED] = he.THREE, fe[se.CONNECTION_FAILED] = he
                .THREE, fe[se.LICENCE_ACQUISITION_ERROR] = he.TWO, fe[se.DRMLICENSEERROR] = he.TWO, fe[se.LICENCE_NOT_RECEIVED] = he.TWO, fe[se
                    .MANIFEST_DOWNLOAD_RETRY] = he.FOUR, fe[se.MANIFEST_DOWNLOAD_FAILED] = he.THREE, fe[se.STREAM_NOT_FOUND] = he.TWO, fe[se
                    .GENERIC] = he.TWO, fe[se.GENERIC_RECOVERABLE] = he.THREE, fe[se.BUFFER_FAILED] = he.THREE, fe[se.UNEXPECTED_PAUSE] = he
                .THREE, fe[se.UNEXPECTED_REBUFFER] = he.THREE, fe[se.CLOSED_AFTER_ERROR] = he.TWO, fe[se.NETWORK_DISCONNECTED] = he.THREE, fe[se
                    .BUFFER_EMPTIED] = he.THREE, fe[se.RUBY_DEADLOCK_WARNING] = he.THREE, fe[se.RUBY_DEADLOCK_ERROR] = he.TWO, fe[se
                    .PLAYBACK_TIME_TIMEOUT_WARNING] = he.THREE, fe[se.PLAYBACK_TIME_TIMEOUT_ERROR] = he.TWO, fe[se.CONTENT_NOT_OWNED] = he.FIVE,
                fe[se.MESSAGE_BUS_UNRESPONSIVE] = he.TWO, fe[se.DOWNLOAD_FONT_FAILED] = he.FIVE, fe[se.HDMI_DISCONNECT_ERROR] = he.THREE, fe[se
                    .ABRSETUPFAILURE] = he.TWO, fe[se.DRMEMPTYLICENSE] = he.TWO, fe[se.LICENCE_ACQUISITION_TIMEOUT] = he.TWO, fe[se
                    .LICENCE_NOT_ACCEPTED] = he.THREE, fe[se.RESOURCE_STOLEN_ERROR] = he.FIVE, fe[se.LIVE_STREAMING_FREEZE] = he.THREE, fe[se
                    .RECOVERABLE_LIVE_STREAMING_FREEZE] = he.THREE, fe[se.SHUTDOWN_FAILED] = he.TWO, fe[se.UNIDENTIFIED_ERROR] = he.THREE, fe[se
                    .AUTHENTIFICATION_FAILED] = he.FIVE, fe[se.OUT_OF_MEMORY] = he.TWO, fe);
            ! function(e) {
                e.PlayReadyLicense = "PlayReadyLicense", e.FairPlayLicense = "FairPlayLicense"
            }(ge || (ge = {})),
            function(e) {
                e.FULL_VIDEO = "fullVideo", e.LIVE_STREAMING = "liveStreaming", e.TRAILER = "trailer"
            }(ve || (ve = {}));
            var Ee, Te, Pe = n(41938),
                Ce = n(90192),
                Ie = function(e, t) {
                    var n, r = e;
                    if (e && "object" == typeof e)
                        for (n in r = t || (Array.isArray(e) ? [] : {}), e) Object.hasOwnProperty.call(e, n) && (r[n] = Ie(e[n]));
                    return r
                },
                _e = function(e, t) {
                    var n, r, i = e.split("."),
                        o = t;
                    try {
                        for (var a = (0, s.__values)(i), c = a.next(); !c.done; c = a.next()) {
                            var u = c.value;
                            if (void 0 === o[u]) return;
                            o = o[u]
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            c && !c.done && (r = a.return) && r.call(a)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return o
                },
                Re = function(e, t, n) {
                    "string" == typeof e ? Re(e.split("."), t, n) : 1 === e.length && void 0 !== n ? t[e[0]] = n : void 0 === t[e[0]] ? (t[e[
                        0]] = {}, Re(e.slice(1), t[e[0]], n)) : Re(e.slice(1), t[e[0]], n)
                },
                be = function(e, t, n, r) {
                    var i = _e(e, n);
                    null != i && Re(t, r, i)
                },
                Se = new(function() {
                    function e() {}
                    return e.prototype.applyPlaybackSettings = function(e, t) {
                        var n = Ie(e);
                        try {
                            if (t) {
                                var r = this.extractOverridePlaybackSettings(t);
                                (0, Pe.O)(r, n)
                            }
                        } catch (e) {
                            console.error(
                                "Failed to apply playback settings from ATVPlaybackOptimizationService on top of base ruby settings : " +
                                e.message)
                        }
                        return n
                    }, e.prototype.extractOverridePlaybackSettings = function(e) {
                        var t, n, r, i, o, a = {},
                            c = Ie(e);
                        return be("scheduler.minConfidenceLevelSum", "heuristics.minConfidenceScore", c, a), be(
                                "buffer.bufferFullnessForPlaybackStartSeconds", "bufferingThreshold", c, a), t =
                            "heuristics.fragmentDrainRatioGraph", n = a, r = "bufferDurationValues", i = "fragmentDrainRatioGraphValues",
                            o = function(e, t, n) {
                                var r, i, o, a = [],
                                    c = [],
                                    u = e.length;
                                try {
                                    for (var l = (0, s.__values)(e), d = l.next(); !d.done; d = l.next()) {
                                        var p = d.value;
                                        a.push(p[0]), c.push(p[1])
                                    }
                                } catch (e) {
                                    r = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        d && !d.done && (i = l.return) && i.call(l)
                                    } finally {
                                        if (r) throw r.error
                                    }
                                }
                                return (o = {
                                    numValues: u
                                })[t] = a, o[n] = c, o
                            }(_e("timeToDownloadPredictor.bufferFullnessSecondsToBandwidthThrottleFactorGraph", c), r, i), Re(t, n, o), a
                    }, e.prototype.extractPlaybackSettings = function(e) {
                        try {
                            var t = atob(e.playbackSettings);
                            return {
                                settingsId: e.settingsId,
                                timeToLiveMillis: e.caching.timeToLiveMillis,
                                playbackSettingsJson: JSON.parse(t)
                            }
                        } catch (e) {
                            throw console.error("Failed to parse playback settings response from ATVPlaybackOptimizationService: " + e
                                .message + " response: "), e
                        }
                    }, e.prototype.overrideConfigWithSettings = function(e, t, n) {
                        var r, i = e;
                        if (n) {
                            var o = this.extractPlaybackSettings(n);
                            o.playbackSettingsJson && (r = o)
                        }
                        if (r && r.playbackSettingsJson) {
                            var a = this.getCDNOverriddenPlaybackSettings(r.playbackSettingsJson, t);
                            (i = this.applyPlaybackSettings(e, a)).playbackSettingsId = r.settingsId
                        }
                        return i
                    }, e.prototype.getCDNOverriddenPlaybackSettings = function(e, t) {
                        var n = {};
                        try {
                            var r = e.base,
                                i = Ie(r);
                            i && (n = i);
                            var o = e.cdnOverride;
                            if (o && "string" == typeof t) {
                                var a = o[t.toLowerCase()];
                                if (a) {
                                    var s = Ie(a);
                                    n = (0, Pe.O)(s, n)
                                }
                            }
                        } catch (e) {
                            console.error("Failed to apply cdn override on top of base settings from ATVPlaybackOptimizationService:", e
                                .message)
                        }
                        return n
                    }, e
                }()),
                Ae = ne("RubyPlayerConfigHelper"),
                Oe = function() {
                    function e(e) {
                        var t = e.rubyPlayerConfig,
                            n = e.playbackSettingsEnabled,
                            r = e.lowPerformanceModeEnabled;
                        this.configData = t || {}, this.playbackSettingsEnabled = n, this.lowPerformanceModeEnabled = r || !1
                    }
                    return e.prototype.getRubyConfig = function(e, t, n, r) {
                        var i = {};
                        try {
                            if (i = (0, Pe.O)((0, Ce.M)(this.configData, t, e), i), i = this.playbackSettingsEnabled ? Se
                                .overrideConfigWithSettings(i, n, r) : i, this.lowPerformanceModeEnabled && (i = Le(i)), e === ve
                                .LIVE_STREAMING && this.configData.liveStreamingRubyPlayerConfigJSON) {
                                var o = JSON.parse(this.configData.liveStreamingRubyPlayerConfigJSON);
                                i = (0, Pe.O)(o, i)
                            }
                        } catch (e) {
                            re.error("".concat(Ae("getRubyConfig"), " config merging error: ").concat(e.message))
                        }
                        return {
                            stringifiedConfig: JSON.stringify(i),
                            playbackSettingsId: i.playbackSettingsId
                        }
                    }, e
                }(),
                Ne = Oe,
                Le = function(e) {
                    return e.maxNumConcurrentDownload = 1, e.acquisitionType = "sequential", e
                },
                Me = T("QoSErrorEvent");
            ! function(e) {
                e.PlayReady = "PlayReady", e.Widevine2 = "Widevine2", e.NONE = "NONE", e.WMRM = "WMRM", e.Marlin = "Marlin", e.FairPlay =
                    "FairPlay", e.CENC = "CENC"
            }(Ee || (Ee = {})),
            function(e) {
                e.DASH = "DASH", e.SmoothStreaming = "SmoothStreaming", e.HLS = "HLS", e.MP4 = "MP4", e.WMV = "WMV", e.MPEGPS = "MPEGPS", e.MPEGTS =
                    "MPEGTS"
            }(Te || (Te = {}));
            var De, we = n(78342);
            ! function(e) {
                e.PlaybackUrls = "PlaybackUrls", e.SubtitleUrls = "SubtitleUrls", e.CuepointPlaylist = "CuepointPlaylist", e.XRayMetadata =
                    "XRayMetadata", e.TransitionTimecodes = "TransitionTimecodes", e.WhisperSyncBookmark = "WhisperSyncBookmark", e
                    .SubtitlePresets = "SubtitlePresets", e.PlaybackSettings = "PlaybackSettings", e.TrickplayUrls = "TrickplayUrls", e
                    .ForcedNarratives = "ForcedNarratives", e.CatalogMetadata = "CatalogMetadata", e.FairPlayApplicationCertificate =
                    "FairPlayApplicationCertificate", e.LiveSchedule = "LiveSchedule", e.LinearRestrictions = "LinearRestrictions"
            }(De || (De = {}));
            var ke, Fe, xe = function() {
                function e() {}
                return e.AudioVideoUrls = function(e) {
                    return void 0 === e && (e = {}), {
                        resourceName: "AudioVideoUrls",
                        queryParams: {
                            audioTrackId: e.audioTrackId,
                            languageFeature: e.languageFeature,
                            videoMinBitrate: e.videoMinBitrateBps,
                            videoMaxBitrate: e.videoMaxBitrateBps,
                            supportedDRMKeyScheme: e.drmKeyScheme
                        }
                    }
                }, e.PlaybackUrls = function(e) {
                    return void 0 === e && (e = {}), {
                        resourceName: "PlaybackUrls",
                        queryParams: {
                            audioTrackId: e.audioTrackId,
                            languageFeature: e.languageFeature,
                            liveManifestType: null != e.liveManifestType && e.liveManifestType.length > 0 ? e.liveManifestType.join(
                                ",") : void 0,
                            videoMinBitrate: e.videoMinBitrateBps,
                            videoMaxBitrate: e.videoMaxBitrateBps,
                            supportedDRMKeyScheme: e.drmKeyScheme
                        }
                    }
                }, e.PlayReadyLicense = function(e, t) {
                    return {
                        resourceName: "PlayReadyLicense",
                        postParams: {
                            playReadyChallenge: e,
                            playReadyKeyId: t
                        }
                    }
                }, e.FairPlayLicense = function(e, t) {
                    return {
                        resourceName: "FairPlayLicense",
                        postParams: {
                            fairPlayChallenge: e,
                            fairPlayKeyId: t
                        }
                    }
                }, e.FairPlayApplicationCertificate = function() {
                    return {
                        resourceName: "FairPlayApplicationCertificate"
                    }
                }, e.Widevine2License = function(e, t) {
                    return {
                        resourceName: "Widevine2License",
                        postParams: {
                            widevine2Challenge: e,
                            includeHdcpTestKeyInLicense: t
                        }
                    }
                }, e.SubtitleUrls = function(e) {
                    return {
                        resourceName: "SubtitleUrls",
                        queryParams: {
                            subtitleFormat: e
                        }
                    }
                }, e.WhisperSyncBookmark = function() {
                    return {
                        resourceName: "WhisperSyncBookmark"
                    }
                }, e.CatalogMetadata = function(e) {
                    return {
                        resourceName: "CatalogMetadata",
                        queryParams: {
                            titleDecorationScheme: e
                        }
                    }
                }, e.TransitionTimecodes = function() {
                    return {
                        resourceName: "TransitionTimecodes"
                    }
                }, e.CuepointPlaylist = function(e, t, n, r) {
                    return {
                        resourceName: "CuepointPlaylist",
                        queryParams: {
                            optOutAdTracking: e,
                            advertisingId: t,
                            siteSectionId: n,
                            gdprEnabled: r ? r.applicable : void 0,
                            gdprConsentGvl: r ? r.gvlString : void 0,
                            gdprConsentAvl: r ? r.avlString : void 0
                        }
                    }
                }, e.LiveSchedule = function(e) {
                    return {
                        resourceName: "LiveSchedule",
                        queryParams: {
                            liveScheduleConfigToken: e
                        }
                    }
                }, e.SubtitlePresets = function() {
                    return {
                        resourceName: "SubtitlePresets"
                    }
                }, e.XRayMetadata = function(e, t, n, r) {
                    return {
                        resourceName: "XRayMetadata",
                        queryParams: {
                            xrayToken: e,
                            xrayPlaybackMode: t,
                            xrayDeviceClass: n,
                            uxLocale: r
                        }
                    }
                }, e.TrickplayUrls = function() {
                    return {
                        resourceName: "TrickplayUrls"
                    }
                }, e.ForcedNarratives = function() {
                    return {
                        resourceName: "ForcedNarratives"
                    }
                }, e.PlaybackSettings = function(e) {
                    return {
                        resourceName: "PlaybackSettings",
                        queryParams: {
                            playbackSettingsFormatVersion: e
                        }
                    }
                }, e.LinearRestrictions = function(e, t) {
                    return {
                        resourceName: "LinearRestrictions",
                        queryParams: {
                            linearRestrictionStart: e,
                            linearRestrictionEnd: t
                        }
                    }
                }, e
            }();
            ! function(e) {
                e.MLFv2 = "MLFv2"
            }(ke || (ke = {})),
            function(e) {
                e.Accumulating = "accumulating", e.Live = "live", e.PatternTemplate = "patternTemplate"
            }(Fe || (Fe = {}));
            var Ue, Be = n(64721),
                He = n.n(Be),
                Ge = n(41609),
                We = n.n(Ge),
                Ve = n(14293),
                Ke = n.n(Ve),
                Ze = n(47037),
                qe = n.n(Ze),
                Ye = n(93220),
                ze = n.n(Ye),
                je = n(21242),
                Qe = n(20065),
                Xe = function() {
                    function e(e, t) {
                        this.status = e, this.text = t
                    }
                    return e.prototype.getStatus = function() {
                        return this.status
                    }, e.prototype.getText = function() {
                        return this.text
                    }, e
                }();
            ! function(e) {
                e.GET = "GET", e.POST = "POST"
            }(Ue || (Ue = {}));
            var Je = function() {
                    function e(e, t) {
                        this.method = e, this.url = t, this.requestHeaders = new je.P([]), this.requestTimeoutMs = 0, this.loadCallbacks = [], this
                            .errorCallbacks = []
                    }
                    return e.get = function(t) {
                        return new e(Ue.GET, t)
                    }, e.post = function(t) {
                        return new e(Ue.POST, t)
                    }, e.prototype.query = function(e) {
                        return this.requestQuery = Object.entries(e).map((function(e) {
                            var t = (0, s.__read)(e, 2),
                                n = t[0],
                                r = t[1];
                            return encodeURIComponent(n) + "=" + encodeURIComponent(r)
                        })).join("&"), this
                    }, e.prototype.headers = function(e) {
                        var t, n;
                        try {
                            for (var r = (0, s.__values)(Object.entries(e)), i = r.next(); !i.done; i = r.next()) {
                                var o = (0, s.__read)(i.value, 2),
                                    a = o[0],
                                    c = o[1];
                                this.requestHeaders.append(a, c)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                i && !i.done && (n = r.return) && n.call(r)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return this
                    }, e.prototype.body = function(e) {
                        return this.requestBody = e, this
                    }, e.prototype.timeout = function(e) {
                        return this.requestTimeoutMs = e, this
                    }, e.prototype.onLoad = function(e) {
                        return this.loadCallbacks.push(e), this
                    }, e.prototype.onError = function(e) {
                        return this.errorCallbacks.push(e), this
                    }, e.prototype.getRequestUrl = function() {
                        return this.requestQuery && this.requestQuery.length > 0 ? this.url + (this.url.includes("?") ? "&" : "?") + this
                            .requestQuery : this.url
                    }, e.prototype.send = function() {
                        var e = this,
                            t = this.getRequestUrl(),
                            n = {
                                method: Ue[this.method],
                                headers: Object.entries(this.requestHeaders.toMap()).length > 0 ? this.requestHeaders : void 0,
                                body: void 0 !== this.requestBody ? this.requestBody : void 0
                            };
                        this.requestTimeoutMs > 0 && (this.requestTimeoutId = setTimeout((function() {
                            return e.handleTimeout(t)
                        }), this.requestTimeoutMs)), (0, Qe.h)(t, n).then((function(n) {
                            return (0, s.__awaiter)(e, void 0, void 0, (function() {
                                var e, r, i, o;
                                return (0, s.__generator)(this, (function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return n.ok ? (r = Xe.bind, i = [void 0, n.status], [4, n
                                            .text()]) : [3, 2];
                                        case 1:
                                            return e = new(r.apply(Xe, i.concat([a.sent()]))), this
                                                .handleLoad(e), [3, 3];
                                        case 2:
                                            o = new Error("Request failed with status ".concat(n.status,
                                                " (").concat(n.clientCode, ")")), this.handleError(o, t,
                                                new Xe(n.status)), a.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                }))
                            }))
                        })).catch((function(n) {
                            e.handleError(n, t)
                        }))
                    }, e.prototype.handleLoad = function(e) {
                        var t, n;
                        clearTimeout(this.requestTimeoutId);
                        try {
                            for (var r = (0, s.__values)(this.loadCallbacks), i = r.next(); !i.done; i = r.next())(0, i.value)(e)
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                i && !i.done && (n = r.return) && n.call(r)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        this.clearCallbacks()
                    }, e.prototype.handleError = function(e, t, n) {
                        var r, i, o = new Error("Request attempt failed for ".concat(t, " with ").concat(e));
                        clearTimeout(this.requestTimeoutId);
                        try {
                            for (var a = (0, s.__values)(this.errorCallbacks), c = a.next(); !c.done; c = a.next())(0, c.value)(o, n)
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                c && !c.done && (i = a.return) && i.call(a)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        this.clearCallbacks()
                    }, e.prototype.handleTimeout = function(e) {
                        var t, n, r = new Error("Request to ".concat(e, " timed out after ").concat(this.requestTimeoutMs, " ms"));
                        try {
                            for (var i = (0, s.__values)(this.errorCallbacks), o = i.next(); !o.done; o = i.next())(0, o.value)(r)
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                o && !o.done && (n = i.return) && n.call(i)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        this.clearCallbacks()
                    }, e.prototype.clearCallbacks = function() {
                        this.loadCallbacks.length = 0, this.errorCallbacks.length = 0
                    }, e
                }(),
                $e = n(45090),
                et = [400, 401, 403];

            function tt(e, t, n, r, i, o, a) {
                void 0 === a && (a = rt);
                var c = n.replace(/\/$/, "") + e.endpointPath,
                    u = e.method || Ue.GET,
                    l = (0, s.__assign)({
                        deviceID: b.LK.getInstance().deviceId,
                        deviceTypeID: b.LK.getInstance().deviceTypeId,
                        marketplaceID: e.marketplaceId,
                        gascEnabled: "true"
                    }, e.queryParams || {}),
                    d = (0, s.__assign)({}, e.headers || {}),
                    p = e.body,
                    f = e.timeoutMs || 4e3;
                return function(e, n, r, i, o, a) {
                    void 0 === a && (a = function() {
                        return !0
                    });
                    var h = function(e, n, h, m) {
                        var g = function(e) {
                            var n = new Je(u, c),
                                r = (0, s.__assign)((0, s.__assign)({}, d), t().headers);
                            return e > 0 && (r["x-retry-count"] = "".concat(e), r["x-request-priority"] = "CRITICAL"), n.headers(r)
                                .query(l).timeout(f || 4e3), "string" == typeof p && n.body(p), n
                        }(e);
                        g.onLoad((function(e) {
                            i && i({
                                status: e.getStatus(),
                                url: g.getRequestUrl()
                            });
                            try {
                                r(e, h, n, m)
                            } catch (e) {
                                m(e)
                            }
                        })).onError((function(e, t) {
                            o && o({
                                status: t ? t.getStatus() : 0,
                                url: g.getRequestUrl()
                            }), a(e, t) ? n(e) : m(e)
                        })).send()
                    };
                    return new Promise((function(e, t) {
                        return (new $e.L).withMaxAttempts(4).withInitialIntervalMs(500).withExponentialFactor(2)
                            .withRandomizationFactor(200).onSuccess(e).onError(t).onAttempt(h).execute()
                    }))
                }(0, 0, r, i, o, a)
            }
            var nt, rt = function(e, t) {
                    return !t || !He()(et, t.getStatus())
                },
                it = n(27361),
                ot = n.n(it),
                at = n(66604),
                st = n.n(at);
            ! function(e) {
                e[e.PRSError = 0] = "PRSError", e[e.PRSConcurrencyError = 1] = "PRSConcurrencyError", e[e.PRSGeoIpError = 2] = "PRSGeoIpError", e[e
                    .PRSHttpProxyError = 3] = "PRSHttpProxyError", e[e.PRSOwnershipError = 4] = "PRSOwnershipError", e[e
                    .PRSConsentExpiredError = 5] = "PRSConsentExpiredError"
            }(nt || (nt = {}));
            var ct, ut, lt = function() {
                    function e() {}
                    return e.createError = function(t) {
                        var n = nt.PRSError,
                            r = e.ERROR_MAPPING[t.type];
                        r && (n = r);
                        var i = e.ERROR_CODE_MAPPING[t.errorCode];
                        i && (n = i);
                        var o = e.createPRSError(t.message);
                        return o.name = nt[n], o.errorCode = t.errorCode, "string" == typeof t.downstreamReason && (o.downstreamReason = t
                            .downstreamReason), o
                    }, e.createPRSError = function(e, t) {
                        var n = new Error(e);
                        return n.name = nt[nt.PRSError], n.cause = t, n
                    }, e.convertResourceExceptions = function(t) {
                        return "object" != typeof t ? t : st()(t, (function(t) {
                            return t ? e.createError(t) : void 0
                        }))
                    }, e.convertRightsException = function(t) {
                        if (null === t || "object" != typeof t) return t;
                        var n = ot()(t, "selectedEntitlement.rightsException", null);
                        return null !== n && (t.selectedEntitlement.rightsException = e.createError(n)), t
                    }, e.ERROR_MAPPING = {
                        PRSConcurrencyException: nt.PRSConcurrencyError,
                        PRSGeoIpException: nt.PRSGeoIpError,
                        PRSOwnershipException: nt.PRSOwnershipError,
                        PRSConsentExpiredException: nt.PRSConsentExpiredError,
                        PRSException: nt.PRSError,
                        PRSDependencyException: nt.PRSError,
                        PRSInvalidRequestException: nt.PRSError,
                        PRSRightsAndPoliciesException: nt.PRSError,
                        PRSWidevine2LicenseDeniedException: nt.PRSError
                    }, e.ERROR_CODE_MAPPING = {
                        "PRS.NoRights.AnonymizerIP": nt.PRSHttpProxyError
                    }, e
                }(),
                dt = {
                    drm: "deviceDrmOverride",
                    videoQuality: "deviceVideoQualityOverride",
                    audioQuality: "deviceAudioQualityOverride",
                    protocol: "deviceProtocolOverride",
                    protocolOverrideResource: "deviceProtocolOverrideResource",
                    streamingTechnology: "deviceStreamingTechnologyOverride",
                    hdrFormat: "deviceHdrFormatsOverride",
                    videoCodec: "deviceVideoCodecOverride",
                    bitrateAdaptation: "deviceBitrateAdaptationsOverride",
                    fragmentRepresentation: "fragmentRepresentation",
                    vodStreamSupport: "vodStreamSupportOverride"
                },
                pt = function() {
                    function e(t, n, r, i, o, a, c) {
                        void 0 === c && (c = b.LK.getInstance()), this.getAuthContext = t, this.marketplaceId = n, this.deviceProxyBaseUrl = r, this
                            .responseHandler = function(t, n, r, i) {
                                var o = t.getText();
                                if (Ke()(o)) r(lt.createPRSError("PlaybackResourceResponse is null or undefined."));
                                else {
                                    var a;
                                    try {
                                        if (a = JSON.parse(o), !Ke()(a.error)) {
                                            var s = lt.createError(a.error);
                                            return void(He()(e.RETRIABLE_PRS_ERRORS, a.error.type) ? r(s) : i(s))
                                        }
                                        if(_HOMEBREW_NO_AD_IN_RESPONSE && a && a.cuepointPlaylist)
                                        {
                                            delete a.cuepointPlaylist
                                        }
                                        a.errorsByResource = lt.convertResourceExceptions(a.errorsByResource), a.returnedTitleRendition = lt
                                            .convertRightsException(a.returnedTitleRendition)
                                    } catch (e) {
                                        return void r(lt.createPRSError("", e))
                                    }
                                    n(a)
                                }
                            }, this.serviceParameters = (0, s.__assign)({
                                pdcsVersion: a ? "1" : null,
                                firmware: "1",
                                clientId: i,
                                playerType: c.playerName,
                                playerVersion: c.playerVersion,
                                operatingSystemName: c.osName,
                                operatingSystemVersion: c.firmwareVersion,
                                deviceModel: c.modelName,
                                deviceChipset: c.chipset,
                                manufacturer: c.manufacturer,
                                appBundleId: null == o ? void 0 : o.bundle,
                                appStoreUrl: null == o ? void 0 : o.storeUrl,
                                deviceApplicationName: null == o ? void 0 : o.name
                            }, {}), e.sanitize(this.serviceParameters, !0)
                    }
                    return e.wwwFormUrlEncode = function(e) {
                            return ze()(e).map((function(e) {
                                return e.map((function(e) {
                                    return function(e) {
                                        return encodeURIComponent(e).replace(/%20/g, "+")
                                    }(e)
                                })).join("=")
                            })).join("&")
                        }, e.prototype.send = function(t, n, r, i) {
                            var o, a, c, u, l = {
                                asin: t.titleId,
                                consumptionType: t.consumptionType,
                                desiredResources: t.resources.map((function(e) {
                                    return e.resourceName
                                })).join(","),
                                resourceUsage: t.resourceUsage,
                                userWatchSessionId: t.userWatchSessionId,
                                videoMaterialType: t.videoMaterialType,
                                displayHeight: t.displayHeight.toString(),
                                displayWidth: t.displayWidth.toString()
                            };
                            try {
                                for (var d = (0, s.__values)(Object.keys(t.capabilityOverrides || {})), p = d.next(); !p.done; p = d.next()) {
                                    var f = p.value,
                                        h = t.capabilityOverrides[f];
                                    l[dt[f]] = qe()(h) ? h : h.toString()
                                }
                            } catch (e) {
                                o = {
                                    error: e
                                }
                            } finally {
                                try {
                                    p && !p.done && (a = d.return) && a.call(d)
                                } finally {
                                    if (o) throw o.error
                                }
                            }
                            var m = {};
                            null != t.playbackToken && (m.playbackToken = t.playbackToken), t.playbackEnvelope && (m.playbackEnvelope = t
                                .playbackEnvelope);
                            try {
                                for (var g = (0, s.__values)(t.resources), v = g.next(); !v.done; v = g.next()) {
                                    var y = v.value;
                                    Object.assign(l, y.queryParams), Object.assign(m, y.postParams)
                                }
                            } catch (e) {
                                c = {
                                    error: e
                                }
                            } finally {
                                try {
                                    v && !v.done && (u = g.return) && u.call(g)
                                } finally {
                                    if (c) throw c.error
                                }
                            }
                            We()(t.playerAttributes) || (l.playerAttributes = JSON.stringify(t.playerAttributes)), We()(t.weblabTreatments) || (l
                                .weblabTreatments = JSON.stringify(t.weblabTreatments));
                            var E = {
                                endpointPath: e.SERVICE_ENDPOINT,
                                marketplaceId: this.marketplaceId,
                                method: Ue.POST,
                                queryParams: (0, s.__assign)((0, s.__assign)({}, this.serviceParameters), l),
                                headers: {},
                                timeoutMs: 1e4
                            };
                            return e.sanitize(m), We()(m) || (E.headers = {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }, E.body = e.wwwFormUrlEncode(m)), e.sanitize(E), tt(E, this.getAuthContext, this.deviceProxyBaseUrl, this
                                .responseHandler, n, r, i)
                        }, e.SERVICE_ENDPOINT = "/cdp/catalog/GetPlaybackResources", e.RETRIABLE_PRS_ERRORS = ["PRSDependencyException"], e
                        .sanitize = function(t, n) {
                            void 0 === n && (n = !1);
                            var r = t;
                            for (var i in r) Object.hasOwnProperty.call(t, i) && (void 0 === r[i] || !0 === n && null === r[i] ? delete r[i] :
                                "object" == typeof r[i] && null !== r[i] && e.sanitize(r[i], n))
                        }, e
                }(),
                ft = n(39852).G.of("PlaybackResourceRequestBuilder"),
                ht = function() {
                    function e() {
                        this.capabilityOverrides = {}, this.playerAttributes = {}, this.weblabTreatments = {}, this.resources = []
                    }
                    return e.prototype.content = function(e, t, n, r, i) {
                        return this.titleId = e, this.videoMaterialType = t, this.consumptionType = n, this.playbackToken = r, this
                            .playbackEnvelope = i, this
                    }, e.prototype.resource = function(e) {
                        return this.resources.push(e), this
                    }, e.prototype.overrideDeviceCapability = function(e, t) {
                        return this.capabilityOverrides[e] = t, this
                    }, e.prototype.playerAttribute = function(e, t) {
                        return ft(e, "name").not.empty(), ft(t, "playerAttributesValue").not.empty(), Array.isArray(t) && (t = t.join()), this
                            .playerAttributes[e] = t, this
                    }, e.prototype.weblabTreatment = function(e, t) {
                        return ft(e, "weblabName").not.empty(), ft(t, "weblabTreatment").not.empty(), this.weblabTreatments[e] = t, this
                    }, e.prototype.setUserWatchSessionId = function(e) {
                        return this.userWatchSessionId = e, this
                    }, e.prototype.build = function(e) {
                        ft(this.titleId, "titleId").exists(), ft(this.resources, "resources").not.empty();
                        var t = Math.round((0, b.FP)().height),
                            n = Math.round((0, b.FP)().width);
                        return Number.isNaN(t) || t <= 0 || t > 2160 || Number.isNaN(n) || n <= 0 || n > 3840 ? (h.y.warn(
                            "[PlaybackResourceRequestBuilder#build] DisplayHeight or DisplayWidth are not within the expected range: {displayHeight:"
                            .concat((0, b.FP)().height, ",displayWidth:").concat((0, b.FP)().width, "}"), m.R.PBCX), h.y.metric(
                            "LegacyPlayer.Prs.InvalidDisplayDimensions", 1, m.R.PBCX)) : h.y.metric(
                            "LegacyPlayer.Prs.InvalidDisplayDimensions", 0, m.R.PBCX), {
                            titleId: this.titleId,
                            videoMaterialType: this.videoMaterialType,
                            consumptionType: this.consumptionType,
                            playbackToken: this.playbackToken,
                            playbackEnvelope: this.playbackEnvelope,
                            userWatchSessionId: this.userWatchSessionId,
                            capabilityOverrides: (0, s.__assign)({}, this.capabilityOverrides),
                            resources: (0, s.__spreadArray)([], (0, s.__read)(this.resources), !1),
                            resourceUsage: e,
                            playerAttributes: (0, s.__assign)((0, s.__assign)({}, this.getDeviceInformation()), this.playerAttributes),
                            displayHeight: t,
                            displayWidth: n,
                            weblabTreatments: (0, s.__assign)({}, this.weblabTreatments)
                        }
                    }, e.prototype.getDeviceInformation = function() {
                        return {
                            firmwareVersion: b.LK.getInstance().firmwareVersion
                        }
                    }, e
                }();
            ! function(e) {
                e.Streaming = "Streaming", e.Download = "Download"
            }(ct || (ct = {})),
            function(e) {
                e.ImmediateConsumption = "ImmediateConsumption", e.CacheResources = "CacheResources", e.OptimisticFulfillment =
                    "OptimisticFulfillment"
            }(ut || (ut = {}));
            var mt, gt, vt, yt, Et, Tt, Pt, Ct, It, _t = n(35958);
            ! function(e) {
                e.ByteOffsetRange = "ByteOffsetRange", e.SeparateFile = "SeparateFile"
            }(mt || (mt = {})),
            function(e) {
                e.CBR = "CBR", e.CVBR = "CVBR"
            }(gt || (gt = {})),
            function(e) {
                e.H264 = "H264", e.H265 = "H265"
            }(vt || (vt = {})),
            function(e) {
                e.Stereo = "Stereo", e.AC3 = "AC3"
            }(yt || (yt = {})),
            function(e) {
                e.Hdr10 = "Hdr10", e.DolbyVision = "DolbyVision"
            }(Et || (Et = {})),
            function(e) {
                e.UHD = "UHD", e.HD = "HD", e.SD = "SD"
            }(Tt || (Tt = {})),
            function(e) {
                e.Http = "Http", e.Https = "Https", e.Rtmpe = "Rtmpe"
            }(Pt || (Pt = {})),
            function(e) {
                e.AudioVideoUrls = "AudioVideoUrls", e.PlaybackUrls = "PlaybackUrls", e.TrickplayUrls = "TrickplayUrls", e.SubtitleUrls =
                    "SubtitleUrls", e.ForcedNarratives = "ForcedNarratives"
            }(Ct || (Ct = {})),
            function(e) {
                e.Auxiliary = "Auxiliary"
            }(It || (It = {}));
            var Rt, bt, St, At = n(998),
                Ot = n(35443),
                Nt = n(36068),
                Lt = function() {
                    return At.s.getInstance().getCapability(Ot.W.SUPPORTS_HLS)
                },
                Mt = [De.PlaybackUrls, De.SubtitleUrls, De.CuepointPlaylist, De.XRayMetadata, De.TransitionTimecodes, De.WhisperSyncBookmark, De
                    .SubtitlePresets, De.PlaybackSettings, De.ForcedNarratives, De.CatalogMetadata, De.FairPlayApplicationCertificate
                ],
                Dt = [De.PlaybackUrls, De.SubtitleUrls, De.CuepointPlaylist, De.XRayMetadata, De.TransitionTimecodes, De.WhisperSyncBookmark, De
                    .PlaybackSettings, De.ForcedNarratives, De.CatalogMetadata, De.TrickplayUrls, De.FairPlayApplicationCertificate
                ],
                wt = [De.PlaybackUrls, De.PlaybackSettings, De.CatalogMetadata],
                kt = [De.PlaybackUrls, De.PlaybackSettings, De.ForcedNarratives, De.CatalogMetadata, De.FairPlayApplicationCertificate, De
                    .LiveSchedule, De.LinearRestrictions
                ],
                Ft = ((Rt = {})[De.PlaybackUrls] = function(e) {
                    return xe.PlaybackUrls({
                        audioTrackId: e.audioTrackId,
                        languageFeature: ke.MLFv2,
                        liveManifestType: Lt() ? [Fe.Live, Fe.Accumulating] : void 0
                    })
                }, Rt[De.SubtitleUrls] = function(e) {
                    return xe.SubtitleUrls(e.subtitleFormat)
                }, Rt[De.CuepointPlaylist] = function(e) {
                    return (0, we.A)() ? xe.CuepointPlaylist(e.isOptOutAdTracking ? e.isOptOutAdTracking() : void 0, e.getAdvertisingId ? e
                        .getAdvertisingId() : void 0, void 0, e.getGdprPrivacyConsent ? e.getGdprPrivacyConsent() : void 0) : void 0
                }, Rt[De.XRayMetadata] = function(e) {
                    return xe.XRayMetadata(e.xrayConfig.token, e.xrayConfig.playbackMode, e.xrayConfig.deviceClass, e.getCurrentUxLocale())
                }, Rt[De.TransitionTimecodes] = xe.TransitionTimecodes, Rt[De.WhisperSyncBookmark] = xe.WhisperSyncBookmark, Rt[De
                    .SubtitlePresets] = xe.SubtitlePresets, Rt[De.PlaybackSettings] = function() {
                    return Lt() ? void 0 : xe.PlaybackSettings("1.0.0")
                }, Rt[De.TrickplayUrls] = xe.TrickplayUrls, Rt[De.ForcedNarratives] = xe.ForcedNarratives, Rt[De.CatalogMetadata] = function(
                e) {
                    return e.titleDecorationScheme ? xe.CatalogMetadata(e.titleDecorationScheme) : void 0
                }, Rt[De.FairPlayApplicationCertificate] = function() {
                    return Lt() ? xe.FairPlayApplicationCertificate() : void 0
                }, Rt[De.LiveSchedule] = function(e) {
                    return xe.LiveSchedule(e.liveScheduleConfigToken)
                }, Rt[De.LinearRestrictions] = function(e) {
                    return xe.LinearRestrictions(e.restrictionStartTimeOffset, e.restrictionEndTimeOffset)
                }, Rt),
                xt = function() {
                    function e() {}
                    return e.getInstance = function() {
                        return bt || (bt = new e), bt
                    }, e.prototype.fetchDRMLicense = function(e, t, n, r) {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            var i, o, a, c;
                            return (0, s.__generator)(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return i = new pt((function() {
                                                return t
                                            }), n, r), (o = new ht).content(e.titleId, e.videoMaterialType, ct
                                                .Streaming, e.playbackToken), e.playReadyDrmParams ? o.resource(xe
                                                .PlayReadyLicense(e.playReadyDrmParams.challenge, e.playReadyDrmParams
                                                    .keyId)) : e.fairPlayDrmParams && o.resource(xe.FairPlayLicense(e
                                                .fairPlayDrmParams.challenge, e.fairPlayDrmParams.keyId)), e
                                            .streamingTechnologyOverride && o.overrideDeviceCapability(
                                                "streamingTechnology", e.streamingTechnologyOverride), Gt(o), Wt(o, e
                                                .videoMaterialType), a = o.build(ut.ImmediateConsumption), c =
                                            function() {
                                                return !0
                                            }, [4, i.send(a, e.onSuccessfulRequest, e.onFailedRequest, c)];
                                    case 1:
                                        return [2, s.sent()]
                                }
                            }))
                        }))
                    }, e.prototype.fetchTitle = function(e) {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            var t, n;
                            return (0, s.__generator)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        if ("" === e.titleId) throw new Error("Title ID is required");
                                        return t = new pt((function() {
                                                return e.authContext
                                            }), e.marketplaceId, e.deviceProxyBaseUrl, e.clientId, e
                                            .applicationIdentity), n = Ut(e.titleId, e.videoMaterialType, e
                                            .playbackResourceParams, e.playbackToken, e.playbackEnvelope, e
                                            .resources, e.isTrailer), [4, t.send(n)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            }))
                        }))
                    }, e
                }(),
                Ut = function(e, t, n, r, i, o, a) {
                    var c, u, l = new ht;
                    l.content(e, t, ct.Streaming, r, i);
                    var d = o || Bt(t, n);
                    try {
                        for (var p = (0, s.__values)(d), f = p.next(); !f.done; f = p.next()) {
                            var h = f.value;
                            l.resource(h)
                        }
                    } catch (e) {
                        c = {
                            error: e
                        }
                    } finally {
                        try {
                            f && !f.done && (u = p.return) && u.call(p)
                        } finally {
                            if (c) throw c.error
                        }
                    }
                    return Ht(l, t, a), l.build(ut.ImmediateConsumption)
                },
                Bt = function(e, t) {
                    var n;
                    switch (e) {
                        case _t.g.Trailer:
                            n = wt;
                            break;
                        case _t.g.Feature:
                            n = Dt;
                            break;
                        case _t.g.LiveStreaming:
                            n = kt;
                            break;
                        default:
                            n = Mt
                    }
                    return n.map((function(e) {
                        return Ft[e](t)
                    })).filter((function(e) {
                        return void 0 !== e
                    }))
                },
                Ht = function(e, t, n) {
                    var r = (n || t === _t.g.Trailer) && l.b.getInstance().isFeatureEnabled(d.L.LEGACY_PLAYER_DISABLE_HEVC_IN_TRAILERS);
                    !At.s.getInstance().getCapability(Ot.W.SUPPORTS_STREAMING_TECHNOLOGY_DASH) || t === _t.g.LiveStreaming && At.s.getInstance()
                        .getCapability(Ot.W.SUPPORTS_PSEUDO_LIVE_STREAMING) ? Lt() && (e.overrideDeviceCapability("streamingTechnology", Te.HLS), e
                            .overrideDeviceCapability("drm", Ee.FairPlay)) : (e.overrideDeviceCapability("streamingTechnology", Te.DASH), e
                            .overrideDeviceCapability("fragmentRepresentation", mt.ByteOffsetRange), e.overrideDeviceCapability("bitrateAdaptation",
                                [gt.CBR, gt.CVBR]), e.overrideDeviceCapability("drm", Ee.CENC), !r && At.s.getInstance().getCapability(Ot.W
                                .SUPPORTS_HEVC) && e.overrideDeviceCapability("videoCodec", [vt.H264, vt.H265])), At.s.getInstance().getCapability(
                            Ot.W.SUPPORTS_DOLBY_DIGITAL_AUDIO) && e.overrideDeviceCapability("audioQuality", yt.AC3), l.b.getInstance()
                        .isFeatureEnabled(d.L.ENABLE_CARD_STITCHING_ON_RUBY_DEVICES) && e.overrideDeviceCapability("vodStreamSupport", It
                        .Auxiliary), Wt(e, t, r), Gt(e, r), Vt(e)
                },
                Gt = function(e, t) {
                    var n = [];
                    !t && (0, Nt.SX)() && n.push(Et.Hdr10), (0, Nt.Hg)() && n.push(Et.DolbyVision), n.length > 0 && e.overrideDeviceCapability(
                        "hdrFormat", n)
                },
                Wt = function(e, t, n) {
                    _t.g.LiveStreaming, n || !At.s.getInstance().getCapability(Ot.W.SUPPORTS_UHD) ? t === _t.g.LiveStreaming || !At.s.getInstance()
                        .getCapability(Ot.W.HAS_EXTERNAL_OUTPUT) || At.s.getInstance().getCapability(Ot.W.SUPPORTS_HDCP) || e
                        .overrideDeviceCapability("videoQuality", Tt.SD) : e.overrideDeviceCapability("videoQuality", Tt.UHD)
                },
                Vt = function(e) {
                    if (e.overrideDeviceCapability("protocol", Pt.Https), !l.b.getInstance().isFeatureEnabled(d.L
                        .ENFORCE_HTTPS_PLAYBACK_RESOURCES)) {
                        var t = [Ct.SubtitleUrls, Ct.TrickplayUrls];
                        l.b.getInstance().isFeatureEnabled(d.L.PLAYBACK_TIMED_TEXT_HTTP) || t.push(Ct.ForcedNarratives), e.overrideDeviceCapability(
                            "protocolOverrideResource", t)
                    }
                },
                Kt = T("DrmAcquisitionEvent"),
                Zt = ne("DRMLicenseAcquirer"),
                qt = function(e) {
                    Kt.emit({
                        url: e.url,
                        responseType: "Success",
                        responseCode: e.status
                    })
                },
                Yt = function(e) {
                    Kt.emit({
                        url: e.url,
                        responseType: "UnknownError",
                        responseCode: e.status
                    })
                },
                zt = function(e) {
                    if (e && e.encodedLicenseResponse) return {
                        licenseData: e.encodedLicenseResponse,
                        metadata: e.metadata
                    };
                    throw Error("License is missing in PRS response")
                },
                jt = function() {
                    function e(e, t) {
                        this.path = e, this.queryParameters = t
                    }
                    return e.prototype.buildUri = function() {
                        var e = this.path,
                            t = this.buildQueryParamsOnly();
                        return t.length > 0 && (e = e + (-1 === e.indexOf("?") ? "?" : "&") + t), e
                    }, e.prototype.buildQueryParamsOnly = function(e) {
                        return void 0 === e && (e = !1), this.queryParameters.map((function(t) {
                            var n = e ? encodeURIComponent(t[1]) : t[1];
                            return t[0] + "=" + n
                        })).join("&")
                    }, e
                }(),
                Qt = ne("DRMClient"),
                Xt = function() {
                    function e() {}
                    return e.sendRequest = function(e, t, n, r) {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            var i, o, a, c, u, l, d;
                            return (0, s.__generator)(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        i = new jt(e, Object.keys(n).map((function(e) {
                                                return [e, n[e]]
                                            }))), o = i.buildUri(), a = void 0 === r ? this.DEFAULT_RETRY : r, c = 1 +
                                            a, u = [], s.label = 1;
                                    case 1:
                                        return c ? [4, this.fetchDRMResponse(o, t, u)] : [3, 3];
                                    case 2:
                                        return (l = s.sent()) ? [2, l] : (c--, [3, 1]);
                                    case 3:
                                        throw this.reportDrmAcquisitionEvent(o, "NetworkTimeout", 500), d = "".concat(
                                                Qt("sendRequest"), " failed after ").concat(a, " retry. errors: ")
                                            .concat(u), new Error(d)
                                }
                            }))
                        }))
                    }, e.fetchDRMResponse = function(e, t, n) {
                        var r = this;
                        return ae.startTimer(K.DRM_REQUEST_LATENCY, V.PLAYER), (0, Qe.h)(e, t).then((function(e) {
                            return 200 === e.status ? e.text() : Promise.reject({
                                errorStatus: e.status,
                                message: "Request failed with ".concat(e.status, " response")
                            })
                        })).then((function(t) {
                            return ae.stopTimer(K.DRM_REQUEST_LATENCY), r.reportDrmAcquisitionEvent(e, "Success", 200), t
                        })).catch((function(t) {
                            ae.clearTimer(K.DRM_REQUEST_LATENCY), r.reportDrmAcquisitionEvent(e, "UnknownError", t.errorStatus ||
                                500), n.push(t.message)
                        }))
                    }, e.reportDrmAcquisitionEvent = function(e, t, n) {
                        Kt.emit({
                            url: e,
                            responseType: t,
                            responseCode: n
                        })
                    }, e.DEFAULT_RETRY = 2, e
                }(),
                Jt = function() {
                    function e() {}
                    return e.isCenc = function(e) {
                        return e === Ee.CENC
                    }, e.isPlayReady = function(e) {
                        return e === Ee.PlayReady
                    }, e.isSmoothStreaming = function(e) {
                        return this.isPlayReady(e) || this.isCenc(e)
                    }, e.getStreamingTechnology = function(e) {
                        var t = null;
                        return e === Ee.CENC && (t = "DASH"), t
                    }, e.encodeSOAPChallenge = function(e) {
                        return "<" === e.charAt(0) && (e = btoa(e)), ce.playback.encodedSoapChallenge ? encodeURIComponent(e) : e
                    }, e
                }(),
                $t = ne("DRMLicenseService"),
                en = function() {
                    function e() {}
                    return e.prototype.getDRMLicense = function(t, n, r, i, o, a) {
                        return (0, s.__awaiter)(this, void 0, void 0, (function() {
                            var c, u, l, d;
                            return (0, s.__generator)(this, (function(p) {
                                return c = b.LK.getInstance(), u = this.createHeaderParams(o), l = (0, s.__assign)({
                                    version: e.version,
                                    format: e.format,
                                    firmware: c.firmwareVersion,
                                    deviceID: c.deviceId,
                                    device: c.modelName,
                                    deviceTypeID: c.deviceTypeId,
                                    geoLocation: a.geoLocation
                                }, i), this.addAdditionalRequestParameters(l, t), d = {
                                    headers: u,
                                    method: "POST",
                                    body: r
                                }, [2, Xt.sendRequest(n, d, l).catch((function(e) {
                                    var t = "Failed to retrieve DRM license with error: ".concat(e
                                        .message);
                                    throw re.error("".concat($t("getDRMLicense"), " ").concat(t)),
                                        new Error(t)
                                }))]
                            }))
                        }))
                    }, e.prototype.createHeaderParams = function(e) {
                        var t = [
                                ["Content-Type", "application/x-www-form-urlencoded"]
                            ],
                            n = e.getAuthContext();
                        return n && n.accessToken && t.push(["authorization", "Bearer ".concat(n.accessToken)]), t.push(["X-gasc-enabled",
                            "true"
                        ]), new je.P(t)
                    }, e.prototype.addAdditionalRequestParameters = function(e, t) {
                        this.addUhdParameters(e), this.addStreamingTechnology(e, t)
                    }, e.prototype.addUhdParameters = function(e) {
                        At.s.getInstance().getCapability(Ot.W.SUPPORTS_UHD) && (e.deviceVideoQualityOverride = "UHD"), (0, Nt.SX)() ? e
                            .deviceHdrFormatsOverride = "Hdr10" : (0, Nt.Hg)() && (e.deviceHdrFormatsOverride = "DolbyVision")
                    }, e.prototype.addStreamingTechnology = function(e, t) {
                        var n = Jt.getStreamingTechnology(t);
                        n && (e.streamingTechnology = n)
                    }, e.DEFAULT_DRM_PLAYREADY_LICENSE_SERVICE_URL_SUFFIX = "/cdp/drm/GetPlayReadyLicense", e.version = 2, e.format = "json", e
                }(),
                tn = ne("DRMLicenseProvider"),
                nn = function() {
                    function e(e, t, n, r, i) {
                        void 0 === i && (i = {}), this.authContextWrapper = e, this.deviceConfig = t, this.localizationConfig = n, this
                            .deviceProxyBaseUrl = r, this.testAsins = i, this.getLicense = this.getLicense.bind(this), i && (this.testAsins = i)
                    }
                    return e.prototype.getLicense = function(e, t, n, r, i, o) {
                        var a, c = this;
                        if (!e) throw new Error("".concat(tn("getLicense"), " - drmType has not been set"));
                        if (this.deviceConfig.ShouldGetDRMLicenseFromPRS || e === Ee.FairPlay) {
                            var u = t.param,
                                l = {
                                    titleId: u.asinList,
                                    videoMaterialType: u.videoMaterialType,
                                    playbackToken: t.playbackToken,
                                    onSuccessfulRequest: qt,
                                    onFailedRequest: Yt
                                };
                            switch (e) {
                                case Ee.FairPlay:
                                    if (!u.fairPlayKeyId) throw new Error("".concat(tn("getLicense"), " - fairPlayKeyId has not been set"));
                                    l = (0, s.__assign)((0, s.__assign)({}, l), {
                                        streamingTechnologyOverride: Te.HLS,
                                        fairPlayDrmParams: {
                                            challenge: n,
                                            keyId: u.fairPlayKeyId
                                        }
                                    });
                                    break;
                                case Ee.CENC:
                                    l.streamingTechnologyOverride = Te.DASH;
                                default:
                                    l.playReadyDrmParams = {
                                        challenge: (a = n, "<" === a.charAt(0) ? btoa(a) : a)
                                    }
                            }(function(e, t, n, r) {
                                return (0, s.__awaiter)(void 0, void 0, Promise, (function() {
                                    return (0, s.__generator)(this, (function(i) {
                                        return ae.startTimer(K.DRM_REQUEST_LATENCY, V.PLAYER), [2, xt.getInstance()
                                            .fetchDRMLicense(e, t.getAuthContext(), n, r).then((function(t) {
                                                if (ae.stopTimer(K.DRM_REQUEST_LATENCY), e
                                                    .fairPlayDrmParams) return zt(t.fairPlayLicense);
                                                if (e.playReadyDrmParams) return zt(t.playReadyLicense);
                                                throw new Error("Required request config is missing")
                                            })).catch((function(e) {
                                                throw Error("".concat(Zt("acquireDRMLicense"),
                                                        " Failed to retrive the DRM License: ")
                                                    .concat(e))
                                            }))
                                        ]
                                    }))
                                }))
                            })(l, this.authContextWrapper, this.localizationConfig.marketplaceId, this.deviceProxyBaseUrl).then((function(e) {
                                re.info("".concat(tn("getLicense"), " received license metadata ").concat(JSON.stringify(e
                                    .metadata))), i(e.licenseData)
                            })).catch((function(e) {
                                o("DRMLicenseProvider(PRS): ".concat(e))
                            }))
                        } else {
                            var d = new en,
                                p = this.createDRMPostData(n, t);
                            d.getDRMLicense(e, t.url, p, t.param, this.authContextWrapper, this.localizationConfig).then((function(e) {
                                c.onLicenseResponse(e, i, o, r)
                            })).catch((function(e) {
                                o("DRMLicenseProvider(Legacy): ".concat(e))
                            }))
                        }
                    }, e.prototype.onLicenseResponse = function(e, t, n, r) {
                        try {
                            var i = e;
                            this.isTestLicenseNotReceivedErrorAsin(r) && (i = "<Not a JSON string>");
                            var o = JSON.parse(i);
                            if (o.error) {
                                var a = "".concat(tn("onLicenseResponse"), " ").concat(o.error && o.error.errorCode, " ").concat(o.error && o
                                    .error.message);
                                return re.error(a), void n(a)
                            }
                            var s = o.message && o.message.body.licenseResponse || o.playReadyLicense && o.playReadyLicense
                                .encodedLicenseResponse || o.fairPlayLicense && o.fairPlayLicense.encodedLicenseResponse;
                            this.isTestLicenseAcquisitionErrorAsin(r) ? s = null : this.isTestDrmLicenseErrorAsin(r) && (s =
                                "not decodable license"), t(s)
                        } catch (e) {
                            n("DRMLicenseProvider.onLicenseResponse - error while parsing " + e.message)
                        }
                    }, e.prototype.createDRMPostData = function(e, t) {
                        return (t && t.postDataKey ? t.postDataKey : "challenge") + "=" + Jt.encodeSOAPChallenge(e)
                    }, e.prototype.isTestLicenseNotReceivedErrorAsin = function(e) {
                        return this.testAsins && Array.isArray(this.testAsins.licenseNotReceivedError) && this.testAsins.licenseNotReceivedError
                            .indexOf(e) > -1
                    }, e.prototype.isTestLicenseAcquisitionErrorAsin = function(e) {
                        return this.testAsins && Array.isArray(this.testAsins.licenseAcquisitionError) && this.testAsins.licenseAcquisitionError
                            .indexOf(e) > -1
                    }, e.prototype.isTestDrmLicenseErrorAsin = function(e) {
                        return this.testAsins && Array.isArray(this.testAsins.drmLicenseError) && this.testAsins.drmLicenseError.indexOf(e) > -1
                    }, e
                }(),
                rn = function() {
                    function e(e, t) {
                        this.hasPlaybackCompleted = !1, this.recentErrors = [], this.mediaWidth = 0, this.mediaHeight = 0, this.hdrFormat = "None",
                            this.isPlaybackOver = !1, this.id = e, this.options = t
                    }
                    return e.prototype.getId = function() {
                        return this.id
                    }, e.prototype.getRecentErrorString = function() {
                        return 0 === this.recentErrors.length ? "None" : this.recentErrors.map((function(e) {
                            return e.type + ": " + e.message
                        })).join(" | ")
                    }, e.prototype.getPreloadDuration = function() {
                        return ce.video.PRE_LOAD_DURATION
                    }, Object.defineProperty(e.prototype, "IsUHDAvailable", {
                        get: function() {
                            return !1
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "CdnName", {
                        get: function() {
                            return this.cdnName
                        },
                        set: function(e) {
                            this.cdnName = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "ErrorType", {
                        get: function() {
                            return this.errorType
                        },
                        set: function(e) {
                            this.errorType = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.playMediaBase = function() {
                        this.IsPreloading && this.onPreloadToActualPlayback()
                    }, Object.defineProperty(e.prototype, "HTTPStatus", {
                        get: function() {
                            return this.httpStatus
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "IsPlaybackOver", {
                        get: function() {
                            return this.isPlaybackOver
                        },
                        set: function(e) {
                            this.isPlaybackOver = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "StreamIndex", {
                        get: function() {
                            return 0
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.isNativePlayerOptional = function() {
                        return this.Model.nativePlayerOptional
                    }, Object.defineProperty(e.prototype, "IsPreloading", {
                        get: function() {
                            return this.Model.isPreload
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "Model", {
                        get: function() {
                            return this.options.model
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.onPreloadToActualPlayback = function() {
                        this.Model.isPreload = !1
                    }, Object.defineProperty(e.prototype, "BufferSize", {
                        get: function() {
                            return 0
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "IsMainPlayer", {
                        get: function() {
                            return !0
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "MediaWidth", {
                        get: function() {
                            return this.mediaWidth
                        },
                        set: function(e) {
                            this.mediaWidth = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "EventTimestamp", {
                        get: function() {
                            return this.eventTimestamp
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "MediaHeight", {
                        get: function() {
                            return this.mediaHeight
                        },
                        set: function(e) {
                            this.mediaHeight = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "HdrFormat", {
                        get: function() {
                            return this.hdrFormat
                        },
                        set: function(e) {
                            this.hdrFormat = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.getPlaybackSettings = function() {
                        return this.playbackSettings
                    }, e.prototype.setPlaybackSettings = function(e) {
                        this.playbackSettings = e
                    }, Object.defineProperty(e.prototype, "MediaDuration", {
                        get: function() {
                            return this.Model.mediaItem.durationInSecs
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "FrameRateAverage", {
                        get: function() {
                            return 0
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.shouldAutoPlay = function() {
                        return this.options && !1 !== this.options.autoplay
                    }, e
                }(),
                on = [se.NETWORK_DISCONNECTED, se.GENERIC_RECOVERABLE, se.MANIFEST_DOWNLOAD_RETRY, se.PLAYBACK_TIME_TIMEOUT_WARNING, se
                    .UNEXPECTED_PAUSE, se.UNEXPECTED_REBUFFER, se.CLOSED_AFTER_ERROR, se.LICENCE_NOT_ACCEPTED, se.RECOVERABLE_LIVE_STREAMING_FREEZE
                ],
                an = function(e) {
                    function t(n, r, i, o, a, s, c) {
                        var u = e.call(this, n, r) || this;
                        u.deviceConfig = o, u.localizationConfig = a, u.deviceProxyBaseUrl = s, u.updateError = c, u.BUFFER_SIZE = 2;
                        var l = {
                            licenseNotReceivedError: t.ASINS_FOR_TESTING_LICENCE_NOT_RECEIVED_ERROR,
                            licenseAcquisitionError: t.ASINS_FOR_TESTING_LICENCE_ACQUISITION_ERROR,
                            drmLicenseError: t.ASINS_FOR_TESTING_DRM_LICENCE_ERROR
                        };
                        return u.drmLicenseProvider = new nn(i, o, a, s, l), u.onStreamEventPlaybackError = u.onStreamEventPlaybackError.bind(u), ee
                            .subscribe(u.onStreamEventPlaybackError), u
                    }
                    return (0, s.__extends)(t, e), Object.defineProperty(t.prototype, "bufferSize", {
                        get: function() {
                            return 1048576 * this.BUFFER_SIZE
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "bandwidth", {
                        get: function() {
                            return 0
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "BufferFullness", {
                        get: function() {
                            return 0
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "DroppedFrames", {
                        get: function() {
                            return 0
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "PreloadDuration", {
                        get: function() {
                            return ce.video.PRE_LOAD_DURATION
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.destroy = function() {
                        ee.unsubscribe(this.onStreamEventPlaybackError)
                    }, t.prototype.makeTheFragmentDownloadedTrigger = function(e) {
                        return !1
                    }, t.prototype.getFrameRateAverage = function() {
                        return 0
                    }, t.prototype.handleError = function(e, t, n, r) {
                        re.error("Error in " + e + "." + t + ": " + n)
                    }, t.prototype.isRecoverableError = function(e) {
                        return -1 !== on.indexOf(e)
                    }, t.prototype.shouldStopPlaybackOnError = function(e) {
                        return !this.isRecoverableError(e) || e === se.BUFFER_FAILED
                    }, t.prototype.onStreamEventPlaybackError = function(e) {
                        var t;
                        Me.emit(e), e.errorType && (this.shouldStopPlaybackOnError(e.errorType) && this.pause(), (t = e.errorType) && (ae
                                .reportDataPoint(t, V.PLAYER, 1), h.y.metric("LegacyPlayer.Error", 1, {
                                    reportOwner: m.R.PBCX,
                                    customContext: {
                                        error: t
                                    }
                                })), me.indexOf(e.errorType) >= 0 && (ae.reportDataPoint(K.PLAYER_DRM_ERROR, V.PLAYER, 1), h.y.metric(
                                "LegacyPlayer.DrmError", 1, m.R.PBCX)), this.isRecoverableError(e.errorType) ? (ae.reportDataPoint(K
                                    .PLAYER_RECOVERABLE_ERROR, V.PLAYER, 1), h.y.metric("LegacyPlayer.RecoverableError", 1, m.R.PBCX), re
                                .warn("Recoverable error from the player: type=".concat(e.errorType, " message=").concat(e.errorMessage))) :
                            (ae.reportDataPoint(K.PLAYER_NON_RECOVERABLE_ERROR, V.PLAYER, 1), h.y.metric("LegacyPlayer.NonRecoverableError",
                                1, m.R.PBCX), this.updateError(new Error("".concat(e.errorType, ": ").concat(e.errorMessage)), e
                                .errorType)))
                    }, t.ASINS_FOR_TESTING_LICENCE_ACQUISITION_ERROR = ["amzn1.dv.gti.06a9f799-8977-f81f-af23-ec950494da83",
                        "amzn1.dv.gti.ccac36a6-5d56-34e0-d416-935807f9fbcf", "amzn1.dv.gti.e6ac36ca-1103-8aa6-b93e-c82ae4f251c1",
                        "amzn1.dv.gti.90a9f4e6-5164-13d1-5a9a-4d074e71671d", "amzn1.dv.gti.d6abdfdc-c747-f94e-415e-d7d3d90e8027"
                    ], t.ASINS_FOR_TESTING_DRM_LICENCE_ERROR = ["amzn1.dv.gti.a6a9f78f-9834-603d-259f-0dc32f75544b",
                        "amzn1.dv.gti.74ac36a6-ebb9-3944-9a1b-83e26aa3428c", "amzn1.dv.gti.10ac36ca-173f-9e0f-0852-919e39bb3b37",
                        "amzn1.dv.gti.0aa9f571-7e3c-2016-a723-898167b147f3", "amzn1.dv.gti.90abef20-d073-a4a9-5472-4c7883e20e44"
                    ], t.ASINS_FOR_TESTING_LICENCE_NOT_RECEIVED_ERROR = ["amzn1.dv.gti.f6a9f784-1f5e-fabe-7a6b-b8c3de6e2ac6",
                        "amzn1.dv.gti.5aac36a5-df83-b4a6-b3b1-5d816837531a", "amzn1.dv.gti.92ac36c9-feef-77bb-6f43-82cc9bd9b4aa",
                        "amzn1.dv.gti.44a9f62b-fe03-e42d-f8e8-cc16264bfd95", "amzn1.dv.gti.12abea25-e014-307c-a12c-0720e6f465be"
                    ], t
                }(rn);
            ! function(e) {
                e.TimeUpdate = "TimeUpdate"
            }(St || (St = {}));
            var sn, cn, un = function() {
                    function e(e, t, n) {
                        this.auditName = e, this.expireMs = t, this.auditCallback = n, this.onExpire = this.onExpire.bind(this)
                    }
                    return e.prototype.start = function() {
                        this.clear(), this.auditStartTimeMs = Date.now(), this.timer = setTimeout(this.onExpire, this.expireMs)
                    }, e.prototype.clear = function() {
                        this.timer && (clearTimeout(this.timer), this.timer = void 0)
                    }, e.prototype.onExpire = function() {
                        this.timer = void 0, re.error("AuditTimer expired. name=".concat(this.auditName, " auditStartTimeMs=").concat(this
                                .auditStartTimeMs, " auditEndTimeMs=").concat(Date.now(), " expireMs=").concat(this.expireMs, " callback=")
                            .concat(this.auditCallback ? "registered" : "undefined")), ae.reportDataPoint("Player".concat(this.auditName,
                            "AuditTimerExpired"), V.PLAYER, 1), this.auditCallback && this.auditCallback({
                            auditStartTimeMs: this.auditStartTimeMs
                        })
                    }, e
                }(),
                ln = n(67418),
                dn = T("InteractionEvent"),
                pn = ne("PlaybackInterruptionHandler"),
                fn = function() {
                    function e() {
                        this.pauseRequest = null, this.pauseRequestTimeout = null, this.seekRequest = null, this.seekRequestTimeout = null, this
                            .playbackStarted = !1, this.playbackStartTimeout = null, this.unexpectedPauseCount = 0, this.unexpectedRebufferCount = 0
                    }
                    return e.prototype.handlePauseRequest = function() {
                        this.pauseRequest = "Pause", this.pauseRequestTimeout && (clearTimeout(this.pauseRequestTimeout), this
                            .pauseRequestTimeout = null)
                    }, e.prototype.handleSeekRequest = function(e) {
                        this.seekRequest = e, this.seekRequestTimeout && (clearTimeout(this.seekRequestTimeout), this.seekRequestTimeout = null)
                    }, e.prototype.handlePlayerStatePlaying = function() {
                        var t = this;
                        this.pauseRequest && (this.pauseRequestTimeout && clearTimeout(this.pauseRequestTimeout), this.pauseRequestTimeout =
                            setTimeout((function() {
                                t.pauseRequest = null
                            }), e.PAUSE_REQUEST_TIMEOUT)), this.seekRequest && (this.seekRequestTimeout && clearTimeout(this
                            .seekRequestTimeout), this.seekRequestTimeout = setTimeout((function() {
                            t.seekRequest = null
                        }), e.SEEK_REQUEST_TIMEOUT)), this.playbackStarted || (this.playbackStartTimeout = setTimeout((function() {
                            t.playbackStarted = !0
                        }), e.PLAYBACK_START_TIMEOUT))
                    }, e.prototype.handlePlayerStatePaused = function() {
                        this.playbackStarted ? this.pauseRequest || this.seekRequest ? (re.info("".concat(pn("handlePlayerStatePaused"),
                                " Expected playback pause")), this.emitInteractionEventForExpectedInterruption(this.pauseRequest || this
                                .seekRequest)) : (this.unexpectedPauseCount++, this.emitErrorEventForUnexpectedPause()) : this
                            .playbackStartTimeout && (clearTimeout(this.playbackStartTimeout), this.playbackStartTimeout = null)
                    }, e.prototype.handlePlayerStateBuffering = function() {
                        this.playbackStarted ? this.seekRequest ? (re.info("".concat(pn("handlePlayerStateBuffering"),
                            " Expected playback rebuffer")), this.emitInteractionEventForExpectedInterruption(this.seekRequest)) : (this
                            .unexpectedRebufferCount++, this.emitErrorEventForUnexpectedRebuffer()) : this.playbackStartTimeout && (
                            clearTimeout(this.playbackStartTimeout), this.playbackStartTimeout = null)
                    }, e.prototype.emitInteractionEventForExpectedInterruption = function(e) {
                        dn.emit({
                            source: "Player",
                            type: e,
                            input: "Forced",
                            navigation: null,
                            cause: null
                        })
                    }, e.prototype.emitErrorEventForUnexpectedPause = function() {
                        var e = "Number of unexpected pauses: ".concat(this.unexpectedPauseCount);
                        this.emitErrorEvent(se.UNEXPECTED_PAUSE, e)
                    }, e.prototype.emitErrorEventForUnexpectedRebuffer = function() {
                        var e = "Number of unexpected rebuffers: ".concat(this.unexpectedRebufferCount);
                        this.emitErrorEvent(se.UNEXPECTED_REBUFFER, e)
                    }, e.prototype.emitErrorEvent = function(e, t) {
                        re.error("".concat(pn("emitErrorEvent"), " ").concat(e, ": ").concat(t)), ee.emit({
                            errorMessage: t,
                            errorType: e
                        })
                    }, e.PAUSE_REQUEST_TIMEOUT = 1e3, e.SEEK_REQUEST_TIMEOUT = 1e3, e.PLAYBACK_START_TIMEOUT = 500, e
                }(),
                hn = ne("PlayerController.ruby-player"),
                mn = function(e) {
                    function t(n, i, o, a, s, u, l, d, p) {
                        var f = e.call(this, n, i, o, a, s, u, l.onError) || this;
                        return f.getBandwidthEstimate = d, f.setBandwidthEstimate = p, f.cryptoErrorBitmask = 131072, f.isPlaying = !1, f
                            .hasReceivedTimeUpdateAfterSeek = !1, f.availableBitrates = {}, f.retryAllowed = !0, f.canStopPlayback = !1, f
                            .isDisconnected = !1, f.manifestDownloadFailRetries = 0, f.playerManifestRequestedMessageReceived = !1, f
                            .shouldHandleDownloadRetryMessage = !0, f.shouldHandleMetadataMessage = !0, f.onMessageLicenseRequest = function(e) {
                                try {
                                    re.debug("".concat(hn("onMessageLicenseRequest"), " player_drm_license_requested")), A.emit(r);
                                    var t = decodeURIComponent(e.request),
                                        n = atob(t);
                                    f.drmLicenseProvider.getLicense(f.drmType, f.drmRequestInfo, n, f.productAsin, f.onDRMLicenseSuccess.bind(f), f
                                        .onDRMLicenseError.bind(f))
                                } catch (e) {
                                    re.error("Could not get a license: " + e.message), f.onDRMLicenseError(e.message)
                                }
                            }, f.onMessageNetworkDisconnected = function() {
                                re.debug("".concat(hn("onMessageNetworkDisconnected"))), f.isNetworkDisconnected || (f.isNetworkDisconnected = !0, O
                                    .emit(r))
                            }, f.onMessagePlayerStateChangePlaying = function() {
                                f.playbackInterruptionHandler.handlePlayerStatePlaying(), f.isPlaying = !0, f.isPaused = !1, f.isDisconnected = !1,
                                    N.emit({
                                        elapsedTimeMillis: 1e3 * f.ElapsedTimeSeconds
                                    }), f.adapterCallbacks.onContentState(c.Mi.Ready), f.adapterCallbacks.onPlaybackState(c.q9.Playing), L.emit(r),
                                    M.emit(r), f.isSeeking && (f.isSeeking = !1, re.debug("".concat(hn("onMessagePlayerStateChangePlaying"),
                                        " player_seek_completed ").concat(f.currentTimeSecs))), f.isBuffering && (f.isBuffering = !1, f
                                        .clearBufferTimeout(), re.debug("".concat(hn("onMessagePlayerStateChangePlaying"),
                                            " player_buffer_completed"))), f.isStartingPlayback && (f.isStartingPlayback = !1, re.debug("".concat(
                                        hn("onMessagePlayerStateChangePlaying"), " player_ready"))), f.timeUpdateAuditTimer.start(), f
                                    .sendPlaybackProgress()
                            }, f.onMessagePlayerStateChangePaused = function() {
                                f.playbackInterruptionHandler.handlePlayerStatePaused(), f.timeUpdateAuditTimer.clear(), f.isSeeking || (f
                                        .adapterCallbacks.onPlaybackState(c.q9.Paused), D.emit()), f.isPlaying = !1, f.isVideoPauseInitiated = !1, f
                                    .isPaused = !0, L.emit(r), f.shouldStartPlaybackAfterPlayerConfirmsPause && f.play()
                            }, f.onMessagePlayerStateChangeBuffering = function() {
                                f.playbackInterruptionHandler.handlePlayerStateBuffering(), f.adapterCallbacks.onContentState(c.Mi.Waiting), f
                                    .adapterCallbacks.onPlaybackState(c.q9.Paused), f.isBuffering = !0, w.emit(), f.startBufferTimeout()
                            }, f.onMessagePlayerStateChangeStopped = function() {
                                f.timeUpdateAuditTimer.clear(), f.adapterCallbacks.onPlaybackState(c.q9.Paused), (f.isStopping || f.isPlaying) && (f
                                    .isPlaying = !1, f.isStopping ? re.debug("".concat(hn("onMessagePlayerStateChangeStopped"),
                                        " player_stopped")) : (re.debug("".concat(hn("onMessagePlayerStateChangeStopped"), " player_ended")), f
                                        .stop(), f.hasPlaybackCompleted = !0, k.emit(), f.adapterCallbacks.onPlaybackComplete()))
                            }, f.onReportOutputMessage = function(e) {
                                switch (f.eventTimestamp = Date.now(), e.type) {
                                    case R.wN.BANDWIDTH:
                                        return void f.onReportOutputBandwidth(e);
                                    case R.wN.HEURISTIC:
                                        return void f.onReportOutputHeuristic(e);
                                    case R.wN.MANIFEST_REQUESTED:
                                        return void f.onReportOutputManifestRequested();
                                    case R.wN.MANIFEST_OBTAINED:
                                        return void f.onReportOutputManifestObtained(e);
                                    case R.wN.DROPPED_FRAME:
                                        return void f.onReportOutputDroppedFrame();
                                    case R.wN.VIDEO_QUALITY_LEVEL:
                                        return void f.onReportOutputVideoQualityLevel(e);
                                    case R.wN.VIDEO_FRAME_QUALITY_LEVEL_CHANGE:
                                        return void f.onMessageVideoFrameQualityLevelChange(e);
                                    case R.wN.MAX_BUFFER_CAPACITY:
                                        return void f.onReportOutputMaxBufferCapacity(e);
                                    case R.wN.DOWNLOAD_RETRY:
                                        return void(f.shouldHandleDownloadRetryMessage && f.onManifestOrFragmentDownloadError(e));
                                    case R.wN.SMOOTH_STREAMING:
                                        return void f.onReportOutputSmoothStreaming(e);
                                    case R.wN.METADATA:
                                        return void(f.shouldHandleMetadataMessage && f.onReportOutputMetadata(e));
                                    case R.wN.PLAYREADY_LICENSE_REQUESTED:
                                        return void f.onPlayReadyLicenseRequested();
                                    case R.wN.PLAYREADY_LICENSE_ACQUIRED:
                                        return void f.onPlayReadyLicenseAcquired();
                                    default:
                                        return
                                }
                            }, f.onMessageNetworkConnected = function() {
                                re.debug("".concat(hn("onMessageNetworkConnected"))), F.emit(r), f.isNetworkDisconnected && (f
                                    .isNetworkDisconnected = !1, f.broadcastError(t.className, "_onMessageNetworkConnected",
                                        "Network disconnected", se.NETWORK_DISCONNECTED), f.shuttingDownPromise || f.isPaused || f.play())
                            }, f.startBufferTimeout = function() {
                                f.bufferTimeout && f.clearBufferTimeout(), f.bufferTimeout = setTimeout((function() {
                                    re.error("[PlayerController.ruby-player] Excessive buffering of ".concat(3e4, "ms."), f.CdnName ? [f
                                        .CdnName
                                    ] : [])
                                }), 3e4)
                            }, f.clearBufferTimeout = function() {
                                f.bufferTimeout && (clearTimeout(f.bufferTimeout), f.bufferTimeout = void 0)
                            }, f.onMessagePlayerStateChange = function(e) {
                                switch (f.eventTimestamp = Date.now(), e.state) {
                                    case R.fL.PLAYING:
                                        return void f.onMessagePlayerStateChangePlaying();
                                    case R.fL.PAUSED:
                                        return void f.onMessagePlayerStateChangePaused();
                                    case R.fL.BUFFERING:
                                        return void f.onMessagePlayerStateChangeBuffering();
                                    case R.fL.STOPPED:
                                        return void f.onMessagePlayerStateChangeStopped()
                                }
                            }, f.onMessagePlayerStateChangePlaying = f.onMessagePlayerStateChangePlaying.bind(f), f.onReportOutputMessage = f
                            .onReportOutputMessage.bind(f), f.onMessagePlayerStateChange = f.onMessagePlayerStateChange.bind(f), f.onMessageError =
                            f.onMessageError.bind(f), f.onMessageNetworkDisconnected = f.onMessageNetworkDisconnected.bind(f), f
                            .onMessageNetworkConnected = f.onMessageNetworkConnected.bind(f), f.onMessageLicenseRequest = f.onMessageLicenseRequest
                            .bind(f), f.onMessageShutdownComplete = f.onMessageShutdownComplete.bind(f), f.onMessagePlaybackTime = f
                            .onMessagePlaybackTime.bind(f), f.onManifestOrFragmentDownloadError = f.onManifestOrFragmentDownloadError.bind(f), f
                            .shutdown = f.shutdown.bind(f), f.handleError = f.handleError.bind(f), f.stop = f.stop.bind(f), f.handleInitialSeek = f
                            .handleInitialSeek.bind(f), f.startPlayback = f.startPlayback.bind(f), f.raisePlaybackTimeTimeoutError = f
                            .raisePlaybackTimeTimeoutError.bind(f), f.timeUpdateAuditTimer = new un(St.TimeUpdate, ce.playback
                                .PLAYBACK_TIME_TIMEOUT_MS, f.raisePlaybackTimeTimeoutError), f.adapterCallbacks = l, f.playbackInterruptionHandler =
                            new fn, f.playbackMode = i.mode, f.isStartingPlayback = !0, f.bandwidthEstimateBitsPerSecond = 0, f
                            .currentBandwidthBitsPerSecond = 0, f.droppedFrames = 0, f
                    }
                    return (0, s.__extends)(t, e), Object.defineProperty(t.prototype, "IsDisconnected", {
                            get: function() {
                                return this.isDisconnected
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "BufferSize", {
                            get: function() {
                                return this.MaxBufferSize
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "IsUHDAvailable", {
                            get: function() {
                                return this.isUHDAvailable
                            },
                            set: function(e) {
                                this.isUHDAvailable = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "BufferFullness", {
                            get: function() {
                                return this.currentBufferSize
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "DroppedFrames", {
                            get: function() {
                                return this.droppedFrames
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "ElapsedTimeSeconds", {
                            get: function() {
                                return this.currentTimeSecs
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "MaxBufferSize", {
                            get: function() {
                                return this.maxBufferSize
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "IsHDAvailable", {
                            get: function() {
                                return this.isHDAvailable
                            },
                            set: function(e) {
                                this.isHDAvailable = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "IsPlaying", {
                            get: function() {
                                return this.isPlaying
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "IsPlayerReady", {
                            get: function() {
                                return this.isPlayerReady
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "IsVideoPauseInitiated", {
                            get: function() {
                                return this.isVideoPauseInitiated
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "IsBuffering", {
                            get: function() {
                                return this.isBuffering
                            },
                            set: function(e) {
                                this.isBuffering = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "CurrentTime", {
                            get: function() {
                                return this.currentTimeSecs
                            },
                            set: function(e) {
                                this.currentTimeSecs = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "IsPaused", {
                            get: function() {
                                return this.isPaused
                            },
                            set: function(e) {
                                this.isPaused = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "IsSeeking", {
                            get: function() {
                                return this.isSeeking
                            },
                            set: function(e) {
                                this.isSeeking = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "DroppedFrameCount", {
                            get: function() {
                                return this.droppedFrames
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "DurationMillis", {
                            get: function() {
                                return 1e3 * this.durationSeconds
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "StartingPlayback", {
                            get: function() {
                                return this.isStartingPlayback
                            },
                            set: function(e) {
                                this.isStartingPlayback = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "IsStopping", {
                            get: function() {
                                return this.isStopping
                            },
                            set: function(e) {
                                this.isStopping = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "CurrentBitrate", {
                            get: function() {
                                return this.currentBitrate
                            },
                            set: function(e) {
                                this.currentBitrate = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "InitialSeekTime", {
                            get: function() {
                                return this.initialSeekTime
                            },
                            set: function(e) {
                                this.initialSeekTime = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "IsFirstBufferComplete", {
                            get: function() {
                                return this.firstBufferComplete
                            },
                            set: function(e) {
                                this.firstBufferComplete = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "ManifestDownloadFailRetries", {
                            get: function() {
                                return this.manifestDownloadFailRetries
                            },
                            set: function(e) {
                                this.manifestDownloadFailRetries = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "ProductAsin", {
                            get: function() {
                                return this.productAsin
                            },
                            set: function(e) {
                                this.productAsin = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.initPlayer = function() {
                            return (0, s.__awaiter)(this, void 0, Promise, (function() {
                                var e, t, n;
                                return (0, s.__generator)(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return this.initializePlayerVersion(), [4, this.sendBandwidthEstimate()];
                                        case 1:
                                            return r.sent(), this.attachMediaSource(this.options.model.mediaItem), [4, this
                                                .setupDevicePlayerConfigurations()
                                            ];
                                        case 2:
                                            return r.sent(), this.removeEventListeners(), this.addEventListeners(), [4, R.vl
                                                .sendMessage(R.Fx.SET_LOG_LEVEL, {
                                                    level: "disabled"
                                                })
                                            ];
                                        case 3:
                                            return r.sent(), [4, R.vl.sendMessage(R.Fx.SCREEN_DIMENSIONS_REQUEST)];
                                        case 4:
                                            r.sent(), r.label = 5;
                                        case 5:
                                            return r.trys.push([5, 7, , 8]), [4, new Promise((function(e) {
                                                "function" != typeof ln.iJ.hasPlatformVideoNode || ln.iJ
                                                    .hasPlatformVideoNode() ? e() : (0, ln.mo)("player", (
                                                        function(t) {
                                                            var n = new ln.u5.VideoNodeProxy;
                                                            n.setPivotMode([ln.u5.PivotMode.MIN, ln.u5
                                                                    .PivotMode.MIN, ln.u5.PivotMode
                                                                    .MIN
                                                                ]), n.setHeight(pe), n.setWidth(de), n
                                                                .setVideoStreamId(t.video
                                                            .getStreamId()), ln.u5.getRootNode()
                                                                .addChild(n), e(n)
                                                        }))
                                            }))];
                                        case 6:
                                            return (e = r.sent()) && (this.videoNode = e), ae.reportDataPoint(K
                                                .RUBY_PLAYER_INIT, V.PLAYER, 1), h.y.metric("LegacyPlayer.Ruby.Init", 1,
                                                m.R.PBCX), this.rubyVersion || (ae.reportDataPoint(K
                                                .RUBY_PLAYER_INIT_WITHOUT_VERSION, V.PLAYER, 1), h.y.metric(
                                                "LegacyPlayer.Ruby.InitWithoutVersion", 1, m.R.PBCX)), [3, 8];
                                        case 7:
                                            return t = r.sent(), n = "Error creating video node: ".concat(t), re.error(""
                                                .concat(hn("initPlayer"), " ").concat(n)), this.broadcastError(
                                                "PlayerController.ruby-player", "initPlayer", n, se.RENDERING_FAILED), [
                                                3, 8
                                            ];
                                        case 8:
                                            return S.Z.getInstance().then((function(e) {
                                                return x.emit({
                                                    hdcpVersion: e.hdcpVersion
                                                })
                                            })), [2]
                                    }
                                }))
                            }))
                        }, t.prototype.playMedia = function(e) {
                            if (!this.currentUrl) throw new Error("".concat(hn("playMedia"), " this.currentUrl is undefined"));
                            this.openRubyPlayer(this.currentUrl, e.playbackStartTime), this.currentTimeSecs = e.playbackStartTime / 1e3, this
                                .startPlayback(e.playbackStartTime)
                        }, t.prototype.isRetryAllowed = function() {
                            return this.retryAllowed && !this.shuttingDownPromise
                        }, t.prototype.play = function(e) {
                            this.shouldStartPlaybackAfterPlayerConfirmsPause = !1;
                            try {
                                e && e > 0 && this.seek(e), this.canStopPlayback = !0, this.firstBufferComplete = !0, R.vl.sendMessage(R.Fx
                                    .PLAYER_CONTROL, {
                                        call_function: "play"
                                    }), this.startPlaybackTimeout()
                            } catch (e) {
                                this.handleError(t.className, "play", "unable to play", se.GENERIC)
                            }
                        }, t.prototype.pause = function() {
                            this.isPlaying && !this.isVideoPauseInitiated && (this.isVideoPauseInitiated = !0, this.playbackInterruptionHandler
                                .handlePauseRequest(), R.vl.sendMessage(R.Fx.PLAYER_CONTROL, {
                                    call_function: "pause"
                                }))
                        }, t.prototype.playAfterPause = function() {
                            var e = !this.isPlaying && !this.isVideoPauseInitiated;
                            this.shouldStartPlaybackAfterPlayerConfirmsPause = !e, e && this.play()
                        }, t.prototype.isPlayingHD = function() {
                            return this.currentBitrate >= ce.HD_BITRATE
                        }, t.prototype.stop = function() {
                            return this.shuttingDownPromise || this.isStopping ? (re.debug("".concat(hn("stop"),
                                " Not stopping the player, it has already been stopped")), this.shutdown()) : (re.info("".concat(hn("stop"),
                                    " Stopping player")), this.isNetworkDisconnected && this.broadcastError("PlayerController.ruby-player",
                                    "stop", "Network disconnected and playback stopped", se.NETWORK_DISCONNECTED), this.deviceConfig
                                .DoNotStopRubyOnShutdown ? re.debug("".concat(hn("stop"), " Not stopping the player on shutdown")) : this
                                .canStopPlayback ? (re.debug("".concat(hn("stop"), " setting this.isStopping to true")), this.isStopping = !0, R
                                    .vl.sendMessage(R.Fx.PLAYER_CONTROL, {
                                        call_function: "stop"
                                    }), this.canStopPlayback = !1) : re.debug("".concat(hn("stop"), " Stopped already")), U.emit(), this
                                .videoNode && ((e = this.videoNode, (0, s.__awaiter)(void 0, void 0, Promise, (function() {
                                    return (0, s.__generator)(this, (function(t) {
                                        return ln.u5.getRootNode().removeChild(e), [2]
                                    }))
                                }))).catch((function(e) {
                                    return re.error("".concat(hn("stop"), " Error removing video node: ").concat(e))
                                })), this.videoNode = void 0), this.shutdown());
                            var e
                        }, t.prototype.supplyLicenseToPlayer = function(e) {
                            try {
                                re.debug("".concat(hn("supplyLicenseToPlayer"), " Obtained license from API")), e && e.length > 0 ? (B.emit(r), R.vl
                                    .sendMessage(R.Fx.LICENSE_RESPONSE, {
                                        response: e
                                    })) : (re.error("".concat(hn("supplyLicenseToPlayer"), " License obtained is null")), this
                                    .currentErrorCode = this.cryptoErrorBitmask, this.currentErrorMessage = "License obtained is null", this
                                    .currentErrorType = se.LICENCE_ACQUISITION_ERROR, this.submitDummyLicenseToPlayer())
                            } catch (e) {
                                re.error("".concat(hn("supplyLicenseToPlayer"), " ").concat(e)), this.currentErrorCode = this.cryptoErrorBitmask,
                                    this.currentErrorMessage = e.message, this.currentErrorType = se.LICENCE_ACQUISITION_ERROR, this
                                    .submitDummyLicenseToPlayer()
                            }
                        }, t.prototype.shutdown = function() {
                            var e = this;
                            return this.shuttingDownPromise || (this.shuttingDownPromise = new Promise((function(t) {
                                e.isBuffering = !1, e.timeUpdateAuditTimer.clear(), e.clearBufferTimeout(), re.info("".concat(hn(
                                    "disconnect"), " disconnecting player")), R.vl.sendMessage(R.Fx.PLAYER_CONTROL, {
                                    call_function: "shutdown"
                                }), e.cancelPlaybackTimeout(), R.GW.once((function() {
                                    re.info("".concat(hn("onMessageShutdownComplete"), " Player shutdown complete")), e
                                        .destroy(), e.shuttingDownPromise = void 0, t()
                                }))
                            }))), this.shuttingDownPromise
                        }, t.prototype.makeTheFragmentDownloadedTrigger = function(e) {
                            return e >= ce.numOfFragmentsToDownload
                        }, t.prototype.setRetryAllowed = function(e) {
                            this.retryAllowed = e
                        }, t.prototype.openRubyPlayer = function(e, n) {
                            try {
                                this.shouldSendStartTimeOnOpen() ? (R.vl.sendMessage(R.Fx.PLAYER_CONTROL, {
                                    call_function: "open",
                                    function_param: e,
                                    start_time_seconds: n / 1e3 || 0
                                }), re.debug("".concat(hn("openRubyPlayer"), " Ruby player opened at position ").concat(n, "ms"))) : (R.vl
                                    .sendMessage(R.Fx.PLAYER_CONTROL, {
                                        call_function: "open",
                                        function_param: e
                                    }), re.debug("".concat(hn("openRubyPlayer"), " Ruby player opened")))
                            } catch (e) {
                                re.error("".concat(hn("openRubyPlayer"), " Exception in openRubyPlayer, unable to open ruby player: ").concat(e
                                    .message)), this.handleError(t.className, "openRubyPlayer", "unable to open ruby player", se.GENERIC)
                            }
                        }, t.prototype.onDRMLicenseError = function(e) {
                            this.currentErrorCode = this.cryptoErrorBitmask, this.currentErrorMessage = e;
                            var n = se.LICENCE_NOT_RECEIVED;
                            this.currentErrorType = n, this.broadcastError(t.className, "onDRMLicenseError", e, n), this
                            .submitDummyLicenseToPlayer()
                        }, t.prototype.seek = function(e) {
                            var t = Math.trunc(e / 1e3),
                                n = t >= this.currentTimeSecs;
                            !this.hasReceivedTimeUpdateAfterSeek && this.deviceConfig.EnforceSequentialSeeking || (this.deviceConfig
                                .DisablePauseBeforeSeek || this.pause(), this.isSeeking = !0, this.hasReceivedTimeUpdateAfterSeek = !1, this
                                .isPlaying = !1, this.currentTimeSecs = t, this.timeUpdateAuditTimer.clear(), this.playbackInterruptionHandler
                                .handleSeekRequest(n ? "SeekForward" : "SeekBackward"), R.vl.sendMessage(R.Fx.PLAYER_CONTROL, {
                                    call_function: "seek",
                                    function_param: e
                                }), this.play())
                        }, t.prototype.raiseError = function(e, n) {
                            var r = "code [" + e + "]",
                                i = "Generic error" + (n ? " message [" + n + "]" : "");
                            re.info("".concat(hn("raiseError"), " errorDescription=").concat(r, " genericErrorMessage=").concat(i));
                            var o = se.GENERIC,
                                a = !1;
                            (t.PLAYREADY_DRM_ERROR_CODES_TO_RETRY.indexOf(e) > -1 || t.PLAYER_ERROR_CODES_TO_RETRY.indexOf(e) > -1) && (a = !0), (t
                                .PLAYREADY_DRM_ERROR_CODES_TO_RETRY.indexOf(e) > -1 || e >= t.PLAYREADY_DRM_ERROR_RANGE[0] && e <= t
                                .PLAYREADY_DRM_ERROR_RANGE[1]) && (o = se.DRMLICENSEERROR), 0 != (e & t.RECOVERABLE_ERROR_CODE_BITMASK) && (o = se
                                    .GENERIC_RECOVERABLE), e === t.PLAYREADY_DRM_ERROR_DECRYPT_REGIONS_FAILED && (re.info("".concat(hn(
                                    "raiseError"), " Received unexpected PlayReady Error 0x8002002A. Treat this case as GENERIC_RECOVERABLE"
                                    )), o = se.GENERIC_RECOVERABLE), e === t.GENERIC_ERROR_CODE && -1 !== n.indexOf("bandwidthEstimateFile") && (re
                                    .info("".concat(hn("raiseError"),
                                        " Received bandwidthEstimateFile related error. Treat this case as GENERIC_RECOVERABLE")), o = se
                                    .GENERIC_RECOVERABLE), (-1 !== t.HDMI_DISCONNECT_ERRORS.indexOf(e) || n && t.HDMI_DISCONNECT_ERROR_MESSAGES
                                    .some((function(e) {
                                        return n.includes(e)
                                    }))) && (o = se.HDMI_DISCONNECT_ERROR), a && this.isRetryAllowed() ? this.retryPlaybackOnError(n, o, r, e) :
                                o === se.GENERIC_RECOVERABLE ? this.broadcastError(t.className, "raiseError", i, o, r) : this.handleError(t
                                    .className, "raiseError", i, o, r)
                        }, t.prototype.onReportOutputMetadata = function(e) {
                            re.debug("".concat(hn("onReportOutputMetadata"), " ")), this.adapterCallbacks.onPlayerMetadata({
                                    durationSec: e.duration
                                }), this.isPlayerReady = !0, void 0 === e.uid && (e.uid = 0), H.emit(r), this.durationSeconds = e.duration, this
                                .isRequestingLicense || this.handleInitialSeek(), this.shouldHandleMetadataMessage = !1
                        }, t.prototype.onMessageVideoFrameQualityLevelChange = function(e) {
                            try {
                                this.eventTimestamp = (new Date).getTime();
                                var t = e.bitrate / 1e3,
                                    n = this.currentBitrate;
                                this.MediaWidth = e.width, this.MediaHeight = e.height, G.emit({
                                    oldBitrateVal: n,
                                    newBitrateVal: t
                                }), t !== n && this.emitVideoQualityChange(e.bitrate, e.width, e.height), re.debug("".concat(hn(
                                    "onMessageVideoFrameQualityLevelChange"), " ").concat(JSON.stringify(e)))
                            } catch (e) {
                                re.error("".concat(hn("onMessageVideoFrameQualityLevelChange"), " ").concat(e.name, ": ").concat(e.message, "\n")
                                    .concat(e.stack))
                            }
                        }, t.prototype.handleInitialSeek = function() {
                            this.initialSeekTime && (this.shouldSendStartTimeOnOpen() ? (this.initialSeekTime = 0, this.firstBufferComplete = !0) :
                                (re.debug("Resuming play back from(ms) " + this.initialSeekTime), this.seek(this.initialSeekTime), this
                                    .initialSeekTime = 0, this.firstBufferComplete = !0))
                        }, t.prototype.onMessagePlaybackTime = function(e) {
                            re.debug("".concat(hn("onMessagePlaybackTime"), " ").concat(JSON.stringify(e))), this.currentTimeSecs = e.playback_time,
                                this.hasReceivedTimeUpdateAfterSeek || this.isSeeking || (this.hasReceivedTimeUpdateAfterSeek = !0), this
                                .timeUpdateAuditTimer.clear(), this.sendPlaybackProgress()
                        }, t.prototype.onMessageShutdownComplete = function() {
                            this.isDisconnected || (re.debug("".concat(hn("onMessageShutdownComplete"))), this.removeEventListeners(), this
                                    .isDisconnected = !0), this.videoNode = void 0, W.emit(), h.y.info("".concat(hn("onMessageShutdownComplete"),
                                    " Bandwidth estimate: ").concat(this.bandwidthEstimateBitsPerSecond, " bits/s, current bandwidth: ").concat(
                                    this.currentBandwidthBitsPerSecond, " bits/s"), m.R.PBCX), ce.REPORT_BANDWIDTH_ESTIMATE_TO_RUBY && this
                                .bandwidthEstimateBitsPerSecond > 0 && this.setBandwidthEstimate(this.bandwidthEstimateBitsPerSecond), this
                                .deviceConfig.UnloadRubyOnShutdown && (0, ln.HA)().hawaii.unload()
                        }, t.prototype.handleError = function(e, t, n, r, i) {
                            this.pause(), ye[r] <= 2 && (this.isBuffering = !1, this.clearBufferTimeout(), this.timeUpdateAuditTimer.clear()), this
                                .broadcastError(e, t, n, r, i)
                        }, t.prototype.isRecoverableError = function(t) {
                            return e.prototype.isRecoverableError.call(this, t) || t === se.RUBY_DEADLOCK_WARNING || t === se.RUBY_DEADLOCK_ERROR
                        }, t.prototype.shouldSendStartTimeOnOpen = function() {
                            return !this.deviceConfig.disableRubyStartTime && (!this.rubyVersion || (0, R.NW)(this.rubyVersion, "3.3.3") >= 0)
                        }, t.prototype.initializePlayerVersion = function() {
                            var e = b.LK.getInstance().playerVersion;
                            e ? this.rubyVersion = e : re.error("".concat(hn("initializePlayerVersion"), " ruby player version is undefined"))
                        }, t.prototype.emitVideoQualityChange = function(e, t, n) {
                            q.emit({
                                type: i.Video,
                                bitrate: e,
                                width: t,
                                height: n
                            })
                        }, t.prototype.emitAudioQualityChange = function(e) {
                            q.emit({
                                type: i.Audio,
                                bitrate: e
                            })
                        }, t.prototype.sendBandwidthEstimate = function() {
                            return (0, s.__awaiter)(this, void 0, Promise, (function() {
                                var e, t;
                                return (0, s.__generator)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!ce.REPORT_BANDWIDTH_ESTIMATE_TO_RUBY) return [3, 4];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), e = this, [4, this.getBandwidthEstimate()];
                                        case 2:
                                            return e.bandwidthEstimateBitsPerSecond = n.sent(), R.vl.sendMessage(R.Fx
                                                .SET_BANDWIDTH_ESTIMATE, {
                                                    bandwidth: this.bandwidthEstimateBitsPerSecond
                                                }), [3, 4];
                                        case 3:
                                            return t = n.sent(), re.warn("".concat(hn("sendBandwidthEstimate"), ": ")
                                                .concat(t)), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))
                        }, t.prototype.setupDevicePlayerConfigurations = function() {
                            return (0, s.__awaiter)(this, void 0, void 0, (function() {
                                var e, t, n, r, i;
                                return (0, s.__generator)(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return e = this.getConfig(), Y.emit({
                                                platform: "Miyagi",
                                                treatment: e.playbackSettingsId
                                            }), t = e.stringifiedConfig, n = e.playbackSettingsId, re.info("".concat(hn(
                                                "setupDevicePlayerConfigurations"), " version: ").concat(this
                                                .rubyVersion, " stringifiedConfig: ").concat(t,
                                                " playbackSettingsId: ").concat(n)), this.isStartingPlayback = !0, r = {
                                                config: btoa(t)
                                            }, ce.SUPPORTS_CONFIGURABLE_NUMBER_OF_AUDIO_CHANNELS ? (i = r, [4, this
                                                .deviceConfig.isSurroundSoundDisabled()
                                            ]) : [3, 2];
                                        case 1:
                                            i.max_num_audio_channels = o.sent() ? 2 : 6, re.debug("".concat(hn(
                                                    "setupDevicePlayerConfigurations"),
                                                " Setting max number of audio channels to ").concat(r
                                                .max_num_audio_channels)), o.label = 2;
                                        case 2:
                                            return R.vl.sendMessage(R.Fx.PLAYER_INIT, r), [2]
                                    }
                                }))
                            }))
                        }, t.prototype.getConfig = function() {
                            return new Ne(this.deviceConfig).getRubyConfig(this.playbackMode, this.rubyVersion, this.CdnName, this
                                .getPlaybackSettings())
                        }, t.prototype.attachMediaSource = function(e) {
                            if (this.isNativePlayerOptional()) return null;
                            var t = e.playbackUrlSet,
                                n = t.urlManifest;
                            this.IsHDAvailable = n.videoQuality === le, this.drmType = n.drm, e.drmRequestInfo && (this.drmRequestInfo = e
                                    .drmRequestInfo, this.drmRequestInfo.param.desiredResources = ge.PlayReadyLicense), n.cdn && (this.CdnName = n
                                    .cdn), e.playbackSettings && this.setPlaybackSettings(e.playbackSettings), this.productAsin = e.asin, this
                                .currentUrl = n.url, z.emit({
                                    urlSetId: t.urlSetId,
                                    manifestUrl: this.currentUrl
                                })
                        }, t.prototype.onReportOutputManifestObtained = function(e) {
                            re.debug("".concat(hn("onReportOutputManifestObtained"), " player_connection_established")), j.emit(r), Q.emit(r)
                        }, t.prototype.onReportOutputDroppedFrame = function() {
                            this.droppedFrames += 1, X.emit({
                                droppedFrame: this.droppedFrames
                            }), re.debug("".concat(hn("onReportOutputDroppedFrame")))
                        }, t.prototype.onReportOutputVideoQualityLevel = function(e) {
                            var t = e.bitrate,
                                n = e.width,
                                r = e.height;
                            this.eventTimestamp = (new Date).getTime(), this.availableBitrates[t] = {
                                width: n,
                                height: r
                            }, re.debug("".concat(hn("onReportOutputVideoQualityLevel"), " ").concat(JSON.stringify(e)))
                        }, t.prototype.onManifestOrFragmentDownloadError = function(e) {
                            if (this.isManifestError(e))
                                if (J.emit(r), re.warn("".concat(hn("onManifestOrFragmentDownloadError"), " ").concat(JSON.stringify(e))), this
                                    .shouldRetryOnManifestError()) {
                                    this.manifestDownloadFailRetries++;
                                    var n = "Unable to download manifest " + this.currentUrl + " " + JSON.stringify(e);
                                    this.handleError(t.className, "_onManifestError", n, se.MANIFEST_DOWNLOAD_RETRY)
                                } else this.shouldHandleDownloadRetryMessage = !1, this.manifestDownloadFailRetries = 0, this.clearBufferTimeout(),
                                    this.isBuffering && (this.isBuffering = !1), n = "Unable to download manifest after retries " + this
                                    .currentUrl + " " + JSON.stringify(e), this.handleError(t.className, "_onManifestError", n, se
                                        .MANIFEST_DOWNLOAD_FAILED);
                            if (this.isAudioOrVideoFragmentError(e)) {
                                var i = this.convertNativeToClientFragmentData(e);
                                $.emit({
                                    fragmentInfo: i
                                })
                            }
                        }, t.prototype.onMessageError = function(e) {
                            var t = e.code,
                                n = e.message;
                            re.info("".concat(hn("onMessageError"), " errorCode=").concat(t, " errorMessage=").concat(n, " currentErrorCode=")
                                    .concat(this.currentErrorCode, " currentErrorMessage=").concat(this.currentErrorMessage, " ")), this
                                .currentErrorCode && (t = this.currentErrorCode, this.currentErrorCode = void 0), this.currentErrorMessage && (n =
                                    this.currentErrorMessage, this.currentErrorMessage = void 0), this.shuttingDownPromise || function() {
                                    try {
                                        var e = window.lifecycle;
                                        return Boolean(e && "function" == typeof e.inBackgroundMode && e.inBackgroundMode())
                                    } catch (e) {
                                        return !1
                                    }
                                }() ? re.error("".concat(hn("onMessageError"),
                                        " Error, but not reporting as player has been disconnected or is in Background: ").concat(JSON.stringify(
                                    n))) : this.raiseError(t, n)
                        }, t.prototype.convertNativeToClientFragmentData = function(e) {
                            return {
                                streamType: e.download_type,
                                fragmentIndex: e.fragment_index,
                                fragmentDuration: Math.round(e.fragment_duration / 1e3),
                                bitrate: e.bitrate / 1e3,
                                timeToFirstByte: Math.round(e.time_to_respond / 1e3),
                                timeToLastByte: Math.round(e.time_to_download / 1e3),
                                serverIp: this.intIpToStringIp(e.ip_address),
                                fragmentUrl: this.convertNativeUrlToMuveUrl(e.fragment_uri),
                                fragmentSize: e.fragment_size,
                                bufferFullness: this.BufferFullness,
                                maxBufferCapacity: this.MaxBufferSize
                            }
                        }, t.prototype.intIpToStringIp = function(e) {
                            return (e >> 24 & 255) + "." + (e >> 16 & 255) + "." + (e >> 8 & 255) + "." + (255 & e)
                        }, t.prototype.convertNativeUrlToMuveUrl = function(e) {
                            var t = (e = e || "").indexOf("/Fragments");
                            return -1 !== t && (e = e.substr(0, t)), e
                        }, t.prototype.onDRMLicenseSuccess = function(e) {
                            re.debug("".concat(hn("onDRMLicenseSuccess"), " ")), this.supplyLicenseToPlayer(e), this.handleInitialSeek()
                        }, t.prototype.startPlaybackTimeout = function() {
                            void 0 === this.playbackStartTimeout && ce.playback.PLAYBACK_START_TIMEOUT_VAL_MS && (this.playbackStartTimeoutDate =
                                Date.now(), re.debug("".concat(hn("startPlaybackTimeout"), " Starting playback time out")), this
                                .playbackStartTimeout = setTimeout(this.raisePlayerDeadlockError.bind(this), ce.playback
                                    .PLAYBACK_START_TIMEOUT_VAL_MS))
                        }, t.prototype.cancelPlaybackTimeout = function() {
                            this.playbackStartTimeout && (clearTimeout(this.playbackStartTimeout), this.playbackStartTimeout = void 0, this
                                .playbackStartTimeoutDate = void 0)
                        }, t.prototype.raisePlayerDeadlockError = function() {
                            var e = Boolean(this.productAsin);
                            if (this.playbackStartTimeout && e && !this.playerManifestRequestedMessageReceived) {
                                re.error("".concat(hn("raisePlayerDeadlockError"), " Start playback timeout limit hit"));
                                var n = "Player has failed to request the manifest in " + ce.playback.PLAYBACK_START_TIMEOUT_VAL_MS +
                                    " milliseconds leading to player deadlock error.";
                                n += " Waiting for a response from " + this.playbackStartTimeoutDate + " to " + Date.now() + ".", this
                                    .broadcastError(t.className, "_raisePlayerDeadlockError", n, se.RUBY_DEADLOCK_WARNING)
                            }
                        }, t.prototype.raisePlaybackTimeTimeoutError = function(e) {
                            if (!this.shuttingDownPromise) {
                                re.error("".concat(hn("raisePlaybackTimeTimeoutError"), " Waiting for playback_time message has timed out."));
                                var n = "Player failed to send playback_time message in " + ce.playback.PLAYBACK_TIME_TIMEOUT_MS +
                                    " milliseconds after entering playing state.";
                                n += " Waited from " + e.auditStartTimeMs + " to " + (new Date).getTime() + ".";
                                var r = this.productAsin ? se.PLAYBACK_TIME_TIMEOUT_WARNING : se.PLAYBACK_TIME_TIMEOUT_ERROR;
                                this.broadcastError(t.className, "_raisePlaybackTimeTimeoutError", n, r)
                            }
                        }, t.prototype.sendPlaybackProgress = function() {
                            this.isPlaying && !this.isBuffering && I.emit({
                                elapsedTimeMillis: 1e3 * this.currentTimeSecs,
                                livehead: this.adapterCallbacks.getLiveHeadPosition()
                            })
                        }, t.prototype.retryPlaybackOnError = function(e, n, r, i) {
                            var o = this;
                            this.isRetryAllowed() && (this.isDisconnected = !1, re.warn("".concat(hn("retryPlaybackOnError"), " Error in playback ")
                                    .concat(e, ", desc: ").concat(r, ", url: ").concat(this.currentUrl)), this.adapterCallbacks
                                .onRecoverableError("0x".concat(i.toString(16)), e).catch((function(e) {
                                    o.handleError(t.className, "retryPlaybackOnError", e.message, n, r)
                                })))
                        }, t.prototype.broadcastError = function(e, t, n, r, i) {
                            re.error("[".concat(e, "#").concat(t, "][").concat(this.CdnName, "] ").concat(r, ": ").concat(n)), ee.emit({
                                errorMessage: n,
                                errorType: r,
                                errorDescription: i
                            })
                        }, t.prototype.submitDummyLicenseToPlayer = function() {
                            R.vl.sendMessage(R.Fx.LICENSE_RESPONSE, {
                                response: "dumm"
                            })
                        }, t.prototype.startPlayback = function(e) {
                            !this.rubyVersion || (0, R.NW)(this.rubyVersion, "3.0.0") >= 0 ? (re.debug("".concat(hn("startPlayback"),
                                    " call seek before licenseAcquisition to avoid deadlock for updated Ruby major version")), this
                                .initialSeekTime = e, this.play()) : (re.debug("".concat(hn("startPlayback"),
                                    " call play and seek in licenseReceived for older Ruby major version")), this.play(e), this
                                .initialSeekTime = 0)
                        }, t.prototype.isManifestError = function(e) {
                            return "manifest" === e.download_type && "download_failed" === e.retry_type
                        }, t.prototype.shouldRetryOnManifestError = function() {
                            return this.manifestDownloadFailRetries < ce.playback.MANIFEST_DOWNLOAD_FAIL_RETRY_NO
                        }, t.prototype.isAudioOrVideoFragmentError = function(e) {
                            return ("audio" === e.download_type || "video" === e.download_type) && "download_failed" === e.retry_type
                        }, t.prototype.onPlayReadyLicenseRequested = function() {
                            this.isRequestingLicense = !0
                        }, t.prototype.onPlayReadyLicenseAcquired = function() {
                            this.isRequestingLicense = !1, this.handleInitialSeek()
                        }, t.prototype.onReportOutputMaxBufferCapacity = function(e) {
                            this.maxBufferSize = this.convertBytesToMegabytesAndRound(e.value)
                        }, t.prototype.convertBytesToMegabytesAndRound = function(e) {
                            return Math.round(e / 1048576)
                        }, t.prototype.onReportOutputBandwidth = function(e) {
                            this.eventTimestamp = (new Date).getTime(), "video" === e.download_type && (this.currentBandwidthBitsPerSecond = e
                                .bandwidth), re.debug("".concat(hn("onReportOutputBandwidth"), " current bandwidth:").concat(this
                                .currentBandwidthBitsPerSecond))
                        }, t.prototype.onReportOutputHeuristic = function(e) {
                            e && "video" === e.download_type && e.bandwidth_estimate > 0 && (this.eventTimestamp = (new Date).getTime(), this
                                .bandwidthEstimateBitsPerSecond = e.bandwidth_estimate, re.debug("".concat(hn("onReportOutputHeuristic"), " ")
                                    .concat(JSON.stringify(e))))
                        }, t.prototype.addEventListeners = function() {
                            R.Gv.subscribe(this.onReportOutputMessage), R._B.subscribe(this.onMessagePlayerStateChange), R.xz.subscribe(this
                                .onMessageError), R.Ju.subscribe(this.onMessageNetworkDisconnected), R.Eg.subscribe(this
                                .onMessageNetworkConnected), R.ZT.subscribe(this.onMessageLicenseRequest), R.GW.subscribe(this
                                .onMessageShutdownComplete), R.Mp.subscribe(this.onMessagePlaybackTime)
                        }, t.prototype.removeEventListeners = function() {
                            R.Gv.unsubscribeAll(), R._B.unsubscribeAll(), R.xz.unsubscribeAll(), R.Ju.unsubscribeAll(), R.Eg.unsubscribeAll(), R.ZT
                                .unsubscribeAll(), R.GW.unsubscribeAll(), R.Mp.unsubscribeAll()
                        }, t.prototype.onReportOutputSmoothStreaming = function(e) {
                            var t, n;
                            try {
                                this.eventTimestamp = (new Date).getTime(), "video" === e.download_type ? (0 === this.currentBitrate && (this
                                    .currentBitrate = e.bitrate / 1e3), this.currentBufferSize = this.convertBytesToMegabytesAndRound(e
                                    .buffer_fullness)) : "audio" === e.download_type && e.bitrate && this.currentAudioBitrate !== e.bitrate && (
                                    this.currentAudioBitrate = e.bitrate, this.emitAudioQualityChange(e.bitrate));
                                var r = this.convertNativeToClientFragmentData(e);
                                "video" === e.download_type && (r.resolutionWidth = null === (t = this.availableBitrates[e.bitrate]) || void 0 ===
                                    t ? void 0 : t.width, r.resolutionHeight = null === (n = this.availableBitrates[e.bitrate]) || void 0 ===
                                    n ? void 0 : n.height), te.emit({
                                    fragmentInfo: r
                                })
                            } catch (e) {
                                re.error("".concat(hn("onReportOutputSmoothStreaming"), " ").concat(e.name, " _onReportOutputSmoothStreaming ")
                                    .concat(e.message, "\n").concat(e.stack))
                            }
                        }, t.prototype.onReportOutputManifestRequested = function() {
                            re.debug("".concat(hn("onReportOutputManifestRequested"), " player_connection_attempted")), this
                                .playerManifestRequestedMessageReceived = !0
                        }, t.className = "RubyPlayerController", t.PLAYREADY_DRM_ERROR_CODES_TO_RETRY = [131072, 2147614721, 2147614753, 2147614754,
                            2147614755, 2147614771, 2147614772, 2147614773, 2147614774, 2147614776
                        ], t.PLAYREADY_DRM_ERROR_DECRYPT_REGIONS_FAILED = 2147614762, t.PLAYER_ERROR_CODES_TO_RETRY = [2147549441, 2147549443,
                            2147549444, 2147549447, 2147549448, 2147549449, 2147551233
                        ], t.PLAYREADY_DRM_ERROR_RANGE = [2147614720, 2147680255], t.RECOVERABLE_ERROR_CODE_BITMASK = 134217728, t
                        .GENERIC_ERROR_CODE = 2147483648, t.HDMI_DISCONNECT_ERRORS = [2147680518, 2281898245, 2281898246], t
                        .HDMI_DISCONNECT_ERROR_MESSAGES = ["HDCP_ERROR_0x88030106", "HDCP_ERROR_88030106"], t.PLAYBACK_PROGRESS_WARNING_LIMIT = 10,
                        t
                }(an),
                gn = mn,
                vn = n(23493),
                yn = n.n(vn);
            ! function(e) {
                e.START = "start", e.IMPRESSION = "impression", e.PAUSE = "pause", e.REWIND = "rewind", e.CLOSE = "close", e.ERROR = "error", e
                    .SKIP = "skip", e.ACCEPT_INVITATION = "acceptInvitation"
            }(sn || (sn = {})),
            function(e) {
                e.FIRST_QUARTILE = "firstQuartile", e.MIDPOINT = "midpoint", e.THIRD_QUARTILE = "thirdQuartile", e.COMPLETE = "complete", e
                    .BREAK_START = "breakStart", e.BREAK_END = "breakEnd"
            }(cn || (cn = {}));
            var En = ne("VodAdsReporter"),
                Tn = function() {
                    function e() {
                        this.reportSuccessMetrics = function(e) {
                            ae.reportDataPoint(K.VOD_ADS_TRACKING_REPORTING_SUCCESS, V.PLAYER, 1), h.y.metric(
                                "LegacyPlayer.VodAdTracking.TrackingReportSuccessRate", 1, m.R.PBCX), e === sn.IMPRESSION && (ae
                                .reportDataPoint(K.VOD_ADS_IMPRESSION_REPORTING_SUCCESS, V.PLAYER, 1), h.y.metric(
                                    "LegacyPlayer.VodAdTracking.ImpressionReportSuccessRate", 1, m.R.PBCX))
                        }, this.reportFailureMetrics = function(e) {
                            ae.reportDataPoint(K.VOD_ADS_TRACKING_REPORTING_FAILURE, V.PLAYER, 1), h.y.metric(
                                "LegacyPlayer.VodAdTracking.TrackingReportSuccessRate", 0, m.R.PBCX), e === sn.IMPRESSION && (ae
                                .reportDataPoint(K.VOD_ADS_IMPRESSION_REPORTING_FAILURE, V.PLAYER, 1), h.y.metric(
                                    "LegacyPlayer.VodAdTracking.ImpressionReportSuccessRate", 0, m.R.PBCX))
                        }
                    }
                    return e.prototype.reportTrackingEvents = function(e, t, n) {
                        return (0, s.__awaiter)(this, void 0, void 0, (function() {
                            var r, i, o, a, c, u, l, d;
                            return (0, s.__generator)(this, (function(p) {
                                switch (p.label) {
                                    case 0:
                                        p.trys.push([0, 5, 6, 7]), r = (0, s.__values)(e), i = r.next(), p.label = 1;
                                    case 1:
                                        return i.done ? [3, 4] : (o = i.value, a = o.type, c = this.replaceStrings(o
                                            .url, n), [4, this.reportEventToUrl(c, a, t)]);
                                    case 2:
                                        p.sent(), p.label = 3;
                                    case 3:
                                        return i = r.next(), [3, 1];
                                    case 4:
                                        return [3, 7];
                                    case 5:
                                        return u = p.sent(), l = {
                                            error: u
                                        }, [3, 7];
                                    case 6:
                                        try {
                                            i && !i.done && (d = r.return) && d.call(r)
                                        } finally {
                                            if (l) throw l.error
                                        }
                                        return [7];
                                    case 7:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.reportEventToUrl = function(e, t, n) {
                        return (0, s.__awaiter)(this, void 0, void 0, (function() {
                            var r, i = this;
                            return (0, s.__generator)(this, (function(o) {
                                return r = "".concat(En("reportTrackingEvents"), " [").concat(String(t), "@").concat(
                                    JSON.stringify(n), "]"), [2, (0, Qe.h)(e, {
                                    method: "GET"
                                }).then((function(n) {
                                    n.ok ? (i.reportSuccessMetrics(t), re.info("".concat(r,
                                        " reported successfully, url:").concat(e))) : (i
                                        .reportFailureMetrics(t), re.error("".concat(r,
                                            " reported unsuccessfully, status: ").concat(n
                                            .status, " url:").concat(e)))
                                })).catch((function(n) {
                                    i.reportFailureMetrics(t), re.error("".concat(r,
                                        " reported unsuccessfully, error: ").concat(n,
                                        " , url: ").concat(e))
                                }))]
                            }))
                        }))
                    }, e.prototype.replaceStrings = function(e, t) {
                        var n, r;
                        try {
                            for (var i = (0, s.__values)(Object.keys(t)), o = i.next(); !o.done; o = i.next()) {
                                var a = o.value,
                                    c = "[".concat(a, "]"),
                                    u = t[a];
                                u && (e = e.replace(c, u).replace(encodeURIComponent(c), u))
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                o && !o.done && (r = i.return) && r.call(i)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return e
                    }, e
                }();

            function Pn(e, t) {
                var n, r, i = [];
                if (e && e.actionBasedTrackingEvents) {
                    var o = e.actionBasedTrackingEvents,
                        a = o[t];
                    if (a) {
                        try {
                            for (var c = (0, s.__values)(a), u = c.next(); !u.done; u = c.next()) {
                                var l = u.value;
                                i.push({
                                    url: l,
                                    type: t
                                })
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                u && !u.done && (r = c.return) && r.call(c)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        delete o[t]
                    }
                }
                return i
            }

            function Cn(e, t) {
                return Math.abs(e.eventTimeMs - t) <= 1500
            }

            function In(e, t) {
                return e.eventTimeMs - 1500 < t
            }
            var _n, Rn = function() {
                    function e(e, t) {
                        var n = this;
                        this.urlMacroReplaceMap = {}, this.onStreamEventPause = function() {
                                n.reportEventForEventType(sn.PAUSE)
                            }, this.onStreamEventStop = function() {
                                n.reportEventForEventType(sn.CLOSE), n.clean()
                            }, this.onStreamEventPlaybackComplete = function() {
                                n.reportEventForEventType(sn.CLOSE)
                            }, this.onStreamEventPlaybackError = function() {
                                n.reportEventForEventType(sn.ERROR), n.clean()
                            }, this.onInterpolatedPlaybackProgress = function(e) {
                                n.playbackPositionInMs = e.elapsedTimeMs, n.throttledInterpolatedPlaybackProgress()
                            }, this.onThrottledInterpolatedPlaybackProgress = function() {
                                var e = n.getCurrentAdManifestInfo();
                                if (e) {
                                    var t = Pn(e, sn.START),
                                        r = Pn(e, sn.IMPRESSION),
                                        i = function(e, t) {
                                            for (var n, r, i = [], o = [], a = 0, c = t.timeBasedTrackingEvents; a < c.length && In(c[a], e);) {
                                                var u = c[a];
                                                if (Cn(u, e)) {
                                                    try {
                                                        for (var l = (n = void 0, (0, s.__values)(u.eventUrls)), d = l.next(); !d.done; d = l
                                                        .next()) {
                                                            var p = d.value;
                                                            i.push({
                                                                url: p,
                                                                type: u.eventType
                                                            })
                                                        }
                                                    } catch (e) {
                                                        n = {
                                                            error: e
                                                        }
                                                    } finally {
                                                        try {
                                                            d && !d.done && (r = l.return) && r.call(l)
                                                        } finally {
                                                            if (n) throw n.error
                                                        }
                                                    }
                                                    o.push(a)
                                                }
                                                a++
                                            }
                                            return o && c.splice(o[0], o.length), i
                                        }(n.playbackPositionInMs, e),
                                        o = n.getContext(n.playbackPositionInMs, e);
                                    n.vodAdsReporter.reportTrackingEvents((0, s.__spreadArray)((0, s.__spreadArray)((0, s.__spreadArray)([], (0, s
                                        .__read)(r), !1), (0, s.__read)(t), !1), (0, s.__read)(i), !1), o, n.urlMacroReplaceMap)
                                }
                            }, this.onPlayerTearDownComplete = function() {
                                n.clean()
                            }, this.reportEventForEventType = function(e) {
                                var t = n.getCurrentAdManifestInfo();
                                if (t) {
                                    var r = Pn(t, e),
                                        i = n.getContext(n.playbackPositionInMs, t);
                                    n.vodAdsReporter.reportTrackingEvents(r, i, n.urlMacroReplaceMap)
                                }
                            }, this.getCurrentAdManifestInfo = function() {
                                return n.vastManifestInfoRepository.getAdManifestInfoAt(n.playbackPositionInMs)
                            }, this.subscribe = function() {
                                D.subscribe(n.onStreamEventPause), U.subscribe(n.onStreamEventStop), k.subscribe(n.onStreamEventPlaybackComplete),
                                    ee.subscribe(n.onStreamEventPlaybackError), C.subscribe(n.onInterpolatedPlaybackProgress), W.subscribe(n
                                        .onPlayerTearDownComplete)
                            }, this.unsubscribe = function() {
                                D.unsubscribe(n.onStreamEventPause), U.unsubscribe(n.onStreamEventStop), k.unsubscribe(n
                                    .onStreamEventPlaybackComplete), ee.unsubscribe(n.onStreamEventPlaybackError), C.unsubscribe(n
                                    .onInterpolatedPlaybackProgress), W.unsubscribe(n.onPlayerTearDownComplete)
                            }, this.vodAdsReporter = new Tn, this.vastManifestInfoRepository = e, this.playbackPositionInMs = 0, this
                            .throttledInterpolatedPlaybackProgress = yn()(this.onThrottledInterpolatedPlaybackProgress, 1e3), this.setConsumptionId(
                                t), this.subscribe()
                    }
                    return e.prototype.clean = function() {
                        this.unsubscribe()
                    }, e.prototype.setConsumptionId = function(e) {
                        e && (this.urlMacroReplaceMap.CONSUMPTIONID = e)
                    }, e.prototype.getContext = function(e, t) {
                        return {
                            adStartTime: t.startTimeMs,
                            adDuration: t.durationMs,
                            playbackPosition: e
                        }
                    }, e
                }(),
                bn = T("PlaybackStateChange");
            ! function(e) {
                e.AD = "Ad", e.AD_TRANSITION = "AdTransition", e.AUX = "Aux", e.FEATURE = "Feature", e.UNKNOWN = "Unknown"
            }(_n || (_n = {}));
            var Sn, An = ne("PlaybackContentTracker"),
                On = function() {
                    function e(e, t, n) {
                        var r = this;
                        void 0 === n && (n = 0), this.epochOffset = n, this.initialReportMade = !1, this.onInterpolatedPlaybackProgress = function(
                            e) {
                            r.updatePlayhead(e.elapsedTimeMillis), r.throttledInterpolatedPlaybackProgress()
                        }, this.onStreamEventPlaybackStart = function(e) {
                            r.updatePlayhead(e.elapsedTimeMillis + r.epochOffset), r.maybeEmitPlaybackContentChange()
                        }, this.updatePlayhead = function(e) {
                            r.playhead = e
                        }, this.onThrottledInterpolatedPlaybackProgress = function() {
                            r.initialReportMade && r.currentContentManifestInfo === r.getManifestInfoAtPlayhead() || r
                                .maybeEmitPlaybackContentChange()
                        }, this.maybeEmitPlaybackContentChange = function() {
                            var e = r.getManifestInfoAtPlayhead();
                            r.initialReportMade = !0, r.currentContentManifestInfo = e, e ? e.contentType !== _n.UNKNOWN ? bn.emit({
                                contentId: e.contentId,
                                contentType: e.contentType,
                                playhead: r.playhead
                            }) : re.error("".concat(An("maybeEmitPlaybackContentChange"),
                                " Unknown content type detected. This indicates an issue with content type parsing")) : bn.emit({
                                playhead: r.playhead,
                                contentType: _n.FEATURE,
                                contentId: r.mainContentId
                            })
                        }, this.vastManifestInfoRepository = e, this.mainContentId = t, this.throttledInterpolatedPlaybackProgress = yn()(this
                            .onThrottledInterpolatedPlaybackProgress, 1e3), this.subscribe()
                    }
                    return e.prototype.clean = function() {
                        this.unsubscribe()
                    }, e.prototype.updateMainContentId = function(e) {
                        this.mainContentId = e
                    }, e.prototype.getManifestInfoAtPlayhead = function() {
                        return this.vastManifestInfoRepository.getVastManifestInfoAt(this.playhead)
                    }, e.prototype.subscribe = function() {
                        P.subscribe(this.onInterpolatedPlaybackProgress), N.subscribe(this.onStreamEventPlaybackStart)
                    }, e.prototype.unsubscribe = function() {
                        P.unsubscribe(this.onInterpolatedPlaybackProgress), N.unsubscribe(this.onStreamEventPlaybackStart)
                    }, e
                }(),
                Nn = n(63105),
                Ln = n.n(Nn),
                Mn = n(13311),
                Dn = n.n(Mn),
                wn = n(94174),
                kn = n.n(wn),
                Fn = function() {
                    function e(e) {
                        this.vastManifestInfo = e
                    }
                    return e.prototype.getVastManifestInfo = function() {
                        return this.vastManifestInfo
                    }, e.prototype.getVastManifestInfoAt = function(e) {
                        return Dn()(this.vastManifestInfo, (function(t) {
                            return kn()(e, t.startTimeMs, t.endTimeMs)
                        }))
                    }, e.prototype.getAdManifestInfo = function() {
                        return Ln()(this.vastManifestInfo, (function(e) {
                            return e.contentType === _n.AD
                        }))
                    }, e.prototype.getAdManifestInfoAt = function(e) {
                        var t = this.getVastManifestInfoAt(e);
                        return t && t.contentType === _n.AD ? t : void 0
                    }, e
                }(),
                xn = ne("AuditPingClient"),
                Un = function() {
                    function e() {}
                    return e.sendRequest = function(e, t) {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            var n, r, i, o, a, c;
                            return (0, s.__generator)(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        n = new jt(e, Object.keys(t).map((function(e) {
                                                return [e, t[e]]
                                            }))), r = n.buildUri(), i = this.DEFAULT_RETRY, o = 1 + i, a = [], s.label =
                                            1;
                                    case 1:
                                        return o ? [4, this.tryRequest(r, a)] : [3, 3];
                                    case 2:
                                        return (c = s.sent()) ? [2, c] : (o--, [3, 1]);
                                    case 3:
                                        return re.error("".concat(xn("sendRequest"), " failed pinging ").concat(e,
                                                " after ").concat(i, " retry. errors: ").concat(a), []), ae
                                            .reportDataPoint(K.AUDIT_PING_ERROR, V.PLAYER, 1), h.y.metric(
                                                "LegacyPlayer.AuditPingFailure", 1, m.R.PBCX), [2]
                                }
                            }))
                        }))
                    }, e.tryRequest = function(e, t) {
                        return (0, Qe.h)(e).then((function(e) {
                            return 200 === e.status ? e.text() : (t.push("Request failed with ".concat(e.status, " response")),
                                Promise.resolve(void 0))
                        })).catch((function(e) {
                            return t.push(e.message), Promise.resolve(void 0)
                        }))
                    }, e.DEFAULT_RETRY = 2, e
                }(),
                Bn = n(52153),
                Hn = n.n(Bn);
            ! function(e) {
                e[e.Start = 1] = "Start", e[e.End = 3] = "End"
            }(Sn || (Sn = {}));
            var Gn, Wn = function() {
                    function e(e, t) {
                        this.auditPings = e, this.adIdentifier = t
                    }
                    return e.prototype.reportStart = function() {
                        this.reportAuditPing(this.adIdentifier, Sn.Start)
                    }, e.prototype.reportEnd = function() {
                        this.reportAuditPing(this.adIdentifier, Sn.End)
                    }, e.prototype.reportAuditPing = function(e, t) {
                        var n = Hn()(e.sessionId).toString(),
                            r = Hn()(e.streamId).toString();
                        this.sendAuditPing(n, r, t, Math.floor(Date.now() / 1e3).toString())
                    }, e.prototype.sendAuditPing = function(e, t, n, r) {
                        return (0, s.__awaiter)(this, void 0, void 0, (function() {
                            var i, o, a, c, u;
                            return (0, s.__generator)(this, (function(l) {
                                try {
                                    for (i = (0, s.__values)(this.auditPings), o = i.next(); !o.done; o = i.next()) a =
                                        o.value, Un.sendRequest(a.url, {
                                            sessionid: e,
                                            streamid: t,
                                            pingtype: n,
                                            createtm: r
                                        })
                                } catch (e) {
                                    c = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        o && !o.done && (u = i.return) && u.call(i)
                                    } finally {
                                        if (c) throw c.error
                                    }
                                }
                                return [2]
                            }))
                        }))
                    }, e
                }(),
                Vn = Wn,
                Kn = T(c.rg.Error),
                Zn = T("TimelineChange"),
                qn = T("TimeDataChange"),
                Yn = T("AudioTrackMetadata"),
                zn = T("ActiveVariantChange"),
                jn = T("AdManifestInfoReceived"),
                Qn = T("PlayerOpen"),
                Xn = T(c.rg.ContentError),
                Jn = T("ContentStateChange"),
                $n = T("PlaybackStateChange"),
                er = T("TimelineEnded"),
                tr = T("StreamGroupChange");
            ! function(e) {
                e.ReloadPlayerOptions = "ReloadPlayerOptions", e.ReloadManifestUrl = "ReloadManifestUrl"
            }(Gn || (Gn = {}));
            var nr, rr, ir, or = n(55877),
                ar = T("AdIdentifierRequested"),
                sr = function() {
                    function e() {
                        this.sessionId = (0, or.v4)()
                    }
                    return e.prototype.generate = function() {
                        var e = {
                            _type: "Nielsen",
                            sessionId: this.sessionId,
                            streamId: (0, or.v4)()
                        };
                        return ar.emit({
                            adIdentifier: e
                        }), e
                    }, e
                }(),
                cr = ne("avlrc-player/ContinuousPlayManager"),
                ur = function() {
                    function e(e) {
                        this.fetchContinuousPlayData = e
                    }
                    return e.prototype.load = function(e, t) {
                        this.hasPlayed = !1, this.continuousPlayData = void 0, this.contentConfig = e, this.timelineManager = t
                    }, e.prototype.destroy = function() {
                        this.hasPlayed = !1, this.timelineManager = void 0, this.contentConfig = void 0, this.continuousPlayData = void 0
                    }, e.prototype.onPlaybackStarted = function() {
                        var e = this;
                        if (!1 === this.hasPlayed && this.contentConfig && !this.contentConfig.disableContinuousPlayDiscovery && this
                            .contentConfig.videoMaterialType === y.g.Feature && this.contentConfig.streamingType !== v.S.VodEventItem)
                        return this.hasPlayed = !0, this.fetchContinuousPlayData(this.contentConfig.titleId).then((function(t) {
                                t && t.success && e.timelineManager && (e.continuousPlayData = t, re.info("".concat(cr(
                                    "onPlaybackStarted"), " Continuous Play data response: ").concat(JSON.stringify(e
                                    .continuousPlayData))), e.timelineManager.onContinuousPlayDataFetched(t))
                            })).catch((function(e) {
                                return re.error("".concat(cr("onPlaybackStarted"), " Error occurred: ").concat(e))
                            }))
                    }, e.prototype.getContinuousPlayData = function() {
                        return this.continuousPlayData
                    }, e
                }();
            ! function(e) {
                e.PRSOwnershipError = "PRS.NoRights.NotOwned", e.PRSConcurrencyError = "PRS.NoRights.NoAvailableStreams", e.PRSInvalidGeoIP =
                    "PRS.NoRights.InvalidGeoIP", e.PRSHttpProxyError = "PRS.NoRights.AnonymizerIP", e.PRSDeviceLimitReached =
                    "PRS.NoRights.DeviceLimitReached", e.PRSConsentExpiredError = "PRS.NoRights.ConsentExpired"
            }(nr || (nr = {})),
            function(e) {
                e.PRSGeoIpError = "PRSGeoIpError", e.PRSOwnershipError = "PRSOwnershipError", e.PRSConsentExpiredError = "PRSConsentExpiredError"
            }(rr || (rr = {}));
            var lr, dr, pr, fr = ((ir = {})[nr.PRSConcurrencyError] = c.T7.NoAvailableStreams, ir[nr.PRSOwnershipError] = c.T7.NotOwned, ir[nr
                        .PRSInvalidGeoIP] = c.T7.InvalidGeoIP, ir[nr.PRSHttpProxyError] = c.T7.AnonymizerIP, ir[nr.PRSDeviceLimitReached] = c.T7
                    .DeviceLimitReached, ir[nr.PRSConsentExpiredError] = c.T7.ConsentExpired, ir[rr.PRSGeoIpError] = c.T7.InvalidGeoIP, ir[rr
                        .PRSOwnershipError] = c.T7.NotOwned, ir[rr.PRSConsentExpiredError] = c.T7.ConsentExpired, ir),
                hr = "LivingRoomPlayerError",
                mr = function(e, t) {
                    var n = function(e) {
                        return e === se.HDMI_DISCONNECT_ERROR ? c.T7.DisplayDisconnectedError : c.T7.GenericNonRecoverableError
                    }(t);
                    return {
                        name: hr,
                        message: "PlayerError: ".concat(e.message),
                        stack: e.stack,
                        code: n
                    }
                },
                gr = function() {
                    function e(e, t) {
                        var n = this;
                        this.onCurrentTime = e, this.onMediaQualityChange = t, this.interpolatedPlaybackProgressHandler = function(e) {
                                n.onCurrentTime(e.elapsedTimeMs)
                            }, this.subscribeEventAdapters = this.subscribeEventAdapters.bind(this), this.unsubscribeEventAdapters = this
                            .unsubscribeEventAdapters.bind(this)
                    }
                    return e.prototype.subscribeEventAdapters = function() {
                        C.subscribe(this.interpolatedPlaybackProgressHandler), q.subscribe(this.onMediaQualityChange)
                    }, e.prototype.unsubscribeEventAdapters = function() {
                        C.unsubscribe(this.interpolatedPlaybackProgressHandler), q.unsubscribe(this.onMediaQualityChange)
                    }, e
                }();
            ! function(e) {
                e.StreamEnd = "StreamEnd", e.StreamOrOriginFailure = "StreamOrOriginFailure", e.OldStreamOrOriginFailureRule504 =
                    "OldStreamOrOriginFailureRule504", e.FragmentNotReady = "FragmentNotReady", e.OldStreamOrOriginFailureRule5XX =
                    "OldStreamOrOriginFailureRule5XX", e.StreamOrOriginFailureToGetManifest = "StreamOrOriginFailureToGetManifest", e
                    .MediaTailorFailure = "MediaTailorFailure", e.CDNFailure = "CDNFailure", e.NetworkTimeoutToCDN = "NetworkTimeoutToCDN", e
                    .Other = "Other"
            }(dr || (dr = {})),
            function(e) {
                e.NONE = "none", e.RETRY = "retry", e.ORIGIN = "origin", e.CDN = "cdn", e.MIDAS = "midas", e.DEFAULT = "default", e.CLOSE = "close"
            }(pr || (pr = {}));
            var vr, yr = ((lr = {})[dr.StreamEnd] = [1, pr.CLOSE, "Stream has finished"], lr[dr.StreamOrOriginFailure] = [1, pr.ORIGIN,
                    "Origin is failing"
                ], lr[dr.OldStreamOrOriginFailureRule504] = [1, pr.ORIGIN, "504 received from origin"], lr[dr.FragmentNotReady] = [100, pr
                    .ORIGIN, "Fragment not ready limit reached"
                ], lr[dr.OldStreamOrOriginFailureRule5XX] = [3, pr.ORIGIN, "Legacy failover rule"], lr[dr
                .StreamOrOriginFailureToGetManifest] = [3, pr.ORIGIN, "Repeated failure to get manifest"], lr[dr.MediaTailorFailure] = [3, pr
                    .MIDAS, "MediaTailor failure"
                ], lr[dr.CDNFailure] = [3, pr.CDN, "CDN Failure"], lr[dr.NetworkTimeoutToCDN] = [3, pr.CDN, "Network timeout to CDN"], lr[dr
                    .Other] = [3, pr.CDN, "Unknown error case"], lr);
            ! function(e) {
                e[e.StreamEnd = 260] = "StreamEnd", e[e.OriginFailureStatus = 591] = "OriginFailureStatus", e[e.OriginFailureLegacyStatus = 504] =
                    "OriginFailureLegacyStatus", e[e.FragmentNotReadyStatus = 404] = "FragmentNotReadyStatus"
            }(vr || (vr = {}));
            var Er, Tr = "x-amz-source";
            ! function(e) {
                e.LivePlaybackOrigin = "liveplaybackorigin", e.Midas = "midas", e.CDN = "cdn"
            }(Er || (Er = {}));
            var Pr, Cr = T("FailoverStarted"),
                Ir = T("ConsumptionIdUpdate"),
                _r = ne("FailoverService"),
                Rr = function() {
                    function e(e) {
                        var t;
                        this.errorCounts = ((t = {})[dr.StreamEnd] = 0, t[dr.StreamOrOriginFailure] = 0, t[dr.OldStreamOrOriginFailureRule504] = 0,
                                t[dr.FragmentNotReady] = 0, t[dr.OldStreamOrOriginFailureRule5XX] = 0, t[dr.StreamOrOriginFailureToGetManifest] = 0,
                                t[dr.MediaTailorFailure] = 0, t[dr.CDNFailure] = 0, t[dr.NetworkTimeoutToCDN] = 0, t[dr.Other] = 0, t), this
                            .lastFailoverTimestamp = 0, this.playbackUrls = new Map(Object.entries(e.playbackUrlSets)), this.currentUrlSet = e
                            .defaultPlaybackUrl
                    }
                    return e.prototype.getCurrentUrlSet = function() {
                        return this.currentUrlSet
                    }, e.prototype.checkHealth = function() {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            var e, t, n, r, i, o, a, c, u, l, d, p;
                            return (0, s.__generator)(this, (function(f) {
                                switch (f.label) {
                                    case 0:
                                        return e = this.currentUrlSet.urlManifest.url, [4, this.determineFailoverCases(
                                            e)];
                                    case 1:
                                        t = f.sent();
                                        try {
                                            for (n = (0, s.__values)(t), r = n.next(); !r.done; r = n.next())
                                                if (i = r.value, o = (0, s.__read)(yr[i], 3), a = o[0], c = o[1], u = o[
                                                        2], l = (this.errorCounts[i] || 0) + 1, this.errorCounts[i] = l,
                                                    l >= a) return re.warn("".concat(_r("checkHealth"),
                                                        " Reached limit of ").concat(a,
                                                        ' events for the condition "').concat(u, '".')), ae
                                                    .reportDataPoint("Failover_".concat(i, "_").concat(c),
                                                        "FailoverService", 1), h.y.metric("LegacyPlayer.Failover",
                                                        1, {
                                                            reportOwner: m.R.PBCX,
                                                            customContext: {
                                                                failoverCase: i,
                                                                action: c
                                                            }
                                                        }), re.info("".concat(_r("checkHealth"),
                                                        " Returning action ").concat(c,
                                                        " because condition for case ").concat(i, " was met.")), [2,
                                                        c
                                                    ]
                                        } catch (e) {
                                            d = {
                                                error: e
                                            }
                                        } finally {
                                            try {
                                                r && !r.done && (p = n.return) && p.call(n)
                                            } finally {
                                                if (d) throw d.error
                                            }
                                        }
                                        return [2, pr.NONE]
                                }
                            }))
                        }))
                    }, e.prototype.performFailover = function(e) {
                        var t = this,
                            n = this.lastFailoverTimestamp + 500 - Date.now();
                        return new Promise((function(r, i) {
                            t.failoverPromiseResolve = r;
                            var o = function() {
                                t.failoverPromiseResolve = void 0;
                                try {
                                    t.doPerformFailover(e), r(!0)
                                } catch (e) {
                                    i(e)
                                }
                            };
                            n > 0 ? t.failoverTimeoutId = setTimeout(o, n) : o()
                        }))
                    }, e.prototype.destroy = function() {
                        var e;
                        clearTimeout(this.failoverTimeoutId), null === (e = this.failoverPromiseResolve) || void 0 === e || e.call(this, !1),
                            this.failoverPromiseResolve = void 0
                    }, e.prototype.doPerformFailover = function(e) {
                        var t, n, r;
                        if (this.lastFailoverTimestamp = Date.now(), re.info("".concat(_r("performFailover"), " action: ").concat(e)), this
                            .currentUrlSet.failoverMode) {
                            var i = this.currentUrlSet.failoverMode;
                            r = i[e] || i[pr.DEFAULT]
                        }
                        if (!r) throw new Error("Found no failover rule for action ".concat(e, " with active url set ").concat(this
                            .currentUrlSet.urlSetId));
                        var o = this.playbackUrls.get(r.urlSetId);
                        if (void 0 === o) throw new Error("Found no url set with id ".concat(r.urlSetId));
                        Cr.emit({
                            failoverRuleId: e,
                            currentUrlSetId: this.currentUrlSet.urlSetId,
                            nextUrlSetId: o.urlSetId
                        }), re.info("".concat(_r("performFailover"), "[").concat(e, "] failing over from ").concat(this.currentUrlSet
                            .urlManifest.url, " to ").concat(o.urlManifest.url)), this.currentUrlSet = o;
                        try {
                            for (var a = (0, s.__values)(Object.values(dr)), c = a.next(); !c.done; c = a.next()) {
                                var u = c.value;
                                this.errorCounts[u] = 0
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                c && !c.done && (n = a.return) && n.call(a)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        Ir.emit({
                            urlSetId: o.urlSetId
                        })
                    }, e.prototype.performInitialFailover = function(e) {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            var t, n, r;
                            return (0, s.__generator)(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        t = !1, n = 0, i.label = 1;
                                    case 1:
                                        return n <= 30 ? [4, this.checkHealth()] : [3, 4];
                                    case 2:
                                        if ((r = i.sent()) === pr.NONE) return [3, 4];
                                        this.doPerformFailover(r), t = !0, i.label = 3;
                                    case 3:
                                        return n++, [3, 1];
                                    case 4:
                                        return t && (e.playbackUrlSet = this.getCurrentUrlSet()), [2]
                                }
                            }))
                        }))
                    }, e.prototype.determineFailoverCases = function(e) {
                        return (0, s.__awaiter)(this, void 0, void 0, (function() {
                            return (0, s.__generator)(this, (function(t) {
                                return [2, (0, Qe.h)(e, {
                                    method: "HEAD"
                                }).then((function(e) {
                                    var t = e.status,
                                        n = e.headers,
                                        r = br(t, n.get(Tr));
                                    return r.length > 0 && re.info("".concat(_r(
                                        "determineFailoverCases"), " statusCode: ").concat(t,
                                        ", ").concat(Tr, ": ").concat(n.get(Tr),
                                        ". Failover cases: ").concat(JSON.stringify(r))), r
                                })).catch((function(e) {
                                    return re.error("".concat(_r("determineFailoverCases"), " ").concat(
                                        e)), "HttpTimeoutError" === e.name ? [dr
                                        .NetworkTimeoutToCDN] : [dr.Other]
                                }))]
                            }))
                        }))
                    }, e
                }(),
                br = function(e, t) {
                    var n = [];
                    if (null !== t && (t = t.toLowerCase()), e === vr.StreamEnd && t === Er.LivePlaybackOrigin && n.push(dr.StreamEnd), e < 400)
                        return n;
                    switch (e === vr.OriginFailureStatus && n.push(dr.StreamOrOriginFailure), t) {
                        case Er.LivePlaybackOrigin:
                            e === vr.FragmentNotReadyStatus ? n.push(dr.FragmentNotReady) : (e === vr.OriginFailureLegacyStatus && n.push(dr
                                .OldStreamOrOriginFailureRule504), e >= 500 && n.push(dr.OldStreamOrOriginFailureRule5XX), n.push(dr
                                .StreamOrOriginFailureToGetManifest));
                            break;
                        case Er.CDN:
                        case null:
                            n.push(dr.CDNFailure);
                            break;
                        case Er.Midas:
                            n.push(dr.MediaTailorFailure);
                            break;
                        default:
                            n.push(dr.Other)
                    }
                    return n
                },
                Sr = "[RecoverableErrorsHandler]",
                Ar = function() {
                    function e(e, t, n) {
                        void 0 === t && (t = 3), void 0 === n && (n = 0), this.onRecoverableError = e, this.attemptsLimit = t, this.coolOffPeriod =
                            n, this.attempt = 1, this.lastErrorTimestamp = 0, this.maybeRecover = this.maybeRecover.bind(this)
                    }
                    return e.prototype.maybeRecover = function(e, t) {
                        var n = Date.now();
                        return this.coolOffPeriod && n - this.lastErrorTimestamp > this.coolOffPeriod && (this.lastErrorTimestamp = n, this
                            .attempt = 1), this.attempt++ <= this.attemptsLimit ? this.onRecoverableError().catch((function(n) {
                            var r = "Failed to recover. ErrorCode: ".concat(e, ", ErrorMessage: ").concat(t, ", ").concat(n);
                            return re.warn("".concat(Sr, " ").concat(r)), Promise.reject(new Error(r))
                        })) : (re.warn("".concat(Sr, " Failed to recover after ").concat(this.attemptsLimit, " attempts. ErrorCode: ")
                            .concat(e, ".")), Promise.reject(new Error("Attempts limit exceeded. Last error: ".concat(e, " ").concat(
                            t))))
                    }, e
                }(),
                Or = n(32622),
                Nr = T("AdScheduleUpdate"),
                Lr = T("AdManifestUpdate"),
                Mr = T("AdManifestDownloadSuccess"),
                Dr = T("AdManifestDownloadFailure"),
                wr = n(84564),
                kr = n.n(wr),
                Fr = ne("LiveAdsManifestDownloader"),
                xr = {
                    numberOfDownloadRequests: 0,
                    numberOfExcessiveDownloadRequests: 0
                },
                Ur = function() {
                    function e(e, t) {
                        this.isStarted = !1, this.downloadRequestsStats = this.resetDownloadRequestsStats(), this.previousDownloadTime = void 0,
                            this.download = this.download.bind(this), this.stop = this.stop.bind(this), this.onRequestComplete = this
                            .onRequestComplete.bind(this), this.adsTrackingUrl = e, this.consumptionId = t
                    }
                    return e.prototype.download = function() {
                        var e = this;
                        if (this.isStarted = !0, this.activeRequest) return Promise.resolve();
                        this.collectDownloadRequestsStats();
                        var t = this.buildUrlWithQueryString(this.adsTrackingUrl, this.getRequestParameters());
                        return this.activeRequest = !0, (0, Qe.h)(t).then((function(t) {
                            if (e.activeRequest = !1, t.ok) {
                                var n = e.onRequestComplete(t);
                                return ae.reportDataPoint(K.LIVE_ADS_MANIFEST_DOWNLOAD_SUCCESS_RATE, V.PLAYER, 1), h.y.metric(
                                    "LegacyPlayer.LiveAdsManifest.DownloadSuccessRate", 1, m.R.PBCX), n
                            }
                            var i = t.status;
                            i >= 400 && i < 500 ? (ae.reportDataPoint(K.LIVE_ADS_MANIFEST_DOWNLOAD_4XX, V.PLAYER, 1), h.y.metric(
                                    "LegacyPlayer.LiveAdsManifest.DownloadError", 1, {
                                        reportOwner: m.R.PBCX,
                                        customContext: {
                                            error: "4XX"
                                        }
                                    })) : i >= 500 && i < 600 && (ae.reportDataPoint(K.LIVE_ADS_MANIFEST_DOWNLOAD_5XX, V.PLAYER, 1),
                                    h.y.metric("LegacyPlayer.LiveAdsManifest.DownloadError", 1, {
                                        reportOwner: m.R.PBCX,
                                        customContext: {
                                            error: "5XX"
                                        }
                                    })), Dr.emit(r), ae.reportDataPoint(K.LIVE_ADS_MANIFEST_DOWNLOAD_SUCCESS_RATE, V.PLAYER, 0), h.y
                                .metric("LegacyPlayer.LiveAdsManifest.DownloadSuccessRate", 0, m.R.PBCX)
                        })).catch((function(t) {
                            ae.reportDataPoint(K.LIVE_ADS_MANIFEST_DOWNLOAD_SUCCESS_RATE, V.PLAYER, 0), h.y.metric(
                                "LegacyPlayer.LiveAdsManifest.DownloadSuccessRate", 0, m.R.PBCX), re.error("".concat(Fr(
                                "download"), " ").concat(t)), e.activeRequest = !1, Dr.emit(r)
                        }))
                    }, e.prototype.stop = function() {
                        this.isStarted = !1, re.info("".concat(Fr("stop"), " the number of download requests is ").concat(this
                                    .downloadRequestsStats.numberOfDownloadRequests, " and the number of excessive download requests is ")
                                .concat(this.downloadRequestsStats.numberOfExcessiveDownloadRequests, " with adsTrackingUrl ").concat(this
                                    .adsTrackingUrl, " and consumptionId ").concat(this.consumptionId)), this.downloadRequestsStats = this
                            .resetDownloadRequestsStats(), this.previousDownloadTime = void 0
                    }, e.prototype.onRequestComplete = function(e) {
                        return this.isStarted ? e.json().then((function(e) {
                            e ? Mr.emit(e) : Dr.emit(r)
                        })) : Promise.resolve()
                    }, e.prototype.collectDownloadRequestsStats = function() {
                        this.downloadRequestsStats.numberOfDownloadRequests++, void 0 !== this.previousDownloadTime && Date.now() - this
                            .previousDownloadTime < 1e3 * ce.ADS_MANIFEST_DOWNLOAD_INTERVAL_SECONDS && this.downloadRequestsStats
                            .numberOfExcessiveDownloadRequests++, this.previousDownloadTime = Date.now()
                    }, e.prototype.resetDownloadRequestsStats = function() {
                        return (0, s.__assign)({}, xr)
                    }, e.prototype.getRequestParameters = function() {
                        return {
                            consumptionId: this.consumptionId,
                            optOut: "false",
                            platform: e.REQUEST_PARAMETER.PLATFORM,
                            deviceCat: e.REQUEST_PARAMETER.DEVICE_CAT
                        }
                    }, e.prototype.buildUrlWithQueryString = function(e, t) {
                        var n, r, i = new(kr())(e, !0);
                        "" === i.pathname && i.set("pathname", "/");
                        try {
                            for (var o = (0, s.__values)(Object.keys(t)), a = o.next(); !a.done; a = o.next()) {
                                var c = a.value;
                                "" !== c && (i.query[c] = t[c])
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (r = o.return) && r.call(o)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return i.toString()
                    }, e.REQUEST_PARAMETER = {
                        PLATFORM: "BLAST",
                        DEVICE_CAT: "ROOM"
                    }, e
                }(),
                Br = function(e, t) {
                    if (!Array.isArray(e[t])) throw new Error("Parsing error - expected array of " + t + " in: " + JSON.stringify(e))
                },
                Hr = function(e, t) {
                    if (void 0 === e[t]) throw new Error("Parsing error - expected " + t + " in: " + JSON.stringify(e))
                },
                Gr = function() {
                    function e() {}
                    return e.parse = function(t) {
                        return Br(t, "avails"), Hr(t, "retry"), {
                            avails: t.avails.map((function(t) {
                                return e.parseAvail(t)
                            })),
                            retry: e.parseRetry(t.retry)
                        }
                    }, e.parseRetry = function(e) {
                        return Hr(e, "backoffBase"), Hr(e, "backoffMax"), Hr(e, "backoffModifier"), Hr(e, "jitter"), {
                            backoffBase: e.backoffBase,
                            backoffMax: e.backoffMax,
                            backoffModifier: e.backoffModifier,
                            jitter: e.jitter
                        }
                    }, e.parseAvail = function(t) {
                        return Br(t, "ads"), Hr(t, "startTimeInSeconds"), Hr(t, "durationInSeconds"), {
                            startTime: t.startTimeInSeconds,
                            duration: t.durationInSeconds,
                            ads: t.ads.map((function(t) {
                                return e.parseAd(t)
                            }))
                        }
                    }, e.parseAd = function(t) {
                        return Br(t, "trackingEvents"), Hr(t, "startTimeInSeconds"), Hr(t, "durationInSeconds"), {
                            startTime: t.startTimeInSeconds,
                            duration: t.durationInSeconds,
                            trackingEvents: t.trackingEvents.map((function(t) {
                                return e.parseTrackingEvent(t)
                            }))
                        }
                    }, e.parseTrackingEvent = function(t) {
                        return Br(t, "beaconUrls"), Hr(t, "startTimeInSeconds"), Hr(t, "durationInSeconds"), Hr(t, "eventType"), {
                            startTime: t.startTimeInSeconds,
                            duration: t.durationInSeconds,
                            eventType: t.eventType,
                            beaconUrls: t.beaconUrls.map((function(t) {
                                return e.parseBeaconUrl(t)
                            }))
                        }
                    }, e.parseBeaconUrl = function(e) {
                        return Hr(e, "url"), Hr(e, "method"),
                            function(t, n) {
                                if (!1 == ("GET" === e.method || "POST" === e.method)) throw new Error("Parsing error - " + n)
                            }(0, "unexpected method '" + e.method + "' in beaconUrl"), {
                                url: e.url,
                                method: e.method,
                                data: e.data
                            }
                    }, e
                }(),
                Wr = ne("LiveAdsInfoProvider"),
                Vr = function() {
                    function e(e, t) {
                        this.isStarted = !1, this.onManifestDownloadSuccess = this.onManifestDownloadSuccess.bind(this), this
                            .onManifestDownloadFail = this.onManifestDownloadFail.bind(this), this.adsManifestDownloader = new Ur(e, t), Mr
                            .subscribe(this.onManifestDownloadSuccess), Dr.subscribe(this.onManifestDownloadFail)
                    }
                    return e.prototype.start = function() {
                        this.isStarted = !0, this.clearDownloadTimer(), this.adsManifestDownloader.download()
                    }, e.prototype.stop = function() {
                        this.isStarted = !1, this.clearDownloadTimer(), this.adsManifestDownloader.stop()
                    }, e.prototype.onManifestDownloadSuccess = function(e) {
                        if (this.isStarted) {
                            try {
                                var t = Gr.parse(e);
                                Lr.emit(t)
                            } catch (e) {
                                re.error("".concat(Wr("onManifestDownloadSuccess"), " could not parse ad manifest due to error: ").concat(e))
                            }
                            this.scheduleDownload()
                        }
                    }, e.prototype.onManifestDownloadFail = function() {
                        this.isStarted && (re.debug("".concat(Wr("onManifestDownloadFail"),
                            " scheduling new manifest download after failed download")), this.scheduleDownload())
                    }, e.prototype.clearDownloadTimer = function() {
                        this.downloadTimer && (clearTimeout(this.downloadTimer), this.downloadTimer = void 0)
                    }, e.prototype.scheduleDownload = function() {
                        var e = this;
                        this.downloadTimer = setTimeout((function() {
                            e.adsManifestDownloader.download()
                        }), 1e3 * ce.ADS_MANIFEST_DOWNLOAD_INTERVAL_SECONDS)
                    }, e
                }();
            ! function(e) {
                e.TrustEarliest = "TRUST_EARLIEST", e.TrustLatest = "TRUST_LATEST"
            }(Pr || (Pr = {}));
            var Kr = function(e) {
                    return e.startTime + "_" + e.duration
                },
                Zr = function(e) {
                    return e.startTime + e.duration
                },
                qr = function(e, t) {
                    return Zr(e) === Zr(t) ? e.startTime - t.startTime : Zr(e) - Zr(t)
                },
                Yr = function() {
                    function e() {
                        this.lastProcessedTime = 0, this.events = [], this.eventsIndex = {}, this.updateMode = Pr.TrustEarliest, this.updateMode =
                            Pr.TrustEarliest, this.mergeNewEvents = this.mergeNewEvents.bind(this), this.replaceEvents = this.replaceEvents.bind(
                                this), this.scheduleEventsFromManifest = this.scheduleEventsFromManifest.bind(this), this.isAdScheduledFor = this
                            .isAdScheduledFor.bind(this), this.getAllEvents = this.getAllEvents.bind(this), this.clearEvents = this.clearEvents
                            .bind(this), this.processEventsUpTo = this.processEventsUpTo.bind(this)
                    }
                    return e.prototype.scheduleEventsFromManifest = function(e) {
                        var t = this,
                            n = function(e) {
                                var t, n, r, i, o = [];
                                try {
                                    for (var a = (0, s.__values)(e.avails), c = a.next(); !c.done; c = a.next()) {
                                        var u = c.value;
                                        try {
                                            for (var l = (r = void 0, (0, s.__values)(u.ads)), d = l.next(); !d.done; d = l.next()) {
                                                var p = d.value;
                                                o = o.concat(p.trackingEvents)
                                            }
                                        } catch (e) {
                                            r = {
                                                error: e
                                            }
                                        } finally {
                                            try {
                                                d && !d.done && (i = l.return) && i.call(l)
                                            } finally {
                                                if (r) throw r.error
                                            }
                                        }
                                    }
                                } catch (e) {
                                    t = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        c && !c.done && (n = a.return) && n.call(a)
                                    } finally {
                                        if (t) throw t.error
                                    }
                                }
                                return o
                            }(e),
                            r = n.filter((function(e) {
                                return Zr(e) > t.lastProcessedTime
                            }), this);
                        this.updateMode === Pr.TrustEarliest ? this.mergeNewEvents(r) : this.updateMode === Pr.TrustLatest && this
                            .replaceEvents(r)
                    }, e.prototype.isAdScheduledFor = function(e) {
                        var t, n;
                        try {
                            for (var r = (0, s.__values)(this.events), i = r.next(); !i.done; i = r.next()) {
                                var o = i.value,
                                    a = o.startTime,
                                    c = a + o.duration;
                                if (e >= a && e < c) return !0
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                i && !i.done && (n = r.return) && n.call(r)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return !1
                    }, e.prototype.getAllEvents = function() {
                        return this.events
                    }, e.prototype.clearEvents = function() {
                        this.events = [], this.eventsIndex = {}, this.lastProcessedTime = 0
                    }, e.prototype.processEventsUpTo = function(e) {
                        var t;
                        for (this.lastProcessedTime = e, t = 0; t < this.events.length && Zr(this.events[t]) <= e; t++) {
                            var n = this.events[t];
                            delete this.eventsIndex[Kr(n)]
                        }
                        return this.events.splice(0, t)
                    }, e.prototype.mergeNewEvents = function(e) {
                        var t = this,
                            n = e.filter((function(e) {
                                return void 0 === t.eventsIndex[Kr(e)]
                            }), this);
                        this.events = this.events.concat(n).sort(qr),
                            function(e, t) {
                                var n, r;
                                try {
                                    for (var i = (0, s.__values)(t), o = i.next(); !o.done; o = i.next()) {
                                        var a = o.value;
                                        e[Kr(a)] = a
                                    }
                                } catch (e) {
                                    n = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        o && !o.done && (r = i.return) && r.call(i)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                            }(this.eventsIndex, n)
                    }, e.prototype.replaceEvents = function(e) {
                        this.events = e.sort(qr), this.eventsIndex = function(e) {
                            var t, n, r = {};
                            try {
                                for (var i = (0, s.__values)(e), o = i.next(); !o.done; o = i.next()) {
                                    var a = o.value;
                                    r[Kr(a)] = a
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    o && !o.done && (n = i.return) && n.call(i)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            return r
                        }(e)
                    }, e
                }(),
                zr = function() {
                    function e(e, t) {
                        var n = this;
                        this.adsTrackingUrl = e, this.isStarted = !1, this.onStreamEventStart = function() {
                                n.adsInfoProvider.start(), n.isStarted = !0
                            }, this.onStreamEventStop = function() {
                                n.stop()
                            }, this.onStreamEventPlaybackComplete = function() {
                                n.stop()
                            }, this.onStreamEventPlaybackError = function() {
                                n.stop()
                            }, this.onInterpolatedPlaybackProgress = function(e) {
                                if (n.isStarted) {
                                    var t = e.elapsedTimeMs / 1e3;
                                    Nr.emit(n.adsSchedule.isAdScheduledFor(t)), r = n.adsSchedule.processEventsUpTo(t), i = r.map((function(e) {
                                        var t = e.beaconUrls.map((function(e) {
                                            return (0, Qe.h)(e.url, {
                                                method: e.method,
                                                body: e.data
                                            })
                                        }));
                                        return Promise.all(t)
                                    })), Promise.all(i)
                                }
                                var r, i
                            }, this.onStreamEventStart = this.onStreamEventStart.bind(this), this.onStreamEventStop = this.onStreamEventStop.bind(
                                this), this.onStreamEventPlaybackComplete = this.onStreamEventPlaybackComplete.bind(this), this
                            .onStreamEventPlaybackError = this.onStreamEventPlaybackError.bind(this), this.onInterpolatedPlaybackProgress = this
                            .onInterpolatedPlaybackProgress.bind(this), this.onInterpolatedPlaybackProgressThrottled = yn()(this
                                .onInterpolatedPlaybackProgress, 1e3), this.onManifestUpdate = this.onManifestUpdate.bind(this), this
                            .adsInfoProvider = new Vr(e, t), Lr.subscribe(this.onManifestUpdate), this.adsSchedule = new Yr, this
                            .addEventListeners()
                    }
                    return e.prototype.onManifestUpdate = function(e) {
                        this.isStarted && this.adsSchedule.scheduleEventsFromManifest(e)
                    }, e.prototype.stop = function() {
                        this.isStarted && (this.isStarted = !1, this.removeEventListeners(), this.adsSchedule.clearEvents(), this
                            .adsInfoProvider.stop())
                    }, e.prototype.addEventListeners = function() {
                        k.subscribe(this.onStreamEventPlaybackComplete), ee.subscribe(this.onStreamEventPlaybackError), N.subscribe(this
                            .onStreamEventStart), U.subscribe(this.onStreamEventStop), C.subscribe(this
                            .onInterpolatedPlaybackProgressThrottled)
                    }, e.prototype.removeEventListeners = function() {
                        k.unsubscribe(this.onStreamEventPlaybackComplete), ee.unsubscribe(this.onStreamEventPlaybackError), N.unsubscribe(this
                            .onStreamEventStart), U.unsubscribe(this.onStreamEventStop), C.unsubscribe(this
                            .onInterpolatedPlaybackProgressThrottled)
                    }, e
                }();

            function jr(e, t, n) {
                var r, i;
                void 0 === n && (n = !1);
                try {
                    for (var o = (0, s.__values)(Object.keys(t)), a = o.next(); !a.done; a = o.next()) {
                        var c = a.value;
                        if (e[c] !== t[c]) {
                            if ("language" !== c) return !1;
                            if (t.language) {
                                if (!e.language) return !1;
                                if (n) return !1;
                                if (e.language.split("-")[0] !== t.language.split("-")[0]) return !1
                            }
                        }
                    }
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        a && !a.done && (i = o.return) && i.call(o)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return !0
            }
            var Qr, Xr = ne("StreamSelector"),
                Jr = function() {
                    function e() {}
                    return e.getTimedTextStream = function(e, t, n) {
                        var r, i, o, a, u, l, d, p;
                        try {
                            for (var f = (0, s.__values)(t), h = f.next(); !h.done; h = f.next()) {
                                var m = h.value;
                                n && m.type === c.f8.Mandatory && !m.language && (m.language = n);
                                try {
                                    for (var g = (o = void 0, (0, s.__values)(e)), v = g.next(); !v.done; v = g.next())
                                        if (jr(C = v.value, m, !0)) return re.info("".concat(Xr("getTimedTextStream"), " selected stream: ")
                                            .concat(JSON.stringify(C))), C
                                } catch (e) {
                                    o = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        v && !v.done && (a = g.return) && a.call(g)
                                    } finally {
                                        if (o) throw o.error
                                    }
                                }
                                try {
                                    for (var y = (u = void 0, (0, s.__values)(e)), E = y.next(); !E.done; E = y.next())
                                        if (jr(C = E.value, m, !1)) return re.info("".concat(Xr("getTimedTextStream"),
                                            " Fallback - selected stream: ").concat(JSON.stringify(C))), C
                                } catch (e) {
                                    u = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        E && !E.done && (l = y.return) && l.call(y)
                                    } finally {
                                        if (u) throw u.error
                                    }
                                }
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                h && !h.done && (i = f.return) && i.call(f)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        if (n) try {
                            for (var T = (0, s.__values)(e), P = T.next(); !P.done; P = T.next()) {
                                var C;
                                if ((C = P.value).type === c.f8.Mandatory && C.language === n) return re.info("".concat(Xr(
                                        "getTimedTextStream"),
                                    " Fallback to forced narratives matching current audio language: ").concat(JSON.stringify(
                                    C))), C
                            }
                        } catch (e) {
                            d = {
                                error: e
                            }
                        } finally {
                            try {
                                P && !P.done && (p = T.return) && p.call(T)
                            } finally {
                                if (d) throw d.error
                            }
                        }
                        re.info("".concat(Xr("getTimedTextStream"), " No matching stream was found. Streams: ").concat(JSON.stringify(e),
                            ". Matchers: ").concat(JSON.stringify(t), ". Current audio language: ").concat(n))
                    }, e
                }(),
                $r = n(59679),
                ei = T("TimedTextDownload");
            ! function(e) {
                e.PseudoLive = "PseudoLive", e.VOD = "VOD"
            }(Qr || (Qr = {}));
            var ti, ni, ri, ii, oi = function(e, t, n) {
                    return (0, s.__awaiter)(void 0, void 0, Promise, (function() {
                        var r, i, o, a, c;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    r = n === Qr.PseudoLive ? K.PSEUDO_LIVE_CAPTIONS_DOWNLOAD_LATENCY : K
                                        .TIMED_TEXT_DOWNLOAD_LATENCY, i = h.y.metricTimer(
                                            "LegacyPlayer.Subtitles.DownloadLatency", {
                                                reportOwner: m.R.PBCX,
                                                customContext: {
                                                    subtitlesType: n === Qr.PseudoLive ? "PseudoLive" : "Other"
                                                }
                                            }).start(), ae.startTimer(r, V.PLAYER), o = !1, s.label = 1;
                                case 1:
                                    return s.trys.push([1, 4, 5, 6]), [4, $r.C.send((function() {
                                        return (0, Qe.h)(e, void 0, {
                                            skipDecodingResponseBody: !o
                                        })
                                    }), $r.C.DEFAULT_RETRY_OPTIONS)];
                                case 2:
                                    if (!(a = s.sent()).ok) throw new Error("Invalid response - status code ".concat(a
                                        .status));
                                    return [4, a.text()];
                                case 3:
                                    if (!s.sent()) throw new Error("Subtitle file is empty");
                                    return ae.stopTimer(r), i.stop(), ai(t, n), [2, a];
                                case 4:
                                    throw c = s.sent(), si(t, n, null == a ? void 0 : a.status), ae.clearTimer(r),
                                        new Error("Failed downloading subtitles from url ".concat(e, " - ").concat(ui(c)));
                                case 5:
                                    return ci(a, e), [7];
                                case 6:
                                    return [2]
                            }
                        }))
                    }))
                },
                ai = function(e, t) {
                    var n;
                    n = t === Qr.PseudoLive ? K.PSEUDO_LIVE_CAPTIONS_DOWNLOAD_SUCCESS : e && e === c.f8.Mandatory ? K
                        .FORCED_NARRATIVES_DOWNLOAD_SUCCESS : K.SUBTITLES_DOWNLOAD_SUCCESS, ae.reportDataPoint(n, V.PLAYER, 1), h.y.metric(
                            "LegacyPlayer.Subtitles.DownloadSuccessRate", 1, {
                                reportOwner: m.R.PBCX,
                                customContext: {
                                    subtitlesType: li(e, t)
                                }
                            })
                },
                si = function(e, t, n) {
                    var r;
                    r = t === Qr.PseudoLive ? K.PSEUDO_LIVE_CAPTIONS_DOWNLOAD_ERROR : e && e === c.f8.Mandatory ? K
                        .FORCED_NARRATIVES_DOWNLOAD_ERROR : K.SUBTITLES_DOWNLOAD_ERROR, ae.reportDataPoint(r, V.PLAYER, 1), h.y.metric(
                            "LegacyPlayer.Subtitles.DownloadError", 1, {
                                reportOwner: m.R.PBCX,
                                customContext: {
                                    error: n ? "".concat(n.toString()[0], "XX") : "Unknown",
                                    subtitlesType: li(e, t)
                                }
                            }), h.y.metric("LegacyPlayer.Subtitles.DownloadSuccessRate", 0, {
                            reportOwner: m.R.PBCX,
                            customContext: {
                                subtitlesType: li(e, t)
                            }
                        }), void 0 !== n && ae.reportDataPoint("".concat(r, "_").concat(n), V.PLAYER, 1)
                },
                ci = function(e, t) {
                    ei.emit({
                        responseType: e && e.ok ? "Success" : "UnknownError",
                        responseCode: e ? e.status : void 0,
                        url: t
                    })
                },
                ui = function(e) {
                    return e instanceof Error || "string" == typeof e ? "".concat(e) : ("object" == typeof e && e.error instanceof Error && (e
                        .error = "".concat(e.error)), JSON.stringify(e))
                },
                li = function(e, t) {
                    return t === Qr.PseudoLive ? "PseudoLive" : e && e === c.f8.Mandatory ? "ForcedNarratives" : "Other"
                },
                di = ((ti = {}).subtitle = c.f8.Subtitle, ti.caption = c.f8.Caption, ti.sdh = c.f8.SDH, ti.narrative = c.f8.Mandatory, ti),
                pi = ((ni = {}).dialog = c.lX.Dialog, ni.commentary = c.lX.Commentary, ni.descriptive = c.lX.Descriptive, ni),
                fi = ((ri = {}).WebVTT = c.ep.WebVTT, ri.TTMLv1 = c.ep.TTMLv1, ri.TTMLv2 = c.ep.TTMLv2, ri),
                hi = function(e) {
                    return {
                        language: e.languageCode,
                        type: mi(e.type),
                        subtype: gi(e.subtype),
                        variants: [{
                            format: vi(e.format),
                            id: e.timedTextTrackId,
                            url: e.url,
                            restrictions: []
                        }],
                        id: e.timedTextTrackId,
                        activeVariantId: e.timedTextTrackId,
                        label: e.displayName
                    }
                },
                mi = function(e) {
                    return Object.hasOwnProperty.call(di, e) ? di[e] : c.f8.Subtitle
                },
                gi = function(e) {
                    return Object.hasOwnProperty.call(pi, e) ? pi[e] : c.lX.Dialog
                },
                vi = function(e) {
                    return Object.hasOwnProperty.call(fi, e) ? fi[e] : c.ep.TTMLv2
                },
                yi = function(e, t, n, r) {
                    return (0, s.__awaiter)(void 0, void 0, Promise, (function() {
                        var i;
                        return (0, s.__generator)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, e.text()];
                                case 1:
                                    if (!(i = o.sent())) throw new Error("Subtitle file is empty");
                                    return [2, {
                                        data: i,
                                        timestampOffsetMs: void 0 !== t ? t : 0,
                                        timelineItemIndex: 0,
                                        startPosition: null != n ? n : 0,
                                        endPosition: null != r ? r : 0,
                                        retainableRanges: []
                                    }]
                            }
                        }))
                    }))
                },
                Ei = function(e) {
                    var t = [];
                    return e.subtitleUrlInfo.length > 0 && e.subtitleUrlInfo.map((function(e) {
                        t.push(hi(e))
                    })), e.forcedNarrativeUrlInfo.length > 0 && e.forcedNarrativeUrlInfo.map((function(e) {
                        t.push(hi(e))
                    })), t
                },
                Ti = T("TimedTextStreamData"),
                Pi = T("TimedText"),
                Ci = ne("TimedTextReporter"),
                Ii = function() {
                    function e() {}
                    return e.prototype.emitTimedTextChange = function(e) {
                        if (!e) return this.maybeEmitPreviousStreamAsDisabled(), void re.info("".concat(Ci("emitTimedTextChange"),
                            " Content does not have any timed text resources"));
                        e.type === c.f8.Mandatory && this.maybeEmitPreviousStreamAsDisabled(), this.previousStream = e, Pi.emit({
                            enabled: !0,
                            language: e.language,
                            textType: e.type,
                            textSubtype: e.subtype
                        })
                    }, e.prototype.emitTimedTextStreamData = function(e, t) {
                        t ? Ti.emit({
                            streamId: t.id,
                            streamDataPayload: e
                        }) : re.info("".concat(Ci("emitTimedTextStreamData"), " Content does not have any timed text resources"))
                    }, e.prototype.maybeEmitPreviousStreamAsDisabled = function() {
                        this.previousStream && Pi.emit({
                            enabled: !1,
                            language: this.previousStream.language,
                            textType: this.previousStream.type,
                            textSubtype: this.previousStream.subtype
                        })
                    }, e
                }(),
                _i = ne("PseudoLiveTimedTextStreamProvider"),
                Ri = 1e6,
                bi = 2e7,
                Si = function() {
                    function e(e, t, n, r) {
                        var i = this;
                        this.getCurrentTimelineItemStartTime = r, this.timedTextStreams = [], this.matchers = [], this.throttledError = yn()((
                                function(e) {
                                    re.error(e)
                                }), 3e5, {
                                leading: !0,
                                trailing: !1
                            }), this.onTimeUpdate = function(e) {
                                return (0, s.__awaiter)(i, void 0, Promise, (function() {
                                    return (0, s.__generator)(this, (function(t) {
                                        return this.maybeDownloadAndEmitTimedTextForPositionMs(e.elapsedTimeMs), [2]
                                    }))
                                }))
                            }, this.validatePseudoLiveCaptions = function(e) {
                                if (e)
                                    if (e.url) {
                                        if (void 0 !== e.startTimecode) return void 0 === e.segmentDuration && (re.error("".concat(_i(
                                                    "setTimedTextConfig"),
                                                " Captions segment duration missing in live resources response. Using default: ")
                                            .concat(bi)), e.segmentDuration = bi), void 0 === e.timeScale && (re.error("".concat(_i(
                                                    "setTimedTextConfig"),
                                                " Captions time scale missing in live resources response. Using default: ").concat(Ri)), e
                                            .timeScale = Ri), e;
                                        re.error("".concat(_i("setTimedTextConfig"),
                                            " Captions start timecode missing in live resources response."))
                                    } else re.error("".concat(_i("setTimedTextConfig"), " Captions url missing in live resources response."));
                                else re.error("".concat(_i("setTimedTextConfig"), " Captions missing in timed text config."))
                            }, this.maybeDownloadAndEmitTimedTextForPositionMs = function(e) {
                                return (0, s.__awaiter)(i, void 0, Promise, (function() {
                                    var t, n, r, i, o, a, u, l;
                                    return (0, s.__generator)(this, (function(s) {
                                        switch (s.label) {
                                            case 0:
                                                if (s.trys.push([0, 3, , 4]), !this.stream) return [2];
                                                if (!this.pseudoliveCaptions) throw new Error(
                                                    "Pseudo-live captions are missing or invalid");
                                                return t = Ai(this.pseudoliveCaptions, e), n = t.timecode, r = t
                                                    .offsetMsRelativeToManifest, n === this.lastSegmentTimecode ? [2] : (
                                                        this.lastSegmentTimecode = n, i = Oi(this.pseudoliveCaptions.url,
                                                        n), [4, oi(i, c.f8.Caption, Qr.PseudoLive)]);
                                            case 1:
                                                return o = s.sent(), a = this.getCurrentTimelineItemStartTime(), void 0 ===
                                                    this.borgOffsetMs || null === a ? (this.throttledError("".concat(_i(
                                                            "maybeDownloadAndEmitTimedTextForPositionMs"),
                                                        " Impossible to determine live subtitles offset. borgOffsetMs: "
                                                        ).concat(this.borgOffsetMs,
                                                        ", currentTimelineItemStartTime: ").concat(a,
                                                        ", offsetMsRelativeToManifest: ").concat(r)), [2]) : [4, yi(o, -1 *
                                                        (r + this.borgOffsetMs - a), n, n + this.pseudoliveCaptions
                                                        .segmentDuration)];
                                            case 2:
                                                return u = s.sent(), this.timedTextReporter.emitTimedTextStreamData(u, this
                                                    .stream), [3, 4];
                                            case 3:
                                                return l = s.sent(), this.throttledError("".concat(_i(
                                                        "maybeDownloadAndEmitTimedTextForPositionMs"),
                                                    " Failed getting Timed Text - ").concat(l)), [3, 4];
                                            case 4:
                                                return [2]
                                        }
                                    }))
                                }))
                            }, this.borgOffsetMs = t.epochOffset, this.pseudoliveCaptions = this.validatePseudoLiveCaptions(t.captions), this
                            .timedTextReporter = new Ii, this.timedTextStreams = function(e, t, n) {
                                var r = Ei(e);
                                if (n && n.url) {
                                    var i = {
                                        language: "default_live",
                                        id: "default_live",
                                        type: c.f8.Caption,
                                        variants: [],
                                        label: t(),
                                        subtype: null,
                                        activeVariantId: "default_live"
                                    };
                                    r.push(i)
                                }
                                return r
                            }(e, n, this.pseudoliveCaptions), C.subscribe(this.onTimeUpdate)
                    }
                    return e.prototype.getTimedTextStreams = function() {
                        return this.timedTextStreams
                    }, e.prototype.setStreamMatchers = function(e) {
                        this.matchers = e, this.stream = Jr.getTimedTextStream(this.timedTextStreams, this.matchers), this.timedTextReporter
                            .emitTimedTextChange(this.stream)
                    }, e.prototype.destroy = function() {
                        C.unsubscribe(this.onTimeUpdate)
                    }, e.prototype.setCurrentAudioTrackLanguage = function() {}, e
                }(),
                Ai = function(e, t) {
                    var n = e.segmentDuration,
                        r = e.timeScale,
                        i = e.startTimecode,
                        o = n / r * 1e3,
                        a = Math.floor(t / o);
                    return {
                        timecode: i + n * a,
                        offsetMsRelativeToManifest: a * n / r * 1e3
                    }
                },
                Oi = function(e, t) {
                    var n = /(https?:\/\/.*\/SmoothCaptions\(.*=)[0-9]*(\))/.exec(e);
                    if (!n) throw new Error("Failed to parse the subtitles url: ".concat(e));
                    return "".concat(n[1]).concat(t).concat(n[2])
                },
                Ni = ne("PseudoLive"),
                Li = ["PseudoLive"],
                Mi = function() {
                    function e(e, t, n, r, i, o, a, u) {
                        var l = this;
                        this.liveResources = e, this.failoverService = n, this.callbacksToParentAdapter = r, this.streamingType = u, this
                            .isReloading = !1, this.lastOnTimeUpdateWithLogging = 0, this.manifestSwitchTtffTimer = h.y.metricTimer(
                                "LegacyPlayer.ManifestSwitch.TimeToFirstFrame", m.R.PBCX), this.shouldSwitchManifest = function(e) {
                                return void 0 !== l.durationMs && l.durationMs - e < l.jitterOffset && (re.info("".concat(Ni(
                                        "shouldSwitchManifest"), " The current position (").concat(e, "ms) is within the jitter offset (")
                                    .concat(l.jitterOffset, "ms) of the end of manifest (").concat(l.durationMs, "ms)")), !0)
                            }, this.updatePlayableRange = function() {
                                var e = l.getCurrentLiveHead();
                                l.callbacksToParentAdapter.updatePlayableRange({
                                    unit: c.j1.ContentMillis,
                                    start: e,
                                    end: e
                                })
                            }, this.subtitle = t.subtitle, this.timedTextStreamProvider = new Si(this.subtitle, this.liveResources, o, this
                                .callbacksToParentAdapter.getCurrentTimelineItemStartTime), this.initializeAdsTracker(), this
                            .playableRangeInterval = setInterval(this.updatePlayableRange, 1e3), this.failoverHealthCheckIntervalId = setInterval((
                                function() {
                                    return (0, s.__awaiter)(l, void 0, void 0, (function() {
                                        var e;
                                        return (0, s.__generator)(this, (function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, this.failoverService.checkHealth()];
                                                case 1:
                                                    return (e = t.sent()) === pr.NONE ? [3, 3] : [4, this
                                                        .handleFailoverAction(e)
                                                    ];
                                                case 2:
                                                    t.sent(), t.label = 3;
                                                case 3:
                                                    return [2]
                                            }
                                        }))
                                    }))
                                }), 15e3), this.jitterOffset = 9e5 * i(), this.liveHeadDelaySec = void 0 === a ? 100 : a
                    }
                    return e.createPseudoLive = function(t, n, r, i, o, a, c, u, l) {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            return (0, s.__generator)(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return [4, c(t.contentId, n.urlManifest.url)];
                                    case 1:
                                        return [2, new e(s.sent(), t, r, i, o, a, u, l)]
                                }
                            }))
                        }))
                    }, e.prototype.getEpochOffset = function() {
                        return this.liveResources.epochOffset
                    }, e.prototype.getInitialPosition = function() {
                        return this.getCurrentLiveHead()
                    }, e.prototype.onTimeUpdate = function(e) {
                        return (0, s.__awaiter)(this, void 0, void 0, (function() {
                            var t, n, r;
                            return (0, s.__generator)(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.shouldSwitchManifest(e) ? [4, this.onPlaybackReachedEnd()] : [3, 2];
                                    case 1:
                                        return i.sent(), [2];
                                    case 2:
                                        return (t = Date.now() - this.lastOnTimeUpdateWithLogging > 3e4) && (this
                                            .lastOnTimeUpdateWithLogging = Date.now()), this.isReloading || (n =
                                            this.getCurrentLiveHead(), r = n - e, t && re.info("".concat(Ni(
                                                "onTimeUpdate"), " Playback delay behind live head is ").concat(
                                                r, "ms"))), [2]
                                }
                            }))
                        }))
                    }, e.prototype.onDurationUpdate = function(e) {
                        if (this.durationMs = e, this.liveResources) {
                            var t = this.getCurrentLiveHead(),
                                n = e - t;
                            re.info("".concat(Ni("onDurationUpdate"), " Manifest duration reported by player is ").concat(e, "ms. ") +
                                "The current live head is ".concat(t, "ms. The manifest will expire in ").concat(n, "ms, ") + "(".concat((0,
                                    Or.E)(n), ")"))
                        } else re.error("".concat(Ni("onDurationUpdate"), " liveResources are undefined."))
                    }, e.prototype.onPlaybackReachedEnd = function() {
                        return (0, s.__awaiter)(this, void 0, void 0, (function() {
                            var e;
                            return (0, s.__generator)(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (this.isReloading) return [2];
                                        ae.reportDataPoint(K.MANIFEST_SWITCH_RELOAD, V.PLAYER, 1), h.y.metric(
                                            "LegacyPlayer.ManifestSwitch.Reload", 1, m.R.PBCX), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), this.isReloading = !0, [4, this
                                            .callbacksToParentAdapter.reload(Gn.ReloadPlayerOptions)
                                        ];
                                    case 2:
                                        return t.sent(), [3, 4];
                                    case 3:
                                        return e = t.sent(), re.error("".concat(Ni("onPlaybackReachedEnd"),
                                            " Error during reload: ").concat(e)), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.onError = function() {
                        this.isReloading && (ae.reportDataPoint(K.MANIFEST_SWITCH_ERROR, V.PLAYER, 1), h.y.metric(
                                "LegacyPlayer.ManifestSwitch.Error", 1, m.R.PBCX), ae.clearTimer(K.MANIFEST_SWITCH_TIME_TO_FIRST_FRAME),
                            this.manifestSwitchTtffTimer.clear())
                    }, e.prototype.onPlaybackState = function(e) {
                        if (e === c.q9.Playing && this.isReloading) this.isReloading = !1, re.info("".concat(Ni("onPlaybackState"),
                            " stopping the ").concat(K.MANIFEST_SWITCH_TIME_TO_FIRST_FRAME, " timer")), ae.stopTimer(K
                            .MANIFEST_SWITCH_TIME_TO_FIRST_FRAME), this.manifestSwitchTtffTimer.stop();
                        else if (this.isReloading) return re.info("".concat(Ni("onPlaybackState"), " starting the ").concat(K
                            .MANIFEST_SWITCH_TIME_TO_FIRST_FRAME, " timer")), ae.startTimer(K.MANIFEST_SWITCH_TIME_TO_FIRST_FRAME, V
                            .PLAYER), this.manifestSwitchTtffTimer.start(), !1;
                        return !0
                    }, e.prototype.destroy = function() {
                        this.failoverService.destroy(), clearInterval(this.playableRangeInterval), clearInterval(this
                                .failoverHealthCheckIntervalId), this.liveAdsTracker && this.liveAdsTracker.stop(), this
                            .timedTextStreamProvider && this.timedTextStreamProvider.destroy()
                    }, e.prototype.getCurrentLiveHead = function() {
                        var e = Date.now() - this.liveResources.liveHeadAcquiredAt;
                        return this.liveResources.liveHeadWhenAcquired + e + 1e5 - 1e3 * this.liveHeadDelaySec
                    }, e.prototype.handleFailoverAction = function(e) {
                        return (0, s.__awaiter)(this, void 0, void 0, (function() {
                            var t, n;
                            return (0, s.__generator)(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.streamingType && this.streamingType !== v.S.LiveEvent ? (this
                                            .isReloading = !0, [4, this.callbacksToParentAdapter.reload(Gn
                                                .ReloadPlayerOptions)]) : [3, 2];
                                    case 1:
                                        return i.sent(), [2];
                                    case 2:
                                        return e !== pr.NONE ? [3, 3] : [2];
                                    case 3:
                                        return e !== pr.CLOSE ? [3, 5] : (re.info("".concat(Ni("onFailoverAction"),
                                            " FailoverAction.CLOSE trigger. Stopping playback.")), [4, this
                                            .callbacksToParentAdapter.stop()
                                        ]);
                                    case 4:
                                        return i.sent(), er.emit(r), this.callbacksToParentAdapter.destroy(), [3, 14];
                                    case 5:
                                        return i.trys.push([5, 8, , 14]), re.info("".concat(Ni("onFailoverAction"),
                                            " Performing failover and reloading adapter")), [4, this.failoverService
                                            .performFailover(e)
                                        ];
                                    case 6:
                                        return i.sent() ? (this.initializeAdsTracker(), [4, this
                                            .callbacksToParentAdapter.reload(Gn.ReloadManifestUrl)
                                        ]) : [2];
                                    case 7:
                                        return i.sent(), [3, 14];
                                    case 8:
                                        t = i.sent(), re.error("".concat(Ni("onFailoverAction"),
                                                " Error encountered while performing failover: ").concat(t.message),
                                            Li, t.name, t.message, t.stack), i.label = 9;
                                    case 9:
                                        return i.trys.push([9, 11, , 12]), [4, this.callbacksToParentAdapter.stop()];
                                    case 10:
                                        return i.sent(), this.callbacksToParentAdapter.destroy(), [3, 12];
                                    case 11:
                                        return n = i.sent(), re.error("".concat(Ni("onFailoverAction"),
                                                " Error cleaning up after failed failover: ").concat(n.message), Li,
                                            n.name, n.message, n.stack), [3, 12];
                                    case 12:
                                        return [4, this.callbacksToParentAdapter.setError(t)];
                                    case 13:
                                        return i.sent(), [3, 14];
                                    case 14:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.initializeAdsTracker = function() {
                        this.liveAdsTracker && this.liveAdsTracker.stop();
                        var e = this.failoverService.getCurrentUrlSet(),
                            t = e.adsTrackingUrl,
                            n = e.urlSetId;
                        t ? this.liveAdsTracker = new zr(t, n) : this.liveAdsTracker && (re.warn("".concat(Ni("initializeAdsTracker"),
                            " Failed over from a URL that had ads URL to one that did not."), Li), delete this.liveAdsTracker)
                    }, e
                }(),
                Di = n(33578),
                wi = T("DeviceFulfillmentContentUpdate");
            ! function(e) {
                e.DFXP = "DFXP", e.HLS = "HLS", e.TTMLv2 = "TTMLv2"
            }(ii || (ii = {}));
            var ki = ii.TTMLv2;

            function Fi(e) {
                return function(e) {
                    switch (e) {
                        case c.ep.TTMLv1:
                            return ii.DFXP;
                        case c.ep.TTMLv2:
                            return ii.TTMLv2;
                        case c.ep.WebVTT:
                            return ii.HLS;
                        default:
                            return ki
                    }
                }((e.features && e.features.stream && e.features.stream.supportedTimedTextFormats || [])[0])
            }
            var xi = n(85564),
                Ui = n.n(xi),
                Bi = n(83966),
                Hi = n(25346),
                Gi = {
                    firstQuartile: .25,
                    midpoint: .5,
                    thirdQuartile: .75,
                    complete: 1,
                    breakStart: 0,
                    breakEnd: 1
                },
                Wi = {
                    firstQuartile: cn.FIRST_QUARTILE,
                    midpoint: cn.MIDPOINT,
                    thirdQuartile: cn.THIRD_QUARTILE,
                    complete: cn.COMPLETE,
                    breakStart: cn.BREAK_START,
                    breakEnd: cn.BREAK_END
                },
                Vi = "vmap:VMAP",
                Ki = "vmap:AdBreak",
                Zi = "vmap:AdSource",
                qi = function(e) {
                    re.error("Malformed VMAP manifest. ".concat(e, " is null or undefined."), ["VastManifestInfoExtractor.ts", "extract"])
                };

            function Yi(e, t, n) {
                return void 0 === n && (n = !0), Ui()(e.filter((function(e) {
                    return !!e[t] || (n && qi(t), !1)
                })).map((function(e) {
                    return e[t]
                })))
            }
            var zi, ji, Qi, Xi, Ji = function(e) {
                    return Array.isArray(e) ? e.map((function(e) {
                        return "string" == typeof e ? e : e._
                    })) : "string" == typeof e ? [e] : []
                },
                $i = function(e) {
                    var t = e.split(":");
                    if (t && 3 === t.length) return 60 * parseInt(t[0], 10) * 60 * 1e3 + 60 * parseInt(t[1], 10) * 1e3 + 1e3 * parseFloat(t[2]);
                    re.error("could not parse duration: ".concat(e), ["VastManifestInfoExtractor.ts", "parseDuration"])
                },
                eo = function() {
                    function e() {}
                    return e.extract = function(t, n) {
                        if (!t[Vi] || !t[Vi][Ki]) return qi("vmap:VMAP or vmap:AdBreak"), [];
                        var r = t[Vi][Ki].map((function(t) {
                            return e.extractAdBreak(t, n)
                        })).filter((function(e) {
                            return e.length > 0
                        })).sort((function(e, t) {
                            return e[0].startTimeMs - t[0].startTimeMs
                        }));
                        return e.getTimeAdjustedVastManifests(r)
                    }, e.extractAdBreak = function(t, n) {
                        var r, i, o, a, c, u, l = [];
                        if (!t.$ || !t.$.timeOffset) return qi("timeOffset"), l;
                        if (!t[Zi]) return qi("vmap:AdSource"), l;
                        var d = Yi(t[Zi], "vmap:VASTAdData"),
                            p = Yi(d, "VAST"),
                            f = Yi(p, "Ad"),
                            h = Yi(f, "InLine"),
                            m = function(e, t) {
                                if (e.endsWith("%")) {
                                    var n = e.slice(0, e.length - 1);
                                    return t * (parseInt(n, 10) / 100)
                                }
                                return "start" === e ? 0 : "end" === e ? t : e.startsWith("#") ? void re.error(
                                    "ad break offset specified using the unsupported position type: ".concat(e), [
                                        "VastManifestInfoExtractor.ts", "getStartTimeFromOffset"
                                    ]) : $i(e)
                            }(t.$.timeOffset, n);
                        if (void 0 === m) return l;
                        try {
                            for (var g = (0, s.__values)(h), v = g.next(); !v.done; v = g.next()) {
                                var y = v.value;
                                if (y.Creatives) {
                                    var E = [],
                                        T = [],
                                        P = 0,
                                        C = Yi(y.Creatives, "Creative"),
                                        I = e.extractContentType(y);
                                    try {
                                        for (var _ = (o = void 0, (0, s.__values)(C)), R = _.next(); !R.done; R = _.next()) {
                                            var b = R.value,
                                                S = b.$.id;
                                            if (b.Linear) {
                                                try {
                                                    for (var A = (c = void 0, (0, s.__values)(b.Linear)), O = A.next(); !O.done; O = A.next()) {
                                                        var N = O.value;
                                                        if (N.Duration) {
                                                            if (I === _n.AD) {
                                                                if (!N.TrackingEvents) {
                                                                    qi("TrackingEvents");
                                                                    continue
                                                                }
                                                                E.push.apply(E, (0, s.__spreadArray)([], (0, s.__read)(Yi(N.TrackingEvents,
                                                                    "Tracking")), !1)), N.VideoClicks && T.push.apply(T, (0, s
                                                                    .__spreadArray)([], (0, s.__read)(Yi(N.VideoClicks, "CustomClick", !
                                                                    1)), !1))
                                                            }
                                                            P += N.Duration.map((function(e) {
                                                                return $i(e) || 0
                                                            })).reduce((function(e, t) {
                                                                return e + t
                                                            }))
                                                        } else qi("Duration")
                                                    }
                                                } catch (e) {
                                                    c = {
                                                        error: e
                                                    }
                                                } finally {
                                                    try {
                                                        O && !O.done && (u = A.return) && u.call(A)
                                                    } finally {
                                                        if (c) throw c.error
                                                    }
                                                }
                                                var L = e.extractTrackingEvents(E, m, P),
                                                    M = L.timeBasedTrackingEvents,
                                                    D = L.actionBasedTrackingEvents;
                                                if (y.AdSystem && 0 !== y.AdSystem.length) {
                                                    if (y.Impression) {
                                                        var w = Ji(y.Impression);
                                                        w.length > 0 && (D[sn.IMPRESSION] = w)
                                                    }
                                                    if (y.Error) {
                                                        var k = Ji(y.Error);
                                                        k.length > 0 && (D[sn.ERROR] = k)
                                                    }
                                                    var F = e.extractCustomClickUrls(T),
                                                        x = e.extractSkipOptions(y, P),
                                                        U = e.extractOtherExtensions(y),
                                                        B = {
                                                            startTimeMs: m,
                                                            endTimeMs: m + P,
                                                            durationMs: P,
                                                            timeBasedTrackingEvents: M,
                                                            actionBasedTrackingEvents: D,
                                                            adSystem: y.AdSystem[0],
                                                            adInstanceId: (0, Hi.p)(),
                                                            customClickUrls: F,
                                                            skipOptions: x,
                                                            contentId: S,
                                                            contentType: I,
                                                            extensions: U
                                                        };
                                                    l.push(B), m += P
                                                } else qi("AdSystem")
                                            } else qi("Linear")
                                        }
                                    } catch (e) {
                                        o = {
                                            error: e
                                        }
                                    } finally {
                                        try {
                                            R && !R.done && (a = _.return) && a.call(_)
                                        } finally {
                                            if (o) throw o.error
                                        }
                                    }
                                } else qi("Creatives")
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                v && !v.done && (i = g.return) && i.call(g)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return l
                    }, e.extractCustomClickUrls = function(e) {
                        var t, n, r = {};
                        try {
                            for (var i = (0, s.__values)(e), o = i.next(); !o.done; o = i.next()) {
                                var a = o.value;
                                r[a.$.id] = a._
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                o && !o.done && (n = i.return) && n.call(i)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return r
                    }, e.extractTrackingEvents = function(e, t, n) {
                        var r, i, o = [],
                            a = {};
                        try {
                            for (var c = (0, s.__values)(e), u = c.next(); !u.done; u = c.next()) {
                                var l = u.value,
                                    d = l.$.event,
                                    p = Gi[d],
                                    f = [l._];
                                void 0 !== p ? o.push({
                                    eventType: Wi[d],
                                    eventTimeMs: t + n * p,
                                    eventUrls: f
                                }) : a[d] = f
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                u && !u.done && (i = c.return) && i.call(c)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return {
                            timeBasedTrackingEvents: o.sort((function(e, t) {
                                return e.eventTimeMs - t.eventTimeMs
                            })),
                            actionBasedTrackingEvents: a
                        }
                    }, e.getTimeAdjustedVastManifests = function(e) {
                        var t, n, r, i, o, a, c = 0;
                        try {
                            for (var u = (0, s.__values)(e), l = u.next(); !l.done; l = u.next()) {
                                var d = l.value;
                                try {
                                    for (var p = (r = void 0, (0, s.__values)(d)), f = p.next(); !f.done; f = p.next()) {
                                        var h = f.value;
                                        h.startTimeMs += c, h.endTimeMs += c;
                                        try {
                                            for (var m = (o = void 0, (0, s.__values)(h.timeBasedTrackingEvents)), g = m.next(); !g.done; g = m
                                                .next()) g.value.eventTimeMs += c
                                        } catch (e) {
                                            o = {
                                                error: e
                                            }
                                        } finally {
                                            try {
                                                g && !g.done && (a = m.return) && a.call(m)
                                            } finally {
                                                if (o) throw o.error
                                            }
                                        }
                                    }
                                } catch (e) {
                                    r = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        f && !f.done && (i = p.return) && i.call(p)
                                    } finally {
                                        if (r) throw r.error
                                    }
                                }
                                c += d.reduce((function(e, t) {
                                    return e + t.durationMs
                                }), 0)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                l && !l.done && (n = u.return) && n.call(u)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return Ui()(e)
                    }, e.extractContentType = function(e) {
                        if (e.Extensions && 0 !== e.Extensions.length) {
                            var t = Yi(e.Extensions, "Extension").filter((function(e) {
                                return e.$ && e.$.type && "contentMetadata" === e.$.type
                            })).map((function(e) {
                                var t, n = e.ContentMetadata,
                                    r = null === (t = null == n ? void 0 : n[0]) || void 0 === t ? void 0 : t.ContentType[0];
                                switch (null == r ? void 0 : r.toUpperCase()) {
                                    case _n.AD.toUpperCase():
                                        return _n.AD;
                                    case _n.AD_TRANSITION.toUpperCase():
                                        return _n.AD_TRANSITION;
                                    case _n.AUX.toUpperCase():
                                        return _n.AUX;
                                    default:
                                        return _n.UNKNOWN
                                }
                            }));
                            if (t.length > 0) return t[0]
                        }
                        return _n.AD
                    }, e.extractSkipOptions = function(e, t) {
                        if (!e.Extensions || 0 !== e.Extensions.length) {
                            var n = Yi(e.Extensions, "Extension").filter((function(e) {
                                return e.$ && e.$.type && "skippable" === e.$.type
                            })).map((function(e) {
                                var n, r = e;
                                if ((null == r ? void 0 : r.SkipOffset) && r.SkipOffset.length > 0 && (null === (n = r
                                        .MinAdLength) || void 0 === n ? void 0 : n.length) > 0 && t >= (0, Bi.V)(r.MinAdLength[0]))
                                    return {
                                        skipOffsetMs: (0, Bi.V)(r.SkipOffset[0]._),
                                        showTimer: "true" === r.SkipOffset[0].$.showTimer
                                    }
                            })).filter((function(e) {
                                return void 0 !== e
                            }));
                            return n.length > 0 ? n[0] : void 0
                        }
                    }, e.extractOtherExtensions = function(e) {
                        if (e.Extensions && 0 === e.Extensions.length) return [];
                        var t = Yi(e.Extensions, "Extension").filter((function(e) {
                            var t, n = null === (t = e.$) || void 0 === t ? void 0 : t.type;
                            return !("skippable" === n || "contentMetadata" === n)
                        }));
                        return t.map((function(e) {
                            try {
                                return to("Extension", e)
                            } catch (e) {
                                return re.error("failed to parse extension, ignoring: ".concat(e)), null
                            }
                        })).filter((function(e) {
                            return null !== e
                        }))
                    }, e
                }();

            function to(e, t, n) {
                var r, i, o, a;
                if (n && n >= 5) throw "recursion depth reached";
                var c = t.$,
                    u = t._,
                    l = (0, s.__rest)(t, ["$", "_"]),
                    d = null != c ? c : {},
                    p = [];
                u && p.push({
                    type: "Text",
                    text: u
                });
                try {
                    for (var f = (0, s.__values)(Object.entries(l)), h = f.next(); !h.done; h = f.next()) {
                        var m = (0, s.__read)(h.value, 2),
                            g = m[0],
                            v = m[1];
                        try {
                            for (var y = (o = void 0, (0, s.__values)(v)), E = y.next(); !E.done; E = y.next()) {
                                var T = E.value;
                                "string" == typeof T ? p.push({
                                    type: "Element",
                                    name: g,
                                    attributes: {},
                                    children: [{
                                        type: "Text",
                                        text: T
                                    }]
                                }) : p.push(to(g, T, (null != n ? n : 0) + 1))
                            }
                        } catch (e) {
                            o = {
                                error: e
                            }
                        } finally {
                            try {
                                E && !E.done && (a = y.return) && a.call(y)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                    }
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        h && !h.done && (i = f.return) && i.call(f)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return {
                    type: "Element",
                    name: e,
                    attributes: d,
                    children: p
                }
            }! function(e) {
                e.PLAYING = "playing", e.BUFFERING = "buffering", e.PAUSED = "paused", e.STOPPED = "stopped", e.SEEKING_BACKWARD =
                    "seekingBackward", e.SEEKING_FORWARD = "seekingForward"
            }(zi || (zi = {})),
            function(e) {
                e.USER_INTERACTION = "USER_INTERACTION", e.INTERNAL = "INTERNAL", e.STOP_END_REACHED = "STOP_END_REACHED", e.STOP_PLAY_NEXT =
                    "STOP_PLAY_NEXT", e.STOP_ERROR = "STOP_ERROR", e.STOP_API_CALLED = "STOP_API_CALLED"
            }(ji || (ji = {})),
            function(e) {
                e.GENERIC = "generic", e.CONNECTION = "connection"
            }(Qi || (Qi = {})),
            function(e) {
                e.FRAGMENT = "fragment", e.PLAYBACK_UPDATE = "playbackUpdate"
            }(Xi || (Xi = {}));
            var no, ro, io, oo, ao, so, co = {
                    pause: {
                        enabled: !1
                    },
                    forward: {
                        enabled: !1
                    },
                    backward: {
                        enabled: !1
                    }
                },
                uo = ne("PlaybackUrlProvider"),
                lo = function(e, t, n) {
                    var r, i;
                    this.playbackUrlSets = {};
                    var o, a, c = e.urlSets,
                        u = e.defaultUrlSetId,
                        l = !1,
                        d = go(n),
                        p = 0;
                    try {
                        for (var f = (0, s.__values)(Object.entries(c)), h = f.next(); !h.done; h = f.next()) {
                            var m = (0, s.__read)(h.value, 2),
                                g = m[0],
                                v = m[1],
                                y = v.urls,
                                E = v.failover,
                                T = y.manifest,
                                P = y.adsTrackingEndpoint,
                                C = T.audioTrackId,
                                I = T.videoQuality,
                                _ = T.drm,
                                R = T.url;
                            if (0 !== R.length)
                                if (d && (R = vo(R)), ho(_))
                                    if (mo(I)) {
                                        var b = {
                                            urlManifest: (0, s.__assign)((0, s.__assign)({}, T), {
                                                videoQuality: I,
                                                drm: _,
                                                url: R
                                            }),
                                            failoverMode: E,
                                            urlSetId: g,
                                            audioTrackId: C
                                        };
                                        P && (b.adsTrackingUrl = P), this.playbackUrlSets[g] = b, g === u && (this.defaultPlaybackUrl = b, o = C,
                                            l = !0)
                                    } else re.warn("".concat(uo("constructor"), " Unknown video quality: ").concat(I)), ++p;
                            else re.warn("".concat(uo("constructor"), " Unknown DRM type: ").concat(_)), ++p;
                            else re.warn("".concat(uo("constructor"), " URL is invalid")), ++p
                        }
                    } catch (e) {
                        r = {
                            error: e
                        }
                    } finally {
                        try {
                            h && !h.done && (i = f.return) && i.call(f)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    if (p > 0 && re.warn("".concat(uo("constructor"), " Number of invalid urls: ").concat(p)), !l) throw new Error(
                        "Playback Urls does not contain a valid default Url set");
                    var S = e.defaultAudioTrackId,
                        A = e.audioTracks;
                    po(A);
                    var O = (0, s.__read)(A, 1)[0];
                    o ? a = A.find((function(e) {
                        return e.audioTrackId === o
                    })) : S ? a = A.find((function(e) {
                        return e.audioTrackId === S
                    })) : O && (a = O), this.audioTrack = a
                },
                po = function(e) {
                    var t, n;
                    try {
                        for (var r = (0, s.__values)(e), i = r.next(); !i.done; i = r.next()) {
                            var o = i.value;
                            o.audioTrackId || (o.audioTrackId = fo(o.languageCode, o.audioSubtype, o.index))
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            i && !i.done && (n = r.return) && n.call(r)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                },
                fo = function(e, t, n) {
                    return e ? "".concat(e, "_").concat(t || "dialog", "_").concat(n || 0) : (re.warn("".concat(uo("generateAudioTrackId"),
                        " failed")), "unknown")
                },
                ho = function(e) {
                    return -1 !== Object.keys(Ee).indexOf(e)
                },
                mo = function(e) {
                    return -1 !== Object.keys(Z).indexOf(e)
                },
                go = function(e) {
                    var t = At.s.getInstance().getCapability(Ot.W.SUPPORTS_STREAMING_TECHNOLOGY_DASH),
                        n = At.s.getInstance().getCapability(Ot.W.SUPPORTS_HEX_ENCODED_MANIFEST),
                        r = e === _t.g.LiveStreaming;
                    return t && n && !r
                },
                vo = function(e) {
                    return new jt(e, [
                        ["encoding", "hex"]
                    ]).buildUri()
                },
                yo = function(e) {
                    return e.map((function(e, t) {
                        var n = e.languageCode,
                            r = e.type || "",
                            i = e.subtype || "",
                            o = e.timedTextTrackId;
                        return void 0 === o && (o = "".concat(n, "_").concat(r, "_").concat(i, "_").concat(t), h.y.metric("Debug", 1, {
                            customContext: {
                                metric: "MissingTimedTextTrackId"
                            },
                            reportOwner: m.R.PBCX
                        })), {
                            displayName: e.displayName,
                            languageCode: n,
                            url: e.url,
                            format: e.format || "",
                            type: r,
                            subtype: i,
                            trackGroupId: e.trackGroupId || "",
                            timedTextTrackId: o,
                            videoMaterialType: ""
                        }
                    }))
                },
                Eo = (n(50008), n(34575)),
                To = n(93913),
                Po = new Uint16Array("\u0200aglq\t\u026d\0\0p;\u4026os;\u4027t;\u403et;\u403cuot;\u4022".split("").map((function(e) {
                    return e.charCodeAt(0)
                }))),
                Co = new Map([
                    [0, 65533],
                    [128, 8364],
                    [130, 8218],
                    [131, 402],
                    [132, 8222],
                    [133, 8230],
                    [134, 8224],
                    [135, 8225],
                    [136, 710],
                    [137, 8240],
                    [138, 352],
                    [139, 8249],
                    [140, 338],
                    [142, 381],
                    [145, 8216],
                    [146, 8217],
                    [147, 8220],
                    [148, 8221],
                    [149, 8226],
                    [150, 8211],
                    [151, 8212],
                    [152, 732],
                    [153, 8482],
                    [154, 353],
                    [155, 8250],
                    [156, 339],
                    [158, 382],
                    [159, 376]
                ]),
                Io = null !== (no = String.fromCodePoint) && void 0 !== no ? no : function(e) {
                    var t = "";
                    return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t + String
                        .fromCharCode(e)
                };

            function _o(e) {
                return e >= ro.ZERO && e <= ro.NINE
            }! function(e) {
                e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e
                        .LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z",
                    e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z"
            }(ro || (ro = {})),
            function(e) {
                e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE"
            }(io || (io = {})),
            function(e) {
                e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e
                    .NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity"
            }(oo || (oo = {})), (so = ao || (ao = {}))[so.Legacy = 0] = "Legacy", so[so.Strict = 1] = "Strict", so[so.Attribute = 2] = "Attribute";
            var Ro = function() {
                function e(t, n, r) {
                    Eo(this, e), this.decodeTree = t, this.emitCodePoint = n, this.errors = r, this.state = oo.EntityStart, this.consumed = 1,
                        this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = ao.Strict
                }
                return To(e, [{
                    key: "startEntity",
                    value: function(e) {
                        this.decodeMode = e, this.state = oo.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1,
                            this.consumed = 1
                    }
                }, {
                    key: "write",
                    value: function(e, t) {
                        switch (this.state) {
                            case oo.EntityStart:
                                return e.charCodeAt(t) === ro.NUM ? (this.state = oo.NumericStart, this.consumed += 1, this
                                    .stateNumericStart(e, t + 1)) : (this.state = oo.NamedEntity, this.stateNamedEntity(e,
                                    t));
                            case oo.NumericStart:
                                return this.stateNumericStart(e, t);
                            case oo.NumericDecimal:
                                return this.stateNumericDecimal(e, t);
                            case oo.NumericHex:
                                return this.stateNumericHex(e, t);
                            case oo.NamedEntity:
                                return this.stateNamedEntity(e, t)
                        }
                    }
                }, {
                    key: "stateNumericStart",
                    value: function(e, t) {
                        return t >= e.length ? -1 : (32 | e.charCodeAt(t)) === ro.LOWER_X ? (this.state = oo.NumericHex, this
                            .consumed += 1, this.stateNumericHex(e, t + 1)) : (this.state = oo.NumericDecimal, this
                            .stateNumericDecimal(e, t))
                    }
                }, {
                    key: "addToNumericResult",
                    value: function(e, t, n, r) {
                        if (t !== n) {
                            var i = n - t;
                            this.result = this.result * Math.pow(r, i) + Number.parseInt(e.substr(t, i), r), this.consumed += i
                        }
                    }
                }, {
                    key: "stateNumericHex",
                    value: function(e, t) {
                        for (var n, r = t; t < e.length;) {
                            var i = e.charCodeAt(t);
                            if (!(_o(i) || (n = i, n >= ro.UPPER_A && n <= ro.UPPER_F || n >= ro.LOWER_A && n <= ro.LOWER_F)))
                                return this.addToNumericResult(e, r, t, 16), this.emitNumericEntity(i, 3);
                            t += 1
                        }
                        return this.addToNumericResult(e, r, t, 16), -1
                    }
                }, {
                    key: "stateNumericDecimal",
                    value: function(e, t) {
                        for (var n = t; t < e.length;) {
                            var r = e.charCodeAt(t);
                            if (!_o(r)) return this.addToNumericResult(e, n, t, 10), this.emitNumericEntity(r, 2);
                            t += 1
                        }
                        return this.addToNumericResult(e, n, t, 10), -1
                    }
                }, {
                    key: "emitNumericEntity",
                    value: function(e, t) {
                        var n;
                        if (this.consumed <= t) return null === (n = this.errors) || void 0 === n || n
                            .absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
                        if (e === ro.SEMI) this.consumed += 1;
                        else if (this.decodeMode === ao.Strict) return 0;
                        return this.emitCodePoint(function(e) {
                            var t;
                            return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : null !== (t = Co.get(e)) &&
                                void 0 !== t ? t : e
                        }(this.result), this.consumed), this.errors && (e !== ro.SEMI && this.errors
                            .missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this
                                .result)), this.consumed
                    }
                }, {
                    key: "stateNamedEntity",
                    value: function(e, t) {
                        for (var n = this.decodeTree, r = n[this.treeIndex], i = (r & io.VALUE_LENGTH) >> 14; t < e.length; t++,
                            this.excess++) {
                            var o = e.charCodeAt(t);
                            if (this.treeIndex = So(n, r, this.treeIndex + Math.max(1, i), o), this.treeIndex < 0) return 0 ===
                                this.result || this.decodeMode === ao.Attribute && (0 === i || ((a = o) === ro.EQUALS ||
                                    function(e) {
                                        return e >= ro.UPPER_A && e <= ro.UPPER_Z || e >= ro.LOWER_A && e <= ro
                                            .LOWER_Z || _o(e)
                                    }(a))) ? 0 : this.emitNotTerminatedNamedEntity();
                            if (0 != (i = ((r = n[this.treeIndex]) & io.VALUE_LENGTH) >> 14)) {
                                if (o === ro.SEMI) return this.emitNamedEntityData(this.treeIndex, i, this.consumed + this
                                    .excess);
                                this.decodeMode !== ao.Strict && (this.result = this.treeIndex, this.consumed += this.excess,
                                    this.excess = 0)
                            }
                        }
                        var a;
                        return -1
                    }
                }, {
                    key: "emitNotTerminatedNamedEntity",
                    value: function() {
                        var e, t = this.result,
                            n = (this.decodeTree[t] & io.VALUE_LENGTH) >> 14;
                        return this.emitNamedEntityData(t, n, this.consumed), null === (e = this.errors) || void 0 === e || e
                            .missingSemicolonAfterCharacterReference(), this.consumed
                    }
                }, {
                    key: "emitNamedEntityData",
                    value: function(e, t, n) {
                        var r = this.decodeTree;
                        return this.emitCodePoint(1 === t ? r[e] & ~io.VALUE_LENGTH : r[e + 1], n), 3 === t && this
                            .emitCodePoint(r[e + 2], n), n
                    }
                }, {
                    key: "end",
                    value: function() {
                        var e;
                        switch (this.state) {
                            case oo.NamedEntity:
                                return 0 === this.result || this.decodeMode === ao.Attribute && this.result !== this.treeIndex ?
                                    0 : this.emitNotTerminatedNamedEntity();
                            case oo.NumericDecimal:
                                return this.emitNumericEntity(0, 2);
                            case oo.NumericHex:
                                return this.emitNumericEntity(0, 3);
                            case oo.NumericStart:
                                return null === (e = this.errors) || void 0 === e || e
                                    .absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
                            case oo.EntityStart:
                                return 0
                        }
                    }
                }]), e
            }();

            function bo(e) {
                var t = "",
                    n = new Ro(e, (function(e) {
                        return t += Io(e)
                    }));
                return function(e, r) {
                    for (var i = 0, o = 0;
                        (o = e.indexOf("&", o)) >= 0;) {
                        t += e.slice(i, o), n.startEntity(r);
                        var a = n.write(e, o + 1);
                        if (a < 0) {
                            i = o + n.end();
                            break
                        }
                        i = o + a, o = 0 === a ? i + 1 : i
                    }
                    var s = t + e.slice(i);
                    return t = "", s
                }
            }

            function So(e, t, n, r) {
                var i = (t & io.BRANCH_LENGTH) >> 7,
                    o = t & io.JUMP_TABLE;
                if (0 === i) return 0 !== o && r === o ? n : -1;
                if (o) {
                    var a = r - o;
                    return a < 0 || a >= i ? -1 : e[n + a] - 1
                }
                for (var s = n, c = s + i - 1; s <= c;) {
                    var u = s + c >>> 1,
                        l = e[u];
                    if (l < r) s = u + 1;
                    else {
                        if (!(l > r)) return e[u + i];
                        c = u - 1
                    }
                }
                return -1
            }
            var Ao, Oo, No = bo(Po);
            new Map([
                    [34, "&quot;"],
                    [38, "&amp;"],
                    [39, "&apos;"],
                    [60, "&lt;"],
                    [62, "&gt;"]
                ]), String.prototype.codePointAt, new Map([
                    [34, "&quot;"],
                    [38, "&amp;"],
                    [160, "&nbsp;"]
                ]), new Map([
                    [38, "&amp;"],
                    [60, "&lt;"],
                    [62, "&gt;"],
                    [160, "&nbsp;"]
                ]),
                function(e) {
                    e[e.XML = 0] = "XML", e[e.HTML = 1] = "HTML"
                }(Ao || (Ao = {})),
                function(e) {
                    e[e.UTF8 = 0] = "UTF8", e[e.ASCII = 1] = "ASCII", e[e.Extensive = 2] = "Extensive", e[e.Attribute = 3] = "Attribute", e[e.Text =
                        4] = "Text"
                }(Oo || (Oo = {}));
            var Lo = n(82627),
                Mo = n.n(Lo),
                Do = function() {
                    function e(e, t, n) {
                        this.playbackResource = e, this.videoMaterialType = t, this.deviceProxyBaseUrl = n;
                        var r = e.playbackUrls,
                            i = e.returnedTitleRendition;
                        if (!i) throw new Error("Returned Title Rendition is undefined.");
                        if (this.titleId = i.asin, !r) throw new Error("Playback URLs are undefined");
                        this.audioTrackMetadata = r.audioTracks, this.playbackUrlProvider = new lo(r, this.titleId, t)
                    }
                    return e.prototype.getAudioTrackMetadata = function() {
                        return this.audioTrackMetadata
                    }, e.prototype.getTrickplayUrls = function() {
                        var e = [];
                        if (this.playbackResource.trickplayUrls) {
                            var t = this.playbackResource.trickplayUrls.trickplayUrlsCdnSets;
                            t && (e = t.map((function(e) {
                                return {
                                    cdn: e.cdn,
                                    trickplayUrlInfos: e.trickplayUrlInfoList.map((function(e) {
                                        return {
                                            resolution: parseInt(e.resolution, 10),
                                            url: e.url
                                        }
                                    }))
                                }
                            })))
                        }
                        return e
                    }, e.prototype.getTitleId = function() {
                        return this.titleId
                    }, e.prototype.getContentId = function() {
                        return this.playbackResource.returnedTitleRendition.contentId
                    }, e.prototype.getFairPlayApplicationCertificate = function() {
                        return this.playbackResource.fairPlayApplicationCertificate
                    }, e.prototype.getSubtitle = function() {
                        return e = this.playbackResource.subtitleUrls, t = this.playbackResource.forcedNarratives, {
                            subtitleUrlInfo: yo(e || []),
                            forcedNarrativeUrlInfo: yo(t || [])
                        };
                        var e, t
                    }, e.prototype.getVastManifestInfo = function() {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            var e, t;
                            return (0, s.__generator)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return (0, we.A)() ? (e = [], (t = this.playbackResource.cuepointPlaylist) ? t
                                            .encodedManifest ? [4, this.extractVastManifestInfo(t
                                            .encodedManifest)] : [3, 2] : [3, 3]) : [2, []];
                                    case 1:
                                        e = n.sent(), n.label = 2;
                                    case 2:
                                        return [3, 4];
                                    case 3:
                                        this.videoMaterialType === _t.g.Feature && (re.error(
                                                    "cuepointPlaylist is requested but encodedManifest was not returned by PRS",
                                                    ["PlaybackResourceReader.ts", "getVastManifestInfo"]), ae
                                                .reportDataPoint(K.VAST_MANIFEST_DOWNLOAD_ERROR, V.PLAYER, 1), h.y
                                                .metric("LegacyPlayer.VastManifest.DownloadError", 1, m.R.PBCX)), n
                                            .label = 4;
                                    case 4:
                                        return [2, e]
                                }
                            }))
                        }))
                    }, e.prototype.getPrsShowCountdownTimer = function() {
                        var e, t;
                        return !0 === (null === (t = null === (e = this.playbackResource.cuepointPlaylist) || void 0 === e ? void 0 : e
                            .additionalMetadata) || void 0 === t ? void 0 : t.showCountdownTimer)
                    }, e.prototype.getTransitionTimeCodes = function() {
                        return this.playbackResource.transitionTimecodes
                    }, e.prototype.getPlaybackSettings = function() {
                        return this.playbackResource.playbackSettings
                    }, e.prototype.getXrayMetadata = function() {
                        return this.playbackResource.xrayMetadata
                    }, e.prototype.getAccessControls = function() {
                        if (this.playbackResource.catalogMetadata) {
                            var e = this.playbackResource.catalogMetadata;
                            return e.playback && e.playback.accessControls
                        }
                    }, e.prototype.getAuditPings = function() {
                        if (this.playbackResource.returnedTitleRendition) return this.playbackResource.returnedTitleRendition.auditPings
                    }, e.prototype.getTimeShift = function() {
                        if (this.playbackResource.returnedTitleRendition) return 0 === this.playbackResource.returnedTitleRendition
                            .liveLookbackSec ? co : this.playbackResource.returnedTitleRendition.timeShift
                    }, e.prototype.getCatalogMetadata = function() {
                        return this.playbackResource.catalogMetadata
                    }, e.prototype.getDrmRequestInfo = function() {
                        return {
                            url: "".concat(this.deviceProxyBaseUrl, "/cdp/drm/GetPlayReadyLicense"),
                            postDataKey: "challenge",
                            param: {
                                asinList: this.titleId,
                                videoMaterialType: this.videoMaterialType,
                                consumptionType: "Streaming",
                                resourceUsage: "ImmediateConsumption"
                            }
                        }
                    }, e.prototype.getLiveSchedule = function() {
                        return this.playbackResource.liveSchedule
                    }, e.prototype.getLinearRestrictions = function() {
                        return this.playbackResource.linearRestrictions
                    }, e.prototype.getContentCodecs = function() {
                        var e = "None",
                            t = this.playbackUrlProvider.defaultPlaybackUrl.urlManifest,
                            n = t.audioFormat,
                            r = t.dynamicRange,
                            i = t.compressionStandard,
                            o = t.drm,
                            a = t.streamingTechnology;
                        return {
                            videoCodec: "HDR: ".concat(r || e, " | Codec: ").concat(i || e, " | DRM: ").concat(o || e, " | Streaming Tech: ")
                                .concat(a || e),
                            audioCodec: "Channel Type: ".concat(n || e)
                        }
                    }, e.prototype.extractVastManifestInfo = function(e) {
                        var t, n, r = this;
                        try {
                            t = atob(e)
                        } catch (e) {
                            return this.handleManifestParsingError(e)
                        }
                        return (n = t, new Promise((function(e, t) {
                            ! function(e, t) {
                                try {
                                    var n = new(Mo()),
                                        r = {},
                                        i = [{
                                            obj: r
                                        }],
                                        o = !0;
                                    n.onElementStart = function(e, t) {
                                        if ("?xml" !== e) {
                                            var n = {},
                                                r = t();
                                            Object.keys(r).length > 0 && (n.$ = r);
                                            var a = i[i.length - 1];
                                            o ? (a.obj[e] = n, o = !1) : a.obj[e] ? (Array.isArray(a.obj[e]) || (a.obj[
                                                e] = [a.obj[e]]), a.obj[e].push(n)) : a.obj[e] = [n], i.push({
                                                obj: n,
                                                name: e,
                                                text: ""
                                            })
                                        }
                                    }, n.onText = function(e) {
                                        var t = i[i.length - 1];
                                        if (t) {
                                            var n = e();
                                            n.trim() && (t.text = (t.text || "") + n)
                                        }
                                    }, n.onElementEnd = function(e) {
                                        if ("?xml" !== e) {
                                            var t = i.pop();
                                            if (null == t ? void 0 : t.text) {
                                                var n = function(e) {
                                                    return No(e, ao.Strict)
                                                }(t.text);
                                                if (0 === Object.keys(t.obj).length) {
                                                    var r = i[i.length - 1],
                                                        o = r.obj[e].indexOf(t.obj);
                                                    r.obj[e][o] = n
                                                } else t.obj._ = n
                                            }
                                        }
                                    }, n.parse(e), t(null, r)
                                } catch (e) {
                                    t(e, void 0)
                                }
                            }(n, (function(n, r) {
                                return n ? t(n) : e(r)
                            }))
                        }))).then((function(e) {
                            return eo.extract(e, 864e5)
                        })).catch((function(e) {
                            return r.handleManifestParsingError(e)
                        }))
                    }, e.prototype.handleManifestParsingError = function(e) {
                        return re.error("Failed to parse the VAST manifest: ".concat(e), ["PlaybackResourceReader.ts", "getVastManifestInfo"]),
                            ae.reportDataPoint(K.VAST_MANIFEST_PARSE_ERROR, V.PLAYER, 1), h.y.metric("LegacyPlayer.VastManifest.ParseError", 1,
                                m.R.PBCX), []
                    }, e
                }(),
                wo = function(e, t) {
                    return (0, s.__awaiter)(void 0, void 0, Promise, (function() {
                        var n, r;
                        return (0, s.__generator)(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return n = e.playbackUrlProvider, r = {
                                        drmRequestInfo: (0, s.__assign)((0, s.__assign)({}, e.getDrmRequestInfo()), {
                                            playbackToken: t.playbackToken
                                        }),
                                        playbackUrlSet: n.defaultPlaybackUrl,
                                        asin: e.getTitleId(),
                                        contentId: e.getContentId(),
                                        fairPlayApplicationCertificate: e.getFairPlayApplicationCertificate(),
                                        audioTrack: n.audioTrack,
                                        audioTracks: e.getAudioTrackMetadata(),
                                        trickplay: e.getTrickplayUrls(),
                                        subtitle: e.getSubtitle()
                                    }, [4, e.getVastManifestInfo()];
                                case 1:
                                    return r.vastManifestInfo = i.sent(), r.transitionTimeCodes = e
                                    .getTransitionTimeCodes(), r.playbackSettings = e.getPlaybackSettings(), r
                                        .xrayMetadata = e.getXrayMetadata(), r.accessControls = e.getAccessControls(), r
                                        .catalogMetadata = e.getCatalogMetadata(), r.auditPings = e.getAuditPings(), r
                                        .timeShift = e.getTimeShift(), r.liveSchedule = e.getLiveSchedule(), r
                                        .linearRestrictions = e.getLinearRestrictions(), r.contentCodecs = e
                                        .getContentCodecs(), r.prsShowCountdownTimer = e.getPrsShowCountdownTimer(), [2, r]
                            }
                        }))
                    }))
                },
                ko = ne("PlayerOptionsLoader.default"),
                Fo = h.y.metricTimer("LegacyPlayer.Prs.RequestLatency", m.R.PBCX),
                xo = function(e, t, n, r, i) {
                    return (0, s.__awaiter)(void 0, void 0, Promise, (function() {
                        var o, a, c, u, l, d, p, f;
                        return (0, s.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    if (o = t.titleId, ! function(e) {
                                            return -1 !== Object.values(_t.g).indexOf(e)
                                        }(a = t.videoMaterialType)) throw new Error("Unknown video material type ".concat(
                                        a));
                                    return c = {
                                            titleDecorationScheme: e.titleDecorationScheme,
                                            subtitleFormat: Fi(e),
                                            xrayConfig: e.xray,
                                            audioTrackId: r,
                                            liveScheduleConfigToken: "blast-browse-1",
                                            restrictionStartTimeOffset: 0,
                                            restrictionEndTimeOffset: 120,
                                            getCurrentUxLocale: e.localizationConfig.getCurrentUxLocale,
                                            getAdvertisingId: function() {
                                                var n;
                                                return void 0 !== t.advertisingId ? t.advertisingId : null === (n = e
                                                    .getAdvertisingId) || void 0 === n ? void 0 : n.call(e)
                                            },
                                            isOptOutAdTracking: function() {
                                                var n;
                                                return void 0 !== t.optOutAdTracking ? t.optOutAdTracking : null === (
                                                    n = e.isAdvertisingOptOut) || void 0 === n ? void 0 : n.call(e)
                                            },
                                            getGdprPrivacyConsent: function() {
                                                var e;
                                                return null === (e = t.dataPrivacy) || void 0 === e ? void 0 : e
                                                    .gdprPrivacyConsent
                                            }
                                        }, ae.startTimer(K.PLAYBACK_RESOURCES_LATENCY, V.PLAYER), Fo.start(), u = t
                                        .isTrailer, [4, Go(o, a, c, n, e.localizationConfig.marketplaceId, e
                                            .deviceProxyBaseUrl, t.playbackToken, e.clientId, null === (f = t
                                                .playbackEnvelope) || void 0 === f ? void 0 : f.envelope, i, u)];
                                case 1:
                                    return l = s.sent(), Uo(o, a, l), Bo(l), Ho(l), d = new Do(l, a, e.deviceProxyBaseUrl),
                                        [4, wo(d, t)];
                                case 2:
                                    return p = s.sent(), [2, [{
                                        autoplay: !1,
                                        mode: Wo(t.videoMaterialType, u),
                                        model: {
                                            nativePlayerOptional: !1,
                                            isPreload: !1,
                                            mediaItem: p
                                        },
                                        htmlPlayerSourceUrl: e.deviceConfig && e.deviceConfig
                                            .htmlPlayerSourceUrl,
                                        surfaceRef: e.surfaceRef
                                    }, d.playbackUrlProvider]]
                            }
                        }))
                    }))
                },
                Uo = function(e, t, n) {
                    var r, i = null === (r = n.playbackUrls) || void 0 === r ? void 0 : r.defaultUrlSetId;
                    i || (i = (0, Di.Y)()), Ir.emit({
                        urlSetId: i
                    }), wi.emit({
                        contentId: e,
                        videoMaterialType: t
                    })
                },
                Bo = function(e) {
                    var t, n, r = e.errorsByResource;
                    if (r) {
                        re.debug("".concat(ko("reportErrors"), " PRS resource errors: ").concat(JSON.stringify(r)));
                        try {
                            for (var i = (0, s.__values)(Object.values(De)), o = i.next(); !o.done; o = i.next()) {
                                var a = o.value;
                                a in r && ae.reportDataPoint("PrsResourceError_".concat(a), V.PLAYER, 1)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                o && !o.done && (n = i.return) && n.call(i)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                    }
                },
                Ho = function(e) {
                    if (e.returnedTitleRendition) {
                        var t = e.returnedTitleRendition.selectedEntitlement;
                        if (t && t.rightsException) {
                            var n = t.rightsException;
                            throw re.info("".concat(ko("assertRightsException"), " ").concat(n, " code=").concat(n.errorCode, " cause=").concat(n
                                .cause, " downstreamReason=").concat(n.downstreamReason)), r = t.rightsException, {
                                name: hr,
                                message: "".concat(r.name, ": ").concat(r.message, " (code: ").concat(r.errorCode, ")"),
                                code: "string" == typeof r.errorCode && r.errorCode in fr ? fr[r.errorCode] : c.T7.GenericNonRecoverableError,
                                stack: r.stack
                            }
                        }
                    }
                    var r
                };

            function Go(e, t, n, r, i, o, a, u, l, d, p) {
                return (0, s.__awaiter)(this, void 0, void 0, (function() {
                    return (0, s.__generator)(this, (function(s) {
                        return [2, xt.getInstance().fetchTitle({
                            titleId: e,
                            videoMaterialType: t,
                            playbackResourceParams: n,
                            authContext: r.getAuthContext(),
                            marketplaceId: i,
                            deviceProxyBaseUrl: o,
                            playbackToken: a,
                            clientId: u,
                            playbackEnvelope: l,
                            applicationIdentity: d,
                            isTrailer: p
                        }).then((function(e) {
                            return ae.stopTimer(K.PLAYBACK_RESOURCES_LATENCY), Fo.stop(), e
                        })).catch((function(e) {
                            return ae.clearTimer(K.PLAYBACK_RESOURCES_LATENCY), Fo.clear(), ae
                                .reportDataPoint(K.PRS_HTTP_ERROR, V.PLAYER, 1), h.y.metric(
                                    "LegacyPlayer.Prs.HttpError", 1, m.R.PBCX), Promise.reject({
                                    name: hr,
                                    message: "".concat((t = e).name, ": ").concat(t.message),
                                    code: t.name && fr[t.name] || c.T7.GenericNonRecoverableError,
                                    stack: t.stack
                                });
                            var t
                        }))]
                    }))
                }))
            }

            function Wo(e, t) {
                switch (e) {
                    case _t.g.Feature:
                        return t ? ve.TRAILER : ve.FULL_VIDEO;
                    case _t.g.LiveStreaming:
                        return ve.LIVE_STREAMING;
                    case _t.g.Trailer:
                        return ve.TRAILER;
                    default:
                        return ve.FULL_VIDEO
                }
            }
            var Vo, Ko = function() {
                    function e(e) {
                        e.features && e.features.stream && e.features.stream.preferredStreamMatchers && (this.streamMatchers = e.features.stream
                            .preferredStreamMatchers[c.Mo.Audio])
                    }
                    return e.prototype.getAudioTrackId = function() {
                        if (this.streamMatchers && this.streamMatchers[0]) return this.streamMatchers[0].trackId
                    }, e.prototype.setStreamMatchers = function(e) {
                        this.streamMatchers = e
                    }, e
                }(),
                Zo = ((Vo = {}).dialog = c.uZ.Dialog, Vo.commentary = c.uZ.Commentary, Vo.descriptive = c.uZ.Descriptive, Vo.boosteddialoglow = c.uZ
                    .BoostedDialogLow, Vo.boosteddialogmedium = c.uZ.BoostedDialogMedium, Vo.boosteddialoghigh = c.uZ.BoostedDialogHigh, Vo
                    .dialogmachinegenerated = c.uZ.DialogMachineGenerated, Vo),
                qo = n(18446),
                Yo = n.n(qo),
                zo = ne("VodTimedTextStreamProvider"),
                jo = [{
                    type: c.f8.Mandatory
                }],
                Qo = function() {
                    function e(e, t) {
                        this.timedTextStreams = [], this.matchers = jo, this.currentAudioTrackLanguage = t, this.timedTextReporter = new Ii, this
                            .timedTextStreams = Ei(e), this.matchStreamAndMaybeEmit(this.matchers, t)
                    }
                    return e.prototype.setCurrentAudioTrackLanguage = function(e) {
                        this.currentAudioTrackLanguage = e, this.matchStreamAndMaybeEmit(this.matchers, e).catch((function(t) {
                            re.error("".concat(zo("setCurrentAudioTrackLanguage"), " failed to update stream for ").concat(e, ". ")
                                .concat(t))
                        }))
                    }, e.prototype.getTimedTextStreams = function() {
                        return this.timedTextStreams
                    }, e.prototype.setStreamMatchers = function(e) {
                        Yo()(this.matchers, e) || (this.matchers = e, this.matchStreamAndMaybeEmit(e, this.currentAudioTrackLanguage).catch((
                            function(t) {
                                re.error("".concat(zo("setStreamMatchers"), " failed for stream matchers: ").concat(JSON.stringify(
                                    e), ". ").concat(t))
                            })))
                    }, e.prototype.destroy = function() {}, e.prototype.matchStreamAndMaybeEmit = function(e, t) {
                        return (0, s.__awaiter)(this, void 0, void 0, (function() {
                            var n, r;
                            return (0, s.__generator)(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.stream = Jr.getTimedTextStream(this.timedTextStreams, e, t), this
                                            .stream ? (n = this.stream.id, [4, this.downloadTimedText(this.stream)]) : (
                                                this.timedTextReporter.emitTimedTextChange(), re.info("".concat(zo(
                                                        "setStreamMatchers"),
                                                    " Content does not have any timed text resources")), [2]);
                                    case 1:
                                        return r = i.sent(), this.stream && this.stream.id === n ? (this.emitTimedText(
                                            this.stream, r), [2]) : [2]
                                }
                            }))
                        }))
                    }, e.prototype.downloadTimedText = function(e) {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            var t, n, r, i;
                            return (0, s.__generator)(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (o.trys.push([0, 2, , 3]), t = function(e, t) {
                                                var n, r;
                                                try {
                                                    for (var i = (0, s.__values)(t), o = i.next(); !o.done; o = i
                                                    .next()) {
                                                        var a = o.value;
                                                        if (e === a.id) return a
                                                    }
                                                } catch (e) {
                                                    n = {
                                                        error: e
                                                    }
                                                } finally {
                                                    try {
                                                        o && !o.done && (r = i.return) && r.call(i)
                                                    } finally {
                                                        if (n) throw n.error
                                                    }
                                                }
                                            }(e.id, this.timedTextStreams), n = function(e) {
                                                if (e) return e.variants && e.variants[0] ? e.variants[0].url : void 0
                                            }(t), !t || !n) throw new Error("Timed text url is missing or invalid");
                                        return [4, oi(n, t.type, Qr.VOD)];
                                    case 1:
                                        return r = o.sent(), re.debug("".concat(zo("downloadTimedText"),
                                            " Successfully obtained Timed Text with id: ").concat(e.id)), [2, yi(r)];
                                    case 2:
                                        throw i = o.sent(), re.error("".concat(zo("downloadTimedText"),
                                            " Failed to download Timed Text - ").concat(i)), new Error(
                                            "Failed to download Timed Text - ".concat(i));
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.emitTimedText = function(e, t) {
                        this.timedTextReporter.emitTimedTextChange(this.stream), this.timedTextReporter.emitTimedTextStreamData(t, this.stream)
                    }, e
                }(),
                Xo = function(e, t, n) {
                    var r = t.playableRanges[e.timelineItemIndex];
                    if (void 0 === r) return e;
                    var i = r.start,
                        o = r.end;
                    if (null === i || null === o) {
                        var a, s;
                        if (e.timelineItemIndex > t.currentTimelineItemIndex) return void 0 !== (s = $o(e.timelineItemIndex, t.playableRanges, n)) ?
                        {
                            timelineItemIndex: s,
                            positionMs: t.playableRanges[s].start
                        } : void 0 !== (a = ea(e.timelineItemIndex, t.playableRanges)) ? {
                            timelineItemIndex: a,
                            positionMs: t.playableRanges[a].end
                        } : (re.warn(
                            "[clampToPlayableRange] Unable to find a timeline item with a playable range. Falling back to the input position. (targetPosition: "
                            .concat(JSON.stringify(e), ")")), e);
                        if (e.timelineItemIndex < t.currentTimelineItemIndex) return void 0 !== (a = ea(e.timelineItemIndex, t.playableRanges)) ? {
                            timelineItemIndex: a,
                            positionMs: t.playableRanges[a].end
                        } : void 0 !== (s = $o(e.timelineItemIndex, t.playableRanges, n)) ? {
                            timelineItemIndex: s,
                            positionMs: t.playableRanges[s].start
                        } : e;
                        re.warn("[clampToPlayableRange] Unable to find a timeline item with a playable range. Falling back to the input position. (targetPosition: "
                            .concat(JSON.stringify(e), ")"));
                        var c = $o(0, t.playableRanges, n);
                        return void 0 !== c ? {
                            timelineItemIndex: c,
                            positionMs: t.playableRanges[c].start
                        } : e
                    }
                    return e.positionMs < i ? {
                        timelineItemIndex: e.timelineItemIndex,
                        positionMs: i
                    } : e.positionMs > o ? {
                        timelineItemIndex: e.timelineItemIndex,
                        positionMs: o
                    } : e
                },
                Jo = function(e, t) {
                    return void 0 === t[e] || null !== t[e].start && null !== t[e].end
                },
                $o = function(e, t, n) {
                    for (var r = e; r < n; r++)
                        if (Jo(r, t)) return r
                },
                ea = function(e, t) {
                    for (var n = e; n >= 0; n--)
                        if (Jo(n, t)) return n
                },
                ta = n(45955),
                na = n(30998),
                ra = n.n(na),
                ia = function(e) {
                    return Object.keys(e.customClickUrls)
                },
                oa = function(e, t) {
                    var n, r, i;
                    void 0 === t && (t = !1);
                    var o = e.skipOptions ? null !== (r = null === (n = e.skipOptions) || void 0 === n ? void 0 : n.showTimer) && void 0 !== r &&
                        r : e.contentType === _n.AD && t;
                    return {
                        adSystem: {
                            name: e.adSystem
                        },
                        adInstanceId: e.adInstanceId,
                        showCountdownTimer: o,
                        skipOffset: null === (i = e.skipOptions) || void 0 === i ? void 0 : i.skipOffsetMs,
                        customClicks: ia(e),
                        extensions: e.extensions
                    }
                },
                aa = function(e) {
                    return "ad-".concat(e)
                },
                sa = {},
                ca = ne("TimelineService");

            function ua(e, t, n) {
                void 0 === n && (n = ""), n || re.warn("".concat(ca("populateLiveChannelTimeline"), " channel name missing for ").concat(e
                    .channelID));
                var r = e.scheduled,
                    i = r.map((function(e, t) {
                        return function(e, t) {
                            var n = 1e3 * e.time.startTime,
                                r = 1e3 * (t ? t.time.startTime : e.time.endTime);
                            return {
                                timeUnit: c.j1.EpochMillis,
                                startTime: n,
                                endTime: r,
                                error: null,
                                contentId: e.titleId,
                                groupId: "".concat(e.titleId, "_").concat(n)
                            }
                        }(e, t < r.length - 1 ? r[t + 1] : void 0)
                    })),
                    o = r.map((function(e) {
                        return function(e, t, n) {
                            return {
                                titleId: e.titleId,
                                contentType: c.xR.Feature,
                                metadata: e.title,
                                videoPreviewAssets: [],
                                channelName: n,
                                pinRestrictions: la(t, e.titleId)
                            }
                        }(e, t, n)
                    }));
                return {
                    items: i,
                    contentInfos: o.reduce((function(e, t) {
                        return e[t.titleId] = t, e
                    }), {})
                }
            }

            function la(e, t) {
                var n = e.metadata.customerPin.length,
                    r = e.programs.filter((function(e) {
                        return e.identifiers.find((function(e) {
                            return e === t
                        })) && e.restriction
                    })).map((function(e) {
                        return e.restriction
                    }));
                if (n && r) return {
                    pinLength: n,
                    restrictions: r
                }
            }
            var da = function(e, t) {
                    var n, r = f()(e),
                        i = t.continuousPlayItem,
                        o = t.continuousPlayConfig;
                    r.items.push(ya(0, null, i.id, i.id));
                    var a = {
                        titleId: i.id,
                        contentType: c.xR.Feature,
                        videoPreviewAssets: [],
                        metadata: {
                            catalog: {
                                title: i.title,
                                episodeNumber: i.episodeNumber,
                                regulatoryRating: i.regulatoryRating
                            },
                            images: {
                                imageUrls: {
                                    title: i.imageUrl
                                }
                            }
                        },
                        transitionTimecodes: {
                            outroCreditsStart: 0,
                            autoplaySettings: {
                                autoplayCardPreferredImage: o.autoplayCardPreferredImage,
                                autoplayEnabled: o.autoplayEnabled,
                                showAutoplayCard: o.showAutoplayCard
                            }
                        }
                    };
                    return r.contentInfos = (0, s.__assign)((0, s.__assign)({}, r.contentInfos), ((n = {})[i.id] = a, n)), r
                },
                pa = function(e, t) {
                    var n = e.vastManifestInfo,
                        r = e.asin,
                        i = e.prsShowCountdownTimer;
                    if (0 === t.durationSec) return [
                        [ya(0, 1 / 0, r, r)], sa
                    ];
                    var o = 0,
                        a = 1e3 * t.durationSec,
                        s = [],
                        c = {};
                    if (n)
                        for (var u = 0; u < n.length; ++u) {
                            var l = n[u],
                                d = u > 0 ? n[u - 1] : null,
                                p = u > 0 ? s[s.length - 1] : null,
                                f = l.startTimeMs - (d ? d.endTimeMs : 0),
                                h = 0 === f && (null == d ? void 0 : d.contentType) === _n.AD,
                                m = l.contentType === _n.AD && h && (null == p ? void 0 : p.endTime) ? p.endTime : 0;
                            f > 0 && (s.push(ya(o, o + f, r, r)), o += f);
                            var g = aa(u);
                            s.push(ya(m, m + l.durationMs, g, r)), c[g] = {
                                titleId: g,
                                contentType: fa(l.contentType),
                                videoPreviewAssets: [],
                                metadata: oa(l, i)
                            }, a -= l.durationMs
                        }
                    return o < a && s.push(ya(o, a, r, r)), [s, c]
                };

            function fa(e) {
                if (!l.b.getInstance().isFeatureEnabled(d.L.LEGACY_PLAYER_AUX_AND_AD_TRANSITION_CONTENT_TYPE)) return c.xR.Advertisement;
                switch (e) {
                    case _n.AUX:
                        return c.xR.Auxiliary;
                    case _n.AD_TRANSITION:
                        return c.xR.AdTransition;
                    default:
                        return c.xR.Advertisement
                }
            }
            var ha, ma, ga, va, ya = function(e, t, n, r) {
                    return {
                        timeUnit: c.j1.ContentMillis,
                        startTime: e,
                        endTime: t,
                        error: null,
                        contentId: n,
                        groupId: r
                    }
                },
                Ea = function(e) {
                    var t, n, r, i = e.trickplay;
                    if (!i || !i[0]) return [];
                    var o = i.map((function(e) {
                            return e.trickplayUrlInfos
                        })).reduce((function(e, t) {
                            return e.concat(t)
                        }), []),
                        a = function(e) {
                            return {
                                urls: [],
                                quality: e,
                                format: c.Vp.BIF
                            }
                        },
                        u = c.BH.Low,
                        l = c.BH.Medium,
                        d = ((t = {})[u] = a(u), t[l] = a(l), t);
                    try {
                        for (var p = (0, s.__values)(o), f = p.next(); !f.done; f = p.next()) {
                            var h = f.value;
                            d[720 === h.resolution ? l : u].urls.push(h.url)
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            f && !f.done && (r = p.return) && r.call(p)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return Object.values(d)
                },
                Ta = 18e5,
                Pa = ne("LiveTimelineReloader"),
                Ca = function() {
                    function e(e, t, n, r) {
                        var i = this;
                        this.config = e, this.authContext = t, this.marketplaceId = n, this.deviceProxyBaseUrl = r, this.requestTimeline =
                        function() {
                            return (0, s.__awaiter)(i, void 0, void 0, (function() {
                                var e, t = this;
                                return (0, s.__generator)(this, (function(n) {
                                    return e = {
                                        titleDecorationScheme: "blast-detail-page",
                                        subtitleFormat: ii.TTMLv2,
                                        xrayConfig: this.config.xrayConfig,
                                        liveScheduleConfigToken: "blast-browse-1",
                                        restrictionStartTimeOffset: 0,
                                        restrictionEndTimeOffset: 120,
                                        getCurrentUxLocale: this.config.getCurrentUxLocale
                                    }, [2, (0, ta.n)(xt.getInstance().fetchTitle({
                                        titleId: this.config.channelId,
                                        videoMaterialType: _t.g.LiveStreaming,
                                        playbackResourceParams: e,
                                        authContext: this.authContext.getAuthContext(),
                                        marketplaceId: this.marketplaceId,
                                        deviceProxyBaseUrl: this.deviceProxyBaseUrl,
                                        resources: [xe.LiveSchedule(e.liveScheduleConfigToken), xe
                                            .LinearRestrictions(e.restrictionStartTimeOffset, e
                                                .restrictionEndTimeOffset)
                                        ]
                                    }), 5e3, "liveTimelineManager").then((function(e) {
                                        var n = e.liveSchedule,
                                            r = e.linearRestrictions;
                                        n && r ? t.onScheduleRecieved(n, r) : re.error("".concat(Pa(
                                                "requestTimeline"),
                                            " missing required resources from ").concat(t.config
                                            .channelId, ". LiveSchedule: ").concat(JSON
                                            .stringify(n), ". LinearRestrictions: ").concat(JSON
                                            .stringify(r)))
                                    })).catch((function(e) {
                                        re.error("".concat(Pa("requestTimeline"), " failed with error ")
                                                .concat(e, ". titleId: ").concat(t.config.channelId)), t
                                            .scheduleTimelineReload(Ta)
                                    }))]
                                }))
                            }))
                        }
                    }
                    return e.prototype.scheduleTimelineReload = function(e) {
                        var t = this;
                        void 0 !== this.fetchTimer && re.warn("".concat(Pa("scheduleTimelineReload"),
                            " has been called while already scheduled")), this.stopTimer();
                        var n = Math.max(e, Ta);
                        re.info("".concat(Pa("scheduleTimelineReload"), " requesting new timeline in ").concat(n, "ms")), this.fetchTimer =
                            setTimeout((function() {
                                t.fetchTimer = void 0, t.requestTimeline()
                            }), n)
                    }, e.prototype.destroy = function() {
                        this.stopTimer()
                    }, e.prototype.onScheduleRecieved = function(e, t) {
                        re.info("".concat(Pa("onScheduleReceived"), " received new live schedule ").concat(JSON.stringify(e), ", ").concat(JSON
                            .stringify(t))), this.config.callback(ua(e, t, e.channelName))
                    }, e.prototype.stopTimer = function() {
                        void 0 !== this.fetchTimer && (clearTimeout(this.fetchTimer), this.fetchTimer = void 0)
                    }, e
                }(),
                Ia = {
                    items: [],
                    contentInfos: {}
                },
                _a = {
                    unit: c.j1.ContentMillis,
                    currentPosition: 0,
                    currentTimelineItemIndex: 0,
                    playableRanges: {}
                },
                Ra = {
                    isLiveStreaming: !1
                },
                ba = function(e) {
                    return e.type === c.xR.Feature
                },
                Sa = function(e) {
                    return e.type === c.xR.AdTransition
                },
                Aa = function(e) {
                    return e.type === c.xR.Advertisement
                },
                Oa = function(e) {
                    return e.adInclusiveStartTimeMs + e.durationMs
                },
                Na = function(e, t, n) {
                    var r = e[n.timelineItemIndex],
                        i = t[n.timelineItemIndex],
                        o = n.positionMs - r.startTime;
                    return Math.min(i.adInclusiveStartTimeMs + o, Oa(i))
                },
                La = ne("PlayerTimelineManager"),
                Ma = function() {
                    function e(e, t, n, r, i, o, a) {
                        var u = this;
                        this.authContext = t, this.marketplaceId = n, this.deviceProxyBaseUrl = r, this.continuousPlayManager = i, this
                            .getEpochOffset = o, this.getContentDuration = a, this.resumeTitleItemIndex = 0, this.hasPlayerMetadata = !1, this
                            .isPlayingMainContent = !1, this.getAdExclusiveElapsedEpochTime = function() {
                                var e = u.getAdExclusiveElapsedTime();
                                return null !== e && void 0 !== u.epochOffsetMs ? e + u.epochOffsetMs : e
                            }, this.buildTimelineMetadata = function(e, t) {
                                var n, r, i = u.getManifestStartOffset(e, t),
                                    o = i,
                                    a = 0,
                                    c = [];
                                try {
                                    for (var l = (0, s.__values)(e.items), d = l.next(); !d.done; d = l.next()) {
                                        var p = d.value;
                                        if (null === p.startTime || null === p.endTime) break;
                                        var f = e.contentInfos[p.contentId],
                                            h = f.contentType,
                                            m = p.endTime - p.startTime,
                                            g = {
                                                type: h,
                                                contentId: p.contentId,
                                                adInclusiveStartTimeMs: o,
                                                manifestStartOffset: i,
                                                durationMs: m,
                                                adExclusiveStartTimeMs: o - a
                                            };
                                        Aa(g) ? (g.attachedMetadata = f.metadata, a += m) : Sa(g) && (a += m), c.push(g), o += m
                                    }
                                } catch (e) {
                                    n = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        d && !d.done && (r = l.return) && r.call(l)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                                return c
                            }, this.getManifestStartOffset = function(e, t) {
                                var n = 0;
                                return u.config.liveChannelConfig && void 0 !== t && e.items.length > 0 && null !== e.items[0].startTime && (n = e
                                    .items[0].startTime - t), n
                            }, this.isAdFreeArea = function(e, t) {
                                return !!e.endTime && e.endTime - t <= 4e3
                            }, this.findUnskippablePrecedingAdBreak = function(e) {
                                for (var t, n = e; n >= u.resumeTitleItemIndex; n--) {
                                    var r = u.timelineMetadata[n];
                                    if (Aa(r) && r.attachedMetadata) {
                                        if (void 0 !== r.attachedMetadata.skipOffset) break;
                                        t = n
                                    } else if (t) break
                                }
                                return void 0 !== t ? u.timelineMetadata[t] : void 0
                            }, this.maybeMarkAdAsWatchedAndSeekToReservedPosition = function() {
                                if (u.previousIndex < u.currentTimeData.currentTimelineItemIndex) {
                                    var e = u.timelineMetadata[u.previousIndex];
                                    if (Aa(e) && e.attachedMetadata) {
                                        var t = e.attachedMetadata;
                                        if (void 0 !== t && void 0 === t.skipOffset) {
                                            var n = u.timeline.contentInfos[e.contentId],
                                                r = (0, s.__assign)((0, s.__assign)({}, t), {
                                                    skipOffset: 0
                                                });
                                            n.metadata = r, e.attachedMetadata = r, u.eventHandlers.onTimelineChange(u
                                                .maybeCreateTimelineWithEpochOffset(u.timeline, u.epochOffsetMs));
                                            var i = u.timelineMetadata[u.currentTimeData.currentTimelineItemIndex];
                                            if (u.reservedSeekPosition && !Aa(i)) {
                                                var o = Xo(u.reservedSeekPosition, u.currentTimeData, u.timelineMetadata.length),
                                                    a = Na(u.timeline.items, u.timelineMetadata, o);
                                                u.eventHandlers.seek(a), u.reservedSeekPosition = null
                                            }
                                        }
                                    }
                                }
                            }, this.maybeCreateTimelineWithEpochOffset = function(e, t) {
                                if (void 0 === t) return e;
                                for (var n = f()(e), r = 0; r < n.items.length; r++) {
                                    var i = n.items[r];
                                    n.items[r] = (0, s.__assign)((0, s.__assign)({}, i), {
                                        timeUnit: c.j1.EpochMillis,
                                        startTime: null !== i.startTime ? i.startTime + t : null,
                                        endTime: null !== i.endTime ? i.endTime + t : null
                                    })
                                }
                                return n
                            }, this.maybeCreateTimeDataWithEpochOffset = function(e, t) {
                                var n, r;
                                if (void 0 === t) return e;
                                var i = f()(e.playableRanges);
                                try {
                                    for (var o = (0, s.__values)(Object.keys(i)), a = o.next(); !a.done; a = o.next()) {
                                        var u = a.value,
                                            l = i[Number(u)];
                                        i[Number(u)] = (0, s.__assign)((0, s.__assign)({}, l), {
                                            unit: c.j1.EpochMillis,
                                            start: null !== l.start ? l.start + t : null,
                                            end: null != l.end ? l.end + t : null
                                        })
                                    }
                                } catch (e) {
                                    n = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        a && !a.done && (r = o.return) && r.call(o)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                                return (0, s.__assign)((0, s.__assign)({}, f()(e)), {
                                    unit: c.j1.EpochMillis,
                                    currentPosition: e.currentPosition + t,
                                    playableRanges: i
                                })
                            }, this.buildVodPlayableRanges = function(e) {
                                var t = e.items.map((function(e, t) {
                                    var n;
                                    return (n = {})[t] = {
                                        unit: c.j1.ContentMillis,
                                        start: e.startTime,
                                        end: e.endTime
                                    }, n
                                })).reduce((function(e, t) {
                                    return (0, s.__assign)((0, s.__assign)({}, e), t)
                                }), {});
                                return t
                            }, this.attachVodPlayableRanges = function(e, t) {
                                return (0, s.__assign)((0, s.__assign)({}, f()(e)), {
                                    playableRanges: t || {}
                                })
                            }, this.init(Ra), this.eventHandlers = e, this.getAdExclusiveElapsedTime = this.getAdExclusiveElapsedTime.bind(this),
                            this.getCurrentTimelineType = this.getCurrentTimelineType.bind(this), this.updateLiveStreamingPlayableRange = this
                            .updateLiveStreamingPlayableRange.bind(this), this.getCurrentTimelineItemStartTime = this
                            .getCurrentTimelineItemStartTime.bind(this)
                    }
                    return e.prototype.init = function(e) {
                        var t = this;
                        this.timeline = {
                                items: Ia.items,
                                contentInfos: Ia.contentInfos
                            }, this.currentTimeData = (0, s.__assign)({}, _a), this.previousIndex = 0, this.timelineMetadata = [], this
                            .reservedSeekPosition = null, this.config = e, e.liveChannelConfig && (this.liveTimelineReloader = new Ca({
                                callback: function(e) {
                                    return t.updateTimeline(e, t.epochOffsetMs)
                                },
                                channelId: e.liveChannelConfig.channelId,
                                xrayConfig: e.liveChannelConfig.xrayConfig,
                                getCurrentUxLocale: e.liveChannelConfig.getCurrentUxLocale
                            }, this.authContext, this.marketplaceId, this.deviceProxyBaseUrl))
                    }, e.prototype.onLoadContent = function(e) {
                        this.hasPlayerMetadata = !1, this.isPlayingMainContent = !1, this.createAndUpdateTimeline(e)
                    }, e.prototype.onPlayerMetadata = function(e, t) {
                        this.hasPlayerMetadata = !0, this.createAndUpdateTimeline(e, t)
                    }, e.prototype.onContinuousPlayDataFetched = function(e) {
                        var t = da(this.timeline, e);
                        this.updateTimeline(t)
                    }, e.prototype.createAndUpdateTimeline = function(e, t) {
                        try {
                            if (e) {
                                var n = function(e, t) {
                                        var n = e.liveSchedule,
                                            r = e.linearRestrictions;
                                        return n && 0 !== n.scheduled.length && r ? ua(n, r, n.channelName) : function(e, t) {
                                            var n, r = e.asin,
                                                i = e.xrayMetadata,
                                                o = (0, s.__read)(pa(e, t), 2),
                                                a = o[0],
                                                u = o[1];
                                            return {
                                                items: a,
                                                contentInfos: (0, s.__assign)((n = {}, n[r] = {
                                                    titleId: r,
                                                    contentType: c.xR.Feature,
                                                    videoPreviewAssets: Ea(e),
                                                    metadata: e.catalogMetadata,
                                                    xrayMetadata: i,
                                                    pinRestrictions: e.accessControls,
                                                    transitionTimecodes: e.transitionTimeCodes
                                                }, n), u)
                                            }
                                        }(e, t)
                                    }(e, t || {
                                        durationSec: this.getContentDuration()
                                    }),
                                    r = this.continuousPlayManager.getContinuousPlayData(),
                                    i = r ? da(n, r) : n,
                                    o = this.getEpochOffset(n);
                                void 0 !== o ? this.updateTimeline(i, o) : this.updateTimeline(i)
                            } else re.warn("".concat(La("createAndUpdateTimeline"), " MediaItem or TitleMetadata do not exist"))
                        } catch (e) {
                            throw re.error("".concat(La("createAndUpdateTimeline"), " ").concat(e)), e
                        }
                    }, e.prototype.destroy = function() {
                        this.liveTimelineReloader && this.liveTimelineReloader.destroy()
                    }, e.prototype.getTimeline = function() {
                        return this.timeline
                    }, e.prototype.getCurrentTime = function() {
                        return this.currentTimeData
                    }, e.prototype.getCurrentTimelineItemStartTime = function() {
                        try {
                            return this.getCurrentTimelineItem().startTime
                        } catch (e) {
                            return null
                        }
                    }, e.prototype.getCurrentClampedPosition = function() {
                        var e = {
                                positionMs: this.currentTimeData.currentPosition,
                                timelineItemIndex: this.currentTimeData.currentTimelineItemIndex
                            },
                            t = Xo(e, this.currentTimeData, this.timelineMetadata.length),
                            n = 0,
                            r = this.timelineMetadata[t.timelineItemIndex];
                        r && (n = r.adInclusiveStartTimeMs - r.manifestStartOffset);
                        var i = n + t.positionMs;
                        if (!Yo()(e, t)) return i
                    }, e.prototype.getCurrentTimelineType = function() {
                        var e = this.timelineMetadata[this.currentTimeData.currentTimelineItemIndex];
                        return e ? e.type : c.xR.Unknown
                    }, e.prototype.getReservedSeekPosition = function() {
                        return this.reservedSeekPosition
                    }, e.prototype.getInitialPosition = function(e) {
                        if (this.reservedSeekPosition = null, 0 === e) return 0;
                        var t = this.convertAdExclusivePositionToTimelinePosition(e);
                        if (!t) return 0;
                        this.currentTimeData = (0, s.__assign)((0, s.__assign)({}, _a), {
                            currentPosition: t.positionMs,
                            currentTimelineItemIndex: t.timelineItemIndex
                        });
                        var n = Xo(t, this.currentTimeData, this.timelineMetadata.length);
                        return this.resumeTitleItemIndex = n.timelineItemIndex, this.getAdInclusivePositionWithReservation(n)
                    }, e.prototype.convertAdExclusivePositionToTimelinePosition = function(e) {
                        for (var t, n = 0; n < this.timelineMetadata.length; n++) {
                            var r = this.timelineMetadata[n];
                            if (ba(t = r) && e >= t.adExclusiveStartTimeMs && e < t.adExclusiveStartTimeMs + t.durationMs) return {
                                positionMs: e,
                                timelineItemIndex: n
                            }
                        }
                    }, e.prototype.getAdExclusiveElapsedTime = function() {
                        var e = null,
                            t = this.timelineMetadata[this.currentTimeData.currentTimelineItemIndex];
                        return t && (e = ba(t) ? this.currentTimeData.currentPosition : t.adExclusiveStartTimeMs), e
                    }, e.prototype.getAdExclusiveDuration = function() {
                        var e, t, n = 0;
                        try {
                            for (var r = (0, s.__values)(this.timelineMetadata), i = r.next(); !i.done; i = r.next()) {
                                var o = i.value;
                                ba(o) && (n += o.durationMs)
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                i && !i.done && (t = r.return) && t.call(r)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                        return n
                    }, e.prototype.getTimelineEndedEpochTime = function() {
                        return (this.epochOffsetMs || 0) + this.getAdExclusiveDuration()
                    }, e.prototype.updateTimeline = function(e, t) {
                        try {
                            if (this.epochOffsetMs = t, this.timelineMetadata = this.buildTimelineMetadata(e, t), this.timeline = e, this.config
                                .liveChannelConfig && this.liveTimelineReloader)
                                if (this.eventHandlers.onTimelineChange(this.timeline), this.timeline.items.length > 0 && null !== this.timeline
                                    .items[0].endTime) {
                                    var n = Date.now(),
                                        r = this.timeline.items[0].endTime - n;
                                    this.liveTimelineReloader.scheduleTimelineReload(r), re.info("".concat(La("updateTimeline"),
                                        " has rescheduled channel timeline call for ").concat(r, "ms from current time ").concat(n,
                                        "ms based on timeline ").concat(JSON.stringify(this.timeline)))
                                } else re.error("".concat(La("updateTimeline"), " was given bad or empty timeline for ").concat(this.config
                                    .liveChannelConfig.channelId, " ").concat(JSON.stringify(this.timeline)));
                            else this.timeline = this.maybeCreateTimelineWithEpochOffset(this.timeline, this.epochOffsetMs), this.eventHandlers
                                .onTimelineChange(this.timeline);
                            void 0 === t && (this.vodPlayableRanges = this.buildVodPlayableRanges(this.timeline))
                        } catch (e) {
                            re.error("".concat(La("updateTimeline"), " ").concat(e))
                        }
                    }, e.prototype.updateLiveStreamingPlayableRange = function(e) {
                        var t, n = this.currentTimeData.currentTimelineItemIndex;
                        this.currentTimeData.playableRanges = (0, s.__assign)((0, s.__assign)({}, this.currentTimeData.playableRanges), ((
                            t = {})[n] = e, t)), this.eventHandlers.onTimeDataChange(this.maybeCreateTimeDataWithEpochOffset(this
                            .currentTimeData, this.epochOffsetMs))
                    }, e.prototype.updateCurrentTime = function(e) {
                        this.currentTimeData = this.convertAdInclusiveElapsedTimeToTimeData(e), this
                            .maybeMarkAdAsWatchedAndSeekToReservedPosition(), this.previousIndex = this.currentTimeData
                            .currentTimelineItemIndex, this.resumeTitleItemIndex !== this.currentTimeData.currentTimelineItemIndex && (this
                                .resumeTitleItemIndex = 0), void 0 === this.epochOffsetMs ? (this.currentTimeData = this
                                .attachVodPlayableRanges(this.currentTimeData, this.vodPlayableRanges), this.eventHandlers.onTimeDataChange(this
                                    .currentTimeData)) : this.eventHandlers.onTimeDataChange(this.maybeCreateTimeDataWithEpochOffset(this
                                .currentTimeData, this.epochOffsetMs)), this.maybeEmitMainContentCallbacks()
                    }, e.prototype.seek = function(e, t) {
                        if (t && this.currentTimeData) {
                            var n = this.getCurrentTimelineItem(),
                                r = this.timeline.items[t];
                            if (void 0 === r) return void re.error("".concat(La("seek"),
                                " unable to access item in timeline, no item at index ").concat(t));
                            if (this.timeline.contentInfos[r.contentId].contentType === c.xR.Feature && n && n.groupId !== r.groupId)
                            return void this.eventHandlers.seekToItem(r.contentId)
                        }
                        var i = void 0 !== t ? t : this.currentTimeData.currentTimelineItemIndex;
                        this.resumeTitleItemIndex !== i && (this.resumeTitleItemIndex = 0);
                        var o = Xo({
                                timelineItemIndex: i,
                                positionMs: e
                            }, this.currentTimeData, this.timelineMetadata.length),
                            a = this.getAdInclusivePositionWithReservation(o);
                        this.eventHandlers.seek(a)
                    }, e.prototype.convertAdInclusiveElapsedTimeToTimeData = function(e) {
                        var t = this.timelineMetadata[this.timelineMetadata.length - 1],
                            n = this.timelineMetadata.length > 0 ? Oa(t) : 0,
                            r = this.computeTimelineItemIndex(e, n);
                        if (e < 0 ? (e = 0, ae.reportDataPoint(K.ELAPSED_TIME_BELOW_ZERO_COUNT, V.PLAYER, 1), h.y.metric(
                                "LegacyPlayer.ElapsedTimeNegative", 1, m.R.PBCX)) : this.timelineMetadata.length > 0 && e >= n && (e = n, ae
                                .reportDataPoint(K.ELAPSED_TIME_OVER_END_TIME_COUNT, V.PLAYER, 1), h.y.metric(
                                    "LegacyPlayer.ElaspedTimeOverEndTime", 1, m.R.PBCX)), -1 !== r) {
                            var i = this.timelineMetadata[r],
                                o = (ba(i) ? i.adExclusiveStartTimeMs : 0) + e - this.getAdInclusiveStartTimeOfAdBreakOrItem(r);
                            return {
                                unit: c.j1.ContentMillis,
                                currentTimelineItemIndex: r,
                                playableRanges: this.currentTimeData.playableRanges,
                                currentPosition: o
                            }
                        }
                        return _a
                    }, e.prototype.getAdInclusiveStartTimeOfAdBreakOrItem = function(e) {
                        for (var t, n = e; n >= 0; n--) {
                            var r = this.timelineMetadata[n];
                            if (!Aa(r) && !Sa(r)) break;
                            t = r.adInclusiveStartTimeMs
                        }
                        return null != t ? t : this.timelineMetadata[e].adInclusiveStartTimeMs
                    }, e.prototype.maybeEmitMainContentCallbacks = function() {
                        if ((this.hasPlayerMetadata || this.config.isLiveStreaming || 0 !== this.getContentDuration() || !1 === (0, we.A)()) &&
                            this.timeline) {
                            var e = this.getCurrentContentInfo();
                            if (!e) return;
                            !1 === this.isPlayingMainContent && e && e.contentType === c.xR.Feature ? (this.isPlayingMainContent = !0, this
                                    .eventHandlers.onMainContentEnter()) : !0 === this.isPlayingMainContent && e && e.contentType !== c.xR
                                .Feature && (this.isPlayingMainContent = !1, this.eventHandlers.onMainContentExit())
                        }
                    }, e.prototype.computeTimelineItemIndex = function(e, t) {
                        return e < 0 ? 0 : e >= t ? this.timelineMetadata.length - 1 : this.timelineMetadata.findIndex((function(t) {
                            return t.adInclusiveStartTimeMs <= e && Oa(t) > e
                        }))
                    }, e.prototype.getAdInclusivePositionWithReservation = function(e) {
                        var t, n = e.timelineItemIndex,
                            r = e.positionMs,
                            i = this.timelineMetadata[n],
                            o = this.findUnskippablePrecedingAdBreak(n);
                        return o && !this.isAdFreeArea(this.timeline.items[n], r) ? (i !== o && (this.reservedSeekPosition = {
                            positionMs: r,
                            timelineItemIndex: n
                        }), t = o.adInclusiveStartTimeMs) : t = Na(this.timeline.items, this.timelineMetadata, {
                            positionMs: r,
                            timelineItemIndex: n
                        }), t
                    }, e.prototype.getCurrentTimelineItem = function() {
                        return this.timeline.items[this.currentTimeData.currentTimelineItemIndex]
                    }, e.prototype.getCurrentContentInfo = function() {
                        var e = this.getCurrentTimelineItem();
                        if (e) return this.timeline.contentInfos[e.contentId]
                    }, e
                }(),
                Da = ne("UpdateStreamHandler"),
                wa = function() {
                    function e(e, t, n, r) {
                        this.isLiveStreaming = e, this.titleId = t, this.getCurrentTimeMs = n, this.updateStream = r, this.intervalSeconds = 30,
                            this.isStopped = !1, this.isPlayingMainContent = !1, this.hasStarted = !1, this.userWatchSessionId = (0, Di.Y)()
                    }
                    return e.prototype.update = function(e, t) {
                        var n = this;
                        if (this.isStopped) return Promise.resolve();
                        if (e === c.YP.STOP) {
                            if (this.stop(), !this.hasStarted) return Promise.resolve()
                        } else if (!this.isPlayingMainContent) return Promise.resolve();
                        return this.updateStreamRequest(e, t).then((function(e) {
                            n.intervalSeconds = e
                        })).catch((function(e) {
                            return re.error("".concat(Da("update"), " Call to UpdateStream API failed with ").concat(e))
                        })).then((function() {
                            e !== c.YP.PAUSE && e !== c.YP.PLAY || n.scheduleUpdateStream(e)
                        }))
                    }, e.prototype.onMainContentEnter = function() {
                        this.isPlayingMainContent = !0, this.hasStarted || (this.hasStarted = !0, this.update(c.YP.START));
                        var e = this.getCurrentTimeMs(),
                            t = e ? e + 1e3 : void 0;
                        this.update(c.YP.PLAY, t)
                    }, e.prototype.onMainContentExit = function() {
                        this.isPlayingMainContent = !1
                    }, e.prototype.updateStreamRequest = function(e, t) {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            var n, r, i;
                            return (0, s.__generator)(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (void 0 !== t) n = this.getTimeCode(t);
                                        else {
                                            if (null === (r = this.getCurrentTimeMs())) return [2, 30];
                                            n = this.getTimeCode(r)
                                        }
                                        return this.isLiveStreaming ? [4, this.updateStream(e, this.titleId, {
                                            epochUtc: n
                                        }, this.userWatchSessionId)] : [3, 2];
                                    case 1:
                                        return i = o.sent(), [3, 4];
                                    case 2:
                                        return [4, this.updateStream(e, this.titleId, {
                                            timeCode: n
                                        }, this.userWatchSessionId)];
                                    case 3:
                                        i = o.sent(), o.label = 4;
                                    case 4:
                                        return [2, i.message.body.statusCallbackIntervalSeconds || 30]
                                }
                            }))
                        }))
                    }, e.prototype.scheduleUpdateStream = function(e) {
                        var t = this;
                        this.isStopped || (this.resetTimer(), this.recurringUpdateStream = setInterval((function() {
                            t.updateStreamRequest(e).catch((function(e) {
                                return re.error("".concat(Da("update"), " Call to UpdateStream API failed with ")
                                    .concat(e))
                            }))
                        }), 1e3 * this.intervalSeconds))
                    }, e.prototype.stop = function() {
                        this.resetTimer(), this.isStopped = !0
                    }, e.prototype.resetTimer = function() {
                        this.recurringUpdateStream && (clearInterval(this.recurringUpdateStream), this.recurringUpdateStream = void 0)
                    }, e.prototype.getTimeCode = function(e) {
                        return Math.floor(e / 1e3).toString()
                    }, e
                }(),
                ka = wa,
                Fa = ne("UpdateStreamUtils"),
                xa = ne("avlrc-player/Adapter"),
                Ua = ["Adapter"],
                Ba = "0",
                Ha = function() {
                    function e(e, t, n) {
                        var r = this;
                        this.playerConfig = e, this.authContextWrapper = t, this.applicationIdentity = n, this.hasPlayed = !1, this
                            .eventTransformer = new gr(this.setCurrentTime.bind(this), this.onMediaQualityChange.bind(this)), this.contentState = c
                            .Mi.Unloaded, this.playbackState = c.q9.Paused, this.adIdentifierProvider = new sr, this.audioVariants = [], this
                            .videoVariants = [], this.onMainContentEnter = function() {
                                r.updateStreamHandler && r.updateStreamHandler.onMainContentEnter()
                            }, this.onMainContentExit = function() {
                                r.updateStreamHandler && r.updateStreamHandler.onMainContentExit()
                            }, this.recoverableError = void 0, this.recoverableErrors = [se.LIVE_STREAMING_FREEZE, se.CONNECTION_FAILED, se
                                .MANIFEST_DOWNLOAD_FAILED, se.RECOVERABLE_RENDERING_FAILED
                            ], this.handleError = function(e, t) {
                                r.pseudoLive && r.pseudoLive.onError(), r.error = mr(e, t), Kn.emit(r.error)
                            }, this.onPlayerMetadata = function(e) {
                                r.pseudoLive && r.pseudoLive.onDurationUpdate(1e3 * e.durationSec), r.timelineManager.onPlayerMetadata(r.mediaItem,
                                    e);
                                var t = [];
                                r.mediaItem && r.mediaItem.vastManifestInfo && (t = r.mediaItem.vastManifestInfo.map((function(e) {
                                        return e.adSystem
                                    }))),
                                    function(e, t, n, r) {
                                        var i = e - t - n;
                                        0 === n ? ae.reportDataPoint(K.CONTENT_DURATION_MISMATCH_WITHOUT_AD, V.PLAYER, i) : ae.reportDataPoint(K
                                            .CONTENT_DURATION_MISMATCH_WITH_AD, V.PLAYER, i), Math.abs(i) > 5 && re.info(
                                            "Content duration mismatch: mismatch=".concat(i, "s playerDurationSec=").concat(e,
                                                " titleDurationSec=").concat(t, " adDurationSec=").concat(n, " adSystemNames=").concat(JSON
                                                .stringify(r)))
                                    }(e.durationSec, Math.trunc(r.getMainContentDurationFromCatalogSec()), r.getVastManifestDurationSec(), t), r
                                    .reachedMediaOutro() && ae.reportDataPoint(K.STARTED_PLAYBACK_PAST_CREDITS, V.PLAYER, 1)
                            }, this.createOnRecoverableErrorCallback = function(e) {
                                return function(t, n) {
                                    return (0, s.__awaiter)(r, void 0, void 0, (function() {
                                        var r;
                                        return (0, s.__generator)(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return i.trys.push([0, 2, , 4]), [4, e.maybeRecover(t, n)];
                                                case 1:
                                                    return i.sent(), [3, 4];
                                                case 2:
                                                    return r = i.sent(), [4, this.setError(r)];
                                                case 3:
                                                    throw i.sent(), r;
                                                case 4:
                                                    return [2]
                                            }
                                        }))
                                    }))
                                }
                            }, this.failoverToNextManifest = function() {
                                return (0, s.__awaiter)(r, void 0, void 0, (function() {
                                    return (0, s.__generator)(this, (function(e) {
                                        switch (e.label) {
                                            case 0:
                                                if (!this.failoverService) throw new Error("FailoverService is undefined");
                                                return [4, this.failoverService.performFailover(pr.DEFAULT)];
                                            case 1:
                                                return e.sent() ? (re.info("".concat(xa("failoverToNextManifest"),
                                                    " switched manifest, reloading"), [this.contentConfig
                                                    .videoMaterialType
                                                ]), [4, this.reload(Gn.ReloadManifestUrl)]) : [2];
                                            case 2:
                                                return e.sent(), [2]
                                        }
                                    }))
                                }))
                            }, this.getContentState = this.getContentState.bind(this), this.getPlaybackState = this.getPlaybackState.bind(this),
                            this.getTimeline = this.getTimeline.bind(this), this.getCurrentTime = this.getCurrentTime.bind(this), this
                            .setCurrentTime = this.setCurrentTime.bind(this), this.getError = this.getError.bind(this), this.getContentError = this
                            .getContentError.bind(this), this.load = this.load.bind(this), this.pause = this.pause.bind(this), this.play = this.play
                            .bind(this), this.stop = this.stop.bind(this), this.start = this.start.bind(this), this.reload = this.reload.bind(this),
                            this.destroy = this.destroy.bind(this), this.seek = this.seek.bind(this), this.handleSeekToItem = this.handleSeekToItem
                            .bind(this), this.setContentState = this.setContentState.bind(this), this.setPlaybackState = this.setPlaybackState.bind(
                                this), this.setError = this.setError.bind(this), this.setContentError = this.setContentError.bind(this), this
                            .onPlaybackReachedEnd = this.onPlaybackReachedEnd.bind(this), this.handleSeek = this.handleSeek.bind(this), this
                            .getCurrentTimelineType = this.getCurrentTimelineType.bind(this), this.getLiveHeadPosition = this.getLiveHeadPosition
                            .bind(this), this.onAudioStreamMatchersChange = this.onAudioStreamMatchersChange.bind(this), this
                            .onTimedTextStreamMatchersChange = this.onTimedTextStreamMatchersChange.bind(this), this.continuousPlayManager = new ur(
                                this.playerConfig.fetchContinuousPlayData), this.timelineManager = new Ma({
                                onTimelineChange: Zn.emit,
                                onTimeDataChange: qn.emit,
                                seek: this.handleSeek,
                                seekToItem: this.handleSeekToItem,
                                onMainContentEnter: this.onMainContentEnter,
                                onMainContentExit: this.onMainContentExit
                            }, t, e.localizationConfig.marketplaceId, e.deviceProxyBaseUrl, this.continuousPlayManager, (function() {
                                return r.pseudoLive ? r.pseudoLive.getEpochOffset() : void 0
                            }), this.getTotalDurationFromCatalogAndVast.bind(this)), this.error = null, this.contentError = null, this
                            .audioTrackIdProvider = new Ko(e)
                    }
                    return e.emitAudioTrackEvents = function(e, t) {
                        Yn.emit({
                            urlSetId: t,
                            trackId: e,
                            language: Wa(e) || ue
                        }), zn.emit({
                            streamType: c.Mo.Audio,
                            streamId: e,
                            activeVariantId: e
                        })
                    }, e.emitAdManifestInfo = function(e) {
                        jn.emit(e.map((function(e) {
                            return {
                                adInstanceId: e.adInstanceId,
                                customClickUrls: e.customClickUrls
                            }
                        })))
                    }, Object.defineProperty(e.prototype, "mediaItem", {
                        get: function() {
                            if (this.playerOptions) return this.playerOptions.model.mediaItem
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "currentUrlSet", {
                        get: function() {
                            if (this.mediaItem) return this.mediaItem.playbackUrlSet
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "currentUrlSetId", {
                        get: function() {
                            if (this.currentUrlSet) return this.currentUrlSet.urlSetId
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.getContentState = function() {
                        return this.contentState
                    }, e.prototype.getPlaybackState = function() {
                        return this.playbackState
                    }, e.prototype.getTimeline = function() {
                        return this.timelineManager.getTimeline()
                    }, e.prototype.getCurrentTime = function() {
                        return this.timelineManager.getCurrentTime()
                    }, e.prototype.setCurrentTime = function(e) {
                        return (0, s.__awaiter)(this, void 0, void 0, (function() {
                            var t;
                            return (0, s.__generator)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (!this.pseudoLive) return [3, 4];
                                        n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, this.pseudoLive.onTimeUpdate(e)];
                                    case 2:
                                        return n.sent(), [3, 4];
                                    case 3:
                                        return t = n.sent(), re.warn(xa("setCurrentTime") +
                                            "pseudoLive onTimeUpdate rejected promise: " + t.message), [3, 4];
                                    case 4:
                                        return this.timelineManager.updateCurrentTime(e), [2]
                                }
                            }))
                        }))
                    }, e.prototype.getError = function() {
                        return this.error
                    }, e.prototype.getContentError = function() {
                        return this.contentError
                    }, e.prototype.getCurrentTimelineType = function() {
                        return this.timelineManager.getCurrentTimelineType()
                    }, e.prototype.load = function(e) {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            var t, n, r, i, o, a, u, p;
                            return (0, s.__generator)(this, (function(f) {
                                switch (f.label) {
                                    case 0:
                                        this.setContentState(c.Mi.Waiting), this.recoverableErrorsHandler = this
                                            .createRecoverableErrorsHandler(), this.contentConfig = e, this
                                            .hasPlayed = !1, this.timelineManager.init({
                                                liveChannelConfig: e.streamingType === v.S.LiveChannel ? {
                                                    channelId: e.titleId,
                                                    xrayConfig: this.playerConfig.xray,
                                                    getCurrentUxLocale: this.playerConfig.localizationConfig
                                                        .getCurrentUxLocale
                                                } : void 0,
                                                isLiveStreaming: e.videoMaterialType === y.g.LiveStreaming
                                            }), f.label = 1;
                                    case 1:
                                        return f.trys.push([1, 3, , 4]), [4, xo(this.playerConfig, this.contentConfig,
                                            this.authContextWrapper, this.audioTrackIdProvider
                                        .getAudioTrackId(), this.applicationIdentity)];
                                    case 2:
                                        return n = s.__read.apply(void 0, [f.sent(), 2]), r = n[0], i = n[1], t = i,
                                            this.playerOptions = r, [3, 4];
                                    case 3:
                                        throw o = f.sent(), l.b.getInstance().isFeatureEnabled(d.L
                                                .ENABLE_QOS_PLAYBACK_OPEN_EXIT_REPORTING) || Qn.emit(), this
                                            .setContentState(c.Mi.Error), Me.emit({
                                                errorType: se.GENERIC,
                                                errorMessage: o.message,
                                                errorDescription: o.message
                                            }), o;
                                    case 4:
                                        return f.trys.push([4, 11, , 12]), a = 0, this.failoverService = new Rr(t), this
                                            .contentConfig.streamingType !== v.S.LiveEvent ? [3, 6] : [4, this
                                                .failoverService.performInitialFailover(this.playerOptions.model
                                                    .mediaItem)
                                            ];
                                    case 5:
                                        f.sent(), f.label = 6;
                                    case 6:
                                        return this.contentConfig.videoMaterialType !== y.g.LiveStreaming ? [3, 8] : (
                                            u = this, [4, Mi.createPseudoLive(this.playerOptions.model.mediaItem, t
                                                .defaultPlaybackUrl, this.failoverService, this
                                                .getPseudoLiveCallbacks(), Math.random, this.playerConfig
                                                .localizedStringMap.getSubtitleDefaultLanguage, this
                                                .playerConfig.fetchLiveResources, this.playerConfig.deviceConfig
                                                .liveHeadDelaySec, e.streamingType)]);
                                    case 7:
                                        return u.pseudoLive = f.sent(), a = this.pseudoLive.getEpochOffset() || 0, [3,
                                            9];
                                    case 8:
                                        this.pseudoLive = void 0, f.label = 9;
                                    case 9:
                                        return this.initializeUpdateStreamHandler(e), [4, this.initializePlayer(this
                                            .playerOptions, this.recoverableErrorsHandler)];
                                    case 10:
                                        return f.sent(), l.b.getInstance().isFeatureEnabled(d.L
                                                .ENABLE_QOS_PLAYBACK_OPEN_EXIT_REPORTING) || Qn.emit(), this
                                            .subscribeEventAdapters(), this.initializeContent(), this.timelineManager
                                            .onLoadContent(this.mediaItem), this.timelineManager.updateCurrentTime(this
                                                .getPlaybackStartTime() || 0), this.playbackProgressInterpolator = _(a),
                                            this.continuousPlayManager.load(this.contentConfig, this.timelineManager), [
                                                3, 12
                                            ];
                                    case 11:
                                        return p = f.sent(), this.setContentError(p), [3, 12];
                                    case 12:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.start = function(e, t) {
                        return void 0 === t && (t = !0), (0, s.__awaiter)(this, void 0, Promise, (function() {
                            return (0, s.__generator)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.playerController ? [4, this.stop()] : [3, 2];
                                    case 1:
                                        n.sent(), this.destroy(), n.label = 2;
                                    case 2:
                                        return [4, this.load(e)];
                                    case 3:
                                        return n.sent(), t ? [4, this.play()] : [3, 5];
                                    case 4:
                                        n.sent(), n.label = 5;
                                    case 5:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.pause = function() {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            return (0, s.__generator)(this, (function(e) {
                                if (this.playerController) {
                                    if (this.playbackState === c.q9.Paused) return [2];
                                    this.playerController.pause(), this.reportUpdateStreamEvent(c.YP.PAUSE)
                                } else re.warn("".concat(xa("pause"), " player is undefined"));
                                return [2]
                            }))
                        }))
                    }, e.prototype.play = function() {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            var e, t;
                            return (0, s.__generator)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.playerController ? this.playbackState === c.q9.Playing ? [2] : this
                                            .hasPlayed ? (void 0 !== (e = this.timelineManager
                                                    .getCurrentClampedPosition()) && this.playerController.seek(e), this
                                                .playerController.playAfterPause(), [3, 3]) : [3, 1] : [3, 4];
                                    case 1:
                                        return void 0 === (t = this.getPlaybackStartTime()) ? (this.setContentError(
                                            new Error("Undefined playback start time.")), [2]) : [4, this
                                            .playerController.playMedia({
                                                playbackStartTime: t
                                            })
                                        ];
                                    case 2:
                                        n.sent(), this.hasPlayed = !0, n.label = 3;
                                    case 3:
                                        return this.reportUpdateStreamEvent(c.YP.PLAY), [3, 5];
                                    case 4:
                                        re.warn("".concat(xa("play"), " player is undefined")), n.label = 5;
                                    case 5:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.stop = function() {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            return (0, s.__generator)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.playbackProgressInterpolator && this.playbackProgressInterpolator
                                            .stop(), this.playerController ? (this.reachedMediaOutro() ? (this
                                                    .reportUpdateStreamEvent(c.YP.STOP, this
                                                        .getMediaDurationOrEndTimeForEndEvent()), ae.reportDataPoint(K
                                                        .UPDATE_STREAM_STOP_WITH_FULL_DURATION_REPORTED, V.PLAYER, 1)) :
                                                this.reportUpdateStreamEvent(c.YP.STOP), this.auditPingReporter && this
                                                .auditPingReporter.reportEnd(), [4, this.playerController.stop()]) : [3,
                                                2
                                            ];
                                    case 1:
                                        return e.sent(), re.info("".concat(xa("stop"), " Player stop completed")), [3,
                                            3];
                                    case 2:
                                        re.warn("".concat(xa("stop"), " playerController is undefined")), e.label = 3;
                                    case 3:
                                        return this.updateStreamHandler = void 0, [2]
                                }
                            }))
                        }))
                    }, e.prototype.destroy = function() {
                        var e;
                        null === (e = this.failoverService) || void 0 === e || e.destroy(), this.failoverService = void 0, this.setContentState(
                                c.Mi.Unloaded), this.vodAdsTracker && (this.vodAdsTracker.clean(), this.vodAdsTracker = void 0), this
                            .playbackContentTracker && (this.playbackContentTracker.clean(), this.playbackContentTracker = void 0), this
                            .pseudoLive && (this.pseudoLive.destroy(), this.pseudoLive = void 0), this.continuousPlayManager.destroy(), this
                            .eventTransformer.unsubscribeEventAdapters(), this.timelineManager.destroy(), this.error = null, this
                            .timedTextStreamProvider && this.timedTextStreamProvider.destroy()
                    }, e.prototype.seek = function(e, t) {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            return (0, s.__generator)(this, (function(n) {
                                return this.timelineManager.seek(e, t), [2]
                            }))
                        }))
                    }, e.prototype.seekToWallClockTime = function(e) {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            return (0, s.__generator)(this, (function(t) {
                                return this.timelineManager.seek(e), [2]
                            }))
                        }))
                    }, e.prototype.reload = function(t) {
                        return void 0 === t && (t = Gn.ReloadManifestUrl), (0, s.__awaiter)(this, void 0, Promise, (function() {
                            var n, r, i, o;
                            return (0, s.__generator)(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        re.info("".concat(xa("reload"), " performing ").concat(t, " reload")), this
                                            .setContentState(c.Mi.Waiting), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 11, , 13]), this.playerController ? [4, this.stop()] : [
                                            3, 3
                                        ];
                                    case 2:
                                        a.sent(), a.label = 3;
                                    case 3:
                                        switch ((n = this.timelineManager.getAdExclusiveElapsedTime()) && (this
                                                .contentConfig.position = n), this.initializeUpdateStreamHandler(this
                                                .contentConfig), r = 0, t) {
                                            case Gn.ReloadPlayerOptions:
                                                return [3, 4];
                                            case Gn.ReloadManifestUrl:
                                                return [3, 7]
                                        }
                                        return [3, 8];
                                    case 4:
                                        return [4, this.reloadPlayerOptions()];
                                    case 5:
                                        return i = a.sent(), [4, this.reloadPseudoLive(i.defaultPlaybackUrl)];
                                    case 6:
                                        return a.sent(), [3, 8];
                                    case 7:
                                        if (!this.mediaItem) throw new Error("MediaItem is undefined");
                                        return this.failoverService && (this.mediaItem.playbackUrlSet = this
                                            .failoverService.getCurrentUrlSet()), this.pseudoLive && (r = this
                                            .pseudoLive.getEpochOffset() || 0), [3, 8];
                                    case 8:
                                        return e.emitAudioTrackEvents(this.getAudioTrackId(), this.currentUrlSetId ||
                                            ""), this.timedTextStreamProvider.setCurrentAudioTrackLanguage(Wa(this
                                            .getAudioTrackId())), [4, this.initializePlayer(this.playerOptions, this
                                            .recoverableErrorsHandler)];
                                    case 9:
                                        return a.sent(), this.subscribeEventAdapters(), this.timelineManager
                                            .onLoadContent(this.mediaItem), this.updateVodAdsTracker(), this
                                            .updatePlaybackContentTracker(), this.playbackProgressInterpolator = _(r),
                                            this.hasPlayed = !1, [4, this.play()];
                                    case 10:
                                        return a.sent(), [3, 13];
                                    case 11:
                                        return o = a.sent(), re.error("".concat(xa("reload"),
                                            " error while reloading: ").concat((s = o) ? s instanceof Error ||
                                            "string" == typeof s ? "".concat(s) : JSON.stringify(s) : "")), [4, this
                                            .setError(o)
                                        ];
                                    case 12:
                                        return a.sent(), [3, 13];
                                    case 13:
                                        return [2]
                                }
                                var s
                            }))
                        }))
                    }, e.prototype.onAudioStreamMatchersChange = function(e) {
                        return (0, s.__awaiter)(this, void 0, void 0, (function() {
                            return (0, s.__generator)(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.audioTrackIdProvider.setStreamMatchers(e), [4, this.reload(Gn
                                            .ReloadPlayerOptions)];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            }))
                        }))
                    }, e.prototype.onTimedTextStreamMatchersChange = function(e) {
                        this.timedTextStreamProvider.setStreamMatchers(e)
                    }, e.prototype.attemptRecovery = function(e, t) {
                        return (0, s.__awaiter)(this, void 0, void 0, (function() {
                            var n;
                            return (0, s.__generator)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        switch (this.recoverableError = {
                                                name: e.name,
                                                message: e.message,
                                                stack: e.stack,
                                                type: t
                                            }, t) {
                                            case se.LIVE_STREAMING_FREEZE:
                                                return [3, 1];
                                            case se.CONNECTION_FAILED:
                                            case se.MANIFEST_DOWNLOAD_FAILED:
                                            case se.RECOVERABLE_RENDERING_FAILED:
                                                return [3, 3]
                                        }
                                        return [3, 7];
                                    case 1:
                                        return re.info("".concat(xa("setError"), " Attempting recovery from ").concat(t,
                                            ", reloading player")), [4, this.reload()];
                                    case 2:
                                        return r.sent(), [3, 7];
                                    case 3:
                                        re.info("".concat(xa("setError"), " Attempting recovery from ").concat(t,
                                            ", failing over to next manifest")), r.label = 4;
                                    case 4:
                                        return r.trys.push([4, 6, , 7]), [4, this.failoverToNextManifest()];
                                    case 5:
                                        return r.sent(), [3, 7];
                                    case 6:
                                        return n = r.sent(), Me.emit({
                                            errorType: t,
                                            errorMessage: e.message,
                                            errorDescription: e.message,
                                            isFatal: !0
                                        }), this.handleError(n, t), [3, 7];
                                    case 7:
                                        return this.recoverableError = void 0, [2]
                                }
                            }))
                        }))
                    }, e.prototype.setError = function(e, t) {
                        return (0, s.__awaiter)(this, void 0, void 0, (function() {
                            return (0, s.__generator)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.recoverableError ? (re.error("".concat(xa("setError"),
                                                " Error while attempting recovery: ").concat(e)), Me.emit({
                                                errorType: this.recoverableError.type,
                                                errorMessage: this.recoverableError.message,
                                                errorDescription: this.recoverableError.message,
                                                isFatal: !0
                                            }), this.handleError(e, t), this.recoverableError = void 0, [2]) :
                                            void 0 !== t && this.recoverableErrors.indexOf(t) > -1 ? [4, this
                                                .attemptRecovery(e, t)
                                            ] : [3, 2];
                                    case 1:
                                        return n.sent(), [2];
                                    case 2:
                                        return e ? this.handleError(e, t) : this.error = null, [2]
                                }
                            }))
                        }))
                    }, e.prototype.setContentError = function(e, t) {
                        e ? (this.pseudoLive && this.pseudoLive.onError(), this.contentError = mr(e, t), this.setContentState(c.Mi.Error), Xn
                            .emit(this.contentError)) : this.contentError = null
                    }, e.prototype.getAudioTrackId = function() {
                        var e;
                        return this.currentUrlSet && this.currentUrlSet.audioTrackId ? e = this.currentUrlSet.audioTrackId : this.mediaItem &&
                            this.mediaItem.audioTrack && (e = this.mediaItem.audioTrack.audioTrackId), e || ue
                    }, e.prototype.reloadPlayerOptions = function() {
                        var e;
                        return (0, s.__awaiter)(this, void 0, void 0, (function() {
                            var t, n, r;
                            return (0, s.__generator)(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, xo(this.playerConfig, this.contentConfig, this.authContextWrapper,
                                            this.audioTrackIdProvider.getAudioTrackId(), this
                                            .applicationIdentity)];
                                    case 1:
                                        return t = s.__read.apply(void 0, [i.sent(), 2]), n = t[0], r = t[1], this
                                            .playerOptions = n, null === (e = this.failoverService) || void 0 === e || e
                                            .destroy(), this.failoverService = new Rr(r), [2, r]
                                }
                            }))
                        }))
                    }, e.prototype.reloadPseudoLive = function(e) {
                        return (0, s.__awaiter)(this, void 0, void 0, (function() {
                            var t;
                            return (0, s.__generator)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.pseudoLive && this.failoverService ? (this.pseudoLive.destroy(), t =
                                            this, [4, Mi.createPseudoLive(this.playerOptions.model.mediaItem, e,
                                                this.failoverService, this.getPseudoLiveCallbacks(), Math
                                                .random, this.playerConfig.localizedStringMap
                                                .getSubtitleDefaultLanguage, this.playerConfig
                                                .fetchLiveResources, this.playerConfig.deviceConfig
                                                .liveHeadDelaySec, this.contentConfig.streamingType)]) : [3, 2];
                                    case 1:
                                        t.pseudoLive = n.sent(), n.label = 2;
                                    case 2:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.getPlaybackStartTime = function() {
                        return this.pseudoLive ? this.pseudoLive.getInitialPosition() : this.timelineManager.getInitialPosition(this
                            .contentConfig.position || 0)
                    }, e.prototype.getTotalDurationFromCatalogAndVast = function() {
                        return this.getMainContentDurationFromCatalogSec() + this.getVastManifestDurationSec()
                    }, e.prototype.getMainContentDurationFromCatalogSec = function() {
                        var e, t, n;
                        return (null === (n = null === (t = null === (e = this.mediaItem) || void 0 === e ? void 0 : e.catalogMetadata) ||
                            void 0 === t ? void 0 : t.catalog) || void 0 === n ? void 0 : n.runtimeSeconds) || 0
                    }, e.prototype.getVastManifestDurationSec = function() {
                        var e;
                        return (null === (e = this.mediaItem) || void 0 === e ? void 0 : e.vastManifestInfo) ? Math.trunc(this.mediaItem
                            .vastManifestInfo.reduce((function(e, t) {
                                return e + t.durationMs
                            }), 0) / 1e3) : 0
                    }, e.prototype.handleSeek = function(e) {
                        this.playerController ? this.hasPlayed && this.contentState === c.Mi.Ready && (this.playerController.seek(e), this
                            .playbackProgressInterpolator.update(e)) : re.warn("".concat(xa("seek"), " player is undefined"))
                    }, e.prototype.handleSeekToItem = function(e) {
                        this.start({
                            titleId: e,
                            videoMaterialType: this.contentConfig.videoMaterialType,
                            advertisingId: this.contentConfig.advertisingId,
                            optOutAdTracking: this.contentConfig.optOutAdTracking
                        }, !1)
                    }, e.prototype.setContentState = function(e) {
                        try {
                            this.contentState !== e && (this.contentState = e, Jn.emit(e))
                        } catch (e) {
                            re.error("".concat(xa("setContentState"), " Unexpected exception: ").concat(e.message), Ua, void 0, e.message, e
                                .stack)
                        }
                    }, e.prototype.setPlaybackState = function(e) {
                        try {
                            if (this.playbackState !== e) {
                                this.playbackProgressInterpolator && (e === c.q9.Playing ? (this.playbackProgressInterpolator.start(), this
                                        .continuousPlayManager.onPlaybackStarted()) : this.playbackProgressInterpolator.stop()), this
                                    .playbackState = e;
                                var t = !0;
                                this.pseudoLive && (t = this.pseudoLive.onPlaybackState(e)), t && $n.emit(e)
                            }
                        } catch (e) {
                            re.error("".concat(xa("setPlaybackState"), " Unexpected exception: ").concat(e.message), Ua, void 0, e.message, e
                                .stack)
                        }
                    }, e.prototype.onPlaybackReachedEnd = function() {
                        if (this.pseudoLive) return this.pseudoLive.onPlaybackReachedEnd();
                        if (this.reportUpdateStreamEvent(c.YP.STOP), this.auditPingReporter && this.auditPingReporter.reportEnd(), this
                            .contentConfig.disableAutoplay) er.emit(r);
                        else {
                            var e = function(e, t) {
                                var n = t.currentTimelineItemIndex,
                                    r = e.items[n],
                                    i = r ? r.groupId : void 0,
                                    o = ra()(e.items, (function(t, n) {
                                        var r = e.items[n],
                                            o = r ? r.groupId : void 0,
                                            a = r ? r.contentId : void 0,
                                            s = a ? e.contentInfos[a] : void 0;
                                        return void 0 !== s && void 0 !== o && void 0 !== i && o !== i && s.contentType === c.xR
                                            .Feature
                                    }), n + 1),
                                    a = e.items[o];
                                if (a) return e.contentInfos[a.contentId]
                            }(this.timelineManager.getTimeline(), this.timelineManager.getCurrentTime());
                            e && e.transitionTimecodes && e.transitionTimecodes.autoplaySettings && e.transitionTimecodes.autoplaySettings
                                .autoplayEnabled ? this.start({
                                    titleId: e.titleId,
                                    videoMaterialType: this.contentConfig.videoMaterialType,
                                    advertisingId: this.contentConfig.advertisingId,
                                    optOutAdTracking: this.contentConfig.optOutAdTracking
                                }, !1) : er.emit(r)
                        }
                    }, e.prototype.reportUpdateStreamEvent = function(e, t) {
                        this.updateStreamHandler && (function(e, t, n) {
                                if (t === c.YP.STOP) {
                                    var r = e.getAdExclusiveDuration(),
                                        i = n || e.getAdExclusiveElapsedTime();
                                    null === i ? re.error("".concat(Fa("logUnexpectedTimeCode"), " the timeCode is null")) : i > r && re
                                        .info("".concat(Fa("logUnexpectedTimeCode"), " timeCode=").concat(i, " titleRuntimeInMs=").concat(r,
                                            " timelineItems=").concat(JSON.stringify(e.getTimeline().items), " timedata=").concat(JSON
                                            .stringify(e.getCurrentTime())))
                                }
                            }(this.timelineManager, e, t), void 0 !== t ? this.updateStreamHandler.update(e, t) : this.updateStreamHandler
                            .update(e))
                    }, e.prototype.reachedMediaOutro = function() {
                        var e = this.timelineManager.getAdExclusiveElapsedTime();
                        return !(!this.mediaItem || !this.mediaItem.transitionTimeCodes || null === e) && this.mediaItem.transitionTimeCodes
                            .outroCreditsStart <= e
                    }, e.prototype.getMediaDurationOrEndTimeForEndEvent = function() {
                        return this.pseudoLive ? this.timelineManager.getTimelineEndedEpochTime() : this.timelineManager
                        .getAdExclusiveDuration()
                    }, e.prototype.initializePlayer = function(e, t) {
                        return (0, s.__awaiter)(this, void 0, void 0, (function() {
                            return (0, s.__generator)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.playerController = new gn("player 1", e, this.authContextWrapper,
                                            this.playerConfig.deviceConfig, this.playerConfig.localizationConfig,
                                            this.playerConfig.deviceProxyBaseUrl, {
                                                onContentState: this.setContentState,
                                                onPlaybackState: this.setPlaybackState,
                                                onError: this.setError,
                                                onContentError: this.setContentError,
                                                onPlayerMetadata: this.onPlayerMetadata,
                                                onPlaybackComplete: this.onPlaybackReachedEnd,
                                                onRecoverableError: this.createOnRecoverableErrorCallback(t),
                                                getLiveHeadPosition: this.getLiveHeadPosition
                                            }, this.playerConfig.getBandwidthEstimate, this.playerConfig
                                            .setBandwidthEstimate), [4, this.playerController.initPlayer()];
                                    case 1:
                                        return n.sent(), [2]
                                }
                            }))
                        }))
                    }, e.prototype.createRecoverableErrorsHandler = function() {
                        var e = this;
                        return new Ar((function() {
                            return e.reload(Gn.ReloadPlayerOptions)
                        }), 3, 3e5)
                    }, e.prototype.initializeVodAdsTracker = function(e, t) {
                        0 !== e.getAdManifestInfo().length && (this.vodAdsTracker = new Rn(e, this.currentUrlSetId), -1 !== e
                        .getAdManifestInfo().findIndex((function(e) {
                            return e.adSystem === c.Me.Draper
                        })) && (ae.reportDataPoint(K.VAST_MANIFEST_WITH_PRIME_PROMO, V.PLAYER, 1), h.y.metric(
                            "LegacyPlayer.VastManifest.WithPrimePromo", 1, m.R.PBCX), t && t > 0 && (ae.reportDataPoint(K
                            .VAST_MANIFEST_WITH_PRIME_PROMO_BYPASSED, V.PLAYER, 1), h.y.metric(
                            "LegacyPlayer.VastManifest.WithPrimePromoBypassed", 1, m.R.PBCX))))
                    }, e.prototype.initializePlaybackContentTracker = function(e) {
                        var t;
                        this.playbackContentTracker = new On(e, this.contentConfig.titleId, null === (t = this.pseudoLive) || void 0 === t ?
                            void 0 : t.getEpochOffset())
                    }, e.prototype.initializeContent = function() {
                        var t = this.mediaItem,
                            n = this.contentConfig;
                        if (t && n) {
                            var r, i = t.vastManifestInfo;
                            if (i) {
                                e.emitAdManifestInfo(i);
                                var o = new Fn(i);
                                this.contentConfig.videoMaterialType !== y.g.LiveStreaming && this.initializeVodAdsTracker(o, n.position), this
                                    .initializePlaybackContentTracker(o)
                            }
                            this.initializeAuditPingReporter(t), this.pseudoLive ? this.timedTextStreamProvider = this.pseudoLive
                                .timedTextStreamProvider : this.timedTextStreamProvider = new Qo(t.subtitle, Wa(this.getAudioTrackId())), r =
                                this.timedTextStreamProvider.getTimedTextStreams();
                            var a = t.subtitle.subtitleUrlInfo && t.subtitle.subtitleUrlInfo.length > 0 ? t.subtitle.subtitleUrlInfo[0]
                                .timedTextTrackId : null;
                            tr.emit({
                                type: c.Mo.TimedText,
                                activeId: a,
                                streams: r
                            }), this.emitAudioStreams()
                        }
                    }, e.prototype.subscribeEventAdapters = function() {
                        this.eventTransformer.unsubscribeEventAdapters(), this.eventTransformer.subscribeEventAdapters()
                    }, e.prototype.initializeAuditPingReporter = function(e) {
                        if (e.auditPings && e.auditPings.length > 0) {
                            var t = this.adIdentifierProvider.generate();
                            this.auditPingReporter = new Vn(e.auditPings, t), this.auditPingReporter.reportStart()
                        }
                    }, e.prototype.initializeUpdateStreamHandler = function(e) {
                        switch (e.videoMaterialType) {
                            case y.g.Feature:
                                return void(this.updateStreamHandler = new ka(!1, this.contentConfig.titleId, this.timelineManager
                                    .getAdExclusiveElapsedTime, this.playerConfig.updateStream));
                            case y.g.LiveStreaming:
                                return void(this.updateStreamHandler = new ka(!0, this.contentConfig.titleId, this.timelineManager
                                    .getAdExclusiveElapsedEpochTime, this.playerConfig.updateStream))
                        }
                    }, e.prototype.getPseudoLiveCallbacks = function() {
                        return {
                            reload: this.reload,
                            updatePlayableRange: this.timelineManager.updateLiveStreamingPlayableRange,
                            getCurrentTimelineItemStartTime: this.timelineManager.getCurrentTimelineItemStartTime,
                            stop: this.stop,
                            destroy: this.destroy,
                            setError: this.setError
                        }
                    }, e.prototype.emitAudioStreams = function() {
                        var t = this;
                        if (this.mediaItem) {
                            var n = this.getAudioTrackId(),
                                r = this.mediaItem.audioTracks && this.mediaItem.audioTracks.map((function(e) {
                                    return n = e, r = t.audioVariants, {
                                        id: n.audioTrackId || "",
                                        activeVariantId: null,
                                        variants: r,
                                        language: n.languageCode,
                                        label: n.displayName,
                                        type: Zo[n.audioSubtype] || null
                                    };
                                    var n, r
                                })) || [];
                            if (this.contentConfig.videoMaterialType === y.g.LiveStreaming) {
                                var i = Object.keys(g.c5);
                                r = r.map((function(e) {
                                    var t = Wa(e.id);
                                    return -1 === i.indexOf(t) ? e : (0, s.__assign)((0, s.__assign)({}, e), {
                                        label: null,
                                        language: t
                                    })
                                }))
                            }
                            tr.emit({
                                type: c.Mo.Audio,
                                activeId: n,
                                streams: r
                            }), e.emitAudioTrackEvents(n, this.currentUrlSet && this.currentUrlSet.urlSetId || "")
                        }
                    }, e.prototype.emitVideoStreams = function() {
                        tr.emit({
                            type: c.Mo.Video,
                            activeId: null,
                            streams: [{
                                id: Ba,
                                activeVariantId: null,
                                variants: this.videoVariants
                            }]
                        }), zn.emit({
                            streamType: c.Mo.Video,
                            streamId: Ba,
                            activeVariantId: Ba
                        })
                    }, e.prototype.onMediaQualityChange = function(e) {
                        switch (e.type) {
                            case i.Video:
                                this.onVideoQualityChange(e);
                                break;
                            case i.Audio:
                                this.onAudioQualityChange(e)
                        }
                    }, e.prototype.onVideoQualityChange = function(e) {
                        this.videoVariants = [(0, s.__assign)((0, s.__assign)({}, e), {
                            frameRate: null,
                            restrictions: [],
                            id: Ba,
                            codecs: this.mediaItem && this.mediaItem.contentCodecs.videoCodec
                        })], this.emitVideoStreams()
                    }, e.prototype.onAudioQualityChange = function(e) {
                        this.audioVariants = [{
                            bitrate: e.bitrate,
                            id: this.getAudioTrackId(),
                            channelConfiguration: "UNKNOWN",
                            codecs: this.mediaItem && this.mediaItem.contentCodecs.audioCodec,
                            restrictions: []
                        }], this.emitAudioStreams()
                    }, e.prototype.getLiveHeadPosition = function() {
                        return this.pseudoLive ? this.pseudoLive.getInitialPosition() : null
                    }, e.prototype.updateVodAdsTracker = function() {
                        this.vodAdsTracker && this.vodAdsTracker.setConsumptionId(this.currentUrlSetId)
                    }, e.prototype.updatePlaybackContentTracker = function() {
                        this.playbackContentTracker && this.playbackContentTracker.updateMainContentId(this.contentConfig.titleId)
                    }, e
                }(),
                Ga = Ha,
                Wa = function(e) {
                    return e.split("_")[0]
                },
                Va = ((ha = {})[c.Mo.Audio] = {
                    type: c.Mo.Audio,
                    streams: [],
                    activeId: null
                }, ha[c.Mo.TimedText] = {
                    type: c.Mo.TimedText,
                    streams: [],
                    activeId: null
                }, ha[c.Mo.Video] = {
                    type: c.Mo.Video,
                    streams: [],
                    activeId: null
                }, ha),
                Ka = ne("LivingRoomStreamFeature"),
                Za = [zn, Ti, tr],
                qa = function(e) {
                    return Za.find((function(t) {
                        return t.name === e
                    }))
                },
                Ya = function() {
                    function e(e, t) {
                        var n = this;
                        this.onAudioStreamMatchersChange = e, this.onTimedTextStreamMatchersChange = t, this.streamEventCallbacks = [], this
                            .streamGroups = Va, Ti.subscribe((function(e) {
                                n.cachedTimedTextStreamData = e
                            })), this.on("StreamGroupChange", (function(e, t) {
                                n.streamGroups[e] && (n.streamGroups[e].streams = t)
                            }))
                    }
                    return e.prototype.setStreamMatchers = function(e, t) {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            var n;
                            return (0, s.__generator)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (!e) return re.error("".concat(Ka("setStreamMatchers"),
                                            " type does not exist, should not proceed.")), [2];
                                        if (e === c.Mo.TimedText) try {
                                            this.onTimedTextStreamMatchersChange(t)
                                        } catch (e) {
                                            re.error("".concat(Ka("setStreamMatchers"),
                                                " Error setting TimedText stream matchers - ").concat(e
                                                .toString()))
                                        }
                                        if (e !== c.Mo.Audio) return [3, 4];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.onAudioStreamMatchersChange(t)];
                                    case 2:
                                        return r.sent(), [3, 4];
                                    case 3:
                                        return n = r.sent(), re.error("".concat(Ka("setStreamMatchers"),
                                            " Error setting Audio stream matchers - ").concat(n.toString())), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.setUnsupportedCodecs = function(e, t) {
                        return Promise.resolve()
                    }, e.prototype.setMaxBitrateThreshold = function(e, t) {
                        return Promise.resolve()
                    }, e.prototype.on = function(e, t) {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            var n, r, i, o;
                            return (0, s.__generator)(this, (function(a) {
                                if (!qa(e)) return re.error("".concat(Ka("on"),
                                    " Attempt to subscribe to an unknown event: ").concat(e)), [2];
                                switch (e) {
                                    case Ti.name:
                                        n = t, this.cachedTimedTextStreamData && (r = this.cachedTimedTextStreamData,
                                            i = r.streamId, o = r.streamDataPayload, n(i, o), this
                                            .cachedTimedTextStreamData = void 0), this
                                    .subscribeStreamEventCallback({
                                            callback: t,
                                            wrapper: function(e) {
                                                n(e.streamId, e.streamDataPayload)
                                            }
                                        }, Ti);
                                        break;
                                    case tr.name:
                                        n = t, this.subscribeStreamEventCallback({
                                            callback: t,
                                            wrapper: function(e) {
                                                n(e.type, e.streams)
                                            }
                                        }, tr);
                                        break;
                                    case zn.name:
                                        n = t, this.subscribeStreamEventCallback({
                                            callback: t,
                                            wrapper: function(e) {
                                                n(e.streamType, e.streamId, e.activeVariantId)
                                            }
                                        }, zn)
                                }
                                return [2]
                            }))
                        }))
                    }, e.prototype.off = function(e, t) {
                        if (!qa(e)) return re.error("".concat(Ka("off"), " Attempt to unsubscribe from an unknown event: ").concat(e)), Promise
                            .resolve();
                        switch (e) {
                            case Ti.name:
                                this.unsubscribeStreamEventCallback(t, Ti), this.cachedTimedTextStreamData = void 0;
                                break;
                            case tr.name:
                                this.unsubscribeStreamEventCallback(t, tr);
                                break;
                            case zn.name:
                                this.unsubscribeStreamEventCallback(t, zn)
                        }
                        return Promise.resolve()
                    }, e.prototype.once = function(e, t) {
                        return Promise.reject("Method once() in StreamFeature has not been implemented.")
                    }, e.prototype.toJSON = function() {
                        return {
                            streamGroups: this.streamGroups
                        }
                    }, e.prototype.destroy = function() {
                        var e, t;
                        try {
                            for (var n = (0, s.__values)(Za), r = n.next(); !r.done; r = n.next()) r.value.unsubscribeAll()
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                r && !r.done && (t = n.return) && t.call(n)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                        this.streamEventCallbacks = []
                    }, e.prototype.subscribeStreamEventCallback = function(e, t) {
                        this.streamEventCallbacks.find((function(t) {
                            return t.callback === e.callback
                        })) || (this.streamEventCallbacks.push(e), t.subscribe(e.wrapper))
                    }, e.prototype.unsubscribeStreamEventCallback = function(e, t) {
                        var n = this.streamEventCallbacks.findIndex((function(t) {
                            return t.callback === e
                        })); - 1 !== n && (t.unsubscribe(this.streamEventCallbacks[n].wrapper), this.streamEventCallbacks.splice(n, 1))
                    }, e
                }(),
                za = ne("adReportingRequest"),
                ja = [500, 503],
                Qa = ne("LivingRoomAdReportingFeature"),
                Xa = "watchlist",
                Ja = function() {
                    function e() {
                        var e = this;
                        this.version = "0.0.1", jn.subscribe((function(t) {
                            e.partialVastManifestInfo = t
                        })), this.objectId = "LivingRoom-AdReportingFeature-".concat(Math.random())
                    }
                    return e.prototype.toggleReporting = function(e) {
                        return Promise.resolve()
                    }, e.prototype.notifyAdInteractionEvent = function(e, t, n) {
                        if (n !== Xa || e !== c.So.CustomClick) return re.error("".concat(Qa("notifyAdInteractionEvent"),
                            " invalid customClickId: ").concat(n, " or invalid event: ").concat(e)), Promise.resolve();
                        var r = this.partialVastManifestInfo.find((function(e) {
                            return e.adInstanceId === t
                        }));
                        return r && r.customClickUrls[Xa] ? function(e) {
                            (new $e.L).withMaxAttempts(4).withInitialIntervalMs(100).withExponentialFactor(2).withRandomizationFactor(60)
                                .withMaxDelayMs(5e3).onAttempt((function(t, n) {
                                    ! function(e, t) {
                                        Je.get(e).timeout(5e3).headers({
                                            "Content-Type": "application/json"
                                        }).onLoad((function(e) {
                                            ae.reportDataPoint(K.CUSTOM_CLICK_FAILURE_RATE, V.PLAYER, 0)
                                        })).onError((function(e, n) {
                                            null == n || ja.indexOf(n.getStatus()) > -1 ? t(e) : (re.error("".concat(za(
                                                    "executeRequest"), " failed with ").concat(e)), ae
                                                .reportDataPoint(K.CUSTOM_CLICK_FAILURE_RATE, V.PLAYER, 1))
                                        })).send()
                                    }(e, n)
                                })).execute()
                        }(r.customClickUrls[Xa]) : re.error("".concat(Qa("notifyAdInteractionEvent"),
                            " no matched ad or invalid customClickUrl: ").concat(r && r.customClickUrls[Xa])), Promise.resolve()
                    }, e.prototype.destroy = function() {
                        this.partialVastManifestInfo = [], jn.unsubscribeAll()
                    }, e.prototype.toJSON = function() {
                        return {
                            version: this.version,
                            objectId: this.objectId
                        }
                    }, e
                }(),
                $a = T(c.rg.PictureModeChange),
                es = T("PlayerExit"),
                ts = T("ContextualEvent"),
                ns = T("XrayAcquisitionEvent"),
                rs = function() {
                    function e() {}
                    return e.validate = function(e, t) {
                        var n, r;
                        if (null != e && null != t) {
                            var i = t;
                            try {
                                for (var o = (0, s.__values)(Object.keys(e)), a = o.next(); !a.done; a = o.next()) {
                                    var c = a.value;
                                    null != e[c] && ("object" == typeof e[c] ? this.validate(e[c], i[c]) : "string" != typeof e[c] &&
                                        "number" != typeof e[c] || null == i[c] || (e[c] = i[c].constrain(e[c])))
                                }
                            } catch (e) {
                                n = {
                                    error: e
                                }
                            } finally {
                                try {
                                    a && !a.done && (r = o.return) && r.call(o)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                        }
                    }, e
                }(),
                is = function() {
                    function e(e, t) {
                        void 0 === e && (e = Number.MIN_VALUE), void 0 === t && (t = Number.MAX_VALUE), this.minValue = e, this.maxValue = t
                    }
                    return e.prototype.constrain = function(e) {
                        return this.minValue > this.maxValue ? e : e > this.maxValue ? this.maxValue : e < this.minValue ? this.minValue : e
                    }, e
                }(),
                os = function() {
                    function e(e, t) {
                        this.maxLength = "number" == typeof t ? t : e
                    }
                    return e.prototype.constrain = function(e) {
                        return e.substring(0, this.maxLength)
                    }, e
                }(),
                as = {
                    body: {
                        asset: {
                            consumptionId: new os(20, 60)
                        },
                        request: {
                            bitrate: new is(1),
                            fragmentIndex: new is(0),
                            fragmentDuration: new is(0),
                            url: new os(1e3),
                            bytesExpected: new is(0),
                            server: {
                                hostname: new os(100),
                                ipv4: new os(7, 15),
                                ipv6: new os(11, 45)
                            },
                            fragmentResolution: {
                                width: new is(0),
                                height: new is(0)
                            }
                        },
                        response: {
                            responseCode: new is(100, 599),
                            bytesAcquired: new is(0)
                        },
                        performance: {
                            timeToFirstByte: new is(0),
                            timeToLastByte: new is(0)
                        }
                    }
                },
                ss = function() {
                    function e() {}
                    return e.createAcquisitionEvent = function(e, t, n, r, i, o, a, s, c, u, l, d, p, f) {
                        var h = {
                            bitrate: r ? Math.round(1e3 * r) : null,
                            fragment: "Video" === n || "Audio" === n,
                            fragmentIndex: i,
                            fragmentDuration: o,
                            url: a || "",
                            bytesExpected: s,
                            server: {
                                hostname: "hostname",
                                ipv4: "0.0.0.0",
                                ipv6: null
                            }
                        };
                        null !== l && null !== d && (h.fragmentResolution = {
                            width: l,
                            height: d
                        });
                        var m = {
                            _type: "Acquisition",
                            body: {
                                asset: {
                                    type: n || "Manifest",
                                    consumptionId: e || "",
                                    caching: t || !1
                                },
                                request: h,
                                response: {
                                    response: p,
                                    responseCode: f || 200,
                                    bytesAcquired: s || 0,
                                    headers: {}
                                },
                                performance: {
                                    timeToFirstByte: c || 0,
                                    timeToLastByte: u || 0
                                }
                            }
                        };
                        return rs.validate(m, as), m
                    }, e.createSimpleAcquisition = function(e, t, n, r) {
                        var i = {
                            _type: "Acquisition",
                            body: {
                                asset: e,
                                request: (0, s.__assign)({
                                    bitrate: null,
                                    fragment: !1,
                                    fragmentIndex: null
                                }, t),
                                response: n,
                                performance: r
                            }
                        };
                        return rs.validate(i, as), i
                    }, e
                }(),
                cs = function() {
                    function e(e) {
                        var t = this;
                        this.onNewFragmentDownloaded = function(e) {
                                var n, r = e.fragmentInfo,
                                    i = ss.createAcquisitionEvent(t.consumptionId, t.caching, t.formatAssetType(r.streamType), r.bitrate, r
                                        .fragmentIndex, null !== (n = r.fragmentDuration) && void 0 !== n ? n : null, r.fragmentUrl || t
                                        .manifestUrl, r.fragmentSize, r.timeToFirstByte, r.timeToLastByte, r.resolutionWidth || null, r
                                        .resolutionHeight || null, "Success", 200);
                                t.mediaEventReporter.enqueueMediaEvents([i])
                            }, this.onStreamEventFragmentDownloadFailure = function(e) {
                                var n, r = e.fragmentInfo,
                                    i = ss.createAcquisitionEvent(t.consumptionId, t.caching, t.formatAssetType(r.streamType), r.bitrate, r
                                        .fragmentIndex, null !== (n = r.fragmentDuration) && void 0 !== n ? n : null, r.fragmentUrl || t
                                        .manifestUrl, r.fragmentSize, r.timeToFirstByte, r.timeToLastByte, r.resolutionWidth || null, r
                                        .resolutionHeight || null, "UnknownError", 400);
                                t.mediaEventReporter.enqueueMediaEvents([i])
                            }, this.onStreamEventManifestDownloadSuccess = function() {
                                var e = ss.createAcquisitionEvent(t.consumptionId, t.caching, "Manifest", null, null, null, t.manifestUrl, null,
                                    null, null, null, null, "Success", 200);
                                t.mediaEventReporter.enqueueMediaEvents([e])
                            }, this.onStreamEventManifestDownloadFailure = function() {
                                var e = ss.createAcquisitionEvent(t.consumptionId, t.caching, "Manifest", null, null, null, t.manifestUrl, null,
                                    null, null, null, null, "UnknownError", 400);
                                t.mediaEventReporter.enqueueMediaEvents([e])
                            }, this.onStreamEventPlayerCreated = function(e) {
                                t.consumptionId = e.urlSetId, t.manifestUrl = e.manifestUrl
                            }, this.onTimedTextDownload = function(e) {
                                var n = ss.createAcquisitionEvent(t.consumptionId, t.caching, "TimedText", null, null, null, e.url, null, null,
                                    null, null, null, e.responseType, e.responseCode || 200);
                                t.mediaEventReporter.enqueueMediaEvents([n])
                            }, this.onDrmAcquisitionEvent = function(e) {
                                var n = ss.createAcquisitionEvent(t.consumptionId, t.caching, "DRMLicense", null, null, null, e.url, null, null,
                                    null, null, null, e.responseType, e.responseCode);
                                t.mediaEventReporter.enqueueMediaEvents([n])
                            }, this.onXrayAcquisitionEvent = function(e) {
                                var n = ss.createAcquisitionEvent(t.consumptionId, t.caching, "X-Ray", null, null, null, e.url, e.fragmentSize, e
                                    .timeToFirstByte, e.timeToLastByte, null, null, e.responseType, e.responseCode);
                                t.mediaEventReporter.enqueueMediaEvents([n])
                            }, this.clean = this.clean.bind(this), this.subscribe = this.subscribe.bind(this), this.unsubscribe = this.unsubscribe
                            .bind(this), this.mediaEventReporter = e, this.subscribe()
                    }
                    return e.prototype.clean = function() {
                        this.unsubscribe()
                    }, e.prototype.reportAcquisition = function(e, t, n, r) {
                        var i = {
                                type: e,
                                caching: this.caching || !1,
                                consumptionId: this.consumptionId || "consumptionId"
                            },
                            o = ss.createSimpleAcquisition(i, t, n, r);
                        this.mediaEventReporter.enqueueMediaEvents([o])
                    }, e.prototype.subscribe = function() {
                        $.subscribe(this.onStreamEventFragmentDownloadFailure), te.subscribe(this.onNewFragmentDownloaded), ei.subscribe(this
                            .onTimedTextDownload), z.subscribe(this.onStreamEventPlayerCreated), Q.subscribe(this
                            .onStreamEventManifestDownloadSuccess), J.subscribe(this.onStreamEventManifestDownloadFailure), Kt.subscribe(
                            this.onDrmAcquisitionEvent), ns.subscribe(this.onXrayAcquisitionEvent)
                    }, e.prototype.unsubscribe = function() {
                        $.unsubscribe(this.onStreamEventFragmentDownloadFailure), te.unsubscribe(this.onNewFragmentDownloaded), ei.unsubscribe(
                                this.onTimedTextDownload), z.unsubscribe(this.onStreamEventPlayerCreated), Q.unsubscribe(this
                                .onStreamEventManifestDownloadSuccess), J.unsubscribe(this.onStreamEventManifestDownloadFailure), Kt
                            .unsubscribe(this.onDrmAcquisitionEvent), ns.unsubscribe(this.onXrayAcquisitionEvent)
                    }, e.prototype.formatAssetType = function(e) {
                        switch (e) {
                            case "video":
                                return "Video";
                            case "audio":
                                return "Audio"
                        }
                        return e
                    }, e
                }(),
                us = {
                    body: {
                        consumptionId: new os(20, 60)
                    }
                },
                ls = {
                    sessionId: new os(36, 36),
                    streamId: new os(36, 36)
                },
                ds = function() {
                    function e() {}
                    return e.createAdIdentifierEvent = function(e, t) {
                        "Nielsen" === t._type && rs.validate(t, ls);
                        var n = {
                            _type: "AdIdentifier",
                            body: {
                                consumptionId: e,
                                adId: t
                            }
                        };
                        return rs.validate(n, us), n
                    }, e
                }(),
                ps = function() {
                    function e(e) {
                        var t = this;
                        this.onStreamEventPlayerCreated = function(e) {
                                t.consumptionId = e.urlSetId, t.tryDispatchEvent()
                            }, this.onStreamEventStop = function() {
                                t.consumptionId = void 0, t.adIdentifier = void 0
                            }, this.onAdIdentifierRequested = function(e) {
                                t.adIdentifier = e.adIdentifier, t.tryDispatchEvent()
                            }, this.onContextualEvent = function() {
                                t.tryDispatchEvent()
                            }, this.clean = this.clean.bind(this), this.subscribe = this.subscribe.bind(this), this.unsubscribe = this.unsubscribe
                            .bind(this), this.mediaEventReporter = e, this.subscribe()
                    }
                    return e.prototype.clean = function() {
                        this.unsubscribe()
                    }, e.prototype.tryDispatchEvent = function() {
                        if (this.adIdentifier && this.consumptionId) {
                            var e = ds.createAdIdentifierEvent(this.consumptionId, this.adIdentifier);
                            this.mediaEventReporter.enqueueMediaEvents([e])
                        }
                    }, e.prototype.subscribe = function() {
                        z.subscribe(this.onStreamEventPlayerCreated), U.subscribe(this.onStreamEventStop), ar.subscribe(this
                            .onAdIdentifierRequested), ts.subscribe(this.onContextualEvent)
                    }, e.prototype.unsubscribe = function() {
                        z.unsubscribe(this.onStreamEventPlayerCreated), U.unsubscribe(this.onStreamEventStop), ar.unsubscribe(this
                            .onAdIdentifierRequested), ts.unsubscribe(this.onContextualEvent)
                    }, e
                }(),
                fs = {
                    body: {
                        hardware: {
                            classTypeId: new os(10, 15),
                            manufacturer: new os(40),
                            modelName: new os(50),
                            chipset: new os(40)
                        },
                        software: {
                            application: {
                                name: new os(60),
                                version: new os(60)
                            },
                            operatingSystem: {},
                            firmware: {
                                name: new os(100),
                                version: new os(100)
                            },
                            middleware: {
                                name: new os(60),
                                version: new os(60)
                            },
                            browser: {
                                name: new os(60),
                                version: new os(60),
                                userAgent: new os(512)
                            },
                            player: {
                                name: new os(20),
                                version: new os(60)
                            }
                        }
                    }
                },
                hs = {
                    body: {
                        deviceId: new os(1, 64),
                        content: {
                            consumptionId: new os(1, 100),
                            contentId: new os(1, 64),
                            streamType: new os(1, 64)
                        }
                    }
                },
                ms = {
                    body: {
                        treatment: new os(1, 200)
                    }
                },
                gs = {
                    body: {
                        language: new os(2, 10)
                    }
                },
                vs = {
                    trackId: new os(1, 30),
                    language: new os(2, 10)
                },
                ys = {
                    body: {
                        track: {
                            consumptionId: new os(20, 60)
                        }
                    }
                },
                Es = ((ma = {}).Ruby = "Ruby-Maven", ma["Apple Player"] = "AppleTV-React", ma.Mediatek = "Mediatek-React", ma["lg-hawaii"] =
                    "lg-hawaii-React", ma["samsung-hawaii"] = "samsung-hawaii-React", ma),
                Ts = {
                    body: {
                        name: new os(1, 50),
                        treatment: new os(1, 2)
                    }
                },
                Ps = "UNKNOWN",
                Cs = function() {
                    function e() {}
                    return e.createDeviceEvent = function(e, t) {
                        var n, r = {
                                classTypeId: e.deviceTypeId,
                                manufacturer: e.manufacturer,
                                modelName: e.modelName,
                                chipset: e.chipset
                            },
                            i = {
                                name: "React-Maven",
                                version: t && t.version ? t.version : Ps
                            },
                            o = {
                                name: e.osName,
                                version: e.osLocale ? e.osLocale : "1.0"
                            },
                            a = {
                                name: null,
                                version: e.firmwareVersion
                            },
                            s = {
                                name: (n = b.LK.getInstance().playerName, n in Es ? Es[n] : n),
                                version: e.playerVersion || "defaultPlayerVersion"
                            },
                            c = {
                                _type: "Device",
                                body: {
                                    hardware: r,
                                    software: {
                                        application: i,
                                        runtime: {
                                            name: t && t.name ? t.name : "UNKNOWN",
                                            version: t && t.version ? t.version : Ps
                                        },
                                        operatingSystem: o,
                                        firmware: a,
                                        middleware: {
                                            name: "Ignition",
                                            version: "defaultMiddlewareVersion"
                                        },
                                        browser: null,
                                        player: s,
                                        attributionTag: "tag"
                                    }
                                }
                            };
                        return rs.validate(c, fs), c
                    }, e.createNetworkEvent = function(e, t, n, r, i) {
                        return {
                            _type: "Network",
                            body: {
                                category: {
                                    type: e,
                                    subtype: r
                                },
                                connected: t,
                                active: n,
                                signal: i
                            }
                        }
                    }, e.createDisplayEvent = function(e, t, n) {
                        var r = {
                            width: t,
                            height: n
                        };
                        return {
                            _type: "Display",
                            body: {
                                connected: e,
                                display: r,
                                player: r,
                                visible: {
                                    pixelsTotal: t * n,
                                    pixelsVisible: t * n
                                }
                            }
                        }
                    }, e.createAudioEvent = function(e) {
                        return {
                            _type: "Audio",
                            body: {
                                volume: e
                            }
                        }
                    }, e.createWeblabEvent = function(e, t) {
                        var n = {
                            _type: "Weblab",
                            body: {
                                name: e,
                                treatment: t
                            }
                        };
                        return rs.validate(n, Ts), n
                    }, e.createPlayerHeuristicEvent = function(e, t) {
                        var n = {
                            _type: "PlayerHeuristic",
                            body: {
                                platform: e,
                                treatment: t
                            }
                        };
                        return rs.validate(n, ms), n
                    }, e.createTimedTextEvent = function(e, t, n, r) {
                        var i = {
                            _type: "TimedText",
                            body: {
                                enabled: e,
                                language: t,
                                textType: n,
                                textSubtype: r
                            }
                        };
                        return rs.validate(i, gs), i
                    }, e.createAudioTrack = function(e, t, n) {
                        var r = {
                            _type: "Audio",
                            consumptionId: n,
                            trackId: e,
                            language: t
                        };
                        rs.validate(r, vs);
                        var i = {
                            _type: "Track",
                            body: {
                                track: r
                            }
                        };
                        return rs.validate(i, ys), i
                    }, e.createDeviceFulfillmentEvent = function(e, t, n) {
                        var r = {
                                consumptionId: e,
                                contentId: t,
                                streamType: n
                            },
                            i = {
                                _type: "DeviceFulfillment",
                                body: {
                                    deviceId: b.LK.getInstance().deviceId,
                                    content: r
                                }
                            };
                        return rs.validate(i, hs), i
                    }, e
                }(),
                Is = function() {
                    function e(e) {
                        var t = this;
                        this.onContextualEvent = function() {
                                t.mediaEventReporter.enqueueMediaEvents([Cs.createAudioEvent(100)])
                            }, this.clean = this.clean.bind(this), this.subscribe = this.subscribe.bind(this), this.unsubscribe = this.unsubscribe
                            .bind(this), this.mediaEventReporter = e, this.subscribe()
                    }
                    return e.prototype.clean = function() {
                        this.unsubscribe()
                    }, e.prototype.subscribe = function() {
                        ts.subscribe(this.onContextualEvent)
                    }, e.prototype.unsubscribe = function() {
                        ts.unsubscribe(this.onContextualEvent)
                    }, e
                }(),
                _s = {
                    body: {
                        playhead: new is(0),
                        contentId: new os(1, 64),
                        contentType: new os(1, 64)
                    }
                },
                Rs = function() {
                    function e() {}
                    return e.prototype.createContentEvent = function(e) {
                        var t = {
                            _type: "Content",
                            body: (0, s.__assign)((0, s.__assign)({}, e), {
                                playhead: Math.round(e.playhead)
                            })
                        };
                        return rs.validate(t, _s), t
                    }, e
                }(),
                bs = function() {
                    function e(e) {
                        var t = this;
                        this.onPlaybackContentChange = function(e) {
                                t.mediaEventReporter.enqueueMediaEvents([t.contentEventFactory.createContentEvent(e)])
                            }, this.clean = this.clean.bind(this), this.subscribe = this.subscribe.bind(this), this.unsubscribe = this.unsubscribe
                            .bind(this), this.mediaEventReporter = e, this.contentEventFactory = new Rs, this.subscribe()
                    }
                    return e.prototype.clean = function() {
                        this.unsubscribe()
                    }, e.prototype.subscribe = function() {
                        bn.subscribe(this.onPlaybackContentChange)
                    }, e.prototype.unsubscribe = function() {
                        bn.unsubscribe(this.onPlaybackContentChange)
                    }, e
                }(),
                Ss = function() {
                    function e(e, t) {
                        var n = this;
                        this.mediaEventReporter = e, this.clientIdentity = t, this.onContextualEvent = function() {
                                var e = Cs.createDeviceEvent(b.LK.getInstance(), n.clientIdentity);
                                n.mediaEventReporter.enqueueMediaEvents([e])
                            }, this.clean = this.clean.bind(this), this.subscribe = this.subscribe.bind(this), this.unsubscribe = this.unsubscribe
                            .bind(this), this.mediaEventReporter = e, this.subscribe()
                    }
                    return e.prototype.clean = function() {
                        this.unsubscribe()
                    }, e.prototype.subscribe = function() {
                        ts.subscribe(this.onContextualEvent)
                    }, e.prototype.unsubscribe = function() {
                        ts.unsubscribe(this.onContextualEvent)
                    }, e
                }(),
                As = function() {
                    function e(e) {
                        var t = this;
                        this.mediaEventReporter = e, this.onConsumptionIdUpdate = function(e) {
                                t.consumptionId = e.urlSetId, t.tryDispatchEvent()
                            }, this.onDeviceFulfillmentContentUpdate = function(e) {
                                t.contentId = e.contentId, e.videoMaterialType === _t.g.LiveStreaming || e.videoMaterialType === _t.g.External ? t
                                    .streamType = "Live" : t.streamType = "VOD", t.tryDispatchEvent()
                            }, this.onPlaybackExit = function() {
                                t.consumptionId = void 0, t.contentId = void 0, t.streamType = void 0
                            }, this.onContextualEvent = function() {
                                t.tryDispatchEvent()
                            }, this.clean = this.clean.bind(this), this.subscribe = this.subscribe.bind(this), this.unsubscribe = this.unsubscribe
                            .bind(this), this.mediaEventReporter = e, this.subscribe()
                    }
                    return e.prototype.clean = function() {
                        this.unsubscribe()
                    }, e.prototype.tryDispatchEvent = function() {
                        if (this.consumptionId && this.contentId && this.streamType) {
                            var e = Cs.createDeviceFulfillmentEvent(this.consumptionId, this.contentId, this.streamType);
                            this.mediaEventReporter.enqueueMediaEvents([e])
                        }
                    }, e.prototype.subscribe = function() {
                        wi.subscribe(this.onDeviceFulfillmentContentUpdate), Ir.subscribe(this.onConsumptionIdUpdate), es.subscribe(this
                            .onPlaybackExit), ts.subscribe(this.onContextualEvent)
                    }, e.prototype.unsubscribe = function() {
                        wi.unsubscribe(this.onDeviceFulfillmentContentUpdate), Ir.unsubscribe(this.onConsumptionIdUpdate), es.unsubscribe(this
                            .onPlaybackExit), ts.unsubscribe(this.onContextualEvent)
                    }, e
                }(),
                Os = function() {
                    function e(e) {
                        var t = this;
                        this.onContextualEvent = function() {
                                var e = Cs.createDisplayEvent(t.isPlayerOpen, t.resolution.width, t.resolution.height);
                                t.mediaEventReporter.enqueueMediaEvents([e])
                            }, this.onStreamEventPlayerCreated = function(e) {
                                t.isPlayerOpen = !!e.urlSetId;
                                var n = Cs.createDisplayEvent(t.isPlayerOpen, t.resolution.width, t.resolution.height);
                                t.mediaEventReporter.enqueueMediaEvents([n])
                            }, this.onStreamEventStop = function() {
                                t.isPlayerOpen = !1;
                                var e = Cs.createDisplayEvent(t.isPlayerOpen, t.resolution.width, t.resolution.height);
                                t.mediaEventReporter.enqueueMediaEvents([e])
                            }, this.clean = this.clean.bind(this), this.subscribe = this.subscribe.bind(this), this.unsubscribe = this.unsubscribe
                            .bind(this), this.mediaEventReporter = e, this.resolution = (0, b.FP)(), this.isPlayerOpen = !1, this.subscribe()
                    }
                    return e.prototype.clean = function() {
                        this.unsubscribe()
                    }, e.prototype.subscribe = function() {
                        ts.subscribe(this.onContextualEvent), z.subscribe(this.onStreamEventPlayerCreated), U.subscribe(this.onStreamEventStop)
                    }, e.prototype.unsubscribe = function() {
                        ts.unsubscribe(this.onContextualEvent), z.unsubscribe(this.onStreamEventPlayerCreated), U.unsubscribe(this
                            .onStreamEventStop)
                    }, e
                }(),
                Ns = {
                    generic: new os(50),
                    specific: new os(500)
                },
                Ls = function() {
                    function e() {}
                    return e.createErrorEvent = function(e, t, n, r, i) {
                        return void 0 === i && (i = null), rs.validate(r.message, Ns), {
                            _type: "Error",
                            body: {
                                context: {
                                    source: e,
                                    type: t
                                },
                                fatal: n,
                                details: r,
                                consumptionId: i
                            }
                        }
                    }, e.createErrorDetails = function(e) {
                        var t = {
                            message: {
                                generic: e.name,
                                specific: e.message
                            },
                            stackTrace: [""]
                        };
                        return "string" == typeof e.stack && (t.stackTrace = e.stack.split("\n")), t
                    }, e
                }(),
                Ms = function() {
                    function e(e) {
                        var t = this;
                        this.onQoSErrorEvent = function(e) {
                                var n, r, i, o = t.getErrorType(e.errorType),
                                    a = null !== (n = e.errorType) && void 0 !== n ? n : "",
                                    s = null !== (r = e.errorMessage) && void 0 !== r ? r : "",
                                    c = null !== (i = e.isFatal) && void 0 !== i ? i : t.isFatalError(e.errorType),
                                    u = Ls.createErrorEvent("Player", o, c, {
                                        message: {
                                            generic: a,
                                            specific: s
                                        },
                                        stackTrace: null
                                    }, t.consumptionId);
                                t.mediaEventReporter.enqueueMediaEvents([u])
                            }, this.onConsumptionIdUpdate = function(e) {
                                t.consumptionId = e.urlSetId
                            }, this.clean = this.clean.bind(this), this.subscribe = this.subscribe.bind(this), this.unsubscribe = this.unsubscribe
                            .bind(this), this.mediaEventReporter = e, this.subscribe()
                    }
                    return e.prototype.clean = function() {
                        this.unsubscribe()
                    }, e.prototype.subscribe = function() {
                        Me.subscribe(this.onQoSErrorEvent), Ir.subscribe(this.onConsumptionIdUpdate)
                    }, e.prototype.unsubscribe = function() {
                        Me.unsubscribe(this.onQoSErrorEvent), Ir.unsubscribe(this.onConsumptionIdUpdate)
                    }, e.prototype.isFatalError = function(e) {
                        return !(!e || !Object.hasOwnProperty.call(ye, e)) && ye[e] <= he.TWO
                    }, e.prototype.getErrorType = function(e) {
                        return e && me.indexOf(e) > -1 ? "DRM" : "Error"
                    }, e
                }(),
                Ds = {
                    body: {
                        ruleId: new os(1, 36),
                        fromConsumptionId: new os(20, 60),
                        toConsumptionId: new os(20, 60)
                    }
                },
                ws = function() {
                    function e() {}
                    return e.createFailoverEvent = function(e, t, n) {
                        var r = {
                            _type: "Failover",
                            body: {
                                ruleId: e,
                                fromConsumptionId: t,
                                toConsumptionId: n
                            }
                        };
                        return rs.validate(r, Ds), r
                    }, e
                }(),
                ks = function() {
                    function e(e) {
                        var t = this;
                        this.onFailoverStarted = function(e) {
                                var n = "cdn" === e.failoverRuleId ? "CDNFailure" : e.failoverRuleId,
                                    r = ws.createFailoverEvent(n, e.currentUrlSetId, e.nextUrlSetId);
                                t.mediaEventReporter.enqueueMediaEvents([r])
                            }, this.clean = this.clean.bind(this), this.subscribe = this.subscribe.bind(this), this.unsubscribe = this.unsubscribe
                            .bind(this), this.mediaEventReporter = e, this.subscribe()
                    }
                    return e.prototype.clean = function() {
                        this.unsubscribe()
                    }, e.prototype.subscribe = function() {
                        Cr.subscribe(this.onFailoverStarted)
                    }, e.prototype.unsubscribe = function() {
                        Cr.unsubscribe(this.onFailoverStarted)
                    }, e
                }(),
                Fs = {
                    refMarker: new os(1, 64)
                },
                xs = {
                    body: {
                        targetDeviceId: new os(60),
                        sourceDeviceId: new os(60)
                    }
                },
                Us = {
                    refMarker: new os(1, 64),
                    refMarkerIndex: new is(0),
                    navValue: new os(1, 100),
                    scrollAmount: new is(0, 100)
                },
                Bs = function() {
                    function e() {}
                    return e.createInteractionEvent = function(e, t, n, r, i, o, a, s) {
                        if (void 0 === n && (n = null), void 0 === r && (r = null), void 0 === i && (i = null), void 0 === o && (o = null),
                            void 0 === a && (a = null), void 0 === s && (s = null), r) switch (r._type) {
                            case "ContinuousPlay":
                                rs.validate(r, Fs);
                                break;
                            case "X-Ray":
                                rs.validate(r, Us)
                        }
                        var c = {
                            _type: "Interaction",
                            body: {
                                context: {
                                    source: e,
                                    type: t,
                                    input: n,
                                    navigation: r,
                                    cause: a
                                },
                                targetDeviceId: i,
                                sourceDeviceId: o,
                                timeOffset: s
                            }
                        };
                        return rs.validate(c, xs), c
                    }, e
                }(),
                Hs = function() {
                    function e(e) {
                        var t = this;
                        this.onInteractionEvent = function(e) {
                                var n = Bs.createInteractionEvent(e.source, e.type, e.input, e.navigation, null, null, e.cause);
                                t.mediaEventReporter.enqueueMediaEvents([n])
                            }, this.clean = this.clean.bind(this), this.subscribe = this.subscribe.bind(this), this.unsubscribe = this.unsubscribe
                            .bind(this), this.mediaEventReporter = e, this.subscribe()
                    }
                    return e.prototype.clean = function() {
                        this.unsubscribe()
                    }, e.prototype.subscribe = function() {
                        dn.subscribe(this.onInteractionEvent)
                    }, e.prototype.unsubscribe = function() {
                        dn.unsubscribe(this.onInteractionEvent)
                    }, e
                }(),
                Gs = function() {
                    function e(e) {
                        var t = this;
                        this.onNetworkConnected = function() {
                                t.connected || (t.connected = !0, t.mediaEventReporter.enqueueMediaEvents([t.eventConstructor()]))
                            }, this.onNetworkDisconnected = function() {
                                !1 !== t.connected && (t.connected = !1, t.mediaEventReporter.enqueueMediaEvents([t.eventConstructor()]))
                            }, this.onContextualEvent = function() {
                                t.mediaEventReporter.enqueueMediaEvents([t.eventConstructor()])
                            }, this.clean = this.clean.bind(this), this.subscribe = this.subscribe.bind(this), this.unsubscribe = this.unsubscribe
                            .bind(this), this.mediaEventReporter = e, this.subscribe()
                    }
                    return e.prototype.clean = function() {
                        this.unsubscribe()
                    }, e.prototype.eventConstructor = function() {
                        var e, t;
                        return Cs.createNetworkEvent("Ethernet", null === (e = this.connected) || void 0 === e || e, null === (t = this
                            .connected) || void 0 === t || t, null, null)
                    }, e.prototype.subscribe = function() {
                        F.subscribe(this.onNetworkConnected), O.subscribe(this.onNetworkDisconnected), ts.subscribe(this.onContextualEvent)
                    }, e.prototype.unsubscribe = function() {
                        F.unsubscribe(this.onNetworkConnected), O.unsubscribe(this.onNetworkDisconnected), ts.unsubscribe(this
                            .onContextualEvent)
                    }, e
                }(),
                Ws = n(52628),
                Vs = n.n(Ws),
                Ks = {
                    body: {
                        playhead: new is(0),
                        consumptionId: new os(20, 60),
                        averageFrameRate: new is(0),
                        clientId: new os(36, 36)
                    }
                },
                Zs = function() {
                    function e(e) {
                        var t = this;
                        void 0 === e && (e = null), this.clientId = e, this.playingFragmentIndex = 0, this.initialPlaybackEventInfo = {
                            playhead: 0,
                            consumptionId: null,
                            contentContext: "Feature",
                            droppedFrames: 0,
                            livehead: null
                        }, this.initialBuffer = {
                            bytesAvailable: 0,
                            timeAvailable: 0,
                            bytesCapacity: 1,
                            type: "Video",
                            timeCapacity: 1
                        }, this.reset = function() {
                            t.init()
                        }, this.updatePlaybackInfo = function(e) {
                            var n, r, i = Math.floor(null !== (r = null !== (n = e.playbackPosition) && void 0 !== n ? n : t.playbackEventInfo
                                .playhead) && void 0 !== r ? r : 0);
                            t.playingFragmentIndex = e.playingFragmentIndex || t.playingFragmentIndex;
                            var o = e.bytesAvailable || 1024 * (e.bufferFullness || 0) * 1024,
                                a = 1024 * (e.maxBufferCapacity || 0) * 1024,
                                s = e.timeAvailable || t.inferTimeAvailableInMs(e),
                                c = Math.floor(e.livehead || t.playbackEventInfo.livehead || 0) || null;
                            if (t.playbackEventInfo.playhead = i, t.playbackEventInfo.consumptionId = e.urlSetId || t.playbackEventInfo
                                .consumptionId, t.playbackEventInfo.contentContext = e.contentContext || t.playbackEventInfo.contentContext, t
                                .playbackEventInfo.droppedFrames = e.droppedFrames || t.playbackEventInfo.droppedFrames, t.playbackEventInfo
                                .livehead = c, e.assetType) {
                                var u = {
                                    bytesAvailable: Math.floor(o) || 0,
                                    timeAvailable: Math.floor(s) || 0,
                                    bytesCapacity: Math.floor(a) || 1,
                                    type: e.assetType,
                                    timeCapacity: 1
                                };
                                t.frontBuffers[e.assetType] = u
                            }
                        }, this.init = function() {
                            t.playbackEventInfo = f()(t.initialPlaybackEventInfo);
                            var e = f()(t.initialBuffer),
                                n = {
                                    Video: e,
                                    Audio: (0, s.__assign)((0, s.__assign)({}, e), {
                                        type: "Audio"
                                    })
                                };
                            t.frontBuffers = (0, s.__assign)({}, n), t.backBuffers = (0, s.__assign)({}, n)
                        }, this.inferTimeAvailableInMs = function(e) {
                            return e.lastBufferedFragmentIndex ? 1e3 * (2 * Math.max(0, e.lastBufferedFragmentIndex - t.playingFragmentIndex) ||
                                0) : 0
                        }, this.init()
                    }
                    return e.prototype.createPlaybackEvent = function(e) {
                        var t = {
                            _type: "Playback",
                            body: {
                                action: e,
                                playhead: this.playbackEventInfo.playhead,
                                consumptionId: this.playbackEventInfo.consumptionId,
                                contentContext: this.playbackEventInfo.contentContext,
                                buffers: {
                                    front: this.generateBufferPayload(this.frontBuffers),
                                    back: this.generateBufferPayload(this.backBuffers),
                                    renderer: null
                                },
                                livehead: this.playbackEventInfo.livehead,
                                clientId: this.clientId,
                                droppedFrames: this.playbackEventInfo.droppedFrames,
                                averageFrameRate: 0
                            }
                        };
                        return rs.validate(t, Ks), t
                    }, e.prototype.generateBufferPayload = function(e) {
                        return Vs()(e)
                    }, e
                }(),
                qs = function() {
                    function e(e, t, n) {
                        var r, i, o = this;
                        this.getTimelineType = t, this.clientId = n, this.isPlaying = !1, this.isPlayerOpen = !1, this.onAdScheduleUpdate =
                            function(e) {
                                o.playbackEventFactory.updatePlaybackInfo({
                                    bufferFullness: null,
                                    maxBufferCapacity: null,
                                    bytesAvailable: null,
                                    contentContext: e ? "AdBreak" : "Feature"
                                })
                            }, this.onConsumptionIdUpdate = function(e) {
                                o.playbackEventFactory.updatePlaybackInfo({
                                    bufferFullness: null,
                                    maxBufferCapacity: null,
                                    bytesAvailable: null,
                                    urlSetId: e.urlSetId
                                })
                            }, this.onNewFragmentDownloaded = function(e) {
                                o.playbackEventFactory.updatePlaybackInfo({
                                    assetType: o.formatAssetType(e.fragmentInfo.streamType),
                                    lastBufferedFragmentIndex: e.fragmentInfo.fragmentIndex,
                                    bufferFullness: e.fragmentInfo.bufferFullness,
                                    maxBufferCapacity: e.fragmentInfo.maxBufferCapacity,
                                    timeAvailable: e.fragmentInfo.timeAvailable,
                                    bytesAvailable: e.fragmentInfo.fragmentSize
                                })
                            }, this.onPlayerOpen = function() {
                                if (!o.isPlayerOpen) {
                                    o.isPlayerOpen = !0;
                                    var e = o.playbackEventFactory.createPlaybackEvent("Open");
                                    o.mediaEventReporter.enqueueMediaEvents([e])
                                }
                            }, this.onStreamEventPlayerCreated = function(e) {
                                o.playbackEventFactory.updatePlaybackInfo({
                                    urlSetId: e.urlSetId,
                                    isLiveStreaming: !1,
                                    bufferFullness: null,
                                    maxBufferCapacity: null,
                                    bytesAvailable: null
                                })
                            }, this.onStreamEventPlaybackProgress = function(e) {
                                o.playbackEventFactory.updatePlaybackInfo({
                                    playbackPosition: e.elapsedTimeMillis,
                                    playingFragmentIndex: Math.floor(e.elapsedTimeMillis / 2e3),
                                    contentContext: o.getContentContext(),
                                    bufferFullness: null,
                                    maxBufferCapacity: null,
                                    livehead: e.livehead,
                                    bytesAvailable: null
                                });
                                var t = Date.now();
                                o.isPlaying || (o.isPlaying = !0, o.mediaEventReporter.enqueueMediaEvents([o.playbackEventFactory
                                    .createPlaybackEvent("Start")
                                ]), o.timestampOffsetMs || (o.timestampOffsetMs = t - 1e4)), (!o.timestampOffsetMs || t - o.timestampOffsetMs >
                                    1e4) && (o.mediaEventReporter.enqueueMediaEvents([o.playbackEventFactory.createPlaybackEvent("Update")]), o
                                    .timestampOffsetMs = t)
                            }, this.onDroppedFramesUpdated = function(e) {
                                o.playbackEventFactory.updatePlaybackInfo({
                                    droppedFrames: e.droppedFrame,
                                    bufferFullness: null,
                                    maxBufferCapacity: null,
                                    bytesAvailable: null
                                })
                            }, this.onStreamEventBuffering = function() {
                                o.onPlaybackStopped()
                            }, this.onStreamEventPause = function() {
                                o.onPlaybackStopped()
                            }, this.onStreamEventStop = function() {
                                o.onPlaybackStopped()
                            }, this.onStreamEventPlaybackComplete = function() {
                                o.onPlaybackStopped()
                            }, this.onPlayerExit = function() {
                                o.isPlayerOpen && (o.mediaEventReporter.enqueueMediaEvents([o.playbackEventFactory.createPlaybackEvent("Exit")]), o
                                    .playbackEventFactory.reset(), o.isPlayerOpen = !1)
                            }, this.onPlaybackStopped = function() {
                                o.isPlaying && (o.isPlaying = !1, o.mediaEventReporter.enqueueMediaEvents([o.playbackEventFactory
                                    .createPlaybackEvent("Stop")
                                ]))
                            }, this.getContentContext = function() {
                                return o.getTimelineType() === c.xR.Advertisement ? "AdBreak" : "Feature"
                            }, this.clean = this.clean.bind(this), this.mediaEventReporter = e, this.playbackEventFactory = new Zs(this.clientId),
                            this.listeners = [{
                                emitter: w,
                                listener: this.onStreamEventBuffering
                            }, {
                                emitter: D,
                                listener: this.onStreamEventPause
                            }, {
                                emitter: k,
                                listener: this.onStreamEventPlaybackComplete
                            }, {
                                emitter: P,
                                listener: this.onStreamEventPlaybackProgress
                            }, {
                                emitter: z,
                                listener: this.onStreamEventPlayerCreated
                            }, {
                                emitter: Qn,
                                listener: this.onPlayerOpen
                            }, {
                                emitter: U,
                                listener: this.onStreamEventStop
                            }, {
                                emitter: es,
                                listener: this.onPlayerExit
                            }, {
                                emitter: te,
                                listener: this.onNewFragmentDownloaded
                            }, {
                                emitter: X,
                                listener: this.onDroppedFramesUpdated
                            }, {
                                emitter: Nr,
                                listener: this.onAdScheduleUpdate
                            }, {
                                emitter: Ir,
                                listener: this.onConsumptionIdUpdate
                            }];
                        try {
                            for (var a = (0, s.__values)(this.listeners), u = a.next(); !u.done; u = a.next()) {
                                var l = u.value;
                                l.emitter.subscribe(l.listener)
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                u && !u.done && (i = a.return) && i.call(a)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                    }
                    return e.prototype.clean = function() {
                        var e, t;
                        try {
                            for (var n = (0, s.__values)(this.listeners), r = n.next(); !r.done; r = n.next()) {
                                var i = r.value;
                                i.emitter.unsubscribe(i.listener)
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                r && !r.done && (t = n.return) && t.call(n)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                    }, e.prototype.formatAssetType = function(e) {
                        switch (e) {
                            case "video":
                                return "Video";
                            case "audio":
                                return "Audio"
                        }
                    }, e
                }(),
                Ys = function() {
                    function e(e) {
                        var t = this;
                        this.onPlayerHeuristicEvent = function(e) {
                                var n = Cs.createPlayerHeuristicEvent(e.platform, e.treatment);
                                t.mediaEventReporter.enqueueMediaEvents([n])
                            }, this.clean = this.clean.bind(this), this.subscribe = this.subscribe.bind(this), this.unsubscribe = this.unsubscribe
                            .bind(this), this.mediaEventReporter = e, this.subscribe()
                    }
                    return e.prototype.clean = function() {
                        this.unsubscribe()
                    }, e.prototype.subscribe = function() {
                        Y.subscribe(this.onPlayerHeuristicEvent)
                    }, e.prototype.unsubscribe = function() {
                        Y.unsubscribe(this.onPlayerHeuristicEvent)
                    }, e
                }(),
                zs = ((ga = {})[c.f8.Caption] = "Caption", ga[c.f8.Mandatory] = "ForcedNarrative", ga[c.f8.Subtitle] = "Subtitle", ga),
                js = ((va = {})[c.lX.Commentary] = "Commentary", va[c.lX.Descriptive] = "Descriptive", va[c.lX.Dialog] = "Dialog", va),
                Qs = function() {
                    function e(e) {
                        var t = this;
                        this.onTimedText = function(e) {
                                var n = Cs.createTimedTextEvent(e.enabled, e.language, e.textType ? zs[e.textType] : null, e.textSubtype ? js[e
                                    .textSubtype] : null);
                                t.mediaEventReporter.enqueueMediaEvents([n])
                            }, this.subscribe = function() {
                                Pi.subscribe(t.onTimedText)
                            }, this.unsubscribe = function() {
                                Pi.unsubscribe(t.onTimedText)
                            }, this.clean = this.clean.bind(this), this.subscribe = this.subscribe.bind(this), this.unsubscribe = this.unsubscribe
                            .bind(this), this.mediaEventReporter = e, this.subscribe()
                    }
                    return e.prototype.clean = function() {
                        this.unsubscribe()
                    }, e
                }(),
                Xs = function() {
                    function e(e) {
                        var t = this;
                        this.onAudioTrackMetadata = function(e) {
                                t.audioTrackMetadata = e;
                                var n = Cs.createAudioTrack(e.trackId, e.language, e.urlSetId);
                                t.mediaEventReporter.enqueueMediaEvents([n])
                            }, this.onContextualEvent = function() {
                                if (t.audioTrackMetadata) {
                                    var e = Cs.createAudioTrack(t.audioTrackMetadata.trackId, t.audioTrackMetadata.language, t.audioTrackMetadata
                                        .urlSetId);
                                    t.mediaEventReporter.enqueueMediaEvents([e])
                                }
                            }, this.subscribe = function() {
                                Yn.subscribe(t.onAudioTrackMetadata), ts.subscribe(t.onContextualEvent)
                            }, this.unsubscribe = function() {
                                Yn.unsubscribe(t.onAudioTrackMetadata), ts.unsubscribe(t.onContextualEvent)
                            }, this.clean = this.clean.bind(this), this.subscribe = this.subscribe.bind(this), this.unsubscribe = this.unsubscribe
                            .bind(this), this.mediaEventReporter = e, this.subscribe()
                    }
                    return e.prototype.clean = function() {
                        this.unsubscribe()
                    }, e
                }(),
                Js = n(47583),
                $s = function() {
                    function e() {}
                    return e.getReportingServiceUrlFromMarketplaceId = function(e) {
                        var t;
                        switch (e) {
                            case Js.Zv.ROW_NA:
                            case Js.Zv.US:
                                t = "api.us-east-1";
                                break;
                            case Js.Zv.ROE_EU:
                            case Js.Zv.ROW_EU:
                            case Js.Zv.UK:
                            case Js.Zv.DE:
                                t = "api.eu-west-1";
                                break;
                            case Js.Zv.ROW_FE:
                            case Js.Zv.JP:
                                t = "api.us-west-2";
                                break;
                            default:
                                throw new Error("Can't get ReportingServiceUrl for unknown MarketplaceId! Received: " + e)
                        }
                        return "https://" + t + ".aiv-delivery.net"
                    }, e.SCHEMA_VERSION = "AV20180601", e.UNRETRIABLE_HTTP_ERROR_CODES = [400, 404, 410], e
                }(),
                ec = n(82492),
                tc = n.n(ec),
                nc = n(8575),
                rc = ne("MediaEventCollector"),
                ic = function() {
                    function e(e) {
                        this.config = e, this.collectedMediaEvents = [], this.pendingMediaEvents = [], this.enforceReport = !1, this.lastTimestamp =
                            0, this.masterSequence = 0, this.prefillCount = 0
                    }
                    return e.prototype.addEvents = function(e) {
                        null === this.config.appInstanceId ? this.addPendingEvents(e) : (this.addCollectedFromPendingEvents(), this
                            .addCollectedEvents(e))
                    }, e.prototype.clearEvents = function(e) {
                        this.collectedMediaEvents = [], this.pendingMediaEvents = [], this.prefillCount = null, this.enforceReport = !1, this
                            .lastTimestamp = 0, e && e(), this.prefillCount = this.pendingMediaEvents.length + this.collectedMediaEvents.length
                    }, e.prototype.shouldReportEvents = function() {
                        return this.addCollectedFromPendingEvents(), this.collectedMediaEvents.length >= this.config.batching.depth || this
                            .enforceReport || this.hasTimeChangedUnexpectedly()
                    }, e.prototype.generateEventReport = function() {
                        return this.addCollectedFromPendingEvents(), null !== this.prefillCount && this.collectedMediaEvents.length > this
                            .prefillCount && null !== this.config.appInstanceId ? {
                                clientPublishTimestamp: this.getPublishTimestamp(),
                                clientPublishRelativeTime: this.getRelativeTime(),
                                appInstanceId: this.config.appInstanceId,
                                events: this.ensureConsistentTimestamps(this.collectedMediaEvents)
                            } : null
                    }, e.prototype.getPublishTimestamp = function() {
                        var e = this.getCurrentTimestamp();
                        return this.hasTimeChangedUnexpectedly() ? (re.warn("".concat(rc("getPublishTimestamp"), " ") +
                            "Publish timestamp override from ".concat(e, " to ").concat(this.lastTimestamp)), this.lastTimestamp) : e
                    }, e.prototype.hasTimeChangedUnexpectedly = function() {
                        var e = this.getCurrentTimestamp();
                        if (this.lastTimestamp > 0) {
                            if (e > this.lastTimestamp + 2 * this.config.batching.period) return !0;
                            if (e < this.lastTimestamp) return !0
                        }
                        return !1
                    }, e.prototype.createCollectedEvent = function(e) {
                        var t = this.getCurrentTimestamp();
                        return this.lastTimestamp = t, Object.assign(e, {
                            timestamp: t,
                            reltime: this.getRelativeTime(),
                            sequence: this.masterSequence++
                        })
                    }, e.prototype.getRelativeTime = function() {
                        return "undefined" != typeof performance && "function" == typeof performance.now ? Math.round(performance.now()) : this
                            .getCurrentTimestamp()
                    }, e.prototype.getCurrentTimestamp = function() {
                        return Date.now()
                    }, e.prototype.ensureConsistentTimestamps = function(e) {
                        if (null !== this.prefillCount && this.prefillCount < e.length)
                            for (var t = 1; t <= this.prefillCount; t++)
                                if (e[t - 1].timestamp < e[t].timestamp - 2 * this.config.batching.period) {
                                    re.warn("".concat(rc("ensureConsistentTimestamps"), " ") + "Event timestamp override for initial ".concat(t,
                                        " out of ").concat(this.prefillCount, " prefilled events"));
                                    for (var n = 0; n < t; n++) e[n].timestamp = e[t].timestamp
                                } return e
                    }, e.prototype.addPendingEvents = function(e) {
                        var t, n;
                        try {
                            for (var r = (0, s.__values)(e), i = r.next(); !i.done; i = r.next()) {
                                var o = i.value;
                                this.pendingMediaEvents.push(o)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                i && !i.done && (n = r.return) && n.call(r)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                    }, e.prototype.addCollectedFromPendingEvents = function() {
                        if (this.pendingMediaEvents.length > 0 && null !== this.prefillCount && null !== this.config.appInstanceId) {
                            var e = this.prefillCount;
                            this.addCollectedEvents(this.pendingMediaEvents.slice(0, e)), this.prefillCount = this.collectedMediaEvents.length,
                                this.addCollectedEvents(this.pendingMediaEvents.slice(e)), this.pendingMediaEvents = []
                        }
                    }, e.prototype.addCollectedEvents = function(e) {
                        var t, n;
                        try {
                            for (var r = (0, s.__values)(e), i = r.next(); !i.done; i = r.next()) {
                                var o = i.value,
                                    a = this.config.events[o._type] || {};
                                !1 !== a.enabled && (this.collectedMediaEvents.push(this.createCollectedEvent(o)), !0 === a.forceDispatch && (
                                    this.enforceReport = !0))
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                i && !i.done && (n = r.return) && n.call(r)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                    }, e
                }(),
                oc = ne("MediaEventRequest"),
                ac = ne("MediaEventReporter"),
                sc = function() {
                    function e(t, n, r) {
                        void 0 === t && (t = ""), void 0 === n && (n = {
                                appInstanceId: null,
                                batching: {
                                    period: 6e4,
                                    depth: 250
                                },
                                events: {},
                                retry: {
                                    modifier: 1.5,
                                    max: 3e5,
                                    jitter: 5e3
                                }
                            }), void 0 === r && (r = new ic(n)), this.baseUrl = t, this.config = n, this.mediaEventCollector = r, this
                            .bootstrapUrl = nc.resolve(t, e.BOOTSTRAP_ENDPOINT), this.eventsUrl = nc.resolve(t, e.EVENTS_ENDPOINT)
                    }
                    return e.prototype.init = function(e) {
                            re.info("".concat(ac("init"), " Starting session: ").concat(this.config.appInstanceId)), this
                                .enqueueContextualMediaEvents = e, this.mediaEventCollector.clearEvents(this.enqueueContextualMediaEvents), this
                                .sendRequest(this.bootstrapUrl), this.setDispatchInterval()
                        }, e.prototype.stop = function() {
                            clearInterval(this.dispatchInterval), this.dispatchInterval = void 0, this.enqueueContextualMediaEvents = void 0, this
                                .dispatchMediaEvents(), re.info("".concat(ac("stop"), " Stopped session: ").concat(this.config.appInstanceId))
                        }, e.prototype.enqueueMediaEvents = function(e) {
                            this.mediaEventCollector.shouldReportEvents() && this.dispatchMediaEvents(), this.mediaEventCollector.addEvents(e), this
                                .mediaEventCollector.shouldReportEvents() && this.dispatchMediaEvents()
                        }, e.prototype.dispatchMediaEvents = function() {
                            var e = this.mediaEventCollector.generateEventReport();
                            null !== e && (this.mediaEventCollector.clearEvents(this.enqueueContextualMediaEvents), this.sendRequest(this.eventsUrl,
                                e))
                        }, e.prototype.sendRequest = function(e, t) {
                            var n = this,
                                r = this.config.appInstanceId,
                                i = t ? K.QOS_REPORTING_FAILURE_RATE : K.QOS_REPORTING_BOOTSTRAP_FAILURE_RATE,
                                o = t ? "LegacyPlayer.Qos.ReportingFailureRate" : "LegacyPlayer.Qos.BootstrapFailureRate";
                            ! function(t, a, s, c, u) {
                                (new $e.L).withInitialIntervalMs(c.batching.period).withExponentialFactor(c.retry.modifier).withRandomizationFactor(
                                    c.retry.jitter).withMaxElapsedTimeMs(c.retry.max).onSuccess((function(e) {
                                    ae.reportDataPoint(i, V.PLAYER, 0), h.y.metric(o, 0, m.R.PBCX), n.updateConfig(e.getText())
                                })).onError((function(t, a) {
                                    re.error("".concat(ac("sendRequest"), " Request to ").concat(e, " failed (").concat(r, "): ")
                                        .concat(t)), ae.reportDataPoint(i, V.PLAYER, 1), h.y.metric(o, 1, m.R.PBCX);
                                    var s = a ? a.getStatus() : 0;
                                    s >= 400 && s < 500 ? (ae.reportDataPoint(K.QOS_REPORTING_FAILED_4XX, V.PLAYER, 1), h.y.metric(
                                        "LegacyPlayer.Qos.ReportingFailed", 1, {
                                            reportOwner: m.R.PBCX,
                                            customContext: {
                                                error: "4XX"
                                            }
                                        })) : s >= 500 && s < 600 && (ae.reportDataPoint(K.QOS_REPORTING_FAILED_5XX, V.PLAYER, 1), h
                                        .y.metric("LegacyPlayer.Qos.ReportingFailed", 1, {
                                            reportOwner: m.R.PBCX,
                                            customContext: {
                                                error: "5XX"
                                            }
                                        })), n.updateConfig()
                                })).onAttempt((function(e, n, r, i) {
                                    ae.startTimer(K.QOS_REPORTING_PRE_FETCH_PROCESSING_DURATION, V.PLAYER);
                                    var o = h.y.metricTimer("LegacyPlayer.Qos.PreFetchProcessingDuration", m.R.PBCX).start();
                                    try {
                                        ! function(e, t, n, r, i, o) {
                                            var a = t ? Je.post(e) : Je.get(e);
                                            t && a.headers({
                                                "Content-Type": "application/json"
                                            }).body(JSON.stringify(t)), a.onLoad((function(e) {
                                                i(e)
                                            })).onError((function(e, t) {
                                                t && He()($s.UNRETRIABLE_HTTP_ERROR_CODES, t.getStatus()) ? o(e, t) : t ? (
                                                    re.warn("".concat(oc("executeRequest"), " Attempt ").concat(n + 1,
                                                        " failed: ").concat(e)), r(e)) : (re.warn("".concat(oc(
                                                    "executeRequest"), " Attempt ").concat(n + 1,
                                                    " failed without response: ").concat(e)), r(e))
                                            })).send()
                                        }(t, u, e, n, r, i)
                                    } catch (e) {
                                        re.warn("".concat(oc("sendRequest"), " Unexpected error while posting QoS report - ").concat(e))
                                    }
                                    ae.stopTimer(K.QOS_REPORTING_PRE_FETCH_PROCESSING_DURATION), o.stop()
                                })).execute()
                            }(e, 0, 0, this.config, t)
                        }, e.prototype.updateConfig = function(e) {
                            var t = this.config.appInstanceId,
                                n = this.config.batching.period;
                            if (e) try {
                                tc()(this.config, JSON.parse(e))
                            } catch (e) {
                                re.error("".concat(ac("updateConfig"), " Config update failed: ").concat(e))
                            }
                            null === this.config.appInstanceId && (this.config.appInstanceId = (0, Hi.p)(), re.info("".concat(ac("updateConfig"),
                                    " Generated ID: ").concat(this.config.appInstanceId))), this.config.appInstanceId !== t && (re.info("".concat(
                                    ac("updateConfig"), " Started session: ").concat(this.config.appInstanceId)), this.dispatchMediaEvents()), this
                                .config.batching.period !== n && void 0 !== this.dispatchInterval && this.setDispatchInterval()
                        }, e.prototype.setDispatchInterval = function() {
                            var t = this;
                            clearInterval(this.dispatchInterval), this.dispatchInterval = setInterval((function() {
                                t.dispatchMediaEvents()
                            }), Math.max(e.MIN_DISPATCH_DELAY, this.config.batching.period))
                        }, e.BOOTSTRAP_ENDPOINT = "/Bootstrap/" + $s.SCHEMA_VERSION, e.EVENTS_ENDPOINT = "/Events/" + $s.SCHEMA_VERSION, e
                        .MIN_DISPATCH_DELAY = 1e4, e
                }(),
                cc = function() {
                    function e(e, t, n, r) {
                        var i = this;
                        this.localizationConfig = t, this.clientIdentity = n, this.clientId = r, this.getMediaEventReporter = function() {
                            return i.mediaEventReporter
                        }, this.clean = function() {
                            i.playbackEventHandler.clean(), i.networkEventHandler.clean(), i.deviceEventHandler.clean(), i.audioEventHandler
                                .clean(), i.contentEventHandler.clean(), i.acquisitionEventHandler.clean(), i.displayEventHandler.clean(), i
                                .timedTextEventHandler.clean(), i.trackEventHandler.clean(), i.adIdentifierHandler.clean(), i.errorEventHandler
                                .clean(), i.failoverEventHandler.clean(), i.interactionEventHandler.clean(), i.playerHeuristicEventHandler
                                .clean(), i.deviceFulfillmentEventHandler.clean(), i.mediaEventReporter.stop()
                        }, this.initialize(e)
                    }
                    return e.prototype.reportAcquisition = function(e, t, n, r) {
                        this.acquisitionEventHandler.reportAcquisition(e, t, n, r)
                    }, e.prototype.initialize = function(e) {
                        var t = this.localizationConfig.marketplaceId,
                            n = $s.getReportingServiceUrlFromMarketplaceId(t);
                        this.mediaEventReporter = new sc(n), this.deviceEventHandler = new Ss(this.mediaEventReporter, this.clientIdentity),
                            this.networkEventHandler = new Gs(this.mediaEventReporter), this.displayEventHandler = new Os(this
                                .mediaEventReporter), this.audioEventHandler = new Is(this.mediaEventReporter), this.contentEventHandler =
                            new bs(this.mediaEventReporter), this.errorEventHandler = new Ms(this.mediaEventReporter), this
                            .playbackEventHandler = new qs(this.mediaEventReporter, e, this.clientId), this.acquisitionEventHandler = new cs(
                                this.mediaEventReporter), this.timedTextEventHandler = new Qs(this.mediaEventReporter), this.trackEventHandler =
                            new Xs(this.mediaEventReporter), this.adIdentifierHandler = new ps(this.mediaEventReporter), this
                            .failoverEventHandler = new ks(this.mediaEventReporter), this.interactionEventHandler = new Hs(this
                                .mediaEventReporter), this.playerHeuristicEventHandler = new Ys(this.mediaEventReporter), this
                            .deviceFulfillmentEventHandler = new As(this.mediaEventReporter), this.mediaEventReporter.init((function() {
                                ts.emit(void 0)
                            }))
                    }, e
                }(),
                uc = {
                    timeRemaining: new is(0),
                    refMarker: new os(1, 64)
                },
                lc = function() {
                    function e() {}
                    return e.createInterfaceEvent = function(e, t, n) {
                        return "NextUpCard" === n._type && rs.validate(n, uc), {
                            _type: "Interface",
                            body: {
                                state: e,
                                source: t,
                                component: n
                            }
                        }
                    }, e
                }(),
                dc = ne("LivingRoomMetricsReportingFeature"),
                pc = function() {
                    function e(e) {
                        this.version = "0.0.1", this.mediaEventHandler = e, this.objectId = "LivingRoom-Metrics-".concat((0, or.v4)())
                    }
                    return e.prototype.reportRemote = function() {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            return (0, s.__generator)(this, (function(e) {
                                return [2, Promise.resolve()]
                            }))
                        }))
                    }, e.prototype.reportError = function(e, t, n, r) {
                        if (this.mediaEventHandler) {
                            var i = Ls.createErrorDetails(t),
                                o = Ls.createErrorEvent(n, r, e, i);
                            this.mediaEventHandler.getMediaEventReporter().enqueueMediaEvents([o])
                        } else re.warn("".concat(dc("reportError"), " mediaEventHandler is undefined"));
                        return Promise.resolve()
                    }, e.prototype.reportInteraction = function(e, t, n, r, i, o, a, s) {
                        if (void 0 === r && (r = null), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === a && (a = null),
                            void 0 === s && (s = null), this.mediaEventHandler) {
                            var c = Bs.createInteractionEvent(e, t, n, r, i, o, a, s);
                            this.mediaEventHandler.getMediaEventReporter().enqueueMediaEvents([c])
                        } else re.warn("".concat(dc("reportInteraction"), " mediaEventHandler is undefined"));
                        return Promise.resolve()
                    }, e.prototype.reportInterface = function(e, t, n) {
                        if (this.mediaEventHandler) {
                            var r = lc.createInterfaceEvent(e, t, n);
                            this.mediaEventHandler.getMediaEventReporter().enqueueMediaEvents([r])
                        } else re.warn("".concat(dc("reportInterface"), " mediaEventHandler is undefined"));
                        return Promise.resolve()
                    }, e.prototype.reportRating = function(e, t, n) {
                        return Promise.reject(new Error("Rating reporting is not supported on this reporter"))
                    }, e.prototype.reportAcquisition = function(e, t, n, r) {
                        return this.mediaEventHandler ? this.mediaEventHandler.reportAcquisition(e, t, n, r) : re.warn("".concat(dc(
                            "reportAcquisition"), " mediaEventHandler is undefined")), Promise.resolve()
                    }, e.prototype.reportPlayback = function(e) {
                        return "Open" === e ? Qn.emit() : "Exit" === e && es.emit(), Promise.resolve()
                    }, e.prototype.setDisplayMode = function(e) {
                        return re.warn("".concat(dc("setDisplayMode"), " Not needed for LivingRoom client ReportingSDK - displayMode: ").concat(
                            e)), Promise.resolve()
                    }, e.prototype.toJSON = function() {
                        return {
                            version: this.version,
                            objectId: this.objectId
                        }
                    }, e.prototype.destroy = function() {
                        this.mediaEventHandler && (this.mediaEventHandler.clean(), this.mediaEventHandler = void 0)
                    }, e
                }(),
                fc = ne("LivingRoomPlayer.default"),
                hc = function() {
                    function e(e, t, n, r) {
                        this.playerConfig = e, this.clientIdentity = n, this.applicationIdentity = r, this.version = "2019-04-15", this.Features = c
                            ._y, this.Events = c.rg, this.supportedEvents = {
                                ContentStateChange: Jn,
                                PlaybackStateChange: $n,
                                TimeDataChange: qn,
                                TimelineChange: Zn,
                                TimelineEnded: er,
                                Error: Kn,
                                ContentError: Xn,
                                PictureModeChange: $a
                            }, this.adapter = new Ga(e, t, r), ae.initialize(e.metricsClient)
                    }
                    return Object.defineProperty(e.prototype, "error", {
                        get: function() {
                            return this.adapter.getError()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "contentError", {
                        get: function() {
                            return this.adapter.getContentError()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "contentState", {
                        get: function() {
                            return this.adapter.getContentState()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "playbackState", {
                        get: function() {
                            return this.adapter.getPlaybackState()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "currentTime", {
                        get: function() {
                            return this.adapter.getCurrentTime()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "timeline", {
                        get: function() {
                            return this.adapter.getTimeline()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.getFeature = function(e, t) {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            return (0, s.__generator)(this, (function(t) {
                                switch (e) {
                                    case c._y.Stream:
                                        return this.streamFeature || (this.streamFeature = new Ya(this.adapter
                                            .onAudioStreamMatchersChange, this.adapter
                                            .onTimedTextStreamMatchersChange)), [2, this.streamFeature];
                                    case c._y.MetricsReporting:
                                        return this.metricsReportingFeature || (this.metricsReportingFeature = new pc(
                                            new cc(this.adapter.getCurrentTimelineType, this.playerConfig
                                                .localizationConfig, this.clientIdentity, this.playerConfig
                                                .clientId))), [2, this.metricsReportingFeature];
                                    case c._y.AdReporting:
                                        return this.adReportingFeature || (this.adReportingFeature = new Ja), [2, this
                                            .adReportingFeature
                                        ];
                                    default:
                                        throw new Error("Feature '".concat(c._y[e], "' is currently unsupported."))
                                }
                                return [2]
                            }))
                        }))
                    }, e.prototype.load = function(e) {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            return (0, s.__generator)(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.adapter.load(f()(e))];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            }))
                        }))
                    }, e.prototype.unload = function() {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            return (0, s.__generator)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.adapter.stop()];
                                    case 1:
                                        return e.sent(), [4, this.adapter.destroy()];
                                    case 2:
                                        return e.sent(), this.streamFeature && (this.streamFeature.destroy(), this
                                                .streamFeature = void 0), l.b.getInstance().isFeatureEnabled(d.L
                                                .ENABLE_QOS_PLAYBACK_OPEN_EXIT_REPORTING) || es.emit(), this
                                            .adReportingFeature && (this.adReportingFeature.destroy(), this
                                                .adReportingFeature = void 0), [2]
                                }
                            }))
                        }))
                    }, e.prototype.start = function(e) {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            return (0, s.__generator)(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.adapter.start(e)];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            }))
                        }))
                    }, e.prototype.pause = function() {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            return (0, s.__generator)(this, (function(e) {
                                return this.adapter.pause(), [2]
                            }))
                        }))
                    }, e.prototype.play = function() {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            var e;
                            return (0, s.__generator)(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.contentState !== c.Mi.Unloaded ? [3, 1] : (e = new Error(
                                            "Invalid content state: ".concat(this.contentState)), re.error(""
                                            .concat(fc("play"), " ").concat(e)), Kn.emit(e), [3, 3]);
                                    case 1:
                                        return [4, this.adapter.play()];
                                    case 2:
                                        t.sent(), t.label = 3;
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.seek = function(e, t) {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            return (0, s.__generator)(this, (function(n) {
                                return this.adapter.seek(e, t), [2]
                            }))
                        }))
                    }, e.prototype.setPlaybackRate = function(e) {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            return (0, s.__generator)(this, (function(e) {
                                return [2]
                            }))
                        }))
                    }, e.prototype.on = function(e, t) {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            var n;
                            return (0, s.__generator)(this, (function(r) {
                                return (n = this.supportedEvents[e]) ? (n.subscribe(t), [2]) : (re.error("".concat(fc(
                                    "on"), " Attempt to subscribe to an unknown event: ").concat(e)), [2])
                            }))
                        }))
                    }, e.prototype.once = function(e, t) {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            var n;
                            return (0, s.__generator)(this, (function(r) {
                                return (n = this.supportedEvents[e]) ? (n.once(t), [2]) : (re.error("".concat(fc(
                                    "once"), " Attempt to subscribe to an unknown event: ").concat(e)), [2])
                            }))
                        }))
                    }, e.prototype.off = function(e, t) {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            var n;
                            return (0, s.__generator)(this, (function(r) {
                                return (n = this.supportedEvents[e]) ? (n.unsubscribe(t), [2]) : (re.error("".concat(fc(
                                    "off"), " Attempt to unsubscribe from an unknown event: ").concat(e)), [2])
                            }))
                        }))
                    }, e.prototype.destroy = function() {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            return (0, s.__generator)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.unload()];
                                    case 1:
                                        return e.sent(), this.metricsReportingFeature && (this.metricsReportingFeature
                                                .destroy(), this.metricsReportingFeature = void 0), qn.unsubscribeAll(),
                                            Jn.unsubscribeAll(), $n.unsubscribeAll(), Zn.unsubscribeAll(), er
                                            .unsubscribeAll(), Kn.unsubscribeAll(), Xn.unsubscribeAll(), $a
                                            .unsubscribeAll(), [2]
                                }
                            }))
                        }))
                    }, e
                }(),
                mc = hc,
                gc = ne("LivingRoomPlayerCapabilities"),
                vc = {
                    maxVideoOutputResolution: {
                        width: 0,
                        height: 0
                    },
                    hdrFormats: [],
                    hdcpStatus: c.KK.Unknown,
                    videoCodecs: [],
                    verifiedSecurePipeline: !1,
                    supportedPictureModes: [c.$v.None]
                },
                yc = function() {
                    function e() {
                        var e = this;
                        this.playerCapabilities = vc, this.onPlayerCapabilitiesUpdate = function(t) {
                            re.info("".concat(gc("onPlayerCapabilitiesUpdate"), " received player capabilities update ").concat(JSON.stringify(
                                t))), e.playerCapabilities = (0, s.__assign)((0, s.__assign)({}, e.playerCapabilities), {
                                hdcpStatus: e.mapHdcpVersion(t.hdcpVersion)
                            })
                        }, x.subscribe(this.onPlayerCapabilitiesUpdate)
                    }
                    return e.prototype.destroy = function() {
                        return (0, s.__awaiter)(this, void 0, void 0, (function() {
                            return (0, s.__generator)(this, (function(e) {
                                return x.unsubscribe(this.onPlayerCapabilitiesUpdate), [2]
                            }))
                        }))
                    }, e.prototype.getDeviceCapabilities = function() {
                        return Promise.resolve([this.playerCapabilities])
                    }, e.prototype.on = function(e, t) {}, e.prototype.off = function(e, t) {}, e.prototype.mapHdcpVersion = function(e) {
                        if (!e) return re.warn("".concat(gc("mapHdcpVersion"), " received undefined HDCP")), c.KK.Unknown;
                        var t = Math.min(e.minor, 2);
                        switch (e.major) {
                            case 0:
                                return c.KK.None;
                            case 1:
                                return c.KK.V1;
                            case 2:
                                switch (t) {
                                    case 1:
                                        return c.KK.V2_1;
                                    case 2:
                                        return c.KK.V2_2
                                }
                                return c.KK.V2;
                            default:
                                return re.warn("".concat(gc("mapHdcpVersion"), " received unknown HDCP version ").concat(e.major, " ").concat(
                                    t)), c.KK.Unknown
                        }
                    }, e
                }(),
                Ec = function() {
                    function e(e) {
                        this.playerSDKConfig = e, this.version = "2019-04-15", this.playerCapabilities = new yc, this.authContextWrapper = new u(e
                            .authContext)
                    }
                    return e.prototype.getFeature = function(e, t) {
                        return (0, s.__awaiter)(this, void 0, Promise, (function() {
                            return (0, s.__generator)(this, (function(n) {
                                switch (e) {
                                    case c._p.Player:
                                        if (!t) throw new Error("Config required to initialise Player");
                                        return this.player = new mc(t, this.authContextWrapper, this.playerSDKConfig
                                            .clientIdentity, this.playerSDKConfig.applicationIdentity), [2, this
                                            .player
                                        ];
                                    case c._p.PlayerCapabilities:
                                        return [2, Promise.resolve(this.playerCapabilities)];
                                    default:
                                        throw new Error("Unknown feature ".concat(e))
                                }
                                return [2]
                            }))
                        }))
                    }, e.prototype.getServiceClientConfig = function() {
                        return Promise.resolve({
                            deviceID: "",
                            deviceProxyUrl: "",
                            deviceTypeID: "",
                            gascEnabled: !0
                        })
                    }, e.prototype.setAuthContext = function(e) {
                        return this.authContextWrapper.setAuthContext(e), Promise.resolve()
                    }, e.prototype.destroy = function() {
                        return (0, s.__awaiter)(this, void 0, void 0, (function() {
                            return (0, s.__generator)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.player ? [4, this.player.destroy()] : [3, 2];
                                    case 1:
                                        e.sent(), e.label = 2;
                                    case 2:
                                        return this.playerCapabilities ? [4, this.playerCapabilities.destroy()] : [3,
                                        4];
                                    case 3:
                                        e.sent(), e.label = 4;
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, e
                }(),
                Tc = n(9869),
                Pc = n(58508),
                Cc = n(88280),
                Ic = n(5371),
                _c = n(47169),
                Rc = n(37310),
                bc = n(38913),
                Sc = n(11597),
                Ac = n(74090),
                Oc = (0, bc.P)("getPlayerSDKConfig"),
                Nc = {
                    bootstrap: function() {
                        (0, s.__awaiter)(void 0, void 0, Promise, (function() {
                            var e, t, n, r, i, o, c, u, l, d, p;
                            return (0, s.__generator)(this, (function(f) {
                                switch (f.label) {
                                    case 0:
                                        return [4, Ic.ZP.getAuthContext()];
                                    case 1:
                                        return e = f.sent(), t = Pc.LK.getInstance(), n = t.deviceId, r = t.deviceTypeId,
                                            i = Cc.XL.getInstance().getLocalizationConfiguration().marketplaceId, o = _c.Z
                                            .getBundleVersion(), c = {
                                                name: "LivingRoomClient",
                                                version: o
                                            }, u = Rc.Fe.getInstance().terminatorId, l = function() {
                                                try {
                                                    return Sc.F.getInstance().getAdParameters()
                                                } catch (e) {
                                                    return a.ZP.warn("".concat(Oc("getAdParameters"),
                                                        " An exception occured while trying to retreive playback ad parameters, omitting ad parameters from config: "
                                                        ).concat(e)), {}
                                                }
                                            }(), d = (0, s.__assign)({
                                                name: "Prime Video",
                                                version: void 0
                                            }, l), p = Ac.Gb.getInstance().isRustCollectionsEnabled() ?
                                            "LivingRoomClient-Rust" : "LivingRoomClient-JS", [2, {
                                                authContext: e,
                                                debug: void 0,
                                                deviceId: n,
                                                deviceTypeId: r,
                                                marketplaceId: i,
                                                clientIdentity: c,
                                                route: u,
                                                applicationIdentity: d,
                                                uiIdentity: {
                                                    name: p,
                                                    version: o || "undefined"
                                                }
                                            }]
                                }
                            }))
                        })).then((function(e) {
                            var t = new Ec(e);
                            Tc.x.setPlayerSDK(t), Tc.x.createPlayer().then((function() {
                                a.ZP.info("Player initialized")
                            })).catch((function(e) {
                                a.ZP.error("Player init failed: ".concat(e.message))
                            }))
                        }))
                    },
                    onAppConfigUpdated: function(e) {
                        e && (a.ZP.info("Marketplace changed, recreating playerSDK and player."), Tc.x.destroyPlayerSDK().then(Nc.bootstrap))
                    }
                };

            function Lc() {
                Nc.bootstrap(), o.y.subscribe((function(e) {
                    var t = e.marketplaceIdChanged;
                    Nc.onAppConfigUpdated(t)
                }))
            }
        },
        88286: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                onAppReady: function() {
                    return Ee
                }
            });
            var r, i = n(70655),
                o = n(26018),
                a = n(3444),
                s = n(55146),
                c = n(3821),
                u = n(46255),
                l = n(1293),
                d = n(88280),
                p = n(48690),
                f = n(74192),
                h = n(77594),
                m = n(47169),
                g = n(24807),
                v = n(10984),
                y = n(42125),
                E = n(14213),
                T = n(48837),
                P = n(6419),
                C = n(76132),
                I = n(87361),
                _ = n(30690),
                R = n(74090),
                b = n(53706),
                S = "MemoryUsage",
                A = "JSHeapSize",
                O = "NativeBootstrapFatal",
                N = function() {
                    return (0, i.__awaiter)(void 0, void 0, Promise, (function() {
                        return (0, i.__generator)(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return x(), U(), M(), B(), L(), G(), H(), F(), D(), w(), k(), g.Z
                                        .isAbnormalExitReportingEnabled() ? [4, g.Z.reportAbnormalExit()] : [3, 2];
                                case 1:
                                    e.sent(), e.label = 2;
                                case 2:
                                    return [4, g.Z.reportApplicationLaunchRecovery()];
                                case 3:
                                    return e.sent(), [4, f.ZP.reportStartAbandonment()];
                                case 4:
                                    return e.sent(), E.Z.isInBackground() || g.Z.enableCrashTracking(
                                        "reportMetricsAfterInitialization"), v.LK.getInstancePromise().then((function(
                                    e) {
                                        e.nativeVersion && a.H.setItem(g.U, e.nativeVersion)
                                    })), [2]
                            }
                        }))
                    }))
                },
                L = function() {
                    u.y.info("isExitAppSupported: ".concat((0, s.YK)()), {
                        reportOwner: l.R.LRAPS
                    })
                },
                M = function() {
                    var e = (0, y.e)();
                    u.y.info("App launched with launchReason: ".concat(e), l.R.LRAPS), u.y.metric("Bootstrap.LaunchReason", 1, {
                        customContext: {
                            appLaunchReason: e
                        },
                        reportOwner: l.R.LRAPS
                    })
                },
                D = function() {
                    u.y.metric("ApplicationLaunchSuccess", 1, {
                        reportOwner: l.R.LRAPS,
                        customContext: {
                            appLayer: "AVLRC",
                            launchReason: (0, y.e)(),
                            lifecycleState: E.Z.getAppLifeCycleState(),
                            bundleVersion: m.Z.getBundleVersion() || ""
                        }
                    }), u.y.info("The application launched successfully.", l.R.LRAPS)
                },
                w = function() {
                    u.y.info("isRustAppEnabled=".concat((0, b.R)(), " Profiles=").concat(R.Gb.getInstance().isRustProfileSelectionEnabled(),
                        " Collections=").concat(R.Gb.getInstance().isRustCollectionsEnabled(), " Details=").concat(R.Gb.getInstance()
                        .isRustDetailsEnabled(), " Search=").concat(R.Gb.getInstance().isRustSearchEnabled()), l.R.LRAPS)
                },
                k = function() {
                    return (0, i.__awaiter)(void 0, void 0, void 0, (function() {
                        var e;
                        return (0, i.__generator)(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, a.H.getItem(O)];
                                case 1:
                                    return (e = t.sent()) && (u.y.metric("ApplicationLaunchSuccess", 0, {
                                        reportOwner: l.R.LRAPS,
                                        customContext: {
                                            appLayer: "NativeBootstrap"
                                        }
                                    }), u.y.error("Native Bootstrap failed to launch on previous app sessions", {
                                        reportOwner: l.R.LRAPS,
                                        exceptionMessage: e
                                    }), a.H.removeItem(O).catch((function() {}))), [2]
                            }
                        }))
                    }))
                },
                F = function() {
                    var e = (0, C.K)();
                    e || (u.y.metric("Bootstrap.DeviceTimeSyncError", 1, l.R.LRAPS), null === e && u.y.metric(
                        "Bootstrap.DeviceTimeSyncError.NullSyncFlag", 1, l.R.LRAPS))
                },
                x = function() {
                    var e = v.LK.getInstance().osLocale;
                    e && u.y.metric("Bootstrap.OSLocale", 1, {
                        customContext: {
                            osLocale: e
                        },
                        reportOwner: l.R.LRAPS
                    })
                },
                U = function() {
                    var e = T.vQ.getInstance().locale,
                        t = d.XL.getInstance().getLocalizationConfiguration().videoCountryOfRecord;
                    e && (I.c.metric("Debug", 1, {
                        metric: "AppLaunch.Locale",
                        context: e
                    }), u.y.info("App launched with locale: ".concat(e), l.R.LRAPS), u.y.metric("Bootstrap.AppLaunchLocale", 1, {
                        customContext: t && ["SA", "EG", "AE", "IL"].indexOf(t) > -1 ? {
                            appLaunchLocale: e,
                            VCR: t
                        } : {
                            appLaunchLocale: e
                        },
                        reportOwner: l.R.LRAPS
                    }))
                },
                B = function() {
                    return (0, i.__awaiter)(void 0, void 0, void 0, (function() {
                        var e, t;
                        return (0, i.__generator)(this, (function(n) {
                            return e = p.fK.getInstance().hasRestarted(), h.x.jsUsedHeapSize && u.y.metric(A, h.x
                                .jsUsedHeapSize, {
                                    reportOwner: l.R.LRAPS,
                                    customContext: {
                                        isRestart: e ? "true" : "false",
                                        phase: "PreBootstrap"
                                    }
                                }), h.x.residentSetSize && u.y.metric(S, h.x.residentSetSize, {
                                reportOwner: l.R.LRAPS,
                                customContext: {
                                    isRestart: e ? "true" : "false",
                                    phase: "PreBootstrap"
                                }
                            }), (t = c.Sj.getMemory()).jsUsedHeapSize && u.y.metric(A, t.jsUsedHeapSize, {
                                reportOwner: l.R.LRAPS,
                                customContext: {
                                    isRestart: e ? "true" : "false",
                                    phase: "PostBootstrap"
                                }
                            }), t.residentSetSize && u.y.metric(S, t.residentSetSize, {
                                reportOwner: l.R.LRAPS,
                                customContext: {
                                    isRestart: e ? "true" : "false",
                                    phase: "PostBootstrap"
                                }
                            }), u.y.info("Bootstrap finished memory metrics (.".concat(e ? "Restart" : "ColdStart",
                                "): JS heap size - ").concat((t.jsUsedHeapSize || 0) / 1024,
                                ", resident set size - ").concat((t.residentSetSize || 0) / 1024), l.R.LRAPS), [2]
                        }))
                    }))
                },
                H = function() {
                    var e = {
                        initialLaunchReason: (0, y.e)(),
                        startUpDeepLinkRefMarker: P.o_() || "Not Available",
                        clientBucket: m.Z.getStage()
                    };
                    _.Z.log("App Startup Information: ".concat(JSON.stringify(e)))
                },
                G = function() {
                    var e = v.LK.getInstance(),
                        t = {
                            chipset: e.chipset,
                            modelName: e.modelName,
                            manufacturer: e.manufacturer,
                            avpkVersion: e.avpkVersion || "Not Available",
                            firmwareVersion: e.firmwareVersion,
                            deviceTypeId: e.deviceTypeId
                        };
                    _.Z.log("Device Information: ".concat(JSON.stringify(t))), u.y.info(e.osName, {
                        reportOwner: l.R.FIRETV,
                        tags: ["OS_NAME"]
                    })
                },
                W = n(2914),
                V = n(40110),
                K = n(48105),
                Z = n(90715),
                q = function() {
                    W.v.subscribe((function(e) {
                        var t, n, r = [],
                            i = null === (t = e.appContext) || void 0 === t ? void 0 : t.screen;
                        if (e.type === W.A.SCREEN_CHANGED && i && -1 !== Object.values(Z.s4).indexOf(i)) {
                            var o = null === (n = e.appContext) || void 0 === n ? void 0 : n.state;
                            r = o && Z.Je[i] && Z.Je[i].has(o) ? [i, "".concat(i, ".").concat(o)] : [i]
                        } else r = ["Other"];
                        ! function(e) {
                            (0, V.P)(e), (0, K.G)(e)
                        }(r)
                    }))
                },
                Y = n(66180),
                z = n(84390),
                j = "AsyncStorageErasure",
                Q = "SecureStorageErasure",
                X = "1",
                J = function(e) {
                    return (0, i.__awaiter)(void 0, void 0, void 0, (function() {
                        return (0, i.__generator)(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return "Async" !== e ? [3, 2] : [4, a.H.setItem(j, X)];
                                case 1:
                                    return t.sent(), [3, 4];
                                case 2:
                                    return [4, z.PF.setItem(Q, X)];
                                case 3:
                                    t.sent(), t.label = 4;
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                },
                $ = function() {
                    setTimeout((function() {
                        E.Z.isInBackground() || (0, i.__awaiter)(void 0, void 0, void 0, (function() {
                            var e, t, n, r, o;
                            return (0, i.__generator)(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return [4, Promise.all([a.H.getItem(j), z.PF.getItem(Q)])];
                                    case 1:
                                        return e = i.__read.apply(void 0, [s.sent(), 2]), t = e[0], n = e[1],
                                            r = n === X, o = t === X, null === t && null === n ? u.y.metric(
                                                "StorageErasureKeysUnavailable", 1, l.R.LRAPS) : null === t ? (u
                                                .y.metric("UnexpectedErasure", 1, {
                                                    customContext: {
                                                        type: "Async"
                                                    },
                                                    reportOwner: l.R.LRAPS
                                                }), u.y.info("Async storage has been unexpectedly cleared.", l.R
                                                    .LRAPS)) : null === n ? (u.y.metric("UnexpectedErasure",
                                            1, {
                                                customContext: {
                                                    type: "Secure"
                                                },
                                                reportOwner: l.R.LRAPS
                                            }), u.y.info("Secure storage has been unexpectedly cleared.", l
                                                .R.LRAPS)) : n === X && t === X || u.y.info(
                                                "Storage erasure values corrupted. [Secure: ".concat(n,
                                                    ", Async: ").concat(t, "]"), l.R.LRAPS), [2, {
                                                secureValueAsExpected: r,
                                                asyncValueAsExpected: o
                                            }]
                                }
                            }))
                        })).then((function(e) {
                            return (0, i.__awaiter)(void 0, void 0, void 0, (function() {
                                return (0, i.__generator)(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return e.asyncValueAsExpected ? [3, 2] : [4, J(
                                            "Async")];
                                        case 1:
                                            t.sent(), t.label = 2;
                                        case 2:
                                            return e.secureValueAsExpected ? [3, 4] : [4, J(
                                                "Secure")];
                                        case 3:
                                            t.sent(), t.label = 4;
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))
                        })).catch((function(e) {
                            u.y.info("Storage clearance checks failed due to: ".concat((0, Y.vz)(e), "."), l.R.LRAPS)
                        }))
                    }), 3e5)
                },
                ee = n(5371),
                te = n(37196),
                ne = n(82283),
                re = n(31682),
                ie = n(18251),
                oe = n(5609),
                ae = n(44732),
                se = n(77209),
                ce = n(19024),
                ue = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.transformName = "notification/criticalNotification", t
                    }
                    return (0, i.__extends)(t, e), t.prototype.call = function(t) {
                        var n = new se.G([], (0, oe.i5)());
                        return e.prototype.call.call(this, t, {
                            headers: n
                        })
                    }, t.prototype.getHttpClient = function() {
                        return new ce.P(ne.Z.deviceProxyClient(), this.transformName)
                    }, t.prototype.getUrl = function(e) {
                        var t, n, r = (0, ae.Fd)(),
                            o = (0, ae.Vu)(),
                            a = [
                                ["featureScheme", r],
                                ["dynamicFeatures", (0, ae.fe)()],
                                ["decorationScheme", o],
                                ["widgetScheme", ae.YF.LRC_CRITICAL_NOTIFICATION_V1]
                            ],
                            s = v.LK.getInstance().osLocale;
                        s && a.push(["osLocale", s]);
                        try {
                            for (var c = (0, i.__values)(Object.entries(e)), u = c.next(); !u.done; u = c.next()) {
                                var l = (0, i.__read)(u.value, 2),
                                    d = l[0],
                                    p = l[1];
                                d && null != p && a.push([d, p])
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                u && !u.done && (n = c.return) && n.call(c)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return new re.Z("", a).buildQueryParamsOnly()
                    }, t.prototype.getHttpMethod = function() {
                        return ie.Z.GET
                    }, t
                }(n(75950).r),
                le = ue,
                de = "DMA.Request",
                pe = "ConsentRetrieve",
                fe = function() {
                    return (0, i.__awaiter)(void 0, void 0, Promise, (function() {
                        var e, t;
                        return (0, i.__generator)(this, (function(n) {
                            return e = new le, t = u.y.metricTimer("".concat(de, ".Latency"), {
                                reportOwner: l.R.DPAC,
                                customContext: {
                                    Action: pe
                                }
                            }).start(), [2, e.call({
                                pageId: "appstart",
                                pageType: "criticalNotification"
                            }).then((function(e) {
                                (0, te.Kt)(e), u.y.metric("".concat(de, ".Success"), 1, {
                                    reportOwner: l.R.DPAC,
                                    customContext: {
                                        Action: pe
                                    }
                                }), t.stop()
                            })).catch((function(e) {
                                var n, r, i = null === (n = null == e ? void 0 : e.response) || void 0 ===
                                    n ? void 0 : n.status.toString(),
                                    o = null === (r = null == e ? void 0 : e.response) || void 0 === r ?
                                    void 0 : r.statusText.toString();
                                t.clear(), u.y.metric("".concat(de, ".Failure"), 1, {
                                    reportOwner: l.R.DPAC,
                                    customContext: {
                                        Action: pe
                                    }
                                }), u.y.error("Failed to get critical notification: ".concat(i, " ")
                                    .concat(o), l.R.DPAC)
                            }))]
                        }))
                    }))
                },
                he = function() {
                    return (0, i.__awaiter)(void 0, void 0, Promise, (function() {
                        return (0, i.__generator)(this, (function(e) {
                            return !R.Gb.getInstance().isRustCollectionsEnabled() && (ee.ZP.addStateChangeHandler(
                                "SignedIn", fe), ee.ZP.isLastKnownStateUserSignedIn()) ? [2, fe()] : [2]
                        }))
                    }))
                },
                me = n(76303),
                ge = 0,
                ve = function() {
                    (r = c.Sj.getMemory().jsUsedHeapSize) && ye(r, r, 0), setInterval((function() {
                        if (ge += 20, !E.Z.isInBackground()) {
                            var e = c.Sj.getMemory().jsUsedHeapSize;
                            e && r && ye(e, r, ge)
                        }
                    }), 12e5)
                },
                ye = function(e, t, n) {
                    u.y.info("jsUsedHeapMemory=".concat(e, " ").concat(e / t, "x at ").concat(n, "mins"), l.R.LRAPS), u.y.metric(
                        "JSUsedHeapSizeIncrease", e - t, {
                            reportOwner: l.R.LRAPS,
                            customContext: {
                                appUptimeBucket: (0, me.J)()
                            }
                        })
                };

            function Ee() {
                return function() {
                    (0, i.__awaiter)(this, void 0, Promise, (function() {
                        return (0, i.__generator)(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, (0, o.S1)()];
                                case 1:
                                    return e.sent(), q(), $(), ve(), a.H.purgeLivePageKeys(), he(), N(),
                                        function() {
                                            (0, i.__awaiter)(this, void 0, Promise, (function() {
                                                return (0, i.__generator)(this, (function(e) {
                                                    return [2]
                                                }))
                                            }))
                                        }(), [2]
                            }
                        }))
                    }))
                }(), Promise.resolve()
            }
        },
        48564: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addDeviceInformationToLogger: function() {
                    return d
                }
            });
            var r = n(70655),
                i = n(46255);

            function o(e) {
                var t, n = function(e) {
                    return {
                        A3VN4E5F7BBC7S: e.model,
                        A2SNKIF736WF4T: "GooglePlay",
                        A3REWRVYBYPKUM: "Hisense"
                    }
                }(e);
                return null !== (t = n[e.deviceTypeId]) && void 0 !== t ? t : e.chipset
            }
            var a = n(18192),
                s = n(1293),
                c = n(3444),
                u = n(10984),
                l = n(33578);

            function d() {
                return (0, r.__awaiter)(this, void 0, Promise, (function() {
                    var e;
                    return (0, r.__generator)(this, (function(t) {
                        return e = u.LK.getInstance().deviceId, p(e), i.y.setup().setContext({
                            deviceId: e,
                            deviceTypeId: u.LK.getInstance().deviceTypeId,
                            nativeVersion: u.LK.getInstance().nativeVersion,
                            avpkVersion: u.LK.getInstance().avpkVersion,
                            firmwareVersion: u.LK.getInstance().firmwareVersion,
                            chipset: u.LK.getInstance().chipset,
                            model: u.LK.getInstance().modelName,
                            platformPackageVersion: u.LK.getInstance().platformPackageVersion,
                            osName: u.LK.getInstance().osName,
                            reducedMetricGroup: o({
                                deviceTypeId: u.LK.getInstance().deviceTypeId,
                                model: u.LK.getInstance().modelName,
                                chipset: u.LK.getInstance().chipset
                            })
                        }, a.E.APPLY_ON_UPLOAD), [2]
                    }))
                }))
            }
            var p = function(e) {
                var t, n = null === (t = (0, l.Y)()) || void 0 === t ? void 0 : t.replace(/-/g, ""),
                    r = Date.now();
                c.H.getItem("device_id").then((function(t) {
                    i.y.info("DSN-V4 ".concat(e, ":").concat(t, ":").concat(n, ":").concat(Date.now() - r), {
                        reportOwner: s.R.LORE,
                        reportId: "DeviceIdInfo"
                    })
                })).catch((function(t) {
                    i.y.info("DSN-V4 ".concat(e, ":Error(").concat(String(t), "):").concat(n, ":").concat(Date.now() - r), {
                        reportOwner: s.R.LORE,
                        reportId: "DeviceIdInfo"
                    })
                }))
            }
        },
        21324: function(e, t, n) {
            "use strict";
            n.r(t), t.default = function() {
                return Promise.resolve()
            }
        },
        21975: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initializeLRPLogger: function() {
                    return m
                }
            });
            var r, i = n(70655),
                o = n(7618),
                a = n(47275),
                s = n(72562),
                c = n(84243),
                u = "".concat("https://unagi-na.amazon.com", "/1/events/").concat("com.amazon.eel.IgnitionX.logs.prod"),
                l = {
                    pluggableRetryOptions: {
                        backoffOptions: {
                            maxAttempts: 3,
                            initialIntervalMs: 1e3,
                            exponentialFactor: 2,
                            statusCodeBasedRetryBehaviorDefinition: (new s.sG).withCode(0, !0).withCode(429, !0).withCode(503, !0)
                        },
                        metricPivots: ["LRAKLogger"]
                    }
                },
                d = function() {
                    function e(e) {
                        this.enabled = !1;
                        var t = new o.Cf(u, 500, 6e4, l);
                        t.logLevel = o.in.INFO, t.metricPrefix = "LRPLogger.HttpBufferTransporter", t.logResults = !1, this.httpTransporter = t, t
                            .setTransformer((function(e) {
                                return JSON.stringify({
                                    events: e.map((function(e) {
                                        return {
                                            data: e
                                        }
                                    }))
                                })
                            })), this.logger = new o.Yd([this.httpTransporter], e, (function(e) {
                                a.InternalLogger.error("Failed to start up internal logger, got: ".concat(e))
                            })), this.logger.logLevel = o.in.INFO
                    }
                    return e.prototype.isEnabled = function() {
                        return this.enabled
                    }, e.prototype.disable = function() {
                        c.rK.inject(a.NullLogger), a.LoggerProxyModule.injectPlatformLogger(a.NullLogger), this.enabled = !1
                    }, e.prototype.enable = function() {
                        var e = this.logger;
                        c.rK.inject({
                            debug: function(t, n) {
                                for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                                e.debug("[".concat(t, "] ").concat(n))
                            },
                            info: function(t, n) {
                                for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                                e.info("[".concat(t, "] ").concat(n))
                            },
                            warn: function(t, n) {
                                for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                                e.warn("[".concat(t, "] ").concat(n))
                            },
                            error: function(t, n) {
                                for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                                e.error("[".concat(t, "] ").concat(n))
                            }
                        }), this.enabled = !0
                    }, e
                }(),
                p = n(47169),
                f = n(10984),
                h = n(34118);

            function m() {
                return (0, i.__awaiter)(this, void 0, Promise, (function() {
                    return (0, i.__generator)(this, (function(e) {
                        var t, n, i, o, a;
                        return a = r, (n = ["Flavor: ".concat(p.Z.getBundleFlavor()), "Stage: ".concat(p.Z.getStage())],
                            i = ["Bytecode Version: ".concat(f.LK.getInstance().bytecodeVersion), "OS Name: ".concat(f
                                .LK.getInstance().osName), "Media Player: ".concat(f.LK.getInstance().playerName)], o =
                            n.concat(i), t = {
                                appName: "Prime Video",
                                appVersion: p.Z.getBundleVersion(),
                                tags: o,
                                marketplaceId: (0, h.B)(),
                                deviceId: f.LK.getInstance().deviceId,
                                deviceTypeId: f.LK.getInstance().deviceTypeId,
                                nativeVersion: f.LK.getInstance().nativeVersion,
                                firmwareVersion: f.LK.getInstance().firmwareVersion,
                                chipset: f.LK.getInstance().chipset,
                                manufacturer: f.LK.getInstance().manufacturer
                            }, a = r = new d(t)).isEnabled() || a.enable(), [2]
                    }))
                }))
            }
        },
        30226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n(70655),
                i = n(3821),
                o = n(93586),
                a = n(46255),
                s = n(1293),
                c = n(1541),
                u = n(5371),
                l = n(93174),
                d = n(89875),
                p = n(74046),
                f = n(16177),
                h = n(6419),
                m = n(76004),
                g = n(11905),
                v = n(29055),
                y = n(55831),
                E = n(30996),
                T = n(55175),
                P = n(76410),
                C = n(74090),
                I = ["Preconditions"];

            function _() {
                return (0, r.__awaiter)(this, void 0, void 0, (function() {
                    return (0, r.__generator)(this, (function(e) {
                        return i.Sj.mark(o.Od.Bootstrap_FetchProfiles_Start), [2, R().finally((function() {
                            i.Sj.mark(o.Od.Bootstrap_FetchProfiles_End)
                        }))]
                    }))
                }))
            }
            var R = function() {
                return (0, r.__awaiter)(void 0, void 0, Promise, (function() {
                    var e;
                    return (0, r.__generator)(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return u.ZP.isLastKnownStateUserSignedIn() ? [3, 1] : (f.ZP.info(
                                    "User is signed out, not attempting to fetch the list of associated profiles",
                                    I), [3, 5]);
                            case 1:
                                return (0, v.H)() ? [3, 2] : (f.ZP.info(
                                    "Profiles feature is not enabled, not attempting to fetch the list of associated profiles",
                                    I), [3, 5]);
                            case 2:
                                return (e = (0, d.Jt)()) ? [4, (0, p.sW)()] : [3, 4];
                            case 3:
                                e = t.sent(), t.label = 4;
                            case 4:
                                if (!e) return C.Gb.getInstance().isSterlingProfilesEnabled() && (0, r.__awaiter)(
                                    void 0, void 0, void 0, (function() {
                                        var e, t;
                                        return (0, r.__generator)(this, (function(n) {
                                            switch (n.label) {
                                                case 0:
                                                    return [4, h.wL()];
                                                case 1:
                                                    return null !== (e = n.sent()) ? (a.y.info(
                                                        "Not fetching promotions as the app is being deeplinked into. "
                                                        .concat(JSON.stringify(e)), s.R
                                                        .SABR), [2]) : ((t = T.Z
                                                        .getInstance()) && (a.y.warn(
                                                        "Sending RPC message to WASM to fetch promotions.",
                                                        s.R.SABR), t.makeCall({
                                                        wasmFuncName: "fetch_promotions_via_rpc",
                                                        args: {
                                                            enabled: !0
                                                        }
                                                    }).catch((function(e) {
                                                        a.y.warn(
                                                            "Error occurred while sending RPC message to WASM to fetch promotions.",
                                                            s.R.SABR)
                                                    }))), [2])
                                            }
                                        }))
                                    })), m.AppEvents.log((0, g.G6)(c.E.JavaScript)), (0, y.Xg)(E.EW, E.g8), (0,
                                    y.fB)(l.v5.WHOS_WATCHING_LOAD_DURATION, [l.F7.OVERALL], E.g8), (0, y.fB)(l
                                    .v5.WHOS_WATCHING_LOAD_DURATION, [l.F7.OVERALL, l.J$.BOOTSTRAP], E.g8), (0,
                                    y.E3)(l.v5.WHOS_WATCHING_LOAD_DURATION, E.g8, [l.F7.STARTED]), (0, y.E3)(l
                                    .v5.WHOS_WATCHING_LOAD_DURATION, E.g8, [l.F7.STARTED, l.J$.BOOTSTRAP]), [2,
                                    (0, P.C)(!0).then((function() {})).catch((function(e) {
                                        f.ZP.error(
                                            "Error occurred whilst fetching the associated profiles. Error: "
                                            .concat(JSON.stringify(e)), I)
                                    })).finally((function() {
                                        (0, y.NK)(l.v5.WHOS_WATCHING_LOAD_DURATION, [l.F7.OVERALL]), (0,
                                            y.NK)(l.v5.WHOS_WATCHING_LOAD_DURATION, [l.F7.OVERALL, l.J$
                                            .BOOTSTRAP
                                        ])
                                    }))
                                ];
                                f.ZP.info(
                                    "Profiles feature is not enabled on FireTV Kids mode, not attempting to fetch the list of associated profiles",
                                    I), t.label = 5;
                            case 5:
                                return [2]
                        }
                    }))
                }))
            }
        },
        8389: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(45982);
            t.default = function(e, t) {
                switch (void 0 === e && (e = null), t.type) {
                    case r.i.SHOW_BACKGROUND_WINDOW:
                        return t.payload;
                    case r.i.HIDE_BACKGROUND_WINDOW:
                        return null;
                    default:
                        return e
                }
            }
        },
        89921: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                keyboardTtsMiddleware: function() {
                    return s
                }
            });
            var r = n(19770),
                i = n(97556),
                o = n(48837),
                a = n(18693),
                s = function(e) {
                    return function(t) {
                        return function(n) {
                            var s = t(n),
                                c = e.getState(),
                                u = (0, r.nf)(c),
                                l = n && n.meta && n.meta.sandbox && n.meta.sandbox && n.meta.sandbox.realm;
                            if (!u || !l) return s;
                            var d = "profileManagement" === l || "editProfileName" === l;
                            if ("search" === l) {
                                var p = c[l].keyboardState.query;
                                switch (n.type) {
                                    case a.K.BACKSPACE_QUERY:
                                        if ("" === p) {
                                            var f = o.vQ.getInstance(),
                                                h = (0, i.Xt)(f, "AV_LRC_TTS_PARTIAL_REFRESH_SEARCH_EMPTY");
                                            e.dispatch((0, r.De)(h))
                                        } else p && e.dispatch((0, r.De)(p));
                                        break;
                                    case a.K.APPEND_QUERY:
                                    case a.K.APPLY_DIACRITIC_QUERY:
                                        e.dispatch((0, r.Xz)(p))
                                }
                            } else if (d) switch (p = c[l].keyboardState.query, n.type) {
                                case a.K.BACKSPACE_QUERY:
                                    "" !== p && e.dispatch((0, r.De)(p));
                                    break;
                                case a.K.APPEND_QUERY:
                                    var m = d ? "".concat(n.payload.input, " . ").concat(p, " .") : p;
                                    e.dispatch((0, r.Xz)(m));
                                    break;
                                case a.K.APPLY_DIACRITIC_QUERY:
                                    e.dispatch((0, r.Xz)(p))
                            }
                            return s
                        }
                    }
                }
        },
        80325: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                externalInputReducer: function() {
                    return a
                }
            });
            var r = n(78701),
                i = n(18693),
                o = {
                    enabled: !1,
                    page: r.Z.EMPTY_ROUTE
                },
                a = function(e, t) {
                    return void 0 === e && (e = o), t.type === i.K.SET_EXTERNAL_INPUT_ENABLED ? t.payload : e
                }
        },
        94629: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initializeResiliencyService: function() {
                    return i
                }
            });
            var r = n(79352),
                i = function() {
                    r.S.initialize()
                }
        },
        95122: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                routeInitialPage: function() {
                    return d
                }
            });
            var r = n(70655),
                i = n(79485),
                o = n(998),
                a = n(35443),
                s = n(16177),
                c = n(8019),
                u = n(78701),
                l = n(72973),
                d = function() {
                    return (0, r.__awaiter)(void 0, void 0, void 0, (function() {
                        var e;
                        return (0, r.__generator)(this, (function(t) {
                            return o.s.getInstance().getCapability(a.W.SUPPORTS_TTS_ENGINE) ? [2, (0, l.nP)()] : (e = new i
                                .Fg, s.ZP.warn("Unsupported TTS engine detected", ["Preconditions"]), c.ZE
                                .reportDataPoint("TTSEngineNotSupported", "Preconditions", 1), e.to(u.Z.TTS_ERROR_PAGE),
                                [2, Promise.resolve()])
                        }))
                    }))
                }
        },
        20393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n(70655),
                i = n(88280),
                o = n(5371),
                a = n(92017),
                s = n(25770),
                c = n(16177),
                u = function() {
                    return a.b.getInstance().isFeatureEnabled(s.L.SECOND_SCREEN_TEST_CONNECTION) && a.b.getInstance().isFeatureEnabled(s.L
                        .SUPPORTS_SECOND_SCREEN_TEST_CONNECTION)
                },
                l = function() {
                    return a.b.getInstance().isFeatureEnabled(s.L.SECOND_SCREEN_ONBOARDING) && a.b.getInstance().isFeatureEnabled(s.L
                        .SECOND_SCREEN_IN_ONBOARDING_GROUPS)
                };

            function d() {
                return (0, r.__awaiter)(this, void 0, void 0, (function() {
                    var e, t;
                    return (0, r.__generator)(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return e = u(), t = l(), o.ZP.isLastKnownStateUserSignedIn() && (i.XL.getInstance()
                                    .getSecondScreenConfiguration().enabled || t || e) ? [3, 1] : [2];
                            case 1:
                                return [4, Promise.all([n.e(712), n.e(384)]).then(n.bind(n, 8872)).then((function(n) {
                                    return n.default.start(e, t)
                                })).catch((function(e) {
                                    return c.ZP.error("Error starting SecondScreen.", ["SecondScreen"],
                                        void 0, e.message, e.stack)
                                }))];
                            case 2:
                                r.sent(), r.label = 3;
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }
        },
        92438: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(19770),
                i = n(56405);
            t.default = function() {
                (0, r.YK)(i.Z)
            }
        },
        62473: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                loggerMiddleware: function() {
                    return i
                }
            });
            var r = n(16177),
                i = function() {
                    return function(e) {
                        return function(t) {
                            return t && t.log && t.log.logAction && r.ZP.info("Redux Action: ".concat(t.type, ". ").concat(t.log
                                .additionalLogMessage || "")), e(t)
                        }
                    }
                }
        },
        36863: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(22664),
                i = n(8019),
                o = n(75019),
                a = n(62131),
                s = n(83089),
                c = n(78701),
                u = s.LW.KEYBOARD;
            t.default = function(e) {
                return r.y_.subscribe((function(t) {
                        var n = e.getState().externalInput;
                        if ("string" == typeof t.key && (null == n ? void 0 : n.enabled)) {
                            var r = void 0,
                                s = void 0;
                            (null == n ? void 0 : n.page) === c.Z.FIND_PAGE && (i.ZE.reportDataPoint("AVLRC.Find.HardwareKeyboard."
                                .concat(t.key), "FIND_PAGE", 1), r = a.f, s = u), r && s && e.dispatch((0, o.hA)(r, {
                                input: t.key,
                                maxNumberOfCharacters: s
                            }))
                        }
                    })),
                    function(e) {
                        return function(t) {
                            return e(t)
                        }
                    }
            }
        },
        14568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n(72978),
                i = n(97096),
                o = n(28373);

            function a() {
                var e = o.b.getInstance();
                e.setTapsRoles((0, i.r9)()), e.getAndSetAllPageRoles(), e.setPresentationScheme((0, r.A)(), (0, r.A)(!0)), e
                    .setupResiliencyListeners(), e.setupFeatureStoreListeners()
            }
        },
        38353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return nt
                }
            });
            var r = n(7103),
                i = n(46934),
                o = n(90070),
                a = n(67294),
                s = n(70655),
                c = n(3821),
                u = n(93586),
                l = n(51546),
                d = n(88280),
                p = n(76004),
                f = n(5371),
                h = n(71893),
                m = n(92017),
                g = n(25770),
                v = n(85909),
                y = n(39922),
                E = n(3972),
                T = n(31329),
                P = n(38913),
                C = n(47054),
                I = n(78701),
                _ = n(66337),
                R = function() {
                    return {
                        source: _.aK,
                        name: _.Wl
                    }
                },
                b = function(e) {
                    return {
                        source: _.aK,
                        name: _.Dg,
                        params: {
                            lackOfConsent: e
                        }
                    }
                },
                S = function(e, t, n) {
                    return {
                        source: _.aK,
                        name: _.O2,
                        params: {
                            pageVariant: e,
                            unauthenticatedBrowseTreatment: t,
                            welcomePageRedesignTreatment: n
                        }
                    }
                },
                A = n(47727),
                O = n(32703),
                N = n(97556),
                L = n(7207),
                M = n(11431),
                D = n(23099),
                w = n(32841),
                k = function() {
                    return a.createElement(M.G7, {
                        style: F.root
                    }, a.createElement(w.U, {
                        size: "large"
                    }))
                },
                F = M.mM.create({
                    root: {
                        alignItems: "center",
                        height: 1080,
                        justifyContent: "center",
                        width: 1920
                    }
                }),
                x = n(56647),
                U = function(e) {
                    var t = e.buttonType,
                        n = e.onPress,
                        r = e.stringId,
                        i = e.focusKey,
                        o = e.testID,
                        s = e.collectionInformation,
                        c = "primary" === t || "ssoPrimary" === t,
                        u = c ? H.primaryButton : H.secondaryButton,
                        l = c ? x.qE.Big : x.qE.Medium,
                        d = [H.buttonConainer, B(t)];
                    return a.createElement(M.G7, {
                        style: d
                    }, a.createElement(x.ZP, {
                        onFocusAccessibilityMessage: [(0, N.Hm)(r), (0, N.Hm)("AIV_BLAST_TTS_ROLE_BUTTON")],
                        testID: o,
                        style: u,
                        onPress: n,
                        text: (0, N.Hm)(r),
                        size: l,
                        focusKey: i,
                        collectionInformation: s
                    }))
                },
                B = function(e) {
                    switch (e) {
                        case "primary":
                            return H.primaryButtonContainer;
                        case "secondary":
                            return H.secondaryButtonContainer;
                        case "ssoPrimary":
                            return H.ssoPrimaryButtonContainer;
                        case "ssoSecondary":
                            return H.ssoSecondaryButtonContainer
                    }
                },
                H = M.mM.create({
                    buttonConainer: {
                        width: 630
                    },
                    primaryButtonContainer: {
                        marginBottom: 45
                    },
                    secondaryButtonContainer: {
                        marginBottom: 27
                    },
                    ssoPrimaryButtonContainer: {
                        marginBottom: 33
                    },
                    ssoSecondaryButtonContainer: {
                        marginBottom: 30
                    },
                    primaryButton: {
                        minWidth: 630,
                        minHeight: 99,
                        height: void 0,
                        paddingTop: 25,
                        paddingBottom: 25
                    },
                    secondaryButton: {
                        minWidth: 630,
                        minHeight: 72
                    }
                }),
                G = "WelcomePage.SignInButton",
                W = "WelcomePage.CreateAccountButton",
                V = "WelcomePage.NoThanksButton",
                K = function(e) {
                    var t = e.onErrorBack;
                    return a.createElement(U, {
                        buttonType: "ssoPrimary",
                        testID: "WelcomePage.Error.BackButton",
                        onPress: t,
                        stringId: Z,
                        focusKey: "ssoPrimaryButton",
                        collectionInformation: {
                            numberOfCurrentItemInCollection: 1,
                            totalNumberOfCollectionItems: 1
                        }
                    })
                },
                Z = "AV_LRC_WELCOME_PAGE_ON_ERROR_BACK_BUTTON",
                q = function(e) {
                    var t = e.onSsoContinue,
                        n = e.onSsoChangeAccount,
                        r = e.onNoSignIn;
                    return a.createElement(a.Fragment, null, a.createElement(U, {
                        buttonType: "ssoPrimary",
                        testID: "WelcomePage.Sso.ContinueButton",
                        onPress: t,
                        stringId: Y,
                        focusKey: "ssoPrimaryButton",
                        collectionInformation: {
                            numberOfCurrentItemInCollection: 1,
                            totalNumberOfCollectionItems: 3
                        }
                    }), a.createElement(U, {
                        buttonType: "ssoSecondary",
                        testID: "WelcomePage.Sso.ChangeAccountButton",
                        focusKey: "ssoSecondaryButton1",
                        onPress: n,
                        stringId: z,
                        collectionInformation: {
                            numberOfCurrentItemInCollection: 2,
                            totalNumberOfCollectionItems: 3
                        }
                    }), a.createElement(U, {
                        buttonType: "ssoSecondary",
                        testID: "WelcomePage.Sso.BrowseButton",
                        focusKey: "ssoSecondaryButton2",
                        onPress: r,
                        stringId: j,
                        collectionInformation: {
                            numberOfCurrentItemInCollection: 3,
                            totalNumberOfCollectionItems: 3
                        }
                    }))
                },
                Y = "AV_LRC_SSO_WELCOME_PAGE_CONTINUE_BUTTON",
                z = "AV_LRC_SSO_WELCOME_PAGE_CHANGE_ACCOUNT",
                j = "AV_LRC_SSO_WELCOME_PAGE_BROWSE",
                Q = function(e) {
                    var t = e.onCblSignIn,
                        n = e.onAccountCreate,
                        r = e.onNoSignIn,
                        i = e.accountCreationTreatment,
                        o = e.removeBrowseButton,
                        s = e.enableWelcomePageRedesign,
                        c = o ? oe : ie,
                        u = s ? ne : te;
                    return a.createElement(a.Fragment, null, a.createElement(U, {
                        buttonType: "primary",
                        testID: G,
                        onPress: t,
                        stringId: X(i),
                        focusKey: "primaryButton",
                        collectionInformation: {
                            numberOfCurrentItemInCollection: 1,
                            totalNumberOfCollectionItems: c
                        }
                    }), a.createElement(U, {
                        buttonType: "secondary",
                        testID: W,
                        key: "secondary_btn_2",
                        focusKey: "secondary_btn_2",
                        onPress: n,
                        stringId: re,
                        collectionInformation: {
                            numberOfCurrentItemInCollection: 2,
                            totalNumberOfCollectionItems: c
                        }
                    }), !o && a.createElement(U, {
                        buttonType: "secondary",
                        testID: V,
                        key: "secondary_btn_1",
                        focusKey: "secondary_btn_1",
                        onPress: r,
                        stringId: u,
                        collectionInformation: {
                            numberOfCurrentItemInCollection: 3,
                            totalNumberOfCollectionItems: c
                        }
                    }))
                },
                X = function(e) {
                    return e === v.M.T1 ? $ : e === v.M.T2 ? ee : J
                },
                J = "AV_LRC_WELCOME_PAGE_DEVICE_SIGN_IN_BUTTON",
                $ = "AV_LRC_WELCOME_PAGE_DEVICE_SIGN_IN_BUTTON_T1",
                ee = "AV_LRC_WELCOME_PAGE_DEVICE_SIGN_IN_BUTTON_T2",
                te = "AV_LRC_WELCOME_PAGE_NO_SIGN_IN_BUTTON",
                ne = "AV_LRC_WELCOME_SCREEN_BROWSE_BUTTON_V2",
                re = "AV_LRC_CREATE_ACCOUNT_CBL_STEP_2",
                ie = 3,
                oe = 2,
                ae = n(9011),
                se = function(e) {
                    var t = e.errorType,
                        n = e.email;
                    return a.createElement(ae.jN.L07, {
                        content: ce(n, t)
                    })
                },
                ce = function(e, t) {
                    return t === Xe.SSO_REGISTRATION_FAILED_LACK_OF_CONSENT ? (0, N.Hm)(
                    "AV_LRC_WELCOME_PAGE_SSO_LACK_OF_CONSENT_ERROR_DESCRIPTION", {
                        email: e
                    }) : (0, N.Hm)("AV_LRC_WELCOME_PAGE_DEFAULT_ERROR_DESCRIPTION", {
                        email: e
                    })
                },
                ue = function(e) {
                    var t = e.email;
                    return a.createElement(a.Fragment, null, a.createElement(M.G7, {
                        style: de.promptContainer
                    }, a.createElement(ae.jN.L07, {
                        content: le
                    })), a.createElement(ae.jN.L06, {
                        content: (0, N.Kd)(t)
                    }))
                },
                le = (0, N.Hm)("AV_LRC_SSO_WELCOME_PAGE_PROMPT"),
                de = M.mM.create({
                    promptContainer: {
                        marginBottom: 15
                    }
                }),
                pe = n(81306),
                fe = function() {
                    return a.createElement(pe.ZT, {
                        content: (0, N.U)(he),
                        typeRamp: "body-400"
                    })
                },
                he = (0, N.Hm)("AV_LRC_WELCOME_PAGE_SERVICE_DESCRIPTION"),
                me = function() {
                    return a.createElement(M.G7, {
                        style: ve.root
                    }, a.createElement(ae.jN.L03, {
                        content: ge
                    }))
                },
                ge = (0, N.Hm)("AV_LRC_WELCOME_PAGE_DEFAULT_ERROR_HEADING"),
                ve = M.mM.create({
                    root: {
                        justifyContent: "flex-start",
                        marginBottom: 21,
                        marginTop: 123
                    }
                }),
                ye = function(e) {
                    var t = e.name;
                    return a.createElement(M.G7, {
                        style: Te.root
                    }, a.createElement(ae.jN.L03, {
                        content: Ee(t)
                    }))
                },
                Ee = function(e) {
                    return (0, N.Hm)("AV_LRC_SSO_WELCOME_PAGE_HEADER", {
                        name: e
                    })
                },
                Te = M.mM.create({
                    root: {
                        justifyContent: "flex-start",
                        marginBottom: 21,
                        marginTop: 123
                    }
                }),
                Pe = function() {
                    return a.createElement(pe.ZT, {
                        content: (0, N.U)(Ce),
                        typeRamp: "heading-600"
                    })
                },
                Ce = (0, N.Hm)("AV_LRC_WELCOME_SCREEN_HEADING"),
                Ie = n(48837),
                _e = n(70973),
                Re = n(84014),
                be = "size-400",
                Se = function(e) {
                    var t = e.enableWelcomePageRedesign,
                        n = e.onSignInButtonPress,
                        r = e.onCreateAccountButtonPress,
                        i = e.onBrowseVideosButtonPress,
                        o = t ? Re.K._200 : Re.K._133,
                        c = (0, s.__read)((0, a.useState)(0), 2),
                        u = c[0],
                        l = c[1],
                        d = (0, s.__read)((0, a.useState)(0), 2),
                        p = d[0],
                        f = d[1],
                        h = (0, s.__read)((0, a.useState)(0), 2),
                        m = h[0],
                        g = h[1],
                        v = (0, a.useCallback)((function(e) {
                            return function(t) {
                                var n = Math.ceil(t.nativeEvent.layout.width);
                                1 === e ? f(n) : g(n)
                            }
                        }), []);
                    (0, a.useEffect)((function() {
                        p > 0 && m > 0 && l(p + m + o)
                    }), [p, m, o]);
                    var y = t ? Ae.secondaryButtonsContainerWelcomePageRedesign : Ae.secondaryButtonsContainer,
                        E = t ? "AV_LRC_WELCOME_SCREEN_BROWSE_BUTTON_V2" : "AV_LRC_WELCOME_PAGE_NO_SIGN_IN_BUTTON",
                        T = t ? "AV_LRC_WELCOME_SCREEN_BROWSE_BUTTON_V2" : "AV_LRC_WELCOME_PAGE_BROWSE_VIDEOS_BUTTON_TTS";
                    return a.createElement(M.G7, {
                        style: Ae.container
                    }, a.createElement(M.G7, {
                        style: [Ae.primaryButtonContainer, {
                            width: u
                        }]
                    }, a.createElement(pe.KM, {
                        focusKey: "SignInButton",
                        onPress: n,
                        content: (0, N.U)((0, N.Hm)("AV_LRC_WELCOME_PAGE_DEVICE_SIGN_IN_BUTTON")),
                        size: be,
                        testID: G,
                        onFocusAccessibilityMessage: [(0, N.Hm)(
                            "AV_LRC_WELCOME_PAGE_SIGN_IN_BUTTON_WITH_SECOND_DEVICE_ACCOUNT_CREATION_TTS")],
                        collectionInformation: {
                            numberOfCurrentItemInCollection: 1,
                            totalNumberOfCollectionItems: 3
                        }
                    })), a.createElement(_e.Tu, {
                        focusKey: "secondaryButtonsContainer",
                        style: y
                    }, a.createElement(M.G7, {
                        style: [Ae.secondaryButtonStyle, {
                            marginRight: o
                        }],
                        onLayout: v(1)
                    }, a.createElement(pe.kq, {
                        testID: W,
                        focusKey: "createAccountButton",
                        content: (0, N.U)((0, N.Hm)("AV_LRC_WELCOME_PAGE_CREATE_ACCOUNT")),
                        size: be,
                        onPress: r,
                        onFocusAccessibilityMessage: [(0, N.Hm)("AV_LRC_WELCOME_PAGE_CREATE_ACCOUNT_BUTTON_TTS")],
                        collectionInformation: {
                            numberOfCurrentItemInCollection: 2,
                            totalNumberOfCollectionItems: 3
                        }
                    })), a.createElement(M.G7, {
                        style: Ae.secondaryButtonStyle,
                        onLayout: v(2)
                    }, a.createElement(pe.kq, {
                        testID: V,
                        focusKey: "browseVideosButton",
                        content: (0, N.U)((0, N.Hm)(E)),
                        size: be,
                        onPress: i,
                        onFocusAccessibilityMessage: [(0, N.Hm)(T)],
                        collectionInformation: {
                            numberOfCurrentItemInCollection: 3,
                            totalNumberOfCollectionItems: 3
                        }
                    }))))
                },
                Ae = M.mM.create({
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        minHeight: 66
                    },
                    primaryButtonContainer: {
                        alignSelf: "stretch"
                    },
                    secondaryButtonsContainer: {
                        flexDirection: "row",
                        marginTop: 20
                    },
                    secondaryButtonsContainerWelcomePageRedesign: {
                        flexDirection: "row",
                        marginTop: Re.K._200
                    },
                    secondaryButtonStyle: {
                        maxHeight: 57
                    }
                }),
                Oe = n(96774),
                Ne = n.n(Oe),
                Le = "size-400",
                Me = function(e) {
                    var t = e.onSignInButtonPress,
                        n = e.onCreateAccountButtonPress,
                        r = (0, s.__read)((0, a.useState)(0), 2),
                        i = r[0],
                        o = r[1],
                        c = (0, a.useCallback)((function() {
                            return function(e) {
                                var t = Math.ceil(e.nativeEvent.layout.width);
                                t > 0 && o(t)
                            }
                        }), []),
                        u = i > 0 ? {
                            width: i
                        } : {};
                    return a.createElement(M.G7, {
                        style: De.container
                    }, a.createElement(M.G7, {
                        style: u
                    }, a.createElement(pe.KM, {
                        focusKey: "SignInButton",
                        onPress: t,
                        content: (0, N.U)((0, N.Hm)("AV_LRC_WELCOME_PAGE_DEVICE_SIGN_IN_BUTTON")),
                        size: Le,
                        testID: G,
                        onFocusAccessibilityMessage: [(0, N.Hm)("AV_LRC_WELCOME_PAGE_DEVICE_SIGN_IN_BUTTON")],
                        collectionInformation: {
                            numberOfCurrentItemInCollection: 1,
                            totalNumberOfCollectionItems: 2
                        }
                    })), a.createElement(M.G7, {
                        style: [De.createAccountButtonContainer, u],
                        onLayout: c()
                    }, a.createElement(pe.kq, {
                        testID: W,
                        focusKey: "createAccountButton",
                        content: (0, N.U)((0, N.Hm)("AV_LRC_WELCOME_PAGE_CREATE_ACCOUNT")),
                        size: Le,
                        onPress: n,
                        onFocusAccessibilityMessage: [(0, N.Hm)("AV_LRC_WELCOME_PAGE_CREATE_ACCOUNT")],
                        collectionInformation: {
                            numberOfCurrentItemInCollection: 2,
                            totalNumberOfCollectionItems: 2
                        }
                    })))
                },
                De = M.mM.create({
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        minHeight: 66
                    },
                    createAccountButtonContainer: {
                        marginTop: 20,
                        maxHeight: 57,
                        minWidth: 480,
                        flex: 1
                    }
                }),
                we = "size-400",
                ke = function(e) {
                    var t = e.onSignInButtonPress,
                        n = e.onCreateAccountButtonPress,
                        r = e.onBrowseVideosButtonPress,
                        i = (0, s.__read)((0, a.useState)(678), 2),
                        o = i[0],
                        c = i[1],
                        u = (0, s.__read)((0, a.useState)(!1), 2),
                        l = u[0],
                        d = u[1],
                        p = (0, a.useCallback)((function(e) {
                            var t = Math.ceil(e.nativeEvent.layout.width);
                            t > 678 ? d(!0) : (d(!1), c(t))
                        }), []),
                        f = function(e) {
                            return a.createElement(pe.KM, {
                                focusKey: "SignInButton",
                                onPress: t,
                                content: (0, N.U)((0, N.Hm)("AV_LRC_WELCOME_PAGE_DEVICE_SIGN_IN_BUTTON")),
                                size: we,
                                testID: G,
                                onFocusAccessibilityMessage: [(0, N.Hm)("AV_LRC_WELCOME_PAGE_DEVICE_SIGN_IN_BUTTON")],
                                collectionInformation: {
                                    numberOfCurrentItemInCollection: e,
                                    totalNumberOfCollectionItems: 3
                                }
                            })
                        },
                        h = function(e) {
                            return a.createElement(pe.kq, {
                                testID: W,
                                focusKey: "createAccountButton",
                                content: (0, N.U)((0, N.Hm)("AV_LRC_WELCOME_PAGE_CREATE_ACCOUNT")),
                                size: we,
                                onPress: n,
                                onFocusAccessibilityMessage: [(0, N.Hm)("AV_LRC_WELCOME_PAGE_CREATE_ACCOUNT")],
                                collectionInformation: {
                                    numberOfCurrentItemInCollection: e,
                                    totalNumberOfCollectionItems: 3
                                }
                            })
                        },
                        m = function(e) {
                            return a.createElement(pe.kq, {
                                testID: V,
                                focusKey: "browseVideosButton",
                                content: (0, N.U)((0, N.Hm)("AV_LRC_WELCOME_SCREEN_BROWSE_BUTTON_V2")),
                                size: we,
                                onPress: r,
                                onFocusAccessibilityMessage: [(0, N.Hm)("AV_LRC_WELCOME_SCREEN_BROWSE_BUTTON_V2")],
                                collectionInformation: {
                                    numberOfCurrentItemInCollection: e,
                                    totalNumberOfCollectionItems: 3
                                }
                            })
                        };
                    return l ? a.createElement(_e.O5, {
                        testID: "WelcomePage.Redesign.StackedButton.Container",
                        focusKey: "stackedButtonsContainer",
                        style: Fe.stackedButtonContainer
                    }, a.createElement(M.G7, {
                        style: Fe.stackedButton
                    }, f(1)), a.createElement(M.G7, {
                        style: Fe.stackedButton
                    }, h(2)), a.createElement(M.G7, {
                        style: Fe.stackedButton
                    }, m(3))) : a.createElement(M.G7, {
                        testID: "WelcomePage.Redesign.DefaultButton.Container",
                        style: Fe.container
                    }, a.createElement(M.G7, {
                        style: [Fe.primaryButtonContainer, {
                            width: o
                        }]
                    }, f(1)), a.createElement(_e.Tu, {
                        focusKey: "defaultButtonsSecondaryRowContainer",
                        style: Fe.secondaryButtonsContainer,
                        onLayout: p
                    }, a.createElement(M.G7, {
                        style: Fe.secondaryButtonOneHorizontal
                    }, h(2)), a.createElement(M.G7, null, m(3))))
                },
                Fe = M.mM.create({
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        minHeight: 66
                    },
                    primaryButtonContainer: {
                        alignSelf: "stretch"
                    },
                    secondaryButtonsContainer: {
                        flexDirection: "row",
                        marginTop: Re.K._200
                    },
                    secondaryButtonOneHorizontal: {
                        marginEnd: Re.K._200
                    },
                    stackedButtonContainer: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start"
                    },
                    stackedButton: {
                        marginBottom: Re.K._150,
                        width: 630
                    }
                }),
                xe = function() {
                    return a.createElement(pe.ZT, {
                        content: (0, N.U)(Ue),
                        typeRamp: "body-400"
                    })
                },
                Ue = (0, N.Hm)("AV_LRC_WELCOME_SCREEN_DESCRIPTION_V2"),
                Be = function() {
                    var e = "ta_IN" === Ie.vQ.getInstance().locale,
                        t = e ? "heading-400" : "heading-600",
                        n = e ? Ge.rootBiggerTopPadding : Ge.root;
                    return a.createElement(M.G7, {
                        style: n
                    }, a.createElement(pe.ZT, {
                        content: (0, N.U)(He),
                        typeRamp: t
                    }))
                },
                He = (0, N.Hm)("AV_LRC_WELCOME_SCREEN_HEADING_V2"),
                Ge = M.mM.create({
                    root: {
                        marginTop: 130,
                        width: 549
                    },
                    rootBiggerTopPadding: {
                        marginTop: 190,
                        width: 549
                    }
                }),
                We = n(86902),
                Ve = n(96285),
                Ke = ["AU", "JP", "SG", "NL", "TR", "LU", "IT", "FR", "ES", "DE", "BE", "US", "MX", "CA", "BR", "GB"],
                Ze = function(e, t, n, r, i) {
                    for (var o = [], a = 1; a <= 4; a++) {
                        var s = a < 10 ? "0".concat(a) : "".concat(a),
                            c = "".concat(e, "/").concat(t, "_").concat(s, "_").concat(n, "_").concat(r).concat(void 0 !== i ? "_v" + i : "", ".")
                            .concat("jpg");
                        o.push(c)
                    }
                    return o
                },
                qe = function() {
                    var e = (0, D.Z)() ? "rtl" : "ltr";
                    return Ze("https://m.media-amazon.com/images/G/01/AVLRC/images/default/welcomepage", "avlrc_welcome_page_image", "default", e,
                        2)
                },
                Ye = function(e) {
                    var t = e.rotationIntervalMs,
                        n = void 0 === t ? 5e3 : t,
                        r = e.fadeInDurationMs,
                        i = void 0 === r ? 750 : r,
                        o = e.fadeOutDurationMs,
                        c = void 0 === o ? 750 : o,
                        u = e.style,
                        l = void 0 === u ? {} : u,
                        p = e.testID,
                        f = (0, D.Z)() ? "AVLRC_WELCOME_SCREEN_BACKGROUND_RTL" : "AVLRC_WELCOME_SCREEN_BACKGROUND",
                        h = ["FMjpg", "QL90"],
                        m = a.useMemo((function() {
                            return function() {
                                try {
                                    var e = d.XL.getInstance().getLocalizationConfiguration().videoCountryOfRecord;
                                    if (void 0 === e) return qe();
                                    if (-1 === Ke.indexOf(e)) return qe();
                                    var t = (0, D.Z)() ? "RTL" : "LTR";
                                    return Ze("https://m.media-amazon.com/images/S/relevo-segment-images/livingroomclient",
                                        "AVLRC_WELCOME_PAGE_IMAGE", e.toUpperCase(), t)
                                } catch (e) {
                                    return void T.ZP.error("Unable to get dynamic welcome page background image urls: ".concat(JSON
                                        .stringify(e)))
                                }
                            }() || []
                        }), []),
                        g = m.length < 1,
                        v = (0, s.__read)(a.useState(0), 2),
                        y = v[0],
                        E = v[1],
                        P = (0, s.__read)(a.useState(g ? "" : m[0]), 2),
                        C = P[0],
                        I = P[1],
                        _ = a.useRef(null),
                        R = a.useRef(),
                        b = a.useRef(),
                        S = (0, We.j)().animations !== Ve.F.NONE,
                        A = (0, s.__read)(a.useState(g), 2),
                        O = A[0],
                        N = A[1],
                        w = a.useCallback((function(e) {
                            var t;
                            T.ZP.error("Unable to load welcome page dynamic background image: ".concat(JSON.stringify(e))), null === (t = R
                                .current) || void 0 === t || t.cancel(), b.current && clearInterval(b.current), N(!0)
                        }), []);
                    a.useEffect((function() {
                        var e, t;
                        try {
                            for (var n = (0, s.__values)(m), r = n.next(); !r.done; r = n.next()) {
                                var i = r.value;
                                (0, L.BW)({
                                    downstreamImageUrl: i,
                                    style: l,
                                    extraTags: h
                                })
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                r && !r.done && (t = n.return) && t.call(n)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                    }), [m]);
                    var k = a.useCallback((function() {
                        var e, t;
                        if (!(O || m.length <= 1)) {
                            var n = (y + 1) % m.length;
                            if (null === (e = R.current) || void 0 === e || e.cancel(), !S) return I(m[n]), void E(n);
                            R.current = null === (t = _.current) || void 0 === t ? void 0 : t.animate({
                                propertyName: "opacity",
                                from: 1,
                                to: 0,
                                easing: "linear",
                                duration: c
                            }), R.current && (R.current.onfinish = function() {
                                var e;
                                I(m[n]), E(n), R.current = null === (e = _.current) || void 0 === e ? void 0 : e.animate({
                                    propertyName: "opacity",
                                    from: 0,
                                    to: 1,
                                    easing: "linear",
                                    duration: i
                                })
                            })
                        }
                    }), [y, m, i, c, O, S]);
                    return a.useEffect((function() {
                        if (!(O || m.length <= 1)) return b.current = setInterval((function() {
                                k()
                            }), n),
                            function() {
                                b.current && clearInterval(b.current)
                            }
                    }), [m, n, k, O]), a.useEffect((function() {
                        return function() {
                            var e;
                            null === (e = R.current) || void 0 === e || e.cancel(), b.current && clearInterval(b.current)
                        }
                    }), []), O ? a.createElement(M.G7, {
                        style: l,
                        testID: p
                    }, a.createElement(L.ZP, {
                        imageId: f,
                        style: l,
                        testID: "WelcomePage.DynamicBackground.FallbackImage"
                    })) : a.createElement(M.G7, {
                        style: l,
                        testID: p
                    }, a.createElement(M.kZ, {
                        ref: _,
                        style: l
                    }, a.createElement(L.ZP, {
                        onError: w,
                        downstreamImageUrl: C,
                        style: l,
                        testID: "WelcomePage.DynamicBackground.AnimatedImage",
                        extraTags: h
                    })))
                },
                ze = ((0, N.Hm)("AV_LRC_WELCOME_PAGE_TTS_NAVIGATION_MESSAGE"), (0, N.Hm)("AV_LRC_WELCOME_PAGE_TTS_CONTEXT"), (0, N.Hm)(
                    "AV_LRC_WELCOME_SCREEN_HEADING"), [(0, N.Hm)("AV_LRC_WELCOME_PAGE_SERVICE_DESCRIPTION")]),
                je = M.mM.create({
                    root: {
                        flex: 1
                    },
                    bgImage: {
                        backgroundColor: "black",
                        position: "absolute",
                        width: M.Db.get("window").width,
                        height: M.Db.get("window").height
                    },
                    container: {
                        flex: 1,
                        flexDirection: "column",
                        marginLeft: 144,
                        marginRight: 144,
                        marginTop: 72,
                        marginBottom: 72
                    },
                    contentContainer: {
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: 800
                    },
                    messageDescriptionContainer: {
                        width: 800,
                        marginTop: Re.K._300,
                        marginBottom: 64
                    },
                    messageDescriptionContainerWelcomePageRedesign: {
                        width: 730,
                        marginTop: Re.K._200,
                        marginBottom: Re.K._200
                    },
                    pvIcon: {
                        position: "absolute",
                        height: 66,
                        width: 214
                    },
                    pvIconWelcomePageRedesign: {
                        position: "absolute",
                        height: 150,
                        width: 150
                    }
                }),
                Qe = a.memo((function(e) {
                    var t = e.errorType !== Xe.NONE,
                        n = (0, D.Z)() ? "AVLRC_WELCOME_SCREEN_BACKGROUND_RTL" : "AVLRC_WELCOME_SCREEN_BACKGROUND",
                        r = a.useCallback((function() {
                            return e.isSsoAvailable && !!e.ssoAccountName && !!e.ssoAccountObfuscatedEmail && "" !== e
                                .ssoAccountName && "" !== e.ssoAccountObfuscatedEmail
                        }), [e.isSsoAvailable, e.ssoAccountName, e.ssoAccountObfuscatedEmail]),
                        i = a.useCallback((function() {
                            return e.enableWelcomePageRedesign ? a.createElement(Ye, {
                                style: je.bgImage,
                                testID: "WelcomePage.DynamicBackgroundView"
                            }) : a.createElement(L.ZP, {
                                imageId: n,
                                style: je.bgImage,
                                testID: "WelcomePage.DefaultBackgroundView"
                            })
                        }), [e.enableWelcomePageRedesign]),
                        o = a.useCallback((function() {
                            var t = e.enableWelcomePageRedesign ? "AVLRC_PRIME_VIDEO_ICON_BLUE_TILE" :
                                "AVLRC_PRIME_VIDEO_ICON_BLUE",
                                n = e.enableWelcomePageRedesign ? je.pvIconWelcomePageRedesign : je.pvIcon;
                            return a.createElement(L.ZP, {
                                imageId: t,
                                style: n
                            })
                        }), [e.enableWelcomePageRedesign]),
                        s = a.useCallback((function() {
                            return t ? a.createElement(me, null) : e.enableWelcomePageRedesign ? a.createElement(Be, null) : r() ? a
                                .createElement(ye, {
                                    name: e.ssoAccountName
                                }) : a.createElement(Pe, null)
                        }), [t, r, e.ssoAccountName, e.enableWelcomePageRedesign]),
                        c = a.useCallback((function() {
                            return t ? a.createElement(se, {
                                errorType: e.errorType,
                                email: e.ssoAccountObfuscatedEmail || ""
                            }) : e.enableWelcomePageRedesign ? a.createElement(xe, null) : r() ? a.createElement(ue, {
                                email: e.ssoAccountObfuscatedEmail
                            }) : a.createElement(fe, null)
                        }), [t, r, e.errorType, e.ssoAccountObfuscatedEmail, e.enableWelcomePageRedesign]),
                        u = a.useCallback((function() {
                            var n = Ie.vQ.getInstance().locale || "en_US";
                            return t ? a.createElement(K, {
                                onErrorBack: e.onErrorBack
                            }) : e.enableWelcomePageRedesign ? a.createElement(ke, {
                                onSignInButtonPress: e.onCblSignIn,
                                onCreateAccountButtonPress: e.onAccountCreate,
                                onBrowseVideosButtonPress: e.onNoSignIn
                            }) : r() ? a.createElement(q, {
                                onSsoContinue: e.onSsoContinue,
                                onSsoChangeAccount: e.onSsoChangeAccount,
                                onNoSignIn: e.onNoSignIn
                            }) : "ta_IN" !== n ? e.removeBrowseButton ? a.createElement(Me, {
                                onSignInButtonPress: e.onCblSignIn,
                                onCreateAccountButtonPress: e.onAccountCreate
                            }) : a.createElement(Se, {
                                enableWelcomePageRedesign: e.enableWelcomePageRedesign,
                                onSignInButtonPress: e.onCblSignIn,
                                onCreateAccountButtonPress: e.onAccountCreate,
                                onBrowseVideosButtonPress: e.onNoSignIn
                            }) : a.createElement(Q, {
                                onCblSignIn: e.onCblSignIn,
                                onAccountCreate: e.onAccountCreate,
                                onNoSignIn: e.onNoSignIn,
                                accountCreationTreatment: e.accountCreationTreatment,
                                removeBrowseButton: e.removeBrowseButton,
                                enableWelcomePageRedesign: e.enableWelcomePageRedesign
                            })
                        }), [t, r, e.accountCreationTreatment, e.onAccountCreate, e.onCblSignIn, e.onErrorBack, e.onNoSignIn, e
                            .onSsoChangeAccount, e.onSsoContinue, e.removeBrowseButton, e.enableWelcomePageRedesign
                        ]),
                        l = e.enableWelcomePageRedesign ? je.messageDescriptionContainerWelcomePageRedesign : je
                        .messageDescriptionContainer;
                    return a.createElement(M.G7, {
                        style: je.root,
                        testID: "WelcomePage"
                    }, i(), e.isLoading && a.createElement(k, null), a.createElement(M.G7, {
                        style: je.container
                    }, o(), !e.isLoading && a.createElement(M.G7, {
                        style: je.contentContainer
                    }, s(), a.createElement(M.G7, {
                        style: l
                    }, c()), a.createElement(A.m, {
                        accessibilityContextClosingMessages: ze,
                        accessibilityDeferredMessageDelayInMs: 0,
                        focusKey: "primaryContainer",
                        onBubbleUpEvent: e.onBubbleUpEvent,
                        orientation: O.i.VERTICAL
                    }, u()))))
                }), (function(e, t) {
                    return !(!e.isLoading || !t.isLoading) || Ne()(e, t)
                }));
            Qe.displayName = "Memo(WelcomePage)";
            var Xe, Je = Qe,
                $e = (0, P.P)("WelcomePageContainer"),
                et = [_.aK];
            ! function(e) {
                e[e.SSO_REGISTRATION_FAILED_LACK_OF_CONSENT = 0] = "SSO_REGISTRATION_FAILED_LACK_OF_CONSENT", e[e.SSO_REGISTRATION_FAILED = 1] =
                    "SSO_REGISTRATION_FAILED", e[e.NONE = 2] = "NONE"
            }(Xe || (Xe = {}));
            var tt = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.accountCreationTreatment = m.b.getInstance().getFeatureTreatment(g.L.ACCOUNT_CREATION_CTA), n.removeBrowseButton =
                        m.b.getInstance().getFeatureTreatment(g.L.BROWSE_EXPERIENCE_FOR_UNAUTHENTICATED_USERS) === v.M.T1, n
                        .enableWelcomePageRedesign = m.b.getInstance().getFeatureTreatment(g.L.WELCOME_PAGE_REDESIGN) === v.M.T1, n
                        .checkSsoAvailabilityAndLoadAccountInfoIfAvailable = function() {
                            return n.checkSsoAvailability().then((function(e) {
                                return e ? n.loadSsoAccountInfo().then((function(e) {
                                    return {
                                        isSsoAvailable: !0,
                                        ssoAccountName: e.obfuscatedName,
                                        ssoAccountObfuscatedEmail: e.obfuscatedEmail
                                    }
                                })) : {
                                    isSsoAvailable: !1
                                }
                            }))
                        }, n.checkSsoAvailability = function() {
                            return f.ZP.canSSOFromAnotherApp().then((function(e) {
                                return p.AppEvents.log({
                                    source: _.aK,
                                    name: _.c4
                                }), e
                            })).catch((function(e) {
                                return p.AppEvents.log({
                                    source: _.aK,
                                    name: _.U$
                                }), Promise.reject(e)
                            }))
                        }, n.loadSsoAccountInfo = function() {
                            return f.ZP.getSSOAccountInfo().then((function(e) {
                                return p.AppEvents.log({
                                    source: _.aK,
                                    name: _.fY
                                }), e
                            })).catch((function(e) {
                                return p.AppEvents.log({
                                    source: _.aK,
                                    name: _.uk
                                }), Promise.reject(e)
                            }))
                        }, n.handleStopTrackingUpdates = function(e, t) {
                            (0, C.g)(_.x7, _.aK, t), e && T.ZP.error("".concat($e("stopTrackingUpdates"),
                                " failed to measure SDK metrics with error type '").concat(e.name, "'"), et, void 0, e.message, e.stack)
                        }, n.onAccountCreate = function() {
                            var e, t;
                            p.AppEvents.log((e = n.getUnAuthenticatedBrowseCxTreatmentForReporting(), t = n
                                .getWelcomePageRedesignTreatmentForReporting(), {
                                    source: _.aK,
                                    name: _.Lp,
                                    params: {
                                        unauthenticatedBrowseTreatment: e,
                                        welcomePageRedesignTreatment: t
                                    }
                                })), n.props.navigateTo(I.Z.CREATE_ACCOUNT_PAGE)
                        }, n.onNoSignIn = function() {
                            var e = n.getPageVariant(n.state.isSsoAvailable);
                            p.AppEvents.log(function(e, t, n) {
                                    return {
                                        source: _.aK,
                                        name: _.fJ,
                                        params: {
                                            pageVariant: e,
                                            unauthenticatedBrowseTreatment: t,
                                            welcomePageRedesignTreatment: n
                                        }
                                    }
                                }(e, n.getUnAuthenticatedBrowseCxTreatmentForReporting(), n.getWelcomePageRedesignTreatmentForReporting())), n
                                .navigateToHomePage()
                        }, n.onCblSignIn = function() {
                            var e = n.getPageVariant(n.state.isSsoAvailable);
                            return p.AppEvents.log(function(e, t, n) {
                                    return {
                                        source: _.aK,
                                        name: _.eT,
                                        params: {
                                            pageVariant: e,
                                            unauthenticatedBrowseTreatment: t,
                                            welcomePageRedesignTreatment: n
                                        }
                                    }
                                }(e, n.getUnAuthenticatedBrowseCxTreatmentForReporting(), n.getWelcomePageRedesignTreatmentForReporting())), n
                                .props.navigateTo(I.Z.CODE_BASED_REGISTRATION_PAGE)
                        }, n.onSsoContinue = function() {
                            return (0, s.__awaiter)(n, void 0, void 0, (function() {
                                var e = this;
                                return (0, s.__generator)(this, (function(t) {
                                    return p.AppEvents.log({
                                        source: _.aK,
                                        name: _.CZ
                                    }), p.AppEvents.log({
                                        source: _.aK,
                                        name: _.Zi
                                    }), this.setState({
                                        isLoading: !0
                                    }), f.ZP.signThisAppInUsingSSO().then((function(t) {
                                        if (t.codePair) return e.setState({
                                            isLoading: !1,
                                            errorType: Xe
                                                .SSO_REGISTRATION_FAILED_LACK_OF_CONSENT
                                        }), void p.AppEvents.log(b(!0));
                                        p.AppEvents.log({
                                            source: _.aK,
                                            name: _.s5
                                        }), e.navigateToNextPageOnSSORegistrationSuccess()
                                    })).catch((function(t) {
                                        p.AppEvents.log(b(!1)), T.ZP.error("".concat($e("onSsoContinue"),
                                                " Failed to register with SSO: ").concat(t.message), et,
                                            void 0, t.message, t.stack), e.setState({
                                            isLoading: !1,
                                            errorType: Xe.SSO_REGISTRATION_FAILED
                                        })
                                    })), [2]
                                }))
                            }))
                        }, n.onSsoChangeAccount = function() {
                            p.AppEvents.log({
                                source: _.aK,
                                name: _.jv
                            }), n.props.navigateTo(I.Z.CODE_BASED_REGISTRATION_PAGE)
                        }, n.onErrorDismiss = function() {
                            n.setState({
                                errorType: Xe.NONE
                            })
                        }, n.dismissLanguagesNotification = function() {
                            n.setState({
                                shouldRenderLanguagesNotification: !1
                            })
                        }, n.onBubbleUpEvent = function(e) {
                            return e.key, !0
                        }, p.AppEvents.log({
                            source: _.aK,
                            name: _.AC
                        }), n.trackingUpdateHandle = l.$E(), n.state = {
                            shouldRenderLanguagesNotification: !1,
                            isLoading: !0,
                            isSsoAvailable: !1,
                            errorType: Xe.NONE
                        }, n
                }
                return (0, s.__extends)(t, e), t.prototype.render = function() {
                    return a.createElement(a.Fragment, null, a.createElement(Je, {
                        key: "welcomePage",
                        isLoading: this.state.isLoading,
                        errorType: this.state.errorType,
                        isSsoAvailable: this.state.isSsoAvailable,
                        ssoAccountName: this.state.ssoAccountName,
                        ssoAccountObfuscatedEmail: this.state.ssoAccountObfuscatedEmail,
                        onSsoContinue: this.onSsoContinue,
                        onSsoChangeAccount: this.onSsoChangeAccount,
                        onCblSignIn: this.onCblSignIn,
                        onNoSignIn: this.onNoSignIn,
                        onErrorBack: this.onErrorDismiss,
                        onAccountCreate: this.onAccountCreate,
                        onBubbleUpEvent: this.onBubbleUpEvent,
                        accountCreationTreatment: this.accountCreationTreatment,
                        removeBrowseButton: this.removeBrowseButton,
                        enableWelcomePageRedesign: this.enableWelcomePageRedesign
                    }), this.state.shouldRenderLanguagesNotification && a.createElement(y.F, {
                        navigateTo: this.props.navigateTo,
                        onDismiss: this.dismissLanguagesNotification
                    }))
                }, t.prototype.getPageVariant = function(e) {
                    return e ? "sso" : "default"
                }, t.prototype.componentDidMount = function() {
                    var e = this,
                        t = d.XL.getInstance().getLocalizationConfiguration().locale;
                    (0, E.D)(t).then((function(t) {
                        e.setState({
                            shouldRenderLanguagesNotification: t
                        })
                    })), this.checkSsoAvailabilityAndLoadAccountInfoIfAvailable().then((function(t) {
                        e.setState(t);
                        var n = e.getPageVariant(t.isSsoAvailable);
                        p.AppEvents.log(function(e) {
                            return {
                                source: _.aK,
                                name: _.vZ,
                                params: {
                                    pageVariant: e
                                }
                            }
                        }(n)), p.AppEvents.log(S(n, e.getUnAuthenticatedBrowseCxTreatmentForReporting(), e
                            .getWelcomePageRedesignTreatmentForReporting()))
                    })).catch((function(t) {
                        T.ZP.error("".concat($e("componentDidMount"),
                                " Failed to load welcome page, falling back to default variant: ").concat(t.message), et,
                            void 0, t.message, t.stack), e.setState({
                            isSsoAvailable: !1,
                            ssoAccountName: void 0,
                            ssoAccountObfuscatedEmail: void 0
                        }), p.AppEvents.log(R()), p.AppEvents.log(S("default", e
                            .getUnAuthenticatedBrowseCxTreatmentForReporting(), e
                            .getWelcomePageRedesignTreatmentForReporting()))
                    })).finally((function() {
                        l.NY(e.trackingUpdateHandle, e.handleStopTrackingUpdates), c.Sj.mark(u.Od.PageLoaded_Welcome), e.props
                            .onPageLoaded && e.props.onPageLoaded(), e.setState({
                                isLoading: !1
                            })
                    }))
                }, t.prototype.componentDidCatch = function(e) {
                    throw T.ZP.error("".concat($e("componentDidCatch"), " Failed to render welcome page: ").concat(e.message), et, void 0, e
                        .message, e.stack), p.AppEvents.log(R()), e
                }, t.prototype.navigateToHomePage = function() {
                    this.props.navigateTo(I.Z.COLLECTION_PAGE, {
                        transitionSource: "WELCOME_PAGE"
                    })
                }, t.prototype.navigateToNextPageOnSSORegistrationSuccess = function() {
                    var e = this;
                    (0, h.n)().then((function(t) {
                        return e.props.navigateTo(t)
                    }))
                }, t.prototype.getUnAuthenticatedBrowseCxTreatmentForReporting = function() {
                    var e = m.b.getInstance();
                    if (e.isClientTriggeringEnabled(g.L.BROWSE_EXPERIENCE_FOR_UNAUTHENTICATED_USERS)) return v.$[e.getFeatureTreatment(g.L
                        .BROWSE_EXPERIENCE_FOR_UNAUTHENTICATED_USERS)]
                }, t.prototype.getWelcomePageRedesignTreatmentForReporting = function() {
                    var e = m.b.getInstance();
                    if (e.isClientTriggeringEnabled(g.L.WELCOME_PAGE_REDESIGN)) return v.$[e.getFeatureTreatment(g.L.WELCOME_PAGE_REDESIGN)]
                }, t
            }(a.Component);

            function nt(e) {
                var t = e.navigateTo;
                return a.createElement(r.y, {
                    key: "WelcomePage",
                    name: "WelcomePage",
                    appLoadDurationMetrics: (0, i.x)()
                }, a.createElement(tt, {
                    navigateTo: t,
                    onPageLoaded: o.Y
                }))
            }
        },
        86880: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                widgetDataReducer: function() {
                    return o
                }
            });
            var r, i = n(70655);
            ! function(e) {
                e.WIDGET_DATA_FULFILLED = "avlrc/swiftwidgets/WIDGET_DATA_FULFILLED", e.CLEAR_WIDGET_DATA = "avlrc/swiftwidgets/CLEAR_WIDGET_DATA"
            }(r || (r = {}));
            var o = function(e, t) {
                switch (void 0 === e && (e = new Map), t.type) {
                    case r.WIDGET_DATA_FULFILLED:
                        var n = new Map(t.payload.map((function(e) {
                            return [e.widgetName, e.widgetPayload]
                        })));
                        return new Map((0, i.__spreadArray)((0, i.__spreadArray)([], (0, i.__read)(e), !1), (0, i.__read)(n), !1));
                    case r.CLEAR_WIDGET_DATA:
                        var o = new Map(e);
                        return o.delete(t.payload), o;
                    default:
                        return e
                }
            }
        },
        14254: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initialize: function() {
                    return s
                }
            });
            var r = n(92017),
                i = n(25770),
                o = n(1218),
                a = function() {
                    function e() {
                        var e = this;
                        this.updatePortKeyAppSession(), r.b.getInstance().subscribeToFeatureChange(i.L.ENABLE_AVLRC_EDGE_V2, (function() {
                            e.updatePortKeyAppSession()
                        }))
                    }
                    return e.getInstance = function() {
                        return e.instance || (e.instance = new e), e.instance
                    }, e.prototype.updatePortKeyAppSession = function() {
                        var e = r.b.getInstance().isFeatureEnabled(i.L.ENABLE_AVLRC_EDGE_V2);
                        o.D.getInstance().setEnableAVLrcEdgeV2(e)
                    }, e
                }(),
                s = function() {
                    a.getInstance()
                }
        },
        31969: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n(70655),
                i = n(89875),
                o = n(57913);

            function a() {
                return (0, r.__awaiter)(this, void 0, void 0, (function() {
                    return (0, r.__generator)(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return (0, i.Jt)() ? [4, o.G.initialize()] : [3, 2];
                            case 1:
                                e.sent(), e.label = 2;
                            case 2:
                                return [2]
                        }
                    }))
                }))
            }
        },
        70300: function(e, t, n) {
            "use strict";

            function r() {
                return Promise.resolve()
            }
            n.r(t), n.d(t, {
                initialize: function() {
                    return r
                }
            })
        },
        52444: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                applyPlatformAdjustment: function() {
                    return g
                }
            });
            var r = n(72562),
                i = n(46255),
                o = n(1293),
                a = n(70655),
                s = n(11480),
                c = n(69787);

            function u(e, t) {
                return (0, a.__awaiter)(this, void 0, Promise, (function() {
                    var n;
                    return (0, a.__generator)(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, (0, s.he)(e, t)];
                            case 1:
                                return n = r.sent(), c.T.getInstance() && c.T.getInstance().recordNetworkTraffic(e, n, t), [
                                    2, n
                                ]
                        }
                    }))
                }))
            }
            var l, d, p = n(45408);
            ! function(e) {
                e[e.PLATFORM_PRODUCTION = 0] = "PLATFORM_PRODUCTION", e[e.INTERCEPTION = 1] = "INTERCEPTION"
            }(l || (l = {}));
            var f, h = function() {
                    if (void 0 === d) {
                        var e = (0, p.S)();
                        return d = m(e)
                    }
                    return d
                },
                m = function(e) {
                    var t;
                    if (null === (t = null == e ? void 0 : e.config) || void 0 === t ? void 0 : t.application) {
                        var n = e.config.application;
                        if (n.peerConnectionParameters && n.networkInterceptionManifest) return l.INTERCEPTION
                    }
                    return l.PLATFORM_PRODUCTION
                },
                g = function() {
                    f = function() {
                        var e = h();
                        if (i.y.info("LRAK fetch mode: ".concat(e), o.R.LRAPS), e === l.INTERCEPTION) return u
                    }(), i.y.info("LRAPS fetch implementation type: ".concat(typeof f), o.R.LRAPS), (0, r.WT)(f)
                }
        },
        11597: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return a
                }
            });
            var r = n(16177),
                i = (0, n(38913).P)("AdParametersStore"),
                o = ["AdParametersStore"],
                a = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            n = t.acmConfig,
                            r = t.fallbackData,
                            i = null != n ? n : {},
                            o = i.bundle,
                            a = i.storeUrl,
                            s = (null != r ? r : {}).deviceManufacturer,
                            c = s ? ".".concat(s.replace(/[^a-zA-Z0-9]/g, "")) : "";
                        this.adParameters = {
                            bundle: null != o ? o : "com.primevideo".concat(c),
                            storeUrl: a
                        }
                    }
                    return e.initialize = function(t) {
                        this.instance ? r.ZP.warn("".concat(i("initialize"),
                            " Attempting to initialize store, but it was already initialized. Ignoring request."), o) : (r.ZP.info(""
                                .concat(i("initialize"), " Initializing with config ").concat(JSON.stringify(t.acmConfig)), o), this
                            .instance = new e(t))
                    }, e.getInstance = function() {
                        return this.instance || (r.ZP.error("".concat(i("getInstance"),
                                " Attempting to get store before initialization, initializing with default values."), o), this.instance =
                            new e), this.instance
                    }, e.prototype.getAdParameters = function() {
                        return this.adParameters
                    }, e
                }()
        },
        24929: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initializePlaybackAdParametersStore: function() {
                    return a
                }
            });
            var r = n(10297),
                i = n(10984),
                o = n(11597),
                a = function() {
                    var e = i.LK.getInstance().manufacturer,
                        t = r.ZQ.getConfig().playbackAdParameters;
                    o.F.initialize({
                        acmConfig: t,
                        fallbackData: {
                            deviceManufacturer: e
                        }
                    })
                }
        },
        68924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n(70655),
                i = n(46255),
                o = n(1293),
                a = n(89875),
                s = n(34002),
                c = n(97481);

            function u() {
                return (0, r.__awaiter)(this, void 0, Promise, (function() {
                    var e;
                    return (0, r.__generator)(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, c.k.init()];
                            case 1:
                                return t.sent(), (0, a.Jt)() ? [4, (0, s.r6)()] : [3, 3];
                            case 2:
                                (e = t.sent()) ? (i.y.info("[ftv-pin-proof] Pin proof received from firebat at app start", o
                                    .R.FIRETV), c.k.setPinProof(e, !0)) : i.y.info(
                                    "[ftv-pin-proof] No saved pin proof at app start", o.R.FIRETV), (0, s.ZF)((function(
                                    e) {
                                    var t = e.pin_proof;
                                    t ? (i.y.info("[ftv-pin-proof] New pin proof received", o.R.FIRETV), c.k
                                        .setPinProof(t, !0)) : i.y.error(
                                        "[ftv-pin-proof] Pin proof update function called but pin proof is falsy",
                                        o.R.FIRETV)
                                })), t.label = 3;
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }
        },
        76410: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return O
                }
            });
            var r = n(70655),
                i = n(93174),
                o = n(89875),
                a = n(14213),
                s = n(16177),
                c = n(61390),
                u = n(81839),
                l = n(76004),
                d = n(11905),
                p = n(55831),
                f = n(30996),
                h = n(30345),
                m = n(1293),
                g = n(46255),
                v = n(95414),
                y = n(66180),
                E = n(82283),
                T = n(31682),
                P = n(18251),
                C = n(19024),
                I = n(56947),
                _ = n(5712),
                R = ["InternalFailure", "ThrottlingException"],
                b = {
                    reportOwner: m.R.FIRETV,
                    tags: ["ListPrimeVideoProfilesClient"]
                },
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.transformName = "profiles/profileSelection", t
                    }
                    return (0, r.__extends)(t, e), t.prototype.makeRequest = function(t) {
                        return e.prototype.call.call(this, t, (0, r.__assign)({
                            pluggableRetryOptions: {
                                metricPivots: ["ProfileSelectionClient"],
                                logTags: ["ProfileSelectionClient"],
                                backoffOptions: {
                                    shouldRetryError: this.shouldRetryError,
                                    getErrorForResponse: this.getErrorForResponse
                                }
                            }
                        }, this.getInitAccessTokenSupplierOnFireTV()))
                    }, t.prototype.getInitAccessTokenSupplierOnFireTV = function() {
                        return (0, o.Jt)() ? {
                            overrideAccessTokenForFireTV: function() {
                                return (0, v.nN)().catch((function(e) {
                                    throw g.y.error("Error while getting init access token to overrideAccessTokenForFireTV",
                                        (0, y.uP)(b, e)), e
                                }))
                            }
                        } : {}
                    }, t.prototype.call = function(e) {
                        var t = this;
                        return this.makeRequest(e).catch((function(n) {
                            return n && "HttpError" === n.name && 401 === n.response.status && "ProfileNotVideoEnabled" === n
                                .response.headers.get("x-atv-error-type") ? t.makeRequest(e) : Promise.reject(n)
                        }))
                    }, t.prototype.getHttpClient = function() {
                        return new C.P(E.Z.deviceProxyClient(), this.transformName)
                    }, t.prototype.getUrl = function() {
                        var e = [];
                        e.push(["shouldUseV2", "true"]), (0, o.Jt)() && e.push(["policyProgram", "ftv"]);
                        var t = (0, _.z)(_.X.Profile);
                        return t && e.push(["clientFeatures", t]), new T.Z("", e).buildQueryParamsOnly()
                    }, t.prototype.shouldRetryError = function(e) {
                        var t, n;
                        try {
                            for (var i = (0, r.__values)(R), o = i.next(); !o.done; o = i.next()) {
                                var a = o.value;
                                if (e.message.match(a)) return !0
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                o && !o.done && (n = i.return) && n.call(i)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return !1
                    }, t.prototype.getErrorForResponse = function(e) {
                        var t = e && 403 !== e.status && e.body ? JSON.parse(e.body).metadata : null;
                        return t && t.message ? new Error(t.message) : null
                    }, t.prototype.getHttpMethod = function() {
                        return P.Z.GET
                    }, t
                }(I.t),
                A = S,
                O = function(e) {
                    var t = new A,
                        n = c.f.getInstance();
                    return n.setErrorLoadingProfiles(!1), (0, p.Xg)(f.EW, f.g8, [f.Db]), (0, p.Xg)(i.v5.WHOS_WATCHING_LOAD_DURATION, f.g8, [i.F7
                        .NETWORK
                    ]), l.AppEvents.log((0, d.eF)()), e ? (0, p.Xg)(i.v5.WHOS_WATCHING_LOAD_DURATION, f.g8, [i.F7.NETWORK, i.J$.BOOTSTRAP]) : (
                        0, p.Xg)(i.v5.WHOS_WATCHING_LOAD_DURATION, f.g8, [i.F7.NETWORK, i.J$.NON_BOOTSTRAP]), (0, p.Rh)(), t.call({}).then((
                        function(t) {
                            var r;
                            if ((0, h.VZ)(t) && (s.ZP.error("Error response with code: ".concat(t.code,
                                    " returned from Borg whilst calling #profileSelection"), ["LOAD_PROFILES",
                                    "loadProfileSelectionPageAction"
                                ]), a.Z.isInBackground() || l.AppEvents.log((0, d.YR)("Error response code ".concat(null == t ? void 0 :
                                    t.code))), n.setErrorLoadingProfiles(!0)), (0, p.N6)(f.EW, [f.Db]), (0, p.N6)(i.v5
                                    .WHOS_WATCHING_LOAD_DURATION, [i.F7.NETWORK]), (0, p.RF)(), l.AppEvents.log((0, d.Au)(!!e)), e ? (0, p
                                    .N6)(i.v5.WHOS_WATCHING_LOAD_DURATION, [i.F7.NETWORK, i.J$.BOOTSTRAP]) : (0, p.N6)(i.v5
                                    .WHOS_WATCHING_LOAD_DURATION, [i.F7.NETWORK, i.J$.NON_BOOTSTRAP]), t && !(0, h.VZ)(t)) {
                                var c = L(t.profiles),
                                    u = (0, o.Jt)() ? null === (r = c.find((function(e) {
                                        return e.isActive
                                    }))) || void 0 === r ? void 0 : r.id : void 0;
                                n.setProfilesData(c, t.canCreateProfileHint, t.createOrAssociatePermission, u, t.ageBasedCreationPermission)
                            }
                            return t
                        })).catch((function(t) {
                        s.ZP.error("Network error occurred whilst calling #profileSelection", ["LOAD_PROFILES",
                                "loadProfileSelectionPageAction"
                            ], void 0, t.message, t.stack), (0, p.pQ)(f.EW, [f.Db]), (0, p.pQ)(i.v5.WHOS_WATCHING_LOAD_DURATION, [i.F7
                                .NETWORK
                            ]), (0, p.af)(), e ? (0, p.pQ)(i.v5.WHOS_WATCHING_LOAD_DURATION, [i.F7.NETWORK, i.J$.BOOTSTRAP]) : (0, p.pQ)
                            (i.v5.WHOS_WATCHING_LOAD_DURATION, [i.F7.NETWORK, i.J$.NON_BOOTSTRAP]), a.Z.isInBackground() || l.AppEvents
                            .log((0, d.YR)(null == t ? void 0 : t.name));
                        var o = n.getProfiles();
                        throw o.length > 0 ? n.setProfiles((0, r.__spreadArray)([], (0, r.__read)(o), !1)) : n.setErrorLoadingProfiles(!
                            0), t
                    }))
                },
                N = function(e) {
                    return {
                        id: e.profileId,
                        name: e.name,
                        avatarUrl: e.avatar.avatarUrl,
                        avatarId: e.avatar.avatarId,
                        avatarDescription: e.avatar.avatarDescription,
                        isActive: e.isActive,
                        isAdult: e.profileAgeGroup === u.Le.ADULT,
                        profileAgeGroup: e.profileAgeGroup,
                        profileIsImplicit: e.isDefaultProfile,
                        translationDetails: e.translationDetails,
                        permissions: e.permissions
                    }
                },
                L = function(e) {
                    return void 0 === e && (e = []), e.map(N)
                }
        },
        56870: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return wt
                }
            });
            var r = n(7103),
                i = n(46934),
                o = n(90070),
                a = n(64591),
                s = n(67294),
                c = n(70655),
                u = n(3821),
                l = n(93586),
                d = n(51546),
                p = n(37974),
                f = n(48680),
                h = n(19770),
                m = n(79485),
                g = n(1541),
                v = n(5371),
                y = n(87299),
                E = n(27754),
                T = n(93174),
                P = n(47755),
                C = n(92017),
                I = n(85909),
                _ = n(25770),
                R = n(61481),
                b = n(38479),
                S = n(25067),
                A = n(69339),
                O = n(22664),
                N = n(14382),
                L = n(14213),
                M = n(97556),
                D = n(16177),
                w = n(78701),
                k = n(93654),
                F = n(61390),
                x = n(40580);

            function U(e) {
                return v.ZP.exchangeAccountAccessTokenForActorAccessToken(e).catch((function() {
                    return Promise.reject(new Error("Failed to request profile aware access token for profileId: ".concat(e)))
                }))
            }
            var B, H = n(81839),
                G = n(76004),
                W = n(11905),
                V = n(29055),
                K = n(30996),
                Z = n(55831),
                q = n(84914),
                Y = n(58904),
                z = n(89418),
                j = n(62394),
                Q = n(87361),
                X = n(18671),
                J = n(47633),
                $ = n(47803),
                ee = n(93619),
                te = n(43534),
                ne = n(18153),
                re = function(e) {
                    var t = e.onSuccess,
                        n = e.onFailure;
                    return new ne.Z("collections/quickstartInitial").call({
                        pageType: "home",
                        pageId: "home"
                    }).then((function(e) {
                        return e ? t(ie(e)) : n()
                    })).catch((function() {
                        return n()
                    }))
                },
                ie = function(e) {
                    for (var t, n, r = e.containerList, i = [], o = [], a = 0; a < r.length; a++) {
                        var s = r[a];
                        "STANDARD_CAROUSEL" === s.type && -1 !== (null === (t = s.tags) || void 0 === t ? void 0 : t.indexOf("watchNextCarousel")) ?
                            i = oe(s.items, a.toString()) : "STANDARD_CAROUSEL" === s.type && -1 === (null === (n = s.tags) || void 0 === n ?
                                void 0 : n.indexOf("watchNextCarousel")) && (o = oe(s.items, a.toString()))
                    }
                    return {
                        continueWatchingCards: i,
                        recommendedForYouCards: o
                    }
                },
                oe = function(e, t) {
                    var n = 0;
                    return e.map((function(e) {
                        if ("TITLE_CARD" === e.cardType && e.title && e.action && (0, te.rP)(e.action) && e.coverImage && ("MOVIE" === e
                                .contentType || "SEASON" === e.contentType)) {
                            var r = e.title,
                                i = e.action,
                                o = e.contentType,
                                a = e.actions,
                                s = e.coverImage,
                                c = e.entitlementMessaging,
                                u = e.watchProgress;
                            return {
                                type: "MOVIE" === o ? "Movie" : "Series",
                                id: "".concat(t, "-").concat(n++),
                                title: {
                                    text: r
                                },
                                entitlementGlance: se(null == c ? void 0 : c.GLANCE_MESSAGE_SLOT),
                                imageUrl: s,
                                action: ae(a, i),
                                watchProgress: u
                            }
                        }
                        return null
                    })).filter(ee.K0)
                },
                ae = function(e, t) {
                    var n = (null == e ? void 0 : e.find((function(e) {
                        return "playback" === e.target
                    }))) || (null == e ? void 0 : e.find((function(e) {
                        return "legacyDetail" === e.target
                    })));
                    return (0, te.rP)(n) ? n : t
                },
                se = function(e) {
                    if (void 0 !== e) return "ENTITLED_ICON" === e.icon ? {
                        message: e.message
                    } : e
                },
                ce = n(76410),
                ue = n(99038);
            ! function(e) {
                e.CONTINUE_WATCHING = "continueWatching", e.RECOMMENDED_FOR_YOU = "recommendedForYou"
            }(B || (B = {}));
            var le = (0, M.Hm)("AV_LRC_GENERIC_ERROR_TITLE"),
                de = [(0, M.Hm)("AV_LRC_PROFILES_GETCONTEXT_SWITCHING")],
                pe = (0, M.Hm)("AV_LRC_OK_BUTTON_TEXT"),
                fe = (0, M.Hm)("AV_LRC_PLAYBACK_GENERIC_ERROR_HEADING"),
                he = [(0, M.Hm)("AV_LRC_LIST_PROFILES_ERROR_MODAL_TEXT")],
                me = (0, M.Hm)("AV_LRC_GO_TO_HOME"),
                ge = ((0, M.Hm)("AV_LRC_PROFILES_INTRO_HEADING"), (0, M.Hm)("AV_LRC_PROFILES_INTRO_TEXT"), (0, M.Hm)("AV_LRC_PROFILES_WW")),
                ve = ((0, M.Hm)("AV_LRC_PROFILES_AVATARS_INTRODUCTION"), (0, M.Hm)("AV_LRC_PROFILES_INTRO_HEADING"), (0, M.Hm)(
                    "AV_LRC_PROFILES_INTRO_TEXT"), (0, M.Hm)("AV_LRC_TTS_PROFILES_AVATARS_INTRODUCTION"), (0, M.Kd)("Continue watching")),
                ye = (0, M.Kd)("Recommended For You"),
                Ee = (0, M.Kd)("After you start watching videos, they appear here. Browse now to find something to watch."),
                Te = (0, M.Kd)("We don\u2019t have any recommendations for you right now. Browse now to find something to watch. "),
                Pe = {
                    type: B.CONTINUE_WATCHING,
                    focusKeySuffix: "-continueWatchingContainer",
                    emptyContainerContentTestId: "PROFILE_CARDS_CONTAINER_EMPTY_CONTINUE_WATCHING_MESSAGE",
                    emptyContainerContent: Ee,
                    containerTitle: ve
                },
                Ce = {
                    type: B.RECOMMENDED_FOR_YOU,
                    focusKeySuffix: "-recommendedForYouContainer",
                    emptyContainerContentTestId: "PROFILE_CARDS_CONTAINER_EMPTY_RECOMMENDED_FOR_YOU_MESSAGE",
                    emptyContainerContent: Te,
                    containerTitle: ye
                },
                Ie = function(e) {
                    var t = function(e, t) {
                            switch (e) {
                                case "LOAD_PROFILE_LIST":
                                    return {
                                        title: fe, textBlocks: he, buttons: [{
                                            id: "ok",
                                            onPress: function() {
                                                return t(w.Z.HOMEPAGE, {
                                                    transitionSource: "PROFILE_SELECTION_ERROR_MODAL"
                                                })
                                            },
                                            text: pe,
                                            clickstreamParam: "ok"
                                        }]
                                    };
                                case "PROFILE_SELECTION":
                                    return {
                                        title: le, textBlocks: de, buttons: [{
                                            id: "go_to_home",
                                            text: me,
                                            onPress: function() {
                                                return t(w.Z.HOMEPAGE, {
                                                    transitionSource: "PROFILE_SELECTION_ERROR_MODAL"
                                                })
                                            },
                                            clickstreamParam: "go_to_home"
                                        }]
                                    }
                            }
                        }(e.errorType, e.navigateTo),
                        n = t.title,
                        r = t.textBlocks,
                        i = t.buttons;
                    return s.createElement(ue.C, {
                        title: n,
                        textBlocks: r,
                        buttons: i,
                        onBubbleUpEvent: e.onBubbleUpEvent,
                        clickstreamModalName: "profileSelectionPageErrorModal"
                    })
                };
            Ie.displayName = "ProfileSelectionErrorModal";
            var _e, Re = n(32841),
                be = n(90493),
                Se = n(28027),
                Ae = n(47727),
                Oe = n(32703),
                Ne = n(99489),
                Le = n(77104),
                Me = n(99694),
                De = n(29612),
                we = n(36104),
                ke = n(16780),
                Fe = n(9011),
                xe = n(34734),
                Ue = n(67747),
                Be = n(98913),
                He = n.n(Be),
                Ge = n(11431),
                We = n(10814),
                Ve = n(12497),
                Ke = {
                    minWidth: 357,
                    marginBottom: 18
                },
                Ze = "MEDIUM",
                qe = (0, Se.Z)((_e = xe.Z, (0, Ge.lX)((function(e) {
                    return s.createElement(_e, (0, c.__assign)({}, e))
                }))), "PROFILE_CARDS_CONTAINER"),
                Ye = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderCard = function(e, t) {
                            return s.createElement(qe, {
                                accessibilityBorderEnabled: !1,
                                onFocusAccessibilityMessage: n.buildTTSMessagesForCard(e),
                                onFocus: function() {
                                    return n.setState({
                                        currentFocusedCardIndex: t
                                    })
                                },
                                onPress: n.onProfileCardPress,
                                card: e,
                                action: e.action,
                                size: Ze,
                                focusKey: n.props.focusKey + "card" + t
                            })
                        }, n.renderCards = function() {
                            return s.createElement(Ae.m, {
                                style: Ve.ZP.profileCards,
                                orientation: Oe.i.HORIZONTAL,
                                focusKey: n.props.focusKey,
                                onFocus: n.onProfileCardsContainerFocus,
                                onBlur: n.props.onProfileCardsContainerBlur,
                                shouldForgetFocusedChild: !0
                            }, n.shouldRenderCards(n.props.profileCards) ? s.createElement(Le.O, {
                                separatorWidth: Ve.iO
                            }, n.props.profileCards.map(n.renderCard)) : s.createElement(Ge.G7, null, s.createElement(Fe.kj.BODY, {
                                testID: n.props.emptyContainerContentTestId,
                                content: n.props.emptyContainerContent,
                                color: Ue.i.OFF_WHITE,
                                textAlign: "start",
                                extraLayoutStyles: Ke
                            }), s.createElement(Ne.K, {
                                text: We.yK,
                                icon: De.PJ.Home,
                                focusKey: n.props.homeButtonFocusKey,
                                accessibilityText: We.ZL,
                                style: Ve.ZP.goToHomeButton,
                                onPress: n.onHomeButtonPress
                            })))
                        }, n.renderCursor = function() {
                            var e = n.state.currentFocusedCardIndex * (Me.M2.width + Ve.iO);
                            return s.createElement(we.ZP, {
                                height: Me.M2.height,
                                width: Me.M2.width,
                                start: e,
                                top: 54,
                                borderColor: Ue.i.NEW_OFF_WHITE
                            })
                        }, n.renderSkeleton = function() {
                            var e = He()(3, (function(e) {
                                return s.createElement(ke.Z, {
                                    size: Ze,
                                    testID: We.lR + e
                                })
                            }));
                            return s.createElement(Ge.G7, {
                                style: Ve.ZP.profileCards
                            }, s.createElement(Le.O, {
                                separatorWidth: Ve.iO
                            }, e))
                        }, n.shouldRenderCards = function(e) {
                            return void 0 !== e && e.length > 0
                        }, n.shouldRenderCursor = function(e) {
                            return n.shouldRenderCards(e) && n.props.isProfileCardsContainerFocused
                        }, n.onProfileCardsContainerFocus = function() {
                            return n.props.onProfileCardsContainerFocus(n.props.profileCardsContainerType)
                        }, n.onHomeButtonPress = function() {
                            return n.props.onProfileCardOrHomeButtonPress(!0)
                        }, n.onProfileCardPress = function() {
                            return A.ZP.pushToNavigationHistory({
                                pageType: w.Z.COLLECTION_PAGE,
                                pageParams: {}
                            }), n.props.onProfileCardOrHomeButtonPress(!1)
                        }, n.buildTTSMessagesForCard = function(e) {
                            var t = [];
                            return t.push(n.props.profileCardsContainerType === B.CONTINUE_WATCHING ? We.bR : We.E$), e.title.text && t.push(e
                                .title.text), (0, te.Xs)(e.action) ? t.push((0, M.U)((0, M.Hm)(We.SL))) : t.push(We.gL), t.join()
                        }, n.state = {
                            currentFocusedCardIndex: 0
                        }, n
                    }
                    return (0, c.__extends)(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.profileCards,
                            n = e.profileCardsContainerTitle;
                        return s.createElement(Ge.G7, null, s.createElement(Fe.kj.HEADER4, {
                                testID: We.WL,
                                content: n,
                                color: Ue.i.OFF_WHITE,
                                textAlign: "start",
                                extraLayoutStyles: Ke
                            }), t ? this.renderCards() : this.renderSkeleton(), this.shouldRenderCursor(this.props.profileCards) && this
                            .renderCursor())
                    }, t
                }(s.PureComponent),
                ze = n(18568),
                je = n(79483),
                Qe = n(65569),
                Xe = n(75646),
                Je = n(47258),
                $e = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.getNewProfileAccessibilityMessage = function() {
                            var e = [];
                            return e.push((0, M.Hm)(We.Mj)), e.push((0, M.Hm)(We.uZ)), e
                        }, n.state = {
                            focused: !1
                        }, n
                    }
                    return (0, c.__extends)(t, e), t.prototype.render = function() {
                        var e, t = this,
                            n = "CHALLENGE" === (null === (e = this.props.permission) || void 0 === e ? void 0 : e.type);
                        return s.createElement(Ge.G7, {
                            style: Ve.ZP.profileContainer
                        }, s.createElement(Ge.G7, null, s.createElement(Je.q, {
                            style: this.props.avatarStyle,
                            focusBorderEnabled: !0,
                            imageId: We.V$,
                            focusKey: We.R8,
                            onFocusAccessibilityMessage: this.getNewProfileAccessibilityMessage(),
                            closingAccessibilityMessageOnFocus: [(0, M.Hm)(We.sr)],
                            collectionInformation: {
                                totalNumberOfCollectionItems: this.props.siblingsLength,
                                numberOfCurrentItemInCollection: this.props.index + 1
                            },
                            onFocus: function() {
                                return t.setState({
                                    focused: !0
                                })
                            },
                            onBlur: function() {
                                return t.setState({
                                    focused: !1
                                })
                            },
                            onPress: this.props.onPress
                        })), n && s.createElement(De.xu, {
                            icon: De.PJ.Lock,
                            style: Ve.ZP.padlockIcon
                        }), s.createElement(Fe.kj.HEADER3, {
                            color: this.state.focused ? Ve.ZP.profileName.color : Ve.ZP.profileNameUnfocused.color,
                            textAlign: Ve.ZP.profileName.textAlign,
                            extraLayoutStyles: Ve.ZP.profileName,
                            content: (0, M.Hm)(We.xm)
                        }))
                    }, t
                }(s.PureComponent),
                et = n(7207),
                tt = n(31613),
                nt = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return (0, c.__extends)(t, e), t.prototype.render = function() {
                        return s.createElement(Ge.G7, {
                            style: this.props.focused ? Ve.ZP.profileButtonFocused : Ve.ZP.profileButton,
                            testID: We.H$
                        }, s.createElement(Ge.G7, {
                            style: Ve.ZP.profileButtonIconWrapper
                        }, s.createElement(et.ZP, {
                            style: Ve.ZP.profileButtonIcon,
                            imageId: this.props.focused ? We.I3 : We.ni
                        })))
                    }, t
                }(s.PureComponent),
                rt = (0, tt.Y)(nt),
                it = n(64709),
                ot = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getImageId = function() {
                            return t.props.isAssociatedProfileCardsContainerFocused && t.props.pressedImageId ? t.props.pressedImageId : t.props
                                .focused ? t.props.focusedImageId : t.props.unfocusedImageId
                        }, t.getImageStyle = function() {
                            return t.props.isAssociatedProfileCardsContainerFocused && t.props.pressedImageId || t.props.focused ? Ve.ZP
                                .profileBaseButtonFocused : Ve.ZP.profileBaseButtonIcon
                        }, t
                    }
                    return (0, c.__extends)(t, e), t.prototype.render = function() {
                        return s.createElement(Ge.G7, {
                            style: Ve.ZP.profileBaseButton,
                            testID: this.props.testId
                        }, s.createElement(Ge.G7, null, s.createElement(et.ZP, {
                            style: this.getImageStyle(),
                            imageId: this.getImageId()
                        })))
                    }, t
                }(s.PureComponent),
                at = (0, tt.Y)(ot),
                st = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return (0, c.__extends)(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.focusKey,
                            n = e.testId,
                            r = e.focusedImageId,
                            i = e.unfocusedImageId,
                            o = e.pressedImageId,
                            a = e.hasNewProfileSibling,
                            c = e.siblingsLength,
                            u = e.index,
                            l = e.onFocusAccessibilityMessage,
                            d = e.closingAccessibilityMessageOnFocus;
                        return s.createElement(at, {
                            focusKey: t,
                            onFocus: this.props.onFocus,
                            onBlur: this.props.onBlur,
                            onPress: this.props.onPress,
                            isAssociatedProfileCardsContainerFocused: this.props.isAssociatedProfileCardsContainerFocused,
                            focusBorderEnabled: !1,
                            testId: n,
                            focusedImageId: r,
                            unfocusedImageId: i,
                            pressedImageId: o,
                            onFocusAccessibilityMessage: l,
                            closingAccessibilityMessageOnFocus: d,
                            collectionInformation: {
                                totalNumberOfCollectionItems: c - (a ? 1 : 0),
                                numberOfCurrentItemInCollection: u + 1
                            }
                        })
                    }, t
                }(s.PureComponent),
                ct = st,
                ut = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBubbleUpEvent = function(e) {
                            var t = e.key;
                            return t !== O.UL.NAVIGATION_RIGHT && t !== O.UL.NAVIGATION_LEFT
                        }, t.onQuickstartButtonsFocus = function() {
                            t.props.onQuickstartButtonsFocus(t.props.profileId)
                        }, t.isAssociatedProfileCardsContainerFocused = function(e) {
                            return t.props.isProfileCardsContainerFocused && t.props.profileCardsContainerTypeToRender === e
                        }, t
                    }
                    return (0, c.__extends)(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.focusKey,
                            n = e.hasNewProfileSibling,
                            r = e.siblingsLength,
                            i = e.index;
                        return s.createElement(Ae.m, {
                            orientation: Oe.i.HORIZONTAL,
                            shouldForgetFocusedChild: !1,
                            focusKey: t,
                            onFocus: this.onQuickstartButtonsFocus,
                            onBlur: this.props.onQuickstartButtonsBlur,
                            style: Ve.ZP.quickstartButtons,
                            testID: We.RM,
                            onBubbleUpEvent: this.onBubbleUpEvent
                        }, s.createElement(Le.O, {
                            separatorWidth: Ve.W0
                        }, s.createElement(ct, {
                            onPress: this.props.onEditPress,
                            testId: We.H$,
                            focusedImageId: We.qo,
                            unfocusedImageId: We.YE,
                            focusKey: We.IU,
                            siblingsLength: r,
                            hasNewProfileSibling: n,
                            index: i,
                            onFocusAccessibilityMessage: [(0, M.Hm)(We.bD)],
                            closingAccessibilityMessageOnFocus: [We.B6]
                        }), this.props.isAdult && s.createElement(ct, {
                            onFocus: this.props.onContinueWatchingButtonFocus,
                            onBlur: this.props.onContinueWatchingButtonBlur,
                            onPress: this.props.onContinueWatchingButtonPress,
                            isAssociatedProfileCardsContainerFocused: this.isAssociatedProfileCardsContainerFocused(B
                                .CONTINUE_WATCHING),
                            focusKey: We.Tg,
                            testId: We.ON,
                            focusedImageId: We.oi,
                            unfocusedImageId: We.ss,
                            pressedImageId: We.pL,
                            siblingsLength: r,
                            hasNewProfileSibling: n,
                            index: i,
                            onFocusAccessibilityMessage: [(0, M.Kd)(We.bR)],
                            closingAccessibilityMessageOnFocus: [We.iM]
                        }), this.props.isAdult && s.createElement(ct, {
                            onFocus: this.props.onRecommendedForYouButtonFocus,
                            onBlur: this.props.onRecommendedForYouButtonBlur,
                            onPress: this.props.onRecommendedForYouButtonPress,
                            focusKey: We.Mx,
                            testId: We.qh,
                            focusedImageId: We._h,
                            unfocusedImageId: We.dd,
                            isAssociatedProfileCardsContainerFocused: this.isAssociatedProfileCardsContainerFocused(B
                                .RECOMMENDED_FOR_YOU),
                            pressedImageId: We.YC,
                            siblingsLength: r,
                            hasNewProfileSibling: n,
                            index: i,
                            onFocusAccessibilityMessage: [(0, M.Kd)(We.E$)],
                            closingAccessibilityMessageOnFocus: [We.Ef]
                        })))
                    }, t
                }(s.PureComponent),
                lt = ut,
                dt = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return (0, c.__extends)(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = (e.uiControllerMetadata, (0, c.__rest)(e, ["uiControllerMetadata"]));
                        return s.createElement(Je.H, (0, c.__assign)({}, t))
                    }, t
                }(s.PureComponent),
                pt = (0, tt.Y)((0, Qe.H)(dt, Xe.B.Thing, [Xe.p.SELECT])),
                ft = n(34837),
                ht = n(27829),
                mt = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.isTeenProfileFeatureEnabled = C.b.getInstance().isFeatureEnabled(_.L.TEEN_PROFILES), n
                            .generateAccessibilityMessage = function(e) {
                                var t = [];
                                return e && t.push((0, M.Hm)(We.bD)), t.push(n.getProfileNameContent()), n.isTeenProfileFeatureEnabled && t.push(n
                                    .getProfileAgeGroupTTSContent(n.props.profileAgeGroup)), t.push((0, M.Hm)(We.uZ)), t
                            }, n.getProfileNameText = function() {
                                return n.props.name ? n.props.name : vt(n.props.index)
                            }, n.hasProfileAgeGroupBadging = function() {
                                return n.isTeenProfileFeatureEnabled
                            }, n.getQuickStartButtonFocusKey = function() {
                                return We.CS
                            }, n.getEditButtonFocusKey = function() {
                                return n.props.id + We.tf
                            }, n.getDefaultFocusChildKey = function() {
                                return n.props.isQuickstartEnabled ? n.props.isProfileCardsContainerFocused ? n.getQuickStartButtonFocusKey() : n
                                    .props.id : n.props.editRowFocused ? n.getEditButtonFocusKey() : n.props.id
                            }, n.isAssociatedProfileCardsContainerFocused = function() {
                                return n.props.currentFocusedProfileId === n.props.id && n.props.isProfileCardsContainerFocused
                            }, n.getProfileNameContent = function() {
                                return n.props.translationDetails ? (0, M.Hm)(n.props.translationDetails.translationKey) : (0, M.Kd)(n
                                    .getProfileNameText())
                            }, n.onProfileFocus = function() {
                                n.setState({
                                    focused: !0
                                }), n.props.onProfileFocus(n.props.id)
                            }, n.buildUIControllerElementMetadata = function() {
                                return {
                                    name: n.getProfileNameContent(),
                                    ordinal: n.props.index + 1,
                                    externalIds: {
                                        profileId: n.props.id
                                    }
                                }
                            }, n.getProfileAgeGroupTTSContent = function(e) {
                                switch (e) {
                                    case H.Le.CHILD:
                                        return (0, M.Hm)("AV_LRC_PROFILE_KID_PROFILE_BADGE_TEXT");
                                    case H.Le.TEEN:
                                        return (0, M.Hm)("AV_LRC_PROFILE_TEEN_PROFILE_BADGE_TEXT");
                                    case H.Le.ADULT:
                                        return (0, M.Hm)("AV_LRC_PROFILE_ADULT_PROFILE_BADGE_TEXT")
                                }
                            }, n.state = {
                                focused: !1,
                                uiControllerMetadata: n.buildUIControllerElementMetadata()
                            }, n
                    }
                    return (0, c.__extends)(t, e), t.prototype.componentDidUpdate = function(e) {
                        this.props.name == e.name && this.props.id == e.id && this.props.index == e.index && this.props.translationDetails == e
                            .translationDetails || this.setState({
                                uiControllerMetadata: this.buildUIControllerElementMetadata()
                            })
                    }, t.prototype.render = function() {
                        var e, t, n = this,
                            r = this.props,
                            i = r.editRowFocused,
                            o = r.avatarStyle,
                            a = r.id,
                            c = r.index,
                            u = r.permissions,
                            l = this.state.focused,
                            d = "CHALLENGE" === (null === (e = null == u ? void 0 : u.edit) || void 0 === e ? void 0 : e.type) ||
                            "CHALLENGE" === (null === (t = null == u ? void 0 : u.entry) || void 0 === t ? void 0 : t.type),
                            p = {
                                name: this.getProfileNameContent(),
                                ordinal: c + 1,
                                externalIds: {
                                    profileId: a
                                }
                            },
                            f = ft.Aw.getInstance().getDirection() === ht.N.RTL ? We.Nc : We.Tw,
                            h = this.hasProfileAgeGroupBadging();
                        return s.createElement(gt, {
                                style: Ve.ZP.profileContainer,
                                focusKey: this.props.id + "-container",
                                onFocus: this.onProfileFocus,
                                onBlur: function() {
                                    return n.setState({
                                        focused: !1
                                    })
                                },
                                defaultFocusedChildKey: this.getDefaultFocusChildKey()
                            }, s.createElement(Ge.G7, null, this.props.profileAgeGroup === H.Le.CHILD ? s.createElement(Je.q, {
                                style: o,
                                focusBorderEnabled: !0,
                                imageUrl: this.props.avatarUrl,
                                focusKey: this.props.id,
                                onFocusAccessibilityMessage: this.generateAccessibilityMessage(!1),
                                collectionInformation: {
                                    totalNumberOfCollectionItems: this.props.siblingsLength,
                                    numberOfCurrentItemInCollection: this.props.index + 1
                                },
                                onPress: this.props.onAvatarPress,
                                testID: "".concat(We.z7.ProfileAvatar, "_").concat(c)
                            }) : s.createElement(pt, {
                                uiControllerMetadata: p,
                                style: o,
                                focusBorderEnabled: !0,
                                imageUrl: this.props.avatarUrl,
                                focusKey: this.props.id,
                                onFocusAccessibilityMessage: this.generateAccessibilityMessage(!1),
                                collectionInformation: {
                                    totalNumberOfCollectionItems: this.props.siblingsLength,
                                    numberOfCurrentItemInCollection: this.props.index + 1
                                },
                                onPress: this.props.onAvatarPress,
                                testID: "".concat(We.z7.ProfileAvatar, "_").concat(c)
                            })), d && s.createElement(De.xu, {
                                icon: De.PJ.Lock,
                                style: Ve.ZP.padlockIcon
                            }), s.createElement(Ge.G7, {
                                style: Ve.ZP.profileTextGradientWrapper
                            }, s.createElement(et.ZP, {
                                imageId: f,
                                style: Ve.ZP.profileTextGradient,
                                key: "profileNameGradient",
                                testID: We.z7.ProfileNameGradientImage
                            })), s.createElement(Fe.kj.HEADER3, {
                                color: l || this.isAssociatedProfileCardsContainerFocused() ? Ve.ZP.profileName.color : Ve.ZP
                                    .profileNameUnfocused.color,
                                textAlign: Ve.ZP.profileName.textAlign,
                                extraLayoutStyles: h ? Ve.ZP.profileNameWithBadging : Ve.ZP.profileName,
                                content: this.getProfileNameContent(),
                                numberOfLines: 1,
                                ellipsizeMode: "clip"
                            }), h && s.createElement(Ge.G7, {
                                style: Ve.ZP.profileAgeGroupBadging
                            }, s.createElement(it.h, {
                                profileAgeGroup: this.props.profileAgeGroup
                            })), this.props.isQuickstartEnabled && (l || this.isAssociatedProfileCardsContainerFocused()) && s
                            .createElement(Ge.G7, {
                                style: Ve.ZP.profileButtonWrapper
                            }, s.createElement(lt, {
                                focusKey: this.getQuickStartButtonFocusKey(),
                                onQuickstartButtonsFocus: this.props.onQuickstartRowFocus,
                                onContinueWatchingButtonFocus: this.props.onContinueWatchingButtonFocus,
                                onRecommendedForYouButtonFocus: this.props.onRecommendedForYouButtonFocus,
                                onContinueWatchingButtonBlur: this.props.onContinueWatchingButtonBlur,
                                onRecommendedForYouButtonBlur: this.props.onRecommendedForYouButtonBlur,
                                onContinueWatchingButtonPress: this.props.onContinueWatchingButtonPress,
                                onRecommendedForYouButtonPress: this.props.onRecommendedForYouButtonPress,
                                profileCardsContainerTypeToRender: this.props.profileCardsContainerTypeToRender,
                                isProfileCardsContainerFocused: this.props.isProfileCardsContainerFocused,
                                onEditPress: this.props.onEditPress,
                                profileId: this.props.id,
                                siblingsLength: this.props.siblingsLength,
                                hasNewProfileSibling: this.props.hasNewProfileSibling,
                                index: this.props.index,
                                isAdult: this.props.profileAgeGroup !== H.Le.CHILD
                            })), (i || l) && !this.props.isQuickstartEnabled && s.createElement(Ge.G7, {
                                style: Ve.ZP.profileButtonWrapper
                            }, s.createElement(rt, {
                                onFocus: this.props.onEditFocus,
                                onBlur: this.props.onEditBlur,
                                onPress: this.props.onEditPress,
                                focusBorderEnabled: !1,
                                focusKey: this.getEditButtonFocusKey(),
                                onFocusAccessibilityMessage: this.generateAccessibilityMessage(!0),
                                collectionInformation: {
                                    totalNumberOfCollectionItems: this.props.siblingsLength - (this.props.hasNewProfileSibling ? 1 :
                                        0),
                                    numberOfCurrentItemInCollection: this.props.index + 1
                                },
                                closingAccessibilityMessageOnFocus: [(0, M.Hm)(We.k6)]
                            })))
                    }, t
                }(s.PureComponent),
                gt = (0, ze.V)((function(e) {
                    return s.createElement(Ge.G7, {
                        style: e.style
                    }, e.children)
                }), new Ge.ZC(Oe.i.VERTICAL, !0), {
                    rememberFocusedChild: !1
                }),
                vt = function(e) {
                    return "Profile ".concat(e)
                },
                yt = {
                    entry: {
                        type: "CHALLENGE",
                        challenge: {
                            type: H.Sm.PIN_REQUIRED,
                            profileId: "profileId",
                            msg: "PIN on profile creation is enabled for this account",
                            pinLength: 4
                        }
                    },
                    edit: {
                        type: "CHALLENGE",
                        challenge: {
                            type: H.Sm.PIN_REQUIRED,
                            profileId: "profileId",
                            msg: "PIN on profile creation is enabled for this account",
                            pinLength: 4
                        }
                    }
                },
                Et = function(e, t, n) {
                    return void 0 === t && (t = H.Le.ADULT), void 0 === n && (n = yt), {
                        id: "profileId" + e,
                        avatarId: "avatarId" + e,
                        avatarUrl: "https://m.media-amazon.com/images/G/01/digital/video/profiles/1540213975581-348._CB1565602416_.png",
                        name: "Avatar " + e,
                        isActive: 0 === e,
                        isAdult: t === H.Le.ADULT,
                        profileAgeGroup: t,
                        permissions: n
                    }
                },
                Tt = (Et(0), Et(1, H.Le.CHILD), Et(2), Et(3), Et(0), Et(1, H.Le.CHILD), Et(2), Et(3), Et(4), Et(5), "ProfileList"),
                Pt = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderNewProfile = function(e) {
                            return s.createElement(s.Fragment, null, s.createElement(Ge.G7, {
                                style: Ve.ZP.profileListItemSeparator
                            }), s.createElement($e, {
                                index: e,
                                avatarStyle: je.Fo.profileList,
                                siblingsLength: n.getNumProfiles(),
                                onPress: n.props.onNewProfilePress,
                                permission: n.props.createOrAssociatePermission
                            }))
                        }, n.renderItem = function(e, t) {
                            var r = e.id,
                                i = e.name,
                                o = e.avatarUrl,
                                a = e.permissions,
                                c = e.profileAgeGroup;
                            return s.createElement(s.Fragment, null, 0 !== t && s.createElement(Ge.G7, {
                                style: Ve.ZP.profileListItemSeparator
                            }), s.createElement(mt, {
                                id: r,
                                profileAgeGroup: c,
                                name: i,
                                avatarUrl: o,
                                permissions: a,
                                onEditFocus: function() {
                                    return n.setState({
                                        editRowFocused: !0
                                    })
                                },
                                onEditBlur: function() {
                                    return n.setState({
                                        editRowFocused: !1
                                    })
                                },
                                onEditPress: function() {
                                    return n.props.onEditPress(e)
                                },
                                onProfileFocus: n.props.onProfileFocus,
                                onContinueWatchingButtonFocus: n.props.onContinueWatchingButtonFocus,
                                onRecommendedForYouButtonFocus: n.props.onRecommendedForYouButtonFocus,
                                onContinueWatchingButtonBlur: n.props.onContinueWatchingButtonBlur,
                                onRecommendedForYouButtonBlur: n.props.onRecommendedForYouButtonBlur,
                                onContinueWatchingButtonPress: n.props.onContinueWatchingButtonPress,
                                onRecommendedForYouButtonPress: n.props.onRecommendedForYouButtonPress,
                                isQuickstartEnabled: n.props.isQuickstartEnabled,
                                currentFocusedProfileId: n.props.currentFocusedProfileId,
                                isProfileCardsContainerFocused: n.props.isProfileCardsContainerFocused,
                                profileCardsContainerTypeToRender: n.props.profileCardsContainerTypeToRender,
                                editRowFocused: n.state.editRowFocused,
                                index: t,
                                siblingsLength: n.getNumProfiles(),
                                hasNewProfileSibling: n.props.canCreateProfile,
                                onAvatarPress: n.onAvatarPress.bind(n, e, t),
                                onQuickstartRowFocus: n.props.onQuickstartRowFocus,
                                avatarStyle: je.Fo.profileList
                            }))
                        }, n.getNumProfiles = function() {
                            return n.props.profiles.length + (n.props.canCreateProfile ? 1 : 0)
                        }, n.state = {
                            editRowFocused: !1
                        }, n.horizontalNavigableCarouselContainer = (0, ze.V)((0, Qe.H)(Ct, Xe.B.ItemList), (0, Ge._l)(new Ge.ZC(Oe.i
                            .HORIZONTAL, !0), (function() {
                            return !n.props.accessTokenRequestPending
                        }))), n.setTtsMessage(), n
                    }
                    return (0, c.__extends)(t, e), t.prototype.render = function() {
                        var e, t = this,
                            n = this.horizontalNavigableCarouselContainer;
                        return e = this.state.editRowFocused ? this.props.profiles.map((function(e) {
                            return Object.assign({}, e)
                        })) : this.props.profiles, s.createElement(n, {
                            focusKey: Tt,
                            style: this.getProfileListStyle(),
                            defaultFocusedChildKey: this.props.defaultProfileId ? this.props.defaultProfileId + "-container" : void 0,
                            accessibilityContextMessage: this.accessibilityContextMessage,
                            accessibilityContextClosingMessages: this.accessibilityContextSecondaryMessage,
                            testID: We.z7.ProfileList
                        }, e.map((function(e, n) {
                            return t.renderItem(e, n)
                        })), this.props.canCreateProfile && this.renderNewProfile(e.length))
                    }, t.prototype.setTtsMessage = function() {
                        this.accessibilityContextMessage = [(0, M.Hm)(We.ar)], this.accessibilityContextSecondaryMessage = [], this.props
                            .announcementAccessibilityMessage && (this.accessibilityContextMessage = this.props
                                .announcementAccessibilityMessage), "CREATE" === this.props.previousProfileManagementAction || "ASSOCIATE" ===
                            this.props.previousProfileManagementAction ? this.accessibilityContextSecondaryMessage.push((0, M.Hm)(We.q1)) :
                            "DELETE" === this.props.previousProfileManagementAction && this.accessibilityContextSecondaryMessage.push((0, M.Hm)(
                                We.yt)), "CREATE" === this.props.previousProfileManagementAction || "ASSOCIATE" === this.props
                            .previousProfileManagementAction ? this.props.profiles.length === We.if ? this.accessibilityContextSecondaryMessage
                            .push((0, M.Hm)(We.EK)) : this.accessibilityContextSecondaryMessage.push((0, M.Hm)(We.dH)) : this
                            .accessibilityContextSecondaryMessage.push(this.props.isQuickstartEnabled ? We.tc : (0, M.Hm)(We.c3))
                    }, t.prototype.getProfileListStyle = function() {
                        return (0, c.__assign)((0, c.__assign)({}, Ve.ZP.profileList), {
                            width: this.getNumProfiles() * (Ve.lb.WIDTH + Ve.wK) - Ve.wK
                        })
                    }, t.prototype.onAvatarPress = function(e, t) {
                        this.props.onProfilePress(e, t)
                    }, t
                }(s.PureComponent),
                Ct = function(e) {
                    return s.createElement(Ge.G7, {
                        style: e.style
                    }, e.children)
                },
                It = n(62220),
                _t = n(8490),
                Rt = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onProfileFocus = function(e) {
                            n.currentFocusedProfileId = e, n.getCurrentFocusedProfileQuickstartCards(), n.props.onProfileFocus(e)
                        }, n.renderQuickstartContainer = function() {
                            var e = n.profileCardsContainerTypeToRender === B.CONTINUE_WATCHING ? Pe : Ce,
                                t = n.profileCardsContainerTypeToRender === B.CONTINUE_WATCHING ? n.currentFocusedProfileContinueWatchingCards :
                                n.currentFocusedProfileRecommendedForYouCards;
                            return s.createElement(Ye, {
                                focusKey: n.currentFocusedProfileId + e.focusKeySuffix,
                                homeButtonFocusKey: n.currentFocusedProfileId + "-goToHomeButton",
                                emptyContainerContentTestId: e.emptyContainerContentTestId,
                                emptyContainerContent: e.emptyContainerContent,
                                profileCardsContainerTitle: e.containerTitle,
                                isProfileCardsContainerFocused: n.state.isProfileCardsContainerFocused,
                                onProfileCardsContainerFocus: n.onProfileCardsContainerFocus,
                                onProfileCardsContainerBlur: n.onProfileCardsContainerBlur,
                                profileCards: t,
                                onProfileCardOrHomeButtonPress: n.onProfileCardOrHomeButtonPress,
                                profileCardsContainerType: n.profileCardsContainerTypeToRender
                            })
                        }, n.renderProfileList = function(e) {
                            return s.createElement(Pt, {
                                announcementAccessibilityMessage: e,
                                profiles: n.props.profiles,
                                canCreateProfile: n.props.canCreateProfile && n.props.profiles.length < 6,
                                defaultProfileId: n.props.defaultProfileId,
                                onProfilePress: n.props.onProfilePress,
                                onProfileFocus: n.onProfileFocus,
                                currentFocusedProfileId: n.currentFocusedProfileId,
                                isProfileCardsContainerFocused: n.state.isProfileCardsContainerFocused,
                                profileCardsContainerTypeToRender: n.profileCardsContainerTypeToRender,
                                isQuickstartEnabled: n.props.isQuickstartEnabled,
                                onEditPress: n.props.onEditPress,
                                onContinueWatchingButtonFocus: n.onContinueWatchingButtonFocus,
                                onRecommendedForYouButtonFocus: n.onRecommendedForYouButtonFocus,
                                onContinueWatchingButtonBlur: n.onContinueWatchingButtonBlur,
                                onRecommendedForYouButtonBlur: n.onRecommendedForYouButtonBlur,
                                onContinueWatchingButtonPress: n.onContinueWatchingButtonPress,
                                onRecommendedForYouButtonPress: n.onRecommendedForYouButtonPress,
                                onQuickstartRowFocus: n.props.onQuickstartRowFocus,
                                onNewProfilePress: n.props.onNewProfilePress,
                                previousProfileManagementAction: n.props.previousProfileManagementAction,
                                createOrAssociatePermission: n.props.createOrAssociatePermission,
                                accessTokenRequestPending: n.props.accessTokenRequestPending
                            })
                        }, n.onProfileCardsContainerFocus = function(e) {
                            n.setState({
                                isProfileCardsContainerFocused: !0
                            }), n.profileCardsContainerTypeToRender = e
                        }, n.onProfileCardsContainerBlur = function() {
                            n.setState({
                                isProfileCardsContainerFocused: !1
                            })
                        }, n.onContinueWatchingButtonFocus = function() {
                            n.profileCardsContainerTypeToRender = B.CONTINUE_WATCHING, n.setState({
                                isContinueWatchingButtonFocused: !0
                            })
                        }, n.onContinueWatchingButtonBlur = function() {
                            n.setState({
                                isContinueWatchingButtonFocused: !1
                            })
                        }, n.onContinueWatchingButtonPress = function() {
                            void 0 !== n.currentFocusedProfileContinueWatchingCards && n.setState({
                                isProfileCardsContainerFocused: !0
                            }, (function() {
                                Ge.IK.setFocus(n.currentFocusedProfileId + Pe.focusKeySuffix)
                            }))
                        }, n.onProfileCardOrHomeButtonPress = function(e) {
                            n.props.onProfileCardOrHomeButtonPress(n.currentFocusedProfileId, e)
                        }, n.onRecommendedForYouButtonPress = function() {
                            void 0 !== n.currentFocusedProfileContinueWatchingCards && n.setState({
                                isProfileCardsContainerFocused: !0
                            }, (function() {
                                Ge.IK.setFocus(n.currentFocusedProfileId + Ce.focusKeySuffix)
                            }))
                        }, n.onRecommendedForYouButtonFocus = function() {
                            n.profileCardsContainerTypeToRender = B.RECOMMENDED_FOR_YOU, n.setState({
                                isRecommendedForYouButtonFocused: !0
                            })
                        }, n.onRecommendedForYouButtonBlur = function() {
                            n.setState({
                                isRecommendedForYouButtonFocused: !1
                            })
                        }, n.shouldRenderProfileCardsContainer = function() {
                            return n.props.isQuickstartEnabled && (n.state.isContinueWatchingButtonFocused || n.state
                                .isRecommendedForYouButtonFocused || n.state.isProfileCardsContainerFocused)
                        }, n.getCurrentFocusedProfileQuickstartCards = function() {
                            var e = n.props.profiles.find((function(e) {
                                return e.id === n.currentFocusedProfileId
                            }));
                            void 0 !== e && (n.currentFocusedProfileContinueWatchingCards = e.continueWatchingCards, n
                                .currentFocusedProfileRecommendedForYouCards = e.recommendedForYouCards)
                        }, n.state = {
                            isContinueWatchingButtonFocused: !1,
                            isRecommendedForYouButtonFocused: !1,
                            isProfileCardsContainerFocused: !1
                        }, n
                    }
                    return (0, c.__extends)(t, e), t.prototype.componentDidUpdate = function(e) {
                        this.props.isQuickstartEnabled && this.props.profiles != e.profiles && this.getCurrentFocusedProfileQuickstartCards()
                    }, t.prototype.render = function() {
                        var e = bt(),
                            t = e.subtitleContent,
                            n = e.accessibilityMessage;
                        return this.props.pageLoadPending ? s.createElement(Ge.G7, {
                            style: Ot.activityIndicatorContainer
                        }, s.createElement(Re.U, {
                            speakImmediately: this.props.speakImmediately,
                            size: "large"
                        })) : s.createElement(Ge.G7, {
                                style: this.props.isQuickstartEnabled ? Ot.quickstartRoot : Ot.root,
                                testID: "PROFILE_SELECTION_PAGE"
                            }, s.createElement(Fe.kj.HEADER1, {
                                extraLayoutStyles: Ot.title,
                                content: ge,
                                testID: "PROFILE_SELECTION_PAGE_TITLE"
                            }), s.createElement(Ge.G7, {
                                style: this.props.isQuickstartEnabled ? Ot.quickstartSubtitleContainer : Ot.subtitleContainer
                            }, t && s.createElement(It.ZP, {
                                style: Ot.subtitle,
                                content: t
                            }), this.props.inlineMessageModel && s.createElement(be.g, {
                                messageType: this.props.inlineMessageModel.messageType,
                                message: this.props.inlineMessageModel.message
                            })), this.props.isQuickstartEnabled ? s.createElement(St, {
                                focusKey: Tt + "-container",
                                style: Ot.verticalNavigable
                            }, this.renderProfileList(n), this.shouldRenderProfileCardsContainer() && s.createElement(Ge.G7, {
                                style: Ot.profileCardsContainer
                            }, this.renderQuickstartContainer())) : this.renderProfileList(n), this.props.showRemasterTestingMessage && s
                            .createElement(Fe.kj.HEADER3, {
                                content: (0, M.Kd)("Your account is part of Remaster Beta Group 1"),
                                extraLayoutStyles: Ot.remasterTosGroupMessaging,
                                testID: "REMASTER_TOS_CUSTOMER_MESSAGING"
                            }))
                    }, t
                }(s.Component),
                bt = function() {
                    return {
                        subtitleContent: void 0,
                        accessibilityMessage: void 0
                    }
                },
                St = (0, ze.V)((function(e) {
                    return s.createElement(Ge.G7, {
                        style: e.style
                    }, e.children)
                }), new Ge.ZC(Oe.i.VERTICAL, !0), {
                    rememberFocusedChild: !1
                }),
                At = 1920,
                Ot = Ge.mM.create({
                    root: {
                        height: 1080,
                        width: At,
                        backgroundColor: Ue.i.DEEP_BLUE,
                        flexDirection: "column",
                        paddingTop: 186,
                        alignContent: "center",
                        alignItems: "center"
                    },
                    quickstartRoot: {
                        height: 1080,
                        width: At,
                        backgroundColor: Ue.i.DEEP_BLUE,
                        flexDirection: "column",
                        paddingTop: 153,
                        alignContent: "center",
                        alignItems: "center"
                    },
                    title: {
                        maxWidth: At,
                        color: Ue.i.OFF_WHITE,
                        paddingBottom: 9,
                        textAlign: "center"
                    },
                    subtitleContainer: {
                        maxWidth: 1038,
                        textAlign: "center",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 45,
                        minHeight: 114
                    },
                    quickstartSubtitleContainer: {
                        maxWidth: 1038,
                        textAlign: "center",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 30,
                        minHeight: 87
                    },
                    profileCardsContainer: {
                        width: 1224,
                        marginTop: 18
                    },
                    subtitle: (0, c.__assign)((0, c.__assign)({}, _t.B.L13), {
                        textAlign: "center",
                        maxWidth: 1038,
                        marginBottom: 12
                    }),
                    primeLogoWrapper: {
                        width: 222,
                        height: 42,
                        marginBottom: 42,
                        alignItems: "center"
                    },
                    primeLogo: {
                        width: 218,
                        height: 40
                    },
                    activityIndicatorContainer: {
                        width: 1920,
                        height: 1080,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: Ue.i.DEEP_BLUE
                    },
                    verticalNavigable: {
                        flexDirection: "column",
                        alignContent: "center",
                        alignItems: "center"
                    },
                    remasterTosGroupMessaging: {
                        marginTop: 57
                    }
                }),
                Nt = {
                    speakImmediately: h.CJ,
                    clearGlobalNavigationStateAction: b.vO
                },
                Lt = F.f.getInstance(),
                Mt = function(e) {
                    function t(n) {
                        var r, i = e.call(this, n) || this;
                        return i.trackingUpdateHandle = void 0, i.profileAutohighlightingTreatment = I.M.C, i
                            .currentActorAccessTokenAssociatedProfileId = null, i.shouldReportAvatarPressTime = !1, i.homePagePrefetched = !1, i
                            .isUnmounted = !1, i.isCustomerInRemasterTestingGroup = !1, i.onProfilesChange = function(e) {
                                i.setState({
                                    profilesList: e,
                                    pageLoadPending: !1
                                })
                            }, i.onCreateOrAssociatePermissionChange = function(e) {
                                i.setState({
                                    createOrAssociatePermission: e
                                })
                            }, i.onErrorLoadingProfilesChange = function(e) {
                                !i.state.errorType && e && i.setState({
                                    errorType: "LOAD_PROFILE_LIST",
                                    errorInBackground: L.Z.isInBackground()
                                })
                            }, i.setPinChallengeInlineErrorMessage = function(e) {
                                "ACCOUNT_PIN" === e ? i.setState({
                                    pinChallengeInlineMessage: {
                                        messageType: Y.G.PROFILES_SELECTION_PAGE_ERROR,
                                        message: (0, M.Hm)("AV_LRC_PROFILES_PIN_SETUP_REQUIRED_ACCOUNT_PIN")
                                    }
                                }) : "PROFILE_PIN" === e && i.setState({
                                    pinChallengeInlineMessage: {
                                        messageType: Y.G.PROFILES_SELECTION_PAGE_ERROR,
                                        message: (0, M.Hm)("AV_LRC_PROFILES_PIN_SETUP_REQUIRED_PROFILE_PIN")
                                    }
                                })
                            }, i.onNewProfilePress = function() {
                                i.props.showPinChallenge({
                                    onChallengeSuccess: i.onNewProfilePressCallback,
                                    permission: i.state.createOrAssociatePermission,
                                    isChallengeRequesterImplicitProfile: !0,
                                    showPinSetupRequiredMessaging: i.setPinChallengeInlineErrorMessage
                                })
                            }, i.onNewProfilePressCallback = function(e) {
                                (0, q.rz)({
                                    pinProof: e
                                }, i.props.navigateTo)
                            }, i.transitionToProfileEditpPage = function(e) {
                                var t;
                                i.props.showPinChallenge({
                                    onChallengeSuccess: function(t) {
                                        E.Z.getInstance().destroyPrefetchRequest(), (0, q.yx)({
                                            profileModel: e,
                                            pinProof: t
                                        }, i.props.navigateTo)
                                    },
                                    permission: null === (t = e.permissions) || void 0 === t ? void 0 : t.edit,
                                    challengeRequesterProfileId: e.id,
                                    isChallengeRequesterImplicitProfile: e.profileIsImplicit,
                                    showPinSetupRequiredMessaging: i.setPinChallengeInlineErrorMessage
                                })
                            }, i.onProfilePress = function(e, t) {
                                var n;
                                i.props.showPinChallenge({
                                    onChallengeSuccess: function() {
                                        return i.onProfilePressCallback(e, t)
                                    },
                                    permission: null === (n = e.permissions) || void 0 === n ? void 0 : n.entry,
                                    challengeRequesterProfileId: e.id,
                                    isChallengeRequesterImplicitProfile: e.profileIsImplicit,
                                    showPinSetupRequiredMessaging: i.setPinChallengeInlineErrorMessage
                                })
                            }, i.onProfilePressCallback = function(e, t) {
                                i.stopTimeToFirstProfilePressTimer(e);
                                var n = e.id,
                                    r = e.profileAgeGroup,
                                    o = e.profileIsImplicit,
                                    a = "".concat(K.T2, ".").concat(I.M[i.profileAutohighlightingTreatment]);
                                D.ZP.info("Attempted to select profile: ".concat(n), K.bW), i.recordProfileSelectionTimer("start"), G.AppEvents.log(
                                    (0, W.FD)()), i.state.accessTokenRequestPending ? D.ZP.error(
                                    "Failed to select profile as there was an access token request pending.", K.bW) : (i
                                    .recordProfileSelectionTimer("start", K.T2), i.recordProfileSelectionTimer("start", a), (0, Z.E3)(K.NY, K
                                        .g8), Q.c.pageMetric.count(1, X.p.WHOS_WATCHING, T.yN.PROFILE_SELECTED, {
                                        customContext: {
                                            activeLayer: g.E.JavaScript
                                        }
                                    }), i.setState({
                                        accessTokenRequestPending: !0
                                    }), ((0, V.O)() ? x.Z.getInstance().exchangeAccountAccessTokenForActorAccessToken(n, o || !1) : U(n)).then((
                                        function() {
                                            i.recordProfileSelectionTimer("stop", K.T2), i.recordProfileSelectionTimer("stop", a), D.ZP
                                                .info("Successfully loaded profile access token: ".concat(n), K.bW);
                                            try {
                                                var e = r === H.Le.ADULT;
                                                i.updateActiveProfile(n, e)
                                            } catch (e) {}
                                            i.props.clearGlobalNavigationStateAction(), G.AppEvents.log((0, W.qs)(i
                                                .getProfileClickstreamString(t, r))), i.navigateToNextPage()
                                        })).catch((function(e) {
                                        i.recordProfileSelectionTimer("clear", K.T2), i.recordProfileSelectionTimer("clear", a), i
                                            .recordProfileSelectionTimer("clear"), D.ZP.error(
                                                "Failed to load profile aware access token after selecting a profile", K.bW, void 0,
                                                e instanceof Error ? e.message :
                                                "ProfileAccessTokenExchanger failed but returned no error"), (0, Z.E3)(K.tz, K.g8), G
                                            .AppEvents.log((0, W.tR)()), i.displayProfileSelectionPageError("PROFILE_SELECTION")
                                    })).finally((function() {
                                        i.setState({
                                            accessTokenRequestPending: !1
                                        })
                                    })))
                            }, i.recordProfileSelectionTimer = function(e, t) {
                                var n = void 0;
                                switch (t && (n = [t]), e) {
                                    case "start":
                                        (0, Z.Xg)(K.LZ, K.g8, n);
                                        break;
                                    case "stop":
                                        (0, Z.N6)(K.LZ, n);
                                        break;
                                    case "clear":
                                        (0, Z.pQ)(K.LZ, n)
                                }
                            }, i.stopTimeToFirstProfilePressTimer = function(e) {
                                i.shouldReportAvatarPressTime && (i.shouldReportAvatarPressTime = !1, (0, Z.N6)(T.v5.TIME_TO_FIRST_PROFILE_PRESS, [I
                                    .M[i.profileAutohighlightingTreatment]
                                ]), (0, Z.N6)(T.v5.TIME_TO_FIRST_PROFILE_PRESS, [I.M[i.profileAutohighlightingTreatment], 0 === i.state
                                    .profilesList.indexOf(e) ? "First" : "NonFirst"
                                ]))
                            }, i.updateActiveProfile = function(e, t) {
                                Lt.setActiveProfile(e, t, !0)
                            }, i.displayProfileSelectionPageError = function(e) {
                                i.setState({
                                    errorType: e,
                                    errorInBackground: L.Z.isInBackground()
                                })
                            }, i.loadQuickStart = function(e) {
                                var t, n = i.currentActorAccessTokenAssociatedProfileId !== e,
                                    r = void 0 !== (null === (t = i.state.profilesList.find((function(t) {
                                        return t.id === e
                                    }))) || void 0 === t ? void 0 : t.continueWatchingCards),
                                    o = function(t) {
                                        D.ZP.info("Quickstart has been successfully loaded for ".concat(e)), i.isCurrentPageProfileSelectionPage() ?
                                            Lt.updateProfileQuickstart(e, t.continueWatchingCards, t.recommendedForYouCards) : D.ZP.info(
                                                "Quickstart data is not valid anymore as we're not on the Who's watching page anymore")
                                    },
                                    a = function() {};
                                if (i.isQuickstartEnabled && e && !r) {
                                    if (!n) return re({
                                        onSuccess: o,
                                        onFailure: a
                                    });
                                    U(e).then((function() {
                                        if (D.ZP.info("Successfully loaded profile access token: ".concat(e)), i
                                            .currentActorAccessTokenAssociatedProfileId = e, i.shouldLoadQuickstart(e)) return re({
                                            onSuccess: o,
                                            onFailure: a
                                        });
                                        D.ZP.info(
                                            "Focused another profile than the profile we obtained access token for or we're not on the Who's watching page anymore"
                                            )
                                    })).catch((function(e) {
                                        D.ZP.error("Failed to load profile aware access token after focusing quickstart buttons",
                                            void 0, e.message)
                                    }))
                                }
                            }, i.onQuickstartRowFocus = function(e) {
                                i.loadQuickStart(e)
                            }, i.onProfileFocus = function(e) {
                                i.currentFocusedProfileId = e
                            }, i.onProfileCardOrHomeButtonPress = function(e, t) {
                                i.currentActorAccessTokenAssociatedProfileId !== e ? U(e).then((function() {
                                    i.currentActorAccessTokenAssociatedProfileId = e, i.navigateToNextPageFromProfileCardsContainer(e,
                                        t)
                                })).catch((function() {})) : i.navigateToNextPageFromProfileCardsContainer(e, t)
                            }, i.navigateToNextPage = function() {
                                return (0, c.__awaiter)(i, void 0, void 0, (function() {
                                    var e, t, n, r;
                                    return (0, c.__generator)(this, (function(i) {
                                        return e = (null === (r = Lt.getActiveProfile()) || void 0 === r ? void 0 : r
                                                .profileAgeGroup) === H.Le.ADULT && this.isSkipToMLPEligible, void 0 ===
                                            this.isSkipToMLPEligible && D.ZP.info(
                                                "Navigated to another page before loading prime benefits or checking if MLP shown before"
                                                ), this.props.navigateToDeferredDestination ? (D.ZP.info(
                                                    "#navigateToNextPage - navigateToDeferredDestination"), D.ZP.flush(),
                                                this.props.navigateToDeferredDestination()) : e && (0, f.Vf)() ? (D.ZP.info(
                                                    "#navigateToNextPage - navigateToMLP"), D.ZP.flush(), A.ZP
                                                .pushToNavigationHistory({
                                                    pageType: w.Z.COLLECTION_PAGE,
                                                    pageParams: {}
                                                }), (0, f.a3)(), this.props.navigateTo(w.Z.NEW_CONFIRMATION_PAGE, {
                                                    ingressPoint: j.Rr.ProfileSelectionPage
                                                })) : (D.ZP.info("#navigateToNextPage - navigateToHomePage"), D.ZP.flush(),
                                                t = w.Z.COLLECTION_PAGE, n = {
                                                    transitionSource: "PROFILE_SELECTION_PAGE"
                                                }, this.props.navigateTo(t, (0, c.__assign)({
                                                    postBootstrapLoad: this.props.navigationParams.isAppLoad
                                                }, n))), [2]
                                    }))
                                }))
                            }, i.errorModalOnBubbleUp = function(e) {
                                return e.key !== O.UL.BACK && e.key !== O.UL.ESCAPE || (i.props.navigateTo(w.Z.HOMEPAGE, {
                                    transitionSource: "PROFILE_SELECTION_ERROR_MODAL"
                                }), !1)
                            }, i.handleLifeCycleEvent = function(e) {
                                e.type === N.Y5.ENTER_FOREGROUND && (i.state.errorType && i.state.errorInBackground && (0, ce.C)().then((
                                function() {
                                        Lt.getErrorLoadingProfiles() || i.setState({
                                            errorType: void 0,
                                            errorInBackground: void 0
                                        })
                                    })).catch((function() {})), i.shouldReportAvatarPressTime && i.startTimeToFirstProfilePressTimer(), i
                                    .prefetchHomePage())
                            }, i.shouldQuickstartBeDisplayed = function() {
                                return C.b.getInstance().isFeatureEnabledNoTrigger(_.L.ENABLE_QUICKSTART) && C.b.getInstance()
                                    .isFeatureEnabledNoTrigger(_.L.PROFILE_AUTOHIGHLIGHTING_WITH_ASYNC_STORAGE)
                            }, i.isQuickstartEnabled = i.shouldQuickstartBeDisplayed(), i.state = {
                                pageLoadPending: !i.props.navigationParams.isAppLoad || i.props.navigationParams.isAppLoad && i.props
                                    .navigationParams.back,
                                errorType: void 0,
                                errorInBackground: void 0,
                                accessTokenRequestPending: !1,
                                profilesList: Lt.getProfiles(),
                                createOrAssociatePermission: Lt.getCreateOrAssociatePermission()
                            }, i.shouldReportAvatarPressTime = i.props.navigationParams.isAppLoad, i.profileAutohighlightingTreatment = (0, V.O)() ?
                            I.M.T2 : I.M.C, i.shouldReportLoadDuration = i.props.navigationParams.isAppLoad || !1, i.props.navigationParams
                            .isAppLoad && !i.props.navigationParams.back || ((0, Z.Xg)(K.EW, K.g8), (0, Z.Xg)(T.v5.WHOS_WATCHING_LOAD_DURATION, K
                                .g8, [T.F7.OVERALL]), G.AppEvents.log((0, W.G6)(g.E.JavaScript)), (0, Z.Xg)(T.v5.WHOS_WATCHING_LOAD_DURATION, K
                                .g8, [T.F7.OVERALL, T.J$.NON_BOOTSTRAP]), (0, Z.E3)(T.v5.WHOS_WATCHING_LOAD_DURATION, K.g8, [T.F7.STARTED]), (0,
                                Z.E3)(T.v5.WHOS_WATCHING_LOAD_DURATION, K.g8, [T.F7.STARTED, T.J$.NON_BOOTSTRAP])), t.isFirstInstantiation && (t
                                .isFirstInstantiation = !1, (0, Z.fB)(T.v5.WHOS_WATCHING_LOAD_DURATION, [T.F7.OVERALL]), (0, Z.fB)(T.v5
                                    .WHOS_WATCHING_LOAD_DURATION, [T.F7.OVERALL, T.J$.BOOTSTRAP])), i.isCustomerInRemasterTestingGroup =
                            "remaster" === (null === (r = k.m.getInstance().getActivePilotProgram()) || void 0 === r ? void 0 : r.key), i
                    }
                    return (0, c.__extends)(t, e), t.prototype.prefetchHomePage = function() {
                        var e, t;
                        return (0, c.__awaiter)(this, void 0, void 0, (function() {
                            var n, r, i, o, a, s, u, l, d = this;
                            return (0, c.__generator)(this, (function(c) {
                                return n = this.props, r = n.navigationParams, i = n.navigateToDeferredDestination, o =
                                    Lt.getActiveProfile(), a = null === (e = null == o ? void 0 : o.permissions) ||
                                    void 0 === e ? void 0 : e.entry.type, s = !a || "ALLOWED" === a, !1 === this
                                    .homePagePrefetched && r.isAppLoad && void 0 === i && !1 === Lt
                                    .getErrorLoadingProfiles() && o && s && ((0, S._)() && (this.homePagePrefetched = !
                                        0, u = o.profileAgeGroup !== H.Le.CHILD ? "home" : "kids", l = o
                                        .profileAgeGroup !== H.Le.CHILD ? "home" : "merch", ((null === (t = v.ZP
                                                .getTokens()) || void 0 === t ? void 0 : t.accessTokenType) == y.TV
                                            .ACTOR ? Promise.resolve() : x.Z.getInstance()
                                            .exchangeAccountAccessTokenForActorAccessToken(o.id, o
                                                .profileIsImplicit || !1)).then((function() {
                                            d.isUnmounted || (E.Z.getInstance().prefetchPage(u, l, void 0, o
                                                    .id), (0, z._k)() && R.l.getInstance()
                                                .prefetchChannelNavigation())
                                        }), (function(e) {
                                            D.ZP.error(
                                                "Failed to load profile aware access token for prefetching",
                                                K.bW, void 0, e instanceof Error ? e.message :
                                                "ProfileAccessTokenExchanger failed but returned no error"
                                                ), (0, Z.E3)(T.v5
                                                .PREFETCHING_TOKEN_EXCHANGE_ERROR_METRIC, K.g8, void 0,
                                                !0)
                                        }))), (0, Z.E3)(T.v5.HOME_PAGE_PREFETCH_REQUEST, K.g8, void 0, !0)), [2]
                            }))
                        }))
                    }, Object.defineProperty(t.prototype, "canCreateNewProfile", {
                        get: function() {
                            var e, t = null === (e = this.state.createOrAssociatePermission) || void 0 === e ? void 0 : e.type;
                            return !t || "DENIED" !== t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.componentDidMount = function() {
                        var e = this.props.navigationParams,
                            t = e.isRedirectToProfilesManagementPage,
                            n = e.back,
                            r = e.isAppLoad;
                        this.currentFocusedProfileId = this.getDefaultProfileId(), !Lt.getErrorLoadingProfiles() && r && G.AppEvents.log((0, W
                                .QD)()), r ? (A.ZP.resetHistoryForProfileSelection(), n ? (this.loadProfileSelectionPage(), this.loadQuickStart(
                                this.currentFocusedProfileId)) : Lt.getErrorLoadingProfiles() ? (this.setState({
                                errorType: "LOAD_PROFILE_LIST",
                                errorInBackground: L.Z.isInBackground()
                            }), this.shouldReportLoadDuration && (this.shouldReportLoadDuration = !1, G.AppEvents.log((0, W.Vw)()), (0,
                                Z.pQ)(K.EW, [K.ms]), (0, Z.pQ)(K.EW), (0, Z.pQ)(T.v5.WHOS_WATCHING_LOAD_DURATION, [T.F7.RENDER]), (
                                0, Z.pQ)(T.v5.WHOS_WATCHING_LOAD_DURATION, [T.F7.RENDER, T.J$.BOOTSTRAP]), (0, Z.pQ)(T.v5
                                .WHOS_WATCHING_LOAD_DURATION, [T.F7.OVERALL]), (0, Z.pQ)(T.v5.WHOS_WATCHING_LOAD_DURATION, [T.F7
                                .OVERALL, T.J$.BOOTSTRAP
                            ]), this.trackingUpdateHandle && (d.NY(this.trackingUpdateHandle, (function(e, t) {}), {
                                waitForDeferredUpdates: !1
                            }), delete this.trackingUpdateHandle))) : (this.props.reportPageLoaded && this.props.reportPageLoaded(), u.Sj
                                .mark(l.Od.PageLoaded_Profiles), this.props.onPageLoaded && this.props.onPageLoaded(), L.Z
                            .isInBackground() || this.shouldReportAvatarPressTime && this.startTimeToFirstProfilePressTimer(), G.AppEvents
                                .log((0, W.i8)()), this.shouldReportLoadDuration && (this.shouldReportLoadDuration = !1, (0, Z.N6)(K.EW, [K
                                        .ms
                                    ]), (0, Z.N6)(K.EW), (0, Z.N6)(T.v5.WHOS_WATCHING_LOAD_DURATION, [T.F7.RENDER]), (0, Z.N6)(T.v5
                                        .WHOS_WATCHING_LOAD_DURATION, [T.F7.RENDER, T.J$.BOOTSTRAP]), (0, Z.Vk)(T.v5
                                        .WHOS_WATCHING_LOAD_DURATION, [T.F7.OVERALL]), (0, Z.Vk)(T.v5.WHOS_WATCHING_LOAD_DURATION, [T.F7
                                        .OVERALL, T.J$.BOOTSTRAP
                                    ]), (0, Z.E3)(T.v5.WHOS_WATCHING_LOAD_DURATION, K.g8, [T.F7.COMPLETED]), (0, Z.E3)(T.v5
                                        .WHOS_WATCHING_LOAD_DURATION, K.g8, [T.F7.COMPLETED, T.J$.BOOTSTRAP]), this.trackingUpdateHandle &&
                                    (d.NY(this.trackingUpdateHandle, (function(e, t) {
                                        (0, Z.DL)(K.EW, K.g8, e, t)
                                    }), {
                                        waitForDeferredUpdates: !1
                                    }), delete this.trackingUpdateHandle)))) : (this.loadProfileSelectionPage(), this.loadQuickStart(this
                                .currentFocusedProfileId)), this.checkSkipToMLPPrerequisites(), N.IT.subscribe(this.handleLifeCycleEvent), J.J
                            .evictAll(), L.Z.isInBackground() || this.prefetchHomePage(), Lt.addStateChangeHandler(F.v.Profiles, this
                                .onProfilesChange), Lt.addStateChangeHandler(F.v.CreateOrAssociatePermission, this
                                .onCreateOrAssociatePermissionChange), Lt.addStateChangeHandler(F.v.ErrorLoadingProfiles, this
                                .onErrorLoadingProfilesChange);
                        var i = Lt.getActiveProfile();
                        t && i && !n && this.transitionToProfileEditpPage(i)
                    }, t.prototype.componentDidUpdate = function(e, t) {
                        t.profilesList !== this.state.profilesList && (this.shouldReportLoadDuration && (this.shouldReportLoadDuration = !1, (0,
                                Z.N6)(K.EW, [K.ms]), (0, Z.N6)(K.EW), (0, Z.N6)(T.v5.WHOS_WATCHING_LOAD_DURATION, [T.F7.RENDER]), (0, Z
                                .N6)(T.v5.WHOS_WATCHING_LOAD_DURATION, [T.F7.RENDER, T.J$.NON_BOOTSTRAP]), (0, Z.N6)(T.v5
                                .WHOS_WATCHING_LOAD_DURATION, [T.F7.OVERALL]), (0, Z.N6)(T.v5.WHOS_WATCHING_LOAD_DURATION, [T.F7
                                .OVERALL, T.J$.NON_BOOTSTRAP
                            ]), (0, Z.E3)(T.v5.WHOS_WATCHING_LOAD_DURATION, K.g8, [T.F7.COMPLETED]), (0, Z.E3)(T.v5
                                .WHOS_WATCHING_LOAD_DURATION, K.g8, [T.F7.COMPLETED, T.J$.NON_BOOTSTRAP]), this.trackingUpdateHandle &&
                            (d.NY(this.trackingUpdateHandle, (function(e, t) {
                                (0, Z.DL)(K.EW, K.g8, e, t)
                            }), {
                                waitForDeferredUpdates: !1
                            }), delete this.trackingUpdateHandle), this.props.navigationParams.previousProfileManagementAction && ((0, Z
                                .Cq)(this.props.navigationParams.previousProfileManagementAction, K.Be), (0, Z.Cq)(this.props
                                .navigationParams.previousProfileManagementAction)), G.AppEvents.log((0, W.QD)())), G.AppEvents.log((0,
                            W.i8)()))
                    }, t.prototype.componentWillUnmount = function() {
                        N.IT.unsubscribe(this.handleLifeCycleEvent), (0, Z.pQ)(T.v5.TIME_TO_FIRST_PROFILE_PRESS, [I.M[this
                                .profileAutohighlightingTreatment]]), (0, Z.pQ)(T.v5.TIME_TO_FIRST_PROFILE_PRESS, [I.M[this
                                .profileAutohighlightingTreatment], "First"]), (0, Z.pQ)(T.v5.TIME_TO_FIRST_PROFILE_PRESS, [I.M[this
                                .profileAutohighlightingTreatment], "NonFirst"]), this.trackingUpdateHandle && (d.NY(this.trackingUpdateHandle,
                                (function(e, t) {}), {
                                    waitForDeferredUpdates: !1
                                }), delete this.trackingUpdateHandle), Lt.removeStateChangeHandler(F.v.Profiles, this.onProfilesChange), Lt
                            .removeStateChangeHandler(F.v.CreateOrAssociatePermission, this.onCreateOrAssociatePermissionChange), Lt
                            .removeStateChangeHandler(F.v.ErrorLoadingProfiles, this.onErrorLoadingProfilesChange), this.isUnmounted = !0
                    }, t.prototype.getProfileClickstreamString = function(e, t) {
                        var n = "a";
                        return t === H.Le.CHILD ? n = "c" : t === H.Le.TEEN && (n = "t"), "atv_profile_slct_" + String(e + 1) + "_" + n
                    }, t.prototype.startTimeToFirstProfilePressTimer = function() {
                        (0, Z.Xg)(T.v5.TIME_TO_FIRST_PROFILE_PRESS, K.g8, [I.M[this.profileAutohighlightingTreatment]]), (0, Z.Xg)(T.v5
                            .TIME_TO_FIRST_PROFILE_PRESS, K.g8, [I.M[this.profileAutohighlightingTreatment], "First"]), (0, Z.Xg)(T.v5
                            .TIME_TO_FIRST_PROFILE_PRESS, K.g8, [I.M[this.profileAutohighlightingTreatment], "NonFirst"])
                    }, t.prototype.getDefaultProfileId = function() {
                        var e;
                        return this.props.navigationParams.defaultProfileId || (null === (e = Lt.getActiveProfile()) || void 0 === e ? void 0 :
                            e.id) || null
                    }, t.prototype.render = function() {
                        return this.shouldReportLoadDuration && !this.trackingUpdateHandle && (this.trackingUpdateHandle = d.$E(), (0, Z.Xg)(K
                            .EW, K.g8, [K.ms]), (0, Z.Xg)(T.v5.WHOS_WATCHING_LOAD_DURATION, K.g8, [T.F7.RENDER]), G.AppEvents.log((0, W
                            .Fh)(g.E.JavaScript)), this.props.navigationParams.isAppLoad ? (0, Z.Xg)(T.v5.WHOS_WATCHING_LOAD_DURATION, K
                            .g8, [T.F7.RENDER, T.J$.BOOTSTRAP]) : (0, Z.Xg)(T.v5.WHOS_WATCHING_LOAD_DURATION, K.g8, [T.F7.RENDER, T.J$
                            .NON_BOOTSTRAP
                        ]), this.props.navigationParams.previousProfileManagementAction && (0, Z.Bs)(this.props.navigationParams
                            .previousProfileManagementAction, K.g8, K.Be)), this.state.errorType ? s.createElement(Ie, {
                            errorType: this.state.errorType,
                            onBubbleUpEvent: this.errorModalOnBubbleUp,
                            navigateTo: this.props.navigateTo
                        }) : s.createElement(Rt, {
                            pageLoadPending: this.state.pageLoadPending || !this.state.profilesList.length,
                            profiles: this.state.profilesList,
                            canCreateProfile: this.canCreateNewProfile,
                            speakImmediately: this.props.speakImmediately,
                            navigateTo: this.props.navigateTo,
                            defaultProfileId: this.getDefaultProfileId(),
                            inlineMessageModel: this.state.pinChallengeInlineMessage || this.props.navigationParams.inlineMessageModel,
                            onProfileCardOrHomeButtonPress: this.onProfileCardOrHomeButtonPress,
                            isQuickstartEnabled: this.isQuickstartEnabled,
                            previousProfileManagementAction: this.props.navigationParams.previousProfileManagementAction,
                            onProfilePress: this.onProfilePress,
                            onProfileFocus: this.onProfileFocus,
                            onNewProfilePress: this.onNewProfilePress,
                            onEditPress: this.transitionToProfileEditpPage,
                            onQuickstartRowFocus: this.onQuickstartRowFocus,
                            createOrAssociatePermission: this.state.createOrAssociatePermission,
                            accessTokenRequestPending: this.state.accessTokenRequestPending,
                            showRemasterTestingMessage: this.isCustomerInRemasterTestingGroup
                        })
                    }, t.prototype.loadProfileSelectionPage = function() {
                        this.shouldReportLoadDuration = !0, (0, ce.C)().catch((function() {}))
                    }, t.prototype.navigateToNextPageFromProfileCardsContainer = function(e, t) {
                        this.updateActiveProfile(e, !0), t && (this.props.clearGlobalNavigationStateAction(), this.navigateToNextPage())
                    }, t.prototype.shouldLoadQuickstart = function(e) {
                        return this.isCurrentPageProfileSelectionPage() && this.currentFocusedProfileId == e
                    }, t.prototype.isCurrentPageProfileSelectionPage = function() {
                        return P.Z.getCurrentPage() == w.Z.PROFILE_SELECTION_PAGE
                    }, t.prototype.checkSkipToMLPPrerequisites = function() {
                        return (0, c.__awaiter)(this, void 0, void 0, (function() {
                            var e;
                            return (0, c.__generator)(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return C.b.getInstance().isFeatureEnabledNoTrigger(_.L
                                            .REDUCED_STEPS_TO_MLP_SUPPORT) ? (e = this, [4, (0, f.wO)()]) : (this
                                            .isSkipToMLPEligible = !1, [2]);
                                    case 1:
                                        return e.isSkipToMLPEligible = t.sent(), [2]
                                }
                            }))
                        }))
                    }, t.isFirstInstantiation = !0, t
                }(s.Component),
                Dt = (0, $.n)((0, m.j9)((0, p.$j)(void 0, Nt)(Mt))),
                wt = s.memo((function(e) {
                    return s.createElement(r.y, {
                        key: "ProfileSelectionPage",
                        name: "ProfileSelectionPage",
                        appLoadDurationMetrics: (0, i.x)(),
                        pageMemoryAfterLoadDelayMillis: 1e4,
                        useReportPageLoadedCallback: !0
                    }, s.createElement(Dt, {
                        navigateTo: e.navigateTo,
                        navigationParams: (0, a.xQ)(e.navigationState),
                        destinationPageParams: e.navigationState.destinationPageParams,
                        destinationPageType: e.navigationState.destinationPageType,
                        onPageLoaded: o.Y
                    }))
                }))
        },
        87335: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initializeDirectionManager: function() {
                    return o
                }
            });
            var r = n(48837),
                i = n(34837);

            function o() {
                return i.Aw.initialize(r.vQ.getInstance().locale)
            }
        },
        3819: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initRustAppEvents: function() {
                    return r
                }
            });
            var r = function() {}
        },
        92405: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initializeRustFeatures: function() {
                    return i
                }
            });
            var r = n(74090),
                i = function() {
                    r.Gb.initialize()
                }
        },
        3798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var r = n(70655),
                i = n(76004),
                o = n(3307),
                a = n(45955),
                s = n(38235),
                c = n(87361),
                u = n(53706),
                l = n(52575),
                d = n(5574),
                p = n(28010),
                f = 500;

            function h() {
                return (0, r.__awaiter)(this, void 0, void 0, (function() {
                    var e, t, n;
                    return (0, r.__generator)(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return (e = (0, d.p)()) ? (i.AppEvents.log((0, l.D4)()), [4, (0, a.n)((0, p.nl)(), f,
                                    "Fetching setting from local storage").then((function(e) {
                                    return i.AppEvents.log((0, l.IH)(e)), s.p.getInstance()
                                        .setReducedMotionEnabled(e), e
                                })).catch((function(e) {
                                    return i.AppEvents.log((0, l.TE)(null == e ? void 0 : e.message)), !
                                        1
                                }))]) : [3, 2];
                            case 1:
                                return t = r.sent(), [3, 3];
                            case 2:
                                t = !(0, u.R)() && !(0, o.P)(), n = "Skipped setting retrieval from local storage. ".concat(
                                    t ?
                                    "Running JS app with standard hero rotation disabled, reduced motion setting enabled." :
                                    "Reduced motion setting disabled."), c.c.info(n), r.label = 3;
                            case 3:
                                return i.AppEvents.log((0, l.vC)(t, e)), [2]
                        }
                    }))
                }))
            }
        },
        89992: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                defaultSettingState: function() {
                    return a
                },
                settingsReducer: function() {
                    return s
                }
            });
            var r = n(70655),
                i = n(43803),
                o = n(83872),
                a = {
                    autoplayUserDisabled: !1,
                    currentItemId: void 0
                },
                s = function(e, t) {
                    switch (void 0 === e && (e = a), t.type) {
                        case i.K.SET_AUTOPLAY_SETTING_STATE:
                            return (0, r.__assign)((0, r.__assign)({}, e), {
                                autoplayUserDisabled: t.payload
                            });
                        case i.K.CLEAR_CURRENT_ITEM:
                            return (0, r.__assign)((0, r.__assign)({}, e), {
                                currentItemId: void 0
                            });
                        case i.K.LANGUAGE_SELECT:
                            return (0, r.__assign)((0, r.__assign)({}, e), {
                                currentItemId: o.At.Language
                            });
                        default:
                            return e
                    }
                }
        },
        14674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n(70655),
                i = n(16177),
                o = n(8019),
                a = n(45955),
                s = n(38235),
                c = n(4029),
                u = n(29236),
                l = n(90188),
                d = 500,
                p = "AutoplaySetting.Retrieval.Duration",
                f = "AutoplaySetting.Retrieval.Timeout",
                h = "autoplayFeatureStatePrecondition";

            function m() {
                return (0, r.__awaiter)(this, void 0, void 0, (function() {
                    return (0, r.__generator)(this, (function(e) {
                        return o.ZE.startTimer(p, h), [2, (0, a.n)((0, l.r9)(), d).then((function(e) {
                            s.p.getInstance().setAutoplayEnabled(!e), c.default.dispatch((0, u.Oq)(e))
                        })).catch((function() {
                            o.ZE.reportDataPoint(f, h, 1), i.ZP.error(
                                "Autoplay setting retrieval took more than ".concat(d, "ms"), [
                                    "Preconditions"
                                ])
                        })).finally((function() {
                            o.ZE.stopTimer(p)
                        }))]
                    }))
                }))
            }
        },
        49850: function(e, t, n) {
            "use strict";

            function r() {
                return Promise.resolve()
            }
            n.r(t), n.d(t, {
                downloadStaticAssets: function() {
                    return r
                }
            })
        },
        19540: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n(70655),
                i = n(41946);

            function o() {
                return (0, r.__awaiter)(this, void 0, void 0, (function() {
                    return (0, r.__generator)(this, (function(e) {
                        return [2, i.L.flushAllStores()]
                    }))
                }))
            }
        },
        26681: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n(70655),
                i = n(16177),
                o = n(88280);

            function a() {
                return (0, r.__awaiter)(this, void 0, void 0, (function() {
                    var e;
                    return (0, r.__generator)(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                try {
                                    e = function() {
                                        try {
                                            return function() {
                                                i.ZP.info(
                                                    "Attempting to read TREx connection params from ACM (via AppConfig)"
                                                    );
                                                var e = o.XL.getInstance().application;
                                                if (e && e.peerConnectionParameters) return i.ZP.info(
                                                    "TREx connection params found in AppConfig from ACM (via AppConfig)"
                                                    ), e.peerConnectionParameters
                                            }()
                                        } catch (e) {
                                            return void i.ZP.info(
                                                "Failed to get TREx peerConnectionParams from ACM / AppConfig: "
                                                .concat(e))
                                        }
                                    }()
                                } catch (e) {
                                    return i.ZP.error("Will not start TREx Core - error getting TREx peerConnectionParams: "
                                        .concat(e)), [2]
                                }
                                return e ? [4, Promise.all([n.e(712), n.e(715)]).then(n.bind(n, 56100))] : (i.ZP.info(
                                    "Will not start TREx Core - TREx peerConnectionParams weren't passed."), [2]);
                            case 1:
                                return t.sent().TRExConnection.initialize(e).catch((function(e) {
                                    return i.ZP.error("precondition failed TREx initialization - " + e)
                                })), [2]
                        }
                    }))
                }))
            }
        },
        42604: function(e, t) {
            "use strict";
            var n = "\\d+(?:[\\.,]\\d+)?",
                r = "P(?:(" + n + "W)|(" + n + "Y)?(" + n + "M)?(" + n + "D)?(?:T(" + n + "H)?(" + n + "M)?(" + n + "S)?)?)",
                i = ["weeks", "years", "months", "days", "hours", "minutes", "seconds"],
                o = Object.freeze({
                    years: 0,
                    months: 0,
                    weeks: 0,
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                }),
                a = new RegExp(r);
            t.Qc = function(e) {
                return e.match(a).slice(1).reduce((function(e, t, n) {
                    return e[i[n]] = parseFloat(t) || 0, e
                }), {})
            }, t.my = function(e, t) {
                e = Object.assign({}, o, e);
                var n = t ? t.getTime() : Date.now(),
                    r = new Date(n);
                return (function(e, t) {
                    e = Object.assign({}, o, e);
                    var n = t ? t.getTime() : Date.now(),
                        r = new Date(n);
                    return r.setFullYear(r.getFullYear() + e.years), r.setMonth(r.getMonth() + e.months), r.setDate(r.getDate() + e
                        .days), r.setHours(r.getHours() + e.hours), r.setMinutes(r.getMinutes() + e.minutes), r.setMilliseconds(r
                        .getMilliseconds() + 1e3 * e.seconds), r.setDate(r.getDate() + 7 * e.weeks), r
                }(e, r).getTime() - r.getTime()) / 1e3
            }
        },
        70151: function(e, t, n) {
            var r = n(278),
                i = n(73480);
            e.exports = function(e) {
                return i(r(e))
            }
        },
        15600: function(e) {
            var t = Math.max,
                n = Math.min;
            e.exports = function(e, r, i) {
                return e >= n(r, i) && e < t(r, i)
            }
        },
        25127: function(e, t, n) {
            var r = n(73480),
                i = n(52628);
            e.exports = function(e) {
                return r(i(e))
            }
        },
        48969: function(e, t, n) {
            var r = n(29932);
            e.exports = function(e, t) {
                return r(t, (function(t) {
                    return [t, e[t]]
                }))
            }
        },
        13866: function(e, t, n) {
            var r = n(48969),
                i = n(64160),
                o = n(68776),
                a = n(99294);
            e.exports = function(e) {
                return function(t) {
                    var n = i(t);
                    return "[object Map]" == n ? o(t) : "[object Set]" == n ? a(t) : r(t, e(t))
                }
            }
        },
        99294: function(e) {
            e.exports = function(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach((function(e) {
                    n[++t] = [e, e]
                })), n
            }
        },
        73480: function(e, t, n) {
            var r = n(69877);
            e.exports = function(e, t) {
                var n = -1,
                    i = e.length,
                    o = i - 1;
                for (t = void 0 === t ? i : t; ++n < t;) {
                    var a = r(n, o),
                        s = e[a];
                    e[a] = e[n], e[n] = s
                }
                return e.length = t, e
            }
        },
        94174: function(e, t, n) {
            var r = n(15600),
                i = n(18601),
                o = n(14841);
            e.exports = function(e, t, n) {
                return t = i(t), void 0 === n ? (n = t, t = 0) : n = i(n), e = o(e), r(e, t, n)
            }
        },
        69983: function(e, t, n) {
            var r = n(70151),
                i = n(25127),
                o = n(1469);
            e.exports = function(e) {
                return (o(e) ? r : i)(e)
            }
        },
        93220: function(e, t, n) {
            var r = n(13866)(n(3674));
            e.exports = r
        },
        55877: function(e, t, n) {
            var r = n(23570),
                i = n(71171),
                o = i;
            o.v1 = r, o.v4 = i, e.exports = o
        },
        45327: function(e) {
            for (var t = [], n = 0; n < 256; ++n) t[n] = (n + 256).toString(16).substr(1);
            e.exports = function(e, n) {
                var r = n || 0,
                    i = t;
                return [i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[
                    r++]], "-", i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]]].join("")
            }
        },
        85217: function(e) {
            var t = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !=
                typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (t) {
                var n = new Uint8Array(16);
                e.exports = function() {
                    return t(n), n
                }
            } else {
                var r = new Array(16);
                e.exports = function() {
                    for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255;
                    return r
                }
            }
        },
        23570: function(e, t, n) {
            var r, i, o = n(85217),
                a = n(45327),
                s = 0,
                c = 0;
            e.exports = function(e, t, n) {
                var u = t && n || 0,
                    l = t || [],
                    d = (e = e || {}).node || r,
                    p = void 0 !== e.clockseq ? e.clockseq : i;
                if (null == d || null == p) {
                    var f = o();
                    null == d && (d = r = [1 | f[0], f[1], f[2], f[3], f[4], f[5]]), null == p && (p = i = 16383 & (f[6] << 8 | f[7]))
                }
                var h = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                    m = void 0 !== e.nsecs ? e.nsecs : c + 1,
                    g = h - s + (m - c) / 1e4;
                if (g < 0 && void 0 === e.clockseq && (p = p + 1 & 16383), (g < 0 || h > s) && void 0 === e.nsecs && (m = 0), m >= 1e4)
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                s = h, c = m, i = p;
                var v = (1e4 * (268435455 & (h += 122192928e5)) + m) % 4294967296;
                l[u++] = v >>> 24 & 255, l[u++] = v >>> 16 & 255, l[u++] = v >>> 8 & 255, l[u++] = 255 & v;
                var y = h / 4294967296 * 1e4 & 268435455;
                l[u++] = y >>> 8 & 255, l[u++] = 255 & y, l[u++] = y >>> 24 & 15 | 16, l[u++] = y >>> 16 & 255, l[u++] = p >>> 8 | 128, l[u++] =
                    255 & p;
                for (var E = 0; E < 6; ++E) l[u + E] = d[E];
                return t || a(l)
            }
        },
        71171: function(e, t, n) {
            var r = n(85217),
                i = n(45327);
            e.exports = function(e, t, n) {
                var o = t && n || 0;
                "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
                var a = (e = e || {}).random || (e.rng || r)();
                if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
                    for (var s = 0; s < 16; ++s) t[o + s] = a[s];
                return t || i(a)
            }
        }
    }
]);
//IG01-TXT
//pROerH/ZMSG2qtWc9fiywpyu49V4xqG8/ZGXlH8EXWmoOSj47iodUfkG615PNsKVkAA4vj41S6Xr/uvw/mSdoRiCJ9OZNUFt0TUvrZ3rvPKw7LO9siP/rC6XHxyBFya37yys/jFn1BHkQkMs9GBDy0+INQ+/D3OGOPb1IbFdjwMEQ5wsAajTK8mUYSSEuaRcpT81lgtUn6Z3Nv4H/XOYs3GZ4YlfyVHidVN6WPfu6Y+6Fby4aH265O3w/qNyBmb/9z273aQ1su8gFVL/hoEtDrtEM3avhYK+cgOGKr56JmqTdG8HVt9QM2uPdx09GMIoOvqz0rzCmVzmDdN6uw3diA==:IG01-TXT
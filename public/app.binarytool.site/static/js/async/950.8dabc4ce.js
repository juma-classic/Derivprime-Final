"use strict";
(self.webpackChunkbot = self.webpackChunkbot || []).push([
    ["950"], {
        53615: function(e, t, n) {
            n.r(t), n.d(t, {
                default: () => tN
            });
            var l, o = n("85893"),
                i = n("67294"),
                a = n("67026"),
                r = n("92198"),
                s = n("89250");
            let c = e => {
                let {
                    is_open: t,
                    toggleModal: n,
                    onDontShowAgain: l
                } = e;
                return ((0, i.useEffect)(() => {
                    let e = e => {
                        "Escape" === e.key && t && n()
                    };
                    return t && (document.addEventListener("keydown", e), document.body.style.overflow = "hidden"), () => {
                        document.removeEventListener("keydown", e), document.body.style.overflow = "unset"
                    }
                }, [t, n]), t) ? (0, o.jsx)("div", {
                    className: "community-popup-modal",
                    onClick: e => {
                        e.target === e.currentTarget && n()
                    },
                    children: (0, o.jsxs)("div", {
                        className: "community-popup-modal__container",
                        children: [(0, o.jsx)("button", {
                            className: "community-popup-modal__close",
                            onClick: n,
                            "aria-label": "Close modal",
                            children: (0, o.jsx)("svg", {
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: (0, o.jsx)("path", {
                                    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                                })
                            })
                        }), (0, o.jsxs)("div", {
                            className: "community-popup-modal__header",
                            children: [(0, o.jsx)("h2", {
                                className: "community-popup-modal__header__title",
                                children: "\uD83D\uDE80 Join Our Trading Community"
                            }), (0, o.jsx)("p", {
                                className: "community-popup-modal__header__subtitle",
                                children: "Connect & Grow Together"
                            })]
                        }), (0, o.jsx)("div", {
                            className: "community-popup-modal__body",
                            children: (0, o.jsxs)("div", {
                                className: "community-popup-modal__content",
                                children: [(0, o.jsx)("p", {
                                    className: "community-popup-modal__message",
                                    children: "\uD83D\uDCAC Connect with fellow traders! Share your trading experiences, strategies, and get the latest updates on new features and classes."
                                }), (0, o.jsxs)("div", {
                                    className: "community-popup-modal__buttons",
                                    children: [(0, o.jsx)("button", {
                                        className: "community-popup-modal__whatsapp-btn",
                                        onClick: () => {
                                            window.open("https://chat.whatsapp.com/BUKlzOL61JXDhxsJ6esoq3", "_blank")
                                        },
                                        children: "Join WhatsApp Group"
                                    }), (0, o.jsx)("button", {
                                        className: "community-popup-modal__telegram-btn",
                                        onClick: () => {
                                            window.open("https://t.me/binarytooltraders", "_blank")
                                        },
                                        children: "Join Telegram Group"
                                    })]
                                }), (0, o.jsx)("p", {
                                    className: "community-popup-modal__benefits",
                                    children: "Get access to strategies, bots and guides sent earlier on our channel"
                                }), (0, o.jsx)("button", {
                                    className: "community-popup-modal__channel-btn",
                                    onClick: () => {
                                        window.open("https://t.me/binarytoolupdates", "_blank")
                                    },
                                    children: "Join Our Telegram Channel"
                                })]
                            })
                        }), (0, o.jsxs)("div", {
                            className: "community-popup-modal__footer",
                            children: [(0, o.jsx)("button", {
                                className: "community-popup-modal__dont-show-btn",
                                onClick: l,
                                children: "No Thanks"
                            }), (0, o.jsx)("button", {
                                className: "community-popup-modal__close-btn",
                                onClick: n,
                                children: "Maybe Later"
                            })]
                        })]
                    })
                }) : null
            };
            var d = n("30453"),
                u = n("37979"),
                h = n("2502"),
                m = n("89471");
            let g = function() {
                let e = (0, s.TH)(),
                    t = (0, s.s0)();
                return {
                    deleteQueryString: function(n) {
                        let l = new URLSearchParams(e.search);
                        l.delete(n), t({
                            search: l.toString()
                        }, {
                            replace: !0
                        })
                    },
                    queryString: function() {
                        let t = new URLSearchParams(e.search),
                            n = {};
                        return t.forEach((e, t) => {
                            n[t] = e
                        }), n
                    }(),
                    setQueryString: function(n) {
                        ! function(n) {
                            let l = new URLSearchParams(e.search);
                            Object.entries(n).forEach(e => {
                                let [t, n] = e;
                                void 0 === n ? l.delete(t) : l.set(t, n)
                            }), t({
                                search: l.toString()
                            }, {
                                replace: !0
                            })
                        }(n)
                    }
                }
            };

            function x(e) {
                let {
                    deleteQueryString: t,
                    queryString: n,
                    setQueryString: l
                } = g(), {
                    isDesktop: o
                } = (0, h.F)(), [a, r] = (0, m.Sx)(), s = () => {
                    if (!n.modal && r.setAll([]), (null == e ? void 0 : e.shouldReinitializeModals) !== void 0 && !1 === e.shouldReinitializeModals) t("modal");
                    else {
                        let e = n.modal;
                        if (e) {
                            let t = e.split(","),
                                n = t.slice(-1)[0];
                            r.setAll([]), t.forEach(e => {
                                r.set(e, !o)
                            }), r.set(n, !0)
                        }
                    }
                };
                return (0, i.useEffect)(() => {
                    s()
                }, []), (0, i.useEffect)(() => {
                    !(null == n ? void 0 : n.modal) && r.reset()
                }, [null == n ? void 0 : n.modal]), (0, m.OR)("popstate", () => {
                    s()
                }), {
                    hideModal: e => {
                        let o = n.modal;
                        if (o) {
                            let n = o.split(",");
                            if (null == e ? void 0 : e.shouldHideAllModals) a.forEach((e, n) => {
                                r.set(n, !1), t("modal")
                            });
                            else if (null == e ? void 0 : e.shouldHidePreviousModals) {
                                if (n.length > 1) {
                                    let e = n.shift();
                                    n.forEach(e => {
                                        r.set(e, !1)
                                    }), n = [e ? ? ""], l({
                                        modal: e
                                    })
                                } else 1 === n.length ? l({
                                    modal: n[0]
                                }) : t("modal")
                            } else {
                                let e = n.pop(),
                                    o = n.slice(-1)[0];
                                o ? (r.set(e, !1), r.set(o, !0)) : r.set(e, !1), 0 === n.length ? t("modal") : l({
                                    modal: n.join(",")
                                })
                            }
                        }
                    },
                    isModalOpenFor: e => a.get(e) || !1,
                    showModal: (e, t) => {
                        let i = n.modal;
                        if (i) {
                            let n = i.split(","),
                                a = n.slice(-1)[0];
                            if (a === e) return;
                            (null == t ? void 0 : t.shouldStackModals) === !1 ? r.set(a, !1) : r.set(a, (null == t ? void 0 : t.shouldStackModals) || !o), r.set(e, !0), n.push(e), l({
                                modal: (null == t ? void 0 : t.shouldClearPreviousModals) ? e : n.join(",")
                            })
                        } else r.set(e, !0), l({
                            modal: e
                        })
                    }
                }
            }
            let p = () => {
                let e = localStorage.getItem("active_tab"),
                    t = ["dashboard", "bot_builder", "chart", "tutorial"],
                    n = t[Number(e)],
                    l = window.location.href.split("#")[0];
                return `${l}#${n}`
            };
            var _ = n("32305"),
                v = n("96223"),
                j = n("3693"),
                b = n("98146"),
                f = n("64410"),
                y = n("918"),
                w = n("50051"),
                C = n("16496"),
                k = n("59001"),
                N = n("57218"),
                I = n("12811"),
                Z = n("28505"),
                S = n("73971"),
                L = n("99243"),
                z = n("63066"),
                E = n("96396"),
                T = n("14249"),
                M = n("45322"),
                F = n("34273"),
                A = n("473");
            let D = [{
                code: "EN",
                displayName: "English",
                icon: (0, o.jsx)(_.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(_.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(_.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "AR",
                displayName: "العربية",
                icon: (0, o.jsx)(v.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(v.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(v.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "BN",
                displayName: "বাংলা",
                icon: (0, o.jsx)(j.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(j.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(j.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "DE",
                displayName: "Deutsch",
                icon: (0, o.jsx)(b.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(b.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(b.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ES",
                displayName: "Espa\xf1ol",
                icon: (0, o.jsx)(f.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(f.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(f.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "FR",
                displayName: "Fran\xe7ais",
                icon: (0, o.jsx)(y.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(y.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(y.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "IT",
                displayName: "Italiano",
                icon: (0, o.jsx)(w.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(w.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(w.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "SW",
                displayName: "Kiswahili",
                icon: (0, o.jsx)(C.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(C.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(C.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "KM",
                displayName: "ខ្មែរ",
                icon: (0, o.jsx)(k.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(k.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(k.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "KO",
                displayName: "한국어",
                icon: (0, o.jsx)(N.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(N.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(N.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "PL",
                displayName: "Polish",
                icon: (0, o.jsx)(I.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(I.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(I.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "PT",
                displayName: "Portugu\xeas",
                icon: (0, o.jsx)(Z.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(Z.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(Z.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "RU",
                displayName: "Русский",
                icon: (0, o.jsx)(S.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(S.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(S.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "SI",
                displayName: "සිංහල",
                icon: (0, o.jsx)(L.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(L.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(L.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "TH",
                displayName: "ไทย",
                icon: (0, o.jsx)(z.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(z.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(z.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "TR",
                displayName: "T\xfcrk\xe7e",
                icon: (0, o.jsx)(E.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(E.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(E.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "UZ",
                displayName: "O'zbek",
                icon: (0, o.jsx)(T.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(T.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(T.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "VI",
                displayName: "Tiếng Việt",
                icon: (0, o.jsx)(M.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(M.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(M.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ZH_CN",
                displayName: "简体中文",
                icon: (0, o.jsx)(F.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(F.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(F.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ZH_TW",
                displayName: "繁體中文",
                icon: (0, o.jsx)(A.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, o.jsx)(A.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, o.jsx)(A.Z, {
                    height: 14.67,
                    width: 22
                })
            }];
            var P = n("48059"),
                R = n("44412"),
                O = n("96877"),
                U = n("83257"),
                $ = n("53261"),
                B = n("21456"),
                H = n("64915");
            let V = (0, O.Pi)(() => {
                let {
                    is_dark_mode_on: e,
                    toggleTheme: t
                } = (0, U.Z)(), {
                    localize: n
                } = (0, P.T_)();
                return (0, o.jsx)(H.u, {
                    as: "button",
                    className: "app-footer__icon",
                    tooltipContent: n("Change theme"),
                    onClick: t,
                    children: e ? (0, o.jsx)(B.Z, {
                        iconSize: "xs"
                    }) : (0, o.jsx)($.Z, {
                        iconSize: "xs"
                    })
                })
            });
            var X = n("83606");
            let q = () => {
                let {
                    isDesktop: e
                } = (0, h.F)(), t = new Date().getFullYear(), n = `\xa9 ${t} BinaryTool`;
                return (0, o.jsx)(H.u, {
                    as: "div",
                    className: "app-footer__copyright",
                    "data-testid": "dt_copyright",
                    tooltipContent: "All rights reserved. Unauthorized copying, modification, or resale is prohibited.",
                    children: (0, o.jsx)(X.x, {
                        size: e ? "xs" : "sm",
                        color: "less-prominent",
                        children: n
                    })
                })
            };
            var J = n("79655"),
                G = n("66175"),
                K = n("45452"),
                W = n("12838");
            let Y = () => {
                    let e = W.fV.getValue(W.sE.configServerURL);
                    return e ? (0, o.jsxs)(K.Z, {
                        className: "app-footer__endpoint",
                        color: "red",
                        size: "s",
                        children: ["The server", " ", (0, o.jsx)(J.rU, {
                            className: "app-footer__endpoint-text",
                            to: G.xOw.endpoint,
                            children: "endpoint"
                        }), " ", `is: ${e}`]
                    }) : null
                },
                Q = {
                    exit: ["exitFullscreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
                    request: ["requestFullscreen", "webkitRequestFullscreen", "mozRequestFullScreen", "msRequestFullscreen"],
                    screenChange: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                    screenElement: ["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"]
                },
                ee = () => {
                    let [e, t] = (0, i.useState)(!1), {
                        exit: n,
                        request: l,
                        screenChange: o,
                        screenElement: a
                    } = Q, r = (0, i.useCallback)(() => t(a.some(e => document[e])), [a]);
                    return (0, i.useEffect)(() => (o.forEach(e => {
                        document.addEventListener(e, r, !1)
                    }), () => {
                        o.forEach(e => {
                            document.removeEventListener(e, r, !1)
                        })
                    }), [r, o]), {
                        toggleFullScreenMode: o => {
                            null == o || o.stopPropagation();
                            let i = n.find(e => document[e]),
                                a = l.find(e => document.documentElement[e]);
                            e && i ? document[i]() : a ? document.documentElement[a]() : t(!1)
                        }
                    }
                };
            var et = n("69914");
            let en = () => {
                    let {
                        toggleFullScreenMode: e
                    } = ee(), {
                        localize: t
                    } = (0, P.T_)();
                    return (0, o.jsx)(H.u, {
                        as: "button",
                        className: "app-footer__icon",
                        onClick: e,
                        tooltipContent: t("Full screen"),
                        children: (0, o.jsx)(et.Z, {
                            iconSize: "xs"
                        })
                    })
                },
                el = e => {
                    let {
                        openLanguageSettingModal: t
                    } = e, {
                        currentLang: n,
                        localize: l
                    } = (0, P.T_)(), a = (0, i.useMemo)(() => {
                        var e;
                        return null === (e = D.find(e => {
                            let {
                                code: t
                            } = e;
                            return t == n
                        })) || void 0 === e ? void 0 : e.placeholderIcon
                    }, [n]);
                    return (0, o.jsxs)(H.u, {
                        as: "button",
                        className: "app-footer__language",
                        onClick: t,
                        tooltipContent: l("Language"),
                        children: [a, (0, o.jsx)(K.Z, {
                            size: "xs",
                            weight: "bold",
                            children: n
                        })]
                    })
                },
                eo = () => "undefined" == typeof navigator || "boolean" != typeof navigator.onLine || navigator.onLine,
                ei = () => {
                    let [e, t] = (0, i.useState)(eo()), n = () => t(!0), l = () => t(!1);
                    return (0, i.useEffect)(() => (window.addEventListener("online", n), window.addEventListener("offline", l), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", l)
                    }), []), e
                },
                ea = () => {
                    let [e, t] = (0, i.useState)("online"), n = ei();
                    return (0, i.useEffect)(() => {
                        n ? t("online") : t("offline")
                    }, [n]), e
                },
                er = () => ({
                    blinking: {
                        className: "app-footer__network-status-online app-footer__network-status-blinking",
                        tooltip: (0, P.NC)("Connecting to server")
                    },
                    offline: {
                        className: "app-footer__network-status-offline",
                        tooltip: "Offline"
                    },
                    online: {
                        className: "app-footer__network-status-online",
                        tooltip: "Online"
                    }
                }),
                es = () => {
                    let e = ea(),
                        {
                            className: t,
                            tooltip: n
                        } = (0, i.useMemo)(() => er()[e], [e]);
                    return (0, o.jsx)(H.u, {
                        as: "div",
                        className: "app-footer__icon",
                        "data-testid": "dt_network_status",
                        tooltipContent: (0, P.NC)("Network status: {{status}}", {
                            status: n
                        }),
                        children: (0, o.jsx)("div", {
                            className: (0, a.Z)("app-footer__network-status", t),
                            "data-testid": "dt_circle"
                        })
                    })
                };
            var ec = n("30381"),
                ed = n.n(ec),
                eu = n("46234"),
                eh = n("27179");
            let em = (0, O.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, h.F)(), {
                        common: t
                    } = (0, eu.oR)() ? ? {
                        common: {
                            server_time: ed()()
                        }
                    };
                    return (0, o.jsx)(H.u, {
                        as: "div",
                        className: "app-footer__icon",
                        "data-testid": "dt_server_time",
                        tooltipContent: t.server_time.format(eh.kT),
                        children: (0, o.jsx)(X.x, {
                            size: e ? "xs" : "sm",
                            children: t.server_time.format(eh.Yp)
                        })
                    })
                }),
                eg = () => {
                    let {
                        currentLang: e = "EN",
                        localize: t,
                        switchLanguage: n
                    } = (0, P.T_)(), {
                        hideModal: l,
                        isModalOpenFor: i,
                        showModal: a
                    } = x();
                    return (0, o.jsxs)("footer", {
                        className: "app-footer",
                        children: [(0, o.jsx)(en, {}), (0, o.jsx)(el, {
                            openLanguageSettingModal: () => a("DesktopLanguagesModal")
                        }), (0, o.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, o.jsx)(V, {}), (0, o.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, o.jsx)(em, {}), (0, o.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, o.jsx)(es, {}), (0, o.jsx)(Y, {}), (0, o.jsx)(q, {}), i("DesktopLanguagesModal") && (0, o.jsx)(R.u, {
                            headerTitle: t("Select Language"),
                            isModalOpen: !0,
                            languages: D,
                            onClose: l,
                            onLanguageSwitch: e => {
                                n(e), l(), window.location.replace(p()), window.location.reload()
                            },
                            selectedLanguage: e
                        })]
                    })
                };
            var ex = n("8015");
            let ep = {
                    aud: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyAudIcon
                    }))),
                    bch: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBchIcon
                    }))),
                    btc: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBtcIcon
                    }))),
                    busd: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBusdIcon
                    }))),
                    dai: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDaiIcon
                    }))),
                    eth: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEthIcon
                    }))),
                    eur: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEurIcon
                    }))),
                    "eur-check": (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEurIcon
                    }))),
                    eurs: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEursIcon
                    }))),
                    eusdt: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    gbp: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyGbpIcon
                    }))),
                    idk: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyIdkIcon
                    }))),
                    ltc: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyLtcIcon
                    }))),
                    pax: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyPaxIcon
                    }))),
                    tusd: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyTusdIcon
                    }))),
                    tusdt: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    unknown: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyPlaceholderIcon
                    }))),
                    usd: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdIcon
                    }))),
                    usdc: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdcIcon
                    }))),
                    usdk: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdkIcon
                    }))),
                    ust: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    virtual: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDemoIcon
                    }))),
                    xrp: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXrpIcon
                    }))),
                    algo: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyAlgoIcon
                    }))),
                    avax: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyAvaxIcon
                    }))),
                    bat: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBatIcon
                    }))),
                    bnb: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBnbIcon
                    }))),
                    dash: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDashIcon
                    }))),
                    doge: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDogeIcon
                    }))),
                    dot: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDotIcon
                    }))),
                    eos: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEosIcon
                    }))),
                    etc: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEtcIcon
                    }))),
                    fil: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyFilIcon
                    }))),
                    iota: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyIotaIcon
                    }))),
                    link: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyLinkIcon
                    }))),
                    matic: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyMaticIcon
                    }))),
                    mkr: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyMkrIcon
                    }))),
                    mcd: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyMultiCollateralDaiIcon
                    }))),
                    neo: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyNeoIcon
                    }))),
                    none: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyNoneIcon
                    }))),
                    omg: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyOmgIcon
                    }))),
                    p2p: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyP2PIcon
                    }))),
                    scd: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencySingleCollateralDaiIcon
                    }))),
                    sol: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencySolIcon
                    }))),
                    terra: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyTerraIcon
                    }))),
                    trx: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyTrxIcon
                    }))),
                    uni: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUniIcon
                    }))),
                    xlm: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXlmIcon
                    }))),
                    xmr: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXmrIcon
                    }))),
                    xtz: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXtzIcon
                    }))),
                    zec: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyZecIcon
                    })))
                },
                e_ = {
                    ksh: (0, i.lazy)(() => n.e("121").then(n.bind(n, 60856)).then(e => ({
                        default: e.FlagKenyaIcon
                    })))
                },
                ev = e => {
                    let {
                        currency: t,
                        isVirtual: n
                    } = e, l = null == t ? void 0 : t.toLowerCase();
                    if (!n) {
                        let e = e_[l];
                        if (e) return (0, o.jsx)(i.Suspense, {
                            fallback: null,
                            children: (0, o.jsx)(e, {
                                iconSize: "sm"
                            })
                        })
                    }
                    let a = n ? ep.virtual : ep[l] || ep.unknown;
                    return (0, o.jsx)(i.Suspense, {
                        fallback: null,
                        children: (0, o.jsx)(a, {
                            iconSize: "sm"
                        })
                    })
                };
            var ej = n("79649"),
                eb = n("76546");
            let ef = e => {
                var t, n;
                let {
                    allBalanceData: l
                } = e, {
                    accountList: a,
                    activeLoginid: r
                } = (0, ej.T)(), s = (0, eu.oR)(), c = (null == s ? void 0 : null === (t = s.ui) || void 0 === t ? void 0 : t.is_ksh_currency_enabled) ? ? !1, d = (0, i.useMemo)(() => null == a ? void 0 : a.find(e => e.loginid === r), [r, a]), u = null == l ? void 0 : null === (n = l.accounts) || void 0 === n ? void 0 : n[(null == d ? void 0 : d.loginid) ? ? ""];
                return {
                    data: (0, i.useMemo)(() => {
                        var e;
                        let t = (null == u ? void 0 : u.balance) ? ? 0,
                            n = "USD" === String(null == d ? void 0 : d.currency).toUpperCase(),
                            l = c && n,
                            i = l ? `KSH ${(t*eb.z).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}` : (0, G.oC5)(null == t ? void 0 : t.toFixed((0, G.i4S)(null == u ? void 0 : u.currency))) ? ? "0";
                        return d ? { ...d,
                            balance: i,
                            currency: l ? "" : null == d ? void 0 : d.currency,
                            currencyLabel: (null == d ? void 0 : d.is_virtual) ? (0, P.NC)("Demo") : l ? "" : null == d ? void 0 : d.currency,
                            icon: (0, o.jsx)(ev, {
                                currency: l ? "ksh" : null == d ? void 0 : null === (e = d.currency) || void 0 === e ? void 0 : e.toLowerCase(),
                                isVirtual: !!(null == d ? void 0 : d.is_virtual)
                            }),
                            isVirtual: !!(null == d ? void 0 : d.is_virtual),
                            isActive: (null == d ? void 0 : d.loginid) === r
                        } : void 0
                    }, [d, r, l, c])
                }
            };
            var ey = n("77898"),
                ew = n("16857"),
                eC = n("32767"),
                ek = n("99466"),
                eN = n("42913"),
                eI = n("54458"),
                eZ = n("62269"),
                eS = n("28607"),
                eL = n("56594");
            let ez = {
                    default: {
                        logo: "/logo.svg",
                        social: {
                            whatsapp: "https://whatsapp.com/channel/0029VaDbybILo4heuWEGso3B",
                            telegram: "https://t.me/binarytools",
                            youtube: "https://www.youtube.com/@binarytooltutorial",
                            instagram: "https://www.instagram.com/binarytoolsite/",
                            tiktok: "https://www.tiktok.com/@binarytools",
                            facebook: "https://www.facebook.com/profile.php?id=61559570918487"
                        }
                    }
                },
                eE = () => {
                    var e, t, n;
                    let [l, a] = (0, i.useState)(!1), {
                        logo: r,
                        name: s,
                        social: c
                    } = ez[window.location.hostname] || ez.default, d = (0, eu.oR)(), u = null == d ? void 0 : d.client, h = u ? Object.values(u.accounts || {}).find(e => !e.is_virtual) : void 0;
                    h && (null === (n = u.all_accounts_balance) || void 0 === n || null === (t = n.accounts) || void 0 === t || null === (e = t[h.loginid]) || void 0 === e || e.balance);
                    let m = (null == h ? void 0 : h.currency) ? ? "USD";
                    return (0, G.O$T)(m), (0, o.jsxs)("div", {
                        className: "d-apollo-logo",
                        children: [(0, o.jsxs)("div", {
                            className: "logo-holder",
                            children: [r && (0, o.jsx)("img", {
                                src: r,
                                alt: "custom Logo",
                                className: "d-apollo-logo__image"
                            }), (0, o.jsx)(K.Z, {
                                color: "less-prominent",
                                lineHeight: "xs",
                                size: "xs",
                                weight: "bold",
                                align: "center",
                                className: "dc-contract-card-message",
                                children: s
                            })]
                        }), (0, o.jsx)("button", {
                            className: "d-apollo-logo__icon",
                            onClick: () => a(!0),
                            children: (0, o.jsx)(eC.Kz1, {})
                        }), l && (0, o.jsx)("div", {
                            className: "modal-overlay",
                            onClick: () => a(!1),
                            children: (0, o.jsxs)("div", {
                                className: "modal-content",
                                onClick: e => e.stopPropagation(),
                                children: [(0, o.jsx)("h3", {
                                    children: "Follow Us"
                                }), (0, o.jsxs)("ul", {
                                    children: [c.whatsapp && (0, o.jsx)("li", {
                                        children: (0, o.jsxs)("a", {
                                            href: c.whatsapp,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, o.jsx)(ek.Z, {}), " WhatsApp Group"]
                                        })
                                    }), [2, 3, 4, 5, 6].map(e => {
                                        let t = c[`whatsapp${e}`];
                                        return t ? (0, o.jsx)("li", {
                                            children: (0, o.jsxs)("a", {
                                                href: t,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [(0, o.jsx)(ek.Z, {}), " WhatsApp Group ", e]
                                            })
                                        }, `whatsapp${e}`) : null
                                    }), c.telegram && (0, o.jsx)("li", {
                                        children: (0, o.jsxs)("a", {
                                            href: c.telegram,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, o.jsx)(eN.Z, {}), " Telegram"]
                                        })
                                    }), c.youtube && (0, o.jsx)("li", {
                                        children: (0, o.jsxs)("a", {
                                            href: c.youtube,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, o.jsx)(eI.Z, {}), " YouTube"]
                                        })
                                    }), c.instagram && (0, o.jsx)("li", {
                                        children: (0, o.jsxs)("a", {
                                            href: c.instagram,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, o.jsx)(eZ.Z, {}), " Instagram"]
                                        })
                                    }), c.tiktok && (0, o.jsx)("li", {
                                        children: (0, o.jsxs)("a", {
                                            href: c.tiktok,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, o.jsx)(eS.Z, {}), " TikTok"]
                                        })
                                    }), c.facebook && (0, o.jsx)("li", {
                                        children: (0, o.jsxs)("a", {
                                            href: c.facebook,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [(0, o.jsx)(eL.Z, {}), " Facebook"]
                                        })
                                    })]
                                }), (0, o.jsx)("button", {
                                    onClick: () => a(!1),
                                    children: "Close"
                                })]
                            })
                        })]
                    })
                },
                eT = () => {
                    let {
                        isDesktop: e
                    } = (0, h.F)();
                    return e ? (0, o.jsx)(eE, {}) : null
                };
            var eM = n("24561");
            let eF = e => {
                    let {
                        isMobile: t
                    } = e;
                    return (0, o.jsx)(o.Fragment, {
                        children: t ? (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)("circle", {
                                cx: "14",
                                cy: "22",
                                r: "13"
                            }), (0, o.jsx)("rect", {
                                height: "7",
                                rx: "4",
                                ry: "4",
                                width: "76",
                                x: "35",
                                y: "19"
                            }), (0, o.jsx)("rect", {
                                height: "32",
                                rx: "4",
                                ry: "4",
                                width: "82",
                                x: "120",
                                y: "6"
                            })]
                        }) : (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)("circle", {
                                cx: "14",
                                cy: "22",
                                r: "12"
                            }), (0, o.jsx)("circle", {
                                cx: "58",
                                cy: "22",
                                r: "12"
                            }), (0, o.jsx)("rect", {
                                height: "7",
                                rx: "4",
                                ry: "4",
                                width: "76",
                                x: "150",
                                y: "20"
                            }), (0, o.jsx)("circle", {
                                cx: "118",
                                cy: "24",
                                r: "13"
                            }), (0, o.jsx)("rect", {
                                height: "30",
                                rx: "4",
                                ry: "4",
                                width: "1",
                                x: "87",
                                y: "8"
                            }), (0, o.jsx)("rect", {
                                height: "32",
                                rx: "4",
                                ry: "4",
                                width: "82",
                                x: "250",
                                y: "8"
                            })]
                        })
                    })
                },
                eA = e => {
                    let {
                        isMobile: t,
                        speed: n
                    } = e;
                    return (0, o.jsx)(eM.ZP, {
                        "data-testid": "dt_accounts_info_loader",
                        height: t ? 42 : 46,
                        speed: n,
                        width: t ? 216 : 350,
                        backgroundColor: "var(--general-section-1)",
                        foregroundColor: "var(--general-hover)",
                        children: (0, o.jsx)(eF, {
                            isMobile: t
                        })
                    })
                };
            var eD = n("30394"),
                eP = n("88199"),
                eR = n("42457"),
                eO = n("33281"),
                eU = n("47342"),
                e$ = n("63387"),
                eB = n.n(e$);
            let eH = e => {
                let {
                    width: t,
                    height: n
                } = e;
                return (0, o.jsx)("div", {
                    className: "skeleton",
                    style: {
                        width: t,
                        height: n
                    }
                })
            };
            var eV = n("44884"),
                eX = n("37410"),
                eq = n("37528");
            let eJ = {
                    currency: " ",
                    currencyLabel: "Options & Multipliers",
                    is_virtual: 1,
                    loginid: "",
                    is_disabled: !1,
                    balance: "",
                    icon: (0, o.jsx)(eX.Z, {
                        width: 24,
                        height: 24
                    }),
                    isActive: !1,
                    isVirtual: !0
                },
                eG = e => Number(e.replace(/,/g, "")),
                eK = () => (0, o.jsx)(eq.i, {
                    color: "var(--general-section-2)",
                    height: "4px"
                }),
                eW = e => {
                    let {
                        oAuthLogout: t,
                        loginid: n,
                        is_logging_out: l
                    } = e, i = (null == n ? void 0 : n.includes("CR")) || (null == n ? void 0 : n.includes("MF"));
                    return (0, o.jsxs)("div", {
                        className: "",
                        children: [(0, o.jsx)(eU.T.TradersHubLink, {
                            href: G.xOw.traders_hub,
                            children: (0, P.NC)("Looking for CFD accounts? Go to Trader's Hub")
                        }), (0, o.jsx)(eK, {}), (0, o.jsxs)("div", {
                            className: eB()("account-switcher-footer__actions", {
                                "account-switcher-footer__actions--hide-manage-button": !i
                            }),
                            children: [i && (0, o.jsx)(ex.Z, {
                                id: "manage-button",
                                className: "manage-button",
                                onClick: () => location.replace("https://app.deriv.com"),
                                children: (0, o.jsx)(P.Xx, {
                                    i18n_default_text: "Manage accounts"
                                })
                            }), (0, o.jsx)(eU.T.Footer, {
                                children: l ? (0, o.jsx)("div", {
                                    className: "deriv-account-switcher__logout--loader",
                                    children: (0, o.jsx)(eH, {
                                        width: "120px",
                                        height: "12px"
                                    })
                                }) : (0, o.jsxs)("div", {
                                    id: "dt_logout_button",
                                    className: "deriv-account-switcher__logout",
                                    onClick: t,
                                    children: [(0, o.jsx)(K.Z, {
                                        color: "prominent",
                                        size: "xs",
                                        align: "left",
                                        className: "deriv-account-switcher__logout-text",
                                        children: (0, P.NC)("Logout")
                                    }), (0, o.jsx)(eV.Z, {
                                        iconSize: "xs",
                                        fill: "var(--text-general)",
                                        className: "icon-general-fill-path"
                                    })]
                                })
                            })]
                        })]
                    })
                },
                eY = e => {
                    let {
                        tabs_labels: t,
                        modifiedVRTCRAccountList: n,
                        switchAccount: l,
                        isVirtual: i,
                        activeLoginId: r,
                        oAuthLogout: s,
                        is_logging_out: c
                    } = e;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(eU.T.AccountsPanel, {
                            isOpen: !0,
                            title: (0, P.NC)("Deriv account"),
                            className: "account-switcher-panel",
                            children: n && n.map(e => (0, o.jsx)("span", {
                                className: (0, a.Z)("account-switcher__item", {
                                    "account-switcher__item--disabled": e.is_disabled
                                }),
                                children: (0, o.jsx)(eU.T.AccountsItem, {
                                    account: e,
                                    onSelectAccount: () => {
                                        !e.is_disabled && l(e.loginid)
                                    },
                                    onResetBalance: i && r === e.loginid && 1e4 !== eG(e.balance) ? () => {
                                        var e;
                                        null === eP.api_base || void 0 === eP.api_base || null === (e = eP.api_base.api) || void 0 === e || e.send({
                                            topup_virtual: 1
                                        })
                                    } : void 0
                                })
                            }, e.loginid))
                        }, t.demo.toLowerCase()), (0, o.jsx)(eK, {}), (0, o.jsx)(eW, {
                            loginid: r,
                            oAuthLogout: s,
                            is_logging_out: c
                        })]
                    })
                },
                eQ = e => {
                    let {
                        isVirtual: t,
                        tabs_labels: n,
                        modifiedMFAccountList: l,
                        switchAccount: i,
                        is_low_risk_country: r
                    } = e, s = (null == l ? void 0 : l.length) !== 0 && r ? (0, P.NC)("Eu Deriv accounts") : (0, P.NC)("Deriv accounts");
                    return (0, o.jsx)(eU.T.AccountsPanel, {
                        isOpen: !0,
                        title: s,
                        className: "account-switcher-panel",
                        children: l.map(e => (e.currencyLabel = (0, P.NC)("Multipliers"), (0, o.jsx)("span", {
                            className: (0, a.Z)("account-switcher__item", {
                                "account-switcher__item--disabled": e.is_disabled
                            }),
                            children: (0, o.jsx)(eU.T.AccountsItem, {
                                account: e,
                                onSelectAccount: () => {
                                    !e.is_disabled && i(e.loginid)
                                }
                            })
                        }, e.loginid)))
                    }, t ? n.real.toLowerCase() : n.demo.toLowerCase())
                };
            var e0 = n("11527");
            let e1 = e => {
                    var t, n;
                    let {
                        isVirtual: l,
                        tabs_labels: i,
                        is_low_risk_country: a
                    } = e;
                    return a ? (0, o.jsx)(eU.T.AccountsPanel, {
                        isOpen: !0,
                        title: (0, P.NC)("Non-Eu Deriv account"),
                        className: "account-switcher-panel",
                        children: (0, o.jsxs)("div", {
                            className: "account-switcher-panel__no-eu-accounts",
                            children: [(0, o.jsx)(eU.T.AccountsItem, {
                                account: eJ,
                                onSelectAccount: () => {}
                            }), (0, o.jsx)(eK, {}), (0, o.jsx)(e0.z, {
                                id: "add-button",
                                className: "add-button",
                                onClick: () => location.replace(G.xOw.traders_hub),
                                children: (0, o.jsx)(P.Xx, {
                                    i18n_default_text: "Add"
                                })
                            })]
                        })
                    }, l ? null == i ? void 0 : null === (n = i.real) || void 0 === n ? void 0 : n.toLowerCase() : null == i ? void 0 : null === (t = i.demo) || void 0 === t ? void 0 : t.toLowerCase()) : null
                },
                e6 = e => {
                    let {
                        isVirtual: t,
                        tabs_labels: n,
                        modifiedCRAccountList: l,
                        modifiedMFAccountList: i,
                        is_low_risk_country: r,
                        switchAccount: s
                    } = e;
                    if (!r && l && (null == l ? void 0 : l.length) === 0) return null;
                    let c = (null == i ? void 0 : i.length) === 0 ? (0, P.NC)("Deriv accounts") : (0, P.NC)("Non-Eu Deriv account");
                    return (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsx)(eU.T.AccountsPanel, {
                            isOpen: !0,
                            title: c,
                            className: "account-switcher-panel",
                            style: {
                                maxHeight: "220px"
                            },
                            children: l.map(e => (0, o.jsx)("span", {
                                className: (0, a.Z)("account-switcher__item", {
                                    "account-switcher__item--disabled": e.is_disabled
                                }),
                                children: (0, o.jsx)(eU.T.AccountsItem, {
                                    account: e,
                                    onSelectAccount: () => {
                                        !e.is_disabled && s(e.loginid)
                                    }
                                })
                            }, e.loginid))
                        }, t ? null == n ? void 0 : n.real.toLowerCase() : n.demo.toLowerCase())
                    })
                },
                e2 = e => {
                    let {
                        modifiedCRAccountList: t,
                        modifiedMFAccountList: n,
                        switchAccount: l,
                        isVirtual: i,
                        tabs_labels: a,
                        is_low_risk_country: r,
                        oAuthLogout: s,
                        loginid: c,
                        is_logging_out: d
                    } = e, u = t && (null == t ? void 0 : t.length) > 0, h = n && (null == n ? void 0 : n.length) > 0;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [u ? (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(e6, {
                                modifiedCRAccountList: t,
                                modifiedMFAccountList: n,
                                switchAccount: l,
                                isVirtual: i,
                                tabs_labels: a,
                                is_low_risk_country: r
                            }), (0, o.jsx)(eK, {})]
                        }) : (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(e1, {
                                is_low_risk_country: r,
                                isVirtual: i,
                                tabs_labels: a
                            }), (0, o.jsx)(eK, {})]
                        }), h && (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(eQ, {
                                modifiedMFAccountList: n,
                                switchAccount: l,
                                isVirtual: i,
                                tabs_labels: a,
                                is_low_risk_country: r
                            }), (0, o.jsx)(eK, {})]
                        }), (0, o.jsx)(eW, {
                            oAuthLogout: s,
                            loginid: c,
                            is_logging_out: d
                        })]
                    })
                };
            var e9 = n("17481");
            let e3 = (0, i.lazy)(() => n.e("932").then(n.bind(n, 67568))),
                e4 = {
                    demo: (0, P.NC)("Demo"),
                    real: (0, P.NC)("Real")
                },
                e7 = e => {
                    var t;
                    let {
                        isVirtual: n,
                        modifiedCRAccountList: l,
                        modifiedMFAccountList: a,
                        modifiedVRTCRAccountList: r,
                        switchAccount: s,
                        activeLoginId: c,
                        client: u
                    } = e, {
                        oAuthLogout: h
                    } = (0, d.q)({
                        handleLogout: async () => u.logout(),
                        client: u
                    }), m = (0, e9.Gz)().includes((null === (t = u.account_settings) || void 0 === t ? void 0 : t.country_code) ? ? ""), g = !!n;
                    return ((0, i.useEffect)(() => {
                        var e, t;
                        let l = null === (e = document.getElementsByClassName("account-switcher-panel")) || void 0 === e ? void 0 : e[0];
                        !n && l && (l.style.maxHeight = "70vh", null === (t = (0, eR._)(".deriv-accordion__content", l)) || void 0 === t || t.then(e => {
                            e && (e.style.maxHeight = "70vh")
                        }))
                    }, [n]), g) ? (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsx)(eY, {
                            modifiedVRTCRAccountList: r,
                            switchAccount: s,
                            activeLoginId: c,
                            isVirtual: g,
                            tabs_labels: e4,
                            oAuthLogout: h,
                            is_logging_out: u.is_logging_out
                        })
                    }) : (0, o.jsx)(e2, {
                        modifiedCRAccountList: l,
                        modifiedMFAccountList: a,
                        switchAccount: s,
                        isVirtual: g,
                        tabs_labels: e4,
                        is_low_risk_country: m,
                        oAuthLogout: h,
                        loginid: c,
                        is_logging_out: u.is_logging_out
                    })
                },
                e8 = (0, O.Pi)(e => {
                    var t, n;
                    let {
                        activeAccount: l
                    } = e, {
                        isDesktop: a
                    } = (0, h.F)(), {
                        accountList: r
                    } = (0, ej.T)(), {
                        ui: s,
                        run_panel: c,
                        client: d
                    } = (0, eu.oR)(), {
                        accounts: u
                    } = d, {
                        toggleAccountsDialog: m,
                        is_accounts_switcher_on: g,
                        account_switcher_disabled_message: x,
                        is_ksh_currency_enabled: p,
                        toggleKshCurrency: _
                    } = s, {
                        is_stop_button_visible: v
                    } = c, j = Object.keys(u).some(e => "wallet" === u[e].account_category), [b, f] = (0, i.useState)(!1), y = localStorage.getItem("active_loginid");
                    (0, i.useEffect)(() => {
                        f("true" === localStorage.getItem("is_api_token_login"))
                    }, [r]);
                    let w = (0, i.useMemo)(() => {
                            let e = r;
                            return b && y && (e = null == r ? void 0 : r.filter(e => (null == e ? void 0 : e.loginid) === y)), null == e ? void 0 : e.map(e => {
                                var t, n, i, a, r, s, c;
                                let u = (null === (i = d.all_accounts_balance) || void 0 === i ? void 0 : null === (n = i.accounts) || void 0 === n ? void 0 : null === (t = n[null == e ? void 0 : e.loginid]) || void 0 === t ? void 0 : t.balance) ? ? 0,
                                    h = "USD" === String(null == e ? void 0 : e.currency).toUpperCase(),
                                    m = p && h,
                                    g = m ? `KSH ${(u*eb.z).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}` : (0, G.oC5)((null == u ? void 0 : u.toFixed((0, G.i4S)(e.currency))) ? ? "0");
                                return { ...e,
                                    balance: g,
                                    currency: m ? "" : null == e ? void 0 : e.currency,
                                    currencyLabel: (null == e ? void 0 : e.is_virtual) ? e4.demo : m ? "" : (null === (s = d.website_status) || void 0 === s ? void 0 : null === (r = s.currencies_config) || void 0 === r ? void 0 : null === (a = r[null == e ? void 0 : e.currency]) || void 0 === a ? void 0 : a.name) ? ? (null == e ? void 0 : e.currency),
                                    icon: (0, o.jsx)(ev, {
                                        currency: m ? "ksh" : null == e ? void 0 : null === (c = e.currency) || void 0 === c ? void 0 : c.toLowerCase(),
                                        isVirtual: !!(null == e ? void 0 : e.is_virtual)
                                    }),
                                    isVirtual: !!(null == e ? void 0 : e.is_virtual),
                                    isActive: (null == e ? void 0 : e.loginid) === (null == l ? void 0 : l.loginid)
                                }
                            })
                        }, [r, null === (t = d.all_accounts_balance) || void 0 === t ? void 0 : t.accounts, null === (n = d.website_status) || void 0 === n ? void 0 : n.currencies_config, null == l ? void 0 : l.loginid, p, b, y]),
                        C = (0, i.useMemo)(() => (null == w ? void 0 : w.filter(e => {
                            var t;
                            return null == e ? void 0 : null === (t = e.loginid) || void 0 === t ? void 0 : t.includes("CR")
                        })) ? ? [], [w]),
                        k = (0, i.useMemo)(() => (null == w ? void 0 : w.filter(e => {
                            var t;
                            return null == e ? void 0 : null === (t = e.loginid) || void 0 === t ? void 0 : t.includes("MF")
                        })) ? ? [], [w]),
                        N = (0, i.useMemo)(() => (null == w ? void 0 : w.filter(e => {
                            var t;
                            return null == e ? void 0 : null === (t = e.loginid) || void 0 === t ? void 0 : t.includes("VRT")
                        })) ? ? [], [w]),
                        I = async e => {
                            if (e.toString() === (null == l ? void 0 : l.loginid)) return;
                            let t = JSON.parse(localStorage.getItem("accountsList") ? ? "{}")[e];
                            if (!t) return;
                            localStorage.setItem("authToken", t), localStorage.setItem("active_loginid", e.toString()), await (null === eP.api_base || void 0 === eP.api_base ? void 0 : eP.api_base.init(!0));
                            let n = new URLSearchParams(window.location.search),
                                o = w.find(t => t.loginid === e.toString());
                            if (!o) return;
                            let i = o.is_virtual ? "demo" : o.currency;
                            n.set("account", i), window.history.pushState({}, "", `${window.location.pathname}?${n.toString()}`)
                        };
                    return l && (j ? (0, o.jsx)(i.Suspense, {
                        fallback: (0, o.jsx)(eO.a, {}),
                        children: (0, o.jsx)(e3, {
                            is_dialog_on: g,
                            toggleDialog: m
                        })
                    }) : (0, o.jsxs)("div", {
                        className: "account-switcher-wrapper",
                        children: [(0, o.jsxs)("div", {
                            className: "currency-switch-buttons",
                            children: [(0, o.jsx)("button", {
                                className: `currency-switch-btn ${p?"":"currency-switch-btn--active"}`,
                                onClick: () => p && _(),
                                children: "USD"
                            }), (0, o.jsx)("button", {
                                className: `currency-switch-btn ${p?"currency-switch-btn--active":""}`,
                                onClick: () => !p && _(),
                                children: "KSH"
                            })]
                        }), (0, o.jsx)(eD.Z, {
                            className: "run-panel__info",
                            classNameBubble: "run-panel__info--bubble",
                            alignment: "bottom",
                            message: x,
                            zIndex: "5",
                            children: (0, o.jsxs)(eU.T, {
                                activeAccount: l,
                                isDisabled: v,
                                tabsLabels: e4,
                                modalContentStyle: {
                                    content: {
                                        top: a ? "30%" : "50%",
                                        borderRadius: "10px"
                                    }
                                },
                                children: [(0, o.jsx)(eU.T.Tab, {
                                    title: e4.real,
                                    children: (0, o.jsx)(e7, {
                                        modifiedCRAccountList: C,
                                        modifiedMFAccountList: k,
                                        switchAccount: I,
                                        activeLoginId: null == l ? void 0 : l.loginid,
                                        client: d
                                    })
                                }), (0, o.jsx)(eU.T.Tab, {
                                    title: e4.demo,
                                    children: (0, o.jsx)(e7, {
                                        modifiedVRTCRAccountList: N,
                                        switchAccount: I,
                                        isVirtual: !0,
                                        activeLoginId: null == l ? void 0 : l.loginid,
                                        client: d
                                    })
                                })]
                            })
                        })]
                    }))
                });
            var e5 = n("57801"),
                te = n("31784"),
                tt = n("87383");
            let tn = (0, O.Pi)(e => {
                let {
                    is_open: t,
                    onClose: n
                } = e, [l, a] = (0, i.useState)(""), [s, c] = (0, i.useState)(!1), [d, u] = (0, i.useState)(""), h = async () => {
                    if (!l.trim()) {
                        u((0, P.NC)("Please enter your API token"));
                        return
                    }
                    c(!0), u("");
                    try {
                        let n = (0, tt.wL)("116974");
                        await new Promise((e, t) => {
                            let l = setTimeout(() => {
                                t(Error("Connection timeout"))
                            }, 1e4);
                            1 === n.connection.readyState ? (clearTimeout(l), e()) : (n.connection.addEventListener("open", () => {
                                clearTimeout(l), e()
                            }), n.connection.addEventListener("error", () => {
                                clearTimeout(l), t(Error("Connection failed"))
                            }))
                        });
                        let {
                            authorize: o,
                            error: i
                        } = await n.authorize(l.trim());
                        if (i) {
                            u(i.message || (0, P.NC)("Invalid API token")), n.disconnect(), c(!1);
                            return
                        }
                        if (o) {
                            var e, t;
                            let i = {},
                                a = {};
                            null === (e = o.account_list) || void 0 === e || e.forEach(e => {
                                i[e.loginid] = l.trim(), a[e.loginid] = {
                                    loginid: e.loginid,
                                    token: l.trim(),
                                    currency: e.currency || "",
                                    is_virtual: e.is_virtual
                                }
                            }), localStorage.setItem("accountsList", JSON.stringify(i)), localStorage.setItem("clientAccounts", JSON.stringify(a)), localStorage.setItem("authToken", l.trim()), localStorage.setItem("active_loginid", o.loginid), localStorage.setItem("is_api_token_login", "true"), localStorage.setItem("api_token_app_id", "116974");
                            let s = {};
                            null === (t = o.account_list) || void 0 === t || t.forEach(e => {
                                s[e.loginid] = {
                                    loginid: e.loginid,
                                    token: l.trim(),
                                    currency: e.currency || ""
                                }
                            });
                            try {
                                r.Z.set("client.accounts", JSON.stringify(s), {
                                    expires: 30
                                }), r.Z.set("active_loginid", o.loginid, {
                                    expires: 30
                                })
                            } catch (e) {
                                console.warn("Could not set cookies:", e)
                            }
                            n.disconnect(), window.location.href = "/"
                        }
                    } catch (e) {
                        u((null == e ? void 0 : e.message) || (0, P.NC)("Failed to authenticate. Please check your token.")), c(!1)
                    }
                };
                return (0, o.jsxs)(te.Z, {
                    className: "api-token-modal",
                    is_open: t,
                    toggleModal: n,
                    title: (0, P.NC)("Login with API Token"),
                    width: "440px",
                    children: [(0, o.jsx)(te.Z.Body, {
                        children: (0, o.jsx)("div", {
                            className: "api-token-modal__content",
                            children: s ? (0, o.jsxs)("div", {
                                className: "api-token-modal__loading",
                                children: [(0, o.jsx)(K.Z, {
                                    size: "s",
                                    align: "center",
                                    children: (0, o.jsx)(P.Xx, {
                                        i18n_default_text: "Authorizing with API token..."
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "api-token-modal__spinner"
                                })]
                            }) : (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(K.Z, {
                                    size: "xs",
                                    className: "api-token-modal__description",
                                    children: (0, o.jsx)(P.Xx, {
                                        i18n_default_text: "Enter your Deriv API token to login. You can create an API token from your Deriv account settings."
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "api-token-modal__input-wrapper",
                                    children: (0, o.jsx)(e5.Z, {
                                        type: "password",
                                        label: (0, P.NC)("API Token"),
                                        value: l,
                                        onChange: e => {
                                            a(e.target.value), u("")
                                        },
                                        onKeyDown: e => {
                                            "Enter" === e.nativeEvent.key && h()
                                        },
                                        error: d,
                                        placeholder: (0, P.NC)("Enter your API token"),
                                        disabled: s
                                    })
                                }), (0, o.jsxs)(K.Z, {
                                    size: "xxs",
                                    className: "api-token-modal__hint",
                                    children: [(0, o.jsx)(P.Xx, {
                                        i18n_default_text: "Get your API token from"
                                    }), " ", (0, o.jsx)("a", {
                                        href: "https://app.deriv.com/account/api-token",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "api-token-modal__link",
                                        children: (0, o.jsx)(P.Xx, {
                                            i18n_default_text: "Deriv API Token Settings"
                                        })
                                    })]
                                })]
                            })
                        })
                    }), (0, o.jsxs)(te.Z.Footer, {
                        children: [(0, o.jsx)(ex.Z, {
                            secondary: !0,
                            onClick: n,
                            disabled: s,
                            children: (0, o.jsx)(P.Xx, {
                                i18n_default_text: "Cancel"
                            })
                        }), (0, o.jsx)(ex.Z, {
                            primary: !0,
                            onClick: h,
                            is_loading: s,
                            disabled: s || !l.trim(),
                            children: (0, o.jsx)(P.Xx, {
                                i18n_default_text: "Login"
                            })
                        })]
                    })]
                })
            });
            var tl = n("39523"),
                to = n("38051"),
                ti = n("39590"),
                ta = n("14393"),
                tr = n("34215"),
                ts = n("44741");
            ta.Z, (0, P.NC)("A whole new trading experience on a powerful yet easy to use platform."), G.xOw.trade, ta.Z, tr.Z, (0, P.NC)("Automated trading at your fingertips. No coding needed."), G.xOw.bot, tr.Z, ts.Z, (0, P.NC)("Trade the world’s markets with our popular user-friendly platform."), G.xOw.smarttrader, ts.Z;
            let tc = {
                    as: "a",
                    href: G.xOw.traders_hub,
                    icon: (0, o.jsx)(to.Z, {
                        iconSize: "xs"
                    }),
                    label: "Trader's Hub"
                },
                td = [{
                    as: "a",
                    href: `https://binarytool-dtrader.vercel.app/dtrader/reports?acct1=${localStorage.getItem("active_loginid")}&token1=${localStorage.getItem("authToken")}&cur1=${(null===(l=JSON.parse(localStorage.getItem("clientAccounts")||"{}")[localStorage.getItem("active_loginid")||""])||void 0===l?void 0:l.currency)||"USD"}&lang=EN`,
                    icon: (0, o.jsx)(ti.Z, {
                        iconSize: "xs"
                    }),
                    label: (0, P.NC)("Reports")
                }],
                tu = (0, O.Pi)(() => {
                    let {
                        localize: e
                    } = (0, P.T_)(), {
                        isDesktop: t
                    } = (0, h.F)(), n = (0, eu.oR)();
                    if (!n) return null;
                    let {
                        is_logged_in: l
                    } = n.client;
                    return l && 0 !== td.length ? (0, o.jsx)(o.Fragment, {
                        children: t ? td.map(t => {
                            let {
                                as: n,
                                href: l,
                                icon: i,
                                label: a
                            } = t;
                            return (0, o.jsx)(tl.s, {
                                as: n,
                                className: "app-header__menu",
                                href: l,
                                leftComponent: i,
                                children: (0, o.jsx)(X.x, {
                                    children: e(a)
                                })
                            }, a)
                        }) : td["1"] && (0, o.jsx)(tl.s, {
                            as: td["1"].as,
                            className: "flex gap-2 p-5",
                            href: td["1"].href,
                            leftComponent: td["1"].icon,
                            children: (0, o.jsx)(X.x, {
                                children: e(td["1"].label)
                            })
                        }, td["1"].label)
                    }) : null
                });
            tu.TradershubLink = () => (0, o.jsx)(tl.s, {
                as: "a",
                className: "app-header__menu",
                href: tc.href,
                leftComponent: tc.icon,
                children: (0, o.jsx)(X.x, {
                    children: tc.label
                })
            }, tc.label);
            var th = n("17934"),
                tm = n("41301"),
                tg = n("68782");
            let tx = e => {
                let {
                    buttonText: t,
                    onClick: n
                } = e, {
                    isDesktop: l
                } = (0, h.F)();
                return (0, o.jsxs)("button", {
                    className: "flex items-center w-full pt-8 p-[3.2rem]",
                    onClick: n,
                    children: [(0, o.jsx)(tg.Z, {
                        iconSize: "xs",
                        fill: "var(--text-general)"
                    }), (0, o.jsx)(X.x, {
                        className: "ml-[1.6rem]",
                        size: l ? "md" : "lg",
                        weight: "bold",
                        children: t
                    })]
                })
            };
            var tp = n("68534"),
                t_ = n("93217");
            let tv = e => {
                    let {
                        localize: t
                    } = (0, P.T_)(), {
                        is_dark_mode_on: n,
                        toggleTheme: l
                    } = (0, U.Z)(), {
                        oAuthLogout: i
                    } = (0, d.q)({
                        handleLogout: async () => null == e ? void 0 : e.logout(),
                        client: e
                    });
                    return {
                        config: [
                            [{
                                as: "button",
                                label: t("Dark theme"),
                                LeftComponent: tp.Z,
                                RightComponent: (0, o.jsx)(t_.Z, {
                                    value: n,
                                    onChange: l
                                })
                            }], (null == e ? void 0 : e.is_logged_in) ? [{
                                as: "button",
                                label: t("Log out"),
                                LeftComponent: eV.Z,
                                onClick: i,
                                removeBorderBottom: !0
                            }] : []
                        ]
                    }
                },
                tj = (0, O.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, h.F)(), {
                        client: t
                    } = (0, eu.oR)(), n = e ? "sm" : "md", {
                        config: l
                    } = tv(t);
                    return (0, o.jsx)("div", {
                        className: "mobile-menu__content",
                        children: (0, o.jsx)("div", {
                            className: "mobile-menu__content__items",
                            children: l.map((e, t) => {
                                let l = e.find(e => {
                                    let {
                                        removeBorderBottom: t
                                    } = e;
                                    return t
                                });
                                return (0, o.jsx)("div", {
                                    className: (0, a.Z)("mobile-menu__content__items--padding", {
                                        "mobile-menu__content__items--bottom-border": !l
                                    }),
                                    "data-testid": "dt_menu_item",
                                    children: e.map(e => {
                                        let {
                                            LeftComponent: t,
                                            RightComponent: l,
                                            as: i,
                                            href: r,
                                            label: s,
                                            onClick: c,
                                            target: d
                                        } = e, u = "Binarytools.com" === s;
                                        return "a" === i ? (0, o.jsx)(tl.s, {
                                            as: "a",
                                            className: (0, a.Z)("mobile-menu__content__items__item", {
                                                "mobile-menu__content__items__icons": !u
                                            }),
                                            disableHover: !0,
                                            href: r,
                                            leftComponent: (0, o.jsx)(t, {
                                                className: "mobile-menu__content__items--right-margin",
                                                height: 16,
                                                width: 16
                                            }),
                                            target: d,
                                            children: (0, o.jsx)(X.x, {
                                                size: n,
                                                children: s
                                            })
                                        }, s) : (0, o.jsx)(tl.s, {
                                            as: "button",
                                            className: (0, a.Z)("mobile-menu__content__items__item", {
                                                "mobile-menu__content__items__icons": !u
                                            }),
                                            disableHover: !0,
                                            leftComponent: (0, o.jsx)(t, {
                                                className: "mobile-menu__content__items--right-margin",
                                                iconSize: "xs"
                                            }),
                                            onClick: c,
                                            rightComponent: l,
                                            children: (0, o.jsx)(X.x, {
                                                size: n,
                                                children: s
                                            })
                                        }, s)
                                    })
                                }, t)
                            })
                        })
                    })
                }),
                tb = e => {
                    let {
                        hideLanguageSetting: t,
                        openLanguageSetting: n
                    } = e, {
                        currentLang: l,
                        localize: a
                    } = (0, P.T_)(), {
                        isDesktop: r
                    } = (0, h.F)(), s = (0, i.useMemo)(() => {
                        var e;
                        return null === (e = D.find(e => {
                            let {
                                code: t
                            } = e;
                            return t === l
                        })) || void 0 === e ? void 0 : e.placeholderIconInMobile
                    }, [l]);
                    return (0, o.jsxs)("div", {
                        className: "mobile-menu__header",
                        children: [(0, o.jsx)(X.x, {
                            size: r ? "md" : "lg",
                            weight: "bold",
                            children: a("Menu")
                        }), !t && (0, o.jsxs)("button", {
                            className: "mobile-menu__header__language items-center",
                            onClick: n,
                            children: [s, (0, o.jsx)(X.x, {
                                className: "ml-[0.4rem]",
                                size: r ? "xs" : "sm",
                                weight: "bold",
                                children: l
                            })]
                        })]
                    })
                };
            var tf = n("89816");
            let ty = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, o.jsx)("button", {
                        onClick: t,
                        children: (0, o.jsx)(tf.Z, {
                            iconSize: "xs",
                            fill: "var(--text-general)"
                        })
                    })
                },
                tw = () => {
                    var e, t, n;
                    let [l, a] = (0, i.useState)(!1), {
                        currentLang: r = "EN",
                        localize: s,
                        switchLanguage: c
                    } = (0, P.T_)(), {
                        hideModal: d,
                        isModalOpenFor: u,
                        showModal: m
                    } = x(), {
                        isDesktop: g
                    } = (0, h.F)(), _ = () => a(!1), v = !!u("MobileLanguagesDrawer"), j = () => {
                        window.location.reload()
                    }, b = (0, eu.oR)(), f = null == b ? void 0 : b.client, y = f ? Object.values(f.accounts || {}).find(e => !e.is_virtual) : void 0;
                    y && (null === (n = f.all_accounts_balance) || void 0 === n || null === (t = n.accounts) || void 0 === t || null === (e = t[y.loginid]) || void 0 === e || e.balance);
                    let w = (null == y ? void 0 : y.currency) ? ? "USD";
                    return ((0, G.O$T)(w), g) ? null : (0, o.jsxs)("div", {
                        className: "mobile-menu",
                        children: [(0, o.jsxs)("div", {
                            className: "mobile-menu__toggle",
                            children: [(0, o.jsx)(ty, {
                                onClick: () => a(!0)
                            }), (0, o.jsx)("div", {
                                onClick: () => j(),
                                children: (0, o.jsx)(eC.e8N, {
                                    size: 20,
                                    style: {
                                        color: "#29dfc0"
                                    }
                                })
                            })]
                        }), (0, o.jsxs)(th.d, {
                            isOpen: l,
                            onCloseDrawer: _,
                            width: "29.5rem",
                            children: [(0, o.jsx)(th.d.Header, {
                                onCloseDrawer: _,
                                children: (0, o.jsx)(tb, {
                                    hideLanguageSetting: v,
                                    openLanguageSetting: () => m("MobileLanguagesDrawer")
                                })
                            }), (0, o.jsx)(th.d.Content, {
                                children: v ? (0, o.jsxs)(o.Fragment, {
                                    children: [(0, o.jsx)("div", {
                                        className: "mobile-menu__back-btn",
                                        children: (0, o.jsx)(tx, {
                                            buttonText: s("Language"),
                                            onClick: d
                                        })
                                    }), (0, o.jsx)(tm.I, {
                                        isOpen: !0,
                                        languages: D,
                                        onClose: d,
                                        onLanguageSwitch: e => {
                                            c(e), window.location.replace(p()), window.location.reload()
                                        },
                                        selectedLanguage: r,
                                        wrapperClassName: "mobile-menu__language-drawer"
                                    })]
                                }) : (0, o.jsx)(tj, {})
                            }), (0, o.jsxs)(th.d.Footer, {
                                className: "mobile-menu__footer",
                                children: [(0, o.jsx)(em, {}), (0, o.jsx)(es, {})]
                            })]
                        })]
                    })
                },
                tC = (0, O.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, h.F)(), {
                        isAuthorizing: t,
                        activeLoginid: n
                    } = (0, ej.T)(), {
                        client: l
                    } = (0, eu.oR)() ? ? {}, [r, s] = (0, i.useState)(!1), {
                        data: c
                    } = ef({
                        allBalanceData: null == l ? void 0 : l.all_accounts_balance
                    }), {
                        isOAuth2Enabled: m
                    } = (0, d.q)();
                    return (0, o.jsxs)(ey.h, {
                        className: (0, a.Z)("app-header", {
                            "app-header--desktop": e,
                            "app-header--mobile": !e
                        }),
                        children: [(0, o.jsxs)(ew.i, {
                            variant: "left",
                            children: [(0, o.jsx)(eT, {}), (0, o.jsx)(tw, {}), e && (0, o.jsx)(tu, {})]
                        }), (0, o.jsx)(ew.i, {
                            variant: "right",
                            children: t ? (0, o.jsx)(eA, {
                                isLoggedIn: !0,
                                isMobile: !e,
                                speed: 3
                            }) : n ? (0, o.jsx)(o.Fragment, {
                                children: (0, o.jsx)(e8, {
                                    activeAccount: c
                                })
                            }) : (0, o.jsxs)("div", {
                                className: "auth-actions",
                                children: [(0, o.jsx)(ex.Z, {
                                    primary: !0,
                                    onClick: async () => {
                                        m ? await (0, u.P6)({
                                            redirectCallbackUri: `${window.location.origin}/callback`
                                        }) : window.location.replace((0, G.O2o)())
                                    },
                                    children: (0, o.jsx)(P.Xx, {
                                        i18n_default_text: "Log in"
                                    })
                                }), (0, o.jsx)(ex.Z, {
                                    secondary: !0,
                                    onClick: () => s(!0),
                                    children: (0, o.jsx)(P.Xx, {
                                        i18n_default_text: "API Token"
                                    })
                                }), (0, o.jsx)(ex.Z, {
                                    primary: !0,
                                    onClick: () => {
                                        window.open(G.xOw.signup)
                                    },
                                    children: (0, o.jsx)(P.Xx, {
                                        i18n_default_text: "Sign up"
                                    })
                                }), (0, o.jsx)(tn, {
                                    is_open: r,
                                    onClose: () => s(!1)
                                })]
                            })
                        })]
                    })
                }),
                tk = e => {
                    let {
                        children: t
                    } = e, n = localStorage.getItem("theme") ? ? "light", {
                        ui: l
                    } = (0, eu.oR)() ? ? {
                        ui: {
                            setDevice: () => {}
                        }
                    }, {
                        setDevice: a
                    } = l, {
                        isDesktop: r,
                        isMobile: s,
                        isTablet: c
                    } = (0, h.F)();
                    return (0, i.useEffect)(() => {
                        let e = document.querySelector("body");
                        e && ("light" === n ? (e.classList.remove("theme--dark"), e.classList.add("theme--light")) : (e.classList.remove("theme--light"), e.classList.add("theme--dark")))
                    }, [n]), (0, i.useEffect)(() => {
                        s ? a("mobile") : c ? a("tablet") : a("desktop")
                    }, [r, s, c, a]), (0, o.jsx)("div", {
                        className: "main-body",
                        children: t
                    })
                },
                tN = () => {
                    let {
                        isDesktop: e
                    } = (0, h.F)(), {
                        isOAuth2Enabled: t
                    } = (0, d.q)(), [n, l] = (0, i.useState)(!1), m = "/callback" === window.location.pathname, g = "true" === r.Z.get("logged_state"), x = window.location.pathname.includes("endpoint"), p = Object.keys(JSON.parse(localStorage.getItem("accountsList") ? ? "{}")).length > 0;
                    return (0, i.useEffect)(() => {
                        g && !p && t && !x && !m && (0, u.P6)({
                            redirectCallbackUri: `${window.location.origin}/callback`
                        })
                    }, [g, p, t, x, m]), (0, i.useEffect)(() => {
                        if (!localStorage.getItem("community_popup_dismissed") && !m && !x) {
                            let e = setTimeout(() => {
                                l(!0)
                            }, 2e3);
                            return () => clearTimeout(e)
                        }
                    }, [m, x]), (0, o.jsxs)("div", {
                        className: (0, a.Z)("layout", {
                            responsive: e
                        }),
                        children: [!m && (0, o.jsx)(tC, {}), (0, o.jsx)(tk, {
                            children: (0, o.jsx)(s.j3, {})
                        }), !m && e && (0, o.jsx)(eg, {}), (0, o.jsx)(c, {
                            is_open: n,
                            toggleModal: () => {
                                l(!1)
                            },
                            onDontShowAgain: () => {
                                localStorage.setItem("community_popup_dismissed", "true"), l(!1)
                            }
                        })]
                    })
                }
        },
        31784: function(e, t, n) {
            n.d(t, {
                Z: () => x
            });
            var l = n("85893"),
                o = n("67294"),
                i = n("63387"),
                a = n.n(i),
                r = n("73935"),
                s = n("81262"),
                c = n("1051"),
                d = n("14117"),
                u = n("76298"),
                h = n("29490");
            let m = e => {
                    let {
                        children: t,
                        className: n,
                        close_icon_color: i,
                        elements_to_ignore: s,
                        has_close_icon: m = !0,
                        has_return_icon: g = !1,
                        header: x,
                        header_background_color: p,
                        height: _,
                        id: v,
                        is_confirmation_modal: j,
                        is_open: b,
                        is_risk_warning_visible: f,
                        is_title_centered: y,
                        is_vertical_bottom: w,
                        is_vertical_centered: C,
                        is_vertical_top: k,
                        onMount: N,
                        onReturn: I,
                        onUnmount: Z,
                        portalId: S = "modal_root",
                        renderTitle: L,
                        should_close_on_click_outside: z,
                        should_header_stick_body: E = !0,
                        small: T,
                        title: M,
                        toggleModal: F,
                        width: A
                    } = e, D = o.useRef(document.createElement("div")), P = S && document.getElementById(S), R = o.useRef(P || document.getElementById(S)), O = o.useRef(null), U = [".dc-datepicker__picker", ".dc-mobile-dialog", ".dc-dropdown-list", ".dc-dropdown__list", ".modal_root"], $ = () => {
                        var e;
                        return null === (e = R.current) || void 0 === e ? void 0 : e.querySelectorAll(U.join(", ")).length
                    };
                    (0, c.t)(O, () => {
                        b && (null == F || F())
                    }, e => {
                        var t, n;
                        let l = null === (t = document.getElementById("popup_root")) || void 0 === t ? void 0 : t.hasChildNodes(),
                            o = e.path ? ? (null === (n = e.composedPath) || void 0 === n ? void 0 : n.call(e));
                        return z || m && !$() && b && !l && !(s && (null == o ? void 0 : o.find(e => s.includes(e))))
                    }), o.useEffect(() => {
                        var e, t;
                        return D.current.classList.add("dc-modal"), null == R || null === (t = R.current) || void 0 === t || null === (e = t.appendChild) || void 0 === e || e.call(t, D.current), null == N || N(), () => {
                            let e = null == R ? void 0 : R.current,
                                t = null == D ? void 0 : D.current;
                            e && t && (null == e ? void 0 : e.contains(t)) && (null == e || e.removeChild(t)), null == Z || Z()
                        }
                    }, []);
                    let B = o.useCallback(e => {
                        "Escape" === e.key && (null == F || F())
                    }, [F]);
                    o.useEffect(() => (window.addEventListener("keydown", B), () => window.removeEventListener("keydown", B)), [B]);
                    let H = L ? L() : null;
                    return r.createPortal((0, l.jsxs)("div", {
                        ref: O,
                        id: v,
                        className: a()("dc-modal__container", {
                            [`dc-modal__container_${n}`]: n,
                            "dc-modal__container--risk-message": f,
                            "dc-modal__container--small": T,
                            "dc-modal__container--is-vertical-centered": C,
                            "dc-modal__container--is-vertical-bottom": w,
                            "dc-modal__container--is-vertical-top": k,
                            "dc-modal__container--is-confirmation-modal": j
                        }),
                        style: {
                            height: _ || "auto",
                            width: A || "auto"
                        },
                        children: [!f && (x || M || H) && (0, l.jsxs)("div", {
                            className: a()("dc-modal-header", {
                                "dc-modal-header__border-bottom": !E,
                                [`dc-modal-header--${n}`]: n,
                                "dc-modal-header--is-title-centered": y
                            }),
                            style: {
                                background: p
                            },
                            children: [H && (0, l.jsx)(h.Z, {
                                as: "h3",
                                color: "prominent",
                                weight: "bold",
                                styles: {
                                    lineHeight: "2.4rem"
                                },
                                className: a()("dc-modal-header__title", {
                                    [`dc-modal-header__title--${n}`]: n
                                }),
                                children: H
                            }), M && (0, l.jsxs)(h.Z, {
                                as: "h3",
                                color: "prominent",
                                weight: "bold",
                                styles: {
                                    lineHeight: "2.4rem"
                                },
                                className: a()("dc-modal-header__title", {
                                    [`dc-modal-header__title--${n}`]: n
                                }),
                                children: [g && (0, l.jsx)(d.Z, {
                                    onClick: I,
                                    className: "dc-modal-header__icon"
                                }), M]
                            }), x && (0, l.jsx)("div", {
                                className: a()("dc-modal-header__section", {
                                    [`dc-modal-header__section--${n}`]: n
                                }),
                                children: x
                            }), m && (0, l.jsx)("div", {
                                onClick: F,
                                className: "dc-modal-header__close",
                                role: "button",
                                children: (0, l.jsx)(u.Z, {
                                    height: "20px",
                                    width: "20px",
                                    color: i,
                                    "data-testid": "dt_modal_close_icon",
                                    fill: "var(--text-general)",
                                    className: "icon-general-fill-path"
                                })
                            })]
                        }), t]
                    }), D.current)
                },
                g = e => {
                    let {
                        children: t,
                        className: n,
                        close_icon_color: o,
                        elements_to_ignore: i,
                        exit_classname: a,
                        has_close_icon: r = !0,
                        has_return_icon: c = !1,
                        header: d,
                        header_background_color: u,
                        height: h,
                        id: g,
                        is_confirmation_modal: x,
                        is_open: p,
                        is_risk_warning_visible: _,
                        is_title_centered: v,
                        is_vertical_bottom: j,
                        is_vertical_centered: b,
                        is_vertical_top: f,
                        onEntered: y,
                        onExited: w,
                        onMount: C,
                        onReturn: k,
                        onUnmount: N,
                        portalId: I = "modal_root",
                        renderTitle: Z,
                        should_close_on_click_outside: S = !1,
                        should_header_stick_body: L = !0,
                        small: z,
                        title: E,
                        transition_timeout: T,
                        toggleModal: M,
                        width: F
                    } = e;
                    return (0, l.jsx)(s.Z, {
                        appear: !0,
                        in: p,
                        timeout: T || 250,
                        classNames: {
                            appear: "dc-modal__container--enter",
                            enter: "dc-modal__container--enter",
                            enterDone: "dc-modal__container--enter-done",
                            exit: a || "dc-modal__container--exit"
                        },
                        unmountOnExit: !0,
                        onEntered: y,
                        onExited: w,
                        children: (0, l.jsx)(m, {
                            className: n,
                            close_icon_color: o,
                            should_header_stick_body: L,
                            has_return_icon: c,
                            header: d,
                            header_background_color: u,
                            id: g,
                            is_open: p,
                            is_risk_warning_visible: _,
                            is_confirmation_modal: x,
                            is_vertical_bottom: j,
                            is_vertical_centered: b,
                            is_vertical_top: f,
                            is_title_centered: v,
                            title: E,
                            toggleModal: M,
                            has_close_icon: r,
                            height: h,
                            onMount: C,
                            onReturn: k,
                            onUnmount: N,
                            portalId: I,
                            renderTitle: Z,
                            should_close_on_click_outside: S,
                            small: z,
                            width: F,
                            elements_to_ignore: i,
                            children: t
                        })
                    })
                };
            g.Body = e => {
                let {
                    children: t,
                    className: n
                } = e;
                return (0, l.jsx)("div", {
                    className: a()("dc-modal-body", n),
                    children: t
                })
            }, g.Footer = e => {
                let {
                    children: t,
                    className: n,
                    has_separator: i,
                    is_bypassed: r
                } = e;
                return r ? (0, l.jsx)(o.Fragment, {
                    children: t
                }) : (0, l.jsx)("div", {
                    "data-testid": "dt_modal_footer",
                    className: a()("dc-modal-footer", {
                        "dc-modal-footer--separator": i
                    }, n),
                    children: t
                })
            };
            let x = g
        },
        86278: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return o
                },
                m: function() {
                    return i
                }
            });
            var l = n(67294);
            let o = (e, t) => {
                    let [n, o] = l.useState(!1), i = l.useRef(null), a = e || i, r = () => o(!0), s = () => o(!1);
                    return l.useEffect(() => {
                        let e = a.current;
                        if (e) return t ? (e.addEventListener("mouseenter", r), e.addEventListener("mouseleave", s)) : (e.addEventListener("mouseover", r), e.addEventListener("mouseout", s)), () => {
                            t ? (e.removeEventListener("mouseenter", r), e.removeEventListener("mouseleave", s)) : (e.removeEventListener("mouseover", r), e.removeEventListener("mouseout", s))
                        }
                    }, [a, t]), [a, n]
                },
                i = () => {
                    let [e, t] = l.useState(!1), n = l.useCallback(() => t(!0), []), o = l.useCallback(() => t(!1), []), i = l.useRef(null);
                    return [l.useCallback(e => {
                        i.current && (i.current.removeEventListener("mouseover", n), i.current.removeEventListener("mouseout", o)), i.current = e, i.current && (i.current.addEventListener("mouseover", n), i.current.addEventListener("mouseout", o))
                    }, [n, o]), e]
                }
        }
    }
]);
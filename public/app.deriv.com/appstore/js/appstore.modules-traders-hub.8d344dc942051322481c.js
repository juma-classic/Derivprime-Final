/*! For license information please see appstore.modules-traders-hub.8d344dc942051322481c.js.LICENSE.txt */
"use strict";
(self.webpackChunk_deriv_appstore = self.webpackChunk_deriv_appstore || []).push([
    [936], {
        8662: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => _
            });
            var n = r(9155),
                a = r.n(n),
                o = r(3877),
                i = r(4792),
                l = r(6464),
                c = r(5299),
                u = r(4530),
                s = (0, l.makeLazyLoader)((function() {
                    return (0, l.moduleLoader)((function() {
                        return r.e(569).then(r.bind(r, 5320))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))(),
                d = (0, l.makeLazyLoader)((function() {
                    return (0, l.moduleLoader)((function() {
                        return r.e(388).then(r.bind(r, 6001))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))(),
                f = (0, l.makeLazyLoader)((function() {
                    return (0, l.moduleLoader)((function() {
                        return r.e(436).then(r.bind(r, 8009))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))();
            const _ = (0, c.observer)((function() {
                var e = (0, u.A)().client.is_eu,
                    t = (0, i.A)(),
                    r = t.is_eligible,
                    n = t.is_failed,
                    o = t.is_in_progress,
                    l = t.is_migrating,
                    c = o || l;
                return c ? a().createElement(d, null) : n ? a().createElement(f, null) : !e && r ? a().createElement(s, {
                    is_upgrading: c
                }) : null
            }))
        },
        2417: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => It
            });
            var n = r(9155),
                a = r.n(n),
                o = r(3877),
                i = r(6464),
                l = r(5299),
                c = r(4530),
                u = r(2641),
                s = r(9752),
                d = r(5221),
                f = r(3478),
                _ = r(7442),
                m = r(6750),
                p = r(636),
                h = r(8539);

            function v(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, o, i, l = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); c = !0);
                        } catch (e) {
                            u = !0, a = e
                        } finally {
                            try {
                                if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                            } finally {
                                if (u) throw a
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return y(e, t);
                        var r = {}.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? y(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var g = (0, l.observer)((function() {
                var e = (0, c.A)(),
                    t = e.client,
                    r = e.traders_hub,
                    n = e.ui,
                    l = r.is_real,
                    s = r.content_flag,
                    d = r.selected_account_type,
                    f = n.setShouldShowCooldownModal,
                    m = n.openRealAccountSignup,
                    p = t.real_account_creation_unlock_date,
                    h = (0, u.localize)("To trade CFDs, get a Deriv Apps account first."),
                    y = (0, u.localize)("Get a Deriv account"),
                    g = s === i.ContentFlag.LOW_RISK_CR_EU || s === i.ContentFlag.EU_REAL,
                    b = v((0, _.A)({
                        featureFlag: "ce_tradershub_dashboard_tracking",
                        defaultValue: !1
                    }), 1)[0];
                return a().createElement(a().Fragment, null, a().createElement("div", {
                    className: "add-options-account__title"
                }, a().createElement(o.Text, {
                    size: (0, i.isMobile)() ? "xxs" : "s",
                    weight: "bold"
                }, a().createElement(u.Localize, {
                    i18n_default_text: h
                }))), a().createElement("div", {
                    className: "add-options-account__button"
                }, a().createElement(o.Button, {
                    className: "add-options-account__button",
                    type: "submit",
                    has_effect: !0,
                    onClick: function() {
                        b && i.cacheTrackEvents.loadEvent([{
                            event: {
                                name: "ce_tradershub_dashboard_form",
                                properties: {
                                    action: "account_get",
                                    form_name: "traders_hub_default",
                                    account_mode: d,
                                    account_name: "cfd_banner"
                                }
                            }
                        }]), l && g ? p ? f(!0) : m("maltainvest") : m("svg")
                    },
                    is_disabled: !1,
                    is_loading: !1,
                    text: y,
                    medium: !0,
                    primary: !0
                })))
            }));
            const b = (0, l.observer)((function() {
                return a().createElement(a().Fragment, null, a().createElement("div", {
                    className: "add-options-account"
                }, a().createElement(o.DesktopWrapper, null, a().createElement(g, null)), a().createElement(o.MobileWrapper, null, a().createElement(g, null))))
            }));
            var E = r(5560);
            const w = function(e) {
                var t = e.description,
                    r = e.onClick;
                return a().createElement("div", {
                    className: "product-linked-banner",
                    onClick: r
                }, a().createElement("div", {
                    className: "product-linked-banner__content"
                }, a().createElement("div", {
                    className: "product-linked-banner__icon"
                }, a().createElement(o.Icon, {
                    icon: "IcRebrandingDerivNakala",
                    width: 32,
                    height: 32
                })), a().createElement(o.Text, {
                    size: "xs",
                    color: "prominent"
                }, t)), a().createElement(E.A, {
                    fill: "var(--text-prominent)"
                }))
            };
            var A = r(4442);

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            const T = (0, l.observer)((function(e) {
                var t = e.accounts_sub_text,
                    r = e.is_desktop,
                    n = (0, A.useHistory)(),
                    l = (0, c.A)().traders_hub.selected_account_type,
                    s = function(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != r) {
                                var n, a, o, i, l = [],
                                    c = !0,
                                    u = !1;
                                try {
                                    if (o = (r = r.call(e)).next, 0 === t) {
                                        if (Object(r) !== r) return;
                                        c = !1
                                    } else
                                        for (; !(c = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); c = !0);
                                } catch (e) {
                                    u = !0, a = e
                                } finally {
                                    try {
                                        if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                                    } finally {
                                        if (u) throw a
                                    }
                                }
                                return l
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return S(e, t);
                                var r = {}.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? S(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }((0, _.A)({
                        featureFlag: "ce_tradershub_dashboard_tracking",
                        defaultValue: !1
                    }), 1)[0];
                return a().createElement("div", {
                    className: "cfd-accounts__compare-table-title",
                    onClick: function() {
                        n.push(i.routes.compare_cfds), s && i.cacheTrackEvents.loadEvent([{
                            event: {
                                name: "ce_tradershub_dashboard_form",
                                properties: {
                                    action: "compare_accounts_push",
                                    form_name: "traders_hub_default",
                                    account_mode: l
                                }
                            }
                        }])
                    }
                }, a().createElement(o.Text, {
                    size: r ? "xxs" : "xs",
                    color: "red",
                    weight: "bold",
                    line_height: "s",
                    styles: r ? {
                        marginInlineStart: "1rem"
                    } : ""
                }, a().createElement(u.Localize, {
                    i18n_default_text: t
                })))
            }));
            var O = r(2103),
                k = r(1538),
                L = r(899),
                x = r(5920);
            const D = function() {
                return a().createElement(x.Ay, {
                    backgroundColor: "var(--general-section-1)",
                    foregroundColor: "var(--general-hover)",
                    width: 600,
                    height: 140
                }, a().createElement(o.DesktopWrapper, null, a().createElement("rect", {
                    x: "0",
                    y: "0",
                    rx: "5",
                    ry: "5",
                    width: "50",
                    height: "50"
                }), a().createElement("rect", {
                    x: "70",
                    y: "10",
                    rx: "4",
                    ry: "4",
                    width: "70",
                    height: "10"
                }), a().createElement("rect", {
                    x: "70",
                    y: "30",
                    rx: "3",
                    ry: "3",
                    width: "150",
                    height: "10"
                }), a().createElement("rect", {
                    x: "350",
                    y: "10",
                    rx: "5",
                    ry: "5",
                    width: "70",
                    height: "30"
                })), a().createElement(o.MobileWrapper, null, a().createElement("rect", {
                    x: "5",
                    y: "0",
                    rx: "5",
                    ry: "5",
                    width: "50",
                    height: "50"
                }), a().createElement("rect", {
                    x: "80",
                    y: "10",
                    rx: "4",
                    ry: "4",
                    width: "70",
                    height: "10"
                }), a().createElement("rect", {
                    x: "80",
                    y: "30",
                    rx: "3",
                    ry: "3",
                    width: "100",
                    height: "10"
                }), a().createElement("rect", {
                    x: "300",
                    y: "15",
                    rx: "5",
                    ry: "5",
                    width: "50",
                    height: "20"
                })))
            };
            var N = r(9506);

            function I(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, o, i, l = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); c = !0);
                        } catch (e) {
                            u = !0, a = e
                        } finally {
                            try {
                                if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                            } finally {
                                if (u) throw a
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return z(e, t);
                        var r = {}.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? z(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function z(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var P = (0, i.makeLazyLoader)((function() {
                    return (0, i.moduleLoader)((function() {
                        return Promise.all([r.e(59), r.e(848)]).then(r.bind(r, 1059))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))(),
                j = (0, l.observer)((function() {
                    var e = (0, d.Y)().isDesktop,
                        t = (0, c.A)(),
                        r = t.client,
                        l = t.modules.cfd,
                        s = t.traders_hub,
                        v = t.common,
                        y = t.ui,
                        g = s.available_dxtrade_accounts,
                        E = s.available_ctrader_accounts,
                        A = s.combined_cfd_mt5_accounts,
                        S = s.selected_region,
                        x = s.has_any_real_account,
                        z = s.startTrade,
                        j = s.is_real,
                        C = s.getExistingAccounts,
                        R = s.getAccount,
                        F = s.selected_account_type,
                        M = s.is_eu_user,
                        U = s.is_demo_low_risk,
                        G = s.no_MF_account,
                        V = s.toggleAccountTransferModal,
                        B = s.is_demo,
                        W = s.showTopUpModal,
                        q = s.no_CR_account,
                        $ = s.setSelectedAccount,
                        Y = s.CFDs_restricted_countries,
                        J = s.financial_restricted_countries,
                        H = s.getDefaultJurisdiction,
                        X = l.setAccountType,
                        K = l.toggleCTraderTransferModal,
                        Z = l.setAccountUnavailableModal,
                        Q = l.setServerMaintenanceModal,
                        ee = l.setProduct,
                        te = l.setJurisdictionSelectedShortcode,
                        re = l.setNakalaBannerVisible,
                        ne = r.is_landing_company_loaded,
                        ae = r.is_populating_mt5_account_list,
                        oe = r.real_account_creation_unlock_date,
                        ie = r.ctrader_total_balance,
                        le = r.is_trading_platform_available_account_loaded,
                        ce = r.updateMT5AccountDetails,
                        ue = r.is_switching,
                        se = v.setAppstorePlatform,
                        de = y.openDerivRealAccountNeededModal,
                        fe = y.setShouldShowCooldownModal,
                        _e = !x,
                        me = !M || U ? (0, u.localize)("Compare accounts") : (0, u.localize)("Account Information"),
                        pe = I((0, _.A)({
                            featureFlag: "ce_tradershub_dashboard_tracking",
                            defaultValue: !1
                        }), 1)[0],
                        he = A.some((function(e) {
                            return e.platform === i.CFD_PLATFORMS.MT5 && "standard" === e.product
                        })),
                        ve = A.some((function(e) {
                            return e.platform === i.CFD_PLATFORMS.MT5 && "standard" === e.product && "get" !== e.action_type
                        })),
                        ye = I((0, n.useState)((function() {
                            return "true" === f.A.get("nakala_linked")
                        })), 2),
                        ge = ye[0],
                        be = ye[1],
                        Ee = A.find((function(e) {
                            return "standard" === e.product
                        })),
                        we = (0, m.A)([Ee]).IsEnabledNakala,
                        Ae = j && !M && !ge && we && he,
                        Se = (0, p.A)().has_svg_accounts_to_migrate,
                        Te = (0, h.A)().getPlatformStatus,
                        Oe = function(e) {
                            switch (Te(e)) {
                                case i.TRADING_PLATFORM_STATUS.MAINTENANCE:
                                    return Q(!0);
                                case i.TRADING_PLATFORM_STATUS.UNAVAILABLE:
                                    return Z(!0);
                                case i.TRADING_PLATFORM_STATUS.ACTIVE:
                                    return R()
                            }
                        };
                    (0, n.useEffect)((function() {
                        var e = function() {
                            var e = "true" === f.A.get("nakala_linked");
                            be(e)
                        };
                        window.addEventListener("storage", e);
                        var t = f.A.set;
                        return f.A.set = function() {
                                for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                                var o = t.apply(this, n);
                                return e(), o
                            },
                            function() {
                                window.removeEventListener("storage", e), f.A.set = t
                            }
                    }), []);
                    var ke = A.some((function(e) {
                            return e.status === i.TRADING_PLATFORM_STATUS.UNAVAILABLE
                        })),
                        Le = A.some((function(e) {
                            return e.status === i.MT5_ACCOUNT_STATUS.UNDER_MAINTENANCE
                        })) || A.some((function(e) {
                            var t;
                            return Te(null !== (t = e.platform) && void 0 !== t ? t : i.CFD_PLATFORMS.MT5) === i.TRADING_PLATFORM_STATUS.MAINTENANCE
                        })),
                        xe = function(e, t) {
                            if ("under_maintenance" === e) return i.MT5_ACCOUNT_STATUS.UNDER_MAINTENANCE;
                            if ("unavailable" === e) return i.TRADING_PLATFORM_STATUS.UNAVAILABLE;
                            if (t) switch (e) {
                                case "proof_failed":
                                case "poa_failed":
                                case "poa_outdated":
                                    return i.MT5_ACCOUNT_STATUS.FAILED;
                                case "verification_pending":
                                case "poa_pending":
                                    return i.MT5_ACCOUNT_STATUS.PENDING;
                                case "needs_verification":
                                case "poa_required":
                                    return i.MT5_ACCOUNT_STATUS.NEEDS_VERIFICATION;
                                case "migrated_with_position":
                                    return i.MT5_ACCOUNT_STATUS.MIGRATED_WITH_POSITION;
                                case "migrated_without_position":
                                    return i.MT5_ACCOUNT_STATUS.MIGRATED_WITHOUT_POSITION;
                                default:
                                    return null
                            }
                            return ""
                        },
                        De = G && M && j,
                        Ne = q && !M && j;
                    (0, n.useEffect)((function() {
                        ne && ae && ((0, i.setPerformanceValue)("login_time"), (0, i.setPerformanceValue)("redirect_from_deriv_com_time"), (0, i.setPerformanceValue)("switch_currency_accounts_time"), (0, i.setPerformanceValue)("switch_from_demo_to_real_time"), (0, i.setPerformanceValue)("switch_from_real_to_demo_time")), ce()
                    }), [ne, ae]);
                    var Ie = A.length || g.length || E.length,
                        ze = ne && !ae && !ue && le;
                    if (ze && !Ie) return null;
                    var Pe = function(e, t) {
                            var r = e;
                            t ? (re(!0), r = {
                                platform: i.CFD_PLATFORMS.MT5,
                                market_type: "synthetic",
                                product: "standard"
                            }) : re(!1), X({
                                category: F,
                                type: r.market_type
                            }), ee(r.product), se(r.platform), te(H()), Oe(r.platform)
                        },
                        je = function() {
                            var e = {
                                platform: i.CFD_PLATFORMS.MT5,
                                market_type: "synthetic",
                                product: "standard"
                            };
                            z("mt5", e), re(!0)
                        };
                    return a().createElement(O.A, {
                        title: e && a().createElement("div", {
                            className: "cfd-accounts__title"
                        }, a().createElement(o.Text, {
                            size: "sm",
                            weight: "bold",
                            color: "prominent"
                        }, (0, u.localize)("CFDs")), a().createElement(T, {
                            accounts_sub_text: me,
                            is_desktop: !0
                        })),
                        description: a().createElement(L.A, null)
                    }, !e && a().createElement(T, {
                        accounts_sub_text: me
                    }), Ae && a().createElement(w, {
                        description: (0, u.localize)("Copy trading with Deriv Nakala"),
                        onClick: function() {
                            return ve ? je() : Pe(null, !0)
                        }
                    }), a().createElement((function() {
                        if (j) {
                            if (q && !M) return a().createElement("div", {
                                className: "cfd-full-row"
                            }, a().createElement(b, null));
                            if (G && M) return a().createElement("div", {
                                className: "cfd-full-row"
                            }, a().createElement(b, null))
                        }
                        return null
                    }), null), a().createElement("div", {
                        className: "cfd-full-row",
                        style: {
                            paddingTop: "2rem"
                        }
                    }, a().createElement(o.Text, {
                        line_height: "m",
                        weight: "bold",
                        color: "prominent"
                    }, (0, u.localize)("Deriv MT5"))), Se && ne && a().createElement(P, null), ze && A.length ? a().createElement(a().Fragment, null, A.map((function(e, t) {
                        var r, n = A.length,
                            o = null !== (r = e.tracking_name) && void 0 !== r ? r : "",
                            l = null != e && e.status || Le ? xe(null == e ? void 0 : e.status, null == e ? void 0 : e.landing_company_short) : "";
                        return a().createElement(k.A, {
                            client_kyc_status: null == e ? void 0 : e.client_kyc_status,
                            action_type: e.action_type,
                            availability: S,
                            clickable_icon: !0,
                            is_new: !0,
                            icon: e.icon,
                            sub_title: null == e ? void 0 : e.sub_title,
                            name: l ? "" : null == e ? void 0 : e.name,
                            short_code_and_region: null == e ? void 0 : e.short_code_and_region,
                            platform: e.platform,
                            description: e.description,
                            key: e.key,
                            has_divider: (!M || B) && (0, N.A)(t, n, 3),
                            onAction: function(t) {
                                if ("get" === e.action_type) {
                                    if (pe && i.cacheTrackEvents.loadEvent([{
                                            event: {
                                                name: "ce_tradershub_dashboard_form",
                                                properties: {
                                                    action: "account_get",
                                                    form_name: "traders_hub_default",
                                                    account_mode: F,
                                                    account_name: o
                                                }
                                            }
                                        }]), ke || Le) return Q(!0);
                                    oe && De ? fe(!0) : Ne || De ? de() : Pe(e)
                                } else if ("multi-action" === e.action_type) {
                                    var r, n = null == t || null === (r = t.currentTarget) || void 0 === r ? void 0 : r.name;
                                    ee(e.product), "transfer-btn" === n ? (pe && i.cacheTrackEvents.loadEvent([{
                                        event: {
                                            name: "ce_tradershub_dashboard_form",
                                            properties: {
                                                action: "account_transfer",
                                                form_name: "traders_hub_default",
                                                account_mode: F,
                                                account_name: o
                                            }
                                        }
                                    }]), V(), $(e)) : "topup-btn" === n ? (pe && i.cacheTrackEvents.loadEvent([{
                                        event: {
                                            name: "ce_tradershub_dashboard_form",
                                            properties: {
                                                action: "account_topup",
                                                form_name: "traders_hub_default",
                                                account_mode: F,
                                                account_name: o
                                            }
                                        }
                                    }]), W(e), se(e.platform)) : (pe && i.cacheTrackEvents.loadEvent([{
                                        event: {
                                            name: "ce_tradershub_dashboard_form",
                                            properties: {
                                                action: "account_open",
                                                form_name: "traders_hub_default",
                                                account_mode: F,
                                                account_name: o
                                            }
                                        }
                                    }]), z(e.platform, e))
                                }
                            },
                            mt5_acc_auth_status: l,
                            selected_mt5_jurisdiction: {
                                platform: e.platform,
                                category: F,
                                type: e.market_type,
                                jurisdiction: e.landing_company_short,
                                product: e.product
                            },
                            market_type: null == e ? void 0 : e.market_type
                        })
                    }))) : a().createElement(D, null), !M && !Y && !J && a().createElement(n.Fragment, null, ne && 0 != E.length && a().createElement(a().Fragment, null, a().createElement("div", {
                        className: "cfd-full-row"
                    }, a().createElement("hr", {
                        className: "divider"
                    })), a().createElement("div", {
                        className: "cfd-full-row",
                        style: {
                            paddingTop: "2rem"
                        }
                    }, a().createElement(o.Text, {
                        weight: "bold"
                    }, (0, u.localize)("Deriv cTrader")))), ne ? E.map((function(e) {
                        var t = C(e.platform, e.market_type),
                            r = t.length > 0,
                            n = B ? "".concat(e.name, " ", "Demo") : e.name;
                        return r ? t.map((function(t) {
                            return a().createElement(k.A, {
                                action_type: "multi-action",
                                availability: S,
                                clickable_icon: !0,
                                icon: e.icon,
                                sub_title: e.name,
                                name: "".concat((0, i.formatMoney)(t.currency, B ? t.display_balance : ie, !0), " ").concat(t.currency),
                                description: t.display_login,
                                platform: e.platform,
                                key: "trading_app_card_".concat(t.display_login),
                                onAction: function(r) {
                                    var a, o = null == r || null === (a = r.currentTarget) || void 0 === a ? void 0 : a.name;
                                    ee(), "transfer-btn" === o ? (pe && i.cacheTrackEvents.loadEvent([{
                                        event: {
                                            name: "ce_tradershub_dashboard_form",
                                            properties: {
                                                action: "account_transfer",
                                                form_name: "traders_hub_default",
                                                account_mode: F,
                                                account_name: n
                                            }
                                        }
                                    }]), K()) : "topup-btn" === o ? (pe && i.cacheTrackEvents.loadEvent([{
                                        event: {
                                            name: "ce_tradershub_dashboard_form",
                                            properties: {
                                                action: "account_topup",
                                                form_name: "traders_hub_default",
                                                account_mode: F,
                                                account_name: n
                                            }
                                        }
                                    }]), W(t), se(e.platform)) : (pe && i.cacheTrackEvents.loadEvent([{
                                        event: {
                                            name: "ce_tradershub_dashboard_form",
                                            properties: {
                                                action: "account_open",
                                                form_name: "traders_hub_default",
                                                account_mode: F,
                                                account_name: n
                                            }
                                        }
                                    }]), z(e.platform, t))
                                }
                            })
                        })) : a().createElement(k.A, {
                            action_type: "get",
                            availability: S,
                            clickable_icon: !0,
                            icon: e.icon,
                            name: e.name,
                            platform: e.platform,
                            description: e.description,
                            onAction: function() {
                                ee(), pe && i.cacheTrackEvents.loadEvent([{
                                    event: {
                                        name: "ce_tradershub_dashboard_form",
                                        properties: {
                                            action: "account_get",
                                            form_name: "traders_hub_default",
                                            account_mode: F,
                                            account_name: n
                                        }
                                    }
                                }]), (_e || q) && j ? de() : (X({
                                    category: F,
                                    type: e.market_type
                                }), se(e.platform), Oe(e.platform))
                            },
                            key: "trading_app_card_".concat(e.name),
                            is_new: !0
                        })
                    })) : a().createElement(D, null), ne ? null == g ? void 0 : g.map((function(e) {
                        var t = C(e.platform, e.market_type),
                            r = t.length > 0,
                            n = B ? "".concat(e.name, " ", "Demo") : e.name;
                        return r && t.map((function(t) {
                            return a().createElement(a().Fragment, null, a().createElement("div", {
                                className: "cfd-full-row"
                            }, a().createElement("hr", {
                                className: "divider"
                            })), a().createElement("div", {
                                className: "cfd-full-row"
                            }, a().createElement(o.Text, {
                                line_height: "m",
                                weight: "bold",
                                color: "prominent"
                            }, (0, u.localize)("Deriv X"))), a().createElement(k.A, {
                                action_type: "multi-action",
                                availability: S,
                                clickable_icon: !0,
                                icon: e.icon,
                                sub_title: e.name,
                                name: "".concat((0, i.formatMoney)(t.currency, t.display_balance, !0), " ").concat(t.currency),
                                description: t.login,
                                platform: e.platform,
                                key: "trading_app_card_".concat(t.login),
                                onAction: function(r) {
                                    var a, o = null == r || null === (a = r.currentTarget) || void 0 === a ? void 0 : a.name;
                                    ee(), "transfer-btn" === o ? (pe && i.cacheTrackEvents.loadEvent([{
                                        event: {
                                            name: "ce_tradershub_dashboard_form",
                                            properties: {
                                                action: "account_transfer",
                                                form_name: "traders_hub_default",
                                                account_mode: F,
                                                account_name: n
                                            }
                                        }
                                    }]), V(), $(t)) : "topup-btn" === o ? (pe && i.cacheTrackEvents.loadEvent([{
                                        event: {
                                            name: "ce_tradershub_dashboard_form",
                                            properties: {
                                                action: "account_topup",
                                                form_name: "traders_hub_default",
                                                account_mode: F,
                                                account_name: n
                                            }
                                        }
                                    }]), W(t), se(e.platform)) : (pe && i.cacheTrackEvents.loadEvent([{
                                        event: {
                                            name: "ce_tradershub_dashboard_form",
                                            properties: {
                                                action: "account_open",
                                                form_name: "traders_hub_default",
                                                account_mode: F,
                                                account_name: n
                                            }
                                        }
                                    }]), z(e.platform, t))
                                }
                            }))
                        }))
                    })) : a().createElement(D, null)), we && !M && j && ve && a().createElement(n.Fragment, null, a().createElement("div", {
                        className: "cfd-full-row"
                    }, a().createElement("hr", {
                        className: "divider"
                    })), a().createElement("div", {
                        className: "cfd-full-row",
                        style: {
                            paddingTop: "2rem"
                        }
                    }, a().createElement(o.Text, {
                        weight: "bold"
                    }, (0, u.localize)("Deriv Nakala"))), a().createElement(k.A, {
                        action_type: "open",
                        availability: S,
                        clickable_icon: !0,
                        icon: "DerivNakala",
                        name: "Deriv Nakala",
                        platform: "mt5",
                        description: (0, u.localize)("Copy trading for CFDs on MT5"),
                        onAction: je,
                        key: "trading_app_card_".concat("Deriv Nakala"),
                        mt5_acc_auth_status: xe(null == Ee ? void 0 : Ee.status, null == Ee ? void 0 : Ee.landing_company_short),
                        is_new: !0
                    })))
                }));
            const C = j;
            var R = r(2707),
                F = r(6991),
                M = r(568),
                U = r(9188),
                G = r(9621);

            function V(e) {
                return V = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, V(e)
            }
            var B = ["current_list", "children", "is_eu"];

            function W(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? W(Object(r), !0).forEach((function(t) {
                        $(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : W(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function $(e, t, r) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != V(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var r = t.call(e, "string");
                            if ("object" != V(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == V(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function Y(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, o, i, l = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); c = !0);
                        } catch (e) {
                            u = !0, a = e
                        } finally {
                            try {
                                if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                            } finally {
                                if (u) throw a
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return J(e, t);
                        var r = {}.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? J(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function J(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var H = function(e) {
                    var t, r, n, a, o, i = e.current_list,
                        l = e.children,
                        c = e.is_eu,
                        u = function(e, t) {
                            if (null == e) return {};
                            var r, n, a = function(e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (-1 !== t.indexOf(n)) continue;
                                        r[n] = e[n]
                                    }
                                return r
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < o.length; n++) r = o[n], -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                            }
                            return a
                        }(e, B),
                        s = localStorage.getItem("cfd_reset_password_intent"),
                        d = localStorage.getItem("cfd_reset_password_type") || "main";
                    if (s && /(real|demo)\.(gold_dml|gold_bvi|gold_v|gold|financial|financial_demo|financial_stp|financial_svg|financial_bvi|financial_fx|financial_v|synthetic|synthetic_svg|synthetic_bvi|synthetic_v|all_swap_free_svg|all_zero_spread_bvi|dxtrade|all)/.test(s) && i) {
                        var f, _, m = Y(s.split("."), 3);
                        o = m[0], t = m[1], r = m[2], n = i["mt5.".concat(t, ".").concat(r, "@").concat(o)].login, a = null !== (f = null === (_ = (0, M.bN)(c)[t][r]) || void 0 === _ ? void 0 : _.title) && void 0 !== f ? f : ""
                    } else if (i) {
                        var p, h, v, y, g = Y(Object.keys(i).pop().split("."), 3);
                        o = g[0], t = g[1], r = g[2], n = null !== (p = null === (h = i["mt5.".concat(t, ".").concat(r, "@").concat(o)]) || void 0 === h ? void 0 : h.login) && void 0 !== p ? p : "", a = null !== (v = null === (y = (0, M.bN)(c)) || void 0 === y || null === (y = y[t]) || void 0 === y || null === (y = y[r]) || void 0 === y ? void 0 : y.title) && void 0 !== v ? v : ""
                    } else n = "", a = "";
                    return l(q({
                        login: n,
                        title: a,
                        type: d
                    }, u))
                },
                X = (0, l.observer)((function(e) {
                    var t = e.platform,
                        r = (0, c.A)(),
                        n = r.client,
                        l = r.ui,
                        s = n.email,
                        d = n.is_eu,
                        f = n.is_logged_in,
                        _ = l.is_cfd_reset_password_modal_enabled,
                        m = l.setCFDPasswordResetModal,
                        p = (0, U.E)().current_list;
                    a().useEffect((function() {
                        /reset-password/.test(location.hash) && m(!0)
                    }), [m]);
                    var h = Y(a().useState({
                            error_code: void 0,
                            has_error: !1,
                            error_message: void 0,
                            is_finished: !1,
                            changed_password_type: ""
                        }), 2),
                        v = h[0],
                        y = h[1],
                        g = function() {
                            localStorage.removeItem("cfd_reset_password_intent"), localStorage.removeItem("cfd_reset_password_type"), localStorage.removeItem("cfd_reset_password_code")
                        },
                        b = function(e) {
                            var r = {},
                                n = t === G.$_.DXTRADE ? 25 : 16;
                            return (0, i.validLength)(e.new_password, {
                                min: 8,
                                max: n
                            }) ? (0, i.validPassword)(e.new_password) ? t === G.$_.DXTRADE || (0, i.validMT5Password)(e.new_password) || (r.new_password = (0, u.localize)("Please include at least 1 special character such as ( _ @ ? ! / # ) in your password.")) : r.new_password = (0, i.getErrorMessages)().password() : r.new_password = (0, u.localize)("You should enter {{min_number}}-{{max_number}} characters.", {
                                min_number: 8,
                                max_number: n
                            }), e.new_password.toLowerCase() === s.toLowerCase() && (r.new_password = (0, u.localize)("Your password cannot be the same as your email address.")), r
                        },
                        E = function() {
                            return 0 !== Object.keys(p).length
                        },
                        w = !E() && localStorage.getItem("cfd_reset_password_code");
                    return a().createElement(o.Modal, {
                        className: "cfd-reset-password-modal",
                        is_open: _ && !w,
                        toggleModal: function() {
                            return m(!1)
                        },
                        title: t === G.$_.DXTRADE ? (0, u.localize)("Reset Deriv X investor password") : (0, u.localize)("Reset Deriv MT5 investor password"),
                        onMount: function() {
                            return (0, i.redirectToLogin)(f, (0, u.getLanguage)(), !0)
                        },
                        should_header_stick_body: !1
                    }, !E() && !v.has_error && a().createElement(o.Loading, {
                        is_fullscreen: !1
                    }), E() && !v.has_error && !v.is_finished && a().createElement(H, {
                        current_list: p,
                        is_eu: d
                    }, (function(e) {
                        var r = e.type,
                            n = e.login;
                        return a().createElement(F.l1, {
                            initialValues: {
                                new_password: ""
                            },
                            validate: b,
                            onSubmit: function(e, t) {
                                return function(e, t, r, n) {
                                    var a = n.setSubmitting;
                                    a(!0);
                                    var o = {
                                        account_id: r,
                                        platform: G.$_.MT5,
                                        new_password: e.new_password,
                                        verification_code: localStorage.getItem("cfd_reset_password_code")
                                    };
                                    i.WS.tradingPlatformInvestorPasswordReset(o).then((function(e) {
                                        var r, n;
                                        null != e && null !== (r = e.error) && void 0 !== r && r.code ? (n = e.error, y(q(q({}, v), {}, {
                                            error_code: n.code,
                                            has_error: !0,
                                            error_message: n.message
                                        }))) : (y(q(q({}, v), {}, {
                                            is_finished: !0,
                                            changed_password_type: t
                                        })), g()), window.history.replaceState(null, "", window.location.pathname + window.location.search), a(!1)
                                    }))
                                }(e, r, n, t)
                            }
                        }, (function(e) {
                            var n = e.handleSubmit,
                                l = e.errors,
                                c = e.values,
                                s = e.isSubmitting,
                                d = e.handleChange,
                                f = e.handleBlur,
                                _ = e.touched;
                            return a().createElement("form", {
                                autoComplete: "off",
                                onSubmit: n
                            }, a().createElement("div", {
                                className: "cfd-reset-password"
                            }, a().createElement("div", {
                                className: "cfd-reset-password__container"
                            }, a().createElement("div", {
                                className: "cfd-reset-password__password-area"
                            }, a().createElement(o.PasswordMeter, {
                                input: c.new_password,
                                has_error: !(!_.new_password || !l.new_password),
                                custom_feedback_messages: (0, i.getErrorMessages)().password_warnings
                            }, (function(e) {
                                var t = e.has_warning;
                                return a().createElement(o.PasswordInput, {
                                    autoComplete: "new-password",
                                    className: "cfd-reset-password__password-field",
                                    name: "new_password",
                                    label: (0, u.localize)("New {{type}} password", {
                                        type: r
                                    }),
                                    onChange: d,
                                    onBlur: f,
                                    error: _.new_password && l.new_password,
                                    value: c.new_password,
                                    "data-lpignore": "true",
                                    required: !0,
                                    hint: !t && (0, u.localize)("Strong passwords contain at least 8 characters, combine uppercase and lowercase letters, numbers, and symbols.")
                                })
                            }))), t !== G.$_.DXTRADE && a().createElement("div", {
                                className: "cfd-reset-password__password-area"
                            }, a().createElement(o.Text, {
                                as: "p",
                                size: "xs",
                                align: "center",
                                className: "cfd-reset-password__description2"
                            }, a().createElement(u.Localize, {
                                i18n_default_text: "Your password must contain between 8-16 characters that include uppercase and lowercase letters, and at least one number and special character ( _ @ ? ! / # )."
                            }))), s && a().createElement(o.Loading, {
                                is_fullscreen: !1
                            }), !s && a().createElement(o.FormSubmitButton, {
                                is_disabled: s || !c.new_password || Object.keys(l).length > 0,
                                errors: l,
                                is_center: !0,
                                large: !0,
                                label: (0, u.localize)("Create {{type}} password", {
                                    type: r
                                })
                            }))))
                        }))
                    })), v.has_error && a().createElement("div", {
                        className: "cfd-reset-password__error"
                    }, a().createElement(o.Icon, {
                        icon: "IcMt5Expired",
                        size: 128
                    }), a().createElement(o.Text, {
                        as: "p",
                        size: "xs",
                        weight: "bold",
                        align: "center",
                        className: "cfd-reset-password__heading"
                    }, v.error_message), "InvalidToken" === v.error_code && a().createElement(o.Text, {
                        as: "p",
                        color: "prominent",
                        size: "xs",
                        align: "center",
                        className: "cfd-reset-password__description--is-centered"
                    }, a().createElement(u.Localize, {
                        i18n_default_text: "Please request a new password and check your email for the new token."
                    })), a().createElement(o.Button, {
                        primary: !0,
                        large: !0,
                        className: "cfd-reset-password__confirm-button",
                        onClick: function() {
                            g(), m(!1)
                        }
                    }, a().createElement(u.Localize, {
                        i18n_default_text: "Ok"
                    }))), v.is_finished && a().createElement("div", {
                        className: "cfd-reset-password__success"
                    }, a().createElement(o.Icon, {
                        icon: "IcMt5PasswordUpdated",
                        size: 128
                    }), a().createElement("div", {
                        className: "cfd-reset-password__description"
                    }, a().createElement(o.Text, {
                        as: "p",
                        size: "xs",
                        align: "center",
                        weight: "bold",
                        line_height: "xxl"
                    }, a().createElement(u.Localize, {
                        i18n_default_text: "Password saved"
                    })), a().createElement(u.Localize, {
                        i18n_default_text: "Your {{account_type}} password has been changed.",
                        values: {
                            account_type: "main" === v.changed_password_type ? (0, u.localize)("main") : (0, u.localize)("investor")
                        }
                    })), a().createElement(o.Button, {
                        primary: !0,
                        large: !0,
                        onClick: function() {
                            return m(!1)
                        }
                    }, a().createElement(u.Localize, {
                        i18n_default_text: "Ok"
                    }))))
                }));
            const K = a().memo(X);
            var Z = r(4792),
                Q = r(3765),
                ee = c.A;

            function te(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, o, i, l = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); c = !0);
                        } catch (e) {
                            u = !0, a = e
                        } finally {
                            try {
                                if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                            } finally {
                                if (u) throw a
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return re(e, t);
                        var r = {}.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? re(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function re(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var ne = (0, i.makeLazyLoader)((function() {
                    return (0, i.moduleLoader)((function() {
                        return r.e(233).then(r.bind(r, 5333))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))(),
                ae = (0, i.makeLazyLoader)((function() {
                    return (0, i.moduleLoader)((function() {
                        return r.e(331).then(r.bind(r, 1957))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))(),
                oe = (0, i.makeLazyLoader)((function() {
                    return (0, i.moduleLoader)((function() {
                        return r.e(367).then(r.bind(r, 7251))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))(),
                ie = (0, i.makeLazyLoader)((function() {
                    return (0, i.moduleLoader)((function() {
                        return r.e(800).then(r.bind(r, 7764))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))(),
                le = (0, i.makeLazyLoader)((function() {
                    return (0, i.moduleLoader)((function() {
                        return r.e(822).then(r.bind(r, 7252))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))(),
                ce = (0, i.makeLazyLoader)((function() {
                    return (0, i.moduleLoader)((function() {
                        return r.e(822).then(r.bind(r, 1515))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))(),
                ue = (0, i.makeLazyLoader)((function() {
                    return (0, i.moduleLoader)((function() {
                        return r.e(968).then(r.bind(r, 7383))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))(),
                se = (0, i.makeLazyLoader)((function() {
                    return (0, i.moduleLoader)((function() {
                        return r.e(308).then(r.bind(r, 7498))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))(),
                de = (0, i.makeLazyLoader)((function() {
                    return (0, i.moduleLoader)((function() {
                        return r.e(668).then(r.bind(r, 603))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))(),
                fe = (0, i.makeLazyLoader)((function() {
                    return (0, i.moduleLoader)((function() {
                        return r.e(116).then(r.bind(r, 3859))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))(),
                _e = (0, i.makeLazyLoader)((function() {
                    return (0, i.moduleLoader)((function() {
                        return Promise.all([r.e(886), r.e(342)]).then(r.bind(r, 4606))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))(),
                me = (0, i.makeLazyLoader)((function() {
                    return (0, i.moduleLoader)((function() {
                        return Promise.all([r.e(675), r.e(886), r.e(510), r.e(59), r.e(610)]).then(r.bind(r, 8530))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))(),
                pe = (0, i.makeLazyLoader)((function() {
                    return (0, i.moduleLoader)((function() {
                        return Promise.all([r.e(886), r.e(850)]).then(r.bind(r, 665))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))(),
                he = (0, i.makeLazyLoader)((function() {
                    return (0, i.moduleLoader)((function() {
                        return r.e(280).then(r.bind(r, 7033))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))(),
                ve = (0, i.makeLazyLoader)((function() {
                    return (0, i.moduleLoader)((function() {
                        return r.e(960).then(r.bind(r, 1817))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))(),
                ye = (0, i.makeLazyLoader)((function() {
                    return (0, i.moduleLoader)((function() {
                        return r.e(287).then(r.bind(r, 70))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))(),
                ge = (0, i.makeLazyLoader)((function() {
                    return (0, i.moduleLoader)((function() {
                        return r.e(80).then(r.bind(r, 6447))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))();
            const be = (0, l.observer)((function() {
                    var e = (0, Z.A)(),
                        t = e.is_eligible,
                        r = e.is_in_progress,
                        n = ee(),
                        o = n.common,
                        i = n.client,
                        l = n.modules,
                        c = n.traders_hub,
                        u = n.ui,
                        s = i.is_logged_in,
                        d = i.is_eu,
                        f = i.is_eu_country,
                        _ = i.is_populating_mt5_account_list,
                        m = i.verification_code,
                        p = i.is_trading_experience_incomplete,
                        h = i.is_virtual,
                        v = o.platform,
                        y = l.cfd,
                        g = y.current_list,
                        b = y.is_mt5_trade_modal_visible,
                        E = y.toggleMT5TradeModal,
                        w = y.getRealSyntheticAccountsExistingData,
                        A = y.getRealFinancialAccountsExistingData,
                        S = y.getRealSwapfreeAccountsExistingData,
                        T = y.has_cfd_error,
                        O = y.mt5_migration_error,
                        k = y.is_mt5_password_invalid_format_modal_visible,
                        L = y.is_cfd_password_modal_enabled,
                        x = y.is_cfd_success_dialog_enabled,
                        D = y.is_sent_email_modal_enabled,
                        N = y.is_ctrader_transfer_modal_visible,
                        I = y.is_server_maintenance_modal_visible,
                        z = y.is_account_unavailable_modal_visible,
                        P = u.enableApp,
                        j = u.disableApp,
                        C = u.is_reset_trading_password_modal_visible,
                        F = u.setResetTradingPasswordModalOpen,
                        M = u.setCFDPasswordResetModal,
                        U = u.is_top_up_virtual_open,
                        G = u.is_top_up_virtual_success,
                        V = u.is_mt5_migration_modal_open,
                        B = u.should_show_assessment_complete_modal,
                        W = u.is_complete_user_profile_modal_open,
                        q = c.is_demo,
                        $ = c.is_account_transfer_modal_open,
                        Y = c.toggleAccountTransferModal,
                        J = c.is_real_wallets_upgrade_on,
                        H = c.is_verification_docs_list_modal_visible,
                        X = c.is_regulators_compare_modal_visible,
                        re = c.is_wallet_migration_failed,
                        be = c.is_setup_real_account_or_go_to_demo_modal_visible,
                        Ee = te(a().useState({
                            is_visible: !1,
                            selected_login: "",
                            selected_account: "",
                            selected_account_type: "",
                            selected_account_group: "",
                            selected_server: ""
                        }), 2),
                        we = Ee[0],
                        Ae = Ee[1],
                        Se = (0, Q.A)(),
                        Te = function(e, t, r, n, a) {
                            Ae((function(o) {
                                return {
                                    is_visible: !o.is_visible,
                                    selected_login: "string" == typeof e ? e : "",
                                    selected_account: "string" == typeof t ? t : "",
                                    selected_account_group: r || "",
                                    selected_account_type: n || "",
                                    selected_server: a || ""
                                }
                            }))
                        },
                        Oe = function(e) {
                            var t = Object.keys(g);
                            return t.some((function(t) {
                                return t.startsWith("".concat(v, ".real.").concat(e)) && (r = g[t], "dxtrade" !== v || 1 === r.enabled);
                                var r
                            })) ? t.filter((function(t) {
                                return t.startsWith("".concat(v, ".real.").concat(e))
                            })).reduce((function(e, t) {
                                return e.push(g[t]), e
                            }), []) : void 0
                        },
                        ke = null == m ? void 0 : m.trading_platform_dxtrade_password_reset,
                        Le = null == m ? void 0 : m.trading_platform_mt5_password_reset;
                    w(Oe("synthetic")), A(Oe("financial")), S(Oe("all"));
                    var xe = L || x || k || D,
                        De = new URLSearchParams((0, R.useLocation)().search).get("action"),
                        Ne = !d && !Se && (t || J || r) && !W,
                        Ie = d && (h || !p) && !B && (t || J) && !De && !W;
                    return a().createElement(a().Fragment, null, I && a().createElement(de, null), z && a().createElement(fe, null), xe && a().createElement(se, {
                        platform: v
                    }), a().createElement(K, {
                        platform: v
                    }), " ", N && a().createElement(ye, null), T && a().createElement(ue, null), (U || G) && a().createElement(_e, {
                        platform: v
                    }), b && a().createElement(me, {
                        is_open: b,
                        onPasswordManager: Te,
                        toggleModal: E,
                        is_eu_user: s && d || !s && f,
                        is_demo: q
                    }), we.is_visible && a().createElement(pe, {
                        is_visible: we.is_visible,
                        selected_login: we.selected_login,
                        selected_account_group: we.selected_account_group,
                        selected_account_type: we.selected_account_type,
                        selected_server: we.selected_server,
                        platform: v,
                        toggleModal: Te
                    }), C && a().createElement(ve, {
                        platform: ke ? "dxtrade" : "mt5",
                        enableApp: P,
                        disableApp: j,
                        toggleResetTradingPasswordModal: function() {
                            F(!1), M(!1)
                        },
                        is_visible: C,
                        is_loading: _,
                        verification_code: ke || Le
                    }), (V || !!O) && a().createElement(he, null), X && a().createElement(oe, null), $ && a().createElement(ae, {
                        is_modal_open: $,
                        toggleModal: Y
                    }), H && a().createElement(ne, null), a().createElement(a().Fragment, null, re && a().createElement(ie, null), Ne && a().createElement(le, null), Ie && a().createElement(ce, null)), be && a().createElement(ge, null))
                })),
                Ee = function() {
                    var e = (0, d.Y)().isDesktop;
                    return a().createElement(x.Ay, {
                        backgroundColor: "var(--general-section-1)",
                        foregroundColor: "var(--general-hover)",
                        width: 300,
                        height: 60
                    }, e ? a().createElement("rect", {
                        x: "10",
                        y: "10",
                        rx: "6",
                        ry: "6",
                        width: "190",
                        height: "40"
                    }) : a().createElement("rect", {
                        x: "60",
                        y: "10",
                        rx: "6",
                        ry: "6",
                        width: "80",
                        height: "30"
                    }))
                };
            var we = r(992),
                Ae = r.n(we),
                Se = r(4135);

            function Te(e) {
                return Te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, Te(e)
            }

            function Oe() {
                Oe = function() {
                    return t
                };
                var e, t = {},
                    r = Object.prototype,
                    n = r.hasOwnProperty,
                    a = Object.defineProperty || function(e, t, r) {
                        e[t] = r.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    i = o.iterator || "@@iterator",
                    l = o.asyncIterator || "@@asyncIterator",
                    c = o.toStringTag || "@@toStringTag";

                function u(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    u({}, "")
                } catch (e) {
                    u = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function s(e, t, r, n) {
                    var o = t && t.prototype instanceof v ? t : v,
                        i = Object.create(o.prototype),
                        l = new D(n || []);
                    return a(i, "_invoke", {
                        value: O(e, r, l)
                    }), i
                }

                function d(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                t.wrap = s;
                var f = "suspendedStart",
                    _ = "suspendedYield",
                    m = "executing",
                    p = "completed",
                    h = {};

                function v() {}

                function y() {}

                function g() {}
                var b = {};
                u(b, i, (function() {
                    return this
                }));
                var E = Object.getPrototypeOf,
                    w = E && E(E(N([])));
                w && w !== r && n.call(w, i) && (b = w);
                var A = g.prototype = v.prototype = Object.create(b);

                function S(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        u(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function T(e, t) {
                    function r(a, o, i, l) {
                        var c = d(e[a], e, o);
                        if ("throw" !== c.type) {
                            var u = c.arg,
                                s = u.value;
                            return s && "object" == Te(s) && n.call(s, "__await") ? t.resolve(s.__await).then((function(e) {
                                r("next", e, i, l)
                            }), (function(e) {
                                r("throw", e, i, l)
                            })) : t.resolve(s).then((function(e) {
                                u.value = e, i(u)
                            }), (function(e) {
                                return r("throw", e, i, l)
                            }))
                        }
                        l(c.arg)
                    }
                    var o;
                    a(this, "_invoke", {
                        value: function(e, n) {
                            function a() {
                                return new t((function(t, a) {
                                    r(e, n, t, a)
                                }))
                            }
                            return o = o ? o.then(a, a) : a()
                        }
                    })
                }

                function O(t, r, n) {
                    var a = f;
                    return function(o, i) {
                        if (a === m) throw Error("Generator is already running");
                        if (a === p) {
                            if ("throw" === o) throw i;
                            return {
                                value: e,
                                done: !0
                            }
                        }
                        for (n.method = o, n.arg = i;;) {
                            var l = n.delegate;
                            if (l) {
                                var c = k(l, n);
                                if (c) {
                                    if (c === h) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (a === f) throw a = p, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            a = m;
                            var u = d(t, r, n);
                            if ("normal" === u.type) {
                                if (a = n.done ? p : _, u.arg === h) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (a = p, n.method = "throw", n.arg = u.arg)
                        }
                    }
                }

                function k(t, r) {
                    var n = r.method,
                        a = t.iterator[n];
                    if (a === e) return r.delegate = null, "throw" === n && t.iterator.return && (r.method = "return", r.arg = e, k(t, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), h;
                    var o = d(a, t.iterator, r.arg);
                    if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, h;
                    var i = o.arg;
                    return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, h) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, h)
                }

                function L(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function D(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(L, this), this.reset(!0)
                }

                function N(t) {
                    if (t || "" === t) {
                        var r = t[i];
                        if (r) return r.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var a = -1,
                                o = function r() {
                                    for (; ++a < t.length;)
                                        if (n.call(t, a)) return r.value = t[a], r.done = !1, r;
                                    return r.value = e, r.done = !0, r
                                };
                            return o.next = o
                        }
                    }
                    throw new TypeError(Te(t) + " is not iterable")
                }
                return y.prototype = g, a(A, "constructor", {
                    value: g,
                    configurable: !0
                }), a(g, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = u(g, c, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name))
                }, t.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, u(e, c, "GeneratorFunction")), e.prototype = Object.create(A), e
                }, t.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, S(T.prototype), u(T.prototype, l, (function() {
                    return this
                })), t.AsyncIterator = T, t.async = function(e, r, n, a, o) {
                    void 0 === o && (o = Promise);
                    var i = new T(s(e, r, n, a), o);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, S(A), u(A, c, "Generator"), u(A, i, (function() {
                    return this
                })), u(A, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(e) {
                    var t = Object(e),
                        r = [];
                    for (var n in t) r.push(n);
                    return r.reverse(),
                        function e() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, t.values = N, D.prototype = {
                    constructor: D,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(x), !t)
                            for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var r = this;

                        function a(n, a) {
                            return l.type = "throw", l.arg = t, r.next = n, a && (r.method = "next", r.arg = e), !!a
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                l = i.completion;
                            if ("root" === i.tryLoc) return a("end");
                            if (i.tryLoc <= this.prev) {
                                var c = n.call(i, "catchLoc"),
                                    u = n.call(i, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                                } else {
                                    if (!u) throw Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var a = this.tryEntries[r];
                            if (a.tryLoc <= this.prev && n.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), x(r), h
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var a = n.arg;
                                    x(r)
                                }
                                return a
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(t, r, n) {
                        return this.delegate = {
                            iterator: N(t),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = e), h
                    }
                }, t
            }

            function ke(e, t, r, n, a, o, i) {
                try {
                    var l = e[o](i),
                        c = l.value
                } catch (e) {
                    return void r(e)
                }
                l.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function Le(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var xe = (0, l.observer)((function() {
                var e = (0, c.A)(),
                    t = e.traders_hub,
                    r = e.client,
                    n = e.common,
                    l = t.selected_account_type,
                    u = t.selectAccountType,
                    s = r.setPrevAccountType,
                    d = n.current_language,
                    f = function(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != r) {
                                var n, a, o, i, l = [],
                                    c = !0,
                                    u = !1;
                                try {
                                    if (o = (r = r.call(e)).next, 0 === t) {
                                        if (Object(r) !== r) return;
                                        c = !1
                                    } else
                                        for (; !(c = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); c = !0);
                                } catch (e) {
                                    u = !0, a = e
                                } finally {
                                    try {
                                        if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                                    } finally {
                                        if (u) throw a
                                    }
                                }
                                return l
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return Le(e, t);
                                var r = {}.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Le(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }((0, _.A)({
                        featureFlag: "ce_tradershub_dashboard_tracking",
                        defaultValue: !1
                    }), 1)[0];
                return a().createElement("div", {
                    className: Ae()("account-type-dropdown--parent")
                }, a().createElement(o.Dropdown, {
                    classNameIcon: "account-type-dropdown__icon--".concat(l),
                    value: l,
                    classNameDisplay: Ae()("account-type-dropdown", "account-type-dropdown--".concat(l)),
                    list: (0, Se.tb)(),
                    key: "account-type-dropdown__icon--key-".concat(d),
                    onChange: function() {
                        var e, t = (e = Oe().mark((function e(t) {
                            return Oe().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return "real" === l ? (0, i.startPerformanceEventTimer)("switch_from_real_to_demo_time") : "demo" === l && (0, i.startPerformanceEventTimer)("switch_from_demo_to_real_time"), e.next = 3, u(t.target.value);
                                    case 3:
                                        return e.next = 5, s(t.target.value);
                                    case 5:
                                        f && i.cacheTrackEvents.loadEvent([{
                                            event: {
                                                name: "ce_tradershub_dashboard_form",
                                                properties: {
                                                    action: "switch_account_mode",
                                                    form_name: "traders_hub_default",
                                                    account_mode: l
                                                }
                                            }
                                        }]);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })), function() {
                            var t = this,
                                r = arguments;
                            return new Promise((function(n, a) {
                                var o = e.apply(t, r);

                                function i(e) {
                                    ke(o, n, a, i, l, "next", e)
                                }

                                function l(e) {
                                    ke(o, n, a, i, l, "throw", e)
                                }
                                i(void 0)
                            }))
                        });
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }))
            }));
            const De = xe;
            var Ne = r(2206);
            const Ie = function() {
                var e = (0, d.Y)().isDesktop;
                return a().createElement(x.Ay, {
                    backgroundColor: "var(--general-section-1)",
                    foregroundColor: "var(--general-hover)",
                    height: 50
                }, e ? a().createElement("rect", {
                    x: "5",
                    y: "5",
                    rx: "3",
                    ry: "3",
                    width: "120",
                    height: "50"
                }) : a().createElement("rect", {
                    x: "0",
                    y: "5",
                    rx: "3",
                    ry: "3",
                    width: "100",
                    height: "30"
                }))
            };
            var ze = r(6915);

            function Pe(e) {
                return function(e) {
                    if (Array.isArray(e)) return je(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return je(e, t);
                        var r = {}.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? je(e, t) : void 0
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function je(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            const Ce = function() {
                    var e = (0, c.A)().client,
                        t = e.dxtrade_accounts_list,
                        r = e.mt5_login_list,
                        n = e.ctrader_accounts_list,
                        a = [];
                    return Array.isArray(r) && (a = [].concat(Pe(a), Pe(r))), Array.isArray(t) && (a = [].concat(Pe(a), Pe(t))), Array.isArray(n) && (a = [].concat(Pe(a), Pe(n))), a
                },
                Re = function() {
                    var e = (0, c.A)().traders_hub.is_eu_user;
                    return Ce().filter((function(t) {
                        var r = "demo" === t.account_type,
                            n = "maltainvest" === t.landing_company_short;
                        return !r && (e ? n : !n)
                    }))
                },
                Fe = function() {
                    var e = (0, c.A)(),
                        t = e.client,
                        r = e.traders_hub,
                        n = t.current_fiat_currency,
                        a = t.is_crypto,
                        o = t.currency,
                        i = t.default_currency,
                        l = r.is_eu_user,
                        u = (0, ze.A)().real;
                    if (!u.length) return i;
                    var s = u.find((function(e) {
                        return !a(e.currency || "USD")
                    }));
                    if (s) return (null == s ? void 0 : s.currency) || "";
                    var d = l ? n || i : u[0].currency;
                    return a() ? d : o
                };
            var Me = r(1660);
            const Ue = function(e) {
                var t = Fe(),
                    r = (0, Me.R)(),
                    n = r.handleSubscription,
                    a = r.getExchangeRate;
                return e.length ? {
                    balance: e.reduce((function(e, r) {
                        var o = "demo" === (null == r ? void 0 : r.account_type) ? "USD" : t || "",
                            i = r.currency || t || "";
                        o !== i && n(o, i);
                        var l = a(o, i);
                        return e + (r.balance || 0) / l
                    }), 0),
                    currency: t
                } : {
                    balance: 0,
                    currency: t
                }
            };
            var Ge = r(344),
                Ve = (0, l.observer)((function() {
                    var e = (0, d.Y)().isDesktop,
                        t = (0, c.A)(),
                        r = t.traders_hub,
                        n = t.client,
                        i = t.common,
                        l = t.modules,
                        s = t.gtm.pushDataLayer,
                        f = r.selected_account_type,
                        _ = r.is_eu_user,
                        m = r.no_CR_account,
                        p = r.no_MF_account,
                        h = n.is_logging_in,
                        v = n.is_switching,
                        y = n.default_currency,
                        g = n.is_landing_company_loaded,
                        b = n.is_mt5_allowed,
                        E = n.is_populating_account_list,
                        w = n.is_populating_mt5_account_list,
                        A = n.is_populating_dxtrade_account_list,
                        S = n.is_populating_ctrader_account_list,
                        T = l.cashier,
                        O = T.account_transfer,
                        k = T.general_store,
                        L = O.is_transfer_confirm,
                        x = k.is_loading,
                        D = i.current_language,
                        N = (0, ze.A)(),
                        I = N.real,
                        z = N.demo,
                        P = {
                            all: Ce(),
                            demo: Ce().filter((function(e) {
                                return "demo" === e.account_type
                            })),
                            real: Re()
                        },
                        j = P.real,
                        C = P.demo,
                        R = E || w || A || S,
                        F = Ue(I),
                        M = Ue(j),
                        U = Ue(C),
                        G = Fe(),
                        V = (0, Me.A)().exchange_rates,
                        B = "real" === f,
                        W = F.balance + M.balance,
                        q = ((null == z ? void 0 : z.balance) || 0) + U.balance,
                        $ = !(m && !_ || p && _),
                        Y = _ && !p,
                        J = !_ && !m,
                        H = b ? (0, u.localize)("Total assets in your Deriv Apps and Deriv MT5 CFDs demo account.") : (0, u.localize)("Total assets in your account."),
                        X = (v || h) && (Y || J) || !g || x || L || R || !(0, Ge.Pp)(B, G, I, j, V);
                    return a().useEffect((function() {
                        !X && B && (0 == W ? s({
                            event: "balance",
                            value: !1
                        }) : W > 0 && s({
                            event: "balance",
                            value: !0
                        }))
                    }), [X, B, s, W]), X ? a().createElement(a().Fragment, null, a().createElement("div", {
                        className: "asset-summary__container content-loader"
                    }, a().createElement(Ie, null))) : a().createElement("div", {
                        className: "asset-summary"
                    }, $ || "demo" === f ? a().createElement(a().Fragment, null, e ? a().createElement(o.Text, {
                        align: "right",
                        key: "asset-summary--key-".concat(D),
                        size: "xs",
                        line_height: "s"
                    }, (0, u.localize)("Total assets")) : null, a().createElement(o.Popover, {
                        alignment: e ? "left" : "top",
                        message: _ ? H : (0, u.localize)("Total assets in all your accounts"),
                        zIndex: 9999,
                        is_bubble_hover_enabled: !0
                    }, a().createElement(Ne.A, {
                        currency: B ? F.currency || "" : (null == z ? void 0 : z.currency) || y,
                        balance: B ? W : q,
                        underline_style: "dotted"
                    }))) : null)
                }));
            const Be = Ve;
            var We = ["children", "is_selected"];

            function qe() {
                return qe = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, qe.apply(null, arguments)
            }
            var $e = function(e) {
                    var t = e.children,
                        r = e.is_selected,
                        n = function(e, t) {
                            if (null == e) return {};
                            var r, n, a = function(e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (-1 !== t.indexOf(n)) continue;
                                        r[n] = e[n]
                                    }
                                return r
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < o.length; n++) r = o[n], -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                            }
                            return a
                        }(e, We);
                    return a().createElement("div", qe({
                        className: Ae()("item", {
                            "is-selected": r
                        })
                    }, n), a().createElement(o.Text, {
                        size: "xs",
                        weight: r ? "bold" : "normal",
                        color: r ? "prominent" : "general"
                    }, t))
                },
                Ye = (0, l.observer)((function() {
                    var e = (0, c.A)(),
                        t = e.traders_hub,
                        r = e.client,
                        n = t.toggleRegulatorsCompareModal,
                        i = r.is_switching;
                    return a().createElement("div", {
                        className: "regulators-switcher__container"
                    }, a().createElement("div", {
                        className: "regulators-switcher--text"
                    }, a().createElement(o.Text, null, (0, u.localize)("Regulation:")), a().createElement("div", {
                        "data-testid": "dt_regulators-switcher-icon",
                        className: "regulators-switcher--icon",
                        onClick: function() {
                            return n()
                        }
                    }, a().createElement(o.Icon, {
                        icon: "IcInfoOutline"
                    }))), i ? a().createElement("div", {
                        className: "regulators-switcher__container content-loader"
                    }, a().createElement(Ee, null)) : a().createElement("div", {
                        className: "regulators-switcher__switch"
                    }, Se.rx.map((function(e) {
                        return a().createElement($e, {
                            key: "regulator-item_".concat(e),
                            is_selected: e === t.selected_region,
                            onClick: function() {
                                return t.selectRegion(e)
                            }
                        }, e)
                    }))))
                }));
            const Je = Ye;

            function He(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }(0, i.makeLazyLoader)((function() {
                return (0, i.moduleLoader)((function() {
                    return Promise.resolve().then(r.bind(r, 8662))
                }))
            }), (function() {
                return a().createElement(o.Loading, null)
            }))();
            const Xe = (0, l.observer)((function() {
                var e = (0, d.Y)().isDesktop,
                    t = (0, c.A)(),
                    r = t.traders_hub,
                    n = t.client,
                    l = n.is_landing_company_loaded,
                    s = n.is_switching,
                    f = n.has_maltainvest_account,
                    _ = r.selected_region,
                    m = r.handleTabItemClick,
                    p = r.toggleRegulatorsCompareModal,
                    h = r.content_flag,
                    v = h === i.ContentFlag.LOW_RISK_CR_NON_EU || h === i.ContentFlag.LOW_RISK_CR_EU,
                    y = function(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != r) {
                                var n, a, o, i, l = [],
                                    c = !0,
                                    u = !1;
                                try {
                                    if (o = (r = r.call(e)).next, 0 === t) {
                                        if (Object(r) !== r) return;
                                        c = !1
                                    } else
                                        for (; !(c = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); c = !0);
                                } catch (e) {
                                    u = !0, a = e
                                } finally {
                                    try {
                                        if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                                    } finally {
                                        if (u) throw a
                                    }
                                }
                                return l
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return He(e, t);
                                var r = {}.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? He(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }(a().useState(0), 2),
                    g = y[0],
                    b = y[1];
                return a().useEffect((function() {
                    b("Non-EU" === _ ? 0 : 1)
                }), [_]), a().createElement(a().Fragment, null, e ? a().createElement("div", {
                    className: "main-title-bar"
                }, a().createElement("div", {
                    className: "main-title-bar__right"
                }, a().createElement(o.Text, {
                    size: "m",
                    weight: "bold",
                    color: "prominent"
                }, a().createElement(u.Localize, {
                    i18n_default_text: "Trader's Hub"
                })), a().createElement(De, null)), v && f && l && a().createElement(Je, null), a().createElement(Be, null)) : a().createElement(a().Fragment, null, a().createElement(o.Text, {
                    weight: "bold",
                    className: "main-title-bar__text",
                    color: "prominent"
                }, a().createElement(u.Localize, {
                    i18n_default_text: "Trader's Hub"
                })), a().createElement("div", {
                    className: "main-title-bar-mobile"
                }, a().createElement("div", {
                    className: "main-title-bar-mobile--account-type-dropdown"
                }, a().createElement(De, null)), v && f && l ? a().createElement("div", {
                    className: "main-title-bar-mobile--regulator"
                }, s ? a().createElement("div", {
                    className: "main-title-bar-mobile--regulator__container content-loader"
                }, a().createElement(Ee, null)) : a().createElement(a().Fragment, null, a().createElement("div", {
                    className: "main-title-bar-mobile--regulator--compare-modal",
                    onClick: function() {
                        return p()
                    }
                }, a().createElement(o.Icon, {
                    icon: "IcInfoOutline"
                })), a().createElement(o.Tabs, {
                    active_index: g,
                    onTabItemClick: function(e) {
                        b(e), m(e)
                    },
                    top: !0,
                    is_scrollable: !0,
                    is_overflow_hidden: !0
                }, a().createElement("div", {
                    label: (0, u.localize)("Non-EU")
                }), a().createElement("div", {
                    label: (0, u.localize)("EU")
                })))) : null), a().createElement(Be, null)))
            }));
            var Ke = r(6772);

            function Ze() {
                return Ze = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, Ze.apply(null, arguments)
            }

            function Qe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var et = (0, l.observer)((function() {
                var e = (0, d.Y)().isDesktop,
                    t = (0, c.A)(),
                    r = t.traders_hub,
                    l = t.client,
                    s = t.ui,
                    f = r.available_platforms,
                    m = r.is_eu_user,
                    p = r.is_real,
                    h = r.no_MF_account,
                    v = r.no_CR_account,
                    y = r.is_demo,
                    g = r.content_flag,
                    b = r.selected_account_type,
                    E = l.is_landing_company_loaded,
                    w = l.is_eu,
                    A = l.has_maltainvest_account,
                    S = l.real_account_creation_unlock_date,
                    T = s.setShouldShowCooldownModal,
                    L = s.openRealAccountSignup,
                    x = g === i.ContentFlag.LOW_RISK_CR_NON_EU,
                    I = g === i.ContentFlag.LOW_RISK_CR_EU,
                    z = g === i.ContentFlag.HIGH_RISK_CR,
                    P = g === i.ContentFlag.CR_DEMO,
                    j = function(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != r) {
                                var n, a, o, i, l = [],
                                    c = !0,
                                    u = !1;
                                try {
                                    if (o = (r = r.call(e)).next, 0 === t) {
                                        if (Object(r) !== r) return;
                                        c = !1
                                    } else
                                        for (; !(c = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); c = !0);
                                } catch (e) {
                                    u = !0, a = e
                                } finally {
                                    try {
                                        if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                                    } finally {
                                        if (u) throw a
                                    }
                                }
                                return l
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return Qe(e, t);
                                var r = {}.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Qe(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }((0, _.A)({
                        featureFlag: "ce_tradershub_dashboard_tracking",
                        defaultValue: !1
                    }), 1)[0];
                return (0, n.useEffect)((function() {
                    E && (0, i.setPerformanceValue)("option_multiplier_section_loading_time")
                }), [E]), a().createElement(O.A, {
                    title: a().createElement((function() {
                        return e ? x || z || P ? a().createElement(o.Text, {
                            size: "sm",
                            weight: "bold"
                        }, a().createElement(u.Localize, {
                            i18n_default_text: "Options"
                        })) : I || w ? a().createElement(o.Text, {
                            size: "sm",
                            weight: "bold",
                            color: "prominent"
                        }, a().createElement(u.Localize, {
                            i18n_default_text: "Multipliers"
                        })) : null : null
                    }), null),
                    description: a().createElement(Ke.A, {
                        is_eu_user: !(x || z || P)
                    }),
                    is_deriv_platform: !0
                }, p && (v || h) && a().createElement("div", {
                    className: "full-row"
                }, a().createElement(k.A, {
                    action_type: "get",
                    availability: "All",
                    clickable_icon: !0,
                    name: (0, u.localize)("Deriv account"),
                    description: m ? (0, u.localize)("To trade multipliers, get a Deriv Apps account first.") : (0, u.localize)("To trade options and multipliers, get a Deriv Apps account first."),
                    icon: "Options",
                    onAction: function() {
                        h ? S ? T(!0) : L("maltainvest") : L("svg")
                    }
                })), !f.length && a().createElement(D, null), f.map((function(e, t) {
                    return a().createElement(k.A, Ze({
                        key: "trading_app_card_".concat(e.name)
                    }, e, {
                        clickable_icon: !0,
                        action_type: y || !v && !m || A && m ? "trade" : "none",
                        is_deriv_platform: !0,
                        onAction: function() {
                            j && i.cacheTrackEvents.loadEvent([{
                                event: {
                                    name: "ce_tradershub_dashboard_form",
                                    properties: {
                                        action: "account_open",
                                        form_name: "traders_hub_default",
                                        account_mode: b,
                                        account_name: y ? "".concat(e.name, " Demo") : e.name
                                    }
                                }
                            }])
                        },
                        has_divider: (!m || y) && (0, N.A)(t, f.length, 3)
                    }))
                })))
            }));
            const tt = et,
                rt = function() {
                    return a().createElement(x.Ay, {
                        height: 80,
                        backgroundColor: "var(--general-section-1)",
                        foregroundColor: "var(--general-hover)",
                        width: 500
                    }, a().createElement(o.MobileWrapper, null, a().createElement("rect", {
                        x: "10",
                        y: "35",
                        rx: "5",
                        ry: "5",
                        width: "330",
                        height: "45"
                    })))
                };

            function nt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, o, i, l = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); c = !0);
                        } catch (e) {
                            u = !0, a = e
                        } finally {
                            try {
                                if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                            } finally {
                                if (u) throw a
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return at(e, t);
                        var r = {}.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? at(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function at(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var ot = (0, l.observer)((function() {
                var e = (0, c.A)(),
                    t = e.client,
                    r = e.ui,
                    a = e.traders_hub,
                    o = r.openRealAccountSignup,
                    l = r.is_from_signup_account,
                    u = r.setIsFromSignupAccount,
                    d = t.is_logged_in,
                    f = t.has_active_real_account,
                    m = a.setIsSetupRealAccountOrGoToDemoModalVisible,
                    p = (0, s.A)(),
                    h = p.is_cr_demo,
                    v = p.is_eu_demo,
                    y = nt((0, _.A)({
                        featureFlag: "direct-real-account-creation-flow",
                        defaultValue: !1
                    }), 1)[0],
                    g = nt((0, _.A)({
                        featureFlag: "show_setup_real_or_go_demo",
                        defaultValue: !1
                    }), 1)[0];
                return (0, n.useEffect)((function() {
                    !f && l && d && (y && !g && (h ? (o(i.Jurisdiction.SVG), u(!1)) : v && (o(i.Jurisdiction.MALTA_INVEST), u(!1))), !y && g && (m(!0), u(!1)))
                }), [h, v, f, l, d, y, o, u]), null
            }));
            const it = ot;
            var lt = r(4848);
            var ct = r(8191),
                ut = r(3974),
                st = r(5345);

            function dt(e) {
                return dt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, dt(e)
            }

            function ft(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function _t(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ft(Object(r), !0).forEach((function(t) {
                        mt(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ft(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function mt(e, t, r) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != dt(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var r = t.call(e, "string");
                            if ("object" != dt(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == dt(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function pt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            const ht = function(e) {
                var t = e.e_book_show_way,
                    r = e.e_books_url,
                    n = e.e_book_from_landing,
                    o = e.lang,
                    l = function(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != r) {
                                var n, a, o, i, l = [],
                                    c = !0,
                                    u = !1;
                                try {
                                    if (o = (r = r.call(e)).next, 0 === t) {
                                        if (Object(r) !== r) return;
                                        c = !1
                                    } else
                                        for (; !(c = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); c = !0);
                                } catch (e) {
                                    u = !0, a = e
                                } finally {
                                    try {
                                        if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                                    } finally {
                                        if (u) throw a
                                    }
                                }
                                return l
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return pt(e, t);
                                var r = {}.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? pt(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }(a().useState(!0), 2),
                    s = l[0],
                    d = l[1],
                    f = (0, c.A)(),
                    _ = f.traders_hub,
                    m = (f.ui, {
                        banner_name: n,
                        account_mode: _.selected_account_type
                    });
                return a().useEffect((function() {
                    i.cacheTrackEvents.loadEvent([{
                        event: {
                            name: "ce_tradershub_banner",
                            properties: _t({
                                action: "open"
                            }, m)
                        }
                    }])
                }), []), a().createElement(a().Fragment, null, s ? a().createElement("div", {
                    id: "e-book-banner",
                    className: "book-banner-template"
                }, a().createElement("div", {
                    className: "book-banner-template__left"
                }, a().createElement(ut.A, {
                    width: "24",
                    height: "24",
                    fill: "#00822A"
                }), "banner-with-link" === t ? a().createElement("div", {
                    className: "book-banner-template__content"
                }, a().createElement("label", null, a().createElement(u.Localize, {
                    i18n_default_text: "We’ve sent your e-book to your email. You can also download it here."
                })), a().createElement("a", {
                    href: r[n][o] || r[n].EN,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: function() {
                        i.cacheTrackEvents.loadEvent([{
                            event: {
                                name: "ce_tradershub_banner",
                                properties: _t({
                                    action: "click download"
                                }, m)
                            }
                        }])
                    }
                }, a().createElement(u.Localize, {
                    i18n_default_text: "Download e-book"
                }))) : a().createElement("div", {
                    className: "book-banner-template__content"
                }, a().createElement("label", null, a().createElement(u.Localize, {
                    i18n_default_text: "We’ve sent your e-book. Check your email to download it."
                })))), a().createElement(st.A, {
                    className: "book-banner-template__cancel",
                    width: "24",
                    height: "24",
                    fill: "var(--text-prominent)",
                    onClick: function() {
                        i.cacheTrackEvents.loadEvent([{
                            event: {
                                name: "ce_tradershub_banner",
                                properties: _t({
                                    action: "close"
                                }, m)
                            }
                        }]), i.SessionStore.remove("show_book"), d(!1)
                    }
                })) : null)
            };
            var vt = {
                    "forex-ebook": {
                        EN: "https://deriv.link/ebook-forex-en-lq",
                        FR: "https://deriv.link/ebook-forex-fr-lq",
                        PT: "https://deriv.link/ebook-forex-pt-lq",
                        ES: "https://deriv.link/ebook-forex-sp-lq",
                        VI: "https://deriv.link/ebook-forex-vn-lq"
                    },
                    "stock-ebook": {
                        EN: "https://deriv.link/ebook-stocks-en-lq",
                        FR: "https://deriv.link/ebook-stocks-fr-lq",
                        PT: "https://deriv.link/ebook-stocks-pt-lq",
                        ES: "https://deriv.link/ebook-stocks-sp-lq"
                    },
                    "cryptocurrencies-ebook": {
                        EN: "https://deriv.link/ebook-crypto-en-lq",
                        FR: "https://deriv.link/ebook-crypto-fr-lq",
                        PT: "https://deriv.link/ebook-crypto-pt-lq",
                        ES: "https://deriv.link/ebook-crypto-fr-lq"
                    },
                    "synthetic-indices-ebook": {
                        EN: "https://deriv.link/ebook-synthetics-en-lq",
                        FR: "https://deriv.link/ebook-synthetics-fr-lq",
                        PT: "https://deriv.link/ebook-synthetics-pt-lq",
                        ES: "https://deriv.link/ebook-synthetics-sp-lq",
                        VI: "https://deriv.link/ebook-synthetics-vn-lq"
                    },
                    "chart-patterns": {
                        EN: "https://deriv.link/ebook-10chart-en-lq",
                        FR: "https://deriv.link/ebook-10charts-fr-lq",
                        PT: "https://deriv.link/ebook-10charts-pt-lq",
                        ES: "https://deriv.link/ebook-10charts-sp-lq"
                    }
                },
                yt = ct.Analytics.getFeatureValue("e_book", "inactive");
            const gt = function() {
                var e = i.SessionStore.get("show_book"),
                    t = (0, u.getLanguage)();
                return e && null != yt && yt.includes("banner") ? a().createElement(ht, {
                    e_book_show_way: yt,
                    e_books_url: vt,
                    e_book_from_landing: e,
                    lang: t
                }) : null
            };
            var bt = r(8662);

            function Et(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, o, i, l = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); c = !0);
                        } catch (e) {
                            u = !0, a = e
                        } finally {
                            try {
                                if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                            } finally {
                                if (u) throw a
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return wt(e, t);
                        var r = {}.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? wt(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function wt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var At = (0, i.makeLazyLoader)((function() {
                    return (0, i.moduleLoader)((function() {
                        return r.e(5).then(r.bind(r, 8201))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))(),
                St = (0, i.makeLazyLoader)((function() {
                    return (0, i.moduleLoader)((function() {
                        return r.e(778).then(r.bind(r, 3031))
                    }))
                }), (function() {
                    return a().createElement(o.Loading, null)
                }))(),
                Tt = (0, l.observer)((function() {
                    var e = (0, c.A)(),
                        t = e.client,
                        r = e.common,
                        n = e.traders_hub,
                        i = r.current_language,
                        l = t.is_landing_company_loaded,
                        s = t.has_any_real_account,
                        d = t.is_eu,
                        f = t.has_maltainvest_account,
                        m = t.is_low_risk,
                        p = n.is_real,
                        h = function() {
                            var e, t, r = (0, c.A)().client.statement,
                                n = null !== (e = null == r ? void 0 : r.count) && void 0 !== e ? e : 0,
                                a = null !== (t = null == r ? void 0 : r.transactions) && void 0 !== t ? t : [],
                                o = a.some((function(e) {
                                    return "deposit" === e.action_type
                                })),
                                i = a.some((function(e) {
                                    return "transfer" === e.action_type && e.amount && e.amount > 0
                                }));
                            return {
                                count: n,
                                transactions: a,
                                hasDeposited: o,
                                hasTransferred: i,
                                isLoaded: void 0 !== (null == r ? void 0 : r.count) && void 0 !== (null == r ? void 0 : r.transactions)
                            }
                        }(),
                        v = h.hasDeposited,
                        y = h.hasTransferred,
                        g = h.isLoaded,
                        b = (0, Z.A)(),
                        E = b.is_eligible,
                        w = b.is_failed,
                        A = b.is_in_progress,
                        S = b.is_migrating,
                        T = s,
                        O = Et((0, _.A)({
                            featureFlag: "traders-hub-real-account-banner",
                            defaultValue: !1
                        }), 1)[0] && !s && !d && l,
                        k = Et((0, _.A)({
                            featureFlag: "traders_hub_first_deposit_banner",
                            defaultValue: !1
                        }), 1)[0] && p && !(m && f) && g && !v && !y && !(A || S || w || !d && E),
                        L = Et((0, _.A)({
                            featureFlag: "show-market-maintenance-banner"
                        }), 2),
                        x = L[0],
                        D = L[1];
                    return a().createElement(a().Fragment, {
                        key: i
                    }, D && x && a().createElement("div", {
                        className: "da-inline-full-width-note-with-icon-banner"
                    }, a().createElement("div", null, a().createElement(o.Icon, {
                        icon: "IcAppstoreNewWarning",
                        size: "24"
                    })), a().createElement(o.Text, {
                        as: "p",
                        size: "xs",
                        line_height: "s"
                    }, a().createElement(u.Localize, {
                        i18n_default_text: "Due to a market issue, your trading experience may be affected on symbols such as US stock indices, commodities, and metals.\nPricing may be unavailable or delayed, and orders may be interrupted or rejected. Trading maybe suspended for selected instruments until liquidity is restored."
                    }))), T && a().createElement("div", {
                        className: "get-started-trading-banner-ct"
                    }), O && a().createElement(At, null), k && a().createElement(St, null), a().createElement(gt, null), a().createElement(bt.default, null))
                }));
            const Ot = Tt;
            var kt = r(4280),
                Lt = r(9229);
            const xt = (0, l.observer)((function() {
                var e = (0, c.A)().client,
                    t = e.is_account_to_be_closed_by_residence,
                    r = e.account_time_of_closure;
                return t ? a().createElement(kt.v, {
                    type: "filled",
                    variant: "warning",
                    className: "business-closure-banner"
                }, a().createElement(Lt.E, {
                    size: "xs"
                }, a().createElement(u.Localize, {
                    i18n_default_text: "Due to business changes, client accounts in your country are to be closed. Deposits and trading are disabled. Withdraw your funds by {{date}}.",
                    values: {
                        date: (0, i.formatDate)(r, "DD MMM YYYY")
                    }
                }))) : null
            }));
            var Dt = (0, l.observer)((function(e) {
                    var t = e.is_cfd_visible,
                        r = void 0 === t || t,
                        n = e.is_options_and_multipliers_visible,
                        o = void 0 === n || n,
                        i = (0, c.A)().traders_hub,
                        l = i.selected_region,
                        u = i.is_eu_user;
                    return a().createElement("div", {
                        "data-testid": "dt_traders_hub",
                        className: Ae()("traders-hub__main-container", {
                            "traders-hub__main-container-reversed": u || "EU" === l
                        })
                    }, o && a().createElement(tt, null), r && a().createElement(C, null))
                })),
                Nt = (0, l.observer)((function() {
                    var e = (0, d.Y)().isDesktop,
                        t = (0, c.A)(),
                        r = t.traders_hub,
                        n = t.client,
                        l = t.ui.notification_messages_ui,
                        f = n.is_landing_company_loaded,
                        _ = n.is_logged_in,
                        m = n.is_switching,
                        p = n.is_logging_in,
                        h = n.is_single_logging_in,
                        v = n.is_account_setting_loaded,
                        y = n.is_mt5_allowed,
                        g = n.website_status,
                        b = (0, s.A)(),
                        E = b.is_eu_demo,
                        w = b.is_eu_real,
                        A = r.selected_platform_type,
                        S = r.setTogglePlatformType,
                        T = r.is_eu_user,
                        O = r.combined_cfd_mt5_accounts,
                        k = r.available_ctrader_accounts,
                        L = r.available_dxtrade_accounts,
                        x = a().useRef(null),
                        D = !m && !p && v && f || (0, i.checkServerMaintenance)(g);
                    a().useEffect((function() {
                        T && S("cfd")
                    }), [T, S]), a().useEffect((function() {
                        T && S("cfd")
                    }), [T, S]), a().useLayoutEffect((function() {
                        (0, i.startPerformanceEventTimer)("option_multiplier_section_loading_time")
                    }), []);
                    var N = E || w || T,
                        I = function() {
                            return [{
                                text: N ? (0, u.localize)("Multipliers") : (0, u.localize)("Options"),
                                value: "options"
                            }, {
                                text: (0, u.localize)("CFDs"),
                                value: "cfd"
                            }]
                        },
                        z = I(),
                        P = I().reverse();
                    if (!_) return null;
                    if (h) return a().createElement(o.Loading, {
                        is_fullscreen: !0
                    });
                    var j = O.length || L.length || k.length,
                        C = !(!y || !j),
                        R = f ? a().createElement(Dt, {
                            is_cfd_visible: C
                        }) : a().createElement(Dt, null),
                        F = a().createElement(a().Fragment, null, f ? C && a().createElement(o.ButtonToggle, {
                            buttons_arr: T ? P : z,
                            className: "traders-hub__button-toggle",
                            has_rounded_button: !0,
                            is_traders_hub: window.location.pathname === i.routes.traders_hub,
                            name: "platform_type",
                            onChange: function(e) {
                                S(e.target.value)
                            },
                            value: A
                        }) : a().createElement(rt, null), f && !C && a().createElement("div", {
                            className: "traders-hub--mt5-not-allowed"
                        }, a().createElement(o.Text, {
                            size: "s",
                            weight: "bold",
                            color: "prominent"
                        }, a().createElement(u.Localize, {
                            i18n_default_text: "Multipliers"
                        }))), C ? a().createElement(Dt, {
                            is_cfd_visible: "cfd" === A,
                            is_options_and_multipliers_visible: "options" === A
                        }) : a().createElement(Dt, {
                            is_cfd_visible: !1,
                            is_options_and_multipliers_visible: !0
                        }));
                    return a().createElement(a().Fragment, null, a().createElement(it, null), a().createElement(xt, null), a().createElement(o.Div100vhContainer, {
                        className: "traders-hub--mobile",
                        height_offset: "50px",
                        is_disabled: e
                    }, D && a().createElement(l, null), a().createElement("div", {
                        id: "traders-hub",
                        className: Ae()("traders-hub", {
                            "traders-hub--eu-user": T && C,
                            "traders-hub--eu-user-without-mt5": T && !C
                        }),
                        ref: x
                    }, a().createElement(Ot, null), a().createElement(Xe, null), e ? R : F, a().createElement(be, null))), T && a().createElement(lt.A, null))
                }));
            const It = Nt
        },
        9621: (e, t, r) => {
            r.d(t, {
                $_: () => n,
                Ax: () => i,
                KI: () => l,
                KV: () => o,
                XJ: () => a,
                o5: () => c
            });
            var n = {
                    MT5: "mt5",
                    DXTRADE: "dxtrade",
                    CTRADER: "ctrader",
                    CFD: "cfd",
                    CFDS: "CFDs"
                },
                a = {
                    DEMO: "demo",
                    REAL: "real"
                },
                o = {
                    SYNTHETIC: "synthetic",
                    GAMING: "gaming",
                    FINANCIAL: "financial",
                    ALL: "all"
                },
                i = {
                    SWAPFREE: "swap_free",
                    ZEROSPREAD: "zero_spread",
                    CTRADER: "ctrader",
                    DERIVX: "derivx",
                    STP: "stp",
                    GOLD: "gold"
                },
                l = {
                    IOS: "ios",
                    HAUWEI: "huawei",
                    ANDROID: "android"
                },
                c = {
                    WINDOWS: "windows",
                    LINUX: "linux",
                    MACOS: "macos"
                }
        },
        568: (e, t, r) => {
            r.d(t, {
                bN: () => l,
                bw: () => i,
                cY: () => o,
                j5: () => c
            });
            var n = r(6464),
                a = r(2641),
                o = function() {
                    var e = {
                            account_type: "",
                            leverage: 500,
                            short_title: (0, a.localize)("CFDs")
                        },
                        t = {
                            account_type: "",
                            leverage: 500,
                            short_title: (0, a.localize)("Standard")
                        },
                        r = {
                            account_type: "financial",
                            leverage: 1e3,
                            short_title: (0, a.localize)("Financial")
                        };
                    return {
                        demo: {
                            all: {
                                dxtrade_account_type: e.account_type,
                                leverage: e.leverage,
                                title: (0, a.localize)("Demo"),
                                short_title: e.short_title
                            },
                            synthetic: {
                                dxtrade_account_type: t.account_type,
                                leverage: t.leverage,
                                title: (0, a.localize)("Demo Standard"),
                                short_title: t.short_title
                            },
                            financial: {
                                dxtrade_account_type: r.account_type,
                                leverage: r.leverage,
                                title: (0, a.localize)("Demo Financial"),
                                short_title: r.short_title
                            }
                        },
                        real: {
                            all: {
                                dxtrade_account_type: e.account_type,
                                leverage: e.leverage,
                                title: (0, a.localize)("Real"),
                                short_title: e.short_title
                            },
                            dxtrade: {
                                mt5_account_type: e.account_type,
                                leverage: e.leverage,
                                title: (0, a.localize)("Real"),
                                short_title: e.short_title
                            },
                            synthetic: {
                                dxtrade_account_type: t.account_type,
                                leverage: t.leverage,
                                title: (0, a.localize)("Standard"),
                                short_title: t.short_title
                            },
                            financial: {
                                dxtrade_account_type: r.account_type,
                                leverage: r.leverage,
                                title: (0, a.localize)("Financial"),
                                short_title: r.short_title
                            }
                        }
                    }
                },
                i = function() {
                    var e = {
                        account_type: "",
                        leverage: 500,
                        short_title: (0, a.localize)("All")
                    };
                    return {
                        demo: {
                            all: {
                                ctrader_account_type: e.account_type,
                                leverage: e.leverage,
                                title: (0, a.localize)("Demo"),
                                short_title: e.short_title
                            }
                        },
                        real: {
                            all: {
                                dxtrade_account_type: e.account_type,
                                leverage: e.leverage,
                                title: (0, a.localize)("All"),
                                short_title: e.short_title
                            }
                        }
                    }
                },
                l = function(e, t) {
                    var r, o = {
                            account_type: "",
                            leverage: 100,
                            short_title: "swap_free" === t ? (0, a.localize)("Swap-Free") : (0, a.localize)("Zero Spread")
                        },
                        i = {
                            account_type: "",
                            leverage: 500,
                            short_title: (0, a.localize)("Standard")
                        };
                    switch (t) {
                        case n.PRODUCT.STP:
                            r = (0, a.localize)("Financial STP");
                            break;
                        case n.PRODUCT.GOLD:
                            r = (0, a.localize)("Gold");
                            break;
                        default:
                            r = (0, a.localize)("Financial")
                    }
                    var l = t === n.PRODUCT.GOLD ? (0, a.localize)("Demo Gold") : (0, a.localize)("Demo Financial"),
                        c = t === n.PRODUCT.GOLD ? (0, a.localize)("Demo Gold") : (0, a.localize)("Demo CFDs"),
                        u = t === n.PRODUCT.GOLD ? (0, a.localize)("Gold") : (0, a.localize)("Deriv CFDs"),
                        s = t === n.PRODUCT.GOLD ? (0, a.localize)("Deriv Gold") : (0, a.localize)("Deriv CFDs"),
                        d = {
                            account_type: "financial",
                            leverage: 1e3,
                            short_title: e ? u : r
                        },
                        f = {
                            account_type: "financial_stp",
                            leverage: 100,
                            short_title: (0, a.localize)("Financial STP")
                        };
                    return {
                        demo: {
                            all: {
                                mt5_account_type: o.account_type,
                                leverage: o.leverage,
                                title: "swap_free" === t ? (0, a.localize)("Demo Swap-Free") : (0, a.localize)("Demo Zero Spread"),
                                short_title: o.short_title
                            },
                            all_swap_free_svg: {
                                mt5_account_type: o.account_type,
                                leverage: o.leverage,
                                title: (0, a.localize)("Demo Swap-Free SVG"),
                                short_title: (0, a.localize)("Swap-Free SVG")
                            },
                            all_zero_spread_bvi: {
                                mt5_account_type: o.account_type,
                                leverage: o.leverage,
                                title: (0, a.localize)("Demo Zero Spread BVI"),
                                short_title: (0, a.localize)("Zero Spread BVI")
                            },
                            ctrader: {
                                mt5_account_type: o.account_type,
                                leverage: "500",
                                title: (0, a.localize)("Demo"),
                                short_title: (0, a.localize)("cTrader")
                            },
                            synthetic: {
                                mt5_account_type: i.account_type,
                                leverage: i.leverage,
                                title: (0, a.localize)("Demo Standard"),
                                short_title: i.short_title
                            },
                            financial: {
                                mt5_account_type: d.account_type,
                                leverage: d.leverage,
                                title: e ? c : l,
                                short_title: d.short_title
                            },
                            financial_demo: {
                                mt5_account_type: d.account_type,
                                leverage: d.leverage,
                                title: e ? (0, a.localize)("Demo CFDs") : (0, a.localize)("Demo Financial"),
                                short_title: d.short_title
                            },
                            synthetic_svg: {
                                mt5_account_type: i.account_type,
                                leverage: i.leverage,
                                title: (0, a.localize)("Demo Standard SVG"),
                                short_title: i.short_title
                            },
                            financial_svg: {
                                mt5_account_type: d.account_type,
                                leverage: d.leverage,
                                title: e ? (0, a.localize)("Demo CFDs") : (0, a.localize)("Demo Financial SVG"),
                                short_title: e ? (0, a.localize)("CFDs") : (0, a.localize)("Financial SVG")
                            },
                            financial_stp: {
                                mt5_account_type: f.account_type,
                                leverage: f.leverage,
                                title: (0, a.localize)("Demo Financial STP"),
                                short_title: f.short_title
                            }
                        },
                        real: {
                            all: {
                                mt5_account_type: o.account_type,
                                leverage: o.leverage,
                                title: "swap_free" === t ? (0, a.localize)("Swap-Free") : (0, a.localize)("Zero Spread"),
                                short_title: o.short_title
                            },
                            all_swap_free_svg: {
                                mt5_account_type: o.account_type,
                                leverage: o.leverage,
                                title: (0, a.localize)("Swap-Free SVG"),
                                short_title: o.short_title
                            },
                            all_zero_spread_bvi: {
                                mt5_account_type: o.account_type,
                                leverage: o.leverage,
                                title: (0, a.localize)("Zero Spread BVI"),
                                short_title: o.short_title
                            },
                            ctrader: {
                                mt5_account_type: o.account_type,
                                leverage: "500",
                                title: (0, a.localize)("Real"),
                                short_title: (0, a.localize)("cTrader")
                            },
                            dxtrade: {
                                mt5_account_type: o.account_type,
                                leverage: o.leverage,
                                title: (0, a.localize)("Real"),
                                short_title: o.short_title
                            },
                            synthetic: {
                                mt5_account_type: i.account_type,
                                leverage: i.leverage,
                                title: (0, a.localize)("Standard"),
                                short_title: i.short_title
                            },
                            synthetic_svg: {
                                mt5_account_type: i.account_type,
                                leverage: i.leverage,
                                title: (0, a.localize)("Standard SVG"),
                                short_title: i.short_title
                            },
                            synthetic_bvi: {
                                mt5_account_type: i.account_type,
                                leverage: i.leverage,
                                title: (0, a.localize)("Standard BVI"),
                                short_title: i.short_title
                            },
                            synthetic_v: {
                                mt5_account_type: i.account_type,
                                leverage: i.leverage,
                                title: (0, a.localize)("Standard Vanuatu"),
                                short_title: i.short_title
                            },
                            financial: {
                                mt5_account_type: d.account_type,
                                leverage: d.leverage,
                                title: e ? s : r,
                                short_title: d.short_title
                            },
                            financial_svg: {
                                mt5_account_type: d.account_type,
                                leverage: d.leverage,
                                title: e ? (0, a.localize)("CFDs") : (0, a.localize)("Financial SVG"),
                                short_title: d.short_title
                            },
                            financial_bvi: {
                                mt5_account_type: d.account_type,
                                leverage: d.leverage,
                                title: e ? (0, a.localize)("CFDs") : (0, a.localize)("Financial BVI"),
                                short_title: d.short_title
                            },
                            financial_fx: {
                                mt5_account_type: d.account_type,
                                leverage: d.leverage,
                                title: e ? (0, a.localize)("CFDs") : (0, a.localize)("Financial Labuan"),
                                short_title: d.short_title
                            },
                            financial_v: {
                                mt5_account_type: d.account_type,
                                leverage: d.leverage,
                                title: e ? (0, a.localize)("CFDs") : (0, a.localize)("Financial Vanuatu"),
                                short_title: d.short_title
                            },
                            financial_stp: {
                                mt5_account_type: f.account_type,
                                leverage: f.leverage,
                                title: (0, a.localize)("Financial STP"),
                                short_title: f.short_title
                            }
                        }
                    }
                },
                c = function(e) {
                    var t = "";
                    switch (e) {
                        case n.Jurisdiction.SVG:
                            t = (0, a.localize)("SVG");
                            break;
                        case n.Jurisdiction.BVI:
                            t = (0, a.localize)("BVI");
                            break;
                        case n.Jurisdiction.LABUAN:
                            t = (0, a.localize)("Labuan");
                            break;
                        case n.Jurisdiction.VANUATU:
                            t = (0, a.localize)("Vanuatu");
                            break;
                        case n.Jurisdiction.MALTA_INVEST:
                            t = (0, a.localize)("Malta");
                            break;
                        default:
                            t = null == e ? void 0 : e.toUpperCase()
                    }
                    return t
                }
        },
        9752: (e, t, r) => {
            r.d(t, {
                A: () => o
            });
            var n = r(6464),
                a = r(4530);
            const o = function() {
                var e = (0, a.A)().traders_hub,
                    t = null == e ? void 0 : e.content_flag;
                return {
                    is_low_risk_cr_non_eu: t === n.ContentFlag.LOW_RISK_CR_NON_EU,
                    is_low_risk_cr_eu: t === n.ContentFlag.LOW_RISK_CR_EU,
                    is_high_risk_cr: t === n.ContentFlag.HIGH_RISK_CR,
                    is_cr_demo: t === n.ContentFlag.CR_DEMO,
                    is_eu_demo: t === n.ContentFlag.EU_DEMO,
                    is_eu_real: t === n.ContentFlag.EU_REAL
                }
            }
        },
        1660: (e, t, r) => {
            r.d(t, {
                A: () => o,
                R: () => a
            });
            var n = r(4530),
                a = function() {
                    var e = (0, n.A)().client,
                        t = e.exchange_rates;
                    return {
                        handleSubscription: e.subscribeToExchangeRate,
                        exchange_rates: t,
                        getExchangeRate: e.getExchangeRate,
                        unsubscribe: e.unsubscribeFromExchangeRate,
                        unsubscribeAll: e.unsubscribeFromAllExchangeRates
                    }
                };
            const o = a
        },
        6750: (e, t, r) => {
            r.d(t, {
                A: () => I
            });
            var n = r(9155),
                a = r(9079),
                o = "deriv.com",
                i = [o, "deriv.me", "deriv.be"],
                l = "undefined" != typeof window && window.location.hostname.split("app.")[1] || "",
                c = i.includes(l) ? l : o,
                u = Object.freeze({
                    DERIV_HOST_NAME: c,
                    DERIV_COM_PRODUCTION: "https://".concat(c),
                    DERIV_COM_PRODUCTION_EU: "https://eu.".concat(c),
                    DERIV_COM_STAGING: "https://staging.".concat(c),
                    DERIV_APP_PRODUCTION: "https://app.".concat(c),
                    DERIV_APP_STAGING: "https://staging-app.".concat(c),
                    HUB_PRODUCTION: "https://hub.".concat(c, "/tradershub"),
                    HUB_STAGING: "https://staging-hub.".concat(c, "/tradershub"),
                    SMARTTRADER_PRODUCTION: "https://smarttrader.".concat(c),
                    SMARTTRADER_STAGING: "https://staging-smarttrader.".concat(c),
                    P2P_PRODUCTION: "https://p2p.".concat(c),
                    P2P_STAGING: "https://staging-p2p.".concat(c),
                    BOT_PRODUCTION: "https://dbot.".concat(c),
                    BOT_STAGING: "https://staging-dbot.".concat(c)
                }),
                s = r(7157);

            function d(e) {
                return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, d(e)
            }

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(r), !0).forEach((function(t) {
                        m(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function m(e, t, r) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != d(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var r = t.call(e, "string");
                            if ("object" != d(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == d(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            r(8191);
            const p = JSON.parse('{"Bn":{"trader":{"name":"Deriv Trader","icon":"IcRebrandingDerivTrader"},"dbot":{"name":"Deriv Bot","icon":"IcRebrandingDerivBot"},"mt5":{"name":"Deriv MT5","icon":"IcRebrandingDmt5"},"ctrader":{"name":"Deriv cTrader","icon":"IcRebrandingCtrader"},"dxtrade":{"name":"Deriv X","icon":"IcRebrandingDxtrade"},"smarttrader":{"name":"SmartTrader","icon":"IcRebrandingSmarttrader"},"go":{"name":"Deriv GO","icon":"IcRebrandingDerivGo"}}}');
            var h, v, y, g, b, E = function(e) {
                    var t, r = p.Bn[e];
                    return t = window.location.host, /^(((.*)\.)?(localhost:8443|pages.dev|binary\.(sx|com)|deriv.(com|me|be|dev)))$/.test(t) || (r.icon = ""), r
                },
                w = function() {
                    var e = window.location.hostname;
                    return e.includes(".deriv.be") ? "deriv.be" : e.includes(".deriv.me") ? "deriv.me" : "deriv.com"
                };
            h = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.hostname,
                    t = {
                        is_staging_deriv_app: /^staging-app\.deriv\.(com|me|be)$/i.test(e),
                        is_deriv_app: /^app\.deriv\.(com|me|be)$/i.test(e),
                        is_test_link: /^(.*)\.binary\.sx$/i.test(e),
                        is_test_deriv_app: /^test-app\.deriv\.com$/i.test(e)
                    };
                return _(_({}, t), {}, {
                    is_staging: t.is_staging_deriv_app,
                    is_test_link: t.is_test_link
                })
            }().is_staging_deriv_app, v = s.Sp.getValue("i18n_language"), y = s.vk.getQueryParameter("lang"), g = v || y || "en", b = h ? u.SMARTTRADER_STAGING : u.SMARTTRADER_PRODUCTION, "".concat(b, "/").concat(g.toLowerCase(), "/trading.html"), "https://hub.".concat(w(), "/Accounts/ProofOfIdentity"), "https://hub.".concat(w(), "/Accounts/ProofOfIdentityStatus"), "https://hub.".concat(w(), "/Accounts/ProofOfAddress"), "https://hub.".concat(w(), "/Accounts/UserFinancialAssessment"), Object.freeze({
                DBot: E("dbot").name,
                DTrader: E("trader").name,
                DXtrade: E("dxtrade").name,
                DMT5: E("mt5").name,
                SmartTrader: E("smarttrader").name,
                DerivGO: E("go").name
            }), Object.freeze({
                MT5: "mt5",
                DXTRADE: "dxtrade",
                CTRADER: "ctrader"
            });
            var A = r(4530),
                S = r(7442);

            function T(e) {
                return T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, T(e)
            }

            function O() {
                O = function() {
                    return t
                };
                var e, t = {},
                    r = Object.prototype,
                    n = r.hasOwnProperty,
                    a = Object.defineProperty || function(e, t, r) {
                        e[t] = r.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    i = o.iterator || "@@iterator",
                    l = o.asyncIterator || "@@asyncIterator",
                    c = o.toStringTag || "@@toStringTag";

                function u(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    u({}, "")
                } catch (e) {
                    u = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function s(e, t, r, n) {
                    var o = t && t.prototype instanceof v ? t : v,
                        i = Object.create(o.prototype),
                        l = new I(n || []);
                    return a(i, "_invoke", {
                        value: L(e, r, l)
                    }), i
                }

                function d(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                t.wrap = s;
                var f = "suspendedStart",
                    _ = "suspendedYield",
                    m = "executing",
                    p = "completed",
                    h = {};

                function v() {}

                function y() {}

                function g() {}
                var b = {};
                u(b, i, (function() {
                    return this
                }));
                var E = Object.getPrototypeOf,
                    w = E && E(E(z([])));
                w && w !== r && n.call(w, i) && (b = w);
                var A = g.prototype = v.prototype = Object.create(b);

                function S(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        u(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function k(e, t) {
                    function r(a, o, i, l) {
                        var c = d(e[a], e, o);
                        if ("throw" !== c.type) {
                            var u = c.arg,
                                s = u.value;
                            return s && "object" == T(s) && n.call(s, "__await") ? t.resolve(s.__await).then((function(e) {
                                r("next", e, i, l)
                            }), (function(e) {
                                r("throw", e, i, l)
                            })) : t.resolve(s).then((function(e) {
                                u.value = e, i(u)
                            }), (function(e) {
                                return r("throw", e, i, l)
                            }))
                        }
                        l(c.arg)
                    }
                    var o;
                    a(this, "_invoke", {
                        value: function(e, n) {
                            function a() {
                                return new t((function(t, a) {
                                    r(e, n, t, a)
                                }))
                            }
                            return o = o ? o.then(a, a) : a()
                        }
                    })
                }

                function L(t, r, n) {
                    var a = f;
                    return function(o, i) {
                        if (a === m) throw Error("Generator is already running");
                        if (a === p) {
                            if ("throw" === o) throw i;
                            return {
                                value: e,
                                done: !0
                            }
                        }
                        for (n.method = o, n.arg = i;;) {
                            var l = n.delegate;
                            if (l) {
                                var c = x(l, n);
                                if (c) {
                                    if (c === h) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (a === f) throw a = p, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            a = m;
                            var u = d(t, r, n);
                            if ("normal" === u.type) {
                                if (a = n.done ? p : _, u.arg === h) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (a = p, n.method = "throw", n.arg = u.arg)
                        }
                    }
                }

                function x(t, r) {
                    var n = r.method,
                        a = t.iterator[n];
                    if (a === e) return r.delegate = null, "throw" === n && t.iterator.return && (r.method = "return", r.arg = e, x(t, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), h;
                    var o = d(a, t.iterator, r.arg);
                    if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, h;
                    var i = o.arg;
                    return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, h) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, h)
                }

                function D(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function N(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function I(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(D, this), this.reset(!0)
                }

                function z(t) {
                    if (t || "" === t) {
                        var r = t[i];
                        if (r) return r.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var a = -1,
                                o = function r() {
                                    for (; ++a < t.length;)
                                        if (n.call(t, a)) return r.value = t[a], r.done = !1, r;
                                    return r.value = e, r.done = !0, r
                                };
                            return o.next = o
                        }
                    }
                    throw new TypeError(T(t) + " is not iterable")
                }
                return y.prototype = g, a(A, "constructor", {
                    value: g,
                    configurable: !0
                }), a(g, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = u(g, c, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name))
                }, t.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, u(e, c, "GeneratorFunction")), e.prototype = Object.create(A), e
                }, t.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, S(k.prototype), u(k.prototype, l, (function() {
                    return this
                })), t.AsyncIterator = k, t.async = function(e, r, n, a, o) {
                    void 0 === o && (o = Promise);
                    var i = new k(s(e, r, n, a), o);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, S(A), u(A, c, "Generator"), u(A, i, (function() {
                    return this
                })), u(A, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(e) {
                    var t = Object(e),
                        r = [];
                    for (var n in t) r.push(n);
                    return r.reverse(),
                        function e() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, t.values = z, I.prototype = {
                    constructor: I,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(N), !t)
                            for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var r = this;

                        function a(n, a) {
                            return l.type = "throw", l.arg = t, r.next = n, a && (r.method = "next", r.arg = e), !!a
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                l = i.completion;
                            if ("root" === i.tryLoc) return a("end");
                            if (i.tryLoc <= this.prev) {
                                var c = n.call(i, "catchLoc"),
                                    u = n.call(i, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                                } else {
                                    if (!u) throw Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var a = this.tryEntries[r];
                            if (a.tryLoc <= this.prev && n.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), N(r), h
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var a = n.arg;
                                    N(r)
                                }
                                return a
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(t, r, n) {
                        return this.delegate = {
                            iterator: z(t),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = e), h
                    }
                }, t
            }

            function k(e, t, r, n, a, o, i) {
                try {
                    var l = e[o](i),
                        c = l.value
                } catch (e) {
                    return void r(e)
                }
                l.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function L(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, o, i, l = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); c = !0);
                        } catch (e) {
                            u = !0, a = e
                        } finally {
                            try {
                                if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                            } finally {
                                if (u) throw a
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return x(e, t);
                        var r = {}.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? x(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function x(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var D, N = {
                PRODUCTION: "https://api-gateway.".concat((D = window.location.hostname, D.includes(".deriv.be") ? "deriv.be" : D.includes(".deriv.me") ? "deriv.me" : "deriv.com")),
                STAGING: "https://staging-api-gateway.deriv.com"
            };
            const I = function(e) {
                var t = (0, A.A)().traders_hub.is_demo,
                    r = function(e) {
                        if (null == e || !e.length) return null;
                        var t = ["svg", "vanuatu", "bvi"].reduce((function(t, r) {
                            return t || e.find((function(e) {
                                var t;
                                return (null == e || null === (t = e.landing_company_name) || void 0 === t ? void 0 : t.toLowerCase()) === r || (null == e ? void 0 : e.landing_company_short) === r
                            }))
                        }), null);
                        return t || e[0]
                    }(e),
                    o = (null == r ? void 0 : r.display_login) || "",
                    i = L((0, n.useState)(null), 2),
                    l = i[0],
                    c = i[1];
                (0, n.useEffect)((function() {
                    "" != o && !t && s()
                }), [o, t]);
                var u = L((0, S.A)({
                        featureFlag: "is_nakala_enabled"
                    }), 1)[0],
                    s = function() {
                        var e, t = (e = O().mark((function e() {
                            var t, r, n, i, l;
                            return O().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, r = window.location.hostname, n = ["app.deriv.com", "app.deriv.me", "app.deriv.be"].includes(r), i = n ? N.PRODUCTION : N.STAGING, e.next = 6, a.A.get("".concat(i, "/nakala/v1/nakala-servers?mt5_login_id=").concat(o));
                                    case 6:
                                        l = e.sent, c(null === (t = l.data) || void 0 === t ? void 0 : t.server_name), e.next = 13;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(0), console.error("Error fetching Nakala server info:", e.t0);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 10]
                            ])
                        })), function() {
                            var t = this,
                                r = arguments;
                            return new Promise((function(n, a) {
                                var o = e.apply(t, r);

                                function i(e) {
                                    k(o, n, a, i, l, "next", e)
                                }

                                function l(e) {
                                    k(o, n, a, i, l, "throw", e)
                                }
                                i(void 0)
                            }))
                        });
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }();
                return {
                    IsEnabledNakala: u,
                    nakalaServerInfo: l,
                    loginId: o
                }
            }
        },
        3765: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            var n = r(4530);
            const a = function() {
                var e = (0, n.A)().client,
                    t = e.account_settings,
                    r = e.landing_company_shortcode,
                    a = (t || {}).tnc_status;
                return a && 0 === a[r]
            }
        },
        636: (e, t, r) => {
            r.d(t, {
                A: () => s
            });
            var n = r(9155),
                a = r.n(n),
                o = r(4530),
                i = r(6464);

            function l(e) {
                return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, l(e)
            }

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e, t, r) {
                return (t = function(e) {
                    var t = function(e) {
                        if ("object" != l(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var r = t.call(e, "string");
                            if ("object" != l(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" == l(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            const s = function() {
                var e = (0, o.A)(),
                    t = e.client,
                    r = e.traders_hub,
                    n = t.mt5_login_list,
                    l = r.show_eu_related_content;
                return function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? c(Object(r), !0).forEach((function(t) {
                            u(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }({}, a().useMemo((function() {
                    var e = n.filter((function(e) {
                            return e.landing_company_short === i.Jurisdiction.SVG && !!e.eligible_to_migrate
                        })),
                        t = !!e.length && !l,
                        r = e.length,
                        a = !!e.filter((function(e) {
                            var t;
                            return Object.values(null !== (t = e.eligible_to_migrate) && void 0 !== t ? t : {}).includes(i.Jurisdiction.BVI)
                        })).length,
                        o = !!e.filter((function(e) {
                            var t;
                            return Object.values(null !== (t = e.eligible_to_migrate) && void 0 !== t ? t : {}).includes(i.Jurisdiction.VANUATU)
                        })).length,
                        c = function() {
                            return a ? i.Jurisdiction.BVI : o ? i.Jurisdiction.VANUATU : void 0
                        },
                        u = (0, i.getFormattedJurisdictionCode)(c()),
                        s = !!e.filter((function(e) {
                            var t;
                            return (null === (t = e.eligible_to_migrate) || void 0 === t ? void 0 : t.synthetic) === i.Jurisdiction.BVI
                        })).length,
                        d = !!e.filter((function(e) {
                            var t;
                            return (null === (t = e.eligible_to_migrate) || void 0 === t ? void 0 : t.financial) === i.Jurisdiction.BVI
                        })).length,
                        f = !!e.filter((function(e) {
                            var t;
                            return (null === (t = e.eligible_to_migrate) || void 0 === t ? void 0 : t.synthetic) === i.Jurisdiction.VANUATU
                        })).length,
                        _ = !!e.filter((function(e) {
                            var t;
                            return (null === (t = e.eligible_to_migrate) || void 0 === t ? void 0 : t.financial) === i.Jurisdiction.VANUATU
                        })).length,
                        m = s || f;
                    return {
                        eligible_account_to_migrate_label: u,
                        eligible_svg_to_bvi_derived_accounts: s,
                        eligible_svg_to_bvi_financial_accounts: d,
                        eligible_svg_to_vanuatu_derived_accounts: f,
                        eligible_svg_to_vanuatu_financial_accounts: _,
                        getEligibleAccountToMigrate: c,
                        has_derived_and_financial_mt5: m && (d || _),
                        has_derived_mt5_to_migrate: m,
                        has_svg_accounts_to_migrate: t,
                        no_of_svg_accounts_to_migrate: r,
                        svg_accounts_to_migrate: e
                    }
                }), [n, l]))
            }
        },
        8539: (e, t, r) => {
            r.d(t, {
                A: () => u
            });
            var n = r(9155),
                a = r(6464);

            function o(e) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, o(e)
            }

            function i() {
                i = function() {
                    return t
                };
                var e, t = {},
                    r = Object.prototype,
                    n = r.hasOwnProperty,
                    a = Object.defineProperty || function(e, t, r) {
                        e[t] = r.value
                    },
                    l = "function" == typeof Symbol ? Symbol : {},
                    c = l.iterator || "@@iterator",
                    u = l.asyncIterator || "@@asyncIterator",
                    s = l.toStringTag || "@@toStringTag";

                function d(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    d({}, "")
                } catch (e) {
                    d = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function f(e, t, r, n) {
                    var o = t && t.prototype instanceof g ? t : g,
                        i = Object.create(o.prototype),
                        l = new I(n || []);
                    return a(i, "_invoke", {
                        value: L(e, r, l)
                    }), i
                }

                function _(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                t.wrap = f;
                var m = "suspendedStart",
                    p = "suspendedYield",
                    h = "executing",
                    v = "completed",
                    y = {};

                function g() {}

                function b() {}

                function E() {}
                var w = {};
                d(w, c, (function() {
                    return this
                }));
                var A = Object.getPrototypeOf,
                    S = A && A(A(z([])));
                S && S !== r && n.call(S, c) && (w = S);
                var T = E.prototype = g.prototype = Object.create(w);

                function O(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        d(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function k(e, t) {
                    function r(a, i, l, c) {
                        var u = _(e[a], e, i);
                        if ("throw" !== u.type) {
                            var s = u.arg,
                                d = s.value;
                            return d && "object" == o(d) && n.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                r("next", e, l, c)
                            }), (function(e) {
                                r("throw", e, l, c)
                            })) : t.resolve(d).then((function(e) {
                                s.value = e, l(s)
                            }), (function(e) {
                                return r("throw", e, l, c)
                            }))
                        }
                        c(u.arg)
                    }
                    var i;
                    a(this, "_invoke", {
                        value: function(e, n) {
                            function a() {
                                return new t((function(t, a) {
                                    r(e, n, t, a)
                                }))
                            }
                            return i = i ? i.then(a, a) : a()
                        }
                    })
                }

                function L(t, r, n) {
                    var a = m;
                    return function(o, i) {
                        if (a === h) throw Error("Generator is already running");
                        if (a === v) {
                            if ("throw" === o) throw i;
                            return {
                                value: e,
                                done: !0
                            }
                        }
                        for (n.method = o, n.arg = i;;) {
                            var l = n.delegate;
                            if (l) {
                                var c = x(l, n);
                                if (c) {
                                    if (c === y) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (a === m) throw a = v, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            a = h;
                            var u = _(t, r, n);
                            if ("normal" === u.type) {
                                if (a = n.done ? v : p, u.arg === y) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (a = v, n.method = "throw", n.arg = u.arg)
                        }
                    }
                }

                function x(t, r) {
                    var n = r.method,
                        a = t.iterator[n];
                    if (a === e) return r.delegate = null, "throw" === n && t.iterator.return && (r.method = "return", r.arg = e, x(t, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
                    var o = _(a, t.iterator, r.arg);
                    if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, y;
                    var i = o.arg;
                    return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, y) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y)
                }

                function D(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function N(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function I(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(D, this), this.reset(!0)
                }

                function z(t) {
                    if (t || "" === t) {
                        var r = t[c];
                        if (r) return r.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var a = -1,
                                i = function r() {
                                    for (; ++a < t.length;)
                                        if (n.call(t, a)) return r.value = t[a], r.done = !1, r;
                                    return r.value = e, r.done = !0, r
                                };
                            return i.next = i
                        }
                    }
                    throw new TypeError(o(t) + " is not iterable")
                }
                return b.prototype = E, a(T, "constructor", {
                    value: E,
                    configurable: !0
                }), a(E, "constructor", {
                    value: b,
                    configurable: !0
                }), b.displayName = d(E, s, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
                }, t.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, E) : (e.__proto__ = E, d(e, s, "GeneratorFunction")), e.prototype = Object.create(T), e
                }, t.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, O(k.prototype), d(k.prototype, u, (function() {
                    return this
                })), t.AsyncIterator = k, t.async = function(e, r, n, a, o) {
                    void 0 === o && (o = Promise);
                    var i = new k(f(e, r, n, a), o);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, O(T), d(T, s, "Generator"), d(T, c, (function() {
                    return this
                })), d(T, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(e) {
                    var t = Object(e),
                        r = [];
                    for (var n in t) r.push(n);
                    return r.reverse(),
                        function e() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, t.values = z, I.prototype = {
                    constructor: I,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(N), !t)
                            for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var r = this;

                        function a(n, a) {
                            return l.type = "throw", l.arg = t, r.next = n, a && (r.method = "next", r.arg = e), !!a
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                l = i.completion;
                            if ("root" === i.tryLoc) return a("end");
                            if (i.tryLoc <= this.prev) {
                                var c = n.call(i, "catchLoc"),
                                    u = n.call(i, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                                } else {
                                    if (!u) throw Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var a = this.tryEntries[r];
                            if (a.tryLoc <= this.prev && n.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, y) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), N(r), y
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var a = n.arg;
                                    N(r)
                                }
                                return a
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(t, r, n) {
                        return this.delegate = {
                            iterator: z(t),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = e), y
                    }
                }, t
            }

            function l(e, t, r, n, a, o, i) {
                try {
                    var l = e[o](i),
                        c = l.value
                } catch (e) {
                    return void r(e)
                }
                l.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            const u = function() {
                var e = function(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != r) {
                                var n, a, o, i, l = [],
                                    c = !0,
                                    u = !1;
                                try {
                                    if (o = (r = r.call(e)).next, 0 === t) {
                                        if (Object(r) !== r) return;
                                        c = !1
                                    } else
                                        for (; !(c = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); c = !0);
                                } catch (e) {
                                    u = !0, a = e
                                } finally {
                                    try {
                                        if (!c && null != r.return && (i = r.return(), Object(i) !== i)) return
                                    } finally {
                                        if (u) throw a
                                    }
                                }
                                return l
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return c(e, t);
                                var r = {}.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? c(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }((0, n.useState)(null), 2),
                    t = e[0],
                    r = e[1];
                return (0, n.useEffect)((function() {
                    var e = function() {
                        var e, t = (e = i().mark((function e() {
                            var t;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, a.WS.send({
                                            trading_platform_status: 1
                                        });
                                    case 2:
                                        t = e.sent, r(t.trading_platform_status);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })), function() {
                            var t = this,
                                r = arguments;
                            return new Promise((function(n, a) {
                                var o = e.apply(t, r);

                                function i(e) {
                                    l(o, n, a, i, c, "next", e)
                                }

                                function c(e) {
                                    l(o, n, a, i, c, "throw", e)
                                }
                                i(void 0)
                            }))
                        });
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }();
                    e()
                }), []), {
                    data: t,
                    getPlatformStatus: function(e) {
                        var r;
                        return null == t || null === (r = t.find((function(t) {
                            return t.platform === e
                        }))) || void 0 === r ? void 0 : r.status
                    }
                }
            }
        },
        4792: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            var n = r(4530);
            const a = function() {
                var e = (0, n.A)().client,
                    t = e.wallet_migration_state,
                    r = e.startWalletMigration,
                    a = e.resetWalletMigration;
                return {
                    state: t,
                    is_ineligible: "ineligible" === t,
                    is_eligible: "eligible" === t,
                    is_in_progress: "in_progress" === t,
                    is_migrated: "migrated" === t,
                    is_failed: "failed" === t,
                    is_migrating: e.is_wallet_migration_request_is_in_progress,
                    startMigration: r,
                    resetMigration: a
                }
            }
        }
    }
]);
"use strict";
(self.webpackChunkbot = self.webpackChunkbot || []).push([
    ["278"], {
        57801: function(e, t, s) {
            s.d(t, {
                Z: () => h
            });
            var a = s("85893"),
                r = s("67294"),
                i = s("63387"),
                n = s.n(i);
            let o = e => {
                let {
                    message: t,
                    className: s,
                    type: r
                } = e;
                return (0, a.jsx)("div", {
                    className: n()("dc-field", s, {
                        "dc-field--error": "error" === r,
                        "dc-field--warn": "warn" === r
                    }),
                    children: t
                })
            };
            var l = s("45452");
            let c = e => {
                    let {
                        children: t,
                        has_footer: s
                    } = e;
                    return s ? (0, a.jsx)("div", {
                        className: "dc-input__wrapper",
                        children: t
                    }) : (0, a.jsx)(r.Fragment, {
                        children: t
                    })
                },
                d = r.forwardRef((e, t) => {
                    let {
                        bottom_label: s,
                        className: i,
                        classNameError: d,
                        classNameHint: h,
                        classNameWarn: p,
                        disabled: u = !1,
                        error: m,
                        field_className: _,
                        has_character_counter: x,
                        hint: v,
                        initial_character_count: g,
                        input_id: b,
                        is_relative_hint: j,
                        label_className: N,
                        label: f,
                        leading_icon: w,
                        max_characters: y,
                        trailing_icon: k,
                        warn: Z,
                        data_testId: M,
                        maxLength: C,
                        placeholder: L,
                        ...S
                    } = e, [z, E] = r.useState(0);
                    r.useEffect(() => {
                        (g || 0 === g) && E(g)
                    }, [g]);
                    let F = !!x || !!v && !!j,
                        R = f ? "" : L;
                    return (0, a.jsxs)(c, {
                        has_footer: F,
                        children: [(0, a.jsxs)("div", {
                            className: n()("dc-input", i, {
                                "dc-input--disabled": u,
                                "dc-input--error": m,
                                "dc-input--hint": v,
                                "dc-input--bottom-label-active": s
                            }),
                            children: [(0, a.jsxs)("div", {
                                className: n()("dc-input__container", {
                                    "dc-input__container--disabled": u,
                                    "dc-input__container--error": m
                                }),
                                children: [w && r.cloneElement(w, {
                                    className: n()("dc-input__leading-icon", w.props.className)
                                }), "textarea" === S.type ? (0, a.jsx)("textarea", {
                                    ref: t,
                                    "data-testid": M,
                                    ...S,
                                    className: n()("dc-input__field dc-input__textarea", {
                                        "dc-input__field--placeholder-visible": !f && L
                                    }),
                                    onChange: e => {
                                        var t;
                                        let s = e.target.value;
                                        y && s.length >= y && (s = s.slice(0, y)), E(s.length), e.target.value = s, null === (t = S.onChange) || void 0 === t || t.call(S, e)
                                    },
                                    disabled: u,
                                    id: b,
                                    maxLength: C,
                                    placeholder: R
                                }) : (0, a.jsx)("input", {
                                    ref: t,
                                    "data-testid": M,
                                    ...S,
                                    className: n()("dc-input__field", _, {
                                        "dc-input__field--placeholder-visible": !f && L
                                    }),
                                    onFocus: S.onFocus,
                                    onBlur: S.onBlur,
                                    onChange: S.onChange,
                                    onKeyDown: S.onKeyDown,
                                    onMouseDown: S.onMouseDown,
                                    onMouseUp: S.onMouseUp,
                                    onPaste: S.onPaste,
                                    disabled: u,
                                    "data-lpignore": "password" !== S.type || void 0,
                                    id: b,
                                    "aria-label": f,
                                    maxLength: C,
                                    placeholder: R
                                }), k && r.cloneElement(k, {
                                    className: n()("dc-input__trailing-icon", k.props.className)
                                }), f && (0, a.jsx)("label", {
                                    className: n()("dc-input__label", N),
                                    htmlFor: S.id,
                                    children: f
                                })]
                            }), (0, a.jsx)("div", {
                                children: !F && (0, a.jsxs)(r.Fragment, {
                                    children: [m && (0, a.jsx)(o, {
                                        className: d,
                                        message: m,
                                        type: "error"
                                    }), Z && (0, a.jsx)(o, {
                                        className: p,
                                        message: Z,
                                        type: "warn"
                                    }), !m && v && !j && (0, a.jsx)("div", {
                                        className: "dc-input__hint",
                                        children: (0, a.jsx)(l.Z, {
                                            as: "p",
                                            color: "less-prominent",
                                            size: "xs",
                                            className: h,
                                            children: v
                                        })
                                    })]
                                })
                            })]
                        }), F && (0, a.jsxs)("div", {
                            className: "dc-input__footer",
                            children: [m && (0, a.jsx)(o, {
                                className: d,
                                message: m,
                                type: "error"
                            }), Z && (0, a.jsx)(o, {
                                className: p,
                                message: Z,
                                type: "warn"
                            }), !m && v && (0, a.jsx)("div", {
                                className: "dc-input__hint dc-input__hint--relative",
                                children: (0, a.jsx)(l.Z, {
                                    color: "less-prominent",
                                    "line-height": "m",
                                    size: "xs",
                                    children: v
                                })
                            }), x && (0, a.jsx)("div", {
                                className: "dc-input__counter",
                                children: (0, a.jsxs)(l.Z, {
                                    color: "less-prominent",
                                    "line-height": "m",
                                    size: "xs",
                                    children: [z, y ? `/${y}` : ""]
                                })
                            })]
                        }), s && !m && (0, a.jsx)("div", {
                            className: "dc-input__bottom-label",
                            children: (0, a.jsx)(l.Z, {
                                size: "xs",
                                color: "less-prominent",
                                children: s
                            })
                        })]
                    })
                });
            d.displayName = "Input";
            let h = d
        },
        30394: function(e, t, s) {
            s.d(t, {
                Z: () => m
            });
            var a = s("85893"),
                r = s("67294"),
                i = s("63387"),
                n = s.n(i),
                o = s("82106"),
                l = s("86278"),
                c = s("14244"),
                d = s("26088"),
                h = s("92868"),
                p = s("2502"),
                u = s("45452");
            let m = e => {
                let {
                    alignment: t,
                    children: s,
                    className: i,
                    classNameBubble: m,
                    classNameTarget: _,
                    classNameTargetIcon: x,
                    counter: v,
                    disable_message_icon: g,
                    disable_target_icon: b,
                    has_error: j,
                    icon: N,
                    id: f,
                    is_open: w,
                    is_bubble_hover_enabled: y,
                    margin: k = 0,
                    message: Z,
                    onBubbleClose: M,
                    onBubbleOpen: C,
                    onClick: L = () => void 0,
                    relative_render: S = !1,
                    should_disable_pointer_events: z = !1,
                    should_show_cursor: E,
                    zIndex: F = "1",
                    data_testid: R,
                    arrow_styles: D
                } = e, I = r.useRef(), [P, q] = r.useState(void 0), [B, K] = r.useState(!1), {
                    isDesktop: T
                } = (0, p.F)(), [U, $] = (0, l.X)(null, !0), [A, H] = (0, l.m)(), O = r.useMemo(() => !T && void 0 === w, [T, w]);
                r.useEffect(() => {
                    I.current && q(I.current)
                }, [j]), r.useEffect(() => {
                    !$ && O && K(!1)
                }, [$, O]);
                let W = () => {
                        C && C()
                    },
                    X = () => {
                        M && M()
                    },
                    G = n()(x, N),
                    J = $ && Z && (!O || B);
                return (0, a.jsxs)("div", {
                    ref: U,
                    className: n()({
                        "dc-popover__wrapper": S
                    }),
                    onClick: e => {
                        L(e), O && K(!B)
                    },
                    "data-testid": "dt_popover_wrapper",
                    children: [S && (0, a.jsx)("div", {
                        className: "dc-popover__container",
                        style: {
                            zIndex: F
                        },
                        children: (0, a.jsx)("div", {
                            ref: I,
                            className: "dc-popover__container-relative",
                            "data-testid": "dt_popover_relative_container"
                        })
                    }), (P || !S) && (0, a.jsx)(o.Popover, {
                        isOpen: w ? ? (J || y && H),
                        positions: [t],
                        padding: k + 8,
                        containerClassName: n()({
                            "react-tiny-popover-container--disabled-pointer-event": z,
                            "react-tiny-popover-cursor-option": E
                        }),
                        ...S ? {
                            parentElement: P,
                            contentLocation: e => {
                                let {
                                    childRect: s,
                                    popoverRect: a,
                                    nudgedLeft: r
                                } = e, i = document.body.clientWidth, n = s.right + (a.width - s.width / 2), o = 0, l = 0;
                                switch (t) {
                                    case "left":
                                        l = -1 * Math.abs((a.height > a.width ? r : a.width) + k), o = s.height > a.height ? (s.height - a.height) / 2 : -((a.height - s.height) / 2 * 1);
                                        break;
                                    case "right":
                                        l = a.width + k, o = s.height > a.height ? (s.height - a.height) / 2 : -((a.height - s.height) / 2 * 1);
                                        break;
                                    case "top":
                                        l = n > i ? -1 * Math.abs(n - i) : 0, o = -1 * Math.abs(a.height + k);
                                        break;
                                    case "bottom":
                                        l = n > i ? -1 * Math.abs(n - i) : 0, o = s.height + k
                                }
                                return {
                                    top: o,
                                    left: l
                                }
                            }
                        } : {
                            containerStyle: {
                                zIndex: F
                            }
                        },
                        content: e => {
                            let {
                                position: t,
                                childRect: s,
                                popoverRect: r
                            } = e;
                            return (0, a.jsx)(o.ArrowContainer, {
                                position: t,
                                childRect: s,
                                popoverRect: r,
                                arrowColor: j ? "var(--status-danger)" : "var(--general-active)",
                                arrowSize: 5,
                                arrowStyle: S ? {
                                    borderTop: "10px solid transparent",
                                    borderLeft: "10px solid transparent",
                                    borderRight: `10px solid ${j?"var(--status-danger)":"var(--general-active)"}`,
                                    transform: "rotate(315deg)",
                                    right: "0px",
                                    top: "5px",
                                    height: "10px",
                                    margin: "auto",
                                    bottom: "0px"
                                } : { ...D
                                },
                                children: (0, a.jsxs)("div", {
                                    id: f,
                                    onMouseEnter: W,
                                    onMouseLeave: X,
                                    className: n()(m, "dc-popover__bubble", {
                                        "dc-popover__bubble--error": j
                                    }),
                                    ref: A,
                                    children: [!g && "info" === N && (0, a.jsx)("i", {
                                        className: "dc-popover__bubble__icon",
                                        children: (0, a.jsx)(c.Z, {})
                                    }), j && (0, a.jsx)(u.Z, {
                                        size: "xxs",
                                        color: "colored-background",
                                        children: Z
                                    }) || (0, a.jsx)(u.Z, {
                                        lineHeight: "md",
                                        size: "xxs",
                                        className: "dc-popover__bubble__text",
                                        children: Z
                                    })]
                                })
                            })
                        },
                        children: (0, a.jsx)("div", {
                            "data-testid": R,
                            className: n()("dc-popover", i),
                            id: f,
                            children: (0, a.jsxs)("div", {
                                className: n()(_, "dc-popover__target"),
                                children: [!b && (0, a.jsxs)("i", {
                                    className: Z ? "dc-popover__target__icon" : "dc-popover__target__icon--disabled",
                                    children: ["info" === N && (0, a.jsx)(c.Z, {
                                        className: G
                                    }), "question" === N && (0, a.jsx)(h.Z, {
                                        className: G
                                    }), "dot" === N && (0, a.jsx)(d.Z, {
                                        className: G
                                    }), "counter" === N && (0, a.jsx)("span", {
                                        className: G,
                                        children: v
                                    })]
                                }), s]
                            })
                        })
                    })]
                })
            }
        },
        83257: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return i
                }
            });
            var a = s(67294),
                r = s(46234);
            let i = () => {
                let {
                    ui: e
                } = (0, r.oR)() ? ? {
                    ui: {
                        setDarkMode: () => {},
                        is_dark_mode_on: !1
                    }
                }, {
                    setDarkMode: t,
                    is_dark_mode_on: s
                } = e;
                return {
                    toggleTheme: (0, a.useCallback)(() => {
                        let e = document.querySelector("body");
                        e && (e.classList.contains("theme--dark") ? (localStorage.setItem("theme", "light"), e.classList.remove("theme--dark"), e.classList.add("theme--light"), t(!1)) : (localStorage.setItem("theme", "dark"), e.classList.remove("theme--light"), e.classList.add("theme--dark"), t(!0)))
                    }, [t]),
                    is_dark_mode_on: s,
                    setDarkMode: t
                }
            }
        }
    }
]);
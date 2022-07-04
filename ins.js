! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var i = [],
        n = e.document,
        r = Object.getPrototypeOf,
        o = i.slice,
        s = i.concat,
        a = i.push,
        l = i.indexOf,
        c = {},
        u = c.toString,
        h = c.hasOwnProperty,
        f = h.toString,
        d = f.call(Object),
        p = {};

    function m(e, t) {
        var i = (t = t || n).createElement("script");
        i.text = e, t.head.appendChild(i).parentNode.removeChild(i)
    }
    var g = "3.2.1",
        _ = function (e, t) {
            return new _.fn.init(e, t)
        },
        v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        y = /^-ms-/,
        w = /-([a-z])/g,
        b = function (e, t) {
            return t.toUpperCase()
        };

    function x(e) {
        var t = !!e && "length" in e && e.length,
            i = _.type(e);
        return "function" !== i && !_.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    _.fn = _.prototype = {
        jquery: g,
        constructor: _,
        length: 0,
        toArray: function () {
            return o.call(this)
        },
        get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = _.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return _.each(this, e)
        },
        map: function (e) {
            return this.pushStack(_.map(this, function (t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                i = +e + (e < 0 ? t : 0);
            return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: i.sort,
        splice: i.splice
    }, _.extend = _.fn.extend = function () {
        var e, t, i, n, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || _.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = s[t], s !== (n = e[t]) && (c && n && (_.isPlainObject(n) || (r = Array.isArray(n))) ? (r ? (r = !1, o = i && Array.isArray(i) ? i : []) : o = i && _.isPlainObject(i) ? i : {}, s[t] = _.extend(c, o, n)) : void 0 !== n && (s[t] = n));
        return s
    }, _.extend({
        expando: "jQuery" + (g + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () { },
        isFunction: function (e) {
            return "function" === _.type(e)
        },
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            var t = _.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function (e) {
            var t, i;
            return !(!e || "[object Object]" !== u.call(e) || (t = r(e)) && (i = h.call(t, "constructor") && t.constructor, "function" != typeof i || f.call(i) !== d))
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            m(e)
        },
        camelCase: function (e) {
            return e.replace(y, "ms-").replace(w, b)
        },
        each: function (e, t) {
            var i, n = 0;
            if (x(e))
                for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(v, "")
        },
        makeArray: function (e, t) {
            var i = t || [];
            return null != e && (x(Object(e)) ? _.merge(i, "string" == typeof e ? [e] : e) : a.call(i, e)), i
        },
        inArray: function (e, t, i) {
            return null == t ? -1 : l.call(t, e, i)
        },
        merge: function (e, t) {
            for (var i = +t.length, n = 0, r = e.length; n < i; n++) e[r++] = t[n];
            return e.length = r, e
        },
        grep: function (e, t, i) {
            for (var n = [], r = 0, o = e.length, s = !i; r < o; r++) !t(e[r], r) !== s && n.push(e[r]);
            return n
        },
        map: function (e, t, i) {
            var n, r, o = 0,
                a = [];
            if (x(e))
                for (n = e.length; o < n; o++) null != (r = t(e[o], o, i)) && a.push(r);
            else
                for (o in e) null != (r = t(e[o], o, i)) && a.push(r);
            return s.apply([], a)
        },
        guid: 1,
        proxy: function (e, t) {
            var i, n, r;
            if ("string" == typeof t && (i = e[t], t = e, e = i), _.isFunction(e)) return n = o.call(arguments, 2), (r = function () {
                return e.apply(t || this, n.concat(o.call(arguments)))
            }).guid = e.guid = e.guid || _.guid++, r
        },
        now: Date.now,
        support: p
    }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = i[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    var T = function (e) {
        var t, i, n, r, o, s, a, l, c, u, h, f, d, p, m, g, _, v, y, w = "sizzle" + 1 * new Date,
            b = e.document,
            x = 0,
            T = 0,
            C = se(),
            S = se(),
            k = se(),
            P = function (e, t) {
                return e === t && (h = !0), 0
            },
            O = {}.hasOwnProperty,
            E = [],
            M = E.pop,
            $ = E.push,
            A = E.push,
            D = E.slice,
            L = function (e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                    if (e[i] === t) return i;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            j = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            F = "\\[" + j + "*(" + I + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + j + "*\\]",
            N = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
            z = new RegExp(j + "+", "g"),
            H = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
            B = new RegExp("^" + j + "*," + j + "*"),
            q = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
            W = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]", "g"),
            X = new RegExp(N),
            Y = new RegExp("^" + I + "$"),
            U = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + F),
                PSEUDO: new RegExp("^" + N),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
            },
            V = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Z = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
            ee = function (e, t, i) {
                var n = "0x" + t - 65536;
                return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
                return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            ne = function () {
                f()
            },
            re = ve(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            A.apply(E = D.call(b.childNodes), b.childNodes), E[b.childNodes.length].nodeType
        } catch (e) {
            A = {
                apply: E.length ? function (e, t) {
                    $.apply(e, D.call(t))
                } : function (e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }

        function oe(e, t, n, r) {
            var o, a, c, u, h, p, _, v = t && t.ownerDocument,
                x = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return n;
            if (!r && ((t ? t.ownerDocument || t : b) !== d && f(t), t = t || d, m)) {
                if (11 !== x && (h = K.exec(e)))
                    if (o = h[1]) {
                        if (9 === x) {
                            if (!(c = t.getElementById(o))) return n;
                            if (c.id === o) return n.push(c), n
                        } else if (v && (c = v.getElementById(o)) && y(t, c) && c.id === o) return n.push(c), n
                    } else {
                        if (h[2]) return A.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = h[3]) && i.getElementsByClassName && t.getElementsByClassName) return A.apply(n, t.getElementsByClassName(o)), n
                    } if (i.qsa && !k[e + " "] && (!g || !g.test(e))) {
                        if (1 !== x) v = t, _ = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((u = t.getAttribute("id")) ? u = u.replace(te, ie) : t.setAttribute("id", u = w), a = (p = s(e)).length; a--;) p[a] = "#" + u + " " + _e(p[a]);
                            _ = p.join(","), v = Z.test(e) && me(t.parentNode) || t
                        }
                        if (_) try {
                            return A.apply(n, v.querySelectorAll(_)), n
                        } catch (e) { } finally {
                                u === w && t.removeAttribute("id")
                            }
                    }
            }
            return l(e.replace(H, "$1"), t, n, r)
        }

        function se() {
            var e = [];
            return function t(i, r) {
                return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = r
            }
        }

        function ae(e) {
            return e[w] = !0, e
        }

        function le(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ce(e, t) {
            for (var i = e.split("|"), r = i.length; r--;) n.attrHandle[i[r]] = t
        }

        function ue(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function he(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function fe(e) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function de(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function pe(e) {
            return ae(function (t) {
                return t = +t, ae(function (i, n) {
                    for (var r, o = e([], i.length, t), s = o.length; s--;) i[r = o[s]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }

        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in i = oe.support = {}, o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, f = oe.setDocument = function (e) {
            var t, r, s = e ? e.ownerDocument || e : b;
            return s !== d && 9 === s.nodeType && s.documentElement ? (p = (d = s).documentElement, m = !o(d), b !== d && (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ne, !1) : r.attachEvent && r.attachEvent("onunload", ne)), i.attributes = le(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), i.getElementsByTagName = le(function (e) {
                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
            }), i.getElementsByClassName = Q.test(d.getElementsByClassName), i.getById = le(function (e) {
                return p.appendChild(e).id = w, !d.getElementsByName || !d.getElementsByName(w).length
            }), i.getById ? (n.filter.ID = function (e) {
                var t = e.replace(J, ee);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, n.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && m) {
                    var i = t.getElementById(e);
                    return i ? [i] : []
                }
            }) : (n.filter.ID = function (e) {
                var t = e.replace(J, ee);
                return function (e) {
                    var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }, n.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && m) {
                    var i, n, r, o = t.getElementById(e);
                    if (o) {
                        if ((i = o.getAttributeNode("id")) && i.value === e) return [o];
                        for (r = t.getElementsByName(e), n = 0; o = r[n++];)
                            if ((i = o.getAttributeNode("id")) && i.value === e) return [o]
                    }
                    return []
                }
            }), n.find.TAG = i.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var i, n = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = o[r++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return o
            }, n.find.CLASS = i.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
            }, _ = [], g = [], (i.qsa = Q.test(d.querySelectorAll)) && (le(function (e) {
                p.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + j + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + j + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]")
            }), le(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + j + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
            })), (i.matchesSelector = Q.test(v = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function (e) {
                i.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), _.push("!=", N)
            }), g = g.length && new RegExp(g.join("|")), _ = _.length && new RegExp(_.join("|")), t = Q.test(p.compareDocumentPosition), y = t || Q.test(p.contains) ? function (e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e,
                    n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, P = t ? function (e, t) {
                if (e === t) return h = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === d || e.ownerDocument === b && y(b, e) ? -1 : t === d || t.ownerDocument === b && y(b, t) ? 1 : u ? L(u, e) - L(u, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return h = !0, 0;
                var i, n = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    a = [t];
                if (!r || !o) return e === d ? -1 : t === d ? 1 : r ? -1 : o ? 1 : u ? L(u, e) - L(u, t) : 0;
                if (r === o) return ue(e, t);
                for (i = e; i = i.parentNode;) s.unshift(i);
                for (i = t; i = i.parentNode;) a.unshift(i);
                for (; s[n] === a[n];) n++;
                return n ? ue(s[n], a[n]) : s[n] === b ? -1 : a[n] === b ? 1 : 0
            }, d) : d
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== d && f(e), t = t.replace(W, "='$1']"), i.matchesSelector && m && !k[t + " "] && (!_ || !_.test(t)) && (!g || !g.test(t))) try {
                var n = v.call(e, t);
                if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) { }
            return oe(t, d, null, [e]).length > 0
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && f(e), y(e, t)
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== d && f(e);
            var r = n.attrHandle[t.toLowerCase()],
                o = r && O.call(n.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
            return void 0 !== o ? o : i.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function (e) {
            return (e + "").replace(te, ie)
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function (e) {
            var t, n = [],
                r = 0,
                o = 0;
            if (h = !i.detectDuplicates, u = !i.sortStable && e.slice(0), e.sort(P), h) {
                for (; t = e[o++];) t === e[o] && (r = n.push(o));
                for (; r--;) e.splice(n[r], 1)
            }
            return u = null, e
        }, r = oe.getText = function (e) {
            var t, i = "",
                n = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += r(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[n++];) i += r(t);
            return i
        }, (n = oe.selectors = {
            cacheLength: 50,
            createPseudo: ae,
            match: U,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(J, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, i = !e[6] && e[2];
                    return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && X.test(i) && (t = s(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(J, ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = C[e + " "];
                    return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && C(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, i) {
                    return function (n) {
                        var r = oe.attr(n, e);
                        return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === i : "!=" === t ? r !== i : "^=" === t ? i && 0 === r.indexOf(i) : "*=" === t ? i && r.indexOf(i) > -1 : "$=" === t ? i && r.slice(-i.length) === i : "~=" === t ? (" " + r.replace(z, " ") + " ").indexOf(i) > -1 : "|=" === t && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function (e, t, i, n, r) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === n && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, i, l) {
                        var c, u, h, f, d, p, m = o !== s ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            _ = a && t.nodeName.toLowerCase(),
                            v = !l && !a,
                            y = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (f = t; f = f[m];)
                                        if (a ? f.nodeName.toLowerCase() === _ : 1 === f.nodeType) return !1;
                                    p = m = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? g.firstChild : g.lastChild], s && v) {
                                for (y = (d = (c = (u = (h = (f = g)[w] || (f[w] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2], f = d && g.childNodes[d]; f = ++d && f && f[m] || (y = d = 0) || p.pop();)
                                    if (1 === f.nodeType && ++y && f === t) {
                                        u[e] = [x, d, y];
                                        break
                                    }
                            } else if (v && (y = d = (c = (u = (h = (f = t)[w] || (f[w] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[e] || [])[0] === x && c[1]), !1 === y)
                                for (;
                                    (f = ++d && f && f[m] || (y = d = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== _ : 1 !== f.nodeType) || !++y || (v && ((u = (h = f[w] || (f[w] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[e] = [x, y]), f !== t)););
                            return (y -= r) === n || y % n == 0 && y / n >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var i, r = n.pseudos[e] || n.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return r[w] ? r(t) : r.length > 1 ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, i) {
                        for (var n, o = r(e, t), s = o.length; s--;) e[n = L(e, o[s])] = !(i[n] = o[s])
                    }) : function (e) {
                        return r(e, 0, i)
                    }) : r
                }
            },
            pseudos: {
                not: ae(function (e) {
                    var t = [],
                        i = [],
                        n = a(e.replace(H, "$1"));
                    return n[w] ? ae(function (e, t, i, r) {
                        for (var o, s = n(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, n(t, null, o, i), t[0] = null, !i.pop()
                    }
                }),
                has: ae(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0
                    }
                }),
                contains: ae(function (e) {
                    return e = e.replace(J, ee),
                        function (t) {
                            return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                        }
                }),
                lang: ae(function (e) {
                    return Y.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(J, ee).toLowerCase(),
                        function (t) {
                            var i;
                            do {
                                if (i = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function (e) {
                    return e === p
                },
                focus: function (e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !n.pseudos.empty(e)
                },
                header: function (e) {
                    return G.test(e.nodeName)
                },
                input: function (e) {
                    return V.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: pe(function () {
                    return [0]
                }),
                last: pe(function (e, t) {
                    return [t - 1]
                }),
                eq: pe(function (e, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: pe(function (e, t) {
                    for (var i = 0; i < t; i += 2) e.push(i);
                    return e
                }),
                odd: pe(function (e, t) {
                    for (var i = 1; i < t; i += 2) e.push(i);
                    return e
                }),
                lt: pe(function (e, t, i) {
                    for (var n = i < 0 ? i + t : i; --n >= 0;) e.push(n);
                    return e
                }),
                gt: pe(function (e, t, i) {
                    for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                    return e
                })
            }
        }).pseudos.nth = n.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) n.pseudos[t] = he(t);
        for (t in {
            submit: !0,
            reset: !0
        }) n.pseudos[t] = fe(t);

        function ge() { }

        function _e(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n
        }

        function ve(e, t, i) {
            var n = t.dir,
                r = t.next,
                o = r || n,
                s = i && "parentNode" === o,
                a = T++;
            return t.first ? function (t, i, r) {
                for (; t = t[n];)
                    if (1 === t.nodeType || s) return e(t, i, r);
                return !1
            } : function (t, i, l) {
                var c, u, h, f = [x, a];
                if (l) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || s) && e(t, i, l)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || s)
                            if (u = (h = t[w] || (t[w] = {}))[t.uniqueID] || (h[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[n] || t;
                            else {
                                if ((c = u[o]) && c[0] === x && c[1] === a) return f[2] = c[2];
                                if (u[o] = f, f[2] = e(t, i, l)) return !0
                            } return !1
            }
        }

        function ye(e) {
            return e.length > 1 ? function (t, i, n) {
                for (var r = e.length; r--;)
                    if (!e[r](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function we(e, t, i, n, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (i && !i(o, n, r) || (s.push(o), c && t.push(a)));
            return s
        }

        function be(e, t, i, n, r, o) {
            return n && !n[w] && (n = be(n)), r && !r[w] && (r = be(r, o)), ae(function (o, s, a, l) {
                var c, u, h, f = [],
                    d = [],
                    p = s.length,
                    m = o || function (e, t, i) {
                        for (var n = 0, r = t.length; n < r; n++) oe(e, t[n], i);
                        return i
                    }(t || "*", a.nodeType ? [a] : a, []),
                    g = !e || !o && t ? m : we(m, f, e, a, l),
                    _ = i ? r || (o ? e : p || n) ? [] : s : g;
                if (i && i(g, _, a, l), n)
                    for (c = we(_, d), n(c, [], a, l), u = c.length; u--;)(h = c[u]) && (_[d[u]] = !(g[d[u]] = h));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = _.length; u--;)(h = _[u]) && c.push(g[u] = h);
                            r(null, _ = [], c, l)
                        }
                        for (u = _.length; u--;)(h = _[u]) && (c = r ? L(o, h) : f[u]) > -1 && (o[c] = !(s[c] = h))
                    }
                } else _ = we(_ === s ? _.splice(p, _.length) : _), r ? r(null, s, _, l) : A.apply(s, _)
            })
        }

        function xe(e) {
            for (var t, i, r, o = e.length, s = n.relative[e[0].type], a = s || n.relative[" "], l = s ? 1 : 0, u = ve(function (e) {
                return e === t
            }, a, !0), h = ve(function (e) {
                return L(t, e) > -1
            }, a, !0), f = [function (e, i, n) {
                var r = !s && (n || i !== c) || ((t = i).nodeType ? u(e, i, n) : h(e, i, n));
                return t = null, r
            }]; l < o; l++)
                if (i = n.relative[e[l].type]) f = [ve(ye(f), i)];
                else {
                    if ((i = n.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (r = ++l; r < o && !n.relative[e[r].type]; r++);
                        return be(l > 1 && ye(f), l > 1 && _e(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(H, "$1"), i, l < r && xe(e.slice(l, r)), r < o && xe(e = e.slice(r)), r < o && _e(e))
                    }
                    f.push(i)
                } return ye(f)
        }

        function Te(e, t) {
            var i = t.length > 0,
                r = e.length > 0,
                o = function (o, s, a, l, u) {
                    var h, p, g, _ = 0,
                        v = "0",
                        y = o && [],
                        w = [],
                        b = c,
                        T = o || r && n.find.TAG("*", u),
                        C = x += null == b ? 1 : Math.random() || .1,
                        S = T.length;
                    for (u && (c = s === d || s || u); v !== S && null != (h = T[v]); v++) {
                        if (r && h) {
                            for (p = 0, s || h.ownerDocument === d || (f(h), a = !m); g = e[p++];)
                                if (g(h, s || d, a)) {
                                    l.push(h);
                                    break
                                } u && (x = C)
                        }
                        i && ((h = !g && h) && _--, o && y.push(h))
                    }
                    if (_ += v, i && v !== _) {
                        for (p = 0; g = t[p++];) g(y, w, s, a);
                        if (o) {
                            if (_ > 0)
                                for (; v--;) y[v] || w[v] || (w[v] = M.call(l));
                            w = we(w)
                        }
                        A.apply(l, w), u && !o && w.length > 0 && _ + t.length > 1 && oe.uniqueSort(l)
                    }
                    return u && (x = C, c = b), y
                };
            return i ? ae(o) : o
        }
        return ge.prototype = n.filters = n.pseudos, n.setFilters = new ge, s = oe.tokenize = function (e, t) {
            var i, r, o, s, a, l, c, u = S[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, l = [], c = n.preFilter; a;) {
                for (s in i && !(r = B.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = q.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(H, " ")
                }), a = a.slice(i.length)), n.filter) !(r = U[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return t ? a.length : a ? oe.error(e) : S(e, l).slice(0)
        }, a = oe.compile = function (e, t) {
            var i, n = [],
                r = [],
                o = k[e + " "];
            if (!o) {
                for (t || (t = s(e)), i = t.length; i--;)(o = xe(t[i]))[w] ? n.push(o) : r.push(o);
                (o = k(e, Te(r, n))).selector = e
            }
            return o
        }, l = oe.select = function (e, t, i, r) {
            var o, l, c, u, h, f = "function" == typeof e && e,
                d = !r && s(e = f.selector || e);
            if (i = i || [], 1 === d.length) {
                if ((l = d[0] = d[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && n.relative[l[1].type]) {
                    if (!(t = (n.find.ID(c.matches[0].replace(J, ee), t) || [])[0])) return i;
                    f && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (o = U.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !n.relative[u = c.type]);)
                    if ((h = n.find[u]) && (r = h(c.matches[0].replace(J, ee), Z.test(l[0].type) && me(t.parentNode) || t))) {
                        if (l.splice(o, 1), !(e = r.length && _e(l))) return A.apply(i, r), i;
                        break
                    }
            }
            return (f || a(e, d))(r, t, !m, i, !t || Z.test(e) && me(t.parentNode) || t), i
        }, i.sortStable = w.split("").sort(P).join("") === w, i.detectDuplicates = !!h, f(), i.sortDetached = le(function (e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }), le(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function (e, t, i) {
            if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), i.attributes && le(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ce("value", function (e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function (e) {
            return null == e.getAttribute("disabled")
        }) || ce(R, function (e, t, i) {
            var n;
            if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), oe
    }(e);
    _.find = T, _.expr = T.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = T.uniqueSort, _.text = T.getText, _.isXMLDoc = T.isXML, _.contains = T.contains, _.escapeSelector = T.escape;
    var C = function (e, t, i) {
        for (var n = [], r = void 0 !== i;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (r && _(e).is(i)) break;
                n.push(e)
            } return n
    },
        S = function (e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        },
        k = _.expr.match.needsContext;

    function P(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        E = /^.[^:#\[\.,]*$/;

    function M(e, t, i) {
        return _.isFunction(t) ? _.grep(e, function (e, n) {
            return !!t.call(e, n, e) !== i
        }) : t.nodeType ? _.grep(e, function (e) {
            return e === t !== i
        }) : "string" != typeof t ? _.grep(e, function (e) {
            return l.call(t, e) > -1 !== i
        }) : E.test(t) ? _.filter(t, e, i) : (t = _.filter(t, e), _.grep(e, function (e) {
            return l.call(t, e) > -1 !== i && 1 === e.nodeType
        }))
    }
    _.filter = function (e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? _.find.matchesSelector(n, e) ? [n] : [] : _.find.matches(e, _.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, _.fn.extend({
        find: function (e) {
            var t, i, n = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(_(e).filter(function () {
                for (t = 0; t < n; t++)
                    if (_.contains(r[t], this)) return !0
            }));
            for (i = this.pushStack([]), t = 0; t < n; t++) _.find(e, r[t], i);
            return n > 1 ? _.uniqueSort(i) : i
        },
        filter: function (e) {
            return this.pushStack(M(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(M(this, e || [], !0))
        },
        is: function (e) {
            return !!M(this, "string" == typeof e && k.test(e) ? _(e) : e || [], !1).length
        }
    });
    var $, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_.fn.init = function (e, t, i) {
        var r, o;
        if (!e) return this;
        if (i = i || $, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : A.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof _ ? t[0] : t, _.merge(this, _.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : n, !0)), O.test(r[1]) && _.isPlainObject(t))
                    for (r in t) _.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = n.getElementById(r[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : _.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(_) : _.makeArray(e, this)
    }).prototype = _.fn, $ = _(n);
    var D = /^(?:parents|prev(?:Until|All))/,
        L = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function R(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    _.fn.extend({
        has: function (e) {
            var t = _(e, this),
                i = t.length;
            return this.filter(function () {
                for (var e = 0; e < i; e++)
                    if (_.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var i, n = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && _(e);
            if (!k.test(e))
                for (; n < r; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && _.find.matchesSelector(i, e))) {
                            o.push(i);
                            break
                        } return this.pushStack(o.length > 1 ? _.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? l.call(_(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), _.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return C(e, "parentNode")
        },
        parentsUntil: function (e, t, i) {
            return C(e, "parentNode", i)
        },
        next: function (e) {
            return R(e, "nextSibling")
        },
        prev: function (e) {
            return R(e, "previousSibling")
        },
        nextAll: function (e) {
            return C(e, "nextSibling")
        },
        prevAll: function (e) {
            return C(e, "previousSibling")
        },
        nextUntil: function (e, t, i) {
            return C(e, "nextSibling", i)
        },
        prevUntil: function (e, t, i) {
            return C(e, "previousSibling", i)
        },
        siblings: function (e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return S(e.firstChild)
        },
        contents: function (e) {
            return P(e, "iframe") ? e.contentDocument : (P(e, "template") && (e = e.content || e), _.merge([], e.childNodes))
        }
    }, function (e, t) {
        _.fn[e] = function (i, n) {
            var r = _.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (r = _.filter(n, r)), this.length > 1 && (L[e] || _.uniqueSort(r), D.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var j = /[^\x20\t\r\n\f]+/g;

    function I(e) {
        return e
    }

    function F(e) {
        throw e
    }

    function N(e, t, i, n) {
        var r;
        try {
            e && _.isFunction(r = e.promise) ? r.call(e).done(t).fail(i) : e && _.isFunction(r = e.then) ? r.call(e, t, i) : t.apply(void 0, [e].slice(n))
        } catch (e) {
            i.apply(void 0, [e])
        }
    }
    _.Callbacks = function (e) {
        e = "string" == typeof e ? function (e) {
            var t = {};
            return _.each(e.match(j) || [], function (e, i) {
                t[i] = !0
            }), t
        }(e) : _.extend({}, e);
        var t, i, n, r, o = [],
            s = [],
            a = -1,
            l = function () {
                for (r = r || e.once, n = t = !0; s.length; a = -1)
                    for (i = s.shift(); ++a < o.length;) !1 === o[a].apply(i[0], i[1]) && e.stopOnFalse && (a = o.length, i = !1);
                e.memory || (i = !1), t = !1, r && (o = i ? [] : "")
            },
            c = {
                add: function () {
                    return o && (i && !t && (a = o.length - 1, s.push(i)), function t(i) {
                        _.each(i, function (i, n) {
                            _.isFunction(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== _.type(n) && t(n)
                        })
                    }(arguments), i && !t && l()), this
                },
                remove: function () {
                    return _.each(arguments, function (e, t) {
                        for (var i;
                            (i = _.inArray(t, o, i)) > -1;) o.splice(i, 1), i <= a && a--
                    }), this
                },
                has: function (e) {
                    return e ? _.inArray(e, o) > -1 : o.length > 0
                },
                empty: function () {
                    return o && (o = []), this
                },
                disable: function () {
                    return r = s = [], o = i = "", this
                },
                disabled: function () {
                    return !o
                },
                lock: function () {
                    return r = s = [], i || t || (o = i = ""), this
                },
                locked: function () {
                    return !!r
                },
                fireWith: function (e, i) {
                    return r || (i = [e, (i = i || []).slice ? i.slice() : i], s.push(i), t || l()), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!n
                }
            };
        return c
    }, _.extend({
        Deferred: function (t) {
            var i = [
                ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
                ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
                ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]
            ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function (e) {
                        return r.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return _.Deferred(function (t) {
                            _.each(i, function (i, n) {
                                var r = _.isFunction(e[n[4]]) && e[n[4]];
                                o[n[1]](function () {
                                    var e = r && r.apply(this, arguments);
                                    e && _.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function (t, n, r) {
                        var o = 0;

                        function s(t, i, n, r) {
                            return function () {
                                var a = this,
                                    l = arguments,
                                    c = function () {
                                        var e, c;
                                        if (!(t < o)) {
                                            if ((e = n.apply(a, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then, _.isFunction(c) ? r ? c.call(e, s(o, i, I, r), s(o, i, F, r)) : (o++, c.call(e, s(o, i, I, r), s(o, i, F, r), s(o, i, I, i.notifyWith))) : (n !== I && (a = void 0, l = [e]), (r || i.resolveWith)(a, l))
                                        }
                                    },
                                    u = r ? c : function () {
                                        try {
                                            c()
                                        } catch (e) {
                                            _.Deferred.exceptionHook && _.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= o && (n !== F && (a = void 0, l = [e]), i.rejectWith(a, l))
                                        }
                                    };
                                t ? u() : (_.Deferred.getStackHook && (u.stackTrace = _.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }
                        return _.Deferred(function (e) {
                            i[0][3].add(s(0, e, _.isFunction(r) ? r : I, e.notifyWith)), i[1][3].add(s(0, e, _.isFunction(t) ? t : I)), i[2][3].add(s(0, e, _.isFunction(n) ? n : F))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? _.extend(e, r) : r
                    }
                },
                o = {};
            return _.each(i, function (e, t) {
                var s = t[2],
                    a = t[5];
                r[t[1]] = s.add, a && s.add(function () {
                    n = a
                }, i[3 - e][2].disable, i[0][2].lock), s.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = s.fireWith
            }), r.promise(o), t && t.call(o, o), o
        },
        when: function (e) {
            var t = arguments.length,
                i = t,
                n = Array(i),
                r = o.call(arguments),
                s = _.Deferred(),
                a = function (e) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : i, --t || s.resolveWith(n, r)
                    }
                };
            if (t <= 1 && (N(e, s.done(a(i)).resolve, s.reject, !t), "pending" === s.state() || _.isFunction(r[i] && r[i].then))) return s.then();
            for (; i--;) N(r[i], a(i), s.reject);
            return s.promise()
        }
    });
    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _.Deferred.exceptionHook = function (t, i) {
        e.console && e.console.warn && t && z.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    }, _.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var H = _.Deferred();

    function B() {
        n.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), _.ready()
    }
    _.fn.ready = function (e) {
        return H.then(e).catch(function (e) {
            _.readyException(e)
        }), this
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0, !0 !== e && --_.readyWait > 0 || H.resolveWith(n, [_]))
        }
    }), _.ready.then = H.then, "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? e.setTimeout(_.ready) : (n.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));
    var q = function (e, t, i, n, r, o, s) {
        var a = 0,
            l = e.length,
            c = null == i;
        if ("object" === _.type(i))
            for (a in r = !0, i) q(e, t, a, i[a], !0, o, s);
        else if (void 0 !== n && (r = !0, _.isFunction(n) || (s = !0), c && (s ? (t.call(e, n), t = null) : (c = t, t = function (e, t, i) {
            return c.call(_(e), i)
        })), t))
            for (; a < l; a++) t(e[a], i, s ? n : n.call(e[a], a, t(e[a], i)));
        return r ? e : c ? t.call(e) : l ? t(e[0], i) : o
    },
        W = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

    function X() {
        this.expando = _.expando + X.uid++
    }
    X.uid = 1, X.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, W(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, i) {
            var n, r = this.cache(e);
            if ("string" == typeof t) r[_.camelCase(t)] = i;
            else
                for (n in t) r[_.camelCase(n)] = t[n];
            return r
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][_.camelCase(t)]
        },
        access: function (e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
        },
        remove: function (e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(_.camelCase) : t = (t = _.camelCase(t)) in n ? [t] : t.match(j) || [], i = t.length;
                    for (; i--;) delete n[t[i]]
                } (void 0 === t || _.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !_.isEmptyObject(t)
        }
    };
    var Y = new X,
        U = new X,
        V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        G = /[A-Z]/g;

    function Q(e, t, i) {
        var n;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(G, "-$&").toLowerCase(), "string" == typeof (i = e.getAttribute(n))) {
                try {
                    i = function (e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : V.test(e) ? JSON.parse(e) : e)
                    }(i)
                } catch (e) { }
                U.set(e, t, i)
            } else i = void 0;
        return i
    }
    _.extend({
        hasData: function (e) {
            return U.hasData(e) || Y.hasData(e)
        },
        data: function (e, t, i) {
            return U.access(e, t, i)
        },
        removeData: function (e, t) {
            U.remove(e, t)
        },
        _data: function (e, t, i) {
            return Y.access(e, t, i)
        },
        _removeData: function (e, t) {
            Y.remove(e, t)
        }
    }), _.fn.extend({
        data: function (e, t) {
            var i, n, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = U.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    for (i = s.length; i--;) s[i] && (0 === (n = s[i].name).indexOf("data-") && (n = _.camelCase(n.slice(5)), Q(o, n, r[n])));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                U.set(this, e)
            }) : q(this, function (t) {
                var i;
                if (o && void 0 === t) {
                    if (void 0 !== (i = U.get(o, e))) return i;
                    if (void 0 !== (i = Q(o, e))) return i
                } else this.each(function () {
                    U.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                U.remove(this, e)
            })
        }
    }), _.extend({
        queue: function (e, t, i) {
            var n;
            if (e) return t = (t || "fx") + "queue", n = Y.get(e, t), i && (!n || Array.isArray(i) ? n = Y.access(e, t, _.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var i = _.queue(e, t),
                n = i.length,
                r = i.shift(),
                o = _._queueHooks(e, t);
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === t && i.unshift("inprogress"), delete o.stop, r.call(e, function () {
                _.dequeue(e, t)
            }, o)), !n && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var i = t + "queueHooks";
            return Y.get(e, i) || Y.access(e, i, {
                empty: _.Callbacks("once memory").add(function () {
                    Y.remove(e, [t + "queue", i])
                })
            })
        }
    }), _.fn.extend({
        queue: function (e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? _.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var i = _.queue(this, e, t);
                _._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && _.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                _.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var i, n = 1,
                r = _.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                    --n || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(i = Y.get(o[s], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var K = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Z = new RegExp("^(?:([+-])=|)(" + K + ")([a-z%]*)$", "i"),
        J = ["Top", "Right", "Bottom", "Left"],
        ee = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && _.contains(e.ownerDocument, e) && "none" === _.css(e, "display")
        },
        te = function (e, t, i, n) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            for (o in r = i.apply(e, n || []), t) e.style[o] = s[o];
            return r
        };

    function ie(e, t, i, n) {
        var r, o = 1,
            s = 20,
            a = n ? function () {
                return n.cur()
            } : function () {
                return _.css(e, t, "")
            },
            l = a(),
            c = i && i[3] || (_.cssNumber[t] ? "" : "px"),
            u = (_.cssNumber[t] || "px" !== c && +l) && Z.exec(_.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], i = i || [], u = +l || 1;
            do {
                u /= o = o || ".5", _.style(e, t, u + c)
            } while (o !== (o = a() / l) && 1 !== o && --s)
        }
        return i && (u = +u || +l || 0, r = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = r)), r
    }
    var ne = {};

    function re(e) {
        var t, i = e.ownerDocument,
            n = e.nodeName,
            r = ne[n];
        return r || (t = i.body.appendChild(i.createElement(n)), r = _.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), ne[n] = r, r)
    }

    function oe(e, t) {
        for (var i, n, r = [], o = 0, s = e.length; o < s; o++)(n = e[o]).style && (i = n.style.display, t ? ("none" === i && (r[o] = Y.get(n, "display") || null, r[o] || (n.style.display = "")), "" === n.style.display && ee(n) && (r[o] = re(n))) : "none" !== i && (r[o] = "none", Y.set(n, "display", i)));
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }
    _.fn.extend({
        show: function () {
            return oe(this, !0)
        },
        hide: function () {
            return oe(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ee(this) ? _(this).show() : _(this).hide()
            })
        }
    });
    var se = /^(?:checkbox|radio)$/i,
        ae = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        le = /^$|\/(?:java|ecma)script/i,
        ce = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ue(e, t) {
        var i;
        return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && P(e, t) ? _.merge([e], i) : i
    }

    function he(e, t) {
        for (var i = 0, n = e.length; i < n; i++) Y.set(e[i], "globalEval", !t || Y.get(t[i], "globalEval"))
    }
    ce.optgroup = ce.option, ce.tbody = ce.tfoot = ce.colgroup = ce.caption = ce.thead, ce.th = ce.td;
    var fe = /<|&#?\w+;/;

    function de(e, t, i, n, r) {
        for (var o, s, a, l, c, u, h = t.createDocumentFragment(), f = [], d = 0, p = e.length; d < p; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === _.type(o)) _.merge(f, o.nodeType ? [o] : o);
                else if (fe.test(o)) {
                    for (s = s || h.appendChild(t.createElement("div")), a = (ae.exec(o) || ["", ""])[1].toLowerCase(), l = ce[a] || ce._default, s.innerHTML = l[1] + _.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
                    _.merge(f, s.childNodes), (s = h.firstChild).textContent = ""
                } else f.push(t.createTextNode(o));
        for (h.textContent = "", d = 0; o = f[d++];)
            if (n && _.inArray(o, n) > -1) r && r.push(o);
            else if (c = _.contains(o.ownerDocument, o), s = ue(h.appendChild(o), "script"), c && he(s), i)
                for (u = 0; o = s[u++];) le.test(o.type || "") && i.push(o);
        return h
    } ! function () {
        var e = n.createDocumentFragment().appendChild(n.createElement("div")),
            t = n.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), p.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var pe = n.documentElement,
        me = /^key/,
        ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        _e = /^([^.]*)(?:\.(.+)|)/;

    function ve() {
        return !0
    }

    function ye() {
        return !1
    }

    function we() {
        try {
            return n.activeElement
        } catch (e) { }
    }

    function be(e, t, i, n, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), t) be(e, a, i, n, t[a], o);
            return e
        }
        if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = ye;
        else if (!r) return e;
        return 1 === o && (s = r, (r = function (e) {
            return _().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = _.guid++)), e.each(function () {
            _.event.add(this, t, r, n, i)
        })
    }
    _.event = {
        global: {},
        add: function (e, t, i, n, r) {
            var o, s, a, l, c, u, h, f, d, p, m, g = Y.get(e);
            if (g)
                for (i.handler && (i = (o = i).handler, r = o.selector), r && _.find.matchesSelector(pe, r), i.guid || (i.guid = _.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
                    return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0
                }), c = (t = (t || "").match(j) || [""]).length; c--;) d = m = (a = _e.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), d && (h = _.event.special[d] || {}, d = (r ? h.delegateType : h.bindType) || d, h = _.event.special[d] || {}, u = _.extend({
                    type: d,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && _.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (f = l[d]) || ((f = l[d] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(e, n, p, s) || e.addEventListener && e.addEventListener(d, s)), h.add && (h.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), _.event.global[d] = !0)
        },
        remove: function (e, t, i, n, r) {
            var o, s, a, l, c, u, h, f, d, p, m, g = Y.hasData(e) && Y.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(j) || [""]).length; c--;)
                    if (d = m = (a = _e.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), d) {
                        for (h = _.event.special[d] || {}, f = l[d = (n ? h.delegateType : h.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) u = f[o], !r && m !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, h.remove && h.remove.call(e, u));
                        s && !f.length && (h.teardown && !1 !== h.teardown.call(e, p, g.handle) || _.removeEvent(e, d, g.handle), delete l[d])
                    } else
                        for (d in l) _.event.remove(e, d + t[c], i, n, !0);
                _.isEmptyObject(l) && Y.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, i, n, r, o, s, a = _.event.fix(e),
                l = new Array(arguments.length),
                c = (Y.get(this, "events") || {})[a.type] || [],
                u = _.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = _.event.handlers.call(this, a, c), t = 0;
                    (r = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, i = 0;
                        (o = r.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (n = ((_.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (e, t) {
            var i, n, r, o, s, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], s = {}, i = 0; i < l; i++) void 0 === s[r = (n = t[i]).selector + " "] && (s[r] = n.needsContext ? _(r, this).index(c) > -1 : _.find(r, this, null, [c]).length), s[r] && o.push(n);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    } return c = this, l < t.length && a.push({
                        elem: c,
                        handlers: t.slice(l)
                    }), a
        },
        addProp: function (e, t) {
            Object.defineProperty(_.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: _.isFunction(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[_.expando] ? e : new _.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== we() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === we() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && P(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return P(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, _.removeEvent = function (e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }, _.Event = function (e, t) {
        return this instanceof _.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ve : ye, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || _.now(), void (this[_.expando] = !0)) : new _.Event(e, t)
    }, _.Event.prototype = {
        constructor: _.Event,
        isDefaultPrevented: ye,
        isPropagationStopped: ye,
        isImmediatePropagationStopped: ye,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = ve, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = ve, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ve, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && me.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ge.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, _.event.addProp), _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        _.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var i, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || _.contains(this, n)) || (e.type = r.origType, i = r.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), _.fn.extend({
        on: function (e, t, i, n) {
            return be(this, e, t, i, n)
        },
        one: function (e, t, i, n) {
            return be(this, e, t, i, n, 1)
        },
        off: function (e, t, i) {
            var n, r;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, _(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = ye), this.each(function () {
                _.event.remove(this, e, i, t)
            })
        }
    });
    var xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Te = /<script|<style|<link/i,
        Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Se = /^true\/(.*)/,
        ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Pe(e, t) {
        return P(e, "table") && P(11 !== t.nodeType ? t : t.firstChild, "tr") && _(">tbody", e)[0] || e
    }

    function Oe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Ee(e) {
        var t = Se.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Me(e, t) {
        var i, n, r, o, s, a, l, c;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (o = Y.access(e), s = Y.set(t, o), c = o.events))
                for (r in delete s.handle, s.events = {}, c)
                    for (i = 0, n = c[r].length; i < n; i++) _.event.add(t, r, c[r][i]);
            U.hasData(e) && (a = U.access(e), l = _.extend({}, a), U.set(t, l))
        }
    }

    function $e(e, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && se.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
    }

    function Ae(e, t, i, n) {
        t = s.apply([], t);
        var r, o, a, l, c, u, h = 0,
            f = e.length,
            d = f - 1,
            g = t[0],
            v = _.isFunction(g);
        if (v || f > 1 && "string" == typeof g && !p.checkClone && Ce.test(g)) return e.each(function (r) {
            var o = e.eq(r);
            v && (t[0] = g.call(this, r, o.html())), Ae(o, t, i, n)
        });
        if (f && (o = (r = de(t, e[0].ownerDocument, !1, e, n)).firstChild, 1 === r.childNodes.length && (r = o), o || n)) {
            for (l = (a = _.map(ue(r, "script"), Oe)).length; h < f; h++) c = r, h !== d && (c = _.clone(c, !0, !0), l && _.merge(a, ue(c, "script"))), i.call(e[h], c, h);
            if (l)
                for (u = a[a.length - 1].ownerDocument, _.map(a, Ee), h = 0; h < l; h++) c = a[h], le.test(c.type || "") && !Y.access(c, "globalEval") && _.contains(u, c) && (c.src ? _._evalUrl && _._evalUrl(c.src) : m(c.textContent.replace(ke, ""), u))
        }
        return e
    }

    function De(e, t, i) {
        for (var n, r = t ? _.filter(t, e) : e, o = 0; null != (n = r[o]); o++) i || 1 !== n.nodeType || _.cleanData(ue(n)), n.parentNode && (i && _.contains(n.ownerDocument, n) && he(ue(n, "script")), n.parentNode.removeChild(n));
        return e
    }
    _.extend({
        htmlPrefilter: function (e) {
            return e.replace(xe, "<$1></$2>")
        },
        clone: function (e, t, i) {
            var n, r, o, s, a = e.cloneNode(!0),
                l = _.contains(e.ownerDocument, e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e)))
                for (s = ue(a), n = 0, r = (o = ue(e)).length; n < r; n++) $e(o[n], s[n]);
            if (t)
                if (i)
                    for (o = o || ue(e), s = s || ue(a), n = 0, r = o.length; n < r; n++) Me(o[n], s[n]);
                else Me(e, a);
            return (s = ue(a, "script")).length > 0 && he(s, !l && ue(e, "script")), a
        },
        cleanData: function (e) {
            for (var t, i, n, r = _.event.special, o = 0; void 0 !== (i = e[o]); o++)
                if (W(i)) {
                    if (t = i[Y.expando]) {
                        if (t.events)
                            for (n in t.events) r[n] ? _.event.remove(i, n) : _.removeEvent(i, n, t.handle);
                        i[Y.expando] = void 0
                    }
                    i[U.expando] && (i[U.expando] = void 0)
                }
        }
    }), _.fn.extend({
        detach: function (e) {
            return De(this, e, !0)
        },
        remove: function (e) {
            return De(this, e)
        },
        text: function (e) {
            return q(this, function (e) {
                return void 0 === e ? _.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return Ae(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return Ae(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Pe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return Ae(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return Ae(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(ue(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return _.clone(this, e, t)
            })
        },
        html: function (e) {
            return q(this, function (e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Te.test(e) && !ce[(ae.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = _.htmlPrefilter(e);
                    try {
                        for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (_.cleanData(ue(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) { }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return Ae(this, arguments, function (t) {
                var i = this.parentNode;
                _.inArray(this, e) < 0 && (_.cleanData(ue(this)), i && i.replaceChild(t, this))
            }, e)
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        _.fn[e] = function (e) {
            for (var i, n = [], r = _(e), o = r.length - 1, s = 0; s <= o; s++) i = s === o ? this : this.clone(!0), _(r[s])[t](i), a.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var Le = /^margin/,
        Re = new RegExp("^(" + K + ")(?!px)[a-z%]+$", "i"),
        je = function (t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = e), i.getComputedStyle(t)
        };

    function Ie(e, t, i) {
        var n, r, o, s, a = e.style;
        return (i = i || je(e)) && ("" !== (s = i.getPropertyValue(t) || i[t]) || _.contains(e.ownerDocument, e) || (s = _.style(e, t)), !p.pixelMarginRight() && Re.test(s) && Le.test(t) && (n = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function Fe(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    } ! function () {
        function t() {
            if (l) {
                l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", l.innerHTML = "", pe.appendChild(a);
                var t = e.getComputedStyle(l);
                i = "1%" !== t.top, s = "2px" === t.marginLeft, r = "4px" === t.width, l.style.marginRight = "50%", o = "4px" === t.marginRight, pe.removeChild(a), l = null
            }
        }
        var i, r, o, s, a = n.createElement("div"),
            l = n.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === l.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(l), _.extend(p, {
            pixelPosition: function () {
                return t(), i
            },
            boxSizingReliable: function () {
                return t(), r
            },
            pixelMarginRight: function () {
                return t(), o
            },
            reliableMarginLeft: function () {
                return t(), s
            }
        }))
    }();
    var Ne = /^(none|table(?!-c[ea]).+)/,
        ze = /^--/,
        He = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Be = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        qe = ["Webkit", "Moz", "ms"],
        We = n.createElement("div").style;

    function Xe(e) {
        var t = _.cssProps[e];
        return t || (t = _.cssProps[e] = function (e) {
            if (e in We) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), i = qe.length; i--;)
                if ((e = qe[i] + t) in We) return e
        }(e) || e), t
    }

    function Ye(e, t, i) {
        var n = Z.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }

    function Ue(e, t, i, n, r) {
        var o, s = 0;
        for (o = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === i && (s += _.css(e, i + J[o], !0, r)), n ? ("content" === i && (s -= _.css(e, "padding" + J[o], !0, r)), "margin" !== i && (s -= _.css(e, "border" + J[o] + "Width", !0, r))) : (s += _.css(e, "padding" + J[o], !0, r), "padding" !== i && (s += _.css(e, "border" + J[o] + "Width", !0, r)));
        return s
    }

    function Ve(e, t, i) {
        var n, r = je(e),
            o = Ie(e, t, r),
            s = "border-box" === _.css(e, "boxSizing", !1, r);
        return Re.test(o) ? o : (n = s && (p.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + Ue(e, t, i || (s ? "border" : "content"), n, r) + "px")
    }

    function Ge(e, t, i, n, r) {
        return new Ge.prototype.init(e, t, i, n, r)
    }
    _.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var i = Ie(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = _.camelCase(t),
                    l = ze.test(t),
                    c = e.style;
                return l || (t = Xe(a)), s = _.cssHooks[t] || _.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (r = s.get(e, !1, n)) ? r : c[t] : ("string" === (o = typeof i) && (r = Z.exec(i)) && r[1] && (i = ie(e, t, r), o = "number"), void (null != i && i == i && ("number" === o && (i += r && r[3] || (_.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (i = s.set(e, i, n)) || (l ? c.setProperty(t, i) : c[t] = i))))
            }
        },
        css: function (e, t, i, n) {
            var r, o, s, a = _.camelCase(t);
            return ze.test(t) || (t = Xe(a)), (s = _.cssHooks[t] || _.cssHooks[a]) && "get" in s && (r = s.get(e, !0, i)), void 0 === r && (r = Ie(e, t, n)), "normal" === r && t in Be && (r = Be[t]), "" === i || i ? (o = parseFloat(r), !0 === i || isFinite(o) ? o || 0 : r) : r
        }
    }), _.each(["height", "width"], function (e, t) {
        _.cssHooks[t] = {
            get: function (e, i, n) {
                if (i) return !Ne.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ve(e, t, n) : te(e, He, function () {
                    return Ve(e, t, n)
                })
            },
            set: function (e, i, n) {
                var r, o = n && je(e),
                    s = n && Ue(e, t, n, "border-box" === _.css(e, "boxSizing", !1, o), o);
                return s && (r = Z.exec(i)) && "px" !== (r[3] || "px") && (e.style[t] = i, i = _.css(e, t)), Ye(0, i, s)
            }
        }
    }), _.cssHooks.marginLeft = Fe(p.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Ie(e, "marginLeft")) || e.getBoundingClientRect().left - te(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        _.cssHooks[e + t] = {
            expand: function (i) {
                for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) r[e + J[n] + t] = o[n] || o[n - 2] || o[0];
                return r
            }
        }, Le.test(e) || (_.cssHooks[e + t].set = Ye)
    }), _.fn.extend({
        css: function (e, t) {
            return q(this, function (e, t, i) {
                var n, r, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (n = je(e), r = t.length; s < r; s++) o[t[s]] = _.css(e, t[s], !1, n);
                    return o
                }
                return void 0 !== i ? _.style(e, t, i) : _.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), _.Tween = Ge, Ge.prototype = {
        constructor: Ge,
        init: function (e, t, i, n, r, o) {
            this.elem = e, this.prop = i, this.easing = r || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = o || (_.cssNumber[i] ? "" : "px")
        },
        cur: function () {
            var e = Ge.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ge.propHooks._default.get(this)
        },
        run: function (e) {
            var t, i = Ge.propHooks[this.prop];
            return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Ge.propHooks._default.set(this), this
        }
    }, Ge.prototype.init.prototype = Ge.prototype, Ge.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[_.cssProps[e.prop]] && !_.cssHooks[e.prop] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, Ge.propHooks.scrollTop = Ge.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, _.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, _.fx = Ge.prototype.init, _.fx.step = {};
    var Qe, Ke, Ze = /^(?:toggle|show|hide)$/,
        Je = /queueHooks$/;

    function et() {
        Ke && (!1 === n.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(et) : e.setTimeout(et, _.fx.interval), _.fx.tick())
    }

    function tt() {
        return e.setTimeout(function () {
            Qe = void 0
        }), Qe = _.now()
    }

    function it(e, t) {
        var i, n = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; n < 4; n += 2 - t) r["margin" + (i = J[n])] = r["padding" + i] = e;
        return t && (r.opacity = r.width = e), r
    }

    function nt(e, t, i) {
        for (var n, r = (rt.tweeners[t] || []).concat(rt.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (n = r[o].call(i, t, e)) return n
    }

    function rt(e, t, i) {
        var n, r, o = 0,
            s = rt.prefilters.length,
            a = _.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (r) return !1;
                for (var t = Qe || tt(), i = Math.max(0, c.startTime + c.duration - t), n = 1 - (i / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(n);
                return a.notifyWith(e, [c, n, i]), n < 1 && s ? i : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: _.extend({}, t),
                opts: _.extend(!0, {
                    specialEasing: {},
                    easing: _.easing._default
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: Qe || tt(),
                duration: i.duration,
                tweens: [],
                createTween: function (t, i) {
                    var n = _.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function (t) {
                    var i = 0,
                        n = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i < n; i++) c.tweens[i].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (function (e, t) {
            var i, n, r, o, s;
            for (i in e)
                if (r = t[n = _.camelCase(i)], o = e[i], Array.isArray(o) && (r = o[1], o = e[i] = o[0]), i !== n && (e[n] = o, delete e[i]), (s = _.cssHooks[n]) && "expand" in s)
                    for (i in o = s.expand(o), delete e[n], o) i in e || (e[i] = o[i], t[i] = r);
                else t[n] = r
        }(u, c.opts.specialEasing); o < s; o++)
            if (n = rt.prefilters[o].call(c, e, u, c.opts)) return _.isFunction(n.stop) && (_._queueHooks(c.elem, c.opts.queue).stop = _.proxy(n.stop, n)), n;
        return _.map(u, nt, c), _.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), _.fx.timer(_.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    _.Animation = _.extend(rt, {
        tweeners: {
            "*": [function (e, t) {
                var i = this.createTween(e, t);
                return ie(i.elem, e, Z.exec(t), i), i
            }]
        },
        tweener: function (e, t) {
            _.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(j);
            for (var i, n = 0, r = e.length; n < r; n++) i = e[n], rt.tweeners[i] = rt.tweeners[i] || [], rt.tweeners[i].unshift(t)
        },
        prefilters: [function (e, t, i) {
            var n, r, o, s, a, l, c, u, h = "width" in t || "height" in t,
                f = this,
                d = {},
                p = e.style,
                m = e.nodeType && ee(e),
                g = Y.get(e, "fxshow");
            for (n in i.queue || (null == (s = _._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                s.unqueued || a()
            }), s.unqueued++, f.always(function () {
                f.always(function () {
                    s.unqueued--, _.queue(e, "fx").length || s.empty.fire()
                })
            })), t)
                if (r = t[n], Ze.test(r)) {
                    if (delete t[n], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[n]) continue;
                        m = !0
                    }
                    d[n] = g && g[n] || _.style(e, n)
                } if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(d))
                for (n in h && 1 === e.nodeType && (i.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = g && g.display) && (c = Y.get(e, "display")), "none" === (u = _.css(e, "display")) && (c ? u = c : (oe([e], !0), c = e.style.display || c, u = _.css(e, "display"), oe([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === _.css(e, "float") && (l || (f.done(function () {
                    p.display = c
                }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), i.overflow && (p.overflow = "hidden", f.always(function () {
                    p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
                })), l = !1, d) l || (g ? "hidden" in g && (m = g.hidden) : g = Y.access(e, "fxshow", {
                    display: c
                }), o && (g.hidden = !m), m && oe([e], !0), f.done(function () {
                    for (n in m || oe([e]), Y.remove(e, "fxshow"), d) _.style(e, n, d[n])
                })), l = nt(m ? g[n] : 0, n, f), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function (e, t) {
            t ? rt.prefilters.unshift(e) : rt.prefilters.push(e)
        }
    }), _.speed = function (e, t, i) {
        var n = e && "object" == typeof e ? _.extend({}, e) : {
            complete: i || !i && t || _.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !_.isFunction(t) && t
        };
        return _.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in _.fx.speeds ? n.duration = _.fx.speeds[n.duration] : n.duration = _.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            _.isFunction(n.old) && n.old.call(this), n.queue && _.dequeue(this, n.queue)
        }, n
    }, _.fn.extend({
        fadeTo: function (e, t, i, n) {
            return this.filter(ee).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function (e, t, i, n) {
            var r = _.isEmptyObject(e),
                o = _.speed(t, i, n),
                s = function () {
                    var t = rt(this, _.extend({}, e), o);
                    (r || Y.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function (e, t, i) {
            var n = function (e) {
                var t = e.stop;
                delete e.stop, t(i)
            };
            return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    r = null != e && e + "queueHooks",
                    o = _.timers,
                    s = Y.get(this);
                if (r) s[r] && s[r].stop && n(s[r]);
                else
                    for (r in s) s[r] && s[r].stop && Je.test(r) && n(s[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(i), t = !1, o.splice(r, 1));
                !t && i || _.dequeue(this, e)
            })
        },
        finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, i = Y.get(this),
                    n = i[e + "queue"],
                    r = i[e + "queueHooks"],
                    o = _.timers,
                    s = n ? n.length : 0;
                for (i.finish = !0, _.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete i.finish
            })
        }
    }), _.each(["toggle", "show", "hide"], function (e, t) {
        var i = _.fn[t];
        _.fn[t] = function (e, n, r) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(it(t, !0), e, n, r)
        }
    }), _.each({
        slideDown: it("show"),
        slideUp: it("hide"),
        slideToggle: it("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        _.fn[e] = function (e, i, n) {
            return this.animate(t, e, i, n)
        }
    }), _.timers = [], _.fx.tick = function () {
        var e, t = 0,
            i = _.timers;
        for (Qe = _.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
        i.length || _.fx.stop(), Qe = void 0
    }, _.fx.timer = function (e) {
        _.timers.push(e), _.fx.start()
    }, _.fx.interval = 13, _.fx.start = function () {
        Ke || (Ke = !0, et())
    }, _.fx.stop = function () {
        Ke = null
    }, _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, _.fn.delay = function (t, i) {
        return t = _.fx && _.fx.speeds[t] || t, i = i || "fx", this.queue(i, function (i, n) {
            var r = e.setTimeout(i, t);
            n.stop = function () {
                e.clearTimeout(r)
            }
        })
    },
        function () {
            var e = n.createElement("input"),
                t = n.createElement("select").appendChild(n.createElement("option"));
            e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = n.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value
        }();
    var ot, st = _.expr.attrHandle;
    _.fn.extend({
        attr: function (e, t) {
            return q(this, _.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                _.removeAttr(this, e)
            })
        }
    }), _.extend({
        attr: function (e, t, i) {
            var n, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? _.prop(e, t, i) : (1 === o && _.isXMLDoc(e) || (r = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? ot : void 0)), void 0 !== i ? null === i ? void _.removeAttr(e, t) : r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : r && "get" in r && null !== (n = r.get(e, t)) ? n : null == (n = _.find.attr(e, t)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!p.radioValue && "radio" === t && P(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var i, n = 0,
                r = t && t.match(j);
            if (r && 1 === e.nodeType)
                for (; i = r[n++];) e.removeAttribute(i)
        }
    }), ot = {
        set: function (e, t, i) {
            return !1 === t ? _.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var i = st[t] || _.find.attr;
        st[t] = function (e, t, n) {
            var r, o, s = t.toLowerCase();
            return n || (o = st[s], st[s] = r, r = null != i(e, t, n) ? s : null, st[s] = o), r
        }
    });
    var at = /^(?:input|select|textarea|button)$/i,
        lt = /^(?:a|area)$/i;

    function ct(e) {
        return (e.match(j) || []).join(" ")
    }

    function ut(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    _.fn.extend({
        prop: function (e, t) {
            return q(this, _.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[_.propFix[e] || e]
            })
        }
    }), _.extend({
        prop: function (e, t, i) {
            var n, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && _.isXMLDoc(e) || (t = _.propFix[t] || t, r = _.propHooks[t]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : e[t] = i : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = _.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : at.test(e.nodeName) || lt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), p.optSelected || (_.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        _.propFix[this.toLowerCase()] = this
    }), _.fn.extend({
        addClass: function (e) {
            var t, i, n, r, o, s, a, l = 0;
            if (_.isFunction(e)) return this.each(function (t) {
                _(this).addClass(e.call(this, t, ut(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(j) || []; i = this[l++];)
                    if (r = ut(i), n = 1 === i.nodeType && " " + ct(r) + " ") {
                        for (s = 0; o = t[s++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        r !== (a = ct(n)) && i.setAttribute("class", a)
                    } return this
        },
        removeClass: function (e) {
            var t, i, n, r, o, s, a, l = 0;
            if (_.isFunction(e)) return this.each(function (t) {
                _(this).removeClass(e.call(this, t, ut(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(j) || []; i = this[l++];)
                    if (r = ut(i), n = 1 === i.nodeType && " " + ct(r) + " ") {
                        for (s = 0; o = t[s++];)
                            for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                        r !== (a = ct(n)) && i.setAttribute("class", a)
                    } return this
        },
        toggleClass: function (e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : _.isFunction(e) ? this.each(function (i) {
                _(this).toggleClass(e.call(this, i, ut(this), t), t)
            }) : this.each(function () {
                var t, n, r, o;
                if ("string" === i)
                    for (n = 0, r = _(this), o = e.match(j) || []; t = o[n++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== i || ((t = ut(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + ct(ut(i)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var ht = /\r/g;
    _.fn.extend({
        val: function (e) {
            var t, i, n, r = this[0];
            return arguments.length ? (n = _.isFunction(e), this.each(function (i) {
                var r;
                1 === this.nodeType && (null == (r = n ? e.call(this, i, _(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = _.map(r, function (e) {
                    return null == e ? "" : e + ""
                })), (t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = _.valHooks[r.type] || _.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(r, "value")) ? i : "string" == typeof (i = r.value) ? i.replace(ht, "") : null == i ? "" : i : void 0
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = _.find.attr(e, "value");
                    return null != t ? t : ct(_.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, i, n, r = e.options,
                        o = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? o + 1 : r.length;
                    for (n = o < 0 ? l : s ? o : 0; n < l; n++)
                        if (((i = r[n]).selected || n === o) && !i.disabled && (!i.parentNode.disabled || !P(i.parentNode, "optgroup"))) {
                            if (t = _(i).val(), s) return t;
                            a.push(t)
                        } return a
                },
                set: function (e, t) {
                    for (var i, n, r = e.options, o = _.makeArray(t), s = r.length; s--;)((n = r[s]).selected = _.inArray(_.valHooks.option.get(n), o) > -1) && (i = !0);
                    return i || (e.selectedIndex = -1), o
                }
            }
        }
    }), _.each(["radio", "checkbox"], function () {
        _.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = _.inArray(_(e).val(), t) > -1
            }
        }, p.checkOn || (_.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var ft = /^(?:focusinfocus|focusoutblur)$/;
    _.extend(_.event, {
        trigger: function (t, i, r, o) {
            var s, a, l, c, u, f, d, p = [r || n],
                m = h.call(t, "type") ? t.type : t,
                g = h.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = l = r = r || n, 3 !== r.nodeType && 8 !== r.nodeType && !ft.test(m + _.event.triggered) && (m.indexOf(".") > -1 && (g = m.split("."), m = g.shift(), g.sort()), u = m.indexOf(":") < 0 && "on" + m, (t = t[_.expando] ? t : new _.Event(m, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), i = null == i ? [t] : _.makeArray(i, [t]), d = _.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(r, i))) {
                if (!o && !d.noBubble && !_.isWindow(r)) {
                    for (c = d.delegateType || m, ft.test(c + m) || (a = a.parentNode); a; a = a.parentNode) p.push(a), l = a;
                    l === (r.ownerDocument || n) && p.push(l.defaultView || l.parentWindow || e)
                }
                for (s = 0;
                    (a = p[s++]) && !t.isPropagationStopped();) t.type = s > 1 ? c : d.bindType || m, (f = (Y.get(a, "events") || {})[t.type] && Y.get(a, "handle")) && f.apply(a, i), (f = u && a[u]) && f.apply && W(a) && (t.result = f.apply(a, i), !1 === t.result && t.preventDefault());
                return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), i) || !W(r) || u && _.isFunction(r[m]) && !_.isWindow(r) && ((l = r[u]) && (r[u] = null), _.event.triggered = m, r[m](), _.event.triggered = void 0, l && (r[u] = l)), t.result
            }
        },
        simulate: function (e, t, i) {
            var n = _.extend(new _.Event, i, {
                type: e,
                isSimulated: !0
            });
            _.event.trigger(n, null, t)
        }
    }), _.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                _.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var i = this[0];
            if (i) return _.event.trigger(e, t, i, !0)
        }
    }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        _.fn[t] = function (e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), _.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), p.focusin = "onfocusin" in e, p.focusin || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var i = function (e) {
            _.event.simulate(t, e.target, _.event.fix(e))
        };
        _.event.special[t] = {
            setup: function () {
                var n = this.ownerDocument || this,
                    r = Y.access(n, t);
                r || n.addEventListener(e, i, !0), Y.access(n, t, (r || 0) + 1)
            },
            teardown: function () {
                var n = this.ownerDocument || this,
                    r = Y.access(n, t) - 1;
                r ? Y.access(n, t, r) : (n.removeEventListener(e, i, !0), Y.remove(n, t))
            }
        }
    });
    var dt = e.location,
        pt = _.now(),
        mt = /\?/;
    _.parseXML = function (t) {
        var i;
        if (!t || "string" != typeof t) return null;
        try {
            i = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + t), i
    };
    var gt = /\[\]$/,
        _t = /\r?\n/g,
        vt = /^(?:submit|button|image|reset|file)$/i,
        yt = /^(?:input|select|textarea|keygen)/i;

    function wt(e, t, i, n) {
        var r;
        if (Array.isArray(t)) _.each(t, function (t, r) {
            i || gt.test(e) ? n(e, r) : wt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, i, n)
        });
        else if (i || "object" !== _.type(t)) n(e, t);
        else
            for (r in t) wt(e + "[" + r + "]", t[r], i, n)
    }
    _.param = function (e, t) {
        var i, n = [],
            r = function (e, t) {
                var i = _.isFunction(t) ? t() : t;
                n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, function () {
            r(this.name, this.value)
        });
        else
            for (i in e) wt(i, e[i], t, r);
        return n.join("&")
    }, _.fn.extend({
        serialize: function () {
            return _.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = _.prop(this, "elements");
                return e ? _.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !_(this).is(":disabled") && yt.test(this.nodeName) && !vt.test(e) && (this.checked || !se.test(e))
            }).map(function (e, t) {
                var i = _(this).val();
                return null == i ? null : Array.isArray(i) ? _.map(i, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(_t, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(_t, "\r\n")
                }
            }).get()
        }
    });
    var bt = /%20/g,
        xt = /#.*$/,
        Tt = /([?&])_=[^&]*/,
        Ct = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        St = /^(?:GET|HEAD)$/,
        kt = /^\/\//,
        Pt = {},
        Ot = {},
        Et = "*/".concat("*"),
        Mt = n.createElement("a");

    function $t(e) {
        return function (t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, r = 0,
                o = t.toLowerCase().match(j) || [];
            if (_.isFunction(i))
                for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function At(e, t, i, n) {
        var r = {},
            o = e === Ot;

        function s(a) {
            var l;
            return r[a] = !0, _.each(e[a] || [], function (e, a) {
                var c = a(t, i, n);
                return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
            }), l
        }
        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }

    function Dt(e, t) {
        var i, n, r = _.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && _.extend(!0, e, n), e
    }
    Mt.href = dt.href, _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: dt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(dt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Et,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Dt(Dt(e, _.ajaxSettings), t) : Dt(_.ajaxSettings, e)
        },
        ajaxPrefilter: $t(Pt),
        ajaxTransport: $t(Ot),
        ajax: function (t, i) {
            "object" == typeof t && (i = t, t = void 0), i = i || {};
            var r, o, s, a, l, c, u, h, f, d, p = _.ajaxSetup({}, i),
                m = p.context || p,
                g = p.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                v = _.Deferred(),
                y = _.Callbacks("once memory"),
                w = p.statusCode || {},
                b = {},
                x = {},
                T = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (u) {
                            if (!a)
                                for (a = {}; t = Ct.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return u ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == u && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == u && (p.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (u) C.always(e[C.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || T;
                        return r && r.abort(t), S(0, t), this
                    }
                };
            if (v.promise(C), p.url = ((t || p.url || dt.href) + "").replace(kt, dt.protocol + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(j) || [""], null == p.crossDomain) {
                c = n.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = Mt.protocol + "//" + Mt.host != c.protocol + "//" + c.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = _.param(p.data, p.traditional)), At(Pt, p, i, C), u) return C;
            for (f in (h = _.event && p.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !St.test(p.type), o = p.url.replace(xt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(bt, "+")) : (d = p.url.slice(o.length), p.data && (o += (mt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Tt, "$1"), d = (mt.test(o) ? "&" : "?") + "_=" + pt++ + d), p.url = o + d), p.ifModified && (_.lastModified[o] && C.setRequestHeader("If-Modified-Since", _.lastModified[o]), _.etag[o] && C.setRequestHeader("If-None-Match", _.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || i.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Et + "; q=0.01" : "") : p.accepts["*"]), p.headers) C.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(m, C, p) || u)) return C.abort();
            if (T = "abort", y.add(p.complete), C.done(p.success), C.fail(p.error), r = At(Ot, p, i, C)) {
                if (C.readyState = 1, h && g.trigger("ajaxSend", [C, p]), u) return C;
                p.async && p.timeout > 0 && (l = e.setTimeout(function () {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    u = !1, r.send(b, S)
                } catch (e) {
                    if (u) throw e;
                    S(-1, e)
                }
            } else S(-1, "No Transport");

            function S(t, i, n, a) {
                var c, f, d, b, x, T = i;
                u || (u = !0, l && e.clearTimeout(l), r = void 0, s = a || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, n && (b = function (e, t, i) {
                    for (var n, r, o, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n)
                        for (r in a)
                            if (a[r] && a[r].test(n)) {
                                l.unshift(r);
                                break
                            } if (l[0] in i) o = l[0];
                    else {
                        for (r in i) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), i[o]
                }(p, C, n)), b = function (e, t, i, n) {
                    var r, o, s, a, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (o = u.shift(); o;)
                        if (e.responseFields[o] && (i[e.responseFields[o]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                                if (!(s = c[l + " " + o] || c["* " + o]))
                                    for (r in c)
                                        if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                                            break
                                        } if (!0 !== s)
                                    if (s && e.throws) t = s(t);
                                    else try {
                                        t = s(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: s ? e : "No conversion from " + l + " to " + o
                                        }
                                    }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, b, C, c), c ? (p.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (_.lastModified[o] = x), (x = C.getResponseHeader("etag")) && (_.etag[o] = x)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, f = b.data, c = !(d = b.error))) : (d = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (i || T) + "", c ? v.resolveWith(m, [f, T, C]) : v.rejectWith(m, [C, T, d]), C.statusCode(w), w = void 0, h && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? f : d]), y.fireWith(m, [C, T]), h && (g.trigger("ajaxComplete", [C, p]), --_.active || _.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function (e, t, i) {
            return _.get(e, t, i, "json")
        },
        getScript: function (e, t) {
            return _.get(e, void 0, t, "script")
        }
    }), _.each(["get", "post"], function (e, t) {
        _[t] = function (e, i, n, r) {
            return _.isFunction(i) && (r = r || n, n = i, i = void 0), _.ajax(_.extend({
                url: e,
                type: t,
                dataType: r,
                data: i,
                success: n
            }, _.isPlainObject(e) && e))
        }
    }), _._evalUrl = function (e) {
        return _.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, _.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (_.isFunction(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (e) {
            return _.isFunction(e) ? this.each(function (t) {
                _(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = _(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = _.isFunction(e);
            return this.each(function (i) {
                _(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                _(this).replaceWith(this.childNodes)
            }), this
        }
    }), _.expr.pseudos.hidden = function (e) {
        return !_.expr.pseudos.visible(e)
    }, _.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, _.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) { }
    };
    var Lt = {
        0: 200,
        1223: 204
    },
        Rt = _.ajaxSettings.xhr();
    p.cors = !!Rt && "withCredentials" in Rt, p.ajax = Rt = !!Rt, _.ajaxTransport(function (t) {
        var i, n;
        if (p.cors || Rt && !t.crossDomain) return {
            send: function (r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                i = function (e) {
                    return function () {
                        i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Lt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
                    4 === a.readyState && e.setTimeout(function () {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (i) throw e
                }
            },
            abort: function () {
                i && i()
            }
        }
    }), _.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return _.globalEval(e), e
            }
        }
    }), _.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), _.ajaxTransport("script", function (e) {
        var t, i;
        if (e.crossDomain) return {
            send: function (r, o) {
                t = _("<script>").prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", i = function (e) {
                    t.remove(), i = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), n.head.appendChild(t[0])
            },
            abort: function () {
                i && i()
            }
        }
    });
    var jt = [],
        It = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = jt.pop() || _.expando + "_" + pt++;
            return this[e] = !0, e
        }
    }), _.ajaxPrefilter("json jsonp", function (t, i, n) {
        var r, o, s, a = !1 !== t.jsonp && (It.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && It.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = _.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(It, "$1" + r) : !1 !== t.jsonp && (t.url += (mt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return s || _.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
            s = arguments
        }, n.always(function () {
            void 0 === o ? _(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = i.jsonpCallback, jt.push(r)), s && _.isFunction(o) && o(s[0]), s = o = void 0
        }), "script"
    }), p.createHTMLDocument = function () {
        var e = n.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), _.parseHTML = function (e, t, i) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (p.createHTMLDocument ? ((r = (t = n.implementation.createHTMLDocument("")).createElement("base")).href = n.location.href, t.head.appendChild(r)) : t = n), s = !i && [], (o = O.exec(e)) ? [t.createElement(o[1])] : (o = de([e], t, s), s && s.length && _(s).remove(), _.merge([], o.childNodes)));
        var r, o, s
    }, _.fn.load = function (e, t, i) {
        var n, r, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (n = ct(e.slice(a)), e = e.slice(0, a)), _.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && _.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(n ? _("<div>").append(_.parseHTML(e)).find(n) : e)
        }).always(i && function (e, t) {
            s.each(function () {
                i.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        _.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), _.expr.pseudos.animated = function (e) {
        return _.grep(_.timers, function (t) {
            return e === t.elem
        }).length
    }, _.offset = {
        setOffset: function (e, t, i) {
            var n, r, o, s, a, l, c = _.css(e, "position"),
                u = _(e),
                h = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), o = _.css(e, "top"), l = _.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (n = u.position()).top, r = n.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), _.isFunction(t) && (t = t.call(e, i, _.extend({}, a))), null != t.top && (h.top = t.top - a.top + s), null != t.left && (h.left = t.left - a.left + r), "using" in t ? t.using.call(e, h) : u.css(h)
        }
    }, _.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                _.offset.setOffset(this, e, t)
            });
            var t, i, n, r, o = this[0];
            return o ? o.getClientRects().length ? (n = o.getBoundingClientRect(), i = (t = o.ownerDocument).documentElement, r = t.defaultView, {
                top: n.top + r.pageYOffset - i.clientTop,
                left: n.left + r.pageXOffset - i.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === _.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), P(e[0], "html") || (n = e.offset()), n = {
                    top: n.top + _.css(e[0], "borderTopWidth", !0),
                    left: n.left + _.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - n.top - _.css(i, "marginTop", !0),
                    left: t.left - n.left - _.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === _.css(e, "position");) e = e.offsetParent;
                return e || pe
            })
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var i = "pageYOffset" === t;
        _.fn[e] = function (n) {
            return q(this, function (e, n, r) {
                var o;
                return _.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r ? o ? o[t] : e[n] : void (o ? o.scrollTo(i ? o.pageXOffset : r, i ? r : o.pageYOffset) : e[n] = r)
            }, e, n, arguments.length)
        }
    }), _.each(["top", "left"], function (e, t) {
        _.cssHooks[t] = Fe(p.pixelPosition, function (e, i) {
            if (i) return i = Ie(e, t), Re.test(i) ? _(e).position()[t] + "px" : i
        })
    }), _.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        _.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (i, n) {
            _.fn[n] = function (r, o) {
                var s = arguments.length && (i || "boolean" != typeof r),
                    a = i || (!0 === r || !0 === o ? "margin" : "border");
                return q(this, function (t, i, r) {
                    var o;
                    return _.isWindow(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? _.css(t, i, a) : _.style(t, i, r, a)
                }, t, s ? r : void 0, s)
            }
        })
    }), _.fn.extend({
        bind: function (e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function (e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }), _.holdReady = function (e) {
        e ? _.readyWait++ : _.ready(!0)
    }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = P, "function" == typeof define && define.amd && define("jquery", [], function () {
        return _
    });
    var Ft = e.jQuery,
        Nt = e.$;
    return _.noConflict = function (t) {
        return e.$ === _ && (e.$ = Nt), t && e.jQuery === _ && (e.jQuery = Ft), _
    }, t || (e.jQuery = e.$ = _), _
}),
    function () {
        "use strict";

        function e(n) {
            if (!n) throw new Error("No options passed to Waypoint constructor");
            if (!n.element) throw new Error("No element option passed to Waypoint constructor");
            if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + t, this.options = e.Adapter.extend({}, e.defaults, n), this.element = this.options.element, this.adapter = new e.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = e.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = e.Context.findOrCreateByElement(this.options.context), e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, t += 1
        }
        var t = 0,
            i = {};
        e.prototype.queueTrigger = function (e) {
            this.group.queueTrigger(this, e)
        }, e.prototype.trigger = function (e) {
            this.enabled && this.callback && this.callback.apply(this, e)
        }, e.prototype.destroy = function () {
            this.context.remove(this), this.group.remove(this), delete i[this.key]
        }, e.prototype.disable = function () {
            return this.enabled = !1, this
        }, e.prototype.enable = function () {
            return this.context.refresh(), this.enabled = !0, this
        }, e.prototype.next = function () {
            return this.group.next(this)
        }, e.prototype.previous = function () {
            return this.group.previous(this)
        }, e.invokeAll = function (e) {
            var t = [];
            for (var n in i) t.push(i[n]);
            for (var r = 0, o = t.length; o > r; r++) t[r][e]()
        }, e.destroyAll = function () {
            e.invokeAll("destroy")
        }, e.disableAll = function () {
            e.invokeAll("disable")
        }, e.enableAll = function () {
            for (var t in e.Context.refreshAll(), i) i[t].enabled = !0;
            return this
        }, e.refreshAll = function () {
            e.Context.refreshAll()
        }, e.viewportHeight = function () {
            return window.innerHeight || document.documentElement.clientHeight
        }, e.viewportWidth = function () {
            return document.documentElement.clientWidth
        }, e.adapters = [], e.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, e.offsetAliases = {
            "bottom-in-view": function () {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function () {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = e
    }(),
    function () {
        "use strict";

        function e(e) {
            window.setTimeout(e, 1e3 / 60)
        }

        function t(e) {
            this.element = e, this.Adapter = r.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, e.waypointContextKey = this.key, n[e.waypointContextKey] = this, i += 1, r.windowContext || (r.windowContext = !0, r.windowContext = new t(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        var i = 0,
            n = {},
            r = window.Waypoint,
            o = window.onload;
        t.prototype.add = function (e) {
            var t = e.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[t][e.key] = e, this.refresh()
        }, t.prototype.checkEmpty = function () {
            var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                t = this.Adapter.isEmptyObject(this.waypoints.vertical),
                i = this.element == this.element.window;
            e && t && !i && (this.adapter.off(".waypoints"), delete n[this.key])
        }, t.prototype.createThrottledResizeHandler = function () {
            function e() {
                t.handleResize(), t.didResize = !1
            }
            var t = this;
            this.adapter.on("resize.waypoints", function () {
                t.didResize || (t.didResize = !0, r.requestAnimationFrame(e))
            })
        }, t.prototype.createThrottledScrollHandler = function () {
            function e() {
                t.handleScroll(), t.didScroll = !1
            }
            var t = this;
            this.adapter.on("scroll.waypoints", function () {
                (!t.didScroll || r.isTouch) && (t.didScroll = !0, r.requestAnimationFrame(e))
            })
        }, t.prototype.handleResize = function () {
            r.Context.refreshAll()
        }, t.prototype.handleScroll = function () {
            var e = {},
                t = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var i in t) {
                var n = t[i],
                    r = n.newScroll > n.oldScroll ? n.forward : n.backward;
                for (var o in this.waypoints[i]) {
                    var s = this.waypoints[i][o];
                    if (null !== s.triggerPoint) {
                        var a = n.oldScroll < s.triggerPoint,
                            l = n.newScroll >= s.triggerPoint;
                        (a && l || !a && !l) && (s.queueTrigger(r), e[s.group.id] = s.group)
                    }
                }
            }
            for (var c in e) e[c].flushTriggers();
            this.oldScroll = {
                x: t.horizontal.newScroll,
                y: t.vertical.newScroll
            }
        }, t.prototype.innerHeight = function () {
            return this.element == this.element.window ? r.viewportHeight() : this.adapter.innerHeight()
        }, t.prototype.remove = function (e) {
            delete this.waypoints[e.axis][e.key], this.checkEmpty()
        }, t.prototype.innerWidth = function () {
            return this.element == this.element.window ? r.viewportWidth() : this.adapter.innerWidth()
        }, t.prototype.destroy = function () {
            var e = [];
            for (var t in this.waypoints)
                for (var i in this.waypoints[t]) e.push(this.waypoints[t][i]);
            for (var n = 0, r = e.length; r > n; n++) e[n].destroy()
        }, t.prototype.refresh = function () {
            var e, t = this.element == this.element.window,
                i = t ? void 0 : this.adapter.offset(),
                n = {};
            for (var o in this.handleScroll(), e = {
                horizontal: {
                    contextOffset: t ? 0 : i.left,
                    contextScroll: t ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: t ? 0 : i.top,
                    contextScroll: t ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            }) {
                var s = e[o];
                for (var a in this.waypoints[o]) {
                    var l, c, u, h, f = this.waypoints[o][a],
                        d = f.options.offset,
                        p = f.triggerPoint,
                        m = 0,
                        g = null == p;
                    f.element !== f.element.window && (m = f.adapter.offset()[s.offsetProp]), "function" == typeof d ? d = d.apply(f) : "string" == typeof d && (d = parseFloat(d), f.options.offset.indexOf("%") > -1 && (d = Math.ceil(s.contextDimension * d / 100))), l = s.contextScroll - s.contextOffset, f.triggerPoint = Math.floor(m + l - d), c = p < s.oldScroll, u = f.triggerPoint >= s.oldScroll, h = !c && !u, !g && (c && u) ? (f.queueTrigger(s.backward), n[f.group.id] = f.group) : !g && h ? (f.queueTrigger(s.forward), n[f.group.id] = f.group) : g && s.oldScroll >= f.triggerPoint && (f.queueTrigger(s.forward), n[f.group.id] = f.group)
                }
            }
            return r.requestAnimationFrame(function () {
                for (var e in n) n[e].flushTriggers()
            }), this
        }, t.findOrCreateByElement = function (e) {
            return t.findByElement(e) || new t(e)
        }, t.refreshAll = function () {
            for (var e in n) n[e].refresh()
        }, t.findByElement = function (e) {
            return n[e.waypointContextKey]
        }, window.onload = function () {
            o && o(), t.refreshAll()
        }, r.requestAnimationFrame = function (t) {
            (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t)
        }, r.Context = t
    }(),
    function () {
        "use strict";

        function e(e, t) {
            return e.triggerPoint - t.triggerPoint
        }

        function t(e, t) {
            return t.triggerPoint - e.triggerPoint
        }

        function i(e) {
            this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
        }
        var n = {
            vertical: {},
            horizontal: {}
        },
            r = window.Waypoint;
        i.prototype.add = function (e) {
            this.waypoints.push(e)
        }, i.prototype.clearTriggerQueues = function () {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, i.prototype.flushTriggers = function () {
            for (var i in this.triggerQueues) {
                var n = this.triggerQueues[i],
                    r = "up" === i || "left" === i;
                n.sort(r ? t : e);
                for (var o = 0, s = n.length; s > o; o += 1) {
                    var a = n[o];
                    (a.options.continuous || o === n.length - 1) && a.trigger([i])
                }
            }
            this.clearTriggerQueues()
        }, i.prototype.next = function (t) {
            this.waypoints.sort(e);
            var i = r.Adapter.inArray(t, this.waypoints);
            return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
        }, i.prototype.previous = function (t) {
            this.waypoints.sort(e);
            var i = r.Adapter.inArray(t, this.waypoints);
            return i ? this.waypoints[i - 1] : null
        }, i.prototype.queueTrigger = function (e, t) {
            this.triggerQueues[t].push(e)
        }, i.prototype.remove = function (e) {
            var t = r.Adapter.inArray(e, this.waypoints);
            t > -1 && this.waypoints.splice(t, 1)
        }, i.prototype.first = function () {
            return this.waypoints[0]
        }, i.prototype.last = function () {
            return this.waypoints[this.waypoints.length - 1]
        }, i.findOrCreate = function (e) {
            return n[e.axis][e.name] || new i(e)
        }, r.Group = i
    }(),
    function () {
        "use strict";

        function e(e) {
            this.$element = t(e)
        }
        var t = window.jQuery,
            i = window.Waypoint;
        t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (t, i) {
            e.prototype[i] = function () {
                var e = Array.prototype.slice.call(arguments);
                return this.$element[i].apply(this.$element, e)
            }
        }), t.each(["extend", "inArray", "isEmptyObject"], function (i, n) {
            e[n] = t[n]
        }), i.adapters.push({
            name: "jquery",
            Adapter: e
        }), i.Adapter = e
    }(),
    function () {
        "use strict";

        function e(e) {
            return function () {
                var i = [],
                    n = arguments[0];
                return e.isFunction(arguments[0]) && ((n = e.extend({}, arguments[1])).handler = arguments[0]), this.each(function () {
                    var r = e.extend({}, n, {
                        element: this
                    });
                    "string" == typeof r.context && (r.context = e(this).closest(r.context)[0]), i.push(new t(r))
                }), i
            }
        }
        var t = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
    }();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
if ((_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    var e, t, i, n, r, o, s, a, l, c, u, h, f, d, p, m;
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (e, t, i) {
        var n = function (e) {
            var t, i = [],
                n = e.length;
            for (t = 0; t !== n; i.push(e[t++]));
            return i
        },
            r = function (e, t, i) {
                var n, r, o = e.cycle;
                for (n in o) r = o[n], e[n] = "function" == typeof r ? r(i, t[i]) : r[i % r.length];
                delete e.cycle
            },
            o = function (e, t, n) {
                i.call(this, e, t, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = o.prototype.render
            },
            s = 1e-10,
            a = i._internals,
            l = a.isSelector,
            c = a.isArray,
            u = o.prototype = i.to({}, .1, {}),
            h = [];
        o.version = "1.20.2", u.constructor = o, u.kill()._gc = !1, o.killTweensOf = o.killDelayedCallsTo = i.killTweensOf, o.getTweensOf = i.getTweensOf, o.lagSmoothing = i.lagSmoothing, o.ticker = i.ticker, o.render = i.render, u.invalidate = function () {
            return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
        }, u.updateTo = function (e, t) {
            var n, r = this.ratio,
                o = this.vars.immediateRender || e.immediateRender;
            for (n in t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), e) this.vars[n] = e[n];
            if (this._initted || o)
                if (t) this._initted = !1, o && this.render(0, !0, !0);
                else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                    var s = this._totalTime;
                    this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
                } else if (this._initted = !1, this._init(), this._time > 0 || o)
                    for (var a, l = 1 / (1 - r), c = this._firstPT; c;) a = c.s + c.c, c.c *= l, c.s = a - c.c, c = c._next;
            return this
        }, u.render = function (e, t, n) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var r, o, l, c, u, h, f, d, p, m = this._dirty ? this.totalDuration() : this._totalDuration,
                g = this._time,
                _ = this._totalTime,
                v = this._cycle,
                y = this._duration,
                w = this._rawPrevTime;
            if (e >= m - 1e-7 && e >= 0 ? (this._totalTime = m, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, o = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (e = 0), (0 > w || 0 >= e && e >= -1e-7 || w === s && "isPause" !== this.data) && w !== e && (n = !0, w > s && (o = "onReverseComplete")), this._rawPrevTime = d = !t || e || w === e ? e : s)) : 1e-7 > e ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== _ || 0 === y && w > 0) && (o = "onReverseComplete", r = this._reversed), 0 > e && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || n) && (w >= 0 && (n = !0), this._rawPrevTime = d = !t || e || w === e ? e : s)), this._initted || (n = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (c = y + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && e >= _ && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time, (p = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== p || this._initted ? this._yoyoEase = p = !0 === p ? this._ease : p instanceof Ease ? p : Ease.map[p] : (p = this.vars.ease, this._yoyoEase = p = p ? p instanceof Ease ? p : "function" == typeof p ? new Ease(p, this.vars.easeParams) : Ease.map[p] || i.defaultEase : i.defaultEase)), this.ratio = p ? 1 - p.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType && !p ? (u = this._time / y, (1 === (h = this._easeType) || 3 === h && u >= .5) && (u = 1 - u), 3 === h && (u *= 2), 1 === (f = this._easePower) ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), 1 === h ? this.ratio = 1 - u : 2 === h ? this.ratio = u : this._time / y < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2) : p || (this.ratio = this._ease.getRatio(this._time / y))), g !== this._time || n || v !== this._cycle) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = g, this._totalTime = _, this._rawPrevTime = w, this._cycle = v, a.lazyTweens.push(this), void (this._lazy = [e, t]);
                    !this._time || r || p ? r && this._ease._calcEnd && !p && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y)
                }
                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== g && e >= 0 && (this._active = !0), 0 === _ && (2 === this._initted && e > 0 && this._init(), this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : o || (o = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === y) && (t || this._callback("onStart"))), l = this._firstPT; l;) l.f ? l.t[l.p](l.c * this.ratio + l.s) : l.t[l.p] = l.c * this.ratio + l.s, l = l._next;
                this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, n), t || (this._totalTime !== _ || o) && this._callback("onUpdate")), this._cycle !== v && (t || this._gc || this.vars.onRepeat && this._callback("onRepeat")), o && (!this._gc || n) && (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[o] && this._callback(o), 0 === y && this._rawPrevTime === s && d !== s && (this._rawPrevTime = 0))
            } else _ !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
        }, o.to = function (e, t, i) {
            return new o(e, t, i)
        }, o.from = function (e, t, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new o(e, t, i)
        }, o.fromTo = function (e, t, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new o(e, t, n)
        }, o.staggerTo = o.allTo = function (e, t, s, a, u, f, d) {
            a = a || 0;
            var p, m, g, _, v = 0,
                y = [],
                w = function () {
                    s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), u.apply(d || s.callbackScope || this, f || h)
                },
                b = s.cycle,
                x = s.startAt && s.startAt.cycle;
            for (c(e) || ("string" == typeof e && (e = i.selector(e) || e), l(e) && (e = n(e))), e = e || [], 0 > a && ((e = n(e)).reverse(), a *= -1), p = e.length - 1, g = 0; p >= g; g++) {
                for (_ in m = {}, s) m[_] = s[_];
                if (b && (r(m, e, g), null != m.duration && (t = m.duration, delete m.duration)), x) {
                    for (_ in x = m.startAt = {}, s.startAt) x[_] = s.startAt[_];
                    r(m.startAt, e, g)
                }
                m.delay = v + (m.delay || 0), g === p && u && (m.onComplete = w), y[g] = new o(e[g], t, m), v += a
            }
            return y
        }, o.staggerFrom = o.allFrom = function (e, t, i, n, r, s, a) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, o.staggerTo(e, t, i, n, r, s, a)
        }, o.staggerFromTo = o.allFromTo = function (e, t, i, n, r, s, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, o.staggerTo(e, t, n, r, s, a, l)
        }, o.delayedCall = function (e, t, i, n, r) {
            return new o(t, 0, {
                delay: e,
                onComplete: t,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: t,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        }, o.set = function (e, t) {
            return new o(e, 0, t)
        }, o.isTweening = function (e) {
            return i.getTweensOf(e, !0).length > 0
        };
        var f = function (e, t) {
            for (var n = [], r = 0, o = e._first; o;) o instanceof i ? n[r++] = o : (t && (n[r++] = o), r = (n = n.concat(f(o, t))).length), o = o._next;
            return n
        },
            d = o.getAllTweens = function (t) {
                return f(e._rootTimeline, t).concat(f(e._rootFramesTimeline, t))
            };
        o.killAll = function (e, i, n, r) {
            null == i && (i = !0), null == n && (n = !0);
            var o, s, a, l = d(0 != r),
                c = l.length,
                u = i && n && r;
            for (a = 0; c > a; a++) s = l[a], (u || s instanceof t || (o = s.target === s.vars.onComplete) && n || i && !o) && (e ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
        }, o.killChildTweensOf = function (e, t) {
            if (null != e) {
                var r, s, u, h, f, d = a.tweenLookup;
                if ("string" == typeof e && (e = i.selector(e) || e), l(e) && (e = n(e)), c(e))
                    for (h = e.length; --h > -1;) o.killChildTweensOf(e[h], t);
                else {
                    for (u in r = [], d)
                        for (s = d[u].target.parentNode; s;) s === e && (r = r.concat(d[u].tweens)), s = s.parentNode;
                    for (f = r.length, h = 0; f > h; h++) t && r[h].totalTime(r[h].totalDuration()), r[h]._enabled(!1, !1)
                }
            }
        };
        var p = function (e, i, n, r) {
            i = !1 !== i, n = !1 !== n;
            for (var o, s, a = d(r = !1 !== r), l = i && n && r, c = a.length; --c > -1;) s = a[c], (l || s instanceof t || (o = s.target === s.vars.onComplete) && n || i && !o) && s.paused(e)
        };
        return o.pauseAll = function (e, t, i) {
            p(!0, e, t, i)
        }, o.resumeAll = function (e, t, i) {
            p(!1, e, t, i)
        }, o.globalTimeScale = function (t) {
            var n = e._rootTimeline,
                r = i.ticker.time;
            return arguments.length ? (t = t || s, n._startTime = r - (r - n._startTime) * n._timeScale / t, n = e._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / t, n._timeScale = e._rootTimeline._timeScale = t, t) : n._timeScale
        }, u.progress = function (e, t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
        }, u.totalProgress = function (e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
        }, u.time = function (e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
        }, u.duration = function (t) {
            return arguments.length ? e.prototype.duration.call(this, t) : this._duration
        }, u.totalDuration = function (e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, u.repeat = function (e) {
            return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
        }, u.repeatDelay = function (e) {
            return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
        }, u.yoyo = function (e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }, o
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (e, t, i) {
        var n = function (e) {
            t.call(this, e), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
            var i, n, r = this.vars;
            for (n in r) i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
            l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
        },
            r = 1e-10,
            o = i._internals,
            s = n._internals = {},
            a = o.isSelector,
            l = o.isArray,
            c = o.lazyTweens,
            u = o.lazyRender,
            h = _gsScope._gsDefine.globals,
            f = function (e) {
                var t, i = {};
                for (t in e) i[t] = e[t];
                return i
            },
            d = function (e, t, i) {
                var n, r, o = e.cycle;
                for (n in o) r = o[n], e[n] = "function" == typeof r ? r(i, t[i]) : r[i % r.length];
                delete e.cycle
            },
            p = s.pauseCallback = function () { },
            m = function (e) {
                var t, i = [],
                    n = e.length;
                for (t = 0; t !== n; i.push(e[t++]));
                return i
            },
            g = n.prototype = new t;
        return n.version = "1.20.2", g.constructor = n, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function (e, t, n, r) {
            var o = n.repeat && h.TweenMax || i;
            return t ? this.add(new o(e, t, n), r) : this.set(e, n, r)
        }, g.from = function (e, t, n, r) {
            return this.add((n.repeat && h.TweenMax || i).from(e, t, n), r)
        }, g.fromTo = function (e, t, n, r, o) {
            var s = r.repeat && h.TweenMax || i;
            return t ? this.add(s.fromTo(e, t, n, r), o) : this.set(e, r, o)
        }, g.staggerTo = function (e, t, r, o, s, l, c, u) {
            var h, p, g = new n({
                onComplete: l,
                onCompleteParams: c,
                callbackScope: u,
                smoothChildTiming: this.smoothChildTiming
            }),
                _ = r.cycle;
            for ("string" == typeof e && (e = i.selector(e) || e), a(e = e || []) && (e = m(e)), 0 > (o = o || 0) && ((e = m(e)).reverse(), o *= -1), p = 0; p < e.length; p++)(h = f(r)).startAt && (h.startAt = f(h.startAt), h.startAt.cycle && d(h.startAt, e, p)), _ && (d(h, e, p), null != h.duration && (t = h.duration, delete h.duration)), g.to(e[p], t, h, p * o);
            return this.add(g, s)
        }, g.staggerFrom = function (e, t, i, n, r, o, s, a) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(e, t, i, n, r, o, s, a)
        }, g.staggerFromTo = function (e, t, i, n, r, o, s, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(e, t, n, r, o, s, a, l)
        }, g.call = function (e, t, n, r) {
            return this.add(i.delayedCall(0, e, t, n), r)
        }, g.set = function (e, t, n) {
            return n = this._parseTimeOrLabel(n, 0, !0), null == t.immediateRender && (t.immediateRender = n === this._time && !this._paused), this.add(new i(e, 0, t), n)
        }, n.exportRoot = function (e, t) {
            null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
            var r, o, s = new n(e),
                a = s._timeline;
            for (null == t && (t = !0), a._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = a._time, r = a._first; r;) o = r._next, t && r instanceof i && r.target === r.vars.onComplete || s.add(r, r._startTime - r._delay), r = o;
            return a.add(s, 0), s
        }, g.add = function (r, o, s, a) {
            var c, u, h, f, d, p;
            if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, r)), !(r instanceof e)) {
                if (r instanceof Array || r && r.push && l(r)) {
                    for (s = s || "normal", a = a || 0, c = o, u = r.length, h = 0; u > h; h++) l(f = r[h]) && (f = new n({
                        tweens: f
                    })), this.add(f, c), "string" != typeof f && "function" != typeof f && ("sequence" === s ? c = f._startTime + f.totalDuration() / f._timeScale : "start" === s && (f._startTime -= f.delay())), c += a;
                    return this._uncache(!0)
                }
                if ("string" == typeof r) return this.addLabel(r, o);
                if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                r = i.delayedCall(0, r)
            }
            if (t.prototype.add.call(this, r, o), r._time && r.render((this.rawTime() - r._startTime) * r._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (p = (d = this).rawTime() > r._startTime; d._timeline;) p && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
            return this
        }, g.remove = function (t) {
            if (t instanceof e) {
                this._remove(t, !1);
                var i = t._timeline = t.vars.useFrames ? e._rootFramesTimeline : e._rootTimeline;
                return t._startTime = (t._paused ? t._pauseTime : i._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
            }
            if (t instanceof Array || t && t.push && l(t)) {
                for (var n = t.length; --n > -1;) this.remove(t[n]);
                return this
            }
            return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
        }, g._remove = function (e, i) {
            return t.prototype._remove.call(this, e, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, g.append = function (e, t) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
        }, g.insert = g.insertMultiple = function (e, t, i, n) {
            return this.add(e, t || 0, i, n)
        }, g.appendMultiple = function (e, t, i, n) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, n)
        }, g.addLabel = function (e, t) {
            return this._labels[e] = this._parseTimeOrLabel(t), this
        }, g.addPause = function (e, t, n, r) {
            var o = i.delayedCall(0, p, n, r || this);
            return o.vars.onComplete = o.vars.onReverseComplete = t, o.data = "isPause", this._hasPause = !0, this.add(o, e)
        }, g.removeLabel = function (e) {
            return delete this._labels[e], this
        }, g.getLabelTime = function (e) {
            return null != this._labels[e] ? this._labels[e] : -1
        }, g._parseTimeOrLabel = function (t, i, n, r) {
            var o, s;
            if (r instanceof e && r.timeline === this) this.remove(r);
            else if (r && (r instanceof Array || r.push && l(r)))
                for (s = r.length; --s > -1;) r[s] instanceof e && r[s].timeline === this && this.remove(r[s]);
            if (o = this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration, "string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof t && null == this._labels[i] ? t - o : 0, n);
            if (i = i || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = o);
            else {
                if (-1 === (s = t.indexOf("="))) return null == this._labels[t] ? n ? this._labels[t] = o + i : i : this._labels[t] + i;
                i = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1)), t = s > 1 ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, n) : o
            }
            return Number(t) + i
        }, g.seek = function (e, t) {
            return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t)
        }, g.stop = function () {
            return this.paused(!0)
        }, g.gotoAndPlay = function (e, t) {
            return this.play(e, t)
        }, g.gotoAndStop = function (e, t) {
            return this.pause(e, t)
        }, g.render = function (e, t, i) {
            this._gc && this._enabled(!0, !1);
            var n, o, s, a, l, h, f, d = this._dirty ? this.totalDuration() : this._totalDuration,
                p = this._time,
                m = this._startTime,
                g = this._timeScale,
                _ = this._paused;
            if (e >= d - 1e-7 && e >= 0) this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (o = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= e && e >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== e && this._first && (l = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : r, e = d + 1e-4;
            else if (1e-7 > e)
                if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > e && this._rawPrevTime >= 0)) && (a = "onReverseComplete", o = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = o = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = e;
                else {
                    if (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : r, 0 === e && o)
                        for (n = this._first; n && 0 === n._startTime;) n._duration || (o = !1), n = n._next;
                    e = 0, this._initted || (l = !0)
                }
            else {
                if (this._hasPause && !this._forcingPlayhead && !t) {
                    if (e >= p)
                        for (n = this._first; n && n._startTime <= e && !h;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n), n = n._next;
                    else
                        for (n = this._last; n && n._startTime >= e && !h;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (h = n), n = n._prev;
                    h && (this._time = e = h._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = e
            }
            if (this._time !== p && this._first || i || l || h) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && e > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || t || this._callback("onStart")), (f = this._time) >= p)
                    for (n = this._first; n && (s = n._next, f === this._time && (!this._paused || _));)(n._active || n._startTime <= f && !n._paused && !n._gc) && (h === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = s;
                else
                    for (n = this._last; n && (s = n._prev, f === this._time && (!this._paused || _));) {
                        if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                            if (h === n) {
                                for (h = n._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (e - h._startTime) * h._timeScale : (e - h._startTime) * h._timeScale, t, i), h = h._prev;
                                h = null, this.pause()
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)
                        }
                        n = s
                    }
                this._onUpdate && (t || (c.length && u(), this._callback("onUpdate"))), a && (this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (o && (c.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[a] && this._callback(a)))
            }
        }, g._hasPausedChild = function () {
            for (var e = this._first; e;) {
                if (e._paused || e instanceof n && e._hasPausedChild()) return !0;
                e = e._next
            }
            return !1
        }, g.getChildren = function (e, t, n, r) {
            r = r || -9999999999;
            for (var o = [], s = this._first, a = 0; s;) s._startTime < r || (s instanceof i ? !1 !== t && (o[a++] = s) : (!1 !== n && (o[a++] = s), !1 !== e && (a = (o = o.concat(s.getChildren(!0, t, n))).length))), s = s._next;
            return o
        }, g.getTweensOf = function (e, t) {
            var n, r, o = this._gc,
                s = [],
                a = 0;
            for (o && this._enabled(!0, !0), r = (n = i.getTweensOf(e)).length; --r > -1;)(n[r].timeline === this || t && this._contains(n[r])) && (s[a++] = n[r]);
            return o && this._enabled(!1, !0), s
        }, g.recent = function () {
            return this._recent
        }, g._contains = function (e) {
            for (var t = e.timeline; t;) {
                if (t === this) return !0;
                t = t.timeline
            }
            return !1
        }, g.shiftChildren = function (e, t, i) {
            i = i || 0;
            for (var n, r = this._first, o = this._labels; r;) r._startTime >= i && (r._startTime += e), r = r._next;
            if (t)
                for (n in o) o[n] >= i && (o[n] += e);
            return this._uncache(!0)
        }, g._kill = function (e, t) {
            if (!e && !t) return this._enabled(!1, !1);
            for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(e, t) && (r = !0);
            return r
        }, g.clear = function (e) {
            var t = this.getChildren(!1, !0, !0),
                i = t.length;
            for (this._time = this._totalTime = 0; --i > -1;) t[i]._enabled(!1, !1);
            return !1 !== e && (this._labels = {}), this._uncache(!0)
        }, g.invalidate = function () {
            for (var t = this._first; t;) t.invalidate(), t = t._next;
            return e.prototype.invalidate.call(this)
        }, g._enabled = function (e, i) {
            if (e === this._gc)
                for (var n = this._first; n;) n._enabled(e, !0), n = n._next;
            return t.prototype._enabled.call(this, e, i)
        }, g.totalTime = function (t, i, n) {
            this._forcingPlayhead = !0;
            var r = e.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, r
        }, g.duration = function (e) {
            return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
        }, g.totalDuration = function (e) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var t, i, n = 0, r = this._last, o = 999999999999; r;) t = r._prev, r._dirty && r.totalDuration(), r._startTime > o && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : o = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), o = 0), (i = r._startTime + r._totalDuration / r._timeScale) > n && (n = i), r = t;
                    this._duration = this._totalDuration = n, this._dirty = !1
                }
                return this._totalDuration
            }
            return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this
        }, g.paused = function (t) {
            if (!t)
                for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
            return e.prototype.paused.apply(this, arguments)
        }, g.usesFrames = function () {
            for (var t = this._timeline; t._timeline;) t = t._timeline;
            return t === e._rootFramesTimeline
        }, g.rawTime = function (e) {
            return e && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(e) - this._startTime) * this._timeScale
        }, n
    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (e, t, i) {
        var n = function (t) {
            e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
        },
            r = 1e-10,
            o = t._internals,
            s = o.lazyTweens,
            a = o.lazyRender,
            l = _gsScope._gsDefine.globals,
            c = new i(null, null, 1, 0),
            u = n.prototype = new e;
        return u.constructor = n, u.kill()._gc = !1, n.version = "1.20.2", u.invalidate = function () {
            return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
        }, u.addCallback = function (e, i, n, r) {
            return this.add(t.delayedCall(0, e, n, r), i)
        }, u.removeCallback = function (e, t) {
            if (e)
                if (null == t) this._kill(null, e);
                else
                    for (var i = this.getTweensOf(e, !1), n = i.length, r = this._parseTimeOrLabel(t); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
            return this
        }, u.removePause = function (t) {
            return this.removeCallback(e._internals.pauseCallback, t)
        }, u.tweenTo = function (e, i) {
            i = i || {};
            var n, r, o, s = {
                ease: c,
                useFrames: this.usesFrames(),
                immediateRender: !1
            },
                a = i.repeat && l.TweenMax || t;
            for (r in i) s[r] = i[r];
            return s.time = this._parseTimeOrLabel(e), n = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, o = new a(this, n, s), s.onStart = function () {
                o.target.paused(!0), o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || o, i.onStartParams || [])
            }, o
        }, u.tweenFromTo = function (e, t, i) {
            i = i || {}, e = this._parseTimeOrLabel(e), i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [e],
                callbackScope: this
            }, i.immediateRender = !1 !== i.immediateRender;
            var n = this.tweenTo(t, i);
            return n.duration(Math.abs(n.vars.time - e) / this._timeScale || .001)
        }, u.render = function (e, t, i) {
            this._gc && this._enabled(!0, !1);
            var n, o, l, c, u, h, f, d, p = this._dirty ? this.totalDuration() : this._totalDuration,
                m = this._duration,
                g = this._time,
                _ = this._totalTime,
                v = this._startTime,
                y = this._timeScale,
                w = this._rawPrevTime,
                b = this._paused,
                x = this._cycle;
            if (e >= p - 1e-7 && e >= 0) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, c = "onComplete", u = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= e && e >= -1e-7 || 0 > w || w === r) && w !== e && this._first && (u = !0, w > r && (c = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : r, this._yoyo && 0 != (1 & this._cycle) ? this._time = e = 0 : (this._time = m, e = m + 1e-4);
            else if (1e-7 > e)
                if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== g || 0 === m && w !== r && (w > 0 || 0 > e && w >= 0) && !this._locked) && (c = "onReverseComplete", o = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = o = !0, c = "onReverseComplete") : w >= 0 && this._first && (u = !0), this._rawPrevTime = e;
                else {
                    if (this._rawPrevTime = m || !t || e || this._rawPrevTime === e ? e : r, 0 === e && o)
                        for (n = this._first; n && 0 === n._startTime;) n._duration || (o = !1), n = n._next;
                    e = 0, this._initted || (u = !0)
                }
            else if (0 === m && 0 > w && (u = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (h = m + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && e >= _ && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, e = m + 1e-4) : this._time < 0 ? this._time = e = 0 : e = this._time)), this._hasPause && !this._forcingPlayhead && !t) {
                if ((e = this._time) >= g || this._repeat && x !== this._cycle)
                    for (n = this._first; n && n._startTime <= e && !f;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (f = n), n = n._next;
                else
                    for (n = this._last; n && n._startTime >= e && !f;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (f = n), n = n._prev;
                f && f._startTime < m && (this._time = e = f._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== x && !this._locked) {
                var T = this._yoyo && 0 != (1 & x),
                    C = T === (this._yoyo && 0 != (1 & this._cycle)),
                    S = this._totalTime,
                    k = this._cycle,
                    P = this._rawPrevTime,
                    O = this._time;
                if (this._totalTime = x * m, this._cycle < x ? T = !T : this._totalTime += m, this._time = g, this._rawPrevTime = 0 === m ? w - 1e-4 : w, this._cycle = x, this._locked = !0, g = T ? 0 : m, this.render(g, t, 0 === m), t || this._gc || this.vars.onRepeat && (this._cycle = k, this._locked = !1, this._callback("onRepeat")), g !== this._time) return;
                if (C && (this._cycle = x, this._locked = !0, g = T ? m + 1e-4 : -1e-4, this.render(g, !0, !1)), this._locked = !1, this._paused && !b) return;
                this._time = O, this._totalTime = S, this._cycle = k, this._rawPrevTime = P
            }
            if (this._time !== g && this._first || i || u || f) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== _ && e > 0 && (this._active = !0), 0 === _ && this.vars.onStart && (0 === this._totalTime && this._totalDuration || t || this._callback("onStart")), (d = this._time) >= g)
                    for (n = this._first; n && (l = n._next, d === this._time && (!this._paused || b));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (f === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = l;
                else
                    for (n = this._last; n && (l = n._prev, d === this._time && (!this._paused || b));) {
                        if (n._active || n._startTime <= g && !n._paused && !n._gc) {
                            if (f === n) {
                                for (f = n._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (e - f._startTime) * f._timeScale : (e - f._startTime) * f._timeScale, t, i), f = f._prev;
                                f = null, this.pause()
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)
                        }
                        n = l
                    }
                this._onUpdate && (t || (s.length && a(), this._callback("onUpdate"))), c && (this._locked || this._gc || (v === this._startTime || y !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (o && (s.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[c] && this._callback(c)))
            } else _ !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
        }, u.getActive = function (e, t, i) {
            null == e && (e = !0), null == t && (t = !0), null == i && (i = !1);
            var n, r, o = [],
                s = this.getChildren(e, t, i),
                a = 0,
                l = s.length;
            for (n = 0; l > n; n++)(r = s[n]).isActive() && (o[a++] = r);
            return o
        }, u.getLabelAfter = function (e) {
            e || 0 !== e && (e = this._time);
            var t, i = this.getLabelsArray(),
                n = i.length;
            for (t = 0; n > t; t++)
                if (i[t].time > e) return i[t].name;
            return null
        }, u.getLabelBefore = function (e) {
            null == e && (e = this._time);
            for (var t = this.getLabelsArray(), i = t.length; --i > -1;)
                if (t[i].time < e) return t[i].name;
            return null
        }, u.getLabelsArray = function () {
            var e, t = [],
                i = 0;
            for (e in this._labels) t[i++] = {
                time: this._labels[e],
                name: e
            };
            return t.sort(function (e, t) {
                return e.time - t.time
            }), t
        }, u.invalidate = function () {
            return this._locked = !1, e.prototype.invalidate.call(this)
        }, u.progress = function (e, t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration() || 0
        }, u.totalProgress = function (e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration() || 0
        }, u.totalDuration = function (t) {
            return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, u.time = function (e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
        }, u.repeat = function (e) {
            return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
        }, u.repeatDelay = function (e) {
            return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
        }, u.yoyo = function (e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }, u.currentLabel = function (e) {
            return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
        }, n
    }, !0), e = 180 / Math.PI, t = [], i = [], n = [], r = {}, o = _gsScope._gsDefine.globals, s = function (e, t, i, n) {
        i === n && (i = n - (n - t) / 1e6), e === t && (t = e + (i - e) / 1e6), this.a = e, this.b = t, this.c = i, this.d = n, this.da = n - e, this.ca = i - e, this.ba = t - e
    }, a = function (e, t, i, n) {
        var r = {
            a: e
        },
            o = {},
            s = {},
            a = {
                c: n
            },
            l = (e + t) / 2,
            c = (t + i) / 2,
            u = (i + n) / 2,
            h = (l + c) / 2,
            f = (c + u) / 2,
            d = (f - h) / 8;
        return r.b = l + (e - l) / 4, o.b = h + d, r.c = o.a = (r.b + o.b) / 2, o.c = s.a = (h + f) / 2, s.b = f - d, a.b = u + (n - u) / 4, s.c = a.a = (s.b + a.b) / 2, [r, o, s, a]
    }, l = function (e, r, o, s, l) {
        var c, u, h, f, d, p, m, g, _, v, y, w, b, x = e.length - 1,
            T = 0,
            C = e[0].a;
        for (c = 0; x > c; c++) u = (d = e[T]).a, h = d.d, f = e[T + 1].d, l ? (y = t[c], b = ((w = i[c]) + y) * r * .25 / (s ? .5 : n[c] || .5), g = h - ((p = h - (h - u) * (s ? .5 * r : 0 !== y ? b / y : 0)) + (((m = h + (f - h) * (s ? .5 * r : 0 !== w ? b / w : 0)) - p) * (3 * y / (y + w) + .5) / 4 || 0))) : g = h - ((p = h - (h - u) * r * .5) + (m = h + (f - h) * r * .5)) / 2, p += g, m += g, d.c = _ = p, d.b = 0 !== c ? C : C = d.a + .6 * (d.c - d.a), d.da = h - u, d.ca = _ - u, d.ba = C - u, o ? (v = a(u, C, _, h), e.splice(T, 1, v[0], v[1], v[2], v[3]), T += 4) : T++, C = m;
        (d = e[T]).b = C, d.c = C + .4 * (d.d - C), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = C - d.a, o && (v = a(d.a, C, d.c, d.d), e.splice(T, 1, v[0], v[1], v[2], v[3]))
    }, c = function (e, n, r, o) {
        var a, l, c, u, h, f, d = [];
        if (o)
            for (l = (e = [o].concat(e)).length; --l > -1;) "string" == typeof (f = e[l][n]) && "=" === f.charAt(1) && (e[l][n] = o[n] + Number(f.charAt(0) + f.substr(2)));
        if (0 > (a = e.length - 2)) return d[0] = new s(e[0][n], 0, 0, e[0][n]), d;
        for (l = 0; a > l; l++) c = e[l][n], u = e[l + 1][n], d[l] = new s(c, 0, 0, u), r && (h = e[l + 2][n], t[l] = (t[l] || 0) + (u - c) * (u - c), i[l] = (i[l] || 0) + (h - u) * (h - u));
        return d[l] = new s(e[l][n], 0, 0, e[l + 1][n]), d
    }, u = function (e, o, s, a, u, h) {
        var f, d, p, m, g, _, v, y, w = {},
            b = [],
            x = h || e[0];
        for (d in u = "string" == typeof u ? "," + u + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == o && (o = 1), e[0]) b.push(d);
        if (e.length > 1) {
            for (y = e[e.length - 1], v = !0, f = b.length; --f > -1;)
                if (d = b[f], Math.abs(x[d] - y[d]) > .05) {
                    v = !1;
                    break
                } v && (e = e.concat(), h && e.unshift(h), e.push(e[1]), h = e[e.length - 3])
        }
        for (t.length = i.length = n.length = 0, f = b.length; --f > -1;) d = b[f], r[d] = -1 !== u.indexOf("," + d + ","), w[d] = c(e, d, r[d], h);
        for (f = t.length; --f > -1;) t[f] = Math.sqrt(t[f]), i[f] = Math.sqrt(i[f]);
        if (!a) {
            for (f = b.length; --f > -1;)
                if (r[d])
                    for (_ = (p = w[b[f]]).length - 1, m = 0; _ > m; m++) g = p[m + 1].da / i[m] + p[m].da / t[m] || 0, n[m] = (n[m] || 0) + g * g;
            for (f = n.length; --f > -1;) n[f] = Math.sqrt(n[f])
        }
        for (f = b.length, m = s ? 4 : 1; --f > -1;) p = w[d = b[f]], l(p, o, s, a, r[d]), v && (p.splice(0, m), p.splice(p.length - m, m));
        return w
    }, h = function (e, t, i) {
        var n, r, o, a, l, c, u, h, f, d, p, m = {},
            g = "cubic" === (t = t || "soft") ? 3 : 2,
            _ = "soft" === t,
            v = [];
        if (_ && i && (e = [i].concat(e)), null == e || e.length < g + 1) throw "invalid Bezier data";
        for (f in e[0]) v.push(f);
        for (c = v.length; --c > -1;) {
            for (m[f = v[c]] = l = [], d = 0, h = e.length, u = 0; h > u; u++) n = null == i ? e[u][f] : "string" == typeof (p = e[u][f]) && "=" === p.charAt(1) ? i[f] + Number(p.charAt(0) + p.substr(2)) : Number(p), _ && u > 1 && h - 1 > u && (l[d++] = (n + l[d - 2]) / 2), l[d++] = n;
            for (h = d - g + 1, d = 0, u = 0; h > u; u += g) n = l[u], r = l[u + 1], o = l[u + 2], a = 2 === g ? 0 : l[u + 3], l[d++] = p = 3 === g ? new s(n, r, o, a) : new s(n, (2 * r + n) / 3, (2 * r + o) / 3, o);
            l.length = d
        }
        return m
    }, f = function (e, t, i) {
        for (var n, r, o, s, a, l, c, u, h, f, d, p = 1 / i, m = e.length; --m > -1;)
            for (o = (f = e[m]).a, s = f.d - o, a = f.c - o, l = f.b - o, n = r = 0, u = 1; i >= u; u++) n = r - (r = ((c = p * u) * c * s + 3 * (h = 1 - c) * (c * a + h * l)) * c), t[d = m * i + u - 1] = (t[d] || 0) + n * n
    }, d = function (e, t) {
        var i, n, r, o, s = [],
            a = [],
            l = 0,
            c = 0,
            u = (t = t >> 0 || 6) - 1,
            h = [],
            d = [];
        for (i in e) f(e[i], s, t);
        for (r = s.length, n = 0; r > n; n++) l += Math.sqrt(s[n]), d[o = n % t] = l, o === u && (c += l, h[o = n / t >> 0] = d, a[o] = c, l = 0, d = []);
        return {
            length: c,
            lengths: a,
            segments: h
        }
    }, p = _gsScope._gsDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.8",
        API: 2,
        global: !0,
        init: function (e, t, i) {
            this._target = e, t instanceof Array && (t = {
                values: t
            }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
            var n, r, o, s, a, l = t.values || [],
                c = {},
                f = l[0],
                p = t.autoRotate || i.vars.orientToBezier;
            for (n in this._autoRotate = p ? p instanceof Array ? p : [
                ["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]
            ] : null, f) this._props.push(n);
            for (o = this._props.length; --o > -1;) n = this._props[o], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof e[n], c[n] = r ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), a || c[n] !== l[0][n] && (a = c);
            if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? u(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, a) : h(l, t.type, c), this._segCount = this._beziers[n].length, this._timeRes) {
                var m = d(this._beziers, this._timeRes);
                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
            }
            if (p = this._autoRotate)
                for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), o = p.length; --o > -1;) {
                    for (s = 0; 3 > s; s++) n = p[o][s], this._func[n] = "function" == typeof e[n] && e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                    n = p[o][2], this._initialRotations[o] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                }
            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
        },
        set: function (t) {
            var i, n, r, o, s, a, l, c, u, h, f = this._segCount,
                d = this._func,
                p = this._target,
                m = t !== this._startRatio;
            if (this._timeRes) {
                if (u = this._lengths, h = this._curSeg, t *= this._length, r = this._li, t > this._l2 && f - 1 > r) {
                    for (c = f - 1; c > r && (this._l2 = u[++r]) <= t;);
                    this._l1 = u[r - 1], this._li = r, this._curSeg = h = this._segments[r], this._s2 = h[this._s1 = this._si = 0]
                } else if (t < this._l1 && r > 0) {
                    for (; r > 0 && (this._l1 = u[--r]) >= t;);
                    0 === r && t < this._l1 ? this._l1 = 0 : r++, this._l2 = u[r], this._li = r, this._curSeg = h = this._segments[r], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                }
                if (i = r, t -= this._l1, r = this._si, t > this._s2 && r < h.length - 1) {
                    for (c = h.length - 1; c > r && (this._s2 = h[++r]) <= t;);
                    this._s1 = h[r - 1], this._si = r
                } else if (t < this._s1 && r > 0) {
                    for (; r > 0 && (this._s1 = h[--r]) >= t;);
                    0 === r && t < this._s1 ? this._s1 = 0 : r++, this._s2 = h[r], this._si = r
                }
                a = (r + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
            } else a = (t - (i = 0 > t ? 0 : t >= 1 ? f - 1 : f * t >> 0) * (1 / f)) * f;
            for (n = 1 - a, r = this._props.length; --r > -1;) o = this._props[r], l = (a * a * (s = this._beziers[o][i]).da + 3 * n * (a * s.ca + n * s.ba)) * a + s.a, this._mod[o] && (l = this._mod[o](l, p)), d[o] ? p[o](l) : p[o] = l;
            if (this._autoRotate) {
                var g, _, v, y, w, b, x, T = this._autoRotate;
                for (r = T.length; --r > -1;) o = T[r][2], b = T[r][3] || 0, x = !0 === T[r][4] ? 1 : e, s = this._beziers[T[r][0]], g = this._beziers[T[r][1]], s && g && (s = s[i], g = g[i], _ = s.a + (s.b - s.a) * a, _ += ((y = s.b + (s.c - s.b) * a) - _) * a, y += (s.c + (s.d - s.c) * a - y) * a, v = g.a + (g.b - g.a) * a, v += ((w = g.b + (g.c - g.b) * a) - v) * a, w += (g.c + (g.d - g.c) * a - w) * a, l = m ? Math.atan2(w - v, y - _) * x + b : this._initialRotations[r], this._mod[o] && (l = this._mod[o](l, p)), d[o] ? p[o](l) : p[o] = l)
            }
        }
    }), m = p.prototype, p.bezierThrough = u, p.cubicToQuadratic = a, p._autoCSS = !0, p.quadraticToCubic = function (e, t, i) {
        return new s(e, (2 * t + e) / 3, (2 * t + i) / 3, i)
    }, p._cssRegister = function () {
        var e = o.CSSPlugin;
        if (e) {
            var t = e._internals,
                i = t._parseToProxy,
                n = t._setPluginRatio,
                r = t.CSSPropTween;
            t._registerComplexSpecialProp("bezier", {
                parser: function (e, t, o, s, a, l) {
                    t instanceof Array && (t = {
                        values: t
                    }), l = new p;
                    var c, u, h, f = t.values,
                        d = f.length - 1,
                        m = [],
                        g = {};
                    if (0 > d) return a;
                    for (c = 0; d >= c; c++) h = i(e, f[c], s, a, l, d !== c), m[c] = h.end;
                    for (u in t) g[u] = t[u];
                    return g.values = m, (a = new r(e, "bezier", 0, 0, h.pt, 2)).data = h, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (c = !0 === g.autoRotate ? 0 : Number(g.autoRotate), g.autoRotate = null != h.end.left ? [
                        ["left", "top", "rotation", c, !1]
                    ] : null != h.end.x && [
                        ["x", "y", "rotation", c, !1]
                    ]), g.autoRotate && (s._transform || s._enableTransforms(!1), h.autoRotate = s._target._gsTransform, h.proxy.rotation = h.autoRotate.rotation || 0, s._overwriteProps.push("rotation")), l._onInitTween(h.proxy, g, s._tween), a
                }
            })
        }
    }, m._mod = function (e) {
        for (var t, i = this._overwriteProps, n = i.length; --n > -1;)(t = e[i[n]]) && "function" == typeof t && (this._mod[i[n]] = t)
    }, m._kill = function (e) {
        var t, i, n = this._props;
        for (t in this._beziers)
            if (t in e)
                for (delete this._beziers[t], delete this._func[t], i = n.length; --i > -1;) n[i] === t && n.splice(i, 1);
        if (n = this._autoRotate)
            for (i = n.length; --i > -1;) e[n[i][2]] && n.splice(i, 1);
        return this._super._kill.call(this, e)
    }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (e, t) {
        var i, n, r, o, s = function () {
            e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
        },
            a = _gsScope._gsDefine.globals,
            l = {},
            c = s.prototype = new e("css");
        c.constructor = s, s.version = "1.20.0", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", s.defaultSmoothOrigin = !0, c = "px", s.suffixMap = {
            top: c,
            right: c,
            bottom: c,
            left: c,
            width: c,
            height: c,
            fontSize: c,
            padding: c,
            margin: c,
            perspective: c,
            lineHeight: ""
        };
        var u, h, f, d, p, m, g, _, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
            y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            x = /(?:\d|\-|\+|=|#|\.)*/g,
            T = /opacity *= *([^)]*)/i,
            C = /opacity:([^;]*)/i,
            S = /alpha\(opacity *=.+?\)/i,
            k = /^(rgb|hsl)/,
            P = /([A-Z])/g,
            O = /-([a-z])/gi,
            E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            M = function (e, t) {
                return t.toUpperCase()
            },
            $ = /(?:Left|Right|Width)/i,
            A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            L = /,(?=[^\)]*(?:\(|$))/gi,
            R = /[\s,\(]/i,
            j = Math.PI / 180,
            I = 180 / Math.PI,
            F = {},
            N = {
                style: {}
            },
            z = _gsScope.document || {
                createElement: function () {
                    return N
                }
            },
            H = function (e, t) {
                return z.createElementNS ? z.createElementNS(t || "http://www.w3.org/1999/xhtml", e) : z.createElement(e)
            },
            B = H("div"),
            q = H("img"),
            W = s._internals = {
                _specialProps: l
            },
            X = (_gsScope.navigator || {}).userAgent || "",
            Y = function () {
                var e = X.indexOf("Android"),
                    t = H("a");
                return f = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (-1 === e || parseFloat(X.substr(e + 8, 2)) > 3), p = f && parseFloat(X.substr(X.indexOf("Version/") + 8, 2)) < 6, d = -1 !== X.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X)) && (m = parseFloat(RegExp.$1)), !!t && (t.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(t.style.opacity))
            }(),
            U = function (e) {
                return T.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            },
            V = function (e) {
                _gsScope.console && console.log(e)
            },
            G = "",
            Q = "",
            K = function (e, t) {
                var i, n, r = (t = t || B).style;
                if (void 0 !== r[e]) return e;
                for (e = e.charAt(0).toUpperCase() + e.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + e];);
                return n >= 0 ? (G = "-" + (Q = 3 === n ? "ms" : i[n]).toLowerCase() + "-", Q + e) : null
            },
            Z = z.defaultView ? z.defaultView.getComputedStyle : function () { },
            J = s.getStyle = function (e, t, i, n, r) {
                var o;
                return Y || "opacity" !== t ? (!n && e.style[t] ? o = e.style[t] : (i = i || Z(e)) ? o = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(P, "-$1").toLowerCase()) : e.currentStyle && (o = e.currentStyle[t]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : U(e)
            },
            ee = W.convertToPixels = function (e, i, n, r, o) {
                if ("px" === r || !r && "lineHeight" !== i) return n;
                if ("auto" === r || !n) return 0;
                var a, l, c, u = $.test(i),
                    h = e,
                    f = B.style,
                    d = 0 > n,
                    p = 1 === n;
                if (d && (n = -n), p && (n *= 100), "lineHeight" !== i || r)
                    if ("%" === r && -1 !== i.indexOf("border")) a = n / 100 * (u ? e.clientWidth : e.clientHeight);
                    else {
                        if (f.cssText = "border:0 solid red;position:" + J(e, "position") + ";line-height:0;", "%" !== r && h.appendChild && "v" !== r.charAt(0) && "rem" !== r) f[u ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                        else {
                            if (h = e.parentNode || z.body, -1 !== J(h, "display").indexOf("flex") && (f.position = "absolute"), l = h._gsCache, c = t.ticker.frame, l && u && l.time === c) return l.width * n / 100;
                            f[u ? "width" : "height"] = n + r
                        }
                        h.appendChild(B), a = parseFloat(B[u ? "offsetWidth" : "offsetHeight"]), h.removeChild(B), u && "%" === r && !1 !== s.cacheWidths && ((l = h._gsCache = h._gsCache || {}).time = c, l.width = a / n * 100), 0 !== a || o || (a = ee(e, i, n, r, !0))
                    }
                else l = Z(e).lineHeight, e.style.lineHeight = n, a = parseFloat(Z(e).lineHeight), e.style.lineHeight = l;
                return p && (a /= 100), d ? -a : a
            },
            te = W.calculateOffset = function (e, t, i) {
                if ("absolute" !== J(e, "position", i)) return 0;
                var n = "left" === t ? "Left" : "Top",
                    r = J(e, "margin" + n, i);
                return e["offset" + n] - (ee(e, t, parseFloat(r), r.replace(x, "")) || 0)
            },
            ie = function (e, t) {
                var i, n, r, o = {};
                if (t = t || Z(e, null))
                    if (i = t.length)
                        for (; --i > -1;)(-1 === (r = t[i]).indexOf("-transform") || Ee === r) && (o[r.replace(O, M)] = t.getPropertyValue(r));
                    else
                        for (i in t) (-1 === i.indexOf("Transform") || Oe === i) && (o[i] = t[i]);
                else if (t = e.currentStyle || e.style)
                    for (i in t) "string" == typeof i && void 0 === o[i] && (o[i.replace(O, M)] = t[i]);
                return Y || (o.opacity = U(e)), n = Be(e, t, !1), o.rotation = n.rotation, o.skewX = n.skewX, o.scaleX = n.scaleX, o.scaleY = n.scaleY, o.x = n.x, o.y = n.y, $e && (o.z = n.z, o.rotationX = n.rotationX, o.rotationY = n.rotationY, o.scaleZ = n.scaleZ), o.filters && delete o.filters, o
            },
            ne = function (e, t, i, n, r) {
                var o, s, a, l = {},
                    c = e.style;
                for (s in i) "cssText" !== s && "length" !== s && isNaN(s) && (t[s] !== (o = i[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof t[s] || "" === t[s].replace(b, "") ? o : 0 : te(e, s), void 0 !== c[s] && (a = new ve(c, s, c[s], a)));
                if (n)
                    for (s in n) "className" !== s && (l[s] = n[s]);
                return {
                    difs: l,
                    firstMPT: a
                }
            },
            re = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            },
            oe = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            se = function (e, t, i) {
                if ("svg" === (e.nodeName + "").toLowerCase()) return (i || Z(e))[t] || 0;
                if (e.getCTM && Ne(e)) return e.getBBox()[t] || 0;
                var n = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                    r = re[t],
                    o = r.length;
                for (i = i || Z(e, null); --o > -1;) n -= parseFloat(J(e, "padding" + r[o], i, !0)) || 0, n -= parseFloat(J(e, "border" + r[o] + "Width", i, !0)) || 0;
                return n
            },
            ae = function (e, t) {
                if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
                (null == e || "" === e) && (e = "0 0");
                var i, n = e.split(" "),
                    r = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : n[0],
                    o = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : n[1];
                if (n.length > 3 && !t) {
                    for (n = e.split(", ").join(",").split(","), e = [], i = 0; i < n.length; i++) e.push(ae(n[i]));
                    return e.join(",")
                }
                return null == o ? o = "center" === r ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), e = r + " " + o + (n.length > 2 ? " " + n[2] : ""), t && (t.oxp = -1 !== r.indexOf("%"), t.oyp = -1 !== o.indexOf("%"), t.oxr = "=" === r.charAt(1), t.oyr = "=" === o.charAt(1), t.ox = parseFloat(r.replace(b, "")), t.oy = parseFloat(o.replace(b, "")), t.v = e), t || e
            },
            le = function (e, t) {
                return "function" == typeof e && (e = e(_, g)), "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
            },
            ce = function (e, t) {
                return "function" == typeof e && (e = e(_, g)), null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
            },
            ue = function (e, t, i, n) {
                var r, o, s, a, l;
                return "function" == typeof e && (e = e(_, g)), null == e ? a = t : "number" == typeof e ? a = e : (r = 360, o = e.split("_"), s = ((l = "=" === e.charAt(1)) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === e.indexOf("rad") ? 1 : I) - (l ? 0 : t), o.length && (n && (n[i] = t + s), -1 !== e.indexOf("short") && ((s %= r) !== s % 180 && (s = 0 > s ? s + r : s - r)), -1 !== e.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * r) % r - (s / r | 0) * r : -1 !== e.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * r) % r - (s / r | 0) * r)), a = t + s), 1e-6 > a && a > -1e-6 && (a = 0), a
            },
            he = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            fe = function (e, t, i) {
                return 255 * (1 > 6 * (e = 0 > e ? e + 1 : e > 1 ? e - 1 : e) ? t + (i - t) * e * 6 : .5 > e ? i : 2 > 3 * e ? t + (i - t) * (2 / 3 - e) * 6 : t) + .5 | 0
            },
            de = s.parseColor = function (e, t) {
                var i, n, r, o, s, a, l, c, u, h, f;
                if (e)
                    if ("number" == typeof e) i = [e >> 16, e >> 8 & 255, 255 & e];
                    else {
                        if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), he[e]) i = he[e];
                        else if ("#" === e.charAt(0)) 4 === e.length && (n = e.charAt(1), r = e.charAt(2), o = e.charAt(3), e = "#" + n + n + r + r + o + o), i = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e];
                        else if ("hsl" === e.substr(0, 3))
                            if (i = f = e.match(v), t) {
                                if (-1 !== e.indexOf("=")) return e.match(y)
                            } else s = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, n = 2 * (l = Number(i[2]) / 100) - (r = .5 >= l ? l * (a + 1) : l + a - l * a), i.length > 3 && (i[3] = Number(e[3])), i[0] = fe(s + 1 / 3, n, r), i[1] = fe(s, n, r), i[2] = fe(s - 1 / 3, n, r);
                        else i = e.match(v) || he.transparent;
                        i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                    }
                else i = he.black;
                return t && !f && (n = i[0] / 255, r = i[1] / 255, o = i[2] / 255, l = ((c = Math.max(n, r, o)) + (u = Math.min(n, r, o))) / 2, c === u ? s = a = 0 : (h = c - u, a = l > .5 ? h / (2 - c - u) : h / (c + u), s = c === n ? (r - o) / h + (o > r ? 6 : 0) : c === r ? (o - n) / h + 2 : (n - r) / h + 4, s *= 60), i[0] = s + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
            },
            pe = function (e, t) {
                var i, n, r, o = e.match(me) || [],
                    s = 0,
                    a = "";
                if (!o.length) return e;
                for (i = 0; i < o.length; i++) n = o[i], s += (r = e.substr(s, e.indexOf(n, s) - s)).length + n.length, 3 === (n = de(n, t)).length && n.push(1), a += r + (t ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                return a + e.substr(s)
            },
            me = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (c in he) me += "|" + c + "\\b";
        me = new RegExp(me + ")", "gi"), s.colorStringFilter = function (e) {
            var t, i = e[0] + " " + e[1];
            me.test(i) && (t = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), e[0] = pe(e[0], t), e[1] = pe(e[1], t)), me.lastIndex = 0
        }, t.defaultStringFilter || (t.defaultStringFilter = s.colorStringFilter);
        var ge = function (e, t, i, n) {
            if (null == e) return function (e) {
                return e
            };
            var r, o = t ? (e.match(me) || [""])[0] : "",
                s = e.split(o).join("").match(w) || [],
                a = e.substr(0, e.indexOf(s[0])),
                l = ")" === e.charAt(e.length - 1) ? ")" : "",
                c = -1 !== e.indexOf(" ") ? " " : ",",
                u = s.length,
                h = u > 0 ? s[0].replace(v, "") : "";
            return u ? r = t ? function (e) {
                var t, f, d, p;
                if ("number" == typeof e) e += h;
                else if (n && L.test(e)) {
                    for (p = e.replace(L, "|").split("|"), d = 0; d < p.length; d++) p[d] = r(p[d]);
                    return p.join(",")
                }
                if (t = (e.match(me) || [o])[0], d = (f = e.split(t).join("").match(w) || []).length, u > d--)
                    for (; ++d < u;) f[d] = i ? f[(d - 1) / 2 | 0] : s[d];
                return a + f.join(c) + c + t + l + (-1 !== e.indexOf("inset") ? " inset" : "")
            } : function (e) {
                var t, o, f;
                if ("number" == typeof e) e += h;
                else if (n && L.test(e)) {
                    for (o = e.replace(L, "|").split("|"), f = 0; f < o.length; f++) o[f] = r(o[f]);
                    return o.join(",")
                }
                if (f = (t = e.match(w) || []).length, u > f--)
                    for (; ++f < u;) t[f] = i ? t[(f - 1) / 2 | 0] : s[f];
                return a + t.join(c) + l
            } : function (e) {
                return e
            }
        },
            _e = function (e) {
                return e = e.split(","),
                    function (t, i, n, r, o, s, a) {
                        var l, c = (i + "").split(" ");
                        for (a = {}, l = 0; 4 > l; l++) a[e[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                        return r.parse(t, a, o, s)
                    }
            },
            ve = (W._setPluginRatio = function (e) {
                this.plugin.setRatio(e);
                for (var t, i, n, r, o, s = this.data, a = s.proxy, l = s.firstMPT; l;) t = a[l.v], l.r ? t = Math.round(t) : 1e-6 > t && t > -1e-6 && (t = 0), l.t[l.p] = t, l = l._next;
                if (s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod(a.rotation, this.t) : a.rotation), 1 === e || 0 === e)
                    for (l = s.firstMPT, o = 1 === e ? "e" : "b"; l;) {
                        if ((i = l.t).type) {
                            if (1 === i.type) {
                                for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                i[o] = r
                            }
                        } else i[o] = i.s + i.xs0;
                        l = l._next
                    }
            }, function (e, t, i, n, r) {
                this.t = e, this.p = t, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
            }),
            ye = (W._parseToProxy = function (e, t, i, n, r, o) {
                var s, a, l, c, u, h = n,
                    f = {},
                    d = {},
                    p = i._transform,
                    m = F;
                for (i._transform = null, F = t, n = u = i.parse(e, t, n, r), F = m, o && (i._transform = p, h && (h._prev = null, h._prev && (h._prev._next = null))); n && n !== h;) {
                    if (n.type <= 1 && (d[a = n.p] = n.s + n.c, f[a] = n.s, o || (c = new ve(n, "s", a, c, n.r), n.c = 0), 1 === n.type))
                        for (s = n.l; --s > 0;) l = "xn" + s, d[a = n.p + "_" + l] = n.data[l], f[a] = n[l], o || (c = new ve(n, l, a, c, n.rxp[l]));
                    n = n._next
                }
                return {
                    proxy: f,
                    end: d,
                    firstMPT: c,
                    pt: u
                }
            }, W.CSSPropTween = function (e, t, n, r, s, a, l, c, u, h, f) {
                this.t = e, this.p = t, this.s = n, this.c = r, this.n = l || t, e instanceof ye || o.push(this.n), this.r = c, this.type = a || 0, u && (this.pr = u, i = !0), this.b = void 0 === h ? n : h, this.e = void 0 === f ? n + r : f, s && (this._next = s, s._prev = this)
            }),
            we = function (e, t, i, n, r, o) {
                var s = new ye(e, t, i, n - i, r, -1, o);
                return s.b = i, s.e = s.xs0 = n, s
            },
            be = s.parseComplex = function (e, t, i, n, r, o, a, l, c, h) {
                i = i || o || "", "function" == typeof n && (n = n(_, g)), a = new ye(e, t, 0, 0, a, h ? 2 : 1, null, !1, l, i, n), n += "", r && me.test(n + i) && (n = [i, n], s.colorStringFilter(n), i = n[0], n = n[1]);
                var f, d, p, m, w, b, x, T, C, S, k, P, O, E = i.split(", ").join(",").split(" "),
                    M = n.split(", ").join(",").split(" "),
                    $ = E.length,
                    A = !1 !== u;
                for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (E = E.join(" ").replace(L, ", ").split(" "), M = M.join(" ").replace(L, ", ").split(" "), $ = E.length), $ !== M.length && ($ = (E = (o || "").split(" ")).length), a.plugin = c, a.setRatio = h, me.lastIndex = 0, f = 0; $ > f; f++)
                    if (m = E[f], w = M[f], (T = parseFloat(m)) || 0 === T) a.appendXtra("", T, le(w, T), w.replace(y, ""), A && -1 !== w.indexOf("px"), !0);
                    else if (r && me.test(m)) P = ")" + ((P = w.indexOf(")") + 1) ? w.substr(P) : ""), O = -1 !== w.indexOf("hsl") && Y, S = w, m = de(m, O), w = de(w, O), (C = m.length + w.length > 6) && !Y && 0 === w[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(M[f]).join("transparent")) : (Y || (C = !1), O ? a.appendXtra(S.substr(0, S.indexOf("hsl")) + (C ? "hsla(" : "hsl("), m[0], le(w[0], m[0]), ",", !1, !0).appendXtra("", m[1], le(w[1], m[1]), "%,", !1).appendXtra("", m[2], le(w[2], m[2]), C ? "%," : "%" + P, !1) : a.appendXtra(S.substr(0, S.indexOf("rgb")) + (C ? "rgba(" : "rgb("), m[0], w[0] - m[0], ",", !0, !0).appendXtra("", m[1], w[1] - m[1], ",", !0).appendXtra("", m[2], w[2] - m[2], C ? "," : P, !0), C && (m = m.length < 4 ? 1 : m[3], a.appendXtra("", m, (w.length < 4 ? 1 : w[3]) - m, P, !1))), me.lastIndex = 0;
                    else if (b = m.match(v)) {
                        if (!(x = w.match(y)) || x.length !== b.length) return a;
                        for (p = 0, d = 0; d < b.length; d++) k = b[d], S = m.indexOf(k, p), a.appendXtra(m.substr(p, S - p), Number(k), le(x[d], k), "", A && "px" === m.substr(S + k.length, 2), 0 === d), p = S + k.length;
                        a["xs" + a.l] += m.substr(p)
                    } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + w : w;
                if (-1 !== n.indexOf("=") && a.data) {
                    for (P = a.xs0 + a.data.s, f = 1; f < a.l; f++) P += a["xs" + f] + a.data["xn" + f];
                    a.e = P + a["xs" + f]
                }
                return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
            },
            xe = 9;
        for ((c = ye.prototype).l = c.pr = 0; --xe > 0;) c["xn" + xe] = 0, c["xs" + xe] = "";
        c.xs0 = "", c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null, c.appendXtra = function (e, t, i, n, r, o) {
            var s = this,
                a = s.l;
            return s["xs" + a] += o && (a || s["xs" + a]) ? " " + e : e || "", i || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = n || "", a > 0 ? (s.data["xn" + a] = t + i, s.rxp["xn" + a] = r, s["xn" + a] = t, s.plugin || (s.xfirst = new ye(s, "xn" + a, t, i, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                s: t + i
            }, s.rxp = {}, s.s = t, s.c = i, s.r = r, s)) : (s["xs" + a] += t + (n || ""), s)
        };
        var Te = function (e, t) {
            t = t || {}, this.p = t.prefix && K(e) || e, l[e] = l[this.p] = this, this.format = t.formatter || ge(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
        },
            Ce = W._registerComplexSpecialProp = function (e, t, i) {
                "object" != typeof t && (t = {
                    parser: i
                });
                var n, r = e.split(","),
                    o = t.defaultValue;
                for (i = i || [o], n = 0; n < r.length; n++) t.prefix = 0 === n && t.prefix, t.defaultValue = i[n] || o, new Te(r[n], t)
            },
            Se = W._registerPluginProp = function (e) {
                if (!l[e]) {
                    var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                    Ce(e, {
                        parser: function (e, i, n, r, o, s, c) {
                            var u = a.com.greensock.plugins[t];
                            return u ? (u._cssRegister(), l[n].parse(e, i, n, r, o, s, c)) : (V("Error: " + t + " js file not loaded."), o)
                        }
                    })
                }
            };
        (c = Te.prototype).parseComplex = function (e, t, i, n, r, o) {
            var s, a, l, c, u, h, f = this.keyword;
            if (this.multi && (L.test(i) || L.test(t) ? (a = t.replace(L, "|").split("|"), l = i.replace(L, "|").split("|")) : f && (a = [t], l = [i])), l) {
                for (c = l.length > a.length ? l.length : a.length, s = 0; c > s; s++) t = a[s] = a[s] || this.dflt, i = l[s] = l[s] || this.dflt, f && ((u = t.indexOf(f)) !== (h = i.indexOf(f)) && (-1 === h ? a[s] = a[s].split(f).join("") : -1 === u && (a[s] += " " + f)));
                t = a.join(", "), i = l.join(", ")
            }
            return be(e, this.p, t, i, this.clrs, this.dflt, n, this.pr, r, o)
        }, c.parse = function (e, t, i, n, o, s, a) {
            return this.parseComplex(e.style, this.format(J(e, this.p, r, !1, this.dflt)), this.format(t), o, s)
        }, s.registerSpecialProp = function (e, t, i) {
            Ce(e, {
                parser: function (e, n, r, o, s, a, l) {
                    var c = new ye(e, r, 0, 0, s, 2, r, !1, i);
                    return c.plugin = a, c.setRatio = t(e, n, o._tween, r), c
                },
                priority: i
            })
        }, s.useSVGTransformAttr = !0;
        var ke, Pe = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
            Oe = K("transform"),
            Ee = G + "transform",
            Me = K("transformOrigin"),
            $e = null !== K("perspective"),
            Ae = W.Transform = function () {
                this.perspective = parseFloat(s.defaultTransformPerspective) || 0, this.force3D = !(!1 === s.defaultForce3D || !$e) && (s.defaultForce3D || "auto")
            },
            De = _gsScope.SVGElement,
            Le = function (e, t, i) {
                var n, r = z.createElementNS("http://www.w3.org/2000/svg", e),
                    o = /([a-z])([A-Z])/g;
                for (n in i) r.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
                return t.appendChild(r), r
            },
            Re = z.documentElement || {},
            je = function () {
                var e, t, i, n = m || /Android/i.test(X) && !_gsScope.chrome;
                return z.createElementNS && !n && (e = Le("svg", Re), i = (t = Le("rect", e, {
                    width: 100,
                    height: 50,
                    x: 100
                })).getBoundingClientRect().width, t.style[Me] = "50% 50%", t.style[Oe] = "scaleX(0.5)", n = i === t.getBoundingClientRect().width && !(d && $e), Re.removeChild(e)), n
            }(),
            Ie = function (e, t, i, n, r, o) {
                var a, l, c, u, h, f, d, p, m, g, _, v, y, w, b = e._gsTransform,
                    x = He(e, !0);
                b && (y = b.xOrigin, w = b.yOrigin), (!n || (a = n.split(" ")).length < 2) && (0 === (d = e.getBBox()).x && 0 === d.y && d.width + d.height === 0 && (d = {
                    x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0,
                    y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0,
                    width: 0,
                    height: 0
                }), a = [(-1 !== (t = ae(t).split(" "))[0].indexOf("%") ? parseFloat(t[0]) / 100 * d.width : parseFloat(t[0])) + d.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * d.height : parseFloat(t[1])) + d.y]), i.xOrigin = u = parseFloat(a[0]), i.yOrigin = h = parseFloat(a[1]), n && x !== ze && (f = x[0], d = x[1], p = x[2], m = x[3], g = x[4], _ = x[5], (v = f * m - d * p) && (l = u * (m / v) + h * (-p / v) + (p * _ - m * g) / v, c = u * (-d / v) + h * (f / v) - (f * _ - d * g) / v, u = i.xOrigin = a[0] = l, h = i.yOrigin = a[1] = c)), b && (o && (i.xOffset = b.xOffset, i.yOffset = b.yOffset, b = i), r || !1 !== r && !1 !== s.defaultSmoothOrigin ? (l = u - y, c = h - w, b.xOffset += l * x[0] + c * x[2] - l, b.yOffset += l * x[1] + c * x[3] - c) : b.xOffset = b.yOffset = 0), o || e.setAttribute("data-svg-origin", a.join(" "))
            },
            Fe = function (e) {
                var t, i = H("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                    n = this.parentNode,
                    r = this.nextSibling,
                    o = this.style.cssText;
                if (Re.appendChild(i), i.appendChild(this), this.style.display = "block", e) try {
                    t = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Fe
                } catch (e) { } else this._originalGetBBox && (t = this._originalGetBBox());
                return r ? n.insertBefore(this, r) : n.appendChild(this), Re.removeChild(i), this.style.cssText = o, t
            },
            Ne = function (e) {
                return !(!(De && e.getCTM && function (e) {
                    try {
                        return e.getBBox()
                    } catch (t) {
                        return Fe.call(e, !0)
                    }
                }(e)) || e.parentNode && !e.ownerSVGElement)
            },
            ze = [1, 0, 0, 1, 0, 0],
            He = function (e, t) {
                var i, n, r, o, s, a, l = e._gsTransform || new Ae,
                    c = e.style;
                if (Oe ? n = J(e, Ee, null, !0) : e.currentStyle && (n = (n = e.currentStyle.filter.match(A)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !Oe || !(a = "none" === Z(e).display) && e.parentNode || (a && (o = c.display, c.display = "block"), e.parentNode || (s = 1, Re.appendChild(e)), i = !(n = J(e, Ee, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, o ? c.display = o : a && Ye(c, "display"), s && Re.removeChild(e)), (l.svg || e.getCTM && Ne(e)) && (i && -1 !== (c[Oe] + "").indexOf("matrix") && (n = c[Oe], i = 0), r = e.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return ze;
                for (r = (n || "").match(v) || [], xe = r.length; --xe > -1;) o = Number(r[xe]), r[xe] = (s = o - (o |= 0)) ? (1e5 * s + (0 > s ? -.5 : .5) | 0) / 1e5 + o : o;
                return t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
            },
            Be = W.getTransform = function (e, i, n, r) {
                if (e._gsTransform && n && !r) return e._gsTransform;
                var o, a, l, c, u, h, f = n && e._gsTransform || new Ae,
                    d = f.scaleX < 0,
                    p = 2e-5,
                    m = 1e5,
                    g = $e && (parseFloat(J(e, Me, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin) || 0,
                    _ = parseFloat(s.defaultTransformPerspective) || 0;
                if (f.svg = !(!e.getCTM || !Ne(e)), f.svg && (Ie(e, J(e, Me, i, !1, "50% 50%") + "", f, e.getAttribute("data-svg-origin")), ke = s.useSVGTransformAttr || je), (o = He(e)) !== ze) {
                    if (16 === o.length) {
                        var v, y, w, b, x, T = o[0],
                            C = o[1],
                            S = o[2],
                            k = o[3],
                            P = o[4],
                            O = o[5],
                            E = o[6],
                            M = o[7],
                            $ = o[8],
                            A = o[9],
                            D = o[10],
                            L = o[12],
                            R = o[13],
                            j = o[14],
                            F = o[11],
                            N = Math.atan2(E, D);
                        f.zOrigin && (L = $ * (j = -f.zOrigin) - o[12], R = A * j - o[13], j = D * j + f.zOrigin - o[14]), f.rotationX = N * I, N && (v = P * (b = Math.cos(-N)) + $ * (x = Math.sin(-N)), y = O * b + A * x, w = E * b + D * x, $ = P * -x + $ * b, A = O * -x + A * b, D = E * -x + D * b, F = M * -x + F * b, P = v, O = y, E = w), N = Math.atan2(-S, D), f.rotationY = N * I, N && (y = C * (b = Math.cos(-N)) - A * (x = Math.sin(-N)), w = S * b - D * x, A = C * x + A * b, D = S * x + D * b, F = k * x + F * b, T = v = T * b - $ * x, C = y, S = w), N = Math.atan2(C, T), f.rotation = N * I, N && (v = T * (b = Math.cos(N)) + C * (x = Math.sin(N)), y = P * b + O * x, w = $ * b + A * x, C = C * b - T * x, O = O * b - P * x, A = A * b - $ * x, T = v, P = y, $ = w), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), N = Math.atan2(P, O), f.scaleX = (Math.sqrt(T * T + C * C + S * S) * m + .5 | 0) / m, f.scaleY = (Math.sqrt(O * O + E * E) * m + .5 | 0) / m, f.scaleZ = (Math.sqrt($ * $ + A * A + D * D) * m + .5 | 0) / m, T /= f.scaleX, P /= f.scaleY, C /= f.scaleX, O /= f.scaleY, Math.abs(N) > p ? (f.skewX = N * I, P = 0, "simple" !== f.skewType && (f.scaleY *= 1 / Math.cos(N))) : f.skewX = 0, f.perspective = F ? 1 / (0 > F ? -F : F) : 0, f.x = L, f.y = R, f.z = j, f.svg && (f.x -= f.xOrigin - (f.xOrigin * T - f.yOrigin * P), f.y -= f.yOrigin - (f.yOrigin * C - f.xOrigin * O))
                    } else if (!$e || r || !o.length || f.x !== o[4] || f.y !== o[5] || !f.rotationX && !f.rotationY) {
                        var z = o.length >= 6,
                            H = z ? o[0] : 1,
                            B = o[1] || 0,
                            q = o[2] || 0,
                            W = z ? o[3] : 1;
                        f.x = o[4] || 0, f.y = o[5] || 0, l = Math.sqrt(H * H + B * B), c = Math.sqrt(W * W + q * q), u = H || B ? Math.atan2(B, H) * I : f.rotation || 0, h = q || W ? Math.atan2(q, W) * I + u : f.skewX || 0, f.scaleX = l, f.scaleY = c, f.rotation = u, f.skewX = h, $e && (f.rotationX = f.rotationY = f.z = 0, f.perspective = _, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * H + f.yOrigin * q), f.y -= f.yOrigin - (f.xOrigin * B + f.yOrigin * W))
                    }
                    for (a in Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (d ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180)), f.zOrigin = g, f) f[a] < p && f[a] > -p && (f[a] = 0)
                }
                return n && (e._gsTransform = f, f.svg && (ke && e.style[Oe] ? t.delayedCall(.001, function () {
                    Ye(e.style, Oe)
                }) : !ke && e.getAttribute("transform") && t.delayedCall(.001, function () {
                    e.removeAttribute("transform")
                }))), f
            },
            qe = function (e) {
                var t, i, n = this.data,
                    r = -n.rotation * j,
                    o = r + n.skewX * j,
                    s = 1e5,
                    a = (Math.cos(r) * n.scaleX * s | 0) / s,
                    l = (Math.sin(r) * n.scaleX * s | 0) / s,
                    c = (Math.sin(o) * -n.scaleY * s | 0) / s,
                    u = (Math.cos(o) * n.scaleY * s | 0) / s,
                    h = this.t.style,
                    f = this.t.currentStyle;
                if (f) {
                    i = l, l = -c, c = -i, t = f.filter, h.filter = "";
                    var d, p, g = this.t.offsetWidth,
                        _ = this.t.offsetHeight,
                        v = "absolute" !== f.position,
                        y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + c + ", M22=" + u,
                        w = n.x + g * n.xPercent / 100,
                        b = n.y + _ * n.yPercent / 100;
                    if (null != n.ox && (w += (d = (n.oxp ? g * n.ox * .01 : n.ox) - g / 2) - (d * a + (p = (n.oyp ? _ * n.oy * .01 : n.oy) - _ / 2) * l), b += p - (d * c + p * u)), v ? y += ", Dx=" + ((d = g / 2) - (d * a + (p = _ / 2) * l) + w) + ", Dy=" + (p - (d * c + p * u) + b) + ")" : y += ", sizingMethod='auto expand')", -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? h.filter = t.replace(D, y) : h.filter = y + " " + t, (0 === e || 1 === e) && 1 === a && 0 === l && 0 === c && 1 === u && (v && -1 === y.indexOf("Dx=0, Dy=0") || T.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && h.removeAttribute("filter")), !v) {
                        var C, S, k, P = 8 > m ? 1 : -1;
                        for (d = n.ieOffsetX || 0, p = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * _)) / 2 + w), n.ieOffsetY = Math.round((_ - ((0 > u ? -u : u) * _ + (0 > c ? -c : c) * g)) / 2 + b), xe = 0; 4 > xe; xe++) k = (i = -1 !== (C = f[S = oe[xe]]).indexOf("px") ? parseFloat(C) : ee(this.t, S, parseFloat(C), C.replace(x, "")) || 0) !== n[S] ? 2 > xe ? -n.ieOffsetX : -n.ieOffsetY : 2 > xe ? d - n.ieOffsetX : p - n.ieOffsetY, h[S] = (n[S] = Math.round(i - k * (0 === xe || 2 === xe ? 1 : P))) + "px"
                    }
                }
            },
            We = W.set3DTransformRatio = W.setTransformRatio = function (e) {
                var t, i, n, r, o, s, a, l, c, u, h, f, p, m, g, _, v, y, w, b, x, T, C, S = this.data,
                    k = this.t.style,
                    P = S.rotation,
                    O = S.rotationX,
                    E = S.rotationY,
                    M = S.scaleX,
                    $ = S.scaleY,
                    A = S.scaleZ,
                    D = S.x,
                    L = S.y,
                    R = S.z,
                    I = S.svg,
                    F = S.perspective,
                    N = S.force3D,
                    z = S.skewY,
                    H = S.skewX;
                if (z && (H += z, P += z), !((1 !== e && 0 !== e || "auto" !== N || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && N || R || F || E || O || 1 !== A) || ke && I || !$e) P || H || I ? (P *= j, T = H * j, C = 1e5, i = Math.cos(P) * M, o = Math.sin(P) * M, n = Math.sin(P - T) * -$, s = Math.cos(P - T) * $, T && "simple" === S.skewType && (t = Math.tan(T - z * j), n *= t = Math.sqrt(1 + t * t), s *= t, z && (t = Math.tan(z * j), i *= t = Math.sqrt(1 + t * t), o *= t)), I && (D += S.xOrigin - (S.xOrigin * i + S.yOrigin * n) + S.xOffset, L += S.yOrigin - (S.xOrigin * o + S.yOrigin * s) + S.yOffset, ke && (S.xPercent || S.yPercent) && (g = this.t.getBBox(), D += .01 * S.xPercent * g.width, L += .01 * S.yPercent * g.height), (g = 1e-6) > D && D > -g && (D = 0), g > L && L > -g && (L = 0)), w = (i * C | 0) / C + "," + (o * C | 0) / C + "," + (n * C | 0) / C + "," + (s * C | 0) / C + "," + D + "," + L + ")", I && ke ? this.t.setAttribute("transform", "matrix(" + w) : k[Oe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + w) : k[Oe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + M + ",0,0," + $ + "," + D + "," + L + ")";
                else {
                    if (d && ((g = 1e-4) > M && M > -g && (M = A = 2e-5), g > $ && $ > -g && ($ = A = 2e-5), !F || S.z || S.rotationX || S.rotationY || (F = 0)), P || H) P *= j, _ = i = Math.cos(P), v = o = Math.sin(P), H && (P -= H * j, _ = Math.cos(P), v = Math.sin(P), "simple" === S.skewType && (t = Math.tan((H - z) * j), _ *= t = Math.sqrt(1 + t * t), v *= t, S.skewY && (t = Math.tan(z * j), i *= t = Math.sqrt(1 + t * t), o *= t))), n = -v, s = _;
                    else {
                        if (!(E || O || 1 !== A || F || I)) return void (k[Oe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + L + "px," + R + "px)" + (1 !== M || 1 !== $ ? " scale(" + M + "," + $ + ")" : ""));
                        i = s = 1, n = o = 0
                    }
                    u = 1, r = a = l = c = h = f = 0, p = F ? -1 / F : 0, m = S.zOrigin, g = 1e-6, b = ",", x = "0", (P = E * j) && (_ = Math.cos(P), l = -(v = Math.sin(P)), h = p * -v, r = i * v, a = o * v, u = _, p *= _, i *= _, o *= _), (P = O * j) && (t = n * (_ = Math.cos(P)) + r * (v = Math.sin(P)), y = s * _ + a * v, c = u * v, f = p * v, r = n * -v + r * _, a = s * -v + a * _, u *= _, p *= _, n = t, s = y), 1 !== A && (r *= A, a *= A, u *= A, p *= A), 1 !== $ && (n *= $, s *= $, c *= $, f *= $), 1 !== M && (i *= M, o *= M, l *= M, h *= M), (m || I) && (m && (D += r * -m, L += a * -m, R += u * -m + m), I && (D += S.xOrigin - (S.xOrigin * i + S.yOrigin * n) + S.xOffset, L += S.yOrigin - (S.xOrigin * o + S.yOrigin * s) + S.yOffset), g > D && D > -g && (D = x), g > L && L > -g && (L = x), g > R && R > -g && (R = 0)), w = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", w += (g > i && i > -g ? x : i) + b + (g > o && o > -g ? x : o) + b + (g > l && l > -g ? x : l), w += b + (g > h && h > -g ? x : h) + b + (g > n && n > -g ? x : n) + b + (g > s && s > -g ? x : s), O || E || 1 !== A ? (w += b + (g > c && c > -g ? x : c) + b + (g > f && f > -g ? x : f) + b + (g > r && r > -g ? x : r), w += b + (g > a && a > -g ? x : a) + b + (g > u && u > -g ? x : u) + b + (g > p && p > -g ? x : p) + b) : w += ",0,0,0,0,1,0,", w += D + b + L + b + R + b + (F ? 1 + -R / F : 1) + ")", k[Oe] = w
                }
            };
        (c = Ae.prototype).x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0, c.scaleX = c.scaleY = c.scaleZ = 1, Ce("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function (e, t, i, n, o, a, l) {
                if (n._lastParsedTransform === l) return o;
                n._lastParsedTransform = l;
                var c, u = l.scale && "function" == typeof l.scale ? l.scale : 0;
                "function" == typeof l[i] && (c = l[i], l[i] = t), u && (l.scale = u(_, e));
                var h, f, d, p, m, v, y, w, b, x = e._gsTransform,
                    T = e.style,
                    C = Pe.length,
                    S = l,
                    k = {},
                    P = "transformOrigin",
                    O = Be(e, r, !0, S.parseTransform),
                    E = S.transform && ("function" == typeof S.transform ? S.transform(_, g) : S.transform);
                if (O.skewType = S.skewType || O.skewType || s.defaultSkewType, n._transform = O, E && "string" == typeof E && Oe) (f = B.style)[Oe] = E, f.display = "block", f.position = "absolute", z.body.appendChild(B), h = Be(B, null, !1), "simple" === O.skewType && (h.scaleY *= Math.cos(h.skewX * j)), O.svg && (v = O.xOrigin, y = O.yOrigin, h.x -= O.xOffset, h.y -= O.yOffset, (S.transformOrigin || S.svgOrigin) && (E = {}, Ie(e, ae(S.transformOrigin), E, S.svgOrigin, S.smoothOrigin, !0), v = E.xOrigin, y = E.yOrigin, h.x -= E.xOffset - O.xOffset, h.y -= E.yOffset - O.yOffset), (v || y) && (w = He(B, !0), h.x -= v - (v * w[0] + y * w[2]), h.y -= y - (v * w[1] + y * w[3]))), z.body.removeChild(B), h.perspective || (h.perspective = O.perspective), null != S.xPercent && (h.xPercent = ce(S.xPercent, O.xPercent)), null != S.yPercent && (h.yPercent = ce(S.yPercent, O.yPercent));
                else if ("object" == typeof S) {
                    if (h = {
                        scaleX: ce(null != S.scaleX ? S.scaleX : S.scale, O.scaleX),
                        scaleY: ce(null != S.scaleY ? S.scaleY : S.scale, O.scaleY),
                        scaleZ: ce(S.scaleZ, O.scaleZ),
                        x: ce(S.x, O.x),
                        y: ce(S.y, O.y),
                        z: ce(S.z, O.z),
                        xPercent: ce(S.xPercent, O.xPercent),
                        yPercent: ce(S.yPercent, O.yPercent),
                        perspective: ce(S.transformPerspective, O.perspective)
                    }, null != (m = S.directionalRotation))
                        if ("object" == typeof m)
                            for (f in m) S[f] = m[f];
                        else S.rotation = m;
                    "string" == typeof S.x && -1 !== S.x.indexOf("%") && (h.x = 0, h.xPercent = ce(S.x, O.xPercent)), "string" == typeof S.y && -1 !== S.y.indexOf("%") && (h.y = 0, h.yPercent = ce(S.y, O.yPercent)), h.rotation = ue("rotation" in S ? S.rotation : "shortRotation" in S ? S.shortRotation + "_short" : "rotationZ" in S ? S.rotationZ : O.rotation, O.rotation, "rotation", k), $e && (h.rotationX = ue("rotationX" in S ? S.rotationX : "shortRotationX" in S ? S.shortRotationX + "_short" : O.rotationX || 0, O.rotationX, "rotationX", k), h.rotationY = ue("rotationY" in S ? S.rotationY : "shortRotationY" in S ? S.shortRotationY + "_short" : O.rotationY || 0, O.rotationY, "rotationY", k)), h.skewX = ue(S.skewX, O.skewX), h.skewY = ue(S.skewY, O.skewY)
                }
                for ($e && null != S.force3D && (O.force3D = S.force3D, p = !0), (d = O.force3D || O.z || O.rotationX || O.rotationY || h.z || h.rotationX || h.rotationY || h.perspective) || null == S.scale || (h.scaleZ = 1); --C > -1;)((E = h[b = Pe[C]] - O[b]) > 1e-6 || -1e-6 > E || null != S[b] || null != F[b]) && (p = !0, o = new ye(O, b, O[b], E, o), b in k && (o.e = k[b]), o.xs0 = 0, o.plugin = a, n._overwriteProps.push(o.n));
                return E = S.transformOrigin, O.svg && (E || S.svgOrigin) && (v = O.xOffset, y = O.yOffset, Ie(e, ae(E), h, S.svgOrigin, S.smoothOrigin), o = we(O, "xOrigin", (x ? O : h).xOrigin, h.xOrigin, o, P), o = we(O, "yOrigin", (x ? O : h).yOrigin, h.yOrigin, o, P), (v !== O.xOffset || y !== O.yOffset) && (o = we(O, "xOffset", x ? v : O.xOffset, O.xOffset, o, P), o = we(O, "yOffset", x ? y : O.yOffset, O.yOffset, o, P)), E = "0px 0px"), (E || $e && d && O.zOrigin) && (Oe ? (p = !0, b = Me, E = (E || J(e, b, r, !1, "50% 50%")) + "", (o = new ye(T, b, 0, 0, o, -1, P)).b = T[b], o.plugin = a, $e ? (f = O.zOrigin, E = E.split(" "), O.zOrigin = (E.length > 2 && (0 === f || "0px" !== E[2]) ? parseFloat(E[2]) : f) || 0, o.xs0 = o.e = E[0] + " " + (E[1] || "50%") + " 0px", (o = new ye(O, "zOrigin", 0, 0, o, -1, o.n)).b = f, o.xs0 = o.e = O.zOrigin) : o.xs0 = o.e = E) : ae(E + "", O)), p && (n._transformType = O.svg && ke || !d && 3 !== this._transformType ? 2 : 3), c && (l[i] = c), u && (l.scale = u), o
            },
            prefix: !0
        }), Ce("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), Ce("borderRadius", {
            defaultValue: "0px",
            parser: function (e, t, i, o, s, a) {
                t = this.format(t);
                var l, c, u, h, f, d, p, m, g, _, v, y, w, b, x, T, C = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    S = e.style;
                for (g = parseFloat(e.offsetWidth), _ = parseFloat(e.offsetHeight), l = t.split(" "), c = 0; c < C.length; c++) this.p.indexOf("border") && (C[c] = K(C[c])), -1 !== (f = h = J(e, C[c], r, !1, "0px")).indexOf(" ") && (h = f.split(" "), f = h[0], h = h[1]), d = u = l[c], p = parseFloat(f), y = f.substr((p + "").length), (w = "=" === d.charAt(1)) ? (m = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), m *= parseFloat(d), v = d.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(d), v = d.substr((m + "").length)), "" === v && (v = n[i] || y), v !== y && (b = ee(e, "borderLeft", p, y), x = ee(e, "borderTop", p, y), "%" === v ? (f = b / g * 100 + "%", h = x / _ * 100 + "%") : "em" === v ? (f = b / (T = ee(e, "borderLeft", 1, "em")) + "em", h = x / T + "em") : (f = b + "px", h = x + "px"), w && (d = parseFloat(f) + m + v, u = parseFloat(h) + m + v)), s = be(S, C[c], f + " " + h, d + " " + u, !1, "0px", s);
                return s
            },
            prefix: !0,
            formatter: ge("0px 0px 0px 0px", !1, !0)
        }), Ce("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function (e, t, i, n, o, s) {
                return be(e.style, i, this.format(J(e, i, r, !1, "0px 0px")), this.format(t), !1, "0px", o)
            },
            prefix: !0,
            formatter: ge("0px 0px", !1, !0)
        }), Ce("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (e, t, i, n, o, s) {
                var a, l, c, u, h, f, d = "background-position",
                    p = r || Z(e, null),
                    g = this.format((p ? m ? p.getPropertyValue(d + "-x") + " " + p.getPropertyValue(d + "-y") : p.getPropertyValue(d) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                    _ = this.format(t);
                if (-1 !== g.indexOf("%") != (-1 !== _.indexOf("%")) && _.split(",").length < 2 && ((f = J(e, "backgroundImage").replace(E, "")) && "none" !== f)) {
                    for (a = g.split(" "), l = _.split(" "), q.setAttribute("src", f), c = 2; --c > -1;)(u = -1 !== (g = a[c]).indexOf("%")) !== (-1 !== l[c].indexOf("%")) && (h = 0 === c ? e.offsetWidth - q.width : e.offsetHeight - q.height, a[c] = u ? parseFloat(g) / 100 * h + "px" : parseFloat(g) / h * 100 + "%");
                    g = a.join(" ")
                }
                return this.parseComplex(e.style, g, _, o, s)
            },
            formatter: ae
        }), Ce("backgroundSize", {
            defaultValue: "0 0",
            formatter: function (e) {
                return ae(-1 === (e += "").indexOf(" ") ? e + " " + e : e)
            }
        }), Ce("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), Ce("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), Ce("transformStyle", {
            prefix: !0
        }), Ce("backfaceVisibility", {
            prefix: !0
        }), Ce("userSelect", {
            prefix: !0
        }), Ce("margin", {
            parser: _e("marginTop,marginRight,marginBottom,marginLeft")
        }), Ce("padding", {
            parser: _e("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), Ce("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (e, t, i, n, o, s) {
                var a, l, c;
                return 9 > m ? (l = e.currentStyle, c = 8 > m ? " " : ",", a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")", t = this.format(t).split(",").join(c)) : (a = this.format(J(e, this.p, r, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, a, t, o, s)
            }
        }), Ce("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), Ce("autoRound,strictUnits", {
            parser: function (e, t, i, n, r) {
                return r
            }
        }), Ce("border", {
            defaultValue: "0px solid #000",
            parser: function (e, t, i, n, o, s) {
                var a = J(e, "borderTopWidth", r, !1, "0px"),
                    l = this.format(t).split(" "),
                    c = l[0].replace(x, "");
                return "px" !== c && (a = parseFloat(a) / ee(e, "borderTopWidth", 1, c) + c), this.parseComplex(e.style, this.format(a + " " + J(e, "borderTopStyle", r, !1, "solid") + " " + J(e, "borderTopColor", r, !1, "#000")), l.join(" "), o, s)
            },
            color: !0,
            formatter: function (e) {
                var t = e.split(" ");
                return t[0] + " " + (t[1] || "solid") + " " + (e.match(me) || ["#000"])[0]
            }
        }), Ce("borderWidth", {
            parser: _e("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }), Ce("float,cssFloat,styleFloat", {
            parser: function (e, t, i, n, r, o) {
                var s = e.style,
                    a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                return new ye(s, a, 0, 0, r, -1, i, !1, 0, s[a], t)
            }
        });
        var Xe = function (e) {
            var t, i = this.t,
                n = i.filter || J(this.data, "filter") || "",
                r = this.s + this.c * e | 0;
            100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), t = !J(this.data, "filter")) : (i.filter = n.replace(S, ""), t = !0)), t || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(T, "opacity=" + r))
        };
        Ce("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function (e, t, i, n, o, s) {
                var a = parseFloat(J(e, "opacity", r, !1, "1")),
                    l = e.style,
                    c = "autoAlpha" === i;
                return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + a), c && 1 === a && "hidden" === J(e, "visibility", r) && 0 !== t && (a = 0), Y ? o = new ye(l, "opacity", a, t - a, o) : ((o = new ye(l, "opacity", 100 * a, 100 * (t - a), o)).xn1 = c ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = e, o.plugin = s, o.setRatio = Xe), c && ((o = new ye(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit")).xs0 = "inherit", n._overwriteProps.push(o.n), n._overwriteProps.push(i)), o
            }
        });
        var Ye = function (e, t) {
            t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), e.removeProperty(t.replace(P, "-$1").toLowerCase())) : e.removeAttribute(t))
        },
            Ue = function (e) {
                if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                    this.t.setAttribute("class", 0 === e ? this.b : this.e);
                    for (var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : Ye(i, t.p), t = t._next;
                    1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
            };
        Ce("className", {
            parser: function (e, t, n, o, s, a, l) {
                var c, u, h, f, d, p = e.getAttribute("class") || "",
                    m = e.style.cssText;
                if ((s = o._classNamePT = new ye(e, n, 0, 0, s, 2)).setRatio = Ue, s.pr = -11, i = !0, s.b = p, u = ie(e, r), h = e._gsClassPT) {
                    for (f = {}, d = h.data; d;) f[d.p] = 1, d = d._next;
                    h.setRatio(1)
                }
                return e._gsClassPT = s, s.e = "=" !== t.charAt(1) ? t : p.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", s.e), c = ne(e, u, ie(e), l, f), e.setAttribute("class", p), s.data = c.firstMPT, e.style.cssText = m, s.xfirst = o.parse(e, c.difs, s, a)
            }
        });
        var Ve = function (e) {
            if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var t, i, n, r, o, s = this.t.style,
                    a = l.transform.parse;
                if ("all" === this.e) s.cssText = "", r = !0;
                else
                    for (n = (t = this.e.split(" ").join("").split(",")).length; --n > -1;) i = t[n], l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Me : l[i].p), Ye(s, i);
                r && (Ye(s, Oe), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
            }
        };
        for (Ce("clearProps", {
            parser: function (e, t, n, r, o) {
                return (o = new ye(e, n, 0, 0, o, 2)).setRatio = Ve, o.e = t, o.pr = -10, o.data = r._tween, i = !0, o
            }
        }), c = "bezier,throwProps,physicsProps,physics2D".split(","), xe = c.length; xe--;) Se(c[xe]);
        (c = s.prototype)._firstPT = c._lastParsedTransform = c._transform = null, c._onInitTween = function (e, t, a, c) {
            if (!e.nodeType) return !1;
            this._target = g = e, this._tween = a, this._vars = t, _ = c, u = t.autoRound, i = !1, n = t.suffixMap || s.suffixMap, r = Z(e, ""), o = this._overwriteProps;
            var d, m, v, y, w, b, x, T, S, k = e.style;
            if (h && "" === k.zIndex && (("auto" === (d = J(e, "zIndex", r)) || "" === d) && this._addLazySet(k, "zIndex", 0)), "string" == typeof t && (y = k.cssText, d = ie(e, r), k.cssText = y + ";" + t, d = ne(e, d, ie(e)).difs, !Y && C.test(t) && (d.opacity = parseFloat(RegExp.$1)), t = d, k.cssText = y), t.className ? this._firstPT = m = l.className.parse(e, t.className, "className", this, null, null, t) : this._firstPT = m = this.parse(e, t, null), this._transformType) {
                for (S = 3 === this._transformType, Oe ? f && (h = !0, "" === k.zIndex && (("auto" === (x = J(e, "zIndex", r)) || "" === x) && this._addLazySet(k, "zIndex", 0)), p && this._addLazySet(k, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden"))) : k.zoom = 1, v = m; v && v._next;) v = v._next;
                T = new ye(e, "transform", 0, 0, null, 2), this._linkCSSP(T, null, v), T.setRatio = Oe ? We : qe, T.data = this._transform || Be(e, r, !0), T.tween = a, T.pr = -1, o.pop()
            }
            if (i) {
                for (; m;) {
                    for (b = m._next, v = y; v && v.pr > m.pr;) v = v._next;
                    (m._prev = v ? v._prev : w) ? m._prev._next = m : y = m, (m._next = v) ? v._prev = m : w = m, m = b
                }
                this._firstPT = y
            }
            return !0
        }, c.parse = function (e, t, i, o) {
            var s, a, c, h, f, d, p, m, v, y, w = e.style;
            for (s in t) {
                if ("function" == typeof (d = t[s]) && (d = d(_, g)), a = l[s]) i = a.parse(e, d, s, this, i, o, t);
                else {
                    if ("--" === s.substr(0, 2)) {
                        this._tween._propLookup[s] = this._addTween.call(this._tween, e.style, "setProperty", Z(e).getPropertyValue(s) + "", d + "", s, !1, s);
                        continue
                    }
                    f = J(e, s, r) + "", v = "string" == typeof d, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || v && k.test(d) ? (v || (d = ((d = de(d)).length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), i = be(w, s, f, d, !0, "transparent", i, 0, o)) : v && R.test(d) ? i = be(w, s, f, d, !0, null, i, 0, o) : (p = (c = parseFloat(f)) || 0 === c ? f.substr((c + "").length) : "", ("" === f || "auto" === f) && ("width" === s || "height" === s ? (c = se(e, s, r), p = "px") : "left" === s || "top" === s ? (c = te(e, s, r), p = "px") : (c = "opacity" !== s ? 0 : 1, p = "")), (y = v && "=" === d.charAt(1)) ? (h = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), h *= parseFloat(d), m = d.replace(x, "")) : (h = parseFloat(d), m = v ? d.replace(x, "") : ""), "" === m && (m = s in n ? n[s] : p), d = h || 0 === h ? (y ? h + c : h) + m : t[s], p !== m && ("" !== m || "lineHeight" === s) && (h || 0 === h) && c && (c = ee(e, s, c, p), "%" === m ? (c /= ee(e, s, 100, "%") / 100, !0 !== t.strictUnits && (f = c + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? c /= ee(e, s, 1, m) : "px" !== m && (h = ee(e, s, h, m), m = "px"), y && (h || 0 === h) && (d = h + c + m)), y && (h += c), !c && 0 !== c || !h && 0 !== h ? void 0 !== w[s] && (d || d + "" != "NaN" && null != d) ? (i = new ye(w, s, h || c || 0, 0, i, -1, s, !1, 0, f, d)).xs0 = "none" !== d || "display" !== s && -1 === s.indexOf("Style") ? d : f : V("invalid " + s + " tween value: " + t[s]) : (i = new ye(w, s, c, h - c, i, 0, s, !1 !== u && ("px" === m || "zIndex" === s), 0, f, d)).xs0 = m)
                }
                o && i && !i.plugin && (i.plugin = o)
            }
            return i
        }, c.setRatio = function (e) {
            var t, i, n, r = this._firstPT;
            if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                    for (; r;) {
                        if (t = r.c * e + r.s, r.r ? t = Math.round(t) : 1e-6 > t && t > -1e-6 && (t = 0), r.type)
                            if (1 === r.type)
                                if (2 === (n = r.l)) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2;
                                else if (3 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + t + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(e);
                        else r.t[r.p] = t + r.xs0;
                        r = r._next
                    } else
                    for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(e), r = r._next;
            else
                for (; r;) {
                    if (2 !== r.type)
                        if (r.r && -1 !== r.type)
                            if (t = Math.round(r.s + r.c), r.type) {
                                if (1 === r.type) {
                                    for (n = r.l, i = r.xs0 + t + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                }
                            } else r.t[r.p] = t + r.xs0;
                        else r.t[r.p] = r.e;
                    else r.setRatio(e);
                    r = r._next
                }
        }, c._enableTransforms = function (e) {
            this._transform = this._transform || Be(this._target, r, !0), this._transformType = this._transform.svg && ke || !e && 3 !== this._transformType ? 2 : 3
        };
        var Ge = function (e) {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        c._addLazySet = function (e, t, i) {
            var n = this._firstPT = new ye(e, t, 0, 0, this._firstPT, 2);
            n.e = i, n.setRatio = Ge, n.data = this
        }, c._linkCSSP = function (e, t, i, n) {
            return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, n = !0), i ? i._next = e : n || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = i), e
        }, c._mod = function (e) {
            for (var t = this._firstPT; t;) "function" == typeof e[t.p] && e[t.p] === Math.round && (t.r = 1), t = t._next
        }, c._kill = function (t) {
            var i, n, r, o = t;
            if (t.autoAlpha || t.alpha) {
                for (n in o = {}, t) o[n] = t[n];
                o.opacity = 1, o.autoAlpha && (o.visibility = 1)
            }
            for (t.className && (i = this._classNamePT) && ((r = i.xfirst) && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(t), n = i.plugin), i = i._next;
            return e.prototype._kill.call(this, o)
        };
        var Qe = function (e, t, i) {
            var n, r, o, s;
            if (e.slice)
                for (r = e.length; --r > -1;) Qe(e[r], t, i);
            else
                for (r = (n = e.childNodes).length; --r > -1;) s = (o = n[r]).type, o.style && (t.push(ie(o)), i && i.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Qe(o, t, i)
        };
        return s.cascadeTo = function (e, i, n) {
            var r, o, s, a, l = t.to(e, i, n),
                c = [l],
                u = [],
                h = [],
                f = [],
                d = t._internals.reservedProps;
            for (e = l._targets || l.target, Qe(e, u, f), l.render(i, !0, !0), Qe(e, h), l.render(0, !0, !0), l._enabled(!0), r = f.length; --r > -1;)
                if ((o = ne(f[r], u[r], h[r])).firstMPT) {
                    for (s in o = o.difs, n) d[s] && (o[s] = n[s]);
                    for (s in a = {}, o) a[s] = u[r][s];
                    c.push(t.fromTo(f[r], i, a, o))
                } return c
        }, e.activate([s]), s
    }, !0),
        function () {
            var e = _gsScope._gsDefine.plugin({
                propName: "roundProps",
                version: "1.6.0",
                priority: -1,
                API: 2,
                init: function (e, t, i) {
                    return this._tween = i, !0
                }
            }),
                t = function (e) {
                    for (; e;) e.f || e.blob || (e.m = Math.round), e = e._next
                },
                i = e.prototype;
            i._onInitAllProps = function () {
                for (var e, i, n, r = this._tween, o = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), s = o.length, a = {}, l = r._propLookup.roundProps; --s > -1;) a[o[s]] = Math.round;
                for (s = o.length; --s > -1;)
                    for (e = o[s], i = r._firstPT; i;) n = i._next, i.pg ? i.t._mod(a) : i.n === e && (2 === i.f && i.t ? t(i.t._firstPT) : (this._add(i.t, e, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[e] = l)), i = n;
                return !1
            }, i._add = function (e, t, i, n) {
                this._addTween(e, t, i, i + n, t, Math.round), this._overwriteProps.push(t)
            }
        }(), _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.6.1",
            init: function (e, t, i, n) {
                var r, o;
                if ("function" != typeof e.setAttribute) return !1;
                for (r in t) "function" == typeof (o = t[r]) && (o = o(n, e)), this._addTween(e, "setAttribute", e.getAttribute(r) + "", o + "", r, !1, r), this._overwriteProps.push(r);
                return !0
            }
        }), _gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function (e, t, i, n) {
                "object" != typeof t && (t = {
                    rotation: t
                }), this.finals = {};
                var r, o, s, a, l, c, u = !0 === t.useRadians ? 2 * Math.PI : 360;
                for (r in t) "useRadians" !== r && ("function" == typeof (a = t[r]) && (a = a(n, e)), o = (c = (a + "").split("_"))[0], s = parseFloat("function" != typeof e[r] ? e[r] : e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), l = (a = this.finals[r] = "string" == typeof o && "=" === o.charAt(1) ? s + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0) - s, c.length && (-1 !== (o = c.join("_")).indexOf("short") && ((l %= u) !== l % (u / 2) && (l = 0 > l ? l + u : l - u)), -1 !== o.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * u) % u - (l / u | 0) * u : -1 !== o.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * u) % u - (l / u | 0) * u)), (l > 1e-6 || -1e-6 > l) && (this._addTween(e, r, s, s + l, r), this._overwriteProps.push(r)));
                return !0
            },
            set: function (e) {
                var t;
                if (1 !== e) this._super.setRatio.call(this, e);
                else
                    for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
            }
        })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (e) {
            var t, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
                o = r.com.greensock,
                s = 2 * Math.PI,
                a = Math.PI / 2,
                l = o._class,
                c = function (t, i) {
                    var n = l("easing." + t, function () { }, !0),
                        r = n.prototype = new e;
                    return r.constructor = n, r.getRatio = i, n
                },
                u = e.register || function () { },
                h = function (e, t, i, n, r) {
                    var o = l("easing." + e, {
                        easeOut: new t,
                        easeIn: new i,
                        easeInOut: new n
                    }, !0);
                    return u(o, e), o
                },
                f = function (e, t, i) {
                    this.t = e, this.v = t, i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - e)
                },
                d = function (t, i) {
                    var n = l("easing." + t, function (e) {
                        this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                        r = n.prototype = new e;
                    return r.constructor = n, r.getRatio = i, r.config = function (e) {
                        return new n(e)
                    }, n
                },
                p = h("Back", d("BackOut", function (e) {
                    return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                }), d("BackIn", function (e) {
                    return e * e * ((this._p1 + 1) * e - this._p1)
                }), d("BackInOut", function (e) {
                    return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                })),
                m = l("easing.SlowMo", function (e, t, i) {
                    t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                }, !0),
                g = m.prototype = new e;
            return g.constructor = m, g.getRatio = function (e) {
                var t = e + (.5 - e) * this._p;
                return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
            }, m.ease = new m(.7, .7), g.config = m.config = function (e, t, i) {
                return new m(e, t, i)
            }, (g = (t = l("easing.SteppedEase", function (e, t) {
                e = e || 1, this._p1 = 1 / e, this._p2 = e + (t ? 0 : 1), this._p3 = t ? 1 : 0
            }, !0)).prototype = new e).constructor = t, g.getRatio = function (e) {
                return 0 > e ? e = 0 : e >= 1 && (e = .999999999), ((this._p2 * e | 0) + this._p3) * this._p1
            }, g.config = t.config = function (e, i) {
                return new t(e, i)
            }, i = l("easing.RoughEase", function (t) {
                for (var i, n, r, o, s, a, l = (t = t || {}).taper || "none", c = [], u = 0, h = 0 | (t.points || 20), d = h, p = !1 !== t.randomize, m = !0 === t.clamp, g = t.template instanceof e ? t.template : null, _ = "number" == typeof t.strength ? .4 * t.strength : .4; --d > -1;) i = p ? Math.random() : 1 / h * d, n = g ? g.getRatio(i) : i, "none" === l ? r = _ : "out" === l ? r = (o = 1 - i) * o * _ : "in" === l ? r = i * i * _ : .5 > i ? r = (o = 2 * i) * o * .5 * _ : r = (o = 2 * (1 - i)) * o * .5 * _, p ? n += Math.random() * r - .5 * r : d % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), c[u++] = {
                    x: i,
                    y: n
                };
                for (c.sort(function (e, t) {
                    return e.x - t.x
                }), a = new f(1, 1, null), d = h; --d > -1;) s = c[d], a = new f(s.x, s.y, a);
                this._prev = new f(0, 0, 0 !== a.t ? a : a.next)
            }, !0), (g = i.prototype = new e).constructor = i, g.getRatio = function (e) {
                var t = this._prev;
                if (e > t.t) {
                    for (; t.next && e >= t.t;) t = t.next;
                    t = t.prev
                } else
                    for (; t.prev && e <= t.t;) t = t.prev;
                return this._prev = t, t.v + (e - t.t) / t.gap * t.c
            }, g.config = function (e) {
                return new i(e)
            }, i.ease = new i, h("Bounce", c("BounceOut", function (e) {
                return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }), c("BounceIn", function (e) {
                return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }), c("BounceInOut", function (e) {
                var t = .5 > e;
                return e = 1 / 2.75 > (e = t ? 1 - 2 * e : 2 * e - 1) ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
            })), h("Circ", c("CircOut", function (e) {
                return Math.sqrt(1 - (e -= 1) * e)
            }), c("CircIn", function (e) {
                return -(Math.sqrt(1 - e * e) - 1)
            }), c("CircInOut", function (e) {
                return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            })), h("Elastic", (n = function (t, i, n) {
                var r = l("easing." + t, function (e, t) {
                    this._p1 = e >= 1 ? e : 1, this._p2 = (t || n) / (1 > e ? e : 1), this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0), this._p2 = s / this._p2
                }, !0),
                    o = r.prototype = new e;
                return o.constructor = r, o.getRatio = i, o.config = function (e, t) {
                    return new r(e, t)
                }, r
            })("ElasticOut", function (e) {
                return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
            }, .3), n("ElasticIn", function (e) {
                return -this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)
            }, .3), n("ElasticInOut", function (e) {
                return (e *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
            }, .45)), h("Expo", c("ExpoOut", function (e) {
                return 1 - Math.pow(2, -10 * e)
            }), c("ExpoIn", function (e) {
                return Math.pow(2, 10 * (e - 1)) - .001
            }), c("ExpoInOut", function (e) {
                return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
            })), h("Sine", c("SineOut", function (e) {
                return Math.sin(e * a)
            }), c("SineIn", function (e) {
                return 1 - Math.cos(e * a)
            }), c("SineInOut", function (e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            })), l("easing.EaseLookup", {
                find: function (t) {
                    return e.map[t]
                }
            }, !0), u(r.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(t, "SteppedEase", "ease,"), p
        }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (e, t) {
    "use strict";
    var i = {},
        n = e.document,
        r = e.GreenSockGlobals = e.GreenSockGlobals || e;
    if (!r.TweenLite) {
        var o, s, a, l, c, u = function (e) {
            var t, i = e.split("."),
                n = r;
            for (t = 0; t < i.length; t++) n[i[t]] = n = n[i[t]] || {};
            return n
        },
            h = u("com.greensock"),
            f = 1e-10,
            d = function (e) {
                var t, i = [],
                    n = e.length;
                for (t = 0; t !== n; i.push(e[t++]));
                return i
            },
            p = function () { },
            m = function () {
                var e = Object.prototype.toString,
                    t = e.call([]);
                return function (i) {
                    return null != i && (i instanceof Array || "object" == typeof i && !!i.push && e.call(i) === t)
                }
            }(),
            g = {},
            _ = function (n, o, s, a) {
                this.sc = g[n] ? g[n].sc : [], g[n] = this, this.gsClass = null, this.func = s;
                var l = [];
                this.check = function (c) {
                    for (var h, f, d, p, m = o.length, v = m; --m > -1;)(h = g[o[m]] || new _(o[m], [])).gsClass ? (l[m] = h.gsClass, v--) : c && h.sc.push(this);
                    if (0 === v && s) {
                        if (d = (f = ("com.greensock." + n).split(".")).pop(), p = u(f.join("."))[d] = this.gsClass = s.apply(s, l), a)
                            if (r[d] = i[d] = p, "undefined" != typeof module && module.exports)
                                if (n === t)
                                    for (m in module.exports = i[t] = p, i) p[m] = i[m];
                                else i[t] && (i[t][d] = p);
                            else "function" == typeof define && define.amd && define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function () {
                                return p
                            });
                        for (m = 0; m < this.sc.length; m++) this.sc[m].check()
                    }
                }, this.check(!0)
            },
            v = e._gsDefine = function (e, t, i, n) {
                return new _(e, t, i, n)
            },
            y = h._class = function (e, t, i) {
                return t = t || function () { }, v(e, [], function () {
                    return t
                }, i), t
            };
        v.globals = r;
        var w = [0, 0, 1, 1],
            b = y("easing.Ease", function (e, t, i, n) {
                this._func = e, this._type = i || 0, this._power = n || 0, this._params = t ? w.concat(t) : w
            }, !0),
            x = b.map = {},
            T = b.register = function (e, t, i, n) {
                for (var r, o, s, a, l = t.split(","), c = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                    for (o = l[c], r = n ? y("easing." + o, null, !0) : h.easing[o] || {}, s = u.length; --s > -1;) a = u[s], x[o + "." + a] = x[a + o] = r[a] = e.getRatio ? e : e[a] || new e
            };
        for ((a = b.prototype)._calcEnd = !1, a.getRatio = function (e) {
            if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
            var t = this._type,
                i = this._power,
                n = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
            return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === t ? 1 - n : 2 === t ? n : .5 > e ? n / 2 : 1 - n / 2
        }, s = (o = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --s > -1;) a = o[s] + ",Power" + s, T(new b(null, null, 1, s), a, "easeOut", !0), T(new b(null, null, 2, s), a, "easeIn" + (0 === s ? ",easeNone" : "")), T(new b(null, null, 3, s), a, "easeInOut");
        x.linear = h.easing.Linear.easeIn, x.swing = h.easing.Quad.easeInOut;
        var C = y("events.EventDispatcher", function (e) {
            this._listeners = {}, this._eventTarget = e || this
        });
        (a = C.prototype).addEventListener = function (e, t, i, n, r) {
            r = r || 0;
            var o, s, a = this._listeners[e],
                u = 0;
            for (this !== l || c || l.wake(), null == a && (this._listeners[e] = a = []), s = a.length; --s > -1;)(o = a[s]).c === t && o.s === i ? a.splice(s, 1) : 0 === u && o.pr < r && (u = s + 1);
            a.splice(u, 0, {
                c: t,
                s: i,
                up: n,
                pr: r
            })
        }, a.removeEventListener = function (e, t) {
            var i, n = this._listeners[e];
            if (n)
                for (i = n.length; --i > -1;)
                    if (n[i].c === t) return void n.splice(i, 1)
        }, a.dispatchEvent = function (e) {
            var t, i, n, r = this._listeners[e];
            if (r)
                for ((t = r.length) > 1 && (r = r.slice(0)), i = this._eventTarget; --t > -1;)(n = r[t]) && (n.up ? n.c.call(n.s || i, {
                    type: e,
                    target: i
                }) : n.c.call(n.s || i))
        };
        var S = e.requestAnimationFrame,
            k = e.cancelAnimationFrame,
            P = Date.now || function () {
                return (new Date).getTime()
            },
            O = P();
        for (s = (o = ["ms", "moz", "webkit", "o"]).length; --s > -1 && !S;) S = e[o[s] + "RequestAnimationFrame"], k = e[o[s] + "CancelAnimationFrame"] || e[o[s] + "CancelRequestAnimationFrame"];
        y("Ticker", function (e, t) {
            var i, r, o, s, a, u = this,
                h = P(),
                d = !(!1 === t || !S) && "auto",
                m = 500,
                g = 33,
                _ = function (e) {
                    var t, n, l = P() - O;
                    l > m && (h += l - g), O += l, u.time = (O - h) / 1e3, t = u.time - a, (!i || t > 0 || !0 === e) && (u.frame++, a += t + (t >= s ? .004 : s - t), n = !0), !0 !== e && (o = r(_)), n && u.dispatchEvent("tick")
                };
            C.call(u), u.time = u.frame = 0, u.tick = function () {
                _(!0)
            }, u.lagSmoothing = function (e, t) {
                m = e || 1 / f, g = Math.min(t, m, 0)
            }, u.sleep = function () {
                null != o && (d && k ? k(o) : clearTimeout(o), r = p, o = null, u === l && (c = !1))
            }, u.wake = function (e) {
                null !== o ? u.sleep() : e ? h += -O + (O = P()) : u.frame > 10 && (O = P() - m + 5), r = 0 === i ? p : d && S ? S : function (e) {
                    return setTimeout(e, 1e3 * (a - u.time) + 1 | 0)
                }, u === l && (c = !0), _(2)
            }, u.fps = function (e) {
                return arguments.length ? (s = 1 / ((i = e) || 60), a = this.time + s, void u.wake()) : i
            }, u.useRAF = function (e) {
                return arguments.length ? (u.sleep(), d = e, void u.fps(i)) : d
            }, u.fps(e), setTimeout(function () {
                "auto" === d && u.frame < 5 && "hidden" !== n.visibilityState && u.useRAF(!1)
            }, 1500)
        }), (a = h.Ticker.prototype = new h.events.EventDispatcher).constructor = h.Ticker;
        var E = y("core.Animation", function (e, t) {
            if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = !0 === t.immediateRender, this.data = t.data, this._reversed = !0 === t.reversed, V) {
                c || l.wake();
                var i = this.vars.useFrames ? U : V;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        l = E.ticker = new h.Ticker, (a = E.prototype)._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1;
        var M = function () {
            c && P() - O > 2e3 && "hidden" !== n.visibilityState && l.wake();
            var e = setTimeout(M, 2e3);
            e.unref && e.unref()
        };
        M(), a.play = function (e, t) {
            return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
        }, a.pause = function (e, t) {
            return null != e && this.seek(e, t), this.paused(!0)
        }, a.resume = function (e, t) {
            return null != e && this.seek(e, t), this.paused(!1)
        }, a.seek = function (e, t) {
            return this.totalTime(Number(e), !1 !== t)
        }, a.restart = function (e, t) {
            return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, !1 !== t, !0)
        }, a.reverse = function (e, t) {
            return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
        }, a.render = function (e, t, i) { }, a.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, a.isActive = function () {
            var e, t = this._timeline,
                i = this._startTime;
            return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime(!0)) >= i && e < i + this.totalDuration() / this._timeScale - 1e-7
        }, a._enabled = function (e, t) {
            return c || l.wake(), this._gc = !e, this._active = this.isActive(), !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
        }, a._kill = function (e, t) {
            return this._enabled(!1, !1)
        }, a.kill = function (e, t) {
            return this._kill(e, t), this
        }, a._uncache = function (e) {
            for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
            return this
        }, a._swapSelfInParams = function (e) {
            for (var t = e.length, i = e.concat(); --t > -1;) "{self}" === e[t] && (i[t] = this);
            return i
        }, a._callback = function (e) {
            var t = this.vars,
                i = t[e],
                n = t[e + "Params"],
                r = t[e + "Scope"] || t.callbackScope || this;
            switch (n ? n.length : 0) {
                case 0:
                    i.call(r);
                    break;
                case 1:
                    i.call(r, n[0]);
                    break;
                case 2:
                    i.call(r, n[0], n[1]);
                    break;
                default:
                    i.apply(r, n)
            }
        }, a.eventCallback = function (e, t, i, n) {
            if ("on" === (e || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[e];
                null == t ? delete r[e] : (r[e] = t, r[e + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[e + "Scope"] = n), "onUpdate" === e && (this._onUpdate = t)
            }
            return this
        }, a.delay = function (e) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
        }, a.duration = function (e) {
            return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, a.totalDuration = function (e) {
            return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
        }, a.time = function (e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
        }, a.totalTime = function (e, t, i) {
            if (c || l.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > e && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration,
                        r = this._timeline;
                    if (e > n && !i && (e = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - e : e) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                        for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (L.length && Q(), this.render(e, t, !1), L.length && Q())
            }
            return this
        }, a.progress = a.totalProgress = function (e, t) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * e, t) : i ? this._time / i : this.ratio
        }, a.startTime = function (e) {
            return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
        }, a.endTime = function (e) {
            return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
        }, a.timeScale = function (e) {
            if (!arguments.length) return this._timeScale;
            if (e = e || f, this._timeline && this._timeline.smoothChildTiming) {
                var t = this._pauseTime,
                    i = t || 0 === t ? t : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / e
            }
            return this._timeScale = e, this._uncache(!1)
        }, a.reversed = function (e) {
            return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, a.paused = function (e) {
            if (!arguments.length) return this._paused;
            var t, i, n = this._timeline;
            return e != this._paused && n && (c || e || l.wake(), i = (t = n.rawTime()) - this._pauseTime, !e && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 !== i && this._initted && this.duration() && (t = n.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
        };
        var $ = y("core.SimpleTimeline", function (e) {
            E.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        (a = $.prototype = new E).constructor = $, a.kill()._gc = !1, a._first = a._last = a._recent = null, a._sortChildren = !1, a.add = a.insert = function (e, t, i, n) {
            var r, o;
            if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), r = this._last, this._sortChildren)
                for (o = e._startTime; r && r._startTime > o;) r = r._prev;
            return r ? (e._next = r._next, r._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = r, this._recent = e, this._timeline && this._uncache(!0), this
        }, a._remove = function (e, t) {
            return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, a.render = function (e, t, i) {
            var n, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = e; r;) n = r._next, (r._active || e >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)), r = n
        }, a.rawTime = function () {
            return c || l.wake(), this._totalTime
        };
        var A = y("TweenLite", function (t, i, n) {
            if (E.call(this, i, n), this.render = A.prototype.render, null == t) throw "Cannot tween a null target.";
            this.target = t = "string" != typeof t ? t : A.selector(t) || t;
            var r, o, s, a = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? Y[A.defaultOverwrite] : "number" == typeof l ? l >> 0 : Y[l], (a || t instanceof Array || t.push && m(t)) && "number" != typeof t[0])
                for (this._targets = s = d(t), this._propLookup = [], this._siblings = [], r = 0; r < s.length; r++)(o = s[r]) ? "string" != typeof o ? o.length && o !== e && o[0] && (o[0] === e || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(d(o))) : (this._siblings[r] = K(o, this, !1), 1 === l && this._siblings[r].length > 1 && J(o, this, null, 1, this._siblings[r])) : "string" == typeof (o = s[r--] = A.selector(o)) && s.splice(r + 1, 1) : s.splice(r--, 1);
            else this._propLookup = {}, this._siblings = K(t, this, !1), 1 === l && this._siblings.length > 1 && J(t, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -f, this.render(Math.min(0, -this._delay)))
        }, !0),
            D = function (t) {
                return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
            };
        (a = A.prototype = new E).constructor = A, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, A.version = "1.20.2", A.defaultEase = a._ease = new b(null, null, 1, 1), A.defaultOverwrite = "auto", A.ticker = l, A.autoSleep = 120, A.lagSmoothing = function (e, t) {
            l.lagSmoothing(e, t)
        }, A.selector = e.$ || e.jQuery || function (t) {
            var i = e.$ || e.jQuery;
            return i ? (A.selector = i, i(t)) : void 0 === n ? t : n.querySelectorAll ? n.querySelectorAll(t) : n.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
        };
        var L = [],
            R = {},
            j = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            I = /[\+-]=-?[\.\d]/,
            F = function (e) {
                for (var t, i = this._firstPT; i;) t = i.blob ? 1 === e && this.end ? this.end : e ? this.join("") : this.start : i.c * e + i.s, i.m ? t = i.m(t, this._target || i.t) : 1e-6 > t && t > -1e-6 && !i.blob && (t = 0), i.f ? i.fp ? i.t[i.p](i.fp, t) : i.t[i.p](t) : i.t[i.p] = t, i = i._next
            },
            N = function (e, t, i, n) {
                var r, o, s, a, l, c, u, h = [],
                    f = 0,
                    d = "",
                    p = 0;
                for (h.start = e, h.end = t, e = h[0] = e + "", t = h[1] = t + "", i && (i(h), e = h[0], t = h[1]), h.length = 0, r = e.match(j) || [], o = t.match(j) || [], n && (n._next = null, n.blob = 1, h._firstPT = h._applyPT = n), l = o.length, a = 0; l > a; a++) u = o[a], d += (c = t.substr(f, t.indexOf(u, f) - f)) || !a ? c : ",", f += c.length, p ? p = (p + 1) % 5 : "rgba(" === c.substr(-5) && (p = 1), u === r[a] || r.length <= a ? d += u : (d && (h.push(d), d = ""), s = parseFloat(r[a]), h.push(s), h._firstPT = {
                    _next: h._firstPT,
                    t: h,
                    p: h.length - 1,
                    s: s,
                    c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - s) || 0,
                    f: 0,
                    m: p && 4 > p ? Math.round : 0
                }), f += u.length;
                return (d += t.substr(f)) && h.push(d), h.setRatio = F, I.test(t) && (h.end = 0), h
            },
            z = function (e, t, i, n, r, o, s, a, l) {
                "function" == typeof n && (n = n(l || 0, e));
                var c = typeof e[t],
                    u = "function" !== c ? "" : t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3),
                    h = "get" !== i ? i : u ? s ? e[u](s) : e[u]() : e[t],
                    f = "string" == typeof n && "=" === n.charAt(1),
                    d = {
                        t: e,
                        p: t,
                        s: h,
                        f: "function" === c,
                        pg: 0,
                        n: r || t,
                        m: o ? "function" == typeof o ? o : Math.round : 0,
                        pr: 0,
                        c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - h || 0
                    };
                return ("number" != typeof h || "number" != typeof n && !f) && (s || isNaN(h) || !f && isNaN(n) || "boolean" == typeof h || "boolean" == typeof n ? (d.fp = s, d = {
                    t: N(h, f ? parseFloat(d.s) + d.c : n, a || A.defaultStringFilter, d),
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: r || t,
                    pr: 0,
                    m: 0
                }) : (d.s = parseFloat(h), f || (d.c = parseFloat(n) - d.s || 0))), d.c ? ((d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d) : void 0
            },
            H = A._internals = {
                isArray: m,
                isSelector: D,
                lazyTweens: L,
                blobDif: N
            },
            B = A._plugins = {},
            q = H.tweenLookup = {},
            W = 0,
            X = H.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
                yoyoEase: 1
            },
            Y = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                true: 1,
                false: 0
            },
            U = E._rootFramesTimeline = new $,
            V = E._rootTimeline = new $,
            G = 30,
            Q = H.lazyRender = function () {
                var e, t = L.length;
                for (R = {}; --t > -1;)(e = L[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                L.length = 0
            };
        V._startTime = l.time, U._startTime = l.frame, V._active = U._active = !0, setTimeout(Q, 1), E._updateRoot = A.render = function () {
            var e, t, i;
            if (L.length && Q(), V.render((l.time - V._startTime) * V._timeScale, !1, !1), U.render((l.frame - U._startTime) * U._timeScale, !1, !1), L.length && Q(), l.frame >= G) {
                for (i in G = l.frame + (parseInt(A.autoSleep, 10) || 120), q) {
                    for (e = (t = q[i].tweens).length; --e > -1;) t[e]._gc && t.splice(e, 1);
                    0 === t.length && delete q[i]
                }
                if ((!(i = V._first) || i._paused) && A.autoSleep && !U._first && 1 === l._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || l.sleep()
                }
            }
        }, l.addEventListener("tick", E._updateRoot);
        var K = function (e, t, i) {
            var n, r, o = e._gsTweenID;
            if (q[o || (e._gsTweenID = o = "t" + W++)] || (q[o] = {
                target: e,
                tweens: []
            }), t && ((n = q[o].tweens)[r = n.length] = t, i))
                for (; --r > -1;) n[r] === t && n.splice(r, 1);
            return q[o].tweens
        },
            Z = function (e, t, i, n) {
                var r, o, s = e.vars.onOverwrite;
                return s && (r = s(e, t, i, n)), (s = A.onOverwrite) && (o = s(e, t, i, n)), !1 !== r && !1 !== o
            },
            J = function (e, t, i, n, r) {
                var o, s, a, l;
                if (1 === n || n >= 4) {
                    for (l = r.length, o = 0; l > o; o++)
                        if ((a = r[o]) !== t) a._gc || a._kill(null, e, t) && (s = !0);
                        else if (5 === n) break;
                    return s
                }
                var c, u = t._startTime + f,
                    h = [],
                    d = 0,
                    p = 0 === t._duration;
                for (o = r.length; --o > -1;)(a = r[o]) === t || a._gc || a._paused || (a._timeline !== t._timeline ? (c = c || ee(t, 0, p), 0 === ee(a, c, p) && (h[d++] = a)) : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale > u && ((p || !a._initted) && u - a._startTime <= 2e-10 || (h[d++] = a)));
                for (o = d; --o > -1;)
                    if (a = h[o], 2 === n && a._kill(i, e, t) && (s = !0), 2 !== n || !a._firstPT && a._initted) {
                        if (2 !== n && !Z(a, t)) continue;
                        a._enabled(!1, !1) && (s = !0)
                    } return s
            },
            ee = function (e, t, i) {
                for (var n = e._timeline, r = n._timeScale, o = e._startTime; n._timeline;) {
                    if (o += n._startTime, r *= n._timeScale, n._paused) return -100;
                    n = n._timeline
                }
                return (o /= r) > t ? o - t : i && o === t || !e._initted && 2 * f > o - t ? f : (o += e.totalDuration() / e._timeScale / r) > t + f ? 0 : o - t - f
            };
        a._init = function () {
            var e, t, i, n, r, o, s = this.vars,
                a = this._overwrittenProps,
                l = this._duration,
                c = !!s.immediateRender,
                u = s.ease;
            if (s.startAt) {
                for (n in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {}, s.startAt) r[n] = s.startAt[n];
                if (r.overwrite = !1, r.immediateRender = !0, r.lazy = c && !1 !== s.lazy, r.startAt = r.delay = null, r.onUpdate = s.onUpdate, r.onUpdateScope = s.onUpdateScope || s.callbackScope || this, this._startAt = A.to(this.target, 0, r), c)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== l) return
            } else if (s.runBackwards && 0 !== l)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    for (n in 0 !== this._time && (c = !1), i = {}, s) X[n] && "autoCSS" !== n || (i[n] = s[n]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = c && !1 !== s.lazy, i.immediateRender = c, this._startAt = A.to(this.target, 0, i), c) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                } if (this._ease = u = u ? u instanceof b ? u : "function" == typeof u ? new b(u, s.easeParams) : x[u] || A.defaultEase : A.defaultEase, s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (o = this._targets.length, e = 0; o > e; e++) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], a ? a[e] : null, e) && (t = !0);
            else t = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
            if (t && A._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = s.onUpdate, this._initted = !0
        }, a._initProps = function (t, i, n, r, o) {
            var s, a, l, c, u, h;
            if (null == t) return !1;
            for (s in R[t._gsTweenID] && Q(), this.vars.css || t.style && t !== e && t.nodeType && B.css && !1 !== this.vars.autoCSS && function (e, t) {
                var i, n = {};
                for (i in e) X[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!B[i] || B[i] && B[i]._autoCSS) || (n[i] = e[i], delete e[i]);
                e.css = n
            }(this.vars, t), this.vars)
                if (h = this.vars[s], X[s]) h && (h instanceof Array || h.push && m(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[s] = h = this._swapSelfInParams(h, this));
                else if (B[s] && (c = new B[s])._onInitTween(t, this.vars[s], this, o)) {
                    for (this._firstPT = u = {
                        _next: this._firstPT,
                        t: c,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: s,
                        pg: 1,
                        pr: c._priority,
                        m: 0
                    }, a = c._overwriteProps.length; --a > -1;) i[c._overwriteProps[a]] = this._firstPT;
                    (c._priority || c._onInitAllProps) && (l = !0), (c._onDisable || c._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
                } else i[s] = z.call(this, t, s, "get", h, s, 0, null, this.vars.stringFilter, o);
            return r && this._kill(r, t) ? this._initProps(t, i, n, r, o) : this._overwrite > 1 && this._firstPT && n.length > 1 && J(t, this, i, this._overwrite, n) ? (this._kill(i, t), this._initProps(t, i, n, r, o)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (R[t._gsTweenID] = !0), l)
        }, a.render = function (e, t, i) {
            var n, r, o, s, a = this._time,
                l = this._duration,
                c = this._rawPrevTime;
            if (e >= l - 1e-7 && e >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 > c || 0 >= e && e >= -1e-7 || c === f && "isPause" !== this.data) && c !== e && (i = !0, c > f && (r = "onReverseComplete")), this._rawPrevTime = s = !t || e || c === e ? e : f);
            else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && c > 0) && (r = "onReverseComplete", n = this._reversed), 0 > e && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (c !== f || "isPause" !== this.data) && (i = !0), this._rawPrevTime = s = !t || e || c === e ? e : f)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
            else if (this._totalTime = this._time = e, this._easeType) {
                var u = e / l,
                    h = this._easeType,
                    d = this._easePower;
                (1 === h || 3 === h && u >= .5) && (u = 1 - u), 3 === h && (u *= 2), 1 === d ? u *= u : 2 === d ? u *= u * u : 3 === d ? u *= u * u * u : 4 === d && (u *= u * u * u * u), this.ratio = 1 === h ? 1 - u : 2 === h ? u : .5 > e / l ? u / 2 : 1 - u / 2
            } else this.ratio = this._ease.getRatio(e / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = c, L.push(this), void (this._lazy = [e, t]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && e >= 0 && (this._active = !0), 0 === a && (this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                this._onUpdate && (0 > e && this._startAt && -1e-4 !== e && this._startAt.render(e, t, i), t || (this._time !== a || n || i) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && -1e-4 !== e && this._startAt.render(e, t, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === f && s !== f && (this._rawPrevTime = 0))
            }
        }, a._kill = function (e, t, i) {
            if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            t = "string" != typeof t ? t || this._targets || this.target : A.selector(t) || t;
            var n, r, o, s, a, l, c, u, h, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((m(t) || D(t)) && "number" != typeof t[0])
                for (n = t.length; --n > -1;) this._kill(e, t[n], i) && (l = !0);
            else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1;)
                        if (t === this._targets[n]) {
                            a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all";
                            break
                        }
                } else {
                    if (t !== this.target) return !1;
                    a = this._propLookup, r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    if (c = e || a, u = e !== r && "all" !== r && e !== a && ("object" != typeof e || !e._tempKill), i && (A.onOverwrite || this.vars.onOverwrite)) {
                        for (o in c) a[o] && (h || (h = []), h.push(o));
                        if ((h || !e) && !Z(this, i, t, h)) return !1
                    }
                    for (o in c) (s = a[o]) && (f && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, l = !0), s.pg && s.t._kill(c) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), u && (r[o] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }, a.invalidate = function () {
            return this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -f, this.render(Math.min(0, -this._delay))), this
        }, a._enabled = function (e, t) {
            if (c || l.wake(), e && this._gc) {
                var i, n = this._targets;
                if (n)
                    for (i = n.length; --i > -1;) this._siblings[i] = K(n[i], this, !0);
                else this._siblings = K(this.target, this, !0)
            }
            return E.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && A._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
        }, A.to = function (e, t, i) {
            return new A(e, t, i)
        }, A.from = function (e, t, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new A(e, t, i)
        }, A.fromTo = function (e, t, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new A(e, t, n)
        }, A.delayedCall = function (e, t, i, n, r) {
            return new A(t, 0, {
                delay: e,
                onComplete: t,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: t,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0
            })
        }, A.set = function (e, t) {
            return new A(e, 0, t)
        }, A.getTweensOf = function (e, t) {
            if (null == e) return [];
            var i, n, r, o;
            if (e = "string" != typeof e ? e : A.selector(e) || e, (m(e) || D(e)) && "number" != typeof e[0]) {
                for (i = e.length, n = []; --i > -1;) n = n.concat(A.getTweensOf(e[i], t));
                for (i = n.length; --i > -1;)
                    for (o = n[i], r = i; --r > -1;) o === n[r] && n.splice(i, 1)
            } else if (e._gsTweenID)
                for (i = (n = K(e).concat()).length; --i > -1;)(n[i]._gc || t && !n[i].isActive()) && n.splice(i, 1);
            return n || []
        }, A.killTweensOf = A.killDelayedCallsTo = function (e, t, i) {
            "object" == typeof t && (i = t, t = !1);
            for (var n = A.getTweensOf(e, t), r = n.length; --r > -1;) n[r]._kill(i, e)
        };
        var te = y("plugins.TweenPlugin", function (e, t) {
            this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = te.prototype
        }, !0);
        if (a = te.prototype, te.version = "1.19.0", te.API = 2, a._firstPT = null, a._addTween = z, a.setRatio = F, a._kill = function (e) {
            var t, i = this._overwriteProps,
                n = this._firstPT;
            if (null != e[this._propName]) this._overwriteProps = [];
            else
                for (t = i.length; --t > -1;) null != e[i[t]] && i.splice(t, 1);
            for (; n;) null != e[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
            return !1
        }, a._mod = a._roundProps = function (e) {
            for (var t, i = this._firstPT; i;)(t = e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")]) && "function" == typeof t && (2 === i.f ? i.t._applyPT.m = t : i.m = t), i = i._next
        }, A._onPluginEvent = function (e, t) {
            var i, n, r, o, s, a = t._firstPT;
            if ("_onInitAllProps" === e) {
                for (; a;) {
                    for (s = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                    (a._prev = n ? n._prev : o) ? a._prev._next = a : r = a, (a._next = n) ? n._prev = a : o = a, a = s
                }
                a = t._firstPT = r
            }
            for (; a;) a.pg && "function" == typeof a.t[e] && a.t[e]() && (i = !0), a = a._next;
            return i
        }, te.activate = function (e) {
            for (var t = e.length; --t > -1;) e[t].API === te.API && (B[(new e[t])._propName] = e[t]);
            return !0
        }, v.plugin = function (e) {
            if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
            var t, i = e.propName,
                n = e.priority || 0,
                r = e.overwriteProps,
                o = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_mod",
                    mod: "_mod",
                    initAll: "_onInitAllProps"
                },
                s = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                    te.call(this, i, n), this._overwriteProps = r || []
                }, !0 === e.global),
                a = s.prototype = new te(i);
            for (t in a.constructor = s, s.API = e.API, o) "function" == typeof e[t] && (a[o[t]] = e[t]);
            return s.version = e.version, te.activate([s]), s
        }, o = e._gsQueue) {
            for (s = 0; s < o.length; s++) o[s]();
            for (a in g) g[a].func || e.console.log("GSAP encountered missing dependency: " + a)
        }
        c = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
}(this, function () {
    "use strict";

    function e() { }
    e.version = "2.0.8", "undefined" != typeof window && window.addEventListener("mousewheel", void 0);
    var t = "data-scrollmagic-pin-spacer";
    e.Controller = function (n) {
        function o() {
            var e, t, i;
            w && m && (e = r.type.Array(m) ? m : p.slice(0), m = !1, t = g, 0 != (i = (g = f.scrollPos()) - t) && (_ = 0 < i ? "FORWARD" : c), _ === c && e.reverse(), e.forEach(function (e, t) {
                e.update(!0)
            }))
        }

        function s() {
            a = r.rAF(o)
        }
        var a, l, c = "REVERSE",
            u = "PAUSED",
            h = i.defaults,
            f = this,
            d = r.extend({}, h, n),
            p = [],
            m = !1,
            g = 0,
            _ = u,
            v = !0,
            y = 0,
            w = !0,
            b = function () {
                0 < d.refreshInterval && (l = window.setTimeout(k, d.refreshInterval))
            },
            x = function () {
                return d.vertical ? r.get.scrollTop(d.container) : r.get.scrollLeft(d.container)
            },
            T = function () {
                return d.vertical ? r.get.height(d.container) : r.get.width(d.container)
            },
            C = this._setScrollPos = function (e) {
                d.vertical ? v ? window.scrollTo(r.get.scrollLeft(), e) : d.container.scrollTop = e : v ? window.scrollTo(e, r.get.scrollTop()) : d.container.scrollLeft = e
            },
            S = function (e) {
                "resize" == e.type && (y = T(), _ = u), !0 !== m && (m = !0, s())
            },
            k = function () {
                if (!v && y != T()) {
                    var e;
                    try {
                        e = new Event("resize", {
                            bubbles: !1,
                            cancelable: !1
                        })
                    } catch (t) {
                        (e = document.createEvent("Event")).initEvent("resize", !1, !1)
                    }
                    d.container.dispatchEvent(e)
                }
                p.forEach(function (e, t) {
                    e.refresh()
                }), b()
            };

        function P(e) {
            if (e.length <= 1) return e;
            var t = e.slice(0);
            return t.sort(function (e, t) {
                return e.scrollOffset() > t.scrollOffset() ? 1 : -1
            }), t
        }
        return this._options = d, this.addScene = function (t) {
            if (r.type.Array(t)) t.forEach(function (e, t) {
                f.addScene(e)
            });
            else if (t instanceof e.Scene)
                if (t.controller() !== f) t.addTo(f);
                else if (!~p.indexOf(t))
                    for (var i in p.push(t), p = P(p), t.on("shift.controller_sort", function () {
                        p = P(p)
                    }), d.globalSceneOptions) t[i] && t[i].call(t, d.globalSceneOptions[i]);
            return f
        }, this.removeScene = function (e) {
            var t;
            return r.type.Array(e) ? e.forEach(function (e, t) {
                f.removeScene(e)
            }) : -1 < (t = p.indexOf(e)) && (e.off("shift.controller_sort"), p.splice(t, 1), e.remove()), f
        }, this.updateScene = function (t, i) {
            return r.type.Array(t) ? t.forEach(function (e, t) {
                f.updateScene(e, i)
            }) : i ? t.update(!0) : !0 !== m && t instanceof e.Scene && (~(m = m || []).indexOf(t) || m.push(t), m = P(m), s()), f
        }, this.update = function (e) {
            return S({
                type: "resize"
            }), e && o(), f
        }, this.scrollTo = function (i, n) {
            if (r.type.Number(i)) C.call(d.container, i, n);
            else if (i instanceof e.Scene) i.controller() === f && f.scrollTo(i.scrollOffset(), n);
            else if (r.type.Function(i)) C = i;
            else {
                var o = r.get.elements(i)[0];
                if (o) {
                    for (; o.parentNode.hasAttribute(t);) o = o.parentNode;
                    var s = d.vertical ? "top" : "left",
                        a = r.get.offset(d.container),
                        l = r.get.offset(o);
                    v || (a[s] -= f.scrollPos()), f.scrollTo(l[s] - a[s], n)
                }
            }
            return f
        }, this.scrollPos = function (e) {
            return arguments.length ? (r.type.Function(e) && (x = e), f) : x.call(f)
        }, this.info = function (e) {
            var t = {
                size: y,
                vertical: d.vertical,
                scrollPos: g,
                scrollDirection: _,
                container: d.container,
                isDocument: v
            };
            return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t
        }, this.loglevel = function (e) {
            return f
        }, this.enabled = function (e) {
            return arguments.length ? (w != e && (w = !!e, f.updateScene(p, !0)), f) : w
        }, this.destroy = function (e) {
            window.clearTimeout(l);
            for (var t = p.length; t--;) p[t].destroy(e);
            return d.container.removeEventListener("resize", S), d.container.removeEventListener("scroll", S), r.cAF(a), null
        },
            function () {
                for (var e in d) h.hasOwnProperty(e) || delete d[e];
                if (d.container = r.get.elements(d.container)[0], !d.container) throw "ScrollMagic.Controller init failed.";
                (v = d.container === window || d.container === document.body || !document.body.contains(d.container)) && (d.container = window), y = T(), d.container.addEventListener("resize", S), d.container.addEventListener("scroll", S);
                var t = parseInt(d.refreshInterval, 10);
                d.refreshInterval = r.type.Number(t) ? t : h.refreshInterval, b()
            }(), f
    };
    var i = {
        defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
        }
    };
    e.Controller.addOption = function (e, t) {
        i.defaults[e] = t
    }, e.Controller.extend = function (t) {
        var i = this;
        e.Controller = function () {
            return i.apply(this, arguments), this.$super = r.extend({}, this), t.apply(this, arguments) || this
        }, r.extend(e.Controller, i), e.Controller.prototype = i.prototype, e.Controller.prototype.constructor = e.Controller
    }, e.Scene = function (i) {
        var o, s, a = "BEFORE",
            l = "DURING",
            c = "AFTER",
            u = n.defaults,
            h = this,
            f = r.extend({}, u, i),
            d = a,
            p = 0,
            m = {
                start: 0,
                end: 0
            },
            g = 0,
            _ = !0,
            v = {};
        this.on = function (e, t) {
            return r.type.Function(t) && (e = e.trim().split(" ")).forEach(function (e) {
                var i = e.split("."),
                    n = i[0],
                    r = i[1];
                "*" != n && (v[n] || (v[n] = []), v[n].push({
                    namespace: r || "",
                    callback: t
                }))
            }), h
        }, this.off = function (e, t) {
            return e && (e = e.trim().split(" ")).forEach(function (e, i) {
                var n = e.split("."),
                    r = n[0],
                    o = n[1] || "";
                ("*" === r ? Object.keys(v) : [r]).forEach(function (e) {
                    for (var i = v[e] || [], n = i.length; n--;) {
                        var r = i[n];
                        !r || o !== r.namespace && "*" !== o || t && t != r.callback || i.splice(n, 1)
                    }
                    i.length || delete v[e]
                })
            }), h
        }, this.trigger = function (t, i) {
            var n, r, o, s;
            return t && (n = t.trim().split("."), r = n[0], o = n[1], (s = v[r]) && s.forEach(function (t, n) {
                o && o !== t.namespace || t.callback.call(h, new e.Event(r, t.namespace, h, i))
            })), h
        }, h.on("change.internal", function (e) {
            "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? T() : "reverse" === e.what && h.update())
        }).on("shift.internal", function (e) {
            b(), h.update()
        }), this.addTo = function (t) {
            return t instanceof e.Controller && s != t && (s && s.removeScene(h), s = t, k(), x(!0), T(!0), b(), s.info("container").addEventListener("resize", C), t.addScene(h), h.trigger("add", {
                controller: s
            }), h.update()), h
        }, this.enabled = function (e) {
            return arguments.length ? (_ != e && (_ = !!e, h.update(!0)), h) : _
        }, this.remove = function () {
            var e;
            return s && (s.info("container").removeEventListener("resize", C), e = s, s = void 0, e.removeScene(h), h.trigger("remove")), h
        }, this.destroy = function (e) {
            return h.trigger("destroy", {
                reset: e
            }), h.remove(), h.off("*.*"), null
        }, this.update = function (e) {
            var t, i;
            return s && (e ? s.enabled() && _ ? (t = s.info("scrollPos"), i = 0 < f.duration ? (t - m.start) / (m.end - m.start) : t >= m.start ? 1 : 0, h.trigger("update", {
                startPos: m.start,
                endPos: m.end,
                scrollPos: t
            }), h.progress(i)) : y && d === l && A(!0) : s.updateScene(h, !1)), h
        }, this.refresh = function () {
            return x(), T(), h
        }, this.progress = function (e) {
            if (arguments.length) {
                var t, i, n, r = !1,
                    o = d,
                    u = s ? s.info("scrollDirection") : "PAUSED",
                    m = f.reverse || p <= e;
                return 0 === f.duration ? (r = p != e, d = 0 == (p = e < 1 && m ? 0 : 1) ? a : l) : e < 0 && d !== a && m ? (d = a, r = !(p = 0)) : 0 <= e && e < 1 && m ? (p = e, d = l, r = !0) : 1 <= e && d !== c ? (p = 1, d = c, r = !0) : d !== l || m || A(), r && (t = {
                    progress: p,
                    state: d,
                    scrollDirection: u
                }, n = function (e) {
                    h.trigger(e, t)
                }, (i = d != o) && o !== l && (n("enter"), n(o === a ? "start" : "end")), n("progress"), i && d !== l && (n(d === a ? "start" : "end"), n("leave"))), h
            }
            return p
        };
        var y, w, b = function () {
            m = {
                start: g + f.offset
            }, s && f.triggerElement && (m.start -= s.info("size") * f.triggerHook), m.end = m.start + f.duration
        },
            x = function (e) {
                var t;
                !o || P(t = "duration", o.call(h)) && !e && (h.trigger("change", {
                    what: t,
                    newval: f[t]
                }), h.trigger("shift", {
                    reason: t
                }))
            },
            T = function (e) {
                var i = 0,
                    n = f.triggerElement;
                if (s && (n || 0 < g)) {
                    if (n)
                        if (n.parentNode) {
                            for (var o = s.info(), a = r.get.offset(o.container), l = o.vertical ? "top" : "left"; n.parentNode.hasAttribute(t);) n = n.parentNode;
                            var c = r.get.offset(n);
                            o.isDocument || (a[l] -= s.scrollPos()), i = c[l] - a[l]
                        } else h.triggerElement(void 0);
                    var u = i != g;
                    g = i, u && !e && h.trigger("shift", {
                        reason: "triggerElementPosition"
                    })
                }
            },
            C = function (e) {
                0 < f.triggerHook && h.trigger("shift", {
                    reason: "containerResize"
                })
            },
            S = r.extend(n.validate, {
                duration: function (e) {
                    var t;
                    if (r.type.String(e) && e.match(/^(\.|\d)*\d+%$/) && (t = parseFloat(e) / 100, e = function () {
                        return s ? s.info("size") * t : 0
                    }), r.type.Function(e)) {
                        o = e;
                        try {
                            e = parseFloat(o.call(h))
                        } catch (t) {
                            e = -1
                        }
                    }
                    if (e = parseFloat(e), !r.type.Number(e) || e < 0) throw o = o && void 0, 0;
                    return e
                }
            }),
            k = function (e) {
                (e = arguments.length ? [e] : Object.keys(S)).forEach(function (e, t) {
                    var i;
                    if (S[e]) try {
                        i = S[e](f[e])
                    } catch (t) {
                        i = u[e]
                    } finally {
                            f[e] = i
                        }
                })
            },
            P = function (e, t) {
                var i = !1,
                    n = f[e];
                return f[e] != t && (f[e] = t, k(e), i = n != f[e]), i
            },
            O = function (e) {
                h[e] || (h[e] = function (t) {
                    return arguments.length ? ("duration" === e && (o = void 0), P(e, t) && (h.trigger("change", {
                        what: e,
                        newval: f[e]
                    }), ~n.shifts.indexOf(e) && h.trigger("shift", {
                        reason: e
                    })), h) : f[e]
                })
            };

        function E() {
            s && y && d === l && !s.info("isDocument") && A()
        }

        function M() {
            s && y && d === l && ((w.relSize.width || w.relSize.autoFullWidth) && r.get.width(window) != r.get.width(w.spacer.parentNode) || w.relSize.height && r.get.height(window) != r.get.height(w.spacer.parentNode)) && D()
        }

        function $(e) {
            s && y && d === l && !s.info("isDocument") && (e.preventDefault(), s._setScrollPos(s.info("scrollPos") - ((e.wheelDelta || e[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
        }
        this.controller = function () {
            return s
        }, this.state = function () {
            return d
        }, this.scrollOffset = function () {
            return m.start
        }, this.triggerPosition = function () {
            var e = f.offset;
            return s && (f.triggerElement ? e += g : e += s.info("size") * h.triggerHook()), e
        }, h.on("shift.internal", function (e) {
            var t = "duration" === e.reason;
            (d === c && t || d === l && 0 === f.duration) && A(), t && D()
        }).on("progress.internal", function (e) {
            A()
        }).on("add.internal", function (e) {
            D()
        }).on("destroy.internal", function (e) {
            h.removePin(e.reset)
        });
        var A = function (e) {
            var t, i, n, o, u, h;
            y && s && (t = s.info(), i = w.spacer.firstChild, e || d !== l ? (n = {
                position: w.inFlow ? "relative" : "absolute",
                top: 0,
                left: 0
            }, o = r.css(i, "position") != n.position, w.pushFollowers ? 0 < f.duration && (d === c && 0 === parseFloat(r.css(w.spacer, "padding-top")) || d === a && 0 === parseFloat(r.css(w.spacer, "padding-bottom"))) && (o = !0) : n[t.vertical ? "top" : "left"] = f.duration * p, r.css(i, n), o && D()) : ("fixed" != r.css(i, "position") && (r.css(i, {
                position: "fixed"
            }), D()), u = r.get.offset(w.spacer, !0), h = f.reverse || 0 === f.duration ? t.scrollPos - m.start : Math.round(p * f.duration * 10) / 10, u[t.vertical ? "top" : "left"] += h, r.css(w.spacer.firstChild, {
                top: u.top,
                left: u.left
            })))
        },
            D = function () {
                var e, t, i, n, o;
                y && s && w.inFlow && (e = d === l, t = s.info("vertical"), i = w.spacer.firstChild, n = r.isMarginCollapseType(r.css(w.spacer, "display")), o = {}, w.relSize.width || w.relSize.autoFullWidth ? e ? r.css(y, {
                    width: r.get.width(w.spacer)
                }) : r.css(y, {
                    width: "100%"
                }) : (o["min-width"] = r.get.width(t ? y : i, !0, !0), o.width = e ? o["min-width"] : "auto"), w.relSize.height ? e ? r.css(y, {
                    height: r.get.height(w.spacer) - (w.pushFollowers ? f.duration : 0)
                }) : r.css(y, {
                    height: "100%"
                }) : (o["min-height"] = r.get.height(t ? i : y, !0, !n), o.height = e ? o["min-height"] : "auto"), w.pushFollowers && (o["padding" + (t ? "Top" : "Left")] = f.duration * p, o["padding" + (t ? "Bottom" : "Right")] = f.duration * (1 - p)), r.css(w.spacer, o))
            };
        this.setPin = function (e, i) {
            if (i = r.extend({}, {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
            }, i), !(e = r.get.elements(e)[0])) return h;
            if ("fixed" === r.css(e, "position")) return h;
            if (y) {
                if (y === e) return h;
                h.removePin()
            }
            var n = (y = e).parentNode.style.display,
                o = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            y.parentNode.style.display = "none";
            var s = "absolute" != r.css(y, "position"),
                a = r.css(y, o.concat(["display"])),
                l = r.css(y, ["width", "height"]);
            y.parentNode.style.display = n, !s && i.pushFollowers && (i.pushFollowers = !1);
            var c, u = y.parentNode.insertBefore(document.createElement("div"), y),
                f = r.extend(a, {
                    position: s ? "relative" : "absolute",
                    boxSizing: "content-box",
                    mozBoxSizing: "content-box",
                    webkitBoxSizing: "content-box"
                });
            return s || r.extend(f, r.css(y, ["width", "height"])), r.css(u, f), u.setAttribute(t, ""), r.addClass(u, i.spacerClass), w = {
                spacer: u,
                relSize: {
                    width: "%" === l.width.slice(-1),
                    height: "%" === l.height.slice(-1),
                    autoFullWidth: "auto" === l.width && s && r.isMarginCollapseType(a.display)
                },
                pushFollowers: i.pushFollowers,
                inFlow: s
            }, y.___origStyle || (y.___origStyle = {}, c = y.style, o.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function (e) {
                y.___origStyle[e] = c[e] || ""
            })), w.relSize.width && r.css(u, {
                width: l.width
            }), w.relSize.height && r.css(u, {
                height: l.height
            }), u.appendChild(y), r.css(y, {
                position: s ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }), (w.relSize.width || w.relSize.autoFullWidth) && r.css(y, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }), window.addEventListener("scroll", E), window.addEventListener("resize", E), window.addEventListener("resize", M), y.addEventListener("mousewheel", $), y.addEventListener("DOMMouseScroll", $), A(), h
        }, this.removePin = function (e) {
            var i, n, o;
            return y && (d === l && A(!0), !e && s || ((i = w.spacer.firstChild).hasAttribute(t) && (n = w.spacer.style, o = {}, ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function (e) {
                o[e] = n[e] || ""
            }), r.css(i, o)), w.spacer.parentNode.insertBefore(i, w.spacer), w.spacer.parentNode.removeChild(w.spacer), y.parentNode.hasAttribute(t) || (r.css(y, y.___origStyle), delete y.___origStyle)), window.removeEventListener("scroll", E), window.removeEventListener("resize", E), window.removeEventListener("resize", M), y.removeEventListener("mousewheel", $), y.removeEventListener("DOMMouseScroll", $), y = void 0), h
        };
        var L, R = [];
        return h.on("destroy.internal", function (e) {
            h.removeClassToggle(e.reset)
        }), this.setClassToggle = function (e, t) {
            var i = r.get.elements(e);
            return 0 !== i.length && r.type.String(t) && (0 < R.length && h.removeClassToggle(), L = t, R = i, h.on("enter.internal_class leave.internal_class", function (e) {
                var t = "enter" === e.type ? r.addClass : r.removeClass;
                R.forEach(function (e, i) {
                    t(e, L)
                })
            })), h
        }, this.removeClassToggle = function (e) {
            return e && R.forEach(function (e, t) {
                r.removeClass(e, L)
            }), h.off("start.internal_class end.internal_class"), L = void 0, R = [], h
        },
            function () {
                for (var e in f) u.hasOwnProperty(e) || delete f[e];
                for (var t in u) O(t);
                k()
            }(), h
    };
    var n = {
        defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: .5,
            reverse: !0,
            loglevel: 2
        },
        validate: {
            offset: function (e) {
                if (e = parseFloat(e), !r.type.Number(e)) throw 0;
                return e
            },
            triggerElement: function (e) {
                if (e = e || void 0) {
                    var t = r.get.elements(e)[0];
                    if (!t || !t.parentNode) throw 0;
                    e = t
                }
                return e
            },
            triggerHook: function (e) {
                var t = {
                    onCenter: .5,
                    onEnter: 1,
                    onLeave: 0
                };
                if (r.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
                else {
                    if (!(e in t)) throw 0;
                    e = t[e]
                }
                return e
            },
            reverse: function (e) {
                return !!e
            }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    e.Scene.addOption = function (e, t, i, r) {
        e in n.defaults || (n.defaults[e] = t, n.validate[e] = i, r && n.shifts.push(e))
    }, e.Scene.extend = function (t) {
        var i = this;
        e.Scene = function () {
            return i.apply(this, arguments), this.$super = r.extend({}, this), t.apply(this, arguments) || this
        }, r.extend(e.Scene, i), e.Scene.prototype = i.prototype, e.Scene.prototype.constructor = e.Scene
    }, e.Event = function (e, t, i, n) {
        for (var r in n = n || {}) this[r] = n[r];
        return this.type = e, this.target = this.currentTarget = i, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
    };
    var r = e._util = function (e) {
        function t(e) {
            return parseFloat(e) || 0
        }

        function i(t) {
            return t.currentStyle ? t.currentStyle : e.getComputedStyle(t)
        }

        function n(n, r, o, s) {
            if ((r = r === document ? e : r) === e) s = !1;
            else if (!h.DomElement(r)) return 0;
            n = n[0].toUpperCase() + n.substr(1).toLowerCase();
            var a, l = (o ? r["offset" + n] || r["outer" + n] : r["client" + n] || r["inner" + n]) || 0;
            return o && s && (a = i(r), l += "Height" === n ? t(a.marginTop) + t(a.marginBottom) : t(a.marginLeft) + t(a.marginRight)), l
        }

        function r(e) {
            return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function (e) {
                return e[1].toUpperCase()
            })
        }
        for (var o = {
            extend: function (e) {
                for (e = e || {}, u = 1; u < arguments.length; u++)
                    if (arguments[u])
                        for (var t in arguments[u]) arguments[u].hasOwnProperty(t) && (e[t] = arguments[u][t]);
                return e
            },
            isMarginCollapseType: function (e) {
                return !!~["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e)
            }
        }, s = 0, a = ["ms", "moz", "webkit", "o"], l = e.requestAnimationFrame, c = e.cancelAnimationFrame, u = 0; !l && u < 4; ++u) l = e[a[u] + "RequestAnimationFrame"], c = e[a[u] + "CancelAnimationFrame"] || e[a[u] + "CancelRequestAnimationFrame"];
        l = l || function (t) {
            var i = (new Date).getTime(),
                n = Math.max(0, 16 - (i - s)),
                r = e.setTimeout(function () {
                    t(i + n)
                }, n);
            return s = i + n, r
        }, c = c || function (t) {
            e.clearTimeout(t)
        }, o.rAF = l.bind(e), o.cAF = c.bind(e);
        var h = o.type = function (e) {
            return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        };
        h.String = function (e) {
            return "string" === h(e)
        }, h.Function = function (e) {
            return "function" === h(e)
        }, h.Array = function (e) {
            return Array.isArray(e)
        }, h.Number = function (e) {
            return !h.Array(e) && 0 <= e - parseFloat(e) + 1
        }, h.DomElement = function (e) {
            return "object" == typeof HTMLElement || "function" == typeof HTMLElement ? e instanceof HTMLElement || e instanceof SVGElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
        };
        var f = o.get = {};
        return f.elements = function (t) {
            var i = [];
            if (h.String(t)) try {
                t = document.querySelectorAll(t)
            } catch (t) {
                return i
            }
            if ("nodelist" === h(t) || h.Array(t) || t instanceof NodeList)
                for (var n = 0, r = i.length = t.length; n < r; n++) {
                    var o = t[n];
                    i[n] = h.DomElement(o) ? o : f.elements(o)
                } else !h.DomElement(t) && t !== document && t !== e || (i = [t]);
            return i
        }, f.scrollTop = function (t) {
            return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0
        }, f.scrollLeft = function (t) {
            return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0
        }, f.width = function (e, t, i) {
            return n("width", e, t, i)
        }, f.height = function (e, t, i) {
            return n("height", e, t, i)
        }, f.offset = function (e, t) {
            var i, n = {
                top: 0,
                left: 0
            };
            return e && e.getBoundingClientRect && (i = e.getBoundingClientRect(), n.top = i.top, n.left = i.left, t || (n.top += f.scrollTop(), n.left += f.scrollLeft())), n
        }, o.addClass = function (e, t) {
            t && (e.classList ? e.classList.add(t) : e.className += " " + t)
        }, o.removeClass = function (e, t) {
            t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }, o.css = function (e, t) {
            if (h.String(t)) return i(e)[r(t)];
            if (h.Array(t)) {
                var n = {},
                    o = i(e);
                return t.forEach(function (e, t) {
                    n[e] = o[r(e)]
                }), n
            }
            for (var s in t) {
                var a = t[s];
                a == parseFloat(a) && (a += "px"), e.style[r(s)] = a
            }
        }, o
    }(window || {});
    return e
}), function (e, t) {
    var i;
    "function" == typeof define && define.amd ? define(["ScrollMagic", "gsap", "TweenMax", "TimelineMax"], t) : "object" == typeof exports ? (i = require("gsap/dist/gsap") || require("gsap"), t(require("scrollmagic"), i, TweenMax || i, TimelineMax || i)) : t(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.gsap, e.gsap || e.TweenMax || e.TweenLite, e.gsap || e.TimelineMax || e.TimelineLite)
}(this, function (e, t, i, n) {
    "use strict";
    var r = t && 3 <= parseFloat(t.version);
    e.Scene.addOption("tweenChanges", !1, function (e) {
        return !!e
    }), e.Scene.extend(function () {
        var e, t = this;
        t.on("progress.plugin_gsap", function () {
            o()
        }), t.on("destroy.plugin_gsap", function (e) {
            t.removeTween(e.reset)
        });
        var o = function () {
            var i, n;
            e && (i = t.progress(), n = t.state(), e.repeat && -1 === e.repeat() ? "DURING" === n && e.paused() ? e.play() : "DURING" === n || e.paused() || e.pause() : i != e.progress() && (0 === t.duration() ? 0 < i ? e.play() : e.reverse() : t.tweenChanges() && e.tweenTo ? e.tweenTo(i * e.duration()) : e.progress(i).pause()))
        };
        t.setTween = function (s, a, l) {
            var c, u;
            1 < arguments.length && (u = "number" == typeof arguments[1], r ? (u || (l = a), l.hasOwnProperty("duration") || (l.duration = u ? a : 1)) : arguments.length < 3 && (l = a, a = 1), s = r ? i.to(s, l) : i.to(s, a, l));
            try {
                (c = n && !r ? new n({
                    smoothChildTiming: !0
                }).add(s) : s).pause()
            } catch (s) {
                return t
            }
            return e && t.removeTween(), e = c, s.repeat && -1 === s.repeat() && (e.repeat(-1), e.yoyo(s.yoyo())), o(), t
        }, t.removeTween = function (i) {
            return e && (i && e.progress(0).pause(), e.kill(), e = void 0), t
        }
    })
}), function (e, t) {
    "function" == typeof define && define.amd ? define(["ScrollMagic"], t) : "object" == typeof exports ? t(require("scrollmagic")) : t(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic)
}(this, function (e) {
    "use strict";
    var t = "0.85em",
        i = "9999",
        n = e._util,
        r = 0;
    e.Scene.extend(function () {
        var e, t = this;
        t.addIndicators = function (i) {
            var s;
            return e || (s = {
                name: "",
                indent: 0,
                parent: void 0,
                colorStart: "green",
                colorEnd: "red",
                colorTrigger: "blue"
            }, i = n.extend({}, s, i), r++, e = new o(t, i), t.on("add.plugin_addIndicators", e.add), t.on("remove.plugin_addIndicators", e.remove), t.on("destroy.plugin_addIndicators", t.removeIndicators), t.controller() && e.add()), t
        }, t.removeIndicators = function () {
            return e && (e.remove(), this.off("*.plugin_addIndicators"), e = void 0), t
        }
    }), e.Controller.addOption("addIndicators", !1), e.Controller.extend(function () {
        var t = this,
            i = t.info(),
            r = i.container,
            o = i.isDocument,
            s = i.vertical,
            a = {
                groups: []
            };

        function l() {
            a.updateBoundsPositions()
        }

        function c() {
            a.updateTriggerGroupPositions()
        }
        return this._indicators = a, r.addEventListener("resize", c), o || (window.addEventListener("resize", c), window.addEventListener("scroll", c)), r.addEventListener("resize", l), r.addEventListener("scroll", l), this._indicators.updateBoundsPositions = function (e) {
            for (var t, i, o, l = e ? [n.extend({}, e.triggerGroup, {
                members: [e]
            })] : a.groups, c = l.length, u = {}, h = s ? "left" : "top", f = s ? "width" : "height", d = s ? n.get.scrollLeft(r) + n.get.width(r) - 15 : n.get.scrollTop(r) + n.get.height(r) - 15; c--;)
                for (t = (o = l[c]).members.length, i = n.get[f](o.element.firstChild); t--;) u[h] = d - i, n.css(o.members[t].bounds, u)
        }, this._indicators.updateTriggerGroupPositions = function (e) {
            for (var i, l, c, u, h = e ? [e] : a.groups, f = h.length, d = o ? document.body : r, p = o ? {
                top: 0,
                left: 0
            } : n.get.offset(d, !0), m = s ? n.get.width(r) - 15 : n.get.height(r) - 15, g = s ? "width" : "height", _ = s ? "Y" : "X"; f--;) l = (i = h[f]).element, c = i.triggerHook * t.info("size"), u = n.get[g](l.firstChild.firstChild) < c ? "translate" + _ + "(-100%)" : "", n.css(l, {
                top: p.top + (s ? c : m - i.members[0].options.indent),
                left: p.left + (s ? m - i.members[0].options.indent : c)
            }), n.css(l.firstChild.firstChild, {
                "-ms-transform": u,
                "-webkit-transform": u,
                transform: u
            })
        }, this._indicators.updateTriggerGroupLabel = function (e) {
            var t = "trigger" + (1 < e.members.length ? "" : " " + e.members[0].options.name),
                i = e.element.firstChild.firstChild;
            i.textContent !== t && (i.textContent = t, s && a.updateBoundsPositions())
        }, this.addScene = function (i) {
            this._options.addIndicators && i instanceof e.Scene && i.controller() === t && i.addIndicators(), this.$super.addScene.apply(this, arguments)
        }, this.destroy = function () {
            r.removeEventListener("resize", c), o || (window.removeEventListener("resize", c), window.removeEventListener("scroll", c)), r.removeEventListener("resize", l), r.removeEventListener("scroll", l), this.$super.destroy.apply(this, arguments)
        }, t
    });
    var o = function (e, t) {
        var i, o, a = this,
            l = s.bounds(),
            c = s.start(t.colorStart),
            u = s.end(t.colorEnd),
            h = t.parent && n.get.elements(t.parent)[0];
        t.name = t.name || r, c.firstChild.textContent += " " + t.name, u.textContent += " " + t.name, l.appendChild(c), l.appendChild(u), a.options = t, a.bounds = l, a.triggerGroup = void 0, this.add = function () {
            o = e.controller(), i = o.info("vertical");
            var t = o.info("isDocument");
            h = h || (t ? document.body : o.info("container")), t || "static" !== n.css(h, "position") || n.css(h, {
                position: "relative"
            }), e.on("change.plugin_addIndicators", d), e.on("shift.plugin_addIndicators", f), _(), m(), setTimeout(function () {
                o._indicators.updateBoundsPositions(a)
            }, 0)
        }, this.remove = function () {
            var t;
            a.triggerGroup && (e.off("change.plugin_addIndicators", d), e.off("shift.plugin_addIndicators", f), 1 < a.triggerGroup.members.length ? ((t = a.triggerGroup).members.splice(t.members.indexOf(a), 1), o._indicators.updateTriggerGroupLabel(t), o._indicators.updateTriggerGroupPositions(t), a.triggerGroup = void 0) : g(), p())
        };
        var f = function () {
            m()
        },
            d = function (e) {
                "triggerHook" === e.what && _()
            },
            p = function () {
                l.parentNode.removeChild(l)
            },
            m = function () {
                var r;
                l.parentNode !== h && (r = o.info("vertical"), n.css(c.firstChild, {
                    "border-bottom-width": r ? 1 : 0,
                    "border-right-width": r ? 0 : 1,
                    bottom: r ? -1 : t.indent,
                    right: r ? t.indent : -1,
                    padding: r ? "0 8px" : "2px 4px"
                }), n.css(u, {
                    "border-top-width": r ? 1 : 0,
                    "border-left-width": r ? 0 : 1,
                    top: r ? "100%" : "",
                    right: r ? t.indent : "",
                    bottom: r ? "" : t.indent,
                    left: r ? "" : "100%",
                    padding: r ? "0 8px" : "2px 4px"
                }), h.appendChild(l));
                var s = {};
                s[i ? "top" : "left"] = e.triggerPosition(), s[i ? "height" : "width"] = e.duration(), n.css(l, s), n.css(u, {
                    display: 0 < e.duration() ? "" : "none"
                })
            },
            g = function () {
                o._indicators.groups.splice(o._indicators.groups.indexOf(a.triggerGroup), 1), a.triggerGroup.element.parentNode.removeChild(a.triggerGroup.element), a.triggerGroup = void 0
            },
            _ = function () {
                var r = e.triggerHook();
                if (!(a.triggerGroup && Math.abs(a.triggerGroup.triggerHook - r) < 1e-4)) {
                    for (var l, c = o._indicators.groups, u = c.length; u--;)
                        if (l = c[u], Math.abs(l.triggerHook - r) < 1e-4) return a.triggerGroup && (1 === a.triggerGroup.members.length ? g() : (a.triggerGroup.members.splice(a.triggerGroup.members.indexOf(a), 1), o._indicators.updateTriggerGroupLabel(a.triggerGroup), o._indicators.updateTriggerGroupPositions(a.triggerGroup))), l.members.push(a), a.triggerGroup = l, void o._indicators.updateTriggerGroupLabel(l);
                    if (a.triggerGroup) {
                        if (1 === a.triggerGroup.members.length) return a.triggerGroup.triggerHook = r, void o._indicators.updateTriggerGroupPositions(a.triggerGroup);
                        a.triggerGroup.members.splice(a.triggerGroup.members.indexOf(a), 1), o._indicators.updateTriggerGroupLabel(a.triggerGroup), o._indicators.updateTriggerGroupPositions(a.triggerGroup), a.triggerGroup = void 0
                    } ! function () {
                        var r = s.trigger(t.colorTrigger),
                            l = {};
                        l[i ? "right" : "bottom"] = 0, l[i ? "border-top-width" : "border-left-width"] = 1, n.css(r.firstChild, l), n.css(r.firstChild.firstChild, {
                            padding: i ? "0 8px 3px 8px" : "3px 4px"
                        }), document.body.appendChild(r);
                        var c = {
                            triggerHook: e.triggerHook(),
                            element: r,
                            members: [a]
                        };
                        o._indicators.groups.push(c), a.triggerGroup = c, o._indicators.updateTriggerGroupLabel(c), o._indicators.updateTriggerGroupPositions(c)
                    }()
                }
            }
    },
        s = {
            start: function (e) {
                var t = document.createElement("div");
                t.textContent = "start", n.css(t, {
                    position: "absolute",
                    overflow: "visible",
                    "border-width": 0,
                    "border-style": "solid",
                    color: e,
                    "border-color": e
                });
                var i = document.createElement("div");
                return n.css(i, {
                    position: "absolute",
                    overflow: "visible",
                    width: 0,
                    height: 0
                }), i.appendChild(t), i
            },
            end: function (e) {
                var t = document.createElement("div");
                return t.textContent = "end", n.css(t, {
                    position: "absolute",
                    overflow: "visible",
                    "border-width": 0,
                    "border-style": "solid",
                    color: e,
                    "border-color": e
                }), t
            },
            bounds: function () {
                var e = document.createElement("div");
                return n.css(e, {
                    position: "absolute",
                    overflow: "visible",
                    "white-space": "nowrap",
                    "pointer-events": "none",
                    "font-size": t
                }), e.style.zIndex = i, e
            },
            trigger: function (e) {
                var r = document.createElement("div");
                r.textContent = "trigger", n.css(r, {
                    position: "relative"
                });
                var o = document.createElement("div");
                n.css(o, {
                    position: "absolute",
                    overflow: "visible",
                    "border-width": 0,
                    "border-style": "solid",
                    color: e,
                    "border-color": e
                }), o.appendChild(r);
                var s = document.createElement("div");
                return n.css(s, {
                    position: "fixed",
                    overflow: "visible",
                    "white-space": "nowrap",
                    "pointer-events": "none",
                    "font-size": t
                }), s.style.zIndex = i, s.appendChild(o), s
            }
        }
}), $(window).outerWidth() >= 1280) {
    var ss__Browser = navigator.userAgent,
        ss__IsSafari = ss__Browser.toLowerCase().includes("safari") && !ss__Browser.toLowerCase().includes("chrome"),
        ss__stepSize = 120,
        ss__animationTime = 1600;
    1 == ss__IsSafari && (ss__stepSize = 138),
        function () {
            "use strict";
            let e, t, i, n, r = {
                frameRate: 150,
                animationTime: 1600,
                stepSize: ss__stepSize,
                pulseAlgorithm: !0,
                pulseScale: 4,
                pulseNormalize: 1,
                accelerationDelta: 60,
                accelerationMax: 3,
                keyboardSupport: !0,
                arrowScroll: 50,
                fixedBackground: !0,
                excluded: ""
            },
                o = r,
                s = !1,
                a = !1,
                l = {
                    x: 0,
                    y: 0
                },
                c = !1,
                u = document.documentElement,
                h = [],
                f = /^Mac/.test(navigator.platform),
                d = navigator.userAgent,
                p = d.toLowerCase().includes("safari") && !d.toLowerCase().includes("chrome"),
                m = {
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                    spacebar: 32,
                    pageup: 33,
                    pagedown: 34,
                    end: 35,
                    home: 36
                },
                g = {
                    37: 1,
                    38: 1,
                    39: 1,
                    40: 1
                };

            function _() {
                if (c || !document.body) return;
                c = !0;
                let n = document.body,
                    r = document.documentElement,
                    l = window.innerHeight,
                    h = n.scrollHeight;
                if (u = document.compatMode.indexOf("CSS") >= 0 ? r : n, e = n, o.keyboardSupport && F("keydown", T), window.top !== window.self) a = !0;
                else if (J && h > l && (n.offsetHeight <= l || r.offsetHeight <= l)) {
                    var f, d = document.createElement("div");
                    d.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + u.scrollHeight + "px", document.body.appendChild(d), i = function () {
                        f || (f = setTimeout(function () {
                            s || (d.style.height = "0", d.style.height = u.scrollHeight + "px", f = null)
                        }, 500))
                    }, setTimeout(i, 10), F("resize", i);
                    if ((t = new X(i)).observe(n, {
                        attributes: !0,
                        childList: !0,
                        characterData: !1
                    }), u.offsetHeight <= l) {
                        var p = document.createElement("div");
                        p.style.clear = "both", n.appendChild(p)
                    }
                }
                o.fixedBackground || s || (n.style.backgroundAttachment = "scroll", r.style.backgroundAttachment = "scroll")
            }
            var v = [],
                y = !1,
                w = Date.now();

            function b(e, t, i) {
                var n, r;
                if (n = (n = t) > 0 ? 1 : -1, r = (r = i) > 0 ? 1 : -1, (l.x !== n || l.y !== r) && (l.x = n, l.y = r, v = [], w = 0), 1 != o.accelerationMax) {
                    var s = Date.now() - w;
                    if (s < o.accelerationDelta) {
                        var a = (1 + 50 / s) / 2;
                        a > 1 && (a = Math.min(a, o.accelerationMax), t *= a, i *= a)
                    }
                    w = Date.now()
                }
                if (v.push({
                    x: t,
                    y: i,
                    lastX: t < 0 ? .99 : -.99,
                    lastY: i < 0 ? .99 : -.99,
                    start: Date.now()
                }), !y) {
                    var c = Y(),
                        u = e === c || e === document.body;
                    null == e.$scrollBehavior && function (e) {
                        var t = P(e);
                        if (null == M[t]) {
                            var i = getComputedStyle(e, "")["scroll-behavior"];
                            M[t] = "smooth" == i
                        }
                        return M[t]
                    }(e) && (e.$scrollBehavior = e.style.scrollBehavior, e.style.scrollBehavior = "auto");
                    var h = function () {
                        for (var n = Date.now(), r = 0, s = 0, a = 0; a < v.length; a++) {
                            var l = v[a],
                                c = n - l.start,
                                f = c >= o.animationTime,
                                d = f ? 1 : c / o.animationTime;
                            o.pulseAlgorithm && (d = V(d));
                            var p = l.x * d - l.lastX >> 0,
                                m = l.y * d - l.lastY >> 0;
                            r += p, s += m, l.lastX += p, l.lastY += m, f && (v.splice(a, 1), a--)
                        }
                        u ? window.scrollBy(r, s) : (r && (e.scrollLeft += r), s && (e.scrollTop += s)), t || i || (v = []), v.length ? W(h, e, 1e3 / o.frameRate + 1) : (y = !1, null != e.$scrollBehavior && (e.style.scrollBehavior = e.$scrollBehavior, e.$scrollBehavior = null))
                    };
                    W(h, e, 0), y = !0
                }
            }

            function x(t) {
                if (!(t.wheelDeltaY ? t.wheelDeltaY === -3 * t.deltaY : 0 === t.deltaMode)) {
                    c || _();
                    var i = t.target;
                    if (t.defaultPrevented || t.ctrlKey) return !0;
                    if (z(e, "embed") || z(i, "embed") && /\.pdf/i.test(i.src) || z(e, "object") || i.shadowRoot) return !0;
                    var r = -t.wheelDeltaX || t.deltaX || 0,
                        s = -t.wheelDeltaY || t.deltaY || 0;
                    p && (s *= 10, Math.abs(s) > 120 && (s = s > 0 ? 120 : -120)), f && (t.wheelDeltaX && H(t.wheelDeltaX, 120) && (r = t.wheelDeltaX / Math.abs(t.wheelDeltaX) * -120), t.wheelDeltaY && H(t.wheelDeltaY, 120) && (s = t.wheelDeltaY / Math.abs(t.wheelDeltaY) * -120)), r || s || (s = -t.wheelDelta || 0), 1 === t.deltaMode && (r *= 40, s *= 40);
                    var l = L(i);
                    if (!l) return !a || !K || (Object.defineProperty(t, "target", {
                        value: window.frameElement
                    }), parent.wheel(t));
                    if (function (e) {
                        if (!e) return;
                        h.length || (h = [e, e, e]);
                        e = Math.abs(e), h.push(e), h.shift(), clearTimeout(n), n = setTimeout(function () {
                            try {
                                localStorage.SS_deltaBuffer = h.join(",")
                            } catch (e) { }
                        }, 1e3);
                        var t = e > 120 && B(e),
                            i = !B(120) && !B(100) && !t;
                        if (e < 50) return !0;
                        return i
                    }(s)) return !0;
                    Math.abs(r) > 1.2 && (r *= o.stepSize / 120), Math.abs(s) > 1.2 && (s *= o.stepSize / 120), b(l, r, s), t.preventDefault(), $()
                }
            }

            function T(t) {
                var i = t.target,
                    n = t.ctrlKey || t.altKey || t.metaKey || t.shiftKey && t.keyCode !== m.spacebar;
                document.body.contains(e) || (e = document.activeElement);
                var r = /^(button|submit|radio|checkbox|file|color|image)$/i;
                if (t.defaultPrevented || /^(textarea|select|embed|object)$/i.test(i.nodeName) || z(i, "input") && !r.test(i.type) || z(e, "video") || function (e) {
                    var t = e.target,
                        i = !1;
                    if (-1 != document.URL.indexOf("www.youtube.com/watch"))
                        do {
                            if (i = t.classList && t.classList.contains("html5-video-controls")) break
                        } while (t = t.parentNode);
                    return i
                }(t) || i.isContentEditable || n) return !0;
                if ((z(i, "button") || z(i, "input") && r.test(i.type)) && t.keyCode === m.spacebar) return !0;
                if (z(i, "input") && "radio" == i.type && g[t.keyCode]) return !0;
                var s = 0,
                    l = 0,
                    c = L(e);
                if (!c) return !a || !K || parent.keydown(t);
                var u = c.clientHeight;
                switch (c == document.body && (u = window.innerHeight), t.keyCode) {
                    case m.up:
                        l = -o.arrowScroll;
                        break;
                    case m.down:
                        l = o.arrowScroll;
                        break;
                    case m.spacebar:
                        l = -(t.shiftKey ? 1 : -1) * u * .9;
                        break;
                    case m.pageup:
                        l = .9 * -u;
                        break;
                    case m.pagedown:
                        l = .9 * u;
                        break;
                    case m.home:
                        c == document.body && document.scrollingElement && (c = document.scrollingElement), l = -c.scrollTop;
                        break;
                    case m.end:
                        var h = c.scrollHeight - c.scrollTop - u;
                        l = h > 0 ? h + 10 : 0;
                        break;
                    case m.left:
                        s = -o.arrowScroll;
                        break;
                    case m.right:
                        s = o.arrowScroll;
                        break;
                    default:
                        return !0
                }
                b(c, s, l), t.preventDefault(), $()
            }

            function C(t) {
                e = t.target
            }
            var S, k, P = (S = 0, function (e) {
                return e.uniqueID || (e.uniqueID = S++)
            }),
                O = {},
                E = {},
                M = {};

            function $() {
                clearTimeout(k), k = setInterval(function () {
                    O = E = M = {}
                }, 1e3)
            }

            function A(e, t, i) {
                for (var n = i ? O : E, r = e.length; r--;) n[P(e[r])] = t;
                return t
            }

            function D(e, t) {
                return (t ? O : E)[P(e)]
            }

            function L(e) {
                var t = [],
                    i = document.body,
                    n = u.scrollHeight;
                do {
                    var r = D(e, !1);
                    if (r) return A(t, r);
                    if (t.push(e), n === e.scrollHeight) {
                        var o = j(u) && j(i) || I(u);
                        if (a && R(u) || !a && o) return A(t, Y())
                    } else if (R(e) && I(e)) return A(t, e)
                } while (e = e.parentElement)
            }

            function R(e) {
                return e.clientHeight + 10 < e.scrollHeight
            }

            function j(e) {
                return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y")
            }

            function I(e) {
                var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
                return "scroll" === t || "auto" === t
            }

            function F(e, t, i) {
                window.addEventListener(e, t, i || !1)
            }

            function N(e, t, i) {
                window.removeEventListener(e, t, i || !1)
            }

            function z(e, t) {
                return e && (e.nodeName || "").toLowerCase() === t.toLowerCase()
            }
            if (window.localStorage && localStorage.SS_deltaBuffer) try {
                h = localStorage.SS_deltaBuffer.split(",")
            } catch (e) { }

            function H(e, t) {
                return Math.floor(e / t) == e / t
            }

            function B(e) {
                return H(h[0], e) && H(h[1], e) && H(h[2], e)
            }
            var q, W = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e, t, i) {
                window.setTimeout(e, i || 1e3 / 60)
            },
                X = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                Y = (q = document.scrollingElement, function () {
                    if (!q) {
                        var e = document.createElement("div");
                        e.style.cssText = "height:10000px;width:1px;", document.body.appendChild(e);
                        var t = document.body.scrollTop;
                        window.scrollBy(0, 3), q = document.body.scrollTop != t ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(e)
                    }
                    return q
                });

            function U(e) {
                var t, i;
                return (e *= o.pulseScale) < 1 ? t = e - (1 - Math.exp(-e)) : (e -= 1, t = (i = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - i)), t * o.pulseNormalize
            }

            function V(e) {
                return e >= 1 ? 1 : e <= 0 ? 0 : (1 == o.pulseNormalize && (o.pulseNormalize /= U(1)), U(e))
            }
            var G = window.navigator.userAgent,
                Q = /Edge/.test(G),
                K = /chrome/i.test(G) && !Q,
                Z = /safari/i.test(G) && !Q,
                J = (/mobile/i.test(G), /Windows NT 6.1/i.test(G) && /rv:11/i.test(G), Z && (/Version\/8/i.test(G) || /Version\/9/i.test(G))),
                ee = !1;
            try {
                window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                    get: function () {
                        ee = !0
                    }
                }))
            } catch (e) { }
            var te = !!ee && {
                passive: !1
            },
                ie = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

            function ne(e) {
                for (var t in e) r.hasOwnProperty(t) && (o[t] = e[t])
            }
            ie && (F(ie, x, te), F("mousedown", C), F("load", _)), ne.destroy = function () {
                t && t.disconnect(), N(ie, x), N("mousedown", C), N("keydown", T), N("resize", i), N("load", _)
            }, ne.restart = function () {
                t && t.observe(), F(ie, x, {
                    passive: !1
                }), F("mousedown", C), F("keydown", T), F("resize", i), F("load", _)
            }, window.SmoothScrollOptions && ne(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function () {
                return ne
            }) : "object" == typeof exports ? module.exports = ne : window.SmoothScroll = ne
        }()
}
parcelRequire = function (e, t, i, n) {
    var r, o = "function" == typeof parcelRequire && parcelRequire,
        s = "function" == typeof require && require;

    function a(i, n) {
        if (!t[i]) {
            if (!e[i]) {
                var r = "function" == typeof parcelRequire && parcelRequire;
                if (!n && r) return r(i, !0);
                if (o) return o(i, !0);
                if (s && "string" == typeof i) return s(i);
                var l = new Error("Cannot find module '" + i + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            u.resolve = function (t) {
                return e[i][1][t] || t
            }, u.cache = {};
            var c = t[i] = new a.Module(i);
            e[i][0].call(c.exports, u, c, c.exports, this)
        }
        return t[i].exports;

        function u(e) {
            return a(u.resolve(e))
        }
    }
    a.isParcelRequire = !0, a.Module = function (e) {
        this.id = e, this.bundle = a, this.exports = {}
    }, a.modules = e, a.cache = t, a.parent = o, a.register = function (t, i) {
        e[t] = [function (e, t) {
            t.exports = i
        }, {}]
    };
    for (var l = 0; l < i.length; l++) try {
        a(i[l])
    } catch (e) {
        r || (r = e)
    }
    if (i.length) {
        var c = a(i[i.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = c : "function" == typeof define && define.amd && define(function () {
            return c
        })
    }
    if (parcelRequire = a, r) throw r;
    return a
}({
    TNS6: [function (e, t, i) {
        "use strict";

        function n(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function r(e, t) {
            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i._getCache = i._getSetter = i._missingPlugin = i._round = i._roundModifier = i._config = i._ticker = i._plugins = i._checkPlugin = i._replaceRandom = i._colorStringFilter = i._sortPropTweensByPriority = i._forEachName = i._removeLinkedListItem = i._setDefaults = i._relExp = i._renderComplexString = i._isUndefined = i._isString = i._numWithUnitExp = i._numExp = i._getProperty = i.shuffle = i.interpolate = i.unitize = i.pipe = i.mapRange = i.toArray = i.splitColor = i.clamp = i.getUnit = i.normalize = i.snap = i.random = i.distribute = i.wrapYoyo = i.wrap = i.Circ = i.Expo = i.Sine = i.Bounce = i.SteppedEase = i.Back = i.Elastic = i.Strong = i.Quint = i.Quart = i.Cubic = i.Quad = i.Linear = i.Power4 = i.Power3 = i.Power2 = i.Power1 = i.Power0 = i.default = i.gsap = i.PropTween = i.TweenLite = i.TweenMax = i.Tween = i.TimelineLite = i.TimelineMax = i.Timeline = i.Animation = i.GSCache = void 0;
        var o, s, a, l, c, u, h, f, d, p, m, g, _, v, y, w, b, x, T, C, S, k, P, O, E, M = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
            $ = {
                duration: .5,
                overwrite: !1,
                delay: 0
            },
            A = 1e-8,
            D = 2 * Math.PI,
            L = D / 4,
            R = 0,
            j = Math.sqrt,
            I = Math.cos,
            F = Math.sin,
            N = function (e) {
                return "string" == typeof e
            },
            z = function (e) {
                return "function" == typeof e
            },
            H = function (e) {
                return "number" == typeof e
            },
            B = function (e) {
                return void 0 === e
            },
            q = function (e) {
                return "object" == typeof e
            },
            W = function (e) {
                return !1 !== e
            },
            X = function () {
                return "undefined" != typeof window
            },
            Y = function (e) {
                return z(e) || N(e)
            },
            U = Array.isArray,
            V = /(?:-?\.?\d|\.)+/gi,
            G = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
            Q = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
            K = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
            Z = /\(([^()]+)\)/i,
            J = /[+-]=-?[\.\d]+/,
            ee = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
            te = {},
            ie = {},
            ne = function (e) {
                return (ie = Ee(e, te)) && mi
            },
            re = function (e, t) {
                return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
            },
            oe = function (e, t) {
                return !t && console.warn(e)
            },
            se = function (e, t) {
                return e && (te[e] = t) && ie && (ie[e] = t) || te
            },
            ae = function () {
                return 0
            },
            le = {},
            ce = [],
            ue = {},
            he = {},
            fe = {},
            de = 30,
            pe = [],
            me = "",
            ge = function (e) {
                var t, i, n = e[0];
                if (q(n) || z(n) || (e = [e]), !(t = (n._gsap || {}).harness)) {
                    for (i = pe.length; i-- && !pe[i].targetTest(n););
                    t = pe[i]
                }
                for (i = e.length; i--;) e[i] && (e[i]._gsap || (e[i]._gsap = new Ht(e[i], t))) || e.splice(i, 1);
                return e
            },
            _e = function (e) {
                return e._gsap || ge(it(e))[0]._gsap
            },
            ve = function (e, t) {
                var i = e[t];
                return z(i) ? e[t]() : B(i) && e.getAttribute(t) || i
            },
            ye = function (e, t) {
                return (e = e.split(",")).forEach(t) || e
            },
            we = function (e) {
                return Math.round(1e5 * e) / 1e5 || 0
            },
            be = function (e, t) {
                for (var i = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < i;);
                return n < i
            },
            xe = function (e, t, i) {
                var n, r = H(e[1]),
                    o = (r ? 2 : 1) + (t < 2 ? 0 : 1),
                    s = e[o];
                if (r && (s.duration = e[1]), s.parent = i, t) {
                    for (n = s; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = W(i.vars.inherit) && i.parent;
                    s.immediateRender = W(n.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[o - 1]
                }
                return s
            },
            Te = function () {
                var e, t, i = ce.length,
                    n = ce.slice(0);
                for (ue = {}, ce.length = 0, e = 0; e < i; e++)(t = n[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
            },
            Ce = function (e, t, i, n) {
                ce.length && Te(), e.render(t, i, n), ce.length && Te()
            },
            Se = function (e) {
                var t = parseFloat(e);
                return (t || 0 === t) && (e + "").match(ee).length < 2 ? t : e
            },
            ke = function (e) {
                return e
            },
            Pe = function (e, t) {
                for (var i in t) i in e || (e[i] = t[i]);
                return e
            },
            Oe = function (e, t) {
                for (var i in t) i in e || "duration" === i || "ease" === i || (e[i] = t[i])
            },
            Ee = function (e, t) {
                for (var i in t) e[i] = t[i];
                return e
            },
            Me = function e(t, i) {
                for (var n in i) t[n] = q(i[n]) ? e(t[n] || (t[n] = {}), i[n]) : i[n];
                return t
            },
            $e = function (e, t) {
                var i, n = {};
                for (i in e) i in t || (n[i] = e[i]);
                return n
            },
            Ae = function (e) {
                var t = e.parent || o,
                    i = e.keyframes ? Oe : Pe;
                if (W(e.inherit))
                    for (; t;) i(e, t.vars.defaults), t = t.parent || t._dp;
                return e
            },
            De = function (e, t, i, n) {
                void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
                var r = t._prev,
                    o = t._next;
                r ? r._next = o : e[i] === t && (e[i] = o), o ? o._prev = r : e[n] === t && (e[n] = r), t._next = t._prev = t.parent = null
            },
            Le = function (e, t) {
                !e.parent || t && !e.parent.autoRemoveChildren || e.parent.remove(e), e._act = 0
            },
            Re = function (e) {
                for (var t = e; t;) t._dirty = 1, t = t.parent;
                return e
            },
            je = function e(t) {
                return !t || t._ts && e(t.parent)
            },
            Ie = function (e) {
                return e._repeat ? Fe(e._tTime, e = e.duration() + e._rDelay) * e : 0
            },
            Fe = function (e, t) {
                return (e /= t) && ~~e === e ? ~~e - 1 : ~~e
            },
            Ne = function (e, t) {
                return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
            },
            ze = function (e) {
                return e._end = we(e._start + (e._tDur / Math.abs(e._ts || e._rts || A) || 0))
            },
            He = function (e, t) {
                var i;
                if ((t._time || t._initted && !t._dur) && (i = Ne(e.rawTime(), t), (!t._dur || Qe(0, t.totalDuration(), i) - t._tTime > A) && t.render(i, !0)), Re(e)._dp && e._initted && e._time >= e._dur && e._ts) {
                    if (e._dur < e.duration())
                        for (i = e; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
                    e._zTime = -A
                }
            },
            Be = function (e, t, i, n) {
                return t.parent && Le(t), t._start = we(i + t._delay), t._end = we(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)),
                    function (e, t, i, n, r) {
                        void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
                        var o, s = e[n];
                        if (r)
                            for (o = t[r]; s && s[r] > o;) s = s._prev;
                        s ? (t._next = s._next, s._next = t) : (t._next = e[i], e[i] = t), t._next ? t._next._prev = t : e[n] = t, t._prev = s, t.parent = t._dp = e
                    }(e, t, "_first", "_last", e._sort ? "_start" : 0), e._recent = t, n || He(e, t), e
            },
            qe = function (e, t) {
                return (te.ScrollTrigger || re("scrollTrigger", t)) && te.ScrollTrigger.create(t, e)
            },
            We = function (e, t, i, n) {
                return Ut(e, t), e._initted ? !i && e._pt && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && u !== Ot.frame ? (ce.push(e), e._lazy = [t, n], 1) : void 0 : 1
            },
            Xe = function (e, t, i) {
                var n = e._repeat,
                    r = we(t) || 0;
                return e._dur = r, e._tDur = n ? n < 0 ? 1e10 : we(r * (n + 1) + e._rDelay * n) : r, e._time > r && (e._time = r, e._tTime = Math.min(e._tTime, e._tDur)), !i && Re(e.parent), e.parent && ze(e), e
            },
            Ye = function (e) {
                return e instanceof qt ? Re(e) : Xe(e, e._dur)
            },
            Ue = {
                _start: 0,
                endTime: ae
            },
            Ve = function e(t, i) {
                var n, r, o = t.labels,
                    s = t._recent || Ue,
                    a = t.duration() >= 1e8 ? s.endTime(!1) : t._dur;
                return N(i) && (isNaN(i) || i in o) ? "<" === (n = i.charAt(0)) || ">" === n ? ("<" === n ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) : (n = i.indexOf("=")) < 0 ? (i in o || (o[i] = a), o[i]) : (r = +(i.charAt(n - 1) + i.substr(n + 1)), n > 1 ? e(t, i.substr(0, n - 1)) + r : a + r) : null == i ? a : +i
            },
            Ge = function (e, t) {
                return e || 0 === e ? t(e) : t
            },
            Qe = function (e, t, i) {
                return i < e ? e : i > t ? t : i
            },
            Ke = function (e) {
                return (e + "").substr((parseFloat(e) + "").length)
            },
            Ze = function (e, t, i) {
                return Ge(i, function (i) {
                    return Qe(e, t, i)
                })
            },
            Je = [].slice,
            et = function (e, t) {
                return e && q(e) && "length" in e && (!t && !e.length || e.length - 1 in e && q(e[0])) && !e.nodeType && e !== s
            },
            tt = function (e, t, i) {
                return void 0 === i && (i = []), e.forEach(function (e) {
                    var n;
                    return N(e) && !t || et(e, 1) ? (n = i).push.apply(n, it(e)) : i.push(e)
                }) || i
            },
            it = function (e, t) {
                return !N(e) || t || !a && Et() ? U(e) ? tt(e, t) : et(e) ? Je.call(e, 0) : e ? [e] : [] : Je.call(l.querySelectorAll(e), 0)
            },
            nt = function (e) {
                return e.sort(function () {
                    return .5 - Math.random()
                })
            },
            rt = function (e) {
                if (z(e)) return e;
                var t = q(e) ? e : {
                    each: e
                },
                    i = jt(t.ease),
                    n = t.from || 0,
                    r = parseFloat(t.base) || 0,
                    o = {},
                    s = n > 0 && n < 1,
                    a = isNaN(n) || s,
                    l = t.axis,
                    c = n,
                    u = n;
                return N(n) ? c = u = {
                    center: .5,
                    edges: .5,
                    end: 1
                }[n] || 0 : !s && a && (c = n[0], u = n[1]),
                    function (e, s, h) {
                        var f, d, p, m, g, _, v, y, w, b = (h || t).length,
                            x = o[b];
                        if (!x) {
                            if (!(w = "auto" === t.grid ? 0 : (t.grid || [1, 1e8])[1])) {
                                for (v = -1e8; v < (v = h[w++].getBoundingClientRect().left) && w < b;);
                                w--
                            }
                            for (x = o[b] = [], f = a ? Math.min(w, b) * c - .5 : n % w, d = a ? b * u / w - .5 : n / w | 0, v = 0, y = 1e8, _ = 0; _ < b; _++) p = _ % w - f, m = d - (_ / w | 0), x[_] = g = l ? Math.abs("y" === l ? m : p) : j(p * p + m * m), g > v && (v = g), g < y && (y = g);
                            "random" === n && nt(x), x.max = v - y, x.min = y, x.v = b = (parseFloat(t.amount) || parseFloat(t.each) * (w > b ? b - 1 : l ? "y" === l ? b / w : w : Math.max(w, b / w)) || 0) * ("edges" === n ? -1 : 1), x.b = b < 0 ? r - b : r, x.u = Ke(t.amount || t.each) || 0, i = i && b < 0 ? Lt(i) : i
                        }
                        return b = (x[e] - x.min) / x.max || 0, we(x.b + (i ? i(b) : b) * x.v) + x.u
                    }
            },
            ot = function (e) {
                var t = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
                return function (i) {
                    return Math.floor(Math.round(parseFloat(i) / e) * e * t) / t + (H(i) ? 0 : Ke(i))
                }
            },
            st = function (e, t) {
                var i, n, r = U(e);
                return !r && q(e) && (i = r = e.radius || 1e8, e.values ? (e = it(e.values), (n = !H(e[0])) && (i *= i)) : e = ot(e.increment)), Ge(t, r ? z(e) ? function (t) {
                    return n = e(t), Math.abs(n - t) <= i ? n : t
                } : function (t) {
                    for (var r, o, s = parseFloat(n ? t.x : t), a = parseFloat(n ? t.y : 0), l = 1e8, c = 0, u = e.length; u--;)(r = n ? (r = e[u].x - s) * r + (o = e[u].y - a) * o : Math.abs(e[u] - s)) < l && (l = r, c = u);
                    return c = !i || l <= i ? e[c] : t, n || c === t || H(t) ? c : c + Ke(t)
                } : ot(e))
            },
            at = function (e, t, i, n) {
                return Ge(U(e) ? !t : !0 === i ? !!(i = 0) : !n, function () {
                    return U(e) ? e[~~(Math.random() * e.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((e + Math.random() * (t - e)) / i) * i * n) / n
                })
            },
            lt = function () {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                return function (e) {
                    return t.reduce(function (e, t) {
                        return t(e)
                    }, e)
                }
            },
            ct = function (e, t) {
                return function (i) {
                    return e(parseFloat(i)) + (t || Ke(i))
                }
            },
            ut = function (e, t, i) {
                return mt(e, t, 0, 1, i)
            },
            ht = function (e, t, i) {
                return Ge(i, function (i) {
                    return e[~~t(i)]
                })
            },
            ft = function e(t, i, n) {
                var r = i - t;
                return U(t) ? ht(t, e(0, t.length), i) : Ge(n, function (e) {
                    return (r + (e - t) % r) % r + t
                })
            },
            dt = function e(t, i, n) {
                var r = i - t,
                    o = 2 * r;
                return U(t) ? ht(t, e(0, t.length - 1), i) : Ge(n, function (e) {
                    return t + ((e = (o + (e - t) % o) % o || 0) > r ? o - e : e)
                })
            },
            pt = function (e) {
                for (var t, i, n, r, o = 0, s = ""; ~(t = e.indexOf("random(", o));) n = e.indexOf(")", t), r = "[" === e.charAt(t + 7), i = e.substr(t + 7, n - t - 7).match(r ? ee : V), s += e.substr(o, t - o) + at(r ? i : +i[0], +i[1], +i[2] || 1e-5), o = n + 1;
                return s + e.substr(o, e.length - o)
            },
            mt = function (e, t, i, n, r) {
                var o = t - e,
                    s = n - i;
                return Ge(r, function (t) {
                    return i + ((t - e) / o * s || 0)
                })
            },
            gt = function e(t, i, n, r) {
                var o = isNaN(t + i) ? 0 : function (e) {
                    return (1 - e) * t + e * i
                };
                if (!o) {
                    var s, a, l, c, u, h = N(t),
                        f = {};
                    if (!0 === n && (r = 1) && (n = null), h) t = {
                        p: t
                    }, i = {
                        p: i
                    };
                    else if (U(t) && !U(i)) {
                        for (l = [], c = t.length, u = c - 2, a = 1; a < c; a++) l.push(e(t[a - 1], t[a]));
                        c--, o = function (e) {
                            e *= c;
                            var t = Math.min(u, ~~e);
                            return l[t](e - t)
                        }, n = i
                    } else r || (t = Ee(U(t) ? [] : {}, t));
                    if (!l) {
                        for (s in i) Xt.call(f, t, s, "get", i[s]);
                        o = function (e) {
                            return si(e, f) || (h ? t.p : t)
                        }
                    }
                }
                return Ge(n, o)
            },
            _t = function (e, t, i) {
                var n, r, o, s = e.labels,
                    a = 1e8;
                for (n in s) (r = s[n] - t) < 0 == !!i && r && a > (r = Math.abs(r)) && (o = n, a = r);
                return o
            },
            vt = function (e, t, i) {
                var n, r, o = e.vars,
                    s = o[t];
                if (s) return n = o[t + "Params"], r = o.callbackScope || e, i && ce.length && Te(), n ? s.apply(r, n) : s.call(r)
            },
            yt = function (e) {
                return Le(e), e.progress() < 1 && vt(e, "onInterrupt"), e
            },
            wt = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            bt = function (e, t, i) {
                return 255 * (6 * (e = e < 0 ? e + 1 : e > 1 ? e - 1 : e) < 1 ? t + (i - t) * e * 6 : e < .5 ? i : 3 * e < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) + .5 | 0
            },
            xt = function (e, t, i) {
                var n, r, o, s, a, l, c, u, h, f, d = e ? H(e) ? [e >> 16, e >> 8 & 255, 255 & e] : 0 : wt.black;
                if (!d) {
                    if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), wt[e]) d = wt[e];
                    else if ("#" === e.charAt(0)) 4 === e.length && (n = e.charAt(1), r = e.charAt(2), o = e.charAt(3), e = "#" + n + n + r + r + o + o), d = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e];
                    else if ("hsl" === e.substr(0, 3))
                        if (d = f = e.match(V), t) {
                            if (~e.indexOf("=")) return d = e.match(G), i && d.length < 4 && (d[3] = 1), d
                        } else s = +d[0] % 360 / 360, a = +d[1] / 100, n = 2 * (l = +d[2] / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a), d.length > 3 && (d[3] *= 1), d[0] = bt(s + 1 / 3, n, r), d[1] = bt(s, n, r), d[2] = bt(s - 1 / 3, n, r);
                    else d = e.match(V) || wt.transparent;
                    d = d.map(Number)
                }
                return t && !f && (n = d[0] / 255, r = d[1] / 255, o = d[2] / 255, l = ((c = Math.max(n, r, o)) + (u = Math.min(n, r, o))) / 2, c === u ? s = a = 0 : (h = c - u, a = l > .5 ? h / (2 - c - u) : h / (c + u), s = c === n ? (r - o) / h + (r < o ? 6 : 0) : c === r ? (o - n) / h + 2 : (n - r) / h + 4, s *= 60), d[0] = ~~(s + .5), d[1] = ~~(100 * a + .5), d[2] = ~~(100 * l + .5)), i && d.length < 4 && (d[3] = 1), d
            },
            Tt = function (e) {
                var t = [],
                    i = [],
                    n = -1;
                return e.split(St).forEach(function (e) {
                    var r = e.match(Q) || [];
                    t.push.apply(t, r), i.push(n += r.length + 1)
                }), t.c = i, t
            },
            Ct = function (e, t, i) {
                var n, r, o, s, a = "",
                    l = (e + a).match(St),
                    c = t ? "hsla(" : "rgba(",
                    u = 0;
                if (!l) return e;
                if (l = l.map(function (e) {
                    return (e = xt(e, t, 1)) && c + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
                }), i && (o = Tt(e), (n = i.c).join(a) !== o.c.join(a)))
                    for (s = (r = e.replace(St, "1").split(Q)).length - 1; u < s; u++) a += r[u] + (~n.indexOf(u) ? l.shift() || c + "0,0,0,0)" : (o.length ? o : l.length ? l : i).shift());
                if (!r)
                    for (s = (r = e.split(St)).length - 1; u < s; u++) a += r[u] + l[u];
                return a + r[s]
            },
            St = function () {
                var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (e in wt) t += "|" + e + "\\b";
                return new RegExp(t + ")", "gi")
            }(),
            kt = /hsl[a]?\(/,
            Pt = function (e) {
                var t, i = e.join(" ");
                if (St.lastIndex = 0, St.test(i)) return t = kt.test(i), e[1] = Ct(e[1], t), e[0] = Ct(e[0], t, Tt(e[1])), !0
            },
            Ot = (_ = Date.now, v = 500, y = 33, w = _(), b = w, T = x = 1 / 240, S = function e(t) {
                var i, n, r = _() - b,
                    o = !0 === t;
                r > v && (w += r - y), b += r, g.time = (b - w) / 1e3, ((i = g.time - T) > 0 || o) && (g.frame++, T += i + (i >= x ? .004 : x - i), n = 1), o || (d = p(e)), n && C.forEach(function (e) {
                    return e(g.time, r, g.frame, t)
                })
            }, g = {
                time: 0,
                frame: 0,
                tick: function () {
                    S(!0)
                },
                wake: function () {
                    c && (!a && X() && (s = a = window, l = s.document || {}, te.gsap = mi, (s.gsapVersions || (s.gsapVersions = [])).push(mi.version), ne(ie || s.GreenSockGlobals || !s.gsap && s || {}), m = s.requestAnimationFrame), d && g.sleep(), p = m || function (e) {
                        return setTimeout(e, 1e3 * (T - g.time) + 1 | 0)
                    }, f = 1, S(2))
                },
                sleep: function () {
                    (m ? s.cancelAnimationFrame : clearTimeout)(d), f = 0, p = ae
                },
                lagSmoothing: function (e, t) {
                    v = e || 1 / A, y = Math.min(t, v, 0)
                },
                fps: function (e) {
                    x = 1 / (e || 240), T = g.time + x
                },
                add: function (e) {
                    C.indexOf(e) < 0 && C.push(e), Et()
                },
                remove: function (e) {
                    var t;
                    ~(t = C.indexOf(e)) && C.splice(t, 1)
                },
                _listeners: C = []
            }),
            Et = function () {
                return !f && Ot.wake()
            },
            Mt = {},
            $t = /^[\d.\-M][\d.\-,\s]/,
            At = /["']/g,
            Dt = function (e) {
                for (var t, i, n, r = {}, o = e.substr(1, e.length - 3).split(":"), s = o[0], a = 1, l = o.length; a < l; a++) i = o[a], t = a !== l - 1 ? i.lastIndexOf(",") : i.length, n = i.substr(0, t), r[s] = isNaN(n) ? n.replace(At, "").trim() : +n, s = i.substr(t + 1).trim();
                return r
            },
            Lt = function (e) {
                return function (t) {
                    return 1 - e(1 - t)
                }
            },
            Rt = function e(t, i) {
                for (var n, r = t._first; r;) r instanceof qt ? e(r, i) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === i || (r.timeline ? e(r.timeline, i) : (n = r._ease, r._ease = r._yEase, r._yEase = n, r._yoyo = i)), r = r._next
            },
            jt = function (e, t) {
                return e && (z(e) ? e : Mt[e] || function (e) {
                    var t = (e + "").split("("),
                        i = Mt[t[0]];
                    return i && t.length > 1 && i.config ? i.config.apply(null, ~e.indexOf("{") ? [Dt(t[1])] : Z.exec(e)[1].split(",").map(Se)) : Mt._CE && $t.test(e) ? Mt._CE("", e) : i
                }(e)) || t
            },
            It = function (e, t, i, n) {
                void 0 === i && (i = function (e) {
                    return 1 - t(1 - e)
                }), void 0 === n && (n = function (e) {
                    return e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2
                });
                var r, o = {
                    easeIn: t,
                    easeOut: i,
                    easeInOut: n
                };
                return ye(e, function (e) {
                    for (var t in Mt[e] = te[e] = o, Mt[r = e.toLowerCase()] = i, o) Mt[r + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = Mt[e + "." + t] = o[t]
                }), o
            },
            Ft = function (e) {
                return function (t) {
                    return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
                }
            },
            Nt = function e(t, i, n) {
                var r = i >= 1 ? i : 1,
                    o = (n || (t ? .3 : .45)) / (i < 1 ? i : 1),
                    s = o / D * (Math.asin(1 / r) || 0),
                    a = function (e) {
                        return 1 === e ? 1 : r * Math.pow(2, -10 * e) * F((e - s) * o) + 1
                    },
                    l = "out" === t ? a : "in" === t ? function (e) {
                        return 1 - a(1 - e)
                    } : Ft(a);
                return o = D / o, l.config = function (i, n) {
                    return e(t, i, n)
                }, l
            },
            zt = function e(t, i) {
                void 0 === i && (i = 1.70158);
                var n = function (e) {
                    return e ? --e * e * ((i + 1) * e + i) + 1 : 0
                },
                    r = "out" === t ? n : "in" === t ? function (e) {
                        return 1 - n(1 - e)
                    } : Ft(n);
                return r.config = function (i) {
                    return e(t, i)
                }, r
            };
        i._ticker = Ot, i._colorStringFilter = Pt, i.splitColor = xt, i.interpolate = gt, i.mapRange = mt, i._replaceRandom = pt, i.wrapYoyo = dt, i.wrap = ft, i.normalize = ut, i.unitize = ct, i.pipe = lt, i.random = at, i.snap = st, i._roundModifier = ot, i.distribute = rt, i.shuffle = nt, i.toArray = it, i.clamp = Ze, i.getUnit = Ke, i._removeLinkedListItem = De, i._setDefaults = Pe, i._round = we, i._forEachName = ye, i._getProperty = ve, i._getCache = _e, i._plugins = he, i._missingPlugin = re, i._relExp = J, i._numWithUnitExp = Q, i._numExp = G, i._isUndefined = B, i._isString = N, i._config = M, ye("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
            var i = t < 5 ? t + 1 : t;
            It(e + ",Power" + (i - 1), t ? function (e) {
                return Math.pow(e, i)
            } : function (e) {
                return e
            }, function (e) {
                return 1 - Math.pow(1 - e, i)
            }, function (e) {
                return e < .5 ? Math.pow(2 * e, i) / 2 : 1 - Math.pow(2 * (1 - e), i) / 2
            })
        }), Mt.Linear.easeNone = Mt.none = Mt.Linear.easeIn, It("Elastic", Nt("in"), Nt("out"), Nt()), k = 7.5625, O = 1 / (P = 2.75), It("Bounce", function (e) {
            return 1 - E(1 - e)
        }, E = function (e) {
            return e < O ? k * e * e : e < .7272727272727273 ? k * Math.pow(e - 1.5 / P, 2) + .75 : e < .9090909090909092 ? k * (e -= 2.25 / P) * e + .9375 : k * Math.pow(e - 2.625 / P, 2) + .984375
        }), It("Expo", function (e) {
            return e ? Math.pow(2, 10 * (e - 1)) : 0
        }), It("Circ", function (e) {
            return -(j(1 - e * e) - 1)
        }), It("Sine", function (e) {
            return 1 === e ? 1 : 1 - I(e * L)
        }), It("Back", zt("in"), zt("out"), zt()), Mt.SteppedEase = Mt.steps = te.SteppedEase = {
            config: function (e, t) {
                void 0 === e && (e = 1);
                var i = 1 / e,
                    n = e + (t ? 0 : 1),
                    r = t ? 1 : 0,
                    o = 1 - A;
                return function (e) {
                    return ((n * Qe(0, o, e) | 0) + r) * i
                }
            }
        }, $.ease = Mt["quad.out"], ye("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (e) {
            return me += e + "," + e + "Params,"
        });
        var Ht = function (e, t) {
            this.id = R++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : ve, this.set = t ? t.getSetter : ii
        };
        i.GSCache = Ht;
        var Bt = function () {
            function e(e, t) {
                var i = e.parent || o;
                this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Xe(this, +e.duration, 1), this.data = e.data, f || Ot.wake(), i && Be(i, this, t || 0 === t ? t : i._time, 1), e.reversed && this.reverse(), e.paused && this.paused(!0)
            }
            var t = e.prototype;
            return t.delay = function (e) {
                return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
            }, t.duration = function (e) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
            }, t.totalDuration = function (e) {
                return arguments.length ? (this._dirty = 0, Xe(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, t.totalTime = function (e, t) {
                if (Et(), !arguments.length) return this._tTime;
                var i = this.parent || this._dp;
                if (i && i.smoothChildTiming && this._ts) {
                    for (this._start = we(i._time - (this._ts > 0 ? e / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - e) / -this._ts)), ze(this), i._dirty || Re(i); i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Be(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === A || !e && !this._initted) && (this._ts || (this._pTime = e), Ce(this, e, t)), this
            }, t.time = function (e, t) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + Ie(this)) % this._dur || (e ? this._dur : 0), t) : this._time
            }, t.totalProgress = function (e, t) {
                return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
            }, t.progress = function (e, t) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + Ie(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
            }, t.iteration = function (e, t) {
                var i = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (e - 1) * i, t) : this._repeat ? Fe(this._tTime, i) + 1 : 1
            }, t.timeScale = function (e) {
                if (!arguments.length) return this._rts === -A ? 0 : this._rts;
                if (this._rts === e) return this;
                var t = this.parent && this._ts ? Ne(this.parent._time, this) : this._tTime;
                return this._rts = +e || 0, this._ts = this._ps || e === -A ? 0 : this._rts,
                    function (e) {
                        for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
                        return e
                    }(this.totalTime(Qe(0, this._tDur, t), !0))
            }, t.paused = function (e) {
                return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Et(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= A) && Math.abs(this._zTime) !== A))), this) : this._ps
            }, t.startTime = function (e) {
                if (arguments.length) {
                    this._start = e;
                    var t = this.parent || this._dp;
                    return t && (t._sort || !this.parent) && Be(t, this, e - this._delay), this
                }
                return this._start
            }, t.endTime = function (e) {
                return this._start + (W(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
            }, t.rawTime = function (e) {
                var t = this.parent || this._dp;
                return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ne(t.rawTime(e), this) : this._tTime : this._tTime
            }, t.repeat = function (e) {
                return arguments.length ? (this._repeat = e, Ye(this)) : this._repeat
            }, t.repeatDelay = function (e) {
                return arguments.length ? (this._rDelay = e, Ye(this)) : this._rDelay
            }, t.yoyo = function (e) {
                return arguments.length ? (this._yoyo = e, this) : this._yoyo
            }, t.seek = function (e, t) {
                return this.totalTime(Ve(this, e), W(t))
            }, t.restart = function (e, t) {
                return this.play().totalTime(e ? -this._delay : 0, W(t))
            }, t.play = function (e, t) {
                return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
            }, t.reverse = function (e, t) {
                return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, t.pause = function (e, t) {
                return null != e && this.seek(e, t), this.paused(!0)
            }, t.resume = function () {
                return this.paused(!1)
            }, t.reversed = function (e) {
                return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -A : 0)), this) : this._rts < 0
            }, t.invalidate = function () {
                return this._initted = 0, this._zTime = -A, this
            }, t.isActive = function (e) {
                var t, i = this.parent || this._dp,
                    n = this._start;
                return !(i && !(this._ts && (this._initted || !e) && i.isActive(e) && (t = i.rawTime(!0)) >= n && t < this.endTime(!0) - A))
            }, t.eventCallback = function (e, t, i) {
                var n = this.vars;
                return arguments.length > 1 ? (t ? (n[e] = t, i && (n[e + "Params"] = i), "onUpdate" === e && (this._onUpdate = t)) : delete n[e], this) : n[e]
            }, t.then = function (e) {
                var t = this;
                return new Promise(function (i) {
                    var n = z(e) ? e : ke,
                        r = function () {
                            var e = t.then;
                            t.then = null, z(n) && (n = n(t)) && (n.then || n === t) && (t.then = e), i(n), t.then = e
                        };
                    t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? r() : t._prom = r
                })
            }, t.kill = function () {
                yt(this)
            }, e
        }();
        i.Animation = Bt, Pe(Bt.prototype, {
            _time: 0,
            _start: 0,
            _end: 0,
            _tTime: 0,
            _tDur: 0,
            _dirty: 0,
            _repeat: 0,
            _yoyo: !1,
            parent: null,
            _initted: !1,
            _rDelay: 0,
            _ts: 1,
            _dp: 0,
            ratio: 0,
            _zTime: -A,
            _prom: 0,
            _ps: !1,
            _rts: 1
        });
        var qt = function (e) {
            function t(t, i) {
                var r;
                return void 0 === t && (t = {}), (r = e.call(this, t, i) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = W(t.sortChildren), r.parent && He(r.parent, n(r)), t.scrollTrigger && qe(n(r), t.scrollTrigger), r
            }
            r(t, e);
            var i = t.prototype;
            return i.to = function (e, t, i) {
                return new Kt(e, xe(arguments, 0, this), Ve(this, H(t) ? arguments[3] : i)), this
            }, i.from = function (e, t, i) {
                return new Kt(e, xe(arguments, 1, this), Ve(this, H(t) ? arguments[3] : i)), this
            }, i.fromTo = function (e, t, i, n) {
                return new Kt(e, xe(arguments, 2, this), Ve(this, H(t) ? arguments[4] : n)), this
            }, i.set = function (e, t, i) {
                return t.duration = 0, t.parent = this, Ae(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new Kt(e, t, Ve(this, i), 1), this
            }, i.call = function (e, t, i) {
                return Be(this, Kt.delayedCall(0, e, t), Ve(this, i))
            }, i.staggerTo = function (e, t, i, n, r, o, s) {
                return i.duration = t, i.stagger = i.stagger || n, i.onComplete = o, i.onCompleteParams = s, i.parent = this, new Kt(e, i, Ve(this, r)), this
            }, i.staggerFrom = function (e, t, i, n, r, o, s) {
                return i.runBackwards = 1, Ae(i).immediateRender = W(i.immediateRender), this.staggerTo(e, t, i, n, r, o, s)
            }, i.staggerFromTo = function (e, t, i, n, r, o, s, a) {
                return n.startAt = i, Ae(n).immediateRender = W(n.immediateRender), this.staggerTo(e, t, n, r, o, s, a)
            }, i.render = function (e, t, i) {
                var n, r, s, a, l, c, u, h, f, d, p, m, g = this._time,
                    _ = this._dirty ? this.totalDuration() : this._tDur,
                    v = this._dur,
                    y = this !== o && e > _ - A && e >= 0 ? _ : e < A ? 0 : e,
                    w = this._zTime < 0 != e < 0 && (this._initted || !v);
                if (y !== this._tTime || i || w) {
                    if (g !== this._time && v && (y += this._time - g, e += this._time - g), n = y, f = this._start, c = !(h = this._ts), w && (v || (g = this._zTime), (e || !t) && (this._zTime = e)), this._repeat && (p = this._yoyo, l = v + this._rDelay, ((n = we(y % l)) > v || _ === y) && (n = v), (a = ~~(y / l)) && a === y / l && (n = v, a--), d = Fe(this._tTime, l), !g && this._tTime && d !== a && (d = a), p && 1 & a && (n = v - n, m = 1), a !== d && !this._lock)) {
                        var b = p && 1 & d,
                            x = b === (p && 1 & a);
                        if (a < d && (b = !b), g = b ? 0 : v, this._lock = 1, this.render(g || (m ? 0 : we(a * l)), t, !v)._lock = 0, !t && this.parent && vt(this, "onRepeat"), this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1), g !== this._time || c !== !this._ts) return this;
                        if (x && (this._lock = 2, g = b ? v + 1e-4 : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !m && this.invalidate()), this._lock = 0, !this._ts && !c) return this;
                        Rt(this, m)
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2 && (u = function (e, t, i) {
                        var n;
                        if (i > t)
                            for (n = e._first; n && n._start <= i;) {
                                if (!n._dur && "isPause" === n.data && n._start > t) return n;
                                n = n._next
                            } else
                            for (n = e._last; n && n._start >= i;) {
                                if (!n._dur && "isPause" === n.data && n._start < t) return n;
                                n = n._prev
                            }
                    }(this, we(g), we(n))) && (y -= n - (n = u._start)), this._tTime = y, this._time = n, this._act = !h, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e), g || !n || t || vt(this, "onStart"), n >= g && e >= 0)
                        for (r = this._first; r;) {
                            if (s = r._next, (r._act || n >= r._start) && r._ts && u !== r) {
                                if (r.parent !== this) return this.render(e, t, i);
                                if (r.render(r._ts > 0 ? (n - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (n - r._start) * r._ts, t, i), n !== this._time || !this._ts && !c) {
                                    u = 0, s && (y += this._zTime = -A);
                                    break
                                }
                            }
                            r = s
                        } else {
                        r = this._last;
                        for (var T = e < 0 ? e : n; r;) {
                            if (s = r._prev, (r._act || T <= r._end) && r._ts && u !== r) {
                                if (r.parent !== this) return this.render(e, t, i);
                                if (r.render(r._ts > 0 ? (T - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (T - r._start) * r._ts, t, i), n !== this._time || !this._ts && !c) {
                                    u = 0, s && (y += this._zTime = T ? -A : A);
                                    break
                                }
                            }
                            r = s
                        }
                    }
                    if (u && !t && (this.pause(), u.render(n >= g ? 0 : -A)._zTime = n >= g ? 1 : -1, this._ts)) return this._start = f, ze(this), this.render(e, t, i);
                    this._onUpdate && !t && vt(this, "onUpdate", !0), (y === _ && _ >= this.totalDuration() || !y && g) && (f !== this._start && Math.abs(h) === Math.abs(this._ts) || this._lock || ((e || !v) && (y === _ && this._ts > 0 || !y && this._ts < 0) && Le(this, 1), t || e < 0 && !g || !y && !g || (vt(this, y === _ ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < _ && this.timeScale() > 0) && this._prom())))
                }
                return this
            }, i.add = function (e, t) {
                var i = this;
                if (H(t) || (t = Ve(this, t)), !(e instanceof Bt)) {
                    if (U(e)) return e.forEach(function (e) {
                        return i.add(e, t)
                    }), Re(this);
                    if (N(e)) return this.addLabel(e, t);
                    if (!z(e)) return this;
                    e = Kt.delayedCall(0, e)
                }
                return this !== e ? Be(this, e, t) : this
            }, i.getChildren = function (e, t, i, n) {
                void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === i && (i = !0), void 0 === n && (n = -1e8);
                for (var r = [], o = this._first; o;) o._start >= n && (o instanceof Kt ? t && r.push(o) : (i && r.push(o), e && r.push.apply(r, o.getChildren(!0, t, i)))), o = o._next;
                return r
            }, i.getById = function (e) {
                for (var t = this.getChildren(1, 1, 1), i = t.length; i--;)
                    if (t[i].vars.id === e) return t[i]
            }, i.remove = function (e) {
                return N(e) ? this.removeLabel(e) : z(e) ? this.killTweensOf(e) : (De(this, e), e === this._recent && (this._recent = this._last), Re(this))
            }, i.totalTime = function (t, i) {
                return arguments.length ? (this._forcing = 1, this.parent || this._dp || !this._ts || (this._start = we(Ot.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), e.prototype.totalTime.call(this, t, i), this._forcing = 0, this) : this._tTime
            }, i.addLabel = function (e, t) {
                return this.labels[e] = Ve(this, t), this
            }, i.removeLabel = function (e) {
                return delete this.labels[e], this
            }, i.addPause = function (e, t, i) {
                var n = Kt.delayedCall(0, t || ae, i);
                return n.data = "isPause", this._hasPause = 1, Be(this, n, Ve(this, e))
            }, i.removePause = function (e) {
                var t = this._first;
                for (e = Ve(this, e); t;) t._start === e && "isPause" === t.data && Le(t), t = t._next
            }, i.killTweensOf = function (e, t, i) {
                for (var n = this.getTweensOf(e, i), r = n.length; r--;) Wt !== n[r] && n[r].kill(e, t);
                return this
            }, i.getTweensOf = function (e, t) {
                for (var i, n = [], r = it(e), o = this._first; o;) o instanceof Kt ? !be(o._targets, r) || t && !o.isActive("started" === t) || n.push(o) : (i = o.getTweensOf(r, t)).length && n.push.apply(n, i), o = o._next;
                return n
            }, i.tweenTo = function (e, t) {
                t = t || {};
                var i = this,
                    n = Ve(i, e),
                    r = t,
                    o = r.startAt,
                    s = r.onStart,
                    a = r.onStartParams,
                    l = Kt.to(i, Pe(t, {
                        ease: "none",
                        lazy: !1,
                        time: n,
                        duration: t.duration || Math.abs((n - (o && "time" in o ? o.time : i._time)) / i.timeScale()) || A,
                        onStart: function () {
                            i.pause();
                            var e = t.duration || Math.abs((n - i._time) / i.timeScale());
                            l._dur !== e && Xe(l, e).render(l._time, !0, !0), s && s.apply(l, a || [])
                        }
                    }));
                return l
            }, i.tweenFromTo = function (e, t, i) {
                return this.tweenTo(t, Pe({
                    startAt: {
                        time: Ve(this, e)
                    }
                }, i))
            }, i.recent = function () {
                return this._recent
            }, i.nextLabel = function (e) {
                return void 0 === e && (e = this._time), _t(this, Ve(this, e))
            }, i.previousLabel = function (e) {
                return void 0 === e && (e = this._time), _t(this, Ve(this, e), 1)
            }, i.currentLabel = function (e) {
                return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + A)
            }, i.shiftChildren = function (e, t, i) {
                void 0 === i && (i = 0);
                for (var n, r = this._first, o = this.labels; r;) r._start >= i && (r._start += e), r = r._next;
                if (t)
                    for (n in o) o[n] >= i && (o[n] += e);
                return Re(this)
            }, i.invalidate = function () {
                var t = this._first;
                for (this._lock = 0; t;) t.invalidate(), t = t._next;
                return e.prototype.invalidate.call(this)
            }, i.clear = function (e) {
                void 0 === e && (e = !0);
                for (var t, i = this._first; i;) t = i._next, this.remove(i), i = t;
                return this._time = this._tTime = this._pTime = 0, e && (this.labels = {}), Re(this)
            }, i.totalDuration = function (e) {
                var t, i, n, r, s = 0,
                    a = this._last,
                    l = 1e8;
                if (arguments.length) return this.timeScale((this._repeat < 0 ? this.duration() : this.totalDuration()) / (this.reversed() ? -e : e));
                if (this._dirty) {
                    for (r = this.parent; a;) t = a._prev, a._dirty && a.totalDuration(), (n = a._start) > l && this._sort && a._ts && !this._lock ? (this._lock = 1, Be(this, a, n - a._delay, 1)._lock = 0) : l = n, n < 0 && a._ts && (s -= n, (!r && !this._dp || r && r.smoothChildTiming) && (this._start += n / this._ts, this._time -= n, this._tTime -= n), this.shiftChildren(-n, !1, -Infinity), l = 0), (i = ze(a)) > s && a._ts && (s = i), a = t;
                    Xe(this, this === o && this._time > s ? this._time : s, 1), this._dirty = 0
                }
                return this._tDur
            }, t.updateRoot = function (e) {
                if (o._ts && (Ce(o, Ne(e, o)), u = Ot.frame), Ot.frame >= de) {
                    de += M.autoSleep || 120;
                    var t = o._first;
                    if ((!t || !t._ts) && M.autoSleep && Ot._listeners.length < 2) {
                        for (; t && !t._ts;) t = t._next;
                        t || Ot.sleep()
                    }
                }
            }, t
        }(Bt);
        i.TimelineLite = i.TimelineMax = i.Timeline = qt, Pe(qt.prototype, {
            _lock: 0,
            _hasPause: 0,
            _forcing: 0
        });
        var Wt, Xt = function (e, t, i, n, r, o, s, a, l) {
            z(n) && (n = n(r || 0, e, o));
            var c, u = e[t],
                h = "get" !== i ? i : z(u) ? l ? e[t.indexOf("set") || !z(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : u,
                f = z(u) ? l ? ei : Jt : Zt;
            if (N(n) && (~n.indexOf("random(") && (n = pt(n)), "=" === n.charAt(1) && (n = parseFloat(h) + parseFloat(n.substr(2)) * ("-" === n.charAt(0) ? -1 : 1) + (Ke(h) || 0))), h !== n) return isNaN(h + n) ? (!u && !(t in e) && re(t, n), function (e, t, i, n, r, o, s) {
                var a, l, c, u, h, f, d, p, m = new hi(this._pt, e, t, 0, 1, oi, null, r),
                    g = 0,
                    _ = 0;
                for (m.b = i, m.e = n, i += "", (d = ~(n += "").indexOf("random(")) && (n = pt(n)), o && (o(p = [i, n], e, t), i = p[0], n = p[1]), l = i.match(K) || []; a = K.exec(n);) u = a[0], h = n.substring(g, a.index), c ? c = (c + 1) % 5 : "rgba(" === h.substr(-5) && (c = 1), u !== l[_++] && (f = parseFloat(l[_ - 1]) || 0, m._pt = {
                    _next: m._pt,
                    p: h || 1 === _ ? h : ",",
                    s: f,
                    c: "=" === u.charAt(1) ? parseFloat(u.substr(2)) * ("-" === u.charAt(0) ? -1 : 1) : parseFloat(u) - f,
                    m: c && c < 4 ? Math.round : 0
                }, g = K.lastIndex);
                return m.c = g < n.length ? n.substring(g, n.length) : "", m.fp = s, (J.test(n) || d) && (m.e = 0), this._pt = m, m
            }.call(this, e, t, h, n, f, a || M.stringFilter, l)) : (c = new hi(this._pt, e, t, +h || 0, n - (h || 0), "boolean" == typeof u ? ri : ni, 0, f), l && (c.fp = l), s && c.modifier(s, this, e), this._pt = c)
        },
            Yt = function (e, t, i, n, r, o) {
                var s, a, l, c;
                if (he[e] && !1 !== (s = new he[e]).init(r, s.rawVars ? t[e] : function (e, t, i, n, r) {
                    if (z(e) && (e = Vt(e, r, t, i, n)), !q(e) || e.style && e.nodeType || U(e)) return N(e) ? Vt(e, r, t, i, n) : e;
                    var o, s = {};
                    for (o in e) s[o] = Vt(e[o], r, t, i, n);
                    return s
                }(t[e], n, r, o, i), i, n, o) && (i._pt = a = new hi(i._pt, r, e, 0, 1, s.render, s, 0, s.priority), i !== h))
                    for (l = i._ptLookup[i._targets.indexOf(r)], c = s._props.length; c--;) l[s._props[c]] = a;
                return s
            },
            Ut = function e(t, i) {
                var n, r, s, a, l, c, u, h, f, d, p, m, g = t.vars,
                    _ = g.ease,
                    v = g.startAt,
                    y = g.immediateRender,
                    w = g.lazy,
                    b = g.onUpdate,
                    x = g.onUpdateParams,
                    T = g.callbackScope,
                    C = g.runBackwards,
                    S = g.yoyoEase,
                    k = g.keyframes,
                    P = g.autoRevert,
                    O = t._dur,
                    E = t._startAt,
                    M = t._targets,
                    D = t.parent,
                    L = D && "nested" === D.data ? D.parent._targets : M,
                    R = "auto" === t._overwrite,
                    j = t.timeline;
                if (j && (!k || !_) && (_ = "none"), t._ease = jt(_, $.ease), t._yEase = S ? Lt(jt(!0 === S ? _ : S, $.ease)) : 0, S && t._yoyo && !t._repeat && (S = t._yEase, t._yEase = t._ease, t._ease = S), !j) {
                    if (m = (h = M[0] ? _e(M[0]).harness : 0) && g[h.prop], n = $e(g, le), E && E.render(-1, !0).kill(), v) {
                        if (Le(t._startAt = Kt.set(M, Pe({
                            data: "isStart",
                            overwrite: !1,
                            parent: D,
                            immediateRender: !0,
                            lazy: W(w),
                            startAt: null,
                            delay: 0,
                            onUpdate: b,
                            onUpdateParams: x,
                            callbackScope: T,
                            stagger: 0
                        }, v))), y)
                            if (i > 0) !P && (t._startAt = 0);
                            else if (O) return
                    } else if (C && O)
                        if (E) !P && (t._startAt = 0);
                        else if (i && (y = !1), s = Pe({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: y && W(w),
                            immediateRender: y,
                            stagger: 0,
                            parent: D
                        }, n), m && (s[h.prop] = m), Le(t._startAt = Kt.set(M, s)), y) {
                            if (!i) return
                        } else e(t._startAt, A);
                    for (t._pt = 0, w = O && W(w) || w && !O, r = 0; r < M.length; r++) {
                        if (u = (l = M[r])._gsap || ge(M)[r]._gsap, t._ptLookup[r] = d = {}, ue[u.id] && Te(), p = L === M ? r : L.indexOf(l), h && !1 !== (f = new h).init(l, m || n, t, p, L) && (t._pt = a = new hi(t._pt, l, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function (e) {
                            d[e] = a
                        }), f.priority && (c = 1)), !h || m)
                            for (s in n) he[s] && (f = Yt(s, n, t, p, l, L)) ? f.priority && (c = 1) : d[s] = a = Xt.call(t, l, s, "get", n[s], p, L, 0, g.stringFilter);
                        t._op && t._op[r] && t.kill(l, t._op[r]), R && t._pt && (Wt = t, o.killTweensOf(l, d, "started"), Wt = 0), t._pt && w && (ue[u.id] = 1)
                    }
                    c && ui(t), t._onInit && t._onInit(t)
                }
                t._from = !j && !!g.runBackwards, t._onUpdate = b, t._initted = !!t.parent
            },
            Vt = function (e, t, i, n, r) {
                return z(e) ? e.call(t, i, n, r) : N(e) && ~e.indexOf("random(") ? pt(e) : e
            },
            Gt = me + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
            Qt = (Gt + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");
        i._checkPlugin = Yt;
        var Kt = function (e) {
            function t(t, i, r, s) {
                var a;
                "number" == typeof i && (r.duration = i, i = r, r = null);
                var l, c, u, h, f, d, p, m, g = (a = e.call(this, s ? i : Ae(i), r) || this).vars,
                    _ = g.duration,
                    v = g.delay,
                    y = g.immediateRender,
                    w = g.stagger,
                    b = g.overwrite,
                    x = g.keyframes,
                    T = g.defaults,
                    C = g.scrollTrigger,
                    S = g.yoyoEase,
                    k = a.parent,
                    P = (U(t) ? H(t[0]) : "length" in i) ? [t] : it(t);
                if (a._targets = P.length ? ge(P) : oe("GSAP target " + t + " not found. https://greensock.com", !M.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = b, x || w || Y(_) || Y(v)) {
                    if (i = a.vars, (l = a.timeline = new qt({
                        data: "nested",
                        defaults: T || {}
                    })).kill(), l.parent = n(a), x) Pe(l.vars.defaults, {
                        ease: "none"
                    }), x.forEach(function (e) {
                        return l.to(P, e, ">")
                    });
                    else {
                        if (h = P.length, p = w ? rt(w) : ae, q(w))
                            for (f in w) ~Gt.indexOf(f) && (m || (m = {}), m[f] = w[f]);
                        for (c = 0; c < h; c++) {
                            for (f in u = {}, i) Qt.indexOf(f) < 0 && (u[f] = i[f]);
                            u.stagger = 0, S && (u.yoyoEase = S), m && Ee(u, m), d = P[c], u.duration = +Vt(_, n(a), c, d, P), u.delay = (+Vt(v, n(a), c, d, P) || 0) - a._delay, !w && 1 === h && u.delay && (a._delay = v = u.delay, a._start += v, u.delay = 0), l.to(d, u, p(c, d, P))
                        }
                        l.duration() ? _ = v = 0 : a.timeline = 0
                    }
                    _ || a.duration(_ = l.duration())
                } else a.timeline = 0;
                return !0 === b && (Wt = n(a), o.killTweensOf(P), Wt = 0), k && He(k, n(a)), (y || !_ && !x && a._start === we(k._time) && W(y) && je(n(a)) && "nested" !== k.data) && (a._tTime = -A, a.render(Math.max(0, -v))), C && qe(n(a), C), a
            }
            r(t, e);
            var i = t.prototype;
            return i.render = function (e, t, i) {
                var n, r, o, s, a, l, c, u, h, f = this._time,
                    d = this._tDur,
                    p = this._dur,
                    m = e > d - A && e >= 0 ? d : e < A ? 0 : e;
                if (p) {
                    if (m !== this._tTime || !e || i || this._startAt && this._zTime < 0 != e < 0) {
                        if (n = m, u = this.timeline, this._repeat) {
                            if (s = p + this._rDelay, ((n = we(m % s)) > p || d === m) && (n = p), (o = ~~(m / s)) && o === m / s && (n = p, o--), (l = this._yoyo && 1 & o) && (h = this._yEase, n = p - n), a = Fe(this._tTime, s), n === f && !i && this._initted) return this;
                            o !== a && (u && this._yEase && Rt(u, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = i = 1, this.render(we(s * o), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (We(this, n, i, t)) return this._tTime = 0, this;
                            if (p !== this._dur) return this.render(e, t, i)
                        }
                        for (this._tTime = m, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (h || this._ease)(n / p), this._from && (this.ratio = c = 1 - c), n && !f && !t && vt(this, "onStart"), r = this._pt; r;) r.r(c, r.d), r = r._next;
                        u && u.render(e < 0 ? e : !n && l ? -A : u._dur * c, t, i) || this._startAt && (this._zTime = e), this._onUpdate && !t && (e < 0 && this._startAt && this._startAt.render(e, !0, i), vt(this, "onUpdate")), this._repeat && o !== a && this.vars.onRepeat && !t && this.parent && vt(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (e < 0 && this._startAt && !this._onUpdate && this._startAt.render(e, !0, !0), (e || !p) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && Le(this, 1), t || e < 0 && !f || !m && !f || (vt(this, m === d ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < d && this.timeScale() > 0) && this._prom()))
                    }
                } else ! function (e, t, i, n) {
                    var r, o, s = e.ratio,
                        a = t < 0 || !t && s && !e._start && e._zTime > A && !e._dp._lock || e._ts < 0 || e._dp._ts < 0 ? 0 : 1,
                        l = e._rDelay,
                        c = 0;
                    if (l && e._repeat && (c = Qe(0, e._tDur, t), Fe(c, l) !== (o = Fe(e._tTime, l)) && (s = 1 - a, e.vars.repeatRefresh && e._initted && e.invalidate())), e._initted || !We(e, t, n, i))
                        if (a !== s || n || e._zTime === A || !t && e._zTime) {
                            for (o = e._zTime, e._zTime = t || (i ? A : 0), i || (i = t && !o), e.ratio = a, e._from && (a = 1 - a), e._time = 0, e._tTime = c, i || vt(e, "onStart"), r = e._pt; r;) r.r(a, r.d), r = r._next;
                            e._startAt && t < 0 && e._startAt.render(t, !0, !0), e._onUpdate && !i && vt(e, "onUpdate"), c && e._repeat && !i && e.parent && vt(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === a && (a && Le(e, 1), i || (vt(e, a ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
                        } else e._zTime || (e._zTime = t)
                }(this, e, t, i);
                return this
            }, i.targets = function () {
                return this._targets
            }, i.invalidate = function () {
                return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), e.prototype.invalidate.call(this)
            }, i.kill = function (e, t) {
                if (void 0 === t && (t = "all"), !(e || t && "all" !== t) && (this._lazy = 0, this.parent)) return yt(this);
                if (this.timeline) {
                    var i = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(e, t, Wt && !0 !== Wt.vars.overwrite)._first || yt(this), this.parent && i !== this.timeline.totalDuration() && Xe(this, this._dur * this.timeline._tDur / i), this
                }
                var n, r, o, s, a, l, c, u = this._targets,
                    h = e ? it(e) : u,
                    f = this._ptLookup,
                    d = this._pt;
                if ((!t || "all" === t) && function (e, t) {
                    for (var i = e.length, n = i === t.length; n && i-- && e[i] === t[i];);
                    return i < 0
                }(u, h)) return yt(this);
                for (n = this._op = this._op || [], "all" !== t && (N(t) && (a = {}, ye(t, function (e) {
                    return a[e] = 1
                }), t = a), t = function (e, t) {
                    var i, n, r, o, s = e[0] ? _e(e[0]).harness : 0,
                        a = s && s.aliases;
                    if (!a) return t;
                    for (n in i = Ee({}, t), a)
                        if (n in i)
                            for (r = (o = a[n].split(",")).length; r--;) i[o[r]] = i[n];
                    return i
                }(u, t)), c = u.length; c--;)
                    if (~h.indexOf(u[c]))
                        for (a in r = f[c], "all" === t ? (n[c] = t, s = r, o = {}) : (o = n[c] = n[c] || {}, s = t), s) (l = r && r[a]) && ("kill" in l.d && !0 !== l.d.kill(a) || De(this, l, "_pt"), delete r[a]), "all" !== o && (o[a] = 1);
                return this._initted && !this._pt && d && yt(this), this
            }, t.to = function (e, i) {
                return new t(e, i, arguments[2])
            }, t.from = function (e, i) {
                return new t(e, xe(arguments, 1))
            }, t.delayedCall = function (e, i, n, r) {
                return new t(i, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: e,
                    onComplete: i,
                    onReverseComplete: i,
                    onCompleteParams: n,
                    onReverseCompleteParams: n,
                    callbackScope: r
                })
            }, t.fromTo = function (e, i, n) {
                return new t(e, xe(arguments, 2))
            }, t.set = function (e, i) {
                return i.duration = 0, i.repeatDelay || (i.repeat = 0), new t(e, i)
            }, t.killTweensOf = function (e, t, i) {
                return o.killTweensOf(e, t, i)
            }, t
        }(Bt);
        i.TweenLite = i.TweenMax = i.Tween = Kt, Pe(Kt.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0
        }), ye("staggerTo,staggerFrom,staggerFromTo", function (e) {
            Kt[e] = function () {
                var t = new qt,
                    i = Je.call(arguments, 0);
                return i.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, i)
            }
        });
        var Zt = function (e, t, i) {
            return e[t] = i
        },
            Jt = function (e, t, i) {
                return e[t](i)
            },
            ei = function (e, t, i, n) {
                return e[t](n.fp, i)
            },
            ti = function (e, t, i) {
                return e.setAttribute(t, i)
            },
            ii = function (e, t) {
                return z(e[t]) ? Jt : B(e[t]) && e.setAttribute ? ti : Zt
            },
            ni = function (e, t) {
                return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4, t)
            },
            ri = function (e, t) {
                return t.set(t.t, t.p, !!(t.s + t.c * e), t)
            },
            oi = function (e, t) {
                var i = t._pt,
                    n = "";
                if (!e && t.b) n = t.b;
                else if (1 === e && t.e) n = t.e;
                else {
                    for (; i;) n = i.p + (i.m ? i.m(i.s + i.c * e) : Math.round(1e4 * (i.s + i.c * e)) / 1e4) + n, i = i._next;
                    n += t.c
                }
                t.set(t.t, t.p, n, t)
            },
            si = function (e, t) {
                for (var i = t._pt; i;) i.r(e, i.d), i = i._next
            },
            ai = function (e, t, i, n) {
                for (var r, o = this._pt; o;) r = o._next, o.p === n && o.modifier(e, t, i), o = r
            },
            li = function (e) {
                for (var t, i, n = this._pt; n;) i = n._next, n.p === e && !n.op || n.op === e ? De(this, n, "_pt") : n.dep || (t = 1), n = i;
                return !t
            },
            ci = function (e, t, i, n) {
                n.mSet(e, t, n.m.call(n.tween, i, n.mt), n)
            },
            ui = function (e) {
                for (var t, i, n, r, o = e._pt; o;) {
                    for (t = o._next, i = n; i && i.pr > o.pr;) i = i._next;
                    (o._prev = i ? i._prev : r) ? o._prev._next = o : n = o, (o._next = i) ? i._prev = o : r = o, o = t
                }
                e._pt = n
            };
        i._sortPropTweensByPriority = ui, i._renderComplexString = oi, i._getSetter = ii;
        var hi = function () {
            function e(e, t, i, n, r, o, s, a, l) {
                this.t = t, this.s = n, this.c = r, this.p = i, this.r = o || ni, this.d = s || this, this.set = a || Zt, this.pr = l || 0, this._next = e, e && (e._prev = this)
            }
            return e.prototype.modifier = function (e, t, i) {
                this.mSet = this.mSet || this.set, this.set = ci, this.m = e, this.mt = i, this.tween = t
            }, e
        }();
        i.PropTween = hi, ye(me + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (e) {
            return le[e] = 1
        }), te.TweenMax = te.TweenLite = Kt, te.TimelineLite = te.TimelineMax = qt, o = new qt({
            sortChildren: !1,
            defaults: $,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0
        }), M.stringFilter = Pt;
        var fi = {
            registerPlugin: function () {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                t.forEach(function (e) {
                    return function (e) {
                        var t = (e = !e.name && e.default || e).name,
                            i = z(e),
                            n = t && !i && e.init ? function () {
                                this._props = []
                            } : e,
                            r = {
                                init: ae,
                                render: si,
                                add: Xt,
                                kill: li,
                                modifier: ai,
                                rawVars: 0
                            },
                            o = {
                                targetTest: 0,
                                get: 0,
                                getSetter: ii,
                                aliases: {},
                                register: 0
                            };
                        if (Et(), e !== n) {
                            if (he[t]) return;
                            Pe(n, Pe($e(e, r), o)), Ee(n.prototype, Ee(r, $e(e, o))), he[n.prop = t] = n, e.targetTest && (pe.push(n), le[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
                        }
                        se(t, n), e.register && e.register(mi, n, hi)
                    }(e)
                })
            },
            timeline: function (e) {
                return new qt(e)
            },
            getTweensOf: function (e, t) {
                return o.getTweensOf(e, t)
            },
            getProperty: function (e, t, i, n) {
                N(e) && (e = it(e)[0]);
                var r = _e(e || {}).get,
                    o = i ? ke : Se;
                return "native" === i && (i = ""), e ? t ? o((he[t] && he[t].get || r)(e, t, i, n)) : function (t, i, n) {
                    return o((he[t] && he[t].get || r)(e, t, i, n))
                } : e
            },
            quickSetter: function (e, t, i) {
                if ((e = it(e)).length > 1) {
                    var n = e.map(function (e) {
                        return mi.quickSetter(e, t, i)
                    }),
                        r = n.length;
                    return function (e) {
                        for (var t = r; t--;) n[t](e)
                    }
                }
                e = e[0] || {};
                var o = he[t],
                    s = _e(e),
                    a = s.harness && (s.harness.aliases || {})[t] || t,
                    l = o ? function (t) {
                        var n = new o;
                        h._pt = 0, n.init(e, i ? t + i : t, h, 0, [e]), n.render(1, n), h._pt && si(1, h)
                    } : s.set(e, a);
                return o ? l : function (t) {
                    return l(e, a, i ? t + i : t, s, 1)
                }
            },
            isTweening: function (e) {
                return o.getTweensOf(e, !0).length > 0
            },
            defaults: function (e) {
                return e && e.ease && (e.ease = jt(e.ease, $.ease)), Me($, e || {})
            },
            config: function (e) {
                return Me(M, e || {})
            },
            registerEffect: function (e) {
                var t = e.name,
                    i = e.effect,
                    n = e.plugins,
                    r = e.defaults,
                    o = e.extendTimeline;
                (n || "").split(",").forEach(function (e) {
                    return e && !he[e] && !te[e] && oe(t + " effect requires " + e + " plugin.")
                }), fe[t] = function (e, t, n) {
                    return i(it(e), Pe(t || {}, r), n)
                }, o && (qt.prototype[t] = function (e, i, n) {
                    return this.add(fe[t](e, q(i) ? i : (n = i) && {}, this), n)
                })
            },
            registerEase: function (e, t) {
                Mt[e] = jt(t)
            },
            parseEase: function (e, t) {
                return arguments.length ? jt(e, t) : Mt
            },
            getById: function (e) {
                return o.getById(e)
            },
            exportRoot: function (e, t) {
                void 0 === e && (e = {});
                var i, n, r = new qt(e);
                for (r.smoothChildTiming = W(e.smoothChildTiming), o.remove(r), r._dp = 0, r._time = r._tTime = o._time, i = o._first; i;) n = i._next, !t && !i._dur && i instanceof Kt && i.vars.onComplete === i._targets[0] || Be(r, i, i._start - i._delay), i = n;
                return Be(o, r, 0), r
            },
            utils: {
                wrap: ft,
                wrapYoyo: dt,
                distribute: rt,
                random: at,
                snap: st,
                normalize: ut,
                getUnit: Ke,
                clamp: Ze,
                splitColor: xt,
                toArray: it,
                mapRange: mt,
                pipe: lt,
                unitize: ct,
                interpolate: gt,
                shuffle: nt
            },
            install: ne,
            effects: fe,
            ticker: Ot,
            updateRoot: qt.updateRoot,
            plugins: he,
            globalTimeline: o,
            core: {
                PropTween: hi,
                globals: se,
                Tween: Kt,
                Timeline: qt,
                Animation: Bt,
                getCache: _e,
                _removeLinkedListItem: De
            }
        };
        ye("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
            return fi[e] = Kt[e]
        }), Ot.add(qt.updateRoot), h = fi.to({}, {
            duration: 0
        });
        var di = function (e, t) {
            for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t;) i = i._next;
            return i
        },
            pi = function (e, t) {
                return {
                    name: e,
                    rawVars: 1,
                    init: function (e, i, n) {
                        n._onInit = function (e) {
                            var n, r;
                            if (N(i) && (n = {}, ye(i, function (e) {
                                return n[e] = 1
                            }), i = n), t) {
                                for (r in n = {}, i) n[r] = t(i[r]);
                                i = n
                            } ! function (e, t) {
                                var i, n, r, o = e._targets;
                                for (i in t)
                                    for (n = o.length; n--;)(r = e._ptLookup[n][i]) && (r = r.d) && (r._pt && (r = di(r, i)), r && r.modifier && r.modifier(t[i], e, o[n], i))
                            }(e, i)
                        }
                    }
                }
            },
            mi = fi.registerPlugin({
                name: "attr",
                init: function (e, t, i, n, r) {
                    var o, s;
                    for (o in t) (s = this.add(e, "setAttribute", (e.getAttribute(o) || 0) + "", t[o], n, r, 0, 0, o)) && (s.op = o), this._props.push(o)
                }
            }, {
                name: "endArray",
                init: function (e, t) {
                    for (var i = t.length; i--;) this.add(e, i, e[i] || 0, t[i])
                }
            }, pi("roundProps", ot), pi("modifiers"), pi("snap", st)) || fi;
        i.default = i.gsap = mi, Kt.version = qt.version = mi.version = "3.3.4", c = 1, X() && Et();
        var gi = Mt.Power0,
            _i = Mt.Power1,
            vi = Mt.Power2,
            yi = Mt.Power3,
            wi = Mt.Power4,
            bi = Mt.Linear,
            xi = Mt.Quad,
            Ti = Mt.Cubic,
            Ci = Mt.Quart,
            Si = Mt.Quint,
            ki = Mt.Strong,
            Pi = Mt.Elastic,
            Oi = Mt.Back,
            Ei = Mt.SteppedEase,
            Mi = Mt.Bounce,
            $i = Mt.Sine,
            Ai = Mt.Expo,
            Di = Mt.Circ;
        i.Circ = Di, i.Expo = Ai, i.Sine = $i, i.Bounce = Mi, i.SteppedEase = Ei, i.Back = Oi, i.Elastic = Pi, i.Strong = ki, i.Quint = Si, i.Quart = Ci, i.Cubic = Ti, i.Quad = xi, i.Linear = bi, i.Power4 = wi, i.Power3 = yi, i.Power2 = vi, i.Power1 = _i, i.Power0 = gi
    }, {}],
    bp4Z: [function (e, t, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.checkPrefix = i._createElement = i._getBBox = i.default = i.CSSPlugin = void 0;
        var n, r, o, s, a, l, c, u, h = e("./gsap-core.js"),
            f = {},
            d = 180 / Math.PI,
            p = Math.PI / 180,
            m = Math.atan2,
            g = /([A-Z])/g,
            _ = /(?:left|right|width|margin|padding|x)/i,
            v = /[\s,\(]\S/,
            y = {
                autoAlpha: "opacity,visibility",
                scale: "scaleX,scaleY",
                alpha: "opacity"
            },
            w = function (e, t) {
                return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
            },
            b = function (e, t) {
                return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
            },
            x = function (e, t) {
                return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
            },
            T = function (e, t) {
                var i = t.s + t.c * e;
                t.set(t.t, t.p, ~~(i + (i < 0 ? -.5 : .5)) + t.u, t)
            },
            C = function (e, t) {
                return t.set(t.t, t.p, e ? t.e : t.b, t)
            },
            S = function (e, t) {
                return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
            },
            k = function (e, t, i) {
                return e.style[t] = i
            },
            P = function (e, t, i) {
                return e.style.setProperty(t, i)
            },
            O = function (e, t, i) {
                return e._gsap[t] = i
            },
            E = function (e, t, i) {
                return e._gsap.scaleX = e._gsap.scaleY = i
            },
            M = function (e, t, i, n, r) {
                var o = e._gsap;
                o.scaleX = o.scaleY = i, o.renderTransform(r, o)
            },
            $ = function (e, t, i, n, r) {
                var o = e._gsap;
                o[t] = i, o.renderTransform(r, o)
            },
            A = "transform",
            D = A + "Origin",
            L = function (e, t) {
                var i = r.createElementNS ? r.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : r.createElement(e);
                return i.style ? i : r.createElement(e)
            },
            R = function e(t, i, n) {
                var r = getComputedStyle(t);
                return r[i] || r.getPropertyValue(i.replace(g, "-$1").toLowerCase()) || r.getPropertyValue(i) || !n && e(t, I(i) || i, 1) || ""
            },
            j = "O,Moz,ms,Ms,Webkit".split(","),
            I = function (e, t, i) {
                var n = (t || a).style,
                    r = 5;
                if (e in n && !i) return e;
                for (e = e.charAt(0).toUpperCase() + e.substr(1); r-- && !(j[r] + e in n););
                return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? j[r] : "") + e
            },
            F = function () {
                "undefined" != typeof window && window.document && (n = window, r = n.document, o = r.documentElement, a = L("div") || {
                    style: {}
                }, l = L("div"), A = I(A), D = I(D), a.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", u = !!I("perspective"), s = 1)
            },
            N = function e(t) {
                var i, n = L("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                    r = this.parentNode,
                    s = this.nextSibling,
                    a = this.style.cssText;
                if (o.appendChild(n), n.appendChild(this), this.style.display = "block", t) try {
                    i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = e
                } catch (e) { } else this._gsapBBox && (i = this._gsapBBox());
                return r && (s ? r.insertBefore(this, s) : r.appendChild(this)), o.removeChild(n), this.style.cssText = a, i
            },
            z = function (e, t) {
                for (var i = t.length; i--;)
                    if (e.hasAttribute(t[i])) return e.getAttribute(t[i])
            },
            H = function (e) {
                var t;
                try {
                    t = e.getBBox()
                } catch (i) {
                    t = N.call(e, !0)
                }
                return t && (t.width || t.height) || e.getBBox === N || (t = N.call(e, !0)), !t || t.width || t.x || t.y ? t : {
                    x: +z(e, ["x", "cx", "x1"]) || 0,
                    y: +z(e, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0
                }
            },
            B = function (e) {
                return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !H(e))
            },
            q = function (e, t) {
                if (t) {
                    var i = e.style;
                    t in f && (t = A), i.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), i.removeProperty(t.replace(g, "-$1").toLowerCase())) : i.removeAttribute(t)
                }
            },
            W = function (e, t, i, n, r, o) {
                var s = new h.PropTween(e._pt, t, i, 0, 1, o ? S : C);
                return e._pt = s, s.b = n, s.e = r, e._props.push(i), s
            },
            X = {
                deg: 1,
                rad: 1,
                turn: 1
            },
            Y = function e(t, i, n, o) {
                var s, l, c, u, d = parseFloat(n) || 0,
                    p = (n + "").trim().substr((d + "").length) || "px",
                    m = a.style,
                    g = _.test(i),
                    v = "svg" === t.tagName.toLowerCase(),
                    y = (v ? "client" : "offset") + (g ? "Width" : "Height"),
                    w = "px" === o,
                    b = "%" === o;
                return o === p || !d || X[o] || X[p] ? d : ("px" !== p && !w && (d = e(t, i, n, "px")), u = t.getCTM && B(t), b && (f[i] || ~i.indexOf("adius")) ? (0, h._round)(d / (u ? t.getBBox()[g ? "width" : "height"] : t[y]) * 100) : (m[g ? "width" : "height"] = 100 + (w ? p : o), l = ~i.indexOf("adius") || "em" === o && t.appendChild && !v ? t : t.parentNode, u && (l = (t.ownerSVGElement || {}).parentNode), l && l !== r && l.appendChild || (l = r.body), (c = l._gsap) && b && c.width && g && c.time === h._ticker.time ? (0, h._round)(d / c.width * 100) : ((b || "%" === p) && (m.position = R(t, "position")), l === t && (m.position = "static"), l.appendChild(a), s = a[y], l.removeChild(a), m.position = "absolute", g && b && ((c = (0, h._getCache)(l)).time = h._ticker.time, c.width = l[y]), (0, h._round)(w ? s * d / 100 : s && d ? 100 / s * d : 0))))
            },
            U = function (e, t, i, n) {
                var r;
                return s || F(), t in y && "transform" !== t && ~(t = y[t]).indexOf(",") && (t = t.split(",")[0]), f[t] && "transform" !== t ? (r = re(e, n), r = "transformOrigin" !== t ? r[t] : oe(R(e, D)) + " " + r.zOrigin + "px") : (!(r = e.style[t]) || "auto" === r || n || ~(r + "").indexOf("calc(")) && (r = K[t] && K[t](e, t, i) || R(e, t) || (0, h._getProperty)(e, t) || ("opacity" === t ? 1 : 0)), i && !~(r + "").indexOf(" ") ? Y(e, t, r, i) + i : r
            },
            V = function (e, t, i, n) {
                if (!i || "none" === i) {
                    var r = I(t, e, 1),
                        o = r && R(e, r, 1);
                    o && o !== i && (t = r, i = o)
                }
                var s, a, l, c, u, f, d, p, m, g, _, v, y = new h.PropTween(this._pt, e.style, t, 0, 1, h._renderComplexString),
                    w = 0,
                    b = 0;
                if (y.b = i, y.e = n, i += "", "auto" === (n += "") && (e.style[t] = n, n = R(e, t) || n, e.style[t] = i), s = [i, n], (0, h._colorStringFilter)(s), n = s[1], l = (i = s[0]).match(h._numWithUnitExp) || [], (n.match(h._numWithUnitExp) || []).length) {
                    for (; a = h._numWithUnitExp.exec(n);) d = a[0], m = n.substring(w, a.index), u ? u = (u + 1) % 5 : "rgba(" !== m.substr(-5) && "hsla(" !== m.substr(-5) || (u = 1), d !== (f = l[b++] || "") && (c = parseFloat(f) || 0, _ = f.substr((c + "").length), (v = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), p = parseFloat(d), g = d.substr((p + "").length), w = h._numWithUnitExp.lastIndex - g.length, g || (g = g || h._config.units[t] || _, w === n.length && (n += g, y.e += g)), _ !== g && (c = Y(e, t, f, g) || 0), y._pt = {
                        _next: y._pt,
                        p: m || 1 === b ? m : ",",
                        s: c,
                        c: v ? v * p : p - c,
                        m: u && u < 4 ? Math.round : 0
                    });
                    y.c = w < n.length ? n.substring(w, n.length) : ""
                } else y.r = "display" === t && "none" === n ? S : C;
                return h._relExp.test(n) && (y.e = 0), this._pt = y, y
            },
            G = {
                top: "0%",
                bottom: "100%",
                left: "0%",
                right: "100%",
                center: "50%"
            },
            Q = function (e, t) {
                if (t.tween && t.tween._time === t.tween._dur) {
                    var i, n, r, o = t.t,
                        s = o.style,
                        a = t.u,
                        l = o._gsap;
                    if ("all" === a || !0 === a) s.cssText = "", n = 1;
                    else
                        for (r = (a = a.split(",")).length; --r > -1;) i = a[r], f[i] && (n = 1, i = "transformOrigin" === i ? D : A), q(o, i);
                    n && (q(o, A), l && (l.svg && o.removeAttribute("transform"), re(o, 1), l.uncache = 1))
                }
            },
            K = {
                clearProps: function (e, t, i, n, r) {
                    if ("isFromStart" !== r.data) {
                        var o = e._pt = new h.PropTween(e._pt, t, i, 0, 0, Q);
                        return o.u = n, o.pr = -10, o.tween = r, e._props.push(i), 1
                    }
                }
            },
            Z = [1, 0, 0, 1, 0, 0],
            J = {},
            ee = function (e) {
                return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
            },
            te = function (e) {
                var t = R(e, A);
                return ee(t) ? Z : t.substr(7).match(h._numExp).map(h._round)
            },
            ie = function (e, t) {
                var i, n, r, s, a = e._gsap || (0, h._getCache)(e),
                    l = e.style,
                    c = te(e);
                return a.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (c = [(r = e.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? Z : c : (c !== Z || e.offsetParent || e === o || a.svg || (r = l.display, l.display = "block", (i = e.parentNode) && e.offsetParent || (s = 1, n = e.nextSibling, o.appendChild(e)), c = te(e), r ? l.display = r : q(e, "display"), s && (n ? i.insertBefore(e, n) : i ? i.appendChild(e) : o.removeChild(e))), t && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c)
            },
            ne = function (e, t, i, n, r, o) {
                var s, a, l, c = e._gsap,
                    u = r || ie(e, !0),
                    h = c.xOrigin || 0,
                    f = c.yOrigin || 0,
                    d = c.xOffset || 0,
                    p = c.yOffset || 0,
                    m = u[0],
                    g = u[1],
                    _ = u[2],
                    v = u[3],
                    y = u[4],
                    w = u[5],
                    b = t.split(" "),
                    x = parseFloat(b[0]) || 0,
                    T = parseFloat(b[1]) || 0;
                i ? u !== Z && (a = m * v - g * _) && (l = x * (-g / a) + T * (m / a) - (m * w - g * y) / a, x = x * (v / a) + T * (-_ / a) + (_ * w - v * y) / a, T = l) : (x = (s = H(e)).x + (~b[0].indexOf("%") ? x / 100 * s.width : x), T = s.y + (~(b[1] || b[0]).indexOf("%") ? T / 100 * s.height : T)), n || !1 !== n && c.smooth ? (y = x - h, w = T - f, c.xOffset = d + (y * m + w * _) - y, c.yOffset = p + (y * g + w * v) - w) : c.xOffset = c.yOffset = 0, c.xOrigin = x, c.yOrigin = T, c.smooth = !!n, c.origin = t, c.originIsAbsolute = !!i, e.style[D] = "0px 0px", o && (W(o, c, "xOrigin", h, x), W(o, c, "yOrigin", f, T), W(o, c, "xOffset", d, c.xOffset), W(o, c, "yOffset", p, c.yOffset)), e.setAttribute("data-svg-origin", x + " " + T)
            },
            re = function (e, t) {
                var i = e._gsap || new h.GSCache(e);
                if ("x" in i && !t && !i.uncache) return i;
                var n, r, o, s, a, l, c, f, g, _, v, y, w, b, x, T, C, S, k, P, O, E, M, $, L, j, I, F, N, z, H, q, W = e.style,
                    X = i.scaleX < 0,
                    Y = R(e, D) || "0";
                return n = r = o = l = c = f = g = _ = v = 0, s = a = 1, i.svg = !(!e.getCTM || !B(e)), b = ie(e, i.svg), i.svg && ($ = !i.uncache && e.getAttribute("data-svg-origin"), ne(e, $ || Y, !!$ || i.originIsAbsolute, !1 !== i.smooth, b)), y = i.xOrigin || 0, w = i.yOrigin || 0, b !== Z && (S = b[0], k = b[1], P = b[2], O = b[3], n = E = b[4], r = M = b[5], 6 === b.length ? (s = Math.sqrt(S * S + k * k), a = Math.sqrt(O * O + P * P), l = S || k ? m(k, S) * d : 0, (g = P || O ? m(P, O) * d + l : 0) && (a *= Math.cos(g * p)), i.svg && (n -= y - (y * S + w * P), r -= w - (y * k + w * O))) : (q = b[6], z = b[7], I = b[8], F = b[9], N = b[10], H = b[11], n = b[12], r = b[13], o = b[14], c = (x = m(q, N)) * d, x && ($ = E * (T = Math.cos(-x)) + I * (C = Math.sin(-x)), L = M * T + F * C, j = q * T + N * C, I = E * -C + I * T, F = M * -C + F * T, N = q * -C + N * T, H = z * -C + H * T, E = $, M = L, q = j), f = (x = m(-P, N)) * d, x && (T = Math.cos(-x), H = O * (C = Math.sin(-x)) + H * T, S = $ = S * T - I * C, k = L = k * T - F * C, P = j = P * T - N * C), l = (x = m(k, S)) * d, x && ($ = S * (T = Math.cos(x)) + k * (C = Math.sin(x)), L = E * T + M * C, k = k * T - S * C, M = M * T - E * C, S = $, E = L), c && Math.abs(c) + Math.abs(l) > 359.9 && (c = l = 0, f = 180 - f), s = (0, h._round)(Math.sqrt(S * S + k * k + P * P)), a = (0, h._round)(Math.sqrt(M * M + q * q)), x = m(E, M), g = Math.abs(x) > 2e-4 ? x * d : 0, v = H ? 1 / (H < 0 ? -H : H) : 0), i.svg && ($ = e.getAttribute("transform"), i.forceCSS = e.setAttribute("transform", "") || !ee(R(e, A)), $ && e.setAttribute("transform", $))), Math.abs(g) > 90 && Math.abs(g) < 270 && (X ? (s *= -1, g += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, g += g <= 0 ? 180 : -180)), i.x = ((i.xPercent = n && Math.round(e.offsetWidth / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px", i.y = ((i.yPercent = r && Math.round(e.offsetHeight / 2) === Math.round(-r) ? -50 : 0) ? 0 : r) + "px", i.z = o + "px", i.scaleX = (0, h._round)(s), i.scaleY = (0, h._round)(a), i.rotation = (0, h._round)(l) + "deg", i.rotationX = (0, h._round)(c) + "deg", i.rotationY = (0, h._round)(f) + "deg", i.skewX = g + "deg", i.skewY = _ + "deg", i.transformPerspective = v + "px", (i.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (W[D] = oe(Y)), i.xOffset = i.yOffset = 0, i.force3D = h._config.force3D, i.renderTransform = i.svg ? ce : u ? le : ae, i.uncache = 0, i
            },
            oe = function (e) {
                return (e = e.split(" "))[0] + " " + e[1]
            },
            se = function (e, t, i) {
                var n = (0, h.getUnit)(t);
                return (0, h._round)(parseFloat(t) + parseFloat(Y(e, "x", i + "px", n))) + n
            },
            ae = function (e, t) {
                t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, le(e, t)
            },
            le = function (e, t) {
                var i = t || this,
                    n = i.xPercent,
                    r = i.yPercent,
                    o = i.x,
                    s = i.y,
                    a = i.z,
                    l = i.rotation,
                    c = i.rotationY,
                    u = i.rotationX,
                    h = i.skewX,
                    f = i.skewY,
                    d = i.scaleX,
                    m = i.scaleY,
                    g = i.transformPerspective,
                    _ = i.force3D,
                    v = i.target,
                    y = i.zOrigin,
                    w = "",
                    b = "auto" === _ && e && 1 !== e || !0 === _;
                if (y && ("0deg" !== u || "0deg" !== c)) {
                    var x, T = parseFloat(c) * p,
                        C = Math.sin(T),
                        S = Math.cos(T);
                    T = parseFloat(u) * p, x = Math.cos(T), o = se(v, o, C * x * -y), s = se(v, s, -Math.sin(T) * -y), a = se(v, a, S * x * -y + y)
                }
                "0px" !== g && (w += "perspective(" + g + ") "), (n || r) && (w += "translate(" + n + "%, " + r + "%) "), (b || "0px" !== o || "0px" !== s || "0px" !== a) && (w += "0px" !== a || b ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + ") "), "0deg" !== l && (w += "rotate(" + l + ") "), "0deg" !== c && (w += "rotateY(" + c + ") "), "0deg" !== u && (w += "rotateX(" + u + ") "), "0deg" === h && "0deg" === f || (w += "skew(" + h + ", " + f + ") "), 1 === d && 1 === m || (w += "scale(" + d + ", " + m + ") "), v.style[A] = w || "translate(0, 0)"
            },
            ce = function (e, t) {
                var i, n, r, o, s, a = t || this,
                    l = a.xPercent,
                    c = a.yPercent,
                    u = a.x,
                    f = a.y,
                    d = a.rotation,
                    m = a.skewX,
                    g = a.skewY,
                    _ = a.scaleX,
                    v = a.scaleY,
                    y = a.target,
                    w = a.xOrigin,
                    b = a.yOrigin,
                    x = a.xOffset,
                    T = a.yOffset,
                    C = a.forceCSS,
                    S = parseFloat(u),
                    k = parseFloat(f);
                d = parseFloat(d), m = parseFloat(m), (g = parseFloat(g)) && (m += g = parseFloat(g), d += g), d || m ? (d *= p, m *= p, i = Math.cos(d) * _, n = Math.sin(d) * _, r = Math.sin(d - m) * -v, o = Math.cos(d - m) * v, m && (g *= p, s = Math.tan(m - g), r *= s = Math.sqrt(1 + s * s), o *= s, g && (s = Math.tan(g), i *= s = Math.sqrt(1 + s * s), n *= s)), i = (0, h._round)(i), n = (0, h._round)(n), r = (0, h._round)(r), o = (0, h._round)(o)) : (i = _, o = v, n = r = 0), (S && !~(u + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (S = Y(y, "x", u, "px"), k = Y(y, "y", f, "px")), (w || b || x || T) && (S = (0, h._round)(S + w - (w * i + b * r) + x), k = (0, h._round)(k + b - (w * n + b * o) + T)), (l || c) && (s = y.getBBox(), S = (0, h._round)(S + l / 100 * s.width), k = (0, h._round)(k + c / 100 * s.height)), s = "matrix(" + i + "," + n + "," + r + "," + o + "," + S + "," + k + ")", y.setAttribute("transform", s), C && (y.style[A] = s)
            },
            ue = function (e, t, i, n, r, o) {
                var s, a, l = (0, h._isString)(r),
                    c = parseFloat(r) * (l && ~r.indexOf("rad") ? d : 1),
                    u = o ? c * o : c - n,
                    f = n + u + "deg";
                return l && ("short" === (s = r.split("_")[1]) && (u %= 360) !== u % 180 && (u += u < 0 ? 360 : -360), "cw" === s && u < 0 ? u = (u + 36e9) % 360 - 360 * ~~(u / 360) : "ccw" === s && u > 0 && (u = (u - 36e9) % 360 - 360 * ~~(u / 360))), e._pt = a = new h.PropTween(e._pt, t, i, n, u, b), a.e = f, a.u = "deg", e._props.push(i), a
            },
            he = function (e, t, i) {
                var n, o, s, a, c, u, d, p = l.style,
                    m = i._gsap;
                for (o in p.cssText = getComputedStyle(i).cssText + ";position:absolute;display:block;", p[A] = t, r.body.appendChild(l), n = re(l, 1), f) (s = m[o]) !== (a = n[o]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(o) < 0 && (c = (0, h.getUnit)(s) !== (d = (0, h.getUnit)(a)) ? Y(i, o, s, d) : parseFloat(s), u = parseFloat(a), e._pt = new h.PropTween(e._pt, m, o, c, u - c, w), e._pt.u = d || 0, e._props.push(o));
                r.body.removeChild(l)
            };
        i._getBBox = H, i.checkPrefix = I, i._createElement = L, (0, h._forEachName)("padding,margin,Width,Radius", function (e, t) {
            var i = "Top",
                n = "Right",
                r = "Bottom",
                o = "Left",
                s = (t < 3 ? [i, n, r, o] : [i + o, i + n, r + n, r + o]).map(function (i) {
                    return t < 2 ? e + i : "border" + i + e
                });
            K[t > 1 ? "border" + e : e] = function (e, t, i, n, r) {
                var o, a;
                if (arguments.length < 4) return o = s.map(function (t) {
                    return U(e, t, i)
                }), 5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a;
                o = (n + "").split(" "), a = {}, s.forEach(function (e, t) {
                    return a[e] = o[t] = o[t] || o[(t - 1) / 2 | 0]
                }), e.init(t, a, r)
            }
        });
        var fe, de, pe = {
            name: "css",
            register: F,
            targetTest: function (e) {
                return e.style && e.nodeType
            },
            init: function (e, t, i, n, r) {
                var o, a, l, c, u, d, p, m, g, _, b, C, S, k, P, O, E, M, $, D = this._props,
                    L = e.style;
                for (p in s || F(), t)
                    if ("autoRound" !== p && (a = t[p], !h._plugins[p] || !(0, h._checkPlugin)(p, t, i, n, e, r)))
                        if (u = typeof a, d = K[p], "function" === u && (u = typeof (a = a.call(i, n, e, r))), "string" === u && ~a.indexOf("random(") && (a = (0, h._replaceRandom)(a)), d) d(this, e, p, a, i) && (P = 1);
                        else if ("--" === p.substr(0, 2)) this.add(L, "setProperty", getComputedStyle(e).getPropertyValue(p) + "", a + "", n, r, 0, 0, p);
                        else {
                            if (o = U(e, p), c = parseFloat(o), (_ = "string" === u && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)), l = parseFloat(a), p in y && ("autoAlpha" === p && (1 === c && "hidden" === U(e, "visibility") && l && (c = 0), W(this, L, "visibility", c ? "inherit" : "hidden", l ? "inherit" : "hidden", !l)), "scale" !== p && "transform" !== p && ~(p = y[p]).indexOf(",") && (p = p.split(",")[0])), b = p in f)
                                if (C || ((S = e._gsap).renderTransform || re(e), k = !1 !== t.smoothOrigin && S.smooth, (C = this._pt = new h.PropTween(this._pt, L, A, 0, 1, S.renderTransform, S, 0, -1)).dep = 1), "scale" === p) this._pt = new h.PropTween(this._pt, S, "scaleY", S.scaleY, _ ? _ * l : l - S.scaleY), D.push("scaleY", p), p += "X";
                                else {
                                    if ("transformOrigin" === p) {
                                        E = void 0, M = void 0, $ = void 0, E = (O = a).split(" "), M = E[0], $ = E[1] || "50%", "top" !== M && "bottom" !== M && "left" !== $ && "right" !== $ || (O = M, M = $, $ = O), E[0] = G[M] || M, E[1] = G[$] || $, a = E.join(" "), S.svg ? ne(e, a, 0, k, 0, this) : ((g = parseFloat(a.split(" ")[2]) || 0) !== S.zOrigin && W(this, S, "zOrigin", S.zOrigin, g), W(this, L, p, oe(o), oe(a)));
                                        continue
                                    }
                                    if ("svgOrigin" === p) {
                                        ne(e, a, 1, k, 0, this);
                                        continue
                                    }
                                    if (p in J) {
                                        ue(this, S, p, c, a, _);
                                        continue
                                    }
                                    if ("smoothOrigin" === p) {
                                        W(this, S, "smooth", S.smooth, a);
                                        continue
                                    }
                                    if ("force3D" === p) {
                                        S[p] = a;
                                        continue
                                    }
                                    if ("transform" === p) {
                                        he(this, a, e);
                                        continue
                                    }
                                }
                            else p in L || (p = I(p) || p);
                            if (b || (l || 0 === l) && (c || 0 === c) && !v.test(a) && p in L) l || (l = 0), (m = (o + "").substr((c + "").length)) !== (g = (a + "").substr((l + "").length) || (p in h._config.units ? h._config.units[p] : m)) && (c = Y(e, p, o, g)), this._pt = new h.PropTween(this._pt, b ? S : L, p, c, _ ? _ * l : l - c, "px" !== g || !1 === t.autoRound || b ? w : T), this._pt.u = g || 0, m !== g && (this._pt.b = o, this._pt.r = x);
                            else if (p in L) V.call(this, e, p, o, a);
                            else {
                                if (!(p in e)) {
                                    (0, h._missingPlugin)(p, a);
                                    continue
                                }
                                this.add(e, p, e[p], a, n, r)
                            }
                            D.push(p)
                        }
                P && (0, h._sortPropTweensByPriority)(this)
            },
            get: U,
            aliases: y,
            getSetter: function (e, t, i) {
                var n = y[t];
                return n && n.indexOf(",") < 0 && (t = n), t in f && t !== D && (e._gsap.x || U(e, "x")) ? i && c === i ? "scale" === t ? E : O : (c = i || {}) && ("scale" === t ? M : $) : e.style && !(0, h._isUndefined)(e.style[t]) ? k : ~t.indexOf("-") ? P : (0, h._getSetter)(e, t)
            },
            core: {
                _removeProperty: q,
                _getMatrix: ie
            }
        };
        i.default = i.CSSPlugin = pe, h.gsap.utils.checkPrefix = I, fe = "rotation,rotationX,rotationY,skewX,skewY", de = (0, h._forEachName)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + fe + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (e) {
            f[e] = 1
        }), (0, h._forEachName)(fe, function (e) {
            h._config.units[e] = "deg", J[e] = 1
        }), y[de[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + fe, (0, h._forEachName)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (e) {
            var t = e.split(":");
            y[t[1]] = de[t[0]]
        }), (0, h._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (e) {
            h._config.units[e] = "px"
        }), h.gsap.registerPlugin(pe)
    }, {
        "./gsap-core.js": "TNS6"
    }],
    TpQl: [function (e, t, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), Object.defineProperty(i, "Power0", {
            enumerable: !0,
            get: function () {
                return n.Power0
            }
        }), Object.defineProperty(i, "Power1", {
            enumerable: !0,
            get: function () {
                return n.Power1
            }
        }), Object.defineProperty(i, "Power2", {
            enumerable: !0,
            get: function () {
                return n.Power2
            }
        }), Object.defineProperty(i, "Power3", {
            enumerable: !0,
            get: function () {
                return n.Power3
            }
        }), Object.defineProperty(i, "Power4", {
            enumerable: !0,
            get: function () {
                return n.Power4
            }
        }), Object.defineProperty(i, "Linear", {
            enumerable: !0,
            get: function () {
                return n.Linear
            }
        }), Object.defineProperty(i, "Quad", {
            enumerable: !0,
            get: function () {
                return n.Quad
            }
        }), Object.defineProperty(i, "Cubic", {
            enumerable: !0,
            get: function () {
                return n.Cubic
            }
        }), Object.defineProperty(i, "Quart", {
            enumerable: !0,
            get: function () {
                return n.Quart
            }
        }), Object.defineProperty(i, "Quint", {
            enumerable: !0,
            get: function () {
                return n.Quint
            }
        }), Object.defineProperty(i, "Strong", {
            enumerable: !0,
            get: function () {
                return n.Strong
            }
        }), Object.defineProperty(i, "Elastic", {
            enumerable: !0,
            get: function () {
                return n.Elastic
            }
        }), Object.defineProperty(i, "Back", {
            enumerable: !0,
            get: function () {
                return n.Back
            }
        }), Object.defineProperty(i, "SteppedEase", {
            enumerable: !0,
            get: function () {
                return n.SteppedEase
            }
        }), Object.defineProperty(i, "Bounce", {
            enumerable: !0,
            get: function () {
                return n.Bounce
            }
        }), Object.defineProperty(i, "Sine", {
            enumerable: !0,
            get: function () {
                return n.Sine
            }
        }), Object.defineProperty(i, "Expo", {
            enumerable: !0,
            get: function () {
                return n.Expo
            }
        }), Object.defineProperty(i, "Circ", {
            enumerable: !0,
            get: function () {
                return n.Circ
            }
        }), Object.defineProperty(i, "TweenLite", {
            enumerable: !0,
            get: function () {
                return n.TweenLite
            }
        }), Object.defineProperty(i, "TimelineLite", {
            enumerable: !0,
            get: function () {
                return n.TimelineLite
            }
        }), Object.defineProperty(i, "TimelineMax", {
            enumerable: !0,
            get: function () {
                return n.TimelineMax
            }
        }), Object.defineProperty(i, "CSSPlugin", {
            enumerable: !0,
            get: function () {
                return r.CSSPlugin
            }
        }), i.TweenMax = i.default = i.gsap = void 0;
        var n = e("./gsap-core.js"),
            r = e("./CSSPlugin.js"),
            o = n.gsap.registerPlugin(r.CSSPlugin) || n.gsap,
            s = o.core.Tween;
        i.TweenMax = s, i.default = i.gsap = o
    }, {
        "./gsap-core.js": "TNS6",
        "./CSSPlugin.js": "bp4Z"
    }],
    MgTz: [function (e, t, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.getMousePos = i.clamp = i.lerp = i.map = void 0;
        i.map = function (e, t, i, n, r) {
            return (e - t) * (r - n) / (i - t) + n
        };
        i.lerp = function (e, t, i) {
            return (1 - i) * e + i * t
        };
        i.clamp = function (e, t, i) {
            return e <= t ? t : e >= i ? i : e
        };
        i.getMousePos = function (e) {
            var t = 0,
                i = 0;
            return e || (e = window.event), e.pageX || e.pageY ? (t = e.pageX, i = e.pageY) : (e.clientX || e.clientY) && (t = e.clientX + body.scrollLeft + document.documentElement.scrollLeft, i = e.clientY + body.scrollTop + document.documentElement.scrollTop), {
                x: t,
                y: i
            }
        }
    }, {}],
    LMRJ: [function (e, t, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.default = void 0;
        var n = e("gsap"),
            r = e("./utils");

        function o(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var s = {
            x: 0,
            y: 0
        };
        window.addEventListener("mousemove", function (e) {
            return s = (0, r.getMousePos)(e)
        });
        var a = function () {
            function e(t) {
                var i = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.DOM = {
                    el: t
                }, this.DOM.el.style.opacity = 0, this.bounds = this.DOM.el.getBoundingClientRect(), this.renderedStyles = {
                    tx: {
                        previous: 0,
                        current: 0,
                        amt: .2
                    },
                    ty: {
                        previous: 0,
                        current: 0,
                        amt: .2
                    }
                }, this.onMouseMoveEv = function () {
                    i.renderedStyles.tx.previous = i.renderedStyles.tx.current = s.x - i.bounds.width / 2, i.renderedStyles.ty.previous = i.renderedStyles.ty.previous = s.y - i.bounds.height / 2, n.gsap.to(i.DOM.el, {
                        duration: .9,
                        ease: "Power3.easeOut",
                        opacity: 1
                    }), requestAnimationFrame(function () {
                        return i.render()
                    }), window.removeEventListener("mousemove", i.onMouseMoveEv)
                }, window.addEventListener("mousemove", this.onMouseMoveEv)
            }
            var t, i, a;
            return t = e, (i = [{
                key: "render",
                value: function () {
                    var e = this;
                    for (var t in this.renderedStyles.tx.current = s.x - this.bounds.width / 2, this.renderedStyles.ty.current = s.y - this.bounds.height / 2, this.renderedStyles) this.renderedStyles[t].previous = (0, r.lerp)(this.renderedStyles[t].previous, this.renderedStyles[t].current, this.renderedStyles[t].amt);
                    this.DOM.el.style.transform = "translateX(".concat(this.renderedStyles.tx.previous, "px) translateY(").concat(this.renderedStyles.ty.previous, "px)"), requestAnimationFrame(function () {
                        return e.render()
                    })
                }
            }]) && o(t.prototype, i), a && o(t, a), e
        }();
        i.default = a
    }, {
        gsap: "TpQl",
        "./utils": "MgTz"
    }],
    BQvw: [function (e, t, i) {
        arguments[3];
        ! function (e, i) {
            "object" == typeof t && t.exports ? t.exports = i() : e.EvEmitter = i()
        }("undefined" != typeof window ? window : this, function () {
            "use strict";

            function e() { }
            var t = e.prototype;
            return t.on = function (e, t) {
                if (e && t) {
                    var i = this._events = this._events || {},
                        n = i[e] = i[e] || [];
                    return -1 == n.indexOf(t) && n.push(t), this
                }
            }, t.once = function (e, t) {
                if (e && t) {
                    this.on(e, t);
                    var i = this._onceEvents = this._onceEvents || {};
                    return (i[e] = i[e] || {})[t] = !0, this
                }
            }, t.off = function (e, t) {
                var i = this._events && this._events[e];
                if (i && i.length) {
                    var n = i.indexOf(t);
                    return -1 != n && i.splice(n, 1), this
                }
            }, t.emitEvent = function (e, t) {
                var i = this._events && this._events[e];
                if (i && i.length) {
                    i = i.slice(0), t = t || [];
                    for (var n = this._onceEvents && this._onceEvents[e], r = 0; r < i.length; r++) {
                        var o = i[r];
                        n && n[o] && (this.off(e, o), delete n[o]), o.apply(this, t)
                    }
                    return this
                }
            }, t.allOff = function () {
                delete this._events, delete this._onceEvents
            }, e
        })
    }, {}],
    lc7f: [function (e, t, i) {
        ! function (i, n) {
            "use strict";
            "object" == typeof t && t.exports ? t.exports = n(i, e("ev-emitter")) : i.imagesLoaded = n(i, i.EvEmitter)
        }("undefined" != typeof window ? window : this, function (e, t) {
            "use strict";
            var i = e.jQuery,
                n = e.console;

            function r(e, t) {
                for (var i in t) e[i] = t[i];
                return e
            }
            var o = Array.prototype.slice;

            function s(e, t, a) {
                if (!(this instanceof s)) return new s(e, t, a);
                var l, c = e;
                ("string" == typeof e && (c = document.querySelectorAll(e)), c) ? (this.elements = (l = c, Array.isArray(l) ? l : "object" == typeof l && "number" == typeof l.length ? o.call(l) : [l]), this.options = r({}, this.options), "function" == typeof t ? a = t : r(this.options, t), a && this.on("always", a), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : n.error("Bad element for imagesLoaded " + (c || e))
            }
            s.prototype = Object.create(t.prototype), s.prototype.options = {}, s.prototype.getImages = function () {
                this.images = [], this.elements.forEach(this.addElementImages, this)
            }, s.prototype.addElementImages = function (e) {
                "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
                var t = e.nodeType;
                if (t && a[t]) {
                    for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                        var r = i[n];
                        this.addImage(r)
                    }
                    if ("string" == typeof this.options.background) {
                        var o = e.querySelectorAll(this.options.background);
                        for (n = 0; n < o.length; n++) {
                            var s = o[n];
                            this.addElementBackgroundImages(s)
                        }
                    }
                }
            };
            var a = {
                1: !0,
                9: !0,
                11: !0
            };

            function l(e) {
                this.img = e
            }

            function c(e, t) {
                this.url = e, this.element = t, this.img = new Image
            }
            return s.prototype.addElementBackgroundImages = function (e) {
                var t = getComputedStyle(e);
                if (t)
                    for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                        var r = n && n[2];
                        r && this.addBackground(r, e), n = i.exec(t.backgroundImage)
                    }
            }, s.prototype.addImage = function (e) {
                var t = new l(e);
                this.images.push(t)
            }, s.prototype.addBackground = function (e, t) {
                var i = new c(e, t);
                this.images.push(i)
            }, s.prototype.check = function () {
                var e = this;

                function t(t, i, n) {
                    setTimeout(function () {
                        e.progress(t, i, n)
                    })
                }
                this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function (e) {
                    e.once("progress", t), e.check()
                }) : this.complete()
            }, s.prototype.progress = function (e, t, i) {
                this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && n && n.log("progress: " + i, e, t)
            }, s.prototype.complete = function () {
                var e = this.hasAnyBroken ? "fail" : "done";
                if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                    var t = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[t](this)
                }
            }, l.prototype = Object.create(t.prototype), l.prototype.check = function () {
                this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
            }, l.prototype.getIsImageComplete = function () {
                return this.img.complete && this.img.naturalWidth
            }, l.prototype.confirm = function (e, t) {
                this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
            }, l.prototype.handleEvent = function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }, l.prototype.onload = function () {
                this.confirm(!0, "onload"), this.unbindEvents()
            }, l.prototype.onerror = function () {
                this.confirm(!1, "onerror"), this.unbindEvents()
            }, l.prototype.unbindEvents = function () {
                this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
            }, c.prototype = Object.create(l.prototype), c.prototype.check = function () {
                this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
            }, c.prototype.unbindEvents = function () {
                this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
            }, c.prototype.confirm = function (e, t) {
                this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
            }, s.makeJQueryPlugin = function (t) {
                (t = t || e.jQuery) && ((i = t).fn.imagesLoaded = function (e, t) {
                    return new s(this, e, t).jqDeferred.promise(i(this))
                })
            }, s.makeJQueryPlugin(), s
        })
    }, {
        "ev-emitter": "BQvw"
    }],
    BeZ8: [function (e, t, i) {
        "use strict";

        function n(e) {
            return function (e) {
                if (Array.isArray(e)) return r(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return r(e, t);
                var i = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === i && e.constructor && (i = e.constructor.name);
                if ("Map" === i || "Set" === i) return Array.from(e);
                if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return r(e, t)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
            return n
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.preloader = void 0;
        var o = e("imagesloaded"),
            s = document.body;
        i.preloader = function (e) {
            return new Promise(function (t) {
                var i = document.createElement("div");
                i.style.visibility = "hidden", s.appendChild(i), n(document.querySelectorAll(e)).forEach(function (e) {
                    var t = document.createElement("img");
                    t.style.width = 0, t.src = e.dataset.img, t.className = "preload", i.appendChild(t)
                }), o(document.querySelectorAll(".preload"), function () {
                    i.parentNode.removeChild(i), s.classList.remove("loading"), t()
                })
            })
        }
    }, {
        imagesloaded: "lc7f"
    }],
    ez7q: [function (e, t, i) {
        var n = arguments[3];

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function s(e, t, i) {
            return t && o(e.prototype, t), i && o(e, i), e
        }

        function a(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }

        function l(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), i.push.apply(i, n)
            }
            return i
        }

        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(Object(i), !0).forEach(function (t) {
                    a(e, t, i[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : l(Object(i)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                })
            }
            return e
        }

        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
        }

        function h(e) {
            return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function f(e, t) {
            return (f = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function d(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function p(e, t) {
            return !t || "object" != typeof t && "function" != typeof t ? d(e) : t
        }

        function m(e, t, i) {
            return (m = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, i) {
                var n = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = h(e)););
                    return e
                }(e, t);
                if (n) {
                    var r = Object.getOwnPropertyDescriptor(n, t);
                    return r.get ? r.get.call(i) : r.value
                }
            })(e, t, i || e)
        }

        function g(e) {
            return function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, i = new Array(e.length); t < e.length; t++) i[t] = e[t];
                    return i
                }
            }(e) || function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.default = void 0;
        var _ = {
            el: document,
            elMobile: document,
            name: "scroll",
            offset: [0, 0],
            repeat: !1,
            smooth: !1,
            smoothMobile: !1,
            direction: "vertical",
            lerp: .1,
            class: "is-inview",
            scrollbarClass: "c-scrollbar",
            scrollingClass: "has-scroll-scrolling",
            draggingClass: "has-scroll-dragging",
            smoothClass: "has-scroll-smooth",
            initClass: "has-scroll-init",
            getSpeed: !1,
            getDirection: !1,
            multiplier: 1,
            firefoxMultiplier: 50,
            touchMultiplier: 2,
            scrollFromAnywhere: !1
        },
            v = function () {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    r(this, e), Object.assign(this, _, t), this.namespace = "locomotive", this.html = document.documentElement, this.windowHeight = window.innerHeight, this.windowMiddle = this.windowHeight / 2, this.els = [], this.listeners = {}, this.hasScrollTicking = !1, this.hasCallEventSet = !1, this.checkScroll = this.checkScroll.bind(this), this.checkResize = this.checkResize.bind(this), this.checkEvent = this.checkEvent.bind(this), this.instance = {
                        scroll: {
                            x: 0,
                            y: 0
                        },
                        limit: this.html.offsetHeight
                    }, this.getDirection && (this.instance.direction = null), this.getDirection && (this.instance.speed = 0), this.html.classList.add(this.initClass), window.addEventListener("resize", this.checkResize, !1)
                }
                return s(e, [{
                    key: "init",
                    value: function () {
                        this.initEvents()
                    }
                }, {
                    key: "checkScroll",
                    value: function () {
                        this.dispatchScroll()
                    }
                }, {
                    key: "checkResize",
                    value: function () {
                        var e = this;
                        this.resizeTick || (this.resizeTick = !0, requestAnimationFrame(function () {
                            e.resize(), e.resizeTick = !1
                        }))
                    }
                }, {
                    key: "resize",
                    value: function () { }
                }, {
                    key: "initEvents",
                    value: function () {
                        var e = this;
                        this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")), this.setScrollTo = this.setScrollTo.bind(this), this.scrollToEls.forEach(function (t) {
                            t.addEventListener("click", e.setScrollTo, !1)
                        })
                    }
                }, {
                    key: "setScrollTo",
                    value: function (e) {
                        e.preventDefault(), this.scrollTo(e.currentTarget.getAttribute("data-".concat(this.name, "-href")) || e.currentTarget.getAttribute("href"), e.currentTarget.getAttribute("data-".concat(this.name, "-offset")))
                    }
                }, {
                    key: "addElements",
                    value: function () { }
                }, {
                    key: "detectElements",
                    value: function (e) {
                        var t = this,
                            i = this.instance.scroll.y,
                            n = i + this.windowHeight;
                        this.els.forEach(function (r, o) {
                            !r || r.inView && !e || n >= r.top && i < r.bottom && t.setInView(r, o), r && r.inView && (n < r.top || i > r.bottom) && t.setOutOfView(r, o)
                        }), this.els = this.els.filter(function (e, t) {
                            return null !== e
                        }), this.hasScrollTicking = !1
                    }
                }, {
                    key: "setInView",
                    value: function (e, t) {
                        this.els[t].inView = !0, e.el.classList.add(e.class), e.call && this.hasCallEventSet && (this.dispatchCall(e, "enter"), e.repeat || (this.els[t].call = !1)), e.repeat || e.speed || e.sticky || (!e.call || e.call && this.hasCallEventSet) && (this.els[t] = null)
                    }
                }, {
                    key: "setOutOfView",
                    value: function (e, t) {
                        (e.repeat || void 0 !== e.speed) && (this.els[t].inView = !1), e.call && this.hasCallEventSet && this.dispatchCall(e, "exit"), e.repeat && e.el.classList.remove(e.class)
                    }
                }, {
                    key: "dispatchCall",
                    value: function (e, t) {
                        this.callWay = t, this.callValue = e.call.split(",").map(function (e) {
                            return e.trim()
                        }), this.callObj = e, 1 == this.callValue.length && (this.callValue = this.callValue[0]);
                        var i = new Event(this.namespace + "call");
                        this.el.dispatchEvent(i)
                    }
                }, {
                    key: "dispatchScroll",
                    value: function () {
                        var e = new Event(this.namespace + "scroll");
                        this.el.dispatchEvent(e)
                    }
                }, {
                    key: "setEvents",
                    value: function (e, t) {
                        this.listeners[e] || (this.listeners[e] = []);
                        var i = this.listeners[e];
                        i.push(t), 1 === i.length && this.el.addEventListener(this.namespace + e, this.checkEvent, !1), "call" === e && (this.hasCallEventSet = !0, this.detectElements(!0))
                    }
                }, {
                    key: "unsetEvents",
                    value: function (e, t) {
                        if (this.listeners[e]) {
                            var i = this.listeners[e],
                                n = i.indexOf(t);
                            n < 0 || (i.splice(n, 1), 0 === i.index && this.el.removeEventListener(this.namespace + e, this.checkEvent, !1))
                        }
                    }
                }, {
                    key: "checkEvent",
                    value: function (e) {
                        var t = this,
                            i = e.type.replace(this.namespace, ""),
                            n = this.listeners[i];
                        n && 0 !== n.length && n.forEach(function (e) {
                            switch (i) {
                                case "scroll":
                                    return e(t.instance);
                                case "call":
                                    return e(t.callValue, t.callWay, t.callObj);
                                default:
                                    return e()
                            }
                        })
                    }
                }, {
                    key: "startScroll",
                    value: function () { }
                }, {
                    key: "stopScroll",
                    value: function () { }
                }, {
                    key: "setScroll",
                    value: function (e, t) {
                        this.instance.scroll = {
                            x: 0,
                            y: 0
                        }
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        var e = this;
                        window.removeEventListener("resize", this.checkResize, !1), Object.keys(this.listeners).forEach(function (t) {
                            e.el.removeEventListener(e.namespace + t, e.checkEvent, !1)
                        }), this.listeners = {}, this.scrollToEls.forEach(function (t) {
                            t.removeEventListener("click", e.setScrollTo, !1)
                        })
                    }
                }]), e
            }(),
            y = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== n ? n : "undefined" != typeof self ? self : {};

        function w(e, t) {
            return e(t = {
                exports: {}
            }, t.exports), t.exports
        }
        var b = w(function (e, t) {
            ! function () {
                e.exports = {
                    polyfill: function () {
                        var e = window,
                            t = document;
                        if (!("scrollBehavior" in t.documentElement.style && !0 !== e.__forceSmoothScrollPolyfill__)) {
                            var i, n = e.HTMLElement || e.Element,
                                r = 468,
                                o = {
                                    scroll: e.scroll || e.scrollTo,
                                    scrollBy: e.scrollBy,
                                    elementScroll: n.prototype.scroll || l,
                                    scrollIntoView: n.prototype.scrollIntoView
                                },
                                s = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now,
                                a = (i = e.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i) ? 1 : 0);
                            e.scroll = e.scrollTo = function () {
                                void 0 !== arguments[0] && (!0 !== c(arguments[0]) ? p.call(e, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : e.scrollY || e.pageYOffset) : o.scroll.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : e.scrollY || e.pageYOffset))
                            }, e.scrollBy = function () {
                                void 0 !== arguments[0] && (c(arguments[0]) ? o.scrollBy.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(e, t.body, ~~arguments[0].left + (e.scrollX || e.pageXOffset), ~~arguments[0].top + (e.scrollY || e.pageYOffset)))
                            }, n.prototype.scroll = n.prototype.scrollTo = function () {
                                if (void 0 !== arguments[0])
                                    if (!0 !== c(arguments[0])) {
                                        var e = arguments[0].left,
                                            t = arguments[0].top;
                                        p.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
                                    } else {
                                        if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                        o.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                    }
                            }, n.prototype.scrollBy = function () {
                                void 0 !== arguments[0] && (!0 !== c(arguments[0]) ? this.scroll({
                                    left: ~~arguments[0].left + this.scrollLeft,
                                    top: ~~arguments[0].top + this.scrollTop,
                                    behavior: arguments[0].behavior
                                }) : o.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                            }, n.prototype.scrollIntoView = function () {
                                if (!0 !== c(arguments[0])) {
                                    var i = function (e) {
                                        for (; e !== t.body && !1 === f(e);) e = e.parentNode || e.host;
                                        return e
                                    }(this),
                                        n = i.getBoundingClientRect(),
                                        r = this.getBoundingClientRect();
                                    i !== t.body ? (p.call(this, i, i.scrollLeft + r.left - n.left, i.scrollTop + r.top - n.top), "fixed" !== e.getComputedStyle(i).position && e.scrollBy({
                                        left: n.left,
                                        top: n.top,
                                        behavior: "smooth"
                                    })) : e.scrollBy({
                                        left: r.left,
                                        top: r.top,
                                        behavior: "smooth"
                                    })
                                } else o.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                            }
                        }

                        function l(e, t) {
                            this.scrollLeft = e, this.scrollTop = t
                        }

                        function c(e) {
                            if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return !0;
                            if ("object" == typeof e && "smooth" === e.behavior) return !1;
                            throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
                        }

                        function u(e, t) {
                            return "Y" === t ? e.clientHeight + a < e.scrollHeight : "X" === t ? e.clientWidth + a < e.scrollWidth : void 0
                        }

                        function h(t, i) {
                            var n = e.getComputedStyle(t, null)["overflow" + i];
                            return "auto" === n || "scroll" === n
                        }

                        function f(e) {
                            var t = u(e, "Y") && h(e, "Y"),
                                i = u(e, "X") && h(e, "X");
                            return t || i
                        }

                        function d(t) {
                            var i, n, o, a, l = (s() - t.startTime) / r;
                            a = l = l > 1 ? 1 : l, i = .5 * (1 - Math.cos(Math.PI * a)), n = t.startX + (t.x - t.startX) * i, o = t.startY + (t.y - t.startY) * i, t.method.call(t.scrollable, n, o), n === t.x && o === t.y || e.requestAnimationFrame(d.bind(e, t))
                        }

                        function p(i, n, r) {
                            var a, c, u, h, f = s();
                            i === t.body ? (a = e, c = e.scrollX || e.pageXOffset, u = e.scrollY || e.pageYOffset, h = o.scroll) : (a = i, c = i.scrollLeft, u = i.scrollTop, h = l), d({
                                scrollable: a,
                                method: h,
                                startTime: f,
                                startX: c,
                                startY: u,
                                x: n,
                                y: r
                            })
                        }
                    }
                }
            }()
        }),
            x = (b.polyfill, function (e) {
                function t() {
                    var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return r(this, t), e = p(this, h(t).call(this, i)), window.addEventListener("scroll", e.checkScroll, !1), b.polyfill(), e
                }
                return u(t, e), s(t, [{
                    key: "init",
                    value: function () {
                        this.instance.scroll.y = window.pageYOffset, this.addElements(), this.detectElements(), m(h(t.prototype), "init", this).call(this)
                    }
                }, {
                    key: "checkScroll",
                    value: function () {
                        var e = this;
                        m(h(t.prototype), "checkScroll", this).call(this), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.timestamp = Date.now()), this.instance.scroll.y = window.pageYOffset, this.els.length && (this.hasScrollTicking || (requestAnimationFrame(function () {
                            e.detectElements()
                        }), this.hasScrollTicking = !0))
                    }
                }, {
                    key: "addDirection",
                    value: function () {
                        window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
                    }
                }, {
                    key: "addSpeed",
                    value: function () {
                        window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / (Date.now() - this.timestamp) : this.instance.speed = 0
                    }
                }, {
                    key: "resize",
                    value: function () {
                        this.els.length && (this.windowHeight = window.innerHeight, this.updateElements())
                    }
                }, {
                    key: "addElements",
                    value: function () {
                        var e = this;
                        this.els = [], this.el.querySelectorAll("[data-" + this.name + "]").forEach(function (t, i) {
                            var n = t.dataset[e.name + "Class"] || e.class,
                                r = t.getBoundingClientRect().top + e.instance.scroll.y,
                                o = r + t.offsetHeight,
                                s = "string" == typeof t.dataset[e.name + "Offset"] ? t.dataset[e.name + "Offset"].split(",") : e.offset,
                                a = t.dataset[e.name + "Repeat"],
                                l = t.dataset[e.name + "Call"];
                            a = "false" != a && (null != a || e.repeat);
                            var c = e.getRelativeOffset(s),
                                u = {
                                    el: t,
                                    id: i,
                                    class: n,
                                    top: r + c[0],
                                    bottom: o - c[1],
                                    offset: s,
                                    repeat: a,
                                    inView: !!t.classList.contains(n),
                                    call: l
                                };
                            e.els.push(u)
                        })
                    }
                }, {
                    key: "updateElements",
                    value: function () {
                        var e = this;
                        this.els.forEach(function (t, i) {
                            var n = t.el.getBoundingClientRect().top + e.instance.scroll.y,
                                r = n + t.el.offsetHeight,
                                o = e.getRelativeOffset(t.offset);
                            e.els[i].top = n + o[0], e.els[i].bottom = r - o[1]
                        }), this.hasScrollTicking = !1
                    }
                }, {
                    key: "getRelativeOffset",
                    value: function (e) {
                        var t = [0, 0];
                        if (e)
                            for (var i = 0; i < e.length; i++) "string" == typeof e[i] ? e[i].includes("%") ? t[i] = parseInt(e[i].replace("%", "") * this.windowHeight / 100) : t[i] = parseInt(e[i]) : t[i] = e[i];
                        return t
                    }
                }, {
                    key: "scrollTo",
                    value: function (e, t, i, n, r, o) {
                        var s, a = t ? parseInt(t) : 0;
                        if ("string" == typeof e) {
                            if ("top" === e) s = this.html;
                            else if ("bottom" === e) s = this.html.offsetHeight - window.innerHeight;
                            else if (!(s = document.querySelector(e))) return
                        } else if ("number" == typeof e) s = parseInt(e);
                        else {
                            if (!e || !e.tagName) return void console.warn("`targetOption` parameter is not valid");
                            s = e
                        }
                        if (a = "number" != typeof s ? s.getBoundingClientRect().top + a + this.instance.scroll.y : s + a, o) {
                            a = a.toFixed();
                            window.addEventListener("scroll", function e() {
                                window.pageYOffset.toFixed() === a && (window.removeEventListener("scroll", e), o())
                            })
                        }
                        window.scrollTo({
                            top: a,
                            behavior: "smooth"
                        })
                    }
                }, {
                    key: "update",
                    value: function () {
                        this.addElements(), this.detectElements()
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        m(h(t.prototype), "destroy", this).call(this), window.removeEventListener("scroll", this.checkScroll, !1)
                    }
                }]), t
            }(v)),
            T = Object.getOwnPropertySymbols,
            C = Object.prototype.hasOwnProperty,
            S = Object.prototype.propertyIsEnumerable;
        var k = function () {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, i = 0; i < 10; i++) t["_" + String.fromCharCode(i)] = i;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
                    return t[e]
                }).join("")) return !1;
                var n = {};
                return "abcdefghijklmnopqrst".split("").forEach(function (e) {
                    n[e] = e
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
            } catch (e) {
                return !1
            }
        }() ? Object.assign : function (e, t) {
            for (var i, n, r = function (e) {
                if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }(e), o = 1; o < arguments.length; o++) {
                for (var s in i = Object(arguments[o])) C.call(i, s) && (r[s] = i[s]);
                if (T) {
                    n = T(i);
                    for (var a = 0; a < n.length; a++) S.call(i, n[a]) && (r[n[a]] = i[n[a]])
                }
            }
            return r
        };

        function P() { }
        P.prototype = {
            on: function (e, t, i) {
                var n = this.e || (this.e = {});
                return (n[e] || (n[e] = [])).push({
                    fn: t,
                    ctx: i
                }), this
            },
            once: function (e, t, i) {
                var n = this;

                function r() {
                    n.off(e, r), t.apply(i, arguments)
                }
                return r._ = t, this.on(e, r, i)
            },
            emit: function (e) {
                for (var t = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[e] || []).slice(), n = 0, r = i.length; n < r; n++) i[n].fn.apply(i[n].ctx, t);
                return this
            },
            off: function (e, t) {
                var i = this.e || (this.e = {}),
                    n = i[e],
                    r = [];
                if (n && t)
                    for (var o = 0, s = n.length; o < s; o++) n[o].fn !== t && n[o].fn._ !== t && r.push(n[o]);
                return r.length ? i[e] = r : delete i[e], this
            }
        };
        var O = P,
            E = w(function (e, t) {
                (function () {
                    (null !== t ? t : this).Lethargy = function () {
                        function e(e, t, i, n) {
                            this.stability = null != e ? Math.abs(e) : 8, this.sensitivity = null != t ? 1 + Math.abs(t) : 100, this.tolerance = null != i ? 1 + Math.abs(i) : 1.1, this.delay = null != n ? n : 150, this.lastUpDeltas = function () {
                                var e, t, i;
                                for (i = [], e = 1, t = 2 * this.stability; 1 <= t ? e <= t : e >= t; 1 <= t ? e++ : e--) i.push(null);
                                return i
                            }.call(this), this.lastDownDeltas = function () {
                                var e, t, i;
                                for (i = [], e = 1, t = 2 * this.stability; 1 <= t ? e <= t : e >= t; 1 <= t ? e++ : e--) i.push(null);
                                return i
                            }.call(this), this.deltasTimestamp = function () {
                                var e, t, i;
                                for (i = [], e = 1, t = 2 * this.stability; 1 <= t ? e <= t : e >= t; 1 <= t ? e++ : e--) i.push(null);
                                return i
                            }.call(this)
                        }
                        return e.prototype.check = function (e) {
                            var t;
                            return null != (e = e.originalEvent || e).wheelDelta ? t = e.wheelDelta : null != e.deltaY ? t = -40 * e.deltaY : null == e.detail && 0 !== e.detail || (t = -40 * e.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), t > 0 ? (this.lastUpDeltas.push(t), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(t), this.lastDownDeltas.shift(), this.isInertia(-1))
                        }, e.prototype.isInertia = function (e) {
                            var t, i, n, r, o, s, a;
                            return null === (t = -1 === e ? this.lastDownDeltas : this.lastUpDeltas)[0] ? e : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && t[0] === t[2 * this.stability - 1]) && (n = t.slice(0, this.stability), i = t.slice(this.stability, 2 * this.stability), a = n.reduce(function (e, t) {
                                return e + t
                            }), o = i.reduce(function (e, t) {
                                return e + t
                            }), s = a / n.length, r = o / i.length, Math.abs(s) < Math.abs(r * this.tolerance) && this.sensitivity < Math.abs(r) && e)
                        }, e.prototype.showLastUpDeltas = function () {
                            return this.lastUpDeltas
                        }, e.prototype.showLastDownDeltas = function () {
                            return this.lastDownDeltas
                        }, e
                    }()
                }).call(y)
            }),
            M = {
                hasWheelEvent: "onwheel" in document,
                hasMouseWheelEvent: "onmousewheel" in document,
                hasTouch: "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
                hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                hasPointer: !!window.navigator.msPointerEnabled,
                hasKeyDown: "onkeydown" in document,
                isFirefox: navigator.userAgent.indexOf("Firefox") > -1
            },
            $ = Object.prototype.toString,
            A = Object.prototype.hasOwnProperty,
            D = function (e) {
                if (!e) return console.warn("bindAll requires at least one argument.");
                var t = Array.prototype.slice.call(arguments, 1);
                if (0 === t.length)
                    for (var i in e) A.call(e, i) && "function" == typeof e[i] && "[object Function]" == $.call(e[i]) && t.push(i);
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    e[r] = L(e[r], e)
                }
            };

        function L(e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        }
        var R = E.Lethargy,
            j = "virtualscroll",
            I = q,
            F = 37,
            N = 38,
            z = 39,
            H = 40,
            B = 32;

        function q(e) {
            D(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, e && e.el && (this.el = e.el, delete e.el), this.options = k({
                mouseMultiplier: 1,
                touchMultiplier: 2,
                firefoxMultiplier: 15,
                keyStep: 120,
                preventTouch: !1,
                unpreventTouchClass: "vs-touchmove-allowed",
                limitInertia: !1,
                useKeyboard: !0,
                useTouch: !0
            }, e), this.options.limitInertia && (this._lethargy = new R), this._emitter = new O, this._event = {
                y: 0,
                x: 0,
                deltaX: 0,
                deltaY: 0
            }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = {
                passive: this.options.passive
            })
        }

        function W(e, t, i) {
            return (1 - i) * e + i * t
        }

        function X(e) {
            var t = {};
            if (window.getComputedStyle) {
                var i = getComputedStyle(e),
                    n = i.transform || i.webkitTransform || i.mozTransform,
                    r = n.match(/^matrix3d\((.+)\)$/);
                return r ? (t.x = r ? parseFloat(r[1].split(", ")[12]) : 0, t.y = r ? parseFloat(r[1].split(", ")[13]) : 0) : (r = n.match(/^matrix\((.+)\)$/), t.x = r ? parseFloat(r[1].split(", ")[4]) : 0, t.y = r ? parseFloat(r[1].split(", ")[5]) : 0), t
            }
        }

        function Y(e) {
            for (var t = []; e && e !== document; e = e.parentNode) t.push(e);
            return t
        }
        q.prototype._notify = function (e) {
            var t = this._event;
            t.x += t.deltaX, t.y += t.deltaY, this._emitter.emit(j, {
                x: t.x,
                y: t.y,
                deltaX: t.deltaX,
                deltaY: t.deltaY,
                originalEvent: e
            })
        }, q.prototype._onWheel = function (e) {
            var t = this.options;
            if (!this._lethargy || !1 !== this._lethargy.check(e)) {
                var i = this._event;
                i.deltaX = e.wheelDeltaX || -1 * e.deltaX, i.deltaY = e.wheelDeltaY || -1 * e.deltaY, M.isFirefox && 1 == e.deltaMode && (i.deltaX *= t.firefoxMultiplier, i.deltaY *= t.firefoxMultiplier), i.deltaX *= t.mouseMultiplier, i.deltaY *= t.mouseMultiplier, this._notify(e)
            }
        }, q.prototype._onMouseWheel = function (e) {
            if (!this.options.limitInertia || !1 !== this._lethargy.check(e)) {
                var t = this._event;
                t.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0, t.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta, this._notify(e)
            }
        }, q.prototype._onTouchStart = function (e) {
            var t = e.targetTouches ? e.targetTouches[0] : e;
            this.touchStartX = t.pageX, this.touchStartY = t.pageY
        }, q.prototype._onTouchMove = function (e) {
            var t = this.options;
            t.preventTouch && !e.target.classList.contains(t.unpreventTouchClass) && e.preventDefault();
            var i = this._event,
                n = e.targetTouches ? e.targetTouches[0] : e;
            i.deltaX = (n.pageX - this.touchStartX) * t.touchMultiplier, i.deltaY = (n.pageY - this.touchStartY) * t.touchMultiplier, this.touchStartX = n.pageX, this.touchStartY = n.pageY, this._notify(e)
        }, q.prototype._onKeyDown = function (e) {
            var t = this._event;
            t.deltaX = t.deltaY = 0;
            var i = window.innerHeight - 40;
            switch (e.keyCode) {
                case F:
                case N:
                    t.deltaY = this.options.keyStep;
                    break;
                case z:
                case H:
                    t.deltaY = -this.options.keyStep;
                    break;
                case e.shiftKey:
                    t.deltaY = i;
                    break;
                case B:
                    t.deltaY = -i;
                    break;
                default:
                    return
            }
            this._notify(e)
        }, q.prototype._bind = function () {
            M.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), M.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), M.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), M.hasPointer && M.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), M.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
        }, q.prototype._unbind = function () {
            M.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel), M.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel), M.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), M.hasPointer && M.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), M.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
        }, q.prototype.on = function (e, t) {
            this._emitter.on(j, e, t);
            var i = this._emitter.e;
            i && i[j] && 1 === i[j].length && this._bind()
        }, q.prototype.off = function (e, t) {
            this._emitter.off(j, e, t);
            var i = this._emitter.e;
            (!i[j] || i[j].length <= 0) && this._unbind()
        }, q.prototype.reset = function () {
            var e = this._event;
            e.x = 0, e.y = 0
        }, q.prototype.destroy = function () {
            this._emitter.off(), this._unbind()
        };
        var U = 4,
            V = .001,
            G = 1e-7,
            Q = 10,
            K = 11,
            Z = 1 / (K - 1),
            J = "function" == typeof Float32Array;

        function ee(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function te(e, t) {
            return 3 * t - 6 * e
        }

        function ie(e) {
            return 3 * e
        }

        function ne(e, t, i) {
            return ((ee(t, i) * e + te(t, i)) * e + ie(t)) * e
        }

        function re(e, t, i) {
            return 3 * ee(t, i) * e * e + 2 * te(t, i) * e + ie(t)
        }

        function oe(e) {
            return e
        }
        var se = function (e, t, i, n) {
            if (!(0 <= e && e <= 1 && 0 <= i && i <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            if (e === t && i === n) return oe;
            for (var r = J ? new Float32Array(K) : new Array(K), o = 0; o < K; ++o) r[o] = ne(o * Z, e, i);

            function s(t) {
                for (var n = 0, o = 1, s = K - 1; o !== s && r[o] <= t; ++o) n += Z;
                var a = n + (t - r[--o]) / (r[o + 1] - r[o]) * Z,
                    l = re(a, e, i);
                return l >= V ? function (e, t, i, n) {
                    for (var r = 0; r < U; ++r) {
                        var o = re(t, i, n);
                        if (0 === o) return t;
                        t -= (ne(t, i, n) - e) / o
                    }
                    return t
                }(t, a, e, i) : 0 === l ? a : function (e, t, i, n, r) {
                    var o, s, a = 0;
                    do {
                        (o = ne(s = t + (i - t) / 2, n, r) - e) > 0 ? i = s : t = s
                    } while (Math.abs(o) > G && ++a < Q);
                    return s
                }(t, n, n + Z, e, i)
            }
            return function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : ne(s(e), t, n)
            }
        },
            ae = 38,
            le = 40,
            ce = 32,
            ue = 9,
            he = 33,
            fe = 34,
            de = 36,
            pe = 35,
            me = function (e) {
                function t() {
                    var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return r(this, t), window.scrollTo(0, 0), history.scrollRestoration = "manual", (e = p(this, h(t).call(this, i))).inertia && (e.lerp = .1 * e.inertia), e.isScrolling = !1, e.isDraggingScrollbar = !1, e.isTicking = !1, e.hasScrollTicking = !1, e.parallaxElements = [], e.stop = !1, e.checkKey = e.checkKey.bind(d(e)), window.addEventListener("keydown", e.checkKey, !1), e
                }
                return u(t, e), s(t, [{
                    key: "init",
                    value: function () {
                        var e = this;
                        this.html.classList.add(this.smoothClass), this.instance = c({
                            delta: {
                                x: 0,
                                y: 0
                            }
                        }, this.instance), this.vs = new I({
                            el: this.scrollFromAnywhere ? document : this.el,
                            mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : .4,
                            firefoxMultiplier: this.firefoxMultiplier,
                            touchMultiplier: this.touchMultiplier,
                            useKeyboard: !1,
                            passive: !0
                        }), this.vs.on(function (t) {
                            e.stop || (e.isTicking || e.isDraggingScrollbar || (requestAnimationFrame(function () {
                                e.updateDelta(t), e.isScrolling || e.startScrolling()
                            }), e.isTicking = !0), e.isTicking = !1)
                        }), this.setScrollLimit(), this.initScrollBar(), this.addSections(), this.addElements(), this.detectElements(), this.transformElements(!0, !0), this.checkScroll(!0), m(h(t.prototype), "init", this).call(this)
                    }
                }, {
                    key: "setScrollLimit",
                    value: function () {
                        this.instance.limit = this.el.offsetHeight - this.windowHeight
                    }
                }, {
                    key: "startScrolling",
                    value: function () {
                        this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
                    }
                }, {
                    key: "stopScrolling",
                    value: function () {
                        this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf), this.scrollToRaf = null), this.isScrolling = !1, this.instance.scroll.y = Math.round(this.instance.scroll.y), this.html.classList.remove(this.scrollingClass)
                    }
                }, {
                    key: "checkKey",
                    value: function (e) {
                        var t = this;
                        if (this.stop) e.keyCode == ue && requestAnimationFrame(function () {
                            t.html.scrollTop = 0, document.body.scrollTop = 0
                        });
                        else {
                            switch (e.keyCode) {
                                case ue:
                                    requestAnimationFrame(function () {
                                        t.html.scrollTop = 0, document.body.scrollTop = 0, t.scrollTo(document.activeElement, -window.innerHeight / 2)
                                    });
                                    break;
                                case ae:
                                    this.instance.delta.y -= 240;
                                    break;
                                case le:
                                    this.instance.delta.y += 240;
                                    break;
                                case he:
                                    this.instance.delta.y -= window.innerHeight;
                                    break;
                                case fe:
                                    this.instance.delta.y += window.innerHeight;
                                    break;
                                case de:
                                    this.instance.delta.y -= this.instance.limit;
                                    break;
                                case pe:
                                    this.instance.delta.y += this.instance.limit;
                                    break;
                                case ce:
                                    document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || (e.shiftKey ? this.instance.delta.y -= window.innerHeight : this.instance.delta.y += window.innerHeight);
                                    break;
                                default:
                                    return
                            }
                            this.instance.delta.y < 0 && (this.instance.delta.y = 0), this.instance.delta.y > this.instance.limit && (this.instance.delta.y = this.instance.limit), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
                        }
                    }
                }, {
                    key: "checkScroll",
                    value: function () {
                        var e = this;
                        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || this.isScrolling || this.isDraggingScrollbar) {
                            this.hasScrollTicking || (requestAnimationFrame(function () {
                                return e.checkScroll()
                            }), this.hasScrollTicking = !0), this.updateScroll();
                            var i = Math.abs(this.instance.delta.y - this.instance.scroll.y);
                            !this.animatingScroll && (i < .5 && 0 != this.instance.delta.y || i < .5 && 0 == this.instance.delta.y) && this.stopScrolling();
                            for (var n = this.sections.length - 1; n >= 0; n--) this.sections[n].persistent || this.instance.scroll.y > this.sections[n].offset && this.instance.scroll.y < this.sections[n].limit ? (this.transform(this.sections[n].el, 0, -this.instance.scroll.y), this.sections[n].inView || (this.sections[n].inView = !0, this.sections[n].el.style.opacity = 1, this.sections[n].el.style.pointerEvents = "all", this.sections[n].el.setAttribute("data-".concat(this.name, "-section-inview"), ""))) : (this.sections[n].inView && (this.sections[n].inView = !1, this.sections[n].el.style.opacity = 0, this.sections[n].el.style.pointerEvents = "none", this.sections[n].el.removeAttribute("data-".concat(this.name, "-section-inview"))), this.transform(this.sections[n].el, 0, 0));
                            this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.timestamp = Date.now()), this.detectElements(), this.transformElements();
                            var r = this.instance.scroll.y / this.instance.limit * this.scrollBarLimit;
                            this.transform(this.scrollbarThumb, 0, r), m(h(t.prototype), "checkScroll", this).call(this), this.hasScrollTicking = !1
                        }
                    }
                }, {
                    key: "resize",
                    value: function () {
                        this.windowHeight = window.innerHeight, this.windowMiddle = this.windowHeight / 2, this.update()
                    }
                }, {
                    key: "updateDelta",
                    value: function (e) {
                        this.instance.delta.y -= e.deltaY * this.multiplier, this.instance.delta.y < 0 && (this.instance.delta.y = 0), this.instance.delta.y > this.instance.limit && (this.instance.delta.y = this.instance.limit)
                    }
                }, {
                    key: "updateScroll",
                    value: function (e) {
                        this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll.y = W(this.instance.scroll.y, this.instance.delta.y, this.lerp) : this.instance.scroll.y > this.instance.limit ? this.setScroll(this.instance.scroll.x, this.instance.limit) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll.x, 0) : this.setScroll(this.instance.scroll.x, this.instance.delta.y)
                    }
                }, {
                    key: "addDirection",
                    value: function () {
                        this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
                    }
                }, {
                    key: "addSpeed",
                    value: function () {
                        this.instance.delta.y != this.instance.scroll.y ? this.instance.speed = (this.instance.delta.y - this.instance.scroll.y) / Math.max(1, Date.now() - this.timestamp) : this.instance.speed = 0
                    }
                }, {
                    key: "initScrollBar",
                    value: function () {
                        this.scrollbar = document.createElement("span"), this.scrollbarThumb = document.createElement("span"), this.scrollbar.classList.add("".concat(this.scrollbarClass)), this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")), this.scrollbar.append(this.scrollbarThumb), document.body.append(this.scrollbar), this.getScrollBar = this.getScrollBar.bind(this), this.releaseScrollBar = this.releaseScrollBar.bind(this), this.moveScrollBar = this.moveScrollBar.bind(this), this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar), window.addEventListener("mouseup", this.releaseScrollBar), window.addEventListener("mousemove", this.moveScrollBar), this.instance.limit + this.windowHeight <= this.windowHeight || (this.scrollbarHeight = this.scrollbar.getBoundingClientRect().height, this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit + this.scrollbarHeight), "px"), this.scrollBarLimit = this.scrollbarHeight - this.scrollbarThumb.getBoundingClientRect().height)
                    }
                }, {
                    key: "reinitScrollBar",
                    value: function () {
                        this.instance.limit + this.windowHeight <= this.windowHeight || (this.scrollbarHeight = this.scrollbar.getBoundingClientRect().height, this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit + this.scrollbarHeight), "px"), this.scrollBarLimit = this.scrollbarHeight - this.scrollbarThumb.getBoundingClientRect().height)
                    }
                }, {
                    key: "destroyScrollBar",
                    value: function () {
                        this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar), window.removeEventListener("mouseup", this.releaseScrollBar), window.removeEventListener("mousemove", this.moveScrollBar), this.scrollbar.remove()
                    }
                }, {
                    key: "getScrollBar",
                    value: function (e) {
                        this.isDraggingScrollbar = !0, this.checkScroll(), this.html.classList.remove(this.scrollingClass), this.html.classList.add(this.draggingClass)
                    }
                }, {
                    key: "releaseScrollBar",
                    value: function (e) {
                        this.isDraggingScrollbar = !1, this.html.classList.add(this.scrollingClass), this.html.classList.remove(this.draggingClass)
                    }
                }, {
                    key: "moveScrollBar",
                    value: function (e) {
                        var t = this;
                        !this.isTicking && this.isDraggingScrollbar && (requestAnimationFrame(function () {
                            var i = 100 * e.clientY / t.scrollbarHeight * t.instance.limit / 100;
                            i > 0 && i < t.instance.limit && (t.instance.delta.y = i)
                        }), this.isTicking = !0), this.isTicking = !1
                    }
                }, {
                    key: "addElements",
                    value: function () {
                        var e = this;
                        this.els = [], this.parallaxElements = [], this.sections.forEach(function (t, i) {
                            e.sections[i].el.querySelectorAll("[data-".concat(e.name, "]")).forEach(function (t, n) {
                                var r, o, s = t.dataset[e.name + "Class"] || e.class,
                                    a = t.dataset[e.name + "Repeat"],
                                    l = t.dataset[e.name + "Call"],
                                    c = t.dataset[e.name + "Position"],
                                    u = t.dataset[e.name + "Delay"],
                                    h = t.dataset[e.name + "Direction"],
                                    f = "string" == typeof t.dataset[e.name + "Sticky"],
                                    d = !!t.dataset[e.name + "Speed"] && parseFloat(t.dataset[e.name + "Speed"]) / 10,
                                    p = "string" == typeof t.dataset[e.name + "Offset"] ? t.dataset[e.name + "Offset"].split(",") : e.offset,
                                    m = t.dataset[e.name + "Target"];
                                o = void 0 !== m ? document.querySelector("".concat(m)) : t;
                                var g = (r = e.sections[i].inView ? o.getBoundingClientRect().top + e.instance.scroll.y - X(o).y : o.getBoundingClientRect().top - X(e.sections[i].el).y - X(o).y) + o.offsetHeight,
                                    _ = (g - r) / 2 + r;
                                if (f) {
                                    var v = t.getBoundingClientRect().top,
                                        y = v - r;
                                    r += window.innerHeight, _ = ((g = v + o.offsetHeight - t.offsetHeight - y) - r) / 2 + r
                                }
                                a = "false" != a && (null != a || e.repeat);
                                var w = [0, 0];
                                if (p)
                                    for (var b = 0; b < p.length; b++) "string" == typeof p[b] ? p[b].includes("%") ? w[b] = parseInt(p[b].replace("%", "") * e.windowHeight / 100) : w[b] = parseInt(p[b]) : w[b] = p[b];
                                var x = {
                                    el: t,
                                    id: n,
                                    class: s,
                                    top: r + w[0],
                                    middle: _,
                                    bottom: g - w[1],
                                    offset: p,
                                    repeat: a,
                                    inView: !!t.classList.contains(s),
                                    call: l,
                                    speed: d,
                                    delay: u,
                                    position: c,
                                    target: o,
                                    direction: h,
                                    sticky: f
                                };
                                e.els.push(x), (!1 !== d || f) && e.parallaxElements.push(x)
                            })
                        })
                    }
                }, {
                    key: "addSections",
                    value: function () {
                        var e = this;
                        this.sections = [];
                        var t = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                        0 === t.length && (t = [this.el]), t.forEach(function (t, i) {
                            var n = t.getBoundingClientRect().top - 1.5 * window.innerHeight - X(t).y,
                                r = n + t.getBoundingClientRect().height + 2 * window.innerHeight,
                                o = {
                                    el: t,
                                    offset: n,
                                    limit: r,
                                    inView: !1,
                                    persistent: "string" == typeof t.dataset[e.name + "Persistent"]
                                };
                            e.sections[i] = o
                        })
                    }
                }, {
                    key: "transform",
                    value: function (e, t, i, n) {
                        var r;
                        if (n) {
                            var o = X(e),
                                s = W(o.x, t, n),
                                a = W(o.y, i, n);
                            r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(s, ",").concat(a, ",0,1)")
                        } else r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(t, ",").concat(i, ",0,1)");
                        e.style.webkitTransform = r, e.style.msTransform = r, e.style.transform = r
                    }
                }, {
                    key: "transformElements",
                    value: function (e) {
                        var t = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = this.instance.scroll.y + this.windowHeight,
                            r = this.instance.scroll.y + this.windowMiddle;
                        this.parallaxElements.forEach(function (o, s) {
                            var a = !1;
                            if (e && (a = 0), o.inView || i) switch (o.position) {
                                case "top":
                                    a = t.instance.scroll.y * -o.speed;
                                    break;
                                case "elementTop":
                                    a = (n - o.top) * -o.speed;
                                    break;
                                case "bottom":
                                    a = (t.instance.limit - n + t.windowHeight) * o.speed;
                                    break;
                                default:
                                    a = (r - o.middle) * -o.speed
                            }
                            o.sticky && (a = o.inView ? t.instance.scroll.y - o.top + window.innerHeight : t.instance.scroll.y < o.top - window.innerHeight && t.instance.scroll.y < o.top - window.innerHeight / 2 ? 0 : t.instance.scroll.y > o.bottom && t.instance.scroll.y > o.bottom + 100 && o.bottom - o.top + window.innerHeight), !1 !== a && ("horizontal" === o.direction ? t.transform(o.el, a, 0, !e && o.delay) : t.transform(o.el, 0, a, !e && o.delay))
                        })
                    }
                }, {
                    key: "scrollTo",
                    value: function (e, t) {
                        var i, n = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [.25, 0, .35, 1],
                            s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                            a = arguments.length > 5 ? arguments[5] : void 0,
                            l = t ? parseInt(t) : 0;
                        if (o = se.apply(void 0, g(o)), "string" == typeof e) {
                            if ("top" === e) i = 0;
                            else if ("bottom" === e) i = this.instance.limit;
                            else if (!(i = document.querySelector(e))) return
                        } else if ("number" == typeof e) i = parseInt(e);
                        else {
                            if (!e || !e.tagName) return void console.warn("`targetOption` parameter is not valid");
                            i = e
                        }
                        if ("number" != typeof i) {
                            if (!Y(i).includes(this.el)) return;
                            var c = i.getBoundingClientRect().top,
                                u = Y(i).find(function (e) {
                                    return n.sections.find(function (t) {
                                        return t.el == e
                                    })
                                }),
                                h = 0;
                            u && (h = X(u).y), l = c + l - h
                        } else l = i + l;
                        var f = parseFloat(this.instance.delta.y),
                            d = Math.max(0, Math.min(l, this.instance.limit)) - f,
                            p = function (e) {
                                s ? n.setScroll(n.instance.delta.x, f + d * e) : n.instance.delta.y = f + d * e
                            };
                        this.animatingScroll = !0, this.stopScrolling(), this.startScrolling();
                        var m = Date.now();
                        ! function e() {
                            var t = (Date.now() - m) / r;
                            t > 1 ? (p(1), n.animatingScroll = !1, 0 == r && n.update(), a && a()) : (n.scrollToRaf = requestAnimationFrame(e), p(o(t)))
                        }()
                    }
                }, {
                    key: "update",
                    value: function () {
                        this.setScrollLimit(), this.addSections(), this.addElements(), this.detectElements(), this.updateScroll(), this.transformElements(!0), this.reinitScrollBar(), this.checkScroll(!0)
                    }
                }, {
                    key: "startScroll",
                    value: function () {
                        this.stop = !1
                    }
                }, {
                    key: "stopScroll",
                    value: function () {
                        this.stop = !0
                    }
                }, {
                    key: "setScroll",
                    value: function (e, t) {
                        this.instance = c({}, this.instance, {
                            scroll: {
                                x: e,
                                y: t
                            },
                            delta: {
                                x: e,
                                y: t
                            },
                            speed: 0
                        })
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        m(h(t.prototype), "destroy", this).call(this), this.stopScrolling(), this.html.classList.remove(this.smoothClass), this.vs.destroy(), this.destroyScrollBar(), window.removeEventListener("keydown", this.checkKey, !1)
                    }
                }]), t
            }(v),
            ge = function () {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    r(this, e), this.options = t, Object.assign(this, _, t), this.init()
                }
                return s(e, [{
                    key: "init",
                    value: function () {
                        if (this.smoothMobile || (this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1), !0 !== this.smooth || this.isMobile ? this.scroll = new x(this.options) : this.scroll = new me(this.options), this.scroll.init(), window.location.hash) {
                            var e = window.location.hash.slice(1, window.location.hash.length),
                                t = document.getElementById(e);
                            t && this.scroll.scrollTo(t)
                        }
                    }
                }, {
                    key: "update",
                    value: function () {
                        this.scroll.update()
                    }
                }, {
                    key: "start",
                    value: function () {
                        this.scroll.startScroll()
                    }
                }, {
                    key: "stop",
                    value: function () {
                        this.scroll.stopScroll()
                    }
                }, {
                    key: "scrollTo",
                    value: function (e, t, i, n, r, o) {
                        this.scroll.scrollTo(e, t, i, n, r, o)
                    }
                }, {
                    key: "setScroll",
                    value: function (e, t) {
                        this.scroll.setScroll(e, t)
                    }
                }, {
                    key: "on",
                    value: function (e, t) {
                        this.scroll.setEvents(e, t)
                    }
                }, {
                    key: "off",
                    value: function (e, t) {
                        this.scroll.unsetEvents(e, t)
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this.scroll.destroy()
                    }
                }]), e
            }();
        i.default = ge
    }, {}],
    NJSX: [function (e, t, i) {
        t.exports = "1.fc197a9a.jpg"
    }, {}],
    i4z2: [function (e, t, i) {
        t.exports = "10.5e22fdc3.jpg"
    }, {}],
    PKe7: [function (e, t, i) {
        t.exports = "11.a56b8aeb.jpg"
    }, {}],
    CS4A: [function (e, t, i) {
        t.exports = "12.b5a57fd7.jpg"
    }, {}],
    uYgX: [function (e, t, i) {
        t.exports = "13.3858c623.jpg"
    }, {}],
    hIAS: [function (e, t, i) {
        t.exports = "14.c732d2b3.jpg"
    }, {}],
    TjQ6: [function (e, t, i) {
        t.exports = "15.61b13bcc.jpg"
    }, {}],
    AgKW: [function (e, t, i) {
        t.exports = "16.39461312.jpg"
    }, {}],
    oxYq: [function (e, t, i) {
        t.exports = "17.7c008703.jpg"
    }, {}],
    f9Jt: [function (e, t, i) {
        t.exports = "18.81a1401f.jpg"
    }, {}],
    BVGL: [function (e, t, i) {
        t.exports = "19.6d803788.jpg"
    }, {}],
    dFor: [function (e, t, i) {
        t.exports = "2.3ca6bb44.jpg"
    }, {}],
    ctUQ: [function (e, t, i) {
        t.exports = "20.b400b781.jpg"
    }, {}],
    cqFp: [function (e, t, i) {
        t.exports = "21.as12sd18.jpg"
    }, {}],
    P8tY: [function (e, t, i) {
        t.exports = "3.a433b89d.jpg"
    }, {}],
    kPmT: [function (e, t, i) {
        t.exports = "4.c6d96be5.jpg"
    }, {}],
    VqBz: [function (e, t, i) {
        t.exports = "5.689b68fd.jpg"
    }, {}],
    gtVS: [function (e, t, i) {
        t.exports = "6.e96dcfff.jpg"
    }, {}],
    HYBC: [function (e, t, i) {
        t.exports = "7.2d66e3ed.jpg"
    }, {}],
    KW6U: [function (e, t, i) {
        t.exports = "8.f4323fe0.jpg"
    }, {}],
    xNmy: [function (e, t, i) {
        t.exports = "9.c9233dac.jpg"
    }, {}],
    m7Bz: [function (e, t, i) {
        t.exports = {
            1: e("./1.jpg"),
            2: e("./2.jpg"),
            3: e("./3.jpg"),
            4: e("./4.jpg"),
            5: e("./5.jpg"),
            6: e("./6.jpg"),
            7: e("./7.jpg"),
            8: e("./8.jpg"),
            9: e("./9.jpg"),
            10: e("./10.jpg"),
            11: e("./11.jpg"),
            12: e("./12.jpg"),
            13: e("./13.jpg"),
            14: e("./14.jpg"),
            15: e("./15.jpg"),
            16: e("./16.jpg"),
            17: e("./17.jpg"),
            18: e("./18.jpg"),
            19: e("./19.jpg"),
            20: e("./20.jpg"),
            21: e("./21.jpg")
        }
    }, {
        "./21.jpg": "cqFp",
        "./1.jpg": "NJSX",
        "./10.jpg": "i4z2",
        "./11.jpg": "PKe7",
        "./12.jpg": "CS4A",
        "./13.jpg": "uYgX",
        "./14.jpg": "hIAS",
        "./15.jpg": "TjQ6",
        "./16.jpg": "AgKW",
        "./17.jpg": "oxYq",
        "./18.jpg": "f9Jt",
        "./19.jpg": "BVGL",
        "./2.jpg": "dFor",
        "./20.jpg": "ctUQ",
        "./3.jpg": "P8tY",
        "./4.jpg": "kPmT",
        "./5.jpg": "VqBz",
        "./6.jpg": "gtVS",
        "./7.jpg": "HYBC",
        "./8.jpg": "KW6U",
        "./9.jpg": "xNmy"
    }],
    Jy3L: [function (e, t, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.default = void 0;
        var n = e("gsap"),
            r = e("./utils");

        function o(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var s = Object.entries(e("../img/*.jpg")),
            a = {
                x: 0,
                y: 0
            },
            l = a,
            c = {
                x: l.x - a.x,
                y: l.y - a.y
            };
        window.addEventListener("mousemove", function (e) {
            return a = (0, r.getMousePos)(e)
        });
        var u = function () {
            function e(t, i, n) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.DOM = {
                    el: t
                }, this.inMenuPosition = i, this.animatableProperties = n, this.DOM.textInner = this.DOM.el.querySelector(".menu__item-textinner"), this.layout(), this.initEvents()
            }
            var t, i, u;
            return t = e, (i = [{
                key: "layout",
                value: function () {
                    this.DOM.reveal = document.createElement("div"), this.DOM.reveal.className = "hover-reveal", this.DOM.revealInner = document.createElement("div"), this.DOM.revealInner.className = "hover-reveal__inner", this.DOM.revealImage = document.createElement("div"), this.DOM.revealImage.className = "hover-reveal__img", this.DOM.revealImage.style.backgroundImage = "url(".concat(s[this.inMenuPosition][1], ")"), this.DOM.revealInner.appendChild(this.DOM.revealImage), this.DOM.reveal.appendChild(this.DOM.revealInner), this.DOM.el.appendChild(this.DOM.reveal)
                }
            }, {
                key: "calcBounds",
                value: function () {
                    this.bounds = {
                        el: this.DOM.el.getBoundingClientRect(),
                        reveal: this.DOM.reveal.getBoundingClientRect()
                    }
                }
            }, {
                key: "initEvents",
                value: function () {
                    var e = this;
                    this.mouseenterFn = function (t) {
                        e.showImage(), e.firstRAFCycle = !0, e.loopRender()
                    }, this.mouseleaveFn = function () {
                        e.stopRendering(), e.hideImage()
                    }, this.DOM.el.addEventListener("mouseenter", this.mouseenterFn), this.DOM.el.addEventListener("mouseleave", this.mouseleaveFn)
                }
            }, {
                key: "showImage",
                value: function () {
                    var e = this;
                    n.gsap.killTweensOf(this.DOM.revealInner), n.gsap.killTweensOf(this.DOM.revealImage), this.tl = n.gsap.timeline({
                        onStart: function () {
                            e.DOM.reveal.style.opacity = 1, n.gsap.set(e.DOM.el, {
                                zIndex: s.length
                            })
                        }
                    }).to(this.DOM.revealInner, .2, {
                        ease: "Sine.easeOut",
                        startAt: {
                            x: c.x < 0 ? "-100%" : "100%"
                        },
                        x: "0%"
                    }).to(this.DOM.revealImage, .2, {
                        ease: "Sine.easeOut",
                        startAt: {
                            x: c.x < 0 ? "100%" : "-100%"
                        },
                        x: "0%"
                    }, 0)
                }
            }, {
                key: "hideImage",
                value: function () {
                    var e = this;
                    n.gsap.killTweensOf(this.DOM.revealInner), n.gsap.killTweensOf(this.DOM.revealImage), this.tl = n.gsap.timeline({
                        onStart: function () {
                            n.gsap.set(e.DOM.el, {
                                zIndex: 1
                            })
                        },
                        onComplete: function () {
                            n.gsap.set(e.DOM.reveal, {
                                opacity: 0
                            })
                        }
                    }).to(this.DOM.revealInner, .2, {
                        ease: "Sine.easeOut",
                        x: c.x < 0 ? "100%" : "-100%"
                    }).to(this.DOM.revealImage, .2, {
                        ease: "Sine.easeOut",
                        x: c.x < 0 ? "-100%" : "100%"
                    }, 0)
                }
            }, {
                key: "loopRender",
                value: function () {
                    var e = this;
                    this.requestId || (this.requestId = requestAnimationFrame(function () {
                        return e.render()
                    }))
                }
            }, {
                key: "stopRendering",
                value: function () {
                    this.requestId && (window.cancelAnimationFrame(this.requestId), this.requestId = void 0)
                }
            }, {
                key: "render",
                value: function () {
                    this.requestId = void 0, this.firstRAFCycle && this.calcBounds();
                    var e = (0, r.clamp)(Math.abs(l.x - a.x), 0, 100);
                    c = {
                        x: l.x - a.x,
                        y: l.y - a.y
                    }, l = {
                        x: a.x,
                        y: a.y
                    }, this.animatableProperties.tx.current = Math.abs(a.x - this.bounds.el.left) - this.bounds.reveal.width / 2, this.animatableProperties.ty.current = Math.abs(a.y - this.bounds.el.top) - this.bounds.reveal.height / 2, this.animatableProperties.rotation.current = this.firstRAFCycle ? 0 : (0, r.map)(e, 0, 100, 0, c.x < 0 ? 60 : -60), this.animatableProperties.brightness.current = this.firstRAFCycle ? 1 : (0, r.map)(e, 0, 100, 1, 4), this.animatableProperties.tx.previous = this.firstRAFCycle ? this.animatableProperties.tx.current : (0, r.lerp)(this.animatableProperties.tx.previous, this.animatableProperties.tx.current, this.animatableProperties.tx.amt), this.animatableProperties.ty.previous = this.firstRAFCycle ? this.animatableProperties.ty.current : (0, r.lerp)(this.animatableProperties.ty.previous, this.animatableProperties.ty.current, this.animatableProperties.ty.amt), this.animatableProperties.rotation.previous = this.firstRAFCycle ? this.animatableProperties.rotation.current : (0, r.lerp)(this.animatableProperties.rotation.previous, this.animatableProperties.rotation.current, this.animatableProperties.rotation.amt), this.animatableProperties.brightness.previous = this.firstRAFCycle ? this.animatableProperties.brightness.current : (0, r.lerp)(this.animatableProperties.brightness.previous, this.animatableProperties.brightness.current, this.animatableProperties.brightness.amt), n.gsap.set(this.DOM.reveal, {
                        x: this.animatableProperties.tx.previous,
                        y: this.animatableProperties.ty.previous,
                        rotation: this.animatableProperties.rotation.previous,
                        filter: "brightness(".concat(this.animatableProperties.brightness.previous, ")")
                    }), this.firstRAFCycle = !1, this.loopRender()
                }
            }]) && o(t.prototype, i), u && o(t, u), e
        }();
        i.default = u
    }, {
        gsap: "TpQl",
        "./utils": "MgTz",
        "../img/*.jpg": "m7Bz"
    }],
    i0CD: [function (e, t, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.default = void 0;
        var n, r = e("gsap"),
            o = (n = e("./menuItem")) && n.__esModule ? n : {
                default: n
            };

        function s(e) {
            return function (e) {
                if (Array.isArray(e)) return a(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return a(e, t);
                var i = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === i && e.constructor && (i = e.constructor.name);
                if ("Map" === i || "Set" === i) return Array.from(e);
                if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return a(e, t)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
            return n
        }

        function l(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var c = function () {
            function e(t) {
                var i = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.DOM = {
                    el: t
                }, this.DOM.menuItems = this.DOM.el.querySelectorAll(".menu__item"), this.animatableProperties = {
                    tx: {
                        previous: 0,
                        current: 0,
                        amt: .08
                    },
                    ty: {
                        previous: 0,
                        current: 0,
                        amt: .08
                    },
                    rotation: {
                        previous: 0,
                        current: 0,
                        amt: .08
                    },
                    brightness: {
                        previous: 1,
                        current: 1,
                        amt: .08
                    }
                }, this.menuItems = [], s(this.DOM.menuItems).forEach(function (e, t) {
                    return i.menuItems.push(new o.default(e, t, i.animatableProperties))
                }), this.showMenuItems()
            }
            var t, i, n;
            return t = e, (i = [{
                key: "showMenuItems",
                value: function () {
                    r.gsap.to(this.menuItems.map(function (e) {
                        return e.DOM.textInner
                    }), {
                        duration: 1.2,
                        ease: "Expo.easeOut",
                        startAt: {
                            y: "100%"
                        },
                        y: 0,
                        delay: function (e) {
                            return .06 * e
                        }
                    })
                }
            }]) && l(t.prototype, i), n && l(t, n), e
        }();
        i.default = c
    }, {
        gsap: "TpQl",
        "./menuItem": "Jy3L"
    }],
    QvaY: [function (e, t, i) {
        "use strict";
        var n = a(e("./cursor")),
            r = e("./preloader"),
            o = a(e("locomotive-scroll")),
            s = a(e("./menu"));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = document.querySelector(".menu");
        (0, r.preloader)(".menu__item").then(function () {
            new o.default({
                el: l,
                smooth: !0
            }), new n.default(document.querySelector(".cursor"));
            new s.default(l)
        })
    }, {
        "./cursor": "LMRJ",
        "./preloader": "BeZ8",
        "locomotive-scroll": "ez7q",
        "./menu": "i0CD"
    }]
}, {}, ["QvaY"]),
    function (e, t) {
        "use strict";

        function i(i, n, o, a, l) {
            function c() {
                T = e.devicePixelRatio > 1, o = u(o), n.delay >= 0 && setTimeout(function () {
                    h(!0)
                }, n.delay), (n.delay < 0 || n.combined) && (a.e = function (e, t) {
                    var r, o = 0;
                    return function (s, a) {
                        function l() {
                            o = +new Date, t.call(i, s)
                        }
                        var c = +new Date - o;
                        r && clearTimeout(r), c > e || !n.enableThrottle || a ? l() : r = setTimeout(l, e - c)
                    }
                }(n.throttle, function (e) {
                    "resize" === e.type && (b = x = -1), h(e.all)
                }), a.a = function (e) {
                    e = u(e), o.push.apply(o, e)
                }, a.g = function () {
                    return o = r(o).filter(function () {
                        return !r(this).data(n.loadedName)
                    })
                }, a.f = function (e) {
                    for (var t = 0; t < e.length; t++) {
                        var i = o.filter(function () {
                            return this === e[t]
                        });
                        i.length && h(!1, i)
                    }
                }, h(), r(n.appendScroll).on("scroll." + l + " resize." + l, a.e))
            }

            function u(e) {
                for (var o = n.defaultImage, s = n.placeholder, a = n.imageBase, l = n.srcsetAttribute, c = n.loaderAttribute, u = n._f || {}, h = 0, f = (e = r(e).filter(function () {
                    var e = r(this),
                        i = g(this);
                    return !e.data(n.handledName) && (e.attr(n.attribute) || e.attr(l) || e.attr(c) || u[i] !== t)
                }).data("plugin_" + n.name, i)).length; h < f; h++) {
                    var d = r(e[h]),
                        p = g(e[h]),
                        m = d.attr(n.imageBaseAttribute) || a;
                    p === P && m && d.attr(l) && d.attr(l, _(d.attr(l), m)), u[p] === t || d.attr(c) || d.attr(c, u[p]), p === P && o && !d.attr(O) ? d.attr(O, o) : p === P || !s || d.css($) && "none" !== d.css($) || d.css($, "url('" + s + "')")
                }
                return e
            }

            function h(e, t) {
                if (o.length) {
                    for (var s = t || o, a = !1, l = n.imageBase || "", c = n.srcsetAttribute, u = n.handledName, h = 0; h < s.length; h++)
                        if (e || t || d(s[h])) {
                            var p = r(s[h]),
                                m = g(s[h]),
                                _ = p.attr(n.attribute),
                                v = p.attr(n.imageBaseAttribute) || l,
                                y = p.attr(n.loaderAttribute);
                            p.data(u) || n.visibleOnly && !p.is(":visible") || !((_ || p.attr(c)) && (m === P && (v + _ !== p.attr(O) || p.attr(c) !== p.attr(E)) || m !== P && v + _ !== p.css($)) || y) || (a = !0, p.data(u, !0), f(p, m, v, y))
                        } a && (o = r(o).filter(function () {
                            return !r(this).data(u)
                        }))
                } else n.autoDestroy && i.destroy()
            }

            function f(e, t, i, o) {
                ++w;
                var s = function () {
                    y("onError", e), v(), s = r.noop
                };
                y("beforeLoad", e);
                var a = n.attribute,
                    l = n.srcsetAttribute,
                    c = n.sizesAttribute,
                    u = n.retinaAttribute,
                    h = n.removeAttribute,
                    f = n.loadedName,
                    d = e.attr(u);
                if (o) {
                    var p = function () {
                        h && e.removeAttr(n.loaderAttribute), e.data(f, !0), y(C, e), setTimeout(v, 1), p = r.noop
                    };
                    e.off(k).one(k, s).one(S, p), y(o, e, function (t) {
                        t ? (e.off(S), p()) : (e.off(k), s())
                    }) || e.trigger(k)
                } else {
                    var m = r(new Image);
                    m.one(k, s).one(S, function () {
                        e.hide(), t === P ? e.attr(M, m.attr(M)).attr(E, m.attr(E)).attr(O, m.attr(O)) : e.css($, "url('" + m.attr(O) + "')"), e[n.effect](n.effectTime), h && (e.removeAttr(a + " " + l + " " + u + " " + n.imageBaseAttribute), c !== M && e.removeAttr(c)), e.data(f, !0), y(C, e), m.remove(), v()
                    });
                    var g = (T && d ? d : e.attr(a)) || "";
                    m.attr(M, e.attr(c)).attr(E, e.attr(l)).attr(O, g ? i + g : null), m.complete && m.trigger(S)
                }
            }

            function d(e) {
                var t = e.getBoundingClientRect(),
                    i = n.scrollDirection,
                    r = n.threshold,
                    o = m() + r > t.top && -r < t.bottom,
                    s = p() + r > t.left && -r < t.right;
                return "vertical" === i ? o : "horizontal" === i ? s : o && s
            }

            function p() {
                return b >= 0 ? b : b = r(e).width()
            }

            function m() {
                return x >= 0 ? x : x = r(e).height()
            }

            function g(e) {
                return e.tagName.toLowerCase()
            }

            function _(e, t) {
                if (t) {
                    var i = e.split(",");
                    e = "";
                    for (var n = 0, r = i.length; n < r; n++) e += t + i[n].trim() + (n !== r - 1 ? "," : "")
                }
                return e
            }

            function v() {
                --w, o.length || w || y("onFinishedAll")
            }

            function y(e, t, r) {
                return !!(e = n[e]) && (e.apply(i, [].slice.call(arguments, 1)), !0)
            }
            var w = 0,
                b = -1,
                x = -1,
                T = !1,
                C = "afterLoad",
                S = "load",
                k = "error",
                P = "img",
                O = "src",
                E = "srcset",
                M = "sizes",
                $ = "background-image";
            "event" === n.bind || s ? c() : r(e).on(S + "." + l, c)
        }

        function n(n, s) {
            var a = this,
                l = r.extend({}, a.config, s),
                c = {},
                u = l.name + "-" + ++o;
            return a.config = function (e, i) {
                return i === t ? l[e] : (l[e] = i, a)
            }, a.addItems = function (e) {
                return c.a && c.a("string" === r.type(e) ? r(e) : e), a
            }, a.getItems = function () {
                return c.g ? c.g() : {}
            }, a.update = function (e) {
                return c.e && c.e({}, !e), a
            }, a.force = function (e) {
                return c.f && c.f("string" === r.type(e) ? r(e) : e), a
            }, a.loadAll = function () {
                return c.e && c.e({
                    all: !0
                }, !0), a
            }, a.destroy = function () {
                return r(l.appendScroll).off("." + u, c.e), r(e).off("." + u), c = {}, t
            }, i(a, l, n, c, u), l.chainable ? n : a
        }
        var r = e.jQuery || e.Zepto,
            o = 0,
            s = !1;
        r.fn.Lazy = r.fn.lazy = function (e) {
            return new n(this, e)
        }, r.Lazy = r.lazy = function (e, i, o) {
            if (r.isFunction(i) && (o = i, i = []), r.isFunction(o)) {
                e = r.isArray(e) ? e : [e], i = r.isArray(i) ? i : [i];
                for (var s = n.prototype.config, a = s._f || (s._f = {}), l = 0, c = e.length; l < c; l++)(s[e[l]] === t || r.isFunction(s[e[l]])) && (s[e[l]] = o);
                for (var u = 0, h = i.length; u < h; u++) a[i[u]] = e[0]
            }
        }, n.prototype.config = {
            name: "lazy",
            chainable: !0,
            autoDestroy: !0,
            bind: "load",
            threshold: 500,
            visibleOnly: !1,
            appendScroll: e,
            scrollDirection: "both",
            imageBase: null,
            defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
            placeholder: null,
            delay: -1,
            combined: !1,
            attribute: "data-src",
            srcsetAttribute: "data-srcset",
            sizesAttribute: "data-sizes",
            retinaAttribute: "data-retina",
            loaderAttribute: "data-loader",
            imageBaseAttribute: "data-imagebase",
            removeAttribute: !0,
            handledName: "handled",
            loadedName: "loaded",
            effect: "show",
            effectTime: 0,
            enableThrottle: !0,
            throttle: 250,
            beforeLoad: t,
            afterLoad: t,
            onError: t,
            onFinishedAll: t
        }, r(e).on("load", function () {
            s = !0
        })
    }(window);
var shareon = function () {
    "use strict";
    var e = {
        facebook: function (e) {
            return "https://www.facebook.com/sharer/sharer.php?u=" + e.url
        },
        linkedin: function (e) {
            return "https://www.linkedin.com/sharing/share-offsite/?url=" + e.url
        },
        mastodon: function (e) {
            return "https://toot.karamoff.dev/?text=" + e.title + "%0D%0A" + e.url + (e.text ? "%0D%0A%0D%0A" + e.text : "") + (e.via ? "%0D%0A%0D%0A" + e.via : "")
        },
        messenger: function (e) {
            return "https://www.facebook.com/dialog/send?app_id=" + e.fbAppId + "&link=" + e.url + "&redirect_uri=" + e.url
        },
        odnoklassniki: function (e) {
            return "https://connect.ok.ru/offer?url=" + e.url + "&title=" + e.title + (e.media ? "&imageUrl=" + e.media : "")
        },
        pinterest: function (e) {
            return "https://pinterest.com/pin/create/button/?url=" + e.url + "&description=" + e.title + (e.media ? "&media=" + e.media : "")
        },
        pocket: function (e) {
            return "https://getpocket.com/edit.php?url=" + e.url
        },
        reddit: function (e) {
            return "https://www.reddit.com/submit?title=" + e.title + "&url=" + e.url
        },
        telegram: function (e) {
            return "https://telegram.me/share/url?url=" + e.url + (e.text ? "&text=" + e.text : "")
        },
        twitter: function (e) {
            return "https://twitter.com/intent/tweet?url=" + e.url + "&text=" + e.title + (e.via ? "&via=" + e.via : "")
        },
        viber: function (e) {
            return "viber://forward?text=" + e.title + "%0D%0A" + e.url + (e.text ? "%0D%0A%0D%0A" + e.text : "")
        },
        vkontakte: function (e) {
            return "https://vk.com/share.php?url=" + e.url + "&title=" + e.title + (e.media ? "&image=" + e.media : "")
        },
        whatsapp: function (e) {
            return "https://wa.me/?text=" + e.title + "%0D%0A" + e.url + (e.text ? "%0D%0A%0D%0A" + e.text : "")
        }
    },
        t = function () {
            for (var t = document.getElementsByClassName("shareon"), i = 0; i < t.length; i += 1)
                for (var n = t[i], r = 0; r < n.children.length; r += 1) {
                    var o = n.children[r];
                    if (o)
                        for (var s = o.classList.length, a = 0; a < s; a += 1) {
                            var l = o.classList.item(a);
                            if (Object.prototype.hasOwnProperty.call(e, l)) {
                                var c = {
                                    url: encodeURIComponent(o.dataset.url || n.dataset.url || window.location.href),
                                    title: encodeURIComponent(o.dataset.title || n.dataset.title || document.title),
                                    media: encodeURIComponent(o.dataset.media || n.dataset.media || ""),
                                    text: encodeURIComponent(o.dataset.text || n.dataset.text || ""),
                                    via: encodeURIComponent(o.dataset.via || n.dataset.via || ""),
                                    fbAppId: encodeURIComponent(o.dataset.fbAppId || n.dataset.fbAppId || "")
                                },
                                    u = e[l](c);
                                "a" === o.tagName.toLowerCase() ? (o.setAttribute("href", u), o.setAttribute("rel", "noopener noreferrer"), o.setAttribute("target", "_blank")) : o.addEventListener("click", function (e) {
                                    return function () {
                                        window.open(e, "_blank", "noopener,noreferrer")
                                    }
                                }(u));
                                break
                            }
                        }
                }
        };
    return window.onload = function () {
        t()
    }, t
}(),
    factor = 1,
    venus = {
        init: function () {
            self = this, $(document).ready(function () {
                self.loader(), self.header(), self.common(), self.animation()
            })
        },
        loader: function () {
            if ($(".loader")[0])
                if (TweenLite.to($(".loader-overlay"), .4, {
                    delay: .2,
                    opacity: 0,
                    display: "none",
                    ease: Power2.easeOut
                }), $(window).outerWidth() >= 1280)
                    if (localStorage.getItem("windowPositionY") > 90) {
                        $(".loader").hide(), TweenLite.to($("section.type-1 .el-text-1-1"), .1, {
                            opacity: 1,
                            ease: Power2.easeInOut
                        });
                        (new TimelineMax).staggerFrom($("#animContainer_1 section.type-1 .el-text-1 .g__text > *"), 1.6, {
                            delay: .4,
                            x: 8,
                            opacity: 0,
                            ease: Power3.easeOut
                        }, .08, "one").staggerFrom($("#animContainer_1 section.type-1 .item"), .8, {
                            delay: .6,
                            opacity: 0,
                            y: 16,
                            ease: Power3.easeOut
                        }, .16, "one").staggerFrom($("#animContainer_1 section.type-1 .el-text-2 span"), .8, {
                            delay: .6,
                            y: -24,
                            ease: Power3.easeOut
                        }, .16, "one")
                    } else {
                        var e = new TimelineLite,
                            t = $(".loader .letter-el-1"),
                            i = $(".loader .letter-el-2"),
                            n = $(".loader .letter-mask");
                        $loaderImageMask = $(".loader .image-mask"), $loaderImageObj = $(".loader .image-outer img"), e.fromTo(t, 2.2, {
                            opacity: 0,
                            scale: 1.2
                        }, {
                            scale: 1,
                            opacity: 1,
                            ease: Power2.easeInOut
                        }, "one").to(t, 2, {
                            delay: 1.8,
                            opacity: .5,
                            ease: Power2.easeInOut
                        }, "one").fromTo(n, 2, {
                            height: "0%"
                        }, {
                            delay: 1.8,
                            height: "100%",
                            ease: Power1.easeOut
                        }, "one").to(t, 1.2, {
                            delay: 3,
                            opacity: 0,
                            ease: Power2.easeInOut
                        }, "one").fromTo($loaderImageMask, 1, {
                            width: 530,
                            height: 0
                        }, {
                            delay: 2.8,
                            width: 530,
                            height: 430,
                            ease: Power2.easeInOut
                        }, "one").to(i, 1, {
                            delay: 2.8,
                            color: "#ffffff",
                            ease: Power2.easeInOut
                        }, "one").to($loaderImageMask, 1.8, {
                            delay: 4,
                            width: "100vw",
                            height: "100vh",
                            ease: Power2.easeInOut
                        }, "one").fromTo($loaderImageObj, 1.8, {
                            z: 50,
                            rotationX: 15
                        }, {
                            delay: 4,
                            z: 0,
                            rotationX: 0,
                            ease: Power2.easeInOut
                        }, "one").to(i, 1, {
                            delay: 6,
                            opacity: 0,
                            ease: Power2.easeInOut
                        }, "one").fromTo($(".loader .loader-bg-2"), 1, { height: "0%" }, {
                            delay: 6,
                            height: "100%",
                            ease: Power2.easeInOut
                        }, "one").to($loaderImageObj, .01, {
                            delay: 7,
                            display: "none"
                        }, "one").to($(".loader .loader-bg-2"), .8, {
                            delay: 7,
                            top: 0,
                            bottom: "initial",
                            height: "0%",
                            ease: Power2.easeInOut
                        }, "one").to($(".loader .loader-bg"), .8, {
                            delay: 8.55 - 1.3,
                            opacity: 0,
                            ease: Power2.easeInOut
                        }, "one").to(".loader", .6, {
                            delay: 9.05 - 1.3,
                            opacity: 0,
                            display: "none",
                            ease: Power2.easeInOut
                        }, "one").staggerFrom($("#animContainer_1 section.type-1 .el-text-1 .g__text > *"), 1.6, {
                            delay: 7.55,
                            x: 8,
                            opacity: 0,
                            ease: Power3.easeOut
                        }, .08, "one").staggerFrom($("#animContainer_1 section.type-1 .item"), .8, {
                            delay: 9.05 - 1.3,
                            opacity: 0,
                            y: 16,
                            ease: Power3.easeOut
                        }, .16, "one").staggerFrom($("#animContainer_1 section.type-1 .el-text-2 span"), .8, {
                            delay: 9.05 - 1.3,
                            y: -24,
                            ease: Power3.easeOut
                        }, .16, "one"), e.timeScale(1.05)
                    }
                else {
                    e = new TimelineLite, t = $(".loader .letter-el-1"), i = $(".loader .letter-el-2"), n = $(".loader .letter-mask");
                    e.fromTo(t, 2.2, {
                        opacity: 0,
                        scale: 1.2
                    }, {
                        scale: 1,
                        opacity: 1,
                        ease: Power2.easeInOut
                    }, "one").to(t, 2, {
                        delay: 1.8,
                        opacity: .5,
                        ease: Power2.easeInOut
                    }, "one").fromTo(n, 2, {
                        height: "0%"
                    }, {
                        delay: 1.8,
                        height: "100%",
                        ease: Power1.easeOut
                    }, "one").to(t, 1.2, {
                        delay: 2.6,
                        opacity: 0,
                        ease: Power2.easeInOut
                    }, "one").fromTo($(".loader .loader-bg-mobile"), 1.8, {
                        height: "0%"
                    }, {
                        delay: 4,
                        height: "100%",
                        ease: Power2.easeInOut
                    }, "one").to(i, 1, {
                        delay: 4.25,
                        opacity: 0,
                        ease: Power2.easeInOut
                    }, "one").to($(".loader .loader-bg"), .8, {
                        delay: 4.8,
                        opacity: 0,
                        ease: Power2.easeInOut
                    }, "one").to(".loader", .6, {
                        delay: 5.3,
                        opacity: 0,
                        display: "none",
                        ease: Power2.easeInOut
                    }, "one"), (new TimelineLite).fromTo($(".mobile-preloader .el-text"), .6, {
                        opacity: 0
                    }, {
                        delay: 6,
                        opacity: 1,
                        ease: Power2.easeInOut
                    }, "one").staggerFromTo($(".mobile-preloader .el-text-1 span, .mobile-preloader .el-text-2 span"), 1, {
                        opacity: 1,
                        y: 0
                    }, {
                        delay: 8.5,
                        opacity: 0,
                        y: 60,
                        ease: Power1.easeInOut
                    }, -.15, "one").to($(".mobile-preloader"), 1, {
                        delay: 9.5,
                        height: 0,
                        ease: Power2.easeInOut
                    }, "one").staggerFrom($("#animContainer_1 section.type-1 .el-text-1 .g__text > *"), 1.6, {
                        delay: 9.9,
                        x: 8,
                        opacity: 0,
                        ease: Power3.easeOut
                    }, .08, "one").staggerFrom($("#animContainer_1 section.type-1 .item"), .8, {
                        delay: 10.1,
                        opacity: 0,
                        y: 16,
                        ease: Power3.easeOut
                    }, .16, "one").staggerFrom($("#animContainer_1 section.type-1 .el-text-2 span"), .8, {
                        delay: 10.1,
                        y: -24,
                        ease: Power3.easeOut
                    }, .16, "one"), setTimeout(function () {
                        localStorage.setItem("loadFinish", "true")
                    }, 4e3)
                }
        },
        header: function () {
            if ($("header")[0]) {
                var e = $("header"),
                    t = new TimelineLite({
                        onUpdate: function () {
                            t.progress() > .1 ? $("header").addClass("menu-opened") : $("header").removeClass("menu-opened")
                        }
                    }),
                    i = !1;
                $menu = $(".main-menu");
                var n = new TimelineLite,
                    r = $("header .el-burger .g__burger");
                if (t.from($menu, .01, {
                    display: "none"
                }, "one").fromTo($menu, .01, {
                    pointerEvents: "none"
                }, {
                    delay: .5,
                    pointerEvents: "all"
                }, "one").fromTo($menu.find(".g__background"), 1.2, {
                    width: 0
                }, {
                    width: "100%",
                    ease: Power2.easeInOut
                }, "one").fromTo($menu.find(".wrapper"), .8, {
                    opacity: 0
                }, {
                    delay: .4,
                    opacity: 1,
                    ease: Power2.easeInOut
                }, "one").staggerFromTo($menu.find(".el-menu ul li a"), 1.2, {
                    opacity: 0,
                    y: 120
                }, {
                    delay: .4,
                    opacity: 1,
                    y: 0,
                    ease: Power3.easeOut
                }, .2, "one").fromTo($menu.find(".el-add-link-inner"), 1.2, {
                    opacity: 0,
                    y: 80
                }, {
                    delay: 1.2,
                    opacity: 1,
                    y: 0,
                    ease: Power3.easeOut
                }, "one").fromTo($menu.find(".el-sharing-inner"), 1.2, {
                    opacity: 0,
                    y: 80
                }, {
                    delay: 1.4,
                    opacity: 1,
                    y: 0,
                    ease: Power3.easeOut
                }, "one").fromTo($menu.find(".el-text-2"), 1.2, {
                    opacity: 0,
                    y: 40
                }, {
                    delay: 1.6,
                    opacity: 1,
                    y: 0,
                    ease: Power3.easeOut
                }, "one"), t.pause(), n.to(r.find(".g__burger-line-item-outer-1"), .4, {
                    height: 2,
                    y: 8,
                    ease: Power1.linear
                }, "together").to(r.find(".g__burger-line-item-outer-3"), .4, {
                    height: 2,
                    y: -8,
                    ease: Power1.linear
                }, "together").to(r.find(".g__burger-line-item-outer-2"), .001, {
                    opacity: 0,
                    ease: Power1.linear
                }, "middle").to(r.find(".g__burger-line-item-outer-1"), .5, {
                    rotationZ: 45,
                    ease: Power2.easeInOut
                }, "cross").to(r.find(".g__burger-line-item-outer-3"), .5, {
                    rotationZ: -45,
                    ease: Power2.easeInOut
                }, "cross"), n.pause(), n.timeScale(1), r.click(function () {
                    e.removeClass("var-about-us"), $("body").removeClass("hide-scroll"), s = !1, o.timeScale(2.6), o.reverse(), 0 == i ? (i = !0, n.timeScale(1), n.play(), t.timeScale(1), t.play(), r.addClass("active"), $("body").addClass("hide-scroll"), $(".g__custom_cursor").removeClass("menu-is-closing")) : (i = !1, n.timeScale(1.6), n.reverse(), t.timeScale(1.6), t.reverse(), r.removeClass("active"), $("body").removeClass("hide-scroll"))
                }), $(".main-menu .el-close-button").click(function () {
                    i = !1, n.timeScale(1.6), n.reverse(), t.timeScale(1.6), t.reverse(), r.removeClass("active"), $("body").removeClass("hide-scroll")
                }), $(".about-us")[0]) {
                    var o = new TimelineLite,
                        s = !1;
                    $aboutUs = $(".about-us"), o.from($aboutUs, .01, {
                        display: "none"
                    }, "one").fromTo($aboutUs.find(".g__background"), 1.2, {
                        width: 0
                    }, {
                        width: "100%",
                        ease: Power2.easeInOut
                    }, "one").fromTo($aboutUs.find(".wrapper"), .8, {
                        opacity: 0
                    }, {
                        delay: .4,
                        opacity: 1,
                        ease: Power2.easeInOut
                    }, "one").fromTo($aboutUs.find(".el-image-outer"), .8, {
                        opacity: 0
                    }, {
                        delay: .8,
                        opacity: 1,
                        ease: Power2.easeInOut
                    }, "one").staggerFromTo($aboutUs.find(".el-overlay-bg"), .6, {
                        width: "100%"
                    }, {
                        delay: .7,
                        width: 0,
                        ease: Power1.easeInOut
                    }, .3, "one"), o.pause(), $(".el-add-link-text").click(function () {
                        r.removeClass("active"), $("body").removeClass("hide-scroll"), setTimeout(function () {
                            i = !1, n.timeScale(1.6), n.reverse(), t.timeScale(1.6), t.reverse()
                        }, 1e3), 0 == s ? (s = !0, o.timeScale(1), o.play(), e.addClass("var-about-us"), $("body").addClass("hide-scroll")) : (s = !1, o.timeScale(2.6), o.reverse(), e.removeClass("var-about-us"), $("body").removeClass("hide-scroll"))
                    }), $(".about-us .el-close-button").click(function () {
                        i = !1, n.timeScale(1.6), n.reverse(), t.timeScale(1.6), t.reverse(), r.removeClass("active"), $("body").removeClass("hide-scroll"), s = !1, o.timeScale(2.6), o.reverse(), e.removeClass("var-about-us"), $("body").removeClass("hide-scroll")
                    })
                }
                if ($(window).outerWidth() >= 1280 && $(".main-menu .el-menu ul li a").on("click", function (e) {
                    e.preventDefault(), $(".g__custom_cursor").addClass("menu-is-closing");
                    var o = $(this).attr("href"),
                        s = 0;
                    if ("#intro" == o && (s = parseInt($("#intro").css("padding-left")) * factor), "#myths" == o && (s = $(".animation-container-outer-1").height() - $(window).height() + $("header").width() + 5 + (parseInt($("#myths").css("padding-left")) + $(window).outerWidth()) * factor - 50 * factor), "#epochs" == o) {
                        var a = 0;
                        $(o).prevAll("section").each(function () {
                            $(this).hasClass("type-11 for-mobile") || "section_mother_of_rome" != $(this).attr("id") && (a += $(this).outerWidth(!0))
                        }), a = a, s = $(".animation-container-outer-1").height() - $(window).height() + (parseInt($("#epochs").css("margin-left")) + parseInt($("#epochs").css("padding-left")) + a) * factor
                    }
                    if ("#modernity" == o) {
                        a = 0;
                        $(o).prevAll("section").each(function () {
                            $(this).hasClass("type-11 for-mobile") || "section_mother_of_rome" != $(this).attr("id") && (a += $(this).outerWidth(!0))
                        }), s = $(".animation-container-outer-1").height() - $(window).height() + (parseInt($("#modernity").css("margin-left")) + parseInt($("#modernity").css("padding-left")) + a) * factor
                    }
                    $("html, body").animate({
                        scrollTop: s
                    }, 1), i = !1, n.timeScale(1.6), n.reverse(), t.timeScale(1.6), t.reverse(), r.removeClass("active"), $("body").removeClass("hide-scroll");
                    var l = setInterval(function () {
                        $("header").addClass("var-black"), $("section.type-6").removeClass("color-grey")
                    }, 10);
                    setTimeout(function () {
                        clearInterval(l)
                    }, 1300)
                }), $(window).outerWidth() < 1280) {
                    var a = $(".main-menu .el-menu ul li");
                    a.removeClass("active"), a.eq(0).addClass("active");
                    var l = $(".animation-container-outer-1 section"),
                        c = $("#section_mother_of_rome, #myths, #section_adonis, #section_adonis_2, #section_mars, #section_mars_2, .animation-container-outer-2 section.type-4.var-a, #to_epochs_section"),
                        u = $("#epochs, .animation-container-outer-2 section.type-6, #to_modern_section"),
                        h = $("#modernity, #section_modern_venus, .animation-container-outer-2 section.type-7.var-0, #section_modern_sculpture, .animation-container-outer-3 section.type-8, #section_modern_photography, section.type-10, section.type-7.var-a, #section_hope_you_enjoyed");
                    setTimeout(function () {
                        TweenLite.set(c, {
                            visibility: "hidden",
                            position: "absolute",
                            top: -999999
                        }), TweenLite.set(u, {
                            visibility: "hidden",
                            position: "absolute",
                            top: -999999
                        }), TweenLite.set(h, {
                            visibility: "hidden",
                            position: "absolute",
                            top: -999999
                        }), $(".main-menu .el-menu ul li a").on("click", function (e) {
                            e.preventDefault(), 0 == $(this).parents("li").index() && (TweenLite.set(l, {
                                visibility: "visible",
                                position: "relative",
                                top: 0
                            }), TweenLite.set(c, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), TweenLite.set(u, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), TweenLite.set(h, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), TweenMax.staggerFromTo($("#intro .el-text-1-row-1-el-text"), 1.2, {
                                opacity: 0,
                                y: 120
                            }, {
                                delay: .6,
                                opacity: 1,
                                y: 0,
                                ease: Power3.easeOut
                            }, .2, "one"), setTimeout(function () {
                                window.scroll(0, $("#section_first").height() - $("header").height())
                            }, 10), setTimeout(function () {
                                a.removeClass("active"), a.eq(0).addClass("active")
                            }, 1400), setTimeout(function () {
                                $("header").addClass("var-black")
                            }, 500)), 1 == $(this).parents("li").index() && (TweenLite.set(l, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), TweenLite.set(c, {
                                visibility: "visible",
                                position: "relative",
                                top: 0
                            }), TweenLite.set(u, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), TweenLite.set(h, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), TweenMax.staggerFromTo($("#myths .el-text-1-row-1-el-text"), 1.2, {
                                opacity: 0,
                                y: 120
                            }, {
                                delay: .6,
                                opacity: 1,
                                y: 0,
                                ease: Power3.easeOut
                            }, .2, "one"), setTimeout(function () {
                                a.removeClass("active"), a.eq(1).addClass("active")
                            }, 1400), setTimeout(function () {
                                $("header").addClass("var-black")
                            }, 500)), 2 == $(this).parents("li").index() && (TweenLite.set(l, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), TweenLite.set(c, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), TweenLite.set(u, {
                                visibility: "visible",
                                position: "relative",
                                top: 0
                            }), TweenLite.set(h, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), TweenMax.staggerFromTo($("#epochs .el-text-1-row-1-el-text"), 1.2, {
                                opacity: 0,
                                y: 120
                            }, {
                                delay: .6,
                                opacity: 1,
                                y: 0,
                                ease: Power3.easeOut
                            }, .2, "one"), setTimeout(function () {
                                a.removeClass("active"), a.eq(2).addClass("active")
                            }, 1400), setTimeout(function () {
                                $("header").addClass("var-black")
                            }, 500)), 3 == $(this).parents("li").index() && (TweenLite.set(l, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), TweenLite.set(c, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), TweenLite.set(u, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), TweenLite.set(h, {
                                visibility: "visible",
                                position: "relative",
                                top: 0
                            }), TweenMax.staggerFromTo($("#modernity .el-text-1-row-1-el-text"), 1.2, {
                                opacity: 0,
                                y: 120
                            }, {
                                delay: .6,
                                opacity: 1,
                                y: 0,
                                ease: Power3.easeOut
                            }, .2, "one"), setTimeout(function () {
                                a.removeClass("active"), a.eq(3).addClass("active")
                            }, 1400), setTimeout(function () {
                                $("header").addClass("var-black")
                            }, 500)), window.scroll(0, 0), i = !1, n.timeScale(1.6), n.reverse(), t.timeScale(1.6), t.reverse(), r.removeClass("active"), $("body").removeClass("hide-scroll")
                        })
                    }, 100), $("header .el-logo, header .el-logo-2").on("click", function () {
                        $("body").css("pointer-events", "none"), TweenLite.fromTo($(".mobile-overlay"), .6, {
                            width: 0,
                            right: 0,
                            left: "initial"
                        }, {
                            width: "100%",
                            right: 0,
                            left: "initial",
                            ease: Power2.easeInOut
                        }), $("header").addClass("var-black"), setTimeout(function () {
                            TweenLite.set(l, {
                                visibility: "visible",
                                position: "relative",
                                top: 0
                            }), TweenLite.set(c, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), TweenLite.set(u, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), TweenLite.set(h, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), a.removeClass("active"), a.eq(0).addClass("active"), setTimeout(function () {
                                $("header").removeClass("var-black")
                            }, 500), window.scroll(0, 0), $("body").css("pointer-events", "all"), TweenLite.fromTo($(".mobile-overlay"), .6, {
                                width: "100%",
                                right: "initial",
                                left: 0
                            }, {
                                width: 0,
                                right: "initial",
                                left: 0,
                                ease: Power2.easeInOut
                            })
                        }, 600)
                    }), $("#to_myths_section").on("click", function () {
                        $("body").css("pointer-events", "none"), TweenLite.fromTo($(".mobile-overlay"), .6, {
                            width: 0,
                            right: 0,
                            left: "initial"
                        }, {
                            width: "100%",
                            right: 0,
                            left: "initial",
                            ease: Power2.easeInOut
                        }), $("header").addClass("var-black"), TweenMax.staggerFromTo($("#myths .el-text-1-row-1-el-text"), 1.2, {
                            opacity: 0,
                            y: 120
                        }, {
                            delay: 1,
                            opacity: 1,
                            y: 0,
                            ease: Power3.easeOut
                        }, .2, "one"), setTimeout(function () {
                            TweenLite.set(l, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), TweenLite.set(c, {
                                visibility: "visible",
                                position: "relative",
                                top: 0
                            }), TweenLite.set(u, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), TweenLite.set(h, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), a.removeClass("active"), a.eq(1).addClass("active"), setTimeout(function () {
                                $("header").addClass("var-black")
                            }, 100), window.scroll(0, 0), $("body").css("pointer-events", "all"), TweenLite.fromTo($(".mobile-overlay"), .6, {
                                width: "100%",
                                right: "initial",
                                left: 0
                            }, {
                                width: 0,
                                right: "initial",
                                left: 0,
                                ease: Power2.easeInOut
                            })
                        }, 600)
                    }), $("#to_epochs_section").on("click", function () {
                        $("body").css("pointer-events", "none"), TweenLite.fromTo($(".mobile-overlay"), .6, {
                            width: 0,
                            right: 0,
                            left: "initial"
                        }, {
                            width: "100%",
                            right: 0,
                            left: "initial",
                            ease: Power2.easeInOut
                        }), $("header").addClass("var-black"), TweenMax.staggerFromTo($("#epochs .el-text-1-row-1-el-text"), 1.2, {
                            opacity: 0,
                            y: 120
                        }, {
                            delay: 1,
                            opacity: 1,
                            y: 0,
                            ease: Power3.easeOut
                        }, .2, "one"), setTimeout(function () {
                            TweenLite.set(l, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), TweenLite.set(c, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), TweenLite.set(u, {
                                visibility: "visible",
                                position: "relative",
                                top: 0
                            }), TweenLite.set(h, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), a.removeClass("active"), a.eq(2).addClass("active"), setTimeout(function () {
                                $("header").addClass("var-black")
                            }, 100), window.scroll(0, 0), $("body").css("pointer-events", "all"), TweenLite.fromTo($(".mobile-overlay"), .6, {
                                width: "100%",
                                right: "initial",
                                left: 0
                            }, {
                                width: 0,
                                right: "initial",
                                left: 0,
                                ease: Power2.easeInOut
                            })
                        }, 600)
                    }), $("#to_modern_section").on("click", function () {
                        $("body").css("pointer-events", "none"), TweenLite.fromTo($(".mobile-overlay"), .6, {
                            width: 0,
                            right: 0,
                            left: "initial"
                        }, {
                            width: "100%",
                            right: 0,
                            left: "initial",
                            ease: Power2.easeInOut
                        }), $("header").addClass("var-black"), TweenMax.staggerFromTo($("#modernity .el-text-mobile-0 .el-text-1-row-1-el-text"), 1.2, {
                            opacity: 0,
                            y: 120
                        }, {
                            delay: 1,
                            opacity: 1,
                            y: 0,
                            ease: Power3.easeOut
                        }, .2, "one"), setTimeout(function () {
                            TweenLite.set(l, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), TweenLite.set(c, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), TweenLite.set(u, {
                                visibility: "hidden",
                                position: "absolute",
                                top: -999999
                            }), TweenLite.set(h, {
                                visibility: "visible",
                                position: "relative",
                                top: 0
                            }), a.removeClass("active"), a.eq(3).addClass("active"), setTimeout(function () {
                                $("header").addClass("var-black")
                            }, 100), window.scroll(0, 0), $("body").css("pointer-events", "all"), TweenLite.fromTo($(".mobile-overlay"), .6, {
                                width: "100%",
                                right: "initial",
                                left: 0
                            }, {
                                width: 0,
                                right: "initial",
                                left: 0,
                                ease: Power2.easeInOut
                            })
                        }, 600)
                    })
                }
            }
        },
        common: function () {
            shareon(), $(".lazy").Lazy({
                effect: 'fadeIn',
                effectTime: 200
            })
        },
        animation: function () {
            if ($(window).outerWidth() >= 1280 && $("body")[0]) {
                var e = localStorage.getItem("windowPositionY");
                window.scroll(0, 0);
                var t = setInterval(function () {
                    window.scroll(0, 0)
                }, 10);

                function i() {
                    clearTimeout(n), n = setTimeout(function () {
                        TweenLite.to(".reload-overlay", .5, {
                            opacity: 1,
                            display: "block",
                            ease: Power2.easeOut
                        }), "true" == localStorage.getItem("loadFinish") && localStorage.setItem("windowPositionY", window.scrollY), setTimeout(function () {
                            document.location.reload()
                        }, 500)
                    }, 500)
                }
                setTimeout(function () {
                    clearInterval(t), window.scroll(0, 0),
                        function () {
                            var e = new ScrollMagic.Controller,
                                t = $(".main-menu .el-menu ul li");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_1",
                                triggerHook: "onLeave",
                                offset: 5
                            }).on("enter leave", function (e) {
                                setTimeout(function () {
                                    "enter" == e.type ? (t.removeClass("active"), t.eq(0).addClass("active")) : t.removeClass("active")
                                }, 1500)
                            }).addTo(e), new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: offset($("#myths")[0]).left * factor
                            }).on("enter leave", function (e) {
                                setTimeout(function () {
                                    "enter" == e.type ? (t.removeClass("active"), t.eq(1).addClass("active")) : (t.removeClass("active"), t.eq(0).addClass("active"))
                                }, 1500)
                            }).addTo(e), new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: offset($("#epochs")[0]).left * factor
                            }).on("enter leave", function (e) {
                                setTimeout(function () {
                                    "enter" == e.type ? (t.removeClass("active"), t.eq(2).addClass("active")) : (t.removeClass("active"), t.eq(1).addClass("active"))
                                }, 1500)
                            }).addTo(e), new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: offset($("#modernity")[0]).left * factor
                            }).on("enter leave", function (e) {
                                setTimeout(function () {
                                    "enter" == e.type ? (t.removeClass("active"), t.eq(3).addClass("active")) : (t.removeClass("active"), t.eq(2).addClass("active"))
                                }, 1500)
                            }).addTo(e);
                            var i = $("header"),
                                n = new ScrollMagic.Controller;
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_1",
                                triggerHook: "onLeave",
                                offset: 5,
                                duration: ($("#animContainer_1 section.type-2").outerWidth(!0) + $("#animContainer_1 section.type-3").width() - i.width()) * factor
                            }).on("enter leave", function (e) {
                                "enter" == e.type ? $("header").addClass("var-black") : $("header").removeClass("var-black")
                            }).addTo(n), new ScrollMagic.Scene({
                                triggerElement: "#animContainer_1",
                                triggerHook: "onLeave",
                                offset: $("#animContainer_1 section.type-4").position().left * factor,
                                duration: ($("#animContainer_1 section.type-4").width() + $(window).outerWidth()) * factor
                            }).addTo(n), new ScrollMagic.Scene({
                                triggerElement: "#animContainer_1",
                                triggerHook: "onLeave",
                                offset: $("#animContainer_1 section.type-5").position().left * factor,
                                duration: $("#animContainer_1 #section_symbols").outerHeight() - $(window).height() + ($(window).outerWidth() + $("#myths").outerWidth()) * factor
                            }).setClassToggle("header", "var-black").addTo(n), new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: $("#animContainer_2 #section_adonis_2").position().left * factor,
                                duration: $("#animContainer_2 #section_adonis_2").outerWidth() * factor
                            }).setClassToggle("header", "var-black").addTo(n), new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: $("#animContainer_2 #section_mars_2").position().left * factor,
                                duration: $("#animContainer_2 #section_mars_2").outerWidth() * factor
                            }).setClassToggle("header", "var-black").addTo(n), new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: offset($("#animContainer_2 #epochs")[0]).left * factor,
                                duration: $("#animContainer_2 #epochs").outerWidth() * factor
                            }).on("enter leave", function (e) {
                                "enter" == e.type ? $("header").addClass("var-black") : $("header").removeClass("var-black")
                            }).addTo(n), new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: offset($("#animContainer_2 #modernity")[0]).left * factor,
                                duration: $("#animContainer_2 #modernity").outerWidth() * factor
                            }).setClassToggle("header", "var-black").addTo(n), new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: offset($("#animContainer_2 section.type-7")[0]).left * factor,
                                duration: $("#animContainer_2 section.type-7").outerWidth() * factor
                            }).setClassToggle("header", "var-black").addTo(n), new ScrollMagic.Scene({
                                triggerElement: "#section_hope_you_enjoyed",
                                triggerHook: "onLeave",
                                offset: -5
                            }).on("enter leave", function (e) {
                                "enter" == e.type ? $("header").removeClass("var-black") : $("header").addClass("var-black")
                            }).addTo(n);
                            var r = new ScrollMagic.Controller,
                                o = $("#animContainer_1 .horizontal-scroll-container"),
                                s = o.find("section");
                            sectionList_1_TotalWidth = 0, s.each(function () {
                                $(this).hasClass("section-intro-dummy") || $(this).hasClass("type-5") || $(this).hasClass("type-11") || (sectionList_1_TotalWidth += $(this).outerWidth(!0))
                            });
                            var a = (new TimelineMax).to(o.find("section:not(#section_symbols)"), 1, {
                                x: -sectionList_1_TotalWidth,
                                ease: Power0.easeNone
                            }, "one").to(o.find("#section_symbols"), 1, {
                                marginLeft: -sectionList_1_TotalWidth,
                                ease: Power0.easeNone
                            }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_1",
                                triggerHook: "onLeave",
                                duration: sectionList_1_TotalWidth * factor
                            }).setPin("#animContainer_1").setTween(a).addTo(r);
                            var l = new ScrollMagic.Controller,
                                c = new TimelineMax({
                                    onUpdate: function () {
                                        $("#section_first .el-bg-1").offset().left - $("header").width() < 0 ? $("header").addClass("var-black") : $("header").removeClass("var-black")
                                    }
                                }).fromTo($("#animContainer_1 section.type-1"), .01, {
                                    zIndex: "99"
                                }, {
                                    zIndex: "-1"
                                }, "one").from($("#animContainer_1 section.type-2"), .01, {
                                    pointerEvents: "none"
                                }, "one").from($("#animContainer_1 section.type-1 .el-bg-1"), 1.2, {
                                    width: 0,
                                    ease: Power2.easeInOut
                                }, "one").from($("#animContainer_1 section.type-2 .g__background"), 1.2, {
                                    width: 0,
                                    ease: Power2.easeInOut
                                }, "one").from($("#animContainer_1 section.type-2 .content"), .8, {
                                    delay: .4,
                                    opacity: 0,
                                    ease: Power2.easeInOut
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_1",
                                triggerHook: "onLeave",
                                offset: 5
                            }).setTween(c).addTo(l);
                            var u = new ScrollMagic.Controller,
                                h = (new TimelineMax).staggerFromTo($("#animContainer_1 section.type-2 .el-text-1-row-1-el-text"), 1.2, {
                                    opacity: 0,
                                    y: 120
                                }, {
                                    delay: .6,
                                    opacity: 1,
                                    y: 0,
                                    ease: Power3.easeOut
                                }, .2, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_1",
                                triggerHook: "onLeave",
                                offset: 5
                            }).reverse(!1).setTween(h).addTo(u);
                            var f = $("#animContainer_1 section.type-2 .item"),
                                d = new ScrollMagic.Controller;
                            f.each(function () {
                                var e = $(this),
                                    t = TweenMax.from($(this), .8, {
                                        opacity: 0,
                                        y: 16,
                                        ease: Power2.easeOut
                                    }, "one");
                                new ScrollMagic.Scene({
                                    triggerElement: "#animContainer_1",
                                    triggerHook: "onLeave",
                                    offset: (offset(e[0]).left - .7 * $(window).outerWidth()) * factor
                                }).reverse(!1).setTween(t).addTo(d)
                            });
                            var p = new ScrollMagic.Controller,
                                m = (new TimelineMax).from($("#animContainer_1 section.type-2 .el-image-object img"), 2.6, {
                                    scale: 1.1,
                                    ease: Power2.easeOut
                                }, "one").to($("#animContainer_1 section.type-2 .el-image-overlay"), 1.6, {
                                    width: 0,
                                    ease: Power2.easeOut
                                }, "one").from($("#animContainer_1 section.type-2 .el-text-2"), .8, {
                                    delay: 1.2,
                                    opacity: 0,
                                    y: 16,
                                    ease: Power2.easeOut
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_1",
                                triggerHook: "onEnter",
                                offset: (offset($("#animContainer_1 section.type-2 .el-image")[0]).left + $("#animContainer_1 section.type-2 .el-image").width() + 200 - .8 * $(window).outerWidth()) * factor
                            }).reverse(!1).setTween(m).addTo(p);
                            var g = new ScrollMagic.Controller,
                                _ = (new TimelineMax).fromTo($("#animContainer_1 section.type-3 .el-image .g__image img"), 1, {
                                    x: -400
                                }, {
                                    x: 400,
                                    ease: Power0.easeNone
                                }, "one").fromTo($("#animContainer_1 section.type-3 .el-parallax-image-item-1"), 1, {
                                    x: -480
                                }, {
                                    x: 480,
                                    ease: Power0.easeNone
                                }, "one").fromTo($("#animContainer_1 section.type-3 .el-parallax-image-item-2"), 1, {
                                    x: 1.1 * -400
                                }, {
                                    x: 400 * 1.1,
                                    ease: Power0.easeNone
                                }, "one").fromTo($("#animContainer_1 section.type-3 .el-parallax-image-item-3"), 1, {
                                    x: -420
                                }, {
                                    x: 420,
                                    ease: Power0.easeNone
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_1",
                                triggerHook: "onLeave",
                                offset: ($("#animContainer_1 section.type-3").position().left - $(window).outerWidth()) * factor,
                                duration: ($("#animContainer_1 section.type-3").width() + $(window).outerWidth() - $("#animContainer_1 section.type-3 .block-item-2").width()) * factor
                            }).setTween(_).addTo(g);
                            var f = $("#animContainer_1 section.type-4 .card-item"),
                                v = new ScrollMagic.Controller;
                            f.each(function () {
                                var e = $(this);
                                if (e.parents(".card-list-1-outer")[0]) var t = TweenMax.from(e, 1, {
                                    x: $("#animContainer_1 section.type-4").width() / 5,
                                    rotation: 0,
                                    ease: Power0.easeNone
                                }, "one");
                                else var t = TweenMax.from(e, 1, {
                                    x: $("#animContainer_1 section.type-4").width() / 10,
                                    rotation: 0,
                                    ease: Power0.easeNone
                                }, "one");
                                new ScrollMagic.Scene({
                                    triggerElement: "#animContainer_1",
                                    triggerHook: "onEnter",
                                    offset: (offset(e[0]).left - .8 * $(window).outerWidth()) * factor,
                                    duration: $(window).outerWidth() * factor
                                }).setTween(t).addTo(v);
                                var i = TweenMax.fromTo(e.find(".card-item-inner"), 1, {
                                    opacity: 0
                                }, {
                                    opacity: 1,
                                    ease: Power0.easeNone
                                }, "one");
                                new ScrollMagic.Scene({
                                    triggerElement: "#animContainer_1",
                                    triggerHook: "onEnter",
                                    offset: (offset(e[0]).left - .8 * $(window).outerWidth() + .1 * $(window).outerWidth()) * factor,
                                    duration: .4 * $(window).outerWidth() * factor
                                }).setTween(i).addTo(v)
                            });
                            var y = new ScrollMagic.Controller,
                                w = (new TimelineMax).fromTo($("#animContainer_1 section.type-5 .block-item-1 .el-image .g__image img"), 1, {
                                    y: -40
                                }, {
                                    y: 40,
                                    ease: Power0.easeNone
                                });
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_1 section.type-5 .block-item-1 .el-image",
                                triggerHook: "onEnter",
                                duration: $(window).height() + $("#animContainer_1 section.type-5 .block-item-1 .el-image").height()
                            }).setTween(w).addTo(y);
                            var b = new ScrollMagic.Controller,
                                x = (new TimelineMax).fromTo($("#animContainer_1 section.type-5 .block-item-2 .el-image .g__image img"), 1, {
                                    y: -40
                                }, {
                                    y: 40,
                                    ease: Power0.easeNone
                                });
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_1 section.type-5 .block-item-2 .el-image",
                                triggerHook: "onEnter",
                                duration: $(window).height() + $("#animContainer_1 section.type-5 .block-item-2 .el-image").height()
                            }).setTween(x).addTo(b);
                            var T = new ScrollMagic.Controller,
                                C = (new TimelineMax).fromTo($("#animContainer_1 section.type-5 .block-item-3 .el-image .g__image img"), 1, {
                                    y: -40
                                }, {
                                    y: 40,
                                    ease: Power0.easeNone
                                });
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_1 section.type-5 .block-item-3 .el-image",
                                triggerHook: "onEnter",
                                duration: $(window).height() + $("#animContainer_1 section.type-5 .block-item-3 .el-image").height()
                            }).setTween(C).addTo(T);
                            var S = new ScrollMagic.Controller,
                                k = $("#animContainer_2 .horizontal-scroll-container"),
                                P = k.find("section");
                            sectionList_2_TotalWidth = 0, P.each(function () {
                                $(this).hasClass("section-intro-dummy") || $(this).hasClass("type-5") || $(this).hasClass("type-11") || (sectionList_2_TotalWidth += $(this).outerWidth(!0))
                            });
                            var O = (new TimelineMax).to(k.find("section:not(#section_modern_sculpture)"), 1, {
                                x: -sectionList_2_TotalWidth,
                                ease: Power0.easeNone
                            }, "one").to(k.find("#section_modern_sculpture"), 1, {
                                marginLeft: -sectionList_2_TotalWidth,
                                ease: Power0.easeNone
                            }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                duration: sectionList_2_TotalWidth * factor
                            }).setPin("#animContainer_2").setTween(O).addTo(S);
                            var E = new ScrollMagic.Controller,
                                M = new TimelineMax;
                            M.fromTo($("#animContainer_1 section.type-5"), 1e-6, {
                                opacity: 1,
                                pointerEvents: "all"
                            }, {
                                opacity: 0,
                                pointerEvents: "none"
                            }, "one").fromTo($("#animContainer_2 section.type-5.var-dummy"), 1e-6, {
                                opacity: 0,
                                pointerEvents: "none"
                            }, {
                                opacity: 1,
                                pointerEvents: "all"
                            }, "one"), new ScrollMagic.Scene({
                                triggerElement: "#animContainer_1 section.type-5",
                                triggerHook: "onLeave",
                                offset: $("#animContainer_1 section.type-5").height() - $(window).height()
                            }).setTween(M).addTo(E);
                            var A = new ScrollMagic.Controller,
                                D = (new TimelineMax).from($("#animContainer_2 section.type-1#section_mother_of_rome").find(".el-text-1-row-2"), 1, {
                                    x: 0,
                                    ease: Power1.easeInOut
                                }, "one").from($("#animContainer_2 section.type-1#section_mother_of_rome").find(".el-text-1-row-3"), 1, {
                                    x: 0,
                                    ease: Power1.easeInOut
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: ($("#animContainer_2 section.type-1#section_mother_of_rome").position().left - $(window).outerWidth() / 1.6) * factor,
                                duration: 1.4 * $(window).outerWidth()
                            }).setTween(D).addTo(A);
                            var L = new ScrollMagic.Controller,
                                R = (new TimelineMax).from($("#animContainer_2 section.type-1#section_mother_of_rome").find(".centered-text-block .el-line"), 1.6, {
                                    width: 0,
                                    ease: Power3.easeOut
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: ($("#animContainer_2 section.type-1#section_mother_of_rome").position().left - $(window).outerWidth() / 2.8) * factor
                            }).reverse(!1).setTween(R).addTo(L);
                            var j = new ScrollMagic.Controller,
                                I = (new TimelineMax).fromTo($("#animContainer_2 section.type-1#section_mother_of_rome"), .01, {
                                    zIndex: "99"
                                }, {
                                    zIndex: "-1"
                                }, "one").from($("#animContainer_2 section.type-2#myths"), .01, {
                                    pointerEvents: "none"
                                }, "one").from($("#animContainer_2 section.type-1#section_mother_of_rome .el-bg-1"), 1.2, {
                                    width: 0,
                                    ease: Power2.easeInOut
                                }, "one").from($("#animContainer_2 section.type-2#myths .content"), .8, {
                                    delay: .4,
                                    opacity: 0,
                                    ease: Power2.easeInOut
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: offset($("section.type-2#myths")[0]).left * factor
                            }).setTween(I).addTo(j);
                            var F = new ScrollMagic.Controller,
                                N = (new TimelineMax).staggerFromTo($("#animContainer_2 section.type-2#myths .el-text-1-row-1-el-text"), 1.2, {
                                    opacity: 0,
                                    y: 120
                                }, {
                                    delay: .6,
                                    opacity: 1,
                                    y: 0,
                                    ease: Power3.easeOut
                                }, .2, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: offset($("section.type-2#myths")[0]).left * factor
                            }).reverse(!1).setTween(N).addTo(F);
                            var f = $("#animContainer_2 section.type-2#myths .item"),
                                z = new ScrollMagic.Controller;
                            f.each(function () {
                                var e = $(this),
                                    t = TweenMax.from($(this), .8, {
                                        opacity: 0,
                                        y: 16,
                                        ease: Power2.easeOut
                                    }, "one");
                                new ScrollMagic.Scene({
                                    triggerElement: "#animContainer_2",
                                    triggerHook: "onLeave",
                                    offset: (offset(e[0]).left - .7 * $(window).outerWidth()) * factor
                                }).reverse(!1).setTween(t).addTo(z)
                            });
                            var H = new ScrollMagic.Controller,
                                B = (new TimelineMax).from($("#animContainer_2 section.type-2#myths .el-image-object img"), 2.6, {
                                    scale: 1.1,
                                    ease: Power2.easeOut
                                }, "one").to($("#animContainer_2 section.type-2#myths .el-image-overlay"), 1.6, {
                                    width: 0,
                                    ease: Power2.easeOut
                                }, "one").from($("#animContainer_2 section.type-2#myths .el-text-2"), .8, {
                                    delay: 1.2,
                                    opacity: 0,
                                    y: 16,
                                    ease: Power2.easeOut
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onEnter",
                                offset: (offset($("#animContainer_2 section.type-2#myths .el-image")[0]).left + $("#animContainer_2 section.type-2#myths .el-image").width() - .8 * $(window).outerWidth()) * factor
                            }).reverse(!1).setTween(B).addTo(H);
                            var q = new ScrollMagic.Controller,
                                W = (new TimelineMax).from($("#animContainer_2 section.type-1#section_adonis").find(".el-text-1-row-1"), 2.2, {
                                    x: 0,
                                    ease: Power1.easeInOut
                                }, "one").from($("#animContainer_2 section.type-1#section_adonis").find(".el-text-1-row-2"), 2.2, {
                                    x: 0,
                                    ease: Power1.easeInOut
                                }, "one").from($("#animContainer_2 section.type-1#section_adonis").find(".el-text-1-row-3"), 2.2, {
                                    x: 0,
                                    ease: Power1.easeInOut
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: ($("#animContainer_2 section.type-1#section_adonis").position().left - $(window).outerWidth() / 1.6) * factor,
                                duration: 1.4 * $(window).outerWidth()
                            }).setTween(W).addTo(q);
                            var X = new ScrollMagic.Controller,
                                Y = (new TimelineMax).fromTo($("#animContainer_2 section.type-3#section_adonis_2 .el-image .g__image img"), 1, {
                                    x: -400
                                }, {
                                    x: 0,
                                    ease: Power0.easeNone
                                }, "one").fromTo($("#animContainer_2 section.type-3#section_adonis_2 .el-parallax-image-item-1"), 1, {
                                    x: -560
                                }, {
                                    x: 0,
                                    ease: Power0.easeNone
                                }, "one").fromTo($("#animContainer_2 section.type-3#section_adonis_2 .el-parallax-image-item-2"), 1, {
                                    x: -520
                                }, {
                                    x: 0,
                                    ease: Power0.easeNone
                                }, "one").fromTo($("#animContainer_2 section.type-3#section_adonis_2 .el-parallax-image-item-3"), 1, {
                                    x: -480
                                }, {
                                    x: 0,
                                    ease: Power0.easeNone
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: (offset($("#animContainer_2 section.type-3#section_adonis_2 .block-item-1")[0]).left - $(window).outerWidth()) * factor,
                                duration: 1 * $(window).outerWidth()
                            }).setTween(Y).addTo(X);
                            var U = new ScrollMagic.Controller,
                                V = 850,
                                G = 370,
                                Q = 360;
                            $(window).outerWidth() < 1680 && (V = 650);
                            $(window).outerWidth() <= 1366 && (V = 665, G = 300, Q = 280);
                            var K = (new TimelineMax).to($("#animContainer_2 section.type-3#section_adonis_2 .el-image"), 1, {
                                width: G,
                                height: Q,
                                x: 2 * V,
                                y: $("section.type-3#section_adonis_2 .el-item-image").position().top,
                                ease: Power1.easeInOut
                            }, "one").from($("#animContainer_2 section.type-3#section_adonis_2 .item:nth-child(1)"), 1, {
                                opacity: 0,
                                ease: Power0.easeNone
                            }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: offset($("#animContainer_2 section.type-3#section_adonis_2 .block-item-1")[0]).left * factor,
                                duration: .5 * $(window).outerWidth() * factor
                            }).setTween(K).addTo(U);
                            var Z = new ScrollMagic.Controller,
                                J = (new TimelineMax).staggerFrom($("#animContainer_2 section.type-3#section_adonis_2 .item:nth-child(1)").find(".el-item-text-1, .el-item-text-2"), 1.6, {
                                    opacity: 0,
                                    ease: Power3.easeOut
                                }, .08, "one").to($("#animContainer_2 section.type-3#section_adonis_2 .el-image-inner"), 2.6, {
                                    scale: 1,
                                    ease: Power2.easeOut
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: (offset($("#animContainer_2 section.type-3#section_adonis_2 .block-item-1")[0]).left + .5 * $(window).outerWidth()) * factor
                            }).reverse(!1).setTween(J).addTo(Z);
                            var f = $("#animContainer_2 section.type-3#section_adonis_2 .item:not(:nth-child(1))"),
                                ee = new ScrollMagic.Controller;
                            f.each(function () {
                                var e = $(this),
                                    t = new TimelineMax;
                                t.staggerFrom(e.find(".el-item-text-1, .el-item-text-2"), 1.6, {
                                    opacity: 0,
                                    ease: Power3.easeOut
                                }, .08, "one").from(e.find(".el-item-image .g__image"), 1.3, {
                                    opacity: 0,
                                    ease: Power2.easeOut
                                }, "one").from(e.find(".el-item-image img"), 2.6, {
                                    scale: 1.22,
                                    ease: Power2.easeOut
                                }, "one");
                                new ScrollMagic.Scene({
                                    triggerElement: "#animContainer_2",
                                    triggerHook: "onLeave",
                                    offset: (offset(e[0]).left - .7 * $(window).outerWidth()) * factor
                                }).reverse(!1).setTween(t).addTo(ee)
                            });
                            var te = new ScrollMagic.Controller,
                                ie = (new TimelineMax).from($("#animContainer_2 section.type-1#section_mars").find(".el-text-1-row-1"), 2.2, {
                                    x: 0,
                                    ease: Power1.easeInOut
                                }, "one").from($("#animContainer_2 section.type-1#section_mars").find(".el-text-1-row-2"), 2.2, {
                                    x: 0,
                                    ease: Power1.easeInOut
                                }, "one").from($("#animContainer_2 section.type-1#section_mars").find(".el-text-1-row-3"), 2.2, {
                                    x: 0,
                                    ease: Power1.easeInOut
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: ($("#animContainer_2 section.type-1#section_mars").position().left - $(window).outerWidth() / 1.6) * factor,
                                duration: 1.4 * $(window).outerWidth()
                            }).setTween(ie).addTo(te);
                            var ne = new ScrollMagic.Controller,
                                re = (new TimelineMax).fromTo($("#animContainer_2 section.type-3#section_mars_2 .el-image .g__image img"), 1, {
                                    x: -400
                                }, {
                                    x: 0,
                                    ease: Power0.easeNone
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: (offset($("#animContainer_2 section.type-3#section_mars_2 .block-item-1")[0]).left - $(window).outerWidth()) * factor,
                                duration: 1 * $(window).outerWidth()
                            }).setTween(re).addTo(ne);
                            var oe = new ScrollMagic.Controller,
                                V = 850,
                                G = 370,
                                Q = 360;
                            $(window).outerWidth() < 1680 && (V = 650);
                            $(window).outerWidth() <= 1366 && (V = 665, G = 300, Q = 280);
                            var se = (new TimelineMax).to($("#animContainer_2 section.type-3#section_mars_2 .el-image"), 1, {
                                width: G,
                                height: Q,
                                x: 2 * V,
                                y: $("section.type-3#section_mars_2 .el-item-image").position().top,
                                ease: Power1.easeInOut
                            }, "one").from($("#animContainer_2 section.type-3#section_mars_2 .item:nth-child(1)"), 1, {
                                opacity: 0,
                                ease: Power0.easeNone
                            }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: offset($("#animContainer_2 section.type-3#section_mars_2 .block-item-1")[0]).left * factor,
                                duration: .5 * $(window).outerWidth() * factor
                            }).setTween(se).addTo(oe);
                            var ae = new ScrollMagic.Controller,
                                le = (new TimelineMax).staggerFrom($("#animContainer_2 section.type-3#section_mars_2 .item:nth-child(1)").find(".el-item-text-1, .el-item-text-2"), 1.6, {
                                    opacity: 0,
                                    ease: Power3.easeOut
                                }, .08, "one").to($("#animContainer_2 section.type-3#section_mars_2 .el-image-inner"), 2.6, {
                                    scale: 1,
                                    ease: Power2.easeOut
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: (offset($("#animContainer_2 section.type-3#section_mars_2 .block-item-1")[0]).left + .5 * $(window).outerWidth()) * factor
                            }).reverse(!1).setTween(le).addTo(ae);
                            var f = $("#animContainer_2 section.type-3#section_mars_2 .item:not(:nth-child(1))"),
                                ce = new ScrollMagic.Controller;
                            f.each(function () {
                                var e = $(this),
                                    t = new TimelineMax;
                                t.staggerFrom(e.find(".el-item-text-1, .el-item-text-2"), 1.6, {
                                    opacity: 0,
                                    ease: Power3.easeOut
                                }, .08, "one").from(e.find(".el-item-image .g__image"), 1.3, {
                                    opacity: 0,
                                    ease: Power2.easeOut
                                }, "one").from(e.find(".el-item-image img"), 2.6, {
                                    scale: 1.22,
                                    ease: Power2.easeOut
                                }, "one");
                                new ScrollMagic.Scene({
                                    triggerElement: "#animContainer_2",
                                    triggerHook: "onLeave",
                                    offset: (offset(e[0]).left - .7 * $(window).outerWidth()) * factor
                                }).reverse(!1).setTween(t).addTo(ce)
                            });
                            var f = $("#animContainer_2 section.type-4 .card-item"),
                                ue = new ScrollMagic.Controller;
                            f.each(function () {
                                var e = $(this);
                                if (e.parents(".card-list-1-outer")[0]) var t = TweenMax.from(e, 1, {
                                    x: $("#animContainer_2 section.type-4").width() / 5,
                                    rotation: 0,
                                    ease: Power0.easeNone
                                }, "one");
                                else var t = TweenMax.from(e, 1, {
                                    x: $("#animContainer_2 section.type-4").width() / 10,
                                    rotation: 0,
                                    ease: Power0.easeNone
                                }, "one");
                                new ScrollMagic.Scene({
                                    triggerElement: "#animContainer_2",
                                    triggerHook: "onEnter",
                                    offset: (offset(e[0]).left - .8 * $(window).outerWidth()) * factor,
                                    duration: $(window).outerWidth() * factor
                                }).setTween(t).addTo(ue);
                                var i = TweenMax.fromTo(e.find(".card-item-inner"), 1, {
                                    opacity: 0
                                }, {
                                    opacity: 1,
                                    ease: Power0.easeNone
                                }, "one");
                                new ScrollMagic.Scene({
                                    triggerElement: "#animContainer_2",
                                    triggerHook: "onEnter",
                                    offset: (offset(e[0]).left - .8 * $(window).outerWidth() + .1 * $(window).outerWidth()) * factor,
                                    duration: .4 * $(window).outerWidth() * factor
                                }).setTween(i).addTo(ue)
                            });
                            var he = new ScrollMagic.Controller,
                                fe = new TimelineMax({
                                    onUpdate: function () {
                                        $("#epochs .el-bg-1").offset().left < 0 ? $("header").addClass("var-black") : $("header").removeClass("var-black")
                                    }
                                }).fromTo($("#animContainer_2 section.type-1#section_mother_of_rome"), .01, {
                                    zIndex: "99"
                                }, {
                                    zIndex: "-1"
                                }, "one").from($("#animContainer_2 section.type-2#epochs"), .01, {
                                    pointerEvents: "none"
                                }, "one").from($("#animContainer_2 section.type-2#epochs .el-bg-1"), 1.2, {
                                    width: 0,
                                    ease: Power2.easeInOut
                                }, "one").from($("#animContainer_2 section.type-2#epochs .content"), .8, {
                                    delay: .4,
                                    opacity: 0,
                                    ease: Power2.easeInOut
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: offset($("section.type-2#epochs")[0]).left * factor
                            }).setTween(fe).addTo(he);
                            var de = new ScrollMagic.Controller,
                                pe = (new TimelineMax).staggerFromTo($("#animContainer_2 section.type-2#epochs .el-text-1-row-1-el-text"), 1.2, {
                                    opacity: 0,
                                    y: 120
                                }, {
                                    delay: .6,
                                    opacity: 1,
                                    y: 0,
                                    ease: Power3.easeOut
                                }, .2, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: offset($("section.type-2#epochs")[0]).left * factor
                            }).reverse(!1).setTween(pe).addTo(de);
                            var f = $("#animContainer_2 section.type-2#epochs .el-text-4, #animContainer_2 section.type-2#epochs .el-text-3-1, #animContainer_2 section.type-2#epochs .el-text-3-2"),
                                me = new ScrollMagic.Controller;
                            f.each(function () {
                                var e = $(this),
                                    t = TweenMax.from($(this), .8, {
                                        opacity: 0,
                                        y: 16,
                                        ease: Power2.easeOut
                                    }, "one");
                                new ScrollMagic.Scene({
                                    triggerElement: "#animContainer_2",
                                    triggerHook: "onLeave",
                                    offset: (offset(e[0]).left - .7 * $(window).outerWidth()) * factor
                                }).reverse(!1).setTween(t).addTo(me)
                            });
                            var ge = new ScrollMagic.Controller,
                                _e = (new TimelineMax).from($("#animContainer_2 section.type-2#epochs .el-image-object img"), 2.6, {
                                    scale: 1.1,
                                    ease: Power2.easeOut
                                }, "one").to($("#animContainer_2 section.type-2#epochs .el-image-overlay"), 1.6, {
                                    width: 0,
                                    ease: Power2.easeOut
                                }, "one").from($("#animContainer_2 section.type-2#epochs .el-text-2"), .8, {
                                    delay: 1.2,
                                    opacity: 0,
                                    y: 16,
                                    ease: Power2.easeOut
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onEnter",
                                offset: (offset($("#animContainer_2 section.type-2#epochs .el-image")[0]).left + $("#animContainer_2 section.type-2#epochs .el-image").width() - .8 * $(window).outerWidth()) * factor
                            }).reverse(!1).setTween(_e).addTo(ge);
                            var ve = new ScrollMagic.Controller,
                                ye = (new TimelineMax).to(k.find("section.type-6 .scroll-bar"), 1, {
                                    x: .85 * $("section.type-6").width(),
                                    ease: Power0.easeNone
                                }, "one").to(k.find("section.type-6 .scroll-bar-handle"), 1, {
                                    x: $("section.type-6 .scroll-bar-body").width() - $("section.type-6 .scroll-bar-handle").width(),
                                    ease: Power0.easeNone
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: offset($("#animContainer_2 section.type-6")[0]).left * factor,
                                duration: .85 * $("section.type-6").width() * factor
                            }).setTween(ye).addTo(ve);
                            var we = new ScrollMagic.Controller,
                                be = (new TimelineMax).from(k.find("section.type-6 .block-item-list"), 1, {
                                    opacity: 0,
                                    x: .1 * $(window).outerWidth() * factor,
                                    ease: Power1.easeInOut
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: ($("#animContainer_2 section.type-6").position().left - $(window).outerWidth() / 1.4) * factor,
                                duration: $(window).outerWidth() / 1.4 * factor
                            }).setTween(be).addTo(we);
                            var f = $("#animContainer_2 section.type-6 .el-image"),
                                xe = new ScrollMagic.Controller;
                            f.each(function () {
                                var e = $(this),
                                    t = (new TimelineMax).fromTo(e.find(".g__image img"), 1, {
                                        x: -40
                                    }, {
                                        x: 40,
                                        ease: Power0.easeNone
                                    }, "one");
                                new ScrollMagic.Scene({
                                    triggerElement: "#animContainer_2",
                                    triggerHook: "onEnter",
                                    offset: (offset(e[0]).left - .6 * $(window).outerWidth()) * factor,
                                    duration: 1.2 * $(window).outerWidth() * factor
                                }).setTween(t).addTo(xe)
                            });
                            var f = $("#animContainer_2 section.type-6 .block-item-type-2-var-a .el-image"),
                                Te = new ScrollMagic.Controller;
                            f.each(function () {
                                var e = $(this),
                                    t = (new TimelineMax).fromTo(e.find(".g__image img"), 1, {
                                        x: -150
                                    }, {
                                        x: 150,
                                        ease: Power0.easeNone
                                    }, "one");
                                new ScrollMagic.Scene({
                                    triggerElement: "#animContainer_2",
                                    triggerHook: "onEnter",
                                    offset: (offset(e[0]).left - .8 * $(window).outerWidth()) * factor,
                                    duration: 2 * $(window).outerWidth() * factor
                                }).setTween(t).addTo(Te)
                            });
                            var f = $("#animContainer_2 section.type-6 .block-item-type-2-var-a .el-image"),
                                Ce = new ScrollMagic.Controller;
                            f.each(function () {
                                var e = $(this),
                                    t = new TimelineMax;
                                t.fromTo(e.find(".g__image"), 2.6, {
                                    scale: 1.16
                                }, {
                                    scale: 1,
                                    ease: Power1.easeInOut
                                }, "one");
                                new ScrollMagic.Scene({
                                    triggerElement: "#animContainer_2",
                                    triggerHook: "onEnter",
                                    offset: (offset(e[0]).left - 1 * $(window).outerWidth()) * factor,
                                    duration: $(window).outerWidth() * factor
                                }).setTween(t).addTo(Ce)
                            });
                            var f = $("#animContainer_2 section.type-6 .block-item-type-1"),
                                Se = new ScrollMagic.Controller;
                            f.each(function () {
                                var e = $(this),
                                    t = new TimelineMax;
                                t.fromTo(e.find(".el-text-1-row-1"), 1, {
                                    x: 100
                                }, {
                                    x: -100,
                                    ease: Power0.easeNone
                                }, "one").fromTo(e.find(".el-text-1-row-2"), 1, {
                                    x: 100
                                }, {
                                    x: -400,
                                    ease: Power0.easeNone
                                }, "one");
                                new ScrollMagic.Scene({
                                    triggerElement: "#animContainer_2",
                                    triggerHook: "onEnter",
                                    offset: (offset(e[0]).left - .8 * $(window).outerWidth()) * factor,
                                    duration: ($(window).outerWidth() + $(this).width()) * factor
                                }).setTween(t).addTo(Se)
                            });
                            var ke = new ScrollMagic.Controller;
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: (offset($("#section_6_title_2")[0]).left - .8 * $(window).outerWidth()) * factor
                            }).on("enter leave", function (e) {
                                "enter" == e.type ? ($("section.type-6").addClass("color-grey"), $("header").addClass("var-black var-black-2")) : ($("section.type-6").removeClass("color-grey"), $("header").removeClass("var-black"), $("header").removeClass("var-black-2"))
                            }).addTo(ke);
                            var Pe = new ScrollMagic.Controller;
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: (offset($("#section_6_title_3")[0]).left - .8 * $(window).outerWidth()) * factor
                            }).on("enter leave", function (e) {
                                "enter" == e.type ? ($("section.type-6").removeClass("color-grey"), $("header").removeClass("var-black"), $("header").removeClass("var-black-2")) : ($("section.type-6").addClass("color-grey"), $("header").addClass("var-black"))
                            }).addTo(Pe);
                            var Oe = new ScrollMagic.Controller,
                                Ee = new TimelineMax({
                                    onUpdate: function () {
                                        $("#modernity .el-bg-1").offset().left < 0 ? $("header").addClass("var-black") : $("header").removeClass("var-black")
                                    }
                                }).from($("#animContainer_2 section.type-2#modernity"), .01, {
                                    pointerEvents: "none"
                                }, "one").from($("#animContainer_2 section.type-2#modernity .el-bg-1"), 1.2, {
                                    width: 0,
                                    ease: Power2.easeInOut
                                }, "one").from($("#animContainer_2 section.type-2#modernity .content"), .8, {
                                    delay: .4,
                                    opacity: 0,
                                    ease: Power2.easeInOut
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: offset($("section.type-2#modernity")[0]).left * factor
                            }).setTween(Ee).addTo(Oe);
                            var Me = new ScrollMagic.Controller,
                                $e = (new TimelineMax).staggerFromTo($("#animContainer_2 section.type-2#modernity .el-text-1-row-1-el-text"), 1.2, {
                                    opacity: 0,
                                    y: 120
                                }, {
                                    delay: .6,
                                    opacity: 1,
                                    y: 0,
                                    ease: Power3.easeOut
                                }, .2, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: offset($("section.type-2#modernity")[0]).left * factor
                            }).reverse(!1).setTween($e).addTo(Me);
                            var f = $("#animContainer_2 section.type-2#modernity .el-text-4, #animContainer_2 section.type-2#modernity .el-text-3-1, #animContainer_2 section.type-2#modernity .el-text-3-2"),
                                Ae = new ScrollMagic.Controller;
                            f.each(function () {
                                var e = $(this),
                                    t = TweenMax.from($(this), .8, {
                                        opacity: 0,
                                        y: 16,
                                        ease: Power2.easeOut
                                    }, "one");
                                new ScrollMagic.Scene({
                                    triggerElement: "#animContainer_2",
                                    triggerHook: "onLeave",
                                    offset: (offset(e[0]).left - .7 * $(window).outerWidth()) * factor
                                }).reverse(!1).setTween(t).addTo(Ae)
                            });
                            var De = new ScrollMagic.Controller,
                                Le = (new TimelineMax).from($("#animContainer_2 section.type-2#modernity .el-image-object img"), 2.6, {
                                    scale: 1.1,
                                    ease: Power2.easeOut
                                }, "one").to($("#animContainer_2 section.type-2#modernity .el-image-overlay"), 1.6, {
                                    width: 0,
                                    ease: Power2.easeOut
                                }, "one").from($("#animContainer_2 section.type-2#modernity .el-text-2"), .8, {
                                    delay: 1.2,
                                    opacity: 0,
                                    y: 16,
                                    ease: Power2.easeOut
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onEnter",
                                offset: (offset($("#animContainer_2 section.type-2#modernity .el-image")[0]).left + $("#animContainer_2 section.type-2#modernity .el-image").width() - .8 * $(window).outerWidth()) * factor
                            }).reverse(!1).setTween(Le).addTo(De);
                            var Re = new ScrollMagic.Controller,
                                je = (new TimelineMax).from($("#animContainer_2 section.type-1#section_modern_venus").find(".el-text-1-row-1"), 2.2, {
                                    x: 0,
                                    ease: Power1.easeInOut
                                }, "one").from($("#animContainer_2 section.type-1#section_modern_venus").find(".el-text-1-row-2"), 2.2, {
                                    x: 0,
                                    ease: Power1.easeInOut
                                }, "one").from($("#animContainer_2 section.type-1#section_modern_venus").find(".el-text-1-row-3"), 2.2, {
                                    x: 0,
                                    ease: Power1.easeInOut
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: ($("#animContainer_2 section.type-1#section_modern_venus").position().left - $(window).outerWidth() / 1.6) * factor,
                                duration: 1.4 * $(window).outerWidth()
                            }).setTween(je).addTo(Re);
                            var Ie = new ScrollMagic.Controller,
                                Fe = (new TimelineMax).from($("#animContainer_2 section.type-1#section_modern_venus").find(".centered-text-block .el-line"), 1.6, {
                                    width: 0,
                                    ease: Power3.easeOut
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2",
                                triggerHook: "onLeave",
                                offset: ($("#animContainer_2 section.type-1#section_modern_venus").position().left - $(window).outerWidth() / 2.8) * factor
                            }).reverse(!1).setTween(Fe).addTo(Ie);
                            var Ne = new ScrollMagic.Controller,
                                ze = $("#animContainer_3 .horizontal-scroll-container"),
                                He = ze.find("section");
                            sectionList_3_TotalWidth = 0, He.each(function () {
                                $(this).hasClass("section-intro-dummy") || $(this).hasClass("type-5") || (sectionList_3_TotalWidth += $(this).outerWidth(!0))
                            }), sectionList_3_TotalWidth += $("#animContainer_3 section.type-5").width();
                            var Be = (new TimelineMax).to(ze.find("section:not(#section_modern_photography)"), 1, {
                                x: -sectionList_3_TotalWidth,
                                ease: Power0.easeNone
                            }, "one").to(ze.find("#section_modern_photography"), 1, {
                                marginLeft: -sectionList_3_TotalWidth,
                                ease: Power0.easeNone
                            }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_3",
                                triggerHook: "onLeave",
                                duration: sectionList_3_TotalWidth * factor
                            }).setPin("#animContainer_3").setTween(Be).addTo(Ne);
                            var qe = new ScrollMagic.Controller,
                                We = (new TimelineMax).fromTo($("#animContainer_2 section.type-5#section_modern_sculpture .block-item-1 .el-image .g__image img"), 1, {
                                    y: -40
                                }, {
                                    y: 40,
                                    ease: Power0.easeNone
                                });
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2 section.type-5#section_modern_sculpture .block-item-1 .el-image",
                                triggerHook: "onEnter",
                                duration: $(window).height() + $("#animContainer_2 section.type-5#section_modern_sculpture .block-item-1 .el-image").height()
                            }).setTween(We).addTo(qe);
                            var qe = new ScrollMagic.Controller;
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2 section.type-5#section_modern_sculpture .block-item-1",
                                triggerHook: "onLeave",
                                offset: .4 * -$(window).height()
                            }).on("enter leave", function (e) {
                                "enter" == e.type ? ($("#section_modern_sculpture").removeClass("color-grey"), $("header").addClass("var-black")) : ($("#section_modern_sculpture").addClass("color-grey"), $("header").removeClass("var-black"))
                            }).addTo(qe);
                            var Xe = new ScrollMagic.Controller,
                                Ye = (new TimelineMax).fromTo($("#animContainer_2 section.type-5#section_modern_sculpture .block-item-1 .el-image .g__image img"), 1, {
                                    y: -40
                                }, {
                                    y: 40,
                                    ease: Power0.easeNone
                                });
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2 section.type-5#section_modern_sculpture .block-item-1 .el-image",
                                triggerHook: "onEnter",
                                duration: $(window).height() + $("#animContainer_2 section.type-5#section_modern_sculpture .block-item-1 .el-image").height()
                            }).setTween(Ye).addTo(Xe);
                            var Ue = new ScrollMagic.Controller,
                                Ve = (new TimelineMax).fromTo($("#animContainer_2 section.type-5#section_modern_sculpture .block-item-2 .el-image .g__image img"), 1, {
                                    y: -40
                                }, {
                                    y: 40,
                                    ease: Power0.easeNone
                                });
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2 section.type-5#section_modern_sculpture .block-item-2 .el-image",
                                triggerHook: "onEnter",
                                duration: $(window).height() + $("#animContainer_2 section.type-5#section_modern_sculpture .block-item-2 .el-image").height()
                            }).setTween(Ve).addTo(Ue);
                            var Ge = new ScrollMagic.Controller,
                                Qe = (new TimelineMax).fromTo($("#animContainer_2 section.type-5#section_modern_sculpture .block-item-3 .el-image .g__image img"), 1, {
                                    y: -40
                                }, {
                                    y: 40,
                                    ease: Power0.easeNone
                                });
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2 section.type-5#section_modern_sculpture .block-item-3 .el-image",
                                triggerHook: "onEnter",
                                duration: $(window).height() + $("#animContainer_2 section.type-5#section_modern_sculpture .block-item-3 .el-image").height()
                            }).setTween(Qe).addTo(Ge);
                            var Ke = new ScrollMagic.Controller,
                                Ze = (new TimelineMax).fromTo($("#animContainer_2 section.type-5#section_modern_sculpture"), 1e-6, {
                                    opacity: 1,
                                    pointerEvents: "all"
                                }, {
                                    opacity: 0,
                                    pointerEvents: "none"
                                }).fromTo($("#animContainer_3 section.type-5.var-dummy"), 1e-6, {
                                    opacity: 0,
                                    pointerEvents: "none"
                                }, {
                                    opacity: 1,
                                    pointerEvents: "all"
                                });
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_2 section.type-5",
                                triggerHook: "onLeave",
                                offset: $("#animContainer_2 section.type-5").height() - $(window).height()
                            }).setTween(Ze).addTo(Ke);
                            var Je = new ScrollMagic.Controller;
                            new ScrollMagic.Scene({
                                triggerElement: "#section_modern_photography .block-item-1",
                                triggerHook: "onLeave",
                                offset: .4 * -$(window).height()
                            }).on("enter leave", function (e) {
                                "enter" == e.type ? ($("#section_modern_photography").addClass("color-grey"), $("header").removeClass("var-black")) : ($("#section_modern_photography").removeClass("color-grey"), $("header").addClass("var-black"))
                            }).addTo(Je);
                            var et = new ScrollMagic.Controller,
                                tt = (new TimelineMax).fromTo($("#animContainer_3 section.type-5 .block-item-1 .el-image .g__image img"), 1, {
                                    y: -40
                                }, {
                                    y: 40,
                                    ease: Power0.easeNone
                                });
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_3 section.type-5 .block-item-1 .el-image",
                                triggerHook: "onEnter",
                                duration: $(window).height() + $("#animContainer_3 section.type-5 .block-item-1 .el-image").height()
                            }).setTween(tt).addTo(et);
                            var it = new ScrollMagic.Controller,
                                nt = (new TimelineMax).fromTo($("#animContainer_3 section.type-5 .block-item-2 .el-image .g__image img"), 1, {
                                    y: -40
                                }, {
                                    y: 40,
                                    ease: Power0.easeNone
                                });
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_3 section.type-5 .block-item-2 .el-image",
                                triggerHook: "onEnter",
                                duration: $(window).height() + $("#animContainer_3 section.type-5 .block-item-2 .el-image").height()
                            }).setTween(nt).addTo(it);
                            var rt = new ScrollMagic.Controller,
                                ot = (new TimelineMax).fromTo($("#animContainer_3 section.type-5 .block-item-3 .el-image .g__image img"), 1, {
                                    y: -40
                                }, {
                                    y: 40,
                                    ease: Power0.easeNone
                                });
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_3 section.type-5 .block-item-3 .el-image",
                                triggerHook: "onEnter",
                                duration: $(window).height() + $("#animContainer_3 section.type-5 .block-item-3 .el-image").height()
                            }).setTween(ot).addTo(rt);
                            var st = new ScrollMagic.Controller,
                                at = (new TimelineMax).fromTo($("#animContainer_3 section.type-8 .el-image .g__image img"), 1, {
                                    x: -400
                                }, {
                                    x: 400,
                                    ease: Power0.easeNone
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "#animContainer_3",
                                triggerHook: "onLeave",
                                offset: (offset($("#animContainer_3 section.type-8")[0]).left - $(window).outerWidth()) * factor,
                                duration: 2 * $(window).outerWidth() * factor
                            }).setTween(at).addTo(st);
                            var lt = new ScrollMagic.Controller,
                                ct = new TimelineMax({
                                    onUpdate: function () {
                                        ct.progress() > .75 ? $("header").addClass("var-black") : $("header").removeClass("var-black")
                                    }
                                }).from($("section.type-10"), .01, {
                                    pointerEvents: "none"
                                }, "one").from($("section.type-10 .g__background"), 1.2, {
                                    width: 0,
                                    ease: Power2.easeInOut
                                }, "one").from($("section.type-10 .content"), .8, {
                                    delay: .6,
                                    opacity: 0,
                                    ease: Power2.easeInOut
                                }, "one").from($("#section_modern_photography .el-bg-1"), 1.2, {
                                    width: 0,
                                    ease: Power2.easeInOut
                                }, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "section.type-10",
                                triggerHook: "onLeave"
                            }).setTween(ct).addTo(lt);
                            var ut = new ScrollMagic.Controller,
                                ht = (new TimelineMax).staggerFromTo($("section.type-10 .el-text-1-row-1-el-text"), 1.2, {
                                    opacity: 0,
                                    y: 120
                                }, {
                                    delay: .6,
                                    opacity: 1,
                                    y: 0,
                                    ease: Power3.easeOut
                                }, .2, "one");
                            new ScrollMagic.Scene({
                                triggerElement: "section.type-10 .el-text-1",
                                triggerHook: "onEnter"
                            }).reverse(!1).setClassToggle("header", "var-black").setTween(ht).addTo(ut)
                        }()
                }, 6600), setTimeout(function () {
                    window.scroll(0, e), localStorage.setItem("windowPositionY", 0)
                }, 100), $(window).resize(function () {
                    $(window).outerWidth() >= 1280 && i()
                }), $hover = $(".hover-reveal"), $menuItem = $(".menu__item"), cssTopCanBeChanged = !0, $menuItem.hover(function () {
                    1 == cssTopCanBeChanged && $(this).find(".hover-reveal").css("top", -window.scrollY), cssTopCanBeChanged = !1
                }, function () {
                    cssTopCanBeChanged = !0
                })
            }
            if ($(window).outerWidth() < 1280 && $("body")[0]) {
                var n;

                function i() {
                    clearTimeout(n), n = setTimeout(function () {
                        TweenLite.to(".loader", .5, {
                            opacity: 1,
                            display: "block",
                            ease: Power2.easeOut
                        }), setTimeout(function () {
                            document.location.reload()
                        }, 500)
                    }, 500)
                }
                window.scroll(0, 0), $(window).resize(function () {
                    $(window).outerWidth() >= 1280 && i()
                }), $("#section_modern_photography").addClass("color-black");
                var r = new ScrollMagic.Controller;
                new ScrollMagic.Scene({
                    triggerElement: "#intro",
                    triggerHook: "onLeave",
                    offset: -60
                }).on("enter leave", function (e) {
                    "enter" == e.type ? $("header").addClass("var-black") : $("header").removeClass("var-black")
                }).addTo(r), new ScrollMagic.Scene({
                    triggerElement: "#animContainer_1 section.type-4",
                    triggerHook: "onLeave",
                    offset: -60
                }).on("enter leave", function (e) {
                    "enter" == e.type ? $("header").removeClass("var-black") : $("header").addClass("var-black")
                }).addTo(r), new ScrollMagic.Scene({
                    triggerElement: "#myths",
                    triggerHook: "onLeave",
                    offset: -65
                }).on("enter leave", function (e) {
                    "enter" == e.type ? $("header").addClass("var-black") : $("header").removeClass("var-black")
                }).addTo(r), new ScrollMagic.Scene({
                    triggerElement: "#section_adonis",
                    triggerHook: "onLeave",
                    offset: -60
                }).on("enter leave", function (e) {
                    "enter" == e.type ? $("header").removeClass("var-black") : $("header").addClass("var-black")
                }).addTo(r), new ScrollMagic.Scene({
                    triggerElement: "#section_adonis_2",
                    triggerHook: "onLeave",
                    offset: -60
                }).on("enter leave", function (e) {
                    "enter" == e.type ? $("header").addClass("var-black") : $("header").removeClass("var-black")
                }).addTo(r), new ScrollMagic.Scene({
                    triggerElement: "#section_mars",
                    triggerHook: "onLeave",
                    offset: -60
                }).on("enter leave", function (e) {
                    "enter" == e.type ? $("header").removeClass("var-black") : $("header").addClass("var-black")
                }).addTo(r), new ScrollMagic.Scene({
                    triggerElement: "#section_mars_2",
                    triggerHook: "onLeave",
                    offset: -60
                }).on("enter leave", function (e) {
                    "enter" == e.type ? $("header").addClass("var-black") : $("header").removeClass("var-black")
                }).addTo(r), new ScrollMagic.Scene({
                    triggerElement: "#animContainer_2 section.type-4",
                    triggerHook: "onLeave",
                    offset: -60
                }).on("enter leave", function (e) {
                    "enter" == e.type ? $("header").removeClass("var-black") : $("header").addClass("var-black")
                }).addTo(r), new ScrollMagic.Scene({
                    triggerElement: "#epochs",
                    triggerHook: "onLeave",
                    offset: -65
                }).on("enter leave", function (e) {
                    "enter" == e.type ? $("header").addClass("var-black") : $("header").removeClass("var-black")
                }).addTo(r), new ScrollMagic.Scene({
                    triggerElement: "#animContainer_2 section.type-6",
                    triggerHook: "onLeave",
                    offset: -60
                }).on("enter leave", function (e) {
                    "enter" == e.type ? $("header").removeClass("var-black") : $("header").addClass("var-black")
                }).addTo(r), new ScrollMagic.Scene({
                    triggerElement: "#section_6_title_2",
                    triggerHook: "onEnter",
                    offset: $(window).height() / 2
                }).on("enter leave", function (e) {
                    "enter" == e.type ? ($("section.type-6").addClass("color-black"), $("header").addClass("var-black")) : ($("section.type-6").removeClass("color-black"), $("header").removeClass("var-black"))
                }).addTo(r), new ScrollMagic.Scene({
                    triggerElement: "#section_6_title_3",
                    triggerHook: "onEnter",
                    offset: $(window).height() / 2
                }).on("enter leave", function (e) {
                    "enter" == e.type ? ($("section.type-6").removeClass("color-black"), $("header").removeClass("var-black")) : ($("section.type-6").addClass("color-black"), $("header").addClass("var-black"))
                }).addTo(r), new ScrollMagic.Scene({
                    triggerElement: "#modernity",
                    triggerHook: "onLeave",
                    offset: -65
                }).on("enter leave", function (e) {
                    "enter" == e.type ? $("header").addClass("var-black") : $("header").removeClass("var-black")
                }).addTo(r), new ScrollMagic.Scene({
                    triggerElement: "#section_modern_venus",
                    triggerHook: "onLeave",
                    offset: -60
                }).on("enter leave", function (e) {
                    "enter" == e.type ? $("header").removeClass("var-black") : $("header").addClass("var-black")
                }).addTo(r), new ScrollMagic.Scene({
                    triggerElement: "section.type-7.var-0",
                    triggerHook: "onLeave",
                    offset: -60
                }).on("enter leave", function (e) {
                    "enter" == e.type ? $("header").addClass("var-black") : $("header").removeClass("var-black")
                }).addTo(r), new ScrollMagic.Scene({
                    triggerElement: "#section_modern_sculpture",
                    triggerHook: "onLeave",
                    offset: -60
                }).on("enter leave", function (e) {
                    "enter" == e.type ? $("header").removeClass("var-black") : $("header").addClass("var-black")
                }).addTo(r), new ScrollMagic.Scene({
                    triggerElement: "#section_modern_photography",
                    triggerHook: "onLeave",
                    offset: -60
                }).on("enter leave", function (e) {
                    "enter" == e.type ? $("header").addClass("var-black") : $("header").removeClass("var-black")
                }).addTo(r), new ScrollMagic.Scene({
                    triggerElement: "#section_hope_you_enjoyed",
                    triggerHook: "onLeave",
                    offset: -60
                }).on("enter leave", function (e) {
                    "enter" == e.type ? $("header").removeClass("var-black") : $("header").addClass("var-black")
                }).addTo(r);
                var o = new ScrollMagic.Controller,
                    s = (new TimelineMax).fromTo($("#animContainer_1 section.type-3 .el-mobile-image .g__image img"), 1, {
                        y: -150
                    }, {
                        y: 150,
                        ease: Power0.easeNone
                    }, "one");
                new ScrollMagic.Scene({
                    triggerElement: "#animContainer_1 section.type-3 .el-mobile-image",
                    triggerHook: "onEnter",
                    duration: $("#animContainer_1 section.type-3 .el-mobile-image .g__image img").height() + $(window).height() - $("header").height()
                }).setTween(s).addTo(o);
                var a = $("#animContainer_1 section.type-4 .card-item"),
                    l = new ScrollMagic.Controller;
                a.each(function () {
                    var e = $(this);
                    if (e.parents(".card-list-1-outer")[0]) var t = TweenMax.from(e, 1, {
                        y: 300,
                        rotation: 0,
                        ease: Power0.easeNone
                    }, "one");
                    else t = TweenMax.from(e, 1, {
                        y: 200,
                        rotation: 0,
                        ease: Power0.easeNone
                    }, "one");
                    new ScrollMagic.Scene({
                        triggerElement: "#animContainer_1 section.type-4",
                        triggerHook: "onEnter",
                        offset: e.position().top - 200,
                        duration: $(window).height() + 200
                    }).setTween(t).addTo(l)
                }), a.each(function () {
                    var e = $(this),
                        t = TweenMax.from(e, 1, {
                            opacity: 0,
                            ease: Power0.easeNone
                        }, "one");
                    new ScrollMagic.Scene({
                        triggerElement: "#animContainer_1 section.type-4",
                        triggerHook: "onEnter",
                        offset: e.position().top - 200,
                        duration: .6 * $(window).height()
                    }).setTween(t).addTo(l)
                });
                a = $("#animContainer_1 section.type-5 .block-item");
                var c = new ScrollMagic.Controller;
                a.each(function () {
                    var e = $(this),
                        t = TweenMax.fromTo($(this).find(".g__image img"), 1, {
                            y: -30
                        }, {
                            y: 30,
                            ease: Power0.easeNone
                        }, "one");
                    new ScrollMagic.Scene({
                        triggerElement: e[0],
                        triggerHook: "onEnter",
                        duration: $(window).height() + e.height()
                    }).setTween(t).addTo(c)
                });
                a = $("#animContainer_2 section.type-4 .card-item"), c = new ScrollMagic.Controller;
                a.each(function () {
                    var e = $(this);
                    if (e.parents(".card-list-1-outer")[0]) var t = TweenMax.from(e, 1, {
                        y: 300,
                        rotation: 0,
                        ease: Power0.easeNone
                    }, "one");
                    else t = TweenMax.from(e, 1, {
                        y: 200,
                        rotation: 0,
                        ease: Power0.easeNone
                    }, "one");
                    new ScrollMagic.Scene({
                        triggerElement: "#animContainer_2 section.type-4",
                        triggerHook: "onEnter",
                        offset: e.position().top - 200,
                        duration: $(window).height() + 200
                    }).setTween(t).addTo(c)
                }), a.each(function () {
                    var e = $(this),
                        t = TweenMax.from(e, 1, {
                            opacity: 0,
                            ease: Power0.easeNone
                        }, "one");
                    new ScrollMagic.Scene({
                        triggerElement: "#animContainer_2 section.type-4",
                        triggerHook: "onEnter",
                        offset: e.position().top - 200,
                        duration: .6 * $(window).height()
                    }).setTween(t).addTo(c)
                });
                a = $("#animContainer_2 section.type-6 .block-item");
                var u = new ScrollMagic.Controller;
                a.each(function () {
                    var e = $(this),
                        t = TweenMax.fromTo($(this).find(".g__image img"), 1, {
                            y: -60
                        }, {
                            y: 30,
                            ease: Power0.easeNone
                        }, "one");
                    new ScrollMagic.Scene({
                        triggerElement: e[0],
                        triggerHook: "onEnter",
                        duration: $(window).height() + e.height()
                    }).setTween(t).addTo(u)
                });
                a = $("#section_modern_sculpture .block-item");
                var h = new ScrollMagic.Controller;
                a.each(function () {
                    var e = $(this),
                        t = TweenMax.fromTo($(this).find(".g__image img"), 1, {
                            y: -60
                        }, {
                            y: 30,
                            ease: Power0.easeNone
                        }, "one");
                    new ScrollMagic.Scene({
                        triggerElement: e[0],
                        triggerHook: "onEnter",
                        duration: $(window).height() + e.height()
                    }).setTween(t).addTo(h)
                });
                var f = new ScrollMagic.Controller,
                    d = (new TimelineMax).fromTo($("section.type-8 .g__image img"), 1, {
                        y: -200
                    }, {
                        y: 200,
                        ease: Power0.easeNone
                    }, "one");
                new ScrollMagic.Scene({
                    triggerElement: "section.type-8",
                    triggerHook: "onEnter",
                    duration: $("section.type-8 .g__image img").height() + $(window).height() - $("header").height()
                }).setTween(d).addTo(f);
                a = $("#section_modern_photography .block-item");
                var p = new ScrollMagic.Controller;
                a.each(function () {
                    var e = $(this),
                        t = TweenMax.fromTo($(this).find(".g__image img"), 1, {
                            y: -60
                        }, {
                            y: 30,
                            ease: Power0.easeNone
                        }, "one");
                    new ScrollMagic.Scene({
                        triggerElement: e[0],
                        triggerHook: "onEnter",
                        duration: $(window).height() + e.height()
                    }).setTween(t).addTo(p)
                });
                l = new ScrollMagic.Controller;
                var m = (new TimelineMax).staggerFromTo($("#animContainer_1 section.type-2 .el-text-1-row-1-el-text"), 1.2, {
                    opacity: 0,
                    y: 120
                }, {
                    delay: .6,
                    opacity: 1,
                    y: 0,
                    ease: Power3.easeOut
                }, .2, "one");
                new ScrollMagic.Scene({
                    triggerElement: "#animContainer_1 section.type-2 .el-text-1",
                    triggerHook: "onEnter",
                    offset: .2 * $(window).height()
                }).setTween(m).addTo(l);
                a = $("section.type-3 .item");
                var g = new ScrollMagic.Controller;
                a.each(function () {
                    var e = $(this),
                        t = new TimelineMax;
                    t.staggerFrom(e.find(".el-item-text-1, .el-item-text-2"), 1.6, {
                        opacity: 0,
                        ease: Power3.easeOut
                    }, .08, "one").from(e.find(".el-item-image .g__image"), 1.3, {
                        opacity: 0,
                        ease: Power2.easeOut
                    }, "one").from(e.find(".el-item-image img"), 2.6, {
                        scale: 1.22,
                        ease: Power2.easeOut
                    }, "one");
                    new ScrollMagic.Scene({
                        triggerElement: e[0],
                        triggerHook: "onEnter",
                        offset: .25 * $(window).height()
                    }).setTween(t).addTo(g)
                });
                var _ = new ScrollMagic.Controller,
                    v = (new TimelineMax).from($("#animContainer_2 section.type-1#section_modern_venus").find(".centered-text-block .el-line"), 1.6, {
                        width: 0,
                        ease: Power3.easeOut
                    }, "one");
                new ScrollMagic.Scene({
                    triggerElement: "#animContainer_2 section.type-1#section_modern_venus .centered-text-block .el-line",
                    triggerHook: "onEnter",
                    offset: .25 * $(window).height()
                }).setTween(v).addTo(_)
            }
        }
    };

function offset(e) {
    var t = e.getBoundingClientRect(),
        i = window.pageXOffset || document.documentElement.scrollLeft,
        n = window.pageYOffset || document.documentElement.scrollTop;
    return {
        top: t.top + n,
        left: t.left + i
    }
}

function customMouseCursor() {
    var e, t, i, n;
    e = document.getElementById("custom_cursor"), t = (e => e.clientX), i = (e => e.clientY), n = (n => {
        var r;
        return r = {
            x: t(n),
            y: i(n)
        }, e.style.top = r.y + "px", e.style.left = r.x + "px"
    }), window.onmousemove = (e => {
        var t;
        return t = e, setTimeout(() => n(t), 1)
    })
}
venus.init(), customMouseCursor(), $(".main-menu .el-menu ul li a, .main-menu .el-add-link-text").hover(function () {
    $(".g__custom_cursor").addClass("active")
}, function () {
    $(".g__custom_cursor").removeClass("active")
});
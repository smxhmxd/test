var arkoseLabsClientApi5ca5bcf5;
!(function () {
  var e = {
      7983: function (e, t) {
        "use strict";
        t.N = void 0;
        var n = /^([^\w]*)(javascript|data|vbscript)/im,
          r = /&#(\w+)(^\w|;)?/g,
          i = /&tab;/gi,
          o = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,
          a = /^.+(:|&colon;)/gim,
          c = [".", "/"];
        t.N = function (e) {
          var t,
            s = ((t = e || ""),
            (t = t.replace(i, "&#9;")).replace(r, function (e, t) {
              return String.fromCharCode(t);
            }))
              .replace(o, "")
              .trim();
          if (!s) return "about:blank";
          if (
            (function (e) {
              return c.indexOf(e[0]) > -1;
            })(s)
          )
            return s;
          var u = s.match(a);
          if (!u) return s;
          var l = u[0];
          return n.test(l) ? "about:blank" : s;
        };
      },
      3940: function (e, t) {
        var n;
        !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function i() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var o = typeof n;
                if ("string" === o || "number" === o) e.push(n);
                else if (Array.isArray(n)) {
                  if (n.length) {
                    var a = i.apply(null, n);
                    a && e.push(a);
                  }
                } else if ("object" === o)
                  if (n.toString === Object.prototype.toString)
                    for (var c in n) r.call(n, c) && n[c] && e.push(c);
                  else e.push(n.toString());
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((i.default = i), (e.exports = i))
            : void 0 ===
                (n = function () {
                  return i;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      8645: function (e) {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {",
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, i, o) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (a[s] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var l = [].concat(e[u]);
                (r && a[l[0]]) ||
                  (void 0 !== o &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = o)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  i &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = i))
                      : (l[4] = "".concat(i))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      3835: function (e) {
        "use strict";
        e.exports = function (e) {
          return e[1];
        };
      },
      913: function (e, t, n) {
        var r, i, o;
        !(function (a, c) {
          "use strict";
          (i = [n(4486)]),
            void 0 ===
              (o =
                "function" ==
                typeof (r = function (e) {
                  var t = /(^|@)\S+:\d+/,
                    n = /^\s*at .*(\S+:\d+|\(native\))/m,
                    r = /^(eval@)?(\[native code])?$/;
                  return {
                    parse: function (e) {
                      if (
                        void 0 !== e.stacktrace ||
                        void 0 !== e["opera#sourceloc"]
                      )
                        return this.parseOpera(e);
                      if (e.stack && e.stack.match(n))
                        return this.parseV8OrIE(e);
                      if (e.stack) return this.parseFFOrSafari(e);
                      throw new Error("Cannot parse given Error object");
                    },
                    extractLocation: function (e) {
                      if (-1 === e.indexOf(":")) return [e];
                      var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(
                        e.replace(/[()]/g, ""),
                      );
                      return [t[1], t[2] || void 0, t[3] || void 0];
                    },
                    parseV8OrIE: function (t) {
                      return t.stack
                        .split("\n")
                        .filter(function (e) {
                          return !!e.match(n);
                        }, this)
                        .map(function (t) {
                          t.indexOf("(eval ") > -1 &&
                            (t = t
                              .replace(/eval code/g, "eval")
                              .replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                          var n = t
                              .replace(/^\s+/, "")
                              .replace(/\(eval code/g, "(")
                              .replace(/^.*?\s+/, ""),
                            r = n.match(/ (\(.+\)$)/);
                          n = r ? n.replace(r[0], "") : n;
                          var i = this.extractLocation(r ? r[1] : n),
                            o = (r && n) || void 0,
                            a =
                              ["eval", "<anonymous>"].indexOf(i[0]) > -1
                                ? void 0
                                : i[0];
                          return new e({
                            functionName: o,
                            fileName: a,
                            lineNumber: i[1],
                            columnNumber: i[2],
                            source: t,
                          });
                        }, this);
                    },
                    parseFFOrSafari: function (t) {
                      return t.stack
                        .split("\n")
                        .filter(function (e) {
                          return !e.match(r);
                        }, this)
                        .map(function (t) {
                          if (
                            (t.indexOf(" > eval") > -1 &&
                              (t = t.replace(
                                / line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,
                                ":$1",
                              )),
                            -1 === t.indexOf("@") && -1 === t.indexOf(":"))
                          )
                            return new e({ functionName: t });
                          var n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                            r = t.match(n),
                            i = r && r[1] ? r[1] : void 0,
                            o = this.extractLocation(t.replace(n, ""));
                          return new e({
                            functionName: i,
                            fileName: o[0],
                            lineNumber: o[1],
                            columnNumber: o[2],
                            source: t,
                          });
                        }, this);
                    },
                    parseOpera: function (e) {
                      return !e.stacktrace ||
                        (e.message.indexOf("\n") > -1 &&
                          e.message.split("\n").length >
                            e.stacktrace.split("\n").length)
                        ? this.parseOpera9(e)
                        : e.stack
                          ? this.parseOpera11(e)
                          : this.parseOpera10(e);
                    },
                    parseOpera9: function (t) {
                      for (
                        var n = /Line (\d+).*script (?:in )?(\S+)/i,
                          r = t.message.split("\n"),
                          i = [],
                          o = 2,
                          a = r.length;
                        o < a;
                        o += 2
                      ) {
                        var c = n.exec(r[o]);
                        c &&
                          i.push(
                            new e({
                              fileName: c[2],
                              lineNumber: c[1],
                              source: r[o],
                            }),
                          );
                      }
                      return i;
                    },
                    parseOpera10: function (t) {
                      for (
                        var n =
                            /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                          r = t.stacktrace.split("\n"),
                          i = [],
                          o = 0,
                          a = r.length;
                        o < a;
                        o += 2
                      ) {
                        var c = n.exec(r[o]);
                        c &&
                          i.push(
                            new e({
                              functionName: c[3] || void 0,
                              fileName: c[2],
                              lineNumber: c[1],
                              source: r[o],
                            }),
                          );
                      }
                      return i;
                    },
                    parseOpera11: function (n) {
                      return n.stack
                        .split("\n")
                        .filter(function (e) {
                          return !!e.match(t) && !e.match(/^Error created at/);
                        }, this)
                        .map(function (t) {
                          var n,
                            r = t.split("@"),
                            i = this.extractLocation(r.pop()),
                            o = r.shift() || "",
                            a =
                              o
                                .replace(/<anonymous function(: (\w+))?>/, "$2")
                                .replace(/\([^)]*\)/g, "") || void 0;
                          o.match(/\(([^)]*)\)/) &&
                            (n = o.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                          var c =
                            void 0 === n || "[arguments not available]" === n
                              ? void 0
                              : n.split(",");
                          return new e({
                            functionName: a,
                            args: c,
                            fileName: i[0],
                            lineNumber: i[1],
                            columnNumber: i[2],
                            source: t,
                          });
                        }, this);
                    },
                  };
                })
                  ? r.apply(t, i)
                  : r) || (e.exports = o);
        })();
      },
      2265: function (e) {
        "use strict";
        var t = Object.prototype.hasOwnProperty,
          n = "~";
        function r() {}
        function i(e, t, n) {
          (this.fn = e), (this.context = t), (this.once = n || !1);
        }
        function o(e, t, r, o, a) {
          if ("function" != typeof r)
            throw new TypeError("The listener must be a function");
          var c = new i(r, o || e, a),
            s = n ? n + t : t;
          return (
            e._events[s]
              ? e._events[s].fn
                ? (e._events[s] = [e._events[s], c])
                : e._events[s].push(c)
              : ((e._events[s] = c), e._eventsCount++),
            e
          );
        }
        function a(e, t) {
          0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
        }
        function c() {
          (this._events = new r()), (this._eventsCount = 0);
        }
        Object.create &&
          ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
          (c.prototype.eventNames = function () {
            var e,
              r,
              i = [];
            if (0 === this._eventsCount) return i;
            for (r in (e = this._events))
              t.call(e, r) && i.push(n ? r.slice(1) : r);
            return Object.getOwnPropertySymbols
              ? i.concat(Object.getOwnPropertySymbols(e))
              : i;
          }),
          (c.prototype.listeners = function (e) {
            var t = n ? n + e : e,
              r = this._events[t];
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var i = 0, o = r.length, a = new Array(o); i < o; i++)
              a[i] = r[i].fn;
            return a;
          }),
          (c.prototype.listenerCount = function (e) {
            var t = n ? n + e : e,
              r = this._events[t];
            return r ? (r.fn ? 1 : r.length) : 0;
          }),
          (c.prototype.emit = function (e, t, r, i, o, a) {
            var c = n ? n + e : e;
            if (!this._events[c]) return !1;
            var s,
              u,
              l = this._events[c],
              f = arguments.length;
            if (l.fn) {
              switch ((l.once && this.removeListener(e, l.fn, void 0, !0), f)) {
                case 1:
                  return l.fn.call(l.context), !0;
                case 2:
                  return l.fn.call(l.context, t), !0;
                case 3:
                  return l.fn.call(l.context, t, r), !0;
                case 4:
                  return l.fn.call(l.context, t, r, i), !0;
                case 5:
                  return l.fn.call(l.context, t, r, i, o), !0;
                case 6:
                  return l.fn.call(l.context, t, r, i, o, a), !0;
              }
              for (u = 1, s = new Array(f - 1); u < f; u++)
                s[u - 1] = arguments[u];
              l.fn.apply(l.context, s);
            } else {
              var d,
                p = l.length;
              for (u = 0; u < p; u++)
                switch (
                  (l[u].once && this.removeListener(e, l[u].fn, void 0, !0), f)
                ) {
                  case 1:
                    l[u].fn.call(l[u].context);
                    break;
                  case 2:
                    l[u].fn.call(l[u].context, t);
                    break;
                  case 3:
                    l[u].fn.call(l[u].context, t, r);
                    break;
                  case 4:
                    l[u].fn.call(l[u].context, t, r, i);
                    break;
                  default:
                    if (!s)
                      for (d = 1, s = new Array(f - 1); d < f; d++)
                        s[d - 1] = arguments[d];
                    l[u].fn.apply(l[u].context, s);
                }
            }
            return !0;
          }),
          (c.prototype.on = function (e, t, n) {
            return o(this, e, t, n, !1);
          }),
          (c.prototype.once = function (e, t, n) {
            return o(this, e, t, n, !0);
          }),
          (c.prototype.removeListener = function (e, t, r, i) {
            var o = n ? n + e : e;
            if (!this._events[o]) return this;
            if (!t) return a(this, o), this;
            var c = this._events[o];
            if (c.fn)
              c.fn !== t ||
                (i && !c.once) ||
                (r && c.context !== r) ||
                a(this, o);
            else {
              for (var s = 0, u = [], l = c.length; s < l; s++)
                (c[s].fn !== t ||
                  (i && !c[s].once) ||
                  (r && c[s].context !== r)) &&
                  u.push(c[s]);
              u.length
                ? (this._events[o] = 1 === u.length ? u[0] : u)
                : a(this, o);
            }
            return this;
          }),
          (c.prototype.removeAllListeners = function (e) {
            var t;
            return (
              e
                ? ((t = n ? n + e : e), this._events[t] && a(this, t))
                : ((this._events = new r()), (this._eventsCount = 0)),
              this
            );
          }),
          (c.prototype.off = c.prototype.removeListener),
          (c.prototype.addListener = c.prototype.on),
          (c.prefixed = n),
          (c.EventEmitter = c),
          (e.exports = c);
      },
      1640: function (e, t, n) {
        e = n.nmd(e);
        var r = "__lodash_hash_undefined__",
          i = 9007199254740991,
          o = "[object Arguments]",
          a = "[object Boolean]",
          c = "[object Date]",
          s = "[object Function]",
          u = "[object GeneratorFunction]",
          l = "[object Map]",
          f = "[object Number]",
          d = "[object Object]",
          p = "[object Promise]",
          v = "[object RegExp]",
          h = "[object Set]",
          g = "[object String]",
          m = "[object Symbol]",
          y = "[object WeakMap]",
          b = "[object ArrayBuffer]",
          w = "[object DataView]",
          O = "[object Float32Array]",
          S = "[object Float64Array]",
          j = "[object Int8Array]",
          E = "[object Int16Array]",
          x = "[object Int32Array]",
          _ = "[object Uint8Array]",
          k = "[object Uint8ClampedArray]",
          A = "[object Uint16Array]",
          P = "[object Uint32Array]",
          C = /\w*$/,
          T = /^\[object .+?Constructor\]$/,
          I = /^(?:0|[1-9]\d*)$/,
          R = {};
        (R[o] =
          R["[object Array]"] =
          R[b] =
          R[w] =
          R[a] =
          R[c] =
          R[O] =
          R[S] =
          R[j] =
          R[E] =
          R[x] =
          R[l] =
          R[f] =
          R[d] =
          R[v] =
          R[h] =
          R[g] =
          R[m] =
          R[_] =
          R[k] =
          R[A] =
          R[P] =
            !0),
          (R["[object Error]"] = R[s] = R[y] = !1);
        var L = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
          D = "object" == typeof self && self && self.Object === Object && self,
          N = L || D || Function("return this")(),
          F = t && !t.nodeType && t,
          K = F && e && !e.nodeType && e,
          M = K && K.exports === F;
        function $(e, t) {
          return e.set(t[0], t[1]), e;
        }
        function H(e, t) {
          return e.add(t), e;
        }
        function q(e, t, n, r) {
          var i = -1,
            o = e ? e.length : 0;
          for (r && o && (n = e[++i]); ++i < o; ) n = t(n, e[i], i, e);
          return n;
        }
        function z(e) {
          var t = !1;
          if (null != e && "function" != typeof e.toString)
            try {
              t = !!(e + "");
            } catch (e) {}
          return t;
        }
        function V(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e, r) {
              n[++t] = [r, e];
            }),
            n
          );
        }
        function W(e, t) {
          return function (n) {
            return e(t(n));
          };
        }
        function U(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e) {
              n[++t] = e;
            }),
            n
          );
        }
        var G,
          X = Array.prototype,
          B = Function.prototype,
          J = Object.prototype,
          Z = N["__core-js_shared__"],
          Q = (G = /[^.]+$/.exec((Z && Z.keys && Z.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + G
            : "",
          Y = B.toString,
          ee = J.hasOwnProperty,
          te = J.toString,
          ne = RegExp(
            "^" +
              Y.call(ee)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?",
                ) +
              "$",
          ),
          re = M ? N.Buffer : void 0,
          ie = N.Symbol,
          oe = N.Uint8Array,
          ae = W(Object.getPrototypeOf, Object),
          ce = Object.create,
          se = J.propertyIsEnumerable,
          ue = X.splice,
          le = Object.getOwnPropertySymbols,
          fe = re ? re.isBuffer : void 0,
          de = W(Object.keys, Object),
          pe = Ke(N, "DataView"),
          ve = Ke(N, "Map"),
          he = Ke(N, "Promise"),
          ge = Ke(N, "Set"),
          me = Ke(N, "WeakMap"),
          ye = Ke(Object, "create"),
          be = ze(pe),
          we = ze(ve),
          Oe = ze(he),
          Se = ze(ge),
          je = ze(me),
          Ee = ie ? ie.prototype : void 0,
          xe = Ee ? Ee.valueOf : void 0;
        function _e(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function ke(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function Ae(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function Pe(e) {
          this.__data__ = new ke(e);
        }
        function Ce(e, t) {
          var n =
              We(e) ||
              (function (e) {
                return (
                  (function (e) {
                    return (
                      (function (e) {
                        return !!e && "object" == typeof e;
                      })(e) && Ue(e)
                    );
                  })(e) &&
                  ee.call(e, "callee") &&
                  (!se.call(e, "callee") || te.call(e) == o)
                );
              })(e)
                ? (function (e, t) {
                    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
                    return r;
                  })(e.length, String)
                : [],
            r = n.length,
            i = !!r;
          for (var a in e)
            (!t && !ee.call(e, a)) ||
              (i && ("length" == a || He(a, r))) ||
              n.push(a);
          return n;
        }
        function Te(e, t, n) {
          var r = e[t];
          (ee.call(e, t) && Ve(r, n) && (void 0 !== n || t in e)) || (e[t] = n);
        }
        function Ie(e, t) {
          for (var n = e.length; n--; ) if (Ve(e[n][0], t)) return n;
          return -1;
        }
        function Re(e, t, n, r, i, p, y) {
          var T;
          if ((r && (T = p ? r(e, i, p, y) : r(e)), void 0 !== T)) return T;
          if (!Be(e)) return e;
          var I = We(e);
          if (I) {
            if (
              ((T = (function (e) {
                var t = e.length,
                  n = e.constructor(t);
                t &&
                  "string" == typeof e[0] &&
                  ee.call(e, "index") &&
                  ((n.index = e.index), (n.input = e.input));
                return n;
              })(e)),
              !t)
            )
              return (function (e, t) {
                var n = -1,
                  r = e.length;
                t || (t = Array(r));
                for (; ++n < r; ) t[n] = e[n];
                return t;
              })(e, T);
          } else {
            var L = $e(e),
              D = L == s || L == u;
            if (Ge(e))
              return (function (e, t) {
                if (t) return e.slice();
                var n = new e.constructor(e.length);
                return e.copy(n), n;
              })(e, t);
            if (L == d || L == o || (D && !p)) {
              if (z(e)) return p ? e : {};
              if (
                ((T = (function (e) {
                  return "function" != typeof e.constructor || qe(e)
                    ? {}
                    : ((t = ae(e)), Be(t) ? ce(t) : {});
                  var t;
                })(D ? {} : e)),
                !t)
              )
                return (function (e, t) {
                  return Ne(e, Me(e), t);
                })(
                  e,
                  (function (e, t) {
                    return e && Ne(t, Je(t), e);
                  })(T, e),
                );
            } else {
              if (!R[L]) return p ? e : {};
              T = (function (e, t, n, r) {
                var i = e.constructor;
                switch (t) {
                  case b:
                    return De(e);
                  case a:
                  case c:
                    return new i(+e);
                  case w:
                    return (function (e, t) {
                      var n = t ? De(e.buffer) : e.buffer;
                      return new e.constructor(n, e.byteOffset, e.byteLength);
                    })(e, r);
                  case O:
                  case S:
                  case j:
                  case E:
                  case x:
                  case _:
                  case k:
                  case A:
                  case P:
                    return (function (e, t) {
                      var n = t ? De(e.buffer) : e.buffer;
                      return new e.constructor(n, e.byteOffset, e.length);
                    })(e, r);
                  case l:
                    return (function (e, t, n) {
                      var r = t ? n(V(e), !0) : V(e);
                      return q(r, $, new e.constructor());
                    })(e, r, n);
                  case f:
                  case g:
                    return new i(e);
                  case v:
                    return (function (e) {
                      var t = new e.constructor(e.source, C.exec(e));
                      return (t.lastIndex = e.lastIndex), t;
                    })(e);
                  case h:
                    return (function (e, t, n) {
                      var r = t ? n(U(e), !0) : U(e);
                      return q(r, H, new e.constructor());
                    })(e, r, n);
                  case m:
                    return (o = e), xe ? Object(xe.call(o)) : {};
                }
                var o;
              })(e, L, Re, t);
            }
          }
          y || (y = new Pe());
          var N = y.get(e);
          if (N) return N;
          if ((y.set(e, T), !I))
            var F = n
              ? (function (e) {
                  return (function (e, t, n) {
                    var r = t(e);
                    return We(e)
                      ? r
                      : (function (e, t) {
                          for (
                            var n = -1, r = t.length, i = e.length;
                            ++n < r;

                          )
                            e[i + n] = t[n];
                          return e;
                        })(r, n(e));
                  })(e, Je, Me);
                })(e)
              : Je(e);
          return (
            (function (e, t) {
              for (
                var n = -1, r = e ? e.length : 0;
                ++n < r && !1 !== t(e[n], n, e);

              );
            })(F || e, function (i, o) {
              F && (i = e[(o = i)]), Te(T, o, Re(i, t, n, r, o, e, y));
            }),
            T
          );
        }
        function Le(e) {
          return (
            !(!Be(e) || ((t = e), Q && Q in t)) &&
            (Xe(e) || z(e) ? ne : T).test(ze(e))
          );
          var t;
        }
        function De(e) {
          var t = new e.constructor(e.byteLength);
          return new oe(t).set(new oe(e)), t;
        }
        function Ne(e, t, n, r) {
          n || (n = {});
          for (var i = -1, o = t.length; ++i < o; ) {
            var a = t[i],
              c = r ? r(n[a], e[a], a, n, e) : void 0;
            Te(n, a, void 0 === c ? e[a] : c);
          }
          return n;
        }
        function Fe(e, t) {
          var n,
            r,
            i = e.__data__;
          return (
            "string" == (r = typeof (n = t)) ||
            "number" == r ||
            "symbol" == r ||
            "boolean" == r
              ? "__proto__" !== n
              : null === n
          )
            ? i["string" == typeof t ? "string" : "hash"]
            : i.map;
        }
        function Ke(e, t) {
          var n = (function (e, t) {
            return null == e ? void 0 : e[t];
          })(e, t);
          return Le(n) ? n : void 0;
        }
        (_e.prototype.clear = function () {
          this.__data__ = ye ? ye(null) : {};
        }),
          (_e.prototype.delete = function (e) {
            return this.has(e) && delete this.__data__[e];
          }),
          (_e.prototype.get = function (e) {
            var t = this.__data__;
            if (ye) {
              var n = t[e];
              return n === r ? void 0 : n;
            }
            return ee.call(t, e) ? t[e] : void 0;
          }),
          (_e.prototype.has = function (e) {
            var t = this.__data__;
            return ye ? void 0 !== t[e] : ee.call(t, e);
          }),
          (_e.prototype.set = function (e, t) {
            return (this.__data__[e] = ye && void 0 === t ? r : t), this;
          }),
          (ke.prototype.clear = function () {
            this.__data__ = [];
          }),
          (ke.prototype.delete = function (e) {
            var t = this.__data__,
              n = Ie(t, e);
            return (
              !(n < 0) && (n == t.length - 1 ? t.pop() : ue.call(t, n, 1), !0)
            );
          }),
          (ke.prototype.get = function (e) {
            var t = this.__data__,
              n = Ie(t, e);
            return n < 0 ? void 0 : t[n][1];
          }),
          (ke.prototype.has = function (e) {
            return Ie(this.__data__, e) > -1;
          }),
          (ke.prototype.set = function (e, t) {
            var n = this.__data__,
              r = Ie(n, e);
            return r < 0 ? n.push([e, t]) : (n[r][1] = t), this;
          }),
          (Ae.prototype.clear = function () {
            this.__data__ = {
              hash: new _e(),
              map: new (ve || ke)(),
              string: new _e(),
            };
          }),
          (Ae.prototype.delete = function (e) {
            return Fe(this, e).delete(e);
          }),
          (Ae.prototype.get = function (e) {
            return Fe(this, e).get(e);
          }),
          (Ae.prototype.has = function (e) {
            return Fe(this, e).has(e);
          }),
          (Ae.prototype.set = function (e, t) {
            return Fe(this, e).set(e, t), this;
          }),
          (Pe.prototype.clear = function () {
            this.__data__ = new ke();
          }),
          (Pe.prototype.delete = function (e) {
            return this.__data__.delete(e);
          }),
          (Pe.prototype.get = function (e) {
            return this.__data__.get(e);
          }),
          (Pe.prototype.has = function (e) {
            return this.__data__.has(e);
          }),
          (Pe.prototype.set = function (e, t) {
            var n = this.__data__;
            if (n instanceof ke) {
              var r = n.__data__;
              if (!ve || r.length < 199) return r.push([e, t]), this;
              n = this.__data__ = new Ae(r);
            }
            return n.set(e, t), this;
          });
        var Me = le
            ? W(le, Object)
            : function () {
                return [];
              },
          $e = function (e) {
            return te.call(e);
          };
        function He(e, t) {
          return (
            !!(t = null == t ? i : t) &&
            ("number" == typeof e || I.test(e)) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
          );
        }
        function qe(e) {
          var t = e && e.constructor;
          return e === (("function" == typeof t && t.prototype) || J);
        }
        function ze(e) {
          if (null != e) {
            try {
              return Y.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        }
        function Ve(e, t) {
          return e === t || (e != e && t != t);
        }
        ((pe && $e(new pe(new ArrayBuffer(1))) != w) ||
          (ve && $e(new ve()) != l) ||
          (he && $e(he.resolve()) != p) ||
          (ge && $e(new ge()) != h) ||
          (me && $e(new me()) != y)) &&
          ($e = function (e) {
            var t = te.call(e),
              n = t == d ? e.constructor : void 0,
              r = n ? ze(n) : void 0;
            if (r)
              switch (r) {
                case be:
                  return w;
                case we:
                  return l;
                case Oe:
                  return p;
                case Se:
                  return h;
                case je:
                  return y;
              }
            return t;
          });
        var We = Array.isArray;
        function Ue(e) {
          return (
            null != e &&
            (function (e) {
              return "number" == typeof e && e > -1 && e % 1 == 0 && e <= i;
            })(e.length) &&
            !Xe(e)
          );
        }
        var Ge =
          fe ||
          function () {
            return !1;
          };
        function Xe(e) {
          var t = Be(e) ? te.call(e) : "";
          return t == s || t == u;
        }
        function Be(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function Je(e) {
          return Ue(e)
            ? Ce(e)
            : (function (e) {
                if (!qe(e)) return de(e);
                var t = [];
                for (var n in Object(e))
                  ee.call(e, n) && "constructor" != n && t.push(n);
                return t;
              })(e);
        }
        e.exports = function (e) {
          return Re(e, !0, !0);
        };
      },
      4486: function (e, t) {
        var n, r, i;
        !(function (o, a) {
          "use strict";
          (r = []),
            void 0 ===
              (i =
                "function" ==
                typeof (n = function () {
                  function e(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e);
                  }
                  function t(e) {
                    return e.charAt(0).toUpperCase() + e.substring(1);
                  }
                  function n(e) {
                    return function () {
                      return this[e];
                    };
                  }
                  var r = ["isConstructor", "isEval", "isNative", "isToplevel"],
                    i = ["columnNumber", "lineNumber"],
                    o = ["fileName", "functionName", "source"],
                    a = ["args"],
                    c = ["evalOrigin"],
                    s = r.concat(i, o, a, c);
                  function u(e) {
                    if (e)
                      for (var n = 0; n < s.length; n++)
                        void 0 !== e[s[n]] && this["set" + t(s[n])](e[s[n]]);
                  }
                  (u.prototype = {
                    getArgs: function () {
                      return this.args;
                    },
                    setArgs: function (e) {
                      if (
                        "[object Array]" !== Object.prototype.toString.call(e)
                      )
                        throw new TypeError("Args must be an Array");
                      this.args = e;
                    },
                    getEvalOrigin: function () {
                      return this.evalOrigin;
                    },
                    setEvalOrigin: function (e) {
                      if (e instanceof u) this.evalOrigin = e;
                      else {
                        if (!(e instanceof Object))
                          throw new TypeError(
                            "Eval Origin must be an Object or StackFrame",
                          );
                        this.evalOrigin = new u(e);
                      }
                    },
                    toString: function () {
                      var e = this.getFileName() || "",
                        t = this.getLineNumber() || "",
                        n = this.getColumnNumber() || "",
                        r = this.getFunctionName() || "";
                      return this.getIsEval()
                        ? e
                          ? "[eval] (" + e + ":" + t + ":" + n + ")"
                          : "[eval]:" + t + ":" + n
                        : r
                          ? r + " (" + e + ":" + t + ":" + n + ")"
                          : e + ":" + t + ":" + n;
                    },
                  }),
                    (u.fromString = function (e) {
                      var t = e.indexOf("("),
                        n = e.lastIndexOf(")"),
                        r = e.substring(0, t),
                        i = e.substring(t + 1, n).split(","),
                        o = e.substring(n + 1);
                      if (0 === o.indexOf("@"))
                        var a = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(o, ""),
                          c = a[1],
                          s = a[2],
                          l = a[3];
                      return new u({
                        functionName: r,
                        args: i || void 0,
                        fileName: c,
                        lineNumber: s || void 0,
                        columnNumber: l || void 0,
                      });
                    });
                  for (var l = 0; l < r.length; l++)
                    (u.prototype["get" + t(r[l])] = n(r[l])),
                      (u.prototype["set" + t(r[l])] = (function (e) {
                        return function (t) {
                          this[e] = Boolean(t);
                        };
                      })(r[l]));
                  for (var f = 0; f < i.length; f++)
                    (u.prototype["get" + t(i[f])] = n(i[f])),
                      (u.prototype["set" + t(i[f])] = (function (t) {
                        return function (n) {
                          if (!e(n))
                            throw new TypeError(t + " must be a Number");
                          this[t] = Number(n);
                        };
                      })(i[f]));
                  for (var d = 0; d < o.length; d++)
                    (u.prototype["get" + t(o[d])] = n(o[d])),
                      (u.prototype["set" + t(o[d])] = (function (e) {
                        return function (t) {
                          this[e] = String(t);
                        };
                      })(o[d]));
                  return u;
                })
                  ? n.apply(t, r)
                  : n) || (e.exports = i);
        })();
      },
      2476: function () {
        Element.prototype.matches ||
          (Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector),
          Element.prototype.closest ||
            (Element.prototype.closest = function (e) {
              var t = this;
              do {
                if (Element.prototype.matches.call(t, e)) return t;
                t = t.parentElement || t.parentNode;
              } while (null !== t && 1 === t.nodeType);
              return null;
            });
      },
      903: function (e, t, n) {
        "use strict";
        var r = n(3835),
          i = n.n(r),
          o = n(8645),
          a = n.n(o)()(i());
        a.push([
          e.id,
          ".r34K7X1zGgAi6DllVF3T{box-sizing:border-box;border:0;margin:0;padding:0;overflow:hidden;z-index:2147483647;pointer-events:none;visibility:hidden;opacity:0;transition:opacity 300ms linear;height:0;width:0;position:absolute;top:-9999px;left:-9999px}.r34K7X1zGgAi6DllVF3T.active{display:block;visibility:visible}.r34K7X1zGgAi6DllVF3T.active.show{opacity:1;pointer-events:inherit;position:inherit}.r34K7X1zGgAi6DllVF3T.active.show.in-situ{width:inherit;height:inherit}.r34K7X1zGgAi6DllVF3T.active.show.lightbox{position:fixed;width:100% !important;height:100% !important;top:0;right:0;bottom:0;left:0}.r34K7X1zGgAi6DllVF3T.active.show.inline{position:static;left:0;top:0}@-moz-document url-prefix(''){.r34K7X1zGgAi6DllVF3T{visibility:visible;display:block}}\n",
          "",
        ]),
          (a.locals = { container: "r34K7X1zGgAi6DllVF3T" }),
          (t.Z = a);
      },
      3379: function (e) {
        "use strict";
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var o = {}, a = [], c = 0; c < e.length; c++) {
            var s = e[c],
              u = r.base ? s[0] + r.base : s[0],
              l = o[u] || 0,
              f = "".concat(u, " ").concat(l);
            o[u] = l + 1;
            var d = n(f),
              p = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== d) t[d].references++, t[d].updater(p);
            else {
              var v = i(p, r);
              (r.byIndex = c),
                t.splice(c, 0, { identifier: f, updater: v, references: 1 });
            }
            a.push(f);
          }
          return a;
        }
        function i(e, t) {
          var n = t.domAPI(t);
          n.update(e);
          return function (t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap &&
                t.supports === e.supports &&
                t.layer === e.layer
              )
                return;
              n.update((e = t));
            } else n.remove();
          };
        }
        e.exports = function (e, i) {
          var o = r((e = e || []), (i = i || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < o.length; a++) {
              var c = n(o[a]);
              t[c].references--;
            }
            for (var s = r(e, i), u = 0; u < o.length; u++) {
              var l = n(o[u]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            o = s;
          };
        };
      },
      569: function (e) {
        "use strict";
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      9216: function (e) {
        "use strict";
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      3565: function (e, t, n) {
        "use strict";
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      7795: function (e) {
        "use strict";
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var i = void 0 !== n.layer;
                i &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  i && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var o = n.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */",
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      4589: function (e) {
        "use strict";
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { id: r, loaded: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.nmd = function (e) {
      return (e.paths = []), e.children || (e.children = []), e;
    }),
    (n.nc = void 0);
  var r = {};
  !(function () {
    "use strict";
    function e(t) {
      return (
        (e =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        e(t)
      );
    }
    function t(t) {
      var n = (function (t, n) {
        if ("object" !== e(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var i = r.call(t, n || "default");
          if ("object" !== e(i)) return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === n ? String : Number)(t);
      })(t, "string");
      return "symbol" === e(n) ? n : String(n);
    }
    function i(e, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, t(i.key), i);
      }
    }
    function o(e, t, n) {
      return (
        t && i(e.prototype, t),
        n && i(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function c(e, n, r) {
      return (
        (n = t(n)) in e
          ? Object.defineProperty(e, n, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[n] = r),
        e
      );
    }
    n.r(r);
    var s = n(1640),
      u = n.n(s),
      l = (n(2476), "arkose"),
      f = "2.3.1",
      d = "inline",
      p = "Verification challenge",
      v =
        ("data-".concat(l, "-challenge-api-url"),
        "data-".concat(l, "-event-blocked")),
      h = "data-".concat(l, "-event-completed"),
      g = "data-".concat(l, "-event-hide"),
      m = "data-".concat(l, "-event-ready"),
      y = "data-".concat(l, "-event-ready-inline"),
      b = "data-".concat(l, "-event-reset"),
      w = "data-".concat(l, "-event-show"),
      O = "data-".concat(l, "-event-suppress"),
      S = "data-".concat(l, "-event-shown"),
      j = "data-".concat(l, "-event-error"),
      E = "data-".concat(l, "-event-warning"),
      x = "data-".concat(l, "-event-resize"),
      _ = "data-".concat(l, "-event-data-request"),
      k = "enforcement resize",
      A = "enforcement loaded",
      P = "challenge shown",
      C = "config",
      T = "data_response",
      I = "settings loaded",
      R = "api",
      L = "enforcement",
      D = "CAPI_RELOAD_EC",
      N = "observability timer",
      F = "data collected",
      K = "update_frame_attributes",
      M = "js_ready",
      $ = "default",
      H = "ark",
      q = "onAPILoad",
      z = "onReady",
      V = "onShown",
      W = "onComplete",
      U = "apiExecute",
      G = "enforcementLoad",
      X = "intersectionCheck",
      B = "eventEnforcementLoad",
      J = "eventFPCollected",
      Z = "eventSettingsLoad",
      Q = c(c(c({}, A, B), I, Z), F, J),
      Y = n(913),
      ee = n.n(Y),
      te = function (e) {
        return 4 === (e.match(/-/g) || []).length;
      },
      ne = (function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "api",
          t = (function (e) {
            if (document.currentScript) return document.currentScript;
            var t =
                "enforcement" === e
                  ? 'script[id="enforcementScript"]'
                  : 'script[src*="v2"][src*="api.js"][data-callback]',
              n = document.querySelectorAll(t);
            if (n && 1 === n.length) return n[0];
            try {
              throw new Error();
            } catch (e) {
              try {
                var r = ee().parse(e)[0].fileName;
                return document.querySelector('script[src="'.concat(r, '"]'));
              } catch (e) {
                return null;
              }
            }
          })(e);
        if (!t) return null;
        var n = t.src,
          r = {};
        try {
          r = (function (e) {
            if (!e) throw new Error("Empty URL");
            var t = e
              .toLowerCase()
              .split("/v2/")
              .filter(function (e) {
                return "" !== e;
              });
            if (t.length < 2) throw new Error("Invalid Client-API URL");
            var n = t[0],
              r = t[1].split("/").filter(function (e) {
                return "" !== e;
              });
            return {
              host: n,
              key: te(r[0]) ? r[0].toUpperCase() : null,
              extHost: n,
            };
          })(n);
        } catch (e) {}
        if (e === L) {
          var i = window.location.hash;
          if (i.length > 0) {
            var o = ("#" === i.charAt(0) ? i.substring(1) : i).split("&"),
              a = o[0];
            (r.key = te(a) ? a : r.key), (r.id = o[1]);
          }
        }
        return r;
      })(),
      re = (function (e, t) {
        for (var n, r = 0; r < e.length; r += 1) {
          var i = e[r],
            o = String(i.getAttribute("src"));
          if (
            (o.match(t) || o.match("v2/api.js")) &&
            i.hasAttribute("data-callback")
          ) {
            n = i;
            break;
          }
        }
        return n;
      })(document.querySelectorAll("script"), ne.key || null);
    if (re) {
      var ie = re.nonce,
        oe = re.getAttribute ? re.getAttribute("data-nonce") : null,
        ae = ie || oe;
      ae && (n.nc = ae);
    }
    var ce = function (e) {
        return "function" == typeof e;
      },
      se = function (e, t, n) {
        try {
          var r = t.split("."),
            i = e;
          return (
            r.forEach(function (e) {
              i = i[e];
            }),
            i || n
          );
        } catch (e) {
          return n;
        }
      },
      ue = function (t) {
        var n = t,
          r = e(t);
        return (
          ("string" !== r ||
            ("string" === r &&
              -1 === t.indexOf("px") &&
              -1 === t.indexOf("vw") &&
              -1 === t.indexOf("vh"))) &&
            (n = "".concat(t, "px")),
          n
        );
      },
      le = function (e, t) {
        if (e[H]) e[H][t] || (e[H][t] = {});
        else {
          var n = t ? c({}, t, {}) : {};
          Object.defineProperty(e, H, { value: n, writable: !0 });
        }
      },
      fe = function (e, t, n, r) {
        (e[H] && e[H][t]) || le(e, t), (e[H][t][n] = r);
      };
    function de(e, t) {
      if (null == e) return {};
      var n,
        r,
        i = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            i = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (i[n] = e[n]));
      }
      return i;
    }
    var pe = function () {
        return window &&
          window.crypto &&
          "function" == typeof window.crypto.getRandomValues
          ? ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
              /[018]/g,
              function (e) {
                return (
                  e ^
                  (crypto.getRandomValues(new Uint8Array(1))[0] &
                    (15 >> (e / 4)))
                ).toString(16);
              },
            )
          : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                var t = (16 * Math.random()) | 0;
                return ("x" == e ? t : (3 & t) | 8).toString(16);
              },
            );
      },
      ve = n(2265),
      he = n.n(ve),
      ge = n(7983);
    function me(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function ye(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? me(Object(n), !0).forEach(function (t) {
              c(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : me(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
      }
      return e;
    }
    var be = ["settings", "styling", "token"],
      we = function t(n) {
        return "object" === e(n) && null !== n
          ? Object.keys(n).reduce(function (r, i) {
              var o,
                a = n[i],
                s = e(a),
                u = a;
              return (
                -1 === be.indexOf(i) &&
                  ("string" === s && (u = "" === (o = a) ? o : (0, ge.N)(o)),
                  "object" === s && (u = Array.isArray(a) ? a : t(a))),
                ye(ye({}, r), {}, c({}, i, u))
              );
            }, {})
          : n;
      };
    function Oe(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Se(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Oe(Object(n), !0).forEach(function (t) {
              c(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Oe(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
      }
      return e;
    }
    var je = (function () {
        function e() {
          var t = this;
          a(this, e),
            (this.config = {
              context: null,
              target: "*",
              identifier: null,
              iframePosition: null,
            }),
            (this.emitter = new (he())()),
            (this.messageListener = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              try {
                var n = (function (e) {
                    return JSON.parse(e);
                  })(e.data),
                  r = n || {},
                  i = r.data,
                  o = r.key,
                  a = r.message,
                  c = r.type,
                  s = we(i);
                if (a && o === t.config.identifier)
                  return (
                    t.emitter.emit(a, s),
                    "broadcast" === c &&
                      t.postMessageToParent({ data: s, key: o, message: a }),
                    void (
                      "emit" === c &&
                      t.postMessageToChildren({ data: s, key: o, message: a })
                    )
                  );
                n &&
                  "FunCaptcha-action" === n.msg &&
                  t.postMessageToChildren({
                    data: Se(Se({}, n), n.payload || {}),
                  });
              } catch (n) {
                if (e.data === M) return void t.emitter.emit(M, {});
                if (e.data === D) return void t.emitter.emit(D, {});
                if (e.data.msg === K) return void t.emitter.emit(K, {});
                "string" == typeof e.data &&
                  -1 !== e.data.indexOf("key_pressed_") &&
                  t.config.iframePosition === L &&
                  window.parent &&
                  "function" == typeof window.parent.postMessage &&
                  window.parent.postMessage(e.data, "*");
              }
            });
        }
        return (
          o(e, [
            {
              key: "context",
              set: function (e) {
                this.config.context = e;
              },
            },
            {
              key: "identifier",
              set: function (e) {
                this.config.identifier = e;
              },
            },
            {
              key: "setup",
              value: function (e, t) {
                var n, r, i;
                this.config.identifier !== this.identifier &&
                  ((n = window),
                  (r = this.config.identifier),
                  (i = n[H]) &&
                    i[r] &&
                    (i[r].listener &&
                      window.removeEventListener("message", i[r].listener),
                    i[r].error &&
                      window.removeEventListener("error", i[r].error),
                    delete i[r])),
                  (this.config.identifier = e),
                  (this.config.iframePosition = t),
                  le(window, this.config.identifier);
                var o = window[H][this.config.identifier].listener;
                o && window.removeEventListener("message", o),
                  fe(
                    window,
                    this.config.identifier,
                    "listener",
                    this.messageListener,
                  ),
                  window.addEventListener(
                    "message",
                    window[H][this.config.identifier].listener,
                  );
              },
            },
            {
              key: "postMessage",
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = arguments.length > 1 ? arguments[1] : void 0,
                  n = t.data,
                  r = t.key,
                  i = t.message,
                  o = t.type;
                if (ce(e.postMessage)) {
                  var a = Se(
                    Se({}, n),
                    {},
                    { data: n, key: r, message: i, type: o },
                  );
                  e.postMessage(
                    (function (e) {
                      return JSON.stringify(e);
                    })(a),
                    this.config.target,
                  );
                }
              },
            },
            {
              key: "postMessageToChildren",
              value: function (e) {
                for (
                  var t = e.data,
                    n = e.key,
                    r = e.message,
                    i = document.querySelectorAll("iframe"),
                    o = [],
                    a = 0;
                  a < i.length;
                  a += 1
                ) {
                  var c = i[a].contentWindow;
                  c && o.push(c);
                }
                for (var s = 0; s < o.length; s += 1) {
                  var u = o[s];
                  this.postMessage(
                    u,
                    { data: t, key: n, message: r, type: "emit" },
                    this.config.target,
                  );
                }
              },
            },
            {
              key: "postMessageToParent",
              value: function (e) {
                var t = e.data,
                  n = e.key,
                  r = e.message;
                window.parent !== window &&
                  this.postMessage(window.parent, {
                    data: t,
                    key: n,
                    message: r,
                    type: "broadcast",
                  });
              },
            },
            {
              key: "emit",
              value: function (e, t) {
                this.emitter.emit(e, t),
                  this.postMessageToParent({
                    message: e,
                    data: t,
                    key: this.config.identifier,
                  }),
                  this.postMessageToChildren({
                    message: e,
                    data: t,
                    key: this.config.identifier,
                  });
              },
            },
            {
              key: "off",
              value: function () {
                var e;
                (e = this.emitter).removeListener.apply(e, arguments);
              },
            },
            {
              key: "on",
              value: function () {
                var e;
                (e = this.emitter).on.apply(e, arguments);
              },
            },
            {
              key: "once",
              value: function () {
                var e;
                (e = this.emitter).once.apply(e, arguments);
              },
            },
          ]),
          e
        );
      })(),
      Ee = new je(),
      xe = ["logged"];
    function _e(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function ke(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? _e(Object(n), !0).forEach(function (t) {
              c(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _e(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
      }
      return e;
    }
    var Ae,
      Pe,
      Ce,
      Te,
      Ie = "sampled",
      Re = "error",
      Le = { onReady: 3e4, onShown: 6e4 },
      De = {
        enabled: { type: "boolean", default: !1 },
        onReadyThreshold: { type: "integer", default: Le.onReady },
        onShownThreshold: { type: "integer", default: Le.onShown },
        windowErrorEnabled: { type: "boolean", default: !0 },
        samplePercentage: { type: "float", default: 1 },
      },
      Ne = function (e, t, n, r) {
        Ee.emit(N, {
          action: e,
          timerId: t,
          subTimerId: n || null,
          time: Date.now(),
          info: r,
        });
      },
      Fe = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = Date.now();
        Ae || ((Ae = n), (Pe = n));
        var r = n - Ae,
          i = n - Pe;
        Te &&
          (t
            ? console.debug(
                "%c"
                  .concat(Ce)
                  .concat(e, ": ")
                  .concat(r, " since last event - ")
                  .concat(i, " total time - ")
                  .concat(Date.now()),
                "color: ".concat(t, ";"),
              )
            : console.debug(
                ""
                  .concat(Ce)
                  .concat(e, ": ")
                  .concat(r, " since last event - ")
                  .concat(i, " total time - ")
                  .concat(Date.now()),
              )),
          (Ae = n);
      },
      Ke = n(3940),
      Me = n.n(Ke),
      $e = Ze;
    !(function (e, t) {
      for (
        var n = 133,
          r = 137,
          i = 147,
          o = 165,
          a = 169,
          c = 168,
          s = 164,
          u = 163,
          l = 166,
          f = Ze,
          d = e();
        ;

      )
        try {
          if (
            359415 ===
            -parseInt(f(n)) / 1 +
              (-parseInt(f(r)) / 2) * (parseInt(f(i)) / 3) +
              (-parseInt(f(o)) / 4) * (-parseInt(f(a)) / 5) +
              parseInt(f(c)) / 6 +
              parseInt(f(s)) / 7 +
              parseInt(f(u)) / 8 +
              parseInt(f(l)) / 9
          )
            break;
          d.push(d.shift());
        } catch (e) {
          d.push(d.shift());
        }
    })(et);
    var He,
      qe =
        ((He = !0),
        function (e, t) {
          var n = 161,
            r = He
              ? function () {
                  if (t) {
                    var r = t[Ze(n)](e, arguments);
                    return (t = null), r;
                  }
                }
              : function () {};
          return (He = !1), r;
        }),
      ze = qe(void 0, function () {
        var e = 170,
          t = 151,
          n = 144,
          r = 162,
          i = 142,
          o = 151,
          a = 153,
          c = 135,
          s = 162,
          u = 142,
          l = Ze;
        return ze[l(e) + l(t)]()
          [l(n) + "h"](l(r) + l(i) + "+$")
          [l(e) + l(o)]()
          [l(a) + l(c) + "r"](ze)
          .search(l(s) + l(u) + "+$");
      });
    ze();
    var Ve = [$e(138) + "box", $e(140) + $e(134) + "ve"],
      We = {};
    We[$e(159) + "lt"] = !0;
    var Ue = {};
    Ue[$e(159) + "lt"] = !1;
    var Ge = {};
    (Ge[$e(148) + $e(146)] = We), (Ge[$e(154) + "loseB" + $e(156)] = Ue);
    var Xe = { default: !0 },
      Be = { default: 70 },
      Je = {};
    function Ze(e, t) {
      var n = et();
      return (
        (Ze = function (e, t) {
          return n[(e -= 133)];
        }),
        Ze(e, t)
      );
    }
    (Je.enabled = Xe), (Je.landscapeOffset = Be);
    var Qe = {};
    Qe[$e(159) + "lt"] = {};
    var Ye = {};
    function et() {
      var e = [
        "1749tSzShQ",
        "close",
        "forEa",
        "type",
        "ing",
        "keys",
        "const",
        "hideC",
        "box",
        "utton",
        "nal",
        "optio",
        "defau",
        "ngs",
        "apply",
        "(((.+",
        "1375680QPDXiz",
        "515942trMEAI",
        "161948kIhdBv",
        "5638896rPSNix",
        "nProp",
        "22554JxKgIZ",
        "5ttgSQO",
        "toStr",
        "proto",
        "theme",
        "199662FfScgG",
        "ponsi",
        "ructo",
        "hasOw",
        "1226SaVuaX",
        "light",
        "erty",
        "ECRes",
        "call",
        ")+)+)",
        "lengt",
        "searc",
        "ity",
        "OnEsc",
      ];
      return (et = function () {
        return e;
      })();
    }
    Ye[$e(158) + $e(157)] = !0;
    var tt = {};
    (tt[$e(138) + $e(155)] = Ge),
      (tt[$e(140) + $e(134) + "ve"] = Je),
      (tt["observabil" + $e(145)] = Qe),
      (tt.f = Ye);
    var nt = tt,
      rt = function () {
        var e = 160,
          t = 138,
          n = 138,
          r = 155,
          i = 140,
          o = 134,
          a = 149,
          c = 172,
          s = 155,
          u = 152,
          l = 149,
          f = 150,
          d = 167,
          p = 139,
          v = 141,
          h = 158,
          g = 157,
          m = 159,
          y = $e,
          b =
            arguments[y(143) + "h"] > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
          w = b.theme,
          O = void 0 === w ? null : w,
          S = b["setti" + y(e)] || b,
          j = {};
        (j[y(t) + "box"] = {}), (j.ECResponsive = {});
        var E = j;
        [y(n) + y(r), y(i) + y(o) + "ve"][y(a) + "ch"](function (e) {
          var t = 171,
            n = 150,
            r = 136,
            i = 167,
            o = 139,
            a = 141,
            c = S[e] || {},
            s = nt[e];
          Object.keys(s).forEach(function (u) {
            var l = Ze;
            Object[l(t) + l(n)][l(r) + l(i) + l(o)][l(a)](c, u)
              ? (E[e][u] = c[u])
              : (E[e][u] = s[u].default);
          });
        }),
          O && (E[y(c)] = O);
        nt[y(n) + y(s)], nt[y(i) + y(o) + "ve"];
        var x = de(nt, Ve);
        return (
          Object[y(u)](x)[y(l) + "ch"](function (e) {
            var t = y;
            Object["proto" + t(f)]["hasOw" + t(d) + t(p)][t(v)](S, e)
              ? (E[e] = S[e])
              : !0 !== nt[e][t(h) + t(g)] && (E[e] = nt[e][t(m) + "lt"]);
          }),
          E
        );
      },
      it = n(3379),
      ot = n.n(it),
      at = n(7795),
      ct = n.n(at),
      st = n(569),
      ut = n.n(st),
      lt = n(3565),
      ft = n.n(lt),
      dt = n(9216),
      pt = n.n(dt),
      vt = n(4589),
      ht = n.n(vt),
      gt = n(903),
      mt = {};
    (mt.styleTagTransform = ht()),
      (mt.setAttributes = ft()),
      (mt.insert = ut().bind(null, "head")),
      (mt.domAPI = ct()),
      (mt.insertStyleElement = pt());
    ot()(gt.Z, mt);
    var yt = gt.Z && gt.Z.locals ? gt.Z.locals : void 0;
    function bt(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    var wt = {
        show: !1,
        isActive: void 0,
        element: void 0,
        frame: void 0,
        mode: void 0,
        ECResponsive: !0,
        enforcementUrl: null,
      },
      Ot = function (e, t) {
        e.setAttribute("class", t);
      },
      St = function () {
        return Me()(
          yt.container,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? bt(Object(n), !0).forEach(function (t) {
                    c(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n),
                    )
                  : bt(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t),
                      );
                    });
            }
            return e;
          })(
            { show: !!wt.show, active: !!wt.isActive },
            wt.mode ? c({}, wt.mode, !0) : {},
          ),
        );
      };
    Ee.on("challenge iframe", function (e) {
      var t = e.width,
        n = e.height,
        r = e.minWidth,
        i = e.minHeight,
        o = e.maxWidth,
        a = e.maxHeight;
      if (wt.frame) {
        wt.show = !0;
        var c = St();
        Ot(wt.frame, c);
        var s = n,
          u = t;
        if (wt.ECResponsive) {
          var l = (function (e) {
            var t = e.width,
              n = e.height,
              r = e.minWidth,
              i = e.maxWidth,
              o = e.minHeight,
              a = e.maxHeight,
              c = e.landscapeOffset,
              s = t,
              u = n;
            if (!r || !i) return { height: u, width: s };
            if (window.screen && window.screen.width && window.screen.height) {
              var l = window.screen.availHeight || window.screen.height,
                f = window.screen.availWidth || window.screen.width,
                d =
                  l -
                  (!window.orientation ||
                  (90 !== window.orientation && -90 !== window.orientation)
                    ? 0
                    : c);
              (s = f),
                (u = o && a ? d : n),
                f >= parseInt(i, 10) && (s = i),
                f <= parseInt(r, 10) && (s = r),
                a && d >= parseInt(a, 10) && (u = a),
                o && d <= parseInt(o, 10) && (u = o);
            }
            return (s = ue(s)), { height: (u = ue(u)), width: s };
          })({
            width: t,
            height: n,
            minWidth: r,
            maxWidth: o,
            minHeight: i,
            maxHeight: a,
            landscapeOffset: wt.ECResponsive.landscapeOffset || 0,
          });
          (u = l.width), (s = l.height);
        }
        var f = !1;
        t &&
          t !== wt.frame.style.width &&
          ((wt.frame.style.width = t), (f = !0)),
          n &&
            n !== wt.frame.style.height &&
            ((wt.frame.style.height = n), (f = !0)),
          wt.mode === d &&
            (r &&
              r !== wt.frame.style["min-width"] &&
              ((wt.frame.style["min-width"] = r), (f = !0)),
            i &&
              i !== wt.frame.style["min-height"] &&
              ((wt.frame.style["min-height"] = i), (f = !0)),
            o &&
              o !== wt.frame.style["max-width"] &&
              ((wt.frame.style["max-width"] = o), (f = !0)),
            a &&
              a !== wt.frame.style["max-height"] &&
              ((wt.frame.style["max-height"] = a), (f = !0))),
          f && Ee.emit(k, { width: u, height: s }),
          document.activeElement !== wt.element &&
            !1 === wt.mode &&
            wt.frame.focus();
      }
    });
    var jt = {
        boolean: function (e) {
          return "boolean" == typeof e
            ? e
            : "string" == typeof e && "true" === e.toLowerCase();
        },
      },
      Et = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = {},
          n = [
            "publicKey",
            "data",
            "isSDK",
            "language",
            "mode",
            "onDataRequest",
            "onCompleted",
            "onHide",
            "onReady",
            "onReset",
            "onResize",
            "onShow",
            "onShown",
            "onSuppress",
            "onError",
            "onWarning",
            "onFailed",
            "onResize",
            "settings",
            "selector",
            "accessibilitySettings",
            "styleTheme",
            "uaTheme",
            "apiLoadTime",
            "enableDirectionalInput",
            "inlineRunOnTrigger",
            "noSuppress",
          ];
        return (
          Object.keys(e)
            .filter(function (e) {
              return -1 !== n.indexOf(e);
            })
            .forEach(function (n) {
              t[n] = e[n];
            }),
          [{ value: "noSuppress", type: "boolean" }].forEach(function (n) {
            var r = n.value,
              i = n.type;
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = jt[i](e[r]));
          }),
          t
        );
      };
    !(function (e, t) {
      for (
        var n = 448,
          r = 459,
          i = 451,
          o = 457,
          a = 454,
          c = 460,
          s = 450,
          u = At,
          l = e();
        ;

      )
        try {
          if (
            719486 ===
            -parseInt(u(n)) / 1 +
              -parseInt(u(r)) / 2 +
              parseInt(u(i)) / 3 +
              -parseInt(u(o)) / 4 +
              -parseInt(u(a)) / 5 +
              parseInt(u(c)) / 6 +
              parseInt(u(s)) / 7
          )
            break;
          l.push(l.shift());
        } catch (e) {
          l.push(l.shift());
        }
    })(kt);
    var xt = (function () {
        var e = !0;
        return function (t, n) {
          var r = e
            ? function () {
                if (n) {
                  var e = n.apply(t, arguments);
                  return (n = null), e;
                }
              }
            : function () {};
          return (e = !1), r;
        };
      })(),
      _t = xt(void 0, function () {
        var e = 452,
          t = 446,
          n = 458,
          r = 453,
          i = 447,
          o = 456,
          a = At;
        return _t[a(458) + a(e)]()
          .search(a(t) + ")+)+)+$")
          [a(n) + "ing"]()
          [a(r) + "ructor"](_t)
          [a(i) + "h"](a(t) + a(o) + "+$");
      });
    function kt() {
      var e = [
        "1388364IdRPhi",
        "(((.+",
        "searc",
        "744887LPBSEA",
        "strin",
        "19041365QmlCLI",
        "3251412KTGnOe",
        "ing",
        "const",
        "5863395zCsxGy",
        "numbe",
        ")+)+)",
        "1038964DWasEt",
        "toStr",
        "2277200UWGKwh",
      ];
      return (kt = function () {
        return e;
      })();
    }
    function At(e, t) {
      var n = kt();
      return (
        (At = function (e, t) {
          return n[(e -= 446)];
        }),
        At(e, t)
      );
    }
    _t();
    !(function (e, t) {
      for (
        var n = 234,
          r = 252,
          i = 253,
          o = 255,
          a = 229,
          c = 248,
          s = 231,
          u = 250,
          l = 233,
          f = 251,
          d = 242,
          p = Tt,
          v = e();
        ;

      )
        try {
          if (
            810760 ===
            (parseInt(p(n)) / 1) * (parseInt(p(r)) / 2) +
              parseInt(p(i)) / 3 +
              (parseInt(p(o)) / 4) * (-parseInt(p(a)) / 5) +
              parseInt(p(c)) / 6 +
              -parseInt(p(s)) / 7 +
              (-parseInt(p(u)) / 8) * (-parseInt(p(l)) / 9) +
              (parseInt(p(f)) / 10) * (-parseInt(p(d)) / 11)
          )
            break;
          v.push(v.shift());
        } catch (e) {
          v.push(v.shift());
        }
    })(Nt);
    var Pt = (function () {
        var e = !0;
        return function (t, n) {
          var r = 249,
            i = e
              ? function () {
                  if (n) {
                    var e = n[Tt(r)](t, arguments);
                    return (n = null), e;
                  }
                }
              : function () {};
          return (e = !1), i;
        };
      })(),
      Ct = Pt(void 0, function () {
        var e = 237,
          t = 240,
          n = 244,
          r = 239,
          i = 232,
          o = 238,
          a = Tt;
        return Ct[a(244) + a(e)]()
          .search(a(t) + ")+)+)+$")
          [a(n) + "ing"]()
          ["const" + a(r) + "r"](Ct)
          [a(i) + "h"]("(((.+" + a(o) + "+$");
      });
    function Tt(e, t) {
      var n = Nt();
      return (
        (Tt = function (e, t) {
          return n[(e -= 227)];
        }),
        Tt(e, t)
      );
    }
    Ct();
    var It,
      Rt,
      Lt = function () {
        var e = 241,
          t = 256,
          n = Tt;
        return window[n(243) + "ion"][n(e)]
          ? (function (e) {
              return e || typeof e == At(449) + "g" ? e.split("?")[0] : null;
            })(window["locat" + n(t)].href)
          : null;
      },
      Dt = function (e) {
        return typeof e == Tt(247) + "an" ? e : null;
      };
    function Nt() {
      var e = [
        ")+)+)",
        "ructo",
        "(((.+",
        "href",
        "12741509RtJtnS",
        "locat",
        "toStr",
        "langu",
        "isSDK",
        "boole",
        "8605758EcmACR",
        "apply",
        "4448bIGxxN",
        "10EEYSPJ",
        "718622XiSSeF",
        "1816848pLpMAi",
        "__nig",
        "4DgSkET",
        "ion",
        "htmar",
        "eRunO",
        "1276810ETvgRo",
        "age",
        "9314921oMyGwa",
        "searc",
        "18711bXpyOh",
        "1uCVwpy",
        "nTrig",
        "inlin",
        "ing",
      ];
      return (Nt = function () {
        return e;
      })();
    }
    function Ft(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Kt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Ft(Object(n), !0).forEach(function (t) {
              c(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ft(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
      }
      return e;
    }
    (Ce = "API: "), (Te = Rt), Fe("Starting app");
    var Mt = ne.key,
      $t = ne.host,
      Ht = ne.extHost;
    Fe("Starting observer");
    var qt = (function (e, t, n) {
      var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 5e3,
        i = t,
        o = n,
        a = pe(),
        s = (function () {
          var e = {},
            t = window.navigator;
          if (
            ((e.platform = t.platform), (e.language = t.language), t.connection)
          )
            try {
              e.connection = {
                effectiveType: t.connection.effectiveType,
                rtt: t.connection.rtt,
                downlink: t.connection.downlink,
              };
            } catch (e) {}
          return e;
        })(),
        u = {},
        l = {},
        f = e,
        d = null,
        p = {},
        v = null,
        h = null,
        g = { timerCheckInterval: r },
        m = !1,
        y = !1,
        b = !1,
        w = !1,
        O = !1,
        S = function () {
          var e;
          if (w) {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            "string" == typeof n[0] && (n[0] = "Observability - ".concat(n[0])),
              (e = console).log.apply(e, n);
          }
        },
        j = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.timerId,
            n = e.type;
          if (!0 === g.enabled) {
            var r = t ? c({}, t, u[t]) : u,
              d = Object.keys(r).reduce(function (e, t) {
                r[t].logged = !0;
                var n = r[t],
                  i = (n.logged, de(n, xe));
                return ke(ke({}, e), {}, c({}, t, i));
              }, {}),
              m = {
                id: a,
                publicKey: f,
                capiVersion: o,
                mode: h,
                suppressed: O,
                device: s,
                error: p,
                windowError: l,
                sessionId: v,
                timers: d,
                sampled: n === Ie,
              };
            S("Logging Metrics:", m);
            try {
              var y = new XMLHttpRequest();
              y.open("POST", i), y.send(JSON.stringify(m));
            } catch (e) {}
          }
        },
        E = function (e) {
          return g &&
            Object.prototype.hasOwnProperty.call(g, "".concat(e, "Threshold"))
            ? g["".concat(e, "Threshold")]
            : Le[e];
        },
        x = function e() {
          if (b) return !1;
          var t = !1;
          return (
            m &&
              (Object.keys(u).forEach(function (e) {
                var n = E(e),
                  r = u[e],
                  i = r.diff,
                  o = r.logged,
                  a = r.end;
                if (
                  0 !== n &&
                  !0 !== o &&
                  (i && i > n && ((t = !0), (u[e].logged = !0)), !i && !a)
                ) {
                  var c = u[e].start,
                    s = Date.now(),
                    l = s - c;
                  l > n &&
                    ((u[e].diff = l),
                    (u[e].end = s),
                    (u[e].logged = !0),
                    (t = !0));
                }
              }),
              t && j()),
            (d = setTimeout(e, g.timerCheckInterval)),
            !0
          );
        },
        _ = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return ke(
            ke(
              {},
              {
                start: null,
                end: null,
                diff: null,
                threshold: null,
                logged: !1,
                metrics: {},
              },
            ),
            e,
          );
        },
        k = function () {
          return {
            id: a,
            publicKey: f,
            sessionId: v,
            mode: h,
            settings: g,
            device: s,
            error: p,
            windowError: l,
            timers: u,
            debugEnabled: w,
          };
        },
        A = function () {
          clearTimeout(d);
        };
      d = setTimeout(x, g.timerCheckInterval);
      try {
        "true" === window.localStorage.getItem("capiDebug") &&
          ((w = !0), (window.capiObserver = { getValues: k }));
      } catch (e) {}
      return {
        getValues: k,
        timerStart: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : Date.now(),
            n = u[e] || {};
          if (!n.start) {
            var r = E(e);
            S("".concat(e, " started:"), t),
              (u[e] = _(ke(ke({}, n), {}, { start: t, threshold: r })));
          }
        },
        timerEnd: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : Date.now(),
            n = u[e];
          n &&
            !n.end &&
            ((n.end = t),
            (n.diff = n.end - n.start),
            S("".concat(e, " ended:"), t, n.diff),
            b && j({ timerId: e, type: Ie }));
        },
        timerCheck: x,
        subTimerStart: function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : Date.now(),
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = u[e];
          i || (i = _()),
            i.end ||
              ((i.metrics[t] = ke(
                { start: n, end: null, diff: null },
                r && { info: r },
              )),
              (u[e] = i),
              S("".concat(e, ".").concat(t, " started:"), n));
        },
        subTimerEnd: function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : Date.now(),
            r = u[e];
          if (r && !r.end) {
            var i = r.metrics[t];
            i &&
              ((i.end = n),
              (i.diff = i.end - i.start),
              S("".concat(e, ".").concat(t, " ended:"), n, i.diff));
          }
        },
        cancelIntervalTimer: A,
        setup: function (e, t) {
          (m = !0),
            (g = ke(
              ke({}, g),
              (function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return Object.keys(De).reduce(function (t, n) {
                  var r = e[n],
                    i = De[n];
                  if ("boolean" === i.type)
                    return ke(
                      ke({}, t),
                      {},
                      c({}, n, "boolean" == typeof r ? r : i.default),
                    );
                  var o =
                    "float" === i.type ? parseFloat(r, 0) : parseInt(r, 10);
                  return ke(ke({}, t), {}, c({}, n, isNaN(o) ? i.default : o));
                }, {});
              })(e),
            )),
            (h = t),
            Object.keys(u).forEach(function (e) {
              var t = E(e);
              u[e].threshold = t;
            });
          var n,
            r = g.samplePercentage;
          (n = r),
            (b = Math.random() <= n / 100) && A(),
            S("Session sampled:", b);
        },
        setSession: function (e) {
          v = e;
        },
        logError: function (e) {
          y || ((p = e), (y = !0), j({ type: Re }));
        },
        logWindowError: function (e, t, n, r) {
          (g && !0 !== g.windowErrorEnabled) ||
            (l[e] = { message: t, filename: n, stack: r });
        },
        debugLog: S,
        setSuppressed: function () {
          O = !0;
        },
        setPublicKey: function (e) {
          (f = e),
            (y = !1),
            (p = {}),
            ["onShown", "onComplete"].forEach(function (e) {
              if (u[e]) {
                var t = u[e].threshold || null;
                u[e] = _({ threshold: t });
              }
            });
        },
        observabilityTimer: Ne,
        apiLoadTimerSetup: function (e, t) {
          (u[e] = ke(ke({}, t), {}, { logged: !1 })),
            b && j({ timerId: e, type: Ie });
        },
      };
    })(Mt, "".concat(Ht).concat("/metrics/ui"), f, 5e3);
    qt.subTimerStart(z, U);
    var zt = function (e) {
        return "arkose-".concat(e, "-wrapper");
      },
      Vt = {},
      Wt = "onCompleted",
      Ut = "onHide",
      Gt = "onReady",
      Xt = "onReset",
      Bt = "onShow",
      Jt = "onShown",
      Zt = "onSuppress",
      Qt = "onFailed",
      Yt = "onError",
      en = "onWarning",
      tn = "onResize",
      nn = "onDataRequest",
      rn =
        (c(
          c(
            c(
              c(
                c(
                  c(c(c(c(c((It = {}), h, Wt), g, Ut), m, Gt), y, Gt), b, Xt),
                  w,
                  Bt,
                ),
                S,
                Jt,
              ),
              O,
              Zt,
            ),
            v,
            Qt,
          ),
          j,
          Yt,
        ),
        c(c(c(It, E, en), x, tn), _, nn));
    Fe("Set all hooks");
    var on = o(function e() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = t.completed,
        r = t.token,
        i = t.suppressed,
        o = t.error,
        c = t.warning,
        s = t.width,
        u = t.height,
        l = t.requested;
      a(this, e),
        (this.completed = !!n),
        (this.token = r || null),
        (this.suppressed = !!i),
        (this.error = o || null),
        (this.warning = c || null),
        (this.width = s || 0),
        (this.height = u || 0),
        (this.requested = l || null);
    });
    Fe("Instantiated Ark Hook Class");
    var an = function (e) {
        var t = document.createElement("div");
        return (
          t.setAttribute("aria-hidden", !0),
          t.setAttribute("class", zt(e || Mt)),
          t
        );
      },
      cn = function () {
        var e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Kt(
          Kt(
            {
              element: an(),
              inactiveElement: null,
              bodyElement: document.querySelector("body"),
              savedActiveElement: null,
              modifiedSiblings: [],
              challengeLoadedEvents: [],
              container: null,
              elements: function () {
                return document.querySelectorAll(Vt.config.selector);
              },
              initialSetupCompleted: !1,
              enforcementLoaded: !1,
              enforcementReady: !1,
              getPublicKeyTimeout: null,
              isActive: !1,
              isHidden: !1,
              isReady: !1,
              isConfigured: !1,
              suppressed: !1,
              isResettingChallenge: !1,
              lastResetTimestamp: 0,
              isCompleteReset: !1,
              fpData: null,
              onReadyEventCheck: [],
              width: 0,
              height: 0,
              token: null,
              externalRequested: !1,
            },
            t,
          ),
          {},
          {
            config: Kt(
              Kt({}, Mt ? { publicKey: Mt } : {}),
              {},
              {
                selector:
                  ((e = Mt),
                  "[data-".concat(l, '-public-key="').concat(e, '"]')),
                styleTheme: (t.config && t.config.styleTheme) || $,
                siteData: { location: window.location },
                apiLoadTime: null,
                settings: {},
                accessibilitySettings: { lockFocusToModal: !0 },
              },
              t.config,
            ),
            events: Kt({}, t.events),
          },
        );
      },
      sn = function (e) {
        var t = Vt.events[rn[e]];
        if (ce(t)) {
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
            i < n;
            i++
          )
            r[i - 1] = arguments[i];
          t.apply(void 0, r);
        }
      },
      un = function () {
        Fe("Rendering enforcement frame", "blue"),
          (function (e) {
            var t = e.host,
              n = e.id,
              r = e.publicKey,
              i = e.element,
              o = e.config,
              a = e.isActive,
              c = e.isReady,
              s = e.capiObserver;
            Fe("Creating iframe");
            var u = se(o, "mode");
            (wt.mode = u),
              (wt.element = i),
              (wt.isActive = a),
              (wt.show = c),
              (wt.ECResponsive = se(rt(o.settings), "ECResponsive", {})),
              (wt.accessibilitySettings = se(o, "accessibilitySettings"));
            var l = St(),
              f = (function (e) {
                var t = e.host,
                  n = e.publicKey,
                  r = e.id,
                  i = e.file;
                return "development" === e.environment
                  ? ""
                      .concat(i, "#")
                      .concat(n || "", "&")
                      .concat(r)
                  : ""
                      .concat(t, "/v2/")
                      .concat(i, "#")
                      .concat(n || "", "&")
                      .concat(r);
              })({
                host: t,
                publicKey: r,
                id: n,
                file: "2.3.1/enforcement.db38df7eed55a4641d0eec2d11e1ff6a.html",
                environment: "production",
              });
            if (se(wt.element, "children", []).length < 1) {
              wt.enforcementUrl = f;
              var d = document.createElement("iframe");
              d.setAttribute("src", f),
                d.setAttribute("class", l),
                d.setAttribute("title", p),
                d.setAttribute("aria-label", p),
                d.setAttribute("data-e2e", "enforcement-frame"),
                (d.style.width = "0px"),
                (d.style.height = "0px"),
                d.addEventListener("load", function () {
                  s.subTimerEnd(z, G);
                }),
                s.subTimerStart(z, G),
                wt.element.appendChild(d),
                (wt.frame = d);
            } else
              f !== wt.enforcementUrl &&
                (wt.frame.setAttribute("src", f), (wt.enforcementUrl = f)),
                Ot(wt.frame, l),
                wt.isActive ||
                  ((wt.frame.style.width = 0), (wt.frame.style.height = 0));
          })({
            host: $t,
            id: Vt.id,
            publicKey: Vt.config.publicKey,
            element: Vt.element,
            config: Vt.config,
            isActive: Vt.isActive,
            isReady: Vt.isReady,
            capiObserver: qt,
          });
      },
      ln = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = Vt,
          n = t.element,
          r = t.bodyElement,
          i = t.container,
          o = t.events,
          a = t.lastResetTimestamp,
          c = t.config;
        if (c.publicKey) {
          var s = Date.now();
          if (!(s - a < 100)) {
            (Vt.lastResetTimestamp = s),
              (Vt.isActive = !1),
              (Vt.completed = !1),
              (Vt.token = null),
              (Vt.isReady = !1),
              (Vt.onReadyEventCheck = []),
              un(),
              r &&
                o &&
                (r.removeEventListener("click", o.bodyClicked),
                window.removeEventListener("keyup", o.escapePressed),
                (Vt.events.bodyClicked = null),
                (Vt.events.escapePressed = null));
            var l = n;
            (Vt.inactiveElement = l),
              (Vt.element = void 0),
              (Vt.element = an(c.publicKey)),
              i &&
                l &&
                i.contains(l) &&
                (Ee.emit("enforcement detach"),
                setTimeout(function () {
                  try {
                    i.removeChild(l);
                  } catch (e) {}
                }, 5e3)),
              (Vt = cn(u()(Vt))),
              e || sn(b, new on(Vt)),
              gn();
          }
        }
      },
      fn = function (e) {
        Vt.element.setAttribute("aria-hidden", e);
      },
      dn = function () {
        Fe("Showing enforcement"),
          Vt.enforcementReady &&
            !Vt.isActive &&
            (Ee.emit("trigger show"),
            Vt.isHidden &&
              ((Vt.isHidden = !1),
              Vt.isReady && Ee.emit(P, { token: Vt.token })));
      },
      pn = function () {
        var e = (
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        ).manual;
        (Vt.isActive = !1),
          e && (Vt.isHidden = !0),
          sn(g, new on(Vt)),
          Vt.savedActiveElement &&
            (Vt.savedActiveElement.focus(), (Vt.savedActiveElement = null)),
          se(Vt, "config.mode") !== d &&
            (function () {
              for (var e = Vt.modifiedSiblings, t = 0; t < e.length; t += 1) {
                var n = e[t],
                  r = n.elem,
                  i = n.ariaHiddenState;
                r !== Vt.appEl &&
                  (null === i
                    ? r.removeAttribute("aria-hidden")
                    : r.setAttribute("aria-hidden", i));
              }
            })(),
          un(),
          fn(!0);
      },
      vn = function (e) {
        e.target.closest(Vt.config.selector) && dn();
      },
      hn = function (e) {
        return 27 !== se(e, "keyCode") ? null : pn({ manual: !0 });
      },
      gn = function () {
        return se(Vt, "config.mode") === d
          ? (Fe("Setting up inline"),
            (Vt.container = document.querySelector(
              se(Vt, "config.selector", ""),
            )),
            void (
              Vt.container &&
              (Vt.container.contains(Vt.element) ||
                (Vt.container.appendChild(Vt.element), un()))
            ))
          : (Fe("Setting up Modal"),
            (Vt.container = Vt.bodyElement),
            Vt.events.bodyClicked ||
              ((Vt.events.bodyClicked = vn),
              Vt.bodyElement.addEventListener("click", Vt.events.bodyClicked)),
            Vt.events.escapePressed ||
              ((Vt.events.escapePressed = hn),
              window.addEventListener("keyup", Vt.events.escapePressed)),
            void (
              Vt.container &&
              (Vt.container.contains(Vt.element) ||
                (Vt.container.appendChild(Vt.element), un()))
            ));
      },
      mn = function () {
        var e = pe();
        qt.subTimerEnd(z, U),
          Fe("API Execute done"),
          le(window, e),
          Fe("Set up Window"),
          Ee.setup(e, R),
          Fe("Set up emitter"),
          (function (e) {
            if (e) {
              var t = window[H][e].error;
              t && window.removeEventListener("error", t);
            }
            fe(window, e, "error", function (e) {
              var t = e.message,
                n = e.filename,
                r = e.error;
              if (
                n &&
                "string" == typeof n &&
                n.indexOf("api.js") >= 0 &&
                n.indexOf(Vt.config.publicKey) >= 0
              ) {
                var i = r.stack;
                qt.logWindowError("integration", t, n, i);
              }
            }),
              window.addEventListener("error", window[H][e].error);
          })(e),
          Fe("Set up window error"),
          (Vt = cn({ id: e }));
      },
      yn = function () {
        var e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        Vt.initialSetupCompleted = !0;
        var n = (function (e) {
            return e === d ? d : "lightbox";
          })(t.mode || se(Vt, "config.mode")),
          r = t.styleTheme || $,
          i = Vt.isConfigured && r !== Vt.config.styleTheme;
        Vt.isConfigured = !0;
        var o = Mt || Vt.config.publicKey || null,
          a = !1;
        t.publicKey &&
          o !== t.publicKey &&
          (!(function (e) {
            Fe("Seting up key"),
              fe(window, Vt.id, "publicKey", e),
              qt.setPublicKey(e),
              Vt.element &&
                Vt.element.getAttribute &&
                (Vt.element.getAttribute("class").match(e) ||
                  Vt.element.setAttribute("class", zt(e))),
              Fe("Set up key");
          })(t.publicKey),
          (o = t.publicKey),
          Vt.config.publicKey &&
            Vt.config.publicKey !== t.publicKey &&
            (a = !0)),
          (Vt.config = Kt(
            Kt(Kt(Kt({}, Vt.config), t), { mode: n }),
            {},
            {
              styleTheme: r,
              publicKey: o,
              language:
                "" !== t.language ? t.language || Vt.config.language : void 0,
            },
          )),
          (Vt.events = Kt(
            Kt({}, Vt.events),
            {},
            (c(
              c(
                c(
                  c(
                    c(
                      c(
                        c(
                          c(
                            c(
                              c((e = {}), Wt, t[Wt] || Vt.events[Wt]),
                              Qt,
                              t[Qt] || Vt.events[Qt],
                            ),
                            Ut,
                            t[Ut] || Vt.events[Ut],
                          ),
                          Gt,
                          t[Gt] || Vt.events[Gt],
                        ),
                        Xt,
                        t[Xt] || Vt.events[Xt],
                      ),
                      Bt,
                      t[Bt] || Vt.events[Bt],
                    ),
                    Jt,
                    t[Jt] || Vt.events[Jt],
                  ),
                  Zt,
                  t[Zt] || Vt.events[Zt],
                ),
                Yt,
                t[Yt] || Vt.events[Yt],
              ),
              en,
              t[en] || Vt.events[en],
            ),
            c(c(e, tn, t[tn] || Vt.events[tn]), nn, t[nn] || Vt.events[nn])),
          )),
          (Vt.config.pageLevel = (function (e) {
            var t,
              n,
              r,
              i = 245,
              o = 230,
              a = 246,
              c = 236,
              s = 228,
              u = 235,
              l = Tt;
            return {
              chref: Lt(),
              clang: null !== (t = e[l(i) + l(o)]) && void 0 !== t ? t : null,
              surl: null,
              sdk: Dt(e[l(a)]) || !1,
              nm: ((n = 227), (r = Tt), !!window[r(254) + r(n) + "e"]),
              triggeredInline: e[l(c) + l(s) + l(u) + "ger"] || !1,
            };
          })(Vt.config)),
          Fe("Configured initial state"),
          Ee.emit(C, Vt.config),
          Fe("Emitt Config event"),
          i || a
            ? (Fe("Resetting enforcement"), ln(!0))
            : (Fe("Call setup mode"), gn()),
          "lightbox" === n &&
            (Vt.element.setAttribute("aria-modal", !0),
            Vt.element.setAttribute("role", "dialog"));
      },
      bn = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.event,
          n = e.observability;
        if ((Vt.onReadyEventCheck.push(t), n)) {
          var r = n.timerId,
            i = n.subTimerId,
            o = n.time;
          qt.subTimerEnd(r, i, o);
        }
        Q[t] && qt.subTimerEnd(z, Q[t]);
        var a = [A, F, I];
        qt.subTimerStart(z, X);
        var c = (function (e, t) {
          var n,
            r,
            i = [],
            o = e.length,
            a = t.length;
          for (n = 0; n < o; n += 1)
            for (r = 0; r < a; r += 1) e[n] === t[r] && i.push(e[n]);
          return i;
        })(a, Vt.onReadyEventCheck);
        c.length === a.length &&
          ((Vt.enforcementReady = !0),
          (Vt.onReadyEventCheck = []),
          qt.subTimerEnd(z, X),
          Vt.isCompleteReset ||
            (qt.timerEnd(z),
            Fe("onReady triggered", "orange"),
            sn(m, new on(Vt))),
          (Vt.isCompleteReset = !1)),
          Fe("onReady event: ".concat(t), "green");
      },
      wn = function (e) {
        var t = e.token;
        if (t) {
          Vt.token = t;
          var n = t.split("|"),
            r = n.length ? n[0] : null;
          qt.setSession(r);
        }
      },
      On = {
        setConfig: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          qt.timerStart(z),
            [B, Z, J].forEach(function (e) {
              qt.subTimerStart(z, e);
            }),
            yn(Et(e));
        },
        getConfig: function () {
          return u()(Vt.config);
        },
        dataResponse: function (e) {
          if (Vt.requested) {
            var t = {
              message: T,
              data: e,
              key: Vt.config.publicKey,
              type: "emit",
            };
            Ee.emit(T, t), (Vt.requested = null);
          }
        },
        reset: function () {
          ln();
        },
        run: dn,
        version: f,
      },
      Sn = re.getAttribute("data-callback");
    Fe("Set up Every function"),
      Ee.on("show enforcement", function () {
        Vt.isReady || (qt.timerStart(V), qt.timerStart(W)),
          (Vt.isActive = !0),
          (Vt.savedActiveElement = document.activeElement),
          sn(w, new on(Vt)),
          se(Vt, "config.mode") !== d &&
            (function () {
              var e = Vt.bodyElement.children;
              Vt.modifiedSiblings = [];
              for (var t = 0; t < e.length; t += 1) {
                var n = e.item(t),
                  r = n.getAttribute("aria-hidden");
                n !== Vt.appEl &&
                  "true" !== r &&
                  (Vt.modifiedSiblings.push({ elem: n, ariaHiddenState: r }),
                  n.setAttribute("aria-hidden", !0));
              }
            })(),
          un(),
          fn(!1);
      }),
      Ee.on(P, function (e) {
        var t = e.token;
        (Vt.isReady = !0),
          (Vt.token = t),
          Vt.isHidden ||
            ((Vt.isActive = !0), un(), qt.timerEnd(V), sn(S, new on(Vt)));
      }),
      Ee.on("challenge completed", function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (Vt.completed = !0),
          (Vt.token = e.token),
          qt.timerEnd(W),
          sn(h, new on(Vt)),
          se(Vt, "config.mode") !== d && ((Vt.isCompleteReset = !0), ln());
      }),
      Ee.on("hide enforcement", pn),
      Ee.on(k, function (e) {
        var t = e.width,
          n = e.height;
        (Vt.width = t), (Vt.height = n), sn(x, new on(Vt));
      }),
      Ee.on(A, function () {
        Fe("Got enforcement loaded", "darkblue"),
          (Vt.enforcementLoaded = !0),
          bn({ event: A }),
          Vt.initialSetupCompleted && Ee.emit(C, Vt.config);
      }),
      Ee.on("challenge suppressed", function (e) {
        var t = e.token;
        (Vt.isActive = !1),
          (Vt.suppressed = !0),
          wn({ token: t }),
          qt.setSuppressed(),
          qt.timerEnd(V),
          sn(O, new on(Vt));
      }),
      Ee.on("data initial", bn),
      Ee.on("settings fp collected", bn),
      Ee.on("challenge token", wn),
      Ee.on("challenge window error", function (e) {
        var t = e.message,
          n = e.source,
          r = e.stack;
        qt.logWindowError("challenge", t, n, r);
      }),
      Ee.on(I, function (e) {
        var t = e.event,
          n = void 0 === t ? {} : t,
          r = e.settings,
          i = void 0 === r ? {} : r,
          o = e.observability;
        Vt.config.settings = i;
        var a = (function (e) {
          return se(e, "observability", {});
        })(Vt.config.settings);
        qt.setup(a, Vt.config.mode);
        var c = se(Vt, "config.apiLoadTime");
        c && qt.apiLoadTimerSetup(q, c),
          bn({ event: n, observability: o }),
          un();
      }),
      Ee.on("challenge fail number limit reached", function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (Vt.isActive = !1),
          (Vt.isHidden = !0),
          (Vt.token = e.token),
          sn(v, new on(Vt), e);
      }),
      Ee.on("error", function (e) {
        var t = Kt({ source: null }, e.error);
        (Vt.error = t), qt.logError(t), sn(j, new on(Vt)), pn();
      }),
      Ee.on("warning", function (e) {
        var t = Kt({ source: null }, e.warning);
        (Vt.warning = t), qt.logError(t), sn(E, new on(Vt));
      }),
      Ee.on("data_request", function (e) {
        e.sdk && ((Vt.requested = e), sn(_, new on(Vt)));
      }),
      Ee.on(F, bn),
      Ee.on(N, function (e) {
        var t = e.action,
          n = e.timerId,
          r = e.subTimerId,
          i = e.time,
          o = e.info,
          a = ""
            .concat(r ? "subTimer" : "timer")
            .concat("end" === t ? "End" : "Start"),
          c = r ? [n, r, i, o] : [n, i];
        qt[a].apply(qt, c);
      }),
      Ee.on("force reset", function () {
        ln();
      }),
      Ee.on("redraw challenge", function () {
        Vt.element &&
          (Vt.element.querySelector("iframe").style.display = "inline");
      }),
      Fe("Set up Every emitter"),
      Sn
        ? (Fe("Attempting callback"),
          (function e() {
            if (!ce(window[Sn])) return setTimeout(e, 1e3);
            var t = document.querySelectorAll(".".concat(zt(Mt)));
            return (
              t &&
                t.length &&
                Array.prototype.slice.call(t).forEach(function (e) {
                  try {
                    e.parentNode.removeChild(e);
                  } catch (e) {}
                }),
              Fe("Cleaned up iframes"),
              mn(),
              window[Sn](On)
            );
          })())
        : (Fe("Start setup function"), mn());
  })(),
    (arkoseLabsClientApi5ca5bcf5 = r);
})();

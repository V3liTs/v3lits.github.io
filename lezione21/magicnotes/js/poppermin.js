/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */ const e = "undefined" != typeof window && "undefined" != typeof document,
  t = ["Edge", "Trident", "Firefox"];
let o = 0;
for (let n = 0; n < t.length; n += 1)
  if (e && 0 <= navigator.userAgent.indexOf(t[n])) {
    o = 1;
    break;
  }
function n(e) {
  let t = !1;
  return () => {
    t ||
      ((t = !0),
      window.Promise.resolve().then(() => {
        (t = !1), e();
      }));
  };
}
function i(e) {
  let t = !1;
  return () => {
    t ||
      ((t = !0),
      setTimeout(() => {
        (t = !1), e();
      }, o));
  };
}
const r = e && window.Promise;
var p = r ? n : i;
function d(e) {
  return e && "[object Function]" === {}.toString.call(e);
}
function s(e, t) {
  if (1 !== e.nodeType) return [];
  const o = getComputedStyle(e, null);
  return t ? o[t] : o;
}
function a(e) {
  return "HTML" === e.nodeName ? e : e.parentNode || e.host;
}
function f(e) {
  if (!e) return document.body;
  switch (e.nodeName) {
    case "HTML":
    case "BODY":
      return e.ownerDocument.body;
    case "#document":
      return e.body;
  }
  const { overflow: t, overflowX: o, overflowY: n } = s(e);
  return /(auto|scroll)/.test(t + n + o) ? e : f(a(e));
}
function l(e) {
  const t = e && e.offsetParent,
    o = t && t.nodeName;
  return o && "BODY" !== o && "HTML" !== o
    ? -1 !== ["TD", "TABLE"].indexOf(t.nodeName) &&
      "static" === s(t, "position")
      ? l(t)
      : t
    : e
    ? e.ownerDocument.documentElement
    : document.documentElement;
}
function m(e) {
  const { nodeName: t } = e;
  return "BODY" !== t && ("HTML" === t || l(e.firstElementChild) === e);
}
function h(e) {
  return null === e.parentNode ? e : h(e.parentNode);
}
function c(e, t) {
  if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
  const o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
    n = o ? e : t,
    i = o ? t : e,
    r = document.createRange();
  r.setStart(n, 0), r.setEnd(i, 0);
  const { commonAncestorContainer: p } = r;
  if ((e !== p && t !== p) || n.contains(i)) return m(p) ? p : l(p);
  const d = h(e);
  return d.host ? c(d.host, t) : c(e, h(t).host);
}
function u(e, t = "top") {
  const o = "top" === t ? "scrollTop" : "scrollLeft",
    n = e.nodeName;
  if ("BODY" === n || "HTML" === n) {
    const t = e.ownerDocument.documentElement,
      n = e.ownerDocument.scrollingElement || t;
    return n[o];
  }
  return e[o];
}
function g(e, t, o = !1) {
  const n = u(t, "top"),
    i = u(t, "left"),
    r = o ? -1 : 1;
  return (
    (e.top += n * r),
    (e.bottom += n * r),
    (e.left += i * r),
    (e.right += i * r),
    e
  );
}
function b(e, t) {
  const o = "x" === t ? "Left" : "Top",
    n = "Left" == o ? "Right" : "Bottom";
  return (
    parseFloat(e[`border${o}Width`], 10) + parseFloat(e[`border${n}Width`], 10)
  );
}
let w;
var y = function () {
  return void 0 == w && (w = -1 !== navigator.appVersion.indexOf("MSIE 10")), w;
};
function E(e, t, o, n) {
  return Math.max(
    t[`offset${e}`],
    t[`scroll${e}`],
    o[`client${e}`],
    o[`offset${e}`],
    o[`scroll${e}`],
    y()
      ? o[`offset${e}`] +
          n[`margin${"Height" === e ? "Top" : "Left"}`] +
          n[`margin${"Height" === e ? "Bottom" : "Right"}`]
      : 0
  );
}
function v() {
  const e = document.body,
    t = document.documentElement,
    o = y() && getComputedStyle(t);
  return { height: E("Height", e, t, o), width: E("Width", e, t, o) };
}
var O =
  Object.assign ||
  function (e) {
    for (var t, o = 1; o < arguments.length; o++)
      for (var n in ((t = arguments[o]), t))
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    return e;
  };
function x(e) {
  return O({}, e, { right: e.left + e.width, bottom: e.top + e.height });
}
function L(e) {
  let t = {};
  if (y())
    try {
      t = e.getBoundingClientRect();
      const o = u(e, "top"),
        n = u(e, "left");
      (t.top += o), (t.left += n), (t.bottom += o), (t.right += n);
    } catch (e) {}
  else t = e.getBoundingClientRect();
  const o = {
      left: t.left,
      top: t.top,
      width: t.right - t.left,
      height: t.bottom - t.top,
    },
    n = "HTML" === e.nodeName ? v() : {},
    i = n.width || e.clientWidth || o.right - o.left,
    r = n.height || e.clientHeight || o.bottom - o.top;
  let p = e.offsetWidth - i,
    d = e.offsetHeight - r;
  if (p || d) {
    const t = s(e);
    (p -= b(t, "x")), (d -= b(t, "y")), (o.width -= p), (o.height -= d);
  }
  return x(o);
}
function S(e, t) {
  const o = y(),
    n = "HTML" === t.nodeName,
    i = L(e),
    r = L(t),
    p = f(e),
    d = s(t),
    a = parseFloat(d.borderTopWidth, 10),
    l = parseFloat(d.borderLeftWidth, 10);
  let m = x({
    top: i.top - r.top - a,
    left: i.left - r.left - l,
    width: i.width,
    height: i.height,
  });
  if (((m.marginTop = 0), (m.marginLeft = 0), !o && n)) {
    const e = parseFloat(d.marginTop, 10),
      t = parseFloat(d.marginLeft, 10);
    (m.top -= a - e),
      (m.bottom -= a - e),
      (m.left -= l - t),
      (m.right -= l - t),
      (m.marginTop = e),
      (m.marginLeft = t);
  }
  return (
    (o ? t.contains(p) : t === p && "BODY" !== p.nodeName) && (m = g(m, t)), m
  );
}
function T(e) {
  var t = Math.max;
  const o = e.ownerDocument.documentElement,
    n = S(e, o),
    i = t(o.clientWidth, window.innerWidth || 0),
    r = t(o.clientHeight, window.innerHeight || 0),
    p = u(o),
    d = u(o, "left"),
    s = {
      top: p - n.top + n.marginTop,
      left: d - n.left + n.marginLeft,
      width: i,
      height: r,
    };
  return x(s);
}
function D(e) {
  const t = e.nodeName;
  return "BODY" === t || "HTML" === t
    ? !1
    : !("fixed" !== s(e, "position")) || D(a(e));
}
function N(e, t, o, n) {
  let i = { top: 0, left: 0 };
  const r = c(e, t);
  if ("viewport" === n) i = T(r);
  else {
    let o;
    "scrollParent" === n
      ? ((o = f(a(t))),
        "BODY" === o.nodeName && (o = e.ownerDocument.documentElement))
      : "window" === n
      ? (o = e.ownerDocument.documentElement)
      : (o = n);
    const p = S(o, r);
    if ("HTML" === o.nodeName && !D(r)) {
      const { height: e, width: t } = v();
      (i.top += p.top - p.marginTop),
        (i.bottom = e + p.top),
        (i.left += p.left - p.marginLeft),
        (i.right = t + p.left);
    } else i = p;
  }
  return (i.left += o), (i.top += o), (i.right -= o), (i.bottom -= o), i;
}
function C({ width: e, height: t }) {
  return e * t;
}
function B(e, t, o, n, i, r = 0) {
  if (-1 === e.indexOf("auto")) return e;
  const p = N(o, n, r, i),
    d = {
      top: { width: p.width, height: t.top - p.top },
      right: { width: p.right - t.right, height: p.height },
      bottom: { width: p.width, height: p.bottom - t.bottom },
      left: { width: t.left - p.left, height: p.height },
    },
    s = Object.keys(d)
      .map((e) => O({ key: e }, d[e], { area: C(d[e]) }))
      .sort((e, t) => t.area - e.area),
    a = s.filter(
      ({ width: e, height: t }) => e >= o.clientWidth && t >= o.clientHeight
    ),
    f = 0 < a.length ? a[0].key : s[0].key,
    l = e.split("-")[1];
  return f + (l ? `-${l}` : "");
}
function W(e, t, o) {
  const n = c(t, o);
  return S(o, n);
}
function H(e) {
  const t = getComputedStyle(e),
    o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
    n = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
    i = { width: e.offsetWidth + n, height: e.offsetHeight + o };
  return i;
}
function P(e) {
  const t = { left: "right", right: "left", bottom: "top", top: "bottom" };
  return e.replace(/left|right|bottom|top/g, (e) => t[e]);
}
function k(e, t, o) {
  o = o.split("-")[0];
  const n = H(e),
    i = { width: n.width, height: n.height },
    r = -1 !== ["right", "left"].indexOf(o),
    p = r ? "top" : "left",
    d = r ? "left" : "top",
    s = r ? "height" : "width",
    a = r ? "width" : "height";
  return (
    (i[p] = t[p] + t[s] / 2 - n[s] / 2),
    (i[d] = o === d ? t[d] - n[a] : t[P(d)]),
    i
  );
}
function A(e, t) {
  return Array.prototype.find ? e.find(t) : e.filter(t)[0];
}
function I(e, t, o) {
  if (Array.prototype.findIndex) return e.findIndex((e) => e[t] === o);
  const n = A(e, (e) => e[t] === o);
  return e.indexOf(n);
}
function M(e, t, o) {
  const n = void 0 === o ? e : e.slice(0, I(e, "name", o));
  return (
    n.forEach((e) => {
      e["function"] &&
        console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      const o = e["function"] || e.fn;
      e.enabled &&
        d(o) &&
        ((t.offsets.popper = x(t.offsets.popper)),
        (t.offsets.reference = x(t.offsets.reference)),
        (t = o(t, e)));
    }),
    t
  );
}
function R() {
  if (this.state.isDestroyed) return;
  let e = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: !1,
    offsets: {},
  };
  (e.offsets.reference = W(this.state, this.popper, this.reference)),
    (e.placement = B(
      this.options.placement,
      e.offsets.reference,
      this.popper,
      this.reference,
      this.options.modifiers.flip.boundariesElement,
      this.options.modifiers.flip.padding
    )),
    (e.originalPlacement = e.placement),
    (e.offsets.popper = k(this.popper, e.offsets.reference, e.placement)),
    (e.offsets.popper.position = "absolute"),
    (e = M(this.modifiers, e)),
    this.state.isCreated
      ? this.options.onUpdate(e)
      : ((this.state.isCreated = !0), this.options.onCreate(e));
}
function U(e, t) {
  return e.some(({ name: e, enabled: o }) => o && e === t);
}
function Y(e) {
  const t = [!1, "ms", "Webkit", "Moz", "O"],
    o = e.charAt(0).toUpperCase() + e.slice(1);
  for (let n = 0; n < t.length - 1; n++) {
    const i = t[n],
      r = i ? `${i}${o}` : e;
    if ("undefined" != typeof document.body.style[r]) return r;
  }
  return null;
}
function F() {
  return (
    (this.state.isDestroyed = !0),
    U(this.modifiers, "applyStyle") &&
      (this.popper.removeAttribute("x-placement"),
      (this.popper.style.left = ""),
      (this.popper.style.position = ""),
      (this.popper.style.top = ""),
      (this.popper.style[Y("transform")] = "")),
    this.disableEventListeners(),
    this.options.removeOnDestroy &&
      this.popper.parentNode.removeChild(this.popper),
    this
  );
}
function j(e) {
  const t = e.ownerDocument;
  return t ? t.defaultView : window;
}
function K(e, t, o, n) {
  const i = "BODY" === e.nodeName,
    r = i ? e.ownerDocument.defaultView : e;
  r.addEventListener(t, o, { passive: !0 }),
    i || K(f(r.parentNode), t, o, n),
    n.push(r);
}
function V(e, t, o, n) {
  (o.updateBound = n),
    j(e).addEventListener("resize", o.updateBound, { passive: !0 });
  const i = f(e);
  return (
    K(i, "scroll", o.updateBound, o.scrollParents),
    (o.scrollElement = i),
    (o.eventsEnabled = !0),
    o
  );
}
function G() {
  this.state.eventsEnabled ||
    (this.state = V(
      this.reference,
      this.options,
      this.state,
      this.scheduleUpdate
    ));
}
function z(e, t) {
  return (
    j(e).removeEventListener("resize", t.updateBound),
    t.scrollParents.forEach((e) => {
      e.removeEventListener("scroll", t.updateBound);
    }),
    (t.updateBound = null),
    (t.scrollParents = []),
    (t.scrollElement = null),
    (t.eventsEnabled = !1),
    t
  );
}
function q() {
  this.state.eventsEnabled &&
    (cancelAnimationFrame(this.scheduleUpdate),
    (this.state = z(this.reference, this.state)));
}
function _(e) {
  return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
}
function X(e, t) {
  Object.keys(t).forEach((o) => {
    let n = "";
    -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(o) &&
      _(t[o]) &&
      (n = "px"),
      (e.style[o] = t[o] + n);
  });
}
function J(e, t) {
  Object.keys(t).forEach(function (o) {
    const n = t[o];
    !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
  });
}
function Z(e) {
  return (
    X(e.instance.popper, e.styles),
    J(e.instance.popper, e.attributes),
    e.arrowElement &&
      Object.keys(e.arrowStyles).length &&
      X(e.arrowElement, e.arrowStyles),
    e
  );
}
function $(e, t, o, n, i) {
  const r = W(i, t, e),
    p = B(
      o.placement,
      r,
      t,
      e,
      o.modifiers.flip.boundariesElement,
      o.modifiers.flip.padding
    );
  return t.setAttribute("x-placement", p), X(t, { position: "absolute" }), o;
}
function Q(e, t) {
  var o = Math.floor;
  const { x: n, y: i } = t,
    { popper: r } = e.offsets,
    p = A(e.instance.modifiers, (e) => "applyStyle" === e.name).gpuAcceleration;
  void 0 !== p &&
    console.warn(
      "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
    );
  const d = void 0 === p ? t.gpuAcceleration : p,
    s = l(e.instance.popper),
    a = L(s),
    f = { position: r.position },
    m = {
      left: o(r.left),
      top: o(r.top),
      bottom: o(r.bottom),
      right: o(r.right),
    },
    h = "bottom" === n ? "top" : "bottom",
    c = "right" === i ? "left" : "right",
    u = Y("transform");
  let g, b;
  if (
    ((b = "bottom" == h ? -a.height + m.bottom : m.top),
    (g = "right" == c ? -a.width + m.right : m.left),
    d && u)
  )
    (f[u] = `translate3d(${g}px, ${b}px, 0)`),
      (f[h] = 0),
      (f[c] = 0),
      (f.willChange = "transform");
  else {
    const e = "bottom" == h ? -1 : 1,
      t = "right" == c ? -1 : 1;
    (f[h] = b * e), (f[c] = g * t), (f.willChange = `${h}, ${c}`);
  }
  const w = { "x-placement": e.placement };
  return (
    (e.attributes = O({}, w, e.attributes)),
    (e.styles = O({}, f, e.styles)),
    (e.arrowStyles = O({}, e.offsets.arrow, e.arrowStyles)),
    e
  );
}
function ee(e, t, o) {
  const n = A(e, ({ name: e }) => e === t),
    i = !!n && e.some((e) => e.name === o && e.enabled && e.order < n.order);
  if (!i) {
    const e = `\`${t}\``,
      n = `\`${o}\``;
    console.warn(
      `${n} modifier is required by ${e} modifier in order to work, be sure to include it before ${e}!`
    );
  }
  return i;
}
function te(e, t) {
  if (!ee(e.instance.modifiers, "arrow", "keepTogether")) return e;
  let o = t.element;
  if ("string" == typeof o) {
    if (((o = e.instance.popper.querySelector(o)), !o)) return e;
  } else if (!e.instance.popper.contains(o))
    return (
      console.warn(
        "WARNING: `arrow.element` must be child of its popper element!"
      ),
      e
    );
  const n = e.placement.split("-")[0],
    { popper: i, reference: r } = e.offsets,
    p = -1 !== ["left", "right"].indexOf(n),
    d = p ? "height" : "width",
    a = p ? "Top" : "Left",
    f = a.toLowerCase(),
    l = p ? "left" : "top",
    m = p ? "bottom" : "right",
    h = H(o)[d];
  r[m] - h < i[f] && (e.offsets.popper[f] -= i[f] - (r[m] - h)),
    r[f] + h > i[m] && (e.offsets.popper[f] += r[f] + h - i[m]),
    (e.offsets.popper = x(e.offsets.popper));
  const c = r[f] + r[d] / 2 - h / 2,
    u = s(e.instance.popper),
    g = parseFloat(u[`margin${a}`], 10),
    b = parseFloat(u[`border${a}Width`], 10);
  let w = c - e.offsets.popper[f] - g - b;
  return (
    (w = Math.max(Math.min(i[d] - h, w), 0)),
    (e.arrowElement = o),
    (e.offsets.arrow = { [f]: Math.round(w), [l]: "" }),
    e
  );
}
function oe(e) {
  if ("end" === e) return "start";
  return "start" === e ? "end" : e;
}
var ne = [
  "auto-start",
  "auto",
  "auto-end",
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "bottom-end",
  "bottom",
  "bottom-start",
  "left-end",
  "left",
  "left-start",
];
const ie = ne.slice(3);
function re(e, t = !1) {
  const o = ie.indexOf(e),
    n = ie.slice(o + 1).concat(ie.slice(0, o));
  return t ? n.reverse() : n;
}
const pe = {
  FLIP: "flip",
  CLOCKWISE: "clockwise",
  COUNTERCLOCKWISE: "counterclockwise",
};
function de(e, t) {
  if (U(e.instance.modifiers, "inner")) return e;
  if (e.flipped && e.placement === e.originalPlacement) return e;
  const o = N(
    e.instance.popper,
    e.instance.reference,
    t.padding,
    t.boundariesElement
  );
  let n = e.placement.split("-")[0],
    i = P(n),
    r = e.placement.split("-")[1] || "",
    p = [];
  switch (t.behavior) {
    case pe.FLIP:
      p = [n, i];
      break;
    case pe.CLOCKWISE:
      p = re(n);
      break;
    case pe.COUNTERCLOCKWISE:
      p = re(n, !0);
      break;
    default:
      p = t.behavior;
  }
  return (
    p.forEach((d, s) => {
      if (n !== d || p.length === s + 1) return e;
      (n = e.placement.split("-")[0]), (i = P(n));
      const a = e.offsets.popper,
        f = e.offsets.reference,
        l = Math.floor,
        m =
          ("left" === n && l(a.right) > l(f.left)) ||
          ("right" === n && l(a.left) < l(f.right)) ||
          ("top" === n && l(a.bottom) > l(f.top)) ||
          ("bottom" === n && l(a.top) < l(f.bottom)),
        h = l(a.left) < l(o.left),
        c = l(a.right) > l(o.right),
        u = l(a.top) < l(o.top),
        g = l(a.bottom) > l(o.bottom),
        b =
          ("left" === n && h) ||
          ("right" === n && c) ||
          ("top" === n && u) ||
          ("bottom" === n && g),
        w = -1 !== ["top", "bottom"].indexOf(n),
        y =
          !!t.flipVariations &&
          ((w && "start" === r && h) ||
            (w && "end" === r && c) ||
            (!w && "start" === r && u) ||
            (!w && "end" === r && g));
      (m || b || y) &&
        ((e.flipped = !0),
        (m || b) && (n = p[s + 1]),
        y && (r = oe(r)),
        (e.placement = n + (r ? "-" + r : "")),
        (e.offsets.popper = O(
          {},
          e.offsets.popper,
          k(e.instance.popper, e.offsets.reference, e.placement)
        )),
        (e = M(e.instance.modifiers, e, "flip")));
    }),
    e
  );
}
function se(e) {
  const { popper: t, reference: o } = e.offsets,
    n = e.placement.split("-")[0],
    i = Math.floor,
    r = -1 !== ["top", "bottom"].indexOf(n),
    p = r ? "right" : "bottom",
    d = r ? "left" : "top",
    s = r ? "width" : "height";
  return (
    t[p] < i(o[d]) && (e.offsets.popper[d] = i(o[d]) - t[s]),
    t[d] > i(o[p]) && (e.offsets.popper[d] = i(o[p])),
    e
  );
}
function ae(e, t, o, n) {
  var i = Math.max;
  const r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
    p = +r[1],
    d = r[2];
  if (!p) return e;
  if (0 === d.indexOf("%")) {
    let e;
    switch (d) {
      case "%p":
        e = o;
        break;
      case "%":
      case "%r":
      default:
        e = n;
    }
    const i = x(e);
    return (i[t] / 100) * p;
  }
  if ("vh" === d || "vw" === d) {
    let e;
    return (
      (e =
        "vh" === d
          ? i(document.documentElement.clientHeight, window.innerHeight || 0)
          : i(document.documentElement.clientWidth, window.innerWidth || 0)),
      (e / 100) * p
    );
  }
  return p;
}
function fe(e, t, o, n) {
  const i = [0, 0],
    r = -1 !== ["right", "left"].indexOf(n),
    p = e.split(/(\+|\-)/).map((e) => e.trim()),
    d = p.indexOf(A(p, (e) => -1 !== e.search(/,|\s/)));
  p[d] &&
    -1 === p[d].indexOf(",") &&
    console.warn(
      "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
    );
  const s = /\s*,\s*|\s+/;
  let a =
    -1 === d
      ? [p]
      : [
          p.slice(0, d).concat([p[d].split(s)[0]]),
          [p[d].split(s)[1]].concat(p.slice(d + 1)),
        ];
  return (
    (a = a.map((e, n) => {
      const i = (1 === n ? !r : r) ? "height" : "width";
      let p = !1;
      return e
        .reduce(
          (e, t) =>
            "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
              ? ((e[e.length - 1] = t), (p = !0), e)
              : p
              ? ((e[e.length - 1] += t), (p = !1), e)
              : e.concat(t),
          []
        )
        .map((e) => ae(e, i, t, o));
    })),
    a.forEach((e, t) => {
      e.forEach((o, n) => {
        _(o) && (i[t] += o * ("-" === e[n - 1] ? -1 : 1));
      });
    }),
    i
  );
}
function le(e, { offset: t }) {
  const {
      placement: o,
      offsets: { popper: n, reference: i },
    } = e,
    r = o.split("-")[0];
  let p;
  return (
    (p = _(+t) ? [+t, 0] : fe(t, n, i, r)),
    "left" === r
      ? ((n.top += p[0]), (n.left -= p[1]))
      : "right" === r
      ? ((n.top += p[0]), (n.left += p[1]))
      : "top" === r
      ? ((n.left += p[0]), (n.top -= p[1]))
      : "bottom" === r && ((n.left += p[0]), (n.top += p[1])),
    (e.popper = n),
    e
  );
}
function me(e, t) {
  let o = t.boundariesElement || l(e.instance.popper);
  e.instance.reference === o && (o = l(o));
  const n = N(e.instance.popper, e.instance.reference, t.padding, o);
  t.boundaries = n;
  const i = t.priority;
  let r = e.offsets.popper;
  const p = {
    primary(e) {
      let o = r[e];
      return (
        r[e] < n[e] && !t.escapeWithReference && (o = Math.max(r[e], n[e])),
        { [e]: o }
      );
    },
    secondary(e) {
      const o = "right" === e ? "left" : "top";
      let i = r[o];
      return (
        r[e] > n[e] &&
          !t.escapeWithReference &&
          (i = Math.min(r[o], n[e] - ("right" === e ? r.width : r.height))),
        { [o]: i }
      );
    },
  };
  return (
    i.forEach((e) => {
      const t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
      r = O({}, r, p[t](e));
    }),
    (e.offsets.popper = r),
    e
  );
}
function he(e) {
  const t = e.placement,
    o = t.split("-")[0],
    n = t.split("-")[1];
  if (n) {
    const { reference: t, popper: i } = e.offsets,
      r = -1 !== ["bottom", "top"].indexOf(o),
      p = r ? "left" : "top",
      d = r ? "width" : "height",
      s = { start: { [p]: t[p] }, end: { [p]: t[p] + t[d] - i[d] } };
    e.offsets.popper = O({}, i, s[n]);
  }
  return e;
}
function ce(e) {
  if (!ee(e.instance.modifiers, "hide", "preventOverflow")) return e;
  const t = e.offsets.reference,
    o = A(e.instance.modifiers, (e) => "preventOverflow" === e.name).boundaries;
  if (
    t.bottom < o.top ||
    t.left > o.right ||
    t.top > o.bottom ||
    t.right < o.left
  ) {
    if (!0 === e.hide) return e;
    (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
  } else {
    if (!1 === e.hide) return e;
    (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
  }
  return e;
}
function ue(e) {
  const t = e.placement,
    o = t.split("-")[0],
    { popper: n, reference: i } = e.offsets,
    r = -1 !== ["left", "right"].indexOf(o),
    p = -1 === ["top", "left"].indexOf(o);
  return (
    (n[r ? "left" : "top"] = i[o] - (p ? n[r ? "width" : "height"] : 0)),
    (e.placement = P(t)),
    (e.offsets.popper = x(n)),
    e
  );
}
var ge = {
    shift: { order: 100, enabled: !0, fn: he },
    offset: { order: 200, enabled: !0, fn: le, offset: 0 },
    preventOverflow: {
      order: 300,
      enabled: !0,
      fn: me,
      priority: ["left", "right", "top", "bottom"],
      padding: 5,
      boundariesElement: "scrollParent",
    },
    keepTogether: { order: 400, enabled: !0, fn: se },
    arrow: { order: 500, enabled: !0, fn: te, element: "[x-arrow]" },
    flip: {
      order: 600,
      enabled: !0,
      fn: de,
      behavior: "flip",
      padding: 5,
      boundariesElement: "viewport",
    },
    inner: { order: 700, enabled: !1, fn: ue },
    hide: { order: 800, enabled: !0, fn: ce },
    computeStyle: {
      order: 850,
      enabled: !0,
      fn: Q,
      gpuAcceleration: !0,
      x: "bottom",
      y: "right",
    },
    applyStyle: {
      order: 900,
      enabled: !0,
      fn: Z,
      onLoad: $,
      gpuAcceleration: void 0,
    },
  },
  be = {
    placement: "bottom",
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: () => {},
    onUpdate: () => {},
    modifiers: ge,
  };
class we {
  constructor(e, t, o = {}) {
    (this.scheduleUpdate = () => requestAnimationFrame(this.update)),
      (this.update = p(this.update.bind(this))),
      (this.options = O({}, we.Defaults, o)),
      (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
      (this.reference = e && e.jquery ? e[0] : e),
      (this.popper = t && t.jquery ? t[0] : t),
      (this.options.modifiers = {}),
      Object.keys(O({}, we.Defaults.modifiers, o.modifiers)).forEach((e) => {
        this.options.modifiers[e] = O(
          {},
          we.Defaults.modifiers[e] || {},
          o.modifiers ? o.modifiers[e] : {}
        );
      }),
      (this.modifiers = Object.keys(this.options.modifiers)
        .map((e) => O({ name: e }, this.options.modifiers[e]))
        .sort((e, t) => e.order - t.order)),
      this.modifiers.forEach((e) => {
        e.enabled &&
          d(e.onLoad) &&
          e.onLoad(this.reference, this.popper, this.options, e, this.state);
      }),
      this.update();
    const n = this.options.eventsEnabled;
    n && this.enableEventListeners(), (this.state.eventsEnabled = n);
  }
  update() {
    return R.call(this);
  }
  destroy() {
    return F.call(this);
  }
  enableEventListeners() {
    return G.call(this);
  }
  disableEventListeners() {
    return q.call(this);
  }
}
(we.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
  (we.placements = ne),
  (we.Defaults = be);
export default we;
//# sourceMappingURL=popper.min.js.map

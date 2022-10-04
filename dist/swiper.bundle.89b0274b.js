/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
function ne(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function se(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {}), Object.keys(t).forEach(function(s) {
    typeof e[s] > "u" ? e[s] = t[s] : ne(t[s]) && ne(e[s]) && Object.keys(t[s]).length > 0 && se(e[s], t[s]);
  });
}
var T = typeof document < "u" ? document : {}, ce = {
  body: {},
  addEventListener: function() {
  },
  removeEventListener: function() {
  },
  activeElement: {
    blur: function() {
    },
    nodeName: ""
  },
  querySelector: function() {
    return null;
  },
  querySelectorAll: function() {
    return [];
  },
  getElementById: function() {
    return null;
  },
  createEvent: function() {
    return {
      initEvent: function() {
      }
    };
  },
  createElement: function() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function() {
      },
      getElementsByTagName: function() {
        return [];
      }
    };
  },
  createElementNS: function() {
    return {};
  },
  importNode: function() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
se(T, ce);
var h = typeof window < "u" ? window : {}, ue = {
  document: ce,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState: function() {
    },
    pushState: function() {
    },
    go: function() {
    },
    back: function() {
    }
  },
  CustomEvent: function() {
    return this;
  },
  addEventListener: function() {
  },
  removeEventListener: function() {
  },
  getComputedStyle: function() {
    return {
      getPropertyValue: function() {
        return "";
      }
    };
  },
  Image: function() {
  },
  Date: function() {
  },
  screen: {},
  setTimeout: function() {
  },
  clearTimeout: function() {
  },
  matchMedia: function() {
    return {};
  }
};
se(h, ue);
class C {
  constructor(t) {
    const s = this;
    for (let i = 0; i < t.length; i += 1)
      s[i] = t[i];
    return s.length = t.length, this;
  }
}
function w(e, t) {
  const s = [];
  let i = 0;
  if (e && !t && e instanceof C)
    return e;
  if (e) {
    if (typeof e == "string") {
      let n, r;
      const a = e.trim();
      if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
        let l = "div";
        for (a.indexOf("<li") === 0 && (l = "ul"), a.indexOf("<tr") === 0 && (l = "tbody"), (a.indexOf("<td") === 0 || a.indexOf("<th") === 0) && (l = "tr"), a.indexOf("<tbody") === 0 && (l = "table"), a.indexOf("<option") === 0 && (l = "select"), r = T.createElement(l), r.innerHTML = a, i = 0; i < r.childNodes.length; i += 1)
          s.push(r.childNodes[i]);
      } else
        for (!t && e[0] === "#" && !e.match(/[ .<>:~]/) ? n = [T.getElementById(e.trim().split("#")[1])] : n = (t || T).querySelectorAll(e.trim()), i = 0; i < n.length; i += 1)
          n[i] && s.push(n[i]);
    } else if (e.nodeType || e === h || e === T)
      s.push(e);
    else if (e.length > 0 && e[0].nodeType)
      for (i = 0; i < e.length; i += 1)
        s.push(e[i]);
  }
  return new C(s);
}
w.fn = C.prototype;
w.Class = C;
w.Dom7 = C;
function ie(e) {
  const t = [];
  for (let s = 0; s < e.length; s += 1)
    t.indexOf(e[s]) === -1 && t.push(e[s]);
  return t;
}
function pe(e) {
  if (typeof e > "u")
    return this;
  const t = e.split(" ");
  for (let s = 0; s < t.length; s += 1)
    for (let i = 0; i < this.length; i += 1)
      typeof this[i] < "u" && typeof this[i].classList < "u" && this[i].classList.add(t[s]);
  return this;
}
function fe(e) {
  const t = e.split(" ");
  for (let s = 0; s < t.length; s += 1)
    for (let i = 0; i < this.length; i += 1)
      typeof this[i] < "u" && typeof this[i].classList < "u" && this[i].classList.remove(t[s]);
  return this;
}
function he(e) {
  return this[0] ? this[0].classList.contains(e) : !1;
}
function me(e) {
  const t = e.split(" ");
  for (let s = 0; s < t.length; s += 1)
    for (let i = 0; i < this.length; i += 1)
      typeof this[i] < "u" && typeof this[i].classList < "u" && this[i].classList.toggle(t[s]);
  return this;
}
function ge(e, t) {
  if (arguments.length === 1 && typeof e == "string")
    return this[0] ? this[0].getAttribute(e) : void 0;
  for (let s = 0; s < this.length; s += 1)
    if (arguments.length === 2)
      this[s].setAttribute(e, t);
    else
      for (const i in e)
        this[s][i] = e[i], this[s].setAttribute(i, e[i]);
  return this;
}
function ve(e) {
  for (let t = 0; t < this.length; t += 1)
    this[t].removeAttribute(e);
  return this;
}
function we(e, t) {
  let s;
  if (typeof t > "u") {
    if (s = this[0], s) {
      if (s.dom7ElementDataStorage && e in s.dom7ElementDataStorage)
        return s.dom7ElementDataStorage[e];
      const i = s.getAttribute(`data-${e}`);
      return i || void 0;
    }
    return;
  }
  for (let i = 0; i < this.length; i += 1)
    s = this[i], s.dom7ElementDataStorage || (s.dom7ElementDataStorage = {}), s.dom7ElementDataStorage[e] = t;
  return this;
}
function be(e) {
  for (let t = 0; t < this.length; t += 1) {
    const s = this[t].style;
    s.webkitTransform = e, s.transform = e;
  }
  return this;
}
function ye(e) {
  typeof e != "string" && (e = `${e}ms`);
  for (let t = 0; t < this.length; t += 1) {
    const s = this[t].style;
    s.webkitTransitionDuration = e, s.transitionDuration = e;
  }
  return this;
}
function Te(...e) {
  let [t, s, i, n] = e;
  typeof e[1] == "function" && ([t, i, n] = e, s = void 0), n || (n = !1);
  function r(c) {
    const d = c.target;
    if (!d)
      return;
    const u = c.target.dom7EventData || [];
    if (u.indexOf(c) < 0 && u.unshift(c), w(d).is(s))
      i.apply(d, u);
    else {
      const p = w(d).parents();
      for (let f = 0; f < p.length; f += 1)
        w(p[f]).is(s) && i.apply(p[f], u);
    }
  }
  function a(c) {
    const d = c && c.target ? c.target.dom7EventData || [] : [];
    d.indexOf(c) < 0 && d.unshift(c), i.apply(this, d);
  }
  const l = t.split(" ");
  let o;
  for (let c = 0; c < this.length; c += 1) {
    const d = this[c];
    if (s)
      for (o = 0; o < l.length; o += 1) {
        const u = l[o];
        d.dom7LiveListeners || (d.dom7LiveListeners = {}), d.dom7LiveListeners[u] || (d.dom7LiveListeners[u] = []), d.dom7LiveListeners[u].push({
          listener: i,
          proxyListener: r
        }), d.addEventListener(u, r, n);
      }
    else
      for (o = 0; o < l.length; o += 1) {
        const u = l[o];
        d.dom7Listeners || (d.dom7Listeners = {}), d.dom7Listeners[u] || (d.dom7Listeners[u] = []), d.dom7Listeners[u].push({
          listener: i,
          proxyListener: a
        }), d.addEventListener(u, a, n);
      }
  }
  return this;
}
function Ee(...e) {
  let [t, s, i, n] = e;
  typeof e[1] == "function" && ([t, i, n] = e, s = void 0), n || (n = !1);
  const r = t.split(" ");
  for (let a = 0; a < r.length; a += 1) {
    const l = r[a];
    for (let o = 0; o < this.length; o += 1) {
      const c = this[o];
      let d;
      if (!s && c.dom7Listeners ? d = c.dom7Listeners[l] : s && c.dom7LiveListeners && (d = c.dom7LiveListeners[l]), d && d.length)
        for (let u = d.length - 1; u >= 0; u -= 1) {
          const p = d[u];
          i && p.listener === i || i && p.listener && p.listener.dom7proxy && p.listener.dom7proxy === i ? (c.removeEventListener(l, p.proxyListener, n), d.splice(u, 1)) : i || (c.removeEventListener(l, p.proxyListener, n), d.splice(u, 1));
        }
    }
  }
  return this;
}
function Se(...e) {
  const t = e[0].split(" "), s = e[1];
  for (let i = 0; i < t.length; i += 1) {
    const n = t[i];
    for (let r = 0; r < this.length; r += 1) {
      const a = this[r];
      let l;
      try {
        l = new h.CustomEvent(n, {
          detail: s,
          bubbles: !0,
          cancelable: !0
        });
      } catch {
        l = T.createEvent("Event"), l.initEvent(n, !0, !0), l.detail = s;
      }
      a.dom7EventData = e.filter((o, c) => c > 0), a.dispatchEvent(l), a.dom7EventData = [], delete a.dom7EventData;
    }
  }
  return this;
}
function xe(e) {
  const t = ["webkitTransitionEnd", "transitionend"], s = this;
  let i;
  function n(r) {
    if (r.target === this)
      for (e.call(this, r), i = 0; i < t.length; i += 1)
        s.off(t[i], n);
  }
  if (e)
    for (i = 0; i < t.length; i += 1)
      s.on(t[i], n);
  return this;
}
function Ce(e) {
  if (this.length > 0) {
    if (e) {
      const t = this.styles();
      return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
    }
    return this[0].offsetWidth;
  }
  return null;
}
function $e(e) {
  if (this.length > 0) {
    if (e) {
      const t = this.styles();
      return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
    }
    return this[0].offsetHeight;
  }
  return null;
}
function Me() {
  if (this.length > 0) {
    const e = this[0], t = e.getBoundingClientRect(), s = T.body, i = e.clientTop || s.clientTop || 0, n = e.clientLeft || s.clientLeft || 0, r = e === h ? h.scrollY : e.scrollTop, a = e === h ? h.scrollX : e.scrollLeft;
    return {
      top: t.top + r - i,
      left: t.left + a - n
    };
  }
  return null;
}
function Pe() {
  return this[0] ? h.getComputedStyle(this[0], null) : {};
}
function ze(e, t) {
  let s;
  if (arguments.length === 1)
    if (typeof e == "string") {
      if (this[0])
        return h.getComputedStyle(this[0], null).getPropertyValue(e);
    } else {
      for (s = 0; s < this.length; s += 1)
        for (let i in e)
          this[s].style[i] = e[i];
      return this;
    }
  if (arguments.length === 2 && typeof e == "string") {
    for (s = 0; s < this.length; s += 1)
      this[s].style[e] = t;
    return this;
  }
  return this;
}
function Le(e) {
  if (!e)
    return this;
  for (let t = 0; t < this.length; t += 1)
    if (e.call(this[t], t, this[t]) === !1)
      return this;
  return this;
}
function ke(e) {
  const t = [], s = this;
  for (let i = 0; i < s.length; i += 1)
    e.call(s[i], i, s[i]) && t.push(s[i]);
  return new C(t);
}
function De(e) {
  if (typeof e > "u")
    return this[0] ? this[0].innerHTML : void 0;
  for (let t = 0; t < this.length; t += 1)
    this[t].innerHTML = e;
  return this;
}
function Ie(e) {
  if (typeof e > "u")
    return this[0] ? this[0].textContent.trim() : null;
  for (let t = 0; t < this.length; t += 1)
    this[t].textContent = e;
  return this;
}
function Oe(e) {
  const t = this[0];
  let s, i;
  if (!t || typeof e > "u")
    return !1;
  if (typeof e == "string") {
    if (t.matches)
      return t.matches(e);
    if (t.webkitMatchesSelector)
      return t.webkitMatchesSelector(e);
    if (t.msMatchesSelector)
      return t.msMatchesSelector(e);
    for (s = w(e), i = 0; i < s.length; i += 1)
      if (s[i] === t)
        return !0;
    return !1;
  } else {
    if (e === T)
      return t === T;
    if (e === h)
      return t === h;
  }
  if (e.nodeType || e instanceof C) {
    for (s = e.nodeType ? [e] : e, i = 0; i < s.length; i += 1)
      if (s[i] === t)
        return !0;
    return !1;
  }
  return !1;
}
function Ge() {
  let e = this[0], t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
function Be(e) {
  if (typeof e > "u")
    return this;
  const t = this.length;
  let s;
  return e > t - 1 ? new C([]) : e < 0 ? (s = t + e, s < 0 ? new C([]) : new C([this[s]])) : new C([this[e]]);
}
function Ae(...e) {
  let t;
  for (let s = 0; s < e.length; s += 1) {
    t = e[s];
    for (let i = 0; i < this.length; i += 1)
      if (typeof t == "string") {
        const n = T.createElement("div");
        for (n.innerHTML = t; n.firstChild; )
          this[i].appendChild(n.firstChild);
      } else if (t instanceof C)
        for (let n = 0; n < t.length; n += 1)
          this[i].appendChild(t[n]);
      else
        this[i].appendChild(t);
  }
  return this;
}
function He(e) {
  let t, s;
  for (t = 0; t < this.length; t += 1)
    if (typeof e == "string") {
      const i = T.createElement("div");
      for (i.innerHTML = e, s = i.childNodes.length - 1; s >= 0; s -= 1)
        this[t].insertBefore(i.childNodes[s], this[t].childNodes[0]);
    } else if (e instanceof C)
      for (s = 0; s < e.length; s += 1)
        this[t].insertBefore(e[s], this[t].childNodes[0]);
    else
      this[t].insertBefore(e, this[t].childNodes[0]);
  return this;
}
function Xe(e) {
  return this.length > 0 ? e ? this[0].nextElementSibling && w(this[0].nextElementSibling).is(e) ? new C([this[0].nextElementSibling]) : new C([]) : this[0].nextElementSibling ? new C([this[0].nextElementSibling]) : new C([]) : new C([]);
}
function Ye(e) {
  const t = [];
  let s = this[0];
  if (!s)
    return new C([]);
  for (; s.nextElementSibling; ) {
    const i = s.nextElementSibling;
    e ? w(i).is(e) && t.push(i) : t.push(i), s = i;
  }
  return new C(t);
}
function Ve(e) {
  if (this.length > 0) {
    const t = this[0];
    return e ? t.previousElementSibling && w(t.previousElementSibling).is(e) ? new C([t.previousElementSibling]) : new C([]) : t.previousElementSibling ? new C([t.previousElementSibling]) : new C([]);
  }
  return new C([]);
}
function We(e) {
  const t = [];
  let s = this[0];
  if (!s)
    return new C([]);
  for (; s.previousElementSibling; ) {
    const i = s.previousElementSibling;
    e ? w(i).is(e) && t.push(i) : t.push(i), s = i;
  }
  return new C(t);
}
function Re(e) {
  const t = [];
  for (let s = 0; s < this.length; s += 1)
    this[s].parentNode !== null && (e ? w(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
  return w(ie(t));
}
function Fe(e) {
  const t = [];
  for (let s = 0; s < this.length; s += 1) {
    let i = this[s].parentNode;
    for (; i; )
      e ? w(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
  }
  return w(ie(t));
}
function Ne(e) {
  let t = this;
  return typeof e > "u" ? new C([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
}
function je(e) {
  const t = [];
  for (let s = 0; s < this.length; s += 1) {
    const i = this[s].querySelectorAll(e);
    for (let n = 0; n < i.length; n += 1)
      t.push(i[n]);
  }
  return new C(t);
}
function qe(e) {
  const t = [];
  for (let s = 0; s < this.length; s += 1) {
    const i = this[s].childNodes;
    for (let n = 0; n < i.length; n += 1)
      e ? i[n].nodeType === 1 && w(i[n]).is(e) && t.push(i[n]) : i[n].nodeType === 1 && t.push(i[n]);
  }
  return new C(ie(t));
}
function Ue() {
  for (let e = 0; e < this.length; e += 1)
    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
  return this;
}
function Ke(...e) {
  const t = this;
  let s, i;
  for (s = 0; s < e.length; s += 1) {
    const n = w(e[s]);
    for (i = 0; i < n.length; i += 1)
      t[t.length] = n[i], t.length += 1;
  }
  return t;
}
const re = {
  addClass: pe,
  removeClass: fe,
  hasClass: he,
  toggleClass: me,
  attr: ge,
  removeAttr: ve,
  data: we,
  transform: be,
  transition: ye,
  on: Te,
  off: Ee,
  trigger: Se,
  transitionEnd: xe,
  outerWidth: Ce,
  outerHeight: $e,
  offset: Me,
  css: ze,
  each: Le,
  html: De,
  text: Ie,
  is: Oe,
  index: Ge,
  eq: Be,
  append: Ae,
  prepend: He,
  next: Xe,
  nextAll: Ye,
  prev: Ve,
  prevAll: We,
  parent: Re,
  parents: Fe,
  closest: Ne,
  find: je,
  children: qe,
  filter: ke,
  remove: Ue,
  add: Ke,
  styles: Pe
};
Object.keys(re).forEach((e) => {
  w.fn[e] = w.fn[e] || re[e];
});
const g = {
  deleteProps(e) {
    const t = e;
    Object.keys(t).forEach((s) => {
      try {
        t[s] = null;
      } catch {
      }
      try {
        delete t[s];
      } catch {
      }
    });
  },
  nextTick(e, t = 0) {
    return setTimeout(e, t);
  },
  now() {
    return Date.now();
  },
  getTranslate(e, t = "x") {
    let s, i, n;
    const r = h.getComputedStyle(e, null);
    return h.WebKitCSSMatrix ? (i = r.transform || r.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((a) => a.replace(",", ".")).join(", ")), n = new h.WebKitCSSMatrix(i === "none" ? "" : i)) : (n = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = n.toString().split(",")), t === "x" && (h.WebKitCSSMatrix ? i = n.m41 : s.length === 16 ? i = parseFloat(s[12]) : i = parseFloat(s[4])), t === "y" && (h.WebKitCSSMatrix ? i = n.m42 : s.length === 16 ? i = parseFloat(s[13]) : i = parseFloat(s[5])), i || 0;
  },
  parseUrlQuery(e) {
    const t = {};
    let s = e || h.location.href, i, n, r, a;
    if (typeof s == "string" && s.length)
      for (s = s.indexOf("?") > -1 ? s.replace(/\S*\?/, "") : "", n = s.split("&").filter((l) => l !== ""), a = n.length, i = 0; i < a; i += 1)
        r = n[i].replace(/#\S+/g, "").split("="), t[decodeURIComponent(r[0])] = typeof r[1] > "u" ? void 0 : decodeURIComponent(r[1]) || "";
    return t;
  },
  isObject(e) {
    return typeof e == "object" && e !== null && e.constructor && e.constructor === Object;
  },
  extend(...e) {
    const t = Object(e[0]), s = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < e.length; i += 1) {
      const n = e[i];
      if (n != null) {
        const r = Object.keys(Object(n)).filter((a) => s.indexOf(a) < 0);
        for (let a = 0, l = r.length; a < l; a += 1) {
          const o = r[a], c = Object.getOwnPropertyDescriptor(n, o);
          c !== void 0 && c.enumerable && (g.isObject(t[o]) && g.isObject(n[o]) ? g.extend(t[o], n[o]) : !g.isObject(t[o]) && g.isObject(n[o]) ? (t[o] = {}, g.extend(t[o], n[o])) : t[o] = n[o]);
        }
      }
    }
    return t;
  }
}, y = function() {
  return {
    touch: !!("ontouchstart" in h || h.DocumentTouch && T instanceof h.DocumentTouch),
    pointerEvents: !!h.PointerEvent && "maxTouchPoints" in h.navigator && h.navigator.maxTouchPoints >= 0,
    observer: function() {
      return "MutationObserver" in h || "WebkitMutationObserver" in h;
    }(),
    passiveListener: function() {
      let s = !1;
      try {
        const i = Object.defineProperty({}, "passive", {
          get() {
            s = !0;
          }
        });
        h.addEventListener("testPassiveListener", null, i);
      } catch {
      }
      return s;
    }(),
    gestures: function() {
      return "ongesturestart" in h;
    }()
  };
}();
class ae {
  constructor(t = {}) {
    const s = this;
    s.params = t, s.eventsListeners = {}, s.params && s.params.on && Object.keys(s.params.on).forEach((i) => {
      s.on(i, s.params.on[i]);
    });
  }
  on(t, s, i) {
    const n = this;
    if (typeof s != "function")
      return n;
    const r = i ? "unshift" : "push";
    return t.split(" ").forEach((a) => {
      n.eventsListeners[a] || (n.eventsListeners[a] = []), n.eventsListeners[a][r](s);
    }), n;
  }
  once(t, s, i) {
    const n = this;
    if (typeof s != "function")
      return n;
    function r(...a) {
      n.off(t, r), r.f7proxy && delete r.f7proxy, s.apply(n, a);
    }
    return r.f7proxy = s, n.on(t, r, i);
  }
  off(t, s) {
    const i = this;
    return i.eventsListeners && t.split(" ").forEach((n) => {
      typeof s > "u" ? i.eventsListeners[n] = [] : i.eventsListeners[n] && i.eventsListeners[n].length && i.eventsListeners[n].forEach((r, a) => {
        (r === s || r.f7proxy && r.f7proxy === s) && i.eventsListeners[n].splice(a, 1);
      });
    }), i;
  }
  emit(...t) {
    const s = this;
    if (!s.eventsListeners)
      return s;
    let i, n, r;
    return typeof t[0] == "string" || Array.isArray(t[0]) ? (i = t[0], n = t.slice(1, t.length), r = s) : (i = t[0].events, n = t[0].data, r = t[0].context || s), (Array.isArray(i) ? i : i.split(" ")).forEach((l) => {
      if (s.eventsListeners && s.eventsListeners[l]) {
        const o = [];
        s.eventsListeners[l].forEach((c) => {
          o.push(c);
        }), o.forEach((c) => {
          c.apply(r, n);
        });
      }
    }), s;
  }
  useModulesParams(t) {
    const s = this;
    !s.modules || Object.keys(s.modules).forEach((i) => {
      const n = s.modules[i];
      n.params && g.extend(t, n.params);
    });
  }
  useModules(t = {}) {
    const s = this;
    !s.modules || Object.keys(s.modules).forEach((i) => {
      const n = s.modules[i], r = t[i] || {};
      n.instance && Object.keys(n.instance).forEach((a) => {
        const l = n.instance[a];
        typeof l == "function" ? s[a] = l.bind(s) : s[a] = l;
      }), n.on && s.on && Object.keys(n.on).forEach((a) => {
        s.on(a, n.on[a]);
      }), n.create && n.create.bind(s)(r);
    });
  }
  static set components(t) {
    const s = this;
    !s.use || s.use(t);
  }
  static installModule(t, ...s) {
    const i = this;
    i.prototype.modules || (i.prototype.modules = {});
    const n = t.name || `${Object.keys(i.prototype.modules).length}_${g.now()}`;
    return i.prototype.modules[n] = t, t.proto && Object.keys(t.proto).forEach((r) => {
      i.prototype[r] = t.proto[r];
    }), t.static && Object.keys(t.static).forEach((r) => {
      i[r] = t.static[r];
    }), t.install && t.install.apply(i, s), i;
  }
  static use(t, ...s) {
    const i = this;
    return Array.isArray(t) ? (t.forEach((n) => i.installModule(n)), i) : i.installModule(t, ...s);
  }
}
function _e() {
  const e = this;
  let t, s;
  const i = e.$el;
  typeof e.params.width < "u" ? t = e.params.width : t = i[0].clientWidth, typeof e.params.height < "u" ? s = e.params.height : s = i[0].clientHeight, !(t === 0 && e.isHorizontal() || s === 0 && e.isVertical()) && (t = t - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), s = s - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), g.extend(e, {
    width: t,
    height: s,
    size: e.isHorizontal() ? t : s
  }));
}
function Qe() {
  const e = this, t = e.params, {
    $wrapperEl: s,
    size: i,
    rtlTranslate: n,
    wrongRTL: r
  } = e, a = e.virtual && t.virtual.enabled, l = a ? e.virtual.slides.length : e.slides.length, o = s.children(`.${e.params.slideClass}`), c = a ? e.virtual.slides.length : o.length;
  let d = [];
  const u = [], p = [];
  function f(S) {
    return t.cssMode ? S !== o.length - 1 : !0;
  }
  let b = t.slidesOffsetBefore;
  typeof b == "function" && (b = t.slidesOffsetBefore.call(e));
  let m = t.slidesOffsetAfter;
  typeof m == "function" && (m = t.slidesOffsetAfter.call(e));
  const L = e.snapGrid.length, E = e.snapGrid.length;
  let x = t.spaceBetween, v = -b, H = 0, G = 0;
  if (typeof i > "u")
    return;
  typeof x == "string" && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * i), e.virtualSize = -x, n ? o.css({ marginLeft: "", marginTop: "" }) : o.css({ marginRight: "", marginBottom: "" });
  let k;
  t.slidesPerColumn > 1 && (Math.floor(c / t.slidesPerColumn) === c / e.params.slidesPerColumn ? k = c : k = Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn, t.slidesPerView !== "auto" && t.slidesPerColumnFill === "row" && (k = Math.max(k, t.slidesPerView * t.slidesPerColumn)));
  let M;
  const z = t.slidesPerColumn, B = k / z, q = Math.floor(c / t.slidesPerColumn);
  for (let S = 0; S < c; S += 1) {
    M = 0;
    const P = o.eq(S);
    if (t.slidesPerColumn > 1) {
      let $, D, O;
      if (t.slidesPerColumnFill === "row" && t.slidesPerGroup > 1) {
        const Y = Math.floor(S / (t.slidesPerGroup * t.slidesPerColumn)), W = S - t.slidesPerColumn * t.slidesPerGroup * Y, R = Y === 0 ? t.slidesPerGroup : Math.min(Math.ceil((c - Y * z * t.slidesPerGroup) / z), t.slidesPerGroup);
        O = Math.floor(W / R), D = W - O * R + Y * t.slidesPerGroup, $ = D + O * k / z, P.css({
          "-webkit-box-ordinal-group": $,
          "-moz-box-ordinal-group": $,
          "-ms-flex-order": $,
          "-webkit-order": $,
          order: $
        });
      } else
        t.slidesPerColumnFill === "column" ? (D = Math.floor(S / z), O = S - D * z, (D > q || D === q && O === z - 1) && (O += 1, O >= z && (O = 0, D += 1))) : (O = Math.floor(S / B), D = S - O * B);
      P.css(
        `margin-${e.isHorizontal() ? "top" : "left"}`,
        O !== 0 && t.spaceBetween && `${t.spaceBetween}px`
      );
    }
    if (P.css("display") !== "none") {
      if (t.slidesPerView === "auto") {
        const $ = h.getComputedStyle(P[0], null), D = P[0].style.transform, O = P[0].style.webkitTransform;
        if (D && (P[0].style.transform = "none"), O && (P[0].style.webkitTransform = "none"), t.roundLengths)
          M = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
        else if (e.isHorizontal()) {
          const Y = parseFloat($.getPropertyValue("width")), W = parseFloat($.getPropertyValue("padding-left")), R = parseFloat($.getPropertyValue("padding-right")), F = parseFloat($.getPropertyValue("margin-left")), N = parseFloat($.getPropertyValue("margin-right")), j = $.getPropertyValue("box-sizing");
          j && j === "border-box" ? M = Y + F + N : M = Y + W + R + F + N;
        } else {
          const Y = parseFloat($.getPropertyValue("height")), W = parseFloat($.getPropertyValue("padding-top")), R = parseFloat($.getPropertyValue("padding-bottom")), F = parseFloat($.getPropertyValue("margin-top")), N = parseFloat($.getPropertyValue("margin-bottom")), j = $.getPropertyValue("box-sizing");
          j && j === "border-box" ? M = Y + F + N : M = Y + W + R + F + N;
        }
        D && (P[0].style.transform = D), O && (P[0].style.webkitTransform = O), t.roundLengths && (M = Math.floor(M));
      } else
        M = (i - (t.slidesPerView - 1) * x) / t.slidesPerView, t.roundLengths && (M = Math.floor(M)), o[S] && (e.isHorizontal() ? o[S].style.width = `${M}px` : o[S].style.height = `${M}px`);
      o[S] && (o[S].swiperSlideSize = M), p.push(M), t.centeredSlides ? (v = v + M / 2 + H / 2 + x, H === 0 && S !== 0 && (v = v - i / 2 - x), S === 0 && (v = v - i / 2 - x), Math.abs(v) < 1 / 1e3 && (v = 0), t.roundLengths && (v = Math.floor(v)), G % t.slidesPerGroup === 0 && d.push(v), u.push(v)) : (t.roundLengths && (v = Math.floor(v)), (G - Math.min(e.params.slidesPerGroupSkip, G)) % e.params.slidesPerGroup === 0 && d.push(v), u.push(v), v = v + M + x), e.virtualSize += M + x, H = M, G += 1;
    }
  }
  e.virtualSize = Math.max(e.virtualSize, i) + m;
  let V;
  if (n && r && (t.effect === "slide" || t.effect === "coverflow") && s.css({ width: `${e.virtualSize + t.spaceBetween}px` }), t.setWrapperSize && (e.isHorizontal() ? s.css({ width: `${e.virtualSize + t.spaceBetween}px` }) : s.css({ height: `${e.virtualSize + t.spaceBetween}px` })), t.slidesPerColumn > 1 && (e.virtualSize = (M + t.spaceBetween) * k, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? s.css({ width: `${e.virtualSize + t.spaceBetween}px` }) : s.css({ height: `${e.virtualSize + t.spaceBetween}px` }), t.centeredSlides)) {
    V = [];
    for (let S = 0; S < d.length; S += 1) {
      let P = d[S];
      t.roundLengths && (P = Math.floor(P)), d[S] < e.virtualSize + d[0] && V.push(P);
    }
    d = V;
  }
  if (!t.centeredSlides) {
    V = [];
    for (let S = 0; S < d.length; S += 1) {
      let P = d[S];
      t.roundLengths && (P = Math.floor(P)), d[S] <= e.virtualSize - i && V.push(P);
    }
    d = V, Math.floor(e.virtualSize - i) - Math.floor(d[d.length - 1]) > 1 && d.push(e.virtualSize - i);
  }
  if (d.length === 0 && (d = [0]), t.spaceBetween !== 0 && (e.isHorizontal() ? n ? o.filter(f).css({ marginLeft: `${x}px` }) : o.filter(f).css({ marginRight: `${x}px` }) : o.filter(f).css({ marginBottom: `${x}px` })), t.centeredSlides && t.centeredSlidesBounds) {
    let S = 0;
    p.forEach(($) => {
      S += $ + (t.spaceBetween ? t.spaceBetween : 0);
    }), S -= t.spaceBetween;
    const P = S - i;
    d = d.map(($) => $ < 0 ? -b : $ > P ? P + m : $);
  }
  if (t.centerInsufficientSlides) {
    let S = 0;
    if (p.forEach((P) => {
      S += P + (t.spaceBetween ? t.spaceBetween : 0);
    }), S -= t.spaceBetween, S < i) {
      const P = (i - S) / 2;
      d.forEach(($, D) => {
        d[D] = $ - P;
      }), u.forEach(($, D) => {
        u[D] = $ + P;
      });
    }
  }
  g.extend(e, {
    slides: o,
    snapGrid: d,
    slidesGrid: u,
    slidesSizesGrid: p
  }), c !== l && e.emit("slidesLengthChange"), d.length !== L && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), u.length !== E && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
}
function Ze(e) {
  const t = this, s = [];
  let i = 0, n;
  if (typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed), t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      t.visibleSlides.each((r, a) => {
        s.push(a);
      });
    else
      for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
        const r = t.activeIndex + n;
        if (r > t.slides.length)
          break;
        s.push(t.slides.eq(r)[0]);
      }
  else
    s.push(t.slides.eq(t.activeIndex)[0]);
  for (n = 0; n < s.length; n += 1)
    if (typeof s[n] < "u") {
      const r = s[n].offsetHeight;
      i = r > i ? r : i;
    }
  i && t.$wrapperEl.css("height", `${i}px`);
}
function Je() {
  const e = this, t = e.slides;
  for (let s = 0; s < t.length; s += 1)
    t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop;
}
function et(e = this && this.translate || 0) {
  const t = this, s = t.params, { slides: i, rtlTranslate: n } = t;
  if (i.length === 0)
    return;
  typeof i[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let r = -e;
  n && (r = e), i.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
  for (let a = 0; a < i.length; a += 1) {
    const l = i[a], o = (r + (s.centeredSlides ? t.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + s.spaceBetween);
    if (s.watchSlidesVisibility || s.centeredSlides && s.autoHeight) {
      const c = -(r - l.swiperSlideOffset), d = c + t.slidesSizesGrid[a];
      (c >= 0 && c < t.size - 1 || d > 1 && d <= t.size || c <= 0 && d >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(a), i.eq(a).addClass(s.slideVisibleClass));
    }
    l.progress = n ? -o : o;
  }
  t.visibleSlides = w(t.visibleSlides);
}
function tt(e) {
  const t = this;
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1;
    e = t && t.translate && t.translate * c || 0;
  }
  const s = t.params, i = t.maxTranslate() - t.minTranslate();
  let { progress: n, isBeginning: r, isEnd: a } = t;
  const l = r, o = a;
  i === 0 ? (n = 0, r = !0, a = !0) : (n = (e - t.minTranslate()) / i, r = n <= 0, a = n >= 1), g.extend(t, {
    progress: n,
    isBeginning: r,
    isEnd: a
  }), (s.watchSlidesProgress || s.watchSlidesVisibility || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), a && !o && t.emit("reachEnd toEdge"), (l && !r || o && !a) && t.emit("fromEdge"), t.emit("progress", n);
}
function st() {
  const e = this, {
    slides: t,
    params: s,
    $wrapperEl: i,
    activeIndex: n,
    realIndex: r
  } = e, a = e.virtual && s.virtual.enabled;
  t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`);
  let l;
  a ? l = e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${n}"]`) : l = t.eq(n), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
  let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
  s.loop && o.length === 0 && (o = t.eq(0), o.addClass(s.slideNextClass));
  let c = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
  s.loop && c.length === 0 && (c = t.eq(-1), c.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), c.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass));
}
function it(e) {
  const t = this, s = t.rtlTranslate ? t.translate : -t.translate, {
    slidesGrid: i,
    snapGrid: n,
    params: r,
    activeIndex: a,
    realIndex: l,
    snapIndex: o
  } = t;
  let c = e, d;
  if (typeof c > "u") {
    for (let p = 0; p < i.length; p += 1)
      typeof i[p + 1] < "u" ? s >= i[p] && s < i[p + 1] - (i[p + 1] - i[p]) / 2 ? c = p : s >= i[p] && s < i[p + 1] && (c = p + 1) : s >= i[p] && (c = p);
    r.normalizeSlideIndex && (c < 0 || typeof c > "u") && (c = 0);
  }
  if (n.indexOf(s) >= 0)
    d = n.indexOf(s);
  else {
    const p = Math.min(r.slidesPerGroupSkip, c);
    d = p + Math.floor((c - p) / r.slidesPerGroup);
  }
  if (d >= n.length && (d = n.length - 1), c === a) {
    d !== o && (t.snapIndex = d, t.emit("snapIndexChange"));
    return;
  }
  const u = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
  g.extend(t, {
    snapIndex: d,
    realIndex: u,
    previousIndex: a,
    activeIndex: c
  }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== u && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
}
function nt(e) {
  const t = this, s = t.params, i = w(e.target).closest(`.${s.slideClass}`)[0];
  let n = !1;
  if (i)
    for (let r = 0; r < t.slides.length; r += 1)
      t.slides[r] === i && (n = !0);
  if (i && n)
    t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(w(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = w(i).index();
  else {
    t.clickedSlide = void 0, t.clickedIndex = void 0;
    return;
  }
  s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
}
var rt = {
  updateSize: _e,
  updateSlides: Qe,
  updateAutoHeight: Ze,
  updateSlidesOffset: Je,
  updateSlidesProgress: et,
  updateProgress: tt,
  updateSlidesClasses: st,
  updateActiveIndex: it,
  updateClickedSlide: nt
};
function at(e = this.isHorizontal() ? "x" : "y") {
  const t = this, {
    params: s,
    rtlTranslate: i,
    translate: n,
    $wrapperEl: r
  } = t;
  if (s.virtualTranslate)
    return i ? -n : n;
  if (s.cssMode)
    return n;
  let a = g.getTranslate(r[0], e);
  return i && (a = -a), a || 0;
}
function lt(e, t) {
  const s = this, {
    rtlTranslate: i,
    params: n,
    $wrapperEl: r,
    wrapperEl: a,
    progress: l
  } = s;
  let o = 0, c = 0;
  const d = 0;
  s.isHorizontal() ? o = i ? -e : e : c = e, n.roundLengths && (o = Math.floor(o), c = Math.floor(c)), n.cssMode ? a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -c : n.virtualTranslate || r.transform(`translate3d(${o}px, ${c}px, ${d}px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : c;
  let u;
  const p = s.maxTranslate() - s.minTranslate();
  p === 0 ? u = 0 : u = (e - s.minTranslate()) / p, u !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
}
function ot() {
  return -this.snapGrid[0];
}
function dt() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function ct(e = 0, t = this.params.speed, s = !0, i = !0, n) {
  const r = this, {
    params: a,
    wrapperEl: l
  } = r;
  if (r.animating && a.preventInteractionOnTransition)
    return !1;
  const o = r.minTranslate(), c = r.maxTranslate();
  let d;
  if (i && e > o ? d = o : i && e < c ? d = c : d = e, r.updateProgress(d), a.cssMode) {
    const u = r.isHorizontal();
    return t === 0 ? l[u ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo({
      [u ? "left" : "top"]: -d,
      behavior: "smooth"
    }) : l[u ? "scrollLeft" : "scrollTop"] = -d, !0;
  }
  return t === 0 ? (r.setTransition(0), r.setTranslate(d), s && (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(d), s && (r.emit("beforeTransitionStart", t, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(p) {
    !r || r.destroyed || p.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"));
  }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
}
var ut = {
  getTranslate: at,
  setTranslate: lt,
  minTranslate: ot,
  maxTranslate: dt,
  translateTo: ct
};
function pt(e, t) {
  const s = this;
  s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t);
}
function ft(e = !0, t) {
  const s = this, { activeIndex: i, params: n, previousIndex: r } = s;
  if (n.cssMode)
    return;
  n.autoHeight && s.updateAutoHeight();
  let a = t;
  if (a || (i > r ? a = "next" : i < r ? a = "prev" : a = "reset"), s.emit("transitionStart"), e && i !== r) {
    if (a === "reset") {
      s.emit("slideResetTransitionStart");
      return;
    }
    s.emit("slideChangeTransitionStart"), a === "next" ? s.emit("slideNextTransitionStart") : s.emit("slidePrevTransitionStart");
  }
}
function ht(e = !0, t) {
  const s = this, { activeIndex: i, previousIndex: n, params: r } = s;
  if (s.animating = !1, r.cssMode)
    return;
  s.setTransition(0);
  let a = t;
  if (a || (i > n ? a = "next" : i < n ? a = "prev" : a = "reset"), s.emit("transitionEnd"), e && i !== n) {
    if (a === "reset") {
      s.emit("slideResetTransitionEnd");
      return;
    }
    s.emit("slideChangeTransitionEnd"), a === "next" ? s.emit("slideNextTransitionEnd") : s.emit("slidePrevTransitionEnd");
  }
}
var mt = {
  setTransition: pt,
  transitionStart: ft,
  transitionEnd: ht
};
function gt(e = 0, t = this.params.speed, s = !0, i) {
  const n = this;
  let r = e;
  r < 0 && (r = 0);
  const {
    params: a,
    snapGrid: l,
    slidesGrid: o,
    previousIndex: c,
    activeIndex: d,
    rtlTranslate: u,
    wrapperEl: p
  } = n;
  if (n.animating && a.preventInteractionOnTransition)
    return !1;
  const f = Math.min(n.params.slidesPerGroupSkip, r);
  let b = f + Math.floor((r - f) / n.params.slidesPerGroup);
  b >= l.length && (b = l.length - 1), (d || a.initialSlide || 0) === (c || 0) && s && n.emit("beforeSlideChangeStart");
  const m = -l[b];
  if (n.updateProgress(m), a.normalizeSlideIndex)
    for (let E = 0; E < o.length; E += 1)
      -Math.floor(m * 100) >= Math.floor(o[E] * 100) && (r = E);
  if (n.initialized && r !== d && (!n.allowSlideNext && m < n.translate && m < n.minTranslate() || !n.allowSlidePrev && m > n.translate && m > n.maxTranslate() && (d || 0) !== r))
    return !1;
  let L;
  if (r > d ? L = "next" : r < d ? L = "prev" : L = "reset", u && -m === n.translate || !u && m === n.translate)
    return n.updateActiveIndex(r), a.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), a.effect !== "slide" && n.setTranslate(m), L !== "reset" && (n.transitionStart(s, L), n.transitionEnd(s, L)), !1;
  if (a.cssMode) {
    const E = n.isHorizontal();
    let x = -m;
    return u && (x = p.scrollWidth - p.offsetWidth - x), t === 0 ? p[E ? "scrollLeft" : "scrollTop"] = x : p.scrollTo ? p.scrollTo({
      [E ? "left" : "top"]: x,
      behavior: "smooth"
    }) : p[E ? "scrollLeft" : "scrollTop"] = x, !0;
  }
  return t === 0 ? (n.setTransition(0), n.setTranslate(m), n.updateActiveIndex(r), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(s, L), n.transitionEnd(s, L)) : (n.setTransition(t), n.setTranslate(m), n.updateActiveIndex(r), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(s, L), n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(x) {
    !n || n.destroyed || x.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(s, L));
  }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))), !0;
}
function vt(e = 0, t = this.params.speed, s = !0, i) {
  const n = this;
  let r = e;
  return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, s, i);
}
function wt(e = this.params.speed, t = !0, s) {
  const i = this, { params: n, animating: r } = i, a = i.activeIndex < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup;
  if (n.loop) {
    if (r)
      return !1;
    i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
  }
  return i.slideTo(i.activeIndex + a, e, t, s);
}
function bt(e = this.params.speed, t = !0, s) {
  const i = this, {
    params: n,
    animating: r,
    snapGrid: a,
    slidesGrid: l,
    rtlTranslate: o
  } = i;
  if (n.loop) {
    if (r)
      return !1;
    i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
  }
  const c = o ? i.translate : -i.translate;
  function d(m) {
    return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m);
  }
  const u = d(c), p = a.map((m) => d(m));
  l.map((m) => d(m)), a[p.indexOf(u)];
  let f = a[p.indexOf(u) - 1];
  typeof f > "u" && n.cssMode && a.forEach((m) => {
    !f && u >= m && (f = m);
  });
  let b;
  return typeof f < "u" && (b = l.indexOf(f), b < 0 && (b = i.activeIndex - 1)), i.slideTo(b, e, t, s);
}
function yt(e = this.params.speed, t = !0, s) {
  const i = this;
  return i.slideTo(i.activeIndex, e, t, s);
}
function Tt(e = this.params.speed, t = !0, s, i = 0.5) {
  const n = this;
  let r = n.activeIndex;
  const a = Math.min(n.params.slidesPerGroupSkip, r), l = a + Math.floor((r - a) / n.params.slidesPerGroup), o = n.rtlTranslate ? n.translate : -n.translate;
  if (o >= n.snapGrid[l]) {
    const c = n.snapGrid[l], d = n.snapGrid[l + 1];
    o - c > (d - c) * i && (r += n.params.slidesPerGroup);
  } else {
    const c = n.snapGrid[l - 1], d = n.snapGrid[l];
    o - c <= (d - c) * i && (r -= n.params.slidesPerGroup);
  }
  return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, e, t, s);
}
function Et() {
  const e = this, { params: t, $wrapperEl: s } = e, i = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let n = e.clickedIndex, r;
  if (t.loop) {
    if (e.animating)
      return;
    r = parseInt(w(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), n = s.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), g.nextTick(() => {
      e.slideTo(n);
    })) : e.slideTo(n) : n > e.slides.length - i ? (e.loopFix(), n = s.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), g.nextTick(() => {
      e.slideTo(n);
    })) : e.slideTo(n);
  } else
    e.slideTo(n);
}
var St = {
  slideTo: gt,
  slideToLoop: vt,
  slideNext: wt,
  slidePrev: bt,
  slideReset: yt,
  slideToClosest: Tt,
  slideToClickedSlide: Et
};
function xt() {
  const e = this, { params: t, $wrapperEl: s } = e;
  s.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
  let i = s.children(`.${t.slideClass}`);
  if (t.loopFillGroupWithBlank) {
    const a = t.slidesPerGroup - i.length % t.slidesPerGroup;
    if (a !== t.slidesPerGroup) {
      for (let l = 0; l < a; l += 1) {
        const o = w(T.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
        s.append(o);
      }
      i = s.children(`.${t.slideClass}`);
    }
  }
  t.slidesPerView === "auto" && !t.loopedSlides && (t.loopedSlides = i.length), e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > i.length && (e.loopedSlides = i.length);
  const n = [], r = [];
  i.each((a, l) => {
    const o = w(l);
    a < e.loopedSlides && r.push(l), a < i.length && a >= i.length - e.loopedSlides && n.push(l), o.attr("data-swiper-slide-index", a);
  });
  for (let a = 0; a < r.length; a += 1)
    s.append(w(r[a].cloneNode(!0)).addClass(t.slideDuplicateClass));
  for (let a = n.length - 1; a >= 0; a -= 1)
    s.prepend(w(n[a].cloneNode(!0)).addClass(t.slideDuplicateClass));
}
function Ct() {
  const e = this;
  e.emit("beforeLoopFix");
  const {
    activeIndex: t,
    slides: s,
    loopedSlides: i,
    allowSlidePrev: n,
    allowSlideNext: r,
    snapGrid: a,
    rtlTranslate: l
  } = e;
  let o;
  e.allowSlidePrev = !0, e.allowSlideNext = !0;
  const d = -a[t] - e.getTranslate();
  t < i ? (o = s.length - i * 3 + t, o += i, e.slideTo(o, 0, !1, !0) && d !== 0 && e.setTranslate((l ? -e.translate : e.translate) - d)) : t >= s.length - i && (o = -s.length + t + i, o += i, e.slideTo(o, 0, !1, !0) && d !== 0 && e.setTranslate((l ? -e.translate : e.translate) - d)), e.allowSlidePrev = n, e.allowSlideNext = r, e.emit("loopFix");
}
function $t() {
  const e = this, { $wrapperEl: t, params: s, slides: i } = e;
  t.children(`.${s.slideClass}.${s.slideDuplicateClass},.${s.slideClass}.${s.slideBlankClass}`).remove(), i.removeAttr("data-swiper-slide-index");
}
var Mt = {
  loopCreate: xt,
  loopFix: Ct,
  loopDestroy: $t
};
function Pt(e) {
  const t = this;
  if (y.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
    return;
  const s = t.el;
  s.style.cursor = "move", s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", s.style.cursor = e ? "-moz-grabbin" : "-moz-grab", s.style.cursor = e ? "grabbing" : "grab";
}
function zt() {
  const e = this;
  y.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "");
}
var Lt = {
  setGrabCursor: Pt,
  unsetGrabCursor: zt
};
function kt(e) {
  const t = this, { $wrapperEl: s, params: i } = t;
  if (i.loop && t.loopDestroy(), typeof e == "object" && "length" in e)
    for (let n = 0; n < e.length; n += 1)
      e[n] && s.append(e[n]);
  else
    s.append(e);
  i.loop && t.loopCreate(), i.observer && y.observer || t.update();
}
function Dt(e) {
  const t = this, { params: s, $wrapperEl: i, activeIndex: n } = t;
  s.loop && t.loopDestroy();
  let r = n + 1;
  if (typeof e == "object" && "length" in e) {
    for (let a = 0; a < e.length; a += 1)
      e[a] && i.prepend(e[a]);
    r = n + e.length;
  } else
    i.prepend(e);
  s.loop && t.loopCreate(), s.observer && y.observer || t.update(), t.slideTo(r, 0, !1);
}
function It(e, t) {
  const s = this, { $wrapperEl: i, params: n, activeIndex: r } = s;
  let a = r;
  n.loop && (a -= s.loopedSlides, s.loopDestroy(), s.slides = i.children(`.${n.slideClass}`));
  const l = s.slides.length;
  if (e <= 0) {
    s.prependSlide(t);
    return;
  }
  if (e >= l) {
    s.appendSlide(t);
    return;
  }
  let o = a > e ? a + 1 : a;
  const c = [];
  for (let d = l - 1; d >= e; d -= 1) {
    const u = s.slides.eq(d);
    u.remove(), c.unshift(u);
  }
  if (typeof t == "object" && "length" in t) {
    for (let d = 0; d < t.length; d += 1)
      t[d] && i.append(t[d]);
    o = a > e ? a + t.length : a;
  } else
    i.append(t);
  for (let d = 0; d < c.length; d += 1)
    i.append(c[d]);
  n.loop && s.loopCreate(), n.observer && y.observer || s.update(), n.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
}
function Ot(e) {
  const t = this, { params: s, $wrapperEl: i, activeIndex: n } = t;
  let r = n;
  s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = i.children(`.${s.slideClass}`));
  let a = r, l;
  if (typeof e == "object" && "length" in e) {
    for (let o = 0; o < e.length; o += 1)
      l = e[o], t.slides[l] && t.slides.eq(l).remove(), l < a && (a -= 1);
    a = Math.max(a, 0);
  } else
    l = e, t.slides[l] && t.slides.eq(l).remove(), l < a && (a -= 1), a = Math.max(a, 0);
  s.loop && t.loopCreate(), s.observer && y.observer || t.update(), s.loop ? t.slideTo(a + t.loopedSlides, 0, !1) : t.slideTo(a, 0, !1);
}
function Gt() {
  const e = this, t = [];
  for (let s = 0; s < e.slides.length; s += 1)
    t.push(s);
  e.removeSlide(t);
}
var Bt = {
  appendSlide: kt,
  prependSlide: Dt,
  addSlide: It,
  removeSlide: Ot,
  removeAllSlides: Gt
};
const I = function() {
  const t = h.navigator.platform, s = h.navigator.userAgent, i = {
    ios: !1,
    android: !1,
    androidChrome: !1,
    desktop: !1,
    iphone: !1,
    ipod: !1,
    ipad: !1,
    edge: !1,
    ie: !1,
    firefox: !1,
    macos: !1,
    windows: !1,
    cordova: !!(h.cordova || h.phonegap),
    phonegap: !!(h.cordova || h.phonegap),
    electron: !1
  }, n = h.screen.width, r = h.screen.height, a = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let l = s.match(/(iPad).*OS\s([\d_]+)/);
  const o = s.match(/(iPod)(.*OS\s([\d_]+))?/), c = !l && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/), d = s.indexOf("MSIE ") >= 0 || s.indexOf("Trident/") >= 0, u = s.indexOf("Edge/") >= 0, p = s.indexOf("Gecko/") >= 0 && s.indexOf("Firefox/") >= 0, f = t === "Win32", b = s.toLowerCase().indexOf("electron") >= 0;
  let m = t === "MacIntel";
  return !l && m && y.touch && (n === 1024 && r === 1366 || n === 834 && r === 1194 || n === 834 && r === 1112 || n === 768 && r === 1024) && (l = s.match(/(Version)\/([\d.]+)/), m = !1), i.ie = d, i.edge = u, i.firefox = p, a && !f && (i.os = "android", i.osVersion = a[2], i.android = !0, i.androidChrome = s.toLowerCase().indexOf("chrome") >= 0), (l || c || o) && (i.os = "ios", i.ios = !0), c && !o && (i.osVersion = c[2].replace(/_/g, "."), i.iphone = !0), l && (i.osVersion = l[2].replace(/_/g, "."), i.ipad = !0), o && (i.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, i.ipod = !0), i.ios && i.osVersion && s.indexOf("Version/") >= 0 && i.osVersion.split(".")[0] === "10" && (i.osVersion = s.toLowerCase().split("version/")[1].split(" ")[0]), i.webView = !!((c || l || o) && (s.match(/.*AppleWebKit(?!.*Safari)/i) || h.navigator.standalone)) || h.matchMedia && h.matchMedia("(display-mode: standalone)").matches, i.webview = i.webView, i.standalone = i.webView, i.desktop = !(i.ios || i.android) || b, i.desktop && (i.electron = b, i.macos = m, i.windows = f, i.macos && (i.os = "macos"), i.windows && (i.os = "windows")), i.pixelRatio = h.devicePixelRatio || 1, i;
}();
function At(e) {
  const t = this, s = t.touchEventsData, { params: i, touches: n } = t;
  if (t.animating && i.preventInteractionOnTransition)
    return;
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  const a = w(r.target);
  if (i.touchEventsTarget === "wrapper" && !a.closest(t.wrapperEl).length || (s.isTouchEvent = r.type === "touchstart", !s.isTouchEvent && "which" in r && r.which === 3) || !s.isTouchEvent && "button" in r && r.button > 0 || s.isTouched && s.isMoved)
    return;
  if (i.noSwiping && a.closest(i.noSwipingSelector ? i.noSwipingSelector : `.${i.noSwipingClass}`)[0]) {
    t.allowClick = !0;
    return;
  }
  if (i.swipeHandler && !a.closest(i.swipeHandler)[0])
    return;
  n.currentX = r.type === "touchstart" ? r.targetTouches[0].pageX : r.pageX, n.currentY = r.type === "touchstart" ? r.targetTouches[0].pageY : r.pageY;
  const l = n.currentX, o = n.currentY, c = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection, d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
  if (!(c && (l <= d || l >= h.screen.width - d))) {
    if (g.extend(s, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), n.startX = l, n.startY = o, s.touchStartTime = g.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, i.threshold > 0 && (s.allowThresholdMove = !1), r.type !== "touchstart") {
      let u = !0;
      a.is(s.formElements) && (u = !1), T.activeElement && w(T.activeElement).is(s.formElements) && T.activeElement !== a[0] && T.activeElement.blur();
      const p = u && t.allowTouchMove && i.touchStartPreventDefault;
      (i.touchStartForcePreventDefault || p) && r.preventDefault();
    }
    t.emit("touchStart", r);
  }
}
function Ht(e) {
  const t = this, s = t.touchEventsData, { params: i, touches: n, rtlTranslate: r } = t;
  let a = e;
  if (a.originalEvent && (a = a.originalEvent), !s.isTouched) {
    s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", a);
    return;
  }
  if (s.isTouchEvent && a.type !== "touchmove")
    return;
  const l = a.type === "touchmove" && a.targetTouches && (a.targetTouches[0] || a.changedTouches[0]), o = a.type === "touchmove" ? l.pageX : a.pageX, c = a.type === "touchmove" ? l.pageY : a.pageY;
  if (a.preventedByNestedSwiper) {
    n.startX = o, n.startY = c;
    return;
  }
  if (!t.allowTouchMove) {
    t.allowClick = !1, s.isTouched && (g.extend(n, {
      startX: o,
      startY: c,
      currentX: o,
      currentY: c
    }), s.touchStartTime = g.now());
    return;
  }
  if (s.isTouchEvent && i.touchReleaseOnEdges && !i.loop) {
    if (t.isVertical()) {
      if (c < n.startY && t.translate <= t.maxTranslate() || c > n.startY && t.translate >= t.minTranslate()) {
        s.isTouched = !1, s.isMoved = !1;
        return;
      }
    } else if (o < n.startX && t.translate <= t.maxTranslate() || o > n.startX && t.translate >= t.minTranslate())
      return;
  }
  if (s.isTouchEvent && T.activeElement && a.target === T.activeElement && w(a.target).is(s.formElements)) {
    s.isMoved = !0, t.allowClick = !1;
    return;
  }
  if (s.allowTouchCallbacks && t.emit("touchMove", a), a.targetTouches && a.targetTouches.length > 1)
    return;
  n.currentX = o, n.currentY = c;
  const d = n.currentX - n.startX, u = n.currentY - n.startY;
  if (t.params.threshold && Math.sqrt(d ** 2 + u ** 2) < t.params.threshold)
    return;
  if (typeof s.isScrolling > "u") {
    let m;
    t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX ? s.isScrolling = !1 : d * d + u * u >= 25 && (m = Math.atan2(Math.abs(u), Math.abs(d)) * 180 / Math.PI, s.isScrolling = t.isHorizontal() ? m > i.touchAngle : 90 - m > i.touchAngle);
  }
  if (s.isScrolling && t.emit("touchMoveOpposite", a), typeof s.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (s.startMoving = !0), s.isScrolling) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving)
    return;
  t.allowClick = !1, !i.cssMode && a.cancelable && a.preventDefault(), i.touchMoveStopPropagation && !i.nested && a.stopPropagation(), s.isMoved || (i.loop && t.loopFix(), s.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, i.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", a)), t.emit("sliderMove", a), s.isMoved = !0;
  let p = t.isHorizontal() ? d : u;
  n.diff = p, p *= i.touchRatio, r && (p = -p), t.swipeDirection = p > 0 ? "prev" : "next", s.currentTranslate = p + s.startTranslate;
  let f = !0, b = i.resistanceRatio;
  if (i.touchReleaseOnEdges && (b = 0), p > 0 && s.currentTranslate > t.minTranslate() ? (f = !1, i.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + p) ** b)) : p < 0 && s.currentTranslate < t.maxTranslate() && (f = !1, i.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - p) ** b)), f && (a.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), i.threshold > 0)
    if (Math.abs(p) > i.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        s.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, s.currentTranslate = s.startTranslate, n.diff = t.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !i.followFinger || i.cssMode || ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (s.velocities.length === 0 && s.velocities.push({
    position: n[t.isHorizontal() ? "startX" : "startY"],
    time: s.touchStartTime
  }), s.velocities.push({
    position: n[t.isHorizontal() ? "currentX" : "currentY"],
    time: g.now()
  })), t.updateProgress(s.currentTranslate), t.setTranslate(s.currentTranslate));
}
function Xt(e) {
  const t = this, s = t.touchEventsData, {
    params: i,
    touches: n,
    rtlTranslate: r,
    $wrapperEl: a,
    slidesGrid: l,
    snapGrid: o
  } = t;
  let c = e;
  if (c.originalEvent && (c = c.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", c), s.allowTouchCallbacks = !1, !s.isTouched) {
    s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
    return;
  }
  i.grabCursor && s.isMoved && s.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
  const d = g.now(), u = d - s.touchStartTime;
  if (t.allowClick && (t.updateClickedSlide(c), t.emit("tap click", c), u < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", c)), s.lastClickTime = g.now(), g.nextTick(() => {
    t.destroyed || (t.allowClick = !0);
  }), !s.isTouched || !s.isMoved || !t.swipeDirection || n.diff === 0 || s.currentTranslate === s.startTranslate) {
    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
    return;
  }
  s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
  let p;
  if (i.followFinger ? p = r ? t.translate : -t.translate : p = -s.currentTranslate, i.cssMode)
    return;
  if (i.freeMode) {
    if (p < -t.minTranslate()) {
      t.slideTo(t.activeIndex);
      return;
    }
    if (p > -t.maxTranslate()) {
      t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);
      return;
    }
    if (i.freeModeMomentum) {
      if (s.velocities.length > 1) {
        const z = s.velocities.pop(), B = s.velocities.pop(), q = z.position - B.position, V = z.time - B.time;
        t.velocity = q / V, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (V > 150 || g.now() - z.time > 300) && (t.velocity = 0);
      } else
        t.velocity = 0;
      t.velocity *= i.freeModeMomentumVelocityRatio, s.velocities.length = 0;
      let E = 1e3 * i.freeModeMomentumRatio;
      const x = t.velocity * E;
      let v = t.translate + x;
      r && (v = -v);
      let H = !1, G;
      const k = Math.abs(t.velocity) * 20 * i.freeModeMomentumBounceRatio;
      let M;
      if (v < t.maxTranslate())
        i.freeModeMomentumBounce ? (v + t.maxTranslate() < -k && (v = t.maxTranslate() - k), G = t.maxTranslate(), H = !0, s.allowMomentumBounce = !0) : v = t.maxTranslate(), i.loop && i.centeredSlides && (M = !0);
      else if (v > t.minTranslate())
        i.freeModeMomentumBounce ? (v - t.minTranslate() > k && (v = t.minTranslate() + k), G = t.minTranslate(), H = !0, s.allowMomentumBounce = !0) : v = t.minTranslate(), i.loop && i.centeredSlides && (M = !0);
      else if (i.freeModeSticky) {
        let z;
        for (let B = 0; B < o.length; B += 1)
          if (o[B] > -v) {
            z = B;
            break;
          }
        Math.abs(o[z] - v) < Math.abs(o[z - 1] - v) || t.swipeDirection === "next" ? v = o[z] : v = o[z - 1], v = -v;
      }
      if (M && t.once("transitionEnd", () => {
        t.loopFix();
      }), t.velocity !== 0) {
        if (r ? E = Math.abs((-v - t.translate) / t.velocity) : E = Math.abs((v - t.translate) / t.velocity), i.freeModeSticky) {
          const z = Math.abs((r ? -v : v) - t.translate), B = t.slidesSizesGrid[t.activeIndex];
          z < B ? E = i.speed : z < 2 * B ? E = i.speed * 1.5 : E = i.speed * 2.5;
        }
      } else if (i.freeModeSticky) {
        t.slideToClosest();
        return;
      }
      i.freeModeMomentumBounce && H ? (t.updateProgress(G), t.setTransition(E), t.setTranslate(v), t.transitionStart(!0, t.swipeDirection), t.animating = !0, a.transitionEnd(() => {
        !t || t.destroyed || !s.allowMomentumBounce || (t.emit("momentumBounce"), t.setTransition(i.speed), setTimeout(() => {
          t.setTranslate(G), a.transitionEnd(() => {
            !t || t.destroyed || t.transitionEnd();
          });
        }, 0));
      })) : t.velocity ? (t.updateProgress(v), t.setTransition(E), t.setTranslate(v), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, a.transitionEnd(() => {
        !t || t.destroyed || t.transitionEnd();
      }))) : t.updateProgress(v), t.updateActiveIndex(), t.updateSlidesClasses();
    } else if (i.freeModeSticky) {
      t.slideToClosest();
      return;
    }
    (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
    return;
  }
  let f = 0, b = t.slidesSizesGrid[0];
  for (let E = 0; E < l.length; E += E < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
    const x = E < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    typeof l[E + x] < "u" ? p >= l[E] && p < l[E + x] && (f = E, b = l[E + x] - l[E]) : p >= l[E] && (f = E, b = l[l.length - 1] - l[l.length - 2]);
  }
  const m = (p - l[f]) / b, L = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (u > i.longSwipesMs) {
    if (!i.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" && (m >= i.longSwipesRatio ? t.slideTo(f + L) : t.slideTo(f)), t.swipeDirection === "prev" && (m > 1 - i.longSwipesRatio ? t.slideTo(f + L) : t.slideTo(f));
  } else {
    if (!i.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation && (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl) ? c.target === t.navigation.nextEl ? t.slideTo(f + L) : t.slideTo(f) : (t.swipeDirection === "next" && t.slideTo(f + L), t.swipeDirection === "prev" && t.slideTo(f));
  }
}
function ee() {
  const e = this, { params: t, el: s } = e;
  if (s && s.offsetWidth === 0)
    return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = e;
  e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = n, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
}
function Yt(e) {
  const t = this;
  t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
}
function Vt() {
  const e = this, { wrapperEl: t, rtlTranslate: s } = e;
  e.previousTranslate = e.translate, e.isHorizontal() ? s ? e.translate = t.scrollWidth - t.offsetWidth - t.scrollLeft : e.translate = -t.scrollLeft : e.translate = -t.scrollTop, e.translate === -0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
  let i;
  const n = e.maxTranslate() - e.minTranslate();
  n === 0 ? i = 0 : i = (e.translate - e.minTranslate()) / n, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
}
let le = !1;
function Wt() {
}
function Rt() {
  const e = this, {
    params: t,
    touchEvents: s,
    el: i,
    wrapperEl: n
  } = e;
  e.onTouchStart = At.bind(e), e.onTouchMove = Ht.bind(e), e.onTouchEnd = Xt.bind(e), t.cssMode && (e.onScroll = Vt.bind(e)), e.onClick = Yt.bind(e);
  const r = !!t.nested;
  if (!y.touch && y.pointerEvents)
    i.addEventListener(s.start, e.onTouchStart, !1), T.addEventListener(s.move, e.onTouchMove, r), T.addEventListener(s.end, e.onTouchEnd, !1);
  else {
    if (y.touch) {
      const a = s.start === "touchstart" && y.passiveListener && t.passiveListeners ? { passive: !0, capture: !1 } : !1;
      i.addEventListener(s.start, e.onTouchStart, a), i.addEventListener(s.move, e.onTouchMove, y.passiveListener ? { passive: !1, capture: r } : r), i.addEventListener(s.end, e.onTouchEnd, a), s.cancel && i.addEventListener(s.cancel, e.onTouchEnd, a), le || (T.addEventListener("touchstart", Wt), le = !0);
    }
    (t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !y.touch && I.ios) && (i.addEventListener("mousedown", e.onTouchStart, !1), T.addEventListener("mousemove", e.onTouchMove, r), T.addEventListener("mouseup", e.onTouchEnd, !1));
  }
  (t.preventClicks || t.preventClicksPropagation) && i.addEventListener("click", e.onClick, !0), t.cssMode && n.addEventListener("scroll", e.onScroll), t.updateOnWindowResize ? e.on(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ee, !0) : e.on("observerUpdate", ee, !0);
}
function Ft() {
  const e = this, {
    params: t,
    touchEvents: s,
    el: i,
    wrapperEl: n
  } = e, r = !!t.nested;
  if (!y.touch && y.pointerEvents)
    i.removeEventListener(s.start, e.onTouchStart, !1), T.removeEventListener(s.move, e.onTouchMove, r), T.removeEventListener(s.end, e.onTouchEnd, !1);
  else {
    if (y.touch) {
      const a = s.start === "onTouchStart" && y.passiveListener && t.passiveListeners ? { passive: !0, capture: !1 } : !1;
      i.removeEventListener(s.start, e.onTouchStart, a), i.removeEventListener(s.move, e.onTouchMove, r), i.removeEventListener(s.end, e.onTouchEnd, a), s.cancel && i.removeEventListener(s.cancel, e.onTouchEnd, a);
    }
    (t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !y.touch && I.ios) && (i.removeEventListener("mousedown", e.onTouchStart, !1), T.removeEventListener("mousemove", e.onTouchMove, r), T.removeEventListener("mouseup", e.onTouchEnd, !1));
  }
  (t.preventClicks || t.preventClicksPropagation) && i.removeEventListener("click", e.onClick, !0), t.cssMode && n.removeEventListener("scroll", e.onScroll), e.off(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ee);
}
var Nt = {
  attachEvents: Rt,
  detachEvents: Ft
};
function jt() {
  const e = this, {
    activeIndex: t,
    initialized: s,
    loopedSlides: i = 0,
    params: n,
    $el: r
  } = e, a = n.breakpoints;
  if (!a || a && Object.keys(a).length === 0)
    return;
  const l = e.getBreakpoint(a);
  if (l && e.currentBreakpoint !== l) {
    const o = l in a ? a[l] : void 0;
    o && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((b) => {
      const m = o[b];
      typeof m > "u" || (b === "slidesPerView" && (m === "AUTO" || m === "auto") ? o[b] = "auto" : b === "slidesPerView" ? o[b] = parseFloat(m) : o[b] = parseInt(m, 10));
    });
    const c = o || e.originalParams, d = n.slidesPerColumn > 1, u = c.slidesPerColumn > 1;
    d && !u ? r.removeClass(`${n.containerModifierClass}multirow ${n.containerModifierClass}multirow-column`) : !d && u && (r.addClass(`${n.containerModifierClass}multirow`), c.slidesPerColumnFill === "column" && r.addClass(`${n.containerModifierClass}multirow-column`));
    const p = c.direction && c.direction !== n.direction, f = n.loop && (c.slidesPerView !== n.slidesPerView || p);
    p && s && e.changeDirection(), g.extend(e.params, c), g.extend(e, {
      allowTouchMove: e.params.allowTouchMove,
      allowSlideNext: e.params.allowSlideNext,
      allowSlidePrev: e.params.allowSlidePrev
    }), e.currentBreakpoint = l, f && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", c);
  }
}
function qt(e) {
  if (!e)
    return;
  let t = !1;
  const s = Object.keys(e).map((i) => {
    if (typeof i == "string" && i.indexOf("@") === 0) {
      const n = parseFloat(i.substr(1));
      return { value: h.innerHeight * n, point: i };
    }
    return { value: i, point: i };
  });
  s.sort((i, n) => parseInt(i.value, 10) - parseInt(n.value, 10));
  for (let i = 0; i < s.length; i += 1) {
    const { point: n, value: r } = s[i];
    r <= h.innerWidth && (t = n);
  }
  return t || "max";
}
var Ut = { setBreakpoint: jt, getBreakpoint: qt };
function Kt() {
  const e = this, {
    classNames: t,
    params: s,
    rtl: i,
    $el: n
  } = e, r = [];
  r.push("initialized"), r.push(s.direction), s.freeMode && r.push("free-mode"), s.autoHeight && r.push("autoheight"), i && r.push("rtl"), s.slidesPerColumn > 1 && (r.push("multirow"), s.slidesPerColumnFill === "column" && r.push("multirow-column")), I.android && r.push("android"), I.ios && r.push("ios"), s.cssMode && r.push("css-mode"), r.forEach((a) => {
    t.push(s.containerModifierClass + a);
  }), n.addClass(t.join(" "));
}
function _t() {
  const e = this, { $el: t, classNames: s } = e;
  t.removeClass(s.join(" "));
}
var Qt = { addClasses: Kt, removeClasses: _t };
function Zt(e, t, s, i, n, r) {
  let a;
  function l() {
    r && r();
  }
  !w(e).parent("picture")[0] && (!e.complete || !n) && t ? (a = new h.Image(), a.onload = l, a.onerror = l, i && (a.sizes = i), s && (a.srcset = s), t && (a.src = t)) : l();
}
function Jt() {
  const e = this;
  e.imagesToLoad = e.$el.find("img");
  function t() {
    typeof e > "u" || e === null || !e || e.destroyed || (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
  }
  for (let s = 0; s < e.imagesToLoad.length; s += 1) {
    const i = e.imagesToLoad[s];
    e.loadImage(
      i,
      i.currentSrc || i.getAttribute("src"),
      i.srcset || i.getAttribute("srcset"),
      i.sizes || i.getAttribute("sizes"),
      !0,
      t
    );
  }
}
var es = {
  loadImage: Zt,
  preloadImages: Jt
};
function ts() {
  const e = this, t = e.params, s = e.isLocked, i = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
  t.slidesOffsetBefore && t.slidesOffsetAfter && i ? e.isLocked = i <= e.size : e.isLocked = e.snapGrid.length === 1, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, s !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), s && s !== e.isLocked && (e.isEnd = !1, e.navigation.update());
}
var ss = { checkOverflow: ts }, oe = {
  init: !0,
  direction: "horizontal",
  touchEventsTarget: "container",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  preventInteractionOnTransition: !1,
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  freeMode: !1,
  freeModeMomentum: !0,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: !0,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: !1,
  freeModeMinimumVelocity: 0.02,
  autoHeight: !1,
  setWrapperSize: !1,
  virtualTranslate: !1,
  effect: "slide",
  breakpoints: void 0,
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: "column",
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  watchOverflow: !1,
  roundLengths: !1,
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 0,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  uniqueNavElements: !0,
  resistance: !0,
  resistanceRatio: 0.85,
  watchSlidesProgress: !1,
  watchSlidesVisibility: !1,
  grabCursor: !1,
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  preloadImages: !0,
  updateOnImagesReady: !0,
  loop: !1,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: !1,
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  passiveListeners: !0,
  containerModifierClass: "swiper-container-",
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-invisible-blank",
  slideActiveClass: "swiper-slide-active",
  slideDuplicateActiveClass: "swiper-slide-duplicate-active",
  slideVisibleClass: "swiper-slide-visible",
  slideDuplicateClass: "swiper-slide-duplicate",
  slideNextClass: "swiper-slide-next",
  slideDuplicateNextClass: "swiper-slide-duplicate-next",
  slidePrevClass: "swiper-slide-prev",
  slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
  wrapperClass: "swiper-wrapper",
  runCallbacksOnInit: !0
};
const Q = {
  update: rt,
  translate: ut,
  transition: mt,
  slide: St,
  loop: Mt,
  grabCursor: Lt,
  manipulation: Bt,
  events: Nt,
  breakpoints: Ut,
  checkOverflow: ss,
  classes: Qt,
  images: es
}, Z = {};
class X extends ae {
  constructor(...t) {
    let s, i;
    t.length === 1 && t[0].constructor && t[0].constructor === Object ? i = t[0] : [s, i] = t, i || (i = {}), i = g.extend({}, i), s && !i.el && (i.el = s), super(i), Object.keys(Q).forEach((o) => {
      Object.keys(Q[o]).forEach((c) => {
        X.prototype[c] || (X.prototype[c] = Q[o][c]);
      });
    });
    const n = this;
    typeof n.modules > "u" && (n.modules = {}), Object.keys(n.modules).forEach((o) => {
      const c = n.modules[o];
      if (c.params) {
        const d = Object.keys(c.params)[0], u = c.params[d];
        if (typeof u != "object" || u === null || !(d in i && "enabled" in u))
          return;
        i[d] === !0 && (i[d] = { enabled: !0 }), typeof i[d] == "object" && !("enabled" in i[d]) && (i[d].enabled = !0), i[d] || (i[d] = { enabled: !1 });
      }
    });
    const r = g.extend({}, oe);
    n.useModulesParams(r), n.params = g.extend({}, r, Z, i), n.originalParams = g.extend({}, n.params), n.passedParams = g.extend({}, i), n.$ = w;
    const a = w(n.params.el);
    if (s = a[0], !s)
      return;
    if (a.length > 1) {
      const o = [];
      return a.each((c, d) => {
        const u = g.extend({}, i, { el: d });
        o.push(new X(u));
      }), o;
    }
    s.swiper = n, a.data("swiper", n);
    let l;
    return s && s.shadowRoot && s.shadowRoot.querySelector ? (l = w(s.shadowRoot.querySelector(`.${n.params.wrapperClass}`)), l.children = (o) => a.children(o)) : l = a.children(`.${n.params.wrapperClass}`), g.extend(n, {
      $el: a,
      el: s,
      $wrapperEl: l,
      wrapperEl: l[0],
      classNames: [],
      slides: w(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      isHorizontal() {
        return n.params.direction === "horizontal";
      },
      isVertical() {
        return n.params.direction === "vertical";
      },
      rtl: s.dir.toLowerCase() === "rtl" || a.css("direction") === "rtl",
      rtlTranslate: n.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || a.css("direction") === "rtl"),
      wrongRTL: l.css("display") === "-webkit-box",
      activeIndex: 0,
      realIndex: 0,
      isBeginning: !0,
      isEnd: !1,
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      allowSlideNext: n.params.allowSlideNext,
      allowSlidePrev: n.params.allowSlidePrev,
      touchEvents: function() {
        const c = ["touchstart", "touchmove", "touchend", "touchcancel"];
        let d = ["mousedown", "mousemove", "mouseup"];
        return y.pointerEvents && (d = ["pointerdown", "pointermove", "pointerup"]), n.touchEventsTouch = {
          start: c[0],
          move: c[1],
          end: c[2],
          cancel: c[3]
        }, n.touchEventsDesktop = {
          start: d[0],
          move: d[1],
          end: d[2]
        }, y.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        formElements: "input, select, option, textarea, button, video, label",
        lastClickTime: g.now(),
        clickTimeout: void 0,
        velocities: [],
        allowMomentumBounce: void 0,
        isTouchEvent: void 0,
        startMoving: void 0
      },
      allowClick: !0,
      allowTouchMove: n.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      imagesToLoad: [],
      imagesLoaded: 0
    }), n.useModules(), n.params.init && n.init(), n;
  }
  slidesPerViewDynamic() {
    const t = this, {
      params: s,
      slides: i,
      slidesGrid: n,
      size: r,
      activeIndex: a
    } = t;
    let l = 1;
    if (s.centeredSlides) {
      let o = i[a].swiperSlideSize, c;
      for (let d = a + 1; d < i.length; d += 1)
        i[d] && !c && (o += i[d].swiperSlideSize, l += 1, o > r && (c = !0));
      for (let d = a - 1; d >= 0; d -= 1)
        i[d] && !c && (o += i[d].swiperSlideSize, l += 1, o > r && (c = !0));
    } else
      for (let o = a + 1; o < i.length; o += 1)
        n[o] - n[a] < r && (l += 1);
    return l;
  }
  update() {
    const t = this;
    if (!t || t.destroyed)
      return;
    const { snapGrid: s, params: i } = t;
    i.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
    function n() {
      const a = t.rtlTranslate ? t.translate * -1 : t.translate, l = Math.min(Math.max(a, t.maxTranslate()), t.minTranslate());
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let r;
    t.params.freeMode ? (n(), t.params.autoHeight && t.updateAutoHeight()) : ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? r = t.slideTo(t.slides.length - 1, 0, !1, !0) : r = t.slideTo(t.activeIndex, 0, !1, !0), r || n()), i.watchOverflow && s !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, s = !0) {
    const i = this, n = i.params.direction;
    return t || (t = n === "horizontal" ? "vertical" : "horizontal"), t === n || t !== "horizontal" && t !== "vertical" || (i.$el.removeClass(`${i.params.containerModifierClass}${n}`).addClass(`${i.params.containerModifierClass}${t}`), i.params.direction = t, i.slides.each((r, a) => {
      t === "vertical" ? a.style.width = "" : a.style.height = "";
    }), i.emit("changeDirection"), s && i.update()), i;
  }
  init() {
    const t = this;
    t.initialized || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit), t.attachEvents(), t.initialized = !0, t.emit("init"));
  }
  destroy(t = !0, s = !0) {
    const i = this, {
      params: n,
      $el: r,
      $wrapperEl: a,
      slides: l
    } = i;
    return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), s && (i.removeClasses(), r.removeAttr("style"), a.removeAttr("style"), l && l.length && l.removeClass([
      n.slideVisibleClass,
      n.slideActiveClass,
      n.slideNextClass,
      n.slidePrevClass
    ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((o) => {
      i.off(o);
    }), t !== !1 && (i.$el[0].swiper = null, i.$el.data("swiper", null), g.deleteProps(i)), i.destroyed = !0), null;
  }
  static extendDefaults(t) {
    g.extend(Z, t);
  }
  static get extendedDefaults() {
    return Z;
  }
  static get defaults() {
    return oe;
  }
  static get Class() {
    return ae;
  }
  static get $() {
    return w;
  }
}
var is = {
  name: "device",
  proto: {
    device: I
  },
  static: {
    device: I
  }
}, ns = {
  name: "support",
  proto: {
    support: y
  },
  static: {
    support: y
  }
};
const de = function() {
  function t() {
    const s = h.navigator.userAgent.toLowerCase();
    return s.indexOf("safari") >= 0 && s.indexOf("chrome") < 0 && s.indexOf("android") < 0;
  }
  return {
    isEdge: !!h.navigator.userAgent.match(/Edge/g),
    isSafari: t(),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(h.navigator.userAgent)
  };
}();
var rs = {
  name: "browser",
  proto: {
    browser: de
  },
  static: {
    browser: de
  }
}, as = {
  name: "resize",
  create() {
    const e = this;
    g.extend(e, {
      resize: {
        resizeHandler() {
          !e || e.destroyed || !e.initialized || (e.emit("beforeResize"), e.emit("resize"));
        },
        orientationChangeHandler() {
          !e || e.destroyed || !e.initialized || e.emit("orientationchange");
        }
      }
    });
  },
  on: {
    init() {
      const e = this;
      h.addEventListener("resize", e.resize.resizeHandler), h.addEventListener("orientationchange", e.resize.orientationChangeHandler);
    },
    destroy() {
      const e = this;
      h.removeEventListener("resize", e.resize.resizeHandler), h.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
    }
  }
};
const _ = {
  func: h.MutationObserver || h.WebkitMutationObserver,
  attach(e, t = {}) {
    const s = this, i = _.func, n = new i((r) => {
      if (r.length === 1) {
        s.emit("observerUpdate", r[0]);
        return;
      }
      const a = function() {
        s.emit("observerUpdate", r[0]);
      };
      h.requestAnimationFrame ? h.requestAnimationFrame(a) : h.setTimeout(a, 0);
    });
    n.observe(e, {
      attributes: typeof t.attributes > "u" ? !0 : t.attributes,
      childList: typeof t.childList > "u" ? !0 : t.childList,
      characterData: typeof t.characterData > "u" ? !0 : t.characterData
    }), s.observer.observers.push(n);
  },
  init() {
    const e = this;
    if (!(!y.observer || !e.params.observer)) {
      if (e.params.observeParents) {
        const t = e.$el.parents();
        for (let s = 0; s < t.length; s += 1)
          e.observer.attach(t[s]);
      }
      e.observer.attach(e.$el[0], { childList: e.params.observeSlideChildren }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
    }
  },
  destroy() {
    const e = this;
    e.observer.observers.forEach((t) => {
      t.disconnect();
    }), e.observer.observers = [];
  }
};
var ls = {
  name: "observer",
  params: {
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  },
  create() {
    const e = this;
    g.extend(e, {
      observer: {
        init: _.init.bind(e),
        attach: _.attach.bind(e),
        destroy: _.destroy.bind(e),
        observers: []
      }
    });
  },
  on: {
    init() {
      this.observer.init();
    },
    destroy() {
      this.observer.destroy();
    }
  }
};
const J = {
  handle(e) {
    const t = this, { rtlTranslate: s } = t;
    let i = e;
    i.originalEvent && (i = i.originalEvent);
    const n = i.keyCode || i.charCode;
    if (!t.allowSlideNext && (t.isHorizontal() && n === 39 || t.isVertical() && n === 40 || n === 34) || !t.allowSlidePrev && (t.isHorizontal() && n === 37 || t.isVertical() && n === 38 || n === 33))
      return !1;
    if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey) && !(T.activeElement && T.activeElement.nodeName && (T.activeElement.nodeName.toLowerCase() === "input" || T.activeElement.nodeName.toLowerCase() === "textarea"))) {
      if (t.params.keyboard.onlyInViewport && (n === 33 || n === 34 || n === 37 || n === 39 || n === 38 || n === 40)) {
        let r = !1;
        if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && t.$el.parents(`.${t.params.slideActiveClass}`).length === 0)
          return;
        const a = h.innerWidth, l = h.innerHeight, o = t.$el.offset();
        s && (o.left -= t.$el[0].scrollLeft);
        const c = [
          [o.left, o.top],
          [o.left + t.width, o.top],
          [o.left, o.top + t.height],
          [o.left + t.width, o.top + t.height]
        ];
        for (let d = 0; d < c.length; d += 1) {
          const u = c[d];
          u[0] >= 0 && u[0] <= a && u[1] >= 0 && u[1] <= l && (r = !0);
        }
        if (!r)
          return;
      }
      t.isHorizontal() ? ((n === 33 || n === 34 || n === 37 || n === 39) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), ((n === 34 || n === 39) && !s || (n === 33 || n === 37) && s) && t.slideNext(), ((n === 33 || n === 37) && !s || (n === 34 || n === 39) && s) && t.slidePrev()) : ((n === 33 || n === 34 || n === 38 || n === 40) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (n === 34 || n === 40) && t.slideNext(), (n === 33 || n === 38) && t.slidePrev()), t.emit("keyPress", n);
    }
  },
  enable() {
    const e = this;
    e.keyboard.enabled || (w(T).on("keydown", e.keyboard.handle), e.keyboard.enabled = !0);
  },
  disable() {
    const e = this;
    !e.keyboard.enabled || (w(T).off("keydown", e.keyboard.handle), e.keyboard.enabled = !1);
  }
};
var os = {
  name: "keyboard",
  params: {
    keyboard: {
      enabled: !1,
      onlyInViewport: !0
    }
  },
  create() {
    const e = this;
    g.extend(e, {
      keyboard: {
        enabled: !1,
        enable: J.enable.bind(e),
        disable: J.disable.bind(e),
        handle: J.handle.bind(e)
      }
    });
  },
  on: {
    init() {
      const e = this;
      e.params.keyboard.enabled && e.keyboard.enable();
    },
    destroy() {
      const e = this;
      e.keyboard.enabled && e.keyboard.disable();
    }
  }
};
const U = {
  update() {
    const e = this, t = e.rtl, s = e.params.pagination;
    if (!s.el || !e.pagination.el || !e.pagination.$el || e.pagination.$el.length === 0)
      return;
    const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, n = e.pagination.$el;
    let r;
    const a = e.params.loop ? Math.ceil((i - e.loopedSlides * 2) / e.params.slidesPerGroup) : e.snapGrid.length;
    if (e.params.loop ? (r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), r > i - 1 - e.loopedSlides * 2 && (r -= i - e.loopedSlides * 2), r > a - 1 && (r -= a), r < 0 && e.params.paginationType !== "bullets" && (r = a + r)) : typeof e.snapIndex < "u" ? r = e.snapIndex : r = e.activeIndex || 0, s.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
      const l = e.pagination.bullets;
      let o, c, d;
      if (s.dynamicBullets && (e.pagination.bulletSize = l.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), n.css(e.isHorizontal() ? "width" : "height", `${e.pagination.bulletSize * (s.dynamicMainBullets + 4)}px`), s.dynamicMainBullets > 1 && e.previousIndex !== void 0 && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, c = o + (Math.min(l.length, s.dynamicMainBullets) - 1), d = (c + o) / 2), l.removeClass(`${s.bulletActiveClass} ${s.bulletActiveClass}-next ${s.bulletActiveClass}-next-next ${s.bulletActiveClass}-prev ${s.bulletActiveClass}-prev-prev ${s.bulletActiveClass}-main`), n.length > 1)
        l.each((u, p) => {
          const f = w(p), b = f.index();
          b === r && f.addClass(s.bulletActiveClass), s.dynamicBullets && (b >= o && b <= c && f.addClass(`${s.bulletActiveClass}-main`), b === o && f.prev().addClass(`${s.bulletActiveClass}-prev`).prev().addClass(`${s.bulletActiveClass}-prev-prev`), b === c && f.next().addClass(`${s.bulletActiveClass}-next`).next().addClass(`${s.bulletActiveClass}-next-next`));
        });
      else {
        const u = l.eq(r), p = u.index();
        if (u.addClass(s.bulletActiveClass), s.dynamicBullets) {
          const f = l.eq(o), b = l.eq(c);
          for (let m = o; m <= c; m += 1)
            l.eq(m).addClass(`${s.bulletActiveClass}-main`);
          if (e.params.loop)
            if (p >= l.length - s.dynamicMainBullets) {
              for (let m = s.dynamicMainBullets; m >= 0; m -= 1)
                l.eq(l.length - m).addClass(`${s.bulletActiveClass}-main`);
              l.eq(l.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`);
            } else
              f.prev().addClass(`${s.bulletActiveClass}-prev`).prev().addClass(`${s.bulletActiveClass}-prev-prev`), b.next().addClass(`${s.bulletActiveClass}-next`).next().addClass(`${s.bulletActiveClass}-next-next`);
          else
            f.prev().addClass(`${s.bulletActiveClass}-prev`).prev().addClass(`${s.bulletActiveClass}-prev-prev`), b.next().addClass(`${s.bulletActiveClass}-next`).next().addClass(`${s.bulletActiveClass}-next-next`);
        }
      }
      if (s.dynamicBullets) {
        const u = Math.min(l.length, s.dynamicMainBullets + 4), p = (e.pagination.bulletSize * u - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize, f = t ? "right" : "left";
        l.css(e.isHorizontal() ? f : "top", `${p}px`);
      }
    }
    if (s.type === "fraction" && (n.find(`.${s.currentClass}`).text(s.formatFractionCurrent(r + 1)), n.find(`.${s.totalClass}`).text(s.formatFractionTotal(a))), s.type === "progressbar") {
      let l;
      s.progressbarOpposite ? l = e.isHorizontal() ? "vertical" : "horizontal" : l = e.isHorizontal() ? "horizontal" : "vertical";
      const o = (r + 1) / a;
      let c = 1, d = 1;
      l === "horizontal" ? c = o : d = o, n.find(`.${s.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${c}) scaleY(${d})`).transition(e.params.speed);
    }
    s.type === "custom" && s.renderCustom ? (n.html(s.renderCustom(e, r + 1, a)), e.emit("paginationRender", e, n[0])) : e.emit("paginationUpdate", e, n[0]), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass);
  },
  render() {
    const e = this, t = e.params.pagination;
    if (!t.el || !e.pagination.el || !e.pagination.$el || e.pagination.$el.length === 0)
      return;
    const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, i = e.pagination.$el;
    let n = "";
    if (t.type === "bullets") {
      const r = e.params.loop ? Math.ceil((s - e.loopedSlides * 2) / e.params.slidesPerGroup) : e.snapGrid.length;
      for (let a = 0; a < r; a += 1)
        t.renderBullet ? n += t.renderBullet.call(e, a, t.bulletClass) : n += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
      i.html(n), e.pagination.bullets = i.find(`.${t.bulletClass}`);
    }
    t.type === "fraction" && (t.renderFraction ? n = t.renderFraction.call(e, t.currentClass, t.totalClass) : n = `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, i.html(n)), t.type === "progressbar" && (t.renderProgressbar ? n = t.renderProgressbar.call(e, t.progressbarFillClass) : n = `<span class="${t.progressbarFillClass}"></span>`, i.html(n)), t.type !== "custom" && e.emit("paginationRender", e.pagination.$el[0]);
  },
  init() {
    const e = this, t = e.params.pagination;
    if (!t.el)
      return;
    let s = w(t.el);
    s.length !== 0 && (e.params.uniqueNavElements && typeof t.el == "string" && s.length > 1 && e.$el.find(t.el).length === 1 && (s = e.$el.find(t.el)), t.type === "bullets" && t.clickable && s.addClass(t.clickableClass), s.addClass(t.modifierClass + t.type), t.type === "bullets" && t.dynamicBullets && (s.addClass(`${t.modifierClass}${t.type}-dynamic`), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), t.type === "progressbar" && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass), t.clickable && s.on("click", `.${t.bulletClass}`, function(n) {
      n.preventDefault();
      let r = w(this).index() * e.params.slidesPerGroup;
      e.params.loop && (r += e.loopedSlides), e.slideTo(r);
    }), g.extend(e.pagination, {
      $el: s,
      el: s[0]
    }));
  },
  destroy() {
    const e = this, t = e.params.pagination;
    if (!t.el || !e.pagination.el || !e.pagination.$el || e.pagination.$el.length === 0)
      return;
    const s = e.pagination.$el;
    s.removeClass(t.hiddenClass), s.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && s.off("click", `.${t.bulletClass}`);
  }
};
var ds = {
  name: "pagination",
  params: {
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (e) => e,
      formatFractionTotal: (e) => e,
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
      modifierClass: "swiper-pagination-",
      currentClass: "swiper-pagination-current",
      totalClass: "swiper-pagination-total",
      hiddenClass: "swiper-pagination-hidden",
      progressbarFillClass: "swiper-pagination-progressbar-fill",
      progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
      clickableClass: "swiper-pagination-clickable",
      lockClass: "swiper-pagination-lock"
    }
  },
  create() {
    const e = this;
    g.extend(e, {
      pagination: {
        init: U.init.bind(e),
        render: U.render.bind(e),
        update: U.update.bind(e),
        destroy: U.destroy.bind(e),
        dynamicBulletIndex: 0
      }
    });
  },
  on: {
    init() {
      const e = this;
      e.pagination.init(), e.pagination.render(), e.pagination.update();
    },
    activeIndexChange() {
      const e = this;
      (e.params.loop || typeof e.snapIndex > "u") && e.pagination.update();
    },
    snapIndexChange() {
      const e = this;
      e.params.loop || e.pagination.update();
    },
    slidesLengthChange() {
      const e = this;
      e.params.loop && (e.pagination.render(), e.pagination.update());
    },
    snapGridLengthChange() {
      const e = this;
      e.params.loop || (e.pagination.render(), e.pagination.update());
    },
    destroy() {
      this.pagination.destroy();
    },
    click(e) {
      const t = this;
      t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !w(e.target).hasClass(t.params.pagination.bulletClass) && (t.pagination.$el.hasClass(t.params.pagination.hiddenClass) === !0 ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass));
    }
  }
};
const A = {
  setTranslate() {
    const e = this;
    if (!e.params.scrollbar.el || !e.scrollbar.el)
      return;
    const { scrollbar: t, rtlTranslate: s, progress: i } = e, {
      dragSize: n,
      trackSize: r,
      $dragEl: a,
      $el: l
    } = t, o = e.params.scrollbar;
    let c = n, d = (r - n) * i;
    s ? (d = -d, d > 0 ? (c = n - d, d = 0) : -d + n > r && (c = r + d)) : d < 0 ? (c = n + d, d = 0) : d + n > r && (c = r - d), e.isHorizontal() ? (a.transform(`translate3d(${d}px, 0, 0)`), a[0].style.width = `${c}px`) : (a.transform(`translate3d(0px, ${d}px, 0)`), a[0].style.height = `${c}px`), o.hide && (clearTimeout(e.scrollbar.timeout), l[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(() => {
      l[0].style.opacity = 0, l.transition(400);
    }, 1e3));
  },
  setTransition(e) {
    const t = this;
    !t.params.scrollbar.el || !t.scrollbar.el || t.scrollbar.$dragEl.transition(e);
  },
  updateSize() {
    const e = this;
    if (!e.params.scrollbar.el || !e.scrollbar.el)
      return;
    const { scrollbar: t } = e, { $dragEl: s, $el: i } = t;
    s[0].style.width = "", s[0].style.height = "";
    const n = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, r = e.size / e.virtualSize, a = r * (n / e.size);
    let l;
    e.params.scrollbar.dragSize === "auto" ? l = n * r : l = parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? s[0].style.width = `${l}px` : s[0].style.height = `${l}px`, r >= 1 ? i[0].style.display = "none" : i[0].style.display = "", e.params.scrollbar.hide && (i[0].style.opacity = 0), g.extend(t, {
      trackSize: n,
      divider: r,
      moveDivider: a,
      dragSize: l
    }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
  },
  getPointerPosition(e) {
    return this.isHorizontal() ? e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].clientX : e.clientX : e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].clientY : e.clientY;
  },
  setDragPosition(e) {
    const t = this, { scrollbar: s, rtlTranslate: i } = t, {
      $el: n,
      dragSize: r,
      trackSize: a,
      dragStartPos: l
    } = s;
    let o;
    o = (s.getPointerPosition(e) - n.offset()[t.isHorizontal() ? "left" : "top"] - (l !== null ? l : r / 2)) / (a - r), o = Math.max(Math.min(o, 1), 0), i && (o = 1 - o);
    const c = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * o;
    t.updateProgress(c), t.setTranslate(c), t.updateActiveIndex(), t.updateSlidesClasses();
  },
  onDragStart(e) {
    const t = this, s = t.params.scrollbar, { scrollbar: i, $wrapperEl: n } = t, { $el: r, $dragEl: a } = i;
    t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === a[0] || e.target === a ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), n.transition(100), a.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), s.hide && r.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), t.emit("scrollbarDragStart", e);
  },
  onDragMove(e) {
    const t = this, { scrollbar: s, $wrapperEl: i } = t, { $el: n, $dragEl: r } = s;
    !t.scrollbar.isTouched || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, s.setDragPosition(e), i.transition(0), n.transition(0), r.transition(0), t.emit("scrollbarDragMove", e));
  },
  onDragEnd(e) {
    const t = this, s = t.params.scrollbar, { scrollbar: i, $wrapperEl: n } = t, { $el: r } = i;
    !t.scrollbar.isTouched || (t.scrollbar.isTouched = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), n.transition("")), s.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = g.nextTick(() => {
      r.css("opacity", 0), r.transition(400);
    }, 1e3)), t.emit("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest());
  },
  enableDraggable() {
    const e = this;
    if (!e.params.scrollbar.el)
      return;
    const {
      scrollbar: t,
      touchEventsTouch: s,
      touchEventsDesktop: i,
      params: n
    } = e, a = t.$el[0], l = y.passiveListener && n.passiveListeners ? { passive: !1, capture: !1 } : !1, o = y.passiveListener && n.passiveListeners ? { passive: !0, capture: !1 } : !1;
    y.touch ? (a.addEventListener(s.start, e.scrollbar.onDragStart, l), a.addEventListener(s.move, e.scrollbar.onDragMove, l), a.addEventListener(s.end, e.scrollbar.onDragEnd, o)) : (a.addEventListener(i.start, e.scrollbar.onDragStart, l), T.addEventListener(i.move, e.scrollbar.onDragMove, l), T.addEventListener(i.end, e.scrollbar.onDragEnd, o));
  },
  disableDraggable() {
    const e = this;
    if (!e.params.scrollbar.el)
      return;
    const {
      scrollbar: t,
      touchEventsTouch: s,
      touchEventsDesktop: i,
      params: n
    } = e, a = t.$el[0], l = y.passiveListener && n.passiveListeners ? { passive: !1, capture: !1 } : !1, o = y.passiveListener && n.passiveListeners ? { passive: !0, capture: !1 } : !1;
    y.touch ? (a.removeEventListener(s.start, e.scrollbar.onDragStart, l), a.removeEventListener(s.move, e.scrollbar.onDragMove, l), a.removeEventListener(s.end, e.scrollbar.onDragEnd, o)) : (a.removeEventListener(i.start, e.scrollbar.onDragStart, l), T.removeEventListener(i.move, e.scrollbar.onDragMove, l), T.removeEventListener(i.end, e.scrollbar.onDragEnd, o));
  },
  init() {
    const e = this;
    if (!e.params.scrollbar.el)
      return;
    const { scrollbar: t, $el: s } = e, i = e.params.scrollbar;
    let n = w(i.el);
    e.params.uniqueNavElements && typeof i.el == "string" && n.length > 1 && s.find(i.el).length === 1 && (n = s.find(i.el));
    let r = n.find(`.${e.params.scrollbar.dragClass}`);
    r.length === 0 && (r = w(`<div class="${e.params.scrollbar.dragClass}"></div>`), n.append(r)), g.extend(t, {
      $el: n,
      el: n[0],
      $dragEl: r,
      dragEl: r[0]
    }), i.draggable && t.enableDraggable();
  },
  destroy() {
    this.scrollbar.disableDraggable();
  }
};
var cs = {
  name: "scrollbar",
  params: {
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag"
    }
  },
  create() {
    const e = this;
    g.extend(e, {
      scrollbar: {
        init: A.init.bind(e),
        destroy: A.destroy.bind(e),
        updateSize: A.updateSize.bind(e),
        setTranslate: A.setTranslate.bind(e),
        setTransition: A.setTransition.bind(e),
        enableDraggable: A.enableDraggable.bind(e),
        disableDraggable: A.disableDraggable.bind(e),
        setDragPosition: A.setDragPosition.bind(e),
        getPointerPosition: A.getPointerPosition.bind(e),
        onDragStart: A.onDragStart.bind(e),
        onDragMove: A.onDragMove.bind(e),
        onDragEnd: A.onDragEnd.bind(e),
        isTouched: !1,
        timeout: null,
        dragTimeout: null
      }
    });
  },
  on: {
    init() {
      const e = this;
      e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
    },
    update() {
      this.scrollbar.updateSize();
    },
    resize() {
      this.scrollbar.updateSize();
    },
    observerUpdate() {
      this.scrollbar.updateSize();
    },
    setTranslate() {
      this.scrollbar.setTranslate();
    },
    setTransition(e) {
      this.scrollbar.setTransition(e);
    },
    destroy() {
      this.scrollbar.destroy();
    }
  }
};
const te = {
  getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2)
      return 1;
    const t = e.targetTouches[0].pageX, s = e.targetTouches[0].pageY, i = e.targetTouches[1].pageX, n = e.targetTouches[1].pageY;
    return Math.sqrt((i - t) ** 2 + (n - s) ** 2);
  },
  onGestureStart(e) {
    const t = this, s = t.params.zoom, i = t.zoom, { gesture: n } = i;
    if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !y.gestures) {
      if (e.type !== "touchstart" || e.type === "touchstart" && e.targetTouches.length < 2)
        return;
      i.fakeGestureTouched = !0, n.scaleStart = te.getDistanceBetweenTouches(e);
    }
    if ((!n.$slideEl || !n.$slideEl.length) && (n.$slideEl = w(e.target).closest(`.${t.params.slideClass}`), n.$slideEl.length === 0 && (n.$slideEl = t.slides.eq(t.activeIndex)), n.$imageEl = n.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), n.$imageWrapEl = n.$imageEl.parent(`.${s.containerClass}`), n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio, n.$imageWrapEl.length === 0)) {
      n.$imageEl = void 0;
      return;
    }
    n.$imageEl && n.$imageEl.transition(0), t.zoom.isScaling = !0;
  },
  onGestureChange(e) {
    const t = this, s = t.params.zoom, i = t.zoom, { gesture: n } = i;
    if (!y.gestures) {
      if (e.type !== "touchmove" || e.type === "touchmove" && e.targetTouches.length < 2)
        return;
      i.fakeGestureMoved = !0, n.scaleMove = te.getDistanceBetweenTouches(e);
    }
    !n.$imageEl || n.$imageEl.length === 0 || (y.gestures ? i.scale = e.scale * i.currentScale : i.scale = n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + (i.scale - n.maxRatio + 1) ** 0.5), i.scale < s.minRatio && (i.scale = s.minRatio + 1 - (s.minRatio - i.scale + 1) ** 0.5), n.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`));
  },
  onGestureEnd(e) {
    const t = this, s = t.params.zoom, i = t.zoom, { gesture: n } = i;
    if (!y.gestures) {
      if (!i.fakeGestureTouched || !i.fakeGestureMoved || e.type !== "touchend" || e.type === "touchend" && e.changedTouches.length < 2 && !I.android)
        return;
      i.fakeGestureTouched = !1, i.fakeGestureMoved = !1;
    }
    !n.$imageEl || n.$imageEl.length === 0 || (i.scale = Math.max(Math.min(i.scale, n.maxRatio), s.minRatio), n.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${i.scale})`), i.currentScale = i.scale, i.isScaling = !1, i.scale === 1 && (n.$slideEl = void 0));
  },
  onTouchStart(e) {
    const s = this.zoom, { gesture: i, image: n } = s;
    !i.$imageEl || i.$imageEl.length === 0 || n.isTouched || (I.android && e.cancelable && e.preventDefault(), n.isTouched = !0, n.touchesStart.x = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX, n.touchesStart.y = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY);
  },
  onTouchMove(e) {
    const t = this, s = t.zoom, { gesture: i, image: n, velocity: r } = s;
    if (!i.$imageEl || i.$imageEl.length === 0 || (t.allowClick = !1, !n.isTouched || !i.$slideEl))
      return;
    n.isMoved || (n.width = i.$imageEl[0].offsetWidth, n.height = i.$imageEl[0].offsetHeight, n.startX = g.getTranslate(i.$imageWrapEl[0], "x") || 0, n.startY = g.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (n.startX = -n.startX, n.startY = -n.startY));
    const a = n.width * s.scale, l = n.height * s.scale;
    if (!(a < i.slideWidth && l < i.slideHeight)) {
      if (n.minX = Math.min(i.slideWidth / 2 - a / 2, 0), n.maxX = -n.minX, n.minY = Math.min(i.slideHeight / 2 - l / 2, 0), n.maxY = -n.minY, n.touchesCurrent.x = e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX, n.touchesCurrent.y = e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY, !n.isMoved && !s.isScaling) {
        if (t.isHorizontal() && (Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x || Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x)) {
          n.isTouched = !1;
          return;
        }
        if (!t.isHorizontal() && (Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y || Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y)) {
          n.isTouched = !1;
          return;
        }
      }
      e.cancelable && e.preventDefault(), e.stopPropagation(), n.isMoved = !0, n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX, n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY, n.currentX < n.minX && (n.currentX = n.minX + 1 - (n.minX - n.currentX + 1) ** 0.8), n.currentX > n.maxX && (n.currentX = n.maxX - 1 + (n.currentX - n.maxX + 1) ** 0.8), n.currentY < n.minY && (n.currentY = n.minY + 1 - (n.minY - n.currentY + 1) ** 0.8), n.currentY > n.maxY && (n.currentY = n.maxY - 1 + (n.currentY - n.maxY + 1) ** 0.8), r.prevPositionX || (r.prevPositionX = n.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = n.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (n.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (n.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(n.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(n.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = n.touchesCurrent.x, r.prevPositionY = n.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform(`translate3d(${n.currentX}px, ${n.currentY}px,0)`);
    }
  },
  onTouchEnd() {
    const t = this.zoom, { gesture: s, image: i, velocity: n } = t;
    if (!s.$imageEl || s.$imageEl.length === 0)
      return;
    if (!i.isTouched || !i.isMoved) {
      i.isTouched = !1, i.isMoved = !1;
      return;
    }
    i.isTouched = !1, i.isMoved = !1;
    let r = 300, a = 300;
    const l = n.x * r, o = i.currentX + l, c = n.y * a, d = i.currentY + c;
    n.x !== 0 && (r = Math.abs((o - i.currentX) / n.x)), n.y !== 0 && (a = Math.abs((d - i.currentY) / n.y));
    const u = Math.max(r, a);
    i.currentX = o, i.currentY = d;
    const p = i.width * t.scale, f = i.height * t.scale;
    i.minX = Math.min(s.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(s.slideHeight / 2 - f / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), s.$imageWrapEl.transition(u).transform(`translate3d(${i.currentX}px, ${i.currentY}px,0)`);
  },
  onTransitionEnd() {
    const e = this, t = e.zoom, { gesture: s } = t;
    s.$slideEl && e.previousIndex !== e.activeIndex && (s.$imageEl && s.$imageEl.transform("translate3d(0,0,0) scale(1)"), s.$imageWrapEl && s.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, s.$slideEl = void 0, s.$imageEl = void 0, s.$imageWrapEl = void 0);
  },
  toggle(e) {
    const s = this.zoom;
    s.scale && s.scale !== 1 ? s.out() : s.in(e);
  },
  in(e) {
    const t = this, s = t.zoom, i = t.params.zoom, { gesture: n, image: r } = s;
    if (n.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? n.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : n.$slideEl = t.slides.eq(t.activeIndex), n.$imageEl = n.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), n.$imageWrapEl = n.$imageEl.parent(`.${i.containerClass}`)), !n.$imageEl || n.$imageEl.length === 0)
      return;
    n.$slideEl.addClass(`${i.zoomedSlideClass}`);
    let a, l, o, c, d, u, p, f, b, m, L, E, x, v, H, G, k, M;
    typeof r.touchesStart.x > "u" && e ? (a = e.type === "touchend" ? e.changedTouches[0].pageX : e.pageX, l = e.type === "touchend" ? e.changedTouches[0].pageY : e.pageY) : (a = r.touchesStart.x, l = r.touchesStart.y), s.scale = n.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, s.currentScale = n.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, e ? (k = n.$slideEl[0].offsetWidth, M = n.$slideEl[0].offsetHeight, o = n.$slideEl.offset().left, c = n.$slideEl.offset().top, d = o + k / 2 - a, u = c + M / 2 - l, b = n.$imageEl[0].offsetWidth, m = n.$imageEl[0].offsetHeight, L = b * s.scale, E = m * s.scale, x = Math.min(k / 2 - L / 2, 0), v = Math.min(M / 2 - E / 2, 0), H = -x, G = -v, p = d * s.scale, f = u * s.scale, p < x && (p = x), p > H && (p = H), f < v && (f = v), f > G && (f = G)) : (p = 0, f = 0), n.$imageWrapEl.transition(300).transform(`translate3d(${p}px, ${f}px,0)`), n.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`);
  },
  out() {
    const e = this, t = e.zoom, s = e.params.zoom, { gesture: i } = t;
    i.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? i.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : i.$slideEl = e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent(`.${s.containerClass}`)), !(!i.$imageEl || i.$imageEl.length === 0) && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass(`${s.zoomedSlideClass}`), i.$slideEl = void 0);
  },
  enable() {
    const e = this, t = e.zoom;
    if (t.enabled)
      return;
    t.enabled = !0;
    const s = e.touchEvents.start === "touchstart" && y.passiveListener && e.params.passiveListeners ? { passive: !0, capture: !1 } : !1, i = y.passiveListener ? { passive: !1, capture: !0 } : !0, n = `.${e.params.slideClass}`;
    y.gestures ? (e.$wrapperEl.on("gesturestart", n, t.onGestureStart, s), e.$wrapperEl.on("gesturechange", n, t.onGestureChange, s), e.$wrapperEl.on("gestureend", n, t.onGestureEnd, s)) : e.touchEvents.start === "touchstart" && (e.$wrapperEl.on(e.touchEvents.start, n, t.onGestureStart, s), e.$wrapperEl.on(e.touchEvents.move, n, t.onGestureChange, i), e.$wrapperEl.on(e.touchEvents.end, n, t.onGestureEnd, s), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, n, t.onGestureEnd, s)), e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove, i);
  },
  disable() {
    const e = this, t = e.zoom;
    if (!t.enabled)
      return;
    e.zoom.enabled = !1;
    const s = e.touchEvents.start === "touchstart" && y.passiveListener && e.params.passiveListeners ? { passive: !0, capture: !1 } : !1, i = y.passiveListener ? { passive: !1, capture: !0 } : !0, n = `.${e.params.slideClass}`;
    y.gestures ? (e.$wrapperEl.off("gesturestart", n, t.onGestureStart, s), e.$wrapperEl.off("gesturechange", n, t.onGestureChange, s), e.$wrapperEl.off("gestureend", n, t.onGestureEnd, s)) : e.touchEvents.start === "touchstart" && (e.$wrapperEl.off(e.touchEvents.start, n, t.onGestureStart, s), e.$wrapperEl.off(e.touchEvents.move, n, t.onGestureChange, i), e.$wrapperEl.off(e.touchEvents.end, n, t.onGestureEnd, s), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, n, t.onGestureEnd, s)), e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove, i);
  }
};
var us = {
  name: "zoom",
  params: {
    zoom: {
      enabled: !1,
      maxRatio: 3,
      minRatio: 1,
      toggle: !0,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed"
    }
  },
  create() {
    const e = this, t = {
      enabled: !1,
      scale: 1,
      currentScale: 1,
      isScaling: !1,
      gesture: {
        $slideEl: void 0,
        slideWidth: void 0,
        slideHeight: void 0,
        $imageEl: void 0,
        $imageWrapEl: void 0,
        maxRatio: 3
      },
      image: {
        isTouched: void 0,
        isMoved: void 0,
        currentX: void 0,
        currentY: void 0,
        minX: void 0,
        minY: void 0,
        maxX: void 0,
        maxY: void 0,
        width: void 0,
        height: void 0,
        startX: void 0,
        startY: void 0,
        touchesStart: {},
        touchesCurrent: {}
      },
      velocity: {
        x: void 0,
        y: void 0,
        prevPositionX: void 0,
        prevPositionY: void 0,
        prevTime: void 0
      }
    };
    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((i) => {
      t[i] = te[i].bind(e);
    }), g.extend(e, {
      zoom: t
    });
    let s = 1;
    Object.defineProperty(e.zoom, "scale", {
      get() {
        return s;
      },
      set(i) {
        if (s !== i) {
          const n = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0, r = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
          e.emit("zoomChange", i, n, r);
        }
        s = i;
      }
    });
  },
  on: {
    init() {
      const e = this;
      e.params.zoom.enabled && e.zoom.enable();
    },
    destroy() {
      this.zoom.disable();
    },
    touchStart(e) {
      const t = this;
      !t.zoom.enabled || t.zoom.onTouchStart(e);
    },
    touchEnd(e) {
      const t = this;
      !t.zoom.enabled || t.zoom.onTouchEnd(e);
    },
    doubleTap(e) {
      const t = this;
      t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e);
    },
    transitionEnd() {
      const e = this;
      e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
    },
    slideChange() {
      const e = this;
      e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd();
    }
  }
};
const K = {
  run() {
    const e = this, t = e.slides.eq(e.activeIndex);
    let s = e.params.autoplay.delay;
    t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = g.nextTick(() => {
      e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run();
    }, s);
  },
  start() {
    const e = this;
    return typeof e.autoplay.timeout < "u" || e.autoplay.running ? !1 : (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0);
  },
  stop() {
    const e = this;
    return !e.autoplay.running || typeof e.autoplay.timeout > "u" ? !1 : (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0);
  },
  pause(e) {
    const t = this;
    !t.autoplay.running || t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, e === 0 || !t.params.autoplay.waitForTransition ? (t.autoplay.paused = !1, t.autoplay.run()) : (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)));
  }
};
var ps = {
  name: "autoplay",
  params: {
    autoplay: {
      enabled: !1,
      delay: 3e3,
      waitForTransition: !0,
      disableOnInteraction: !0,
      stopOnLastSlide: !1,
      reverseDirection: !1
    }
  },
  create() {
    const e = this;
    g.extend(e, {
      autoplay: {
        running: !1,
        paused: !1,
        run: K.run.bind(e),
        start: K.start.bind(e),
        stop: K.stop.bind(e),
        pause: K.pause.bind(e),
        onVisibilityChange() {
          document.visibilityState === "hidden" && e.autoplay.running && e.autoplay.pause(), document.visibilityState === "visible" && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1);
        },
        onTransitionEnd(t) {
          !e || e.destroyed || !e.$wrapperEl || t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
        }
      }
    });
  },
  on: {
    init() {
      const e = this;
      e.params.autoplay.enabled && (e.autoplay.start(), document.addEventListener("visibilitychange", e.autoplay.onVisibilityChange));
    },
    beforeTransitionStart(e, t) {
      const s = this;
      s.autoplay.running && (t || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(e) : s.autoplay.stop());
    },
    sliderFirstMove() {
      const e = this;
      e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
    },
    touchEnd() {
      const e = this;
      e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
    },
    destroy() {
      const e = this;
      e.autoplay.running && e.autoplay.stop(), document.removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
    }
  }
};
const fs = [
  is,
  ns,
  rs,
  as,
  ls
];
typeof X.use > "u" && (X.use = X.Class.use, X.installModule = X.Class.installModule);
X.use(fs);
X.use([ds, cs, ps, os, us]);
export {
  X as Swiper
};

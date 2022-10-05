import { defineComponent as qt, inject as ii, getCurrentInstance as fi, h as ne, shallowRef as Hr, ref as Ht, onMounted as jr, Teleport as ih, computed as Pn, toRef as Ri, resolveComponent as ft, openBlock as Jt, createElementBlock as ue, toDisplayString as te, createVNode as nt, withCtx as at, createTextVNode as me, Fragment as Xr, renderList as Yr, createBlock as Wr } from "vue";
const A = {
  allRenderFn: !1,
  cmpDidLoad: !0,
  cmpDidUnload: !1,
  cmpDidUpdate: !0,
  cmpDidRender: !0,
  cmpWillLoad: !0,
  cmpWillUpdate: !0,
  cmpWillRender: !0,
  connectedCallback: !0,
  disconnectedCallback: !0,
  element: !0,
  event: !0,
  hasRenderFn: !0,
  lifecycle: !0,
  hostListener: !0,
  hostListenerTargetWindow: !0,
  hostListenerTargetDocument: !0,
  hostListenerTargetBody: !0,
  hostListenerTargetParent: !1,
  hostListenerTarget: !0,
  member: !0,
  method: !0,
  mode: !0,
  observeAttribute: !0,
  prop: !0,
  propMutable: !0,
  reflect: !0,
  scoped: !0,
  shadowDom: !0,
  slot: !0,
  cssAnnotations: !0,
  state: !0,
  style: !0,
  svg: !0,
  updatable: !0,
  vdomAttribute: !0,
  vdomXlink: !0,
  vdomClass: !0,
  vdomFunctional: !0,
  vdomKey: !0,
  vdomListener: !0,
  vdomRef: !0,
  vdomPropOrAttr: !0,
  vdomRender: !0,
  vdomStyle: !0,
  vdomText: !0,
  watchCallback: !0,
  taskQueue: !0,
  hotModuleReplacement: !1,
  isDebug: !1,
  isDev: !1,
  isTesting: !1,
  hydrateServerSide: !1,
  hydrateClientSide: !1,
  lifecycleDOMEvents: !1,
  lazyLoad: !1,
  profile: !1,
  slotRelocation: !0,
  appendChildSlotFix: !1,
  cloneNodeFix: !1,
  hydratedAttribute: !1,
  hydratedClass: !0,
  safari10: !1,
  scriptDataOpts: !1,
  scopedSlotTextContentFix: !1,
  shadowDomShim: !1,
  slotChildNodesFix: !1,
  invisiblePrehydration: !0,
  propBoolean: !0,
  propNumber: !0,
  propString: !0,
  cssVarShim: !1,
  constructableCSS: !0,
  cmpShouldUpdate: !0,
  devTools: !1,
  dynamicImportShim: !1,
  shadowDelegatesFocus: !0,
  initializeNextTick: !1,
  asyncLoading: !1,
  asyncQueue: !1,
  transformTagName: !1,
  attachStyles: !0
};
let Pt, Bn, je, Fn = !1, Ee = !1, bi = !1, J = !1, Hi = null, ni = !1;
const ji = {
  isDev: !!A.isDev,
  isBrowser: !0,
  isServer: !1,
  isTesting: !!A.isTesting
}, qr = (t) => {
  const e = new URL(t, q.$resourcesUrl$);
  return e.origin !== Gt.location.origin ? e.href : e.pathname;
}, $t = (t, e = "") => () => {
}, Xi = "http://www.w3.org/1999/xlink", Yi = {}, Vr = "http://www.w3.org/2000/svg", Ur = "http://www.w3.org/1999/xhtml", Gr = (t) => t != null, vi = (t) => (t = typeof t, t === "object" || t === "function"), b = (t, e, ...i) => {
  let n = null, o = null, r = null, s = !1, a = !1;
  const l = [], d = (c) => {
    for (let u = 0; u < c.length; u++)
      n = c[u], Array.isArray(n) ? d(n) : n != null && typeof n != "boolean" && ((s = typeof t != "function" && !vi(n)) && (n = String(n)), s && a ? l[l.length - 1].$text$ += n : l.push(s ? Se(null, n) : n), a = s);
  };
  if (d(i), e && (A.isDev && t === "input" && Zr(e), A.vdomKey && e.key && (o = e.key), A.slotRelocation && e.name && (r = e.name), A.vdomClass)) {
    const c = e.className || e.class;
    c && (e.class = typeof c != "object" ? c : Object.keys(c).filter((u) => c[u]).join(" "));
  }
  if (A.isDev && l.some(_n) && $s(`The <Host> must be the single root component. Make sure:
- You are NOT using hostData() and <Host> in the same component.
- <Host> is used once, and it's the single root component of the render() function.`), A.vdomFunctional && typeof t == "function")
    return t(e === null ? {} : e, l, Kr);
  const h = Se(t, null);
  return h.$attrs$ = e, l.length > 0 && (h.$children$ = l), A.vdomKey && (h.$key$ = o), A.slotRelocation && (h.$name$ = r), h;
}, Se = (t, e) => {
  const i = {
    $flags$: 0,
    $tag$: t,
    $text$: e,
    $elm$: null,
    $children$: null
  };
  return A.vdomAttribute && (i.$attrs$ = null), A.vdomKey && (i.$key$ = null), A.slotRelocation && (i.$name$ = null), i;
}, G = {}, _n = (t) => t && t.$tag$ === G, Kr = {
  forEach: (t, e) => t.map(Wi).forEach(e),
  map: (t, e) => t.map(Wi).map(e).map(Nr)
}, Wi = (t) => ({
  vattrs: t.$attrs$,
  vchildren: t.$children$,
  vkey: t.$key$,
  vname: t.$name$,
  vtag: t.$tag$,
  vtext: t.$text$
}), Nr = (t) => {
  if (typeof t.vtag == "function") {
    const i = Object.assign({}, t.vattrs);
    return t.vkey && (i.key = t.vkey), t.vname && (i.name = t.vname), b(t.vtag, i, ...t.vchildren || []);
  }
  const e = Se(t.vtag, t.vtext);
  return e.$attrs$ = t.vattrs, e.$children$ = t.vchildren, e.$key$ = t.vkey, e.$name$ = t.vname, e;
}, Zr = (t) => {
  const e = Object.keys(t), i = e.indexOf("value");
  if (i === -1)
    return;
  const n = e.indexOf("type"), o = e.indexOf("min"), r = e.indexOf("max"), s = e.indexOf("step");
  (i < n || i < o || i < r || i < s) && Nn('The "value" prop of <input> should be set after "min", "max", "type" and "step"');
}, Qr = (t) => As.map((e) => e(t)).find((e) => !!e), Jr = (t) => It(t).$modeName$, ts = (t, e) => t != null && !vi(t) ? e & 4 ? t === "false" ? !1 : t === "" || !!t : e & 2 ? parseFloat(t) : e & 1 ? String(t) : t : t, es = (t) => A.lazyLoad ? It(t).$hostElement$ : t, F = (t, e, i) => {
  const n = es(t);
  return {
    emit: (o) => (A.isDev && !n.isConnected && Nn(`The "${e}" event was emitted, but the dispatcher node is no longer connected to the dom.`), is(n, e, {
      bubbles: !!(i & 4),
      composed: !!(i & 2),
      cancelable: !!(i & 1),
      detail: o
    }))
  };
}, is = (t, e, i) => {
  const n = q.ce(e, i);
  return t.dispatchEvent(n), n;
}, qi = /* @__PURE__ */ new WeakMap(), ns = (t, e, i) => {
  let n = ze.get(t);
  Is && i ? (n = n || new CSSStyleSheet(), typeof n == "string" ? n = e : n.replaceSync(e)) : n = e, ze.set(t, n);
}, os = (t, e, i, n) => {
  let o = Rn(e, i);
  const r = ze.get(o);
  if (t = t.nodeType === 11 ? t : ht, r)
    if (typeof r == "string") {
      t = t.head || t;
      let s = qi.get(t), a;
      s || qi.set(t, s = /* @__PURE__ */ new Set()), s.has(o) || (a = ht.createElement("style"), a.innerHTML = r, t.insertBefore(a, t.querySelector("link")), s && s.add(o));
    } else
      t.adoptedStyleSheets.includes(r) || (t.adoptedStyleSheets = [...t.adoptedStyleSheets, r]);
  return o;
}, rs = (t) => {
  const e = t.$cmpMeta$, i = t.$hostElement$, n = e.$flags$, o = $t("attachStyles", e.$tagName$), r = os(De && i.shadowRoot ? i.shadowRoot : i.getRootNode(), e, t.$modeName$);
  n & 10 && (i["s-sc"] = r, i.classList.add(r + "-h"), n & 2 && i.classList.add(r + "-s")), o();
}, Rn = (t, e) => "sc-" + (e && t.$flags$ & 32 ? t.$tagName$ + "-" + e : t.$tagName$), Vi = (t, e, i, n, o, r) => {
  if (i !== n) {
    let s = Ni(t, e), a = e.toLowerCase();
    if (e === "class") {
      const l = t.classList, d = Ui(i), h = Ui(n);
      l.remove(...d.filter((c) => c && !h.includes(c))), l.add(...h.filter((c) => c && !d.includes(c)));
    } else if (e === "style") {
      for (const l in i)
        (!n || n[l] == null) && (l.includes("-") ? t.style.removeProperty(l) : t.style[l] = "");
      for (const l in n)
        (!i || n[l] !== i[l]) && (l.includes("-") ? t.style.setProperty(l, n[l]) : t.style[l] = n[l]);
    } else if (e !== "key")
      if (e === "ref")
        n && n(t);
      else if (!t.__lookupSetter__(e) && e[0] === "o" && e[1] === "n")
        e[2] === "-" ? e = e.slice(3) : Ni(Gt, a) ? e = a.slice(2) : e = a[2] + e.slice(3), i && q.rel(t, e, i, !1), n && q.ael(t, e, n, !1);
      else {
        const l = vi(n);
        if ((s || l && n !== null) && !o)
          try {
            if (t.tagName.includes("-"))
              t[e] = n;
            else {
              const h = n == null ? "" : n;
              e === "list" ? s = !1 : (i == null || t[e] != h) && (t[e] = h);
            }
          } catch {
          }
        let d = !1;
        a !== (a = a.replace(/^xlink\:?/, "")) && (e = a, d = !0), n == null || n === !1 ? (n !== !1 || t.getAttribute(e) === "") && (d ? t.removeAttributeNS(Xi, e) : t.removeAttribute(e)) : (!s || r & 4 || o) && !l && (n = n === !0 ? "" : n, d ? t.setAttributeNS(Xi, e, n) : t.setAttribute(e, n));
      }
  }
}, ss = /\s/, Ui = (t) => t ? t.split(ss) : [], Hn = (t, e, i, n) => {
  const o = e.$elm$.nodeType === 11 && e.$elm$.host ? e.$elm$.host : e.$elm$, r = t && t.$attrs$ || Yi, s = e.$attrs$ || Yi;
  for (n in r)
    n in s || Vi(o, n, r[n], void 0, i, e.$flags$);
  for (n in s)
    Vi(o, n, r[n], s[n], i, e.$flags$);
}, $e = (t, e, i, n) => {
  const o = e.$children$[i];
  let r = 0, s, a, l;
  if (Fn || (bi = !0, o.$tag$ === "slot" && (Pt && n.classList.add(Pt + "-s"), o.$flags$ |= o.$children$ ? 2 : 1)), o.$text$ !== null)
    s = o.$elm$ = ht.createTextNode(o.$text$);
  else if (o.$flags$ & 1)
    s = o.$elm$ = ht.createTextNode("");
  else {
    if (J || (J = o.$tag$ === "svg"), s = o.$elm$ = ht.createElementNS(J ? Vr : Ur, o.$flags$ & 2 ? "slot-fb" : o.$tag$), J && o.$tag$ === "foreignObject" && (J = !1), Hn(null, o, J), Gr(Pt) && s["s-si"] !== Pt && s.classList.add(s["s-si"] = Pt), o.$children$)
      for (r = 0; r < o.$children$.length; ++r)
        a = $e(t, o, r, s), a && s.appendChild(a);
    o.$tag$ === "svg" ? J = !1 : s.tagName === "foreignObject" && (J = !0);
  }
  return s["s-hn"] = je, o.$flags$ & 3 && (s["s-sr"] = !0, s["s-cr"] = Bn, s["s-sn"] = o.$name$ || "", l = t && t.$children$ && t.$children$[i], l && l.$tag$ === o.$tag$ && t.$elm$ && oe(t.$elm$, !1)), s;
}, oe = (t, e) => {
  q.$flags$ |= 1;
  const i = t.childNodes;
  for (let n = i.length - 1; n >= 0; n--) {
    const o = i[n];
    o["s-hn"] !== je && o["s-ol"] && (Yn(o).insertBefore(o, xi(o)), o["s-ol"].remove(), o["s-ol"] = void 0, bi = !0), e && oe(o, e);
  }
  q.$flags$ &= -2;
}, jn = (t, e, i, n, o, r) => {
  let s = t["s-cr"] && t["s-cr"].parentNode || t, a;
  for (s.shadowRoot && s.tagName === je && (s = s.shadowRoot); o <= r; ++o)
    n[o] && (a = $e(null, i, o, t), a && (n[o].$elm$ = a, s.insertBefore(a, xi(e))));
}, Xn = (t, e, i, n, o) => {
  for (; e <= i; ++e)
    (n = t[e]) && (o = n.$elm$, Vn(n), Ee = !0, o["s-ol"] ? o["s-ol"].remove() : oe(o, !0), o.remove());
}, as = (t, e, i, n) => {
  let o = 0, r = 0, s = 0, a = 0, l = e.length - 1, d = e[0], h = e[l], c = n.length - 1, u = n[0], f = n[c], v, m;
  for (; o <= l && r <= c; )
    if (d == null)
      d = e[++o];
    else if (h == null)
      h = e[--l];
    else if (u == null)
      u = n[++r];
    else if (f == null)
      f = n[--c];
    else if (ge(d, u))
      Bt(d, u), d = e[++o], u = n[++r];
    else if (ge(h, f))
      Bt(h, f), h = e[--l], f = n[--c];
    else if (ge(d, f))
      (d.$tag$ === "slot" || f.$tag$ === "slot") && oe(d.$elm$.parentNode, !1), Bt(d, f), t.insertBefore(d.$elm$, h.$elm$.nextSibling), d = e[++o], f = n[--c];
    else if (ge(h, u))
      (d.$tag$ === "slot" || f.$tag$ === "slot") && oe(h.$elm$.parentNode, !1), Bt(h, u), t.insertBefore(h.$elm$, d.$elm$), h = e[--l], u = n[++r];
    else {
      for (s = -1, a = o; a <= l; ++a)
        if (e[a] && e[a].$key$ !== null && e[a].$key$ === u.$key$) {
          s = a;
          break;
        }
      s >= 0 ? (m = e[s], m.$tag$ !== u.$tag$ ? v = $e(e && e[r], i, s, t) : (Bt(m, u), e[s] = void 0, v = m.$elm$), u = n[++r]) : (v = $e(e && e[r], i, r, t), u = n[++r]), v && Yn(d.$elm$).insertBefore(v, xi(d.$elm$));
    }
  o > l ? jn(t, n[c + 1] == null ? null : n[c + 1].$elm$, i, n, r, c) : r > c && Xn(e, o, l);
}, ge = (t, e) => t.$tag$ === e.$tag$ ? t.$tag$ === "slot" ? t.$name$ === e.$name$ : t.$key$ === e.$key$ : !1, xi = (t) => t && t["s-ol"] || t, Yn = (t) => (t["s-ol"] ? t["s-ol"] : t).parentNode, Bt = (t, e) => {
  const i = e.$elm$ = t.$elm$, n = t.$children$, o = e.$children$, r = e.$tag$, s = e.$text$;
  let a;
  s === null ? (J = r === "svg" ? !0 : r === "foreignObject" ? !1 : J, r === "slot" || Hn(t, e, J), n !== null && o !== null ? as(i, n, e, o) : o !== null ? (t.$text$ !== null && (i.textContent = ""), jn(i, null, e, o, 0, o.length - 1)) : n !== null && Xn(n, 0, n.length - 1), J && r === "svg" && (J = !1)) : (a = i["s-cr"]) ? a.parentNode.textContent = s : t.$text$ !== s && (i.data = s);
}, Wn = (t) => {
  const e = t.childNodes;
  let i, n, o, r, s, a;
  for (n = 0, o = e.length; n < o; n++)
    if (i = e[n], i.nodeType === 1) {
      if (i["s-sr"]) {
        for (s = i["s-sn"], i.hidden = !1, r = 0; r < o; r++)
          if (a = e[r].nodeType, e[r]["s-hn"] !== i["s-hn"] || s !== "") {
            if (a === 1 && s === e[r].getAttribute("slot")) {
              i.hidden = !0;
              break;
            }
          } else if (a === 1 || a === 3 && e[r].textContent.trim() !== "") {
            i.hidden = !0;
            break;
          }
      }
      Wn(i);
    }
}, ct = [], qn = (t) => {
  let e, i, n, o, r, s, a = 0;
  const l = t.childNodes, d = l.length;
  for (; a < d; a++) {
    if (e = l[a], e["s-sr"] && (i = e["s-cr"]) && i.parentNode)
      for (n = i.parentNode.childNodes, o = e["s-sn"], s = n.length - 1; s >= 0; s--)
        i = n[s], !i["s-cn"] && !i["s-nr"] && i["s-hn"] !== e["s-hn"] && (Gi(i, o) ? (r = ct.find((h) => h.$nodeToRelocate$ === i), Ee = !0, i["s-sn"] = i["s-sn"] || o, r ? r.$slotRefNode$ = e : ct.push({
          $slotRefNode$: e,
          $nodeToRelocate$: i
        }), i["s-sr"] && ct.map((h) => {
          Gi(h.$nodeToRelocate$, i["s-sn"]) && (r = ct.find((c) => c.$nodeToRelocate$ === i), r && !h.$slotRefNode$ && (h.$slotRefNode$ = r.$slotRefNode$));
        })) : ct.some((h) => h.$nodeToRelocate$ === i) || ct.push({
          $nodeToRelocate$: i
        }));
    e.nodeType === 1 && qn(e);
  }
}, Gi = (t, e) => t.nodeType === 1 ? t.getAttribute("slot") === null && e === "" || t.getAttribute("slot") === e : t["s-sn"] === e ? !0 : e === "", Vn = (t) => {
  t.$attrs$ && t.$attrs$.ref && t.$attrs$.ref(null), t.$children$ && t.$children$.map(Vn);
}, ls = (t, e) => {
  const i = t.$hostElement$, n = t.$cmpMeta$, o = t.$vnode$ || Se(null, null), r = _n(e) ? e : b(null, null, e);
  je = i.tagName, n.$attrsToReflect$ && (r.$attrs$ = r.$attrs$ || {}, n.$attrsToReflect$.map(([s, a]) => r.$attrs$[a] = i[s])), r.$tag$ = null, r.$flags$ |= 4, t.$vnode$ = r, r.$elm$ = o.$elm$ = i.shadowRoot || i, Pt = i["s-sc"], Bn = i["s-cr"], Fn = De && (n.$flags$ & 1) !== 0, Ee = !1, Bt(o, r);
  {
    if (q.$flags$ |= 1, bi) {
      qn(r.$elm$);
      let s, a, l, d, h, c, u = 0;
      for (; u < ct.length; u++)
        s = ct[u], a = s.$nodeToRelocate$, a["s-ol"] || (l = ht.createTextNode(""), l["s-nr"] = a, a.parentNode.insertBefore(a["s-ol"] = l, a));
      for (u = 0; u < ct.length; u++)
        if (s = ct[u], a = s.$nodeToRelocate$, s.$slotRefNode$) {
          for (d = s.$slotRefNode$.parentNode, h = s.$slotRefNode$.nextSibling, l = a["s-ol"]; l = l.previousSibling; )
            if (c = l["s-nr"], c && c["s-sn"] === a["s-sn"] && d === c.parentNode && (c = c.nextSibling, !c || !c["s-nr"])) {
              h = c;
              break;
            }
          (!h && d !== a.parentNode || a.nextSibling !== h) && a !== h && (!a["s-hn"] && a["s-ol"] && (a["s-hn"] = a["s-ol"].parentNode.nodeName), d.insertBefore(a, h));
        } else
          a.nodeType === 1 && (a.hidden = !0);
    }
    Ee && Wn(r.$elm$), q.$flags$ &= -2, ct.length = 0;
  }
}, cs = (t, e) => {
}, wi = (t, e) => (A.taskQueue && A.updatable && (t.$flags$ |= 16), cs(t, t.$ancestorComponent$), xt(() => ds(t, e))), ds = (t, e) => {
  const i = t.$hostElement$, n = $t("scheduleUpdate", t.$cmpMeta$.$tagName$), o = i;
  let r;
  return e ? r = jt(o, "componentWillLoad") : r = jt(o, "componentWillUpdate"), r = Ki(r, () => jt(o, "componentWillRender")), n(), Ki(r, () => hs(t, o, e));
}, hs = async (t, e, i) => {
  const n = t.$hostElement$, o = $t("update", t.$cmpMeta$.$tagName$);
  n["s-rc"], i && rs(t);
  const r = $t("render", t.$cmpMeta$.$tagName$);
  ps(t, e, n), r(), o(), us(t);
}, ps = (t, e, i) => {
  try {
    Hi = e, e = e.render && e.render(), t.$flags$ &= -17, t.$flags$ |= 2, (A.hasRenderFn || A.reflect) && (A.vdomRender || A.reflect) && (A.hydrateServerSide || ls(t, e));
  } catch (a) {
    de(a, t.$hostElement$);
  }
  return Hi = null, null;
}, us = (t) => {
  const e = t.$cmpMeta$.$tagName$, i = t.$hostElement$, n = $t("postUpdate", e), o = i;
  t.$ancestorComponent$, jt(o, "componentDidRender"), t.$flags$ & 64 ? (jt(o, "componentDidUpdate"), n()) : (t.$flags$ |= 64, jt(o, "componentDidLoad"), n());
}, Ae = (t) => {
  if (A.updatable) {
    const e = It(t), i = e.$hostElement$.isConnected;
    return i && (e.$flags$ & 18) === 2 && wi(e, !1), i;
  }
  return !1;
}, jt = (t, e, i) => {
  if (t && t[e])
    try {
      return t[e](i);
    } catch (n) {
      de(n);
    }
}, Ki = (t, e) => t && t.then ? t.then(e) : e(), ms = (t, e) => It(t).$instanceValues$.get(e), gs = (t, e, i, n) => {
  const o = It(t), r = t, s = o.$instanceValues$.get(e), a = o.$flags$, l = r;
  i = ts(i, n.$members$[e][0]);
  const d = Number.isNaN(s) && Number.isNaN(i);
  if (i !== s && !d) {
    o.$instanceValues$.set(e, i);
    {
      if (n.$watchers$ && a & 128) {
        const c = n.$watchers$[e];
        c && c.map((u) => {
          try {
            l[u](i, s, e);
          } catch (f) {
            de(f, r);
          }
        });
      }
      if ((a & 18) === 2) {
        if (l.componentShouldUpdate && l.componentShouldUpdate(i, s, e) === !1)
          return;
        wi(o, !1);
      }
    }
  }
}, fs = (t, e, i) => {
  if (e.$members$) {
    t.watchers && (e.$watchers$ = t.watchers);
    const n = Object.entries(e.$members$), o = t.prototype;
    n.map(([r, [s]]) => {
      (s & 31 || s & 32) && Object.defineProperty(o, r, {
        get() {
          return ms(this, r);
        },
        set(a) {
          gs(this, r, a, e);
        },
        configurable: !0,
        enumerable: !0
      });
    });
    {
      const r = /* @__PURE__ */ new Map();
      o.attributeChangedCallback = function(s, a, l) {
        q.jmp(() => {
          const d = r.get(s);
          if (this.hasOwnProperty(d))
            l = this[d], delete this[d];
          else if (o.hasOwnProperty(d) && typeof this[d] == "number" && this[d] == l)
            return;
          this[d] = l === null && typeof this[d] == "boolean" ? !1 : l;
        });
      }, t.observedAttributes = n.filter(([s, a]) => a[0] & 15).map(([s, a]) => {
        const l = a[1] || s;
        return r.set(l, s), a[0] & 512 && e.$attrsToReflect$.push([s, l]), l;
      });
    }
  }
  return t;
}, bs = async (t, e, i, n, o) => {
  if ((e.$flags$ & 32) === 0 && (o = t.constructor, e.$flags$ |= 32, customElements.whenDefined(i.$tagName$).then(() => e.$flags$ |= 128), o.style)) {
    let s = o.style;
    typeof s != "string" && (s = s[e.$modeName$ = Qr(t)]);
    const a = Rn(i, e.$modeName$);
    if (!ze.has(a)) {
      const l = $t("registerStyles", i.$tagName$);
      ns(a, s, !!(i.$flags$ & 1)), l();
    }
  }
  e.$ancestorComponent$, (() => wi(e, !0))();
}, vs = (t) => {
}, xs = (t) => {
  if ((q.$flags$ & 1) === 0) {
    const e = It(t), i = e.$cmpMeta$, n = $t("connectedCallback", i.$tagName$);
    e.$flags$ & 1 ? (Un(t, e, i.$listeners$), vs(e.$lazyInstance$)) : (e.$flags$ |= 1, i.$flags$ & 12 && ws(t), i.$members$ && Object.entries(i.$members$).map(([o, [r]]) => {
      if (r & 31 && t.hasOwnProperty(o)) {
        const s = t[o];
        delete t[o], t[o] = s;
      }
    }), bs(t, e, i)), n();
  }
}, ws = (t) => {
  const e = t["s-cr"] = ht.createComment("");
  e["s-cn"] = !0, t.insertBefore(e, t.firstChild);
}, ks = (t) => {
  if ((q.$flags$ & 1) === 0) {
    const e = It(t);
    e.$rmListeners$ && (e.$rmListeners$.map((i) => i()), e.$rmListeners$ = void 0);
  }
}, N = (t, e) => {
  const i = {
    $flags$: e[0],
    $tagName$: e[1]
  };
  A.member && (i.$members$ = e[2]), A.hostListener && (i.$listeners$ = e[3]), A.watchCallback && (i.$watchers$ = t.$watchers$), A.reflect && (i.$attrsToReflect$ = []), A.shadowDom && !De && i.$flags$ & 1 && (i.$flags$ |= 8);
  const n = t.prototype.connectedCallback, o = t.prototype.disconnectedCallback;
  return Object.assign(t.prototype, {
    __registerHost() {
      Ss(this, i);
    },
    connectedCallback() {
      xs(this), A.connectedCallback && n && n.call(this);
    },
    disconnectedCallback() {
      ks(this), A.disconnectedCallback && o && o.call(this);
    },
    __attachShadow() {
      De ? A.shadowDelegatesFocus ? this.attachShadow({
        mode: "open",
        delegatesFocus: !!(i.$flags$ & 16)
      }) : this.attachShadow({ mode: "open" }) : this.shadowRoot = this;
    }
  }), t.is = i.$tagName$, fs(t, i);
}, Un = (t, e, i, n) => {
  i && i.map(([o, r, s]) => {
    const a = Cs(t, o), l = ys(e, s), d = Es(o);
    q.ael(a, r, l, d), (e.$rmListeners$ = e.$rmListeners$ || []).push(() => q.rel(a, r, l, d));
  });
}, ys = (t, e) => (i) => {
  try {
    A.lazyLoad || t.$hostElement$[e](i);
  } catch (n) {
    de(n);
  }
}, Cs = (t, e) => e & 4 ? ht : e & 8 ? Gt : e & 16 ? ht.body : t, Es = (t) => zs ? {
  passive: (t & 1) !== 0,
  capture: (t & 2) !== 0
} : (t & 2) !== 0, Gn = /* @__PURE__ */ new WeakMap(), It = (t) => Gn.get(t), Ss = (t, e) => {
  const i = {
    $flags$: 0,
    $hostElement$: t,
    $cmpMeta$: e,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  return A.isDev && (i.$renderCount$ = 0), A.method && A.lazyLoad && (i.$onInstancePromise$ = new Promise((n) => i.$onInstanceResolve$ = n)), A.asyncLoading && (i.$onReadyPromise$ = new Promise((n) => i.$onReadyResolve$ = n), t["s-p"] = [], t["s-rc"] = []), Un(t, i, e.$listeners$), Gn.set(t, i);
}, Ni = (t, e) => e in t, de = (t, e) => (0, console.error)(t, e), Kn = A.isTesting ? ["STENCIL:"] : [
  "%cstencil",
  "color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px"
], $s = (...t) => console.error(...Kn, ...t), Nn = (...t) => console.warn(...Kn, ...t), ze = /* @__PURE__ */ new Map(), As = [], Gt = typeof window < "u" ? window : {};
A.cssVarShim && Gt.CSS;
const ht = Gt.document || { head: {} }, Z = Gt.HTMLElement || class {
}, q = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (t) => t(),
  raf: (t) => requestAnimationFrame(t),
  ael: (t, e, i, n) => t.addEventListener(e, i, n),
  rel: (t, e, i, n) => t.removeEventListener(e, i, n),
  ce: (t, e) => new CustomEvent(t, e)
}, De = A.shadowDomShim && A.shadowDom ? /* @__PURE__ */ (() => (ht.head.attachShadow + "").indexOf("[native") > -1)() : !0, zs = /* @__PURE__ */ (() => {
  let t = !1;
  try {
    ht.addEventListener("e", null, Object.defineProperty({}, "passive", {
      get() {
        t = !0;
      }
    }));
  } catch {
  }
  return t;
})(), Ds = (t) => Promise.resolve(t), Is = A.constructableCSS ? /* @__PURE__ */ (() => {
  try {
    return new CSSStyleSheet(), typeof new CSSStyleSheet().replaceSync == "function";
  } catch {
  }
  return !1;
})() : !1, oi = [], Zn = [], Qn = (t, e) => (i) => {
  t.push(i), ni || (ni = !0, e && q.$flags$ & 4 ? Ts(ri) : q.raf(ri));
}, Zi = (t) => {
  for (let e = 0; e < t.length; e++)
    try {
      t[e](performance.now());
    } catch (i) {
      de(i);
    }
  t.length = 0;
}, ri = () => {
  Zi(oi), Zi(Zn), (ni = oi.length > 0) && q.raf(ri);
}, Ts = (t) => Ds().then(t), re = /* @__PURE__ */ Qn(oi, !1), xt = /* @__PURE__ */ Qn(Zn, !0);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Qi = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
class Os {
  constructor() {
    this.m = /* @__PURE__ */ new Map();
  }
  reset(e) {
    this.m = new Map(Object.entries(e));
  }
  get(e, i) {
    const n = this.m.get(e);
    return n !== void 0 ? n : i;
  }
  getBoolean(e, i = !1) {
    const n = this.m.get(e);
    return n === void 0 ? i : typeof n == "string" ? n === "true" : !!n;
  }
  getNumber(e, i) {
    const n = parseFloat(this.m.get(e));
    return isNaN(n) ? i !== void 0 ? i : NaN : n;
  }
  set(e, i) {
    this.m.set(e, i);
  }
}
const Vt = /* @__PURE__ */ new Os(), Ls = (t) => Ms(t), Jn = (t, e) => (typeof t == "string" && (e = t, t = void 0), Ls(t).includes(e)), Ms = (t = window) => {
  if (typeof t > "u")
    return [];
  t.Ionic = t.Ionic || {};
  let e = t.Ionic.platforms;
  return e == null && (e = t.Ionic.platforms = Ps(t), e.forEach((i) => t.document.documentElement.classList.add(`plt-${i}`))), e;
}, Ps = (t) => {
  const e = Vt.get("platform");
  return Object.keys(Ji).filter((i) => {
    const n = e == null ? void 0 : e[i];
    return typeof n == "function" ? n(t) : Ji[i](t);
  });
}, Bs = (t) => Xe(t) && !eo(t), ki = (t) => !!(At(t, /iPad/i) || At(t, /Macintosh/i) && Xe(t)), Fs = (t) => At(t, /iPhone/i), _s = (t) => At(t, /iPhone|iPod/i) || ki(t), to = (t) => At(t, /android|sink/i), Rs = (t) => to(t) && !At(t, /mobile/i), Hs = (t) => {
  const e = t.innerWidth, i = t.innerHeight, n = Math.min(e, i), o = Math.max(e, i);
  return n > 390 && n < 520 && o > 620 && o < 800;
}, js = (t) => {
  const e = t.innerWidth, i = t.innerHeight, n = Math.min(e, i), o = Math.max(e, i);
  return ki(t) || Rs(t) || n > 460 && n < 820 && o > 780 && o < 1400;
}, Xe = (t) => qs(t, "(any-pointer:coarse)"), Xs = (t) => !Xe(t), eo = (t) => io(t) || no(t), io = (t) => !!(t.cordova || t.phonegap || t.PhoneGap), no = (t) => {
  const e = t.Capacitor;
  return !!(e != null && e.isNative);
}, Ys = (t) => At(t, /electron/i), Ws = (t) => {
  var e;
  return !!(((e = t.matchMedia) === null || e === void 0 ? void 0 : e.call(t, "(display-mode: standalone)").matches) || t.navigator.standalone);
}, At = (t, e) => e.test(t.navigator.userAgent), qs = (t, e) => {
  var i;
  return (i = t.matchMedia) === null || i === void 0 ? void 0 : i.call(t, e).matches;
}, Ji = {
  ipad: ki,
  iphone: Fs,
  ios: _s,
  android: to,
  phablet: Hs,
  tablet: js,
  cordova: io,
  capacitor: no,
  electron: Ys,
  pwa: Ws,
  mobile: Xe,
  mobileweb: Bs,
  desktop: Xs,
  hybrid: eo
};
let Vs;
const _ = (t) => t && Jr(t) || Vs;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const se = (t, e) => {
  t.componentOnReady ? t.componentOnReady().then((i) => e(i)) : V(() => e(t));
}, yi = (t, e = []) => {
  const i = {};
  return e.forEach((n) => {
    t.hasAttribute(n) && (t.getAttribute(n) !== null && (i[n] = t.getAttribute(n)), t.removeAttribute(n));
  }), i;
}, Us = [
  "role",
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-braillelabel",
  "aria-brailleroledescription",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colindextext",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-description",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowindextext",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext"
], Ci = (t) => yi(t, Us), Gs = (t, e, i, n) => {
  var o;
  if (typeof window < "u") {
    const r = window, s = (o = r == null ? void 0 : r.Ionic) === null || o === void 0 ? void 0 : o.config;
    if (s) {
      const a = s.get("_ael");
      if (a)
        return a(t, e, i, n);
      if (s._ael)
        return s._ael(t, e, i, n);
    }
  }
  return t.addEventListener(e, i, n);
}, Ks = (t, e, i, n) => {
  var o;
  if (typeof window < "u") {
    const r = window, s = (o = r == null ? void 0 : r.Ionic) === null || o === void 0 ? void 0 : o.config;
    if (s) {
      const a = s.get("_rel");
      if (a)
        return a(t, e, i, n);
      if (s._rel)
        return s._rel(t, e, i, n);
    }
  }
  return t.removeEventListener(e, i, n);
}, yt = (t, e = t) => t.shadowRoot || e, V = (t) => typeof __zone_symbol__requestAnimationFrame == "function" ? __zone_symbol__requestAnimationFrame(t) : typeof requestAnimationFrame == "function" ? requestAnimationFrame(t) : setTimeout(t), Ns = (t) => !!t.shadowRoot && !!t.attachShadow, Zs = (t) => {
  const e = t.closest("ion-item");
  return e ? e.querySelector("ion-label") : null;
}, Qs = (t) => {
  if (t.focus(), t.classList.contains("ion-focusable")) {
    const e = t.closest("ion-app");
    e && e.setFocus([t]);
  }
};
const Ut = (t, e, i) => Math.max(t, Math.min(e, i));
const Js = (t, e) => {
  const i = t._original || t;
  return {
    _original: t,
    emit: ta(i.emit.bind(i), e)
  };
}, ta = (t, e = 0) => {
  let i;
  return (...n) => {
    clearTimeout(i), i = setTimeout(t, e, ...n);
  };
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
let Ue;
const ea = () => {
  if (typeof window > "u")
    return /* @__PURE__ */ new Map();
  if (!Ue) {
    const t = window;
    t.Ionicons = t.Ionicons || {}, Ue = t.Ionicons.map = t.Ionicons.map || /* @__PURE__ */ new Map();
  }
  return Ue;
}, ia = (t) => {
  let e = Ge(t.src);
  return e || (e = oo(t.name, t.icon, t.mode, t.ios, t.md), e ? na(e) : t.icon && (e = Ge(t.icon), e || (e = Ge(t.icon[t.mode]), e)) ? e : null);
}, na = (t) => {
  const e = ea().get(t);
  return e || qr(`svg/${t}.svg`);
}, oo = (t, e, i, n, o) => (i = (i && fe(i)) === "ios" ? "ios" : "md", n && i === "ios" ? t = fe(n) : o && i === "md" ? t = fe(o) : (!t && e && !ro(e) && (t = e), Ie(t) && (t = fe(t))), !Ie(t) || t.trim() === "" || t.replace(/[a-z]|-|\d/gi, "") !== "" ? null : t), Ge = (t) => Ie(t) && (t = t.trim(), ro(t)) ? t : null, ro = (t) => t.length > 0 && /(\/|\.)/.test(t), Ie = (t) => typeof t == "string", fe = (t) => t.toLowerCase(), oa = (t, e = []) => {
  const i = {};
  return e.forEach((n) => {
    t.hasAttribute(n) && (t.getAttribute(n) !== null && (i[n] = t.getAttribute(n)), t.removeAttribute(n));
  }), i;
}, ra = (t) => {
  const e = document.createElement("div");
  e.innerHTML = t;
  for (let n = e.childNodes.length - 1; n >= 0; n--)
    e.childNodes[n].nodeName.toLowerCase() !== "svg" && e.removeChild(e.childNodes[n]);
  const i = e.firstElementChild;
  if (i && i.nodeName.toLowerCase() === "svg") {
    const n = i.getAttribute("class") || "";
    if (i.setAttribute("class", (n + " s-ion-icon").trim()), so(i))
      return e.innerHTML;
  }
  return "";
}, so = (t) => {
  if (t.nodeType === 1) {
    if (t.nodeName.toLowerCase() === "script")
      return !1;
    for (let e = 0; e < t.attributes.length; e++) {
      const i = t.attributes[e].name;
      if (Ie(i) && i.toLowerCase().indexOf("on") === 0)
        return !1;
    }
    for (let e = 0; e < t.childNodes.length; e++)
      if (!so(t.childNodes[e]))
        return !1;
  }
  return !0;
}, Xt = /* @__PURE__ */ new Map(), tn = /* @__PURE__ */ new Map(), sa = (t, e) => {
  let i = tn.get(t);
  if (!i)
    if (typeof fetch < "u" && typeof document < "u")
      i = fetch(t).then((n) => {
        if (n.ok)
          return n.text().then((o) => {
            o && e !== !1 && (o = ra(o)), Xt.set(t, o || "");
          });
        Xt.set(t, "");
      }), tn.set(t, i);
    else
      return Xt.set(t, ""), Promise.resolve();
  return i;
}, aa = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}", la = /* @__PURE__ */ N(class extends Z {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.iconName = null, this.inheritedAttributes = {}, this.isVisible = !1, this.mode = ca(), this.lazy = !1, this.sanitize = !0, this.hasAriaHidden = () => {
      const { el: t } = this;
      return t.hasAttribute("aria-hidden") && t.getAttribute("aria-hidden") === "true";
    };
  }
  componentWillLoad() {
    this.inheritedAttributes = oa(this.el, ["aria-label"]);
  }
  connectedCallback() {
    this.waitUntilVisible(this.el, "50px", () => {
      this.isVisible = !0, this.loadIcon();
    });
  }
  disconnectedCallback() {
    this.io && (this.io.disconnect(), this.io = void 0);
  }
  waitUntilVisible(t, e, i) {
    if (this.lazy && typeof window < "u" && window.IntersectionObserver) {
      const n = this.io = new window.IntersectionObserver((o) => {
        o[0].isIntersecting && (n.disconnect(), this.io = void 0, i());
      }, { rootMargin: e });
      n.observe(t);
    } else
      i();
  }
  loadIcon() {
    if (this.isVisible) {
      const e = ia(this);
      e && (Xt.has(e) ? this.svgContent = Xt.get(e) : sa(e, this.sanitize).then(() => this.svgContent = Xt.get(e)));
    }
    const t = this.iconName = oo(this.name, this.icon, this.mode, this.ios, this.md);
    t && (this.ariaLabel = t.replace(/\-/g, " "));
  }
  render() {
    const { iconName: t, ariaLabel: e, inheritedAttributes: i } = this, n = this.mode || "md", o = this.flipRtl || t && (t.indexOf("arrow") > -1 || t.indexOf("chevron") > -1) && this.flipRtl !== !1;
    return b(G, Object.assign({ "aria-label": e !== void 0 && !this.hasAriaHidden() ? e : null, role: "img", class: Object.assign(Object.assign({ [n]: !0 }, da(this.color)), { [`icon-${this.size}`]: !!this.size, "flip-rtl": !!o && this.el.ownerDocument.dir === "rtl" }) }, i), this.svgContent ? b("div", { class: "icon-inner", innerHTML: this.svgContent }) : b("div", { class: "icon-inner" }));
  }
  static get assetsDirs() {
    return ["svg"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      name: ["loadIcon"],
      src: ["loadIcon"],
      icon: ["loadIcon"]
    };
  }
  static get style() {
    return aa;
  }
}, [1, "ion-icon", {
  mode: [1025],
  color: [1],
  ios: [1],
  md: [1],
  flipRtl: [4, "flip-rtl"],
  name: [513],
  src: [1],
  icon: [8],
  size: [1],
  lazy: [4],
  sanitize: [4],
  svgContent: [32],
  isVisible: [32],
  ariaLabel: [32]
}]), ca = () => typeof document < "u" && document.documentElement.getAttribute("mode") || "md", da = (t) => t ? {
  "ion-color": !0,
  [`ion-color-${t}`]: !0
} : null;
function ha() {
  if (typeof customElements > "u")
    return;
  ["ion-icon"].forEach((e) => {
    switch (e) {
      case "ion-icon":
        customElements.get(e) || customElements.define(e, la);
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
class pa {
  constructor() {
    this.gestureId = 0, this.requestedStart = /* @__PURE__ */ new Map(), this.disabledGestures = /* @__PURE__ */ new Map(), this.disabledScroll = /* @__PURE__ */ new Set();
  }
  createGesture(e) {
    return new ua(this, this.newID(), e.name, e.priority || 0, !!e.disableScroll);
  }
  createBlocker(e = {}) {
    return new ma(this, this.newID(), e.disable, !!e.disableScroll);
  }
  start(e, i, n) {
    return this.canStart(e) ? (this.requestedStart.set(i, n), !0) : (this.requestedStart.delete(i), !1);
  }
  capture(e, i, n) {
    if (!this.start(e, i, n))
      return !1;
    const o = this.requestedStart;
    let r = -1e4;
    if (o.forEach((s) => {
      r = Math.max(r, s);
    }), r === n) {
      this.capturedId = i, o.clear();
      const s = new CustomEvent("ionGestureCaptured", { detail: { gestureName: e } });
      return document.dispatchEvent(s), !0;
    }
    return o.delete(i), !1;
  }
  release(e) {
    this.requestedStart.delete(e), this.capturedId === e && (this.capturedId = void 0);
  }
  disableGesture(e, i) {
    let n = this.disabledGestures.get(e);
    n === void 0 && (n = /* @__PURE__ */ new Set(), this.disabledGestures.set(e, n)), n.add(i);
  }
  enableGesture(e, i) {
    const n = this.disabledGestures.get(e);
    n !== void 0 && n.delete(i);
  }
  disableScroll(e) {
    this.disabledScroll.add(e), this.disabledScroll.size === 1 && document.body.classList.add(en);
  }
  enableScroll(e) {
    this.disabledScroll.delete(e), this.disabledScroll.size === 0 && document.body.classList.remove(en);
  }
  canStart(e) {
    return !(this.capturedId !== void 0 || this.isDisabled(e));
  }
  isCaptured() {
    return this.capturedId !== void 0;
  }
  isScrollDisabled() {
    return this.disabledScroll.size > 0;
  }
  isDisabled(e) {
    const i = this.disabledGestures.get(e);
    return !!(i && i.size > 0);
  }
  newID() {
    return this.gestureId++, this.gestureId;
  }
}
class ua {
  constructor(e, i, n, o, r) {
    this.id = i, this.name = n, this.disableScroll = r, this.priority = o * 1e6 + i, this.ctrl = e;
  }
  canStart() {
    return this.ctrl ? this.ctrl.canStart(this.name) : !1;
  }
  start() {
    return this.ctrl ? this.ctrl.start(this.name, this.id, this.priority) : !1;
  }
  capture() {
    if (!this.ctrl)
      return !1;
    const e = this.ctrl.capture(this.name, this.id, this.priority);
    return e && this.disableScroll && this.ctrl.disableScroll(this.id), e;
  }
  release() {
    this.ctrl && (this.ctrl.release(this.id), this.disableScroll && this.ctrl.enableScroll(this.id));
  }
  destroy() {
    this.release(), this.ctrl = void 0;
  }
}
class ma {
  constructor(e, i, n, o) {
    this.id = i, this.disable = n, this.disableScroll = o, this.ctrl = e;
  }
  block() {
    if (!!this.ctrl) {
      if (this.disable)
        for (const e of this.disable)
          this.ctrl.disableGesture(e, this.id);
      this.disableScroll && this.ctrl.disableScroll(this.id);
    }
  }
  unblock() {
    if (!!this.ctrl) {
      if (this.disable)
        for (const e of this.disable)
          this.ctrl.enableGesture(e, this.id);
      this.disableScroll && this.ctrl.enableScroll(this.id);
    }
  }
  destroy() {
    this.unblock(), this.ctrl = void 0;
  }
}
const en = "backdrop-no-scroll", ao = new pa();
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ga = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}", fa = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}", ba = /* @__PURE__ */ N(class extends Z {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.ionBackdropTap = F(this, "ionBackdropTap", 7), this.blocker = ao.createBlocker({
      disableScroll: !0
    }), this.visible = !0, this.tappable = !0, this.stopPropagation = !0;
  }
  connectedCallback() {
    this.stopPropagation && this.blocker.block();
  }
  disconnectedCallback() {
    this.blocker.unblock();
  }
  onMouseDown(t) {
    this.emitTap(t);
  }
  emitTap(t) {
    this.stopPropagation && (t.preventDefault(), t.stopPropagation()), this.tappable && this.ionBackdropTap.emit();
  }
  render() {
    const t = _(this);
    return b(G, { tabindex: "-1", "aria-hidden": "true", class: {
      [t]: !0,
      "backdrop-hide": !this.visible,
      "backdrop-no-tappable": !this.tappable
    } });
  }
  static get style() {
    return {
      ios: ga,
      md: fa
    };
  }
}, [33, "ion-backdrop", {
  visible: [4],
  tappable: [4],
  stopPropagation: [4, "stop-propagation"]
}, [[2, "click", "onMouseDown"]]]);
function va() {
  if (typeof customElements > "u")
    return;
  ["ion-backdrop"].forEach((e) => {
    switch (e) {
      case "ion-backdrop":
        customElements.get(e) || customElements.define(e, ba);
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const zt = (t, e) => e.closest(t) !== null, wt = (t, e) => typeof t == "string" && t.length > 0 ? Object.assign({ "ion-color": !0, [`ion-color-${t}`]: !0 }, e) : e, xa = (t) => t !== void 0 ? (Array.isArray(t) ? t : t.split(" ")).filter((i) => i != null).map((i) => i.trim()).filter((i) => i !== "") : [], wa = (t) => {
  const e = {};
  return xa(t).forEach((i) => e[i] = !0), e;
}, ka = /^[a-z][a-z0-9+\-.]*:/, lo = async (t, e, i, n) => {
  if (t != null && t[0] !== "#" && !ka.test(t)) {
    const o = document.querySelector("ion-router");
    if (o)
      return e != null && e.preventDefault(), o.push(t, i, n);
  }
  return !1;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ya = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}", Ca = /* @__PURE__ */ N(class extends Z {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.type = "bounded";
  }
  async addRipple(t, e) {
    return new Promise((i) => {
      re(() => {
        const n = this.el.getBoundingClientRect(), o = n.width, r = n.height, s = Math.sqrt(o * o + r * r), a = Math.max(r, o), l = this.unbounded ? a : s + Sa, d = Math.floor(a * $a), h = l / d;
        let c = t - n.left, u = e - n.top;
        this.unbounded && (c = o * 0.5, u = r * 0.5);
        const f = c - d * 0.5, v = u - d * 0.5, m = o * 0.5 - c, w = r * 0.5 - u;
        xt(() => {
          const k = document.createElement("div");
          k.classList.add("ripple-effect");
          const $ = k.style;
          $.top = v + "px", $.left = f + "px", $.width = $.height = d + "px", $.setProperty("--final-scale", `${h}`), $.setProperty("--translate-end", `${m}px, ${w}px`), (this.el.shadowRoot || this.el).appendChild(k), setTimeout(() => {
            i(() => {
              Ea(k);
            });
          }, 225 + 100);
        });
      });
    });
  }
  get unbounded() {
    return this.type === "unbounded";
  }
  render() {
    const t = _(this);
    return b(G, { role: "presentation", class: {
      [t]: !0,
      unbounded: this.unbounded
    } });
  }
  get el() {
    return this;
  }
  static get style() {
    return ya;
  }
}, [1, "ion-ripple-effect", {
  type: [1],
  addRipple: [64]
}]), Ea = (t) => {
  t.classList.add("fade-out"), setTimeout(() => {
    t.remove();
  }, 200);
}, Sa = 10, $a = 0.5;
function co() {
  if (typeof customElements > "u")
    return;
  ["ion-ripple-effect"].forEach((e) => {
    switch (e) {
      case "ion-ripple-effect":
        customElements.get(e) || customElements.define(e, Ca);
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Aa = ':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:10px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--transition:background-color, opacity 100ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:2.8em;font-size:16px;font-weight:500;letter-spacing:-0.03em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--background-hover:var(--ion-color-primary-tint, #4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:10px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #3880ff);--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast, #fff)}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;font-size:17px;font-weight:normal;letter-spacing:0}:host(.button-large){--border-radius:12px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--border-radius:6px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-clear.ion-activated){opacity:0.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}:host(.button-outline.ion-focused.ion-color) .button-native,:host(.button-clear.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native::after,:host(.button-clear.ion-focused.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.button-clear:hover),:host(.button-outline:hover){opacity:0.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:transparent}:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native::after{background:#fff;opacity:0.1}}', za = `:host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:4px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),
                background-color 15ms linear,
                color 15ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:36px;font-size:14px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-strong){font-weight:bold}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}`, Da = /* @__PURE__ */ N(class extends Z {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.ionFocus = F(this, "ionFocus", 7), this.ionBlur = F(this, "ionBlur", 7), this.inItem = !1, this.inListHeader = !1, this.inToolbar = !1, this.inheritedAttributes = {}, this.buttonType = "button", this.disabled = !1, this.routerDirection = "forward", this.strong = !1, this.type = "button", this.handleClick = (t) => {
      if (this.type === "button")
        lo(this.href, t, this.routerDirection, this.routerAnimation);
      else if (Ns(this.el)) {
        const e = this.el.closest("form");
        if (e) {
          t.preventDefault();
          const i = document.createElement("button");
          i.type = this.type, i.style.display = "none", e.appendChild(i), i.click(), i.remove();
        }
      }
    }, this.onFocus = () => {
      this.ionFocus.emit();
    }, this.onBlur = () => {
      this.ionBlur.emit();
    };
  }
  componentWillLoad() {
    this.inToolbar = !!this.el.closest("ion-buttons"), this.inListHeader = !!this.el.closest("ion-list-header"), this.inItem = !!this.el.closest("ion-item") || !!this.el.closest("ion-item-divider"), this.inheritedAttributes = Ci(this.el);
  }
  get hasIconOnly() {
    return !!this.el.querySelector('[slot="icon-only"]');
  }
  get rippleType() {
    return (this.fill === void 0 || this.fill === "clear") && this.hasIconOnly && this.inToolbar ? "unbounded" : "bounded";
  }
  render() {
    const t = _(this), { buttonType: e, type: i, disabled: n, rel: o, target: r, size: s, href: a, color: l, expand: d, hasIconOnly: h, shape: c, strong: u, inheritedAttributes: f } = this, v = s === void 0 && this.inItem ? "small" : s, m = a === void 0 ? "button" : "a", w = m === "button" ? { type: i } : {
      download: this.download,
      href: a,
      rel: o,
      target: r
    };
    let k = this.fill;
    return k === void 0 && (k = this.inToolbar || this.inListHeader ? "clear" : "solid"), b(G, { onClick: this.handleClick, "aria-disabled": n ? "true" : null, class: wt(l, {
      [t]: !0,
      [e]: !0,
      [`${e}-${d}`]: d !== void 0,
      [`${e}-${v}`]: v !== void 0,
      [`${e}-${c}`]: c !== void 0,
      [`${e}-${k}`]: !0,
      [`${e}-strong`]: u,
      "in-toolbar": zt("ion-toolbar", this.el),
      "in-toolbar-color": zt("ion-toolbar[color]", this.el),
      "button-has-icon-only": h,
      "button-disabled": n,
      "ion-activatable": !0,
      "ion-focusable": !0
    }) }, b(m, Object.assign({}, w, { class: "button-native", part: "native", disabled: n, onFocus: this.onFocus, onBlur: this.onBlur }, f), b("span", { class: "button-inner" }, b("slot", { name: "icon-only" }), b("slot", { name: "start" }), b("slot", null), b("slot", { name: "end" })), t === "md" && b("ion-ripple-effect", { type: this.rippleType })));
  }
  get el() {
    return this;
  }
  static get style() {
    return {
      ios: Aa,
      md: za
    };
  }
}, [33, "ion-button", {
  color: [513],
  buttonType: [1025, "button-type"],
  disabled: [516],
  expand: [513],
  fill: [1537],
  routerDirection: [1, "router-direction"],
  routerAnimation: [16],
  download: [1],
  href: [1],
  rel: [1],
  shape: [513],
  size: [513],
  strong: [4],
  target: [1],
  type: [1]
}]);
function Ia() {
  if (typeof customElements > "u")
    return;
  ["ion-button", "ion-ripple-effect"].forEach((e) => {
    switch (e) {
      case "ion-button":
        customElements.get(e) || customElements.define(e, Da);
        break;
      case "ion-ripple-effect":
        customElements.get(e) || co();
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Ta = Ia;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const be = typeof window < "u" ? window : void 0, nh = be && !!(be.CSS && be.CSS.supports && be.CSS.supports("--a: 0"));
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Oa = (t) => t && t.dir !== "" ? t.dir.toLowerCase() === "rtl" : (document == null ? void 0 : document.dir.toLowerCase()) === "rtl";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const La = ':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-ms-touch-action:pan-x pan-y pinch-zoom;touch-action:pan-x pan-y pinch-zoom}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:0;contain:none}:host(.content-sizing) .inner-scroll{position:relative;top:0;bottom:0;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1)}.transition-effect{display:none;position:absolute;width:100%;height:100vh;opacity:0;pointer-events:none}:host(.content-ltr) .transition-effect{left:-100%;}:host(.content-rtl) .transition-effect{right:-100%;}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}:host(.content-ltr) .transition-shadow{right:0;}:host(.content-rtl) .transition-shadow{left:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}::slotted([slot=fixed]){position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0)}', Ma = /* @__PURE__ */ N(class extends Z {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.ionScrollStart = F(this, "ionScrollStart", 7), this.ionScroll = F(this, "ionScroll", 7), this.ionScrollEnd = F(this, "ionScrollEnd", 7), this.isScrolling = !1, this.lastScroll = 0, this.queued = !1, this.cTop = -1, this.cBottom = -1, this.isMainContent = !0, this.detail = {
      scrollTop: 0,
      scrollLeft: 0,
      type: "scroll",
      event: void 0,
      startX: 0,
      startY: 0,
      startTime: 0,
      currentX: 0,
      currentY: 0,
      velocityX: 0,
      velocityY: 0,
      deltaX: 0,
      deltaY: 0,
      currentTime: 0,
      data: void 0,
      isScrolling: !0
    }, this.fullscreen = !1, this.scrollX = !1, this.scrollY = !0, this.scrollEvents = !1;
  }
  connectedCallback() {
    this.isMainContent = this.el.closest("ion-menu, ion-popover, ion-modal") === null;
  }
  disconnectedCallback() {
    this.onScrollEnd();
  }
  onAppLoad() {
    this.resize();
  }
  shouldForceOverscroll() {
    const { forceOverscroll: t } = this, e = _(this);
    return t === void 0 ? e === "ios" && Jn("ios") : t;
  }
  resize() {
    this.fullscreen ? re(() => this.readDimensions()) : (this.cTop !== 0 || this.cBottom !== 0) && (this.cTop = this.cBottom = 0, Ae(this));
  }
  readDimensions() {
    const t = Ba(this.el), e = Math.max(this.el.offsetTop, 0), i = Math.max(t.offsetHeight - e - this.el.offsetHeight, 0);
    (e !== this.cTop || i !== this.cBottom) && (this.cTop = e, this.cBottom = i, Ae(this));
  }
  onScroll(t) {
    const e = Date.now(), i = !this.isScrolling;
    this.lastScroll = e, i && this.onScrollStart(), !this.queued && this.scrollEvents && (this.queued = !0, re((n) => {
      this.queued = !1, this.detail.event = t, Fa(this.detail, this.scrollEl, n, i), this.ionScroll.emit(this.detail);
    }));
  }
  async getScrollElement() {
    return this.scrollEl || await new Promise((t) => se(this.el, t)), Promise.resolve(this.scrollEl);
  }
  async getBackgroundElement() {
    return this.backgroundContentEl || await new Promise((t) => se(this.el, t)), Promise.resolve(this.backgroundContentEl);
  }
  scrollToTop(t = 0) {
    return this.scrollToPoint(void 0, 0, t);
  }
  async scrollToBottom(t = 0) {
    const e = await this.getScrollElement(), i = e.scrollHeight - e.clientHeight;
    return this.scrollToPoint(void 0, i, t);
  }
  async scrollByPoint(t, e, i) {
    const n = await this.getScrollElement();
    return this.scrollToPoint(t + n.scrollLeft, e + n.scrollTop, i);
  }
  async scrollToPoint(t, e, i = 0) {
    const n = await this.getScrollElement();
    if (i < 32) {
      e != null && (n.scrollTop = e), t != null && (n.scrollLeft = t);
      return;
    }
    let o, r = 0;
    const s = new Promise((u) => o = u), a = n.scrollTop, l = n.scrollLeft, d = e != null ? e - a : 0, h = t != null ? t - l : 0, c = (u) => {
      const f = Math.min(1, (u - r) / i) - 1, v = Math.pow(f, 3) + 1;
      d !== 0 && (n.scrollTop = Math.floor(v * d + a)), h !== 0 && (n.scrollLeft = Math.floor(v * h + l)), v < 1 ? requestAnimationFrame(c) : o();
    };
    return requestAnimationFrame((u) => {
      r = u, c(u);
    }), s;
  }
  onScrollStart() {
    this.isScrolling = !0, this.ionScrollStart.emit({
      isScrolling: !0
    }), this.watchDog && clearInterval(this.watchDog), this.watchDog = setInterval(() => {
      this.lastScroll < Date.now() - 120 && this.onScrollEnd();
    }, 100);
  }
  onScrollEnd() {
    clearInterval(this.watchDog), this.watchDog = null, this.isScrolling && (this.isScrolling = !1, this.ionScrollEnd.emit({
      isScrolling: !1
    }));
  }
  render() {
    const { isMainContent: t, scrollX: e, scrollY: i, el: n } = this, o = Oa(n) ? "rtl" : "ltr", r = _(this), s = this.shouldForceOverscroll(), a = r === "ios", l = t ? "main" : "div";
    return this.resize(), b(G, { class: wt(this.color, {
      [r]: !0,
      "content-sizing": zt("ion-popover", this.el),
      overscroll: s,
      [`content-${o}`]: !0
    }), style: {
      "--offset-top": `${this.cTop}px`,
      "--offset-bottom": `${this.cBottom}px`
    } }, b("div", { ref: (d) => this.backgroundContentEl = d, id: "background-content", part: "background" }), b(l, { class: {
      "inner-scroll": !0,
      "scroll-x": e,
      "scroll-y": i,
      overscroll: (e || i) && s
    }, ref: (d) => this.scrollEl = d, onScroll: this.scrollEvents ? (d) => this.onScroll(d) : void 0, part: "scroll" }, b("slot", null)), a ? b("div", { class: "transition-effect" }, b("div", { class: "transition-cover" }), b("div", { class: "transition-shadow" })) : null, b("slot", { name: "fixed" }));
  }
  get el() {
    return this;
  }
  static get style() {
    return La;
  }
}, [1, "ion-content", {
  color: [513],
  fullscreen: [4],
  forceOverscroll: [1028, "force-overscroll"],
  scrollX: [4, "scroll-x"],
  scrollY: [4, "scroll-y"],
  scrollEvents: [4, "scroll-events"],
  getScrollElement: [64],
  getBackgroundElement: [64],
  scrollToTop: [64],
  scrollToBottom: [64],
  scrollByPoint: [64],
  scrollToPoint: [64]
}, [[8, "appload", "onAppLoad"]]]), Pa = (t) => {
  var e;
  return t.parentElement ? t.parentElement : !((e = t.parentNode) === null || e === void 0) && e.host ? t.parentNode.host : null;
}, Ba = (t) => {
  const e = t.closest("ion-tabs");
  if (e)
    return e;
  const i = t.closest("ion-app, ion-page, .ion-page, page-inner, .popover-content");
  return i || Pa(t);
}, Fa = (t, e, i, n) => {
  const o = t.currentX, r = t.currentY, s = t.currentTime, a = e.scrollLeft, l = e.scrollTop, d = i - s;
  if (n && (t.startTime = i, t.startX = a, t.startY = l, t.velocityX = t.velocityY = 0), t.currentTime = i, t.currentX = t.scrollLeft = a, t.currentY = t.scrollTop = l, t.deltaX = a - t.startX, t.deltaY = l - t.startY, d > 0 && d < 100) {
    const h = (a - o) / d, c = (l - r) / d;
    t.velocityX = h * 0.7 + t.velocityX * 0.3, t.velocityY = c * 0.7 + t.velocityY * 0.3;
  }
};
function _a() {
  if (typeof customElements > "u")
    return;
  ["ion-content"].forEach((e) => {
    switch (e) {
      case "ion-content":
        customElements.get(e) || customElements.define(e, Ma);
        break;
    }
  });
}
const Ra = _a;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ve = (t, ...e) => console.warn(`[Ionic Warning]: ${t}`, ...e), Ha = (t, ...e) => console.error(`[Ionic Error]: ${t}`, ...e), ja = (t, ...e) => console.error(`<${t.tagName.toLowerCase()}> must be used inside ${e.join(" or ")}.`);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ho = (t) => {
  const e = t.getTimezoneOffset();
  return t.setMinutes(t.getMinutes() - e), t;
}, oh = ho(new Date("2022T01:00")), rh = ho(new Date("2022T13:00"));
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Xa = ":host{color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-350, #a6a6a6)}", Ya = ":host{color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600, #666666);font-size:14px}", Wa = /* @__PURE__ */ N(class extends Z {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow();
  }
  render() {
    const t = _(this);
    return b(G, { class: wt(this.color, {
      [t]: !0
    }) }, b("slot", null));
  }
  static get style() {
    return {
      ios: Xa,
      md: Ya
    };
  }
}, [33, "ion-note", {
  color: [513]
}]);
function qa() {
  if (typeof customElements > "u")
    return;
  ["ion-note"].forEach((e) => {
    switch (e) {
      case "ion-note":
        customElements.get(e) || customElements.define(e, Wa);
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Va = ':host{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:initial;text-decoration:none;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-native,:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-inner{border-color:var(--ion-color-shade)}:host(.ion-activated) .item-native{color:var(--color-activated)}:host(.ion-activated) .item-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-color.ion-activated) .item-native{color:var(--ion-color-contrast)}:host(.ion-focused) .item-native{color:var(--color-focused)}:host(.ion-focused) .item-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-color.ion-focused) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .item-native::after{background:var(--ion-color-contrast)}@media (any-hover: hover){:host(.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--color-hover)}:host(.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--ion-color-contrast)}}:host(.item-interactive-disabled:not(.item-multiple-inputs)){cursor:default;pointer-events:none}:host(.item-disabled){cursor:default;opacity:0.3;pointer-events:none}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-native{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.item-native::-moz-focus-inner{border:0}.item-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;-webkit-transition:var(--transition);transition:var(--transition);z-index:-1}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-inner{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end))}}.item-bottom{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--inner-padding-end);padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-bottom{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--inner-padding-end);padding-inline-end:var(--inner-padding-end)}}.item-detail-icon{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(ion-label:not([slot=end])){-ms-flex:1;flex:1}:host(.item-input){-ms-flex-align:center;align-items:center}.input-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-label-stacked),:host(.item-label-floating){-ms-flex-align:start;align-items:start}:host(.item-label-stacked) .input-wrapper,:host(.item-label-floating) .input-wrapper{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.item-highlight,.item-inner-highlight{left:0;right:0;top:0;bottom:0;border-radius:inherit;position:absolute;width:100%;height:100%;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:border-bottom-width 200ms, -webkit-transform 200ms;transition:border-bottom-width 200ms, -webkit-transform 200ms;transition:transform 200ms, border-bottom-width 200ms;transition:transform 200ms, border-bottom-width 200ms, -webkit-transform 200ms;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.item-interactive.ion-focused),:host(.item-interactive.item-has-focus),:host(.item-interactive.ion-touched.ion-invalid){--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.ion-focused) .item-highlight,:host(.ion-focused) .item-inner-highlight,:host(.item-has-focus) .item-highlight,:host(.item-has-focus) .item-inner-highlight{-webkit-transform:scaleX(1);transform:scaleX(1);border-style:var(--border-style);border-color:var(--highlight-background)}:host(.ion-focused) .item-highlight,:host(.item-has-focus) .item-highlight{border-width:var(--full-highlight-height);opacity:var(--show-full-highlight)}:host(.ion-focused) .item-inner-highlight,:host(.item-has-focus) .item-inner-highlight{border-bottom-width:var(--inset-highlight-height);opacity:var(--show-inset-highlight)}:host(.ion-focused.item-fill-solid) .item-highlight,:host(.item-has-focus.item-fill-solid) .item-highlight{border-width:calc(var(--full-highlight-height) - 1px)}:host(.ion-focused) .item-inner-highlight,:host(.ion-focused:not(.item-fill-outline)) .item-highlight,:host(.item-has-focus) .item-inner-highlight,:host(.item-has-focus:not(.item-fill-outline)) .item-highlight{border-top:none;border-right:none;border-left:none}:host(.item-interactive.ion-focused),:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused)}:host(.item-interactive.ion-valid){--highlight-background:var(--highlight-color-valid)}:host(.item-interactive.ion-invalid){--highlight-background:var(--highlight-color-invalid)}:host(.item-interactive.ion-invalid) ::slotted([slot=helper]){display:none}::slotted([slot=error]){display:none;color:var(--highlight-color-invalid)}:host(.item-interactive.ion-invalid) ::slotted([slot=error]){display:block}:host(:not(.item-label)) ::slotted(ion-select){--padding-start:0;max-width:none}:host(.item-label-stacked) ::slotted(ion-select),:host(.item-label-floating) ::slotted(ion-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(:not(.item-label)) ::slotted(ion-datetime){--padding-start:0}:host(.item-label-stacked) ::slotted(ion-datetime),:host(.item-label-floating) ::slotted(ion-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(ion-checkbox),:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-radio),:host(.item-multiple-inputs) ::slotted(ion-select){position:relative}:host(.item-textarea){-ms-flex-align:stretch;align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}:host(.item-fill-solid) ::slotted([slot=start]),:host(.item-fill-solid) ::slotted([slot=end]),:host(.item-fill-outline) ::slotted([slot=start]),:host(.item-fill-outline) ::slotted([slot=end]){-ms-flex-item-align:center;align-self:center}::slotted([slot=helper]),::slotted([slot=error]),.item-counter{padding-top:5px;font-size:12px;z-index:1}.item-counter{margin-left:auto;color:var(--ion-color-step-550, #737373);white-space:nowrap;-webkit-padding-start:16px;padding-inline-start:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-counter{margin-left:unset;-webkit-margin-start:auto;margin-inline-start:auto}}@media (prefers-reduced-motion: reduce){.item-highlight,.item-inner-highlight{-webkit-transition:none;transition:none}}:host{--min-height:44px;--transition:background-color 200ms linear, opacity 200ms linear;--padding-start:20px;--inner-padding-end:10px;--inner-border-width:0px 0px 0.55px 0px;--background:var(--ion-item-background, var(--ion-background-color, #fff));--background-activated:#000;--background-focused:#000;--background-hover:currentColor;--background-activated-opacity:.12;--background-focused-opacity:.15;--background-hover-opacity:.04;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--color:var(--ion-item-color, var(--ion-text-color, #000));--highlight-height:0px;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);--bottom-padding-start:0px;font-size:17px}:host(.ion-activated){--transition:none}:host(.ion-color.ion-focused) .item-native::after{background:#000;opacity:0.15}:host(.ion-color.ion-activated) .item-native::after{background:#000;opacity:0.12}:host(.item-interactive){--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-full){--border-width:0px 0px 0.55px 0px;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0px 0px 0.55px 0px;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0px;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0px;--show-inset-highlight:0}.item-highlight,.item-inner-highlight{-webkit-transition:none;transition:none}:host(.item-has-focus) .item-inner-highlight,:host(.item-has-focus) .item-highlight{border-top:none;border-right:none;border-left:none}::slotted([slot=start]){margin-left:0;margin-right:20px;margin-top:2px;margin-bottom:2px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:20px;margin-inline-end:20px}}::slotted([slot=end]){margin-left:10px;margin-right:10px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}::slotted(ion-icon[slot=start]),::slotted(ion-icon[slot=end]){margin-top:7px;margin-bottom:7px}::slotted(ion-toggle[slot=start]),::slotted(ion-toggle[slot=end]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.item-label-stacked) ::slotted([slot=end]),:host(.item-label-floating) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}::slotted(.button-small){--padding-top:0px;--padding-bottom:0px;--padding-start:.5em;--padding-end:.5em;height:24px;font-size:13px}::slotted(ion-avatar){width:36px;height:36px}::slotted(ion-thumbnail){width:56px;height:56px}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:10px;margin-right:10px;margin-top:10px;margin-bottom:10px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:0px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:unset;-webkit-margin-start:0px;margin-inline-start:0px}}::slotted(ion-label){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:10px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.item-label-floating),:host(.item-label-stacked){--min-height:68px}:host(.item-label-stacked) ::slotted(ion-select),:host(.item-label-floating) ::slotted(ion-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0px}:host(.item-label-fixed) ::slotted(ion-select),:host(.item-label-fixed) ::slotted(ion-datetime){--padding-start:0}', Ua = ':host{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:initial;text-decoration:none;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-native,:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) .item-inner{border-color:var(--ion-color-shade)}:host(.ion-activated) .item-native{color:var(--color-activated)}:host(.ion-activated) .item-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-color.ion-activated) .item-native{color:var(--ion-color-contrast)}:host(.ion-focused) .item-native{color:var(--color-focused)}:host(.ion-focused) .item-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-color.ion-focused) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .item-native::after{background:var(--ion-color-contrast)}@media (any-hover: hover){:host(.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--color-hover)}:host(.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-activatable:not(.ion-focused):hover) .item-native::after{background:var(--ion-color-contrast)}}:host(.item-interactive-disabled:not(.item-multiple-inputs)){cursor:default;pointer-events:none}:host(.item-disabled){cursor:default;opacity:0.3;pointer-events:none}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-native{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.item-native::-moz-focus-inner{border:0}.item-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;-webkit-transition:var(--transition);transition:var(--transition);z-index:-1}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-inner{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end))}}.item-bottom{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--inner-padding-end);padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-bottom{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--inner-padding-end);padding-inline-end:var(--inner-padding-end)}}.item-detail-icon{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(ion-label:not([slot=end])){-ms-flex:1;flex:1}:host(.item-input){-ms-flex-align:center;align-items:center}.input-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-label-stacked),:host(.item-label-floating){-ms-flex-align:start;align-items:start}:host(.item-label-stacked) .input-wrapper,:host(.item-label-floating) .input-wrapper{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.item-highlight,.item-inner-highlight{left:0;right:0;top:0;bottom:0;border-radius:inherit;position:absolute;width:100%;height:100%;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:border-bottom-width 200ms, -webkit-transform 200ms;transition:border-bottom-width 200ms, -webkit-transform 200ms;transition:transform 200ms, border-bottom-width 200ms;transition:transform 200ms, border-bottom-width 200ms, -webkit-transform 200ms;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.item-interactive.ion-focused),:host(.item-interactive.item-has-focus),:host(.item-interactive.ion-touched.ion-invalid){--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.ion-focused) .item-highlight,:host(.ion-focused) .item-inner-highlight,:host(.item-has-focus) .item-highlight,:host(.item-has-focus) .item-inner-highlight{-webkit-transform:scaleX(1);transform:scaleX(1);border-style:var(--border-style);border-color:var(--highlight-background)}:host(.ion-focused) .item-highlight,:host(.item-has-focus) .item-highlight{border-width:var(--full-highlight-height);opacity:var(--show-full-highlight)}:host(.ion-focused) .item-inner-highlight,:host(.item-has-focus) .item-inner-highlight{border-bottom-width:var(--inset-highlight-height);opacity:var(--show-inset-highlight)}:host(.ion-focused.item-fill-solid) .item-highlight,:host(.item-has-focus.item-fill-solid) .item-highlight{border-width:calc(var(--full-highlight-height) - 1px)}:host(.ion-focused) .item-inner-highlight,:host(.ion-focused:not(.item-fill-outline)) .item-highlight,:host(.item-has-focus) .item-inner-highlight,:host(.item-has-focus:not(.item-fill-outline)) .item-highlight{border-top:none;border-right:none;border-left:none}:host(.item-interactive.ion-focused),:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused)}:host(.item-interactive.ion-valid){--highlight-background:var(--highlight-color-valid)}:host(.item-interactive.ion-invalid){--highlight-background:var(--highlight-color-invalid)}:host(.item-interactive.ion-invalid) ::slotted([slot=helper]){display:none}::slotted([slot=error]){display:none;color:var(--highlight-color-invalid)}:host(.item-interactive.ion-invalid) ::slotted([slot=error]){display:block}:host(:not(.item-label)) ::slotted(ion-select){--padding-start:0;max-width:none}:host(.item-label-stacked) ::slotted(ion-select),:host(.item-label-floating) ::slotted(ion-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(:not(.item-label)) ::slotted(ion-datetime){--padding-start:0}:host(.item-label-stacked) ::slotted(ion-datetime),:host(.item-label-floating) ::slotted(ion-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(ion-checkbox),:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-radio),:host(.item-multiple-inputs) ::slotted(ion-select){position:relative}:host(.item-textarea){-ms-flex-align:stretch;align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}:host(.item-fill-solid) ::slotted([slot=start]),:host(.item-fill-solid) ::slotted([slot=end]),:host(.item-fill-outline) ::slotted([slot=start]),:host(.item-fill-outline) ::slotted([slot=end]){-ms-flex-item-align:center;align-self:center}::slotted([slot=helper]),::slotted([slot=error]),.item-counter{padding-top:5px;font-size:12px;z-index:1}.item-counter{margin-left:auto;color:var(--ion-color-step-550, #737373);white-space:nowrap;-webkit-padding-start:16px;padding-inline-start:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-counter{margin-left:unset;-webkit-margin-start:auto;margin-inline-start:auto}}@media (prefers-reduced-motion: reduce){.item-highlight,.item-inner-highlight{-webkit-transition:none;transition:none}}:host{--min-height:48px;--background:var(--ion-item-background, var(--ion-background-color, #fff));--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--color:var(--ion-item-color, var(--ion-text-color, #000));--transition:opacity 15ms linear, background-color 15ms linear;--padding-start:16px;--inner-padding-end:16px;--inner-border-width:0 0 1px 0;--highlight-height:1px;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);font-size:16px;font-weight:normal;text-transform:none}:host(.item-fill-outline){--highlight-height:2px}:host(.item-fill-none.item-interactive.ion-focus) .item-highlight,:host(.item-fill-none.item-interactive.item-has-focus) .item-highlight,:host(.item-fill-none.item-interactive.ion-touched.ion-invalid) .item-highlight{-webkit-transform:scaleX(1);transform:scaleX(1);border-width:0 0 var(--full-highlight-height) 0;border-style:var(--border-style);border-color:var(--highlight-background)}:host(.item-fill-none.item-interactive.ion-focus) .item-native,:host(.item-fill-none.item-interactive.item-has-focus) .item-native,:host(.item-fill-none.item-interactive.ion-touched.ion-invalid) .item-native{border-bottom-color:var(--highlight-background)}:host(.item-fill-outline.item-interactive.ion-focus) .item-highlight,:host(.item-fill-outline.item-interactive.item-has-focus) .item-highlight{-webkit-transform:scaleX(1);transform:scaleX(1)}:host(.item-fill-outline.item-interactive.ion-focus) .item-highlight,:host(.item-fill-outline.item-interactive.item-has-focus) .item-highlight,:host(.item-fill-outline.item-interactive.ion-touched.ion-invalid) .item-highlight{border-width:var(--full-highlight-height);border-style:var(--border-style);border-color:var(--highlight-background)}:host(.item-fill-outline.item-interactive.ion-touched.ion-invalid) .item-native{border-color:var(--highlight-background)}:host(.item-fill-solid.item-interactive.ion-focus) .item-highlight,:host(.item-fill-solid.item-interactive.item-has-focus) .item-highlight,:host(.item-fill-solid.item-interactive.ion-touched.ion-invalid) .item-highlight{-webkit-transform:scaleX(1);transform:scaleX(1);border-width:0 0 var(--full-highlight-height) 0;border-style:var(--border-style);border-color:var(--highlight-background)}:host(.item-fill-solid.item-interactive.ion-focus) .item-native,:host(.item-fill-solid.item-interactive.item-has-focus) .item-native,:host(.item-fill-solid.item-interactive.ion-touched.ion-invalid) .item-native{border-bottom-color:var(--highlight-background)}:host(.ion-color.ion-activated) .item-native::after{background:transparent}:host(.item-has-focus) .item-native{caret-color:var(--highlight-background)}:host(.item-interactive){--border-width:0 0 1px 0;--inner-border-width:0;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-full){--border-width:0 0 1px 0;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0 0 1px 0;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0;--show-inset-highlight:0}:host(.item-fill-outline) .item-highlight{--position-offset:calc(-1 * var(--border-width));left:var(--position-offset);top:var(--position-offset);width:calc(100% + 2 * var(--border-width));height:calc(100% + 2 * var(--border-width));-webkit-transition:none;transition:none}:host-context([dir=rtl]):host(.item-fill-outline) .item-highlight,:host-context([dir=rtl]).item-fill-outline .item-highlight{left:unset;right:unset;right:var(--position-offset)}:host(.item-fill-outline.ion-focused) .item-native,:host(.item-fill-outline.item-has-focus) .item-native{border-color:transparent}:host(.item-multi-line) ::slotted([slot=start]),:host(.item-multi-line) ::slotted([slot=end]){margin-top:16px;margin-bottom:16px;-ms-flex-item-align:start;align-self:flex-start}::slotted([slot=start]){margin-right:32px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-right:unset;-webkit-margin-end:32px;margin-inline-end:32px}}::slotted([slot=end]){margin-left:32px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;-webkit-margin-start:32px;margin-inline-start:32px}}:host(.item-fill-solid) ::slotted([slot=start]),:host(.item-fill-solid) ::slotted([slot=end]),:host(.item-fill-outline) ::slotted([slot=start]),:host(.item-fill-outline) ::slotted([slot=end]){-ms-flex-item-align:center;align-self:center}::slotted(ion-icon){color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);font-size:24px}:host(.ion-color:not(.item-fill-solid):not(.item-fill-outline)) ::slotted(ion-icon){color:var(--ion-color-contrast)}::slotted(ion-icon[slot]){margin-top:12px;margin-bottom:12px}::slotted(ion-icon[slot=start]){margin-right:32px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-right:unset;-webkit-margin-end:32px;margin-inline-end:32px}}::slotted(ion-icon[slot=end]){margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}:host(.item-fill-solid) ::slotted(ion-icon[slot=start]),:host(.item-fill-outline) ::slotted(ion-icon[slot=start]){margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.item-fill-solid) ::slotted(ion-icon[slot=start]),:host(.item-fill-outline) ::slotted(ion-icon[slot=start]){margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-toggle[slot=start]),::slotted(ion-toggle[slot=end]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}::slotted(ion-note){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-ms-flex-item-align:start;align-self:flex-start;font-size:11px}::slotted(ion-note[slot]:not([slot=helper]):not([slot=error])){padding-left:0;padding-right:0;padding-top:18px;padding-bottom:10px}::slotted(ion-note[slot=start]){padding-right:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-note[slot=start]){padding-right:unset;-webkit-padding-end:16px;padding-inline-end:16px}}::slotted(ion-note[slot=end]){padding-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-note[slot=end]){padding-left:unset;-webkit-padding-start:16px;padding-inline-start:16px}}::slotted(ion-avatar){width:40px;height:40px}::slotted(ion-thumbnail){width:56px;height:56px}::slotted(ion-avatar),::slotted(ion-thumbnail){margin-top:8px;margin-bottom:8px}::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){margin-right:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){margin-right:unset;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:10px;margin-bottom:10px}:host(.item-label-stacked) ::slotted([slot=end]),:host(.item-label-floating) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}:host(.item-label-fixed) ::slotted(ion-select),:host(.item-label-fixed) ::slotted(ion-datetime){--padding-start:8px}:host(.item-toggle) ::slotted(ion-label),:host(.item-radio) ::slotted(ion-label){margin-left:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.item-toggle) ::slotted(ion-label),:host(.item-radio) ::slotted(ion-label){margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}::slotted(.button-small){--padding-top:0;--padding-bottom:0;--padding-start:.6em;--padding-end:.6em;height:25px;font-size:12px}:host(.item-label-floating),:host(.item-label-stacked){--min-height:55px}:host(.item-label-stacked) ::slotted(ion-select),:host(.item-label-floating) ::slotted(ion-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0}:host(.ion-focused:not(.ion-color)) ::slotted(.label-stacked),:host(.ion-focused:not(.ion-color)) ::slotted(.label-floating),:host(.item-has-focus:not(.ion-color)) ::slotted(.label-stacked),:host(.item-has-focus:not(.ion-color)) ::slotted(.label-floating){color:var(--ion-color-primary, #3880ff)}:host(.ion-color){--highlight-color-focused:var(--ion-color-contrast)}:host(.item-label-color){--highlight-color-focused:var(--ion-color-base)}:host(.item-fill-solid.ion-color),:host(.item-fill-outline.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.item-fill-solid){--background:var(--ion-color-step-50, #f2f2f2);--background-hover:var(--ion-color-step-100, #e6e6e6);--background-focused:var(--ion-color-step-150, #d9d9d9);--border-width:0 0 1px 0;--inner-border-width:0;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.item-fill-solid),:host-context([dir=rtl]).item-fill-solid{border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.item-fill-solid) .item-native{--border-color:var(--ion-color-step-500, gray)}:host(.item-fill-solid.ion-focused) .item-native,:host(.item-fill-solid.item-has-focus) .item-native{--background:var(--background-focused)}:host(.item-fill-solid.item-shape-round){border-top-left-radius:16px;border-top-right-radius:16px;border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.item-fill-solid.item-shape-round),:host-context([dir=rtl]).item-fill-solid.item-shape-round{border-top-left-radius:16px;border-top-right-radius:16px;border-bottom-right-radius:0;border-bottom-left-radius:0}@media (any-hover: hover){:host(.item-fill-solid:hover) .item-native{--background:var(--background-hover);--border-color:var(--ion-color-step-750, #404040)}}:host(.item-fill-outline){--ripple-color:transparent;--background-focused:transparent;--background-hover:transparent;--border-color:var(--ion-color-step-500, gray);--border-width:1px;border:none;overflow:visible}:host(.item-fill-outline) .item-native{--native-padding-left:16px;border-radius:4px}:host(.item-fill-outline.item-shape-round) .item-native{--inner-padding-start:16px;border-radius:28px}:host(.item-fill-outline.item-shape-round) .item-bottom{padding-left:32px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.item-fill-outline.item-shape-round) .item-bottom{padding-left:unset;-webkit-padding-start:32px;padding-inline-start:32px}}:host(.item-fill-outline.item-label-floating.ion-focused) .item-native ::slotted(ion-input:not(:first-child)),:host(.item-fill-outline.item-label-floating.ion-focused) .item-native ::slotted(ion-textarea:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-focus) .item-native ::slotted(ion-input:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-focus) .item-native ::slotted(ion-textarea:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-value) .item-native ::slotted(ion-input:not(:first-child)),:host(.item-fill-outline.item-label-floating.item-has-value) .item-native ::slotted(ion-textarea:not(:first-child)){-webkit-transform:translateY(-14px);transform:translateY(-14px)}@media (any-hover: hover){:host(.item-fill-outline:hover) .item-native{--border-color:var(--ion-color-step-750, #404040)}}.item-counter{letter-spacing:0.0333333333em}', Ga = /* @__PURE__ */ N(class extends Z {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.labelColorStyles = {}, this.itemStyles = /* @__PURE__ */ new Map(), this.multipleInputs = !1, this.focusable = !0, this.button = !1, this.detailIcon = Qi, this.disabled = !1, this.counter = !1, this.routerDirection = "forward", this.type = "button";
  }
  counterFormatterChanged() {
    this.updateCounterOutput(this.getFirstInput());
  }
  handleIonChange(t) {
    this.counter && t.target === this.getFirstInput() && this.updateCounterOutput(t.target);
  }
  labelColorChanged(t) {
    const { color: e } = this;
    e === void 0 && (this.labelColorStyles = t.detail);
  }
  itemStyle(t) {
    t.stopPropagation();
    const e = t.target.tagName, i = t.detail, n = {}, o = this.itemStyles.get(e) || {};
    let r = !1;
    Object.keys(i).forEach((s) => {
      if (i[s]) {
        const a = `item-${s}`;
        o[a] || (r = !0), n[a] = !0;
      }
    }), !r && Object.keys(n).length !== Object.keys(o).length && (r = !0), r && (this.itemStyles.set(e, n), Ae(this));
  }
  connectedCallback() {
    this.counter && this.updateCounterOutput(this.getFirstInput()), this.hasStartEl();
  }
  componentDidUpdate() {
    const t = this.getFirstInput();
    t && !this.clickListener && (this.clickListener = (e) => this.delegateFocus(e, t), this.el.addEventListener("click", this.clickListener));
  }
  disconnectedCallback() {
    this.getFirstInput() && this.clickListener && (this.el.removeEventListener("click", this.clickListener), this.clickListener = void 0);
  }
  componentDidLoad() {
    V(() => {
      this.setMultipleInputs(), this.focusable = this.isFocusable();
    });
  }
  setMultipleInputs() {
    const t = this.el.querySelectorAll("ion-checkbox, ion-datetime, ion-select, ion-radio"), e = this.el.querySelectorAll("ion-input, ion-range, ion-searchbar, ion-segment, ion-textarea, ion-toggle"), i = this.el.querySelectorAll("ion-anchor, ion-button, a, button");
    this.multipleInputs = t.length + e.length > 1 || t.length + i.length > 1 || t.length > 0 && this.isClickable();
  }
  hasCover() {
    return this.el.querySelectorAll("ion-checkbox, ion-datetime, ion-select, ion-radio").length === 1 && !this.multipleInputs;
  }
  isClickable() {
    return this.href !== void 0 || this.button;
  }
  canActivate() {
    return this.isClickable() || this.hasCover();
  }
  isFocusable() {
    const t = this.el.querySelector(".ion-focusable");
    return this.canActivate() || t !== null;
  }
  getFirstInput() {
    return this.el.querySelectorAll("ion-input, ion-textarea")[0];
  }
  delegateFocus(t, e) {
    const i = t.target.tagName === "ION-ITEM";
    let n = !1;
    document.activeElement && (n = e.querySelector("input, textarea") === document.activeElement), i && (n || !this.multipleInputs) && (e.fireFocusEvents = !1, e.setBlur(), e.setFocus(), V(() => {
      e.fireFocusEvents = !0;
    }));
  }
  updateCounterOutput(t) {
    var e, i;
    const { counter: n, counterFormatter: o, defaultCounterFormatter: r } = this;
    if (n && !this.multipleInputs && (t == null ? void 0 : t.maxlength) !== void 0) {
      const s = (i = (e = t == null ? void 0 : t.value) === null || e === void 0 ? void 0 : e.toString().length) !== null && i !== void 0 ? i : 0;
      if (o === void 0)
        this.counterString = r(s, t.maxlength);
      else
        try {
          this.counterString = o(s, t.maxlength);
        } catch (a) {
          Ha("Exception in provided `counterFormatter`.", a), this.counterString = r(s, t.maxlength);
        }
    }
  }
  defaultCounterFormatter(t, e) {
    return `${t} / ${e}`;
  }
  hasStartEl() {
    this.el.querySelector('[slot="start"]') !== null && this.el.classList.add("item-has-start-slot");
  }
  render() {
    const { counterString: t, detail: e, detailIcon: i, download: n, fill: o, labelColorStyles: r, lines: s, disabled: a, href: l, rel: d, shape: h, target: c, routerAnimation: u, routerDirection: f } = this, v = {}, m = _(this), w = this.isClickable(), k = this.canActivate(), $ = w ? l === void 0 ? "button" : "a" : "div", E = $ === "button" ? { type: this.type } : {
      download: n,
      href: l,
      rel: d,
      target: c
    }, S = w ? {
      onClick: (W) => {
        lo(l, W, f, u);
      }
    } : {}, I = e !== void 0 ? e : m === "ios" && w;
    this.itemStyles.forEach((W) => {
      Object.assign(v, W);
    });
    const y = a || v["item-interactive-disabled"] ? "true" : null, z = o || "none", T = zt("ion-list", this.el);
    return b(G, { "aria-disabled": y, class: Object.assign(Object.assign(Object.assign({}, v), r), wt(this.color, {
      item: !0,
      [m]: !0,
      [`item-lines-${s}`]: s !== void 0,
      [`item-fill-${z}`]: !0,
      [`item-shape-${h}`]: h !== void 0,
      "item-disabled": a,
      "in-list": T,
      "item-multiple-inputs": this.multipleInputs,
      "ion-activatable": k,
      "ion-focusable": this.focusable,
      "item-rtl": document.dir === "rtl"
    })), role: T ? "listitem" : null }, b($, Object.assign({}, E, { class: "item-native", part: "native", disabled: a }, S), b("slot", { name: "start" }), b("div", { class: "item-inner" }, b("div", { class: "input-wrapper" }, b("slot", null)), b("slot", { name: "end" }), I && b("ion-icon", { icon: i, lazy: !1, class: "item-detail-icon", part: "detail-icon", "aria-hidden": "true", "flip-rtl": i === Qi }), b("div", { class: "item-inner-highlight" })), k && m === "md" && b("ion-ripple-effect", null), b("div", { class: "item-highlight" })), b("div", { class: "item-bottom" }, b("slot", { name: "error" }), b("slot", { name: "helper" }), t && b("ion-note", { class: "item-counter" }, t)));
  }
  static get delegatesFocus() {
    return !0;
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      counterFormatter: ["counterFormatterChanged"]
    };
  }
  static get style() {
    return {
      ios: Va,
      md: Ua
    };
  }
}, [49, "ion-item", {
  color: [513],
  button: [4],
  detail: [4],
  detailIcon: [1, "detail-icon"],
  disabled: [4],
  download: [1],
  fill: [1],
  shape: [1],
  href: [1],
  rel: [1],
  lines: [1],
  counter: [4],
  routerAnimation: [16],
  routerDirection: [1, "router-direction"],
  target: [1],
  type: [1],
  counterFormatter: [16],
  multipleInputs: [32],
  focusable: [32],
  counterString: [32]
}, [[0, "ionChange", "handleIonChange"], [0, "ionColor", "labelColorChanged"], [0, "ionStyle", "itemStyle"]]]);
function Ka() {
  if (typeof customElements > "u")
    return;
  ["ion-item", "ion-icon", "ion-note", "ion-ripple-effect"].forEach((e) => {
    switch (e) {
      case "ion-item":
        customElements.get(e) || customElements.define(e, Ga);
        break;
      case "ion-icon":
        customElements.get(e) || ha();
        break;
      case "ion-note":
        customElements.get(e) || qa();
        break;
      case "ion-ripple-effect":
        customElements.get(e) || co();
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Na = ".item.sc-ion-label-ios-h,.item .sc-ion-label-ios-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-ios-h{color:var(--ion-color-base)}.ion-text-wrap.sc-ion-label-ios-h,[text-wrap].sc-ion-label-ios-h{white-space:normal}.item-interactive-disabled.sc-ion-label-ios-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-ios-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-ios-h,.item-input .sc-ion-label-ios-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-ios-h,.item-textarea .sc-ion-label-ios-h{-ms-flex-item-align:baseline;align-self:baseline}.label-fixed.sc-ion-label-ios-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-ios-h,.label-floating.sc-ion-label-ios-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-ios-h{-webkit-transition:none;transition:none}.sc-ion-label-ios-s h1,.sc-ion-label-ios-s h2,.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-ios-h,[text-wrap].sc-ion-label-ios-h{font-size:14px;line-height:1.5}.label-stacked.sc-ion-label-ios-h{margin-bottom:4px;font-size:14px}.label-floating.sc-ion-label-ios-h{margin-bottom:0;-webkit-transform:translate(0, 29px);transform:translate(0, 29px);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform 150ms ease-in-out;transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out}[dir=rtl].sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl] .sc-ion-label-ios-h -no-combinator.label-floating.sc-ion-label-ios-h,[dir=rtl].label-floating.sc-ion-label-ios-h,[dir=rtl] .label-floating.sc-ion-label-ios-h{-webkit-transform-origin:right top;transform-origin:right top}.item-textarea.label-floating.sc-ion-label-ios-h,.item-textarea .label-floating.sc-ion-label-ios-h{-webkit-transform:translate(0, 28px);transform:translate(0, 28px)}.item-has-focus.label-floating.sc-ion-label-ios-h,.item-has-focus .label-floating.sc-ion-label-ios-h,.item-has-placeholder.sc-ion-label-ios-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-ios-h,.item-has-value.label-floating.sc-ion-label-ios-h,.item-has-value .label-floating.sc-ion-label-ios-h{-webkit-transform:scale(0.82);transform:scale(0.82)}.sc-ion-label-ios-s h1{margin-left:0;margin-right:0;margin-top:3px;margin-bottom:2px;font-size:22px;font-weight:normal}.sc-ion-label-ios-s h2{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:17px;font-weight:normal}.sc-ion-label-ios-s h3,.sc-ion-label-ios-s h4,.sc-ion-label-ios-s h5,.sc-ion-label-ios-s h6{margin-left:0;margin-right:0;margin-top:0;margin-bottom:3px;font-size:14px;font-weight:normal;line-height:normal}.sc-ion-label-ios-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}.sc-ion-label-ios-s>p{color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4)}.sc-ion-label-ios-h.in-item-color.sc-ion-label-ios-s>p{color:inherit}.sc-ion-label-ios-s h2:last-child,.sc-ion-label-ios-s h3:last-child,.sc-ion-label-ios-s h4:last-child,.sc-ion-label-ios-s h5:last-child,.sc-ion-label-ios-s h6:last-child,.sc-ion-label-ios-s p:last-child{margin-bottom:0}", Za = '.item.sc-ion-label-md-h,.item .sc-ion-label-md-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family, inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-md-h{color:var(--ion-color-base)}.ion-text-wrap.sc-ion-label-md-h,[text-wrap].sc-ion-label-md-h{white-space:normal}.item-interactive-disabled.sc-ion-label-md-h:not(.item-multiple-inputs),.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-md-h{cursor:default;opacity:0.3;pointer-events:none}.item-input.sc-ion-label-md-h,.item-input .sc-ion-label-md-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.item-textarea.sc-ion-label-md-h,.item-textarea .sc-ion-label-md-h{-ms-flex-item-align:baseline;align-self:baseline}.label-fixed.sc-ion-label-md-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.label-no-animate.label-floating.sc-ion-label-md-h{-webkit-transition:none;transition:none}.sc-ion-label-md-s h1,.sc-ion-label-md-s h2,.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{text-overflow:inherit;overflow:inherit}.ion-text-wrap.sc-ion-label-md-h,[text-wrap].sc-ion-label-md-h{line-height:1.5}.label-stacked.sc-ion-label-md-h,.label-floating.sc-ion-label-md-h{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:top left;transform-origin:top left}.label-stacked.label-rtl.sc-ion-label-md-h,.label-floating.label-rtl.sc-ion-label-md-h{-webkit-transform-origin:top right;transform-origin:top right}.label-stacked.sc-ion-label-md-h{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.label-floating.sc-ion-label-md-h{-webkit-transform:translateY(96%);transform:translateY(96%);-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1)}.ion-focused.label-floating.sc-ion-label-md-h,.ion-focused .label-floating.sc-ion-label-md-h,.item-has-focus.label-floating.sc-ion-label-md-h,.item-has-focus .label-floating.sc-ion-label-md-h,.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating,.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h,.item-has-value.label-floating.sc-ion-label-md-h,.item-has-value .label-floating.sc-ion-label-md-h{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75)}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h{-webkit-transform:translateY(-6px) scale(0.75);transform:translateY(-6px) scale(0.75);position:relative;max-width:-webkit-min-content;max-width:-moz-min-content;max-width:min-content;background-color:var(--ion-item-background, var(--ion-background-color, #fff));overflow:visible;z-index:3}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::after,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::before,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::after,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::after{position:absolute;width:4px;height:100%;background-color:var(--ion-item-background, var(--ion-background-color, #fff));content:""}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::before,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::before,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::before,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::before{left:calc(-1 * 4px)}.item-fill-outline.ion-focused.label-floating.sc-ion-label-md-h::after,.item-fill-outline.ion-focused .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-focus .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).label-floating::after,.item-fill-outline.item-has-placeholder:not(.item-input) .label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value.label-floating.sc-ion-label-md-h::after,.item-fill-outline.item-has-value .label-floating.sc-ion-label-md-h::after{right:calc(-1 * 4px)}.item-fill-outline.ion-focused.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.ion-focused.item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).item-has-start-slot.label-floating,.item-fill-outline.item-has-placeholder:not(.item-input).item-has-start-slot .label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot.label-floating.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot .label-floating.sc-ion-label-md-h{-webkit-transform:translateX(-32px) translateY(-6px) scale(0.75);transform:translateX(-32px) translateY(-6px) scale(0.75)}.item-fill-outline.ion-focused.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.ion-focused.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-focus.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-placeholder.sc-ion-label-md-h:not(.item-input).item-has-start-slot.label-floating.label-rtl,.item-fill-outline.item-has-placeholder:not(.item-input).item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot.label-floating.label-rtl.sc-ion-label-md-h,.item-fill-outline.item-has-value.item-has-start-slot .label-floating.label-rtl.sc-ion-label-md-h{-webkit-transform:translateX(calc(-1 * -32px)) translateY(-6px) scale(0.75);transform:translateX(calc(-1 * -32px)) translateY(-6px) scale(0.75)}.ion-focused.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-focused .label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-primary, #3880ff)}.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-contrast)}.item-fill-solid.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.ion-focused.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-solid.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color.label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color .label-stacked.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color.label-floating.sc-ion-label-md-h:not(.ion-color),.item-fill-outline.item-has-focus.ion-color .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--ion-color-base)}.ion-invalid.ion-touched.label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched .label-stacked.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched.label-floating.sc-ion-label-md-h:not(.ion-color),.ion-invalid.ion-touched .label-floating.sc-ion-label-md-h:not(.ion-color){color:var(--highlight-color-invalid)}.sc-ion-label-md-s h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:normal}.sc-ion-label-md-s h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:normal}.sc-ion-label-md-s h3,.sc-ion-label-md-s h4,.sc-ion-label-md-s h5,.sc-ion-label-md-s h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:normal;line-height:normal}.sc-ion-label-md-s p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;line-height:20px;text-overflow:inherit;overflow:inherit}.sc-ion-label-md-s>p{color:var(--ion-color-step-600, #666666)}.sc-ion-label-md-h.in-item-color.sc-ion-label-md-s>p{color:inherit}', Qa = /* @__PURE__ */ N(class extends Z {
  constructor() {
    super(), this.__registerHost(), this.ionColor = F(this, "ionColor", 7), this.ionStyle = F(this, "ionStyle", 7), this.inRange = !1, this.noAnimate = !1;
  }
  componentWillLoad() {
    this.inRange = !!this.el.closest("ion-range"), this.noAnimate = this.position === "floating", this.emitStyle(), this.emitColor();
  }
  componentDidLoad() {
    this.noAnimate && setTimeout(() => {
      this.noAnimate = !1;
    }, 1e3);
  }
  colorChanged() {
    this.emitColor();
  }
  positionChanged() {
    this.emitStyle();
  }
  emitColor() {
    const { color: t } = this;
    this.ionColor.emit({
      "item-label-color": t !== void 0,
      [`ion-color-${t}`]: t !== void 0
    });
  }
  emitStyle() {
    const { inRange: t, position: e } = this;
    t || this.ionStyle.emit({
      label: !0,
      [`label-${e}`]: e !== void 0
    });
  }
  render() {
    const t = this.position, e = _(this);
    return b(G, { class: wt(this.color, {
      [e]: !0,
      "in-item-color": zt("ion-item.ion-color", this.el),
      [`label-${t}`]: t !== void 0,
      ["label-no-animate"]: this.noAnimate,
      "label-rtl": document.dir === "rtl"
    }) });
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      color: ["colorChanged"],
      position: ["positionChanged"]
    };
  }
  static get style() {
    return {
      ios: Na,
      md: Za
    };
  }
}, [34, "ion-label", {
  color: [513],
  position: [1],
  noAnimate: [32]
}]);
function Ja() {
  if (typeof customElements > "u")
    return;
  ["ion-label"].forEach((e) => {
    switch (e) {
      case "ion-label":
        customElements.get(e) || customElements.define(e, Qa);
        break;
    }
  });
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const tl = async (t, e, i, n, o, r) => {
  var s;
  if (t)
    return t.attachViewToDom(e, i, o, n);
  if (!r && typeof i != "string" && !(i instanceof HTMLElement))
    throw new Error("framework delegate is missing");
  const a = typeof i == "string" ? (s = e.ownerDocument) === null || s === void 0 ? void 0 : s.createElement(i) : i;
  return n && n.forEach((l) => a.classList.add(l)), o && Object.assign(a, o), e.appendChild(a), await new Promise((l) => se(a, l)), a;
}, el = (t, e) => {
  if (e) {
    if (t) {
      const i = e.parentElement;
      return t.removeViewFromDom(i, e);
    }
    e.remove();
  }
  return Promise.resolve();
}, il = () => {
  let t, e;
  return { attachViewToDom: async (o, r, s = {}, a = []) => {
    var l, d;
    if (t = o, r) {
      const c = typeof r == "string" ? (l = t.ownerDocument) === null || l === void 0 ? void 0 : l.createElement(r) : r;
      a.forEach((u) => c.classList.add(u)), Object.assign(c, s), t.appendChild(c), await new Promise((u) => se(c, u));
    } else if (t.children.length > 0) {
      const c = (d = t.ownerDocument) === null || d === void 0 ? void 0 : d.createElement("div");
      a.forEach((u) => c.classList.add(u)), c.append(...t.children), t.appendChild(c);
    }
    const h = document.querySelector("ion-app") || document.body;
    return e = document.createComment("ionic teleport"), t.parentNode.insertBefore(e, t), h.appendChild(t), t;
  }, removeViewFromDom: () => (t && e && (e.parentNode.insertBefore(t, e), e.remove()), Promise.resolve()) };
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const nl = 100;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
let si = 0;
const Te = /* @__PURE__ */ new WeakMap();
const ol = (t) => {
  typeof document < "u" && al(document);
  const e = si++;
  t.overlayIndex = e, t.hasAttribute("id") || (t.id = `ion-overlay-${e}`);
};
const ae = '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])', nn = (t, e) => {
  let i = t.querySelector(ae);
  const n = i == null ? void 0 : i.shadowRoot;
  n && (i = n.querySelector(ae) || i), i ? Qs(i) : e.focus();
}, rl = (t) => t.classList.contains("overlay-hidden"), on = (t, e) => {
  const i = Array.from(t.querySelectorAll(ae));
  let n = i.length > 0 ? i[i.length - 1] : null;
  const o = n == null ? void 0 : n.shadowRoot;
  o && (n = o.querySelector(ae) || n), n ? n.focus() : e.focus();
}, sl = (t, e) => {
  const i = ai(e, "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover"), n = t.target;
  if (!i || !n || i.classList.contains("ion-disable-focus-trap"))
    return;
  const o = () => {
    if (i === n)
      i.lastFocus = void 0;
    else {
      const s = yt(i);
      if (!s.contains(n))
        return;
      const a = s.querySelector(".ion-overlay-wrapper");
      if (!a)
        return;
      if (a.contains(n))
        i.lastFocus = n;
      else {
        const l = i.lastFocus;
        nn(a, i), l === e.activeElement && on(a, i), i.lastFocus = e.activeElement;
      }
    }
  }, r = () => {
    if (i.contains(n))
      i.lastFocus = n;
    else {
      const s = i.lastFocus;
      nn(i, i), s === e.activeElement && on(i, i), i.lastFocus = e.activeElement;
    }
  };
  i.shadowRoot ? r() : o();
}, al = (t) => {
  si === 0 && (si = 1, t.addEventListener("focus", (e) => {
    sl(e, t);
  }, !0), t.addEventListener("ionBackButton", (e) => {
    const i = ai(t);
    i != null && i.backdropDismiss && e.detail.register(nl, () => i.dismiss(void 0, li));
  }), t.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      const i = ai(t);
      i != null && i.backdropDismiss && i.dismiss(void 0, li);
    }
  }));
};
const ll = (t, e) => (e === void 0 && (e = "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"), Array.from(t.querySelectorAll(e)).filter((i) => i.overlayIndex > 0)), ai = (t, e, i) => {
  const n = ll(t, e).filter((o) => !rl(o));
  return i === void 0 ? n[n.length - 1] : n.find((o) => o.id === i);
}, po = (t = !1) => {
  const i = pl(document).querySelector("ion-router-outlet, ion-nav, #ion-view-container-root");
  !i || (t ? i.setAttribute("aria-hidden", "true") : i.removeAttribute("aria-hidden"));
}, cl = async (t, e, i, n, o) => {
  var r, s;
  if (t.presented)
    return;
  po(!0), t.presented = !0, t.willPresent.emit(), (r = t.willPresentShorthand) === null || r === void 0 || r.emit();
  const a = _(t), l = t.enterAnimation ? t.enterAnimation : Vt.get(e, a === "ios" ? i : n);
  await uo(t, l, t.el, o) && (t.didPresent.emit(), (s = t.didPresentShorthand) === null || s === void 0 || s.emit()), t.el.tagName !== "ION-TOAST" && dl(t.el), t.keyboardClose && (document.activeElement === null || !t.el.contains(document.activeElement)) && t.el.focus();
}, dl = async (t) => {
  let e = document.activeElement;
  if (!e)
    return;
  const i = e == null ? void 0 : e.shadowRoot;
  i && (e = i.querySelector(ae) || e), await t.onDidDismiss(), e.focus();
}, hl = async (t, e, i, n, o, r, s) => {
  var a, l;
  if (!t.presented)
    return !1;
  po(!1), t.presented = !1;
  try {
    t.el.style.setProperty("pointer-events", "none"), t.willDismiss.emit({ data: e, role: i }), (a = t.willDismissShorthand) === null || a === void 0 || a.emit({ data: e, role: i });
    const d = _(t), h = t.leaveAnimation ? t.leaveAnimation : Vt.get(n, d === "ios" ? o : r);
    i !== "gesture" && await uo(t, h, t.el, s), t.didDismiss.emit({ data: e, role: i }), (l = t.didDismissShorthand) === null || l === void 0 || l.emit({ data: e, role: i }), Te.delete(t), t.el.classList.add("overlay-hidden"), t.el.style.removeProperty("pointer-events");
  } catch (d) {
    console.error(d);
  }
  return t.el.remove(), !0;
}, pl = (t) => t.querySelector("ion-app") || t.body, uo = async (t, e, i, n) => {
  i.classList.remove("overlay-hidden");
  const o = t.el, r = e(o, n);
  (!t.animated || !Vt.getBoolean("animated", !0)) && r.duration(0), t.keyboardClose && r.beforeAddWrite(() => {
    const a = i.ownerDocument.activeElement;
    a != null && a.matches("input,ion-input, ion-textarea") && a.blur();
  });
  const s = Te.get(t) || [];
  return Te.set(t, [...s, r]), await r.play(), !0;
}, rn = (t, e) => {
  let i;
  const n = new Promise((o) => i = o);
  return ul(t, e, (o) => {
    i(o.detail);
  }), n;
}, ul = (t, e, i) => {
  const n = (o) => {
    Ks(t, e, n), i(o);
  };
  Gs(t, e, n);
};
const li = "backdrop";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ml = "ionViewWillEnter", gl = "ionViewDidEnter", fl = "ionViewWillLeave", bl = "ionViewDidLeave", mo = async (t) => {
  const e = t;
  if (e) {
    if (e.componentOnReady != null) {
      if (await e.componentOnReady() != null)
        return;
    } else if (e.__registerHost != null) {
      await new Promise((n) => V(n));
      return;
    }
    await Promise.all(Array.from(e.children).map(mo));
  }
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const O = typeof window < "u" ? window : void 0;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
let Ke;
const vl = (t) => (t.forEach((e) => {
  for (const i in e)
    if (e.hasOwnProperty(i)) {
      const n = e[i];
      if (i === "easing") {
        const o = "animation-timing-function";
        e[o] = n, delete e[i];
      } else {
        const o = xl(i);
        o !== i && (e[o] = n, delete e[i]);
      }
    }
}), t), xl = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ei = (t) => {
  if (Ke === void 0) {
    const e = t.style.animationName !== void 0, i = t.style.webkitAnimationName !== void 0;
    Ke = !e && i ? "-webkit-" : "";
  }
  return Ke;
}, B = (t, e, i) => {
  const n = e.startsWith("animation") ? Ei(t) : "";
  t.style.setProperty(n + e, i);
}, lt = (t, e) => {
  const i = e.startsWith("animation") ? Ei(t) : "";
  t.style.removeProperty(i + e);
}, wl = (t, e) => {
  let i;
  const n = { passive: !0 }, o = () => {
    i && i();
  }, r = (s) => {
    t === s.target && (o(), e(s));
  };
  return t && (t.addEventListener("webkitAnimationEnd", r, n), t.addEventListener("animationend", r, n), i = () => {
    t.removeEventListener("webkitAnimationEnd", r, n), t.removeEventListener("animationend", r, n);
  }), o;
}, kl = (t = []) => t.map((e) => {
  const i = e.offset, n = [];
  for (const o in e)
    e.hasOwnProperty(o) && o !== "offset" && n.push(`${o}: ${e[o]};`);
  return `${i * 100}% { ${n.join(" ")} }`;
}).join(" "), sn = [], yl = (t) => {
  let e = sn.indexOf(t);
  return e < 0 && (e = sn.push(t) - 1), `ion-animation-${e}`;
}, Cl = (t) => {
  const e = t.getRootNode !== void 0 ? t.getRootNode() : t;
  return e.head || e;
}, El = (t, e, i) => {
  const n = Cl(i), o = Ei(i), r = n.querySelector("#" + t);
  if (r)
    return r;
  const s = (i.ownerDocument || document).createElement("style");
  return s.id = t, s.textContent = `@${o}keyframes ${t} { ${e} } @${o}keyframes ${t}-alt { ${e} }`, n.appendChild(s), s;
}, xe = (t = [], e) => {
  if (e !== void 0) {
    const i = Array.isArray(e) ? e : [e];
    return [...t, ...i];
  }
  return t;
}, R = (t) => {
  let e, i, n, o, r, s, a = [], l = [], d = [], h = !1, c, u = {}, f = [], v = [], m = {}, w = 0, k = !1, $ = !1, E, S, I, y, z = !0, T = !1, W = !0, H, C, M = !1;
  const vt = t, ut = [], X = [], L = [], P = [], Q = [], mt = [], K = [], gt = [], Tt = [], ot = [], No = typeof AnimationEffect == "function" || O !== void 0 && typeof O.AnimationEffect == "function", rt = typeof Element == "function" && typeof Element.prototype.animate == "function" && No, Zo = 100, Di = () => ot, Qo = (p) => (P.forEach((g) => {
    g.destroy(p);
  }), Jo(p), L.length = 0, P.length = 0, a.length = 0, ir(), h = !1, W = !0, C), Jo = (p) => {
    Ii(), p && Ti();
  }, tr = () => {
    k = !1, $ = !1, W = !0, S = void 0, I = void 0, y = void 0, w = 0, T = !1, z = !0, M = !1;
  }, er = () => w !== 0 && !M, pe = (p, g) => ((g != null && g.oneTimeCallback ? X : ut).push({ c: p, o: g }), C), ir = () => (ut.length = 0, X.length = 0, C), Ii = () => {
    if (rt)
      ot.forEach((p) => {
        p.cancel();
      }), ot.length = 0;
    else {
      const p = L.slice();
      V(() => {
        p.forEach((g) => {
          lt(g, "animation-name"), lt(g, "animation-duration"), lt(g, "animation-timing-function"), lt(g, "animation-iteration-count"), lt(g, "animation-delay"), lt(g, "animation-play-state"), lt(g, "animation-fill-mode"), lt(g, "animation-direction");
        });
      });
    }
  }, Ti = () => {
    Q.forEach((p) => {
      p != null && p.parentNode && p.parentNode.removeChild(p);
    }), Q.length = 0;
  }, nr = (p) => (mt.push(p), C), or = (p) => (K.push(p), C), rr = (p) => (gt.push(p), C), sr = (p) => (Tt.push(p), C), ar = (p) => (l = xe(l, p), C), lr = (p) => (d = xe(d, p), C), cr = (p = {}) => (u = p, C), dr = (p = []) => {
    for (const g of p)
      u[g] = "";
    return C;
  }, hr = (p) => (f = xe(f, p), C), pr = (p) => (v = xe(v, p), C), ur = (p = {}) => (m = p, C), mr = (p = []) => {
    for (const g of p)
      m[g] = "";
    return C;
  }, Nt = () => r !== void 0 ? r : c ? c.getFill() : "both", Ot = () => S !== void 0 ? S : s !== void 0 ? s : c ? c.getDirection() : "normal", Zt = () => k ? "linear" : n !== void 0 ? n : c ? c.getEasing() : "linear", st = () => $ ? 0 : I !== void 0 ? I : i !== void 0 ? i : c ? c.getDuration() : 0, kt = () => o !== void 0 ? o : c ? c.getIterations() : 1, Lt = () => y !== void 0 ? y : e !== void 0 ? e : c ? c.getDelay() : 0, gr = () => a, fr = (p) => (s = p, et(!0), C), br = (p) => (r = p, et(!0), C), vr = (p) => (e = p, et(!0), C), xr = (p) => (n = p, et(!0), C), wr = (p) => (!rt && p === 0 && (p = 1), i = p, et(!0), C), kr = (p) => (o = p, et(!0), C), yr = (p) => (c = p, C), Cr = (p) => {
    if (p != null)
      if (p.nodeType === 1)
        L.push(p);
      else if (p.length >= 0)
        for (let g = 0; g < p.length; g++)
          L.push(p[g]);
      else
        console.error("Invalid addElement value");
    return C;
  }, Er = (p) => {
    if (p != null)
      if (Array.isArray(p))
        for (const g of p)
          g.parent(C), P.push(g);
      else
        p.parent(C), P.push(p);
    return C;
  }, Sr = (p) => {
    const g = a !== p;
    return a = p, g && $r(a), C;
  }, $r = (p) => {
    rt ? Di().forEach((g) => {
      if (g.effect.setKeyframes)
        g.effect.setKeyframes(p);
      else {
        const x = new KeyframeEffect(g.effect.target, p, g.effect.getTiming());
        g.effect = x;
      }
    }) : Oi();
  }, Ar = () => {
    mt.forEach((j) => j()), K.forEach((j) => j());
    const p = l, g = d, x = u;
    L.forEach((j) => {
      const Y = j.classList;
      p.forEach((it) => Y.add(it)), g.forEach((it) => Y.remove(it));
      for (const it in x)
        x.hasOwnProperty(it) && B(j, it, x[it]);
    });
  }, zr = () => {
    Ve(), gt.forEach((Y) => Y()), Tt.forEach((Y) => Y());
    const p = z ? 1 : 0, g = f, x = v, j = m;
    L.forEach((Y) => {
      const it = Y.classList;
      g.forEach((Et) => it.add(Et)), x.forEach((Et) => it.remove(Et));
      for (const Et in j)
        j.hasOwnProperty(Et) && B(Y, Et, j[Et]);
    }), ut.forEach((Y) => Y.c(p, C)), X.forEach((Y) => Y.c(p, C)), X.length = 0, W = !0, z && (T = !0), z = !0;
  }, Mt = () => {
    w !== 0 && (w--, w === 0 && (zr(), c && c.animationFinish()));
  }, Oi = (p = !0) => {
    Ti();
    const g = vl(a);
    L.forEach((x) => {
      if (g.length > 0) {
        const j = kl(g);
        H = t !== void 0 ? t : yl(j);
        const Y = El(H, j, x);
        Q.push(Y), B(x, "animation-duration", `${st()}ms`), B(x, "animation-timing-function", Zt()), B(x, "animation-delay", `${Lt()}ms`), B(x, "animation-fill-mode", Nt()), B(x, "animation-direction", Ot());
        const it = kt() === 1 / 0 ? "infinite" : kt().toString();
        B(x, "animation-iteration-count", it), B(x, "animation-play-state", "paused"), p && B(x, "animation-name", `${Y.id}-alt`), V(() => {
          B(x, "animation-name", Y.id || null);
        });
      }
    });
  }, Dr = () => {
    L.forEach((p) => {
      const g = p.animate(a, {
        id: vt,
        delay: Lt(),
        duration: st(),
        easing: Zt(),
        iterations: kt(),
        fill: Nt(),
        direction: Ot()
      });
      g.pause(), ot.push(g);
    }), ot.length > 0 && (ot[0].onfinish = () => {
      Mt();
    });
  }, Li = (p = !0) => {
    Ar(), a.length > 0 && (rt ? Dr() : Oi(p)), h = !0;
  }, Qt = (p) => {
    if (p = Math.min(Math.max(p, 0), 0.9999), rt)
      ot.forEach((g) => {
        g.currentTime = g.effect.getComputedTiming().delay + st() * p, g.pause();
      });
    else {
      const g = `-${st() * p}ms`;
      L.forEach((x) => {
        a.length > 0 && (B(x, "animation-delay", g), B(x, "animation-play-state", "paused"));
      });
    }
  }, Mi = (p) => {
    ot.forEach((g) => {
      g.effect.updateTiming({
        delay: Lt(),
        duration: st(),
        easing: Zt(),
        iterations: kt(),
        fill: Nt(),
        direction: Ot()
      });
    }), p !== void 0 && Qt(p);
  }, Pi = (p = !0, g) => {
    V(() => {
      L.forEach((x) => {
        B(x, "animation-name", H || null), B(x, "animation-duration", `${st()}ms`), B(x, "animation-timing-function", Zt()), B(x, "animation-delay", g !== void 0 ? `-${g * st()}ms` : `${Lt()}ms`), B(x, "animation-fill-mode", Nt() || null), B(x, "animation-direction", Ot() || null);
        const j = kt() === 1 / 0 ? "infinite" : kt().toString();
        B(x, "animation-iteration-count", j), p && B(x, "animation-name", `${H}-alt`), V(() => {
          B(x, "animation-name", H || null);
        });
      });
    });
  }, et = (p = !1, g = !0, x) => (p && P.forEach((j) => {
    j.update(p, g, x);
  }), rt ? Mi(x) : Pi(g, x), C), Ir = (p = !1, g) => (P.forEach((x) => {
    x.progressStart(p, g);
  }), Bi(), k = p, h || Li(), et(!1, !0, g), C), Tr = (p) => (P.forEach((g) => {
    g.progressStep(p);
  }), Qt(p), C), Or = (p, g, x) => (k = !1, P.forEach((j) => {
    j.progressEnd(p, g, x);
  }), x !== void 0 && (I = x), T = !1, z = !0, p === 0 ? (S = Ot() === "reverse" ? "normal" : "reverse", S === "reverse" && (z = !1), rt ? (et(), Qt(1 - g)) : (y = (1 - g) * st() * -1, et(!1, !1))) : p === 1 && (rt ? (et(), Qt(g)) : (y = g * st() * -1, et(!1, !1))), p !== void 0 && (pe(() => {
    I = void 0, S = void 0, y = void 0;
  }, {
    oneTimeCallback: !0
  }), c || Fi()), C), Bi = () => {
    h && (rt ? ot.forEach((p) => {
      p.pause();
    }) : L.forEach((p) => {
      B(p, "animation-play-state", "paused");
    }), M = !0);
  }, Lr = () => (P.forEach((p) => {
    p.pause();
  }), Bi(), C), Mr = () => {
    E = void 0, Mt();
  }, Ve = () => {
    E && clearTimeout(E);
  }, Pr = () => {
    if (Ve(), V(() => {
      L.forEach((p) => {
        a.length > 0 && B(p, "animation-play-state", "running");
      });
    }), a.length === 0 || L.length === 0)
      Mt();
    else {
      const p = Lt() || 0, g = st() || 0, x = kt() || 1;
      isFinite(x) && (E = setTimeout(Mr, p + g * x + Zo)), wl(L[0], () => {
        Ve(), V(() => {
          Br(), V(Mt);
        });
      });
    }
  }, Br = () => {
    L.forEach((p) => {
      lt(p, "animation-duration"), lt(p, "animation-delay"), lt(p, "animation-play-state");
    });
  }, Fr = () => {
    ot.forEach((p) => {
      p.play();
    }), (a.length === 0 || L.length === 0) && Mt();
  }, _r = () => {
    rt ? (Qt(0), Mi()) : Pi();
  }, Fi = (p) => new Promise((g) => {
    p != null && p.sync && ($ = !0, pe(() => $ = !1, { oneTimeCallback: !0 })), h || Li(), T && (_r(), T = !1), W && (w = P.length + 1, W = !1), pe(() => g(), { oneTimeCallback: !0 }), P.forEach((x) => {
      x.play();
    }), rt ? Fr() : Pr(), M = !1;
  }), Rr = () => {
    P.forEach((p) => {
      p.stop();
    }), h && (Ii(), h = !1), tr();
  }, _i = (p, g) => {
    const x = a[0];
    return x !== void 0 && (x.offset === void 0 || x.offset === 0) ? x[p] = g : a = [{ offset: 0, [p]: g }, ...a], C;
  };
  return C = {
    parentAnimation: c,
    elements: L,
    childAnimations: P,
    id: vt,
    animationFinish: Mt,
    from: _i,
    to: (p, g) => {
      const x = a[a.length - 1];
      return x !== void 0 && (x.offset === void 0 || x.offset === 1) ? x[p] = g : a = [...a, { offset: 1, [p]: g }], C;
    },
    fromTo: (p, g, x) => _i(p, g).to(p, x),
    parent: yr,
    play: Fi,
    pause: Lr,
    stop: Rr,
    destroy: Qo,
    keyframes: Sr,
    addAnimation: Er,
    addElement: Cr,
    update: et,
    fill: br,
    direction: fr,
    iterations: kr,
    duration: wr,
    easing: xr,
    delay: vr,
    getWebAnimations: Di,
    getKeyframes: gr,
    getFill: Nt,
    getDirection: Ot,
    getDelay: Lt,
    getIterations: kt,
    getEasing: Zt,
    getDuration: st,
    afterAddRead: rr,
    afterAddWrite: sr,
    afterClearStyles: mr,
    afterStyles: ur,
    afterRemoveClass: pr,
    afterAddClass: hr,
    beforeAddRead: nr,
    beforeAddWrite: or,
    beforeClearStyles: dr,
    beforeStyles: cr,
    beforeRemoveClass: lr,
    beforeAddClass: ar,
    onFinish: pe,
    isRunning: er,
    progressStart: Ir,
    progressStep: Tr,
    progressEnd: Or
  };
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Sl = "ION-CONTENT", go = "ion-content", fo = ".ion-content-scroll-host", bo = `${go}, ${fo}`, le = (t) => t && t.tagName === Sl, an = async (t) => le(t) ? (await new Promise((e) => se(t, e)), t.getScrollElement()) : t, ci = (t) => {
  const e = t.querySelector(fo);
  return e || t.querySelector(bo);
}, $l = (t) => t.closest(bo), di = (t) => ja(t, go), ln = (t) => {
  if (le(t)) {
    const e = t, i = e.scrollY;
    return e.scrollY = !1, i;
  } else
    return t.style.setProperty("overflow", "hidden"), !0;
}, Al = (t, e) => {
  le(t) ? t.scrollY = e : t.style.removeProperty("overflow");
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const zl = (t) => {
  let e, i, n;
  const o = () => {
    e = () => {
      n = !0, t && t(!0);
    }, i = () => {
      n = !1, t && t(!1);
    }, O == null || O.addEventListener("keyboardWillShow", e), O == null || O.addEventListener("keyboardWillHide", i);
  }, r = () => {
    O == null || O.removeEventListener("keyboardWillShow", e), O == null || O.removeEventListener("keyboardWillHide", i), e = i = void 0;
  }, s = () => n;
  return o(), { init: o, destroy: r, isKeyboardVisible: s };
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Dl = "all 0.2s ease-in-out", cn = (t) => {
  const e = document.querySelector(`${t}.ion-cloned-element`);
  if (e !== null)
    return e;
  const i = document.createElement(t);
  return i.classList.add("ion-cloned-element"), i.style.setProperty("display", "none"), document.body.appendChild(i), i;
}, dn = (t) => {
  if (!t)
    return;
  const e = t.querySelectorAll("ion-toolbar");
  return {
    el: t,
    toolbars: Array.from(e).map((i) => {
      const n = i.querySelector("ion-title");
      return {
        el: i,
        background: i.shadowRoot.querySelector(".toolbar-background"),
        ionTitleEl: n,
        innerTitleEl: n ? n.shadowRoot.querySelector(".toolbar-title") : null,
        ionButtonsEl: Array.from(i.querySelectorAll("ion-buttons")) || []
      };
    }) || []
  };
}, Il = (t, e, i) => {
  re(() => {
    const n = t.scrollTop, o = Ut(1, 1 + -n / 500, 1.1);
    i.querySelector("ion-refresher.refresher-native") === null && xt(() => {
      Ll(e.toolbars, o);
    });
  });
}, Si = (t, e) => {
  t.collapse !== "fade" && (e === void 0 ? t.style.removeProperty("--opacity-scale") : t.style.setProperty("--opacity-scale", e.toString()));
}, Tl = (t, e, i) => {
  if (!t[0].isIntersecting)
    return;
  const n = t[0].intersectionRatio > 0.9 || i <= 0 ? 0 : (1 - t[0].intersectionRatio) * 100 / 75;
  Si(e.el, n === 1 ? void 0 : n);
}, Ol = (t, e, i, n) => {
  xt(() => {
    const o = n.scrollTop;
    Tl(t, e, o);
    const r = t[0], s = r.intersectionRect, a = s.width * s.height, l = r.rootBounds.width * r.rootBounds.height, d = a === 0 && l === 0, h = Math.abs(s.left - r.boundingClientRect.left), c = Math.abs(s.right - r.boundingClientRect.right), u = a > 0 && (h >= 5 || c >= 5);
    d || u || (r.isIntersecting ? (ee(e, !1), ee(i)) : (s.x === 0 && s.y === 0 || s.width !== 0 && s.height !== 0) && o > 0 && (ee(e), ee(i, !1), Si(e.el)));
  });
}, ee = (t, e = !0) => {
  const i = t.el;
  e ? (i.classList.remove("header-collapse-condense-inactive"), i.removeAttribute("aria-hidden")) : (i.classList.add("header-collapse-condense-inactive"), i.setAttribute("aria-hidden", "true"));
}, Ll = (t = [], e = 1, i = !1) => {
  t.forEach((n) => {
    const o = n.ionTitleEl, r = n.innerTitleEl;
    !o || o.size !== "large" || (r.style.transition = i ? Dl : "", r.style.transform = `scale3d(${e}, ${e}, 1)`);
  });
}, hn = (t, e, i) => {
  re(() => {
    const n = t.scrollTop, o = e.clientHeight, r = i ? i.clientHeight : 0;
    if (i !== null && n < r) {
      e.style.setProperty("--opacity-scale", "0"), t.style.setProperty("clip-path", `inset(${o}px 0px 0px 0px)`);
      return;
    }
    const s = n - r, l = Ut(0, s / 10, 1);
    xt(() => {
      t.style.removeProperty("clip-path"), e.style.setProperty("--opacity-scale", l.toString());
    });
  });
}, Ml = "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}", Pl = 'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md::after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:""}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{left:unset;right:unset;right:0}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{background-position:right 0 top -2px}.header-collapse-condense{display:none}.header-md.ion-no-border::after{display:none}', Bl = /* @__PURE__ */ N(class extends Z {
  constructor() {
    super(), this.__registerHost(), this.inheritedAttributes = {}, this.translucent = !1, this.setupFadeHeader = async (t, e) => {
      const i = this.scrollEl = await an(t);
      this.contentScrollCallback = () => {
        hn(this.scrollEl, this.el, e);
      }, i.addEventListener("scroll", this.contentScrollCallback), hn(this.scrollEl, this.el, e);
    };
  }
  componentWillLoad() {
    this.inheritedAttributes = Ci(this.el);
  }
  componentDidLoad() {
    this.checkCollapsibleHeader();
  }
  componentDidUpdate() {
    this.checkCollapsibleHeader();
  }
  disconnectedCallback() {
    this.destroyCollapsibleHeader();
  }
  async checkCollapsibleHeader() {
    if (_(this) !== "ios")
      return;
    const { collapse: e } = this, i = e === "condense", n = e === "fade";
    if (this.destroyCollapsibleHeader(), i) {
      const o = this.el.closest("ion-app,ion-page,.ion-page,page-inner"), r = o ? ci(o) : null;
      xt(() => {
        const s = cn("ion-title");
        s.size = "large", cn("ion-back-button");
      }), await this.setupCondenseHeader(r, o);
    } else if (n) {
      const o = this.el.closest("ion-app,ion-page,.ion-page,page-inner"), r = o ? ci(o) : null;
      if (!r) {
        di(this.el);
        return;
      }
      const s = r.querySelector('ion-header[collapse="condense"]');
      await this.setupFadeHeader(r, s);
    }
  }
  destroyCollapsibleHeader() {
    this.intersectionObserver && (this.intersectionObserver.disconnect(), this.intersectionObserver = void 0), this.scrollEl && this.contentScrollCallback && (this.scrollEl.removeEventListener("scroll", this.contentScrollCallback), this.contentScrollCallback = void 0), this.collapsibleMainHeader && (this.collapsibleMainHeader.classList.remove("header-collapse-main"), this.collapsibleMainHeader = void 0);
  }
  async setupCondenseHeader(t, e) {
    if (!t || !e) {
      di(this.el);
      return;
    }
    if (typeof IntersectionObserver > "u")
      return;
    this.scrollEl = await an(t);
    const i = e.querySelectorAll("ion-header");
    if (this.collapsibleMainHeader = Array.from(i).find((s) => s.collapse !== "condense"), !this.collapsibleMainHeader)
      return;
    const n = dn(this.collapsibleMainHeader), o = dn(this.el);
    if (!n || !o)
      return;
    ee(n, !1), Si(n.el, 0);
    const r = (s) => {
      Ol(s, n, o, this.scrollEl);
    };
    this.intersectionObserver = new IntersectionObserver(r, {
      root: t,
      threshold: [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    }), this.intersectionObserver.observe(o.toolbars[o.toolbars.length - 1].el), this.contentScrollCallback = () => {
      Il(this.scrollEl, o, t);
    }, this.scrollEl.addEventListener("scroll", this.contentScrollCallback), xt(() => {
      this.collapsibleMainHeader !== void 0 && this.collapsibleMainHeader.classList.add("header-collapse-main");
    });
  }
  render() {
    const { translucent: t, inheritedAttributes: e } = this, i = _(this), n = this.collapse || "none", o = zt("ion-menu", this.el) ? "none" : "banner";
    return b(G, Object.assign({ role: o, class: {
      [i]: !0,
      [`header-${i}`]: !0,
      ["header-translucent"]: this.translucent,
      [`header-collapse-${n}`]: !0,
      [`header-translucent-${i}`]: this.translucent
    } }, e), i === "ios" && t && b("div", { class: "header-background" }), b("slot", null));
  }
  get el() {
    return this;
  }
  static get style() {
    return {
      ios: Ml,
      md: Pl
    };
  }
}, [36, "ion-header", {
  collapse: [1],
  translucent: [4]
}]);
function Fl() {
  if (typeof customElements > "u")
    return;
  ["ion-header"].forEach((e) => {
    switch (e) {
      case "ion-header":
        customElements.get(e) || customElements.define(e, Bl);
        break;
    }
  });
}
const _l = Fl;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Rl = `.sc-ion-input-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:initial;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0 !important;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2}ion-item.sc-ion-input-ios-h:not(.item-label),ion-item:not(.item-label) .sc-ion-input-ios-h{--padding-start:0}.ion-color.sc-ion-input-ios-h{color:var(--ion-color-base)}.native-input.sc-ion-input-ios{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-input.sc-ion-input-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-ios:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-ios::-ms-clear{display:none}.native-input[disabled].sc-ion-input-ios{opacity:0.4}.cloned-input.sc-ion-input-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-ios .cloned-input.sc-ion-input-ios,[dir=rtl].sc-ion-input-ios-h .cloned-input.sc-ion-input-ios,[dir=rtl] .sc-ion-input-ios-h .cloned-input.sc-ion-input-ios{left:unset;right:unset;right:0}.input-clear-icon.sc-ion-input-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.input-clear-icon.sc-ion-input-ios:focus{opacity:0.5}.has-value.sc-ion-input-ios-h .input-clear-icon.sc-ion-input-ios{visibility:visible}.has-focus.sc-ion-input-ios-h{pointer-events:none}.has-focus.sc-ion-input-ios-h input.sc-ion-input-ios,.has-focus.sc-ion-input-ios-h a.sc-ion-input-ios,.has-focus.sc-ion-input-ios-h button.sc-ion-input-ios{pointer-events:auto}.item-label-floating.item-has-placeholder.sc-ion-input-ios-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-input-ios-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-input-ios-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-input-ios-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.sc-ion-input-ios-h{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-stacked.sc-ion-input-ios-h,.item-label-stacked .sc-ion-input-ios-h,.item-label-floating.sc-ion-input-ios-h,.item-label-floating .sc-ion-input-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}.input-clear-icon.sc-ion-input-ios{background-image:url("data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-step-600,%20%23666666)'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>");width:30px;height:30px;background-size:18px}`, Hl = `.sc-ion-input-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:initial;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0 !important;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2}ion-item.sc-ion-input-md-h:not(.item-label),ion-item:not(.item-label) .sc-ion-input-md-h{--padding-start:0}.ion-color.sc-ion-input-md-h{color:var(--ion-color-base)}.native-input.sc-ion-input-md{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-input.sc-ion-input-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-md:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-md::-ms-clear{display:none}.native-input[disabled].sc-ion-input-md{opacity:0.4}.cloned-input.sc-ion-input-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-md .cloned-input.sc-ion-input-md,[dir=rtl].sc-ion-input-md-h .cloned-input.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h .cloned-input.sc-ion-input-md{left:unset;right:unset;right:0}.input-clear-icon.sc-ion-input-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.input-clear-icon.sc-ion-input-md:focus{opacity:0.5}.has-value.sc-ion-input-md-h .input-clear-icon.sc-ion-input-md{visibility:visible}.has-focus.sc-ion-input-md-h{pointer-events:none}.has-focus.sc-ion-input-md-h input.sc-ion-input-md,.has-focus.sc-ion-input-md-h a.sc-ion-input-md,.has-focus.sc-ion-input-md-h button.sc-ion-input-md{pointer-events:auto}.item-label-floating.item-has-placeholder.sc-ion-input-md-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-input-md-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-input-md-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-input-md-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.sc-ion-input-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:8px;font-size:inherit}.item-label-stacked.sc-ion-input-md-h,.item-label-stacked .sc-ion-input-md-h,.item-label-floating.sc-ion-input-md-h,.item-label-floating .sc-ion-input-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}.input-clear-icon.sc-ion-input-md{background-image:url("data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><polygon%20fill='var(--ion-color-step-600,%20%23666666)'%20points='405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256'/></svg>");width:30px;height:30px;background-size:22px}`, jl = /* @__PURE__ */ N(class extends Z {
  constructor() {
    super(), this.__registerHost(), this.ionInput = F(this, "ionInput", 7), this.ionChange = F(this, "ionChange", 7), this.ionBlur = F(this, "ionBlur", 7), this.ionFocus = F(this, "ionFocus", 7), this.ionStyle = F(this, "ionStyle", 7), this.inputId = `ion-input-${Xl++}`, this.didBlurAfterEdit = !1, this.inheritedAttributes = {}, this.isComposing = !1, this.fireFocusEvents = !0, this.hasFocus = !1, this.autocapitalize = "off", this.autocomplete = "off", this.autocorrect = "off", this.autofocus = !1, this.clearInput = !1, this.debounce = 0, this.disabled = !1, this.name = this.inputId, this.readonly = !1, this.required = !1, this.spellcheck = !1, this.type = "text", this.value = "", this.onInput = (t) => {
      const e = t.target;
      e && (this.value = e.value || ""), this.ionInput.emit(t);
    }, this.onBlur = (t) => {
      this.hasFocus = !1, this.focusChanged(), this.emitStyle(), this.fireFocusEvents && this.ionBlur.emit(t);
    }, this.onFocus = (t) => {
      this.hasFocus = !0, this.focusChanged(), this.emitStyle(), this.fireFocusEvents && this.ionFocus.emit(t);
    }, this.onKeydown = (t) => {
      this.shouldClearOnEdit() && (this.didBlurAfterEdit && this.hasValue() && t.key !== "Enter" && this.clearTextInput(), this.didBlurAfterEdit = !1);
    }, this.onCompositionStart = () => {
      this.isComposing = !0;
    }, this.onCompositionEnd = () => {
      this.isComposing = !1;
    }, this.clearTextInput = (t) => {
      this.clearInput && !this.readonly && !this.disabled && t && (t.preventDefault(), t.stopPropagation(), this.setFocus()), this.value = "", this.nativeInput && (this.nativeInput.value = "");
    };
  }
  debounceChanged() {
    this.ionChange = Js(this.ionChange, this.debounce);
  }
  disabledChanged() {
    this.emitStyle();
  }
  placeholderChanged() {
    this.emitStyle();
  }
  valueChanged() {
    const t = this.nativeInput, e = this.getValue();
    t && t.value !== e && !this.isComposing && (t.value = e), this.emitStyle(), this.ionChange.emit({ value: this.value == null ? this.value : this.value.toString() });
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, Ci(this.el)), yi(this.el, ["tabindex", "title", "data-form-type"]));
  }
  connectedCallback() {
    this.emitStyle(), this.debounceChanged(), ji.isBrowser && document.dispatchEvent(new CustomEvent("ionInputDidLoad", {
      detail: this.el
    }));
  }
  componentDidLoad() {
    const t = this.nativeInput;
    t && (t.addEventListener("compositionstart", this.onCompositionStart), t.addEventListener("compositionend", this.onCompositionEnd));
  }
  disconnectedCallback() {
    ji.isBrowser && document.dispatchEvent(new CustomEvent("ionInputDidUnload", {
      detail: this.el
    }));
    const t = this.nativeInput;
    t && (t.removeEventListener("compositionstart", this.onCompositionStart), t.removeEventListener("compositionEnd", this.onCompositionEnd));
  }
  async setFocus() {
    this.nativeInput && this.nativeInput.focus();
  }
  async setBlur() {
    this.nativeInput && this.nativeInput.blur();
  }
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  shouldClearOnEdit() {
    const { type: t, clearOnEdit: e } = this;
    return e === void 0 ? t === "password" : e;
  }
  getValue() {
    return typeof this.value == "number" ? this.value.toString() : (this.value || "").toString();
  }
  emitStyle() {
    this.ionStyle.emit({
      interactive: !0,
      input: !0,
      "has-placeholder": this.placeholder !== void 0,
      "has-value": this.hasValue(),
      "has-focus": this.hasFocus,
      "interactive-disabled": this.disabled
    });
  }
  focusChanged() {
    !this.hasFocus && this.shouldClearOnEdit() && this.hasValue() && (this.didBlurAfterEdit = !0);
  }
  hasValue() {
    return this.getValue().length > 0;
  }
  render() {
    const t = _(this), e = this.getValue(), i = this.inputId + "-lbl", n = Zs(this.el);
    return n && (n.id = i), b(G, { "aria-disabled": this.disabled ? "true" : null, class: wt(this.color, {
      [t]: !0,
      "has-value": this.hasValue(),
      "has-focus": this.hasFocus
    }) }, b("input", Object.assign({ class: "native-input", ref: (o) => this.nativeInput = o, "aria-labelledby": n ? i : null, disabled: this.disabled, accept: this.accept, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, enterKeyHint: this.enterkeyhint, inputMode: this.inputmode, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, multiple: this.multiple, name: this.name, pattern: this.pattern, placeholder: this.placeholder || "", readOnly: this.readonly, required: this.required, spellcheck: this.spellcheck, step: this.step, size: this.size, type: this.type, value: e, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeydown }, this.inheritedAttributes)), this.clearInput && !this.readonly && !this.disabled && b("button", { "aria-label": "reset", type: "button", class: "input-clear-icon", onPointerDown: (o) => {
      o.preventDefault();
    }, onClick: this.clearTextInput }));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      debounce: ["debounceChanged"],
      disabled: ["disabledChanged"],
      placeholder: ["placeholderChanged"],
      value: ["valueChanged"]
    };
  }
  static get style() {
    return {
      ios: Rl,
      md: Hl
    };
  }
}, [34, "ion-input", {
  fireFocusEvents: [4, "fire-focus-events"],
  color: [513],
  accept: [1],
  autocapitalize: [1],
  autocomplete: [1],
  autocorrect: [1],
  autofocus: [4],
  clearInput: [4, "clear-input"],
  clearOnEdit: [4, "clear-on-edit"],
  debounce: [2],
  disabled: [4],
  enterkeyhint: [1],
  inputmode: [1],
  max: [8],
  maxlength: [2],
  min: [8],
  minlength: [2],
  multiple: [4],
  name: [1],
  pattern: [1],
  placeholder: [1],
  readonly: [4],
  required: [4],
  spellcheck: [4],
  step: [1],
  size: [2],
  type: [1],
  value: [1032],
  hasFocus: [32],
  setFocus: [64],
  setBlur: [64],
  getInputElement: [64]
}]);
let Xl = 0;
function Yl() {
  if (typeof customElements > "u")
    return;
  ["ion-input"].forEach((e) => {
    switch (e) {
      case "ion-input":
        customElements.get(e) || customElements.define(e, jl);
        break;
    }
  });
}
const Wl = Yl;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ql = Ka;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Vl = Ja;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const pn = (t, e, i, n, o) => Gl(t[1], e[1], i[1], n[1], o).map((r) => Ul(t[0], e[0], i[0], n[0], r)), Ul = (t, e, i, n, o) => {
  const r = 3 * e * Math.pow(o - 1, 2), s = -3 * i * o + 3 * i + n * o, a = t * Math.pow(o - 1, 3);
  return o * (r + o * s) - a;
}, Gl = (t, e, i, n, o) => (t -= o, e -= o, i -= o, n -= o, Nl(n - 3 * i + 3 * e - t, 3 * i - 6 * e + 3 * t, 3 * e - 3 * t, t).filter((s) => s >= 0 && s <= 1)), Kl = (t, e, i) => {
  const n = e * e - 4 * t * i;
  return n < 0 ? [] : [(-e + Math.sqrt(n)) / (2 * t), (-e - Math.sqrt(n)) / (2 * t)];
}, Nl = (t, e, i, n) => {
  if (t === 0)
    return Kl(e, i, n);
  e /= t, i /= t, n /= t;
  const o = (3 * i - e * e) / 3, r = (2 * e * e * e - 9 * e * i + 27 * n) / 27;
  if (o === 0)
    return [Math.pow(-r, 1 / 3)];
  if (r === 0)
    return [Math.sqrt(-o), -Math.sqrt(-o)];
  const s = Math.pow(r / 2, 2) + Math.pow(o / 3, 3);
  if (s === 0)
    return [Math.pow(r / 2, 1 / 2) - e / 3];
  if (s > 0)
    return [
      Math.pow(-(r / 2) + Math.sqrt(s), 1 / 3) - Math.pow(r / 2 + Math.sqrt(s), 1 / 3) - e / 3
    ];
  const a = Math.sqrt(Math.pow(-(o / 3), 3)), l = Math.acos(-(r / (2 * Math.sqrt(Math.pow(-(o / 3), 3))))), d = 2 * Math.pow(a, 1 / 3);
  return [
    d * Math.cos(l / 3) - e / 3,
    d * Math.cos((l + 2 * Math.PI) / 3) - e / 3,
    d * Math.cos((l + 4 * Math.PI) / 3) - e / 3
  ];
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const St = (t, e, i, n) => {
  const o = Zl(t) ? {
    capture: !!n.capture,
    passive: !!n.passive
  } : !!n.capture;
  let r, s;
  return t.__zone_symbol__addEventListener ? (r = "__zone_symbol__addEventListener", s = "__zone_symbol__removeEventListener") : (r = "addEventListener", s = "removeEventListener"), t[r](e, i, o), () => {
    t[s](e, i, o);
  };
}, Zl = (t) => {
  if (we === void 0)
    try {
      const e = Object.defineProperty({}, "passive", {
        get: () => {
          we = !0;
        }
      });
      t.addEventListener("optsTest", () => {
      }, e);
    } catch {
      we = !1;
    }
  return !!we;
};
let we;
const Ql = 2e3, Jl = (t, e, i, n, o) => {
  let r, s, a, l, d, h, c, u = 0;
  const f = (y) => {
    u = Date.now() + Ql, e(y) && (!s && i && (s = St(t, "touchmove", i, o)), a || (a = St(y.target, "touchend", m, o)), l || (l = St(y.target, "touchcancel", m, o)));
  }, v = (y) => {
    u > Date.now() || !e(y) || (!h && i && (h = St(un(t), "mousemove", i, o)), c || (c = St(un(t), "mouseup", w, o)));
  }, m = (y) => {
    k(), n && n(y);
  }, w = (y) => {
    $(), n && n(y);
  }, k = () => {
    s && s(), a && a(), l && l(), s = a = l = void 0;
  }, $ = () => {
    h && h(), c && c(), h = c = void 0;
  }, E = () => {
    k(), $();
  }, S = (y = !0) => {
    y ? (r || (r = St(t, "touchstart", f, o)), d || (d = St(t, "mousedown", v, o))) : (r && r(), d && d(), r = d = void 0, E());
  };
  return {
    enable: S,
    stop: E,
    destroy: () => {
      S(!1), n = i = e = void 0;
    }
  };
}, un = (t) => t instanceof Document ? t : t.ownerDocument, tc = (t, e, i) => {
  const n = i * (Math.PI / 180), o = t === "x", r = Math.cos(n), s = e * e;
  let a = 0, l = 0, d = !1, h = 0;
  return {
    start(c, u) {
      a = c, l = u, h = 0, d = !0;
    },
    detect(c, u) {
      if (!d)
        return !1;
      const f = c - a, v = u - l, m = f * f + v * v;
      if (m < s)
        return !1;
      const w = Math.sqrt(m), k = (o ? f : v) / w;
      return k > r ? h = 1 : k < -r ? h = -1 : h = 0, d = !1, !0;
    },
    isGesture() {
      return h !== 0;
    },
    getDirection() {
      return h;
    }
  };
}, vo = (t) => {
  let e = !1, i = !1, n = !0, o = !1;
  const r = Object.assign({ disableScroll: !1, direction: "x", gesturePriority: 0, passive: !0, maxAngle: 40, threshold: 10 }, t), s = r.canStart, a = r.onWillStart, l = r.onStart, d = r.onEnd, h = r.notCaptured, c = r.onMove, u = r.threshold, f = r.passive, v = r.blurOnStart, m = {
    type: "pan",
    startX: 0,
    startY: 0,
    startTime: 0,
    currentX: 0,
    currentY: 0,
    velocityX: 0,
    velocityY: 0,
    deltaX: 0,
    deltaY: 0,
    currentTime: 0,
    event: void 0,
    data: void 0
  }, w = tc(r.direction, r.threshold, r.maxAngle), k = ao.createGesture({
    name: t.gestureName,
    priority: t.gesturePriority,
    disableScroll: t.disableScroll
  }), $ = (M) => {
    const vt = wo(M);
    return i || !n || (xo(M, m), m.startX = m.currentX, m.startY = m.currentY, m.startTime = m.currentTime = vt, m.velocityX = m.velocityY = m.deltaX = m.deltaY = 0, m.event = M, s && s(m) === !1) || (k.release(), !k.start()) ? !1 : (i = !0, u === 0 ? I() : (w.start(m.startX, m.startY), !0));
  }, E = (M) => {
    if (e) {
      !o && n && (o = !0, Ne(m, M), requestAnimationFrame(S));
      return;
    }
    Ne(m, M), w.detect(m.currentX, m.currentY) && (!w.isGesture() || !I()) && C();
  }, S = () => {
    !e || (o = !1, c && c(m));
  }, I = () => k && !k.capture() ? !1 : (e = !0, n = !1, m.startX = m.currentX, m.startY = m.currentY, m.startTime = m.currentTime, a ? a(m).then(z) : z(), !0), y = () => {
    if (typeof document < "u") {
      const M = document.activeElement;
      M != null && M.blur && M.blur();
    }
  }, z = () => {
    v && y(), l && l(m), n = !0;
  }, T = () => {
    e = !1, i = !1, o = !1, n = !0, k.release();
  }, W = (M) => {
    const vt = e, ut = n;
    if (T(), !!ut) {
      if (Ne(m, M), vt) {
        d && d(m);
        return;
      }
      h && h(m);
    }
  }, H = Jl(r.el, $, E, W, {
    capture: !1,
    passive: f
  }), C = () => {
    T(), H.stop(), h && h(m);
  };
  return {
    enable(M = !0) {
      M || (e && W(void 0), T()), H.enable(M);
    },
    destroy() {
      k.destroy(), H.destroy();
    }
  };
}, Ne = (t, e) => {
  if (!e)
    return;
  const i = t.currentX, n = t.currentY, o = t.currentTime;
  xo(e, t);
  const r = t.currentX, s = t.currentY, l = (t.currentTime = wo(e)) - o;
  if (l > 0 && l < 100) {
    const d = (r - i) / l, h = (s - n) / l;
    t.velocityX = d * 0.7 + t.velocityX * 0.3, t.velocityY = h * 0.7 + t.velocityY * 0.3;
  }
  t.deltaX = r - t.startX, t.deltaY = s - t.startY, t.event = e;
}, xo = (t, e) => {
  let i = 0, n = 0;
  if (t) {
    const o = t.changedTouches;
    if (o && o.length > 0) {
      const r = o[0];
      i = r.clientX, n = r.clientY;
    } else
      t.pageX !== void 0 && (i = t.pageX, n = t.pageY);
  }
  e.currentX = i, e.currentY = n;
}, wo = (t) => t.timeStamp || Date.now();
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ec = ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{left:0;top:0;padding-left:90px;padding-right:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-small){padding-left:9px;padding-right:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:13px;font-weight:normal}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.title-small){padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}:host(.title-large){padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;-webkit-transform-origin:left center;transform-origin:left center;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.title-large.title-rtl){-webkit-transform-origin:right center;transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000)}:host(.title-large) .toolbar-title{-webkit-transform-origin:inherit;transform-origin:inherit}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}", ic = ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:0.0125em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.title-small){width:100%;height:100%;font-size:15px;font-weight:normal}", nc = /* @__PURE__ */ N(class extends Z {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.ionStyle = F(this, "ionStyle", 7);
  }
  sizeChanged() {
    this.emitStyle();
  }
  connectedCallback() {
    this.emitStyle();
  }
  emitStyle() {
    const t = this.getSize();
    this.ionStyle.emit({
      [`title-${t}`]: !0
    });
  }
  getSize() {
    return this.size !== void 0 ? this.size : "default";
  }
  render() {
    const t = _(this), e = this.getSize();
    return b(G, { class: wt(this.color, {
      [t]: !0,
      [`title-${e}`]: !0,
      "title-rtl": document.dir === "rtl"
    }) }, b("div", { class: "toolbar-title" }, b("slot", null)));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      size: ["sizeChanged"]
    };
  }
  static get style() {
    return {
      ios: ec,
      md: ic
    };
  }
}, [33, "ion-title", {
  color: [513],
  size: [1]
}]);
function oc() {
  if (typeof customElements > "u")
    return;
  ["ion-title"].forEach((e) => {
    switch (e) {
      case "ion-title":
        customElements.get(e) || customElements.define(e, nc);
        break;
    }
  });
}
const rc = oc;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const sc = ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}", ac = ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(ion-segment){min-height:var(--min-height)}::slotted(.buttons-first-slot){margin-left:4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}", lc = /* @__PURE__ */ N(class extends Z {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.childrenStyles = /* @__PURE__ */ new Map();
  }
  componentWillLoad() {
    const t = Array.from(this.el.querySelectorAll("ion-buttons")), e = t.find((o) => o.slot === "start");
    e && e.classList.add("buttons-first-slot");
    const i = t.reverse(), n = i.find((o) => o.slot === "end") || i.find((o) => o.slot === "primary") || i.find((o) => o.slot === "secondary");
    n && n.classList.add("buttons-last-slot");
  }
  childrenStyle(t) {
    t.stopPropagation();
    const e = t.target.tagName, i = t.detail, n = {}, o = this.childrenStyles.get(e) || {};
    let r = !1;
    Object.keys(i).forEach((s) => {
      const a = `toolbar-${s}`, l = i[s];
      l !== o[a] && (r = !0), l && (n[a] = !0);
    }), r && (this.childrenStyles.set(e, n), Ae(this));
  }
  render() {
    const t = _(this), e = {};
    return this.childrenStyles.forEach((i) => {
      Object.assign(e, i);
    }), b(G, { class: Object.assign(Object.assign({}, e), wt(this.color, {
      [t]: !0,
      "in-toolbar": zt("ion-toolbar", this.el)
    })) }, b("div", { class: "toolbar-background" }), b("div", { class: "toolbar-container" }, b("slot", { name: "start" }), b("slot", { name: "secondary" }), b("div", { class: "toolbar-content" }, b("slot", null)), b("slot", { name: "primary" }), b("slot", { name: "end" })));
  }
  get el() {
    return this;
  }
  static get style() {
    return {
      ios: sc,
      md: ac
    };
  }
}, [33, "ion-toolbar", {
  color: [513]
}, [[0, "ionStyle", "childrenStyle"]]]);
function cc() {
  if (typeof customElements > "u")
    return;
  ["ion-toolbar"].forEach((e) => {
    switch (e) {
      case "ion-toolbar":
        customElements.get(e) || customElements.define(e, lc);
        break;
    }
  });
}
const dc = cc;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const mn = "ionKeyboardDidShow";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var Oe;
(function(t) {
  t.Dark = "DARK", t.Light = "LIGHT", t.Default = "DEFAULT";
})(Oe || (Oe = {}));
const Le = {
  getEngine() {
    var t;
    return ((t = O == null ? void 0 : O.Capacitor) === null || t === void 0 ? void 0 : t.isPluginAvailable("StatusBar")) && (O == null ? void 0 : O.Capacitor.Plugins.StatusBar);
  },
  supportsDefaultStatusBarStyle() {
    var t;
    return !!(!((t = O == null ? void 0 : O.Capacitor) === null || t === void 0) && t.PluginHeaders);
  },
  setStyle(t) {
    const e = this.getEngine();
    !e || e.setStyle(t);
  }
}, hi = (t, e) => {
  if (e === 1)
    return 0;
  const i = 1 / (1 - e), n = -(e * i);
  return t * i + n;
}, ko = () => {
  !O || O.innerWidth >= 768 || !Le.supportsDefaultStatusBarStyle() || Le.setStyle({ style: Oe.Dark });
}, yo = () => {
  !O || O.innerWidth >= 768 || !Le.supportsDefaultStatusBarStyle() || Le.setStyle({ style: Oe.Default });
}, Co = async (t, e) => {
  typeof t.canDismiss != "function" || !await t.canDismiss() || (e.isRunning() ? e.onFinish(() => {
    t.dismiss(void 0, "handler");
  }, { oneTimeCallback: !0 }) : t.dismiss(void 0, "handler"));
}, pi = (t) => 255275e-8 * 2.71828 ** (-14.9619 * t) - 1.00255 * 2.71828 ** (-0.0380968 * t) + 1, Me = {
  MIN_PRESENTING_SCALE: 0.93
}, hc = (t, e, i) => {
  const o = t.offsetHeight;
  let r = !1, s = !1, a = null, l = null;
  const d = 0.2;
  let h = !0, c = 0;
  const u = () => a && le(a) ? a.scrollY : !0, k = vo({
    el: t,
    gestureName: "modalSwipeToClose",
    gesturePriority: 39,
    direction: "y",
    threshold: 10,
    canStart: ($) => {
      const E = $.event.target;
      return E === null || !E.closest ? !0 : (a = $l(E), a ? (le(a) ? l = yt(a).querySelector(".inner-scroll") : l = a, !!!a.querySelector("ion-refresher") && l.scrollTop === 0) : E.closest("ion-footer") === null);
    },
    onStart: ($) => {
      const { deltaY: E } = $;
      h = u(), s = t.canDismiss !== void 0 && t.canDismiss !== !0, E > 0 && a && ln(a), e.progressStart(!0, r ? 1 : 0);
    },
    onMove: ($) => {
      const { deltaY: E } = $;
      E > 0 && a && ln(a);
      const S = $.deltaY / o, I = S >= 0 && s, y = I ? d : 0.9999, z = I ? pi(S / y) : S, T = Ut(1e-4, z, y);
      e.progressStep(T), T >= 0.5 && c < 0.5 ? yo() : T < 0.5 && c >= 0.5 && ko(), c = T;
    },
    onEnd: ($) => {
      const E = $.velocityY, S = $.deltaY / o, I = S >= 0 && s, y = I ? d : 0.9999, z = I ? pi(S / y) : S, T = Ut(1e-4, z, y), W = ($.deltaY + E * 1e3) / o, H = !I && W >= 0.5;
      let C = H ? -1e-3 : 1e-3;
      H ? (e.easing("cubic-bezier(0.32, 0.72, 0, 1)"), C += pn([0, 0], [0.32, 0.72], [0, 1], [1, 1], T)[0]) : (e.easing("cubic-bezier(1, 0, 0.68, 0.28)"), C += pn([0, 0], [1, 0], [0.68, 0.28], [1, 1], T)[0]);
      const M = gn(H ? S * o : (1 - T) * o, E);
      r = H, k.enable(!1), a && Al(a, h), e.onFinish(() => {
        H || k.enable(!0);
      }).progressEnd(H ? 1 : 0, C, M), I && T > y / 4 ? Co(t, e) : H && i();
    }
  });
  return k;
}, gn = (t, e) => Ut(400, t / Math.abs(e * 1.1), 500), Eo = (t) => {
  const { currentBreakpoint: e, backdropBreakpoint: i } = t, n = i === void 0 || i < e, o = n ? `calc(var(--backdrop-opacity) * ${e})` : "0", r = R("backdropAnimation").fromTo("opacity", 0, o);
  return n && r.beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]), { wrapperAnimation: R("wrapperAnimation").keyframes([
    { offset: 0, opacity: 1, transform: "translateY(100%)" },
    { offset: 1, opacity: 1, transform: `translateY(${100 - e * 100}%)` }
  ]), backdropAnimation: r };
}, So = (t) => {
  const { currentBreakpoint: e, backdropBreakpoint: i } = t, n = `calc(var(--backdrop-opacity) * ${hi(e, i)})`, o = [
    { offset: 0, opacity: n },
    { offset: 1, opacity: 0 }
  ], r = [
    { offset: 0, opacity: n },
    { offset: i, opacity: 0 },
    { offset: 1, opacity: 0 }
  ], s = R("backdropAnimation").keyframes(i !== 0 ? r : o);
  return { wrapperAnimation: R("wrapperAnimation").keyframes([
    { offset: 0, opacity: 1, transform: `translateY(${100 - e * 100}%)` },
    { offset: 1, opacity: 1, transform: "translateY(100%)" }
  ]), backdropAnimation: s };
}, pc = () => {
  const t = R().fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]), e = R().fromTo("transform", "translateY(100vh)", "translateY(0vh)");
  return { backdropAnimation: t, wrapperAnimation: e };
}, fn = (t, e) => {
  const { presentingEl: i, currentBreakpoint: n } = e, o = yt(t), { wrapperAnimation: r, backdropAnimation: s } = n !== void 0 ? Eo(e) : pc();
  s.addElement(o.querySelector("ion-backdrop")), r.addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({ opacity: 1 });
  const a = R("entering-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(r);
  if (i) {
    const l = window.innerWidth < 768, d = i.tagName === "ION-MODAL" && i.presentingElement !== void 0, h = yt(i), c = R().beforeStyles({
      transform: "translateY(0)",
      "transform-origin": "top center",
      overflow: "hidden"
    }), u = document.body;
    if (l) {
      const f = CSS.supports("width", "max(0px, 1px)") ? "max(30px, var(--ion-safe-area-top))" : "30px", v = d ? "-10px" : f, m = Me.MIN_PRESENTING_SCALE, w = `translateY(${v}) scale(${m})`;
      c.afterStyles({
        transform: w
      }).beforeAddWrite(() => u.style.setProperty("background-color", "black")).addElement(i).keyframes([
        { offset: 0, filter: "contrast(1)", transform: "translateY(0px) scale(1)", borderRadius: "0px" },
        { offset: 1, filter: "contrast(0.85)", transform: w, borderRadius: "10px 10px 0 0" }
      ]), a.addAnimation(c);
    } else if (a.addAnimation(s), !d)
      r.fromTo("opacity", "0", "1");
    else {
      const v = `translateY(-10px) scale(${d ? Me.MIN_PRESENTING_SCALE : 1})`;
      c.afterStyles({
        transform: v
      }).addElement(h.querySelector(".modal-wrapper")).keyframes([
        { offset: 0, filter: "contrast(1)", transform: "translateY(0) scale(1)" },
        { offset: 1, filter: "contrast(0.85)", transform: v }
      ]);
      const m = R().afterStyles({
        transform: v
      }).addElement(h.querySelector(".modal-shadow")).keyframes([
        { offset: 0, opacity: "1", transform: "translateY(0) scale(1)" },
        { offset: 1, opacity: "0", transform: v }
      ]);
      a.addAnimation([c, m]);
    }
  } else
    a.addAnimation(s);
  return a;
}, uc = () => {
  const t = R().fromTo("opacity", "var(--backdrop-opacity)", 0), e = R().fromTo("transform", "translateY(0vh)", "translateY(100vh)");
  return { backdropAnimation: t, wrapperAnimation: e };
}, bn = (t, e, i = 500) => {
  const { presentingEl: n, currentBreakpoint: o } = e, r = yt(t), { wrapperAnimation: s, backdropAnimation: a } = o !== void 0 ? So(e) : uc();
  a.addElement(r.querySelector("ion-backdrop")), s.addElement(r.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({ opacity: 1 });
  const l = R("leaving-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(i).addAnimation(s);
  if (n) {
    const d = window.innerWidth < 768, h = n.tagName === "ION-MODAL" && n.presentingElement !== void 0, c = yt(n), u = R().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((v) => {
      if (v !== 1)
        return;
      n.style.setProperty("overflow", ""), Array.from(f.querySelectorAll("ion-modal")).filter((w) => w.presentingElement !== void 0).length <= 1 && f.style.setProperty("background-color", "");
    }), f = document.body;
    if (d) {
      const v = CSS.supports("width", "max(0px, 1px)") ? "max(30px, var(--ion-safe-area-top))" : "30px", m = h ? "-10px" : v, w = Me.MIN_PRESENTING_SCALE, k = `translateY(${m}) scale(${w})`;
      u.addElement(n).keyframes([
        { offset: 0, filter: "contrast(0.85)", transform: k, borderRadius: "10px 10px 0 0" },
        { offset: 1, filter: "contrast(1)", transform: "translateY(0px) scale(1)", borderRadius: "0px" }
      ]), l.addAnimation(u);
    } else if (l.addAnimation(a), !h)
      s.fromTo("opacity", "1", "0");
    else {
      const m = `translateY(-10px) scale(${h ? Me.MIN_PRESENTING_SCALE : 1})`;
      u.addElement(c.querySelector(".modal-wrapper")).afterStyles({
        transform: "translate3d(0, 0, 0)"
      }).keyframes([
        { offset: 0, filter: "contrast(0.85)", transform: m },
        { offset: 1, filter: "contrast(1)", transform: "translateY(0) scale(1)" }
      ]);
      const w = R().addElement(c.querySelector(".modal-shadow")).afterStyles({
        transform: "translateY(0) scale(1)"
      }).keyframes([
        { offset: 0, opacity: "0", transform: m },
        { offset: 1, opacity: "1", transform: "translateY(0) scale(1)" }
      ]);
      l.addAnimation([u, w]);
    }
  } else
    l.addAnimation(a);
  return l;
}, mc = () => {
  const t = R().fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]), e = R().keyframes([
    { offset: 0, opacity: 0.01, transform: "translateY(40px)" },
    { offset: 1, opacity: 1, transform: "translateY(0px)" }
  ]);
  return { backdropAnimation: t, wrapperAnimation: e };
}, gc = (t, e) => {
  const { currentBreakpoint: i } = e, n = yt(t), { wrapperAnimation: o, backdropAnimation: r } = i !== void 0 ? Eo(e) : mc();
  return r.addElement(n.querySelector("ion-backdrop")), o.addElement(n.querySelector(".modal-wrapper")), R().addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([r, o]);
}, fc = () => {
  const t = R().fromTo("opacity", "var(--backdrop-opacity)", 0), e = R().keyframes([
    { offset: 0, opacity: 0.99, transform: "translateY(0px)" },
    { offset: 1, opacity: 0, transform: "translateY(40px)" }
  ]);
  return { backdropAnimation: t, wrapperAnimation: e };
}, bc = (t, e) => {
  const { currentBreakpoint: i } = e, n = yt(t), { wrapperAnimation: o, backdropAnimation: r } = i !== void 0 ? So(e) : fc();
  return r.addElement(n.querySelector("ion-backdrop")), o.addElement(n.querySelector(".modal-wrapper")), R().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([r, o]);
}, vc = (t, e, i, n, o, r, s = [], a, l, d) => {
  const h = [
    { offset: 0, opacity: "var(--backdrop-opacity)" },
    { offset: 1, opacity: 0.01 }
  ], c = [
    { offset: 0, opacity: "var(--backdrop-opacity)" },
    { offset: 1 - o, opacity: 0 },
    { offset: 1, opacity: 0 }
  ], u = {
    WRAPPER_KEYFRAMES: [
      { offset: 0, transform: "translateY(0%)" },
      { offset: 1, transform: "translateY(100%)" }
    ],
    BACKDROP_KEYFRAMES: o !== 0 ? c : h
  }, f = t.querySelector("ion-content"), v = i.clientHeight;
  let m = n, w = 0, k = !1;
  const $ = 0.95, E = r.childAnimations.find((X) => X.id === "wrapperAnimation"), S = r.childAnimations.find((X) => X.id === "backdropAnimation"), I = s[s.length - 1], y = s[0], z = () => {
    t.style.setProperty("pointer-events", "auto"), e.style.setProperty("pointer-events", "auto"), t.classList.remove("ion-disable-focus-trap");
  }, T = () => {
    t.style.setProperty("pointer-events", "none"), e.style.setProperty("pointer-events", "none"), t.classList.add("ion-disable-focus-trap");
  };
  E && S && (E.keyframes([...u.WRAPPER_KEYFRAMES]), S.keyframes([...u.BACKDROP_KEYFRAMES]), r.progressStart(!0, 1 - m), m > o ? z() : T()), f && m !== I && (f.scrollY = !1);
  const W = (X) => {
    const L = X.event.target.closest("ion-content");
    return m = a(), !(m === 1 && L);
  }, H = () => {
    k = t.canDismiss !== void 0 && t.canDismiss !== !0 && y === 0, f && (f.scrollY = !1), V(() => {
      t.focus();
    }), r.progressStart(!0, 1 - m);
  }, C = (X) => {
    const L = 1 - m, P = s.length > 1 ? 1 - s[1] : void 0, Q = L + X.deltaY / v, mt = P !== void 0 && Q >= P && k, K = mt ? $ : 0.9999, gt = mt && P !== void 0 ? P + pi((Q - P) / (K - P)) : Q;
    w = Ut(1e-4, gt, K), r.progressStep(w);
  }, M = (X) => {
    const L = X.velocityY, P = (X.deltaY + L * 350) / v, Q = m - P, mt = s.reduce((K, gt) => Math.abs(gt - Q) < Math.abs(K - Q) ? gt : K);
    vt({
      breakpoint: mt,
      breakpointOffset: w,
      canDismiss: k
    });
  }, vt = (X) => {
    const { breakpoint: L, canDismiss: P, breakpointOffset: Q } = X, mt = P && L === 0, K = mt ? m : L, gt = K !== 0;
    return m = 0, E && S && (E.keyframes([
      { offset: 0, transform: `translateY(${Q * 100}%)` },
      { offset: 1, transform: `translateY(${(1 - K) * 100}%)` }
    ]), S.keyframes([
      {
        offset: 0,
        opacity: `calc(var(--backdrop-opacity) * ${hi(1 - Q, o)})`
      },
      {
        offset: 1,
        opacity: `calc(var(--backdrop-opacity) * ${hi(K, o)})`
      }
    ]), r.progressStep(0)), ut.enable(!1), mt ? Co(t, r) : gt || l(), new Promise((Tt) => {
      r.onFinish(() => {
        gt ? E && S ? V(() => {
          E.keyframes([...u.WRAPPER_KEYFRAMES]), S.keyframes([...u.BACKDROP_KEYFRAMES]), r.progressStart(!0, 1 - K), m = K, d(m), f && m === s[s.length - 1] && (f.scrollY = !0), m > o ? z() : T(), ut.enable(!0), Tt();
        }) : (ut.enable(!0), Tt()) : Tt();
      }, { oneTimeCallback: !0 }).progressEnd(1, 0, 500);
    });
  }, ut = vo({
    el: i,
    gestureName: "modalSheet",
    gesturePriority: 40,
    direction: "y",
    threshold: 10,
    canStart: W,
    onStart: H,
    onMove: C,
    onEnd: M
  });
  return {
    gesture: ut,
    moveSheetToBreakpoint: vt
  };
}, xc = ':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.modal-handle::before{padding-left:4px;padding-right:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle::before{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: 1px){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: 1px){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}', wc = ':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.modal-handle::before{padding-left:4px;padding-right:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle::before{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}', kc = /* @__PURE__ */ N(class extends Z {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.didPresent = F(this, "ionModalDidPresent", 7), this.willPresent = F(this, "ionModalWillPresent", 7), this.willDismiss = F(this, "ionModalWillDismiss", 7), this.didDismiss = F(this, "ionModalDidDismiss", 7), this.ionBreakpointDidChange = F(this, "ionBreakpointDidChange", 7), this.didPresentShorthand = F(this, "didPresent", 7), this.willPresentShorthand = F(this, "willPresent", 7), this.willDismissShorthand = F(this, "willDismiss", 7), this.didDismissShorthand = F(this, "didDismiss", 7), this.modalIndex = Cc++, this.coreDelegate = il(), this.isSheetModal = !1, this.inheritedAttributes = {}, this.inline = !1, this.gestureAnimationDismissing = !1, this.presented = !1, this.hasController = !1, this.keyboardClose = !0, this.backdropBreakpoint = 0, this.handleBehavior = "none", this.backdropDismiss = !0, this.showBackdrop = !0, this.animated = !0, this.swipeToClose = !1, this.isOpen = !1, this.keepContentsMounted = !1, this.configureTriggerInteraction = () => {
      const { trigger: t, el: e, destroyTriggerInteraction: i } = this;
      i && i();
      const n = t !== void 0 ? document.getElementById(t) : null;
      if (!n)
        return;
      const o = (r, s) => {
        const a = () => {
          s.present();
        };
        return r.addEventListener("click", a), () => {
          r.removeEventListener("click", a);
        };
      };
      this.destroyTriggerInteraction = o(n, e);
    }, this.onHandleClick = () => {
      const { sheetTransition: t, handleBehavior: e } = this;
      e !== "cycle" || t !== void 0 || this.moveToNextBreakpoint();
    }, this.onBackdropTap = () => {
      const { sheetTransition: t } = this;
      t === void 0 && this.dismiss(void 0, li);
    }, this.onLifecycle = (t) => {
      const e = this.usersElement, i = yc[t.type];
      if (e && i) {
        const n = new CustomEvent(i, {
          bubbles: !1,
          cancelable: !1,
          detail: t.detail
        });
        e.dispatchEvent(n);
      }
    };
  }
  onIsOpenChange(t, e) {
    t === !0 && e === !1 ? this.present() : t === !1 && e === !0 && this.dismiss();
  }
  onTriggerChange() {
    this.configureTriggerInteraction();
  }
  async swipeToCloseChanged(t) {
    this.gesture ? this.gesture.enable(t) : t && await this.initSwipeToClose();
  }
  breakpointsChanged(t) {
    t !== void 0 && (this.sortedBreakpoints = t.sort((e, i) => e - i));
  }
  connectedCallback() {
    ol(this.el);
  }
  componentWillLoad() {
    const { breakpoints: t, initialBreakpoint: e, swipeToClose: i, el: n } = this;
    this.inheritedAttributes = yi(n, ["role"]), this.modalId = this.el.hasAttribute("id") ? this.el.getAttribute("id") : `ion-modal-${this.modalIndex}`, (this.isSheetModal = t !== void 0 && e !== void 0) && (this.currentBreakpoint = this.initialBreakpoint), t !== void 0 && e !== void 0 && !t.includes(e) && ve("Your breakpoints array must include the initialBreakpoint value."), i && ve("swipeToClose has been deprecated in favor of canDismiss.\n\nIf you want a card modal to be swipeable, set canDismiss to `true`. In the next major release of Ionic, swipeToClose will be removed, and all card modals will be swipeable by default.");
  }
  componentDidLoad() {
    this.isOpen === !0 && V(() => this.present()), this.breakpointsChanged(this.breakpoints), this.configureTriggerInteraction();
  }
  getDelegate(t = !1) {
    if (this.workingDelegate && !t)
      return {
        delegate: this.workingDelegate,
        inline: this.inline
      };
    const e = this.el.parentNode, i = this.inline = e !== null && !this.hasController, n = this.workingDelegate = i ? this.delegate || this.coreDelegate : this.delegate;
    return { inline: i, delegate: n };
  }
  async checkCanDismiss() {
    const { canDismiss: t } = this;
    return t === void 0 ? !0 : typeof t == "function" ? t() : t;
  }
  async present() {
    if (this.presented)
      return;
    this.currentTransition !== void 0 && await this.currentTransition, this.currentBreakpoint = this.initialBreakpoint;
    const t = Object.assign(Object.assign({}, this.componentProps), { modal: this.el }), { inline: e, delegate: i } = this.getDelegate(!0);
    this.usersElement = await tl(i, this.el, this.component, ["ion-page"], t, e), await mo(this.usersElement), xt(() => this.el.classList.add("show-modal")), this.currentTransition = cl(this, "modalEnter", fn, gc, {
      presentingEl: this.presentingElement,
      currentBreakpoint: this.initialBreakpoint,
      backdropBreakpoint: this.backdropBreakpoint
    });
    const n = this.swipeToClose || this.canDismiss !== void 0 && this.presentingElement !== void 0;
    n && _(this) === "ios" && ko(), await this.currentTransition, this.isSheetModal ? this.initSheetGesture() : n && await this.initSwipeToClose(), typeof window < "u" && (this.keyboardOpenCallback = () => {
      this.gesture && (this.gesture.enable(!1), V(() => {
        this.gesture && this.gesture.enable(!0);
      }));
    }, window.addEventListener(mn, this.keyboardOpenCallback)), this.currentTransition = void 0;
  }
  initSwipeToClose() {
    if (_(this) !== "ios")
      return;
    const { el: t } = this, e = this.leaveAnimation || Vt.get("modalLeave", bn), i = this.animation = e(t, { presentingEl: this.presentingElement });
    if (!ci(t)) {
      di(t);
      return;
    }
    this.gesture = hc(t, i, () => {
      this.gestureAnimationDismissing = !0, this.animation.onFinish(async () => {
        await this.dismiss(void 0, "gesture"), this.gestureAnimationDismissing = !1;
      });
    }), this.gesture.enable(!0);
  }
  initSheetGesture() {
    const { wrapperEl: t, initialBreakpoint: e, backdropBreakpoint: i } = this;
    if (!t || e === void 0)
      return;
    const n = this.enterAnimation || Vt.get("modalEnter", fn), o = this.animation = n(this.el, {
      presentingEl: this.presentingElement,
      currentBreakpoint: e,
      backdropBreakpoint: i
    });
    o.progressStart(!0, 1);
    const { gesture: r, moveSheetToBreakpoint: s } = vc(this.el, this.backdropEl, t, e, i, o, this.sortedBreakpoints, () => {
      var a;
      return (a = this.currentBreakpoint) !== null && a !== void 0 ? a : 0;
    }, () => this.sheetOnDismiss(), (a) => {
      this.currentBreakpoint !== a && (this.currentBreakpoint = a, this.ionBreakpointDidChange.emit({ breakpoint: a }));
    });
    this.gesture = r, this.moveSheetToBreakpoint = s, this.gesture.enable(!0);
  }
  sheetOnDismiss() {
    this.gestureAnimationDismissing = !0, this.animation.onFinish(async () => {
      this.currentBreakpoint = 0, this.ionBreakpointDidChange.emit({ breakpoint: this.currentBreakpoint }), await this.dismiss(void 0, "gesture"), this.gestureAnimationDismissing = !1;
    });
  }
  async dismiss(t, e) {
    if (this.gestureAnimationDismissing && e !== "gesture" || e !== "handler" && !await this.checkCanDismiss())
      return !1;
    (this.swipeToClose || this.canDismiss !== void 0 && this.presentingElement !== void 0) && _(this) === "ios" && yo(), typeof window < "u" && this.keyboardOpenCallback && window.removeEventListener(mn, this.keyboardOpenCallback), this.currentTransition !== void 0 && await this.currentTransition;
    const n = Te.get(this) || [];
    this.currentTransition = hl(this, t, e, "modalLeave", bn, bc, {
      presentingEl: this.presentingElement,
      currentBreakpoint: this.currentBreakpoint || this.initialBreakpoint,
      backdropBreakpoint: this.backdropBreakpoint
    });
    const o = await this.currentTransition;
    if (o) {
      const { delegate: r } = this.getDelegate();
      await el(r, this.usersElement), xt(() => this.el.classList.remove("show-modal")), this.animation && this.animation.destroy(), this.gesture && this.gesture.destroy(), n.forEach((s) => s.destroy());
    }
    return this.currentBreakpoint = void 0, this.currentTransition = void 0, this.animation = void 0, o;
  }
  onDidDismiss() {
    return rn(this.el, "ionModalDidDismiss");
  }
  onWillDismiss() {
    return rn(this.el, "ionModalWillDismiss");
  }
  async setCurrentBreakpoint(t) {
    if (!this.isSheetModal) {
      ve("setCurrentBreakpoint is only supported on sheet modals.");
      return;
    }
    if (!this.breakpoints.includes(t)) {
      ve(`Attempted to set invalid breakpoint value ${t}. Please double check that the breakpoint value is part of your defined breakpoints.`);
      return;
    }
    const { currentBreakpoint: e, moveSheetToBreakpoint: i, canDismiss: n, breakpoints: o } = this;
    e !== t && i && (this.sheetTransition = i({
      breakpoint: t,
      breakpointOffset: 1 - e,
      canDismiss: n !== void 0 && n !== !0 && o[0] === 0
    }), await this.sheetTransition, this.sheetTransition = void 0);
  }
  async getCurrentBreakpoint() {
    return this.currentBreakpoint;
  }
  async moveToNextBreakpoint() {
    const { breakpoints: t, currentBreakpoint: e } = this;
    if (!t || e == null)
      return !1;
    const i = t.filter((s) => s !== 0), o = (i.indexOf(e) + 1) % i.length, r = i[o];
    return await this.setCurrentBreakpoint(r), !0;
  }
  render() {
    const { handle: t, isSheetModal: e, presentingElement: i, htmlAttributes: n, handleBehavior: o, inheritedAttributes: r } = this, s = t !== !1 && e, a = _(this), { modalId: l } = this, d = i !== void 0 && a === "ios", h = o === "cycle";
    return b(G, Object.assign({ "no-router": !0, "aria-modal": "true", role: "dialog", tabindex: "-1" }, n, r, { style: {
      zIndex: `${2e4 + this.overlayIndex}`
    }, class: Object.assign({ [a]: !0, ["modal-default"]: !d && !e, ["modal-card"]: d, ["modal-sheet"]: e, "overlay-hidden": !0 }, wa(this.cssClass)), id: l, onIonBackdropTap: this.onBackdropTap, onIonModalDidPresent: this.onLifecycle, onIonModalWillPresent: this.onLifecycle, onIonModalWillDismiss: this.onLifecycle, onIonModalDidDismiss: this.onLifecycle }), b("ion-backdrop", { ref: (c) => this.backdropEl = c, visible: this.showBackdrop, tappable: this.backdropDismiss, part: "backdrop" }), a === "ios" && b("div", { class: "modal-shadow" }), b("div", { class: "modal-wrapper ion-overlay-wrapper", part: "content", ref: (c) => this.wrapperEl = c }, s && b("button", {
      class: "modal-handle",
      tabIndex: h ? 0 : -1,
      "aria-label": "Activate to adjust the size of the dialog overlaying the screen",
      onClick: h ? this.onHandleClick : void 0,
      part: "handle"
    }), b("slot", null)));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      isOpen: ["onIsOpenChange"],
      trigger: ["onTriggerChange"],
      swipeToClose: ["swipeToCloseChanged"]
    };
  }
  static get style() {
    return {
      ios: xc,
      md: wc
    };
  }
}, [33, "ion-modal", {
  hasController: [4, "has-controller"],
  overlayIndex: [2, "overlay-index"],
  delegate: [16],
  keyboardClose: [4, "keyboard-close"],
  enterAnimation: [16],
  leaveAnimation: [16],
  breakpoints: [16],
  initialBreakpoint: [2, "initial-breakpoint"],
  backdropBreakpoint: [2, "backdrop-breakpoint"],
  handle: [4],
  handleBehavior: [1, "handle-behavior"],
  component: [1],
  componentProps: [16],
  cssClass: [1, "css-class"],
  backdropDismiss: [4, "backdrop-dismiss"],
  showBackdrop: [4, "show-backdrop"],
  animated: [4],
  swipeToClose: [4, "swipe-to-close"],
  presentingElement: [16],
  htmlAttributes: [16],
  isOpen: [4, "is-open"],
  trigger: [1],
  keepContentsMounted: [4, "keep-contents-mounted"],
  canDismiss: [4, "can-dismiss"],
  presented: [32],
  present: [64],
  dismiss: [64],
  onDidDismiss: [64],
  onWillDismiss: [64],
  setCurrentBreakpoint: [64],
  getCurrentBreakpoint: [64]
}]), yc = {
  ionModalDidPresent: "ionViewDidEnter",
  ionModalWillPresent: "ionViewWillEnter",
  ionModalWillDismiss: "ionViewWillLeave",
  ionModalDidDismiss: "ionViewDidLeave"
};
let Cc = 0;
function Ec() {
  if (typeof customElements > "u")
    return;
  ["ion-modal", "ion-backdrop"].forEach((e) => {
    switch (e) {
      case "ion-modal":
        customElements.get(e) || customElements.define(e, kc);
        break;
      case "ion-backdrop":
        customElements.get(e) || va();
        break;
    }
  });
}
const Sc = Ec;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const $c = ":host{padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom, 0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, #f7f7f7));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--color:var(--ion-tab-bar-color, var(--ion-color-step-400, #999999));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:50px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}", Ac = ":host{padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom, 0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.07))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, #666666));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:56px}", zc = /* @__PURE__ */ N(class extends Z {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.ionTabBarChanged = F(this, "ionTabBarChanged", 7), this.keyboardCtrl = null, this.keyboardVisible = !1, this.translucent = !1;
  }
  selectedTabChanged() {
    this.selectedTab !== void 0 && this.ionTabBarChanged.emit({
      tab: this.selectedTab
    });
  }
  componentWillLoad() {
    this.selectedTabChanged();
  }
  connectedCallback() {
    this.keyboardCtrl = zl((t) => {
      this.keyboardVisible = t;
    });
  }
  disconnectedCallback() {
    this.keyboardCtrl && this.keyboardCtrl.destroy();
  }
  render() {
    const { color: t, translucent: e, keyboardVisible: i } = this, n = _(this), o = i && this.el.getAttribute("slot") !== "top";
    return b(G, { role: "tablist", "aria-hidden": o ? "true" : null, class: wt(t, {
      [n]: !0,
      "tab-bar-translucent": e,
      "tab-bar-hidden": o
    }) }, b("slot", null));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      selectedTab: ["selectedTabChanged"]
    };
  }
  static get style() {
    return {
      ios: $c,
      md: Ac
    };
  }
}, [33, "ion-tab-bar", {
  color: [513],
  selectedTab: [1, "selected-tab"],
  translucent: [4],
  keyboardVisible: [32]
}]), Dc = zc;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const D = {
  allRenderFn: !1,
  cmpDidLoad: !0,
  cmpDidUnload: !1,
  cmpDidUpdate: !0,
  cmpDidRender: !0,
  cmpWillLoad: !0,
  cmpWillUpdate: !0,
  cmpWillRender: !0,
  connectedCallback: !0,
  disconnectedCallback: !0,
  element: !0,
  event: !0,
  hasRenderFn: !0,
  lifecycle: !0,
  hostListener: !0,
  hostListenerTargetWindow: !0,
  hostListenerTargetDocument: !0,
  hostListenerTargetBody: !0,
  hostListenerTargetParent: !1,
  hostListenerTarget: !0,
  member: !0,
  method: !0,
  mode: !0,
  observeAttribute: !0,
  prop: !0,
  propMutable: !0,
  reflect: !0,
  scoped: !0,
  shadowDom: !0,
  slot: !0,
  cssAnnotations: !0,
  state: !0,
  style: !0,
  svg: !0,
  updatable: !0,
  vdomAttribute: !0,
  vdomXlink: !0,
  vdomClass: !0,
  vdomFunctional: !0,
  vdomKey: !0,
  vdomListener: !0,
  vdomRef: !0,
  vdomPropOrAttr: !0,
  vdomRender: !0,
  vdomStyle: !0,
  vdomText: !0,
  watchCallback: !0,
  taskQueue: !0,
  hotModuleReplacement: !1,
  isDebug: !1,
  isDev: !1,
  isTesting: !1,
  hydrateServerSide: !1,
  hydrateClientSide: !1,
  lifecycleDOMEvents: !1,
  lazyLoad: !1,
  profile: !1,
  slotRelocation: !0,
  appendChildSlotFix: !1,
  cloneNodeFix: !1,
  hydratedAttribute: !1,
  hydratedClass: !0,
  safari10: !1,
  scriptDataOpts: !1,
  scopedSlotTextContentFix: !1,
  shadowDomShim: !1,
  slotChildNodesFix: !1,
  invisiblePrehydration: !0,
  propBoolean: !0,
  propNumber: !0,
  propString: !0,
  cssVarShim: !1,
  constructableCSS: !0,
  cmpShouldUpdate: !0,
  devTools: !1,
  dynamicImportShim: !1,
  shadowDelegatesFocus: !0,
  initializeNextTick: !1,
  asyncLoading: !1,
  asyncQueue: !1,
  transformTagName: !1,
  attachStyles: !0
};
let Ft, $o, Ye, Ao = !1, Pe = !1, $i = !1, tt = !1, vn = null, ui = !1;
const Kt = typeof window < "u" ? window : {};
D.cssVarShim && Kt.CSS;
const pt = Kt.document || { head: {} }, Ic = Kt.HTMLElement || class {
}, U = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (t) => t(),
  raf: (t) => requestAnimationFrame(t),
  ael: (t, e, i, n) => t.addEventListener(e, i, n),
  rel: (t, e, i, n) => t.removeEventListener(e, i, n),
  ce: (t, e) => new CustomEvent(t, e)
}, Be = D.shadowDomShim && D.shadowDom ? /* @__PURE__ */ (() => (pt.head.attachShadow + "").indexOf("[native") > -1)() : !0, Tc = /* @__PURE__ */ (() => {
  let t = !1;
  try {
    pt.addEventListener("e", null, Object.defineProperty({}, "passive", {
      get() {
        t = !0;
      }
    }));
  } catch {
  }
  return t;
})(), Oc = (t) => Promise.resolve(t), Lc = D.constructableCSS ? /* @__PURE__ */ (() => {
  try {
    return new CSSStyleSheet(), typeof new CSSStyleSheet().replace == "function";
  } catch {
  }
  return !1;
})() : !1, zo = (t, e, i, n) => {
  i && i.map(([o, r, s]) => {
    const a = Pc(t, o), l = Mc(e, s), d = Bc(o);
    U.ael(a, r, l, d), (e.$rmListeners$ = e.$rmListeners$ || []).push(() => U.rel(a, r, l, d));
  });
}, Mc = (t, e) => (i) => {
  try {
    D.lazyLoad || t.$hostElement$[e](i);
  } catch (n) {
    he(n);
  }
}, Pc = (t, e) => e & 4 ? pt : e & 8 ? Kt : e & 16 ? pt.body : t, Bc = (t) => Tc ? {
  passive: (t & 1) !== 0,
  capture: (t & 2) !== 0
} : (t & 2) !== 0, xn = "http://www.w3.org/1999/xlink", Dt = (t, e = "") => () => {
}, wn = /* @__PURE__ */ new WeakMap(), Fc = (t, e, i) => {
  let n = Re.get(t);
  Lc && i ? (n = n || new CSSStyleSheet(), n.replace(e)) : n = e, Re.set(t, n);
}, _c = (t, e, i, n) => {
  let o = Do(e, i);
  const r = Re.get(o);
  if (t = t.nodeType === 11 ? t : pt, r)
    if (typeof r == "string") {
      t = t.head || t;
      let s = wn.get(t), a;
      s || wn.set(t, s = /* @__PURE__ */ new Set()), s.has(o) || (a = pt.createElement("style"), a.innerHTML = r, t.insertBefore(a, t.querySelector("link")), s && s.add(o));
    } else
      t.adoptedStyleSheets.includes(r) || (t.adoptedStyleSheets = [...t.adoptedStyleSheets, r]);
  return o;
}, Rc = (t) => {
  const e = t.$cmpMeta$, i = t.$hostElement$, n = e.$flags$, o = Dt("attachStyles", e.$tagName$), r = _c(Be && i.shadowRoot ? i.shadowRoot : i.getRootNode(), e, t.$modeName$);
  n & 10 && (i["s-sc"] = r, i.classList.add(r + "-h"), n & 2 && i.classList.add(r + "-s")), o();
}, Do = (t, e) => "sc-" + (e && t.$flags$ & 32 ? t.$tagName$ + "-" + e : t.$tagName$), Hc = (t) => gd.map((e) => e(t)).find((e) => !!e), kn = {}, jc = "http://www.w3.org/2000/svg", Xc = "http://www.w3.org/1999/xhtml", Yc = (t) => t != null, Ai = (t) => (t = typeof t, t === "object" || t === "function"), ie = (t, e, ...i) => {
  let n = null, o = null, r = null, s = !1, a = !1;
  const l = [], d = (c) => {
    for (let u = 0; u < c.length; u++)
      n = c[u], Array.isArray(n) ? d(n) : n != null && typeof n != "boolean" && ((s = typeof t != "function" && !Ai(n)) && (n = String(n)), s && a ? l[l.length - 1].$text$ += n : l.push(s ? Fe(null, n) : n), a = s);
  };
  if (d(i), e && (D.isDev && t === "input" && Vc(e), D.vdomKey && e.key && (o = e.key), D.slotRelocation && e.name && (r = e.name), D.vdomClass)) {
    const c = e.className || e.class;
    c && (e.class = typeof c != "object" ? c : Object.keys(c).filter((u) => c[u]).join(" "));
  }
  if (D.isDev && l.some(To) && ud(`The <Host> must be the single root component. Make sure:
- You are NOT using hostData() and <Host> in the same component.
- <Host> is used once, and it's the single root component of the render() function.`), D.vdomFunctional && typeof t == "function")
    return t(e === null ? {} : e, l, Wc);
  const h = Fe(t, null);
  return h.$attrs$ = e, l.length > 0 && (h.$children$ = l), D.vdomKey && (h.$key$ = o), D.slotRelocation && (h.$name$ = r), h;
}, Fe = (t, e) => {
  const i = {
    $flags$: 0,
    $tag$: t,
    $text$: e,
    $elm$: null,
    $children$: null
  };
  return D.vdomAttribute && (i.$attrs$ = null), D.vdomKey && (i.$key$ = null), D.slotRelocation && (i.$name$ = null), i;
}, Io = {}, To = (t) => t && t.$tag$ === Io, Wc = {
  forEach: (t, e) => t.map(yn).forEach(e),
  map: (t, e) => t.map(yn).map(e).map(qc)
}, yn = (t) => ({
  vattrs: t.$attrs$,
  vchildren: t.$children$,
  vkey: t.$key$,
  vname: t.$name$,
  vtag: t.$tag$,
  vtext: t.$text$
}), qc = (t) => {
  if (typeof t.vtag == "function") {
    const i = Object.assign({}, t.vattrs);
    return t.vkey && (i.key = t.vkey), t.vname && (i.name = t.vname), ie(t.vtag, i, ...t.vchildren || []);
  }
  const e = Fe(t.vtag, t.vtext);
  return e.$attrs$ = t.vattrs, e.$children$ = t.vchildren, e.$key$ = t.vkey, e.$name$ = t.vname, e;
}, Vc = (t) => {
  const e = Object.keys(t), i = e.indexOf("value");
  if (i === -1)
    return;
  const n = e.indexOf("type"), o = e.indexOf("min"), r = e.indexOf("max"), s = e.indexOf("step");
  (i < n || i < o || i < r || i < s) && md('The "value" prop of <input> should be set after "min", "max", "type" and "step"');
}, Cn = (t, e, i, n, o, r) => {
  if (i !== n) {
    let s = An(t, e), a = e.toLowerCase();
    if (e === "class") {
      const l = t.classList, d = En(i), h = En(n);
      l.remove(...d.filter((c) => c && !h.includes(c))), l.add(...h.filter((c) => c && !d.includes(c)));
    } else if (e === "style") {
      for (const l in i)
        (!n || n[l] == null) && (l.includes("-") ? t.style.removeProperty(l) : t.style[l] = "");
      for (const l in n)
        (!i || n[l] !== i[l]) && (l.includes("-") ? t.style.setProperty(l, n[l]) : t.style[l] = n[l]);
    } else if (e !== "key")
      if (e === "ref")
        n && n(t);
      else if (!t.__lookupSetter__(e) && e[0] === "o" && e[1] === "n")
        e[2] === "-" ? e = e.slice(3) : An(Kt, a) ? e = a.slice(2) : e = a[2] + e.slice(3), i && U.rel(t, e, i, !1), n && U.ael(t, e, n, !1);
      else {
        const l = Ai(n);
        if ((s || l && n !== null) && !o)
          try {
            if (t.tagName.includes("-"))
              t[e] = n;
            else {
              const h = n == null ? "" : n;
              e === "list" ? s = !1 : (i == null || t[e] != h) && (t[e] = h);
            }
          } catch {
          }
        let d = !1;
        a !== (a = a.replace(/^xlink\:?/, "")) && (e = a, d = !0), n == null || n === !1 ? (n !== !1 || t.getAttribute(e) === "") && (d ? t.removeAttributeNS(xn, e) : t.removeAttribute(e)) : (!s || r & 4 || o) && !l && (n = n === !0 ? "" : n, d ? t.setAttributeNS(xn, e, n) : t.setAttribute(e, n));
      }
  }
}, Uc = /\s/, En = (t) => t ? t.split(Uc) : [], Oo = (t, e, i, n) => {
  const o = e.$elm$.nodeType === 11 && e.$elm$.host ? e.$elm$.host : e.$elm$, r = t && t.$attrs$ || kn, s = e.$attrs$ || kn;
  for (n in r)
    n in s || Cn(o, n, r[n], void 0, i, e.$flags$);
  for (n in s)
    Cn(o, n, r[n], s[n], i, e.$flags$);
}, _e = (t, e, i, n) => {
  const o = e.$children$[i];
  let r = 0, s, a, l;
  if (Ao || ($i = !0, o.$tag$ === "slot" && (Ft && n.classList.add(Ft + "-s"), o.$flags$ |= o.$children$ ? 2 : 1)), o.$text$ !== null)
    s = o.$elm$ = pt.createTextNode(o.$text$);
  else if (o.$flags$ & 1)
    s = o.$elm$ = pt.createTextNode("");
  else {
    if (tt || (tt = o.$tag$ === "svg"), s = o.$elm$ = pt.createElementNS(tt ? jc : Xc, o.$flags$ & 2 ? "slot-fb" : o.$tag$), tt && o.$tag$ === "foreignObject" && (tt = !1), Oo(null, o, tt), Yc(Ft) && s["s-si"] !== Ft && s.classList.add(s["s-si"] = Ft), o.$children$)
      for (r = 0; r < o.$children$.length; ++r)
        a = _e(t, o, r, s), a && s.appendChild(a);
    o.$tag$ === "svg" ? tt = !1 : s.tagName === "foreignObject" && (tt = !0);
  }
  return s["s-hn"] = Ye, o.$flags$ & 3 && (s["s-sr"] = !0, s["s-cr"] = $o, s["s-sn"] = o.$name$ || "", l = t && t.$children$ && t.$children$[i], l && l.$tag$ === o.$tag$ && t.$elm$ && ce(t.$elm$, !1)), s;
}, ce = (t, e) => {
  U.$flags$ |= 1;
  const i = t.childNodes;
  for (let n = i.length - 1; n >= 0; n--) {
    const o = i[n];
    o["s-hn"] !== Ye && o["s-ol"] && (Po(o).insertBefore(o, zi(o)), o["s-ol"].remove(), o["s-ol"] = void 0, $i = !0), e && ce(o, e);
  }
  U.$flags$ &= -2;
}, Lo = (t, e, i, n, o, r) => {
  let s = t["s-cr"] && t["s-cr"].parentNode || t, a;
  for (s.shadowRoot && s.tagName === Ye && (s = s.shadowRoot); o <= r; ++o)
    n[o] && (a = _e(null, i, o, t), a && (n[o].$elm$ = a, s.insertBefore(a, zi(e))));
}, Mo = (t, e, i, n, o) => {
  for (; e <= i; ++e)
    (n = t[e]) && (o = n.$elm$, _o(n), Pe = !0, o["s-ol"] ? o["s-ol"].remove() : ce(o, !0), o.remove());
}, Gc = (t, e, i, n) => {
  let o = 0, r = 0, s = 0, a = 0, l = e.length - 1, d = e[0], h = e[l], c = n.length - 1, u = n[0], f = n[c], v, m;
  for (; o <= l && r <= c; )
    if (d == null)
      d = e[++o];
    else if (h == null)
      h = e[--l];
    else if (u == null)
      u = n[++r];
    else if (f == null)
      f = n[--c];
    else if (ke(d, u))
      _t(d, u), d = e[++o], u = n[++r];
    else if (ke(h, f))
      _t(h, f), h = e[--l], f = n[--c];
    else if (ke(d, f))
      (d.$tag$ === "slot" || f.$tag$ === "slot") && ce(d.$elm$.parentNode, !1), _t(d, f), t.insertBefore(d.$elm$, h.$elm$.nextSibling), d = e[++o], f = n[--c];
    else if (ke(h, u))
      (d.$tag$ === "slot" || f.$tag$ === "slot") && ce(h.$elm$.parentNode, !1), _t(h, u), t.insertBefore(h.$elm$, d.$elm$), h = e[--l], u = n[++r];
    else {
      for (s = -1, a = o; a <= l; ++a)
        if (e[a] && e[a].$key$ !== null && e[a].$key$ === u.$key$) {
          s = a;
          break;
        }
      s >= 0 ? (m = e[s], m.$tag$ !== u.$tag$ ? v = _e(e && e[r], i, s, t) : (_t(m, u), e[s] = void 0, v = m.$elm$), u = n[++r]) : (v = _e(e && e[r], i, r, t), u = n[++r]), v && Po(d.$elm$).insertBefore(v, zi(d.$elm$));
    }
  o > l ? Lo(t, n[c + 1] == null ? null : n[c + 1].$elm$, i, n, r, c) : r > c && Mo(e, o, l);
}, ke = (t, e) => t.$tag$ === e.$tag$ ? t.$tag$ === "slot" ? t.$name$ === e.$name$ : t.$key$ === e.$key$ : !1, zi = (t) => t && t["s-ol"] || t, Po = (t) => (t["s-ol"] ? t["s-ol"] : t).parentNode, _t = (t, e) => {
  const i = e.$elm$ = t.$elm$, n = t.$children$, o = e.$children$, r = e.$tag$, s = e.$text$;
  let a;
  s === null ? (tt = r === "svg" ? !0 : r === "foreignObject" ? !1 : tt, r === "slot" || Oo(t, e, tt), n !== null && o !== null ? Gc(i, n, e, o) : o !== null ? (t.$text$ !== null && (i.textContent = ""), Lo(i, null, e, o, 0, o.length - 1)) : n !== null && Mo(n, 0, n.length - 1), tt && r === "svg" && (tt = !1)) : (a = i["s-cr"]) ? a.parentNode.textContent = s : t.$text$ !== s && (i.data = s);
}, Bo = (t) => {
  const e = t.childNodes;
  let i, n, o, r, s, a;
  for (n = 0, o = e.length; n < o; n++)
    if (i = e[n], i.nodeType === 1) {
      if (i["s-sr"]) {
        for (s = i["s-sn"], i.hidden = !1, r = 0; r < o; r++)
          if (a = e[r].nodeType, e[r]["s-hn"] !== i["s-hn"] || s !== "") {
            if (a === 1 && s === e[r].getAttribute("slot")) {
              i.hidden = !0;
              break;
            }
          } else if (a === 1 || a === 3 && e[r].textContent.trim() !== "") {
            i.hidden = !0;
            break;
          }
      }
      Bo(i);
    }
}, dt = [], Fo = (t) => {
  let e, i, n, o, r, s, a = 0;
  const l = t.childNodes, d = l.length;
  for (; a < d; a++) {
    if (e = l[a], e["s-sr"] && (i = e["s-cr"]) && i.parentNode)
      for (n = i.parentNode.childNodes, o = e["s-sn"], s = n.length - 1; s >= 0; s--)
        i = n[s], !i["s-cn"] && !i["s-nr"] && i["s-hn"] !== e["s-hn"] && (Sn(i, o) ? (r = dt.find((h) => h.$nodeToRelocate$ === i), Pe = !0, i["s-sn"] = i["s-sn"] || o, r ? r.$slotRefNode$ = e : dt.push({
          $slotRefNode$: e,
          $nodeToRelocate$: i
        }), i["s-sr"] && dt.map((h) => {
          Sn(h.$nodeToRelocate$, i["s-sn"]) && (r = dt.find((c) => c.$nodeToRelocate$ === i), r && !h.$slotRefNode$ && (h.$slotRefNode$ = r.$slotRefNode$));
        })) : dt.some((h) => h.$nodeToRelocate$ === i) || dt.push({
          $nodeToRelocate$: i
        }));
    e.nodeType === 1 && Fo(e);
  }
}, Sn = (t, e) => t.nodeType === 1 ? t.getAttribute("slot") === null && e === "" || t.getAttribute("slot") === e : t["s-sn"] === e ? !0 : e === "", _o = (t) => {
  t.$attrs$ && t.$attrs$.ref && t.$attrs$.ref(null), t.$children$ && t.$children$.map(_o);
}, Kc = (t, e) => {
  const i = t.$hostElement$, n = t.$cmpMeta$, o = t.$vnode$ || Fe(null, null), r = To(e) ? e : ie(null, null, e);
  Ye = i.tagName, n.$attrsToReflect$ && (r.$attrs$ = r.$attrs$ || {}, n.$attrsToReflect$.map(([s, a]) => r.$attrs$[a] = i[s])), r.$tag$ = null, r.$flags$ |= 4, t.$vnode$ = r, r.$elm$ = o.$elm$ = i.shadowRoot || i, Ft = i["s-sc"], $o = i["s-cr"], Ao = Be && (n.$flags$ & 1) !== 0, Pe = !1, _t(o, r);
  {
    if (U.$flags$ |= 1, $i) {
      Fo(r.$elm$);
      let s, a, l, d, h, c, u = 0;
      for (; u < dt.length; u++)
        s = dt[u], a = s.$nodeToRelocate$, a["s-ol"] || (l = pt.createTextNode(""), l["s-nr"] = a, a.parentNode.insertBefore(a["s-ol"] = l, a));
      for (u = 0; u < dt.length; u++)
        if (s = dt[u], a = s.$nodeToRelocate$, s.$slotRefNode$) {
          for (d = s.$slotRefNode$.parentNode, h = s.$slotRefNode$.nextSibling, l = a["s-ol"]; l = l.previousSibling; )
            if (c = l["s-nr"], c && c["s-sn"] === a["s-sn"] && d === c.parentNode && (c = c.nextSibling, !c || !c["s-nr"])) {
              h = c;
              break;
            }
          (!h && d !== a.parentNode || a.nextSibling !== h) && a !== h && (!a["s-hn"] && a["s-ol"] && (a["s-hn"] = a["s-ol"].parentNode.nodeName), d.insertBefore(a, h));
        } else
          a.nodeType === 1 && (a.hidden = !0);
    }
    Pe && Bo(r.$elm$), U.$flags$ &= -2, dt.length = 0;
  }
}, Nc = (t, e) => {
}, Ro = (t, e) => (t.$flags$ |= 16, Nc(t, t.$ancestorComponent$), vd(() => Zc(t, e))), Zc = (t, e) => {
  const i = t.$hostElement$, n = Dt("scheduleUpdate", t.$cmpMeta$.$tagName$), o = i;
  let r;
  return e ? r = Yt(o, "componentWillLoad") : r = Yt(o, "componentWillUpdate"), r = $n(r, () => Yt(o, "componentWillRender")), n(), $n(r, () => Qc(t, o, e));
}, Qc = async (t, e, i) => {
  const n = t.$hostElement$, o = Dt("update", t.$cmpMeta$.$tagName$);
  n["s-rc"], i && Rc(t);
  const r = Dt("render", t.$cmpMeta$.$tagName$);
  Jc(t, e, n), r(), o(), td(t);
}, Jc = (t, e, i) => {
  try {
    vn = e, e = e.render && e.render(), t.$flags$ &= -17, t.$flags$ |= 2, (D.hasRenderFn || D.reflect) && (D.vdomRender || D.reflect) && (D.hydrateServerSide || Kc(t, e));
  } catch (a) {
    he(a, t.$hostElement$);
  }
  return vn = null, null;
}, td = (t) => {
  const e = t.$cmpMeta$.$tagName$, i = t.$hostElement$, n = Dt("postUpdate", e), o = i;
  t.$ancestorComponent$, Yt(o, "componentDidRender"), t.$flags$ & 64 ? (Yt(o, "componentDidUpdate"), n()) : (t.$flags$ |= 64, Yt(o, "componentDidLoad"), n());
}, Yt = (t, e, i) => {
  if (t && t[e])
    try {
      return t[e](i);
    } catch (n) {
      he(n);
    }
}, $n = (t, e) => t && t.then ? t.then(e) : e(), ed = (t, e) => t != null && !Ai(t) ? e & 4 ? t === "false" ? !1 : t === "" || !!t : e & 2 ? parseFloat(t) : e & 1 ? String(t) : t : t, id = (t, e) => We(t).$instanceValues$.get(e), nd = (t, e, i, n) => {
  const o = We(t), r = t, s = o.$instanceValues$.get(e), a = o.$flags$, l = r;
  i = ed(i, n.$members$[e][0]);
  const d = Number.isNaN(s) && Number.isNaN(i);
  if (i !== s && !d) {
    o.$instanceValues$.set(e, i);
    {
      if (n.$watchers$ && a & 128) {
        const c = n.$watchers$[e];
        c && c.map((u) => {
          try {
            l[u](i, s, e);
          } catch (f) {
            he(f, r);
          }
        });
      }
      if ((a & 18) === 2) {
        if (l.componentShouldUpdate && l.componentShouldUpdate(i, s, e) === !1)
          return;
        Ro(o, !1);
      }
    }
  }
}, od = (t, e, i) => {
  if (e.$members$) {
    t.watchers && (e.$watchers$ = t.watchers);
    const n = Object.entries(e.$members$), o = t.prototype;
    n.map(([r, [s]]) => {
      (s & 31 || s & 32) && Object.defineProperty(o, r, {
        get() {
          return id(this, r);
        },
        set(a) {
          nd(this, r, a, e);
        },
        configurable: !0,
        enumerable: !0
      });
    });
    {
      const r = /* @__PURE__ */ new Map();
      o.attributeChangedCallback = function(s, a, l) {
        U.jmp(() => {
          const d = r.get(s);
          if (this.hasOwnProperty(d))
            l = this[d], delete this[d];
          else if (o.hasOwnProperty(d) && typeof this[d] == "number" && this[d] == l)
            return;
          this[d] = l === null && typeof this[d] == "boolean" ? !1 : l;
        });
      }, t.observedAttributes = n.filter(([s, a]) => a[0] & 15).map(([s, a]) => {
        const l = a[1] || s;
        return r.set(l, s), a[0] & 512 && e.$attrsToReflect$.push([s, l]), l;
      });
    }
  }
  return t;
}, rd = async (t, e, i, n, o) => {
  if ((e.$flags$ & 32) === 0 && (o = t.constructor, e.$flags$ |= 32, customElements.whenDefined(i.$tagName$).then(() => e.$flags$ |= 128), o.style)) {
    let s = o.style;
    typeof s != "string" && (s = s[e.$modeName$ = Hc(t)]);
    const a = Do(i, e.$modeName$);
    if (!Re.has(a)) {
      const l = Dt("registerStyles", i.$tagName$);
      Fc(a, s, !!(i.$flags$ & 1)), l();
    }
  }
  e.$ancestorComponent$, (() => Ro(e, !0))();
}, sd = (t) => {
}, ad = (t) => {
  if ((U.$flags$ & 1) === 0) {
    const e = We(t), i = e.$cmpMeta$, n = Dt("connectedCallback", i.$tagName$);
    e.$flags$ & 1 ? (zo(t, e, i.$listeners$), sd(e.$lazyInstance$)) : (e.$flags$ |= 1, i.$flags$ & 12 && ld(t), i.$members$ && Object.entries(i.$members$).map(([o, [r]]) => {
      if (r & 31 && t.hasOwnProperty(o)) {
        const s = t[o];
        delete t[o], t[o] = s;
      }
    }), rd(t, e, i)), n();
  }
}, ld = (t) => {
  const e = t["s-cr"] = pt.createComment("");
  e["s-cn"] = !0, t.insertBefore(e, t.firstChild);
}, cd = (t) => {
  if ((U.$flags$ & 1) === 0) {
    const e = We(t);
    e.$rmListeners$ && (e.$rmListeners$.map((i) => i()), e.$rmListeners$ = void 0);
  }
}, dd = (t, e) => {
  const i = {
    $flags$: e[0],
    $tagName$: e[1]
  };
  D.member && (i.$members$ = e[2]), D.hostListener && (i.$listeners$ = e[3]), D.watchCallback && (i.$watchers$ = t.$watchers$), D.reflect && (i.$attrsToReflect$ = []), D.shadowDom && !Be && i.$flags$ & 1 && (i.$flags$ |= 8);
  const n = t.prototype.connectedCallback, o = t.prototype.disconnectedCallback;
  return Object.assign(t.prototype, {
    __registerHost() {
      pd(this, i);
    },
    connectedCallback() {
      ad(this), D.connectedCallback && n && n.call(this);
    },
    disconnectedCallback() {
      cd(this), D.disconnectedCallback && o && o.call(this);
    },
    __attachShadow() {
      Be ? D.shadowDelegatesFocus ? this.attachShadow({
        mode: "open",
        delegatesFocus: !!(i.$flags$ & 16)
      }) : this.attachShadow({ mode: "open" }) : this.shadowRoot = this;
    }
  }), t.is = i.$tagName$, od(t, i);
}, hd = (t) => {
  const e = new URL(t, U.$resourcesUrl$);
  return e.origin !== Kt.location.origin ? e.href : e.pathname;
}, Ho = /* @__PURE__ */ new WeakMap(), We = (t) => Ho.get(t), pd = (t, e) => {
  const i = {
    $flags$: 0,
    $hostElement$: t,
    $cmpMeta$: e,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  return D.isDev && (i.$renderCount$ = 0), D.method && D.lazyLoad && (i.$onInstancePromise$ = new Promise((n) => i.$onInstanceResolve$ = n)), D.asyncLoading && (i.$onReadyPromise$ = new Promise((n) => i.$onReadyResolve$ = n), t["s-p"] = [], t["s-rc"] = []), zo(t, i, e.$listeners$), Ho.set(t, i);
}, An = (t, e) => e in t, he = (t, e) => (0, console.error)(t, e), jo = D.isTesting ? ["STENCIL:"] : [
  "%cstencil",
  "color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px"
], ud = (...t) => console.error(...jo, ...t), md = (...t) => console.warn(...jo, ...t), Re = /* @__PURE__ */ new Map(), gd = [], zn = [], Xo = [], fd = (t, e) => (i) => {
  t.push(i), ui || (ui = !0, e && U.$flags$ & 4 ? bd(mi) : U.raf(mi));
}, Dn = (t) => {
  for (let e = 0; e < t.length; e++)
    try {
      t[e](performance.now());
    } catch (i) {
      he(i);
    }
  t.length = 0;
}, mi = () => {
  Dn(zn), Dn(Xo), (ui = zn.length > 0) && U.raf(mi);
}, bd = (t) => Oc().then(t), vd = /* @__PURE__ */ fd(Xo, !0), Ce = {
  isDev: !!D.isDev,
  isBrowser: !0,
  isServer: !1,
  isTesting: !!D.isTesting
};
let Ze;
const xd = () => {
  if (typeof window > "u")
    return /* @__PURE__ */ new Map();
  if (!Ze) {
    const t = window;
    t.Ionicons = t.Ionicons || {}, Ze = t.Ionicons.map = t.Ionicons.map || /* @__PURE__ */ new Map();
  }
  return Ze;
}, wd = (t) => {
  let e = Qe(t.src);
  return e || (e = Yo(t.name, t.icon, t.mode, t.ios, t.md), e ? kd(e) : t.icon && (e = Qe(t.icon), e || (e = Qe(t.icon[t.mode]), e)) ? e : null);
}, kd = (t) => {
  const e = xd().get(t);
  return e || hd(`svg/${t}.svg`);
}, Yo = (t, e, i, n, o) => (i = (i && ye(i)) === "ios" ? "ios" : "md", n && i === "ios" ? t = ye(n) : o && i === "md" ? t = ye(o) : (!t && e && !Wo(e) && (t = e), He(t) && (t = ye(t))), !He(t) || t.trim() === "" || t.replace(/[a-z]|-|\d/gi, "") !== "" ? null : t), Qe = (t) => He(t) && (t = t.trim(), Wo(t)) ? t : null, Wo = (t) => t.length > 0 && /(\/|\.)/.test(t), He = (t) => typeof t == "string", ye = (t) => t.toLowerCase(), yd = (t, e = []) => {
  const i = {};
  return e.forEach((n) => {
    t.hasAttribute(n) && (t.getAttribute(n) !== null && (i[n] = t.getAttribute(n)), t.removeAttribute(n));
  }), i;
}, Cd = (t) => {
  const e = document.createElement("div");
  e.innerHTML = t;
  for (let n = e.childNodes.length - 1; n >= 0; n--)
    e.childNodes[n].nodeName.toLowerCase() !== "svg" && e.removeChild(e.childNodes[n]);
  const i = e.firstElementChild;
  if (i && i.nodeName.toLowerCase() === "svg") {
    const n = i.getAttribute("class") || "";
    if (i.setAttribute("class", (n + " s-ion-icon").trim()), qo(i))
      return e.innerHTML;
  }
  return "";
}, qo = (t) => {
  if (t.nodeType === 1) {
    if (t.nodeName.toLowerCase() === "script")
      return !1;
    for (let e = 0; e < t.attributes.length; e++) {
      const i = t.attributes[e].name;
      if (He(i) && i.toLowerCase().indexOf("on") === 0)
        return !1;
    }
    for (let e = 0; e < t.childNodes.length; e++)
      if (!qo(t.childNodes[e]))
        return !1;
  }
  return !0;
}, Wt = /* @__PURE__ */ new Map(), In = /* @__PURE__ */ new Map(), Ed = (t, e) => {
  let i = In.get(t);
  if (!i)
    if (typeof fetch < "u" && typeof document < "u")
      i = fetch(t).then((n) => {
        if (n.ok)
          return n.text().then((o) => {
            o && e !== !1 && (o = Cd(o)), Wt.set(t, o || "");
          });
        Wt.set(t, "");
      }), In.set(t, i);
    else
      return Wt.set(t, ""), Promise.resolve();
  return i;
}, Sd = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}", $d = /* @__PURE__ */ dd(class extends Ic {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.iconName = null, this.inheritedAttributes = {}, this.isVisible = !1, this.mode = Ad(), this.lazy = !1, this.sanitize = !0, this.hasAriaHidden = () => {
      const { el: t } = this;
      return t.hasAttribute("aria-hidden") && t.getAttribute("aria-hidden") === "true";
    };
  }
  componentWillLoad() {
    this.inheritedAttributes = yd(this.el, ["aria-label"]);
  }
  connectedCallback() {
    this.waitUntilVisible(this.el, "50px", () => {
      this.isVisible = !0, this.loadIcon();
    });
  }
  disconnectedCallback() {
    this.io && (this.io.disconnect(), this.io = void 0);
  }
  waitUntilVisible(t, e, i) {
    if (Ce.isBrowser && this.lazy && typeof window < "u" && window.IntersectionObserver) {
      const n = this.io = new window.IntersectionObserver((o) => {
        o[0].isIntersecting && (n.disconnect(), this.io = void 0, i());
      }, { rootMargin: e });
      n.observe(t);
    } else
      i();
  }
  loadIcon() {
    if (Ce.isBrowser && this.isVisible) {
      const e = wd(this);
      e && (Wt.has(e) ? this.svgContent = Wt.get(e) : Ed(e, this.sanitize).then(() => this.svgContent = Wt.get(e)));
    }
    const t = this.iconName = Yo(this.name, this.icon, this.mode, this.ios, this.md);
    t && (this.ariaLabel = t.replace(/\-/g, " "));
  }
  render() {
    const { iconName: t, ariaLabel: e, inheritedAttributes: i } = this, n = this.mode || "md", o = this.flipRtl || t && (t.indexOf("arrow") > -1 || t.indexOf("chevron") > -1) && this.flipRtl !== !1;
    return ie(Io, Object.assign({ "aria-label": e !== void 0 && !this.hasAriaHidden() ? e : null, role: "img", class: Object.assign(Object.assign({ [n]: !0 }, zd(this.color)), { [`icon-${this.size}`]: !!this.size, "flip-rtl": !!o && this.el.ownerDocument.dir === "rtl" }) }, i), Ce.isBrowser && this.svgContent ? ie("div", { class: "icon-inner", innerHTML: this.svgContent }) : ie("div", { class: "icon-inner" }));
  }
  static get assetsDirs() {
    return ["svg"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      name: ["loadIcon"],
      src: ["loadIcon"],
      icon: ["loadIcon"]
    };
  }
  static get style() {
    return Sd;
  }
}, [1, "ion-icon", {
  mode: [1025],
  color: [1],
  ios: [1],
  md: [1],
  flipRtl: [4, "flip-rtl"],
  name: [513],
  src: [1],
  icon: [8],
  size: [1],
  lazy: [4],
  sanitize: [4],
  svgContent: [32],
  isVisible: [32],
  ariaLabel: [32]
}]), Ad = () => Ce.isBrowser && typeof document < "u" && document.documentElement.getAttribute("mode") || "md", zd = (t) => t ? {
  "ion-color": !0,
  [`ion-color-${t}`]: !0
} : null, Dd = $d, Tn = "update:modelValue", Je = "modelValue", Id = "routerLink", On = "navManager", Td = "router", Rt = Symbol(), ti = { default: Rt }, Ln = (t) => (t == null ? void 0 : t.split(" ")) || [], Od = (t, e, i = []) => {
  var n;
  return [...Array.from(((n = t.value) === null || n === void 0 ? void 0 : n.classList) || []), ...i].filter((o, r, s) => !e.has(o) && s.indexOf(o) === r);
}, Ct = (t, e, i = [], n, o, r) => {
  e !== void 0 && e();
  const s = qt((a, { attrs: l, slots: d, emit: h }) => {
    var c;
    let u = a[n];
    const f = Ht(), v = new Set(Ln(l.class)), m = (S) => {
      S.el && (Array.isArray(o) ? o : [o]).forEach((y) => {
        S.el.addEventListener(y.toLowerCase(), (z) => {
          u = (z == null ? void 0 : z.target)[n], h(Tn, u), r && h(r, z);
        });
      });
    }, w = fi(), $ = ((c = w == null ? void 0 : w.appContext) === null || c === void 0 ? void 0 : c.provides[On]) ? ii(On) : void 0, E = (S) => {
      const { routerLink: I } = a;
      if (I !== Rt)
        if ($ !== void 0) {
          let y = { event: S };
          for (const z in a) {
            const T = a[z];
            a.hasOwnProperty(z) && z.startsWith(Td) && T !== Rt && (y[z] = T);
          }
          $.navigate(y);
        } else
          console.warn("Tried to navigate, but no router was found. Make sure you have mounted Vue Router.");
    };
    return () => {
      u = a[n], Ln(l.class).forEach((z) => {
        v.add(z);
      });
      const S = a.onClick, I = (z) => {
        S !== void 0 && S(z), z.defaultPrevented || E(z);
      };
      let y = {
        ref: f,
        class: Od(f, v),
        onClick: I,
        onVnodeBeforeMount: o ? m : void 0
      };
      for (const z in a) {
        const T = a[z];
        a.hasOwnProperty(z) && T !== Rt && (y[z] = T);
      }
      return n && (a[Je] !== Rt ? y = Object.assign(Object.assign({}, y), { [n]: a[Je] }) : u !== Rt && (y = Object.assign(Object.assign({}, y), { [n]: u }))), ne(t, y, d.default && d.default());
    };
  });
  return s.displayName = t, s.props = {
    [Id]: ti
  }, i.forEach((a) => {
    s.props[a] = ti;
  }), n && (s.props[Je] = ti, s.emits = [Tn, r]), s;
}, Ld = /* @__PURE__ */ Ct("ion-button", Ta, [
  "color",
  "buttonType",
  "disabled",
  "expand",
  "fill",
  "routerDirection",
  "routerAnimation",
  "download",
  "href",
  "rel",
  "shape",
  "size",
  "strong",
  "target",
  "type",
  "ionFocus",
  "ionBlur"
]), Md = /* @__PURE__ */ Ct("ion-content", Ra, [
  "color",
  "fullscreen",
  "forceOverscroll",
  "scrollX",
  "scrollY",
  "scrollEvents",
  "ionScrollStart",
  "ionScroll",
  "ionScrollEnd"
]), Pd = /* @__PURE__ */ Ct("ion-header", _l, [
  "collapse",
  "translucent"
]), Bd = /* @__PURE__ */ Ct("ion-input", Wl, [
  "fireFocusEvents",
  "color",
  "accept",
  "autocapitalize",
  "autocomplete",
  "autocorrect",
  "autofocus",
  "clearInput",
  "clearOnEdit",
  "debounce",
  "disabled",
  "enterkeyhint",
  "inputmode",
  "max",
  "maxlength",
  "min",
  "minlength",
  "multiple",
  "name",
  "pattern",
  "placeholder",
  "readonly",
  "required",
  "spellcheck",
  "step",
  "size",
  "type",
  "value",
  "ionInput",
  "ionChange",
  "ionBlur",
  "ionFocus",
  "ionStyle"
], "value", "v-ion-change", "ionChange"), Fd = /* @__PURE__ */ Ct("ion-item", ql, [
  "color",
  "button",
  "detail",
  "detailIcon",
  "disabled",
  "download",
  "fill",
  "shape",
  "href",
  "rel",
  "lines",
  "counter",
  "routerAnimation",
  "routerDirection",
  "target",
  "type",
  "counterFormatter"
]), _d = /* @__PURE__ */ Ct("ion-label", Vl, [
  "color",
  "position",
  "ionColor",
  "ionStyle"
]), Rd = /* @__PURE__ */ Ct("ion-title", rc, [
  "color",
  "size",
  "ionStyle"
]), Hd = /* @__PURE__ */ Ct("ion-toolbar", dc, [
  "color"
]);
var bt;
(function(t) {
  t.WillEnter = "onIonViewWillEnter", t.DidEnter = "onIonViewDidEnter", t.WillLeave = "onIonViewWillLeave", t.DidLeave = "onIonViewDidLeave";
})(bt || (bt = {}));
ml + "", bt.WillEnter, gl + "", bt.DidEnter, fl + "", bt.WillLeave, bl + "", bt.DidLeave;
const Vo = (t, e) => {
  typeof customElements > "u" || customElements.get(t) || customElements.define(t, e);
}, jd = (t, e, i) => {
  if (i) {
    const n = i, o = n.proxy[t] || (n.proxy[t] = []);
    n.exposed && (n.exposed[t] = o);
    const r = (...s) => {
      if (!n.isUnmounted)
        return s ? e(...s) : e();
    };
    return o.push(r), r;
  } else
    console.warn("[@ionic/vue]: Ionic Lifecycle Hooks can only be used during execution of setup().");
}, qe = (t) => (e, i = fi()) => jd(t, e, i);
qe(bt.WillEnter);
qe(bt.DidEnter);
qe(bt.WillLeave);
qe(bt.DidLeave);
const Uo = (t) => {
  var e;
  return ((e = t.type) === null || e === void 0 ? void 0 : e.name) === "IonTabButton";
}, Go = (t) => {
  let e = [];
  return t.forEach((i) => {
    if (Uo(i))
      e.push(i);
    else if (Array.isArray(i.children) && i.children.length > 1) {
      const n = Go(i.children);
      e = [...e, ...n];
    }
  }), e;
};
qt({
  name: "IonTabBar",
  props: {
    _tabsWillChange: { type: Function, default: () => {
    } },
    _tabsDidChange: { type: Function, default: () => {
    } }
  },
  data() {
    return {
      tabState: {
        activeTab: void 0,
        tabs: {}
      },
      tabVnodes: []
    };
  },
  updated() {
    this.setupTabState(ii("navManager"));
  },
  methods: {
    setupTabState(t) {
      const e = this.$data.tabState, i = fi();
      (this.$data.tabVnodes = Go(i.subTree.children || [])).forEach((o) => {
        e.tabs[o.props.tab] = {
          originalHref: o.props.href,
          currentHref: o.props.href,
          ref: o
        }, o.component.props._getTabState = () => e;
      }), this.checkActiveTab(t);
    },
    checkActiveTab(t) {
      const e = t.getCurrentRouteInfo(), i = this.$data.tabVnodes, { tabs: n, activeTab: o } = this.$data.tabState, r = this.$data.tabState, a = Object.keys(n).find((c) => {
        const u = n[c].originalHref;
        return e.pathname.startsWith(u);
      });
      if (i.forEach((c) => {
        const u = n[c.props.tab];
        (!u || u.originalHref !== c.props.href) && (n[c.props.tab] = {
          originalHref: c.props.href,
          currentHref: c.props.href,
          ref: c
        });
      }), a && o) {
        const c = this.$data.tabState.tabs[o].currentHref;
        if (a !== o || c !== e.pathname) {
          const u = e.search ? `?${e.search}` : "";
          n[a] = Object.assign(Object.assign({}, n[a]), { currentHref: e.pathname + u });
        }
        e.routerAction === "pop" && a !== o && (n[o] = Object.assign(Object.assign({}, n[o]), { currentHref: n[o].originalHref }));
      }
      const l = i.find((c) => {
        var u;
        return Uo(c) && ((u = c.props) === null || u === void 0 ? void 0 : u.tab) === a;
      }), d = this.$refs.ionTabBar, h = a !== o;
      d && (l ? (h && this.$props._tabsWillChange(a), t.handleSetCurrentTab(a), d.selectedTab = r.activeTab = a, h && this.$props._tabsDidChange(a)) : d.selectedTab = r.activeTab = "");
    }
  },
  mounted() {
    const t = ii("navManager");
    this.setupTabState(t), t.registerHistoryChangeListener(() => this.checkActiveTab(t));
  },
  setup(t, { slots: e }) {
    return Vo("ion-tab-bar", Dc), () => ne("ion-tab-bar", { ref: "ionTabBar" }, e.default && e.default());
  }
});
const sh = Hr([]);
const Xd = /* @__PURE__ */ qt({
  name: "IonIcon",
  props: {
    color: String,
    flipRtl: Boolean,
    icon: String,
    ios: String,
    lazy: String,
    md: String,
    mode: String,
    name: String,
    size: String,
    src: String
  },
  setup(t, { slots: e }) {
    return Vo("ion-icon", Dd), () => {
      var i, n;
      const { icon: o, ios: r, md: s } = t;
      let a;
      return r || s ? Jn("ios") ? a = (i = r != null ? r : s) !== null && i !== void 0 ? i : o : a = (n = s != null ? s : r) !== null && n !== void 0 ? n : o : a = o, ne("ion-icon", Object.assign(Object.assign({}, t), { icon: a }), e);
    };
  }
}), gi = Symbol(), Mn = { default: gi }, Yd = (t, e, i = [], n) => {
  const s = n !== void 0 ? (() => qt((a, { slots: l, emit: d }) => {
    const h = [
      { componentEv: `${t}-will-present`, frameworkEv: "willPresent" },
      { componentEv: `${t}-did-present`, frameworkEv: "didPresent" },
      { componentEv: `${t}-will-dismiss`, frameworkEv: "willDismiss" },
      { componentEv: `${t}-did-dismiss`, frameworkEv: "didDismiss" }
    ];
    e !== void 0 && e();
    const c = Ht(), u = async () => {
      a.isOpen && await w(a);
    }, f = async (k, $) => {
      const E = k.props.isOpen, S = $.props.isOpen;
      E !== S && (E ? await w(a) : await m());
    }, v = async () => {
      await m();
    }, m = async () => {
      !c.value || (await c.value, c.value = c.value.dismiss(), await c.value, c.value = void 0);
    }, w = async (k) => {
      var $;
      if (c.value && await c.value, !(($ = c.value) === null || $ === void 0) && $.present) {
        await c.value.present();
        return;
      }
      let E = {};
      for (const I in k) {
        const y = k[I];
        k.hasOwnProperty(I) && y !== gi && (E[I] = y);
      }
      delete E.onWillPresent, delete E.onDidPresent, delete E.onWillDismiss, delete E.onDidDismiss;
      const S = l.default && l.default()[0];
      c.value = n.create(Object.assign(Object.assign({}, E), { component: S })), c.value = await c.value, h.forEach((I) => {
        c.value.addEventListener(I.componentEv, () => {
          d(I.frameworkEv);
        });
      }), await c.value.present();
    };
    return () => ne("div", {
      style: { display: "none" },
      onVnodeMounted: u,
      onVnodeUpdated: f,
      onVnodeBeforeUnmount: v,
      isOpen: a.isOpen === !0
    });
  }))() : (() => qt((a, { slots: l }) => {
    e !== void 0 && e();
    const d = Ht(!1), h = Ht();
    return jr(() => {
      h.value.addEventListener("will-present", () => d.value = !0), h.value.addEventListener("did-dismiss", () => d.value = !1);
    }), () => {
      let c = {};
      for (const u in a) {
        const f = a[u];
        a.hasOwnProperty(u) && f !== gi && (c[u] = f);
      }
      return ne(t, Object.assign(Object.assign({}, c), { ref: h }), d.value || c.keepContentsMounted ? l : void 0);
    };
  }))();
  return s.displayName = t, s.props = {
    isOpen: Mn
  }, i.forEach((a) => {
    s.props[a] = Mn;
  }), n !== void 0 && (s.emits = ["willPresent", "didPresent", "willDismiss", "didDismiss"]), s;
}, Wd = /* @__PURE__ */ Yd("ion-modal", Sc, ["animated", "backdropBreakpoint", "backdropDismiss", "breakpoints", "canDismiss", "enterAnimation", "handle", "handleBehavior", "htmlAttributes", "initialBreakpoint", "isOpen", "keepContentsMounted", "keyboardClose", "leaveAnimation", "mode", "presentingElement", "showBackdrop", "swipeToClose", "trigger"]);
const Ko = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z'/></svg>";
var ei, qd = function() {
  if (typeof window > "u")
    return /* @__PURE__ */ new Map();
  if (!ei) {
    var t = window;
    t.Ionicons = t.Ionicons || {}, ei = t.Ionicons.map = t.Ionicons.map || /* @__PURE__ */ new Map();
  }
  return ei;
}, Vd = function(t) {
  var e = qd();
  Object.keys(t).forEach(function(i) {
    return e.set(i, t[i]);
  });
};
function Ud(t, e, i = "modelValue") {
  return Pn({
    get: () => t[i],
    set: (n) => e(`update:${i}`, n)
  });
}
Vd({
  "caret-down-outline": Ko
});
const Gd = qt({
  name: "SearchSelect",
  components: {
    IonHeader: Pd,
    IonTitle: Rd,
    IonToolbar: Hd,
    IonItem: Fd,
    IonLabel: _d,
    IonButton: Ld,
    IonInput: Bd,
    IonContent: Md,
    IonIcon: Xd,
    IonModal: Wd
  },
  props: {
    optionsProp: Array,
    fieldNameProp: String,
    modelValue: String
  },
  setup(t, { emit: e }) {
    const i = Ri(t, "optionsProp").value, n = Ri(t, "fieldNameProp").value;
    let o = Ud(t, e, "modelValue"), r = Ht(!1), s = Ht("");
    const a = () => {
      r.value = !0;
    }, l = () => {
      r.value = !1;
    }, d = (c, u) => u ? c.filter((f) => f.toLowerCase().includes(u)) : c, h = () => d(i, s.value);
    return {
      filteredOptions: Pn(() => h()),
      options: i,
      selectedOption: o,
      fieldName: n,
      isOpen: r,
      searchQuery: s,
      openModal: a,
      submit: l,
      caretDownOutline: Ko
    };
  }
}), Kd = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [n, o] of e)
    i[n] = o;
  return i;
}, Nd = {
  key: 0,
  style: { "font-size": "16px" }
}, Zd = {
  key: 1,
  style: { "font-size": "16px" }
};
function Qd(t, e, i, n, o, r) {
  const s = ft("ion-icon"), a = ft("ion-title"), l = ft("ion-toolbar"), d = ft("ion-header"), h = ft("ion-label"), c = ft("ion-input"), u = ft("ion-item"), f = ft("ion-button"), v = ft("ion-content"), m = ft("ion-modal");
  return Jt(), ue("div", {
    onClick: e[2] || (e[2] = (...w) => t.openModal && t.openModal(...w)),
    id: "open-modal",
    style: { display: "flex", "align-items": "center" }
  }, [
    t.selectedOption ? (Jt(), ue("h4", Nd, " To: " + te(t.selectedOption), 1)) : (Jt(), ue("h4", Zd, " Select " + te(t.fieldName), 1)),
    nt(s, {
      name: "caret-down-outline",
      style: { "margin-left": "8px", "font-size": "14px", color: "grey", "padding-top": "8px" }
    }),
    nt(m, {
      "is-open": t.isOpen,
      onDidDismiss: t.submit
    }, {
      default: at(() => [
        nt(d, null, {
          default: at(() => [
            nt(l, null, {
              default: at(() => [
                nt(a, null, {
                  default: at(() => [
                    me(" Select " + te(t.fieldName) + " " + te(t.selectedOption ? t.selectedOption : ""), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        nt(v, null, {
          default: at(() => [
            nt(u, null, {
              default: at(() => [
                nt(h, null, {
                  default: at(() => [
                    me(" Search ")
                  ]),
                  _: 1
                }),
                nt(c, {
                  modelValue: t.searchQuery,
                  "onUpdate:modelValue": e[0] || (e[0] = (w) => t.searchQuery = w),
                  placeholder: "Search"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            nt(u, null, {
              default: at(() => [
                nt(f, {
                  color: "secondary",
                  onClick: e[1] || (e[1] = (w) => t.submit())
                }, {
                  default: at(() => [
                    me("Submit")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            (Jt(!0), ue(Xr, null, Yr(t.filteredOptions, (w) => (Jt(), Wr(u, {
              key: w,
              onClick: (k) => t.selectedOption = w,
              color: t.selectedOption == w ? "success" : ""
            }, {
              default: at(() => [
                nt(h, null, {
                  default: at(() => [
                    me(te(w), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["onClick", "color"]))), 128))
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["is-open", "onDidDismiss"])
  ]);
}
const ah = /* @__PURE__ */ Kd(Gd, [["render", Qd]]);
export {
  ah as IonSearchSelect
};

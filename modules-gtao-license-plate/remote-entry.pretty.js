try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="0807f7c3-ba92-4363-97a3-423cb89e6f89",
  e._sentryDebugIdIdentifier="sentry-dbid-0807f7c3-ba92-4363-97a3-423cb89e6f89")
}catch(e){
}{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  };
  e._sentryModuleMetadata=e._sentryModuleMetadata||{
  },
  e._sentryModuleMetadata[(new e.Error).stack]=Object.assign({
  },
  e._sentryModuleMetadata[(new e.Error).stack],
  {
    release:"67459d972fa138db6c3b11c6d2cf8740c1d8f79b",
    packageName:"@rockstargames/modules-gtao-license-plate",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"67459d972fa138db6c3b11c6d2cf8740c1d8f79b"
},
System.register([],
function(e,
t){
  return{
    execute:function(){
      e((()=>{
        var e={
          5946(e,
          t,
          r){
            (0,
            r(9e3).w)(1)
          },
          9e3(e,
          t,
          r){
            const n=r(1364).y;
            t.w=function(e){
              if(e||(e=1),
              !r.y.meta||!r.y.meta.url)throw console.error("__system_context__",
              r.y),
              Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p=n(r.y.meta.url,
              e)
            }
          },
          4769(e,
          t,
          r){
            r(5946)
          },
          1364(e,
          t,
          r){
            t.y=function(e,
            t){
              var r=document.createElement("a");
              r.href=e;
              for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,
              a=0,
              o=n.length;
              a!==t&&o>=0;
              )"/"===n[--o]&&a++;
              if(a!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+a+") in the URL path "+e);
              var f=n.slice(0,
              o+1);
              return r.protocol+"//"+r.host+f
            };
            Number.isInteger
          },
          5819(e,
          t,
          r){
            "use strict";
            const n={
              "./index":()=>Promise.all([r.e(8894),
              r.e(7098),
              r.e(4070),
              r.e(5748),
              r.e(1551),
              r.e(7281),
              r.e(5472),
              r.e(2272),
              r.e(1518),
              r.e(7708),
              r.e(3788),
              r.e(2942),
              r.e(7445)]).then(()=>()=>r(7445))
            },
            a=(e,
            t)=>(r.R=t,
            t=r.o(n,
            e)?n[e]():Promise.resolve().then(()=>{
              throw new Error('Module "'+e+'" does not exist in container.')
            }),
            r.R=void 0,
            t),
            o=(e,
            t)=>{
              if(!r.S)return;
              const n="default",
              a=r.S[n];
              if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");
              return r.S[n]=e,
              r.I(n,
              t)
            };
            r.d(t,
            {
              get:()=>a,
              init:()=>o
            })
          }
        };
        const r={
        };
        function n(t){
          const a=r[t];
          if(void 0!==a)return a.exports;
          const o=r[t]={
            id:t,
            loaded:!1,
            exports:{
            }
          };
          return e[t].call(o.exports,
          o,
          o.exports,
          n),
          o.loaded=!0,
          o.exports
        }return n.m=e,
        n.c=r,
        n.y=t,
        n.amdO={
        },
        n.n=e=>{
          const t=e&&e.__esModule?()=>e.default:()=>e;
          return n.d(t,
          {
            a:t
          }),
          t
        },
        (()=>{
          const e=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;
          let t;
          n.t=function(r,
          a){
            if(1&a&&(r=this(r)),
            8&a)return r;
            if("object"==typeof r&&r){
              if(4&a&&r.__esModule)return r;
              if(16&a&&"function"==typeof r.then)return r
            }const o=Object.create(null);
            n.r(o);
            const f={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var c=2&a&&r;
            ("object"==typeof c||"function"==typeof c)&&!~t.indexOf(c);
            c=e(c))Object.getOwnPropertyNames(c).forEach(e=>f[e]=()=>r[e]);
            return f.default=()=>r,
            n.d(o,
            f),
            o
          }
        })(),
        n.d=(e,
        t)=>{
          if(Array.isArray(t))for(var r=0;
          r<t.length;
          ){
            var a=t[r++],
            o=t[r++];
            n.o(e,
            a)?0===o&&r++:0===o?Object.defineProperty(e,
            a,
            {
              enumerable:!0,
              value:t[r++]
            }):Object.defineProperty(e,
            a,
            {
              enumerable:!0,
              get:o
            })
          }else for(var a in t)n.o(t,
          a)&&!n.o(e,
          a)&&Object.defineProperty(e,
          a,
          {
            enumerable:!0,
            get:t[a]
          })
        },
        n.f={
        },
        n.e=e=>Promise.all(Object.keys(n.f).reduce((t,
        r)=>(n.f[r](e,
        t),
        t),
        [])),
        n.u=e=>"js/"+{
          16:"fa4465c9782bc9beb9713b8e319a837f",
          775:"8ea7b68738bbe2f4e3aa9b1faa99b246",
          1294:"0718d76a40fac0dae36275c15be416a6",
          1603:"1512fea27163bea4aeb6a58bf1476c01",
          1990:"8eb72209b190e0f499c0f8282753fccc",
          2042:"a0a1d3b4449ffaec157be1d40e75f7cf",
          2272:"b18ab946950a7e1c23467731170a6eb8",
          3085:"4c68b28816c9017a2657f0b16e6ccf3f",
          3189:"4d68d8436a7415e5fc795d68b771ea17",
          3244:"5dc9ae709e6fd116114ec31507ff184d",
          3529:"a86470c6952ccbedf5aca4a2af8b64be",
          3615:"cf78a7a7a99b9fa36336b1bc7199873d",
          3793:"9cdf7616488b202d542c088442db1ef9",
          3819:"247ac1bb491a75d295a143b1981e1c6d",
          3888:"0022ea64eb0da3d602f96b38251ec8cd",
          3905:"7497de2cc1d54761a33ddec6a53a8858",
          4070:"711375625da9f75e25760fa53c3e3378",
          4074:"43f3f293fe77ee1c909fb8554aa38398",
          4427:"93cd36fc18f69bcfc56084fc86252e74",
          4696:"7e7824e2e746219b1a9839071fd7ded0",
          4732:"1faaf1c21880be14e1f5264731191073",
          4921:"2daab85bd763ae045947a6dc0fed3ab3",
          5826:"9abee81a7dc6a96302002a9977523d0e",
          5996:"d9dc557b0b3eb0adf8927028b2a8b5b6",
          6198:"65d1ef7c6dc4369a40b0db4a09bec300",
          6592:"e8042ef38793f33220e7f5a2430c2be8",
          6918:"1d40bd2933206ef7bc4fec12dd7e4811",
          6948:"04d3815ab0a5e5c3a35cc7ddac8115b4",
          7098:"4c6970b689eb0018852bb99ea6c7459a",
          7302:"5700393cffadb9fb4a899e7e54498ef1",
          7445:"69d8e3a66fadf95f89f23734a485d0c8",
          7850:"e6fd454ee1bb743336b96a817f96ca15",
          8509:"10cb7297276b7c465ac578182b4f62cb",
          8894:"f11e943e339d4892504f316aa24a957b",
          9136:"99d962d409811b92ead865e80f409a60",
          9190:"7a0447f28e0a6db917cf824eb0248ba2",
          9343:"b7bc3d51d1c9684122cc5ba1d166970c",
          9361:"72eaef9981598bda69a04447245d162f",
          9547:"fc5b595ea8eefac0064ce27c4d72dce2",
          9680:"c759de7a2136901396ae09d73ed24be3",
          9830:"87482eafca4e3742e0d66fe312deb1ed",
          9848:"e3e891ff39726918387d54059e781be3"
        }[e]+".js",
        n.miniCssF=e=>"css/"+{
          6198:"9826f371209fb6759385df98cfbd7b04",
          7445:"ed3cf0ed48fa45045415f729d775edca"
        }[e]+".css",
        n.g=function(){
          if("object"==typeof globalThis)return globalThis;
          try{
            return this||new Function("return this")()
          }catch(e){
            if("object"==typeof window)return window
          }
        }(),
        n.o=(e,
        t)=>Object.prototype.hasOwnProperty.call(e,
        t),
        (()=>{
          const e={
          },
          t="@rockstargames/modules-gtao-license-plate:";
          n.l=(r,
          a,
          o,
          f)=>{
            if(e[r])return void e[r].push(a);
            let c,
            d;
            if(void 0!==o){
              const e=document.getElementsByTagName("script");
              for(var s=0;
              s<e.length;
              s++){
                const n=e[s];
                if(n.getAttribute("src")==r||n.getAttribute("data-webpack")==t+o){
                  c=n;
                  break
                }
              }
            }c||(d=!0,
            c=document.createElement("script"),
            c.charset="utf-8",
            n.nc&&c.setAttribute("nonce",
            n.nc),
            c.setAttribute("data-webpack",
            t+o),
            c.src=r),
            e[r]=[a];
            const l=(t,
            n)=>{
              c.onerror=c.onload=null,
              clearTimeout(i);
              const a=e[r];
              if(delete e[r],
              c.parentNode?.removeChild(c),
              a?.forEach(e=>e(n)),
              t)return t(n)
            },
            i=setTimeout(l.bind(null,
            void 0,
            {
              type:"timeout",
              target:c
            }),
            12e4);
            c.onerror=l.bind(null,
            c.onerror),
            c.onload=l.bind(null,
            c.onload),
            d&&document.head.appendChild(c)
          }
        })(),
        n.r=e=>{
          Symbol.toStringTag&&Object.defineProperty(e,
          Symbol.toStringTag,
          {
            value:"Module"
          }),
          Object.defineProperty(e,
          "__esModule",
          {
            value:!0
          })
        },
        n.nmd=e=>(e.paths=[],
        e.children||(e.children=[]),
        e),
        (()=>{
          n.S={
          };
          const e={
          },
          t={
          };
          n.I=(r,
          a)=>{
            a||(a=[]);
            let o=t[r];
            if(o||(o=t[r]={
            }),
            a.indexOf(o)>=0)return;
            if(a.push(o),
            e[r])return e[r];
            n.o(n.S,
            r)||(n.S[r]={
            });
            const f=n.S[r],
            c="@rockstargames/modules-gtao-license-plate",
            d=(e,
            t,
            r,
            n)=>{
              const a=f[e]=f[e]||{
              },
              o=a[t];
              (!o||!o.loaded&&(!n!=!o.eager?n:c>o.from))&&(a[t]={
                get:r,
                from:c,
                eager:!!n
              })
            },
            s=[];
            return"default"===r&&(d("@foundry/react",
            "6.6.1",
            ()=>Promise.all([n.e(775),
            n.e(8894),
            n.e(6198),
            n.e(5748),
            n.e(7281),
            n.e(1518),
            n.e(7708),
            n.e(4921)]).then(()=>()=>n(6198))),
            d("@react-spring/web",
            "10.1.2",
            ()=>Promise.all([n.e(3244),
            n.e(5748),
            n.e(7281)]).then(()=>()=>n(3244))),
            d("@react-three/drei",
            "10.7.8",
            ()=>Promise.all([n.e(1990),
            n.e(5748),
            n.e(1551),
            n.e(7281),
            n.e(1518),
            n.e(4923),
            n.e(2942)]).then(()=>()=>n(1990))),
            d("@react-three/fiber",
            "9.7.0",
            ()=>Promise.all([n.e(4074),
            n.e(5748),
            n.e(1551)]).then(()=>()=>n(4074))),
            d("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([n.e(775),
            n.e(5748),
            n.e(5472),
            n.e(5996)]).then(()=>()=>n(5996))),
            d("@rsgweb/rockstar-account",
            "0.0.0",
            ()=>Promise.all([n.e(8894),
            n.e(7098),
            n.e(6918),
            n.e(5748),
            n.e(5472),
            n.e(2272),
            n.e(8509),
            n.e(3788)]).then(()=>()=>n(8509))),
            d("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([n.e(8894),
            n.e(7098),
            n.e(3905),
            n.e(5748),
            n.e(5472),
            n.e(2272),
            n.e(6948)]).then(()=>()=>n(6948))),
            d("@use-gesture/react",
            "10.3.1",
            ()=>Promise.all([n.e(9136),
            n.e(5748)]).then(()=>()=>n(9136))),
            d("gsap",
            "3.12.5",
            ()=>n.e(3529).then(()=>()=>n(3529))),
            d("jotai",
            "2.20.2",
            ()=>Promise.all([n.e(9547),
            n.e(5748)]).then(()=>()=>n(1928))),
            d("lodash-es",
            "4.18.1",
            ()=>n.e(2042).then(()=>()=>n(2042))),
            d("react-dom",
            "19.2.8",
            ()=>Promise.all([n.e(5748),
            n.e(9848)]).then(()=>()=>n(9848))),
            d("react-router",
            "7.18.2",
            ()=>Promise.all([n.e(9361),
            n.e(5748)]).then(()=>()=>n(9361))),
            d("react",
            "19.2.8",
            ()=>n.e(3888).then(()=>()=>n(3888))),
            d("stackblur-canvas",
            "2.7.0",
            ()=>n.e(9830).then(()=>()=>n(9830))),
            d("three-stdlib",
            "2.36.1",
            ()=>Promise.all([n.e(9190),
            n.e(1551)]).then(()=>()=>n(6809))),
            d("three",
            "0.182.0",
            ()=>n.e(3793).then(()=>()=>n(3793)))),
            e[r]=s.length?Promise.all(s).then(()=>e[r]=1):1
          }
        })(),
        n.cjs=e=>{
          const t={
            exports:{
            }
          };
          return e.call(t.exports,
          t,
          t.exports),
          t.exports
        },
        (()=>{
          let e;
          n.g.importScripts&&(e=n.g.location+"");
          const t=n.g.document;
          if(!e&&t&&("SCRIPT"===t.currentScript?.tagName.toUpperCase()&&(e=t.currentScript.src),
          !e)){
            const r=t.getElementsByTagName("script");
            if(r.length){
              let t=r.length-1;
              for(;
              t>-1&&(!e||!/^http(s?):/.test(e));
              )e=r[t--].src
            }
          }if(!e)throw new Error("Automatic publicPath is not supported in this browser");
          e=e.replace(/^blob:/,
          "").replace(/#.*$/,
          "").replace(/\?.*$/,
          "").replace(/\/[^\/]+$/,
          "/"),
          n.p=e
        })(),
        (()=>{
          var e=e=>{
            var t=e=>e.split(".").map(e=>+e==e?+e:e),
            r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            n=r[1]?t(r[1]):[];
            return r[2]&&(n.length++,
            n.push.apply(n,
            t(r[2]))),
            r[3]&&(n.push([]),
            n.push.apply(n,
            t(r[3]))),
            n
          },
          t=e=>{
            var r=e[0],
            n="";
            if(1===e.length)return"*";
            if(r+.5){
              n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";
              for(var a=1,
              o=1;
              o<e.length;
              o++)a--,
              n+="u"==(typeof(c=e[o]))[0]?"-":(a>0?".":"")+(a=2,
              c);
              return n
            }var f=[];
            for(o=1;
            o<e.length;
            o++){
              var c=e[o];
              f.push(0===c?"not("+d()+")":1===c?"("+d()+" || "+d()+")":2===c?f.pop()+" "+f.pop():t(c))
            }return d();
            function d(){
              return f.pop().replace(/^\((.+)\)$/,
              "$1")
            }
          },
          r=(t,
          n)=>{
            if(0 in t){
              n=e(n);
              var a=t[0],
              o=a<0;
              o&&(a=-a-1);
              for(var f=0,
              c=1,
              d=!0;
              ;
              c++,
              f++){
                var s,
                l,
                i=c<t.length?(typeof t[c])[0]:"";
                if(f>=n.length||"o"==(l=(typeof(s=n[f]))[0]))return!d||("u"==i?c>a&&!o:""==i!=o);
                if("u"==l){
                  if(!d||"u"!=i)return!1
                }else if(d)if(i==l)if(c<=a){
                  if(s!=t[c])return!1
                }else{
                  if(o?s>t[c]:s<t[c])return!1;
                  s!=t[c]&&(d=!1)
                }else if("s"!=i&&"n"!=i){
                  if(o||c<=a)return!1;
                  d=!1,
                  c--
                }else{
                  if(c<=a||l<i!=o)return!1;
                  d=!1
                }else"s"!=i&&"n"!=i&&(d=!1,
                c--)
              }
            }var u=[],
            b=u.pop.bind(u);
            for(f=1;
            f<t.length;
            f++){
              var h=t[f];
              u.push(1==h?b()|b():2==h?b()&b():h?r(h,
              n):!b())
            }return!!b()
          };
          const a=(e,
          t)=>e&&n.o(e,
          t),
          o=e=>(e.loaded=1,
          e.get()),
          f=(t,
          r,
          n)=>{
            const a=n?(e=>Object.keys(e).reduce((t,
            r)=>(e[r].eager&&(t[r]=e[r]),
            t),
            {
            }))(t[r]):t[r];
            return Object.keys(a).reduce((t,
            r)=>!t||!a[t].loaded&&((t,
            r)=>{
              t=e(t),
              r=e(r);
              for(var n=0;
              ;
              ){
                if(n>=t.length)return n<r.length&&"u"!=(typeof r[n])[0];
                var a=t[n],
                o=(typeof a)[0];
                if(n>=r.length)return"u"==o;
                var f=r[n],
                c=(typeof f)[0];
                if(o!=c)return"o"==o&&"n"==c||"s"==c||"u"==o;
                if("o"!=o&&"u"!=o&&a!=f)return a<f;
                n++
              }
            })(t,
            r)?r:t,
            0)
          },
          c=e=>function(t,
          r,
          a,
          o,
          f){
            const c=n.I(t);
            return c?.then&&!a?c.then(e.bind(e,
            t,
            n.S[t],
            r,
            !1,
            o,
            f)):e(t,
            n.S[t],
            r,
            a,
            o,
            f)
          },
          d=(e,
          t,
          r)=>r?r():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          s=c((e,
          t,
          r,
          n,
          c)=>{
            if(!a(t,
            r))return d(e,
            r,
            c);
            const s=f(t,
            r,
            n);
            return o(t[r][s])
          }),
          l=c((e,
          n,
          c,
          s,
          l,
          i)=>{
            if(!a(n,
            c))return d(e,
            c,
            i);
            const u=f(n,
            c,
            s);
            return r(l,
            u)||(b=((e,
            r,
            n,
            a)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(a)+")")(n,
            c,
            u,
            l),
            "undefined"!=typeof console&&console.warn&&console.warn(b)),
            o(n[c][u]);
            var b
          }),
          i={
          },
          u={
            5748:()=>s("default",
            "react",
            !1,
            ()=>n.e(3888).then(()=>()=>n(3888))),
            1551:()=>s("default",
            "three",
            !1,
            ()=>n.e(3793).then(()=>()=>n(3793))),
            7281:()=>s("default",
            "react-dom",
            !1,
            ()=>n.e(3819).then(()=>()=>n(9848))),
            5472:()=>s("default",
            "lodash-es",
            !1,
            ()=>n.e(2042).then(()=>()=>n(2042))),
            4564:()=>s("default",
            "@rsgweb/locale-tools",
            !1,
            ()=>Promise.all([n.e(775),
            n.e(3615)]).then(()=>()=>n(5996))),
            4612:()=>s("default",
            "react-router",
            !1,
            ()=>n.e(9361).then(()=>()=>n(9361))),
            1518:()=>l("default",
            "@use-gesture/react",
            !1,
            [1,
            10,
            3,
            1],
            ()=>n.e(9136).then(()=>()=>n(9136))),
            5460:()=>s("default",
            "@react-spring/web",
            !1,
            ()=>n.e(3244).then(()=>()=>n(3244))),
            5501:()=>s("default",
            "gsap",
            !1,
            ()=>n.e(3529).then(()=>()=>n(3529))),
            3788:()=>s("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([n.e(3905),
            n.e(6948)]).then(()=>()=>n(6948))),
            2942:()=>s("default",
            "@react-three/fiber",
            !1,
            ()=>n.e(4074).then(()=>()=>n(4074))),
            227:()=>s("default",
            "@foundry/react",
            !1,
            ()=>Promise.all([n.e(775),
            n.e(6198)]).then(()=>()=>n(6198))),
            4876:()=>s("default",
            "jotai",
            !1,
            ()=>n.e(9547).then(()=>()=>n(1928))),
            6205:()=>l("default",
            "@react-three/drei",
            !1,
            [1,
            10,
            7,
            8],
            ()=>Promise.all([n.e(1990),
            n.e(4923)]).then(()=>()=>n(1990))),
            7411:()=>l("default",
            "stackblur-canvas",
            !1,
            [1,
            2,
            7,
            0],
            ()=>n.e(9830).then(()=>()=>n(9830))),
            8130:()=>s("default",
            "@rsgweb/rockstar-account",
            !1,
            ()=>Promise.all([n.e(6918),
            n.e(8509)]).then(()=>()=>n(8509))),
            4923:()=>l("default",
            "three-stdlib",
            !1,
            [1,
            2,
            36,
            1],
            ()=>n.e(9190).then(()=>()=>n(6809)))
          },
          b={
            1518:[1518],
            1551:[1551],
            2272:[4564,
            4612],
            2942:[2942],
            3788:[3788],
            4923:[4923],
            5472:[5472],
            5748:[5748],
            7281:[7281],
            7445:[227,
            4876,
            6205,
            7411,
            8130],
            7708:[5460,
            5501]
          },
          h={
          };
          n.f.consumes=(e,
          t)=>{
            n.o(b,
            e)&&b[e].forEach(e=>{
              if(n.o(i,
              e))return t.push(i[e]);
              if(!h[e]){
                const r=t=>{
                  i[e]=0,
                  n.m[e]=r=>{
                    delete n.c[e],
                    r.exports=t()
                  }
                };
                h[e]=!0;
                const a=t=>{
                  delete i[e],
                  n.m[e]=r=>{
                    throw delete n.c[e],
                    t
                  }
                };
                try{
                  const n=u[e]();
                  n.then?t.push(i[e]=n.then(r).catch(a)):r(n)
                }catch(e){
                  a(e)
                }
              }
            })
          }
        })(),
        (()=>{
          if("undefined"!=typeof document){
            var e={
              6502:0
            };
            n.f.miniCss=(t,
            r)=>{
              e[t]?r.push(e[t]):0!==e[t]&&{
                6198:1,
                7445:1
              }[t]&&r.push(e[t]=(e=>new Promise((t,
              r)=>{
                var a=n.miniCssF(e),
                o=n.p+a;
                if(((e,
                t)=>{
                  for(var r=document.getElementsByTagName("link"),
                  n=0;
                  n<r.length;
                  n++){
                    var a=(f=r[n]).getAttribute("data-href")||f.getAttribute("href");
                    if("stylesheet"===f.rel&&(a===e||a===t))return f
                  }var o=document.getElementsByTagName("style");
                  for(n=0;
                  n<o.length;
                  n++){
                    var f;
                    if((a=(f=o[n]).getAttribute("data-href"))===e||a===t)return f
                  }
                })(a,
                o))return t();
                ((e,
                t,
                r,
                a,
                o)=>{
                  var f=document.createElement("link");
                  f.rel="stylesheet",
                  f.type="text/css",
                  n.nc&&(f.nonce=n.nc),
                  f.onerror=f.onload=r=>{
                    if(f.onerror=f.onload=null,
                    "load"===r.type)a();
                    else{
                      var n=r&&r.type,
                      c=r&&r.target&&r.target.href||t,
                      d=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+c+")");
                      d.name="ChunkLoadError",
                      d.code="CSS_CHUNK_LOAD_FAILED",
                      d.type=n,
                      d.request=c,
                      f.parentNode&&f.parentNode.removeChild(f),
                      o(d)
                    }
                  },
                  f.href=t,
                  document.head.appendChild(f)
                })(e,
                o,
                0,
                t,
                r)
              }))(t).then(()=>{
                e[t]=0
              },
              r=>{
                throw delete e[t],
                r
              }))
            }
          }
        })(),
        (()=>{
          const e={
            6502:0
          };
          n.f.j=(t,
          r)=>{
            let a=n.o(e,
            t)?e[t]:void 0;
            if(0!==a)if(a)r.push(a[2]);
            else if(/^(15(18|51)|(378|574|770)8|2942|4923|5472|7281)$/.test(t))e[t]=0;
            else{
              const o=new Promise((r,
              n)=>a=e[t]=[r,
              n]);
              r.push(a[2]=o);
              const f=n.p+n.u(t),
              c=new Error,
              d=r=>{
                if(n.o(e,
                t)&&(a=e[t],
                0!==a&&(e[t]=void 0),
                a)){
                  const e=r&&("load"===r.type?"missing":r.type),
                  n=r&&r.target&&r.target.src;
                  c.message="Loading chunk "+t+" failed.\n("+e+": "+n+")",
                  c.name="ChunkLoadError",
                  c.type=e,
                  c.request=n,
                  c.event=r,
                  a[1](c)
                }
              };
              n.l(f,
              d,
              "chunk-"+t,
              t)
            }
          };
          const t=(t,
          r)=>{
            let[a,
            o,
            f]=r;
            var c,
            d,
            s=0;
            if(a.some(t=>0!==e[t])){
              for(c in o)n.o(o,
              c)&&(n.m[c]=o[c]);
              f&&f(n)
            }for(t&&t(r);
            s<a.length;
            s++)d=a[s],
            n.o(e,
            d)&&e[d]&&e[d][0](),
            e[d]=0
          },
          r=self.webpackChunk_rockstargames_modules_gtao_license_plate=self.webpackChunk_rockstargames_modules_gtao_license_plate||[];
          r.forEach(t.bind(null,
          0)),
          r.push=t.bind(null,
          r.push.bind(r))
        })(),
        n.nc=void 0,
        n(4769),
        n(5819)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map
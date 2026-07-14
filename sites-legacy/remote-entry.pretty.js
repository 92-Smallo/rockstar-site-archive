try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="25b4ef18-9c34-4564-a7e3-eb33e928747c",
  e._sentryDebugIdIdentifier="sentry-dbid-25b4ef18-9c34-4564-a7e3-eb33e928747c")
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
    release:"ed43b2f257dbe26369c90120659330272bc05587",
    packageName:"@rockstargames/sites-legacy",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"ed43b2f257dbe26369c90120659330272bc05587"
},
System.register(["@rockstargames/modules-core-videoplayer"],
function(e,
t){
  var r={
  };
  return Object.defineProperty(r,
  "__esModule",
  {
    value:!0
  }),
  {
    setters:[function(e){
      r.default=e.default||e,
      Object.keys(e).forEach(function(t){
        r[t]=e[t]
      })
    }],
    execute:function(){
      e((()=>{
        var e={
          64801(e,
          t,
          r){
            (0,
            r(26745).w)(1)
          },
          26745(e,
          t,
          r){
            const n=r(86029).y;
            t.w=function(e){
              if(e||(e=1),
              !r.y.meta||!r.y.meta.url)throw console.error("__system_context__",
              r.y),
              Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p=n(r.y.meta.url,
              e)
            }
          },
          4010(e,
          t,
          r){
            r(64801)
          },
          86029(e,
          t,
          r){
            t.y=function(e,
            t){
              var r=document.createElement("a");
              r.href=e;
              for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,
              o=0,
              a=n.length;
              o!==t&&a>=0;
              )"/"===n[--a]&&o++;
              if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);
              var c=n.slice(0,
              a+1);
              return r.protocol+"//"+r.host+c
            };
            Number.isInteger
          },
          54334(e,
          t,
          r){
            "use strict";
            const n={
              "./site-routes/Bully":()=>Promise.all([r.e(630),
              r.e(82),
              r.e(225),
              r.e(909),
              r.e(331),
              r.e(199),
              r.e(66),
              r.e(150)]).then(()=>()=>r(67150)),
              "./site-routes/RedDeadRedemption":()=>Promise.all([r.e(630),
              r.e(82),
              r.e(225),
              r.e(909),
              r.e(331),
              r.e(199),
              r.e(66),
              r.e(922)]).then(()=>()=>r(5922)),
              "./tina":()=>r.e(541).then(()=>()=>r(20541))
            },
            o=(e,
            t)=>(r.R=t,
            t=r.o(n,
            e)?n[e]():Promise.resolve().then(()=>{
              throw new Error('Module "'+e+'" does not exist in container.')
            }),
            r.R=void 0,
            t),
            a=(e,
            t)=>{
              if(!r.S)return;
              const n="default",
              o=r.S[n];
              if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");
              return r.S[n]=e,
              r.I(n,
              t)
            };
            r.d(t,
            {
              get:()=>o,
              init:()=>a
            })
          },
          25136(e){
            "use strict";
            e.exports=r
          }
        };
        const n={
        };
        function o(t){
          const r=n[t];
          if(void 0!==r)return r.exports;
          const a=n[t]={
            id:t,
            loaded:!1,
            exports:{
            }
          };
          return e[t].call(a.exports,
          a,
          a.exports,
          o),
          a.loaded=!0,
          a.exports
        }return o.m=e,
        o.c=n,
        o.y=t,
        o.amdO={
        },
        o.n=e=>{
          const t=e&&e.__esModule?()=>e.default:()=>e;
          return o.d(t,
          {
            a:t
          }),
          t
        },
        (()=>{
          const e=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;
          let t;
          o.t=function(r,
          n){
            if(1&n&&(r=this(r)),
            8&n)return r;
            if("object"==typeof r&&r){
              if(4&n&&r.__esModule)return r;
              if(16&n&&"function"==typeof r.then)return r
            }const a=Object.create(null);
            o.r(a);
            const c={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var s=2&n&&r;
            ("object"==typeof s||"function"==typeof s)&&!~t.indexOf(s);
            s=e(s))Object.getOwnPropertyNames(s).forEach(e=>c[e]=()=>r[e]);
            return c.default=()=>r,
            o.d(a,
            c),
            a
          }
        })(),
        o.d=(e,
        t)=>{
          if(Array.isArray(t))for(var r=0;
          r<t.length;
          ){
            var n=t[r++],
            a=t[r++];
            o.o(e,
            n)?0===a&&r++:0===a?Object.defineProperty(e,
            n,
            {
              enumerable:!0,
              value:t[r++]
            }):Object.defineProperty(e,
            n,
            {
              enumerable:!0,
              get:a
            })
          }else for(var n in t)o.o(t,
          n)&&!o.o(e,
          n)&&Object.defineProperty(e,
          n,
          {
            enumerable:!0,
            get:t[n]
          })
        },
        o.f={
        },
        o.e=e=>Promise.all(Object.keys(o.f).reduce((t,
        r)=>(o.f[r](e,
        t),
        t),
        [])),
        o.u=e=>"js/"+{
          35:"64bdb69570f36bc72858144d6edfafcc",
          66:"39f497fe100278ac2cffda522676f89c",
          95:"ec18d8fac84d6cde8cc86d001d79e3a9",
          96:"b08067b47c97ca32315850287ab0c7e1",
          116:"aa15c8ac2c1c2666bad1a538493d516e",
          150:"bc45d5e802967fe6d6152b62fa2d98cc",
          162:"e83096ce908d629f667c322a19c84492",
          169:"aede294992702196367738dfe4811db1",
          279:"1c966315e0fa78b697b9ec0a52e8c9c0",
          334:"b909ca492f77ef85a2ec8e90bd748ec2",
          382:"93e79242d92692ac6d48cd4ff6787a65",
          416:"d913eafc4de26146193cd2a9e7b1bf5b",
          454:"dbb0dd50fc4ffaabff8a7b02eb239ed5",
          476:"15618d62ec92d02294e6408e61505fa5",
          514:"823f493cb9c1e51c875fd68711211830",
          519:"60f0ddb285a9f0e15bedcd34e3b26027",
          541:"885281111022779a80f87a21bdacece1",
          581:"9e68fb61ca656b5ed5ad2c0184878be1",
          596:"4f94cfad187d49b11ed37c337df1044e",
          630:"57948fc774cc84a0819b6c3c52966edd",
          660:"c920ed33555611e6b6f0a97fc8cab443",
          712:"c8f63d0448d6470ca6aed3732e21e923",
          739:"b7d503b0a0771f96a0658779a1d9121d",
          793:"12022e2b1ccd03e231c532f0a17199f1",
          822:"b4e67502f01cb7afae6676560394f25a",
          860:"da56ba2b2f154c634d846ff44045a670",
          918:"ea8cc7dae66d150eadf7defba7a8ef6e",
          921:"377de1c541669a506f6b7b3b85ba8854",
          922:"f68f9bcc47693ecd2328c04a4754c885",
          967:"7500077b9f9f5e221732b4ad2e5ef956",
          989:"7e9085e4ee0537f9942513627cc24919"
        }[e]+".js",
        o.miniCssF=e=>"css/"+{
          66:"b090e4033259b78f0582241bca817c4f",
          169:"82b8e41eb90eae7db3adfb9fff54d045",
          609:"82b8e41eb90eae7db3adfb9fff54d045"
        }[e]+".css",
        o.g=function(){
          if("object"==typeof globalThis)return globalThis;
          try{
            return this||new Function("return this")()
          }catch(e){
            if("object"==typeof window)return window
          }
        }(),
        o.o=(e,
        t)=>Object.prototype.hasOwnProperty.call(e,
        t),
        (()=>{
          const e={
          },
          t="@rockstargames/sites-legacy:";
          o.l=(r,
          n,
          a,
          c)=>{
            if(e[r])return void e[r].push(n);
            let s,
            i;
            if(void 0!==a){
              const e=document.getElementsByTagName("script");
              for(var f=0;
              f<e.length;
              f++){
                const n=e[f];
                if(n.getAttribute("src")==r||n.getAttribute("data-webpack")==t+a){
                  s=n;
                  break
                }
              }
            }s||(i=!0,
            s=document.createElement("script"),
            s.charset="utf-8",
            o.nc&&s.setAttribute("nonce",
            o.nc),
            s.setAttribute("data-webpack",
            t+a),
            s.src=r),
            e[r]=[n];
            const l=(t,
            n)=>{
              s.onerror=s.onload=null,
              clearTimeout(d);
              const o=e[r];
              if(delete e[r],
              s.parentNode?.removeChild(s),
              o?.forEach(e=>e(n)),
              t)return t(n)
            },
            d=setTimeout(l.bind(null,
            void 0,
            {
              type:"timeout",
              target:s
            }),
            12e4);
            s.onerror=l.bind(null,
            s.onerror),
            s.onload=l.bind(null,
            s.onload),
            i&&document.head.appendChild(s)
          }
        })(),
        o.r=e=>{
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
        o.nmd=e=>(e.paths=[],
        e.children||(e.children=[]),
        e),
        (()=>{
          const e={
            66:[31879]
          },
          t={
            31879:["default",
            "./index",
            25136]
          };
          o.f.remotes=(r,
          n)=>{
            o.o(e,
            r)&&e[r].forEach(e=>{
              let r=o.R;
              r||(r=[]);
              const a=t[e];
              if(r.indexOf(a)>=0)return;
              if(r.push(a),
              a.p)return n.push(a.p);
              const c=t=>{
                t||(t=new Error("Container missing")),
                "string"==typeof t.message&&(t.message+='\nwhile loading "'+a[1]+'" from '+a[2]),
                o.m[e]=()=>{
                  throw t
                },
                a.p=0
              },
              s=(e,
              t,
              r,
              o,
              s,
              i)=>{
                try{
                  const f=e(t,
                  r);
                  if(!f?.then)return s(f,
                  o,
                  i);
                  {
                    const e=f.then(e=>s(e,
                    o),
                    c);
                    if(!i)return e;
                    n.push(a.p=e)
                  }
                }catch(e){
                  c(e)
                }
              },
              i=(e,
              t,
              n)=>s(t.get,
              a[1],
              r,
              0,
              f,
              n),
              f=t=>{
                a.p=1,
                o.m[e]=e=>{
                  e.exports=t()
                }
              };
              s(o,
              a[2],
              0,
              0,
              (e,
              t,
              r)=>e?s(o.I,
              a[0],
              0,
              e,
              i,
              r):c(),
              1)
            })
          }
        })(),
        (()=>{
          o.S={
          };
          const e={
          },
          t={
          };
          o.I=(r,
          n)=>{
            n||(n=[]);
            let a=t[r];
            if(a||(a=t[r]={
            }),
            n.indexOf(a)>=0)return;
            if(n.push(a),
            e[r])return e[r];
            o.o(o.S,
            r)||(o.S[r]={
            });
            const c=o.S[r],
            s="@rockstargames/sites-legacy",
            i=(e,
            t,
            r,
            n)=>{
              const o=c[e]=c[e]||{
              },
              a=o[t];
              (!a||!a.loaded&&(!n!=!a.eager?n:s>a.from))&&(o[t]={
                get:r,
                from:s,
                eager:!!n
              })
            },
            f=[];
            return"default"===r&&(i("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([o.e(279),
            o.e(660),
            o.e(382),
            o.e(82),
            o.e(416)]).then(()=>()=>o(58416))),
            i("@rsgweb/rockstar-account",
            "0.0.0",
            ()=>Promise.all([o.e(279),
            o.e(116),
            o.e(918),
            o.e(82),
            o.e(225),
            o.e(909),
            o.e(596),
            o.e(331),
            o.e(95)]).then(()=>()=>o(58095))),
            i("@rsgweb/tina",
            "0.0.0",
            ()=>Promise.all([o.e(279),
            o.e(660),
            o.e(334),
            o.e(82),
            o.e(909),
            o.e(454),
            o.e(17),
            o.e(653),
            o.e(331),
            o.e(199),
            o.e(739),
            o.e(169)]).then(()=>()=>o(11215))),
            i("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([o.e(279),
            o.e(660),
            o.e(116),
            o.e(967),
            o.e(82),
            o.e(225),
            o.e(909),
            o.e(596),
            o.e(454),
            o.e(54),
            o.e(96)]).then(()=>()=>o(19096))),
            i("clsx",
            "2.1.1",
            ()=>o.e(921).then(()=>()=>o(4921))),
            i("focus-trap-react",
            "10.3.1",
            ()=>Promise.all([o.e(514),
            o.e(82),
            o.e(653)]).then(()=>()=>o(44514))),
            i("framer-motion",
            "12.42.1",
            ()=>Promise.all([o.e(822),
            o.e(82),
            o.e(793)]).then(()=>()=>o(95822))),
            i("graphql",
            "16.14.2",
            ()=>o.e(519).then(()=>()=>o(91519))),
            i("prop-types",
            "15.8.1",
            ()=>o.e(712).then(()=>()=>o(60331))),
            i("react-dom",
            "18.3.1",
            ()=>Promise.all([o.e(162),
            o.e(82)]).then(()=>()=>o(30162))),
            i("react-router-dom",
            "6.30.4",
            ()=>Promise.all([o.e(860),
            o.e(82),
            o.e(17)]).then(()=>()=>o(79860))),
            i("react",
            "18.3.1",
            ()=>o.e(581).then(()=>()=>o(22581))),
            (e=>{
              const t=e=>{
                return t="Initialization of sharing external failed: "+e,
                void("undefined"!=typeof console&&console.warn&&console.warn(t));
                var t
              };
              try{
                const a=o(e);
                if(!a)return;
                const c=e=>e&&e.init&&e.init(o.S[r],
                n);
                if(a.then)return f.push(a.then(c,
                t));
                const s=c(a);
                if(s?.then)return f.push(s.catch(t))
              }catch(e){
                t(e)
              }
            })(25136)),
            f.length?e[r]=Promise.all(f).then(()=>e[r]=1):e[r]=1
          }
        })(),
        (()=>{
          let e;
          o.g.importScripts&&(e=o.g.location+"");
          const t=o.g.document;
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
          o.p=e
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
              for(var o=1,
              a=1;
              a<e.length;
              a++)o--,
              n+="u"==(typeof(s=e[a]))[0]?"-":(o>0?".":"")+(o=2,
              s);
              return n
            }var c=[];
            for(a=1;
            a<e.length;
            a++){
              var s=e[a];
              c.push(0===s?"not("+i()+")":1===s?"("+i()+" || "+i()+")":2===s?c.pop()+" "+c.pop():t(s))
            }return i();
            function i(){
              return c.pop().replace(/^\((.+)\)$/,
              "$1")
            }
          },
          r=(t,
          n)=>{
            if(0 in t){
              n=e(n);
              var o=t[0],
              a=o<0;
              a&&(o=-o-1);
              for(var c=0,
              s=1,
              i=!0;
              ;
              s++,
              c++){
                var f,
                l,
                d=s<t.length?(typeof t[s])[0]:"";
                if(c>=n.length||"o"==(l=(typeof(f=n[c]))[0]))return!i||("u"==d?s>o&&!a:""==d!=a);
                if("u"==l){
                  if(!i||"u"!=d)return!1
                }else if(i)if(d==l)if(s<=o){
                  if(f!=t[s])return!1
                }else{
                  if(a?f>t[s]:f<t[s])return!1;
                  f!=t[s]&&(i=!1)
                }else if("s"!=d&&"n"!=d){
                  if(a||s<=o)return!1;
                  i=!1,
                  s--
                }else{
                  if(s<=o||l<d!=a)return!1;
                  i=!1
                }else"s"!=d&&"n"!=d&&(i=!1,
                s--)
              }
            }var u=[],
            h=u.pop.bind(u);
            for(c=1;
            c<t.length;
            c++){
              var p=t[c];
              u.push(1==p?h()|h():2==p?h()&h():p?r(p,
              n):!h())
            }return!!h()
          };
          const n=(t,
          r,
          n)=>{
            const o=n?(e=>Object.keys(e).reduce((t,
            r)=>(e[r].eager&&(t[r]=e[r]),
            t),
            {
            }))(t[r]):t[r];
            return Object.keys(o).reduce((t,
            r)=>!t||!o[t].loaded&&((t,
            r)=>{
              t=e(t),
              r=e(r);
              for(var n=0;
              ;
              ){
                if(n>=t.length)return n<r.length&&"u"!=(typeof r[n])[0];
                var o=t[n],
                a=(typeof o)[0];
                if(n>=r.length)return"u"==a;
                var c=r[n],
                s=(typeof c)[0];
                if(a!=s)return"o"==a&&"n"==s||"s"==s||"u"==a;
                if("o"!=a&&"u"!=a&&o!=c)return o<c;
                n++
              }
            })(t,
            r)?r:t,
            0)
          },
          a=(e,
          t,
          r)=>r?r():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          c=(e=>function(t,
          r,
          n,
          a,
          c){
            const s=o.I(t);
            return s?.then&&!n?s.then(e.bind(e,
            t,
            o.S[t],
            r,
            !1,
            a,
            c)):e(t,
            o.S[t],
            r,
            n,
            a,
            c)
          })((e,
          c,
          s,
          i,
          f,
          l)=>{
            if(!((e,
            t)=>e&&o.o(e,
            t))(c,
            s))return a(e,
            s,
            l);
            const d=n(c,
            s,
            i);
            return r(f,
            d)||(h=((e,
            r,
            n,
            o)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(o)+")")(c,
            s,
            d,
            f),
            "undefined"!=typeof console&&console.warn&&console.warn(h)),
            (u=c[s][d]).loaded=1,
            u.get();
            var u,
            h
          }),
          s={
          },
          i={
            93082:()=>c("default",
            "react",
            !1,
            [0],
            ()=>o.e(581).then(()=>()=>o(22581))),
            99225:()=>c("default",
            "react-router-dom",
            !1,
            [0],
            ()=>Promise.all([o.e(860),
            o.e(17)]).then(()=>()=>o(79860))),
            42909:()=>c("default",
            "@rsgweb/locale-tools",
            !1,
            [0],
            ()=>Promise.all([o.e(279),
            o.e(660),
            o.e(382),
            o.e(35)]).then(()=>()=>o(58416))),
            13331:()=>c("default",
            "@rsgweb/utils",
            !1,
            [0],
            ()=>Promise.all([o.e(279),
            o.e(660),
            o.e(116),
            o.e(967),
            o.e(225),
            o.e(596),
            o.e(454),
            o.e(989)]).then(()=>()=>o(19096))),
            82199:()=>c("default",
            "@rsgweb/rockstar-account",
            !1,
            [0],
            ()=>Promise.all([o.e(279),
            o.e(116),
            o.e(918),
            o.e(225),
            o.e(596),
            o.e(476)]).then(()=>()=>o(58095))),
            17301:()=>c("default",
            "@rsgweb/tina",
            !1,
            [0],
            ()=>Promise.all([o.e(279),
            o.e(660),
            o.e(334),
            o.e(454),
            o.e(17),
            o.e(653),
            o.e(739),
            o.e(609)]).then(()=>()=>o(11215))),
            79955:()=>c("default",
            "focus-trap-react",
            !1,
            [1,
            10,
            3,
            1],
            ()=>Promise.all([o.e(514),
            o.e(653)]).then(()=>()=>o(44514))),
            81270:()=>c("default",
            "clsx",
            !1,
            [1,
            2,
            1,
            1],
            ()=>o.e(921).then(()=>()=>o(4921))),
            88447:()=>c("default",
            "framer-motion",
            !1,
            [1,
            12,
            38,
            0],
            ()=>o.e(822).then(()=>()=>o(95822))),
            84017:()=>c("default",
            "react-dom",
            !1,
            [1,
            18,
            2,
            0],
            ()=>o.e(162).then(()=>()=>o(30162))),
            89653:()=>c("default",
            "prop-types",
            !1,
            [1,
            15,
            8,
            1],
            ()=>o.e(712).then(()=>()=>o(60331))),
            32054:()=>c("default",
            "graphql",
            !1,
            [0],
            ()=>o.e(519).then(()=>()=>o(91519)))
          },
          f={
            17:[84017],
            54:[32054],
            66:[17301,
            79955,
            81270,
            88447],
            82:[93082],
            199:[82199],
            225:[99225],
            331:[13331],
            653:[89653],
            909:[42909],
            989:[32054]
          },
          l={
          };
          o.f.consumes=(e,
          t)=>{
            o.o(f,
            e)&&f[e].forEach(e=>{
              if(o.o(s,
              e))return t.push(s[e]);
              if(!l[e]){
                const r=t=>{
                  s[e]=0,
                  o.m[e]=r=>{
                    delete o.c[e],
                    r.exports=t()
                  }
                };
                l[e]=!0;
                const n=t=>{
                  delete s[e],
                  o.m[e]=r=>{
                    throw delete o.c[e],
                    t
                  }
                };
                try{
                  const o=i[e]();
                  o.then?t.push(s[e]=o.then(r).catch(n)):r(o)
                }catch(e){
                  n(e)
                }
              }
            })
          }
        })(),
        (()=>{
          if("undefined"!=typeof document){
            var e={
              106:0
            };
            o.f.miniCss=(t,
            r)=>{
              e[t]?r.push(e[t]):0!==e[t]&&{
                66:1,
                169:1,
                609:1
              }[t]&&r.push(e[t]=(e=>new Promise((t,
              r)=>{
                var n=o.miniCssF(e),
                a=o.p+n;
                if(((e,
                t)=>{
                  for(var r=document.getElementsByTagName("link"),
                  n=0;
                  n<r.length;
                  n++){
                    var o=(c=r[n]).getAttribute("data-href")||c.getAttribute("href");
                    if("stylesheet"===c.rel&&(o===e||o===t))return c
                  }var a=document.getElementsByTagName("style");
                  for(n=0;
                  n<a.length;
                  n++){
                    var c;
                    if((o=(c=a[n]).getAttribute("data-href"))===e||o===t)return c
                  }
                })(n,
                a))return t();
                ((e,
                t,
                r,
                n,
                a)=>{
                  var c=document.createElement("link");
                  c.rel="stylesheet",
                  c.type="text/css",
                  o.nc&&(c.nonce=o.nc),
                  c.onerror=c.onload=r=>{
                    if(c.onerror=c.onload=null,
                    "load"===r.type)n();
                    else{
                      var o=r&&r.type,
                      s=r&&r.target&&r.target.href||t,
                      i=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+s+")");
                      i.name="ChunkLoadError",
                      i.code="CSS_CHUNK_LOAD_FAILED",
                      i.type=o,
                      i.request=s,
                      c.parentNode&&c.parentNode.removeChild(c),
                      a(i)
                    }
                  },
                  c.href=t,
                  document.head.appendChild(c)
                })(e,
                a,
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
            106:0
          };
          o.f.j=(t,
          r)=>{
            let n=o.o(e,
            t)?e[t]:void 0;
            if(0!==n)if(n)r.push(n[2]);
            else if(/^((19|60|90)9|17|225|331|54|653|82)$/.test(t))e[t]=0;
            else{
              const a=new Promise((r,
              o)=>n=e[t]=[r,
              o]);
              r.push(n[2]=a);
              const c=o.p+o.u(t),
              s=new Error,
              i=r=>{
                if(o.o(e,
                t)&&(n=e[t],
                0!==n&&(e[t]=void 0),
                n)){
                  const e=r&&("load"===r.type?"missing":r.type),
                  o=r&&r.target&&r.target.src;
                  s.message="Loading chunk "+t+" failed.\n("+e+": "+o+")",
                  s.name="ChunkLoadError",
                  s.type=e,
                  s.request=o,
                  n[1](s)
                }
              };
              o.l(c,
              i,
              "chunk-"+t,
              t)
            }
          };
          const t=(t,
          r)=>{
            let[n,
            a,
            c]=r;
            var s,
            i,
            f=0;
            if(n.some(t=>0!==e[t])){
              for(s in a)o.o(a,
              s)&&(o.m[s]=a[s]);
              c&&c(o)
            }for(t&&t(r);
            f<n.length;
            f++)i=n[f],
            o.o(e,
            i)&&e[i]&&e[i][0](),
            e[i]=0
          },
          r=self.webpackChunk_rockstargames_sites_legacy=self.webpackChunk_rockstargames_sites_legacy||[];
          r.forEach(t.bind(null,
          0)),
          r.push=t.bind(null,
          r.push.bind(r))
        })(),
        o.nc=void 0,
        o(4010),
        o(54334)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map
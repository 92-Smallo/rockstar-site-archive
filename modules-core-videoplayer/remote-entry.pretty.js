try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="6bfcd911-e786-4702-af61-7ad74d56bf2a",
  e._sentryDebugIdIdentifier="sentry-dbid-6bfcd911-e786-4702-af61-7ad74d56bf2a")
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
    release:"d4d43fe80ffcd8fa95a2a7051a584fbc28982d71",
    packageName:"@rockstargames/modules-core-videoplayer",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"d4d43fe80ffcd8fa95a2a7051a584fbc28982d71"
},
System.register([],
function(e,
t){
  return{
    execute:function(){
      e((()=>{
        var e={
          7294(e,
          t,
          r){
            (0,
            r(5316).w)(1)
          },
          5316(e,
          t,
          r){
            const a=r(2232).y;
            t.w=function(e){
              if(e||(e=1),
              !r.y.meta||!r.y.meta.url)throw console.error("__system_context__",
              r.y),
              Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p=a(r.y.meta.url,
              e)
            }
          },
          3069(e,
          t,
          r){
            r(7294)
          },
          2232(e,
          t,
          r){
            t.y=function(e,
            t){
              var r=document.createElement("a");
              r.href=e;
              for(var a="/"===r.pathname[0]?r.pathname:"/"+r.pathname,
              n=0,
              o=a.length;
              n!==t&&o>=0;
              )"/"===a[--o]&&n++;
              if(n!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+n+") in the URL path "+e);
              var c=a.slice(0,
              o+1);
              return r.protocol+"//"+r.host+c
            };
            Number.isInteger
          },
          8157(e,
          t,
          r){
            "use strict";
            const a={
              "./bootstrap":()=>r.e(9374).then(()=>()=>r(9374)),
              "./index":()=>Promise.all([r.e(7740),
              r.e(994),
              r.e(5174),
              r.e(2149),
              r.e(5748),
              r.e(5472),
              r.e(3234),
              r.e(5641),
              r.e(7281),
              r.e(5501),
              r.e(1270),
              r.e(3705),
              r.e(4592),
              r.e(9199),
              r.e(4684),
              r.e(9103)]).then(()=>()=>r(9103)),
              "./tina":()=>r.e(9276).then(()=>()=>r(9276)),
              "./tinaBlockTemplates":()=>r.e(9276).then(()=>()=>r(9276))
            },
            n=(e,
            t)=>(r.R=t,
            t=r.o(a,
            e)?a[e]():Promise.resolve().then(()=>{
              throw new Error('Module "'+e+'" does not exist in container.')
            }),
            r.R=void 0,
            t),
            o=(e,
            t)=>{
              if(!r.S)return;
              const a="default",
              n=r.S[a];
              if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");
              return r.S[a]=e,
              r.I(a,
              t)
            };
            r.d(t,
            {
              get:()=>n,
              init:()=>o
            })
          }
        };
        const r={
        };
        function a(t){
          const n=r[t];
          if(void 0!==n)return n.exports;
          const o=r[t]={
            id:t,
            loaded:!1,
            exports:{
            }
          };
          return e[t].call(o.exports,
          o,
          o.exports,
          a),
          o.loaded=!0,
          o.exports
        }return a.m=e,
        a.c=r,
        a.y=t,
        a.amdO={
        },
        a.n=e=>{
          const t=e&&e.__esModule?()=>e.default:()=>e;
          return a.d(t,
          {
            a:t
          }),
          t
        },
        a.cw=e=>{
          var t;
          return()=>{
            if(e){
              var r=e;
              e=0,
              t={
                exports:{
                }
              },
              r.call(t.exports,
              t,
              t.exports)
            }return t.exports
          }
        },
        (()=>{
          const e=Object.getPrototypeOf;
          let t;
          a.t=function(r,
          n){
            if(1&n&&(r=this(r)),
            8&n)return r;
            if("object"==typeof r&&r){
              if(4&n&&r.__esModule)return r;
              if(16&n&&"function"==typeof r.then)return r
            }const o=Object.create(null);
            a.r(o);
            const c={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var d=2&n&&r;
            ("object"==typeof d||"function"==typeof d)&&!~t.indexOf(d);
            d=e(d))Object.getOwnPropertyNames(d).forEach(e=>c[e]=()=>r[e]);
            return c.default=()=>r,
            a.d(o,
            c),
            o
          }
        })(),
        a.d=(e,
        t)=>{
          if(Array.isArray(t))for(var r=0;
          r<t.length;
          ){
            var n=t[r++],
            o=t[r++],
            c=0===o?{
              enumerable:!0,
              value:t[r++]
            }:{
              enumerable:!0,
              get:o
            };
            a.o(e,
            n)||Object.defineProperty(e,
            n,
            c)
          }else for(var n in t)a.o(t,
          n)&&!a.o(e,
          n)&&Object.defineProperty(e,
          n,
          {
            enumerable:!0,
            get:t[n]
          })
        },
        a.f={
        },
        a.e=e=>Promise.all(Object.keys(a.f).reduce((t,
        r)=>(a.f[r](e,
        t),
        t),
        [])),
        a.u=e=>"js/"+{
          658:"ebb469939bd21f181bd84ec575549ae8",
          994:"7f3a1a7954a34722d563eef8c061cf38",
          1519:"585c6de001420c4099f65050a912812f",
          1633:"f2211e82c46eed1b32854d226966313e",
          1640:"d45f176ff270e33e5d11a7b20d4aad90",
          1652:"d35c5e24cfa722d741b782e4af9bf5fe",
          2042:"754b7354f872401a7a9a6c4698218825",
          2360:"50f8661f76187b91fd64f9e4cd7dfc85",
          2438:"fbfcec51eb1256a91f27476944fb4c06",
          2497:"e2efe4eaaed5d4cc335704cd59af1195",
          2873:"3cb352a17d652bdbe198333b157d8bcd",
          3037:"fb7c36842e748122f5ed8069e3b94e6c",
          3099:"ed116bce1eaacc0323e2da0a0255d34b",
          3529:"8b5d52ac7d15e5456571e3960b37fa89",
          3612:"d35b24a48202853b4fda81a83ca0077c",
          3770:"c9071f4d9a84ae2296ebe23773f02eed",
          3819:"aa7ca1a315c6655e1a2559c5455321d8",
          3888:"d2f9996e5c03dd5cce2d4d433110dfa6",
          3894:"2e1a20217fab474ee110ca45bb63b1da",
          4584:"ca864749aaba10fc2285ef88b965b5c2",
          4684:"aa45d6b2d859078d8808654b41982e6c",
          4910:"aa5a5967d46bd415bc888eccb4b500fd",
          4921:"1a6d14e6e741f2f15b9cdc7a3e14abb2",
          5073:"d894916b03cf9dbea58c47bc781e39d8",
          5174:"6a827f7d9e417aa8635ad9f8fb54cdf7",
          5373:"d41b95d5d9117b31b3f8d99980b0ae11",
          5480:"bccbae853b5c791e3bbe1613c608e9b7",
          5500:"10174ab60590f08ba8fa37c251c2acc4",
          5612:"8e03a674743682eefdb9f8ad1c660ae3",
          5708:"adaeb271142b7d168c7f98026b4a0094",
          6038:"18284d1506e0c846fb921f87cfbbef48",
          6123:"f0f8bf50f7d9389bf517572bdf2e121d",
          6147:"a012e9d1f24f35d1bc7449c0644e5093",
          6281:"a639a121da0348f65e727d46bf15bb28",
          6295:"816c51a7c178c0b608f66f2b19bc8d2a",
          6589:"e23f02edc2cdc76105f0cb3b987d69d7",
          6911:"e4fb385ff1881ccd083288f58e0380c0",
          7556:"64c1af5ea07a2abdd358487d108cc9a9",
          7740:"26a23a26c30c9c4ef6ec7b9214a0232f",
          7794:"5e923b85483778d3d706c360054d00b5",
          8277:"7bc2c165315cf5c7ab46009bcab83a3e",
          8528:"be9ca12d9589554c5fba864e2b96491a",
          8574:"10070d61ff551921799b395a7e9f3242",
          8680:"4cf90b061df2fe291c0adce3b801870a",
          8876:"82b494deffb7df465c8094e95a2df084",
          9103:"a5d3949fdef2f2f2856ae899ecc2a56d",
          9181:"c602b37a6a14a718671b675ae1d68f8f",
          9210:"d4344a39c4336b6b1ac282626d617a4f",
          9271:"241a1c9bfbf8a8f4df63a91e8f58a72a",
          9276:"5c22cbf3d7c1a4601598d14c56dcf6ac",
          9292:"6652f9d4f0c62b67ad844b14012cd3c1",
          9374:"3a9f98030d372131daa797535387bf13",
          9384:"e8575f8c1f3ca89a2c288d3cb90b319f",
          9399:"4e1f2b126b5c8d7a60e0a5f8744765b6",
          9811:"ce000f1c3ed0045c87ec5063eb311562",
          9848:"0e6a75bd14dba791b85264b496f0a1fe",
          9874:"0874e861208bd405e0ecc0eecb8403a2"
        }[e]+".js",
        a.miniCssF=e=>"css/"+{
          1640:"f546cc848e33d8616e02fcb012c13188",
          1677:"0902caa96420fc9df874d2d4044947db",
          2149:"5c01f132c6cb5d21be960841e77d81f2",
          4058:"0902caa96420fc9df874d2d4044947db",
          4684:"7342d6b5aa1da756453edefde998e6ec",
          4910:"fcedfe8e9d754990e1633abd941447ce",
          8680:"f2ea4f8626138482e82246ee9d72121a",
          9103:"71d87f7d1fcf7ab23375dcd2f2710464"
        }[e]+".css",
        a.g=function(){
          if("object"==typeof globalThis)return globalThis;
          try{
            return this||new Function("return this")()
          }catch(e){
            if("object"==typeof window)return window
          }
        }(),
        a.o=(e,
        t)=>Object.prototype.hasOwnProperty.call(e,
        t),
        (()=>{
          const e={
          },
          t="@rockstargames/modules-core-videoplayer:";
          a.l=(r,
          n,
          o,
          c)=>{
            if(e[r])return void e[r].push(n);
            let d,
            f;
            if(void 0!==o){
              const e=document.getElementsByTagName("script");
              for(var s=0;
              s<e.length;
              s++){
                const a=e[s];
                if(a.getAttribute("src")==r||a.getAttribute("data-webpack")==t+o){
                  d=a;
                  break
                }
              }
            }d||(f=!0,
            d=document.createElement("script"),
            d.charset="utf-8",
            a.nc&&d.setAttribute("nonce",
            a.nc),
            d.setAttribute("data-webpack",
            t+o),
            d.src=r),
            e[r]=[n];
            const l=(t,
            a)=>{
              d.onerror=d.onload=null,
              clearTimeout(i);
              const n=e[r];
              if(delete e[r],
              d.parentNode?.removeChild(d),
              n?.forEach(e=>e(a)),
              t)return t(a)
            },
            i=setTimeout(l.bind(null,
            void 0,
            {
              type:"timeout",
              target:d
            }),
            12e4);
            d.onerror=l.bind(null,
            d.onerror),
            d.onload=l.bind(null,
            d.onload),
            f&&document.head.appendChild(d)
          }
        })(),
        a.r=e=>{
          Object.defineProperty(e,
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
        a.nmd=e=>(e.paths=[],
        e.children||(e.children=[]),
        e),
        (()=>{
          a.S={
          };
          const e={
          },
          t={
          };
          a.I=(r,
          n)=>{
            n||(n=[]);
            let o=t[r];
            if(o||(o=t[r]={
            }),
            n.indexOf(o)>=0)return;
            if(n.push(o),
            e[r])return e[r];
            a.o(a.S,
            r)||(a.S[r]={
            });
            const c=a.S[r],
            d="@rockstargames/modules-core-videoplayer",
            f=(e,
            t,
            r,
            a)=>{
              const n=c[e]=c[e]||{
              },
              o=n[t];
              (!o||!o.loaded&&(!a!=!o.eager?a:d>o.from))&&(n[t]={
                get:r,
                from:d,
                eager:!!a
              })
            },
            s=[];
            return"default"===r&&(f("@floating-ui/react",
            "0.27.20",
            ()=>Promise.all([a.e(5708),
            a.e(6295),
            a.e(8876),
            a.e(5748),
            a.e(7281),
            a.e(9292)]).then(()=>()=>a(8876))),
            f("@foundry-int/utils",
            "7.5.1",
            ()=>Promise.all([a.e(9181),
            a.e(1270),
            a.e(5373)]).then(()=>()=>a(9181))),
            f("@foundry/react",
            "7.5.1",
            ()=>Promise.all([a.e(8277),
            a.e(1633),
            a.e(7740),
            a.e(994),
            a.e(2873),
            a.e(5708),
            a.e(4910),
            a.e(8680),
            a.e(5748),
            a.e(7281),
            a.e(5501),
            a.e(1270),
            a.e(3705),
            a.e(4592)]).then(()=>()=>a(4044))),
            f("@gsap/react",
            "2.1.2",
            ()=>Promise.all([a.e(5748),
            a.e(5501),
            a.e(3099)]).then(()=>()=>a(3099))),
            f("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([a.e(2873),
            a.e(5748),
            a.e(5472),
            a.e(6147)]).then(()=>()=>a(6147))),
            f("@rsgweb/modules-core-agegate",
            "0.0.0",
            ()=>Promise.all([a.e(1633),
            a.e(994),
            a.e(5748),
            a.e(5641),
            a.e(7281),
            a.e(1270),
            a.e(4592),
            a.e(9199),
            a.e(5612),
            a.e(1677)]).then(()=>()=>a(5612))),
            f("@rsgweb/rockstar-account",
            "0.0.0",
            ()=>Promise.all([a.e(8277),
            a.e(2497),
            a.e(5748),
            a.e(5472),
            a.e(3234),
            a.e(5641),
            a.e(3612),
            a.e(1652)]).then(()=>()=>a(1652))),
            f("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([a.e(8277),
            a.e(2497),
            a.e(3894),
            a.e(5748),
            a.e(5472),
            a.e(3234),
            a.e(5641),
            a.e(3612),
            a.e(9874),
            a.e(6911)]).then(()=>()=>a(9090))),
            f("clsx",
            "2.1.1",
            ()=>a.e(4921).then(()=>()=>a(4921))),
            f("focus-trap-react",
            "12.0.3",
            ()=>Promise.all([a.e(6295),
            a.e(6281),
            a.e(5748)]).then(()=>()=>a(6281))),
            f("graphql",
            "16.14.2",
            ()=>a.e(1519).then(()=>()=>a(1519))),
            f("gsap",
            "3.12.5",
            ()=>a.e(3529).then(()=>()=>a(3529))),
            f("hammerjs",
            "2.0.8",
            ()=>a.e(6038).then(()=>()=>a(6038))),
            f("jotai",
            "2.20.3",
            ()=>Promise.all([a.e(5500),
            a.e(5748)]).then(()=>()=>a(5500))),
            f("lodash-es",
            "4.18.1",
            ()=>a.e(2042).then(()=>()=>a(2042))),
            f("react-dom",
            "19.2.8",
            ()=>Promise.all([a.e(5748),
            a.e(9848)]).then(()=>()=>a(9848))),
            f("react-router",
            "7.18.4",
            ()=>Promise.all([a.e(8574),
            a.e(5748)]).then(()=>()=>a(8574))),
            f("react",
            "19.2.8",
            ()=>a.e(3888).then(()=>()=>a(3888))),
            f("uuid",
            "9.0.1",
            ()=>a.e(3770).then(()=>()=>a(3770)))),
            e[r]=s.length?Promise.all(s).then(()=>e[r]=1):1
          }
        })(),
        (()=>{
          let e;
          a.g.importScripts&&(e=a.g.location+"");
          const t=a.g.document;
          if(!e&&t&&("SCRIPT"===t.currentScript?.tagName.toUpperCase()&&(e=t.currentScript.src),
          !e)){
            const r=t.getElementsByTagName("script");
            if(r.length){
              let t=r.length-1;
              for(;
              t>-1&&(!e||!/^https?:/.test(e));
              )e=r[t--].src
            }
          }if(!e)throw new Error("Automatic publicPath is not supported in this browser");
          e=e.replace(/^blob:|[?#].*$/g,
          "").replace(/\/[^/]+$/,
          "/"),
          a.p=e
        })(),
        (()=>{
          var e=e=>{
            var t=e=>e.split(".").map(e=>+e==e?+e:e),
            r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            a=r[1]?t(r[1]):[];
            return r[2]&&(a.length++,
            a.push.apply(a,
            t(r[2]))),
            r[3]&&(a.push([]),
            a.push.apply(a,
            t(r[3]))),
            a
          },
          t=e=>{
            var r=e[0],
            a="";
            if(1===e.length)return"*";
            if(r+.5){
              a+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";
              for(var n=1,
              o=1;
              o<e.length;
              o++)n--,
              a+="u"==(typeof(d=e[o]))[0]?"-":(n>0?".":"")+(n=2,
              d);
              return a
            }var c=[];
            for(o=1;
            o<e.length;
            o++){
              var d=e[o];
              c.push(0===d?"not("+f()+")":1===d?"("+f()+" || "+f()+")":2===d?c.pop()+" "+c.pop():t(d))
            }return f();
            function f(){
              return c.pop().replace(/^\((.+)\)$/,
              "$1")
            }
          },
          r=(t,
          a)=>{
            if(0 in t){
              a=e(a);
              var n=t[0],
              o=n<0;
              o&&(n=-n-1);
              for(var c=0,
              d=1,
              f=!0;
              ;
              d++,
              c++){
                var s,
                l,
                i=d<t.length?(typeof t[d])[0]:"";
                if(c>=a.length||"o"==(l=(typeof(s=a[c]))[0]))return!f||("u"==i?d>n&&!o:""==i!=o);
                if("u"==l){
                  if(!f||"u"!=i)return!1
                }else if(f)if(i==l)if(d<=n){
                  if(s!=t[d])return!1
                }else{
                  if(o?s>t[d]:s<t[d])return!1;
                  s!=t[d]&&(f=!1)
                }else if("s"!=i&&"n"!=i){
                  if(o||d<=n)return!1;
                  f=!1,
                  d--
                }else{
                  if(d<=n||l<i!=o)return!1;
                  f=!1
                }else"s"!=i&&"n"!=i&&(f=!1,
                d--)
              }
            }var u=[],
            b=u.pop.bind(u);
            for(c=1;
            c<t.length;
            c++){
              var h=t[c];
              u.push(1==h?b()|b():2==h?b()&b():h?r(h,
              a):!b())
            }return!!b()
          };
          const n=(e,
          t)=>e&&a.o(e,
          t),
          o=e=>(e.loaded=1,
          e.get()),
          c=(t,
          r,
          a)=>{
            const n=a?(e=>Object.keys(e).reduce((t,
            r)=>(e[r].eager&&(t[r]=e[r]),
            t),
            {
            }))(t[r]):t[r];
            return Object.keys(n).reduce((t,
            r)=>!t||!n[t].loaded&&((t,
            r)=>{
              t=e(t),
              r=e(r);
              for(var a=0;
              ;
              ){
                if(a>=t.length)return a<r.length&&"u"!=(typeof r[a])[0];
                var n=t[a],
                o=(typeof n)[0];
                if(a>=r.length)return"u"==o;
                var c=r[a],
                d=(typeof c)[0];
                if(o!=d)return"o"==o&&"n"==d||"s"==d||"u"==o;
                if("o"!=o&&"u"!=o&&n!=c)return n<c;
                a++
              }
            })(t,
            r)?r:t,
            0)
          },
          d=e=>function(t,
          r,
          n,
          o,
          c){
            const d=a.I(t);
            return d?.then&&!n?d.then(e.bind(e,
            t,
            a.S[t],
            r,
            !1,
            o,
            c)):e(t,
            a.S[t],
            r,
            n,
            o,
            c)
          },
          f=(e,
          t,
          r)=>r?r():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          s=d((e,
          t,
          r,
          a,
          d)=>{
            if(!n(t,
            r))return f(e,
            r,
            d);
            const s=c(t,
            r,
            a);
            return o(t[r][s])
          }),
          l=d((e,
          a,
          d,
          s,
          l,
          i)=>{
            if(!n(a,
            d))return f(e,
            d,
            i);
            const u=c(a,
            d,
            s);
            return r(l,
            u)||(b=((e,
            r,
            a,
            n)=>"Unsatisfied version "+a+" from "+(a&&e[r][a].from)+" of shared singleton module "+r+" (required "+t(n)+")")(a,
            d,
            u,
            l),
            "undefined"!=typeof console&&console.warn&&console.warn(b)),
            o(a[d][u]);
            var b
          }),
          i={
          },
          u={
            5748:()=>s("default",
            "react",
            !1,
            ()=>a.e(3888).then(()=>()=>a(3888))),
            5472:()=>s("default",
            "lodash-es",
            !1,
            ()=>a.e(2042).then(()=>()=>a(2042))),
            3234:()=>s("default",
            "react-router",
            !1,
            ()=>a.e(8574).then(()=>()=>a(8574))),
            3788:()=>s("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([a.e(8277),
            a.e(2497),
            a.e(3894),
            a.e(5472),
            a.e(3234),
            a.e(3612),
            a.e(9874)]).then(()=>()=>a(9090))),
            4564:()=>s("default",
            "@rsgweb/locale-tools",
            !1,
            ()=>Promise.all([a.e(2873),
            a.e(5472),
            a.e(8528)]).then(()=>()=>a(6147))),
            7281:()=>s("default",
            "react-dom",
            !1,
            ()=>a.e(3819).then(()=>()=>a(9848))),
            5501:()=>s("default",
            "gsap",
            !1,
            ()=>a.e(3529).then(()=>()=>a(3529))),
            1270:()=>l("default",
            "clsx",
            !1,
            [1,
            2,
            1,
            1],
            ()=>a.e(4921).then(()=>()=>a(4921))),
            3705:()=>s("default",
            "@gsap/react",
            !1,
            ()=>a.e(5480).then(()=>()=>a(3099))),
            4592:()=>s("default",
            "@foundry-int/utils",
            !1,
            ()=>a.e(9181).then(()=>()=>a(9181))),
            8130:()=>s("default",
            "@rsgweb/rockstar-account",
            !1,
            ()=>Promise.all([a.e(8277),
            a.e(2497),
            a.e(5472),
            a.e(3234),
            a.e(3612),
            a.e(9271)]).then(()=>()=>a(1652))),
            9248:()=>s("default",
            "@foundry/react",
            !1,
            ()=>Promise.all([a.e(8277),
            a.e(1633),
            a.e(7740),
            a.e(2873),
            a.e(5708),
            a.e(4910),
            a.e(8680),
            a.e(5501),
            a.e(3705)]).then(()=>()=>a(4044))),
            584:()=>s("default",
            "focus-trap-react",
            !1,
            ()=>Promise.all([a.e(6295),
            a.e(6281)]).then(()=>()=>a(6281))),
            1639:()=>l("default",
            "@floating-ui/react",
            !1,
            [2,
            0,
            27,
            20],
            ()=>Promise.all([a.e(5708),
            a.e(6295),
            a.e(8876)]).then(()=>()=>a(8876))),
            2341:()=>l("default",
            "hammerjs",
            !1,
            [1,
            2,
            0,
            8],
            ()=>a.e(6038).then(()=>()=>a(6038))),
            3424:()=>s("default",
            "@rsgweb/modules-core-agegate",
            !1,
            ()=>Promise.all([a.e(1633),
            a.e(5612),
            a.e(4058)]).then(()=>()=>a(5612))),
            4815:()=>l("default",
            "uuid",
            !1,
            [1,
            9,
            0,
            1],
            ()=>a.e(3770).then(()=>()=>a(3770))),
            5115:()=>s("default",
            "jotai",
            !1,
            ()=>a.e(5500).then(()=>()=>a(5500))),
            6647:()=>s("default",
            "graphql",
            !1,
            ()=>a.e(1519).then(()=>()=>a(1519)))
          },
          b={
            1270:[1270],
            3234:[3234],
            3705:[3705],
            4592:[4592],
            4684:[584,
            1639,
            2341,
            3424,
            4815,
            5115],
            5472:[5472],
            5501:[5501],
            5641:[3788,
            4564],
            5748:[5748],
            7281:[7281],
            9199:[8130,
            9248],
            9874:[6647]
          },
          h={
          };
          a.f.consumes=(e,
          t)=>{
            a.o(b,
            e)&&b[e].forEach(e=>{
              if(a.o(i,
              e))return t.push(i[e]);
              if(!h[e]){
                const r=t=>{
                  i[e]=0,
                  a.m[e]=r=>{
                    delete a.c[e],
                    r.exports=t()
                  }
                };
                h[e]=!0;
                const n=t=>{
                  delete i[e],
                  a.m[e]=r=>{
                    throw delete a.c[e],
                    t
                  }
                };
                try{
                  const a=u[e]();
                  a.then?t.push(i[e]=a.then(r).catch(n)):r(a)
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
              7614:0
            };
            a.f.miniCss=(t,
            r)=>{
              e[t]?r.push(e[t]):0!==e[t]&&{
                1640:1,
                1677:1,
                2149:1,
                4058:1,
                4684:1,
                4910:1,
                8680:1,
                9103:1
              }[t]&&r.push(e[t]=(e=>new Promise((t,
              r)=>{
                var n=a.miniCssF(e),
                o=a.p+n;
                if(((e,
                t)=>{
                  for(var r=document.getElementsByTagName("link"),
                  a=0;
                  a<r.length;
                  a++){
                    var n=(c=r[a]).getAttribute("data-href")||c.getAttribute("href");
                    if("stylesheet"===c.rel&&(n===e||n===t))return c
                  }var o=document.getElementsByTagName("style");
                  for(a=0;
                  a<o.length;
                  a++){
                    var c;
                    if((n=(c=o[a]).getAttribute("data-href"))===e||n===t)return c
                  }
                })(n,
                o))return t();
                ((e,
                t,
                r,
                n,
                o)=>{
                  var c=document.createElement("link");
                  c.rel="stylesheet",
                  c.type="text/css",
                  a.nc&&(c.nonce=a.nc),
                  c.onerror=c.onload=r=>{
                    if(c.onerror=c.onload=null,
                    "load"===r.type)n();
                    else{
                      var a=r&&r.type,
                      d=r&&r.target&&r.target.href||t,
                      f=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+d+")");
                      f.name="ChunkLoadError",
                      f.code="CSS_CHUNK_LOAD_FAILED",
                      f.type=a,
                      f.request=d,
                      c.parentNode&&c.parentNode.removeChild(c),
                      o(f)
                    }
                  },
                  c.href=t,
                  document.head.appendChild(c)
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
            7614:0
          };
          a.f.j=(t,
          r)=>{
            let n=a.o(e,
            t)?e[t]:void 0;
            if(0!==n)if(n)r.push(n[2]);
            else if(/^(5(472|501|641|748)|1270|1677|2149|3234|3705|4058|4592|7281|9199)$/.test(t))e[t]=0;
            else{
              const o=new Promise((r,
              a)=>n=e[t]=[r,
              a]);
              r.push(n[2]=o);
              const c=new Error,
              d=r=>{
                if(a.o(e,
                t)&&(n=e[t],
                0!==n&&(e[t]=void 0),
                n)){
                  const e=r&&("load"===r.type?"missing":r.type),
                  a=r&&r.target&&r.target.src;
                  c.message="Loading chunk "+t+" failed.\n("+e+": "+a+")",
                  c.name="ChunkLoadError",
                  c.type=e,
                  c.request=a,
                  c.event=r,
                  n[1](c)
                }
              };
              a.l(a.p+a.u(t),
              d,
              "chunk-"+t,
              t)
            }
          };
          const t=(t,
          r)=>{
            let[n,
            o,
            c]=r;
            var d,
            f,
            s=0;
            if(n.some(t=>0!==e[t])){
              for(d in o)a.o(o,
              d)&&(a.m[d]=o[d]);
              c&&c(a)
            }for(t&&t(r);
            s<n.length;
            s++)f=n[s],
            a.o(e,
            f)&&e[f]&&e[f][0](),
            e[f]=0
          },
          r=self.webpackChunk_rockstargames_modules_core_videoplayer=self.webpackChunk_rockstargames_modules_core_videoplayer||[];
          r.forEach(t.bind(null,
          0)),
          r.push=t.bind(null,
          r.push.bind(r))
        })(),
        a.nc=void 0,
        a(3069),
        a(8157)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map
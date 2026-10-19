try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="65376430-a412-4124-8fb5-ea2d6d384a70",
  e._sentryDebugIdIdentifier="sentry-dbid-65376430-a412-4124-8fb5-ea2d6d384a70")
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
    release:"fb5df338a3004acb163f8eeeb3b5c99e2ad2028a",
    packageName:"@rockstargames/sites-red-dead-online",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"fb5df338a3004acb163f8eeeb3b5c99e2ad2028a"
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
          47294(e,
          t,
          r){
            (0,
            r(75316).w)(1)
          },
          75316(e,
          t,
          r){
            const n=r(32232).y;
            t.w=function(e){
              if(e||(e=1),
              !r.y.meta||!r.y.meta.url)throw console.error("__system_context__",
              r.y),
              Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p=n(r.y.meta.url,
              e)
            }
          },
          23069(e,
          t,
          r){
            r(47294)
          },
          32232(e,
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
              var c=n.slice(0,
              o+1);
              return r.protocol+"//"+r.host+c
            };
            Number.isInteger
          },
          82021(e,
          t,
          r){
            "use strict";
            const n={
              "./index":()=>Promise.all([r.e(5660),
              r.e(9534),
              r.e(8277),
              r.e(3336),
              r.e(9042),
              r.e(883),
              r.e(4718),
              r.e(5748),
              r.e(8184),
              r.e(1270),
              r.e(8507),
              r.e(3612),
              r.e(2828),
              r.e(2326),
              r.e(6893)]).then(()=>()=>r(67236))
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
          },
          25136(e){
            "use strict";
            e.exports=r
          }
        };
        const n={
        };
        function a(t){
          const r=n[t];
          if(void 0!==r)return r.exports;
          const o=n[t]={
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
        a.c=n,
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
          331:"80db6482c40ab336ae2b617f0922a784",
          658:"5f5d3468f5e6e73d12e9a7ea443dd51e",
          883:"af5660b6aab95530e5a7b9d4e795aa7d",
          1420:"47ce0f11b2607604eab99ae9e81ef5e8",
          1758:"d4c93284a36f3f0bb08939046282526a",
          2326:"7243cd12765275b4bead51240eb7ce72",
          2360:"b900e22f5b97b5b26dabea96b8f904d4",
          2402:"da6e9d7db94d5ae7c0a65551a37f02e4",
          2438:"0fb8812ba5d402f868e93fe3e53bc484",
          2578:"88470331165592f1d74c07dcb30d8413",
          2828:"170a359afca32d4284b6f796bd9ff0ea",
          2873:"1e3786196cbce5ca451d7cb652299002",
          2940:"4e30d72803d932ebd962d422a09830f8",
          3336:"41f562f409d49efb614f050df76f433d",
          3612:"cc64b61c49878279cedb9248613ad7d9",
          3819:"4a8fe82ae3ed6ece7a1b17557eba593f",
          3888:"10f4952d401f29fb3a70546a7f983ecc",
          4584:"eff13ff07d706d4de26088fe5afc191b",
          4718:"cadd065383be45818e1dad7718258680",
          4921:"2c77da09febba6d8c85defb5d7f3e032",
          4930:"3d23cbd167bbaf8952f314fc627f8388",
          5072:"b390cf4813b5515110c6d4cf058b9742",
          5073:"64acde4acca03766847cdb1364c0afc4",
          5629:"fecd1dcbb922a61a6cd88a6be826bbcd",
          5660:"0e755c71722e7a18989e33486bd8b785",
          6038:"a69cf0bd3fe298701bacdf33f28165e9",
          6071:"33f8134ecee24ad4ae57e20a33721af5",
          6123:"13890a734101670acc5231e779126fc5",
          6147:"2e9e6a76006e44ca9221857e7a45183d",
          6281:"4931717795e62682c891c805a5596a4f",
          6589:"c95ccd290f0676365c8b41a136590513",
          6893:"9aef0d13a760ede442b813dc609a386b",
          7556:"2a9b11071d2d6f7f0af7a9e69efb261a",
          7794:"008bd1b4ca4f1d3c9bd9d88a829e11fa",
          7946:"fcaee911daaf78cbf443ee6aa0086aae",
          8277:"bb61287e526ba6df7bdcde01447aa724",
          8507:"3bbc31a45085f2567739062785937283",
          8574:"b3fe70bcea9d1dcc5230812a671103d4",
          9042:"83f03f13c92039614e37f39f65cd8e97",
          9181:"14735c4cd6e7efaa74833d4749afbf43",
          9210:"83906979019e2394be7af00a1bbd26b2",
          9292:"9a78df172bf78fd2dbd44ef8636b75ba",
          9384:"df3f09cdb9042af703e723410b7a0073",
          9399:"e53dcf9d86ba3994a9442ffda1a605e0",
          9534:"e8e760e0d33490b21d35c0e167a1d40d",
          9811:"a38d1d73f950f9808afcf8e3a459a278",
          9848:"580978f8b1b154ac8623742e9df82eb5"
        }[e]+".js",
        a.miniCssF=e=>"css/"+{
          1420:"7c575cc0a210038808b12a81bf37629b",
          1758:"bfb1b57fe719ebd7f8e99fd13df3359f",
          2326:"3e759e2d1141e1c59be17208db70ba3b",
          2402:"a1d1cd2e56a2d4ce7d0c5ec852230f9a",
          2578:"c545b598eb8392349a6846007ba952df",
          5629:"52e0ceb4a2e6e429ee4f8422067592be",
          6071:"a21138ab66ead697a7c657b7f3cbdff8",
          6893:"427393d18eaa55d84a24f800b715e49c",
          9100:"7c575cc0a210038808b12a81bf37629b"
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
          t="@rockstargames/sites-red-dead-online:";
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
                const n=e[s];
                if(n.getAttribute("src")==r||n.getAttribute("data-webpack")==t+o){
                  d=n;
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
            const i=(t,
            n)=>{
              d.onerror=d.onload=null,
              clearTimeout(l);
              const a=e[r];
              if(delete e[r],
              d.parentNode?.removeChild(d),
              a?.forEach(e=>e(n)),
              t)return t(n)
            },
            l=setTimeout(i.bind(null,
            void 0,
            {
              type:"timeout",
              target:d
            }),
            12e4);
            d.onerror=i.bind(null,
            d.onerror),
            d.onload=i.bind(null,
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
          const e={
            2326:[31879]
          },
          t={
            31879:["default",
            "./index",
            25136]
          };
          a.f.remotes=(r,
          n)=>{
            a.o(e,
            r)&&e[r].forEach(e=>{
              let r=a.R;
              r||(r=[]);
              const o=t[e];
              if(r.indexOf(o)>=0)return;
              if(r.push(o),
              o.p)return n.push(o.p);
              const c=t=>{
                t||(t=new Error("Container missing")),
                "string"==typeof t.message&&(t.message+='\nwhile loading "'+o[1]+'" from '+o[2]),
                a.m[e]=()=>{
                  throw t
                },
                o.p=0
              },
              d=(e,
              t,
              r,
              a,
              d,
              f)=>{
                try{
                  const s=e(t,
                  r);
                  if(!s?.then)return d(s,
                  a,
                  f);
                  {
                    const e=s.then(e=>d(e,
                    a),
                    c);
                    if(!f)return e;
                    n.push(o.p=e)
                  }
                }catch(e){
                  c(e)
                }
              },
              f=(e,
              t,
              n)=>d(t.get,
              o[1],
              r,
              0,
              s,
              n),
              s=t=>{
                o.p=1,
                a.m[e]=e=>{
                  e.exports=t()
                }
              };
              d(a,
              o[2],
              0,
              0,
              (e,
              t,
              r)=>e?d(a.I,
              o[0],
              0,
              e,
              f,
              r):c(),
              1)
            })
          }
        })(),
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
            d="@rockstargames/sites-red-dead-online",
            f=(e,
            t,
            r,
            n)=>{
              const a=c[e]=c[e]||{
              },
              o=a[t];
              (!o||!o.loaded&&(!n!=!o.eager?n:d>o.from))&&(a[t]={
                get:r,
                from:d,
                eager:!!n
              })
            },
            s=[];
            return"default"===r&&(f("@foundry-int/utils",
            "7.5.1",
            ()=>Promise.all([a.e(883),
            a.e(9181),
            a.e(1270)]).then(()=>()=>a(59181))),
            f("@foundry/icons",
            "7.5.1",
            ()=>Promise.all([a.e(2940),
            a.e(5748),
            a.e(8184),
            a.e(1420)]).then(()=>()=>a(32940))),
            f("@foundry/react",
            "7.5.1",
            ()=>Promise.all([a.e(8277),
            a.e(5629),
            a.e(9042),
            a.e(2873),
            a.e(2578),
            a.e(5748),
            a.e(8184),
            a.e(1270),
            a.e(3785),
            a.e(9292)]).then(()=>()=>a(22578))),
            f("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([a.e(5660),
            a.e(9534),
            a.e(2873),
            a.e(5748),
            a.e(6147)]).then(()=>()=>a(6147))),
            f("@rsgweb/modules-core-feedback",
            "0.0.0",
            ()=>Promise.all([a.e(9534),
            a.e(8277),
            a.e(3336),
            a.e(5748),
            a.e(1270),
            a.e(3612),
            a.e(2828),
            a.e(1758)]).then(()=>()=>a(51758))),
            f("@rsgweb/modules-core-newswire-article",
            "0.0.0-development",
            ()=>Promise.all([a.e(5660),
            a.e(9534),
            a.e(8277),
            a.e(5629),
            a.e(3336),
            a.e(9042),
            a.e(883),
            a.e(2402),
            a.e(4718),
            a.e(5748),
            a.e(8184),
            a.e(1270),
            a.e(8507),
            a.e(3612),
            a.e(3785),
            a.e(2828),
            a.e(6071),
            a.e(2326)]).then(()=>()=>a(59508))),
            f("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([a.e(5660),
            a.e(9534),
            a.e(8277),
            a.e(3336),
            a.e(5072),
            a.e(5748),
            a.e(8507),
            a.e(3612),
            a.e(4930)]).then(()=>()=>a(4930))),
            f("clsx",
            "2.1.1",
            ()=>a.e(4921).then(()=>()=>a(4921))),
            f("date-fns",
            "4.4.0",
            ()=>a.e(7946).then(()=>()=>a(87946))),
            f("focus-trap-react",
            "12.0.3",
            ()=>Promise.all([a.e(6281),
            a.e(5748)]).then(()=>()=>a(66281))),
            f("hammerjs",
            "2.0.8",
            ()=>a.e(6038).then(()=>()=>a(36038))),
            f("prop-types",
            "15.8.1",
            ()=>a.e(331).then(()=>()=>a(60331))),
            f("react-dom",
            "19.2.8",
            ()=>Promise.all([a.e(5748),
            a.e(9848)]).then(()=>()=>a(79848))),
            f("react-router",
            "7.18.4",
            ()=>Promise.all([a.e(8574),
            a.e(5748)]).then(()=>()=>a(68574))),
            f("react",
            "19.2.8",
            ()=>a.e(3888).then(()=>()=>a(83888))),
            (e=>{
              const t=e=>{
                return t="Initialization of sharing external failed: "+e,
                void("undefined"!=typeof console&&console.warn&&console.warn(t));
                var t
              };
              try{
                const o=a(e);
                if(!o)return;
                const c=e=>e&&e.init&&e.init(a.S[r],
                n);
                if(o.then)return s.push(o.then(c,
                t));
                const d=c(o);
                if(d?.then)return s.push(d.catch(t))
              }catch(e){
                t(e)
              }
            })(25136)),
            s.length?e[r]=Promise.all(s).then(()=>e[r]=1):e[r]=1
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
              n+="u"==(typeof(d=e[o]))[0]?"-":(a>0?".":"")+(a=2,
              d);
              return n
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
          n)=>{
            if(0 in t){
              n=e(n);
              var a=t[0],
              o=a<0;
              o&&(a=-a-1);
              for(var c=0,
              d=1,
              f=!0;
              ;
              d++,
              c++){
                var s,
                i,
                l=d<t.length?(typeof t[d])[0]:"";
                if(c>=n.length||"o"==(i=(typeof(s=n[c]))[0]))return!f||("u"==l?d>a&&!o:""==l!=o);
                if("u"==i){
                  if(!f||"u"!=l)return!1
                }else if(f)if(l==i)if(d<=a){
                  if(s!=t[d])return!1
                }else{
                  if(o?s>t[d]:s<t[d])return!1;
                  s!=t[d]&&(f=!1)
                }else if("s"!=l&&"n"!=l){
                  if(o||d<=a)return!1;
                  f=!1,
                  d--
                }else{
                  if(d<=a||i<l!=o)return!1;
                  f=!1
                }else"s"!=l&&"n"!=l&&(f=!1,
                d--)
              }
            }var u=[],
            b=u.pop.bind(u);
            for(c=1;
            c<t.length;
            c++){
              var h=t[c];
              u.push(1==h?b()|b():2==h?b()&b():h?r(h,
              n):!b())
            }return!!b()
          };
          const n=(e,
          t)=>e&&a.o(e,
          t),
          o=e=>(e.loaded=1,
          e.get()),
          c=(t,
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
                var c=r[n],
                d=(typeof c)[0];
                if(o!=d)return"o"==o&&"n"==d||"s"==d||"u"==o;
                if("o"!=o&&"u"!=o&&a!=c)return a<c;
                n++
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
          i=d((e,
          a,
          d,
          s,
          i,
          l)=>{
            if(!n(a,
            d))return f(e,
            d,
            l);
            const u=c(a,
            d,
            s);
            return r(i,
            u)||(b=((e,
            r,
            n,
            a)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(a)+")")(a,
            d,
            u,
            i),
            "undefined"!=typeof console&&console.warn&&console.warn(b)),
            o(a[d][u]);
            var b
          }),
          l={
          },
          u={
            95748:()=>s("default",
            "react",
            !1,
            ()=>a.e(3888).then(()=>()=>a(83888))),
            57281:()=>s("default",
            "react-dom",
            !1,
            ()=>a.e(3819).then(()=>()=>a(79848))),
            64592:()=>s("default",
            "@foundry-int/utils",
            !1,
            ()=>Promise.all([a.e(883),
            a.e(9181),
            a.e(1270)]).then(()=>()=>a(59181))),
            81270:()=>i("default",
            "clsx",
            !1,
            [1,
            2,
            1,
            1],
            ()=>a.e(4921).then(()=>()=>a(4921))),
            14564:()=>s("default",
            "@rsgweb/locale-tools",
            !1,
            ()=>Promise.all([a.e(5660),
            a.e(2873),
            a.e(6147)]).then(()=>()=>a(6147))),
            43788:()=>s("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([a.e(5660),
            a.e(5072),
            a.e(8507),
            a.e(4930)]).then(()=>()=>a(4930))),
            93234:()=>s("default",
            "react-router",
            !1,
            ()=>a.e(8574).then(()=>()=>a(68574))),
            59248:()=>s("default",
            "@foundry/react",
            !1,
            ()=>Promise.all([a.e(5629),
            a.e(9042),
            a.e(2873),
            a.e(2578),
            a.e(8184),
            a.e(3785)]).then(()=>()=>a(22578))),
            75253:()=>s("default",
            "date-fns",
            !1,
            ()=>a.e(7946).then(()=>()=>a(87946))),
            80584:()=>s("default",
            "focus-trap-react",
            !1,
            ()=>a.e(6281).then(()=>()=>a(66281))),
            89653:()=>i("default",
            "prop-types",
            !1,
            [1,
            15,
            8,
            1],
            ()=>a.e(331).then(()=>()=>a(60331))),
            10640:()=>s("default",
            "@rsgweb/modules-core-newswire-article",
            !1,
            ()=>Promise.all([a.e(5629),
            a.e(2402),
            a.e(3785),
            a.e(6071)]).then(()=>()=>a(59508))),
            74694:()=>s("default",
            "@rsgweb/modules-core-feedback",
            !1,
            ()=>a.e(1758).then(()=>()=>a(51758))),
            13785:()=>s("default",
            "@foundry/icons",
            !1,
            ()=>Promise.all([a.e(2940),
            a.e(9100)]).then(()=>()=>a(32940))),
            12341:()=>i("default",
            "hammerjs",
            !1,
            [1,
            2,
            0,
            8],
            ()=>a.e(6038).then(()=>()=>a(36038)))
          },
          b={
            1270:[81270],
            2326:[80584,
            89653],
            2828:[59248,
            75253],
            3612:[14564,
            43788,
            93234],
            3785:[13785],
            5748:[95748],
            6071:[12341],
            6893:[10640,
            74694],
            8184:[57281,
            64592]
          },
          h={
          };
          a.f.consumes=(e,
          t)=>{
            a.o(b,
            e)&&b[e].forEach(e=>{
              if(a.o(l,
              e))return t.push(l[e]);
              if(!h[e]){
                const r=t=>{
                  l[e]=0,
                  a.m[e]=r=>{
                    delete a.c[e],
                    r.exports=t()
                  }
                };
                h[e]=!0;
                const n=t=>{
                  delete l[e],
                  a.m[e]=r=>{
                    throw delete a.c[e],
                    t
                  }
                };
                try{
                  const a=u[e]();
                  a.then?t.push(l[e]=a.then(r).catch(n)):r(a)
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
              129:0
            };
            a.f.miniCss=(t,
            r)=>{
              e[t]?r.push(e[t]):0!==e[t]&&{
                1420:1,
                1758:1,
                2326:1,
                2402:1,
                2578:1,
                5629:1,
                6071:1,
                6893:1,
                9100:1
              }[t]&&r.push(e[t]=(e=>new Promise((t,
              r)=>{
                var n=a.miniCssF(e),
                o=a.p+n;
                if(((e,
                t)=>{
                  for(var r=document.getElementsByTagName("link"),
                  n=0;
                  n<r.length;
                  n++){
                    var a=(c=r[n]).getAttribute("data-href")||c.getAttribute("href");
                    if("stylesheet"===c.rel&&(a===e||a===t))return c
                  }var o=document.getElementsByTagName("style");
                  for(n=0;
                  n<o.length;
                  n++){
                    var c;
                    if((a=(c=o[n]).getAttribute("data-href"))===e||a===t)return c
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
            129:0
          };
          a.f.j=(t,
          r)=>{
            let n=a.o(e,
            t)?e[t]:void 0;
            if(0!==n)if(n)r.push(n[2]);
            else if(/^(1270|3785|5748|8184|9100)$/.test(t))e[t]=0;
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
          r=self.webpackChunk_rockstargames_sites_red_dead_online=self.webpackChunk_rockstargames_sites_red_dead_online||[];
          r.forEach(t.bind(null,
          0)),
          r.push=t.bind(null,
          r.push.bind(r))
        })(),
        a.nc=void 0,
        a(23069),
        a(82021)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map
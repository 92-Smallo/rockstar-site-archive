try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="7c54ce7e-06b2-4e7b-8872-dd932b0a7bff",
  e._sentryDebugIdIdentifier="sentry-dbid-7c54ce7e-06b2-4e7b-8872-dd932b0a7bff")
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
    packageName:"@rockstargames/sites-legacy",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"67459d972fa138db6c3b11c6d2cf8740c1d8f79b"
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
          85946(e,
          t,
          r){
            (0,
            r(69e3).w)(1)
          },
          69e3(e,
          t,
          r){
            const n=r(31364).y;
            t.w=function(e){
              if(e||(e=1),
              !r.y.meta||!r.y.meta.url)throw console.error("__system_context__",
              r.y),
              Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p=n(r.y.meta.url,
              e)
            }
          },
          64769(e,
          t,
          r){
            r(85946)
          },
          31364(e,
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
          54334(e,
          t,
          r){
            "use strict";
            const n={
              "./site-routes/Bully":()=>Promise.all([r.e(31),
              r.e(2194),
              r.e(4826),
              r.e(178),
              r.e(775),
              r.e(6339),
              r.e(3586),
              r.e(5748),
              r.e(4612),
              r.e(3788),
              r.e(4564),
              r.e(9653),
              r.e(8130),
              r.e(1598),
              r.e(7281),
              r.e(713),
              r.e(2284),
              r.e(6148),
              r.e(8892)]).then(()=>()=>r(18892)),
              "./site-routes/RedDeadRedemption":()=>Promise.all([r.e(31),
              r.e(2194),
              r.e(4826),
              r.e(178),
              r.e(775),
              r.e(6339),
              r.e(3586),
              r.e(5748),
              r.e(4612),
              r.e(3788),
              r.e(4564),
              r.e(9653),
              r.e(8130),
              r.e(1598),
              r.e(7281),
              r.e(713),
              r.e(2284),
              r.e(6148),
              r.e(5812)]).then(()=>()=>r(75812)),
              "./tina":()=>Promise.all([r.e(31),
              r.e(2194),
              r.e(4826),
              r.e(178),
              r.e(775),
              r.e(6339),
              r.e(3586),
              r.e(5748),
              r.e(4612),
              r.e(3788),
              r.e(4564),
              r.e(9653),
              r.e(8130),
              r.e(1598),
              r.e(7281),
              r.e(713),
              r.e(2284),
              r.e(6148)]).then(()=>()=>r(336))
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
        (()=>{
          const e=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;
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
            o=t[r++];
            a.o(e,
            n)?0===o&&r++:0===o?Object.defineProperty(e,
            n,
            {
              enumerable:!0,
              value:t[r++]
            }):Object.defineProperty(e,
            n,
            {
              enumerable:!0,
              get:o
            })
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
          16:"ae5877412be664d691dc80d49f99fef1",
          31:"2082a03eec254931948cca087a386475",
          178:"60d2b6e15f491c8b173e1995f959defb",
          331:"8e33c517fb44ff52f8246e789ece3198",
          504:"e74de186fe04a94318ff59ea06c0bd98",
          713:"37bab804fcf9fb7a6128ea29195f4ae6",
          775:"9372634816721dc0afdfc73ce474d178",
          890:"25ca5c6167dac994f09812d21f27e559",
          1155:"d749ff761fc5aa013d71e27ed2cf0998",
          1294:"b7e7dfee090af0f069808b201d384449",
          1519:"4154591163b3e5c4ed00082f6aea43ae",
          1603:"f8392ee00a3e49a8915cbd3451bbc1b3",
          2194:"0aa18a00f82e35922cbc34890e445946",
          2272:"3eb4ea8f6934cf6bfb2dffb85b7689b9",
          3085:"7ff50f62640814583b54895551170fd7",
          3189:"64b42de0686de3e0d62a011c1e1739d3",
          3548:"c4dce798211a4d07ab09fd8be80dc5b9",
          3575:"70edfcf614c14eaabefa1208db8b4e53",
          3586:"21b3a1ee51e7099f46c78282aa47924a",
          3615:"060fe2d33c0aca93787c08c1ed6a0a46",
          3667:"512fd571abc583d6ffebc0a07a311c45",
          3819:"963bab87ae35c66fa99d22803be05c7a",
          3888:"4761558797957e1444abab800a0b42df",
          4250:"33d797d7c8482c368ec20f96dd91e687",
          4415:"7073d3da8444e1d8cb5a3d614485a2e0",
          4427:"9050ac49233ea6d5178163a950c811ad",
          4732:"e42c4d43d83da147873341803b1b9493",
          4826:"345aeb428d600305e3a87ad00abd9f61",
          4921:"6ae416b035400f200bf9df7e35da99df",
          5073:"eab000db97ff3eff089b859ebda9e9aa",
          5808:"e33f160a9acd73aa3e3b08dfc0bf2e01",
          5812:"4cf365fda3cff2be10fd7f4c481ab15c",
          5826:"4b012229d3d9e61f45bb2bbe044bf5b0",
          5996:"f7d12e858c2ae00f1b2d6bc2f1dd264c",
          6048:"ee5187f41f0370b428649bf2cb887090",
          6148:"9120c649343a23cfcd10de048aaf9399",
          6339:"d66cdb2df8093f23e9911e8cc2d816b4",
          6592:"1cbe52bfc3f704f0484a8daf6eca721d",
          6918:"feac6c5b8a83e7ad970b5755745cb07e",
          7098:"e27d915825b326301ac763b0d4a42afa",
          7302:"2c1845da79fbcd2ef85a47ad552b4485",
          7490:"45acc104d84cb940383c86197c03a2c0",
          7850:"d782ae8966ed977a66ca41d0d239dd44",
          8123:"b90dc6b8498b4d39cc459c8f76d6f4fa",
          8232:"65d41a4c5c694184666c2007dbf6d783",
          8509:"9fe6553267895f2d6e5d51e3c2d9972f",
          8892:"c4e40815581de8b9e78e0dfb2ca4328f",
          9192:"4c03546a8e1aa8e142c9962d408422b9",
          9292:"979c8db4f08a1b60e72395ee54c57d5c",
          9343:"b6719575daa199837282b41fde7a495e",
          9361:"5eda328e4fd81ac838f3c21d1098e87b",
          9523:"54c955bd03c2756c39664e9391daf9b2",
          9680:"04ebd3f39040d5ba864d26fef4002c7e",
          9747:"1537c5640dc7495e434f910509b0ab85",
          9848:"200c04fab6cf5b71c1c5714f3da09600",
          9865:"2142610d3aeaa4f6bba3ed1e9ab9d6d8"
        }[e]+".js",
        a.miniCssF=e=>"css/"+{
          1583:"82b8e41eb90eae7db3adfb9fff54d045",
          3586:"afb1b8cba2e102dddfffa04f0bf8f2f3",
          4250:"b3313fda99862d6d64bd2a829ae71ca3",
          5812:"52e55b769351b6e3f1602fe5d2baacd1",
          6148:"f9aaae3d70a84f3cf253a7323dac0a9a",
          7490:"82b8e41eb90eae7db3adfb9fff54d045",
          8232:"0da34c51e2b4fd6c15dacfcb90c7d337",
          8892:"52e55b769351b6e3f1602fe5d2baacd1",
          9733:"5d9ea12fe0bfbef2517e5ab325ee5350"
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
          t="@rockstargames/sites-legacy:";
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
        a.nmd=e=>(e.paths=[],
        e.children||(e.children=[]),
        e),
        (()=>{
          const e={
            6148:[31879]
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
            d="@rockstargames/sites-legacy",
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
            return"default"===r&&(f("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([a.e(31),
            a.e(2194),
            a.e(775),
            a.e(9747),
            a.e(5748),
            a.e(5996)]).then(()=>()=>a(75996))),
            f("@rsgweb/modules-core-hero",
            "0.0.0",
            ()=>Promise.all([a.e(5748),
            a.e(4612),
            a.e(3788),
            a.e(4564),
            a.e(8130),
            a.e(1598),
            a.e(713),
            a.e(8232)]).then(()=>()=>a(40262))),
            f("@rsgweb/modules-core-highlights",
            "0.0.0",
            ()=>Promise.all([a.e(6339),
            a.e(5748),
            a.e(4564),
            a.e(8130),
            a.e(1598),
            a.e(2284),
            a.e(9733),
            a.e(6048)]).then(()=>()=>a(6048))),
            f("@rsgweb/rockstar-account",
            "0.0.0",
            ()=>Promise.all([a.e(31),
            a.e(4826),
            a.e(7098),
            a.e(6918),
            a.e(5748),
            a.e(4612),
            a.e(3788),
            a.e(4564),
            a.e(2272),
            a.e(890)]).then(()=>()=>a(18509))),
            f("@rsgweb/tina",
            "0.0.0",
            ()=>Promise.all([a.e(31),
            a.e(2194),
            a.e(178),
            a.e(5073),
            a.e(3575),
            a.e(5748),
            a.e(3788),
            a.e(4564),
            a.e(9653),
            a.e(8130),
            a.e(7281),
            a.e(9192),
            a.e(3548),
            a.e(7490)]).then(()=>()=>a(38512))),
            f("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([a.e(31),
            a.e(2194),
            a.e(4826),
            a.e(7098),
            a.e(5073),
            a.e(9523),
            a.e(5748),
            a.e(4612),
            a.e(4564),
            a.e(2272),
            a.e(9192),
            a.e(6647),
            a.e(9865)]).then(()=>()=>a(69865))),
            f("clsx",
            "2.1.1",
            ()=>a.e(4921).then(()=>()=>a(4921))),
            f("focus-trap-react",
            "10.3.1",
            ()=>Promise.all([a.e(1155),
            a.e(5748),
            a.e(9653)]).then(()=>()=>a(61155))),
            f("framer-motion",
            "12.43.0",
            ()=>Promise.all([a.e(5808),
            a.e(5748),
            a.e(9292)]).then(()=>()=>a(45808))),
            f("graphql",
            "16.14.2",
            ()=>a.e(1519).then(()=>()=>a(91519))),
            f("prop-types",
            "15.8.1",
            ()=>a.e(331).then(()=>()=>a(60331))),
            f("react-dom",
            "19.2.8",
            ()=>Promise.all([a.e(5748),
            a.e(9848)]).then(()=>()=>a(79848))),
            f("react-intersection-observer",
            "9.16.0",
            ()=>Promise.all([a.e(5748),
            a.e(8123)]).then(()=>()=>a(68123))),
            f("react-router",
            "7.18.2",
            ()=>Promise.all([a.e(9361),
            a.e(5748)]).then(()=>()=>a(9361))),
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
        a.cjs=e=>{
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
          a.g.importScripts&&(e=a.g.location+"");
          const t=a.g.document;
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
            }var b=[],
            u=b.pop.bind(b);
            for(c=1;
            c<t.length;
            c++){
              var h=t[c];
              b.push(1==h?u()|u():2==h?u()&u():h?r(h,
              n):!u())
            }return!!u()
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
            const b=c(a,
            d,
            s);
            return r(i,
            b)||(u=((e,
            r,
            n,
            a)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(a)+")")(a,
            d,
            b,
            i),
            "undefined"!=typeof console&&console.warn&&console.warn(u)),
            o(a[d][b]);
            var u
          }),
          l={
          },
          b={
            95748:()=>s("default",
            "react",
            !1,
            ()=>a.e(3888).then(()=>()=>a(83888))),
            94612:()=>s("default",
            "react-router",
            !1,
            ()=>a.e(9361).then(()=>()=>a(9361))),
            43788:()=>s("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([a.e(31),
            a.e(2194),
            a.e(4826),
            a.e(7098),
            a.e(5073),
            a.e(9523),
            a.e(4612),
            a.e(2272),
            a.e(9192),
            a.e(4415)]).then(()=>()=>a(69865))),
            14564:()=>s("default",
            "@rsgweb/locale-tools",
            !1,
            ()=>Promise.all([a.e(31),
            a.e(2194),
            a.e(775),
            a.e(9747),
            a.e(3615)]).then(()=>()=>a(75996))),
            89653:()=>i("default",
            "prop-types",
            !1,
            [1,
            15,
            8,
            1],
            ()=>a.e(331).then(()=>()=>a(60331))),
            8130:()=>s("default",
            "@rsgweb/rockstar-account",
            !1,
            ()=>Promise.all([a.e(31),
            a.e(4826),
            a.e(7098),
            a.e(6918),
            a.e(4612),
            a.e(3788),
            a.e(2272),
            a.e(8509)]).then(()=>()=>a(18509))),
            24267:()=>s("default",
            "framer-motion",
            !1,
            ()=>a.e(5808).then(()=>()=>a(45808))),
            66176:()=>s("default",
            "@rsgweb/tina",
            !1,
            ()=>Promise.all([a.e(31),
            a.e(2194),
            a.e(178),
            a.e(5073),
            a.e(3575),
            a.e(3788),
            a.e(9653),
            a.e(7281),
            a.e(9192),
            a.e(3548),
            a.e(1583)]).then(()=>()=>a(38512))),
            57281:()=>s("default",
            "react-dom",
            !1,
            ()=>a.e(3819).then(()=>()=>a(79848))),
            81270:()=>i("default",
            "clsx",
            !1,
            [1,
            2,
            1,
            1],
            ()=>a.e(4921).then(()=>()=>a(4921))),
            52284:()=>i("default",
            "react-intersection-observer",
            !1,
            [1,
            9,
            16,
            0],
            ()=>a.e(504).then(()=>()=>a(68123))),
            5320:()=>i("default",
            "focus-trap-react",
            !1,
            [1,
            10,
            3,
            1],
            ()=>a.e(1155).then(()=>()=>a(61155))),
            53388:()=>s("default",
            "@rsgweb/modules-core-highlights",
            !1,
            ()=>Promise.all([a.e(9733),
            a.e(3667)]).then(()=>()=>a(6048))),
            71580:()=>s("default",
            "@rsgweb/modules-core-hero",
            !1,
            ()=>a.e(4250).then(()=>()=>a(40262))),
            26647:()=>s("default",
            "graphql",
            !1,
            ()=>a.e(1519).then(()=>()=>a(91519)))
          },
          u={
            713:[81270],
            1598:[24267,
            66176],
            2284:[52284],
            3788:[43788],
            4415:[26647],
            4564:[14564],
            4612:[94612],
            5748:[95748],
            6148:[5320,
            53388,
            71580],
            6647:[26647],
            7281:[57281],
            8130:[8130],
            9653:[89653]
          },
          h={
          };
          a.f.consumes=(e,
          t)=>{
            a.o(u,
            e)&&u[e].forEach(e=>{
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
                  const a=b[e]();
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
              8106:0
            };
            a.f.miniCss=(t,
            r)=>{
              e[t]?r.push(e[t]):0!==e[t]&&{
                1583:1,
                3586:1,
                4250:1,
                5812:1,
                6148:1,
                7490:1,
                8232:1,
                8892:1,
                9733:1
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
            8106:0
          };
          a.f.j=(t,
          r)=>{
            let n=a.o(e,
            t)?e[t]:void 0;
            if(0!==n)if(n)r.push(n[2]);
            else if(/^(15(83|98)|2284|3788|4564|4612|5748|6647|7281|8130|9653|9733)$/.test(t))e[t]=0;
            else{
              const o=new Promise((r,
              a)=>n=e[t]=[r,
              a]);
              r.push(n[2]=o);
              const c=a.p+a.u(t),
              d=new Error,
              f=r=>{
                if(a.o(e,
                t)&&(n=e[t],
                0!==n&&(e[t]=void 0),
                n)){
                  const e=r&&("load"===r.type?"missing":r.type),
                  a=r&&r.target&&r.target.src;
                  d.message="Loading chunk "+t+" failed.\n("+e+": "+a+")",
                  d.name="ChunkLoadError",
                  d.type=e,
                  d.request=a,
                  d.event=r,
                  n[1](d)
                }
              };
              a.l(c,
              f,
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
          r=self.webpackChunk_rockstargames_sites_legacy=self.webpackChunk_rockstargames_sites_legacy||[];
          r.forEach(t.bind(null,
          0)),
          r.push=t.bind(null,
          r.push.bind(r))
        })(),
        a.nc=void 0,
        a(64769),
        a(54334)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map
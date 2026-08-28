try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="796df87b-58cf-4f66-9f6a-185b42378701",
  e._sentryDebugIdIdentifier="sentry-dbid-796df87b-58cf-4f66-9f6a-185b42378701")
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
    release:"90576ff78edf4e7c067413c3d030b5d466aa6a58",
    packageName:"@rockstargames/sites-red-dead-online",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"90576ff78edf4e7c067413c3d030b5d466aa6a58"
},
System.register(["@rockstargames/modules-core-newswire-article",
"@rockstargames/modules-core-videoplayer"],
function(e,
t){
  var r={
  },
  n={
  };
  return Object.defineProperty(r,
  "__esModule",
  {
    value:!0
  }),
  Object.defineProperty(n,
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
    },
    function(e){
      n.default=e.default||e,
      Object.keys(e).forEach(function(t){
        n[t]=e[t]
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
              o=0,
              a=n.length;
              o!==t&&a>=0;
              )"/"===n[--a]&&o++;
              if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);
              var f=n.slice(0,
              a+1);
              return r.protocol+"//"+r.host+f
            };
            Number.isInteger
          },
          82021(e,
          t,
          r){
            "use strict";
            const n={
              "./index":()=>Promise.all([r.e(6256),
              r.e(8207),
              r.e(5140),
              r.e(883),
              r.e(7033),
              r.e(2351),
              r.e(3082),
              r.e(4017),
              r.e(1270),
              r.e(2272),
              r.e(9192),
              r.e(625),
              r.e(9653),
              r.e(9809)]).then(()=>()=>r(99809))
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
          66819(e){
            "use strict";
            e.exports=r
          },
          25136(e){
            "use strict";
            e.exports=n
          }
        };
        const o={
        };
        function a(t){
          const r=o[t];
          if(void 0!==r)return r.exports;
          const n=o[t]={
            id:t,
            loaded:!1,
            exports:{
            }
          };
          return e[t].call(n.exports,
          n,
          n.exports,
          a),
          n.loaded=!0,
          n.exports
        }return a.m=e,
        a.c=o,
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
            const f={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var d=2&n&&r;
            ("object"==typeof d||"function"==typeof d)&&!~t.indexOf(d);
            d=e(d))Object.getOwnPropertyNames(d).forEach(e=>f[e]=()=>r[e]);
            return f.default=()=>r,
            a.d(o,
            f),
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
          162:"0e397735f5d7db72ccffed1255fef338",
          331:"1464132b686f0d64040389b8bbf66dfd",
          573:"f7a4477c325450fe9a41d1bdade8f64f",
          606:"8ab220488e7419bb92ce782677ca6153",
          625:"e26950f4e05797770e30116bd353ad8e",
          761:"fe53881317da2daaf7628c2ca9b4101b",
          883:"0adad9fca7120a4cf8db1b0c30c74694",
          956:"c2b2d0a3f74b08f0105b69ab9a7ec197",
          1203:"7e46758a31c4e135aaa29424ff969891",
          2272:"2fdede7851b746cc911d71a17aa0bd51",
          2351:"6670d1b91cf4f6a2be75ab611d3b4fd2",
          2581:"ac7a6ce47ccfd38427401bfb4f2d78cc",
          2656:"2206e1f22bd6eb17e2d3d1bf5f12e1e0",
          3769:"2f573dc6c457f181afbcb18688e4d457",
          4514:"bc934acb893c82b8f36112f9d49639bf",
          4597:"96907db8aa2c65be66fdcdbeca382ddf",
          4607:"2eae9285faead245350531a256fea097",
          4921:"3fcc2d34abcf5facf530866600e53cf8",
          4962:"66fb81b00f721d0216902e33c46da276",
          5140:"362e20cec289d0636ebca1e96b408c01",
          5529:"f691a90d9235df1033fd7ca58473ad92",
          5847:"76152c384cfdc02f1145fc2b2fd95ecc",
          6256:"e84959f0ccac0da97c40b83e9be8d3f4",
          6372:"45e5e790abcab7aedde8789f04d1811c",
          6405:"99213947f13f727966158dcbc2d0279d",
          6807:"0843c7f45f30e8316aea96a01a7a38a8",
          7033:"75a8fc461b937a7fbfaff0454366b5a2",
          7110:"1c3069e02bd0675349b3bc9ec9a1fe48",
          7602:"c5bd51b4d743b7274078c337eeeaf406",
          7725:"ff24d1f8e52f673828d7775fce355f3c",
          7946:"04b9760eb770f1eef681b23872a5c5e7",
          8207:"a883f4819fc884c2bb2e8d1cecbe3665",
          8504:"9632c51850079cf801fc2ffc6a8a3a55",
          8575:"58b96dcb8b309fe3827ccc7f7af00545",
          8696:"a37a1c0327a67873fa7d234a369fd9ae",
          9086:"88031d9cbeeb311eaa0b9f1fd0a70b86",
          9103:"e4afa1ac1ec2a518fd5389399d2d2878",
          9188:"41fe5bd7f19cc2aa5fe5f3d51340faac",
          9192:"c37397566822ad6053805586277de58a",
          9249:"0145296ecb1c5143ce7c1026a67e955d",
          9269:"588d2b398f37d7d786a290a10f46dad7",
          9708:"b8d9e4195bf7ab5c722418dd328f46bc",
          9809:"c9970f0d9f0ad401095878f3b729bca7",
          9860:"1202e4ed24d3c0e721a615c8dce78388",
          9933:"499c7c3a456f27ab8ea7924ef092bb8d"
        }[e]+".js",
        a.miniCssF=e=>"css/"+{
          704:"7c575cc0a210038808b12a81bf37629b",
          1203:"1c9b55705ab693054730e10b48cf08f1",
          6372:"7c575cc0a210038808b12a81bf37629b",
          9086:"5d0bafec817936de7cf8fe6576505c75",
          9809:"af46c6919832bb57abd0cc6085639100"
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
          f)=>{
            if(e[r])return void e[r].push(n);
            let d,
            c;
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
            }d||(c=!0,
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
              const o=e[r];
              if(delete e[r],
              d.parentNode?.removeChild(d),
              o?.forEach(e=>e(n)),
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
            c&&document.head.appendChild(d)
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
            9809:[9566,
            31879]
          },
          t={
            9566:["default",
            "./index",
            66819],
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
              const f=t=>{
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
              c)=>{
                try{
                  const s=e(t,
                  r);
                  if(!s?.then)return d(s,
                  a,
                  c);
                  {
                    const e=s.then(e=>d(e,
                    a),
                    f);
                    if(!c)return e;
                    n.push(o.p=e)
                  }
                }catch(e){
                  f(e)
                }
              },
              c=(e,
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
              c,
              r):f(),
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
            const f=a.S[r],
            d="@rockstargames/sites-red-dead-online",
            c=(e,
            t,
            r,
            n)=>{
              const o=f[e]=f[e]||{
              },
              a=o[t];
              (!a||!a.loaded&&(!n!=!a.eager?n:d>a.from))&&(o[t]={
                get:r,
                from:d,
                eager:!!n
              })
            },
            s=e=>{
              const t=e=>{
                return t="Initialization of sharing external failed: "+e,
                void("undefined"!=typeof console&&console.warn&&console.warn(t));
                var t
              };
              try{
                const o=a(e);
                if(!o)return;
                const f=e=>e&&e.init&&e.init(a.S[r],
                n);
                if(o.then)return i.push(o.then(f,
                t));
                const d=f(o);
                if(d?.then)return i.push(d.catch(t))
              }catch(e){
                t(e)
              }
            },
            i=[];
            return"default"===r&&(c("@foundry-int/utils",
            "6.6.1",
            ()=>Promise.all([a.e(883),
            a.e(9249),
            a.e(1270),
            a.e(8504)]).then(()=>()=>a(98504))),
            c("@foundry-int/utils",
            "6.6.1",
            ()=>Promise.all([a.e(883),
            a.e(9249),
            a.e(1270),
            a.e(6807)]).then(()=>()=>a(36807))),
            c("@foundry/icons",
            "6.6.1",
            ()=>Promise.all([a.e(7725),
            a.e(3082),
            a.e(4017),
            a.e(2874),
            a.e(6372)]).then(()=>()=>a(47725))),
            c("@foundry/react",
            "6.6.1",
            ()=>Promise.all([a.e(761),
            a.e(9086),
            a.e(3082),
            a.e(4017),
            a.e(1270),
            a.e(2874),
            a.e(5866),
            a.e(4597)]).then(()=>()=>a(19086))),
            c("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([a.e(6256),
            a.e(761),
            a.e(8207),
            a.e(573),
            a.e(3082),
            a.e(956)]).then(()=>()=>a(50956))),
            c("@rsgweb/modules-core-feedback",
            "0.0.0",
            ()=>Promise.all([a.e(8207),
            a.e(5140),
            a.e(7033),
            a.e(3082),
            a.e(1270),
            a.e(2272),
            a.e(1203),
            a.e(625)]).then(()=>()=>a(21203))),
            c("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([a.e(6256),
            a.e(8207),
            a.e(573),
            a.e(5140),
            a.e(3769),
            a.e(3082),
            a.e(2272),
            a.e(9192),
            a.e(606)]).then(()=>()=>a(40606))),
            c("clsx",
            "2.1.1",
            ()=>a.e(4921).then(()=>()=>a(4921))),
            c("date-fns",
            "4.4.0",
            ()=>a.e(7946).then(()=>()=>a(87946))),
            c("focus-trap-react",
            "10.3.1",
            ()=>Promise.all([a.e(4514),
            a.e(3082),
            a.e(9653)]).then(()=>()=>a(44514))),
            c("prop-types",
            "15.8.1",
            ()=>a.e(331).then(()=>()=>a(60331))),
            c("react-dom",
            "18.3.1",
            ()=>Promise.all([a.e(162),
            a.e(3082)]).then(()=>()=>a(30162))),
            c("react-router-dom",
            "6.30.4",
            ()=>Promise.all([a.e(9860),
            a.e(3082),
            a.e(4017)]).then(()=>()=>a(79860))),
            c("react",
            "18.3.1",
            ()=>a.e(2581).then(()=>()=>a(22581))),
            s(66819),
            s(25136)),
            i.length?e[r]=Promise.all(i).then(()=>e[r]=1):e[r]=1
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
              for(var o=1,
              a=1;
              a<e.length;
              a++)o--,
              n+="u"==(typeof(d=e[a]))[0]?"-":(o>0?".":"")+(o=2,
              d);
              return n
            }var f=[];
            for(a=1;
            a<e.length;
            a++){
              var d=e[a];
              f.push(0===d?"not("+c()+")":1===d?"("+c()+" || "+c()+")":2===d?f.pop()+" "+f.pop():t(d))
            }return c();
            function c(){
              return f.pop().replace(/^\((.+)\)$/,
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
              for(var f=0,
              d=1,
              c=!0;
              ;
              d++,
              f++){
                var s,
                i,
                l=d<t.length?(typeof t[d])[0]:"";
                if(f>=n.length||"o"==(i=(typeof(s=n[f]))[0]))return!c||("u"==l?d>o&&!a:""==l!=a);
                if("u"==i){
                  if(!c||"u"!=l)return!1
                }else if(c)if(l==i)if(d<=o){
                  if(s!=t[d])return!1
                }else{
                  if(a?s>t[d]:s<t[d])return!1;
                  s!=t[d]&&(c=!1)
                }else if("s"!=l&&"n"!=l){
                  if(a||d<=o)return!1;
                  c=!1,
                  d--
                }else{
                  if(d<=o||i<l!=a)return!1;
                  c=!1
                }else"s"!=l&&"n"!=l&&(c=!1,
                d--)
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
                var f=r[n],
                d=(typeof f)[0];
                if(a!=d)return"o"==a&&"n"==d||"s"==d||"u"==a;
                if("o"!=a&&"u"!=a&&o!=f)return o<f;
                n++
              }
            })(t,
            r)?r:t,
            0)
          },
          o=(e,
          t,
          r)=>r?r():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          f=(e=>function(t,
          r,
          n,
          o,
          f){
            const d=a.I(t);
            return d?.then&&!n?d.then(e.bind(e,
            t,
            a.S[t],
            r,
            !1,
            o,
            f)):e(t,
            a.S[t],
            r,
            n,
            o,
            f)
          })((e,
          f,
          d,
          c,
          s,
          i)=>{
            if(!((e,
            t)=>e&&a.o(e,
            t))(f,
            d))return o(e,
            d,
            i);
            const l=n(f,
            d,
            c);
            return r(s,
            l)||(b=((e,
            r,
            n,
            o)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(o)+")")(f,
            d,
            l,
            s),
            "undefined"!=typeof console&&console.warn&&console.warn(b)),
            (u=f[d][l]).loaded=1,
            u.get();
            var u,
            b
          }),
          d={
          },
          c={
            93082:()=>f("default",
            "react",
            !1,
            [0],
            ()=>a.e(2581).then(()=>()=>a(22581))),
            84017:()=>f("default",
            "react-dom",
            !1,
            [1,
            18,
            2,
            0],
            ()=>a.e(162).then(()=>()=>a(30162))),
            81270:()=>f("default",
            "clsx",
            !1,
            [1,
            2,
            1,
            1],
            ()=>a.e(4921).then(()=>()=>a(4921))),
            42909:()=>f("default",
            "@rsgweb/locale-tools",
            !1,
            [0],
            ()=>Promise.all([a.e(6256),
            a.e(761),
            a.e(573),
            a.e(8575)]).then(()=>()=>a(50956))),
            99225:()=>f("default",
            "react-router-dom",
            !1,
            [0],
            ()=>Promise.all([a.e(9860),
            a.e(4017)]).then(()=>()=>a(79860))),
            13331:()=>f("default",
            "@rsgweb/utils",
            !1,
            [0],
            ()=>Promise.all([a.e(6256),
            a.e(573),
            a.e(3769),
            a.e(9192),
            a.e(606)]).then(()=>()=>a(40606))),
            20005:()=>f("default",
            "@foundry/react",
            !1,
            [0],
            ()=>Promise.all([a.e(761),
            a.e(9086),
            a.e(4017),
            a.e(2874),
            a.e(5866)]).then(()=>()=>a(19086))),
            23592:()=>f("default",
            "date-fns",
            !1,
            [1,
            4,
            4,
            0],
            ()=>a.e(7946).then(()=>()=>a(87946))),
            89653:()=>f("default",
            "prop-types",
            !1,
            [1,
            15,
            8,
            1],
            ()=>a.e(331).then(()=>()=>a(60331))),
            56263:()=>f("default",
            "@rsgweb/modules-core-feedback",
            !1,
            [0],
            ()=>a.e(1203).then(()=>()=>a(21203))),
            58912:()=>f("default",
            "@foundry-int/utils",
            !1,
            [0],
            ()=>Promise.all([a.e(9249),
            a.e(9188)]).then(()=>()=>a(36807))),
            79955:()=>f("default",
            "focus-trap-react",
            !1,
            [1,
            10,
            3,
            1],
            ()=>a.e(4514).then(()=>()=>a(44514))),
            32874:()=>f("default",
            "@foundry-int/utils",
            !1,
            [0],
            ()=>Promise.all([a.e(883),
            a.e(9249),
            a.e(1270),
            a.e(8504)]).then(()=>()=>a(98504))),
            45866:()=>f("default",
            "@foundry/icons",
            !1,
            [0],
            ()=>Promise.all([a.e(7725),
            a.e(704)]).then(()=>()=>a(47725)))
          },
          s={
            625:[13331,
            20005,
            23592],
            1270:[81270],
            2272:[42909,
            99225],
            2874:[32874],
            3082:[93082],
            4017:[84017],
            5866:[45866],
            9653:[89653],
            9809:[56263,
            58912,
            79955]
          },
          i={
          };
          a.f.consumes=(e,
          t)=>{
            a.o(s,
            e)&&s[e].forEach(e=>{
              if(a.o(d,
              e))return t.push(d[e]);
              if(!i[e]){
                const r=t=>{
                  d[e]=0,
                  a.m[e]=r=>{
                    delete a.c[e],
                    r.exports=t()
                  }
                };
                i[e]=!0;
                const n=t=>{
                  delete d[e],
                  a.m[e]=r=>{
                    throw delete a.c[e],
                    t
                  }
                };
                try{
                  const o=c[e]();
                  o.then?t.push(d[e]=o.then(r).catch(n)):r(o)
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
                704:1,
                1203:1,
                6372:1,
                9086:1,
                9809:1
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
                    var o=(f=r[n]).getAttribute("data-href")||f.getAttribute("href");
                    if("stylesheet"===f.rel&&(o===e||o===t))return f
                  }var a=document.getElementsByTagName("style");
                  for(n=0;
                  n<a.length;
                  n++){
                    var f;
                    if((o=(f=a[n]).getAttribute("data-href"))===e||o===t)return f
                  }
                })(n,
                o))return t();
                ((e,
                t,
                r,
                n,
                o)=>{
                  var f=document.createElement("link");
                  f.rel="stylesheet",
                  f.type="text/css",
                  a.nc&&(f.nonce=a.nc),
                  f.onerror=f.onload=r=>{
                    if(f.onerror=f.onload=null,
                    "load"===r.type)n();
                    else{
                      var a=r&&r.type,
                      d=r&&r.target&&r.target.href||t,
                      c=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+d+")");
                      c.name="ChunkLoadError",
                      c.code="CSS_CHUNK_LOAD_FAILED",
                      c.type=a,
                      c.request=d,
                      f.parentNode&&f.parentNode.removeChild(f),
                      o(c)
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
            129:0
          };
          a.f.j=(t,
          r)=>{
            let n=a.o(e,
            t)?e[t]:void 0;
            if(0!==n)if(n)r.push(n[2]);
            else if(/^(1270|2874|3082|4017|5866|704|9653)$/.test(t))e[t]=0;
            else{
              const o=new Promise((r,
              o)=>n=e[t]=[r,
              o]);
              r.push(n[2]=o);
              const f=a.p+a.u(t),
              d=new Error,
              c=r=>{
                if(a.o(e,
                t)&&(n=e[t],
                0!==n&&(e[t]=void 0),
                n)){
                  const e=r&&("load"===r.type?"missing":r.type),
                  o=r&&r.target&&r.target.src;
                  d.message="Loading chunk "+t+" failed.\n("+e+": "+o+")",
                  d.name="ChunkLoadError",
                  d.type=e,
                  d.request=o,
                  d.event=r,
                  n[1](d)
                }
              };
              a.l(f,
              c,
              "chunk-"+t,
              t)
            }
          };
          const t=(t,
          r)=>{
            let[n,
            o,
            f]=r;
            var d,
            c,
            s=0;
            if(n.some(t=>0!==e[t])){
              for(d in o)a.o(o,
              d)&&(a.m[d]=o[d]);
              f&&f(a)
            }for(t&&t(r);
            s<n.length;
            s++)c=n[s],
            a.o(e,
            c)&&e[c]&&e[c][0](),
            e[c]=0
          },
          r=self.webpackChunk_rockstargames_sites_red_dead_online=self.webpackChunk_rockstargames_sites_red_dead_online||[];
          r.forEach(t.bind(null,
          0)),
          r.push=t.bind(null,
          r.push.bind(r))
        })(),
        a.nc=void 0,
        a(64769),
        a(82021)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map
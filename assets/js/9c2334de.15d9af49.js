"use strict";(self.webpackChunksaga_docs=self.webpackChunksaga_docs||[]).push([[297],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),g=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=g(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=g(r),k=n,m=u["".concat(o,".").concat(k)]||u[k]||d[k]||i;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var g=2;g<i;g++)l[g]=r[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6972:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return s},metadata:function(){return g},toc:function(){return d}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),l=["components"],s={},o="Tilgang til data",g={unversionedId:"utvikling-paa-saga/tilgangsgrupper/README",id:"utvikling-paa-saga/tilgangsgrupper/README",title:"Tilgang til data",description:"Ulik data har behov for ulike niv\xe5er av tilgjengelighet p\xe5 grunn av innholdet i dataene. Derfor har vi tilgangskontroll, som styrer tilgang til data, ved hjelp av ulike tilgangsgrupper.",source:"@site/docs/03-utvikling-paa-saga/02-tilgangsgrupper/README.md",sourceDirName:"03-utvikling-paa-saga/02-tilgangsgrupper",slug:"/utvikling-paa-saga/tilgangsgrupper/",permalink:"/docs-public/utvikling-paa-saga/tilgangsgrupper/",draft:!1,editUrl:"https://github.com/svvsaga/docs-public/edit/main/docs/03-utvikling-paa-saga/02-tilgangsgrupper/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Datasoner",permalink:"/docs-public/utvikling-paa-saga/datasoner"},next:{title:"Detaljert om tilganger",permalink:"/docs-public/utvikling-paa-saga/tilgangsgrupper/detaljert"}},p={},d=[{value:"Hvordan gir jeg tilgang til mine datasett?",id:"hvordan-gir-jeg-tilgang-til-mine-datasett",level:2},{value:"Type tilgang p\xe5 dataplattformen",id:"type-tilgang-p\xe5-dataplattformen",level:2},{value:"Observers",id:"observers",level:3},{value:"Readers",id:"readers",level:3},{value:"Gruppehierarki for prosjekter",id:"gruppehierarki-for-prosjekter",level:4},{value:"Gruppehierarki for datasoner",id:"gruppehierarki-for-datasoner",level:4},{value:"Uegnede datalagere",id:"uegnede-datalagere",level:3},{value:"Direkte tilgang til ressurser",id:"direkte-tilgang-til-ressurser",level:2}],u={toc:d};function k(e){var t=e.components,s=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tilgang-til-data"},"Tilgang til data"),(0,i.kt)("p",null,"Ulik data har behov for ulike niv\xe5er av tilgjengelighet p\xe5 grunn av innholdet i dataene. Derfor har vi tilgangskontroll, som styrer tilgang til data, ved hjelp av ulike tilgangsgrupper."),(0,i.kt)("h2",{id:"hvordan-gir-jeg-tilgang-til-mine-datasett"},"Hvordan gir jeg tilgang til mine datasett?"),(0,i.kt)("p",null,"Alle prosjekter har definert enkeltpersoner (\xe9n eller flere) som kan administrere tilgangsgruppene for sitt prosjekt. Hvis du lurer p\xe5 hvem dette er for ditt prosjekt, ta kontakt p\xe5 ",(0,i.kt)("a",{parentName:"p",href:"https://vegvesen.slack.com/archives/C03LGD7TM5Z"},"#saga-support p\xe5 Slack"),"."),(0,i.kt)("p",null,"En tilgangsadministrator kan gi tilgang til andre via ",(0,i.kt)("a",{parentName:"p",href:"https://groups.google.com"},"Google Groups"),". Du kan f\xf8lge ",(0,i.kt)("a",{parentName:"p",href:"https://support.google.com/groups/answer/2465464?hl=en"},"Googles dokumentasjon")," for detaljerte steg."),(0,i.kt)("h2",{id:"type-tilgang-p\xe5-dataplattformen"},"Type tilgang p\xe5 dataplattformen"),(0,i.kt)("p",null,'Vi bruker et gruppehierarki for \xe5 styre brukernes tilgang til ulike datasoner p\xe5 dataplattformen. Dette gj\xf8r det enkelt \xe5 gi personer eller "service accounts" tilgang til en eller flere datasoner.'),(0,i.kt)("p",null,"I hovedsak trenger vi to typer grupper:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"reader"),(0,i.kt)("li",{parentName:"ul"},"observer")),(0,i.kt)("p",null,"En ",(0,i.kt)("em",{parentName:"p"},"reader"),"-gruppe brukes for \xe5 f\xe5 lesetilgang til en eller flere datasoner. En ",(0,i.kt)("em",{parentName:"p"},"observer"),"-gruppe gir bare tilgang til \xe5 f\xe5 vite hvilke datasett som eksisterer, og lese metadata om disse."),(0,i.kt)("p",null,"For \xe5 se hvilke GCP-roller en gruppe har, ",(0,i.kt)("a",{parentName:"p",href:"/docs-public/utvikling-paa-saga/tilgangsgrupper/detaljert"},"se denne siden"),"."),(0,i.kt)("h3",{id:"observers"},"Observers"),(0,i.kt)("p",null,"Alle brukere av plattformen blir p.t. lagt til i gruppen ",(0,i.kt)("inlineCode",{parentName:"p"},"saga-observers"),", som gir rettigheter til \xe5 se metadata for alle datasett, men ikke innholdet."),(0,i.kt)("h3",{id:"readers"},"Readers"),(0,i.kt)("p",null,"Den mest generelle tilgangsgruppen, som gir lesetilgang til alle prosjekter og datasoner, heter ",(0,i.kt)("inlineCode",{parentName:"p"},"saga-readers"),". Yggdrasil styrer hvem som ligger i denne."),(0,i.kt)("p",null,"P\xe5 neste niv\xe5 har man to dimensjoner:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Per datasone"),": F.eks. ",(0,i.kt)("inlineCode",{parentName:"li"},"saga-curated-readers"),', gir lesetilgang til datasett i datasonen "Curated", for alle prosjekter. Yggdrasil styrer hvem som ligger i denne.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Per prosjekt"),": F.eks. ",(0,i.kt)("inlineCode",{parentName:"li"},"saga-oppetid-readers"),', gir lesetilgang til datasett i prosjektet "Oppetid", uansett datasone. Prosjekt-team kan selv legge til medlemmer i denne.')),(0,i.kt)("p",null,"Til slutt har man tilgangsgrupper som kombinerer prosjekt og datasone, f.eks. ",(0,i.kt)("inlineCode",{parentName:"p"},"saga-oppetid-curated-readers"),', som gir lesetilgang til datasett som ligger i datasonen "Curated" i prosjektet "Oppetid". Det er p\xe5 dette niv\xe5et selve tilgangsstyringen faktisk skjer, dvs. der ',(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/access-control#dataset_level"},"IAM bindings opprettes mot BQ datasets"),"."),(0,i.kt)("h4",{id:"gruppehierarki-for-prosjekter"},"Gruppehierarki for prosjekter"),(0,i.kt)("p",null,"N\xe5r en person er lagt til i en gruppe, har personen automatisk tilgang til alle undergrupper. Her vises et eksempelhierarki for prosjekt-niv\xe5:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Readers per prosjekt",src:r(3915).Z,width:"571",height:"381"})),(0,i.kt)("h4",{id:"gruppehierarki-for-datasoner"},"Gruppehierarki for datasoner"),(0,i.kt)("p",null,"Denne figuren viser tilsvarende koblinger p\xe5 datasone-niv\xe5. Fargene brukes for \xe5 vise hvilke undergrupper som er de samme i de to ulike hierarkiene."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Readers per datasone",src:r(8389).Z,width:"571",height:"381"})),(0,i.kt)("h3",{id:"uegnede-datalagere"},"Uegnede datalagere"),(0,i.kt)("p",null,"Datalagere som dugler tilgangsstyring per datasett skal helst ikke brukes n\xe5r du skal dele data p\xe5 dataplattformen. For eksempel er det slik at dersom du gir noen lesetilgang til Cloud Datastore vil de f\xe5 tilgang til alt som ligger der. Dette gj\xf8r at du for eksempel ikke kan skille mellom data som alle skal ha tilgang til, og data som f\xe6rre skal ha tilgang til."),(0,i.kt)("h2",{id:"direkte-tilgang-til-ressurser"},"Direkte tilgang til ressurser"),(0,i.kt)("p",null,"Dersom det er behov for at brukere skal ha direkte tilgang til ressurser, og ikke datasoner, kan dette l\xf8ses ved \xe5 opprette IAM-bindings direkte, eksempelvis i Terraform. Vi anser at dette sjelden vil v\xe6re n\xf8dvendig."))}k.isMDXComponent=!0},8389:function(e,t,r){t.Z=r.p+"assets/images/readers-per-datasone.drawio-5b0c594953d8686c1e95114051b0d145.svg"},3915:function(e,t,r){t.Z=r.p+"assets/images/readers-per-prosjekt.drawio-c05d3071eb99eea5b8f9536dd6a12352.svg"}}]);
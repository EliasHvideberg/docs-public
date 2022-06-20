"use strict";(self.webpackChunksaga_docs=self.webpackChunksaga_docs||[]).push([[260],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return c}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=p(r),c=n,m=g["".concat(l,".").concat(c)]||g[c]||u[c]||i;return r?a.createElement(m,o(o({ref:t},d),{},{components:r})):a.createElement(m,o({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1883:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],s={},l="Kartvisning av alle v\xe6rstasjoner i Data Studio",p={unversionedId:"eksempler/vegvar-data-studio",id:"eksempler/vegvar-data-studio",title:"Kartvisning av alle v\xe6rstasjoner i Data Studio",description:"Her viser vi et eksempel p\xe5 hvordan man kan hente ut og visualisere v\xe6rdata fra Vegv\xe6r, ved hjelp av BigQuery og Data Studio.",source:"@site/docs/05-eksempler/01-vegvar-data-studio.md",sourceDirName:"05-eksempler",slug:"/eksempler/vegvar-data-studio",permalink:"/docs-public/eksempler/vegvar-data-studio",draft:!1,editUrl:"https://github.com/svvsaga/docs-public/edit/main/docs/05-eksempler/01-vegvar-data-studio.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Eksempler",permalink:"/docs-public/eksempler/"}},d={},u=[],g={toc:u};function c(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kartvisning-av-alle-v\xe6rstasjoner-i-data-studio"},"Kartvisning av alle v\xe6rstasjoner i Data Studio"),(0,i.kt)("p",null,"Her viser vi et eksempel p\xe5 hvordan man kan hente ut og visualisere v\xe6rdata fra Vegv\xe6r, ved hjelp av BigQuery og Data Studio."),(0,i.kt)("p",null,"For \xe5 kunne f\xf8lge guiden m\xe5 du f\xf8rst ha f\xe5tt opprettet en GCP-bruker og et prosjekt."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"G\xe5 til ",(0,i.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/bigquery?p=saga-vegvar-prod-znny&d=standardized&t=maalestasjoner&page=table"},"M\xe5lestasjoner-datasettet i BigQuery"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"M\xe5lestasjoner-datasettet i BigQuery",src:r(6096).Z,width:"1277",height:"622"})),(0,i.kt)("p",{parentName:"li"},"Legg merke til f\xf8lgende:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Prosjektet i prosjektvelgeren skal v\xe6re satt til ditt personlige prosjekt. Det gj\xf8r at du f\xe5r lov \xe5 kj\xf8re sp\xf8rringer mot BigQuery."),(0,i.kt)("li",{parentName:"ol"},"Prosjektet ",(0,i.kt)("em",{parentName:"li"},"saga-vegvar-prod-znny")," er der du finner Vegv\xe6r-datasettene."),(0,i.kt)("li",{parentName:"ol"},"For \xe5 gj\xf8re en sp\xf8rring, velg ",(0,i.kt)("strong",{parentName:"li"},"QUERY"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\xc5pne en ny sp\xf8rring, og legg inn f\xf8lgende:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * EXCEPT (row_number) FROM (\n SELECT navn, lokasjon, row_number() OVER (\n     PARTITION BY id\n     ORDER BY CAST(versjon AS INT) DESC\n ) row_number\n FROM `saga-vegvar-prod-znny.standardized.maalestasjoner`\n)\nWHERE row_number = 1\n")),(0,i.kt)("p",{parentName:"li"},"Denne sp\xf8rringen vil finne navn og lokasjon for siste versjon av alle m\xe5lestasjoner. Den benytter ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_analytic_functions"},"analytiske aggregat-funksjoner")," for \xe5 finne den siste versjonen.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Velg ",(0,i.kt)("strong",{parentName:"p"},"EXPLORE DATA"),', deretter "Explore with Data Studio".'),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Explore with Data Studio i BigQuery",src:r(4432).Z,width:"1275",height:"743"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Du vil bli bedt om \xe5 godkjenne bruk av Data Studio mot Google Cloud, godta dette. Deretter vil Data Studio \xe5pnes med data fra sp\xf8rringen du kj\xf8rte."),(0,i.kt)("p",{parentName:"li"},'Herfra kan du velge en kartvisning, f.eks. "Varmekart":'),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"M\xe5lestasjoner-datasettet i BigQuery",src:r(5247).Z,width:"1277",height:"665"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Kartvisningen mangler dimensjoner. Dra "lokasjon" inn i "Felt for geografisk kategori", og "navn" inn i "Sted":'),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Kobling av felter til kategorier i Data Studio",src:r(6344).Z,width:"1277",height:"606"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Da skal du se en kartvisning over de ulike stasjonene:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Heatmap av m\xe5lestasjoner i Norge",src:r(7203).Z,width:"1279",height:"534"})),(0,i.kt)("p",{parentName:"li"},"Herfra kan du klikke fritt rundt, eller g\xe5 tilbake og utvide sp\xf8rringen med mer data. For \xe5 lese mer om Data Studio, se ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/datastudio/"},"Data Studio-dokumentasjonen"),"."))))}c.isMDXComponent=!0},6096:function(e,t,r){t.Z=r.p+"assets/images/vegvar-data-studio-1-5878c8fec20a028e08dc20b532065419.webp"},4432:function(e,t,r){t.Z=r.p+"assets/images/vegvar-data-studio-2-a0da871a83cebb726cc6cb1102faea84.webp"},5247:function(e,t,r){t.Z=r.p+"assets/images/vegvar-data-studio-3-f6be2ad0f1e1c8a13fd6bfd846bf624d.webp"},6344:function(e,t,r){t.Z=r.p+"assets/images/vegvar-data-studio-4-a353606030810aa01ec3fa5e87777238.webp"},7203:function(e,t,r){t.Z=r.p+"assets/images/vegvar-data-studio-5-1385d71cd2415b94406dbaac44d31f4c.webp"}}]);
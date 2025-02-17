"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[925],{3235:function(a,n,e){e.d(n,{Z:function(){return k}});var i=e(7178),o=e(3245),l=e(9499),d=e(2854),t=(0,d.zo)("div",{padding:"$gr3 0 0"}),r=(0,d.zo)("div",{backgroundColor:"var(--gray-3)",width:"100%",height:"100%",overflowY:"hidden",borderRadius:"3px",transition:"$canopyAll"}),s=(0,d.zo)("div",{display:"flex",width:"100%",position:"relative",flexGrow:1,flexShrink:0,maxWidth:"275px",img:{width:"100%",height:"100%",objectFit:"cover"},a:(0,l.Z)({display:"flex",flexDirection:"column",width:"100%",color:"var(--gray-12)",textDecoration:"none !important",transition:"$canopyAll"},"&:hover, &:focus",(0,l.Z)({color:"var(--accent-11)"},"".concat(r),{transform:"scale3d(1.03, 1.03, 1.03)"}))}),c=e(3093),u=e(8522),m=e(6225),y=e(3817),C=e(9342),R=(0,d.zo)("img",(0,l.Z)({position:"relative",zIndex:"1",width:"100%",height:"100%",objectFit:"contain",transition:"$canopyAll",opacity:0,color:"transparent"},"&.loaded",{opacity:1})),p=(0,d.zo)("figure",{backgroundColor:"var(--gray-3)",display:"flex",width:"100%",height:"100%",padding:"0",margin:"0",position:"relative",overflow:"hidden",zIndex:"0",borderRadius:"3px",transition:"$canopyAll"}),g=e(7294),v=e(6010),getResourceImage=function(a){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"600,",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"full";if(Array.isArray(a)&&(a=a[0]),!a.service)return a.id;if(!Array.isArray(a.service)){if(a.service["@id"])return"".concat(a.service["@id"],"/").concat(e,"/").concat(n,"/0/default.jpg");if(a.service.id)return"".concat(a.service.id,"/").concat(e,"/").concat(n,"/0/default.jpg")}return a.service[0]["@id"]?"".concat(a.service[0]["@id"],"/").concat(e,"/").concat(n,"/0/default.jpg"):"".concat(a.service[0].id,"/").concat(e,"/").concat(n,"/0/default.jpg")},h=e(5893),Figure_Figure=function(a){var n=a.alt,e=a.resource,i=a.region,o=void 0===i?"full":i,l=a.size,d=void 0===l?"400,":l,t=a.isCover,r=(0,g.useState)(),s=r[0],c=r[1],u=(0,g.useState)(!1),m=u[0],y=u[1],C=(0,g.useRef)(null);return(0,g.useEffect)(function(){var a;c(getResourceImage(e,d,o)),null!=C&&C.current&&null!=C&&null!==(a=C.current)&&void 0!==a&&a.complete&&y(!0)},[]),(0,h.jsx)(p,{children:(0,h.jsx)(R,{alt:n,src:s,ref:C,style:void 0!==t&&t?{objectFit:"cover",objectPosition:"50% 50%",width:"100%",height:"100%"}:{},onLoad:function(){return y(!0)},className:(0,v.Z)("source",m&&"loaded")})})},w=e(1830),M=e(9769),f=e(2708),k=g.memo(function(a){var n=a.resource,e=1,l=n.label,d=n.homepage,R=n.thumbnail,p=R[0],g=p.width,v=p.height;g&&v&&(e=g/v);var k=(0,f.YD)(),S=k.ref,b=k.inView,P=(0,M.i)(l);return(0,h.jsx)(s,{as:o.Box,ref:S,children:(0,h.jsx)(o.Card,{size:"2",style:{width:"100%"},variant:"classic",asChild:!0,children:(0,h.jsxs)(C.Z,{href:d&&d[0].id?d[0].id:"",children:[(0,h.jsx)(o.Inset,{clip:"padding-box",side:"top","data-testid":"canopy-card-inset","data-resource":R[0].id,children:(0,h.jsx)(i.f,{ratio:e,children:(0,h.jsx)(r,{children:(0,h.jsx)(c.A,{transition:{duration:1},children:b&&n&&(0,h.jsx)(u.X,{features:m.H,children:(0,h.jsx)(y.m.div,{style:{height:"100%"},initial:{opacity:0},animate:{opacity:1},children:(0,h.jsx)(Figure_Figure,{resource:R,alt:P})})})})})})}),(0,h.jsx)(o.Text,{size:"2",asChild:!0,children:(0,h.jsx)(t,{children:(0,h.jsx)(w.Label,{label:l})})})]})})})})},2929:function(a,n,e){e.d(n,{Z:function(){return u}});var i=e(9499),o=e(3235),l=e(827),d=e(2854),t=(0,d.zo)("div",{paddingBottom:"$gr4",zIndex:"1","@xxs":{paddingBottom:"$gr2"},"@xs":{paddingBottom:"$gr2"},"@sm":{paddingBottom:"$gr3"},"@md":{paddingBottom:"$gr3"}}),r=(0,d.zo)(l.Z,{display:"flex",width:"auto",position:"relative",padding:"$gr2 0",zIndex:"1",".canopy-grid-column":{marginLeft:"$gr4","@xxs":{marginLeft:"$gr2"},"@xs":{marginLeft:"$gr2"},"@sm":{marginLeft:"$gr3"},"@md":{marginLeft:"$gr3"},"&:first-child":{marginLeft:"0"}}});e(7294);var s=e(5893),c=e(7668),Grid=function(a){var n,e=a.children,o=(n={default:6},(0,i.Z)(n,c.b.xl,5),(0,i.Z)(n,c.b.lg,4),(0,i.Z)(n,c.b.md,4),(0,i.Z)(n,c.b.sm,3),(0,i.Z)(n,c.b.xs,2),n);return(0,s.jsx)(r,{breakpointCols:o,className:"canopy-grid",columnClassName:"canopy-grid-column",children:e})};Grid.Item=function(a){var n=a.item;return n?(0,s.jsx)(t,{children:(0,s.jsx)(o.Z,{resource:n},n.id)}):(0,s.jsx)(s.Fragment,{})};var u=Grid},2794:function(a){a.exports=JSON.parse('[{"label":"Date","slug":"date","values":[{"value":"1962","slug":"1962","doc_count":21,"docs":[4,24,25,27,30,31,32,33,34,37,39,52,60,63,64,72,75,77,80,81,90]},{"value":"1963","slug":"1963","doc_count":18,"docs":[7,9,10,14,21,41,43,46,50,69,73,74,83,85,87,91,98,99]},{"value":"1964","slug":"1964","doc_count":8,"docs":[1,8,20,40,45,57,94,96]},{"value":"1970","slug":"1970","doc_count":7,"docs":[6,44,53,54,58,65,70]},{"value":"1969","slug":"1969","doc_count":6,"docs":[0,3,15,16,78,89]},{"value":"1972","slug":"1972","doc_count":4,"docs":[2,18,67,84]},{"value":"1960 to 1975","slug":"1960-to-1975","doc_count":3,"docs":[19,23,92]},{"value":"1960 to 1990","slug":"1960-to-1990","doc_count":3,"docs":[59,61,95]},{"value":"1971 to 1989","slug":"1971-to-1989","doc_count":3,"docs":[28,68,93]},{"value":"1966","slug":"1966","doc_count":2,"docs":[36,42]},{"value":"1968","slug":"1968","doc_count":2,"docs":[38,79]},{"value":"1976","slug":"1976","doc_count":2,"docs":[29,88]},{"value":"1940 to 1970","slug":"1940-to-1970","doc_count":1,"docs":[55]},{"value":"1950 to 1965","slug":"1950-to-1965","doc_count":1,"docs":[5]},{"value":"1950 to 1970","slug":"1950-to-1970","doc_count":1,"docs":[51]},{"value":"1950 to 1975","slug":"1950-to-1975","doc_count":1,"docs":[13]},{"value":"1951 to 1965","slug":"1951-to-1965","doc_count":1,"docs":[17]},{"value":"1960 to 1968","slug":"1960-to-1968","doc_count":1,"docs":[12]},{"value":"1960 to 1970","slug":"1960-to-1970","doc_count":1,"docs":[35]},{"value":"1961","slug":"1961","doc_count":1,"docs":[62]},{"value":"1965","slug":"1965","doc_count":1,"docs":[48]},{"value":"1965 to 1970","slug":"1965-to-1970","doc_count":1,"docs":[49]},{"value":"1965 to 1975","slug":"1965-to-1975","doc_count":1,"docs":[86]},{"value":"1967","slug":"1967","doc_count":1,"docs":[97]},{"value":"1967 to 1983","slug":"1967-to-1983","doc_count":1,"docs":[56]},{"value":"1968 to 1980","slug":"1968-to-1980","doc_count":1,"docs":[76]},{"value":"1970 to 1990","slug":"1970-to-1990","doc_count":1,"docs":[47]},{"value":"1971","slug":"1971","doc_count":1,"docs":[26]},{"value":"1975","slug":"1975","doc_count":1,"docs":[66]},{"value":"1977","slug":"1977","doc_count":1,"docs":[71]},{"value":"1978 to 1995","slug":"1978-to-1995","doc_count":1,"docs":[82]},{"value":"1980","slug":"1980","doc_count":1,"docs":[22]},{"value":"1982","slug":"1982","doc_count":1,"docs":[11]}]},{"label":"Subject","slug":"subject","values":[{"value":"Railroads--Dining-car service","slug":"railroads-dining-car-service","doc_count":100,"docs":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99]},{"value":"Menus","slug":"menus","doc_count":99,"docs":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,93,94,95,96,97,98,99]},{"value":"United States","slug":"united-states","doc_count":90,"docs":[0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,37,38,39,40,41,43,44,46,47,48,49,50,51,52,53,54,55,56,58,59,60,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,83,84,85,86,87,88,89,90,91,93,95,96,97,98,99]},{"value":"Canada","slug":"canada","doc_count":9,"docs":[1,20,36,42,45,57,61,82,94]},{"value":"Chesapeake and Ohio Railway Company","slug":"chesapeake-and-ohio-railway-company","doc_count":3,"docs":[54,59,95]},{"value":"Adirondack (Train)","slug":"adirondack-train","doc_count":1,"docs":[47]},{"value":"Great Northern Railway Company (U.S.)","slug":"great-northern-railway-company-us","doc_count":1,"docs":[64]},{"value":"Reading Company","slug":"reading-company","doc_count":1,"docs":[55]},{"value":"Southern Railway (U.S.)","slug":"southern-railway-us","doc_count":1,"docs":[25]}]},{"label":"Genre","slug":"genre","values":[{"value":"menus","slug":"menus","doc_count":95,"docs":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,93,94,95,96,97,98,99]},{"value":"pamphlets","slug":"pamphlets","doc_count":5,"docs":[0,17,19,23,92]}]},{"label":"Publisher","slug":"publisher","values":[{"value":"Illinois Central Railroad Company","slug":"illinois-central-railroad-company","doc_count":25,"docs":[6,6,21,21,26,26,30,30,32,33,33,38,38,41,41,44,44,50,50,53,53,73,73,83,83]},{"value":"Amtrak","slug":"amtrak","doc_count":22,"docs":[11,11,18,18,28,28,29,29,66,66,67,67,68,68,71,71,84,84,88,88,93,93]},{"value":"Chicago, Rock Island, and Pacific Railway Company","slug":"chicago-rock-island-and-pacific-railway-company","doc_count":16,"docs":[7,7,19,19,23,23,27,27,74,74,80,80,85,85,87,87]},{"value":"Pennsylvania Railroad","slug":"pennsylvania-railroad","doc_count":14,"docs":[39,39,43,43,46,46,49,49,69,69,91,91,98,98]},{"value":"Denver and Rio Grande Western Railroad Company","slug":"denver-and-rio-grande-western-railroad-company","doc_count":12,"docs":[2,2,9,9,31,31,52,52,63,63,81,81]},{"value":"Union Pacific Railroad Company","slug":"union-pacific-railroad-company","doc_count":12,"docs":[3,3,4,4,16,16,60,60,62,62,90,90]},{"value":"Chicago, Milwaukee, St. Paul, and Pacific Railroad Company","slug":"chicago-milwaukee-st-paul-and-pacific-railroad-company","doc_count":9,"docs":[13,13,32,35,35,77,77,92,92]},{"value":"Canadian National Railways","slug":"canadian-national-railways","doc_count":8,"docs":[20,20,36,36,42,42,61,61]},{"value":"Canadian Pacific Railway Company","slug":"canadian-pacific-railway-company","doc_count":8,"docs":[1,1,45,45,57,57,94,94]},{"value":"Penn Central Transportation Company","slug":"penn-central-transportation-company","doc_count":8,"docs":[0,0,58,58,65,65,86,86]},{"value":"Atchison, Topeka, and Santa Fe Railway Company","slug":"atchison-topeka-and-santa-fe-railway-company","doc_count":6,"docs":[15,15,78,78,89,89]},{"value":"New York Central Railroad Company","slug":"new-york-central-railroad-company","doc_count":6,"docs":[5,5,17,17,48,48]},{"value":"Northern Pacific Railway Company","slug":"northern-pacific-railway-company","doc_count":6,"docs":[24,24,34,34,72,72]},{"value":"Erie Lackawanna Railway Company","slug":"erie-lackawanna-railway-company","doc_count":4,"docs":[12,12,76,76]},{"value":"New York, New Haven, and Hartford Railroad Company","slug":"new-york-new-haven-and-hartford-railroad-company","doc_count":4,"docs":[14,14,97,97]},{"value":"Pullman Company","slug":"pullman-company","doc_count":4,"docs":[75,75,99,99]},{"value":"Seaboard Air Line Railroad Company","slug":"seaboard-air-line-railroad-company","doc_count":4,"docs":[40,40,96,96]},{"value":"Chesapeake and Ohio/Baltimore and Ohio Railroad Company","slug":"chesapeake-and-ohiobaltimore-and-ohio-railroad-company","doc_count":3,"docs":[54,59,95]},{"value":"Delaware and Hudson Railroad Corporation","slug":"delaware-and-hudson-railroad-corporation","doc_count":3,"docs":[8,8,47]},{"value":"Atlantic Coast Line Railroad Company","slug":"atlantic-coast-line-railroad-company","doc_count":2,"docs":[10,10]},{"value":"Boston and Maine Railroad Corporation","slug":"boston-and-maine-railroad-corporation","doc_count":2,"docs":[22,22]},{"value":"Burlington Northern Railroad Company","slug":"burlington-northern-railroad-company","doc_count":2,"docs":[70,70]},{"value":"Chicago and North Western Railway Company","slug":"chicago-and-north-western-railway-company","doc_count":2,"docs":[79,79]},{"value":"Chicago, Burlington & Quincy Railroad Company","slug":"chicago-burlington-and-quincy-railroad-company","doc_count":2,"docs":[37,37]},{"value":"Norfolk and Western Railway Company","slug":"norfolk-and-western-railway-company","doc_count":2,"docs":[51,51]},{"value":"Seaboard Coast Line Railroad","slug":"seaboard-coast-line-railroad","doc_count":2,"docs":[56,56]},{"value":"VIA Rail Canada","slug":"via-rail-canada","doc_count":2,"docs":[82,82]},{"value":"Great Northern Railway Company","slug":"great-northern-railway-company","doc_count":1,"docs":[64]},{"value":"Reading Company/Central Railroad of New Jersey","slug":"reading-companycentral-railroad-of-new-jersey","doc_count":1,"docs":[55]},{"value":"Southern Railway","slug":"southern-railway","doc_count":1,"docs":[25]}]}]')},3981:function(a){a.exports=JSON.parse('[{"id":0,"label":"Penn Central Transportation Company, You are cordially invited..., 1969","metadata":"1969 pamphlets Penn Central Transportation Company United States Penn Central Transportation Company Railroads--Dining-car service Menus"},{"id":1,"label":"Canadian Pacific Railway Company Menu, The Canadian, 1964","metadata":"1964 menus Canadian Pacific Railway Company Canada Railroads--Dining-car service Menus Canadian Pacific Railway Company"},{"id":2,"label":"Denver and Rio Grande Western Railroad Company Menu, Rio Grande Zephyr Grill, 1972","metadata":"1972 menus Denver and Rio Grande Western Railroad Company United States Railroads--Dining-car service Menus Denver and Rio Grande Western Railroad Company"},{"id":3,"label":"Union Pacific Railroad Company Menu, Centennial menu, 1969","metadata":"1969 menus Union Pacific Railroad Company United States Railroads--Dining-car service Menus Union Pacific Railroad Company"},{"id":4,"label":"Union Pacific Railroad Company Menu, Children\'s menu, 1962","metadata":"1962 menus Union Pacific Railroad Company United States Railroads--Dining-car service Menus Union Pacific Railroad Company"},{"id":5,"label":"New York Central Railroad Company Menu, New York Central System, Between 1950 and 1965","metadata":"1950 to 1965 menus New York Central Railroad Company United States Railroads--Dining-car service New York Central Railroad Company Menus"},{"id":6,"label":"Illinois Central Railroad Company Menu, Panama Limited 1970","metadata":"1970 menus Illinois Central Railroad Company United States Menus Illinois Central Railroad Company Railroads--Dining-car service"},{"id":7,"label":"Chicago, Rock Island, and Pacific Railway Company Menu, Rock Island Lines, 1963","metadata":"1963 menus Chicago, Rock Island, and Pacific Railway Company United States Railroads--Dining-car service Menus Chicago, Rock Island, and Pacific Railway Company"},{"id":8,"label":"Delaware and Hudson Railroad Corporation, Menu, 1964","metadata":"1964 menus Delaware and Hudson Railroad Corporation United States Delaware and Hudson Railroad Corporation Railroads--Dining-car service Menus"},{"id":9,"label":"Denver and Rio Grande Western Railroad Company Menu, Royal Gorge Grill, 1963","metadata":"1963 menus Denver and Rio Grande Western Railroad Company United States Railroads--Dining-car service Menus Denver and Rio Grande Western Railroad Company"},{"id":10,"label":"Atlantic Coast Line Railroad Company Menus, 1963","metadata":"1963 menus Atlantic Coast Line Railroad Company United States Railroads--Dining-car service Menus Atlantic Coast Line Railroad Company"},{"id":11,"label":"Amtrak Menu, Metroliner Service, 1982","metadata":"1982 menus Amtrak United States Railroads--Dining-car service Menus Amtrak"},{"id":12,"label":"Erie Lackawanna Railway Company Menu, Dining service, Between 1960 and 1968","metadata":"1960 to 1968 menus Erie Lackawanna Railway Company United States Railroads--Dining-car service Menus Erie Lackawanna Railway Company"},{"id":13,"label":"Chicago, Milwaukee, St. Paul, and Pacific Railroad Company Menu, Children\'s menu, Between 1950 and 1975","metadata":"1950 to 1975 menus Chicago, Milwaukee, St. Paul, and Pacific Railroad Company United States Railroads--Dining-car service Menus Chicago, Milwaukee, St. Paul, and Pacific Railroad Company"},{"id":14,"label":"New York, New Haven, and Hartford Railroad Company Menu, Hell Gate Bridge menu, 1963","metadata":"1963 menus New York, New Haven, and Hartford Railroad Company United States Railroads--Dining-car service New York, New Haven, and Hartford Railroad Company Menus"},{"id":15,"label":"Atchison, Topeka, and Santa Fe Railway Company Menu, Snack car menu, 1969","metadata":"1969 menus Atchison, Topeka, and Santa Fe Railway Company United States Railroads--Dining-car service Menus Atchison, Topeka, and Santa Fe Railway Company"},{"id":16,"label":"Union Pacific Railroad Company Menu, Centennial menu, 1969","metadata":"1969 menus Union Pacific Railroad Company United States Railroads--Dining-car service Menus Union Pacific Railroad Company"},{"id":17,"label":"New York Central Railroad Company, \\"Good Morning!\\", Between 1951 and 1965","metadata":"1951 to 1965 pamphlets New York Central Railroad Company United States Railroads--Dining-car service New York Central Railroad Company Menus"},{"id":18,"label":"Amtrak Menu, 1972","metadata":"1972 menus Amtrak United States Railroads--Dining-car service Menus Amtrak"},{"id":19,"label":"Chicago, Rock Island, and Pacific Railway Company, Champagne Cocktail, Between 1960 and 1975","metadata":"1960 to 1975 pamphlets Chicago, Rock Island, and Pacific Railway Company United States Railroads--Dining-car service Menus Chicago, Rock Island, and Pacific Railway Company"},{"id":20,"label":"Canadian National Railways Menu, Breakfast, 1964","metadata":"1964 menus Canadian National Railways Canada Railroads--Dining-car service Menus Canadian National Railways"},{"id":21,"label":"Illinois Central Railroad Company Menu, Panama Limited, 1963","metadata":"1963 menus Illinois Central Railroad Company United States Railroads--Dining-car service Menus Illinois Central Railroad Company"},{"id":22,"label":"Boston and Maine Railroad Corporation Menu, 1980","metadata":"1980 menus Boston and Maine Railroad Corporation Boston and Maine Railroad Corporation United States Railroads--Dining-car service Menus"},{"id":23,"label":"Chicago, Rock Island, and Pacific Railway Company, Welcome aboard the Golden State, Between 1960 and 1975","metadata":"1960 to 1975 pamphlets Chicago, Rock Island, and Pacific Railway Company United States Railroads--Dining-car service Menus Chicago, Rock Island, and Pacific Railway Company"},{"id":24,"label":"Northern Pacific Railway Company Menu, 1962","metadata":"1962 menus Northern Pacific Railway Company United States Railroads--Dining-car service Menus Northern Pacific Railway Company"},{"id":25,"label":"Southern Railway (U.S.) Menu, Buffet service, 1962","metadata":"1962 menus Southern Railway United States Railroads--Dining-car service Menus Southern Railway (U.S.)"},{"id":26,"label":"Illinois Central Railroad Company Menu, Palm Grove Cafe, 1971","metadata":"1971 menus Illinois Central Railroad Company United States Railroads--Dining-car service Menus Illinois Central Railroad Company"},{"id":27,"label":"Chicago, Rock Island, and Pacific Railway Company Menu, Golden State, 1962","metadata":"1962 menus Chicago, Rock Island, and Pacific Railway Company United States Railroads--Dining-car service Menus Chicago, Rock Island, and Pacific Railway Company"},{"id":28,"label":"Amtrak Menu, For an Amtrak breakfast today, Between 1971 and 1989","metadata":"1971 to 1989 menus Amtrak United States Railroads--Dining-car service Menus Amtrak"},{"id":29,"label":"Amtrak Breakfast Menu, 1976","metadata":"1976 menus Amtrak United States Railroads--Dining-car service Menus Amtrak"},{"id":30,"label":"Illinois Central Railroad Company Menu, Panama Limited, 1962","metadata":"1962 menus Illinois Central Railroad Company United States Railroads--Dining-car service Menus Illinois Central Railroad Company"},{"id":31,"label":"Denver and Rio Grande Western Railroad Company Menu, 1962","metadata":"1962 menus Denver and Rio Grande Western Railroad Company United States Railroads--Dining-car service Menus Denver and Rio Grande Western Railroad Company"},{"id":32,"label":"Chicago, Milwaukee, St. Paul, and Pacific Railroad Company Menu, the Milwaukee Road, 1962","metadata":"1962 menus Illinois Central Railroad Company United States Railroads--Dining-car service Menus Chicago, Milwaukee, St. Paul, and Pacific Railroad Company"},{"id":33,"label":"Illinois Central Railroad Company Menu, Illinois Central, 1962","metadata":"1962 menus Illinois Central Railroad Company United States Railroads--Dining-car service Menus Illinois Central Railroad Company"},{"id":34,"label":"Northern Pacific Railway Company Menu, Children\'s menu, 1962","metadata":"1962 menus Northern Pacific Railway Company United States Railroads--Dining-car service Menus Northern Pacific Railway Company"},{"id":35,"label":"Chicago, Milwaukee, St. Paul, and Pacific Railroad Company Menu, The Milwaukee Road Hiawatha, Between 1960 and 1970","metadata":"1960 to 1970 menus Chicago, Milwaukee, St. Paul, and Pacific Railroad Company United States Railroads--Dining-car service Menus Chicago, Milwaukee, St. Paul, and Pacific Railroad Company"},{"id":36,"label":"Canadian National Railways, Dining car service, 1966","metadata":"1966 menus Canadian National Railways Canada Railroads--Dining-car service Menus Canadian National Railways"},{"id":37,"label":"Chicago, Burlington & Quincy Railroad Company Menu, Aboard the Denver Zephyr, 1962","metadata":"1962 menus Chicago, Burlington & Quincy Railroad Company United States Menus Chicago, Burlington & Quincy Railroad Company Railroads--Dining-car service"},{"id":38,"label":"Illinois Central Railroad Company Menu, 1968","metadata":"1968 menus Illinois Central Railroad Company United States Railroads--Dining-car service Menus Illinois Central Railroad Company"},{"id":39,"label":"Pennsylvania Railroad Menu, Broadway Limited sadnwich menu, 1962","metadata":"1962 menus Pennsylvania Railroad United States Railroads--Dining-car service Menus Pennsylvania Railroad"},{"id":40,"label":"Seaboard Air Line Railroad Company Menu, 1964","metadata":"1964 menus Seaboard Air Line Railroad Company United States Railroads--Dining-car service Menus Seaboard Air Line Railroad Company"},{"id":41,"label":"Illinois Central Railroad Company Menu, 1963","metadata":"1963 menus Illinois Central Railroad Company United States Railroads--Dining-car service Menus Illinois Central Railroad Company"},{"id":42,"label":"Canadian National Railways, Dining car service, 1966","metadata":"1966 menus Canadian National Railways Canada Railroads--Dining-car service Menus Canadian National Railways"},{"id":43,"label":"Pennsylvania Railroad Menu, 1963","metadata":"1963 menus Pennsylvania Railroad United States Railroads--Dining-car service Menus Pennsylvania Railroad"},{"id":44,"label":"Illinois Central Railroad Company Menu, Breakfast, 1970","metadata":"1970 menus Illinois Central Railroad Company United States Railroads--Dining-car service Menus Illinois Central Railroad Company"},{"id":45,"label":"Canadian Pacific Railway Company, Skyline coffee shop, 1964","metadata":"1964 menus Canadian Pacific Railway Company Canada Railroads--Dining-car service Menus Canadian Pacific Railway Company"},{"id":46,"label":"Pennsylvania Railroad Menu, Snack menu, 1963","metadata":"1963 menus Pennsylvania Railroad United States Railroads--Dining-car service Menus Pennsylvania Railroad"},{"id":47,"label":"Delaware and Hudson Railroad Corporation, Menu, The Adirondack, Between 1970 and 1990","metadata":"1970 to 1990 menus Delaware and Hudson Railroad Corporation United States Railroads--Dining-car service Adirondack (Train) Menus"},{"id":48,"label":"New York Central Railroad Company Menu, New York Central System, 1965","metadata":"1965 menus New York Central Railroad Company United States Railroads--Dining-car service New York Central Railroad Company Menus"},{"id":49,"label":"Pennsylvania Railroad Menu, Between 1965 and 1970","metadata":"1965 to 1970 menus Pennsylvania Railroad United States Railroads--Dining-car service Menus Pennsylvania Railroad"},{"id":50,"label":"Illinois Central Railroad Company Menu, Dinner Menu, 1963","metadata":"1963 menus Illinois Central Railroad Company United States Railroads--Dining-car service Menus Illinois Central Railroad Company"},{"id":51,"label":"Norfolk and Western Railway Company Menu, Between 1950 and 1970","metadata":"1950 to 1970 menus Norfolk and Western Railway Company United States Railroads--Dining-car service Menus Norfolk and Western Railway Company"},{"id":52,"label":"Denver and Rio Grande Western Railroad Company Menu, Luncheon, 1962","metadata":"1962 menus Denver and Rio Grande Western Railroad Company United States Railroads--Dining-car service Menus Denver and Rio Grande Western Railroad Company"},{"id":53,"label":"Illinois Central Railroad Company Menu, Illinois Central, 1970","metadata":"1970 menus Illinois Central Railroad Company United States Railroads--Dining-car service Menus Illinois Central Railroad Company"},{"id":54,"label":"Chesapeake and Ohio/Baltimore and Ohio Railroad Company Menu, The Capitol Limited, 1970","metadata":"1970 menus Chesapeake and Ohio/Baltimore and Ohio Railroad Company United States Chesapeake and Ohio Railway Company Railroads--Dining-car service Menus"},{"id":55,"label":"Reading Company/Central Railroad of New Jersey Menu, Cafe Car Service, Between 1940 and 1970","metadata":"1940 to 1970 menus Reading Company/Central Railroad of New Jersey United States Railroads--Dining-car service Menus Reading Company"},{"id":56,"label":"Seaboard Coast Line Railroad Menu, Lunch, Florida Special, Between 1967 and 1983","metadata":"1967 to 1983 menus Seaboard Coast Line Railroad United States Railroads--Dining-car service Menus Seaboard Coast Line Railroad"},{"id":57,"label":"Canadian Pacific Railway Company Menu, 1964","metadata":"1964 menus Canadian Pacific Railway Company Canada Railroads--Dining-car service Menus Canadian Pacific Railway Company"},{"id":58,"label":"Penn Central Transportation Company Menu, Penn Central, 1970","metadata":"1970 menus Penn Central Transportation Company United States Penn Central Transportation Company Railroads--Dining-car service Menus"},{"id":59,"label":"Chesapeake and Ohio/Baltimore and Ohio Railroad Company Menu, Dining car menu, Between 1960 and 1990","metadata":"1960 to 1990 menus Chesapeake and Ohio/Baltimore and Ohio Railroad Company United States Chesapeake and Ohio Railway Company Railroads--Dining-car service Menus"},{"id":60,"label":"Union Pacific Railroad Company Menu, 1962","metadata":"1962 menus Union Pacific Railroad Company United States Railroads--Dining-car service Menus Union Pacific Railroad Company"},{"id":61,"label":"Canadian National Railways Menu, Dining car snack service, Between 1960 and 1990","metadata":"1960 to 1990 menus Canadian National Railways Canada Railroads--Dining-car service Menus Canadian National Railways"},{"id":62,"label":"Union Pacific Railroad Company Menu, 1961","metadata":"1961 menus Union Pacific Railroad Company United States Railroads--Dining-car service Menus Union Pacific Railroad Company"},{"id":63,"label":"Denver and Rio Grande Western Railroad Company Menu, Wine list, 1962","metadata":"1962 menus Denver and Rio Grande Western Railroad Company United States Railroads--Dining-car service Menus Denver and Rio Grande Western Railroad Company"},{"id":64,"label":"Great Northern Railway Company Menu, The Ranch, 1962","metadata":"1962 menus Great Northern Railway Company United States Railroads--Dining-car service Menus Great Northern Railway Company (U.S.)"},{"id":65,"label":"Penn Central Transportation Company Menu, Sandwich menu, 1970","metadata":"1970 menus Penn Central Transportation Company United States Penn Central Transportation Company Railroads--Dining-car service Menus"},{"id":66,"label":"Amtrak Menu, 1975","metadata":"1975 menus Amtrak United States Railroads--Dining-car service Menus Amtrak"},{"id":67,"label":"Amtrak Menu, 1972","metadata":"1972 menus Amtrak United States Railroads--Dining-car service Menus Amtrak"},{"id":68,"label":"Amtrak Menu, Between 1971 and 1989","metadata":"1971 to 1989 menus Amtrak United States Railroads--Dining-car service Menus Amtrak"},{"id":69,"label":"Pennsylvania Railroad Menu, Broadway Limited, 1963","metadata":"1963 menus Pennsylvania Railroad United States Railroads--Dining-car service Menus Pennsylvania Railroad"},{"id":70,"label":"Burlington Northern Railroad Company Menu, 1970","metadata":"1970 menus Burlington Northern Railroad Company United States Railroads--Dining-car service Menus Burlington Northern Railroad Company"},{"id":71,"label":"Amtrak Menu, Luncheon menu, 1977","metadata":"1977 menus Amtrak United States Railroads--Dining-car service Menus Amtrak"},{"id":72,"label":"Northern Pacific Railway Company Menu, Luncheon, 1962","metadata":"1962 menus Northern Pacific Railway Company United States Railroads--Dining-car service Menus Northern Pacific Railway Company"},{"id":73,"label":"Illinois Central Railroad Company Menu, The Buffett Lounge, 1963","metadata":"1963 menus Illinois Central Railroad Company United States Railroads--Dining-car service Menus Illinois Central Railroad Company"},{"id":74,"label":"Chicago, Rock Island, and Pacific Railway Company Menu, Golden State, 1963","metadata":"1963 menus Chicago, Rock Island, and Pacific Railway Company United States Railroads--Dining-car service Menus Chicago, Rock Island, and Pacific Railway Company"},{"id":75,"label":"Pullman Company Menu, Beverages, 1962","metadata":"1962 menus Pullman Company United States Railroads--Dining-car service Menus Pullman Company"},{"id":76,"label":"Erie Lackawanna Railway Company Menu, Dining service, Between 1968 and 1980","metadata":"1968 to 1980 menus Erie Lackawanna Railway Company United States Railroads--Dining-car service Menus Erie Lackawanna Railway Company"},{"id":77,"label":"Chicago, Milwaukee, St. Paul, and Pacific Railroad Company Menu, the Milwaukee Road, 1962","metadata":"1962 menus Chicago, Milwaukee, St. Paul, and Pacific Railroad Company United States Railroads--Dining-car service Menus Chicago, Milwaukee, St. Paul, and Pacific Railroad Company"},{"id":78,"label":"Atchison, Topeka, and Santa Fe Railway Company Menu, For dinner this evening, 1969","metadata":"1969 menus Atchison, Topeka, and Santa Fe Railway Company United States Railroads--Dining-car service Menus Atchison, Topeka, and Santa Fe Railway Company"},{"id":79,"label":"Chicago and North Western Railway Company Menu, 1968","metadata":"1968 menus Chicago and North Western Railway Company United States Railroads--Dining-car service Menus Chicago and North Western Railway Company"},{"id":80,"label":"Chicago, Rock Island, and Pacific Railway Company Menu, Golden State, 1962","metadata":"1962 menus Chicago, Rock Island, and Pacific Railway Company United States Railroads--Dining-car service Menus Chicago, Rock Island, and Pacific Railway Company"},{"id":81,"label":"Denver and Rio Grande Western Railroad Company Menu, Royal Gorge Grill","metadata":"1962 menus Denver and Rio Grande Western Railroad Company United States Railroads--Dining-car service Menus Denver and Rio Grande Western Railroad Company"},{"id":82,"label":"VIA Rail Canada Menu, VIA, Between 1978 and 1995","metadata":"1978 to 1995 menus VIA Rail Canada Canada Railroads--Dining-car service Menus VIA Rail Canada"},{"id":83,"label":"Illinois Central Railroad Company Menu, Dinner Menu, 1963","metadata":"1963 menus Illinois Central Railroad Company United States Railroads--Dining-car service Menus Illinois Central Railroad Company"},{"id":84,"label":"Amtrak Menu, 1972","metadata":"1972 menus Amtrak United States Railroads--Dining-car service Menus Amtrak"},{"id":85,"label":"Chicago, Rock Island, and Pacific Railway Company Menu,The Golden State Luncheon, 1963","metadata":"1963 menus Chicago, Rock Island, and Pacific Railway Company United States Railroads--Dining-car service Menus Chicago, Rock Island, and Pacific Railway Company"},{"id":86,"label":"Penn Central Transportation Company Menu, Penn Central, Between 1965 and 1970","metadata":"1965 to 1975 menus Penn Central Transportation Company United States Penn Central Transportation Company Railroads--Dining-car service Menus"},{"id":87,"label":"Chicago, Rock Island, and Pacific Railway Company Menu, Golden State, 1963","metadata":"1963 menus Chicago, Rock Island, and Pacific Railway Company United States Railroads--Dining-car service Menus Chicago, Rock Island, and Pacific Railway Company"},{"id":88,"label":"Amtrak Menu, 1976","metadata":"1976 menus Amtrak United States Railroads--Dining-car service Menus Amtrak"},{"id":89,"label":"Atchison, Topeka, and Santa Fe Railway Company Menu, For luncheon today, 1969","metadata":"1969 menus Atchison, Topeka, and Santa Fe Railway Company United States Railroads--Dining-car service Menus Atchison, Topeka, and Santa Fe Railway Company"},{"id":90,"label":"Union Pacific Railroad Company Menu, 1962","metadata":"1962 menus Union Pacific Railroad Company United States Railroads--Dining-car service Menus Union Pacific Railroad Company"},{"id":91,"label":"Pennsylvania Railroad Menu, Broadway Limited, 1963","metadata":"1963 menus Pennsylvania Railroad United States Railroads--Dining-car service Menus Pennsylvania Railroad"},{"id":92,"label":"Chicago, Milwaukee, St. Paul, and Pacific Railroad Company, the Hiawatha Diner, Between 1960 and 1970","metadata":"1960 to 1975 pamphlets Chicago, Milwaukee, St. Paul, and Pacific Railroad Company Railroads--Dining-car service Chicago, Milwaukee, St. Paul, and Pacific Railroad Company"},{"id":93,"label":"Amtrak Menu, For an Amtrak dinner today, between 1971 and 1989","metadata":"1971 to 1989 menus Amtrak United States Railroads--Dining-car service Menus Amtrak"},{"id":94,"label":"Canadian Pacific Railway Company, The Canadian dining car service menu, 1964","metadata":"1964 menus Canadian Pacific Railway Company Canada Menus Railroads--Dining-car service Canadian Pacific Railway Company"},{"id":95,"label":"Chesapeake and Ohio/Baltimore and Ohio Railroad Company Menu, Between 1960 and 1990","metadata":"1960 to 1990 menus Chesapeake and Ohio/Baltimore and Ohio Railroad Company United States Menus Chesapeake and Ohio Railway Company Railroads--Dining-car service"},{"id":96,"label":"Seaboard Air Line Railroad Company Menu, 1964","metadata":"1964 menus Seaboard Air Line Railroad Company United States Menus Seaboard Air Line Railroad Company Railroads--Dining-car service"},{"id":97,"label":"New York, New Haven, and Hartford Railroad Company Menu, Merchants Limited menu, 1967","metadata":"1967 menus New York, New Haven, and Hartford Railroad Company United States Railroads--Dining-car service New York, New Haven, and Hartford Railroad Company Menus"},{"id":98,"label":"Pennsylvania Railroad Menu, Broadway Limited, 1963","metadata":"1963 menus Pennsylvania Railroad United States Railroads--Dining-car service Menus Pennsylvania Railroad"},{"id":99,"label":"Pullman Company Menu, Pullman Service, 1963","metadata":"1963 menus Pullman Company United States Railroads--Dining-car service Menus Pullman Company"}]')}}]);
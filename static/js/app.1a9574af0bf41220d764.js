webpackJsonp([1],{"+F1L":function(t,e){},"7zck":function(t,e){},Dlsl:function(t,e){},MpYE:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n=i("3EgV"),s=i.n(n),o=i("wmKo"),r=i.n(o),l=(i("7zck"),{render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("v-toolbar",{staticClass:"app-toolbar",attrs:{height:"58",fixed:""}},[i("v-toolbar-side-icon",{staticClass:"hidden-sm-and-down"}),t._v(" "),i("v-toolbar-title",[t._v("Title")]),t._v(" "),i("v-spacer",{staticClass:"hidden-md-and-up"}),t._v(" "),i("v-menu",{staticClass:"hidden-md-and-up",attrs:{"nudge-width":100}},[i("v-toolbar-title",{attrs:{slot:"activator"},slot:"activator"},[i("span",[t._v("Меню")]),t._v(" "),i("v-icon",{attrs:{dark:""}},[t._v("arrow_drop_down")])],1),t._v(" "),i("v-list",t._l(t.nav,function(e){return i("v-list-tile",{key:e.link,attrs:{to:e.link}},[i("v-list-tile-title",[t._v(t._s(e.title))])],1)}))],1),t._v(" "),i("v-spacer"),t._v(" "),i("v-toolbar-items",{staticClass:"hidden-sm-and-down"},t._l(t.nav,function(e){return i("v-btn",{key:e.link,attrs:{to:e.link,flat:""}},[t._v("\n        "+t._s(e.title)+"\n      ")])}))],1),t._v(" "),i("v-app",{staticClass:"main"},[i("div",{staticClass:"wrapper"},[i("router-view")],1)])],1)},staticRenderFns:[]});var c=i("VU/8")({name:"App",data:function(){return{nav:[{link:"/home",title:"Home"},{link:"/about",title:"About us"},{link:"/contact",title:"Contact us"},{link:"/",title:"Главная"},{link:"/add",title:"Добавить"}]}}},l,!1,function(t){i("+F1L")},null,null).exports,u=i("/ocq"),d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-div"},[i("v-layout",{attrs:{row:"","justify-center":""}},[i("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-btn",{attrs:{slot:"activator",color:"primary"},slot:"activator"},[t._v("Open Dialog")]),t._v(" "),i("v-card",{},[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("User Profile")])]),t._v(" "),i("v-card-text",[i("v-container",{attrs:{"grid-list-md":""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{label:"Email",required:""}})],1),t._v(" "),i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{label:"Password",type:"password",required:""}})],1)],1)],1),t._v(" "),i("small",[t._v("*indicates required field")])],1),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Close")]),t._v(" "),i("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Save")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var p=i("VU/8")({name:"Main",data:function(){return{appTitle:"My awesome VueApp",dialog:!1,items:[{title:"Hello"},{title:"World"}]}}},d,!1,function(t){i("rl/8")},"data-v-bd90f8e4",null).exports,v=i("O4tu"),f=(i("Wk+B"),i("D8I6"),v.firebase.initializeApp({apiKey:"AIzaSyBwDcxZhzI-iB_ReoPnr1HDHhtd3WRqHQg",authDomain:"price-check-app-id.firebaseapp.com",databaseURL:"https://price-check-app-id.firebaseio.com",projectId:"price-check-app-id",storageBucket:"price-check-app-id.appspot.com",messagingSenderId:"614260692846"})),h=f.firestore(),m=f.storage();h.settings({timestampsInSnapshots:!0});var k=h,g={name:"products-list",data:function(){return{products:[],snackbar:!1,snackbarMsg:""}},firestore:function(){return{products:k.collection("products")}},mounted:function(){console.log(k)},methods:{removeProduct:function(t){var e=this;k.collection("products").doc(t).delete().then(function(){e.snackbarMsg="Удалено",e.snackbar=!0})}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h3",{staticClass:"title py-4"},[t._v("\n    Продукты\n  ")]),t._v(" "),0===t.products.length?i("v-progress-circular",{attrs:{indeterminate:"",color:"primary",size:40}}):i("v-list",{attrs:{"three-line":""}},[t._l(t.products,function(e,a){return[i("v-list-tile",{key:e.key,staticClass:"px-3 product-tile",attrs:{avatar:""}},[i("v-list-tile-avatar",{staticClass:"mr-5 mt-1",attrs:{size:"60"}},[i("img",{attrs:{src:e.imageUrl}})]),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",{staticClass:"mb-1",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("v-list-tile-sub-title",[t._v("Цена: "+t._s(e.price)+" руб.")]),t._v(" "),i("v-list-tile-sub-title",[t._v('\n            Адрес: "'+t._s(e.shopName)+'",\n             '+t._s(e.shopLocation))])],1),t._v(" "),i("v-list-tile-action",[i("v-btn",{attrs:{icon:"",ripple:""}},[i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("edit")])],1)],1),t._v(" "),i("v-list-tile-action",[i("v-btn",{attrs:{icon:"",ripple:""},on:{click:function(i){t.removeProduct(e[".key"])}}},[i("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("delete")])],1)],1)],1)]})],2),t._v(" "),i("v-snackbar",{attrs:{color:"blue-grey darken-4",right:"",bottom:"",timeout:1e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.snackbarMsg)+"\n  ")])],1)},staticRenderFns:[]};var b=i("VU/8")(g,_,!1,function(t){i("PeqH")},"data-v-67e16699",null).exports,y={name:"add-product",data:function(){return{snackbar:!1,snackbarMsg:"",title:"",price:"",categoryList:["Напитки","Выпечка","Фрукты / овощи"],category:"",shopLocation:"",shopName:"",imageUrl:"",image:null}},computed:{collectData:function(){return{title:this.title,price:this.price,category:this.category,shopLocation:this.shopLocation,shopName:this.shopName}}},methods:{pickUploadImage:function(){this.$refs.uploadImageInput.click()},onImagePicked:function(t){var e=this,i=t.target.files;i[0].name.lastIndexOf(".")<=0&&alert("Не верный формат файла");var a=new FileReader;a.addEventListener("load",function(){e.imageUrl=a.result}),a.readAsDataURL(i[0]),this.image=i[0]},addProduct:function(){var t=this,e=void 0;null!==this.image?k.collection("products").add(this.collectData).then(function(t){return e=t.id}).then(function(e){var i=t.image.name,a=i.slice(i.lastIndexOf("."));return m.ref("product-img/"+e+a).put(t.image)}).then(function(i){i.ref.getDownloadURL().then(function(t){k.collection("products").doc(e).set({imageUrl:t,key:e},{merge:!0})}),t.snackbarMsg="Товар добавлен",t.snackbar=!0,t.saveButtonColor="success"}).catch(function(e){t.snackbarMsg=e,t.snackbar=!0}):null===this.image&&(this.snackbarMsg="Загрузите фото",this.snackbar=!0)}}},x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h3",{staticClass:"title py-4"},[t._v("Добавить продукт")]),t._v(" "),i("v-container",{staticClass:"pa-0"},[i("v-form",[i("v-flex",[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{staticClass:"pa-1",attrs:{lg6:""}},[i("v-text-field",{attrs:{label:"Название товара",solo:"",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),i("v-flex",{staticClass:"pa-1",attrs:{lg6:""}},[i("v-text-field",{attrs:{label:"Цена",solo:"",required:""},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1),t._v(" "),i("v-flex",{staticClass:"pa-1",attrs:{lg6:""}},[i("v-select",{attrs:{items:t.categoryList,label:"Категория товара",solo:""},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})],1),t._v(" "),i("v-flex",{staticClass:"pa-1",attrs:{lg6:""}},[i("v-text-field",{attrs:{label:"Адрес магазина",solo:"",required:""},model:{value:t.shopLocation,callback:function(e){t.shopLocation=e},expression:"shopLocation"}})],1),t._v(" "),i("v-flex",{staticClass:"pa-1",attrs:{lg6:""}},[i("v-text-field",{attrs:{label:"Название магазина",solo:"",required:""},model:{value:t.shopName,callback:function(e){t.shopName=e},expression:"shopName"}})],1),t._v(" "),i("v-flex",{staticClass:"px-1",attrs:{lg6:""}},[i("v-btn",{attrs:{color:t.imageUrl?"success":"info",block:"",large:""},on:{click:t.pickUploadImage}},[t._v("\n              "+t._s(t.imageUrl?"Успешно":"Загрузить фото")+"\n              "),i("v-icon",{attrs:{right:"",dark:""}},[t._v(t._s(t.imageUrl?"done":"cloud_upload"))])],1),t._v(" "),i("input",{ref:"uploadImageInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onImagePicked}})],1),t._v(" "),i("v-layout",[i("v-flex",{attrs:{lg4:""}},[i("img",{attrs:{src:t.imageUrl,alt:"",height:"100",width:"100"}})]),t._v(" "),i("v-flex",{staticClass:"pa-1",attrs:{lg4:""}},[i("v-btn",{attrs:{color:"success",block:"",large:""},on:{click:t.addProduct}},[t._v("\n                Добавить товар\n                "),i("v-icon",{attrs:{right:"",dark:""}},[t._v("save")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),i("v-snackbar",{attrs:{color:"blue-grey darken-4",right:"",bottom:"",timeout:1e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.snackbarMsg)+"\n  ")])],1)},staticRenderFns:[]};var C=i("VU/8")(y,x,!1,function(t){i("MpYE")},"data-v-d31a85c6",null).exports,$=i("7t+N"),w=i.n($);if("undefined"!=typeof window)i("gqkz");var L={props:{options:{type:Object,default:function(){return{}}}},mounted:function(){this.create()},destroyed:function(){w()(this.$el).slick("unslick")},methods:{create:function(){var t=w()(this.$el);t.on("afterChange",this.onAfterChange),t.on("beforeChange",this.onBeforeChange),t.on("breakpoint",this.onBreakpoint),t.on("destroy",this.onDestroy),t.on("edge",this.onEdge),t.on("init",this.onInit),t.on("reInit",this.onReInit),t.on("setPosition",this.onSetPosition),t.on("swipe",this.onSwipe),t.on("lazyLoaded",this.onLazyLoaded),t.on("lazyLoadError",this.onLazyLoadError),t.slick(this.options)},destroy:function(){var t=w()(this.$el);t.off("afterChange",this.onAfterChange),t.off("beforeChange",this.onBeforeChange),t.off("breakpoint",this.onBreakpoint),t.off("destroy",this.onDestroy),t.off("edge",this.onEdge),t.off("init",this.onInit),t.off("reInit",this.onReInit),t.off("setPosition",this.onSetPosition),t.off("swipe",this.onSwipe),t.off("lazyLoaded",this.onLazyLoaded),t.off("lazyLoadError",this.onLazyLoadError),w()(this.$el).slick("unslick")},reSlick:function(){this.destroy(),this.create()},next:function(){w()(this.$el).slick("slickNext")},prev:function(){w()(this.$el).slick("slickPrev")},pause:function(){w()(this.$el).slick("slickPause")},play:function(){w()(this.$el).slick("slickPlay")},goTo:function(t,e){w()(this.$el).slick("slickGoTo",t,e)},currentSlide:function(){return w()(this.$el).slick("slickCurrentSlide")},add:function(t,e,i){w()(this.$el).slick("slickAdd",t,e,i)},remove:function(t,e){w()(this.$el).slick("slickRemove",t,e)},filter:function(t){w()(this.$el).slick("slickFilter",t)},unfilter:function(){w()(this.$el).slick("slickUnfilter")},getOption:function(t){w()(this.$el).slick("slickGetOption",t)},setOption:function(t,e,i){w()(this.$el).slick("slickSetOption",t,e,i)},setPosition:function(){w()(this.$el).slick("setPosition")},onAfterChange:function(t,e,i){this.$emit("afterChange",t,e,i)},onBeforeChange:function(t,e,i,a){this.$emit("beforeChange",t,e,i,a)},onBreakpoint:function(t,e,i){this.$emit("breakpoint",t,e,i)},onDestroy:function(t,e){this.$emit("destroy",t,e)},onEdge:function(t,e,i){this.$emit("edge",t,e,i)},onInit:function(t,e){this.$emit("init",t,e)},onReInit:function(t,e){this.$emit("reInit",t,e)},onSetPosition:function(t,e){this.$emit("setPosition",t,e)},onSwipe:function(t,e,i){this.$emit("swipe",t,e,i)},onLazyLoaded:function(t,e,i,a){this.$emit("lazyLoaded",t,e,i,a)},onLazyLoadError:function(t,e,i,a){this.$emit("lazyLoadError",t,e,i,a)}}},P={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)},staticRenderFns:[]},I=i("VU/8")(L,P,!1,null,null,null).exports,S=(i("Dlsl"),{name:"test-home",data:function(){return{pageTitle:"Home component",slickOptions:{slidesToShow:3,infinite:!0,dots:!1,arrows:!1,responsive:[{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}}},components:{Slick:I},methods:{next:function(){this.$refs.slick.next()},prev:function(){this.$refs.slick.prev()},reInit:function(){var t=this;this.$nextTick(function(){t.$refs.slick.reSlick()})}}}),U={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h3",{staticClass:"title py-4 mb-4 text-xs-center"},[t._v(t._s(t.pageTitle))]),t._v(" "),i("slick",{ref:"slick",staticClass:"slick",attrs:{options:t.slickOptions}},t._l(7,function(t){return i("a",{key:t,staticClass:"slick-item",attrs:{href:"http://vk.com/images/stickers/1"+t+"/128.png",target:"_blank"}},[i("img",{staticClass:"slick-img",attrs:{src:"http://vk.com/images/stickers/1"+t+"/128.png",alt:""}})])})),t._v(" "),i("v-container",{attrs:{fluid:""}},[i("v-layout",{attrs:{"justify-center":"",row:""}},[i("v-btn",{attrs:{color:"primary"},on:{click:t.prev}},[i("v-icon",[t._v("keyboard_arrow_left")])],1),t._v(" "),i("v-btn",{attrs:{color:"primary"},on:{click:t.next}},[i("v-icon",[t._v("keyboard_arrow_right")])],1)],1)],1)],1)},staticRenderFns:[]};var q=i("VU/8")(S,U,!1,function(t){i("m5lA")},"data-v-4641a8bc",null).exports,E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",{staticClass:"title py-4 mb-4 text-xs-center"},[this._v(this._s(this.pageTitle))]),this._v(" "),e("p",{staticClass:"subheading text-xs-center"},[this._v("\n    Здесь можно было бы написать инфо о компании, если бы это не было тестовое задание.\n  ")]),this._v(" "),e("img",{staticClass:"about-img",attrs:{src:"http://vk.com/images/stickers/46/256.png",alt:""}})])},staticRenderFns:[]};var T=i("VU/8")({name:"test-about",data:function(){return{pageTitle:"About component"}}},E,!1,function(t){i("fY+P")},"data-v-f1b97784",null).exports,z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",{staticClass:"title py-4 mb-4  text-xs-center"},[this._v(this._s(this.pageTitle))]),this._v(" "),e("p",{staticClass:"display-2"},[this._v("\n    8-800-555-35-35\n  ")]),this._v(" "),e("p",{staticClass:"body-1"},[this._v("\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt nam maxime exercitationem? Culpa voluptatibus magni nihil autem nemo? Dicta quisquam voluptate provident odio enim, dolor in impedit perferendis, autem modi quas, consequatur voluptates laboriosam perspiciatis pariatur recusandae aut? Beatae dolores voluptatum minus nisi facere quis ipsam deleniti dicta in repellendus ratione consequatur veritatis consectetur placeat consequuntur, pariatur quos, nam laborum hic? Ullam tenetur doloribus aspernatur officia nisi autem quas magni. Magni architecto, nam recusandae accusamus ipsum deserunt dolore facere dolorum sit inventore, atque aut? Nulla ab optio distinctio, facere quos dolorum, iusto mollitia vero alias voluptate amet ipsa expedita!\n  ")])])},staticRenderFns:[]};var R=i("VU/8")({name:"test-contact",data:function(){return{pageTitle:"Contact component"}}},z,!1,function(t){i("Sm+L")},"data-v-fc4a14e4",null).exports;a.a.use(u.a);var A=new u.a({routes:[{path:"/",name:"ProductsList",component:b},{path:"/main",name:"Main",component:p},{path:"/add",name:"AddProduct",component:C},{path:"/home",name:"TestHome",component:q},{path:"/about",name:"TestAbout",component:T},{path:"/contact",name:"TestContact",component:R}]});a.a.config.productionTip=!1,a.a.use(s.a),a.a.use(r.a),new a.a({el:"#app",router:A,components:{App:c},template:"<App/>"})},PeqH:function(t,e){},"Sm+L":function(t,e){},"fY+P":function(t,e){},m5lA:function(t,e){},"rl/8":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1a9574af0bf41220d764.js.map
(this["webpackJsonphomework_3.2"]=this["webpackJsonphomework_3.2"]||[]).push([[0],{29:function(e,t,n){},31:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(0),r=n.n(o),c=n(4),s=n.n(c),i=(n(29),n(5)),l=n.n(i),u=n(13),d=n(6),h=n(7),g=n(8),m=n(10),p=n(9),f=n(12),b=(n(31),function(e){var t=e.children;return Object(a.jsx)("div",{className:"container",children:t})}),j=n(22),v=n.n(j);n(53);function O(e){var t=e.onHandleSubmit,n=e.onSearchQueryChange,o=e.value;return Object(a.jsx)("header",{className:"Searchbar",children:Object(a.jsxs)("form",{className:"SearchForm",onSubmit:t,children:[Object(a.jsx)("button",{type:"submit",className:"SearchForm__button",children:Object(a.jsx)("span",{className:"SearchForm__button__label",children:"Search"})}),Object(a.jsx)("input",{className:"SearchForm__input",type:"text",value:o,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:n})]})})}n(54);function y(e){var t=e.webformatURL,n=e.largeImageURL,o=e.tags,r=e.onOpenModal;return Object(a.jsx)("li",{className:"ImageGalleryItem",children:Object(a.jsx)("img",{src:t,alt:o,"data-source":n,className:"ImageGalleryItem_image",onClick:r})})}y.defaultProps={src:"https://dummyimage.com/640x480/2a2a2a/ffffff&text=Photo%20not%20found",alt:""};n(55);function x(e){var t=e.images,n=e.onOpenModal;return Object(a.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,o=e.webformatURL,r=e.largeImageURL,c=e.tags;return Object(a.jsx)(y,{webformatURL:o,largeImageURL:r,tags:c,onOpenModal:n},t)}))})}x.defaultProps={images:[]};n(56);function w(e){var t=e.onLoadMore;return Object(a.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})}w.defaultProps={onClick:function(){return null},children:null};var S=w,L=(n(57),document.querySelector("#modal-root")),M=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handler=function(t){"Escape"===t.code&&e.props.onToggleModal()},e.handleBackdrop=function(t){t.currentTarget===t.target&&e.props.onToggleModal()},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handler)}},{key:"render",value:function(){var e=this.props.largeImageURL;return Object(c.createPortal)(Object(a.jsx)("div",{className:"Overlay",onClick:this.handleBackdrop,children:Object(a.jsx)("div",{className:"Modal",children:Object(a.jsx)("img",{src:e,alt:""})})}),L)}}]),n}(o.Component),k=(n(58),n(23)),I=n.n(k),C=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var a,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://pixabay.com/api/?q=".concat(t,"&page=").concat(n,"&key=").concat("18815450-007739eb5f1c89a4d6d918d62","&image_type=photo&orientation=horizontal&per_page=12"));case 2:return a=e.sent,o=a.data,e.abrupt("return",o.hits);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:"",images:[],largeImageURL:"",page:1,error:null,isLoading:!1,showModal:!1},e.searchImages=Object(d.a)(l.a.mark((function t(){var n,a,o,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.state,a=n.query,o=n.page,""!==a.trim()){t.next=3;break}return t.abrupt("return",f.b.info("Please enter search query to find images!"));case 3:return e.setState({isLoading:!0}),t.prev=4,t.next=7,C(a,o);case 7:r=t.sent,e.setState((function(e){var t=e.images,n=e.page;return{images:[].concat(Object(u.a)(t),Object(u.a)(r)),page:n+1}})),0===r.length&&e.setState({error:"No results found ".concat(a,"!")}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),e.setState({error:t.t0});case 15:return t.prev=15,window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.setState({isLoading:!1}),t.finish(15);case 19:case"end":return t.stop()}}),t,null,[[4,12,15,19]])}))),e.handleChange=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.searchImages()},e.onLoadMore=function(){e.searchImages(),e.scrollPage()},e.onOpenModal=function(t){e.setState({largeImageURL:t.target.dataset.source}),e.toggleModal()},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.scrollPage=function(){setTimeout((function(){window.scrollBy({top:document.documentElement.clientHeight-160,behavior:"smooth"})}),1e3)},e}return Object(g.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.setState({images:[],page:1,error:null})}},{key:"render",value:function(){var e=this.state,t=e.query,n=e.images,o=e.largeImageURL,r=e.isLoading,c=e.showModal,s=e.error;return Object(a.jsxs)(b,{children:[Object(a.jsx)(O,{onHandleSubmit:this.handleSubmit,onSearchQueryChange:this.handleChange,value:t}),s&&Object(a.jsxs)("p",{children:["Whoops, something went wrong: ",s.message]}),n.length>0&&Object(a.jsx)(x,{images:n,onOpenModal:this.onOpenModal}),r&&Object(a.jsx)(v.a,{type:"Oval",color:"#00BFFF",height:100,width:100,style:{textAlign:"center"}}),!r&&n.length>0&&Object(a.jsx)(S,{onLoadMore:this.onLoadMore}),c&&Object(a.jsx)(M,{onToggleModal:this.toggleModal,largeImageURL:o}),Object(a.jsx)(f.a,{autoClose:2e3})]})}}]),n}(o.Component),U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),U()}},[[77,1,2]]]);
//# sourceMappingURL=main.3964e47e.chunk.js.map
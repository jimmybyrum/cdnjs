(function ( factory ) {
    if ( typeof define === 'function' && define.amd )
    {
        // AMD. Register as an anonymous module.
        define( [ 'jquery' ], factory );
    }
    else if ( typeof exports === 'object' )
    {
        // Node/CommonJS
        factory( require( 'jquery' ) );
    }
    else
    {
        // Browser globals
        factory( jQuery );
    }
}( function ( jQuery ) {


/*	
 * jQuery mmenu offCanvas addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){function o(o){return("top"==o.position||"bottom"==o.position)&&("back"==o.zposition||"next"==o.zposition)&&(e[r].deprecated('Using position "'+o.position+'" in combination with zposition "'+o.zposition+'"','zposition "front"'),o.zposition="front"),o}function t(e){return"string"!=typeof e.pageSelector&&(e.pageSelector="> "+e.pageNodetype),e}function n(){c=!0,s=e[r]._c,i=e[r]._d,p=e[r]._e,s.add("offcanvas modal background opening blocker page"),i.add("style"),p.add("opening opened closing closed setPage"),a=e[r].glbl,a.$allMenus=(a.$allMenus||e()).add(this.$menu),a.$wndw.on(p.keydown,function(e){return a.$html.hasClass(s.opened)&&9==e.keyCode?(e.preventDefault(),!1):void 0});var o=0;a.$wndw.on(p.resize,function(e,t){if(t||a.$html.hasClass(s.opened)){var n=a.$wndw.height();(t||n!=o)&&(o=n,a.$page.css("minHeight",n))}})}var s,i,p,a,r="mmenu",l="offCanvas",c=!1;e[r].prototype["_init_"+l]=function(){if(this.opts[l]&&!this.vars[l+"_added"]){this.vars[l+"_added"]=!0,c||n(),this.opts[l]=o(this.opts[l]),this.conf[l]=t(this.conf[l]);var e=this.opts[l],i=this.conf[l],p=[s.offcanvas];"boolean"!=typeof this.vars.opened&&(this.vars.opened=!1),"left"!=e.position&&p.push(s.mm(e.position)),"back"!=e.zposition&&p.push(s.mm(e.zposition)),this.$menu.addClass(p.join(" ")).parent().removeClass(s.wrapper),this[l+"_initPage"](a.$page),this[l+"_initBlocker"](),this[l+"_initOpenClose"](),this[l+"_bindCustomEvents"](),this.$menu[i.menuInjectMethod+"To"](i.menuWrapperSelector)}},e[r].addons.push(l),e[r].defaults[l]={position:"left",zposition:"back",modal:!1,moveBackground:!0},e[r].configuration[l]={pageNodetype:"div",pageSelector:null,menuWrapperSelector:"body",menuInjectMethod:"prepend"},e[r].prototype.open=function(){if(this.vars.opened)return!1;var e=this;return this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),"open"},e[r].prototype._openSetup=function(){a.$allMenus.not(this.$menu).trigger(p.close),a.$page.data(i.style,a.$page.attr("style")||""),a.$wndw.trigger(p.resize,[!0]);var e=[s.opened];this.opts[l].modal&&e.push(s.modal),this.opts[l].moveBackground&&e.push(s.background),"left"!=this.opts[l].position&&e.push(s.mm(this.opts[l].position)),"back"!=this.opts[l].zposition&&e.push(s.mm(this.opts[l].zposition)),this.opts.classes&&e.push(this.opts.classes),a.$html.addClass(e.join(" ")),this.vars.opened=!0,this.$menu.addClass(s.current+" "+s.opened)},e[r].prototype._openFinish=function(){var e=this;this.__transitionend(a.$page,function(){e.$menu.trigger(p.opened)},this.conf.transitionDuration),a.$html.addClass(s.opening),this.$menu.trigger(p.opening)},e[r].prototype.close=function(){if(!this.vars.opened)return!1;var e=this;return this.__transitionend(a.$page,function(){e.$menu.removeClass(s.current).removeClass(s.opened),a.$html.removeClass(s.opened).removeClass(s.modal).removeClass(s.background).removeClass(s.mm(e.opts[l].position)).removeClass(s.mm(e.opts[l].zposition)),e.opts.classes&&a.$html.removeClass(e.opts.classes),a.$page.attr("style",a.$page.data(i.style)),e.vars.opened=!1,e.$menu.trigger(p.closed)},this.conf.transitionDuration),a.$html.removeClass(s.opening),this.$menu.trigger(p.closing),"close"},e[r].prototype[l+"_initBlocker"]=function(){var o=this;a.$blck||(a.$blck=e('<div id="'+s.blocker+'" />').appendTo(a.$body)),a.$blck.off(p.touchstart).on(p.touchstart,function(e){e.preventDefault(),e.stopPropagation(),a.$blck.trigger(p.mousedown)}).on(p.mousedown,function(e){e.preventDefault(),a.$html.hasClass(s.modal)||o.close()})},e[r].prototype[l+"_initPage"]=function(o){o||(o=e(this.conf[l].pageSelector,a.$body),o.length>1&&(e[r].debug("Multiple nodes found for the page-node, all nodes are wrapped in one <"+this.conf[l].pageNodetype+">."),o=o.wrapAll("<"+this.conf[l].pageNodetype+" />").parent())),o.addClass(s.page),a.$page=o},e[r].prototype[l+"_initOpenClose"]=function(){var o=this,t=this.$menu.attr("id");t&&t.length&&(this.conf.clone&&(t=s.umm(t)),e('a[href="#'+t+'"]').off(p.click).on(p.click,function(e){e.preventDefault(),o.open()}));var t=a.$page.attr("id");t&&t.length&&e('a[href="#'+t+'"]').on(p.click,function(e){e.preventDefault(),o.close()})},e[r].prototype[l+"_bindCustomEvents"]=function(){var e=this,o=p.open+" "+p.opening+" "+p.opened+" "+p.close+" "+p.closing+" "+p.closed+" "+p.setPage;this.$menu.off(o).on(o,function(e){e.stopPropagation()}),this.$menu.on(p.open,function(){e.open()}).on(p.close,function(){e.close()}).on(p.setPage,function(o,t){e[l+"_initPage"](t),e[l+"_initOpenClose"]()})}}(jQuery);
}));
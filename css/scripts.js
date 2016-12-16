




/*
     FILE ARCHIVED ON 16:45:01 Sep 29, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:38:13 Apr 25, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
jQuery(document).ready(function(){

// Closes the sidebar menu
    jQuery("#menu-close").click(function(e) {
        e.preventDefault();
        jQuery("#sidebar-wrapper").toggleClass("active");
        jQuery('#menu-toggle').toggleClass("active");
    });

    // Opens the sidebar menu
    jQuery("#menu-toggle").click(function(e) {
        e.preventDefault();
        jQuery("#sidebar-wrapper").toggleClass("active");
        jQuery('#menu-toggle').toggleClass("active");
    });

    // Scrolls to the selected menu item on the page
    jQuery(function() {
        jQuery('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    jQuery('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });



}); //END doc-ready

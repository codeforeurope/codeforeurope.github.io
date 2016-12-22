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
}); //END doc-ready

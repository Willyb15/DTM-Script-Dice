//Pageload Rule: navTrackPageLoad
if (typeof(jQuery) != 'undefined') {
	jQuery(document).on('click', 'a, button, [data-navTrackLink]', function( event ) {
		var clickitem = event.target;
    if (jQuery.type(clickitem) != 'a' && jQuery.type(clickitem) != 'button' && !jQuery(this)[0].hasAttribute('data-navTrackLink')) {
      clickitem = jQuery(clickitem).parents('a');
    }
    var clickregion = jQuery(clickitem).parents('[data-navTrackRegion]');
    
    if (typeof(clickregion) != 'undefined' && clickregion.length > 0) {
			if (typeof(window.ssdl) == 'undefined') {
				window.ssdl = {};	
			} 
			
			window.ssdl.navTrack = {};

			if (jQuery(clickitem).attr('data-navTrackLink')) {
				navlabel = jQuery(clickitem).attr('data-navTrackLink');
				window.ssdl.navTrack.navlabel = navlabel;
			} else if (jQuery(clickitem).text()) {
				navlabel = jQuery(clickitem).text().trim();
				navlabel = navlabel.replace(/\r?\n|\r/g,"");
				window.ssdl.navTrack.navlabel = navlabel;
			} 

			navregion = jQuery(clickregion).attr('data-navTrackRegion');
			window.ssdl.navTrack.navregion = navregion;
			
			navsource = window.location.pathname;
			navsource = navsource.split("?")[0];
			window.ssdl.navTrack.navsource = navsource;
			
			if (jQuery(clickitem).attr('href')) {
				navtarget = jQuery(clickitem).attr('href');
        		navtarget = navtarget.split("?")[0];
				window.ssdl.navTrack.navtarget = navtarget;
			} else if (jQuery(clickitem).attr('data-navTrackTarget')) {
				navtarget = jQuery(clickitem).attr('data-navTrackTarget');
        		navtarget = navtarget.split("?")[0];
				window.ssdl.navTrack.navtarget = navtarget;
			}
      
	    	if (typeof(jQuery(clickitem).attr('data-navTrackProc')) != 'undefined') {
				window.ssdl.navTrack.navTrackProc = jQuery(clickitem).attr('data-navTrackProc');
			}

	    	_satellite.setVar('navTrack',ssdl.navTrack);
    	_satellite.track('navTrack');
			
		}
		
	});
	
}
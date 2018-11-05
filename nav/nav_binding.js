//Page Load Rule: Dice Verified 
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/;";
}

//Track clicks on Assessment Links
if (typeof($) != 'undefined') {
	//Track the Skills Tables
	$('.skillTable').attr('data-navTrackRegion','skill table');
  	
	//Make links in Skills Table track on-page rather than next page
	$('.skillTable a').attr('data-navTrackProc','true');

  	//Track clicks on the Modal to take the test
  	$('.modal-content').attr('data-navTrackRegion','take the test modal');
  
}

//Track the completion of tests
if (window.location.search.indexOf('testComplete=true') > -1) {

	var diceverifiedtestcookie, testname;
	diceverifiedtestcookie = _satellite.readCookie('diceverified');
	urlparams = window.location.search.split('&');	

	for (i=0;i<(urlparams.length - 1); i++) {
		if (urlparams[i].indexOf('test=') > -1) {
			testname = urlparams[i].split('=')[1];
		}
	}

	if(diceverifiedtestcookie != testname) {
		var ssdl = ssdl || {}
		ssdl.user_interaction = ssdl.user_interaction || {}
		ssdl.user_interaction.description = 'Dice Verified - Test Complete';
		_satellite.track('interaction_event');
    _satellite.track('diceverifiedcompleted')
		createCookie('diceverified',testname);
	}
  
  
	
}





delayLink = function (selector) {
    $(selector).click(function(evt){
      evt.preventDefault();  
      var link = $(this).attr("href");
        setTimeout(function() {
            window.location.href = link;
        }, 500);
    });
}

//Track clicks on Assessment Links
if (typeof($) != 'undefined') {

	//Append navtrack to Regions of Homepage
	$('.search-form').attr('data-navTrackRegion','Job-Search form');
  $('section.latest-insights').attr('data-navTrackRegion','Latest Insights');
	$('section.trending-searches').attr('data-navTrackRegion','Trending Searches');
  $('div#banner-slideshow').attr('data-navTrackRegion','Hero Banner');
  
  //Regions requiring tracking on same page
  delayLink('section.latest-insights a');
  $('section.latest-insights a').attr('data-navTrackProc','true');
  
}


//NavTrack on DJV Salary Predictor Widget
if (typeof($) != 'undefined') {
  $('#widget-dice-salary-predictor-widget').attr('data-navTrackRegion','Insights: Salary Predictor');
  $('.salary-predictor-range').attr('data-navTrackLink','Insights: Salary Predictor Link')
	$('.widget-dice-salary-predictor-widget').attr('data-navTrackLink','Insights: Salary Predictor Link');
  $('.widget-dice-salary-predictor-widget a').attr('data-navTrackLink','Insights: Salary Predictor Link');
}

//NavTrack on DJV Salary Predictor Widget
if (typeof($) != 'undefined') {
  $('.salary-prediction-section').attr('data-navTrackRegion','DJV: Salary Predictor');
  $('.salary-prediction-value, .salary-prediction-value #minSal, .salary-prediction-value #maxSal').attr('data-navTrackLink','DJV: Salary Currency Link');
  $('.salary-prediction-estimate-link').attr('data-navTrackLink','DJV: Personalized Estimate Link');
}
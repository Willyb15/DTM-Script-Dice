var forms = [
  {
    'name': 'mktoForm_1339',
    'complete_path': '/Dice_General-ContactUs-TY-D.html'
  },{
    'name': 'mktoForm_1891',
    'complete_path': '/2017-contact-us_ty.html'
  },{
    'name': 'mktoForm_1907',
    'complete_path': '/2017-homepagebanner-ty.html'
  },{
    'name': 'mktoForm_recruitpkg',
    'complete_path': '/premium-recruitment-package-ty'
  },{
    'name': 'mktoForm_recruitpkgB',
    'complete_path': '/premium-recruitment-package-b-ty'
  },{
    'name': 'mktoForm_1282',
    'complete_path': '/2016-05-18-Dice_RecruitmentPackage_CU_TY_D.html'
  },{
    'name': 'mktoForm_openweb',
    'complete_path': '/products/open-web-ty'
  },{
    'name': 'mktoForm_prempost',
    'complete_path': '/products/premium-post-ty'
  },{
    'name': 'mktoForm_sourcing',
    'complete_path': '/products/sourcing-concierge-ty'
  },{
    'name': 'mktoForm_sourcingB',
    'complete_path': '/products/sourcing-concierge-b-ty'
  },{
    'name': 'mktoForm_THC',
    'complete_path': '/products/targeted-hiring-ty'
  },{
    'name': 'mktoForm_lengo',
    'complete_path': '/products/lengo-ty'
  },{
    'name': 'mktoForm_branding',
    'complete_path': '/products/branding-opportunities-ty'
  },{
    'name': 'mktoForm_hackathons',
    'complete_path': '/products/hackathons-ty'
  },{
    'name': 'mktoForm_talentsolutions',
    'complete_path': '/talent-solutions-center-ty'
  },{
    'name': 'mktoForm_1972',
    'complete_path': '/mktoForm_1972-ty'
  },{
    'name': 'mktoForm_1973',
    'complete_path': '/mktoForm_1973-ty'
  },{
    'name': 'mktoForm_2035',
    'complete_path': '/mktoForm_2035-ty'
  },{
  	'name': 'mktoForm_2336',
    'complete_path': '/mktoForm_2336-ty'
  },{
    'name': 'mktoForm_recruitpkgB',
    'complete_path': '/recruitpkgB-ty'
  },{
    'name': 'mktoForm_sourcingB',
    'complete_path': '/mktoForm_sourcingB-ty'
  },{
    'name': 'mktoForm_talentsolutions',
    'complete_path': '/mktoForm_talentsolutions-ty'
  },{
    'name': 'mktoForm_openweb',
    'complete_path': '/mktoForm_openweb-ty'
  },{
    'name': 'mktoForm_prempost',
    'complete_path': '/mktoForm_premium-ty'
  },{
    'name': 'mktoForm_THC',
    'complete_path': '/mktoForm_THC-ty'
  },{
    'name': 'mktoForm_lengo',
    'complete_path': '/mktoForm_lengo-ty'
  },{
    'name': 'mktoForm_branding',
    'complete_path': '/mktoForm_branding-ty'
  },{
    'name': 'mktoForm_assessments',
    'complete_path': '/mktoForm_assessments-ty'
  },{
    'name': 'mktoForm_hackathons',
    'complete_path': '/mktoForm_hackathons-ty'
  },{
    'name': 'mktoForm_talentsearch',
    'complete_path': '/mktoForm_talentsearch-ty'
  }

];

var page_forms = [];
jQuery('form[data-trackform]').each(function(key,item){
  page_forms = jQuery.grep(forms, function(i){ return i.name == jQuery(item).attr('data-trackform') });
});


if(page_forms.length > 0)
  return false;


var form_name = _satellite.readCookie('dtm_form_name') || '';
var complete_page = jQuery.grep(forms, function(i){ return window.location.pathname.indexOf(i.complete_path) > -1 });
if(complete_page.length > 0 && form_name){
   
  	window.ssdl.trackEvent({
        'action': 'form_completed',
        'data': {
            'form_name': form_name
        }
    });
    _satellite.removeCookie('dtm_form_name');
    return true;
}

var lower_form_name = form_name.toLowerCase() + "-ty";
var lower_path_name = window.location.pathname.toLowerCase();
if(lower_path_name.indexOf(lower_form_name) > -1 && form_name){
   
  	window.ssdl.trackEvent({
        'action': 'form_completed',
        'data': {
            'form_name': form_name
        }
    });
    _satellite.removeCookie('dtm_form_name');
    return true;
}


jQuery('form[data-trackform]').on('submit', function(){
  
  window.ssdl.trackEvent({
        'action': 'form_completed',
        'data': {
            'form_name': jQuery(this).attr('data-trackform')
        }
   });
  
});

return true;
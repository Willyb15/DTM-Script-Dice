var track_forms = [
    // form names
    'registrationForm',
    'dicePostAJob', //This won't bind, it needs to be included by devs
    // class names
    'home-contact',
    'mktoForm'
];

jQuery('form').each(function(key,item){
  if(jQuery(item).attr('data-trackform')){
    _satellite.setCookie('dtm_form_name', jQuery(item).attr('data-trackform'));
    return false;
  }
  
  var data_trackform = '';
  var form_name = jQuery(item).attr('name');
  if(form_name && track_forms.indexOf(form_name) > -1){
    data_trackform = form_name;
  }
  else{
    jQuery(track_forms).each(function(key2,item2){
      if(jQuery(item).hasClass(item2)){
        data_trackform = item2;
        if (item2 == 'mktoForm') {
          data_trackform = jQuery(item).attr('id');
        }
      }
    });
  }
  if(data_trackform){
    jQuery('form').eq(key).attr('data-trackform', data_trackform);
    _satellite.setCookie('dtm_form_name', data_trackform);
  }
});

return true;
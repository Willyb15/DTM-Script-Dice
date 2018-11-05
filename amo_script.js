//External
var ev_transid = window._satellite.getVar('Visitor ID') + window._satellite.getVar('Jobid');
var server = _satellite.getVar('Server Name');
if(server == 'www'){
  (function() { 
    var f = function() {
      EF.init({ eventType: "transaction",
               transactionProperties : "ev_applicant_confirmed=1&ev_transid=" + ev_transid,
               segment : "64923", 
               searchSegment : "",
               sku : "",
               userid : "3853",
               pixelHost : "pixel.everesttech.net"

               , allow3rdPartyPixels: 1});
      EF.main();
    };
    window.EF = window.EF || {}; 
    if (window.EF.main) {
      f();
      return;
    }
    window.EF.onloadCallbacks = window.EF.onloadCallbacks || [];
    window.EF.onloadCallbacks[window.EF.onloadCallbacks.length] = f;

    if (!window.EF.jsTagAdded) {
      var efjs = document.createElement('script'); efjs.type = 'text/javascript'; efjs.async = true;
      efjs.src = '//www.everestjs.net/static/st.v3.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(efjs, s);
      window.EF.jsTagAdded=1;
    }
  })();
  (function() {
    var f = function() {
          EF.init({ eventType: "transaction",
                    transactionProperties : "ev_applicant_offline=1&ev_transid=" + ev_transid,
                    segment : "", 
                    searchSegment : "",
                    sku : "",
                    userid : "3853",
                    pixelHost : "pixel.everesttech.net"
                    
                    , allow3rdPartyPixels: 1});
          EF.main();
    };
    window.EF = window.EF || {}; 
    if (window.EF.main) {
        f();
        return;
    }
    window.EF.onloadCallbacks = window.EF.onloadCallbacks || [];
    window.EF.onloadCallbacks[window.EF.onloadCallbacks.length] = f;
    if (!window.EF.jsTagAdded) {
        var efjs = document.createElement('script'); efjs.type = 'text/javascript'; efjs.async = true;
        efjs.src = 'https://www.everestjs.net/static/st.v3.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(efjs, s);
        window.EF.jsTagAdded=1;
    }
  })();
};
if(server == 'uk'){
  (function() {
    var f = function() {
          EF.init({ eventType: "transaction",
                    transactionProperties : "ev_total_applications_uk=1&ev_transid=" + ev_transid,
                    segment : "", 
                    searchSegment : "",
                    sku : "",
                    userid : "3853",
                    pixelHost : "pixel.everesttech.net"
                    
                    , allow3rdPartyPixels: 1});
          EF.main();
    };
    window.EF = window.EF || {}; 
    if (window.EF.main) {
        f();
        return;
    }
    window.EF.onloadCallbacks = window.EF.onloadCallbacks || [];
    window.EF.onloadCallbacks[window.EF.onloadCallbacks.length] = f;
    if (!window.EF.jsTagAdded) {
        var efjs = document.createElement('script'); efjs.type = 'text/javascript'; efjs.async = true;
        efjs.src = 'https://www.everestjs.net/static/st.v3.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(efjs, s);
        window.EF.jsTagAdded=1;
    }
  })();
};

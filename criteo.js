function dynamicallyLoadScript(url) {
    var script = document.createElement("script"); //Make a script DOM node
    script.src = url; //Set it's src to the provided URL
    document.head.appendChild(script); //Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

dynamicallyLoadScript("//static.criteo.net/js/ld/ld.js");


var ckuserid = _satellite.getVar('DTM_UserId');
var dtpjobid = _satellite.getVar('Jobid');
var deviceType = /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d";
// Now start each tag off with an IF statement and then drop in the tag.
// UK
if (_satellite.getVar('Server Name') == "uk") {
  window.criteo_q = window.criteo_q || [];
  window.criteo_q.push(
    { event: "setAccount", account: 15200},  // You should never update this line
    { event: "setEmail", email: _satellite.getVar('SSDL - User - Emailhashl') },
    { event: "setSiteType", type: deviceType},
    { event: "viewItem", item: dtpjobid}
  );
} else if (_satellite.getVar('Server Name') == "www") {
  window.criteo_q = window.criteo_q || [];
  window.criteo_q.push(
    { event: "setAccount", account: 17670},  // You should never update this line
    { event: "setEmail", email: _satellite.getVar('SSDL - User - Emailhash') },
    { event: "setSiteType", type: deviceType},
    { event: "viewItem", item: dtpjobid}
  );
} else if (_satellite.getVar('Server Name') == 'de') {
  window.criteo_q = window.criteo_q || [];
  window.criteo_q.push(
    { event: "setAccount", account: 14612},  // You should never update this line
    { event: "setEmail", email: _satellite.getVar('SSDL - User - Emailhash') },
    { event: "setSiteType", type: deviceType},
    { event: "viewItem", item: dtpjobid}
  );
}
var job_reference = ssdl.jobObj.jobId;
var timestamp = Date.now();
var user_agent = navigator.userAgent;
var user_id = _satellite.getVar('DTM_UserId')
var url = window.location.search
var postId = url.split('ccuid')[1].split('=')[1].split('&')[0];
var cc_click_id = postId;

function dynamicallyLoadScript(url) {
    var script = document.createElement("script"); //Make a script DOM node
    script.src = url; //Set it's src to the provided URL
    document.head.appendChild(script); //Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

dynamicallyLoadScript("//click.appcast.io/pixels/ss1-6874.js?ent=314&job_reference={" + job_reference + "}& user_ip={user_ip}&user_agent={" +  user_agent + "}&timestamp={" + timestamp + "}&id={" + user_id + "}&cc_click_id={" + cc_click_id + "}");
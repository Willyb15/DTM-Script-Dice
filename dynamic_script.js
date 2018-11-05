function dynamicallyLoadScript(url) {
    var script = document.createElement("script"); //Make a script DOM node
    script.src = url; //Set it's src to the provided URL
    document.head.appendChild(script); //Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

dynamicallyLoadScript("//static.criteo.net/js/ld/ld.js");

job_reference={dice_job_reference}
user_ip={user_ip}
user_agent={user_agent}
timestamp={timestamp}
id={id}
cc_click_id={cc_click_id}

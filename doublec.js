var sub = window.location.host.split('.')[0]
if (sub == "uk") {
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    iframesource = 'https://8085935.fls.doubleclick.net/activityi;src=8085935;type=dicea0;cat=dicea0;u1=[Job Type];u2=[Company];u3=[Contract Type];u4=[Job Location];u5=[Applicant Location];u6=[Applicant Type];u7=[Keyword Search];u8=[Exclude Search];u9=[Last Updated Data];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + '?"';
    var iframe = document.createElement('iframe');
    iframe.setAttribute('height','1');
		iframe.setAttribute('width','1');
		iframe.setAttribute('Border','0');
    iframe.style.display = "none";
    iframe.src = iframesource;
    document.body.appendChild(iframe);
}
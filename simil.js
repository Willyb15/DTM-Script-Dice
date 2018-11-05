var simUID = _satellite.getVar('SSDL - User - Email'); 
var simSID = _satellite.getVar('DTM SessionId');
var simName = $('span#dice-customer-name').text();
var simSplit = simName.split(" ");
var simFirstName = simSplit[0];
var simLastName = simSplit[1];
//Seeker Emulation Suppression
var stopCall = getCookie("SEEKER_EMULATION");

var simGID = _satellite.getVar('SSDL - customerGroupID');
var simJID = _satellite.getVar('Jobid');

if (typeof(simFirstName) == 'undefined' || simFirstName.length < 1 ) {
  simFirstName = _satellite.getVar('SSDL - User - First Name')
}

if (typeof(simLastName) == 'undefined' || simLastName.length < 1) {
  simLastName = _satellite.getVar('SSDL - User - Last Name')
}

function empty(data)
{
  if(typeof(data) == 'number' || typeof(data) == 'boolean')
  { 
    return false; 
  }
  if(typeof(data) == 'undefined' || data === null)
  {
    return true; 
  }
  if(typeof(data.length) != 'undefined')
  {
    return data.length == 0;
  }
  var count = 0;
  for(var i in data)
  {
    if(data.hasOwnProperty(i))
    {
      count ++;
    }
  }
  return count == 0;
}

if(empty(simUID))
{
	var simUID = 'session';
  	simUID = 'session' + simSID;
};
//Supress Call if user has cookie
if(stopCall != 'true'){
  if (typeof(simUID) != 'undefined') {
    $.getScript('https://cdn.simility.com/b.js', function()
    {	  

    var similityContext = {
      "customer_id": "dice",
      "sessionId": simSID, //read in analytics session id (use dice session id)
      "similityLite": true,
      "transactionInfo": [{
          "id": simUID,
          "entity": "job_application",  
        "fields" : {
        "emailaddress": simUID, //read in actual email address
          "jobid": simJID, //last viewed job id
          "groupid": simGID, //last viewd group id
          "type": "JobApplication"
        }
      }]
      };
      //console.log("similityContext");
      //console.log(similityContext);
      var ss = new SimilityScript(similityContext);
      ss.execute();
    });
  }
}

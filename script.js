var baseUrl = "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/";

var patientSearchString = "/Patient?given=Jason&family=Argonaut";



$.getJSON(baseUrl + patientSearchString, function(data,error) {
    var patientId = data.entry[0].link[0].url.split("/").pop();
    var allergySearchstring = "AllergyIntolerance?patient=" + patientId;
    console.log(data);
    
    $.getJSON(baseUrl + allergySearchstring, function (data, error) {
        console.log(data);
        //debugger;
        $("body").append(data.entry[0].resource.patient.display);
    });
    
});

// 

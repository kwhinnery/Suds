# Suds: A JavaScript SOAP Client Library

> XML is like violence - if it doesn't solve your problem, you're probably not using enough of it.

Suds is a lightweight SOAP client library for JavaScript, initially tested for
[Titanium Mobile](http://www.appcelerator.com).

## Usage

		var suds = new SudsClient({ 
			endpoint: "http://www.mysoapendpoint.com/AwesomeService.asmx",
			targetNamespace: "http://www.mysoapendpoint.com/Awesome" 
		});	
		
		suds.invoke("AwesomeMethod", { awesomeParameter: "AWESOME" }, function(xmlDoc) {
			//Parse XML response (SOAP Envelope)
		});
		
		
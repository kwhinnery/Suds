# Suds: A JavaScript SOAP Client Library

> XML is like violence - if it doesn't solve your problem, you're probably not using enough of it.

Suds is a lightweight SOAP client library for JavaScript, initially tested for [Titanium Mobile](http://www.appcelerator.com),
with Titanium Desktop and the browser soon to follow.

## Usage

		var suds = new SudsClient({ 
			endpoint: "http://www.mysoapendpoint.com/AwesomeService.asmx",
			targetNamespace: "http://www.mysoapendpoint.com/Awesome" 
		});	
		
		suds.invoke("AwesomeMethod", { awesomeParameter: "AWESOME" }, function(xmlDoc) {
			//Parse XML response (SOAP Envelope)
		});
		
## API

The following is the current API documentation for Suds.  Impressive, no?

## SudsClient(options)

Constructor for a Suds SOAP web service client.

* options
	* endpoint - the SOAP endpoint you will be using
	* targetNamespace - the namespace for your service data structures and prefix for SOAP actions - will be in your service WSDL
	* envelopeBegin (optional) - a string containing the XML preceding the contents of the SOAP request body
	* envelopeEnd (optional) - a string containing the XML following the contents of the SOAP request body
	
## sudsClient.invoke(soapAction, body, callback(xmlDoc))

Invoke a SOAP action on the web service defined by this Suds instance.

* soapAction - the web service method to invoke
* body - can be one of:
	* An XML string containing the SOAP request body, constructed manually
	* A JavaScript object containing a hierarchical data structure which can be converted to XML
* callback - a callback function to process the request result, with the following information
	* [this] - `this` inside your callback will refer to the XHR object used to make the SOAP web service call
	* xmlDoc - An [XML Document Object](http://www.w3schools.com/Dom/default.asp) containing the SOAP response
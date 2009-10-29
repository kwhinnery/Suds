# Suds: A JavaScript SOAP Client Library

> XML is like violence - if it doesn't solve your problem, you're probably not using enough of it.

Suds is a lightweight SOAP client library for JavaScript.  Suds has been tested on the following platforms:

* Titanium Desktop (0.7.0)
* Titanium Mobile (0.7.1)

For more information on creating native desktop and mobile apps with HTML, JavaScript, and CSS, 
[check out the Appcelerator home page](http://www.appcelerator.com).  Suds should also run in the web browser
against SOAP web services, with the usual cross-domain restrictions.  Suds has yet to be tested in the browser,
however, so your mileage may vary.  

## Usage

	var suds = new SudsClient({ 
	  endpoint: "http://webservice.webserviceshare.com/currencyconverter/rates.asmx",
	  targetNamespace: "http://websevriceshare.com/" 
	});
	
	suds.invoke("GetSupportedCurrencies", {}, function(xmlDoc) {
	  //Parse XML response (SOAP Envelope)
	});
		
## API

The following is the current API documentation for Suds, which consists of a constructor for the client and an `invoke`
method on the client to call specific services on your endpoint.  Impressive, no?

### SudsClient(options)

Constructor for a Suds SOAP web service client.

* options
	* endpoint - the SOAP endpoint you will be using
	* targetNamespace - the namespace for your service data structures and prefix for SOAP actions - will be in your service WSDL
	* envelopeBegin (optional) - a string containing the XML preceding the contents of the SOAP request body
	* envelopeEnd (optional) - a string containing the XML following the contents of the SOAP request body
	
### sudsClient.invoke(soapAction, callback(xmlDoc), body)

Invoke a SOAP action on the web service defined by this Suds instance.

* soapAction - the web service method to invoke
* body - can be one of:
	* An XML string containing the SOAP request body, constructed manually
	* A JavaScript object containing a hierarchical data structure which can be converted to XML
* callback - a callback function to process the request result, with the following information
	* [this] - `this` inside your callback will refer to the XHR object used to make the SOAP web service call
	* xmlDoc - An [XML Document Object](http://www.w3schools.com/Dom/default.asp) containing the SOAP response
	
## Examples

Example applications using Suds for Titanium Mobile and Desktop are located in this project as well.
Feel free to pull them down and import into Titanium Developer to see these projects in action.  They
should work out of the box using a publicly available SOAP web service.
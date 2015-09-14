# Unsupported & Alternatives

I am no longer supporting this library - you can check one of the forks for a more up-to-date version, you can use [SOAP module](https://github.com/smclab/ti-soap) or [Alloy SOAP Sync adapter](https://github.com/HazemKhaled/co.thecodelab.adapter.soap) for Alloy apps

## Suds: A JavaScript SOAP Client Library

> _XML is like violence - if it doesn't solve your problem, you're probably not using enough of it._

Suds is a lightweight SOAP client library for JavaScript.  Suds has been tested on the following platforms:

* Titanium Desktop (0.7.0)
* Titanium Mobile (0.7.1)

For more information on creating native desktop and mobile apps with HTML, JavaScript, and CSS, 
[check out the Appcelerator home page](http://www.appcelerator.com).  Suds should also run in the web browser
against SOAP web services, with the usual cross-domain restrictions.  Suds has yet to be tested in the browser,
however, so your mileage may vary.  __NOTE:__ While jQuery 1.3 is used in the example applications, Suds is not
dependent upon it and can be used independently.

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

### `SudsClient(options)`

Constructor for a Suds SOAP web service client.

* options - A JavaScript object containing the following properties:
	* endpoint - the SOAP endpoint you will be using
	* targetNamespace - the namespace for your service data structures and prefix for SOAP actions - will be in your service WSDL
	* envelopeBegin (optional) - a string containing the XML preceding the contents of the SOAP request body
	* envelopeEnd (optional) - a string containing the XML following the contents of the SOAP request body
	* authorization (optional) - a string used to specify basic HTTP authorization in the request header
	
### `sudsClient.invoke(soapAction, body, callback(xmlDoc))`

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

$(function() {
  var suds = new SudsClient({ 
    endpoint: "http://webservice.webserviceshare.com/currencyconverter/rates.asmx",
    targetNamespace: "http://websevriceshare.com/" 
  });
  
  //Initialize Supported Currencies
  suds.invoke("GetSupportedCurrencies", {}, function(xmlDoc) {
    $("#from, #to").empty();
    $(xmlDoc).find("CurrencyListRow").each(function() {
      var opt = '<option value="' + $(this).find("CurrencyShortName").text() + '">' + 
        $(this).find("CurrencyName").text() + 
      '</option>';
      $("#from, #to").append(opt);
    });
  });
  
  //Perform Conversion
  $("#go").click(function() {
    //Web service args - consult http://webservice.webserviceshare.com/currencyconverter/rates.asmx?WSDL for options
    var args = {
      Key: '2832ec28-5d37-4d21-a6e8-94179da1daf1',
      CurrencyFrom: $("#from").val(),
      CurrencyTo: $("#to").val(),
      Amount: $("#amount").val()
    };
    
    suds.invoke("GetConvertedAmount", args, function(xmlDoc) {
      var html = $(xmlDoc).find("CurrencyFrom > Amount").text() + ' ' +
        $(xmlDoc).find("CurrencyFrom CurrencyShortName").text() + '<br/> = <br/>' +
        $(xmlDoc).find("CurrencyToRow Amount").text() + ' ' +
        $(xmlDoc).find("CurrencyToRow CurrencyShortName").text();
      
      $("#results").html(html);
    });    
  });
});
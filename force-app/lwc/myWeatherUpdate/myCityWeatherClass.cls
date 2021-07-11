public  class myCityWeatherClass {
    @AuraEnabled
    public static String myCityWeatherClass(String mycity) {
    String accountCity=mycity;
    String apikey=System.Label.apikeyopenweathermap;
    String requestEndPoint;
    String city;
    String temprature;
    String humidity;
    String pressure;


requestEndPoint='http://api.openweathermap.org/data/2.5/weather';
requestEndPoint+='?q='+accountCity;
requestEndPoint+='&units=metric';
requestEndPoint+= '&APPID='+apikey;

Http http=new Http();
HttpRequest request=new HttpRequest( );
request.setEndPoint(requestEndPoint);
request.setMethod('GET');
HttpResponse response = http.send(request);

if(response.getStatusCode()==200){
Map<String, Object> results=(Map<String, Object>) JSON.deserializeUntyped(response.getBody());
city=String.valueOf(results.get('name') );
Map<String, Object> mainresults=(Map<String, Object>) (results.get('main'));
temprature=String.valueOf(mainresults.get('temp') );
humidity=String.valueOf(mainresults.get('humidity') );
pressure=String.valueOf(mainresults.get('pressure') );
system.debug('Weather service call completed Successfully'+ temprature);
}
else{
    system.debug('Error while calling Weather service '+requestEndPoint);
    }
    return temprature;
}

}
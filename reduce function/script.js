
var request=new XMLHttpRequest();
    request.open('GET','https://restcountries.eu/rest/v2/all','true');
    request.send();
    request.onload=function (){
    var countryData=JSON.parse(this.response);
    const population=countryData.reduce((acc,element)=>{
        return acc+element.population;
    })
    console.log(population);
}
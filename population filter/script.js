
var request=new XMLHttpRequest();
   request.open('GET','https://restcountries.com/v3.1/all','true');
   request.send();
   request.onload=function (){
   var countryData=JSON.parse(this.response);
   const populate=countryData.filter((element)=>{
        return element.population<200000;
   })
   console.log(populate);
}
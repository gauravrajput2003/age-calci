function calculateAge(){
    var dob =document.getElementById('dob').value;
    var today =new Date();
    var birthDate=new Date(dob);
    var ageInMilliseconds=today-birthDate;
    var ageDate =new Date(ageInMilliseconds);

    var years =ageDate.getUTCFullYear()-1970;
    var months =ageDate.getUTCMonth();
    var days =ageDate.getUTCDate()-1;

    document.getElementById('result').innerHTML=years + "years," + months +"months," + days +"days old";
}
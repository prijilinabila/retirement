var dob = document.getElementById("date");
var currentdate = new Date();
var currentyear = currentdate.getFullYear();
var currentmonth = currentdate.getMonth()+1;
var currentday = currentdate.getDate();
var age = document.getElementById("number");
var button = document.getElementById("btn");
console.log(currentdate);
console.log(currentday);
console.log(currentmonth);
console.log(currentyear);

button.addEventListener("click",retirement);
var months = [
    {
        "month":"January",
        "days":31
    },
    {
        "month":"Febuary",
        "days":29
    },
    {
        "month":"March",
        "days":31
    },
    {
        "month":"April",
        "days":30
     },
     {
        "month":"May",
         "days":31
     },
     {
        "month":"June",
         "days":30
     },
     {
        "month":"July",
        "days":31
     },
     {
        "month":"August",
         "days":31
     },
     {
        "month":"Septemper",
         "days":30
     },
     {
        "month":"October",
        "days":31
     },
     {
        "month":"November",
         "days":30
     },
     {
        "month":"December",
         "days":31
     },
];
 //console.log(months);

function retirement() {
    var d = new Date(dob.value);
var year = d.getFullYear();
var ageyear = parseInt(year) + parseInt(age.value) ;//alert(ageyear);
//alert(months.length);
var tblmonths='';
var tbldays='';
var tblyears='';

for(i=0;i<months.length;i++){
    tblmonths += '<td colspan="'+months[i].days+'">'+months[i].month+'</td>';
    for(k=1;k<=months[i].days;k++){
       tbldays += '<td>'+k+'</td>';
    }
}

//document.getElementById("table").innerHTML = monthrow+daysrow ;
for(j=year;j<=ageyear;j++){
    //console.log(j);
    if(j>currentyear){
        tblyears += '<tr class="green"><td>'+j+'</td>'+tbldays+'</tr>';
    }
    else{
        tblyears += '<tr class="red"><td>'+j+'</td>'+tbldays+'</tr>';
    }
    
    
}
var monthrow = '<tr><td></td>'+tblmonths+'</tr>';
document.getElementById("table").innerHTML =  monthrow + tblyears ;
}

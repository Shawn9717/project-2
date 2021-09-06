const CheckAkanName =(e)=>{
    e.preventDefault();
const femaleNames=['Akosua' , 'Adwoa' , 'Abenna' , 'Akua' , 'Yaa' , 'Afau' ,'Ama']
const maleNames=['Kwasi' , 'Kwadwo' ,'Kwabea' , 'Kwaku' , 'Yaw' ,'Kofi' , 'Kwame']
const form=document.querySelector("#shawn");
const formdata= new FormData(form);
const gender =formdata.get("gender")
const Dob =formdata.get("Dob");
const d = new Date(Dob).getDate();

if(gender ==="female"){
    alart ("your Akan name is"+femaleNames[d]);
} else{
    alert ("your Akan name is"+ maleNames[d]);
}
if(Dob===""){
    alert("Enter correctly!!");
}
}
document.querySelector("#shawn").addEventListener("submit",CheckAkanName);
function message(){
    alert("welcome user");
}

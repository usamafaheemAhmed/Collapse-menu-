

function fun(){

    let maleBtn = document.getElementById("maleBtn");
    let femaleBtn = document.getElementById("femaleBtn");
    let check="";
    let radioInputs = document.getElementsByName('gender');
    for (let i = 0; i < radioInputs.length; i++) {
        if (radioInputs[i].checked) {
        //   console.log(`Selected color is ${radioInputs[i].value}`);
        check = radioInputs[i].value;
        }
      }

      if (check=="male"){
        maleBtn.classList.remove("btn-secondary");
        maleBtn.classList.add("btn-success");
  
        femaleBtn.classList.add("btn-secondary");
        femaleBtn.classList.remove("btn-success");
      }
      else{
        femaleBtn.classList.remove("btn-secondary");
        femaleBtn.classList.add("btn-success");

        maleBtn.classList.add("btn-secondary");
        maleBtn.classList.remove("btn-success");
      } 
}



let clicked =1;
function openNav() {
let hide = document.getElementsByName("hide");
let icon = document.getElementsByName("icon");
let iconLength = document.getElementsByName("icon").length;
// console.log(iconLength);
let length = document.getElementsByName("hide").length;

// console.log(hide);
if(clicked===1){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.paddingLeft = "250px";
    document.body.style.backgroundColor = "#4c6677";
    clicked=0;
    document.getElementById("nav-icon1").classList.add('open');
    document.getElementById("profileImage").style.width="130px";
    document.getElementById("profileImage").style.height="130px";
    document.getElementById("image_span").style.top="30px";
    document.getElementById("image_span").style.left="50px";
    document.getElementById("divider").style.marginTop="150px";
    for(let i=0; i<length;i++){
      hide[i].style.display="inline-flex";
    };
    for(let i=0; i<iconLength;i++){
      // alert("jon");
      icon[i].style.marginLeft="25px";
      // icon[i].style.display="inline-flex";
      icon[i].style.opacity="100%";
      
    };

    setTimeout( function() { document.getElementById("name").classList.remove('d-none'); },430);
   
  }
  else{
    document.getElementById("mySidenav").style.width = "65px";
    document.getElementById("main").style.paddingLeft= "65px";
    document.body.style.backgroundColor = "lightskyblue";
    clicked=1;
    document.getElementById("nav-icon1").classList.remove('open');
    document.getElementById("name").classList.add('d-none');
    document.getElementById("profileImage").style.width="40px";
    document.getElementById("profileImage").style.height="40px";
    document.getElementById("image_span").style.top="0px";
    document.getElementById("image_span").style.left="13px";
    document.getElementById("divider").style.marginTop="0px";
    for(let i=0; i<length;i++){
      hide[i].style.display="none";
    };
    for(let i=0; i<iconLength;i++){
      icon[i].style.marginLeft="0px";
      // icon[i].style.display="none";
      icon[i].style.opacity="0";

    };

}
}


function active(id){
  
  document.getElementById("fifties").classList.remove("active");
  document.getElementById("young").classList.remove("active");
  document.getElementById("teen").classList.remove("active");
  
  
  document.getElementById(id).classList.add("active");



}


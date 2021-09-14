

$( document ).ready(function (){


    populate_country();
            
    $("#user_error_msg").hide;
    $("#user_error_address").hide;
    $("#user_error_zip").hide;
    $("#user_error_country").hide;
    $("#user_error_gender").hide;
    $("#user_error_colour").hide;
    $("#user_error_number").hide;
    $("#user_error_email").hide;
    $("#user_error_pwd").hide;
    $("#user_error_pwd1").hide;

    var error_msg=false;
    var error_address=false;
    var error_zip=false;
    var error_country=false;
    var error_gender=false;
    var error_colour=false;
    var error_number=false;
    var error_email=false;
    var error_pwd=false;
    var error_pwd1=false;


    $("#Name").focusout(function(){
        validate_name();
    });



    $("#Address").focusout(function(){

        validate_address();
    
    });

    $("#ZipCode").focusout(function(){

        validate_zip();
                
                
    });

    $("#country").focusout(function(){

        validate_country();
                
                
    });

    $("#Gender").focusout(function(){

        validate_gender();

                
    });

    $("#Preferences").focusout(function(){

        validate_colour();
                
                
    });

    $("#Phone").focusout(function(){

        validate_number();
                
                
    });

    $("#Email").focusout(function(){

        validate_email();
                
                
    });

    $("#password").focusout(function(){

        validate_pw();
                
                
    });

    $("#verify_password").focusout(function(){

        validate_retype_pw();              
                
    });

    $("#Clear").on({click:clear_info });

  //  $("#Submit").on({ click:final_validation });
   
 });

 function populate_country(){


        var country_select= $("#country");
        var countries=["UAE",
        "India",
        "Australia",
        "Malaysia",
        "China",
        "Singapore",
        "Argentina"];
    countries.sort();
    $.each(countries, function(countries, value) {
        var $option = $("<option/>", {
            value: countries,
            text: value
        });
        country_select.append($option);

   });


 }


function validate_name(){

    var name= $('#Name').val().trim();
     if (name == ""){

        $("#user_error_msg").html("Please enter your name!");
        $("#user_error_msg").show();
        error_msg=true;
    }

    else{
        error_msg=false;
        $("#user_error_msg").hide();

    }


}

function validate_address(){
     //Check that Address variable is not empty

    var address= $('#Address').val().trim();
    if (address== ""){

            $("#user_error_address").html("Please enter your address!")
            $("#user_error_address").show()
            error_address=true;
           
        }

    else{
        $("#user_error_address").hide();

    }


}

function validate_zip(){
  //Check that Zipcode variable is not empty

    var zip=$("#ZipCode").val().trim();
   if (zip== ""){

            $("#user_error_zip").html("Please enter your Zip Code!")
            $("#user_error_zip").show();
            error_zip=true;
        }

        else{
            $("#user_error_zip").hide();

        }

}

function validate_country(){
var countryChoice= $("#country option:selected").text(); //obtain selected choice from country or use $('#country').find('option:selected').text() 
//validate country dropdown list
    if (countryChoice=="Select a country"){
        $("#user_error_country").html("Please Select your country!");
        $("#user_error_country").show();
        error_country=true;
    }

    else{

        $("#user_error_country").hide();


    }

}

function validate_gender(){

 //check Gender radio button
 var radio = $("input[type=radio][name=Gender]:checked");
 
   
  if(radio.length==0)
    {
        $("#user_error_gender").html("Please Select your gender");
        $("#user_error_gender").show();
        error_gender=true;
    }  
    
    else{
        $("#user_error_gender").hide();

    }
  

}


function validate_colour(){

    //Check colour preferences button
    if(!$('#Red').prop("checked")&&!$('#Green').prop("checked")&&!$('#Blue').prop("checked")){
        
        $("#user_error_colour").html("Please Select at least 1 colour.");
        $("#user_error_colour").show();
        error_colour=true;

    }

    else{
        $("#user_error_colour").hide();

    }


}

function validate_number(){
  //validate phone input is not empty and is equal to 8 digits.
  if ($("#Phone")==="" || $("#Phone").val().length!=8){

    $("#user_error_number").html("Phone number must be equal to 8 digits.");
    $("#user_error_number").show();
    error_number=true;
    }

    else{

        $("#user_error_number").hide();
    }

}

function validate_email(){
//validate email input
   
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    
        if(pattern.test($("#Email").val())) 
        {
            $("#user_error_email").hide();
        } 
        
        else {
            $("#user_error_email").html("Invalid email address");
            $("#user_error_email").show();
            error_email = true;
        }
}

function validate_pw(){
 //validate password input length for 1st password
    var myInput = $("#password").val().length;
    if (myInput < 6 || myInput > 8){
        $("#user_error_pwd").html("Password must be between 6 to 8 characters");
        $("#user_error_pwd").show();
        error_pwd=true;
    } 

    else if(myInput == ""){
        $("#user_error_pwd").html("Password cannot be left blank");
        $("#user_error_pwd").show();
        error_pwd=true;

    }


    else {
        $("#user_error_pwd").hide();

    }

    return myInput;

 }

function validate_retype_pw() {

//Validate 1st password is equals to 2nd password
    var password=$("#password").val();
    var retype_password=$("#verify_password").val();
        if (password != retype_password){
            $("#user_error_pwd1").html("Both passwords do not match!");
            $("#user_error_pwd1").show();
            error_pwd1=true;
    } 

    else if (password.length && retype_password.length <6 ||password.length && retype_password.length>8){
        $("#user_error_pwd1").html("Both passwords must be between 6 to 8 characters.");
        $("#user_error_pwd1").show();
        error_pwd1=true;


    }

    else if (retype_password ==""){
        $("#user_error_pwd1").html("Please key in your password again");
        $("#user_error_pwd1").show();
        error_pwd1=true;
    } 

    else {

        $("#user_error_pwd1").hide();

    }
return retype_password;

}




//clear function for clear button
 function clear_info(){
    var mytextcontent=$("#Name").val();
    $("#Name").val("");
    alert("Successfully Reset " + mytextcontent);


    var mytextcontent1=$("#Address").val();
    $("#Address").val("");
    alert("Successfully Reset " + mytextcontent1);

    var mytextcontent2=$("#ZipCode").val();
    $("#ZipCode").val("");
    alert("Successfully Reset " + mytextcontent2);

    var mytextcontent3=$("#country option:selected").text();
    $("#country").val("");
    alert("Successfully Reset " + mytextcontent3);

    var mytextcontent4=$("input[name='Gender']:checked").val();
    $("#Male").prop('checked',false);
    $("#Female").prop('checked',false);

    

    $("#Red").prop('checked',false);
    $("#Green").prop('checked',false);
    $("#Blue").prop('checked',false);



    var mytextcontent6=$("#Phone").val();
    $("#Phone").val("");
    alert("Successfully Reset " + mytextcontent6);

    var mytextcontent7=$("#Email").val();
    $("#Email").val("");
    alert("Successfully Reset " + mytextcontent7);

    var mytextcontent8=$("#password").val();
    $("#password").val("");
    alert("Successfully Reset " + mytextcontent8);

    var mytextcontent9=$("#verify_password").val();
    $("#verify_password").val("");
    alert("Successfully Reset " + mytextcontent9);

}

function final_validation(event){


        error_msg=false;
        error_address=false;
        error_zip=false;
        error_country=false;
        error_gender=false;
        error_colour=false;
        error_number=false;
        error_email=false;
        error_pwd=false;
        error_pwd1=false;
    
        validate_name();
        validate_address();
        validate_zip()
        validate_country();
        validate_gender();
        validate_colour();
        validate_number();
        validate_email();
        validate_pw();
        validate_retype_pw();
    
    
        if(error_msg == false && error_address==false && error_zip==false && error_country==false && error_gender==false && error_colour==false && error_gender==false && error_colour==false && error_number==false && error_number==false && error_email==false && error_pwd1==false && error_pwd==false){
           

            alert("Data Successfully Submitted!");  
            return true;

        }
    
        else{
            event.preventDefault();
            alert("Please Check your details again!");
            return false;
    
        }
    
    }

   

    function new_page(){
        var data_string=JSON.stringify(dataList); //create JSON string out of dataList
        sessionStorage.setItem('submitData',data_string);
        window.location.href="result.html";

   }




        let dataList=[];
        const list = (ev) =>{
            ev.preventDefault(); 
        
            //check which radio button is selected
        var radioValue = $("input[name='Gender']:checked").val();
        if(radioValue){
            alert(radioValue);
        }
        
        //check which colour is selected
        var prefer=[];
        $.each($("input[name='Colour']:checked"), function(){
            prefer.push($(this).val());
            alert(prefer.join(","));
        });
        
        
            let dataLists={
                Name: $("#Name").val(),
                Address:$("#Address").val(),
                ZipCode:$("#ZipCode").val(),
                Country:$("#country option:selected").text(),
                Gender:radioValue,
                Preferences:prefer,
                PhoneNumber: $("#Phone").val(),
                Email: $("#Email").val(),
                Password: $("#verify_password").val()
        
            }
            final_validation();
            dataList.push(dataLists);
        
            //for display purposes
            console.log( {dataList} );

            let pre=document.querySelector("#msg pre");
                pre.textContent='\n' +JSON.stringify(dataList,'\t',2);
          
    }

    document.addEventListener('DOMContentLoaded',()=>{
        $("#Submit").on('click',list);
       $("#Submit").on('click',new_page);
      // $("#Submit").on('click',create_table);


    });


   







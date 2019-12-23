
$("#hide").click(function(){
    $("#leftcol").toggle();
  });
    


    function validateName(){

      var name = $("#Inputname").val();

      if ( name.match('^[a-zA-Z]{3,16}$') ) {
        document.getElementById("namealert").style.display = "none";
        return true;
      }
        else
        {
          document.getElementById("namealert").style.display = "block";

          return false;
        }

    
    }
    



    function validateEmail() {

      var email = $("#InputEmail").val();

      if ( email.match('^[a-zA-Z]{3,16}$' )) {
        document.getElementById("emailalert").style.display = "none";
        return true;
      }
        else
        {
          document.getElementById("emailalert").style.display = "block";

          return false;
        }

    } 

    function validatePhone() {

      var phone = $("#phone").val();

      if ( phone.match('^(01)[0-9]{8}') ) {
        document.getElementById("phonealert").style.display = "none";
        return true;
      }
        else
        {
          document.getElementById("phonealert").style.display = "block";

          return false;
        }

    }

    function validateAge() {

      var age = $("#age").val();

      if ( age > 0 && age < 100) {
        document.getElementById("agealert").style.display = "none";
        return true;
      }
        else
        {
          document.getElementById("agealert").style.display = "block";

          return false;
        }

    }

    function addUser(e){

     if(validateName() && validateAge() && validatePhone() && validateEmail()){

        var name = $("#Inputname").val();
        var email = $("#InputEmail").val();
        var phone = $("#phone").val();
        var age = $("#age").val();
        var new_row = "<tr><td>" + name + "</td><td>" + phone + "</td><td>" + email + "</td><td>" + age + "</th></tr>";
        $("table tbody").append(new_row);
        e.preventDefault();

     }
       
    
      }
    
    
 





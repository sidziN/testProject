function start() {
	

         function myFunction(f){
         	var regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z09]{2,4})$/;
         	if(f.ime.value.match(regEx) && f.ime.value !="" && f.ime2.value !=""){
         		f.ime.style.borderColor = "green";
         		f.ime2.style.borderColor = "green";
         	}

         	else{
             alert("Morate da popunite oba polja,s tim sto prvo polje mora biti u formatu e-mail adrese!");
             f.ime.style.borderColor = "red";
         	 f.ime2.style.borderColor = "red";
             return false;
         	}
         	return start();
         }

         // function myFunction(f){
         // 	if(f.value != ""){
         // 		f.style.borderColor = "green";
         		
         // 	}else{
         // 		f.style.borderColor="red";
         		
         // 	}
         // }
         


        
         function validateFunction(fo){
             var regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z09]{2,4})$/;
         	if(fo.text1.value.match(regEx) && fo.text1.value != ""){
         		fo.text1.style.borderColor="green";


         	}                                         
             else{                          
             	alert("Morate da popunite polje u formatu e-mail adrese!");
             	fo.text1.style.borderColor="red";
             	return false;
             }
             return start();
         }
            

     // function validateFunction(fo){
     //        var regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z09]{2,4})$/; 
     //        if(!fo.text1.value.match(regEx)){
     //        	alert("Incorect email!");
     //        	return false;
     //        }else{                          //Validacija unosa regularnih izraza
     //        	alert("Correct email!");

     //        }
     //     }







         //  var href = document.getElementById("izveštaj");
         //  href.addEventListener("click",izveštajFunction);
        
                                                 //Iskljucivanje automatskog dogadjaja na a elementu.
         // function izveštajFunction(a){
         	
         // 	a.preventDefault();
         // 	alert("Default event is prevented!");
         // }
         return myFunction();
}
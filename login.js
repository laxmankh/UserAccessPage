function lakhan()
{
    const name=document.getElementById("Name").value;
    if(name == "")
    {
         document.getElementById("username").innerText="Please enter the name field!!";
    }
    else if(name.length<5)
    {
        document.getElementById("username").innerText="the name is very Short!!";
        
    }
    else if(name.length>=5||name!="")
    {
        document.getElementById("username").innerText="";
        
    }


    const email=document.getElementById("Email").value;
    if(email == "")
    {
        document.getElementById("useremail").innerText="Please enter the Email field!!";
        
    }
    else if(email.length<7)
    {
        document.getElementById("useremail").innerText="the Email is very Short!!";
    }
    if(email[0].charCodeAt()<=90)
    {
        document.getElementById("useremail").innerText="Email first letter should be in small letter!!";
        
    }
    else if(email.length>7 &&email!="")
    {
        document.getElementById("useremail").innerText="";
    }


    const number= document.getElementById("Pnumber").value;
    console.log(number.length);
    if(number.length==0)
    {
        document.getElementById("usernum").innerText="please enter the number field!!";
       
    }
    else if(number.length<10 || number.length>10)
    {
        document.getElementById("usernum").innerText="Please enter the 10 digit phone number!!!";
     
    }
    else if(number.length!=0&&number.length==10)
    {
        document.getElementById("usernum").innerText="";
     
    }

    
    const pass=document.getElementById("password").value;
    const cpass=document.getElementById("cpassword").value;
    if(pass.length==0)
    {
        document.getElementById("userpass").innerText="please fill the password field!!!";
    }
    else if(cpass.length==0)
    {
        document.getElementById("usercpass").innerText="please fill the password field!!";
        
    }
    else if(pass !=cpass)
    {
        document.getElementById("usercpass").innerText="please fill the correct confirm password!!!";
        
    }
    else if(pass.length!=0&&pass==cpass&&cpass.length!=0)
    {
        document.getElementById("userpass").innerText="";
        document.getElementById("usercpass").innerText="";
        
    }
  

}
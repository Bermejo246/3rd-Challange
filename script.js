function init() {
  
  var passLength = prompt('How long would you like the password?');

    var temp = "";
    var password = "";
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var lower = confirm("Lowercase letters in your password");
    var special = confirm("Special characters in your password?");
    var upper = confirm("Uppercase letters in your password?");    
    
    
    if(special) temp+="123456789!@#$%^&*()_+\|-=,./?";
    if (lower) temp+=alpha;
    if (upper) temp+=alpha.toUpperCase();
    
    if(!lower && !upper && !numbers && !special) return;
    
    console.log(temp);
    
    for (i = 0; i < passLength; i++){
      password+= temp[Math.floor(Math.random()*temp.length)];
    }

    document.querySelector("textarea").innerText = password;
}

document.querySelector('button').addEventListener('click',init)

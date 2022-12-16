function init() {
  var passLength = prompt('How long would you like the password?');
    console.log(passLength);
    
    if(!passLength) return;
    
    if (passLength > 128){
      alert("Error: Length is too long");
        return init();
      }  

      if (passLength < 8){
      alert("Error: Length is too short");
      return init();
    }

    
    var temp = "";
    var password = "";
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var numbers = confirm("Numbers in your password?");
    var lower = confirm("Lowercase letters in your password");
    var special = confirm("Special characters in your password?");
    var upper = confirm("Uppercase letters in your password?");    
    
    
    
    if (numbers) temp+="0123456789";
    if (lower) temp+=alpha;
    if (upper) temp+=alpha.toUpperCase();
    if(special) temp+="!@#$%^&*()_+-=,./?";
    if(!lower && !numbers && !upper && !special) return;
    
    console.log(temp);
    
    for (i = 0; i < passLength; i++){
      password+= temp[Math.floor(Math.random()*temp.length)];
    }

    document.querySelector("textarea").innerText = password;
}

document.querySelector('button').addEventListener('click',init)

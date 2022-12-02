function init() {
  var passLength = prompt('How long of a password?');
    console.log(passLength);
    
    if(!passLength) return;
    
    if (passLength > 128){
      alert("Error: The length is too long");
        return init();
      }  

      if (passLength < 8){
      alert("Error: The length is too short");
      return init();
    }

    
    var temp = "";
    var password = "";
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var numbers = confirm("Do you want numbers in your password?");
    var upper = confirm("Do you want uppercase letters in your password?");
    var lower = confirm("Do you want lowercase letters in your password");
    var special = confirm("Do you want special characters in your password?");
    
    
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

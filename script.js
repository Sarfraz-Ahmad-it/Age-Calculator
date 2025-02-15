let inputBtn = document.querySelector('#dob');
let calculateBtn = document.querySelector('#calBtn');
let ageResult = document.querySelector('#result');

calculateBtn.addEventListener('click', function(){
    if(inputBtn.value == ""){
        ageResult.innerHTML = "enter your date of birth";
    }
    else{
        console.log(inputBtn.value);
    }
})
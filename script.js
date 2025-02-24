let inputBtn = document.querySelector('#dob');
let calculateBtn = document.querySelector('#calBtn');
let ageYear = document.querySelector('#year');
let ageMonths = document.querySelector('#months');
let ageDays = document.querySelector('#days');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
calculateBtn.addEventListener('click', function(){
    if(inputBtn.value == ""){
        alert('enter your date of birth');
        
    }
    else{
        let dob = new Date(inputBtn.value);  
        let now = new Date();
        let years = now.getFullYear() - dob.getFullYear();
        let months = now.getMonth() - dob.getMonth() +1 ;
        let days = now.getDate() - dob.getDate();

        ageYear.innerHTML = `Year = ${years}`;
        ageMonths.innerHTML = `Months = ${months}`;
        ageDays.innerHTML = `Days = ${days}`;
    }
})


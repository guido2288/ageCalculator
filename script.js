const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const submitBtn = document.getElementById("submitBtn");
const resDays = document.getElementById("resDays");
const resMonths = document.getElementById("resMonths");
const resYears = document.getElementById("resYears");
const dayContainer = document.getElementById("day-container");
const monthContainer = document.getElementById("month-container");
const yearContainer = document.getElementById("year-container");
const dayError = document.getElementById("error-day");
const monthError = document.getElementById("error-month");
const yearError = document.getElementById("error-year");

submitBtn.addEventListener('click', calculateAge);

function calculateAge() {

    let myDay = Number(day.value);
    let myMonth = Number(month.value);
    let myYear = Number(year.value);

    if(dayError.innerHTML.length > 0 || monthError.innerHTML.length >0 || yearError.innerHTML.length > 0){
        return alert("Please check the errors")
    }

    let today = new Date();

    let d2 = today.getDate(); // Get Day
    let m2 = today.getMonth() + 1; // Get Month
    let y2 = today.getFullYear(); // Get Year

    let d3,m3,y3; //diference

    y3 = y2 - myYear;

    if(m2 >= myMonth){
        m3 = m2 -myMonth;
    } else {
        y3--;
        m3 = 12 +m2 -myMonth;
    };

    if(d2 >= myDay){
        d3 = d2 -myDay
    }else{
        m3 --;
        d3 = getDaysInMonth(myYear, myMonth) + d2 - myDay;
    };

    if(m3 < 0){
        m3 =11;
        y3--;
    };

    resYears.innerHTML = y3;
    resMonths.innerHTML = m3;
    resDays.innerHTML = d3;
    
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
};

function validateDay() {
    let dayInput = day.value;

    if(dayInput.length > 3 || dayInput > 31 || dayInput == 0){
        dayError.innerHTML = "Must be a valid date";
        return false;
    }
    
    dayError.innerHTML = "";    
};

function validateMonth() {
    let monthInput = month.value;

    if(monthInput.length > 3 || monthInput > 12){
        monthError.innerHTML = "Must be a valid date";
        return false;
    }

    monthError.innerHTML = "";
};

function validateYear() {
    let yearInput = year.value;
    let actualYear = new Date();


    if(yearInput.length > 4 || yearInput >=actualYear.getFullYear() ){
        yearError.innerHTML = "Must be a valid year";
        return false;
    };

    yearError.innerHTML = "";

}
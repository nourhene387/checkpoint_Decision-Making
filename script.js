
/***********************Leap Year Checker**********************/
function leap_year(year) {
    let output;
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        // output = `${year} is a leap year.`;
        return `${year} is a leap year.`;
    } else {
        // output = `${year} isn't a leap year.`;
        return `${year} isn't a leap year.`;
    }
    // return output;
}

console.log(leap_year(2091));
/**********************Ticket Pricing**************************** */
/*function Ticket_Pricing(age) {
    if (age <= 12) {
        return  the ticket  price is 10$
    } else if (age >= 13 && age <= 17) {
        return  the ticket  price is 15$
    } else {
        return  the ticket  price is 20$
    }

}
console.log(Ticket_Pricing(13));  */
/*********************** */
function Ticket_Pricing(age) {
    let price;

    switch (true) {
        case (age <= 12):
            price = "The ticket price is 10$.";
            break;
        case (age >= 13 && age <= 17):
            price = "The ticket price is 15$.";
            break;
        default:
            price = "The ticket price is 20$.";
    }

    return price;
}

console.log(Ticket_Pricing(12));
/*************************Weather Clothing Adviser********************** */
function clothing_advise() {
    let temperature = prompt("Please enter the current temperature", "20C");
    temperature = parseInt(temperature);
    let raining = prompt("it is raining?(")
    let advise = "";
    switch (true) {
        case (temperature < 0):
            advise = "It's very cold! Wear winter clothes, including a warm coat, gloves, and a scarf.";
            if (raining === "yes") {
                advise += " Don't forget a raincoat.";
            }
            break;
        case (temperature >= 0 && temperature < 15):
            advise = "It's cool. Put on a sweater or jacket.";
            if (raining === "yes") {
                advise += " Don't forget a raincoat.";
            }
            break;
        case (temperature >= 15 && temperature < 25):
            advise = "The weather is nice. A shirt or t-shirt with a light sweater will do.";
            if (raining === "yes") {
                advise += " You might want to bring an umbrella.";
            }
            break;
        case (temperature >= 25):
            advise = "It's hot! Wear light clothing like a t-shirt and shorts.";
            if (raining === "yes") {
                advise += " A light rain jacket could be useful.";
            }
            break;
        default:
            advise = "Please enter a valid temperature.";
    }
    document.getElementById("advice").innerHTML = advise;

    console.log(advise);

}
/**************************Fibonacci Sequence:*************************** */
/*function Fibonacci(number) {
 let output=[0,1];
    if (number===0) {
    return ;  
    }else if (number===1) {
       return
        output=output[0]; 
    }else{
       output=Fibonacci(number-1)+Fibonacci(number-2)
       
    }
    return output 
    
}
console.log(Fibonacci(10));*/
function fibonacci(n) {
    // Base cases
    if (n <= 1) return n;
    
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Test the function
  console.log(fibonacci(0));  // 0
  console.log(fibonacci(1));  // 1
  console.log(fibonacci(2));  // 1
  console.log(fibonacci(5));  // 5
  console.log(fibonacci(10)); // 55
/************************Palindrome Checker ************************** */
function Palindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    function checkPalindrome(s) {
        if (s.length <= 1) return true;
        if (s[0] !== s[s.length - 1]) return false;
        return checkPalindrome(s.slice(1, s.length - 1));
    }

    return checkPalindrome(cleanedStr);
}


var str = "nourhene";
console.log(Palindrome(str));
/*************************************************** */
function power(base, exponent) {
     let output; 
    if (exponent === 0) {
        output= 1;
    }

    else if (exponent < 0) {
        output= 1 / (Math.pow (base, -exponent));
    }
   
    else {
      output = Math.pow(base, exponent );
    }
    return output;

}
console.log(power(3,2))
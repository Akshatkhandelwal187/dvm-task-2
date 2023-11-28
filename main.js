// Validation for name

const name = document.getElementById('enterName');

bitsId.addEventListener('input', function (event) {
    var validName = false
    if(name.length>=5 && name.length<=50)
    validName = true;

    if(validName === true)
    document.getElementById("correct").style.visibility = "visible";
    else
    document.getElementById("incorrect").style.visibility = "visible";
}


// Validation for bits-id

const bitsId = document.getElementById('bits-id');
var validBitsId = false
bitsId.addEventListener('input', function (event) {

    if(typeof bitsId.substr(0,3)==="number")
    {
        if(typeof bitsId.substr(4,7)==="string")
        {
            if(typeof bitsId.substr(8,11)==="number")
            {
                if(bitsId.substr(12)==="P")
                {
                    validBitsId true;
                    document.getElementById("correct").style.visibility = "visible";
                    
                }
            }
        }
    }
    else
    {
        event.preventDefault();
        document.getElementById("incorrect").style.visibility = "visible";

    }
    
}





// Validation for phone number

/*
A typical mobile number in India is "+91 xxxx-nnnnnn". 
The first four digits initially indicated an operator's code, 
while the remaining six digits are unique to the subscriber.

pattern="+91-[0-9]{10}"
This has been set in HTML input
*/


// Validation for email
const email = document.getElementById('enterEmail');
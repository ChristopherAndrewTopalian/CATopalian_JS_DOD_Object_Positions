// aboveOrBelow.js

function aboveOrBelow(obj1, obj2)
{
    if (obj1.y < obj2.y)
    {
        // Capitalize the first letter if needed, or just use the raw data name
        ge(obj1.name + 'Info2').textContent = obj1.name + ' is Above';
        ge(obj2.name + 'Info2').textContent = obj2.name + ' is Below';
    }
    else
    {
        ge(obj1.name + 'Info2').textContent = obj1.name + ' is Below';
        ge(obj2.name + 'Info2').textContent = obj2.name + ' is Above';
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherAndrewTopalian
// https://github.com/ChristopherTopalian
// https://sites.google.com/view/CollegeOfScripting


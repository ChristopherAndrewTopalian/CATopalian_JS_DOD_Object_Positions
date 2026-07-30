// aheadOrBehind.js

function aheadOrBehind(obj1, obj2)
{
    if (obj1.x < obj2.x)
    {
        // Capitalize the first letter if needed, or just use the raw data name
        ge(obj1.name + 'Info').textContent = obj1.name + ' is Behind';
        ge(obj2.name + 'Info').textContent = obj2.name + ' is Ahead';
    }
    else
    {
        ge(obj1.name + 'Info').textContent = obj1.name + ' is Ahead';
        ge(obj2.name + 'Info').textContent = obj2.name + ' is Behind';
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherAndrewTopalian
// https://github.com/ChristopherTopalian
// https://sites.google.com/view/CollegeOfScripting


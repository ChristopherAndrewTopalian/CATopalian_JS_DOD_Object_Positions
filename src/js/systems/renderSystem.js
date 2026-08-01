// renderSystem.js

function renderSystem() 
{
    for (let key in world)
    {
        let currentData = world[key];

        let entity = ge(currentData.id);

        // physical div matches pure data
        entity.style.left = currentData.x + 'px';
        entity.style.top = currentData.y + 'px';
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting
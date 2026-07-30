// getPlayerPositions.js

function getPlayerPositions()
{
    for (let key in world)
    {
        world[key].x = ge(world[key].name).offsetLeft;
        world[key].y = ge(world[key].name).offsetTop;
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherAndrewTopalian
// https://github.com/ChristopherTopalian
// https://sites.google.com/view/CollegeOfScripting


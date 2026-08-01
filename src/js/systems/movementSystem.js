// movementSystem.js

function movementSystem() 
{
    //for (let i = 0; i < world.length; i++) 
    for (let key in world)
    {
        let currentData = world[key];

        // Apply the velocity to the physical coordinates
        currentData.x += currentData.vx;
        currentData.y += currentData.vy;
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

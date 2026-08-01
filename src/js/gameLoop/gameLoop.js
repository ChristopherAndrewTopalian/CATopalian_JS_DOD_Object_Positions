// gameLoop.js

function gameLoop()
{
    aheadOrBehind(world.jane, world.joan);

    // keep entities in world
    boundarySystem();

    requestAnimationFrame(gameLoop);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherAndrewTopalian
// https://github.com/ChristopherTopalian
// https://sites.google.com/view/CollegeOfScripting


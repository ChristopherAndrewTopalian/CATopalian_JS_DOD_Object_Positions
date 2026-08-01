// gameLoop.js

function gameLoop()
{
    aheadOrBehind(world.jane, world.joan);
    aboveOrBelow(world.jane, world.joan);

    // Calculate new positions based on velocity
    movementSystem();

    // Keep entities inside the screen boundaries
    boundarySystem();

    // Make them bounce off each other
    collisionSystem();

    // Update the DOM to match the pure data
    renderSystem();

    requestAnimationFrame(gameLoop);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherAndrewTopalian
// https://github.com/ChristopherTopalian
// https://sites.google.com/view/CollegeOfScripting


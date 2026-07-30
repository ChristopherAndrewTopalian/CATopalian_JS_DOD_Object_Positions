// gameLoop.js

function gameLoop()
{
    if (world.jane.x < world.joan.x)
    {
        ge('janeInfo').textContent = 'Jane is Behind';

        ge('joanInfo').textContent = 'Joan is Ahead';
    }
    else
    {
        ge('janeInfo').textContent = 'Jane is Ahead';

        ge('joanInfo').textContent = 'Joan is Behind';
    }
    requestAnimationFrame(gameLoop);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherAndrewTopalian
// https://github.com/ChristopherTopalian
// https://sites.google.com/view/CollegeOfScripting


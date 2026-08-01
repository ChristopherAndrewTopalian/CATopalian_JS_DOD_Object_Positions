// worldVariables.js

let world = {};

let jane = {
    name: "jane",
    id: 'jane',
    x: 100,
    y: 100,
    vx: 2, // Moves right at 2 pixels per frame
    vy: 2, // Moves down at 2 pixels per frame
    width: 50,
    height: 50,
    color: 'pink'
};

let joan = {
    name: "joan",
    id: 'joan',
    x: 300,
    y: 100,
    vx: -3, // Moves left at 3 pixels per frame
    vy: 1,  // Moves down at 1 pixel per frame
    width: 50,
    height: 50,
    color: 'aqua'
};

world = {
    joan,
    jane
};

let engineState = {
    isDragging: false
};

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherAndrewTopalian
// https://github.com/ChristopherTopalian
// https://sites.google.com/view/CollegeOfScripting


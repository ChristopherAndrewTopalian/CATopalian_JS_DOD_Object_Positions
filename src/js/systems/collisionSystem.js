// collisionSystem.js

function collisionSystem() 
{
    let keys = Object.keys(world);

    // Loop through every entity
    for (let i = 0; i < keys.length; i++) 
    {
        for (let j = i + 1; j < keys.length; j++) 
        {
            let e1 = world[keys[i]];
            let e2 = world[keys[j]];

            // AABB Collision Math: Check if their boxes overlap
            let isColliding = (
                e1.x < e2.x + e2.width &&
                e1.x + e1.width > e2.x &&
                e1.y < e2.y + e2.height &&
                e1.y + e1.height > e2.y
            );

            if (isColliding) 
            {
                // Push apart
                e1.x -= e1.vx; 
                e1.y -= e1.vy;
                e2.x -= e2.vx; 
                e2.y -= e2.vy;

                // Swap velocities
                let tempVx = e1.vx; 
                let tempVy = e1.vy;
                e1.vx = e2.vx; 
                e1.vy = e2.vy;
                e2.vx = tempVx; 
                e2.vy = tempVy;
            }
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherAndrewTopalian
// https://github.com/ChristopherTopalian
// https://sites.google.com/view/CollegeOfScripting


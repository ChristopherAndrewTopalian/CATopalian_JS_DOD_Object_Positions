// initEntities.js

function initEntities()
{
    for (let key in world)
    {
        let entity = ce('div');
        entity.id = world[key].name;
        entity.textContent = world[key].name;
        entity.style.position = 'absolute';
        entity.style.left = world[key].x + 'px';
        entity.style.top = world[key].y + 'px';
        entity.style.width = world[key].width + 'px';
        entity.style.height = world[key].height + 'px';
        entity.style.backgroundColor = world[key].color;
        entity.style.padding = '5px 5px';
        entity.style.textShadow = '1px 1px 1px black';
        ba(entity);
        makeElementDraggable(entity);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherAndrewTopalian
// https://github.com/ChristopherTopalian
// https://sites.google.com/view/CollegeOfScripting


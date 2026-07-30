// makeElementDraggable.js

function createMouseDownHandler(element, worldEntry, dragState)
{
    return function(e)
    {
        // Let clicks inside a textarea/input behave normally instead of starting a drag
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT')
        {
            return;
        }

        e.preventDefault();

        dragState.lastMouseX = e.clientX;
        dragState.lastMouseY = e.clientY;

        function mouseMoveHandler(e)
        {
            if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT')
            {
                return;
            }

            e.preventDefault();

            let deltaX = e.clientX - dragState.lastMouseX;
            let deltaY = e.clientY - dragState.lastMouseY;

            dragState.lastMouseX = e.clientX;
            dragState.lastMouseY = e.clientY;

            // world updates first — it's the source of truth
            worldEntry.x += deltaX;
            worldEntry.y += deltaY;

            // the DOM just reflects whatever world now says
            element.style.left = worldEntry.x + "px";
            element.style.top = worldEntry.y + "px";
        }

        function mouseUpHandler()
        {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        }

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };
}

function makeElementDraggable(element, worldEntry)
{
    let dragState = { lastMouseX: 0, lastMouseY: 0 };

    element.addEventListener('mousedown', createMouseDownHandler(element, worldEntry, dragState));
}

// previous version below
/*
function createMouseDownHandler(element, state)
{
    return function(e)
    {
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT')
        {
            return;
        }

        e.preventDefault();

        state.startX = e.clientX;
        state.startY = e.clientY;

        function mouseMoveHandler(e)
        {
            if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT')
            {
                return;
            }

            e.preventDefault();

            let deltaX = state.startX - e.clientX;
            let deltaY = state.startY - e.clientY;

            state.startX = e.clientX;
            state.startY = e.clientY;

            let newTop = element.offsetTop - deltaY;
            let newLeft = element.offsetLeft - deltaX;

            element.style.top = newTop + "px";
            element.style.left = newLeft + "px";
        }

        function mouseUpHandler()
        {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        }

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };
}

function makeElementDraggable(element)
{
    let state = { startX: 0, startY: 0 };

    element.addEventListener('mousedown', createMouseDownHandler(element, state));
}
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherAndrewTopalian
// https://github.com/ChristopherTopalian
// https://sites.google.com/view/CollegeOfScripting


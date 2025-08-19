let cursor = document.querySelector('.cursor');
let shadowCursor = document.querySelector('.shadowCursor');

let CursorX = 0;
let CursorY = 0;

document.addEventListener('mousemove', (e) => {
    CursorX = e.clientX;
    CursorY = e.clientY;
    cursor.style.left = CursorX + 'px';
    cursor.style.top = CursorY + 'px';

    animateCursor();
});

function animateCursor() {

    let shadowCursorX = shadowCursor.style.left || 0 ;
    let shadowCursorY = shadowCursor.style.top || 0 ;
    
    let distanceX = CursorX - shadowCursorX;
    let distanceY = CursorY - shadowCursorY;

    console.log(distanceX, distanceY);
    
    
}






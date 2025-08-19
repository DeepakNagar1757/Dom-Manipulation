let cursor = document.querySelector('.cursor');
let shadowCursor = document.querySelector('.shadowCursor');

let CursorX = 0;
let CursorY = 0;

// let shadowCursorX = 0;
// let shadowCursorY = 0;


let distanceX = 0;
let distanceY = 0;

let animationID = null;

let timer = null;



document.addEventListener('mousemove', (e) => {
    CursorX = e.clientX;
    CursorY = e.clientY;
    cursor.style.left = CursorX + 'px';
    cursor.style.top = CursorY + 'px';
    
    if(!animationID){
        animateCursor();
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
        cancelAnimationFrame(animationID)
        animationID = null
    }, 1000);
});


function animateCursor() {
    let shadowCursorX = parseFloat(shadowCursor.style.left) || 0;
    let shadowCursorY = parseFloat(shadowCursor.style.top) || 0;    

    distanceX = CursorX - shadowCursorX;
    distanceY = CursorY - shadowCursorY;

    shadowCursor.style.left = shadowCursorX + distanceX * 0.1 + 'px';
    shadowCursor.style.top = shadowCursorY + distanceY * 0.1 + 'px';
   
    animationID = requestAnimationFrame(animateCursor)
    console.log(animationID);
    
}

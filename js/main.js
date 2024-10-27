


/*  
===============================================
===============================================
*/

/* start gallery 1 */

let g1panels = document.querySelectorAll(".gallery-1 .panel");

g1panels.forEach((panel)  => {
    panel.addEventListener("click", () => {
        // for(let i = 0; i < g1panels.length; i++) {
        //     g1panels[i].classList.remove("active");
        // }
        g1panels.forEach((panRe) => {
            panRe.classList.remove("active");
        });
        panel.classList.toggle("active");
    });
});



/* end gallery 1 */

/*  
===============================================
===============================================
*/

/* start gallery 2 */

let g2gallery = document.querySelectorAll(".gallery-2 .collection .gallery_");
let g2refreshInterval;
let g2count = 0;
let g2progress;
let g2video = 0;

g2gallery.forEach(el => {
    
    el.addEventListener("mouseenter", () => {
        g2progress = el.querySelector(".gallery-2 .progress");
        g2video = el.querySelector(".gallery-2 .video");
        g2progress.value = g2count
        g2refreshInterval = setInterval(g2interval, 100);
    });
    
    el.addEventListener("mouseleave", () => {
        g2count = 0;
        g2progress.value = g2count;
        g2video.pause();
        clearInterval(g2refreshInterval);
    });

});

function g2interval() {
    if(g2count == 100)  {
        g2count = 0;
        g2video.pause();
        g2progress.value = g2count;
        clearInterval(g2refreshInterval);
    } else {
        g2count += 1;
        g2video.play();
        g2progress.value = g2count;
    }
}




/* end gallery 2 */

/*  
===============================================
===============================================
*/

/* start gallery 3 */




/* end gallery 3 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start gallery 1 */



/* end gallery 1 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start gallery 1 */



/* end gallery 1 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start gallery 1 */



/* end gallery 1 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start gallery 1 */



/* end gallery 1 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start gallery 1 */



/* end gallery 1 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start gallery 1 */



/* end gallery 1 */

/*  
===============================================
===============================================
*/


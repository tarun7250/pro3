let x = 0;
let y = 0;

const rempx = (s) => {
    return +s.split('p')[0];
}
const steps = 20;
document.addEventListener("DOMContentLoaded", ()=> {
    const box = document.getElementsByClassName("move-box")[0];

    y = rempx(window.getComputedStyle(box).top);
    x = rempx(window.getComputedStyle(box).left);
    box.style.top = y+"vh";
    box.style.left = x+"vh";
    
    box.addEventListener("mouseover",()=>{
        let random = Math.floor(Math.random()*10);

        if(x-steps<0){
            x += steps;
        }
        else if(x+steps>90){
            x -= steps;
        }
        else{
            if(random%2){
                x += steps;
            }
            else{
                x -= steps;
            }
        }


        random = Math.floor(Math.random()*10);
        if(y-steps<0){
            y += steps;
        }
        else if(y+steps>90){
            y -= steps;
        }
        else{
            if(random%2){
                y += steps;
            }
            else{
                y -= steps;
            }
        }
        //console.log(x,y,'mouse',box.style);

        box.style.top = y+"vh";
        box.style.left = x+"vh";

    });
    
});

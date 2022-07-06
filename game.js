let LastRenderTime = 0
const SNAKE_SPEED =2

function main(currentTime) {
     window.requestAnimationFrame(main)
     const secondsSinceLastRender = (currentTime - LastRenderTime) / 1000
     if (secondsSinceLastRender < 1 / SNAKE_SPEED)
   
    
    console.log(Render)
    LastRenderTime = currentTime


    update()
    draw()
}

window.requestAnimationFrame(main)


function update(){

}

function draw() {
    
}
var palet=["grey","green","violet","brown","pink","orange","brown"]
    var balls=[]
    var x_pos=[]
    var y_pos=[]
    var x_vel=[]
    var y_vel=[]
    var gravity=1
function ballCount(n){
    for(let i=0;i<n;i++){
        let color=palet[Math.floor(Math.random()*7)]
        var ball=document.createElement("div")
        ball.style.backgroundColor=color
        ball.style.width="50px" 
        ball.style.height="50px"
        ball.style.borderRadius="50%"
        ball.style.position="absolute"
        ball.style.zIndex="5"
        ypos=Math.floor(Math.random()*510)
        xpos=Math.floor(Math.random()*910)
        ball.style.left=xpos+'px'
        ball.style.top=ypos+'px'
        xvel=Math.random()*20 -10
        yvel=Math.random()*20 -10
        document.getElementById("container").appendChild(ball)
        balls.push(ball)
        x_pos.push(xpos)
        y_pos.push(ypos)
        x_vel.push(xvel)
        y_vel.push(yvel)
    }
    moveBall()
}
function moveBall(){
    for(i=0;i<balls.length;i++){
        x_pos[i]+=x_vel[i]
        y_pos[i]+=y_vel[i]
        if(x_pos[i] > 910 || x_pos[i] <= 0) {
            x_vel[i] =-x_vel[i]*gravity
        }
        if(y_pos[i] > 510 || y_pos[i] <= 0) {
            y_vel[i] =-y_vel[i]*gravity
        }
            balls[i].style.left=x_pos[i]+'px'
        balls[i].style.top=y_pos[i]+'px'
    }
    setTimeout(moveBall,5)
}
ballCount(10)
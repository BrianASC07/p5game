let bullets = [];
let spawnRate = 10000
let xPos = 250;
let yPos = 400;
let health = 3

function setup() {
   createCanvas(500, 500);
   noStroke()
   rectMode(CENTER);
   for (let i = 0; i < 100; i++) {
       let temp = new bullet(random(100,401), random(100,401), 0, 255, 0, 10, false);
       bullets.push(temp);
   }
   frameRate(60)
}
function draw() {
    if (health > 0) {    
        background(0)
        fill(255,0,0)
        ellipse(xPos,yPos,50,50)
        if (keyIsDown('65')) {
            xPos -= 3;
        }
        if (keyIsDown('68')) {
            xPos += 3;
        }
        if (keyIsDown('87')) {
            yPos -= 3;
        }
        if (keyIsDown('83')) {
            yPos += 3;
        }

        let time = int(millis()/1000)
        fill(255,255,255);
        textSize(22);
        text("Score: " +  time, 10, 40);
        textSize(22);
        text("Health: " +  health, 380, 40);
        for (let i = 0; i<100; i++) {
            let fire = Math.floor(Math.random()*spawnRate)
            if (bullets[i].fired == false) {
                if (fire == 0) {
                    bullets[i].fired = true
                }
            }
            if (bullets[i].fired == true) {
                bullets[i].size += 0.1
                fill(bullets[i].r,bullets[i].g,bullets[i].b)
                ellipse(bullets[i].x,bullets[i].y,bullets[i].size,bullets[i].size)
                if (bullets[i].size >= 40) {
                    bullets[i].g = 0
                    bullets[i].b = 255
                    if (dist(xPos,yPos,bullets[i].x,bullets[i].y) < bullets[i].size && bullets[i].fired == true) {
                        health -= 1  
                        bullets[i].size = 1
                        bullets[i].x = -500
                        bullets[i].y = -500
                    }
                }
                if (bullets[i].size >= 60) {
                    bullets[i].size = 1
                    bullets[i].x = -500
                    bullets[i].y = -500
                }
            }
        }
    }
}
class bullet {
   constructor(x, y, r, g, b, size, fired) {
       this.x = x;
       this.y = y;
       this.r = r;
       this.g = g;
       this.b = b;
       this.size = size
       this.fired = fired
   }
}
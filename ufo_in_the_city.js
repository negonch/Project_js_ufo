var Figure = function(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};

//Houses
var House = function(x, y, width, height) {
    Figure.call(this, x, y, width, height);
};

House.prototype = Object.create(Figure.prototype);

House.prototype.draw = function() {
    noStroke();
    fill(28, 28, 28);
    rect(this.x, this.y, this.width, this.height);
};

//Windows
var Windows = function(windowPosition) {
    var windowX = windowPosition.x;
    var windowY = windowPosition.y;
    
    fill(255, 242, 0);
    rect(windowX, windowY, 10, 10);
};

//Stars
var Star = function(x, y, width, height) {
    Figure.call(this, x, y, width, height);
};

Star.prototype = Object.create(Figure.prototype);

Star.prototype.draw = function() {
    noStroke();
    fill(255, 242, 0);
    ellipse(this.x, this.y, this.width, this.height);
};

var StarImg = function(x, y, width, height) {
    Figure.call(this, x, y, width, height);
};

StarImg.prototype = Object.create(Figure.prototype);

StarImg.prototype.draw = function() {
     var img = getImage("cute/Star");
     image(img, this.x, this.y, this.width, this.height);
};

//Shooting stars

var ShootStar1 = function(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};

ShootStar1.prototype = Object.create(Figure.prototype);

ShootStar1.prototype.draw = function() {
     var img = getImage("space/star");
     image(img, this.x, this.y, this.width, this.height);
     this.x += -1;
     this.y += 1;
};

var ShootStar2 = function(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};

ShootStar2.prototype = Object.create(Figure.prototype);

ShootStar2.prototype.draw = function() {
     var img = getImage("space/star");
     image(img, this.x, this.y, this.width, this.height);
     this.x += 1;
     this.y += 1;
};

//Moon
var Moon = function(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};

Moon.prototype = Object.create(Figure.prototype);

Moon.prototype.draw = function() {
    noStroke();
    fill(240, 230, 96);
    ellipse(this.x, this.y, this.width, this.height); 
};

//Moon spots
var Spot = function(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};

Spot.prototype = Object.create(Figure.prototype);
    
Spot.prototype.draw = function() {
    noStroke();
     fill(218, 222, 89);
     ellipse(this.x, this.y, this.width, this.height);
};    

var Ufo = function(x, y, width, height) {
    Figure.call(this, x, y, width, height);
};

Ufo.prototype = Object.create(Figure.prototype);

Ufo.prototype.draw = function() {
    fill(38, 33, 38);
    ellipse(this.x, this.y, 60, 10);
    fill(59, 54, 59);
    ellipse(this.x, this.y, 50, 10);
    fill(38, 33, 38);
    ellipse(this.x, this.y, 40, 10);
    stroke(38, 33, 38);
    line(this.x - 13, this.y - 26, this.x, this.y);
    line(this.x + 13, this.y - 26, this.x, this.y);
    noStroke();
    arc(this.x, this.y, 40, 40, 180, 360);
     
    if (this.x % 10 === 0) {
        fill(255, 0, 0);
        }
    else {
        fill(38, 33, 38);
        }
    ellipse(this.x - 13, this.y - 26, 5, 5);
    ellipse(this.x + 13, this.y - 26, 5, 5);

    if (this.x < 170) {
        this.x += 1;
    }
    else if (this.x >= 170 && this.x <= 172) {
        noStroke();
        fill(237, 240, 156);
        triangle(170, 107, 155, 180, 185, 180);
        image(getImage("avatars/old-spice-man"), 160, 90 + frameCount%90, 20, 20);
        this.x += 0.04;
    }
    else if (this.x > 172) { 
        this.x += 1;
        this.y -= 0.3;
        image(getImage("avatars/old-spice-man"), 160, 160, 20, 20);
        
        if (millis()%20 === 0) {
        fill(25, 250, 13);
        ellipse(this.x - 13, this.y - 26, 5, 5);
        ellipse(this.x + 13, this.y - 26, 5, 5);
        }
        else {
             fill(38, 33, 38);
        ellipse(this.x - 13, this.y - 26, 5, 5);
        ellipse(this.x + 13, this.y - 26, 5, 5);
        }
    }
};

//Main program
var house1 = new House(0, 200, 70, 200);
var house2 = new House(70, 240, 70, 160);
var house3 = new House(140, 180, 70, 240);
var house4 = new House(210, 194, 70, 240);
var house5 = new House(280, 254 , 54, 240);
var house6 = new House(334, 214, 70, 240);

var positions = [
//windows 1 house
    {x: 2, y: 380}, 
    {x: 26, y: 366}, 
    {x: 50, y: 366}, 
    {x: 2, y: 352},
    {x: 38, y: 352}, 
    {x: 50, y: 352},
    {x: 2, y: 338}, 
    {x: 38, y: 338},
    {x: 14, y: 324},
    {x: 38, y: 324}, 
    {x: 2, y: 310},
    {x: 50, y: 310}, 
    {x: 14, y: 296}, 
    {x: 26, y: 296}, 
    {x: 14, y: 282}, 
    {x: 50, y: 282}, 
    {x: 2, y: 268},
    {x: 50, y: 268},
    {x: 14, y: 254},
    {x: 38, y: 254},
    {x: 2, y: 240},
    {x: 50, y: 240},
    {x: 14, y: 226},
    {x: 50, y: 226},
    {x: 38, y: 212},
    {x: 50, y: 212},
//windows 2 house    
    {x: 74, y: 380},    
    {x: 122, y: 380},
    {x: 110, y: 368},
    {x: 122, y: 368},
    {x: 74, y: 356},     
    {x: 98, y: 356},    
    {x: 86, y: 344},
    {x: 122, y: 344},
    {x: 98, y: 332},      
    {x: 86, y: 320}, 
    {x: 110, y: 320}, 
    {x: 74, y: 308},    
    {x: 122, y: 308},
    {x: 86, y: 296},
    {x: 98, y: 296},     
    {x: 74, y: 284},   
    {x: 98, y: 284},    
    {x: 98, y: 272},    
    {x: 110, y: 272},
    {x: 74, y: 260},     
    {x: 122, y: 260},
    {x: 98, y: 248}, 
    {x: 110, y: 248},
//windows 3 house    
    {x: 182, y: 380},
    {x: 194, y: 380}, 
    {x: 146, y: 368},    
    {x: 158, y: 356}, 
    {x: 194, y: 356}, 
    {x: 182, y: 344}, 
    {x: 158, y: 332},
    {x: 182, y: 332},
    {x: 194, y: 320},
    {x: 158, y: 308},
    {x: 182, y: 308},
    {x: 146, y: 296},     
    {x: 170, y: 296},   
    {x: 170, y: 284},    
    {x: 146, y: 272},    
    {x: 182, y: 272},
    {x: 158, y: 260},
    {x: 194, y: 260},
    {x: 182, y: 248},
    {x: 146, y: 236},     
    {x: 170, y: 224},    
    {x: 194, y: 224},
    {x: 158, y: 200},
    {x: 182, y: 200},
    {x: 146, y: 188}, 
    {x: 194, y: 188},
//windows 4 house
    {x: 216, y: 380},     
    {x: 240, y: 380},     
    {x: 228, y: 356},
    {x: 264, y: 356},
    {x: 216, y: 344},     
    {x: 252, y: 344},
    {x: 264, y: 344},
    {x: 240, y: 320},     
    {x: 264, y: 320},
    {x: 228, y: 308},
    {x: 264, y: 308},
    {x: 216, y: 284},     
    {x: 264, y: 284},
    {x: 252, y: 272},
    {x: 264, y: 260},
    {x: 228, y: 248},
    {x: 264, y: 236},
    {x: 240, y: 224},     
    {x: 252, y: 224},
    {x: 216, y: 212},    
    {x: 228, y: 212},
    {x: 252, y: 212},
    {x: 216, y: 200},    
//windows 5 house
    {x: 284, y: 380},    
    {x: 320, y: 380},
    {x: 296, y: 368},
    {x: 320, y: 368},
    {x: 284, y: 356},     
    {x: 308, y: 356},    
    {x: 320, y: 344},
    {x: 308, y: 332},     
    {x: 284, y: 320},     
    {x: 308, y: 308},    
    {x: 284, y: 284},     
    {x: 308, y: 272},     
    {x: 320, y: 272},
    {x: 284, y: 260},    
    {x: 320, y: 260},
//windows 6 house
    {x: 362, y: 380}, 
    {x: 386, y: 380},
    {x: 374, y: 368},
    {x: 350, y: 356},
    {x: 338, y: 344},     
    {x: 362, y: 344},    
    {x: 362, y: 320},     
    {x: 338, y: 308},    
    {x: 362, y: 308},     
    {x: 386, y: 308},
    {x: 338, y: 284},    
    {x: 386, y: 284},
    {x: 350, y: 260},
    {x: 374, y: 260},
    {x: 338, y: 248},     
    {x: 362, y: 248},     
    {x: 350, y: 236},
    {x: 362, y: 236},     
    {x: 362, y: 224},    
    {x: 386, y: 224}
];

var star1 = new Star(150, 20, 6, 6);
var star2 = new Star(100, 70, 6, 6);
var star3 = new Star(275, 150, 8, 8);
var star4 = new Star(270, 30, 8, 8);
var star5 = new Star(80, 150, 6, 6);
var star6 = new Star(230, 80, 6, 6);
var star7 = new Star(350, 120, 6, 6);
var star8 = new Star(190, 120, 6, 6);
var star9 = new Star(370, 170, 6, 6);
var star10 = new Star(300, 190, 6, 6);

var starImg1 = new StarImg(330, 70, 15, 25);
var starImg2 = new StarImg(150, 30, 20, 30);
var starImg3 = new StarImg(190, 150, 15, 25);
var starImg4 = new StarImg(45, 100, 20, 30);
var starImg5 = new StarImg(23, 15, 15, 25);

var shootStar1 = new ShootStar1(170, -50, 20, 20);
var shootStar2 = new ShootStar2(200, 70, 15, 15);

var moon = new Moon(343, 40, 50, 50);

var spot1 = new Spot(340, 55, 10, 5); 
var spot2 = new Spot(345, 50, 15, 10);  
var spot3 = new Spot(344, 55, 10, 10);  
var spot4 = new Spot(350, 55, 7, 7);  
var spot5 = new Spot(350, 48, 7, 7);  
var spot6 = new Spot(330, 28, 7, 7);  
var spot7 = new Spot(330, 35, 12, 10);  
var spot8 = new Spot(328, 40, 10, 13);  
var spot9 = new Spot(350, 28, 7, 7);  
var spot10 = new Spot(355, 28, 12, 10);  
var spot11 = new Spot(355, 32, 12, 10);  
var spot12 = new Spot(358, 34, 12, 10); 

var ufo = new Ufo(-20, 100);

var draw = function() {
    background(29, 40, 115);
    
    moon.draw();
    
    spot1.draw();
    spot2.draw();
    spot3.draw();
    spot4.draw();
    spot5.draw();
    spot6.draw();
    spot7.draw();
    spot8.draw();
    spot9.draw();
    spot10.draw();
    spot11.draw();
    spot12.draw();
    
    star1.draw();
    star2.draw();
    star3.draw();
    star4.draw();
    star5.draw();
    star6.draw();
    star7.draw();
    star8.draw();
    star9.draw();
    star10.draw();
    
    starImg1.draw();
    starImg2.draw();
    starImg3.draw();
    starImg4.draw();
    starImg5.draw();
    
    shootStar1.draw();
    shootStar2.draw();
    
    house1.draw();
    house2.draw();
    house3.draw();
    house4.draw();
    house5.draw();
    house6.draw();
    
    for (var i = 0; i < positions.length; i++) {
        Windows(positions[i]);
    }
    
    ufo.draw();
};

draw();
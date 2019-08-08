// JavaScript Document

var context, controller, rectangle, loop;

context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 180;
context.canvas.width = 320;

rectangle = {

  height:32,
  jumping:true,
  width:32,
  x:44, // center of the canvas
  y:0,
  y_velocity:0

};

rectangle2 = {

  height:32,
  jumping:true,
  width:32,
  x:300, // center of the canvas
  y:0,
  y_velocity:0

};

controller = {

  up:false,
  keyListener:function(event) {

    var key_state = (event.type === "keydown")?true:false;
        controller.up = key_state;
    }

  };


loop = function() {

  if (controller.up && rectangle.jumping === false) {

    rectangle.y_velocity -= 20;
    rectangle.jumping = true;

  }


  rectangle.y_velocity += 1.5;// gravity
  rectangle.y += rectangle.y_velocity;
  rectangle.y_velocity *= 0.9;// friction

  // if rectangle is falling below floor line
  if (rectangle.y > 180 - 16 - 32) {

    rectangle.jumping = false;
    rectangle.y = 180 - 16 - 32;
    rectangle.y_velocity = 0;

  }


  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, 320, 180);// x, y, width, height
	
  context.fillStyle = "#202830";// hex for red
  context.beginPath();
  context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  context.fill();
  context.strokeStyle = "#202830";
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(0, 164);
  context.lineTo(320, 164);
  context.stroke();

  // call update when the browser is ready to draw again
  window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);
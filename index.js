const app = "I don't do much."

// function Rectangle(sides, width, height) {
// 	this.sides = sides;
// 	this.width = width;
// 	this.height = height;
    // this.area = function() {
    // 	return (this.width * this.height);
    // }

    // this.perimeter = function() {
    // 	return (this.width + this.height) * 2;
    // }
// };

// Rectangle.prototype.area = function(){
// 	return this.width * this.height;
// };
// Rectangle.prototype.perimeter = function() {
// 	return (this.width + this.height) * 2;
// };

//function Square(sides, length) {
  // this.sides = sides;
  // this.height = length;
  // this.width = length;
  // this.area = function(){
  // 	return this.width * this.height;
  // }

  // this.perimeter = function() {
  // 	return (this.width + height) * 2;
  // }
//   Rectangle.call(this, sides, length, length)
// };

// var rect = new Rectangle(4, 7, 3);
// var square = new Square(4, 5);

// rect.area();
// square.area();

// var squareOne = new Square(4, 4);

// Rectangle.prototype.internalAngles = 90;
// rect.internalAngles;

// square.internalAngles;

function Shape(sides, x, y) {
	this.sides = sides;
	this.x = x;
	this.y = y;
};

function Rectangle(x, y, width, height) {
  //call superclass constructor
  Shape.call(this, 4, x, y);
  //set rectangle values
  this.width = width;
  this.height = height;
};
// set Rectangle prototype to an instance of a Shape
Rectangle.prototype = Object.create(Shape.prototype);

//set Rectangle costructor 
Rectangle.prototype.constructor = Rectangle;

//Extend with Rectangle behavior
Rectangle.prototype.area = function() {
	return this.width * this.height;
};

Rectangle.prototype.perimeter = function() {
	return (this.width + this.height) * 2;
};

var rect = new Rectangle(1,0,5,3);
var shape = new Shape(3, 2,2);

Shape.prototype.move = function(x,y){
	this.x = x;
	this.y = y;
};

Shape.prototype.position = function(x,y){
	return (this.x + ", " + this.y);
}

function Quadrilateral(x, y, sideOneLength, sideTwoLength, sideThreeLength, sideFourLength){
	Shape.call(this, 4, x, y);

	this.sideOneLength = sideOneLength;
	this.sideTwoLength = sideTwoLength;
	this.sideThreeLength = sideThreeLength;
	this.sideFourLength = sideFourLength;
};

Quadrilateral.prototype = Object.create(Shape.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

Quadrilateral.prototype.area = function(){
	return this.sideOneLength * this.sideTwoLength;
};

Quadrilateral.prototype.perimeter = function(){
	return (this.sideOneLength + this.sideTwoLength) + (this.sideThreeLength + this.sideFourLength)
};


function NewRectangle(x, y, width, height){
	Quadrilateral.call(this, x, y, width, height, width, height)

	this.width = width;
	this.height = height;
};

NewRectangle.prototype = Object.create(Quadrilateral.prototype);
NewRectangle.prototype.constructor = NewRectangle;

NewRectangle.prototype.baseSide = function(){
	return this.sideOneLength;
};

function Square(x, y, length){
	NewRectangle(x, y, length, length)
	this.length = length;
};

Square.prototype = Object.create(NewRectangle.prototype);
Square.prototype.constructor = Square;

var square = new Square(1, 1, 3);
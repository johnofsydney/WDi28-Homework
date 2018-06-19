// // console.log('hello world');
//
// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle



const rectangleA = {
  length: 4,
  width: 4
};

const isSquare = function ( rect ) {
  return ( rect.length === rect.width );
}

const area = function ( rect ) {
  return ( rect.length * rect.width );
}

const perimeter = function ( rect ) {
  return ( (rect.length + rect.width) * 2 );
}


// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
const sqrNum = function ( a ) {
  return a * a;
}

const isObtuseAngle = function ( a, b, c ) {
  return (sqrNum( a ) * sqrNum( b ) > sqrNum ( c ))
}

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
  isEquilateral: function () {
    return ( this.sideA === this.sideB && this.sideB === this.sideC );
  },

  isIsosceles: function () {
    return ( this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC ); //checks if at least 2 sides are equal
  },

  area: function () {
    // root (p	 (	p	−	a	) 	(	p	−	b	)	 (	p	−	c	)) where p = (a + b + c) / 2
    let p = this.sideA + this.sideB + this.sideC;
    let area = Math.sqrt( p * ( p - this.sideA ) * ( p - this.sideB ) * ( p - this.sideC ) );
    return area.toFixed(2);
  },

  isObtuse: function () {
    // is obtuse angle if a^2 * b^2 > c^2 -- triangle is obtuse if at least one angle is obtuse.
    return ( isObtuseAngle( this.sideA, this.sideB, this.sideC ) ||
      isObtuseAngle( this.sideB, this.sideC, this.sideA ) ||
      isObtuseAngle( this.sideA, this.sideC, this.sideB )
    );
  }
};

//part 1
const isSquare = (rect) => {
  return rect.length === rect.width;
}

const area = (rect) => {
  return rect.length * rect.width;
}

const perimeter = (rect) => {
  return 2*(rect.length + rect.width);
}

//part 2
const isEquilateral = (tri) => {
  return (tri.sideA === tri.sideB && tri.sideA === tri.sideC);
}

const isIsosceles = (tri) => {
  return (tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC);
}

const area2 = (tri) => {
  const s = (tri.sideA + tri.sideB + tri.sideC)/2
  return Math.sqrt(s*(s-tri.sideA)*(s-tri.sideB)*(s-tri.sideC));
}

const isObtuse = (tri) => {
  const sides = Object.values(triangleA).sort((a, b) => b-a);
  return sides[0]**2 > sides[1]**2 + sides[2]**2;
}

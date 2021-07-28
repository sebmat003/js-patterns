(function () {
  enum ColorType {
    RED = "red",
    GREEN = "green",
    BLUE = "blue",
  }

  abstract class Shape {
    color: ColorType = ColorType.BLUE;
    angles: number = 3;
  }

  class FlyWeightShape extends Shape {
    constructor(color: ColorType, angles: number) {
      super();
      this.color = color;
      this.angles = angles;
    }
  }

  class FlyWeightFactory {
    shapes: { [id: string]: FlyWeightShape } = {};
    get(color: ColorType, angles: number): FlyWeightShape {
      if (!this.shapes[color + angles]) {
        this.shapes[color + angles] = new FlyWeightShape(color, angles);
      }
      return this.shapes[color + angles];
    }

    listAll() {
      for (const shape in this.shapes) {
        console.log(shape);
      }
    }
  }

  const factory = new FlyWeightFactory();
  factory.get(ColorType.BLUE, 3);
  factory.get(ColorType.RED, 3);
  factory.get(ColorType.GREEN, 1);
  factory.get(ColorType.BLUE, 4);
  factory.get(ColorType.BLUE, 4);
  factory.get(ColorType.BLUE, 4);
  factory.get(ColorType.BLUE, 4);
  factory.listAll();
})();

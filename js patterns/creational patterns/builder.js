class HouseDirector {
	construct(builder) {
  	builder.step1();
    builder.step2();
    return builder.get();
  }
}

class SkeletonBuilder {
	constructor(skeleton) {
  	this.skeleton = new Skeleton(20,15,3);
  }
	step1() {
  	this.skeleton.buildWalls();
  }
  
  step2() {
  	this.skeleton.putWindowsAndDoors();
  }
  
  get() {
  	return this.skeleton;
  }
}

class FundamentsBuilder {
	constructor(fundaments) {
  	this.fundaments = new Fundaments(200,15);
  }
	step1() {
  	this.fundaments.layBricks();
  }
  
  step2() {
  	this.fundaments.paintFundaments();
  }
  
  get() {
  	return this.fundaments;
  }
}

class DecorationsBuilder {
	constructor(decorations) {
  	this.decorations = new Decorations(20,30,3);
  }
	step1() {
  	this.decorations.putMaterials();
  }
  
  step2() {
  	this.decorations.addFurnitures();
  }
  
  get() {
  	return this.decorations;
  }
}

class Fundaments {
	constructor(bricks, cementBags) {
  	this.bricks = bricks;
    this.cementBags = cementBags;
  }
  
  layBricks() {
  	console.log('Build fundaments with ', this.bricks, ' bricks and ', this.cementBags, 'cement bags.');
  }
  
  paintFundaments() {
  	console.log('Paint fundaments');
  }
  
}

class Skeleton {
	constructor(walls, windows, doors) {
  	this.walls = walls;
    this.windows = windows;
    this.doors = doors;
  }
  
  buildWalls() {
  	console.log('Build walls');
  }
  
  putWindowsAndDoors() {
  	console.log('Add windows/doors');
  }
}

class Decorations {
	constructor(furnitures, materials, lights) {
  	this.furnitures = furnitures;
    this.materials = materials;
    this.lights = lights;
  }
  
  putMaterials() {
  	console.log('Put materials');
  }
  
  addFurnitures() {
  	console.log('Add furnitures');
  }
}

const houseDirector = new HouseDirector();
const skeletonBuilder = new SkeletonBuilder();
const fundamentsBuilder = new FundamentsBuilder();
const decorationBuilder = new DecorationsBuilder();
const fundaments = houseDirector.construct(fundamentsBuilder);
const skeleton = houseDirector.construct(skeletonBuilder);
const decorations = houseDirector.construct(decorationBuilder);
console.log(skeleton, fundaments, decorations);


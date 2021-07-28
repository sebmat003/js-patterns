(function () {
  enum PlaceType {
    RIVER = "river",
    COUNTRY = "country",
    MOUNTAIN = "mountain",
  }

  interface Place {
    name: string;
    type: PlaceType;
  }

  class River implements Place {
    name: string;
    type = PlaceType.RIVER;
    constructor(name: string) {
      this.name = name;
    }
  }

  class Country implements Place {
    name: string;
    type = PlaceType.COUNTRY;
    constructor(name: string) {
      this.name = name;
    }
  }

  class Mountain implements Place {
    name: string;
    type = PlaceType.MOUNTAIN;
    constructor(name: string) {
      this.name = name;
    }
  }

  abstract class GeographicalPlace {
    place: Place;
    constructor(place: Place) {
      this.place = place;
    }

    msg() {
      console.log(
        "This is",
        this.place.name,
        "which is the",
        this.place.type,
        "located somewhere in the world"
      );
    }
  }

  class Asia extends GeographicalPlace {
    constructor(place: Place) {
      super(place);
    }
    msg() {
      console.log(
        "This is",
        this.place.name,
        "which is the",
        this.place.type,
        "located in Asia"
      );
    }
  }

  class Europe extends GeographicalPlace {
    constructor(place: Place) {
      super(place);
    }
    msg() {
      console.log(
        "This is",
        this.place.name,
        "which is the",
        this.place.type,
        "located in Europe"
      );
    }
  }

  const asianRiver = new Asia(new River("Ganges"));
  const europeCountry = new Europe(new Country("Poland"));
  const asianMountain = new Asia(new Mountain("Mount Everest"));

  asianRiver.msg();
  europeCountry.msg();
  asianMountain.msg();
})();

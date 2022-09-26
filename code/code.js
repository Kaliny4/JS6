  /*Створити клас Car , Engine та Driver. Клас Driver містить поля - ПІБ, стаж водіння. 
  Клас Engine містить поля – потужність, виробник. 
  Клас Car містить поля – марка автомобіля, клас автомобіля, вага, водій типу Driver, мотор типу Engine.
  Методи start(), stop(), turnRight(), turnLeft(), які виводять на друк: "Поїхали", "Зупиняємося", 
  "Поворот праворуч" або "Поворот ліворуч". А також метод toString(), 
  який виводить повну інформацію про автомобіль, її водія і двигуна.  
  Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю 
  кузова. Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю. 
  */
  class Driver {

    constructor(name, experience) {
      this.name = name;
      this.experience = experience;
    }
  
  }
  
  class Engine extends Driver {
    constructor(power, manufacterer, name, experience){
    super(name, experience);
    this.power = power;
    this.manufacterer = manufacterer;
    }
  } 
  class Car extends Engine {
        
    constructor (brand, clasauto, weight, power, manufacterer, name, experience){
        super(power, manufacterer, name, experience);
        this.brand = brand;
        this.clasauto = clasauto;
        this.weight = weight;
       }
    start() {
        console.log("Поїхали");
    }
    stop()  {
        console.log("Зупиняємося");
    }
       
    turnRight()  {
        console.log("Поворот праворуч");
    }
    turnLeft() {
        console.log("Поворот ліворуч");
    }
    toString() {
        alert(
            this.brand + " " +
            this.clasauto  + " " +
            this.weight   + " " +
            this.name   + " " +
            this.experience   + " " +
            this.power   + " " +
            this.manufacterer,);
    }
       
  }
   class Lorry extends Car {

    constructor(powerLift) {
      this.powerLift = powerLift;
      
    }
  
  }
  
  class SportCar extends Car {

    constructor(maxSpeed) {
      this.maxSpeed = maxSpeed;
      
    }
  
  }
  
  let tesla = new Car("Tesla", "premium", "30", "Peter", "5", "300", "tesl");
  tesla.toString();
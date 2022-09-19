  /*Створити клас Car , Engine та Driver. Клас Driver містить поля - ПІБ, стаж водіння. 
  Клас Engine містить поля – потужність, виробник. 
  Клас Car містить поля – марка автомобіля, клас автомобіля, вага, водій типу Driver, мотор типу Engine.
  Методи start(), stop(), turnRight(), turnLeft(), які виводять на друк: "Поїхали", "Зупиняємося", 
  "Поворот праворуч" або "Поворот ліворуч". А також метод toString(), 
  який виводить повну інформацію про автомобіль, її водія і двигуна.  
  Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю 
  кузова. Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю. 
  */
  class Engine {
    
    constructor(power, manufacterer) {
      this.power = power;
      this.manufacterer = manufacterer;
    }
  
  }
  
  let engine = new Engine("300", "tesla");
  
  class Driver {

    constructor(name, experience) {
      this.name = name;
      this.experience = experience;
    }
  
  }
  
  let driver = new Driver("Peter", "5");
      
  class Car {
        
    constructor (brand, clasauto, weight, Driver, Engine){
        this.brand = brand;
        this.clasauto = clasauto;
        this.weight = weight;
        this.driver = Driver;
        this.engine = Engine;
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
        console.log(this.brand,
            this.clasauto,
            this.weight,
            this.driver,
            this.engine);
    }
       
  }
  
  let tesla = new Car("Tesla", "premium", "30", driver, engine);
  tesla.turnLeft();
  tesla.toString();
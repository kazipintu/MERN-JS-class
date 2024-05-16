/*  ~ CLASS ~  */

/* clas: it is a diagram by which we can create new object */

//class is a built-in keyword in javascript, so in react js, class word is not allowed
// constructor keyword wroksd as a function, put the parameters.
// then initialize in the body of constructir using this.property

{
  class Support {
    name;
    designation = 'senior engineer';
    address;
    phone = +9123546;
    constructor(name, phone, address) {
      this.name = name;
      this.phone = phone;
      this.address = address;
    }
    startwork() {
      console.log(this.name, ' started working in js');  //  write an anonymous function
    }
  }

  /*  when class declaration is completed, make a reference to the class or 
      crate a pattern to create any object  */

  const newClass = new Support('Ali', +9198765432, 'colombo')
  console.log(newClass);

}


{
  class Student {
    name;
    studentClass;
    section;
    roll;
    hobby;
    swimming;
    constructor(name, section, roll, hobby, swimming, StudentClass) {
      this.name = name;
      this.studentClass = StudentClass;
      this.section = section;
      this.roll = roll;
      this.hobby = hobby;
      this.swimming = swimming;
    }
    functionWork() {
      console.log(this.name, "started functioning");
    }

  }
  const studentInfo = new Student('Raqib', '5A', 12, 'painting', 'yes', '5');
  console.log(studentInfo);
  //console.log(studentInfo.functionWork());
}

{
  class employee {
    company;
    designation;
    employeeName;
    emplyeeID;
    bloodGroup;
    email = ' ';
    phone;

    constructor(company, role, empName, empID, blood, email, phone) {
      this.company = company;
      this.designation = role;
      this.employeeName = empName;
      this.emplyeeID = empID;
      this.bloodGroup = blood;
      this.email = email;
      this.phone = phone;
    }
    entryData() {
    }
  }
  const enrollEmployee = new employee('ABC', 'clerk', 'Babu', 420, 'O-', 'babu@email.com', '123456');
  console.log(enrollEmployee);
}




{
  class Y9Prime {
    make;
    releaseYear;
    screenSize;
    cameraFront;
    cameraBack;
    memory;
    processor;
    capacity;
    constructor(make, releaseYear, screenSize, cameraFront, cameraBack, memory, processor, capacity,) {
      this.make = make;
      this.releaseYear = releaseYear;
      this.screenSize = screenSize;
      this.cameraFront = cameraFront;
      this.cameraBack = cameraBack;
      this.memory = memory;
      this.processor = processor;
      this.capacity = capacity;
    }
    entryMobileData() {
    }
  }
  const newY9Prime = new Y9Prime('Huawei', 2019, '6.3"', '8 mp', '12 mp', '6 gb', '2.4 ghz snapdragon', '128 gb');
  //console.log(newY9Prime);


  class redmi10 extends Y9Prime {
    make;
    releaseYear;
    screenSize;

    constructor(make, releaseYear, screenSize) {
      super(memory, processor, capacity)
      this.make = make;
      this.releaseYear = releaseYear;
      this.screenSize = screenSize
    }
    entryNewMobile() {
    }
  }
  const newRedmi10 = new redmi10('xiomi', 2019, '5.9"',);
  console.log(newRedmi10);
}

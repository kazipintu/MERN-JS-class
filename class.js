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
      this.class = StudentClass;
      this.section = section;
      this.roll = roll;
      this.hobby = hobby;
      this.swimming = swimming;
    }
    functionWork() {
    }
  }
  const studentInfo = new Student('Raqib', '5A', 12, 'painting', 'yes', '5');
  console.log(studentInfo);
}
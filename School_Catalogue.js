/*
School
Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
Getters: all properties have getters
Setters: the numberOfStudents property has a setter
Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)
Primary
Includes everything in the School class, plus one additional property
Properties: pickupPolicy (string)
Middle
Does not include any additional properties or methods
High
Includes everything in the School class, plus one additional property
Properties: sportsTeams (array of strings)
*/

class School{
    constructor(name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name(){
      return this._name ;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents(){
      return this._numberOfStudents;
    }
    set numberOfStudents(newNumberOfStudents){
      if (typeof newNumberOfStudents === 'String'){
          console.log('Invalid input: numberOfStudents must be set to a Number.');
      }else{
        this._numberOfStudents = newNumberOfStudents;
      }
    }
    quickFacts(name,level,numberOfStudents){
       console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
    
  
    static pickSubstituteTeacher(substituteTeachers){
       // Generate a random index between 0 and substituteTeachers.length - 1
      const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randomIndex];
    }
  
  }
  
  class PrimarySchool extends School{
      constructor(name,numberOfStudents, pickupPolicy){
        super(name, 'primary', numberOfStudents);
         this._pickupPolicy = pickupPolicy;
      }
    
    // Getter for pickupPolicy
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
  
    // Getter for the sportsTeams property.
    // This getter logs all of the sports teams to the console and returns the array.
    get sportsTeams() {
      console.log("Sports Teams:", this._sportsTeams.join(', '));
      return this._sportsTeams;
    }
  }
  
  
  // Example usage:
  const substitutes = ["Mr. Smith", "Ms. Johnson", "Mrs. Lee", "Mr. Brown"];
  console.log(School.pickSubstituteTeacher(substitutes)); // Returns a random substitute teacher from the array.
  
  //PrimarySchool instance
  const lorraineHansbury = new PrimarySchool(
    'Lorraine Hansbury',
    514,
    'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
  );
  
  
  // Call .quickFacts() on the lorraineHansbury instance
  lorraineHansbury.quickFacts();
  
  // Define an array of substitute teachers
  const substituteTeachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
  
  
  // Call .pickSubstituteTeacher() on the School class with the array
  const substitute = School.pickSubstituteTeacher(substituteTeachers);
  console.log(substitute);
  
  const alSmith = new HighSchool(
    'Al E. Smith',
    415,
    ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']
  );
  
  alSmith.sportsTeams;
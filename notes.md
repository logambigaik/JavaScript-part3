JavaScript is an object-oriented programming (OOP) language we can use to model real-world items. 
In this lesson, you will learn how to make classes. Classes are a tool that developers use to quickly produce similar 
Preview: Docs Loading link description
objects
.

Take, for example, an object representing a dog named halley. This dog’s name (a key) is "Halley" (a value) 
and has a behavior (another key) of 0 (another value). We create the halley object below:

let halley = {
  _name: 'Halley',
  _behavior: 0,
  
  get name() {
    return this._name;
  },
  
  get behavior() {
    return this._behavior;
  },
    
  incrementBehavior() {
    this._behavior++;
  }
}


Now, imagine you own a dog daycare and want to create a catalog of all the dogs who belong to the daycare. 
Instead of using the syntax above for every dog that joins the daycare, we can create a Dog class that serves as a template 
for creating new Dog objects. For each new dog, you can provide a value for their name.

As you can see, classes are a great way to reduce duplicate code and debugging time.

After we lay the foundation for classes in the first few exercises, we will introduce inheritance and static 
Preview: Docs Loading link description
methods
 — two features that will make your code more efficient and meaningful.

Example:
========
class Dog {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior ++;
    }
  }
  const halley = new Dog('Halley');
  console.log(halley.name);
  console.log(halley.behavior);
  halley.incrementBehavior()
  console.log(halley.name);
  console.log(halley.behavior);

Output:
======
Halley
0
Halley
1

Constructor
===========
In the last exercise, you created a class a class called Dog, and used it to produce a Dog object

Although you may see similarities between class and object syntax, there is one important method that 
sets them apart . 
It’s called the constructor method. JavaScript calls the constructor() method every time it creates a new instance of a class.
class Dog {
    constructor(name) {
      this.name = name;
      this.behavior = 0;
    }
  }

  Dog is the name of our class. By convention, we capitalize and PascalCase class names.
JavaScript will invoke the constructor() method every time we create a new instance of our Dog class.
This constructor() method accepts one argument, name.
Inside of the constructor() method, we use the this keyword. 
In the context of a class, this refers to an instance of that class. In the Dog class, we use this to set the value of 
the Dog instance’s name property to the name argument.
Under this.name, we create a property called behavior, which will keep track of the number of times a dog misbehaves. 
The behavior property is always initialized to zero.


Instance
========
Now, we’re ready to create class instances. An instance is an object that contains the property names and methods
of a class, but with unique property values. Let’s look at our Dog class example.

class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  } 
}

const halley = new Dog('Halley'); // Create new Dog instance
console.log(halley.name); // Log the name value saved to halley
// Output: 'Halley'


Below our Dog class, we use the new keyword to create an instance of our Dog class. Let’s consider the line of code step-by-step.

We create a new variable named halley that will store an instance of our Dog class.
We use the new keyword to generate a new instance of the Dog class. The new keyword calls the constructor(), runs the code inside of it, and then returns the new instance.
We pass the 'Halley' string to the Dog constructor, which sets the name property to 'Halley'.
Finally, we log the value saved to the name key in our halley object, which logs 'Halley' to the console

Another Example:
===============
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
console.log(surgeonRomero.name);
console.log(surgeonRomero.department);

const surgeonJackson = new Surgeon('Ruth Jackson','Orthopedics');
console.log(surgeonJackson.name);
console.log(surgeonJackson.department);

Methods
========
we have a Dog class that spins up objects with name and behavior properties. Below, we will add getters and a method to bring our class to life.

Class method and getter syntax is the same as it is for objects except you can not include commas between methods.
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
    
  get name() {
    return this._name;
  }
  
  get behavior() {
    return this._behavior;
  }
  
  incrementBehavior() {
    this._behavior++;
  }
}
In the example above, we add getter methods for name and behavior. Notice, we also prepended our property names with underscores (_name and _behavior), which indicate these properties should not be accessed directly. Under the getters, we add a method named .incrementBehavior(). When you call .incrementBehavior() on a Dog instance, it adds 1 to the _behavior property. Between each of our methods, we did not include commas.

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  get name(){
    return this._name ;
  }
  get department(){
    return this._department;
  }

  get remainingVacationDays(){
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff){
    this._remainingVacationDays -= daysOff;
  }  
}

Method Calls
============
Method to access and manipulate data from Dog instances. 

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
    
  get name() {
    return this._name;
  }
  
  get behavior() {
    return this._behavior;
  }   
  
  incrementBehavior() {
    this._behavior++;
  }
}

const halley = new Dog('Halley');

Another example :
================
console.log(surgeonRomero.name);
surgeonRomero.takeVacationDays(3);
console.log(surgeonRomero.remainingVacationDays);

Inheritance I
============
Imagine our doggy daycare is so successful that we decide to expand the business and open a kitty daycare. Before the daycare opens, we need to create a Cat class so we can quickly generate Cat instances. We know that the properties in our Cat class (name, behavior) are similar to the properties in our Dog class, though, there will be some differences, because of course, cats are not dogs.
Let’s say that our Cat class looks like this:

class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }
    
  get name() {
    return this._name;
  }
 
  get usesLitter() {
    return this._usesLitter;
  }

  get behavior() {
    return this._behavior;
  }  
  
  incrementBehavior() {
    this._behavior++;
  }
}

In the example above, we create a Cat class. It shares a couple of properties (_name and _behavior) and a method (.incrementBehavior()) with the Dog class from earlier exercises. The Cat class also contains one additional property (_usesLitter), that holds a boolean value to indicate whether a cat can use their litter box.

When multiple classes share properties or 
Preview: Docs Methods are object properties that contain functions.
methods
, they become candidates for inheritance — a tool developers use to decrease the amount of code they need to write.

With inheritance, you can create a parent class (also known as a superclass) with properties and methods that multiple child classes (also known as subclasses) share. The child classes inherit the properties and methods from their parent class.

Let’s abstract the shared properties and methods from our Cat and Dog classes into a parent class called Animal.

class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
    
  get name() {
    return this._name;
  }
  
  get behavior() {
    return this._behavior;
  }   
    
  incrementBehavior() {
    this._behavior++;
  }
} 


In the example above, the Animal class contains the properties and methods that the Cat and Dog classes share (name, behavior, .incrementBehavior()).

Inheritance II
==============
In the last exercise, we created a parent class named Animal for two child classes named Cat and Dog.

The Animal class below contains the shared properties and 
Preview: Docs Loading link description
methods
 of Cat and Dog.

class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
    
  get name() {
    return this._name;
  }
  
  get behavior() {
    return this._behavior;
  }   
  
  incrementBehavior() {
    this._behavior++;
  }
} 

The code below shows the Cat class that will inherit information from the Animal class.

class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }
    
  get name() {
    return this._name;
  }
  
  get behavior() {
    return this._behavior;
  }
  
  get usesLitter() {
    return this._usesLitter;
  }
  
  incrementBehavior() {
    this._behavior++;
  }
}


To the right, in main.js, you will put what you learned to practice by creating a parent class named HospitalEmployee.

Inheritance III
================
We’ve abstracted the shared properties and methods of our Cat and Dog classes into a parent class called Animal (See below).

class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
    
  get name() {
    return this._name;
  }
  
  get behavior() {
    return this._behavior;
  }
    
  incrementBehavior() {
    this._behavior++;
  }
} 


Now that we have these shared properties and methods in the parent Animal class, we can extend them to the subclass, Cat.

class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}


In the example above, we create a new class named Cat that extends the Animal class. Let’s pay special attention to our new keywords: extends and super.

The extends keyword makes the methods of the animal class available inside the cat class.
The constructor, called when you create a new Cat object, accepts two arguments, name and usesLitter.
The super keyword calls the constructor of the parent class. In this case, super(name) passes the name argument of the Cat class to the constructor of the Animal class. When the Animal constructor runs, it sets this._name = name; for new Cat instances.
_usesLitter is a new property that is unique to the Cat class, so we set it in the Cat constructor.

Notice, we call super on the first line of our constructor(), then set the usesLitter property on the second line. In a constructor(), you must always call the super method before you can use the  thiskeyword — if you do not, JavaScript will throw a reference error. To avoid reference errors, it is best practice to call super on the first line of subclass constructors.

Below, we create a new Cat instance and call its name with the same syntax as we did with the Dog class:

const bryceCat = new Cat('Bryce', false); 
console.log(bryceCat._name); // output: Bryce


In the example above, we create a new instance the Cat class, named bryceCat. We pass it 'Bryce' and false for our name and usesLitter arguments. When we call console.log(bryceCat._name) our program prints, Bryce.

In the example above, we abandoned best practices by calling our _name property directly. In the next exercise, we’ll address this by calling an inherited getter method for our name property.

Example:
=======
class HospitalEmployee {
  constructor(name, remainingVacationDays,certifications){
    this._name = name;
    this._remainingVacationDays = remainingVacationDays;
    this._certifications = 20;
  }
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }

  addCertification(){
    
  }
}

class Nurse extends HospitalEmployee{
  constructor(name,certifications){
      super(name);
      this._certifications = certifications; 
  }
}

const nurseOlynyk = new Nurse('Olynyk',['Trauma', 'Pediatrics']);
console.log(nurseOlynyk.name);
console.log(nurseOlynyk.certifications);


Inheritance IV
==============
Now that we know how to create an object that inherits properties from a parent class let’s turn our attention to 
Preview: Docs Methods are object properties that contain functions.
methods
.

When we call extends in a class declaration, all of the parent methods are available to the child class.

Below, we extend our Animal class to a Cat subclass.

class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
    
  get name() {
    return this._name;
  }
  
  get behavior() {
    return this._behavior;
  }
  
  incrementBehavior() {
    this._behavior++;
  }
} 


class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}

const bryceCat = new Cat('Bryce', false);

In the example above, our Cat class extends Animal. As a result, the Cat class has access to the Animal getters and the .incrementBehavior() method.

Also in the code above, we create a Cat instance named bryceCat. Because bryceCat has access to the name getter, the code below logs 'Bryce' to the console.

console.log(bryceCat.name);

Since the extends keyword brings all of the parent’s getters and methods into the child class, bryceCat.name accesses the name getter and returns the value saved to the name property.

Now consider a more involved example and try to answer the following question: What will the code below log to the console?

bryceCat.incrementBehavior(); // Call .incrementBehavior() on Cat instance 
console.log(bryceCat.behavior); // Log value saved to behavior

The correct answer is 1. But why?

The Cat class inherits the _behavior property, behavior getter, and the .incrementBehavior() method from the Animal class.
When we created the bryceCat instance, the Animal constructor set the _behavior property to zero.
The first line of code calls the inherited .incrementBehavior() method, which increases the bryceCat _behavior value from zero to one.
The second line of code calls the behavior getter and logs the value saved to _behavior (1).

Another example:
================

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
 constructor(name, certifications) {
   super(name);
   this._certifications = certifications;
 } 
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);

nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);


Inheritance V
=============
In addition to the inherited features, child classes can contain their own properties, getters, setters, and methods.

Below, we will add a usesLitter getter. The syntax for creating getters, setters, and methods is the same as it is in any other class.

class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
    
  get usesLitter() {
    return this._usesLitter;
  }
}


In the example above, we create a usesLitter getter in the Cat class that returns the value saved to _usesLitter.

Compare the Cat class above to the one we created without inheritance:

class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }
    
  get name() {
    return this._name;
  }
  
  get usesLitter() {
    return this._usesLitter;
  }
  
  get behavior() {
    return this._behavior;
  }   
  
  incrementBehavior() {
    this._behavior++;
  }
}


We decreased the number of lines required to create the Cat class by about half. Yes, it did require an extra class (Animal), making the reduction in the size of our Cat class seem moot. However, the benefits (time saved, readability, efficiency) of inheritance grow as the number and size of your subclasses increase.

One benefit is that when you need to change a method or property that multiple classes share, you can change the parent class, instead of each subclass.

Before we move past inheritance, take a moment to see how we would create an additional subclass, called Dog.

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}


This Dog class has access to the same properties, getters, setters, and methods as the Dog class we made without inheritance, and is a quarter the size.

Now that we’ve abstracted animal daycare features, it’s easy to see how you can extend Animal to support other classes, like Rabbit, Bird or even Snake.

Example:
=======
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 

  get certifications(){
    return this._certifications;
  }

  addCertification(newCertification){
    this._certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);


Static Methods
=============
ou will want a class to have methods that aren’t available in individual instances, but that you can call directly from the class.

Take the Date class, for example — you can both create Date instances to represent whatever date you want, and call static methods, like Date.now() which returns the current date, directly from the class. The .now()method is static, so you can call it directly from the class, but not from an instance of the class.

Let’s see how to use the static keyword to create a static method called generateName method in our Animal class:

class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
    
  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
} 

In the example above, we create a static method called .generateName() that returns a random name when it’s called. Because of the static keyword, we can only access .generateName() by appending it to the Animal class.

We call the .generateName() method with the following syntax:

console.log(Animal.generateName()); // returns a name

You cannot access the .generateName() method from instances of the Animal class or instances of its subclasses (See below).

const tyson = new Animal('Tyson'); 
tyson.generateName(); // TypeError

The example above will result in an error, because you cannot call static methods (.generateName()) on an instance (tyson).

Another example:
================

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }

  static generatePassword(){
      return Math.floor(Math.random() * 10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);


Another example:
===============

class RentalUnit {
  constructor(address, costPerYear) {
    this._address = address;
    this._costPerYear = costPerYear;
  }

  get address() {
    return this._address;
  }

  get costPerYear() {
    return this._costPerYear;
  }

  calculateMonthly() {
    return this.costPerYear / 12; 
  }
}

class Apartment extends RentalUnit {
  constructor(address, costPerYear, numberOfBedrooms) {
    super(address, costPerYear);
    this._numberOfBedrooms = numberOfBedrooms;
  }

  get numberOfBedrooms() {
    return this._numberOfBedrooms;
  }
}
Answer :
========

Subclass is Apartment

the super keyword is used in a subclass to call the constructor or methods of its parent class. It ensures that the subclass correctly inherits and extends the behavior of the parent class.

When you use the extends keyword to declare a subclass, you automatically inherit the getters, setters, and methods. However, you must call super from within the constructor() to set a parent’s properties.


Build a Library
===============
Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help. They’re still using index cards to organize their content! Yikes.

But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

Book
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
Movie
Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
CD
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()


Skip to Content
My Home
Syllabus

Ask the AI Learning Assistant
Get Unstuck
Tools

Avatar
Implementing Modules using ES6 Syntax
Article on implementing modules in a browser’s runtime environment using ES6 modules syntax.

What are Modules?
Modules are reusable pieces of code in a file that can be exported and then imported for use in another file. A modular program is one whose components can be separated, used individually, and recombined to create a complex system.

Consider the diagram below of an imaginary program written in a file my_app.js:

diagram of a modular program. separate modules are combined to create a complex program

Note: The words “module” and “file” are often used interchangably

Instead of having the entire program written within my_app.js, its components are broken up into separate modules that each handle a particular task. For example, the database_logic.js module may contain code for storing and retrieving data from a database. Meanwhile, the date_formatting.js module may contain functions designed to easily convert date values from one format to another (a common headache among programmers!).

This modular strategy is sometimes called separation of concerns and is useful for a number of reasons. What do you think those reasons might be?

Write down a few of your ideas before revealing the reasons below:

Implementing modules in your program requires a small bit of management. In the remainder of this article, we will be covering:

How to use the ES6 export statement to export code from a file - meaning its functions and/or data can be used by other files/modules.
How to use the ES6 import statement to import functions and/or data from another module.
Implementations of Modules in JavaScript: Node.js vs ES6
Before we dive in, it should be noted that there are multiple ways of implementing modules depending on the runtime environment in which your code is executed. In JavaScript, there are two runtime environments and each has a preferred module implementation:

The Node runtime environment and the module.exports and require() syntax.
The browser’s runtime environment and the ES6 import/export syntax.
This article will focus on using the ES6 import/export syntax in a browser’s runtime environment. For more information, you can read the articles linked below.

Implementing Modules In Node
Introduction to Runtime Environments
A Brief History of JavaScript Modules in the Browser
In the early days of web development, JavaScript usage was fairly minimal. A script here to add some interactivity to a page and a script there to automate away some simple task. Nowadays, however, JavaScript dominates the web and scripts have ballooned into large and cumbersome behemoths. According to some studies, the average size of a website, in terms of kilobytes of JavaScript data transferred, has grown over 5 times from 2010 to 2020!

These stats aren’t meant to paint a dreary future of web development. Web applications drive much of modern society and are far more capable than could have been imagined when the World Wide Web was created in 1989. Instead, it is to make clear the need for modularity as the capabilities, and size, of these scripts grow.

Though libraries for implementing modules have existed for some time, syntax for natively implementing modules was only introduced in 2015 with the release of ECMAScript 6 (ES6). Since then, it has been adopted by most modern browsers and is the de facto approach for implementing modular applications in the browser.

Implementing Modules in the Browser
Let’s take a look at implementing modules in the browser through an example. Suppose you wanted to build a simple web application with some hidden text that is revealed when a button is pressed.

A demo of a simple website. There is a button that says "Press me... if you dare". Clicking on the button reveals a hidden message that says "Modules are fancy!"

To create this website, you could create two files, secret-messages.html and secret-messages.js, and store them together in a folder called secret-messages:

secret-messages/
|-- secret-messages.html
|-- secret-messages.js

Let’s take a look at the HTML file first:

<!-- secret-messages.html --> 
<html>
  <head>
    <title>Secret Messages</title>
  </head>
  <body>
    <button id="secret-button"> Press me... if you dare </button>
    <p id="secret-p" style="display: none"> Modules are fancy! </p>
    <script src="./secret-messages.js"> </script>
  </body>
</html>

The secret-messages.html page renders a button element and a hidden paragraph element.
It then loads the script secret-messages.js using the file path "./secret-messages.js". The ./ before the file name is how you indicate that the file being referenced (secret-messages.js) is in the same folder as the file referencing it (secret-messages.html).
Speaking of which, let’s take a look at the JavaScript file:

/* secret-messages.js */
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
});

In secret-messages.js, DOM objects are created to reference the button element and paragraph element using the DOM API. These objects are stored in buttonElement and pElement, respectively.
The function toggleHiddenElement() is declared. It can accept either of these elements as an input called domElement and will either show or hide that element depending on its current style.display value.
An event listener is added to buttonElement to listen for 'click' events and respond by calling toggleHiddenElement() with pElement as the argument.
Now, suppose you wanted to create a second webpage with similar features. There is still a button, but this time clicking it reveals an image. Using similar logic as the program above, this can be achieved with the following file structure:

secret-image/
|-- secret-image.html
|-- secret-image.js

The HTML might look like this:

<!-- secret-image.html --> 
<html>
  <head>
    <title>Secret Image</title>
  </head>
  <body>
    <button id="secret-button"> Want to see something cool? </button>
    <img id="secret-img" src="imageURL.jpg" style="display: none">
    <script src="./secret-image.js"> </script>
  </body>
</html>

… and the JavaScript might look like this:

/* secret-image.js */
const buttonElement = document.getElementById('secret-button');
const imgElement = document.getElementById('secret-img');

const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(imgElement);
});

Given that much of the code in these two programs is similar, creating this second website was fairly straightforward. In particular, notice that the toggleHiddenElement() function is copied line for line from secret-messages.js.

Having two identical, but separate, copies of a function can lead to maintenance issues in the future. For example, any bugs that may exist within the function would need to be fixed in two places rather than one.

Instead, creating a single copy of toggleHiddenElement() within a module that exports it would allow these two websites to import and use the exact same function. With this approach, updates to the function only need to occur within the module that defines them, and all programs that import this function will receive the same update. Furthermore, additional functions could be exported by the module and used by both programs, further reducing repetition.

ES6 Named Export Syntax
A module must be entirely contained within a file. So, let’s first consider where a new module may be placed within the file system. Since it needs to be used by both of these projects, you may want to put it in a mutually accessible location. The entire file structure containing both projects and this new module, let’s call it dom-functions.js, could look like this:

secret-image/
|-- secret-image.html
|-- secret-image.js
secret-messages/
|-- secret-messages.html
|-- secret-messages.js
modules/
|-- dom-functions.js    <-- new module file

Inside dom-functions.js, the functions you wish to reuse can be exported using the named export syntax below:

export { resourceToExportA, resourceToExportB, ...}

Using this syntax, the name of each exported resource is listed between curly braces and separated by commas. Below, you can see how this is implemented in the new module file dom-functions.js:

/* dom-functions.js */
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}

const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
        
  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}

export { toggleHiddenElement, changeToFunkyColor };

Let’s briefly break down how this module works:

The function toggleHiddenElement() is declared. It accepts a domElement as an input and either shows or hides that element depending on its current display style value.
A new function changeToFunkyColor() is declared. It accepts a domElement as an input and then sets its background color to a random rgb() color value.
The two functions are exported using the ES6 export statement.
These exported functions are now available to be imported and used by other files!

If you want to try this out on your own computer, you will need to spin up a local server or else you will run into CORS issues. Check out this article on creating a local server with VSCode and the Live Server extension.

In addition to the syntax above, in which all named exports are listed together, individual values may be exported as named exports by simply placing the export keyword in front of the variable’s declaration. Here is the same example using this syntax:

/* dom-functions.js */
export const toggleHiddenElement = (domElement) => {
  // logic omitted...
}

export const changeToFunkyColor = (domElement) => {
  // logic omitted...
}

ES6 Import Syntax
The ES6 syntax for importing named resources from modules is similar to the export syntax:

import { exportedResourceA, exportedResourceB } from '/path/to/module.js';

Let’s update the secret-messages program such that it now imports functionality from dom-functions.js. Doing so requires two important steps. First, update secret-messages.js:

/* secret-messages.js */
import { toggleHiddenElement, changeToFunkyColor } from '../modules/dom-functions.js';

const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});

Let’s break down these changes:

In secret-messages.js, the functions toggleHiddenElement() and changeToFunkyColor() are imported from the module ../modules/dom-functions.js. The ../ indicates that the modules/ folder is in the same folder as the parent folder, secret-messages/.
When the button is clicked, the now imported toggleHiddenElement() function is called with pElement as an argument.
In addition, changeToFunkyColor() is called with buttonElement as an argument, changing its background color to a random one!
Now, you must also update secret-messages.html:

<!-- secret-messages.html --> 
<html>
  <head>
    <title>Secret Messages</title>
  </head>
  <body>
    <button id="secret-button"> Press me... if you dare </button>
    <p id="secret-p" style="display: none"> Modules are fancy! </p>
    <script type="module" src="./secret-messages.js"> </script>
  </body>
</html>

The change here is subtle, can you spot it? In secret-messages.html, the only thing that changes is the addition of the attribute type='module' to the <script> element. Failure to do so can cause some browsers to throw an error. For example, in Chrome you might see this error:

Uncaught SyntaxError: Cannot use import statement outside a module

And those are the basics of exporting and importing using the ES6 export and import syntax! If you have been following along with these code examples, see if you can update the secret-image project to use the exported functions from the module dom-functions.js before continuing on to the challenges below.

ES6 Modules Challenge #1
ES6 Modules Challenge #2
ES6 Modules Challenge #3
Renaming Imports to Avoid Naming Collisions
Inevitably, you will run into a situation where the resources you wish to import share a name with some other value that already exists in your program (or from another imported module).

For example, suppose you had access to two modules, greeterEspanol.js and greeterFrancais.js. Each exports a function called greet():

/* inside greeterEspanol.js */
const greet = () => {
  console.log('hola');
}
export { greet };

/* inside greeterFrancais.js */
const greet = () => {
  console.log('bonjour');
}
export { greet };

Now, let’s say you wanted to use each of these functions in a program, called main.js, that simulates a conversation between a spanish-speaker and a french-speaker.

import { greet } from 'greeterEspanol.js';
import { greet } from 'greeterFrancais.js';

The code above will throw an error on line 2 due to the fact that the identifier greet has already been defined on line 1. Thankfully, ES6 includes syntax for renaming imported resources by adding in the keyword as. It looks like this:

import { exportedResource as newlyNamedResource } from '/path/to/module'

Let’s see how this could work within main.js

/* main.js */
import { greet as greetEspanol } from 'greeterEspanol.js';
import { greet as greetFrancais } from 'greeterFrancais.js';

greetEspanol(); // Prints: hola
greetFrancais(); // Prints: bonjour

Now, both of the imported functions can be called within main.js using their new identifiers, greetEspanol() and greetFrancais().

ES6 Modules Challenge #4
Default Exports and Imports
So far, the examples shown have used the named export syntax, in which a module’s resources are exported individually by name. Every module also has the option to export a single value to represent the entire module called the default export. Often, though not always, the default export value is an object containing the entire set of functions and/or data values of a module.

The syntax for exporting a default object looks like this:

const resources = { 
  valueA, 
  valueB 
}
export { resources as default };

With this syntax, the object containing the module’s resources is first declared and then is exported on the next line. At first glance, it looks like the resources object is being exported as a named export. However, the clause as default renames the exported object to default, a reserved identifier that can only be given to a single exported value.

You may also see this shorthand syntax where the value follows export default is the default value to be exported:

const resources = {
  valueA,
  valueB
}
export default resources;

Importing default values.
The syntax for importing default exports looks like this:

import importedResources from 'module.js';

Notice that the curly braces are gone from the import statement. This syntax is actually shorthand for import { default as importedResources } from 'module.js and the imported default value may be given any name the programmer chooses.

It should be noted that if the default export is an object, the values inside cannot be extracted until after the object is imported, like so:

// This will work...
import resources from 'module.js'
const { valueA, valueB } = resources;

// This will not work...
import { valueA, valueB } from 'module.js'

Let’s return to the prior example. The dom-functions.js module from above could be rewritten to use default exports like so:

/* dom-functions.js */
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}

const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
        
  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}

const resources = { 
  toggleHiddenElement, 
  changeToFunkyColor
}
export default resources;

This default exports object can now be used within secret-messages.js like so:

import domFunctions from '../modules/dom-functions.js';

const { toggleHiddenElement, changeToFunkyColor } = domFunctions;

const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});

Notice how toggleHiddenElement() and changeToFunkyColor() are now methods of the imported object called domFunctions and are extracted using ES6 destructuring syntax! It should be noted that the identifier domFunctions can be chosen as the programmer sees fit. If you recall, the syntax used in the snippet above is shorthand for:

import { default as domFunctions } from '../modules/dom-functions.js';

Continue on to the challenges below before the final review at the end of the article.

ES6 Modules Challenge #5
ES6 Modules Challenge #6
Review
In this article, you have learned the following:

The benefits of implementing modular programs.
How to use the ES6 export statement to export code from a file - meaning its functions and/or data can be used by other files/modules.
How to use the ES6 import statement to import functions and/or data from another module.
How to rename imported resources using the as keyword.
How to export and import a default value.
Though this article covers the basics of using ES6 syntax to import and export modules, MDN has an excellent article that provides an in-depth look at some additional features that ES6 has to offer.

Back (ctrl + , )
Back
Next (ctrl + . )
Next


Example for import:
====================
/* main.js */

//import { toggleHiddenElement, changeToFunkyColor } from '../modules/dom-functions.js';
// import the functions here, then uncomment the code below
import { changeText, changeToFunkyColor } from './module.js';

const newText = "I did it!";
const header = document.getElementById("header");

// call changeText here

setInterval(()=> { 
  changeToFunkyColor(header);
  
  // call changeToFunkyColor() here

}, 200);



The <script> element below loads a JavaScript file which makes use of ES6 import/export syntax. 
Which of the following changes must be made in order to properly load this module and avoid browser errors?

<script src="./my-module.js"> </script>

Answer:
A type="module" attribute must be added to the opening <script> tag
<script type="module" src="./my-module.js"></script>


Renaming imports to avoid naming collisions:
============================================
/* inside greeterEspanol.js */
const greet = () => {
  console.log('hola');
}
export { greet };

/* inside greeterFrancais.js */
const greet = () => {
  console.log('bonjour');
}
export { greet };

Let’s see how this could work within main.js
/* main.js */
import { greet as greetEspanol } from 'greeterEspanol.js';
import { greet as greetFrancais } from 'greeterFrancais.js';

greetEspanol(); // Prints: hola
greetFrancais(); // Prints: bonjour

Another example:
===============
/* area-calculator.js */

import { area as squareArea } from 'square-area.js';
import { area as circleArea } from 'circle-area.js';

console.log('The area of a square with sides of length 5 is ' + squareArea(5));
console.log('The area of a circle with radius of length 5 is ' + circleArea(5));


Another code:
=============

function changeText(domElement, newText) {
  domElement.innerHTML = newText;
}

function changeToFunkyColor(domElement) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  domElement.style.color = `rgb(${r}, ${g}, ${b})`;
}

// export the functions here

export default { 
  changeText: changeText,       
  changeToFunkyColor: changeToFunkyColor 
}

/* 
or...

const module = { 
  changeText: changeText,       
  changeToFunkyColor: changeToFunkyColor 
}
export { module as default }
*/


Another example:
================
/* article-data.js */
const resources = {
  articleTitle: "Implementing Modules using ES6 Syntax",
  numberOfChallenges: 6,
  minutesToComplete: 45
}
export default resources;




Import the default export from utilities.js which is in the same folder as this module file using ES6 syntax. Save it to a variable called utilities.

Correct answer
import
 utilities 
from
 
'./utilities'
;
To correctly import the default export from a module in ES6 syntax, the import statement must begin with the keyword “import,” followed by the variable name and the “from” keyword to specify the module’s path. The string ‘./utilities’ points to the file ‘utilities.js’ in the same directory, completing the syntax correctly.



Powered by OpenAI
 
2.
How would one export the following variables using named exports?

/* geometry.js */
const rectangleArea = (h, w) => {
  return h * w;
}
const circleArea = (radius) => { 
    return Math.pi * radius * radius;
}
Your correct answer
export { rectangleArea, circleArea };

3.
In the code snippet, two separate files each export a function called validate(). Which of the following demonstrates the proper syntax for renaming these values when importing them?

/* username-validation.js */
export const validate = (username) => {
  // logic for validating a username omitted...
}

/* password-validation.js */
export const validate = (password) => {
  // logic for validating a password omitted...
}
Your correct answer
import { validate as validateUsername } from './username-validation.js/';
import { validate as validatePassword } from './password-validation.js/';

4.
Which of the following demonstrates the valid ES6 syntax for exporting named variables inline?

/* geometry.js */
const rectangleArea = (h, w) => {
  return h * w;
}
const circleArea = (radius) => { 
    return Math.pi * radius * radius;
}
Your correct answer
export const rectangleArea = (h, w) => {
  return h * w;
}
export const circleArea = (radius) => { 
  return Math.pi * radius * radius;
}

5.
Which of the following is NOT true of JavaScript modules?

Your correct answer
Creating modules makes it harder to find relevant code and makes debugging harder.

6.
Which of the following is the valid syntax to export the Planets module using the ES6 default export syntax?

let Planets = {};
Planets.calculateVolume = (radius) => {
  let volume = 4/3 * Math.pi * Math.pow(radius, 3)
  return volume;
}


Correct answer
export default Planets;

The ES6 default export syntax allows you to export a single value or object as the default export for a module.
The correct syntax specifies the object to be exported directly following the export default keyword, which in this case
 is the Planets object, enabling it to be imported without curly braces in other modules.


import { getDataByRole, getDataByCompany } from './salaryData.js';
import salaryData from './salaryData.js';

function getAverageSalaryByRole(role) {
  const roleData = getDataByRole(role);
  const totalSalary = roleData.reduce((sum, obj) => sum + obj.salary, 0);
  return totalSalary / roleData.length;
}

function getAverageSalaryByCompany(company) {
  const companyData = getDataByCompany(company);
  const totalSalary = companyData.reduce((sum, obj) => sum + obj.salary, 0);
  return totalSalary / companyData.length;
}

function getSalaryAtCompany(role, company) {
  const companyData = getDataByCompany(company);
  const roleData = companyData.find(obj => obj.role === role);
  return roleData ? roleData.salary : 0;
}

function getIndustryAverageSalary() {
  const totalSalary = salaryData.reduce((sum, obj) => sum + obj.salary, 0);
  return totalSalary / salaryData.length;
}


Error Handling:
===============
Runtime Errors
Errors contain useful messages that tell us why our program isn’t working or why the error was thrown. When an error is thrown, our program stops running and the console displays the error message in red text like so:


When we execute code and a line of code throws an error, that error is referred to as a runtime error. In JavaScript, there are built-in error objects that have a name and message property which tell us what went wrong. Examples of built-in runtime errors include:

ReferenceError: when a variable or function cannot be found.
TypeError: when a value is not a valid type, see the example below:
const reminder = 'Reduce, Reuse, Recycle';
reminder = 'Save the world';
// TypeError: Assignment to constant variable.
console.log('This will never be printed!');


In the example above, when we try to reassign a constant variable reminder, the TypeError is thrown. Code that is written after a thrown runtime error will not be evaluated, so the console.log() statement will not be evaluated.

Example:
=========
console.log('This message will be printed to the console.');

function throwError () {
  return notDefinedVar;
}

// Call throwError() below:
throwError();

console.log('Because of the error, this will not be printed!');


Constructing an Error
=====================

JavaScript 
Preview: Docs The JavaScript Error object represents runtime errors, providing information for throwing exceptions and 
handling them with try-catch blocks.
errors
 are 
Preview: Docs Loading link description
objects
 that have a name and message property. Previously, we’ve seen how built-in errors alert us about common mistakes in our code. 
 But, what if we need an error message that isn’t covered by the built-in errors? Let’s say we need to inform a user that a 
 string passed in as an argument is too short with a custom message. Such a message isn’t covered by a built-in error, 
 but we could use the Error function to make our own error object with a message that is unique to our program!

console.log(Error('Your password is too weak.'));
// Prints: Error: Your password is too weak.


The Error function takes an argument of a string which becomes the value of the error’s message property. 
In the code snippet above, we used the Error function to create an error object that has the message 'Your password is too weak.'.

You might also see errors created with the new keyword. Both 
Preview: Docs Loading link description
methods
 will lead to the same functionality. Take a look:

console.log(new Error('Your password is too weak.'));
// Prints: Error: Your password is too weak.


Keep in mind that creating an error is not the same as throwing an error. A thrown error will cause the program to stop running. 
We’ll cover how to throw our created errors in the next exercise!

Another example:
================
// Write your code below:
console.log(Error("User missing name"));
console.log(new Error("Message goes here"));
console.log('Will logging the error stop our program from running?');

The throw Keyword
=================
Creating an error doesn’t cause our program to stop — remember, an error must be thrown for it to halt the program.

To throw an error in JavaScript, we use the throw keyword like so:

throw Error('Something wrong happened');
// Error: Something wrong happened


When we use the throw keyword, the error is thrown and code after the throw statement will not execute. Take for example:

throw Error('Something wrong happened');
// Error: Something wrong happened

console.log('This will never run');


After throw Error('Something wrong happened'); is executed and the error object is thrown, the console.log() 
statement will not run (just like when a built-in JavaScript error was thrown!).

Another example:
===============
throw Error("Username or password does not match");
console.log("End of the throw message");


try...catch Statement
=====================
Up to this point, thrown 
Preview: Docs Loading link description
errors
 have caused our program to stop running. But, we have the ability to anticipate and handle these errors by writing code 
 to address the error and allow our program to continue running.

In JavaScript, we use try...catch statement to anticipate and handle errors. Take a look at example below:

try {
  throw Error('This error will get caught');
} catch (e) {
  console.log(e);
}
// Prints: This error will get caught

console.log('The thrown error that was caught in the try...catch statement!');
// Prints: 'The thrown error that was caught in the try...catch statement!'


Now, let’s break down what happened in the try...catch statement above:

We have code that follows try inside curly braces {} known as the try block.
Inside the try block we insert code that we anticipate might throw an error.
Since we want to see what happens if an error is thrown in the try block, we throw an error with the message 
'This error will get caught'.
Following the try block is the catch statement which accepts the thrown error from the try block . The e represents the 
thrown error.
The curly braces that follow catch(e) is known as the catch block and contains code that executes to handle the error.
Since the error is caught, our console.log() after the try...catch statement prints 'The thrown error that was caught in 
the try...catch statement!'.
Generally speaking, in a try...catch statement, we evaluate code in the try block and if the code throws an error, the code 
inside the catch block will handle the error for us. The provided example just showcases how a try...catch statement works 
because we know an error is being thrown. Let’s first practice writing our own try...catch statement and afterwards we will go 
over a more practical usage of try...catch.

try{
  throw Error('This error will get caught');
}catch(e) { 
  console.log(e);
}
console.log('The thrown error that was caught in the try...catch statement!');

Handling with try...catch
=========================
const someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';
} catch(e) {
  console.log(e);
}
// Prints: TypeError: Assignment to constant variable.
In the example above, we didn’t use the throw keyword to throw a custom error, rather we tried to re-assign a const variable
and a TypeError was thrown. Then, in our catch block, we logged the error to the console.

Another example:
================
function capAllElements(arr){
	if (!Array.isArray(arr)) {
      throw new TypeError("Expected an array of strings");
    }
    
    arr.forEach((el, index, array) => {
      if (typeof el !== "string") {
        throw new TypeError("Array should only contain strings");
      }
      array[index] = el.toUpperCase();
    });

    return arr;
}

console.log(capAllElements(["hello", "world"])); // ✅ Output: ["HELLO", "WORLD"]
console.log(capAllElements("Incorrect argument")); // ❌ Throws error: Expected an array of strings
console.log(capAllElements([123, "text"])); // ❌ Throws error: Array should only contain strings


The throw keyword in JavaScript is used to manually trigger an error in a program. 
It allows you to generate custom errors and stop the execution of code when something goes wrong.

Syntax:
throw new Error("Something went wrong!");

You can throw different types of errors, such as:
Error – General error
TypeError – When an operation is performed on the wrong data type
ReferenceError – When trying to access an undefined variable
SyntaxError – When there's a syntax issue

Example 1: Throwing a Custom Error
==================================
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0)); // ❌ Throws an error
} catch (error) {
  console.log("Error:", error.message);
}

// Output: Error: Cannot divide by zero!


Example: 2:  Throw -to validate input
=====================================
function greet(name) {
  if (typeof name !== "string") {
    throw new TypeError("Name must be a string!");
  }
  return `Hello, ${name}!`;
}

try {
  console.log(greet(123)); // ❌ Throws a TypeError
} catch (error) {
  console.log("Error:", error.message);
}


When the code in the code snippet runs, what is the expected outcome?

Code
console.log('Haiku in progress.');
throw Error('But wait there is an error.');
console.log('Fate of this haiku?');


Sample code:
============
class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }
  // Insert code below
   movieTime(){
   return false;
   const userData = this.users * 5;
    if (this.data - userData >= 10){
      return true;
    }
  }
}

const library = new Network(20, 2) 
library.movieTime() // returns false
console.log(library.data);
console.log(library.movieTime());

Example:2
=========
class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
  }
}

// Write function below
const balloonAttack = (player1, player2) => {
  for (let i = 1; i <= 10; i++){
    player2.balloonCount -= player1.hitsPerMinute
    player1.balloonCount -= player2.hitsPerMinute
    player1.status();
    player2.status();
  }
  if (player1.balloonCount > player2.balloonCount) {
    return player1.name;
  }else if (player2.balloonCount > player1.balloonCount)
    return player2.name

  return 'Tie'
}

const p1 = new Player('p1', 5);
const p2 = new Player('p2', 2);

balloonAttack(p1, p2);
p1.status();
p2.status();


Another example:
===============

// Write class below
class ShiftCipher {
  constructor(shift){
    this.shift = shift;
  }
  encrypt(plainString) {
    let encryptString = '';
    const tempString = plainString.toUpperCase();

    for (let i=0; i < tempString.length; i++) {
      let charNum = tempString.charCodeAt(i);
      
      if (charNum <= 90 && charNum >= 65) {
        charNum += this.shift;
        if (charNum > 90) {
          charNum -= 26;
        }
      }
      encryptString += String.fromCharCode(charNum);
    }
    return encryptString;
  }

  decrypt(encryptString) {
    let decryptString = '';
    const tempString = encryptString.toLowerCase();

    for (let i=0; i < tempString.length; i++) {
      let charNum = tempString.charCodeAt(i);
      
      if (charNum <= 122 && charNum >= 97) {
        charNum -= this.shift;
        if (charNum < 97) {
          charNum += 26;
        }
      }
      decryptString += String.fromCharCode(charNum);
    }
    return decryptString;
  }
}

const cipher = new ShiftCipher(2);
cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
cipher.decrypt('K <3 OA RWRRA'); 

class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(newCheckout) {
      this._isCheckedOut = newCheckout;
    }
  
    toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
     }
  
    getAverageRating() {
    if (this._ratings.length === 0) return 0; // or an appropriate value
    const ratingsSum = this._ratings.reduce((sum, rating) => sum + rating, 0);
    return ratingsSum / this._ratings.length;
    }
  
    addRating(newRating) {
    if (newRating >= 1 && newRating <= 5) {
      this._ratings.push(newRating);
      } else {
      console.log('Rating should be between 1 and 5');
      }
    }
  }
  
  class Book extends Media{
    constructor(title,author,pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
  
  }
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  }
  
  class CD extends Media {
    constructor(artist, title, songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
  
    get artist() {
      return this._artist;
    }
  }
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
  
  historyOfEverything.addRating(10);
  historyOfEverything.addRating(6);
  historyOfEverything.addRating(7);
  
  historyOfEverything.getAverageRating();
  historyOfEverything.isCheckedOut;
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.getAverageRating());
  
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  
  speed.addRating(1);
  speed.addRating(5);
  speed.toggleCheckOutStatus();
  speed.getAverageRating();
  console.log(speed.getAverageRating())
  
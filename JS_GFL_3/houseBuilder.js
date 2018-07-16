var Person = function() {
  var _this = {};
  _this.author = 'Vladimir';
  _this.sex = 'male';
  _this.idea = 'house_Builder';

  this.logPrivate = function() {
     console.log(_this);
   };
};

var mySelf = new Person();

console.log(mySelf._author); //private property
console.log(mySelf.logPrivate()); //public property

//Тест для себя - проверка на Синглтон;
var houseBuilder = new EventManager();
var houseBuilder2 = new EventManager();
console.log(houseBuilder === houseBuilder2);

function greeting() {
  alert('Ok guys let\'s do it!!!');
}
houseBuilder.addListener('start our journey', greeting());

function prorab () {
  alert('Our prorab: ' + prorab);
}
houseBuilder.addListener('event with info', prorab);

var prorab = 'Igor Danilov';
houseBuilder.dispatch('event with info', [prorab]);

function buildingHouse () {
  alert('The building is completed by: ' + persents);
}
houseBuilder.addListener('event with message', buildingHouse);
var persents = '50%';
houseBuilder.dispatch('event with message', [persents]);

function buildingHouseComplete () {
  alert('The building is completed by: ' + persentsComplete + '. We did it!!!');
}
houseBuilder.addListener('event with messageComplete', buildingHouseComplete);
var persentsComplete = '100%';
houseBuilder.dispatch('event with messageComplete', [persentsComplete]);

houseBuilder.addListener('cancel event', function(event) {
  event.cancel();
  alert('this event will be fired');
});
houseBuilder.addListener('cancel event', function(event) {
  alert('this event will not, because it is cancel above');
});
houseBuilder.dispatch('cancel event');

houseBuilder.addListener('remove event', function(event) {
    alert('remove event');
    event.remove();
});
houseBuilder.dispatch('remove event');


function ChangeOwner(name) {
  this.name = name;
  EventManager.eventify(this);
}
ChangeOwner.prototype.changeName = function(name) {
  this.name = name;
  this.dispatch('change owner', [name]);
}

var owner = new ChangeOwner();
owner.addListener('change owner', function(name) {
  alert('Owner changed to ' + name);
});
owner.changeName('Vladimir');

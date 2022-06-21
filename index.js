function myEach(collection, callback){
    Object.values(collection).forEach(el => callback(el));
    return collection
}

function myMap(collection, callback){
    let newCollection = Object.values(collection).map(el => callback(el));
    return newCollection
}

function myReduce(collection, callback, acc){
    let newArray = Object.values(collection);
    acc = acc || newArray.shift();
    let reducedValue = newArray.reduce(callback, acc);
    return reducedValue
}


function myFind(collection, predicate) {
    for (let i = 0; i < Object.values(collection).length; i++) {
        if (predicate(Object.values(collection)[i])) {
            return Object.values(collection)[i];
        }
    }
}


function myFilter(collection, predicate){
    return Object.values(collection).filter(element => predicate(element));
}


function mySize(collection) {
    let currentCollection = [...collection]
    if (collection instanceof Array === false) {
      currentCollection = Object.values(collection)
    }
    return currentCollection.length;
  }


  function myFirst(array, n) {
    if (typeof n !== "number") {
      return array[0];
    } else {
      let newArray = [];
      for (let i = 0; i < n; i++){
        newArray.push(array[i]);
      }
      return newArray;
    }
  }

  function myLast(array, n = 1){
    let index = array.length - n;

    return n > 1 ? array.slice(index, array.length) : array[index];
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object);
}
function ObjectToArray(obj) {
    var result = Object.entries(obj);
    console.log(result);
}

let objects = {
    a1: 1,
    a2: 2,
    a3: 3,
    a4: 4
}

ObjectToArray(objects);
function sortNames(array) {
    let res = array.sort((a,b)=> {
        alname = a.split(' ')[1];
        blname = b.split(' ')[1];
        if(alname < blname){
            return -1;
        } else if(alname > blname) {
            return 1;
        } else {
            return 0;
        }
    });
    console.log(res);
}


let names = ["asd dsa", "john doe", "fgh bgh" ];
sortNames(names);
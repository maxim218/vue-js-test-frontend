"use strict";

//
// https://learn.javascript.ru/property-accessors#umnye-gettery-settery
//

function logRefs(a, b) {
    console.log('A: ' + a.content);
    console.log('B: ' + b.content);
}

function myRef(info, name) {
    let storedInfo = info;
    return {
        get content() {
            return storedInfo;
        },
        set content(value) {
            storedInfo = value;
            console.log(`Set ${name} to ${storedInfo}`);
        }
    };
}

const a = myRef(100, 'A');
const b = myRef(400, 'B');
logRefs(a, b)

a.content = 1111;
b.content = 4444;
logRefs(a, b);

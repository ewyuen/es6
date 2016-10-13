/**
 * Created by edward.yuen on 10/13/2016.
 */
// import {sumTwo as addTwo, sumThree } from './math/addition';
import * as _ from 'lodash';
import * as addition from './math/addition';
import {users} from './data/users';

console.log(users);

console.log(_.filter(users, {age: 36}));

/*
console.log(
    "2+3",
    addTwo(2, 3)
);

console.log(
    "2+3",
    sumTwo(2, 3)
);

console.log(
    "2 + 3 + 4 = ",
    sumThree(2, 3, 4)
);

 */
console.log(
    "2+3",
    addition.sumTwo(2, 3)
);

console.log(
    "2 + 3 + 4 = ",
    addition.sumThree(2, 3, 4)
);

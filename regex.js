
const str = `Wh&at are** w%e le#arn#%in$g`;
const fixed = str.replace(/[^A-Za-z0-9\s]/g,'');
const str2 = `reg$%^ex@#@`;
const fixed2 = str2.replace(/[^A-Za-z0-9\s]/g,'');


console.log(fixed)
console.log(fixed2)
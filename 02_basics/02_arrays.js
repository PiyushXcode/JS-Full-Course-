let marvel_heroes = ['Ironman', 'Captain America', 'Hulk', 'Thor', 'Dr.Strange'];
let marvel_villains = ['Loki', 'Thanos', 'Ultron', 'RedSkull','Null'];
let boys_verse = ['Billi Butcher', 'Star Light'];

// marvel_heroes.push(marvel_villains);
// console.log(marvel_heroes);

// console.log(marvel_heroes[5][3]); 


// let NewMembers = marvel_heroes.concat(marvel_villains);//concat () method is used to merge two arrays and Return A new Array;

// console.log(NewMembers);



let new_members = [...marvel_heroes,...marvel_villains,...boys_verse];
console.log(new_members);//Another Method To Merge To Arrays Called Spread  ;

let another_array = [1, 2, 4, 3, [8, 8 ,5 ,7] ,9 ,[8, 4, 8,[6,4,8]]];

console.log(another_array);
let usable_another_array = another_array.flat(Infinity);//combines All Arrays into Single Unit and Merges all Arrays within ; 
console.log(usable_another_array);





console.log(Array.isArray("Piyush"));
console.log(Array.from("Piyush"));//is Use to Convert any String To Stirng;

console.log(Array.from({name:"Piyush"}));//intresting(when it is Not Able to convert the String it gives you empty Array[]); 



let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));




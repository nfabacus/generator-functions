function sayHi() {
  return 'Hi'
}

const result = sayHi();
console.log(result);

function* sayHiGenerator() {
  yield 'hello 1';
  yield 'hello 2';
  yield 'hello 3';
  return 'hello last'; // done is returned here if it is 'return'
}

const resultGenerator = sayHiGenerator();
console.log(resultGenerator);
console.log(resultGenerator.next());
console.log(resultGenerator.next());
console.log(resultGenerator.next());
console.log(resultGenerator.next());
console.log(resultGenerator.next());

const resultGeneratorForOf = sayHiGenerator();

for (const iterator of resultGeneratorForOf) {
  console.log(iterator);
  // for of loop does not return 'return' value.
}

function* anotherGeneratorFunc () {
  yield 'something';
  const final = yield 'give me value';
  yield final;
}

const anotherGeneratorIt = anotherGeneratorFunc();

console.log(anotherGeneratorIt.next());
console.log(anotherGeneratorIt.next());
console.log(anotherGeneratorIt.next('test'));
console.log(anotherGeneratorIt.next());
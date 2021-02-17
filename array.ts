type objType = {
  name: string;
  age: number;
  hobbies: string[]
}

const obj: objType = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['sports', 'Cooking']
}

for (const hobby of obj.hobbies) {
  console.log(hobby)
}
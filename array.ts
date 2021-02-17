type objType = {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
}

const obj: objType = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['sports', 'Cooking'],
  role: [2, 'author']
}

for (const hobby of obj.hobbies) {
  console.log(hobby)
}
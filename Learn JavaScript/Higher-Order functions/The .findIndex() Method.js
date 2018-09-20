const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(x => {
  return x === 'elephant';
})

const startsWithS = animals.findIndex(x => {
  return x[0] === 's';
})

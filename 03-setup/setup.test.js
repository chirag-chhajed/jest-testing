let animals = ['elephant','zebra','bear','tiger']

beforeEach(()=>{
    animals = ['elephant','zebra','bear','tiger']
})

afterEach(()=>{
    animals = ['elephant','zebra','bear','tiger']
})

describe('animals array', () => {
    it('should add animal to end of array', () => {
        // animals = ['elephant','zebra','bear','tiger']
        animals.unshift("monkey")
         expect(animals[0]).toBe("monkey")  
    });
    it("shoudl have initial lenth of 4",()=>{
        // animals = ['elephant','zebra','bear','tiger']
        expect(animals.length).toBe(4)
    })
});

describe('testing something else', () => {
  it('true should be truthy', () => {
    expect(true).toBeTruthy()
  });
  
})


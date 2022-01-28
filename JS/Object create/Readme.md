## What is the difference if you create an object from Object.create and normal structure

When you create an object from Object.create, it adds the properties to its protype. Hence its not possible to delete the properties from delete keyword

```
let car = Object.create({
    brand: 'maruti',
    price: 2000
})

delete car.brand

console.log(car.brand) // O/P maruti
```

![car](temp)
![car1](temp3)

But if you create an object with {}, it doesnot have any proto of its own, hence its easy to delete the properties

```
let car2 = {
    brand: 'audi',
    price: 4000
}
delete car2.brand

console.log(car2.brand) // O/P undefined
```

![car2](temp1)
![car2-1](temp2)

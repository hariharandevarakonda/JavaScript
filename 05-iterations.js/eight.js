const value = [1, 2, 3, 4, 5]

const total = value.reduce( (acc, current) => {
    // console.log(`acc: ${acc} and current: ${current}`);
    return acc + current
}, 0)

// console.log(total);


const shoppingCart = [
    {
        item:"cricket bat", price:7999
    },
    {
        item:"cricket ball", price:550
    },
    {
        item:"cricket gloves", price:1299
    },
    {
        item:"cricket pads", price:1899
    },
    {
        item:"cricket helmate", price:999
    },
    {
        item:"cricket thigh pad", price:1999
    },
    {
        item:"cricket guard", price:250
    },


]

const totalPrice = shoppingCart.reduce( (acc ,item) => acc + item.price,0 )
// console.log(`acc: ${acc} and item: ${item}`);

console.log(totalPrice);

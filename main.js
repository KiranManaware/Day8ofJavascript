const products = [
    { 
        id: 1,
        name: 'Laptop', 
        price: 1200, 
        category: 'Electronics', 
        stock: 15 
    },
    { 
        id: 2,
        name: 'Smartphone',
        price: 800, 
        category: 'Electronics', 
        stock: 30 
    },
    { 
        id: 3,
        name: 'Table',
        price: 150, 
        category: 'Furniture', 
        stock: 10 
    },
    { 
        id: 4,
        name: 'Chair', 
        price: 75, 
        category: 'Furniture', 
        stock: 50 
    },
    { 
        id: 5,
        name: 'Watch',
        price: 200, 
        category: 'Accessories', 
        stock: 20 
    },
    { 
        id: 6,
        name: 'Headphones',
        price: 120, 
        category: 'Electronics', 
        stock: 40 
    },
    { 
        id: 7,
        name: 'Desk', 
        price: 300, 
        category: 'Furniture', 
        stock: 5 
    },
    { 
        id: 8,
        name: 'Sunglasses',
        price: 150, 
        category: 'Accessories', 
        stock: 25 
    }
  ];
//   1. Filter out Electronics products with stock more than 20
// const Electronic=products.filter(
//     (product)=>{
//         if(product.stock>20 && product.category==="Electronics") return true;
//     }
// )
// console.log(Electronic)

//  2. Calculate total stock value for these products
// const total_stock=products.reduce(
//     (c,i)=>c+i.stock,0
// )
// console.log(total_stock)

// 3. Add totalValue property to each product in the new array
// const newarr=products.map(
//     (product)=>product
// )
// newarr.map(
//     (product)=>product.totalValue=product.stock*product.price
// )
// console.log(newarr)

//  4. Sort this array by totalValue in descending order
// const newarr=products.map(
//     (product)=>product
// )
// newarr.map(
//     (product)=>product.totalValue=product.stock*product.price
// )
// console.log(newarr)
// const sortedProducts=products.sort(
//     (a,b)=>b.totalValue-a.totalValue
// )
// console.log(sortedProducts)

// 5 Print each product’s name and total stock value
// products.forEach(
//     (product)=>{
//         console.log("Product Name : "+product.name+"Total stock :"+product.stock);
//     }
// )

// 6 create a new array having all the old key values except id and add totalValue
// 
// const newAr=products;
// newAr.map(
//     (product)=>product.totalValue=product.price*product.stock
// )
// newAr.forEach(
//     (product)=> {
//         delete product.id
//     }
// )
// console.log(newAr)


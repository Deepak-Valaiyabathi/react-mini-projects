import React from "react";
import { useState } from "react";

const Products = () => {
  const [product, setProduct] = useState({
    1: {
      id: 1,
      name: "Wireless Headphones",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvlfHtgdUJVE6aQjyEFIJj5hFDb5cexoio2A&s",
      price: 49.99,
      stock: 10,
      quantity: 1,
    },
    2: {
      id: 2,
      name: "Smart Watch",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMY-uAtMGDw5E2YTOubkeP8AJJZTpb-qtPA&s",
      price: 79.99,
      stock: 5,
      quantity: 1,
    },
    3: {
      id: 3,
      name: "Bluetooth Speaker",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sV0w9fkdT0sDvL19LFf9pShW9IbtZmU0gA&s",
      price: 39.99,
      stock: 8,
      quantity: 1,
    },
    4: {
      id: 4,
      name: "Laptop",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ICZDLVJW8T8FPsYlIb-2r73Zj9qjXHbvcQ&s",
      price: 599.99,
      stock: 3,
      quantity: 1,
    },
    5: {
      id: 5,
      name: "Gaming Mouse",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQokRylRWz_pFs2zYGy4Bu8Ru0eC6lHguYqmg&s",
      price: 29.99,
      stock: 15,
      quantity: 1,
    },
    6: {
      id: 6,
      name: "Mechanical Keyboard",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXW6Qt9gn0V1faOUULy9A8A6e7NoIu68eFg&s",
      price: 69.99,
      stock: 6,
      quantity: 1,
    },
    7: {
      id: 7,
      name: "USB-C Charger",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvlfHtgdUJVE6aQjyEFIJj5hFDb5cexoio2A&s",
      price: 19.99,
      stock: 20,
      quantity: 1,
    },
    8: {
      id: 8,
      name: "Wireless Earbuds",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ICZDLVJW8T8FPsYlIb-2r73Zj9qjXHbvcQ&s",
      price: 59.99,
      stock: 12,
      quantity: 1,
    },
    9: {
      id: 9,
      name: "4K Monitor",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQokRylRWz_pFs2zYGy4Bu8Ru0eC6lHguYqmg&s",
      price: 299.99,
      stock: 4,
      quantity: 1,
    },
    10: {
      id: 10,
      name: "External SSD",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXW6Qt9gn0V1faOUULy9A8A6e7NoIu68eFg&s",
      price: 89.99,
      stock: 9,
      quantity: 1,
    },
    11: {
      id: 11,
      name: "VR Headset",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMY-uAtMGDw5E2YTOubkeP8AJJZTpb-qtPA&s",
      price: 399.99,
      stock: 2,
      quantity: 1,
    },
    12: {
      id: 12,
      name: "Fitness Tracker",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXW6Qt9gn0V1faOUULy9A8A6e7NoIu68eFg&s",
      price: 49.99,
      stock: 14,
      quantity: 1,
    },
    13: {
      id: 13,
      name: "Smartphone",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvlfHtgdUJVE6aQjyEFIJj5hFDb5cexoio2A&s",
      price: 699.99,
      stock: 5,
      quantity: 1,
    },
    14: {
      id: 14,
      name: "Tablet",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sV0w9fkdT0sDvL19LFf9pShW9IbtZmU0gA&s",
      price: 499.99,
      stock: 7,
      quantity: 1,
    },
    15: {
      id: 15,
      name: "Wireless Router",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ICZDLVJW8T8FPsYlIb-2r73Zj9qjXHbvcQ&s",
      price: 109.99,
      stock: 10,
      quantity: 1,
    },
    16: {
      id: 16,
      name: "Smart TV",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMY-uAtMGDw5E2YTOubkeP8AJJZTpb-qtPA&s",
      price: 799.99,
      stock: 3,
      quantity: 1,
    },
  });
  const [cart, setCart] = useState({
    name:"",
    img:"",
    price:"",
  })
    const handle = (event) => {
    setCart((prev) => ({
        ...prev,
        name: event.name, 
        img: event.img,
        price: event.price,
      }));
      console.log(cart)
      localStorage.setItem("cart", cart);
  };

  return (
    <div>
      <h1>Shop All Products</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          padding: "10px",
          placeItems: "center",
        }}
      >
        {Object.entries(product).map(([index, value]) => (
        <div onClick={() => handle(value)}>
        <div className="box">
       <img src={value.img} alt="imge" />
       </div>
       <h5 style={{margin:"0px"}}>{value.name}</h5>
       <p style={{margin:"0px 0px 15px 0px"}}>{value.price}</p>
       </div>
      ))}
      </div>
    </div>
  );
};

export default Products;




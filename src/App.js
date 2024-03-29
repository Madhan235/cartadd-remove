import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import img from "./11rphone.webp";
import {Badge, Button,Card} from "react-bootstrap";
import { useState } from 'react';
 


function App() {
  const data = [
    {
      productImage:
        "https://www.apple.com/in/iphone/home/images/meta/iphone__ky2k6x5u6vue_og.png",
      productName: "Iphone 14promax",
      price: 100000,
      rating: 91,
    },
    {
      productImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3jAmZcKm3NQoK8tlikVJsPAfm3cAhr_IKelWibDsJj3vgZ5BCZuvssOPGjIbljbkWR68&usqp=CAU",
      productName: "Samsung Galaxy",
      price: 95000,
      rating: 90,
    },
    {
      productImage:
        "https://images.officeworks.com.au/api/2/img/https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/GPX7PR128H_A_google_pixel_7_pro_5g_unlocked_smartphone_128gb_hazel.jpg/resize?size=600&auth=MjA5OTcwODkwMg__",
      productName: "Google Pixel 7pro",
      price: 70000,
      rating: 80,
    },
    {
      productImage:
        img,
      productName: "Oneplus 11",
      price: 64000,
      rating: 50,
    },
  ]
  const [count,setCount]= useState(0);
  return (
    <div className="App">
      <a href="#"><h1 
      style={{
        color:"blue"                     
        }}
    >ShopIndia.in</h1></a>
      <div className='cart-value'>
        <Badge bg="danger">
Cart {count}
        </Badge>
      </div>
      <div className="card-container" >

     { data.map((product ,index)=>(
     
      <Product
      prod ={product}
      key= {index}
     count={count}
     setCount={setCount} 

      />
     ))}
      </div>

       </div>
  );
}

export default App;

function Product({prod,count,setCount}){
  const [show,setshow] = useState(false);
  
   

  function addToCart(){
    setCount(count+1);
    setshow(!show);

  }
  function removeFromCart(){
    setCount(count-1);
    setshow(!show);
     
  }
  return (
    <div className='card'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {prod.productImage} />
      <Card.Body>
        <Card.Title>{prod.productName}</Card.Title>
        <Card.Text>${prod.price}</Card.Text>
        <Card.Text>{prod.rating}❤️</Card.Text>

{!show ? 
        <Button variant="primary"
        onClick={addToCart}
        >Add to cart</Button>
:
<Button variant="danger"
        onClick={removeFromCart} 
        >Remove From cart</Button>
}
      </Card.Body>
    </Card>
    </div>
  )
}
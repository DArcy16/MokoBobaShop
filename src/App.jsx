import { useState, createContext, useEffect } from 'react'
import { v4 as uuid} from 'uuid'
import {Routes, Route } from 'react-router-dom'
import './App.css'
import Logo from './components/Logo';
import Menu from './pages/Menu';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Admin from './pages/Admin';
import OrderP from './pages/OrderP';

export const MenuContext = createContext();

const sampleProducts = [
{id: 1, name: 'Standard Milk Tea', price: '2500', category: 1},
{id: 2, name: 'Strawberry Milk Tea', price: '2500', category: 1},
{id: 3, name: 'Blueberry Milk Tea', price: '2500', category: 1},
{id: 4, name: 'Blueberry Milk Tea', price: '2500', category: 1},
{id: 5, name: 'Chocolate Smoothie', price: '3500', category: 2},
{id: 6, name: 'Matcha Smoothie', price: '3500', category: 2},
{id: 7, name: 'Strawberry Smoothie', price: '3500', category: 2},
{id: 8, name: 'Blueberry Smoothie', price: '3500', category: 2},
{id: 9, name: 'Sweet Melon Smoothie', price: '3500', category: 2},
{id: 10, name: 'Kiwi Smoothie', price: '3500', category: 2}
,
{id: 11, name: 'Chocolate Lava', price: '4000', category: 3}
,
{id: 12, name: 'Strawberry Lava', price: '4000', category: 3}
,
{id: 13, name: 'Blueberry Lava', price: '4000', category: 3}
,
{id: 14, name: 'Sweet Melon Lava', price: '4000', category: 3}
,
{id: 15, name: 'Kiwi Lava', price: '4000', category: 3},
{id: 16, name: 'Yogurt Sticky Rice', price: '3000', category: 4}
,
{id: 17, name: 'Strawberry Sticky Rice', price: '3000', category: 4}
,
{id: 18, name: 'Taro Sticky Rice', price: '3000', category: 4}
,
{id: 19, name: 'Strawberry Milkshake', price: '2500', category: 5}
,
{id: 20, name: 'Blueberry Milkshake', price: '2500', category: 5}
,
{id: 21, name: 'Sweet Melon Milkshake', price: '2500', category: 5}
,
{id: 22, name: 'Taro Milkshake', price: '2500', category: 5}
,
{id: 23, name: 'Banana Milkshake', price: '2500', category: 5}
,
{id: 24, name: 'Passion Fruit Soda', price: '3000', category: 6},
{id: 25, name: 'Kiwi Soda', price: '3000', category: 6},
{id: 26, name: 'Lemon Lime Soda', price: '3000', category: 6}
,
{id: 27, name: 'Grenadine Soda', price: '3000', category: 6}
,
{id: 28, name: 'Tropical Punch Soda', price: '3000', category: 6}
,
{id: 29, name: 'Mojito Mint Soda', price: '3000', category: 6}
,
{id: 30, name: 'Strawberry Soda', price: '3000', category: 6}
,
{id: 31, name: 'Blueberry Soda', price: '3000', category: 6}
,
{id: 32, name: 'Sweet Melon Soda', price: '3000', category: 6},
{id: 33, name: 'Mango Soda', price: '3000', category: 6},
{id: 34, name: 'Green Apple Soda', price: '3000', category: 6},
{id: 35, name: 'Grape Fruit Soda', price: '3000', category: 6},
{id: 36, name: 'Thai Tea', price: '3000', category: 7},
{id: 37, name: 'Matcha', price: '3000', category: 7},
{id: 38, name: 'Lemon Tea', price: '3000', category: 7} ,
{id: 39, name: 'Honey Lemon', price: '3000', category: 7},
]

const categories= [
{id: 1, name: 'BOBA Milk Tea'},
{id: 2, name: 'Smoothie'},
{id: 3, name: 'Lava'},
{id: 4, name: 'Surple Sticky Rice'},
{id: 5, name: 'Milkshake'},
{id: 6, name: 'Soda'},
{id: 7, name: 'Tea'}
]

const LOCAL_KEY = 'take.local.storage.data';

function App() {
  // cid = categoryId, productC = Categorized Product

//  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState(sampleProducts);
  const [productsC, setProductsC] = useState([]);
  const [cid, setCid] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const [isDeleting, setIsDeleting] =useState(false);
  const [newProduct, setNewProduct] = useState({
    id: uuid(),
    name: '',
    price: '',
    category: ''
  });   

  useEffect(() => {
    console.log(products)
    const productsJSON = localStorage.getItem(LOCAL_KEY);
    if  (productsJSON !== null) setProducts(JSON.parse(productsJSON));
    console.log(products)

  },[])
  
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/DArcy16/MokoBobaShop/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts([...products,...data])
        })
  },[])
  
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(products));

  }, [products])
  
  

  // useEffect(() => {
  //   fetch('http://localhost:3000/categories')
  //     .then((res) => res.json())
  //     .then((data) => setCategories(data))
  // }, [])
  // console.log(categories);

  function handleCategorizedProduct(e) {
    e.preventDefault();
    setCid(e.target.value);
    setProductsC(products.filter((product) => product.category === parseInt(e.target.value)))
  }

  function handleProductAdd() {
    setIsAdding(true);
    fetch('https://my-json-server.typicode.com/DArcy16/MokoBobaShop/products',{
      method: 'POST',
      body: JSON.stringify(newProduct),
      headers : { 'Content-Type': 'application/json'}
    })
    .then (() => setIsAdding(false))
    setProductsC([...productsC, newProduct])
    setNewProduct({
    id: uuid(),
    name: '',
    price: '',
    category: ''
  });
  }

  function handleProductOrder(id) {
    const productO = products.find(product => product.id === id);
    const product = {
      name : productO.name,
      price : productO.price,
      category : productO.category
    }
    setIsOrdering(true);
    fetch('https://my-json-server.typicode.com/DArcy16/MokoBobaShop/order',{
      method: 'POST',
      body: JSON.stringify(product),
      headers: {'Content-Type': 'application/json'}
    })
    .then (() => setIsOrdering(false) )
  }


  function handleProductDelete(id) {
    if(!id <= 39) {
      setIsDeleting(true);
      fetch('https://my-json-server.typicode.com/DArcy16/MokoBobaShop/products/' + id,{
      method: 'DELETE',
    })
    .then (() => setIsDeleting(false));
    }
    
    setProducts(products.filter((item => item.id !== id)));
    setProductsC(productsC.filter(item => item.id !== id));
    // console.log(products);
  }

  
  
  


  const menuContextValue = {  
    handleProductAdd,
    handleCategorizedProduct,
    handleProductDelete,
    handleProductOrder
  }

  return (
    <MenuContext.Provider value={menuContextValue}>
      <main data-theme='retro' className='w-full md:w-5/6 h-full mx-auto box-border'>
      

        
          {/* logo */}
          <Logo />
          {/* Tab */}
          
          {/* <Tab />
          <hr /> */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu 
          isOrdering = {isOrdering}
          categories = {categories}
          productsC={productsC}
          cid = {cid}
          />} />
          <Route path='/aboutus' element={<AboutUs />} /> 
          <Route path='/admin' element={<Admin 
          isAdding = {isAdding}
          isDeleting = {isDeleting}
          categories={categories}
          productsC={productsC}
          cid = {cid}
          newProduct = {newProduct}
          setNewProduct = {setNewProduct}
          />} />
          {/* orderp= productOrder */}
          <Route path='/orderp' element={<OrderP />} /> 
        </Routes>
        
          
      </main>
    </MenuContext.Provider>
    
  )
}

export default App

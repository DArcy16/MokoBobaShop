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

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsC, setProductsC] = useState();
  const [cid, setCid] = useState('');
  const [newProduct, setNewProduct] = useState({
    id: uuid(),
    name: '',
    price: '',
    category: ''
  });   
  

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  },[products])

  useEffect(() => {
    fetch('http://localhost:3000/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
  }, [])


  function handleProductAdd() {
    console.log(newProduct);
    fetch('http://localhost:3000/products',{
      method: 'POST',
      body: JSON.stringify(newProduct),
      headers : { 'Content-Type': 'application/json'}
    })
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
    fetch('http://localhost:3000/order',{
      method: 'POST',
      body: JSON.stringify(product),
      headers: {'Content-Type': 'application/json'}
    })
    
  }


  function handleProductDelete(id) {
    fetch('http://localhost:3000/products/' + id,{
      method: 'DELETE'
    })
  }

  function handleCategorizedProduct(e) {
    e.preventDefault();
    setCid(e.target.value);
    setProductsC(products.filter((product) => product.category === parseInt(e.target.value)))
  }
  
  


  const menuContextValue = {  
    handleProductAdd,
    handleCategorizedProduct,
    handleProductDelete,
    handleProductOrder
  }

  return (
    <MenuContext.Provider value={menuContextValue}>
      <main className='w-full md:w-5/6 h-full bg-base-300 mx-auto box-border'>
      

        
          {/* logo */}
          <Logo />
          {/* Tab */}
          
          {/* <Tab />
          <hr /> */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu 
          categories = {categories}
          productsC={productsC}
          cid = {cid}
          />} />
          <Route path='/aboutus' element={<AboutUs />} /> 
          <Route path='/admin' element={<Admin 
          categories={categories}
          productsC={productsC}
          cid = {cid}
          newProduct = {newProduct}
          setNewProduct = {setNewProduct}
          />} />
          <Route path='/orderp' element={<OrderP />} />
        </Routes>
          
          
      </main>
    </MenuContext.Provider>
    
  )
}

export default App

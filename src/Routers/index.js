import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../Pages/Layouts/LayoutMain'
import LayoutAdmin from '../Pages/Layouts/LayoutAdmin'
//Admin
import Dashboard from '../Pages/Views/Admin/Dashbroad'
import ProductsManager from '../Pages/Views/Admin/Products'
import Category from '../Pages/Views/Admin/Category'
import AddCate from '../Pages/Views/Admin/AddCate'

//Views
import Detailproduct from '../Pages/Views/Main/Detailproduct'
import About from '../Pages/Views/Main/About'
import Cart from '../Pages/Views/Main/Cart'
import Home from '../Pages/Views/Main/Home'
import EditProduct from '../Pages/Views/Admin/EditproductForm';
import AddProduct from '../Pages/Views/Admin/AddproductForm';
import Contact from '../Pages/Views/Main/Contact';


const Routers = ({ products, onRemove, onAdd, onUpdate }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleUpdate = (id, product) => {
        onUpdate(id, product)
    }
    return (
        <Router>
            <Switch>
                <Route path='/admin/:path?/:path?' exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products' render={(props) =>
                                <ProductsManager/>
                            }>
                            </Route>
                            <Route path='/admin/product/add'
                                render={(props) =>
                                    <AddProduct {...props} onAdd={onAdd} />}></Route>
                            <Route path='/admin/product/:id'
                                render={(props) =>
                                    <EditProduct {...props} products={products} onUpdate={onHandleUpdate} />
                                }
                            >
                            </Route>
                            <Router path='/admin/category'>
                                <Category></Category>
                            </Router>
                            <Route path='/admin/category/add'
                                render={(props) =>
                                    <AddCate  />}></Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path='/' exact>
                                <Home  products={products}/>
                            </Route>
                            <Route path='/about'>
                                <About />
                            </Route>
                            <Route path='/contact'>
                                <Contact/>
                            </Route>
                            <Route path='/cart/:id'>
                                <Cart/>
                            </Route>
                            <Route path='/detail/:id'component={Detailproduct}/>
                              
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
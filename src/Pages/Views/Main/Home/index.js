// import React from 'react'

// const index = () => {

//   return (
//     <div>
//       <div className="row text-center">
//                   {/* {product.map(({ id,name, image, price }) => ( */}
//                     <div className="col-lg-3 col-md-6 mb-4">
//                       <div className="card h-100">
//                         {/* <img className="card-img-top" src={image} alt /> */}
//                         <div className="card-body">
//                           {/* <h4 className="card-title">{name}</h4>
//                           <h6 className="card-text" >{price}$</h6> */}
//                         </div>
//                         <div className="card-footer">
//                           {/* <Link to={`/cart/${id}`} className="btn btn-primary"><i className="fa fa-shopping-cart"/> Add to cart</Link> */}
//                           {/* <Link to={`/detail/${id}`} className="btn btn-primary"> <i className="fa fa-heart"/>Detail</Link> */}
//                         </div>
//                       </div>
//                     </div>))
            
//                 </div>
//     </div>
//   )
// }

// index.propTypes = {

// }

// export default index
import React, {useState,useEffect} from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from "axios" 

const Home = () => {
const [product, setProduct] = useState([]);

useEffect(() => {
    load();
}, [])
    const load = async ()=> {
        const result = await axios.get("http://localhost:2500/products");
       setProduct(result.data);
    }
   
    
    return (
      <div>
             <div className="row text-center">
                       {product.map(({ id,name, image, price }) => (
                          <div className="col-lg-3 col-md-6 mb-4">
                         <div className="card h-100">
                             <img className="card-img-top" src={image} alt />
                           <div className="card-body">
                             <h4 className="card-title">{name}</h4> 
                               <h6 className="card-text" >{price}$</h6> 
                             </div>
                              <div className="card-footer">
                               <Link to={`/cart/${id}`} className="btn btn-primary"><i className="fa fa-shopping-cart"/> Add to cart</Link> 
                          <Link to={`/detail/${id}`} className="btn btn-primary"> <i className="fa fa-heart"/>Detail</Link>
                          </div>
                             </div>
                         </div>))}
                  
                </div>
         </div>
        
           )
}

Home.propTypes = {
    products: PropTypes.array,
    onRemove: PropTypes.func
}

export default Home

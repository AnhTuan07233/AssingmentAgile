import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Detail = () => {

    const { id } = useParams();

    const [product, setProduct] = useState({
        id: "",
        name: "",
        image: "",
        price: "",
        desc: ""
    });

    
    const { name,image,price,desc } = product;
  

    useEffect(() => {
        loadProduct()
    }, []);
    const loadProduct = async () => {
        const result = await axios.get(`http://localhost:2500/products/${id}`);
        setProduct(result.data);
    };

    return (
   
<div >
  <br /> 
  <hr />
  <div className="card">
    <div className="row">
      <aside className="col-sm-6 border-right">
        <article className="gallery-wrap"> 
          <div className="img-big-wrap">
            <div> <a href="#"><img src={image}/></a></div>
          </div> {/* slider-product.// */}
        </article> {/* gallery-wrap .end// */}
      </aside>
      <aside className="col-sm-7">
        <article className="card-body p-5">
                    <h3 className="title mb-3">{name}</h3>
          <p className="price-detail-wrap"> 
            <span className="price h3 text-warning"> 
                    <span className="currency">US $</span><span className="num">{price}</span>
            </span> 
          </p> {/* price-detail-wrap .// */}
          <dl className="item-property">
            <dt>Description</dt>
                    <dd><p>{desc}</p></dd>
          </dl>
         
          
          <hr />
          <div className="row">
            <div className="col-sm-5">

            </div> {/* col.// */}
          </div> {/* row.// */}
          <hr />
          <Link to={`/cart/${id}`} className="btn btn-lg btn-outline-primary text-uppercase"><i className="fa fa-shopping-cart"/> Add to cart</Link> 
         
        </article> {/* card-body.// */}
      </aside> {/* col.// */}
    </div> {/* row.// */}
  </div> {/* card.// */}
</div>

       
    )
}

Detail.propTypes = {

}

export default Detail

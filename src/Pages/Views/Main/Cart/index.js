import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


const View = () => {
    const { id } = useParams();
    const loadProduct = async () => {
        const result = await axios.get(`http://localhost:2500/products/${id}`);
        setProduct(result.data)
    };
    const [product, setProduct] = useState({
        id: "",
        name: "",
        image: "",
        price: "",
        desc: ""
    });
    const { name,image,price} = product;
    useEffect(() => {
        loadProduct();
    }, []);

    

    return (
        <div id="all">
            <div id="content">
                <div className="container">
                    <div className="row">
                        <div id="basket" className="col-lg-9">
                            <div className="box">
                                <form method="post">
                                    <h1>Your Cart</h1>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                   
                                                    <th>Name</th>
                                                    <th>Image</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                    <th colSpan={2}>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                  
                                                    <td>{name}</td>
                                                    <td><img src={image} width="200" height="100    " /></td>
                                                    <td>
                                                        <input type="number" defaultValue="1"></input>
                                                    </td>
                                                    <td>{price}$</td>
                                                    <td></td>
                                                  
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th colSpan={5}>Total</th>
                                
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div className="box-footer d-flex justify-content-between flex-column flex-lg-row">
                                        <div className="left"><Link to={'/'} className="btn btn-primary">Continue shopping</Link></div>
                                       
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View



import React, {useState,useEffect} from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from "axios" 

const ProductsManager = () => {
const [product, setProduct] = useState([]);

useEffect(() => {
    load();
}, [])
    const load = async ()=> {
        const result = await axios.get("http://localhost:2500/products");
       setProduct(result.data);
    }
    const removeHandle = async (id) => {
        if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này ?'))   //eslint-disable-line
        await axios.delete(`http://localhost:2500/products/${id}`)
        swal("Bạn đã xóa 1 sản phẩm!", "Bạn vừa chọn nút xóa!", "success");
      load();
    }
    const removeAll = async () => {
        if (confirm('Bạn có chắc chắn muốn xóa toàn bộ sản phẩm ?'))   //eslint-disable-line
        await axios.delete("http://localhost:2500/products")
        swal("Bạn đã xóa toàn bộ sản phẩm!", "Bạn vừa chọn nút xóa!", "success");
      load();
    }
    
    return (
            <div class="container-fluid">
               
                <h1 class="mt-4">Tables</h1>
                <Link to="/admin/product/add" className="btn btn-primary mt-4 mr-4">Thêm sản phẩm</Link>
                
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                {/* <tfoot>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </tfoot> */}
                                <tbody>
                                   
                                        {product.map(({ id, name, image, price }, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                        <td>{name}</td>
                                                <td><img src={image} height="70px"></img></td>
                                                <td>{price}</td>
                                                <td>
                                                    <Link className="btn btn-outline-primary mr-2" to={`/admin/product/${id}`}>Sửa</Link>
                                                    <button className="btn btn-outline-danger" onClick={() => removeHandle(id)}>Xóa</button>
                                                </td>
                                            </tr>
                                        ))
                                        }
                                 
                               
                                </tbody>
                                <button className="btn btn-primary mt-4" onClick={()=>removeAll()}>Remove ALL</button>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

ProductsManager.propTypes = {
    products: PropTypes.array,
    onRemove: PropTypes.func
}

export default ProductsManager
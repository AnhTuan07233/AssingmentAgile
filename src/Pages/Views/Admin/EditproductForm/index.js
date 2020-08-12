// import React, { useState,useEffect } from 'react'
// import PropTypes from 'prop-types';
// import { useParams, useHistory } from 'react-router-dom';
// import swal from 'sweetalert';
// import axios from 'axios'
// // const EditProduct = ({ products, onUpdate }) => {
//     const EditProduct =()=>{
//     // let { id } = useParams();
//     // let history = useHistory();
//     // const product = products.find(product => product.id === id);

//     // const [currentProduct, setCurrentProduct] = useState(product);

//     // const onHandleSubmit = (e) => {
//     //     e.preventDefault();
//     //     onUpdate(currentProduct);
//     //     swal("Update sản phẩm", "Update success!", "success");
//     //     history.push('/admin/products');
//     // }
//     // const onHandleChange = e => {
//     //     const { name, value } = e.target;
        
//     //     setCurrentProduct({
          
//     //         ...currentProduct,
//     //         [name]: value
            
//     //     })
//     let { id } = useParams();
//      let history = useHistory();
//      const [product,setProduct] = useState({
//         name: "",
//         image:"",
//         price:"",
//     });
//     const{name,image,price} = product;
//     }
//     useEffect (() =>{
//         loadProduct();
//     },[]);
//     const onInputChange = e =>{
//         setProduct({...product, [e.target.image]:e.target.value})
//     }
//     const onSubmit = async e =>{
//         e.preventDefault(); //chặn sự kiện submit
//         await axios.put("http://localhost:2500/products",product)
//         history.push("/admin/products");
//     }
//     const loadProduct = async () =>{
//         const result = await axios.get(`http://localhost:2500/products/${id}`);
//         setProduct(result.data);
//     }

//     return (
//         <div>
//             {/* <form action="" onSubmit={onHandleSubmit} className="w-50">
//                 <div className="form-group">
//                     <label htmlFor="productName">Tên sản phẩm</label>
//                     <input type="text" name="name" value={currentProduct.name} onChange={onHandleChange} className="form-control" />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="productName">Giá sản phẩm</label>
//                     <input type="text" name="price" value={currentProduct.price} onChange={onHandleChange} className="form-control" />
//                 </div>
//                 <button className="btn btn-primary" >Cập nhật</button>
//             </form> */}
//             <form onSubmit={e => onSubmit(e)} className="w-50" >
//                 <div className="form-group">
//                     <label htmlFor="productName">Tên sản phẩm</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={name}
//                         onChange={e => onInputChange(e)}
                        
//                         className="form-control"
//                         id="productName"
//                         ref={register({ required: true })}
//                         aria-describedby="nameHelp"
//                     />
//                     <small id="nameHelp" className="form-text text-danger">
//                         {errors.name && errors.name.type === "required" && <span>Bạn chưa nhập tên</span>}
//                     </small>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="productPrice">Ảnh sản phẩm</label>
//                     <input
//                         type="text"
//                         name="image"
//                         value={image}
//                         onChange={e => onInputChange(e)}
//                         className="form-control"
//                         id="productPrice"
//                         ref={register({ required: true })}
//                         aria-describedby="priceHelp"
//                     />
//                     <small id="priceHelp" className="form-text text-danger">{errors.image && <span>Bạn chưa nhập ảnh ảnh</span>}</small>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="productPrice">Giá sản phẩm</label>
//                     <input
//                         type="text"
//                         name="price"
//                         value={price}
//                         onChange={e => onInputChange(e)}
//                         className="form-control"
//                         id="productPrice"
//                         ref={register({ required: true })}
//                         aria-describedby="priceHelp"
//                     />
//                     <small id="priceHelp" className="form-text text-danger">{errors.price && <span>Bạn chưa nhập giá</span>}</small>
//                 </div>
//                 <button type="submit" className="btn btn-primary" >Thêm sản phẩm</button>
//             </form>

//         </div>
//     )

// EditProduct.propTypes = {
//     products: PropTypes.array
// }

// export default EditProduct
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import {Editor} from '@tinymce/tinymce-react'
import firebase from "../../../../Firebase";

const UpdateProduct = () => {

    let history = useHistory();

    const { id } = useParams();

    const [product, setProduct] = useState({
        id: "",
        name: "",
        image: "",
        price: "",
        desc: ""
    });

    
    const { name,image,price,desc } = product;
    const onInputChange = e => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadProduct()
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:2500/products/${id}`, product);
        swal("Updated successfully!","","success");
        history.push('/admin/products');
    };

    const loadProduct = async () => {
        const result = await axios.get(`http://localhost:2500/products/${id}`);
        setProduct(result.data);
    };

    return (
        <div>
            <div className="card card-body my-3">
                <form onSubmit={e => onSubmit(e)}>
                    <h3 className="m-0 font-weight-bold text-primary">Sửa sản phẩm</h3>
                    <br></br>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Name"
                            name="name"
                            required
                            onChange={e => onInputChange(e)}
                            value={name} aria-describedby="nameHelp" />
                            
                    </div>
                   
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Image"
                            name="image"
                            required
                            onChange={e => onInputChange(e)}
                            value={image} aria-describedby="priceHelp"
                        />
                    </div>
                    
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Price"
                            name="price"
                            required
                            onChange={e => onInputChange(e)}
                            value={price} aria-describedby="priceHelp"
                        />
                    </div>
                    <div className="form-group">
                     <label htmlFor="productDescription">Mô tả chi tiết sản phẩm</label>
                     <Editor
                      name="desc"
                      onChange={e => onInputChange(e)}
                         value={desc} aria-describedby="priceHelp"
                         required
                        init={{
                            
                            height: 300,
                            images_upload_url: 'postAcceptor.php',
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor |  image link\
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help',

                        }}
                        
                    />
                </div>
                    <button type="submit" className="btn btn-primary mt-3">Lưu</button>
                </form>
            </div>
        </div>
    )
}

UpdateProduct.propTypes = {

}

export default UpdateProduct

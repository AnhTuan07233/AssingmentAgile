// import React, { useState } from 'react'
// import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import swal from 'sweetalert';
// import firebase from "../../../../Firebase";
// import {Editor} from '@tinymce/tinymce-react'


// const AddProduct = ({ onAdd }) => {
//     const { register, handleSubmit, errors } = useForm();
//     let history = useHistory();

//     const [desc, setDesc] = useState("");

//     const onHandleSubmit = (data) => {
//         let file = data.image[0];
//         // tạo reference chứa ảnh trên firesbase
//         let storageRef = firebase.storage().ref(`images/${file.name}`);
//         // đẩy ảnh lên đường dẫn trên
//         storageRef.put(file).then(function () {
//             storageRef.getDownloadURL().then((url) => {
//                 console.log(url);
//                 // Tạo object mới chứa toàn bộ thông tin từ input
//                 const newData = {
//                     id: Math.random().toString(36).substr(2, 9),
//                     ...data,
//                     desc,
//                     image: url
//                 }
//                 console.log(newData);
//                 // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
//                 onAdd(newData)
//             })
//         });
//     }
//     const handleEditorChange = (content, editor) => {
//         setDesc(content);
//         swal("Bạn vừa thêm 1 sản phẩm!", "Thêm mới sản phẩm", "success");
//     }
//     return (
//         <div>
//             <form className="w-50" onSubmit={handleSubmit(onHandleSubmit)}>
//                 <div className="form-group">
//                     <label htmlFor="productName">Tên sản phẩm</label>
//                     <input
//                         type="text"
//                         name="name"
//                         className="form-control"
//                         id="productName"
//                         aria-describedby="nameHelp"
//                         ref={register}
//                     />
//                     {errors.name && errors.name.type === "required" && <span>Không để trống</span>}
//                     {errors.name && errors.name.type === "minLength" && <span>Bạn phải nhập ít nhất 5 ký tự</span>}
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="productPrice">Ảnh sản phẩm</label>
//                     <div className="input-group">
//                         <div className="custom-file">
//                             <input type="file"
//                                 className="custom-file-input"
//                                 id="inputGroupFile02"
//                                 name="image"
//                                 ref={register}
//                             />
//                             <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="productPrice">Giá sản phẩm</label>
//                     <input
//                         type="text"
//                         name="price"
//                         className="form-control"
//                         id="productPrice"
//                         aria-describedby="priceHelp"
//                         ref={register}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="productDescription">Mô tả chi tiết sản phẩm</label>
//                     <Editor
//                         init={{
//                             height: 500,
//                             images_upload_url: 'postAcceptor.php',
//                             plugins: [
//                                 'advlist autolink lists link image charmap print preview anchor',
//                                 'searchreplace visualblocks code fullscreen',
//                                 'insertdatetime media table paste code help wordcount'
//                             ],
//                             toolbar:
//                                 'undo redo | formatselect | bold italic backcolor |  image link\
//                                 alignleft aligncenter alignright alignjustify | \
//                                 bullist numlist outdent indent | removeformat | help',

//                         }}
//                         onEditorChange={handleEditorChange}
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Thêm sản phẩm</button>
//             </form>
//         </div >
//     )
// }

// AddProduct.propTypes = {
//     onAdd: PropTypes.func
// }

// export default AddProduct


// const index = props => {
//     const { register, handleSubmit, errors } = useForm();
//     let history = useHistory();
//     const [desc, setDesc] = useState("");
//     return (
//         <div>
//             <form className="w-50" >
//                 <div className="form-group">
//                     <label htmlFor="productName">Tên sản phẩm</label>
//                     <input
//                         type="text"
//                         name="name"
//                         className="form-control"
//                         id="productName"
//                         aria-describedby="nameHelp"
//                         ref={register}
//                     />
//                     {errors.name && errors.name.type === "required" && <span>Không để trống</span>}
//                     {errors.name && errors.name.type === "minLength" && <span>Bạn phải nhập ít nhất 5 ký tự</span>}
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="productPrice">Ảnh sản phẩm</label>
//                     <div className="input-group">
//                         <div className="custom-file">
//                             <input type="file"
//                                 className="custom-file-input"
//                                 id="inputGroupFile02"
//                                 name="image"
//                                 ref={register}
//                             />
//                             <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="productPrice">Giá sản phẩm</label>
//                     <input
//                         type="text"
//                         name="price"
//                         className="form-control"
//                         id="productPrice"
//                         aria-describedby="priceHelp"
//                         ref={register}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="productDescription">Mô tả chi tiết sản phẩm</label>
//                     <Editor
//                         init={{
//                             height: 500,
//                             images_upload_url: 'postAcceptor.php',
//                             plugins: [
//                                 'advlist autolink lists link image charmap print preview anchor',
//                                 'searchreplace visualblocks code fullscreen',
//                                 'insertdatetime media table paste code help wordcount'
//                             ],
//                             toolbar:
//                                 'undo redo | formatselect | bold italic backcolor |  image link\
//                                 alignleft aligncenter alignright alignjustify | \
//                                 bullist numlist outdent indent | removeformat | help',

//                         }}
                        
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Thêm sản phẩm</button>
//             </form>
//         </div >
//     )
// }

// index.propTypes = {

// }

// export default index
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import { useForm } from 'react-hook-form';
import {Editor} from '@tinymce/tinymce-react'

const AddProduct = () => {

    const { register, handleSubmit, errors } = useForm();

    let history = useHistory();

    const [product, setProduct] = useState({
        id: "",
        name: "",
        image: "",
        price: "",
        desc:""
    });

    const { name, image, price, desc } = product;

    const onInputChange = e => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:2500/products", product);
        swal("Thêm thành công 1 sản phẩm mới !", "", "success");
        history.push('/admin/products');
    };

    return (
        <div>
            <div className="card card-body my-3">
                <form onSubmit= { e => onSubmit(e)} >
                    <h6 className="m-0 font-weight-bold text-primary">Thêm mới sản phẩm</h6>
                    <br></br>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Name"
                            name="name"
                            onChange={e => onInputChange(e)}
                            value={name}
                            aria-describedby="nameHelp"
                           
                            required
                        />
                    </div>
                    
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Image"
                            name="image"
                            onChange={e => onInputChange(e)}
                            value={image}
                            aria-describedby="imageHelp"
                           
                            required
                        />
                    </div>
                    
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Price"
                            name="price"
                            onChange={e => onInputChange(e)}
                            value={price}
                            aria-describedby="priceHelp"
                        />
                    </div>
                    <div className="form-group">
                     <label htmlFor="productDescription">Mô tả chi tiết sản phẩm</label>
                     <Editor
                      name="desc"
                      onChange={e => onInputChange(e)}
                        value={desc}
                        required
                        init={{
                            height: 500,
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
                    <button type="submit" className="btn btn-primary mt-3">Add</button>
                </form>
            </div>
        </div>
    )
}

AddProduct.propTypes = {
    AddProduct: PropTypes.func

}

export default AddProduct
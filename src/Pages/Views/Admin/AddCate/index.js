import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

const AddProduct = () => {

   

    let history = useHistory();

    const [category, setCategory] = useState({
        id_ct: "",
        name_ct: "",
        img: "",

    });

    const { id_ct, name_ct,img } = category;

    const onInputChange = e => {
        setCategory({ ...category, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:2500/category", category);
        swal("Thêm thành công 1 sản phẩm mới !", "", "success");
        history.push('/admin/category');
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
                            value={id_ct}
                            aria-describedby="nameHelp"
                           
                            required
                        />
                    </div>
                    
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Image"
                            name="Name"
                            onChange={e => onInputChange(e)}
                            value={name_ct}
                            aria-describedby="imageHelp"
                           
                            required
                        />
                    </div>
                    
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="Price"
                            name="Image"
                            onChange={e => onInputChange(e)}
                            value={img}
                            aria-describedby="priceHelp"
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
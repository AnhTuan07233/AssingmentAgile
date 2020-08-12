// import React, {useState,useEffect} from 'react'
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import swal from 'sweetalert';
// import axios from "axios" 

// const index = props => {
// const [category, setCategory] = useState([]);

// useEffect(() => {
//     load();
// }, [])
//     const load = async ()=> {
//         const result = await axios.get("http://localhost:2500/category");
//         setCategory(result.data);
//     }
//     const removeHandle = async (id) => {
//         if (confirm('Bạn có chắc chắn muốn xóa thể loại này ?'))   //eslint-disable-line
//         await axios.delete(`http://localhost:2500/category/${id_ct}`)
//         swal("Bạn đã xóa 1 thể loại!", "Bạn vừa chọn nút xóa!", "success");
//       load();
//     }
//     return (
//         <div>
//             <div class="container-fluid">
               
//                <h1 class="mt-4">Tables</h1>
//                <Link to="/admin/product/add" className="btn btn-primary mt-4">Thêm thể loại</Link>
//                <div class="card mb-4">
//                    <div class="card-body">
//                        <div class="table-responsive">
//                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
//                                <thead>
//                                    <tr>
//                                        <th>#</th>
//                                        <th>name</th>
//                                        <th>Id</th>
//                                        <th>Image</th>
//                                        <th>Action</th>
//                                    </tr>
//                                </thead>
//                                <tfoot>
//                                    <tr>
//                                        <th>#</th>
//                                        <th>name</th>
//                                        <th>Id</th>
//                                        <th>Image</th>
//                                        <th>Action</th>
//                                    </tr>
//                                </tfoot>
//                                <tbody>
                                  
//                                        {category.map(({ id_ct, name_ct, img }, index) => (
//                                            <tr key={index}>
//                                                <td>{index + 1}</td>
//                                        <td>{name_ct}</td>
//                                                <td><img src={img} height="70px"></img></td>
//                                                <td>{id_ct}</td>
//                                                <td>
//                                                    <Link className="btn btn-outline-primary mr-2" to={`/admin/category/${id_ct}`}>Sửa</Link>
//                                                    <button className="btn btn-outline-danger" onClick={() => removeHandle(id_ct)}>Xóa</button>
//                                                </td>
//                                            </tr>
//                                        ))
//                                        }
                                

//                                </tbody>
//                            </table>
//                        </div>
//                    </div>
//                </div>
//            </div>
//         </div>
//     )
// }

// index.propTypes = {
//     onRemove: PropTypes.func
// }

// export default index
import React, {useState,useEffect} from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from "axios" 

const Category = () => {
const [category, setCategory] = useState([]);

useEffect(() => {
    load();
}, [])
    const load = async (category)=> {
        const result = await axios.get("http://localhost:2500/category");
        setCategory(result.data);
    }
    const removeHandle = async (id_ct) => {
        if (confirm('Bạn có chắc chắn muốn xóa thể loại này ?'))   //eslint-disable-line
        await axios.delete(`http://localhost:2500/category/${id_ct}`)
        swal("Bạn đã xóa 1 thể loại!", "Bạn vừa chọn nút xóa!", "success");
      load();
    }
    
    return (
            <div class="container-fluid">
               
                <h1 class="mt-4">Thể loại :</h1>
                <Link to="/admin/category/add" className="btn btn-primary mt-4">Thêm thể loại</Link>
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                       
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>#</th>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                   
                                        {category.map(({ id_ct, name_ct, img }, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{id_ct}</td>
                                        <td>{name_ct}</td>
                                                <td><img src={img} height="70px"></img></td>
                                             
                                                <td>
                                                    <Link className="btn btn-outline-primary mr-2" to={`/admin/category/${id_ct}`}>Sửa</Link>
                                                    <button className="btn btn-outline-danger" onClick={() => removeHandle(id_ct)}>Xóa</button>
                                                </td>
                                            </tr>
                                        ))
                                        }
                                 

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

Category.propTypes = {
    products: PropTypes.array,
    onRemove: PropTypes.func
}

export default Category

import React, {useState,useEffect} from 'react'
import PropTypes from 'prop-types';

import axios from "axios" 
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        load();
    }, [])
        const load = async ()=> {
            const result = await axios.get("http://localhost:2500/products");
           setProduct(result.data);
        }


        const [category, setCategory] = useState([]);

useEffect(() => {
    load1();
}, [])
    const load1 = async ()=> {
        const result = await axios.get("http://localhost:2500/category");
        setCategory(result.data);
    }
    return (
        <div>
             <h1 class="mt-4">Dashboard</h1>
            <div className="row" >
                <div className="col-xl-6 col-md-2">
                    <div className="card bg-danger text-white mb-4">
                    <a class="nav-link" href="/admin/products">
                                <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                Products
                            </a>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <p>{product.length}</p>
                           
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-md-6">
                    <div className="card bg-warning text-white mb-4">
                    <a class="nav-link" href="/admin/category">
                                <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                Category
                            </a>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <p>{category.length}</p>
                          
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="row">
                <div className="col-xl-6">
                    <div className="card mb-4">
                        <div className="card-header">
                            <i className="fas fa-chart-area mr-1" />
        Area Chart Example
      </div>
                        <div className="card-body"><canvas id="myAreaChart" width="100%" height={40} /></div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="card mb-4">
                        <div className="card-header">
                            <i className="fas fa-chart-bar mr-1" />
        Bar Chart Example
      </div>
                        <div className="card-body"><canvas id="myBarChart" width="100%" height={40} /></div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Dashboard
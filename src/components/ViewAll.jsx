import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changedata] = useState([])
    const fetchData=()=>{
      axios.get("https://jsonplaceholder.typicode.com/albums").then(
        (response)=>{
          changedata(response.data)
        }
      ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar /><br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">userid</th>
                                            <th scope="col">id</th>
                                            <th scope="col">title</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(
                                            (value,index)=>{
                                                return <tr>
                                                <td scope="row">{value.userId}</td>
                                                <td>{value.id}</td>
                                                <td>{value.title}</td>
                                            </tr>
                                            }
                                        )}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./LeftNav.css"




const LeftNav = () => {
    const [categories,setCategories]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        .catch(error=>console.error(error))
    },[])

    return (
        <div>
            <h2>All Category</h2>

            <div>
                    {
                        categories.map(category=> <p key={category.id}>
                            <Link to={`/category/${category.id}`} className='category-text'>{category.name}</Link>
                        </p>)
                    }
            </div>
        </div>
    );
};

export default LeftNav;
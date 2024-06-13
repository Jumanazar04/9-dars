import React from 'react';
import ProductsTable from './ProductsTable';
import CraeteProduct from './CraeteProduct';




//     {
//       key: '1',
//       name: 'John Brown',
//       age: 32,
//       address: 'New York No. 1 Lake Park',
//     },
//   ];


const ProductsPage = () => {
    
    return (
        <div>
            <CraeteProduct />
           <ProductsTable />
        </div>
    );
};



export default ProductsPage;

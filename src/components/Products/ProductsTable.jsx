import { Table } from 'antd';
import React from 'react';
import UseGetProducts from '../hooks/useGetProducts';

const columns = [
    {
        title: "Image",
        dataIndex: "image",
        render: (imgUrl) => {
          return <img src={imgUrl} alt={imgUrl} width={100} />;
        },
    },
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Subtitle',
      dataIndex: 'subtitle',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
];

function ProductsTable () {

    const products = UseGetProducts()

    return (
        <div>
            <Table columns={columns} dataSource={products} size="middle" />
        </div>
    );
}

export default ProductsTable;

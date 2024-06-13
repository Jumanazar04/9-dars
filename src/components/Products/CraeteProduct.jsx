import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import ProductForm from './ProductForm';

const CraeteProduct = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const handleCreate = (prodForm) => {
        console.log(prodForm);
    }
    return (
        <div>
            <Button onClick={showModal} type='primary'>
                Create
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <ProductForm onSubmit={handleCreate}/>
            </Modal>
        </div>
    );
}

export default CraeteProduct;

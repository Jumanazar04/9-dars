import React, { useEffect, useState } from 'react';
import { Flex, InputNumber, Modal, Typography, Form, Input, Table, Breadcrumb } from 'antd';
import axios from 'axios';
import FormItem from 'antd/es/form/FormItem';

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <FormItem
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[{ required: true, message: `Please Input ${title}!` }]}
        >
          {inputNode}
        </FormItem>
      ) : (
        children
      )}
    </td>
  );
};

const items = [
  {
    title: 'Home',
    href: '/',  // Optional: you can also add a link if needed
  },
  {
    title: 'List',
    href: '/list',
  },
  {
    title: 'App',
  },
];

const Categories = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get("https://ecommerce-backend-fawn-eight.vercel.app/api/categories");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://ecommerce-backend-fawn-eight.vercel.app/api/categories/${id}`);
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const showModal = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
    try {
      const response = await axios.put(
        `https://ecommerce-backend-fawn-eight.vercel.app/api/categories/${selectedCategory._id}`,
        {
          name: selectedCategory.name,
          image: selectedCategory.image,
        }
      );
      setData(data.map((item) => (item._id === selectedCategory._id ? response.data : item)));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setSelectedCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value,
    }));
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      width: "25%",
      editable: false,
      render: (imgUrl) => {
        return <img src={imgUrl} alt={imgUrl} width={100} />;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "25%",
      editable: true,
    },
    {
      title: "Edit",
      dataIndex: 'editOperation',
      render: (_, record) => {
        return (
          <Typography.Link onClick={() => showModal(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
    {
      title: "Delete",
      dataIndex: "deleteOperation",
      render: (_, record) => {
        return (
          <Typography.Link onClick={() => handleDelete(record._id)}>
            Delete
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: true,
      }),
    };
  });

  <Breadcrumb.Item items={items}/> 

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        rowKey="_id"
      />
      <Modal
        title="Edit Category"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form>
          <Flex gap="middle" vertical>
            <div>
              <Input
                placeholder="name"
                value={selectedCategory?.name}
                onChange={handleCategoryChange}
                name="name"
              />
            </div>
            <div>
              <Input
                placeholder="image"
                value={selectedCategory?.image}
                onChange={handleCategoryChange}
                name="image"
              />
            </div>
          </Flex>
        </form>
      </Modal>
    </Form>
  );
};

export default Categories;

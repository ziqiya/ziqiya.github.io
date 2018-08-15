import React from 'react';
import { Table } from 'antd';
export default ({
    loading,
    data,
    columns,
    scroll,
    rowSelection
})=>(
    <Table
        loading={loading}
        dataSource={data}
        columns={columns}
        pagination={{ position: 'none' }}
        size="small"
        scroll={scroll}
        rowSelection={rowSelection}
    />
);

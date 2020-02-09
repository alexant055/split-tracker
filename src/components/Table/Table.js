import React from "react";

import {Table} from "antd";

const TableView = (props) => {
    return (
      <div>
        <Table
            bordered
            size={props.size}
            columns={props.column}
            dataSource={props.data}
        />
      </div>
    );

};

export default TableView;
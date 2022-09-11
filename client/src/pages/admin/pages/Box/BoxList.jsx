import "../../styles2.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBox, getBox } from "../../../../redux/apiCalls";

export default function BoxList() {
  const dispatch = useDispatch();
  const boxes = useSelector((state) => state.box.boxes);

  useEffect(() => {
    getBox(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteBox(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "header",
      headerName: "Header",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.icon} alt="" />
            {params.row.header}
          </div>
        );
      },
    },
    { field: "text", headerName: "Text", width: 400 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/box/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    
    <div className="productList">
      <div className="productTitleContainer">
        <h1 className="productTitle">Box List</h1>
        <Link to="/admin/newbox">
          <button className="productAddButton">Create</button>
      </Link>
      </div>
      <DataGrid
        rows={boxes}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={14}
        checkboxSelection
      />
    </div>
  );
}
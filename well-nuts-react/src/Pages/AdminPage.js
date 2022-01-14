import React, { useEffect, useState, forwardRef } from "react";
import MaterialTable from "material-table";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../services/Product";
import "./AdminPage.css";
import {
  ViewColumn,
  Search,
  SaveAlt,
  Remove,
  LastPage,
  FirstPage,
  FilterList,
  Edit,
  DeleteOutline,
  Clear,
  ChevronRight,
  ChevronLeft,
  Check,
  ArrowDownward,
  AddBox,
} from "@material-ui/icons";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

toast.configure();
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const AdminPage = ({ user }) => {
  const [data, setData] = useState();
  const columns = [
    {
      title: "Name",
      field: "name",
    },
    {
      title: "Description",
      field: "description",
    },
    {
      title: "ExperationDate",
      field: "experationDate",
      type: "date",
    },
  ];
  useEffect(() => {
    getData();
  }, []);

  function refreshPage() {
    window.location.reload();
  }

  const getData = async () => {
    await getProducts.then((response) => {
      setData(response);
    });
  };

  const deleteProducts = async (id) => {
    await deleteProduct(id);
    refreshPage();
  };

  const addProducts = async (Product) => {
    if (localStorage.getItem("token")) {
      await addProduct(Product).then((res) => {
        if (res) {
          toast.success("Product added successfully");
          refreshPage();
        } else toast.error("Title is required (3)");
      });
    } else return false;
  };

  const updateProducts = async (id, updated) => {
    await updateProduct(id, updated);
    refreshPage();
  };

  return (
    <>
      <div className="tablediv">
        <h1 className="tabletitle">Product List</h1>
        <div>
          <MaterialTable
            icons={tableIcons}
            title="Products List"
            data={data}
            columns={columns}
            editable={{
              onRowAdd: (newRow) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    addProducts(newRow);
                    resolve();
                  }, 2000);
                }),
              onRowDelete: (selectedRow) =>
                new Promise((resolve, reject) => {
                  deleteProducts(selectedRow._id);
                  resolve();
                }),
              onRowUpdate: (updatedRow, oldRow) =>
                new Promise((resolve, reject) => {
                  updateProducts(updatedRow._id, updatedRow);
                  resolve();
                }),
            }}
            options={{
              actionsColumnIndex: -1,
              exportButton: true,
            }}
          />
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default AdminPage;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useFormik } from "formik";
// import * as Yup from "yup";
import ReceivingFormHeader from "./ReceivingFormHeader";
import ReceivingQtyInput from "./ReceivingQtyInput";
import GridTable from "../../../../../../components/misc/GridTable/GridTable";
import useApiFetch from "../../../../../../customHook/CustomHook";
import InputTextEut from "../../../../../../components/misc/textinput/InputTextEut";
import TextArea from "../../../../../../components/misc/textinput/TextArea";
import Tooltip from "../../../../../../components/misc/tooltip/Tooltip";
import {setUpdatedReceving,setUpdatedReceivingDetail, updateRefNumber, updateNotes} from '../redux/receivingSlices'
import { MdEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import ReceivingTooltip from "./ReceivingTooltip";
import moment from "moment";

const ReceivingForm = () => {
  const formIndex = useSelector((state) => state.receivingSlices.formIndex);
  const dispatch = useDispatch()
 const [ref, setRef] = useState('');
  const [commentvalue, setCommentValue] = useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [ponumber,setPoNumber]=useState('');
  const [podate,setPoDate]=useState('');
// console.log("po number checking",ponumber)
// console.log("po number checking",setPoNumber)


  // console.log("This is my form index", formIndex.INVREC_ID);
  const [item, setItem] = useState("Working on it");
  const [itemPriority, setItemPriority] = useState("High");
  const getSlect = (e) => {
    setItem(e.target.value);
  };
  const [data, setData] = useState();
  const [postreceiving, setPostReceiving] = useState();
  const [postreceivingdetail, setPostReceivingDetail] = useState();

  const [row, setRow] = useState([]);
  const [head, setHead] = useState([
    { title: "Lot", slector: "LOT_NUMBER", Wid: 250 },
    { title: "Expiry", slector: "EXPIRY_DATE", Wid: 150, date: true },
    { title: "SKU", slector: "SKU_MANUFACTURE", Wid: 150 },
    { title: "Description", slector: "DESCRIPTION", Wid: 250 },
    { title: "OhQty", slector: "QTY_ONHAND", Wid: 150 },
    { title: "OrderQty", slector: "QTY_ORDERED", Wid: 150 },
    // { title: 'CaseReceived',slector:'', Wid: 100 },
    { title: "CaseUOM", slector: "REORDERING_UOM", Wid: 150 },
    { title: "CaseQty", slector: "QTY_ORDERED", Wid: 150 },
    {
      title: "QtyReceieved",
      slector: "QUANTITY",
      Wid: 120,
      customComp: ReceivingQtyInput,
    },
    { title: "BO", slector: "BO_QUANTITY", Wid: 150 },
  ]);


  let [error, sendRequest] = useApiFetch();

  const apiUrl = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}InventoryWeb/GetRecieving`;
  // for input fields post api
  const PostReceivingUrl = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}InventoryWeb/PostRecieving`;
  // for grid post api
  const PostReceivingDetailUrl = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}InventoryWeb/PostRecievingDetail`;
  // getReceiving Payload
  const payload = {
    data: {
      INVREC_ID: `${formIndex.INVREC_ID}`,
      OFFSET: "+5:00",
    },
    action: "InventoryWeb",
    method: "GetRecieving",
    type: "rpc",
    tid: "144",
  };
 
 
  // token
  const accessToken =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("tokenSession")
      : null;


//funtions
const handleRefChange = (e) => {
  const ref = {
    refNumber : e.target.value
  }
  dispatch(updateRefNumber(ref));
  setRef(e.target.value);
};

const handleCommentChange = (e) => {
  dispatch(updateNotes({ payload: { NOTES: e.target.value } }));
  setCommentValue(e.target.value);
};
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePoNumberChange = (e) => {
    setPoNumber(e.target.value);
  };
  const handlePoDateChange = (e) => {
    setPoDate(e.target.value);
  };

  function getAllTask(data) {
    setData(data);
    
    // setErrorMessage(error);
    setRef(data?.Result.Results[0]?.RECEIVING_REFERENCE_NUMBER)
    setCommentValue(data?.Result.Results[0]?.RECEIVING_NOTES)
    setPhone(data?.Result.Results[0]?.SUPPLIER_PHONE)
    setEmail(data?.Result.Results[0]?.SUPPLIER_EMAIL)
    setPoDate(data?.Result?.Results[0]?.PO_DATE
                  ? moment(data?.Result?.Results[0]?.PO_DATE).format("MMM Do")
                  : "January 24")
    setPoNumber(data?.Result.Results[0]?.PO_NUMBER)
    // console.log("checking data",data)
 // PostReceivingPayload input felds
  const PostReceivingPayload = data?.Result.Results.map((items)=>{
    const {
      INVREC_ID,
      WAR_ID,
      VEN_ID,
      RECEIVING_NUMBER,
      RECEIVING_DATE,
      REFERENCE_NUMBER,
      PURORD_ID,
      NOTES,
      SUPPLIER_INVOICE_NUMBER,
      USE_ID_PREPARED_BY,
      PREPARED_DATE,
      VOID_FLAG,
      VOID_NOTES,
      FINZ_USE_ID,
      FINAL_DATE,
      SUP_INVOICE_DATE,
      SUP_INVOICE_DUE_DATE,
      TERMS_CONDITION,
      RELEASED_FLAG,
      USE_ID_RELEASED_BY,
    }=items
   return {
    INVREC_ID,
      WAR_ID,
      VEN_ID,
      RECEIVING_NUMBER,
      RECEIVING_DATE,
      REFERENCE_NUMBER,
      PURORD_ID,
      NOTES,
      SUPPLIER_INVOICE_NUMBER,
      USE_ID_PREPARED_BY,
      PREPARED_DATE,
      VOID_FLAG,
      VOID_NOTES,
      FINZ_USE_ID,
      FINAL_DATE,
      SUP_INVOICE_DATE,
      SUP_INVOICE_DUE_DATE,
      TERMS_CONDITION,
      RELEASED_FLAG,
      USE_ID_RELEASED_BY,
   }
  });
  // PostRecevingDetail grid data
  const PostReceivingDetailPayload = data?.Result.Table1.map((items)=>{
    const {
        INVRECDET_ID,
        INVREC_ID,
        PAR_ID,
        DESCRIPTION,
        QUANTITY,
        DELETED_FLAG,
        COST,
        WORORD_ID,
        CONVERT_QTY,
        USE_ID,
        INVPARLOT_ID,
        PURORDDET_ID,
        SHELF,
        RACK,
        BIN,
        QUARANTINE_FLAG,
        WAR_ID,
        READY_FOR_RESTOCK_FLAG,
        BACK_ORDER_FLAG,
      } = items
      return{
        INVRECDET_ID,
        INVREC_ID,
        PAR_ID,
        DESCRIPTION,
        QUANTITY,
        DELETED_FLAG,
        COST,
        WORORD_ID,
        CONVERT_QTY,
        USE_ID,
        INVPARLOT_ID,
        PURORDDET_ID,
        SHELF,
        RACK,
        BIN,
        QUARANTINE_FLAG,
        WAR_ID,
        READY_FOR_RESTOCK_FLAG,
        BACK_ORDER_FLAG,
      }
  });
     //dispatching payload
    //  console.log("checking dispatch");
  dispatch(setUpdatedReceving(PostReceivingPayload))
  dispatch(setUpdatedReceivingDetail(PostReceivingDetailPayload))
  }
  // function postReceving(postreceiving){
  //   setPostReceiving(postreceiving)
  //   console.log("Post Receving",postReceving)
  // }
  //  function postRecevingDetail(postreceivingdetail){
  //   setPostReceivingDetail(postreceivingdetail)
  //   console.log("Post Receving Detail",postRecevingDetail)
  // }

  useEffect(() => {
    sendRequest(apiUrl, "POST", payload, getAllTask, accessToken);
    // sendRequest(PostReceivingUrl, "POST", PostReceivingPayload,postReceving, accessToken);
    // sendRequest(
    //   PostReceivingDetailUrl,
    //   "POST",
    //   PostReceivingDetailPayload,
    //   postRecevingDetail,
    //   accessToken
    // );
  },[]);

//  useEffect(() => {
//   if (data && data?.Result && data?.Result.Table1) {
//     const quantity = data?.Result.Table1[0]?.QUANTITY;
//     const boQuantity = data?.Result.Table1[0]?.BO_QUANTITY; 

//     if (quantity !== boQuantity) {
//       console.log("Quantity is not equal to BO quantity. Other Back order will be created");
//       return;
//     }
//     console.log("Quantity is equal to BO quantity.");
//   } else {
//     console.log("Data is null or undefined. Cannot proceed with comparison.");
//   }
// }, [data]);


  // Define validation schema using Yup
  // const validationSchema = Yup.object().shape({
  //   PO_NUMBER: Yup.string().required("PO # is required"),
  //   PO_DATE: Yup.date().required("PO Date is required"),
  //   SUPPLIER_PHONE: Yup.string().required("Phone # is required"),
  //   SUPPLIER_EMAIL: Yup.string()
  //     .email("Invalid email address")
  //     .required("Email is required"),
  //   SUPPLIER: Yup.string().required("Supplier is required"),
  //   SUPPLIER_INVOICE_NUMBER: Yup.string().required("Invoice is required"),
  //   RECEIVING_REFERENCE_NUMBER: Yup.string().required("Ref is required"),
  //   RECEIVING_NOTES: Yup.string(),
  // });

  // const formik = useFormik({
  //   initialValues: {
  //     RECEIVING_NUMBER: "",
  //     REC_DATE: "",
  //     PO_NUMBER: "",
  //     PO_DATE: "",
  //     SUPPLIER_PHONE: "",
  //     SUPPLIER_EMAIL: "",
  //     SUPPLIER: "",
  //     SUPPLIER_INVOICE_NUMBER: "",
  //     RECEIVING_REFERENCE_NUMBER: "",
  //     RECEIVING_NOTES: "",
  //   },
  //   validationSchema: validationSchema,
  //   onSubmit: (values) => {},
  // });

  return (
    <div className="bg-gray-100 rounded-lg">
      <div className="gap-2 flex p-3 rounded-lg">
        <div className="  border  w-[70%] rounded-md   ">
          <ReceivingFormHeader
            supplier={data?.Result.Results[0]?.SUPPLIER ?? ""}
          />
          <div className="w-full h-[90%]  bg-white overflow-auto  pb-2">
            <div className=" bg-white   mt-2 pl-2  ">
              <GridTable
                row={data?.Result.Table1}
                head={head}
                setHead={setHead}
              />
            </div>
          </div>
        </div>
        <div className="w-[30%]  p-2 rounded-sm bg-white shadow-sm shadow-gray-400 !overflow-x-auto">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Tooltip content="Edit">
                <MdEdit className="text-[25px] border  bg-purple-200 rounded-lg cursor-pointer p-1 text-purple-500 hover:text-white hover:bg-purple-500" />
              </Tooltip>
              <Tooltip content="Perview">
                <FaRegEye
                  className="text-[25px] rounded-lg border cursor-pointer p-1 bg-sky-100 
              text-sky-500 hover:text-white hover:bg-sky-400"
                />
              </Tooltip>
              <Tooltip content="Export">
                <HiOutlineDocumentArrowDown className="text-[25px] cursor-pointer rounded-lg border p-1 bg-indigo-100 text-indigo-500 hover:text-white hover:bg-indigo-400" />
              </Tooltip>
            </div>
            <div className="">
              <p className="H text-gray-800   text-[20px]">
                {data?.Result.Results[0]?.RECEIVING_NUMBER ?? "REC0985673"}
              </p>
              <p className="H text-gray-500  text-right ">
                {" "}
                {data?.Result?.Results[0]?.REC_DATE
                  ? moment(data?.Result?.Results[0]?.REC_DATE).format("MMM Do")
                  : "January 24"}
              </p>
            </div>
          </div>
          <div className="w-full mt-4 mb-2">
            <div className="w-full bg-indigo-400 text-white flex justify-center items-center font-semibold py-2 rounded-md">
              <ReceivingTooltip content="RE-STOCK">
                <p>RE-STOCK</p>
              </ReceivingTooltip>
            </div>
          </div>
          <div className="w-full mt-2">
            <div className="w-full bg-orange-500 text-white flex justify-center items-center font-semibold rounded-md py-2">
              <ReceivingTooltip content="High">
                <p>High</p>
              </ReceivingTooltip>
            </div>
          </div>
          {/* input fields  */}
          {/* <form onSubmit={formik.handleSubmit} className=""> */}
            <InputTextEut
              placeHolder="PO #"
              isDisabled={false}
              value={ponumber}
              onChange={handlePoNumberChange}
              // initialValue={data?.Result.Results[0]?.PO_NUMBER ?? ""}
              // {...formik.getFieldProps("PO_NUMBER")}
            />
            {/* {formik.touched.PO_NUMBER && formik.errors.PO_NUMBER ? (
              <div className="text-red-500">{formik.errors.PO_NUMBER}</div>
            ) : null} */}

            <InputTextEut
              placeHolder="PO Date"
              isDisabled={true}
              value={podate}
              onChange={handlePoDateChange}

              // initialValue={data?.Result.Results[0]?.PO_DATE ?? ""}
              // {...formik.getFieldProps("PO_DATE")}
            />
            {/* {formik.touched.PO_DATE && formik.errors.PO_DATE ? (
              <div className="text-red-500">{formik.errors.PO_DATE}</div>
            ) : null} */}

            <InputTextEut
              placeHolder="Phone #"
              value={phone}
              isDisabled={true}
              onChange={handlePhoneChange}

              // initialValue={data?.Result.Results[0]?.SUPPLIER_PHONE ?? ""}
              // {...formik.getFieldProps("SUPPLIER_PHONE")}
            />
            {/* {formik.touched.SUPPLIER_PHONE && formik.errors.SUPPLIER_PHONE ? (
              <div className="text-red-500">{formik.errors.SUPPLIER_PHONE}</div>
            ) : null} */}

            <InputTextEut
              placeHolder="Email"
              isDisabled={true}
              value={email}
              onChange={handleEmailChange}
             
              // initialValue={data?.Result.Results[0]?.SUPPLIER_EMAIL ?? ""}
              // {...formik.getFieldProps("SUPPLIER_EMAIL")}
            />
            {/* {formik.touched.SUPPLIER_EMAIL && formik.errors.SUPPLIER_EMAIL ? (
              <div className="text-red-500">{formik.errors.SUPPLIER_EMAIL}</div>
            ) : null} */}

            <InputTextEut
              placeHolder="Ref"
              value={ref}
              onChange={handleRefChange}
              // initialValue={
              //   data?.Result.Results[0]?.RECEIVING_REFERENCE_NUMBER ?? ""
              // }
              // {...formik.getFieldProps("RECEIVING_REFERENCE_NUMBER ")}
            />
            {/* {formik.touched.RECEIVING_REFERENCE_NUMBER &&
            formik.errors.RECEIVING_REFERENCE_NUMBER ? (
              <div className="text-red-500">
                {formik.errors.RECEIVING_REFERENCE_NUMBER}
              </div>
            ) : null} */}

            <TextArea
              placeHolder="Comments"
              value={commentvalue}
              onChange={handleCommentChange}
              // initialValue={data?.Result.Results[0]?.RECEIVING_NOTES ?? ""}
              // {...formik.getFieldProps("RECEIVING_NOTES")}
            />
            {/* {formik.touched.RECEIVING_NOTES && formik.errors.RECEIVING_NOTES ? (
              <div className="text-red-500">{formik.errors.RECEIVING_NOTES}</div>
            ) : null} */}
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default ReceivingForm;

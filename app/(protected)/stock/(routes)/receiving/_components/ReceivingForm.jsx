import React,{useState,useEffect} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ReceivingInnerGrid from './ReceivingInnerGrid'
import ReceivingFormHeader from './ReceivingFormHeader'
import ModalOpen from '../../../../../../components/misc/GridTable/ModalOpen'
import GridTable from '../../../../../../components/misc/GridTable/GridTable'
import useApiFetch  from '../../../../../../customHook/CustomHook'
import InputTextEut from '../../../../../../components/misc/textinput/InputTextEut'
import TextArea from '../../../../../../components/misc/textinput/TextArea'
import Tooltip from '../../../../../../components/misc/tooltip/Tooltip'
import { MdEdit } from 'react-icons/md'
import { FaRegEye } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

const ReceivingForm = () => {
    const [item, setItem] = useState("Working on it");
  const [itemPriority, setItemPriority] = useState("High");
   const getSlect = (e) => {
    setItem(e.target.value)
  }
  const [data , setData] = useState()
    const [row, setRow] = useState([
])
const [head, setHead] = useState([
  { title: 'Lot', slector:'LOT_NUMBER',Wid: 250 , customComp: ModalOpen }, 
  { title: 'Expiry',slector:'EXPIRY_DATE', Wid: 150,date:true },  
  { title: 'SKU',slector:'SKU_MANUFACTURE', Wid: 100 }, 
  { title: 'Description',slector:'DESCRIPTION', Wid: 250 }, 
  { title: 'OhQty',slector:'QTY_ONHAND', Wid: 120 }, 
  { title: 'OrderQty',slector:'QTY_ORDERED', Wid: 120 },
  // { title: 'CaseReceived',slector:'', Wid: 100 },
  { title: 'CaseUOM',slector:'UOM_ID_REORDERING', Wid: 120 },
  { title: 'CaseQty',slector:'', Wid: 120 }, 
  // { title: 'QtyReceieved',slector:'', Wid: 120 }, 
  { title: 'BO',slector:'BO_QUANTITY', Wid: 120 } ])


let [error , sendRequest] =  useApiFetch()

  const apiUrl = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}InventoryWeb/GetRecieving`

  const payload = {
    data: {
			"INVREC_ID"     : "116212",
			"OFFSET"        : "+5:00"
			},
  "action": "InventoryWeb",
  "method": "GetRecieving",
  "type": "rpc",
  "tid": "144"
}
  
  const accessToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIyNjkzIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImFkbWluIiwiZXhwIjoxNzA5NTUxODIyLCJpc3MiOiJwcmVjaXNldGVjLmNhIiwiYXVkIjoicHJlY2lzZXRlYy5jYSJ9.IdBhRM9Zsb4etJu-VN197_iKovHuKIBUaKkWJVamXHU"
  
  function getAllTask(data){

    setData(data)
    console.log('this is inner api data: ' , data);
    // console.log("checking input field data",data?.Result.Results[0].SUPPLIER_EMAIL)
    setErrorMessage(error)
        }
  
   useEffect(() => {
    sendRequest(apiUrl , 'POST' , payload , getAllTask , accessToken)
   
  }, []);

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    RECEIVING_NUMBER: Yup.string().required('Receiving # is required'),
    REC_DATE: Yup.date().required('Receiving Date is required'),
    PO_NUMBER: Yup.string().required('PO # is required'),
    PO_DATE: Yup.date().required('PO Date is required'),
    SUPPLIER_PHONE: Yup.string().required('Phone # is required'),
    SUPPLIER_EMAIL: Yup.string().email('Invalid email address').required('Email is required'),
    SUPPLIER: Yup.string().required('Supplier is required'),
    SUPPLIER_INVOICE_NUMBER: Yup.string().required('Invoice is required'),
    RECEIVING_REFERENCE_NUMBER: Yup.string().required('Ref is required'),
    RECEIVING_NOTES: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      RECEIVING_NUMBER: '',
      REC_DATE: '',
      PO_NUMBER: '',
      PO_DATE: '',
      SUPPLIER_PHONE: '',
      SUPPLIER_EMAIL: '',
      SUPPLIER: '',
      SUPPLIER_INVOICE_NUMBER: '',
      RECEIVING_REFERENCE_NUMBER: '',
      RECEIVING_NOTES: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      // Handle form submission logic here
      console.log(values);
    },
  });

  return (
    <div className="  w-full flex gap-2 ">
       {/* 75% screen width */}
      <div className='relative  w-3/4   rounded-sm p-2 bg-white shadow-sm shadow-gray-400 !overflow-auto'>
        <ReceivingFormHeader/>
        {/* <ReceivingInnerGrid/> */}
      <GridTable row={data?.Result.Table1} head={head} setHead={setHead}/>
      </div>
      <div className='w-1/4  p-2 rounded-sm bg-white shadow-sm shadow-gray-400 !overflow-x-auto'>
        <div className='flex items-center justify-between'>
            <div className='flex gap-2'>
              <Tooltip content='Edit'>
                <MdEdit className='text-[25px] border  bg-purple-200 rounded-lg cursor-pointer p-1 text-purple-500 hover:text-white hover:bg-purple-500' />
              </Tooltip>
              <Tooltip content='Perview'>
                <FaRegEye className='text-[25px] rounded-lg border cursor-pointer p-1 bg-sky-100 text-sky-500 hover:text-white hover:bg-sky-400' />
              </Tooltip>
              <Tooltip content='Export'>
                <HiOutlineDocumentArrowDown className='text-[25px] cursor-pointer rounded-lg border p-1 bg-indigo-100 text-indigo-500 hover:text-white hover:bg-indigo-400' />
              </Tooltip>
            </div>
            <div className=''>
              <p className='H text-gray-800   text-[20px]'>PC0324445</p>
              <p className='H text-gray-500  text-right '>January 24</p>
            </div>
          </div>
          <div className='flex justify-between w-full'>
            <div className='py-4 w-full  '>
              <p className='py-3 text-gray-500 text-[14px]'>Status</p>
              <div className='flex items-center'>
                <div className={`p-1 h-fit w-[30px] rounded-full ${item == "High" ? "bg-orange-600" : item == "Medium" ? "bg-blue-400" : item == "Low" ? "bg-cyan-400" : item == "Working on it" ? "bg-yellow-400" : item == "Done" ? "bg-green-500" : item == "Stuck" ? "bg-red-600" : item == "initiated" ? "bg-zinc-400" : item == "issued" ? "bg-blue-600" : item == "Ready" ? "bg-indigo-500" : ""}`}></div>
                <select className='outline-none' onChange={getSlect}>
                  <option value="Working on it">Working on it</option>
                  <option value="Done">Done</option>
                  <option value="Stuck">Stuck</option>
                  <option value="intiated">intiated</option>
                  <option value="issued">issued</option>
                  <option value="Ready">Ready</option>
                </select>
              </div>
            </div>
            <div className='py-4 w-full '>
              <p className='py-3 text-gray-500 text-[14px]'>Priority</p>
              <div className='flex items-center '>
                <div className={`p-1 h-fit w-[30px] rounded-full ${itemPriority == "High" ? "bg-orange-600" : itemPriority == "Medium" ? "bg-blue-400" : itemPriority == "Low" ? "bg-cyan-400" : itemPriority == "Working on it" ? "bg-yellow-400" : itemPriority == "Done" ? "bg-green-500" : itemPriority == "Stuck" ? "bg-red-600" : itemPriority == "initiated" ? "bg-zinc-400" : itemPriority == "issued" ? "bg-blue-600" : itemPriority == "Ready" ? "bg-indigo-500" : ""}`}></div>
                <select className='outline-none' onChange={(e) => setItemPriority(e.target.value)}>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
          </div>
          {/* input fields  */}
          <form onSubmit={formik.handleSubmit} className="space-y-4">
  <InputTextEut
    label="Receiving #"
    placeHolder="Receiving #"
    isDisabled={true}
    initialValue={data?.Result.Results[0].RECEIVING_NUMBER ?? ''}
   
  />
  {formik.touched.RECEIVING_NUMBER && formik.errors.RECEIVING_NUMBER ? (
    <div className="text-red-500">{formik.errors.RECEIVING_NUMBER}</div>
  ) : null}

  <InputTextEut
    label="Receiving Date"
    placeHolder="Receiving Date"
    isDisabled={true}
    initialValue={data?.Result.Results[0].REC_DATE ?? ''}
    {...formik.getFieldProps('REC_DATE')}
  />
  {formik.touched.REC_DATE && formik.errors.REC_DATE ? (
    <div className="text-red-500">{formik.errors.REC_DATE}</div>
  ) : null}

  <InputTextEut
    label="PO #"
    placeHolder="PO #"
    isDisabled={true}
    initialValue={data?.Result.Results[0].PO_NUMBER ?? ''}
    
    {...formik.getFieldProps('PO_NUMBER')}
  />
  {formik.touched.PO_NUMBER && formik.errors.PO_NUMBER ? (
    <div className="text-red-500">{formik.errors.PO_NUMBER}</div>
  ) : null}

  <InputTextEut
    label="PO Date"
    placeHolder="PO Date"
    isDisabled={true}
    initialValue={data?.Result.Results[0].PO_DATE ?? ''}
    {...formik.getFieldProps('PO_DATE')}
  />
  {formik.touched.PO_DATE && formik.errors.PO_DATE ? (
    <div className="text-red-500">{formik.errors.PO_DATE}</div>
  ) : null}

  <InputTextEut
    label="Phone #"
    placeHolder="Phone #"
    isDisabled={true}
    initialValue={data?.Result.Results[0].SUPPLIER_PHONE ?? ''}
    {...formik.getFieldProps('SUPPLIER_PHONE')}
  />
  {formik.touched.SUPPLIER_PHONE && formik.errors.SUPPLIER_PHONE ? (
    <div className="text-red-500">{formik.errors.SUPPLIER_PHONE}</div>
  ) : null}

  <InputTextEut
    label="Email"
    placeHolder="Email"
    isDisabled={true}
    initialValue={data?.Result.Results[0].SUPPLIER_EMAIL ?? ''}
    {...formik.getFieldProps('SUPPLIER_EMAIL')}
  />
  {formik.touched.SUPPLIER_EMAIL && formik.errors.SUPPLIER_EMAIL ? (
    <div className="text-red-500">{formik.errors.SUPPLIER_EMAIL}</div>
  ) : null}

  <InputTextEut
    label="Supplier"
    placeHolder="Supplier"
    isDisabled={true}
    initialValue={data?.Result.Results[0].SUPPLIER ?? ''}
    {...formik.getFieldProps('SUPPLIER')}
  />
  {formik.touched.SUPPLIER && formik.errors.SUPPLIER ? (
    <div className="text-red-500">{formik.errors.SUPPLIER}</div>
  ) : null}

  <InputTextEut
    label="Invoice"
    placeHolder="Invoice"
    isDisabled={true}
    initialValue={data?.Result.Results[0].SUPPLIER_INVOICE_NUMBER ?? ''}
    {...formik.getFieldProps('SUPPLIER_INVOICE_NUMBER')}
  />
  {formik.touched.SUPPLIER_INVOICE_NUMBER && formik.errors.SUPPLIER_INVOICE_NUMBER ? (
    <div className="text-red-500">{formik.errors.SUPPLIER_INVOICE_NUMBER}</div>
  ) : null}

  <InputTextEut
    label="Ref"
    placeHolder="Ref"
    initialValue={data?.Result.Results[0].RECEIVING_REFERENCE_NUMBER ?? ''}
    {...formik.getFieldProps('RECEIVING_REFERENCE_NUMBER')}
  />
  {formik.touched.RECEIVING_REFERENCE_NUMBER && formik.errors.RECEIVING_REFERENCE_NUMBER ? (
    <div className="text-red-500">{formik.errors.RECEIVING_REFERENCE_NUMBER}</div>
  ) : null}

  <TextArea
    label="Comments"
    placeHolder="Comments"
    initialValue={data?.Result.Results[0].RECEIVING_NOTES ?? ''}
    {...formik.getFieldProps('RECEIVING_NOTES')}
  />
  {formik.touched.RECEIVING_NOTES && formik.errors.RECEIVING_NOTES ? (
    <div className="text-red-500">{formik.errors.RECEIVING_NOTES}</div>
  ) : null}
</form>
      </div>
    </div>
  )
}

export default ReceivingForm

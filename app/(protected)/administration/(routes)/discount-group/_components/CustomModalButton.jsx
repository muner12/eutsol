const CustomModalButton=({label,flag,...rest})=>{
    return (
        <button disabled={flag} className={`bg-[#6DB4B3] text-white text-xs px-4 py-2  rounded-sm ${flag?'cursor-not-allowed':''}`} {...rest}>
                {
                    label
                }
              </button>
    )
}

export default  CustomModalButton;
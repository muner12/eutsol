const CustomModalButton=({label,...rest})=>{
    return (
        <button className="bg-[#6DB4B3] text-white text-xs px-4 py-2  rounded-sm" {...rest}>
                {
                    label
                }
              </button>
    )
}

export default  CustomModalButton;
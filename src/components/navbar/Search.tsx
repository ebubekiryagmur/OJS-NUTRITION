
import { FiSearch } from "react-icons/fi"




function Search () {
    return (
      <>
      
      <div className=" items-center hidden md:flex relative gap-3 lg:gap-5">
  <div className="flex w-full">
    <input
      type="text"
      placeholder="Aradığınız ürünü yazınız"
      aria-label="Default"
      className="form-input w-80 px-4  rounded-l-md  border-2 border-gray-400"
    />
    <button
      aria-describedby="inputGroup-sizing-default"
      className="bg-gray-600 text-white px-4 py-2 rounded-r-md hover:bg-gray-700"
    >
      ARA
    </button>
  </div>
</div>
<div className="flex sm:hidden items-center bg-gray-100 p-2 rounded-lg w-full">
      <FiSearch className="text-gray-400" size={24} />
      <input
        type="text"
        placeholder="Aradığınız ürünü yazınız."
        className="ml-2 bg-transparent border-none outline-none w-full"
      />
    </div>
</>
    )
  }
  
  export default Search
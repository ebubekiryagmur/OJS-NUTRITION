import { CiSearch } from "react-icons/ci"




function Search () {
    return (
      
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
  <div className="flex relative md:hidden items-center mt-1">
    <CiSearch className="w-5 h-5 text-gray-500" />
    <input
        type="text"
        placeholder="ARADIĞINIZ ÜRÜNÜ YAZINIZ."
        className="ml-2 p-2 border border-gray-600 rounded w-full"
    />
</div>
</div>
    )
  }
  
  export default Search


function User() {
    return (
      <div className="flex justify-end w-full h-12 ps-4 gap-3">
      <div className="hidden md:flex justify-center items-center gap-2 border-2 px-2 border-themeColor rounded-md">
        <img className="pe-4" src="/src/assets/images/user.png" alt="" />
        <span>HESAP</span>
        <img src="/src/assets/images/Rectangle.png" alt="" />
      </div>
      <button className="hidden md:flex justify-center items-center gap-2  border-2 px-12 text-white bg-gray-400 rounded-md">
        <img src="/src/assets/images/sepet.png" alt="" />
        SEPET
      </button>
    </div>

        
    )
  }
  
  export default User
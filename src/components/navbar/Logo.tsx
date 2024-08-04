import { Link } from "react-router-dom"


function Logo() {
  return (
    <div className="logo w-full flex items-center space-x-3 rtl:space-x-reverse">
      <Link to={"/"}>
      <img className="" src="/src/assets/images/LOGO_Siyah.png" alt="" />
      </Link>
    </div>
  )
}

export default Logo
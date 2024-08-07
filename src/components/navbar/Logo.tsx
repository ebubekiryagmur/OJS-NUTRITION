import { Link } from "react-router-dom"


function Logo() {
  return (
    <div className="logo w-full flex items-center ">
      <Link to={"/"}>
      <img className="" src="/src/assets/images/LOGO_Siyah.png" alt="" />
      </Link>
    </div>
  )
}

export default Logo

import Category from "./Category"
import { HamburgerMenu } from "./HamburgerMenu"
import Logo from "./Logo"
import Search from "./Search"
import User from "./User"



function navbar() {
  return (
    <nav>
    <div className="container mx-auto ">
      <div className="columns-3 h-20 p-10 flex justify-between items-center">
      <HamburgerMenu />
      <Logo />
      <Search/>
      <User/>
      </div>  
    </div>
    <Category />
    </nav>
  )
}

export default navbar
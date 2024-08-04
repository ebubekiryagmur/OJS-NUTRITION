
import Banner from "../components/home/Banner"
import BestProduct from "../components/home/BestProduct"
import HomeComments from "../components/home/HomeComments"
import InfoBar from "../components/home/InfoBar"
import Products from "../components/home/Products"
import Satisfaction from "../components/home/Satisfaction"
import Slider from "../components/home/Slider"


const HomePage = () => {
  return (
    <div>
        <InfoBar />
        <Banner />
        <Products />
        <BestProduct />
        <Slider />
        <HomeComments />
        <Satisfaction />

      
    </div>
  )
}

export default HomePage
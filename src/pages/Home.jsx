import Banner from "../Components/Banner/Banner"
import BookTable from "../Components/BookTable/BookTable"
import DeliciousFoods from "../Components/DeliciousFoods/DeliciousFoods"
import PopularFoods from "../Components/PopularFoods/PopularFoods"
import Testomonial from "../Components/Testomonial/Testomonial"


const Home = () => {
  return (
    <div>
    <Banner/>
      <DeliciousFoods/>
      <PopularFoods/>
   
      <BookTable/>
      
      <Testomonial/>  
    </div>
  )
}

export default Home
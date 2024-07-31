

const Category = () => {
    const categoryList = [
        {
            name:"PROTEİN"
        },
        {
            name:"SPOR GIDALARI"
        },
        {
            name:"SAĞLIK"
        },
        {
            name:"GIDA"
        },
        {
            name:"VİTAMİN"
        },
        {
            name:"TÜM ÜRÜNLER"
        },
    ]
  return (
    <div className='hidden md:flex items-center justify-center bg-zinc-950 text-white gap-36  '>
        {
            categoryList.map((Category, index) => (
                <div key={index}>{Category.name}</div>
            ))
        }
        
    </div>

    
   
  )
}

export default Category
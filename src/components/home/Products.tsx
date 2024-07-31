

const products = [
  { imgSrc: '/src/assets/images/card 1.png' },
  { imgSrc: '/src/assets/images/card 2.png' },
  { imgSrc: '/src/assets/images/card 3.png' },
  { imgSrc: '/src/assets/images/card 4.png' },
  { imgSrc: '/src/assets/images/card 5.png' },
  { imgSrc: '/src/assets/images/card 6.png' },
];



const Products = () => {
  return (
    <div className="flex items-center justify-center p-2">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 w-1200 h-340  ">
        {products.map((product, index) => (
          <div key={index} className="relative bg-white rounded-lg shadow-md overflow-hidden">
            <img className="" src={product.imgSrc} alt="" />
            
            </div>
          
        ))}
      </div>
    </div>
  );
}

export default Products
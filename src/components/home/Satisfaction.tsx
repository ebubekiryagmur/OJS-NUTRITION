import { Rating } from '@mui/material'


const Satisfaction = () => {
  return (

    <div className="bg-neutral-800 py-4 text-white  ">
  <div className=" mb-10 p-4  ">
    <div className="flex py-4">
    <Rating name="read-only" value={5} readOnly  />
       (140.000+)
        </div>

    <div className="flex justify-start  ">
      <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
        <h2 className="text-lg lg:text-2xl font-semibold flex justify-evenly " >
          LABORATUVAR TESTLİ ÜRÜNLER
          <br />
          AYNI GÜN & ÜCRETSİZ KARGO
          <br />
          MEMNUNİYET GARANTİSİ
        </h2>
      </div>
    
        <p className="text-secondary text-sm lg:text-base">
          200.000'den fazla ürün yorumumuza dayanarak,
          <br />
          ürünlerimizi seveceğinize eminiz. Eğer herhangi
          <br />
          bir sebeple memnun kalmazsan, bizimle iletişime
          <br />
          geçtiğinde çözüme kavuşturacağız.
        </p>
      </div>
    </div>
  </div>


  )
}

export default Satisfaction
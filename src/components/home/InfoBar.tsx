
const InfoBar = () => {
  return (
    <div className=" hidden md:flex justify-center text-xs gap-3 p-2 ms:gap-10   ">
        <img src="/src/assets/images/box.png"/>
          <span className="font-bold">AYNI GÜN KARGO</span>
          <span>-</span>
           <p>16:00'DAN ÖNCEKİ SİPARİŞLERDE</p>
       
          <img src="/src//assets/images/smile.png"/>
          <span className="font-bold">ÜCRETSİZ KARGO</span>
          <span>-</span>
           <p>100 TL ÜZERİ SİPARİŞLERDE</p>
       
           <img src="/src/assets/images/safe.png"/>
          <span className="font-bold">GÜVENLİ ALIŞVERİS</span>
          <span>-</span>
          <p>1.000.000+MUTLU MÜŞTERİ</p>
    </div>
  )
}

export default InfoBar
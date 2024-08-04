import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-neutral-800  ">
    <div className="mx-auto w-full max-w-screen-xl ">
      <div className="grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 flex justify-around">
        <div>
            <img className='mb-5' src='/src/assets/images/LOGO_Beyaz.png' />
            <ul className="text-gray-500 dark:text-gray-400 font-medium ">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">İletişim</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Hakkımızda</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Sıkça Sorulan Sorular</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">KVKK</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Çalışma İlkelerimiz</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Satış Sözleşmesi</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Garanti ve İade Koşulları</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Gerçek Müşteri Yorumları</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className=" mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Kategoriler</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Protein</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Spor Gıdaları</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Sağlık</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Gıda</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Vitamin</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Aksesuar</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Tüm Ürünler</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Paketlerr</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Lansmana Özel Fırsatlar</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white  ">Popüler Ürünler</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium text-justify">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Whey Protein</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Cream of Rice</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Creatine</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">BCAA+</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Pre-Workout</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Fitness Paketi</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Collagen</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Günlük Vitamin Paketi</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">ZMA</a>
                </li>
            </ul>
        </div>
        
    </div>
    <div className="px-4 py-6 md:flex md:items-center md:justify-between  ">
    <span className="text-sm  text-gray-500 dark:text-gray-300 sm:text-center ">Copyright © - Tüm Hakları Saklıdır.
    </span>
    </div>
        </div>
        
        
      
</footer>
  )
}

export default Footer
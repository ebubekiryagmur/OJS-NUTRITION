import { Rating } from '@mui/material';
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const HomeComments = () => {
    const comments = [
        {
          date: "03/05/24",
          title: "Beğendim gayet güzeldi",
          subtitle:
            `Ürün gayet güzel ama ekşiliği bi
             süreden sonra bayabiliyor insanı
              teşekkürler.`,
        },
        {
          date: "03/05/24",
          title: "Beğendim gayet güzeldi",
          subtitle:
            `Ürün gayet güzel ama ekşiliği bi
             süreden sonra bayabiliyor insanı
              teşekkürler.`,
        },
        {
          date: "03/05/24",
          title: "Beğendim gayet güzeldi",
          subtitle:
            `Ürün gayet güzel ama ekşiliği bi
             süreden sonra bayabiliyor insanı
              teşekkürler.`,
        },
        {
          date: "03/05/24",
          title: "Beğendim gayet güzeldi",
          subtitle:
            `Ürün gayet güzel ama ekşiliği bi
             süreden sonra bayabiliyor insanı
              teşekkürler.`,
        },
      ];

  return (
    <div className="p-5 mb-20">
      <div className="container mx-auto">
        <h5 className="text-xl font-semibold">GERÇEK MÜŞTERİ YORUMLARI</h5>
        <div className="flex justify-end items-center mt-2">
        <Rating name="read-only" value={2} readOnly />
          <div>198453 Yorum</div>
          <div className="flex">
            <button className="p-1">
              <IoIosArrowBack className="text-xl" />
            </button>
            <button className="p-1">
              <IoIosArrowForward className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-4">
        <div className="flex flex-wrap -mx-2">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4 comment-map"
            >
              <div className="p-4 border rounded-md shadow-sm">
                <small className="text-gray-500">{comment.date}</small>
                <h5 className="mt-2 font-semibold">{comment.title}</h5>
                <small className="block mt-2 text-gray-700">{comment.subtitle}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default HomeComments
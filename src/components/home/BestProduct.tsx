import { nanoid } from 'nanoid';
import { Rating } from '@mui/material';

interface Product {
  id: string;
  src: string;
  name: string;
  explanation: string;
  score: number;
  comments: string;
  price: string;
}

const products: Product[] = [
  {
    id: nanoid(),
    src: '/src/assets/images/Whey protein.png',
    name: 'WHEY PROTEIN',
    explanation: 'EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ',
    score: 5,
    comments: '10869 Yorum',
    price: '549 TL',
  },
  {
    id: nanoid(),
    src: '/src/assets/images/fitness paketi.png',
    name: 'FITNESS PAKETİ',
    explanation: 'EN POPÜLER ÜRÜNLER BİR ARADA',
    score: 5,
    comments: '7650 Yorum',
    price: '799 TL',
  },
  {
    id: nanoid(),
    src: '/src/assets/images/günlük vitamin.png',
    name: 'GÜNLÜK VİTAMİN PAKETİ',
    explanation: 'EN SIK TÜKETİLEN TAKVİYELER',
    score: 2,
    comments: '5013 Yorum',
    price: '549 TL',
  },
  {
    id: nanoid(),
    src: '/src/assets/images/pre-workout.png',
    name: 'PRE-WORKOUT SUPREME',
    explanation: 'ANTRENMAN ÖNCESİ TAKVİYESİ',
    score: 5,
    comments: '6738 Yorum',
    price: '399 TL',
  },
  {
    id: nanoid(),
    src: '/src/assets/images/cream.png',
    name: 'CREAM OF RICE',
    explanation: 'EN LEZZETLİ PİRİNÇ KREMASI',
    score: 3,
    comments: '5216 Yorum',
    price: '239 TL',
  },
  {
    id: nanoid(),
    src: '/src/assets/images/creatine.png',
    name: 'CREATINE',
    explanation: 'EN POPÜLER SPORCU TAKVİYESİ',
    score: 5,
    comments: '8558 Yorum',
    price: '239 TL',
  },
];

  const ProductCard = ({ src, name, explanation, score, comments, price }: Product) => (
  <div className="grid justify-center p-1 ">
    <div className="bg-white  p-4 grid items-center w-full">
      <img className="w-168 h-168 object-cover mb-4 " src={src} alt={name} />
      <h2 className="text-center font-bold ">{name}</h2>
      <p className="text-xs text-center text-gray-600 mb-2">{explanation}</p>
      <div className="flex items-center mb-2">
      <Rating name="read-only" value={score} readOnly />
        </div>
        <div className='mt-5'>
        <span className="text-gray-600">{comments}</span>
      <p className="text-lg font-bold">{price}</p>
      </div>
    </div>
  </div>
);



const BestProduct = () => (
  <div className="container mx-auto p-4">
    <h1 className="flex justify-center p-3 text-2xl font-bold">ÇOK SATANLAR</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  </div>
);

export default BestProduct;
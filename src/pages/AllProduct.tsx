import { nanoid } from 'nanoid';
import { Rating } from '@mui/material';
import InfoBar from '../components/home/InfoBar';

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
  {
    id: nanoid(),
    src: '/src/assets/images/milk protein.png',
    name: 'WHEY PROTEIN',
    explanation: 'EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ',
    score: 5,
    comments: '10869 Yorum',
    price: '549 TL',
  },
  {
    id: nanoid(),
    src: '/src/assets/images/soya protein.png',
    name: 'WHEY PROTEIN',
    explanation: 'EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ',
    score: 5,
    comments: '10869 Yorum',
    price: '549 TL',
  },
  {
    id: nanoid(),
    src: "/src/assets/images/protein bar 2'li.png",
    name: 'WHEY PROTEIN',
    explanation: 'EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ',
    score: 5,
    comments: '10869 Yorum',
    price: '549 TL',
  },
  {
    id: nanoid(),
    src: '/src/assets/images/mass gainer.png',
    name: 'WHEY PROTEIN',
    explanation: 'EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ',
    score: 5,
    comments: '10869 Yorum',
    price: '549 TL',
  },
  {
    id: nanoid(),
    src: '/src/assets/images/protein bar.png',
    name: 'WHEY PROTEIN',
    explanation: 'EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ',
    score: 5,
    comments: '10869 Yorum',
    price: '549 TL',
  },
  {
    id: nanoid(),
    src: '/src/assets/images/collogane.png',
    name: 'WHEY PROTEIN',
    explanation: 'EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ',
    score: 5,
    comments: '10869 Yorum',
    price: '549 TL',
  },

];


const ProductCard = ({ src, name, explanation, score, comments, price }: Product) => (
  <div className="max-w-xs rounded overflow-hidden shadow-lg  bg-white m-1">
    <img className="w-full h-48 object-contain p-2" src={src} alt={name} />
    <div className="px-4 py-2">
      <h2 className="text-center font-bold text-xl mb-1">{name}</h2>
      <p className="text-xs text-center text-gray-600 mb-1">{explanation}</p>
      <div className="flex justify-center items-center mb-1">
        <Rating name="read-only" value={score} readOnly />
      </div>
      <div className="text-center">
        <span className="text-gray-600">{comments}</span>
        <p className="text-lg font-bold">{price}</p>
      </div>
    </div>
  </div>
);

const AllProduct = () => {
  return (
    <>
    <InfoBar/>
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">PROTEİN</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <h6 className='flex justify-center p-4 mt-10'>Toplam 15 ürün görüntüleniyor</h6>
    </div>
  
    </>
  );
}

export default AllProduct;



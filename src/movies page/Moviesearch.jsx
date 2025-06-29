import React, { useState } from 'react';
import Navlayout from './Navlayout';
import Tamilmovies from './Tamilmovies';
import Trendingmovies from './Trendingmovies';
import { useNavigate } from 'react-router-dom'; 
import Footer from '../pages/Footer';
const tamilmoveimages = [
  'https://images.filmibeat.com/webp/196x261/img/popcorn/movie_posters/ace-20240517184309-22920.jpg',
  'https://images.filmibeat.com/webp/196x261/img/popcorn/movie_posters/vembu-20250515153124-23698.jpg',
  'https://images.filmibeat.com/webp/196x261/img/popcorn/movie_posters/maaman-20250415140105-23345.jpg',
  'https://images.filmibeat.com/webp/196x261/img/popcorn/movie_posters/ddnextlevel-20250121114845-23417.jpg',
  'https://images.filmibeat.com/webp/196x261/img/popcorn/movie_posters/eleven-20250512110439-23689.jpg',
  'https://images.filmibeat.com/webp/196x261/img/popcorn/movie_posters/vallamai-20250523095400-23714.jpg',
  'https://images.filmibeat.com/webp/196x261/img/popcorn/movie_posters/goodbadugly-20250107103152-22236.jpg',
];

const trendingimages = [
  'https://tse1.mm.bing.net/th?id=OIP.CsSZEegNNZvSEC0XzjxaUAHaK2&pid=Api&P=0&h=180',
  'https://tse2.mm.bing.net/th?id=OIP.L3SOso61egwVMXvhyL8-aAHaLH&pid=Api&P=0&h=180',
  'https://tse4.mm.bing.net/th?id=OIP.ouCb47PwFrn-M-rM--btKgAAAA&pid=Api&P=0&h=180',
  'https://tse2.mm.bing.net/th?id=OIP.oTQp1l77Ha8sOPK03unMsAHaK-&pid=Api&P=0&h=180',
  'https://tse3.mm.bing.net/th?id=OIP.wkBrSkKEXSFLJteVcvGnsQAAAA&pid=Api&P=0&h=180',
  'https://tse3.mm.bing.net/th?id=OIP.zZfc_QqQdSHItcxujT0ZQQHaKs&pid=Api&P=0&h=180',
  'https://tse4.mm.bing.net/th?id=OIP.KN_OAG2w91iqR3i3krNhpwHaNK&pid=Api&P=0&h=180',
  'https://tse2.mm.bing.net/th?id=OIP.kGtUPbn5V3DPWjHcjdJc5wHaJ4&pid=Api&P=0&h=180',
  'https://tse4.mm.bing.net/th?id=OIP.KFdZpynV9IG8zGdhERLlVAHaKe&pid=Api&P=0&h=180',
];

const Moviesearch = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate(); 

  function handleclick(e) {
    e.preventDefault();
    if (input.trim() === '') {
      alert('Please enter a movie name');
      return;
    }
    navigate('/displaymovie', { state: { movieName: input } });
  }
    
  

  return (
    <section className='w-[100vw] min-h-[100vh] bg-[#010133] flex flex-col justify-center items-center'>
      <Navlayout />
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleclick(e);
          }
        }}
        placeholder='Enter movie name '
        className='sm:w-[30%] sm:h-[3rem] lg:w-[30%] md:w-[40%] h-[3rem] rounded-lg bg-[#1a1a2e] text-cyan-400 text-2xl font-mono px-4 mt-10 mb-8 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition'
      />
      <button
        type='submit'
        onClick={handleclick}
        className="bg-cyan-400 hover:bg-cyan-600 text-black font-bold py-2 px-8 rounded-lg transition mb-8"
      >
        Get
      </button>
      <Tamilmovies images={tamilmoveimages} />
      <Trendingmovies images={trendingimages} />
      <Footer/>
    </section>
  );
};

export default Moviesearch;
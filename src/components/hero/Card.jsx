import React from 'react'
import rubaet from './images/rubaet.jpg'
import nur from './images/nur.jpg'
import mojammel from './images/mojammel.jpg'
import pranto from './images/pranto.jpg'
import tousif from './images/tousif.jpg'
import sabbir from './images/sabbir.jpg'
import saidur from './images/saidur.jpg'
import ruhi from './images/ruhi.jpg'
import rupa from './images/rupa.jpg'
import maisha from './images/maisha.jpg'
import oishi from './images/oishi.jpg'


const list = [
    {
        id:"slide1",
        image:rubaet,
        title:"প্রিয় বড়ভাই রুবায়েত",
        caption:"ধন্যবাদ বড়ভাই। জন্মদিনে অনেক কিছুই দিয়েছ কিন্তু যা চেয়েছি তা এখনো দাও নি। আশা করছি জিনিসটা মাথায় রাখবা।",
    },
    {
        id:"slide2",
        image:nur,
        title:"প্রিয় রুমমেট নুর",
        caption:"ধন্যবাদ বড়ভাই। তুমি আমার সেরা রুমমেট। তোমার সাথে থাকতে আমার খুব ভালো লাগে তবে সবচেয়ে ভাল লাগে যখন তুমি থাক না ঃ)",
    },
    {
        id:"slide3",
        image:mojammel,
        title:"প্রিয় বাচ্চু মোজাম্মেল",
        caption:"ধন্যবাদ প্রিয় বাচ্চু। আশা করছি তুমি গালি খাওয়া বাচ্চু হবা না :)",
    },
    { 
        id:"slide4",
        image:pranto,
        title:"প্রিয় পোড়াকপাল প্রান্ত",
        caption:"পিও বড় ভাই, তোমার এত খারাপ কপাল দেখে আমি আহত। পরের বার আর কারও জন্মদিনে না আসার পরামর্শ দিচ্ছি।",
    },
    {
        id:"slide5",
        image:tousif,
        title:"প্রিয় তৌসিফ",
        caption:"পিও পুকির তৌসিফ , রাতে এভাবেই খেলে যাও। তোমাকেও অনেক ধন্যবাদ।",
    },
    {
        id:"slide6",
        image:sabbir,
        title:"প্রিয় সাব্বির",
        caption:"পিও বড়ভাই । আশা করছি তোমার লাইফ আবার স্বাভাবিক হবে, এমনি না হলেও অন্য কোনভাবে। ধন্যবাদ তোমাকে।",
    },
    {
        id:"slide7",
        image:saidur,
        title:"প্রিয় সাইদুর",
        caption:"পিও বড়ভাই, এভাবেই স্যারদের কে সময় দাও। তোমার জন্য অনেক শুভ কামনা। ",
    },
    {
        id:"slide8",
        image:ruhi,
        title:"প্রিয় ম্যাডাম রুহি",
        caption:"অসংখ্য ধন্যবাদ ম্যাডাম। আর কিছু বলার নাই কারণ আমি ভাষা হারিয়ে ফেলেছি।",
    },
    {
        id:"slide9",
        image:rupa,
        title:"প্রিয় দিদি রূপা",
        caption:"পিও দিদি, আপনাকেও অসংখ্য ধন্যবাদ। আশা করি আপনি দ্রুত সুস্থ হয়ে যাবেন।",
    },
    {
        id:"slide10",
        image:maisha,
        title:"প্রিয় পুকি মাইশা",
        caption:"পুকি! নামটা দিয়ে তুমি আমার সর্বনাশ করে ফেলেছ তাও তোমাকে অনেক ধন্যবাদ।",
    },
    {
        id:"slide11",
        image:oishi,
        title:"প্রিয় আপু ঐশী",
        caption:"পিও আপু, আপনি এভাবে আমার সাথে গাদ্দারি করেছেন তাই আপনার জন্যও শুভ কামনা।",
    }
] 

function Card() {
  return (
    <div className='hero min-h-screen bg-gray-800 flex items-center justify-center'>
        <div className='w-full md:w-[40%]  bg-gray-900 p-2 rounded-lg shadow-lg'>
            <div className="carousel w-full">
                {list.map((item) => (
                    <div key={item.id} id={item.id} className="carousel-item relative w-full">
                    {console.log(item.id)}
                        
                        <div className="card card-side bg-base-100 shadow-sm w-full">
                            <figure
                            className='w-1/2 h-full'
                            >
                                <img
                                className='w-full h-full object-cover'
                                src={item.image} />
                            </figure>
                            <div className="card-body w-1/2">
                                <h2 className="card-title">{item.title}</h2>
                                <p>{item.caption}</p>
                                
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href={`#${list[(list.indexOf(item) - 1 + list.length) % list.length].id}`} className="btn btn-circle bg-transparent">❮</a>
                            <a href={`#${list[(list.indexOf(item) + 1) % list.length].id}`} className="btn btn-circle bg-transparent">❯</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    
  )
}

export default Card
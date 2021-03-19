/**
 * Archivo configuracion de proyecto
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

/***
 * El componente principal ha sido reemplaado por
 */
import App from './routes/App'; //<-- Contenedor Principal

const initialState = {
  user: {},
  playing: {},
  myList: [
    {
      'id': 'tw-1',
      'slug': 'tvshow-2',
      'title': 'The witcher',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://www.lavanguardia.com/r/GODO/LV/p7/WebSite/2020/07/27/Recortada/img_psola_20191220-091814_imagenes_lv_terceros_thewitcher_101_unit_08529_rtpkej748hf-ktKD-U482551553415ckE-992x558@LaVanguardia-Web.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
  ],
  'witcher': [
    {
      'id': 'tw-1',
      'slug': 'tvshow-2',
      'title': 'The witcher',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://www.lavanguardia.com/r/GODO/LV/p7/WebSite/2020/07/27/Recortada/img_psola_20191220-091814_imagenes_lv_terceros_thewitcher_101_unit_08529_rtpkej748hf-ktKD-U482551553415ckE-992x558@LaVanguardia-Web.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
    {
      'id': 'tw-2',
      'slug': 'tvshow-2',
      'title': 'The witcher',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://e.rpp-noticias.io/xlarge/2020/01/22/890576the-witcher-henry-cavill3jpg.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
    {
      'id': 'tw-3',
      'slug': 'tvshow-2',
      'title': 'The witcher',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://miro.medium.com/max/3000/1*u4l3on17TnMXIvBpiMJwDw.jpeg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
    {
      'id': 'tw-4',
      'slug': 'tvshow-2',
      'title': 'The witcher',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://www.eltime.es/images02/cine/thewitcher/The_witcher_opinion_alberto_2.png',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
    {
      'id': 'tw-5',
      'slug': 'tvshow-2',
      'title': 'The witcher',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://pyxis.nymag.com/v1/imgs/84b/2cb/660b5ac7fe35e4f8f9493bbc29d5bd9a26-the-witcher-ep-05.rsquare.w1200.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
    {
      'id': 'tw-6',
      'slug': 'tvshow-2',
      'title': 'The witcher',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://www.muycomputer.com/wp-content/uploads/2020/07/Precuela-The-Witcher-Netflix-e1595917067237.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
  ],
  'papel': [
    {
      'id': 'cp-1',
      'slug': 'tvshow-2',
      'title': 'The witcher',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/10/15/Recortada/img_psola_20190802-083806_imagenes_lv_terceros_alba-flores-6_4_6_3812234712-kaVF-U47996801852l4C-992x558@LaVanguardia-Web.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      'id': 'cp-2',
      'slug': 'tvshow-2',
      'title': 'The witcher',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://cdn.culturagenial.com/es/imagenes/casa-papel-maqueta-fabrica-cke.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      'id': 'cp-3',
      'slug': 'tvshow-2',
      'title': 'The witcher',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://estaticos.elperiodico.com/resources/jpg/5/7/casa-papel-1585828783975.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      'id': 'cp-4',
      'slug': 'tvshow-2',
      'title': 'The witcher',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://www.duna.cl/media/2019/06/LA-CASA-DE-PAPEL_S01_EP01_0017.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      'id': 'cp-5',
      'slug': 'tvshow-2',
      'title': 'The witcher',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://www.rockandpop.cl/wp-content/uploads/2019/07/casa-papel-ks9-U80735641896NOE-624x385@Las-Provincias.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      'id': 'cp-6',
      'slug': 'tvshow-2',
      'title': 'The witcher',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://s1.eestatic.com/2019/07/23/cultura/series/Netflix-Series-Ursula_Corbero-Series_415970383_130773402_1024x576.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      'id': 'cp-7',
      'slug': 'tvshow-2',
      'title': 'The witcher',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://www.lavanguardia.com/r/GODO/LV/p7/WebSite/2020/04/07/Recortada/img_psola_20200402-191623_imagenes_lv_terceros_lcdp_416_unit_00410-kGKC-U48374432373sPC-992x558@LaVanguardia-Web.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      'id': 'cp-8',
      'slug': 'tvshow-2',
      'title': 'The witcher',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://finde.latercera.com/wp-content/uploads/2019/07/La-casa-de-Papel-parte-3-Netflix-03-700x450.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      'id': 'cp-9',
      'slug': 'tvshow-2',
      'title': 'The witcher',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://miro.medium.com/max/1200/1*1RkxNwdRZBx_BCAacJ7uRw.jpeg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      'id': 'cp-10',
      'slug': 'tvshow-2',
      'title': 'The witcher',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://ichef.bbci.co.uk/news/640/cpsprodpb/13805/production/_106277897_5a33bb22-2985-4022-920d-d8a506f4a5a0.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      'id': 'cp-11',
      'slug': 'tvshow-2',
      'title': 'The witcher',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://img.europapress.es/fotoweb/fotonoticia_20200403140658_420.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      'id': 'cp-12',
      'slug': 'tvshow-2',
      'title': 'The witcher',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/la-casa-de-papel-mascara-1596522870.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      'id': 'cp-13',
      'slug': 'tvshow-2',
      'title': 'The witcher',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/07/19/Recortada/img_psola_20181025-182746_imagenes_lv_terceros_captura_293_4_5_2548149192-k01G-U463585887987OQH-992x558@LaVanguardia-Web.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    }
  ],
  'trends': [
    {
      'id': 't-2',
      'slug': 'tvshow-2',
      'title': 'In the Dark',
      'type': 'Scripted',
      'language': 'English',
      'year': 2009,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'http://dummyimage.com/800x600.png/99118E/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      'id': 't-3',
      'slug': 'tvshow-3',
      'title': 'Instinct',
      'type': 'Adventure',
      'language': 'English',
      'year': 2002,
      'contentRating': '16+',
      'duration': 137,
      'cover': 'http://dummyimage.com/800x600.png/302140/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      'id': 't-4',
      'slug': 'tvshow-4',
      'title': 'Grand Hotel',
      'type': 'Comedy',
      'language': 'English',
      'year': 2014,
      'contentRating': '16+',
      'duration': 163,
      'cover': 'http://dummyimage.com/800x600.png/5472FF/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      'id': 't-5',
      'slug': 'tvshow-5',
      'title': 'Stargate Atlantis',
      'type': 'Scripted',
      'language': 'English',
      'year': 2014,
      'contentRating': '16+',
      'duration': 194,
      'cover': 'http://dummyimage.com/800x600.png/B36F20/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      'id': 't-6',
      'slug': 'tvshow-6',
      'title': 'Final Space',
      'type': 'Scripted',
      'language': 'English',
      'year': 2017,
      'contentRating': '16+',
      'duration': 124,
      'cover': 'http://dummyimage.com/800x600.png/CCC539/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      'id': 't-7',
      'slug': 'tvshow-7',
      'title': 'The InBetween',
      'type': 'Drama',
      'language': 'English',
      'year': 2011,
      'contentRating': '16+',
      'duration': 179,
      'cover': 'http://dummyimage.com/800x600.png/FF7A90/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    }
  ],
  'originals': [
    {
      'id': 't-8',
      'slug': 'tvshow-8',
      'title': 'Stargate Atlantis',
      'type': 'Action',
      'language': 'English',
      'year': 2012,
      'contentRating': '16+',
      'duration': 148,
      'cover': 'http://dummyimage.com/800x600.png/306880/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      'id': 't-9',
      'slug': 'tvshow-9',
      'title': 'Alien Highway',
      'type': 'Action',
      'language': 'English',
      'year': 2019,
      'contentRating': '16+',
      'duration': 128,
      'cover': 'http://dummyimage.com/800x600.png/604180/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      'id': 't-10',
      'slug': 'tvshow-10',
      'title': 'Elementary',
      'type': 'Animation',
      'language': 'English',
      'year': 2011,
      'contentRating': '16+',
      'duration': 346,
      'cover': 'http://dummyimage.com/800x600.png/FF91BA/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      'id': 't-11',
      'slug': 'tvshow-11',
      'title': 'Strange Angel',
      'type': 'War',
      'language': 'English',
      'year': 2015,
      'contentRating': '16+',
      'duration': 226,
      'cover': 'http://dummyimage.com/800x600.png/45807C/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      'id': 't-12',
      'slug': 'tvshow-12',
      'title': 'Private Eyes',
      'type': 'Comedy',
      'language': 'English',
      'year': 2018,
      'contentRating': '16+',
      'duration': 190,
      'cover': 'http://dummyimage.com/800x600.png/577380/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      'id': 't-13',
      'slug': 'tvshow-13',
      'title': 'NCIS: Los Angeles',
      'type': 'Drama',
      'language': 'English',
      'year': 2010,
      'contentRating': '16+',
      'duration': 160,
      'cover': 'http://dummyimage.com/800x600.png/5472FF/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    }
  ]
  
};

//Inicializar Stor -Redux
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

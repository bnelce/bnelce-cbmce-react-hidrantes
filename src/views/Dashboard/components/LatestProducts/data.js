import uuid from 'uuid/v1';
import moment from 'moment';

export default [
  {
    id: uuid(),
    name: 'CDD34423',
    imageUrl: '/images/hidrantes/hidrante1.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'CDD34343',
    imageUrl: '/images/hidrantes/hidrante2.jpg',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'CDD34343',
    imageUrl: '/images/hidrantes/hidrante2.jpg',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuid(),
    name: 'CDD34343',
    imageUrl: '/images/hidrantes/hidrante2.jpg',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuid(),
    name: 'CDD34343',
    imageUrl: '/images/hidrantes/hidrante1.png',
    updatedAt: moment().subtract(9, 'hours')
  }
];

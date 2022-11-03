import instance from './instance';

export const getCarList = {
  getAll: () => instance.get('/'),
};
// export const getCarCategory = {
//   // getLargeCar: () => instance.get('?segment=E'),
//   // getMidCar: () => instance.get('?segment=B'),
//   // getSmallCar: () => instance.get('?segment=C'),
//   // getSUV: () => instance.get('?segment=SUV'),
// };
export const getCarDetail = {
  getCarDetail: (id) => instance.get(`/${id}`),
};

import {
  Service,
  ServiceCategory,
  ServiceType,
} from '../../../functions/src/entities/models/service';

export const createdServices: Array<Service> = [
  {
    id: '0',
    name: 'Lectura de la decisión',
    category: ServiceCategory.TAROT,
    duration: 45,
    price: 10000,
    type: ServiceType.SINGLE,
  },
  {
    id: '1',
    name: 'Concepción Consciente',
    category: ServiceCategory.DOULA,
    duration: 45,
    price: 10000,
    type: ServiceType.RECURRENT,
  },
  {
    id: '2',
    name: 'Apego seguro',
    category: ServiceCategory.DOULA,
    duration: 45,
    price: 10000,
    type: ServiceType.RECURRENT,
  },
];

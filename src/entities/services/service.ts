export type Service = {
  id: string;
  name: string;
  category: ServiceCategory;
  type: ServiceType;
  duration: number;
  price: number;
  description?: string;
  icon?: React.Component;
};

export enum ServiceType {
  RECURRENT = 'Recurrente',
  SINGLE = 'Único',
}

export enum ServiceCategory {
  TAROT = 'Tarot',
  DOULA = 'Doula',
}

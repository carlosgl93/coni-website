import { CreateService, Service } from '../../entities';

export interface IServicesRepository {
  createService(service: CreateService): Promise<Service>;
}

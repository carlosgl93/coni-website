import { CreateService, Service } from '../../entities';
import { db } from '../services/firebase';
import * as logger from 'firebase-functions/logger';
import { IServicesRepository } from '../../application/repositories/service.repository.interface';

export class ServicesRepository implements IServicesRepository {
  async createService(service: CreateService): Promise<Service> {
    try {
      const newServiceRef = await db.collection('services').add(service);
      const newService: Service = {
        id: newServiceRef.id,
        ...service,
      };
      return newService;
    } catch (error) {
      logger.error('Error creating service', error);
      throw new Error('Error creating service');
    }
  }
}

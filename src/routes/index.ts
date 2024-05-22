import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Welcome]: {
    component: asyncComponentLoader(() => import('@/pages/Welcome')),
    path: '/',
    title: 'Inicio',
  },
  [Pages.Tarot]: {
    component: asyncComponentLoader(() => import('@/pages/Tarot')),
    path: '/tarot',
    title: 'Tarot',
  },
  [Pages.Doula]: {
    component: asyncComponentLoader(() => import('@/pages/Doula')),
    path: '/doula-birth-keeper',
    title: 'Doula Birth Keeper',
  },
  [Pages.EmbarazoConsciente]: {
    component: asyncComponentLoader(() => import('@/pages/EmbarazoConsciente')),
    path: '/embarazo-consciente',
    title: 'Embarazo Consciente',
  },
  [Pages.PartoPositivo]: {
    component: asyncComponentLoader(() => import('@/pages/PartoPositivo')),
    path: '/parto-positivo',
    title: 'Parto Positivo',
  },
  [Pages.SobreMi]: {
    component: asyncComponentLoader(() => import('@/pages/SobreMi')),
    path: '/sobre-mi',
    title: 'Sobre Mi',
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
};

export default routes;

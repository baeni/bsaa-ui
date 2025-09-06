'use client';

import React from 'react';
import { App, AppStatus } from '@/application/models/App';
import AppCard from '@/app/_components/App/AppCard';
import grabsImage from '@/app/_assets/images/apps/grabs/grabs-en.png';

export default function AppList() {
  const apps: App[] = [
    {
      id: 'grabs',
      status: AppStatus.COMING_SOON,
      title: 'Grabs',
      description:
        'Organize your grocery lists the smart way – by stores, so you never miss a grab again.',
      featured_image: grabsImage.src,
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {apps.map((app: App) => (
        <AppCard app={app} key={app.id} />
      ))}
    </div>
  );
}

'use client';

import dynamic from 'next/dynamic';

const DoodleCanvas = dynamic(
  () => import('./DoodleCanvas').then((m) => m.DoodleCanvas),
  { ssr: false }
);

export function DoodleCanvasWrapper() {
  return <DoodleCanvas />;
}

"use client"

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const DynamicP5Sketch = dynamic(() => import('./P5Sketch'), { 
  ssr: false 
});

export default function SnowAnimation() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <DynamicP5Sketch />
  );
}
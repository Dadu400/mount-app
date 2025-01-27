import { useEffect, useRef } from 'react';

import p5 from 'p5';

export const useP5 = (sketch: (p: p5) => void) => {
  const p5ContainerRef = useRef<HTMLDivElement>(null)
  const p5InstanceRef = useRef<p5 | null>(null)

  useEffect(() => {
    if (p5ContainerRef.current) {
      p5InstanceRef.current = new p5(sketch, p5ContainerRef.current)
    }

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove()
      }
    }
  }, [sketch])

  return p5ContainerRef;
}


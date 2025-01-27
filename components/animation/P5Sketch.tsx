"use client"

import { useP5 } from '@/hooks/useP5';
import p5 from 'p5';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  alpha: number;
  update: () => void;
  display: (p: p5) => void;
}

const sketch = (p: p5) => {
  const particles: Particle[] = [];

  p.setup = () => {
    const canvasWidth = document.body.clientWidth;
    const canvasHeight = 200; 
    p.createCanvas(canvasWidth, canvasHeight);
  }

  p.draw = () => {
    p.clear();
    p.background(0, 0);

    if (p.frameCount % 5 === 0) {
      particles.push(createParticle(p));
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].display(p);

      if (particles[i].alpha <= 0) {
        particles.splice(i, 1);
      }
    }
  }

  function createParticle(p: p5): Particle {
    return {
      x: p.random(p.width),
      y: 0,
      size: p.random(1, 5),
      speedX: p.random(-0.5, 0.5),
      speedY: p.random(1, 2), 
      alpha: 500,

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 3;
      },
      
      display(p: p5) {
        p.noStroke();
        p.fill(255, 255, 255, this.alpha);
        p.ellipse(this.x, this.y, this.size);
      }
    };
  }
}

export default function P5Sketch() {
  const p5ContainerRef = useP5(sketch)

  return (
    <div 
      ref={p5ContainerRef} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: -1 
      }}
    />
  )
}
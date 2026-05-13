import * as lucide from 'lucide-react';

const icons = [
  'ArrowRight', 
  'CheckCircle2', 
  'Shield', 
  'Sparkles', 
  'TrendingUp', 
  'Terminal', 
  'Globe', 
  'Activity',
  'BarChart3',
  'Lock',
  'ChevronDown',
  'Bot'
];

console.log('Testing lucide-react exports:');
icons.forEach(icon => {
  console.log(`${icon}: ${typeof lucide[icon]}`);
});

import CountUp from 'react-countup';
console.log('CountUp (default):', typeof CountUp, CountUp);

import Marquee from 'react-fast-marquee';
console.log('Marquee (default):', typeof Marquee, Marquee);

import { Swiper, SwiperSlide } from 'swiper/react';
console.log('Swiper:', typeof Swiper);
console.log('SwiperSlide:', typeof SwiperSlide);

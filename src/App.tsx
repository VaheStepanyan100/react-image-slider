import { ImageSlider } from './ImageSlider';
import car1 from './imgs/car-1.avif';
import car2 from './imgs/car-2.avif';
import car3 from './imgs/car-3.avif';
import car4 from './imgs/car-4.avif';
import car5 from './imgs/car-5.avif';

const IMAGES = [
  { url: car1, alt: 'Car One' },
  { url: car2, alt: 'Car Two' },
  { url: car3, alt: 'Car Three' },
  { url: car4, alt: 'Car Four' },
  { url: car5, alt: 'Car Five' },
];

export default function App() {
  return (
    <div
      style={{
        maxWidth: '1200px',
        width: '100%',
        aspectRatio: '7 / 4',
        margin: '0 auto',
      }}
    >
      <ImageSlider images={IMAGES} />
      <a href="/" style={{ fontSize: '2rem' }}>
        Link
      </a>
    </div>
  );
}

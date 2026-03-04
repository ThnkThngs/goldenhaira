import product1 from '@/assets/product-1.jpeg';
import product2 from '@/assets/product-2.jpeg';
import productFront from '@/assets/product-front.jpeg';
import productPair from '@/assets/product-pair.jpeg';

const images = [
  { src: product1, alt: 'Product with packaging' },
  { src: product2, alt: 'Product alternate angle' },
  { src: productFront, alt: 'Product front view' },
  { src: productPair, alt: 'Bottle and tube together' },
];

const ImageGrid = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {images.map((img, idx) => (
          <div key={idx} className="relative aspect-square overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;

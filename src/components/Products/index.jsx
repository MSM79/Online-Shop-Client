import React from 'react';

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '/productoverview',
    price: '$48',
    imageSrc: '/images/16.jpg',
    imageAlt: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '/productoverview',
    price: '$35',
    imageSrc: '/images/17.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '/productoverview',
    price: '$89',
    imageSrc: '/images/18.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Artwork Tee',
    href: '/productoverview',
    price: '$35',
    imageSrc: '/images/16.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Artwork Tee',
    href: '/productoverview',
    price: '$35',
    imageSrc: '/images/23.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 6,
    name: 'Artwork Tee',
    href: '/productoverview',
    price: '$35',
    imageSrc: '/images/24.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 7,
    name: 'Artwork Tee',
    href: '/productoverview',
    price: '$35',
    imageSrc: '/images/25.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 9,
    name: 'Basic Tee',
    href: '/productoverview',
    price: '$37',
    imageSrc: '/images/32.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 10,
    name: 'Artwork Tee',
    href: '/productoverview',
    price: '$36',
    imageSrc: '/images/31.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
];

export default function Products(props) {
  const { title, classs } = props;
  return (
    <div className="bg-white">
      <div
        className={
          'mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8 xs:pb-2' + props.classs
        }
      >
        <h2 className="text-3xl py-4">{title}</h2>

        <div className="grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 xs:py-4">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
              <a href="/productoverview">
                <button className="bg-slate-100 lg:py-2 lg:px-4 rounded-lg font-medium w-full mt-2 hover:bg-slate-200 xs:px-1 xs:py-1 xs:text-sm">
                  Add to bag
                </button>
              </a>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';
import { Gallery, GalleryProps } from 'react-grid-gallery';
import { useState } from 'react';
import { Auth } from '@/auth/Auth';

export function AnkhUiGallery(props: IAnkhUiGridGallery) {
  const [images, setImages] = useState(props.images || []);

  /*
  useEffect(() => {
    async function getPhoto(q: string) {
      const res = await fetch(
        `https://api.unsplash.com/photos/random?q=${q}&client_id=pWQstqRcdVLQwwi-FWsuVZflWzn4Weq16otmlBI2ouQ`,
        { method: 'GET' }
      );
      const photo = await res.json();
      const img: Image = {
        caption: "test",
        alt: 'test',
        src: photo.urls.raw,
        width: 320,
        height: 174,
        tags: [{ value: 'tag', title: 'tagTitle' }]
      };
      setImages((images) => images.concat([img]));
    }
    getPhoto('model');
    getPhoto('darth&20vader');
    getPhoto('superman');
    getPhoto('smiley');
  }, []);
  */

  function onSelect(index: number) {
    const nextImages = images.map((image, i) =>
      i === index ? { ...image, isSelected: !image.isSelected } : image
    )
    setImages(nextImages);
  };

  return (
    <Auth.ReadRole>
      <Gallery onSelect={onSelect} images={images} />
    </Auth.ReadRole>
  );
}

interface IAnkhUiGridGallery extends GalleryProps { }

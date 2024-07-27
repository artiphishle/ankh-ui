'use client';

import {/* Image, */ Gallery, GalleryProps} from 'react-grid-gallery';
import {useEffect, useState, type MouseEvent} from 'react';
import {Auth} from '@/auth/Auth';

export function AnkhUiGallery(props: IAnkhUiGridGallery) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function getPhoto(q: string) {
      const res = await fetch(
        `https://api.unsplash.com/photos/random?q=${q}&client_id=pWQstqRcdVLQwwi-FWsuVZflWzn4Weq16otmlBI2ouQ`,
        {method: 'GET'}
      );
      const photo = await res.json();
      /*
      const img: Image = {
        caption: "test",
        alt: 'test',
        src: photo.urls.raw,
        width: 320,
        height: 174,
        tags: [{ value: 'tag', title: 'tagTitle' }]
      };
      setImages((images) => images.concat([img]));
      */
    }
    getPhoto('model');
    getPhoto('darth&20vader');
    getPhoto('superman');
    getPhoto('smiley');
  }, []);

  /*
  function onSelect(index: number, item: typeof Image, event: MouseEvent<HTMLElement>) {
    const nextImages = images.map((image, i) =>
      i === index ? { ...image, isSelected: !image.isSelected } : image
    )
    setImages(nextImages);
  };
  */
  function onClick(event: MouseEvent<HTMLElement>) {
    console.log('onClick', event);
  }

  return (
    <Auth.ReadRole>
      <Gallery images={images} />
    </Auth.ReadRole>
  );
}

interface IAnkhUiGridGallery extends GalleryProps {}

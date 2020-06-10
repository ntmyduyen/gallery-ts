import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Images} from '../Images';
import {FAVOURITE_TYPE} from '../../redux/actionTypes/favourite';
import {RootFavouriteState} from '../../pages/Favourite';

interface Props {
  images: any[];
  isLoading: boolean;
  loadFunc: () => void;
  onSelect: (item: FAVOURITE_TYPE) => void;
}

const ListImage: React.SFC<Props> = ({
  images,
  isLoading,
  loadFunc,
  onSelect,
}: Props) => {
  const loaderRef = useRef<HTMLDivElement>(null);

  const favourites = useSelector((state: RootFavouriteState) => {
    return state.favourite.favourite;
  });
  
  useEffect(() => {
    console.log('render')
    let observer: IntersectionObserver;
    if (loaderRef.current) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const y = entry.boundingClientRect.top;
            if (entry.isIntersecting && loaderRef.current) {
              observer.unobserve(loaderRef.current);
              loadFunc();
            }
          });
        });
        observer.observe(loaderRef.current);
      }
    }

    return () => {
      if (observer && observer.unobserve && loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [images, loaderRef]);

  return (
    <>
      <div className="list-image">
        {images.map((item) => (
          <Images
            key={item.id}
            item={item}
            onSelect={onSelect}
            isFavourite={(favourites as any)[item.id]}
          />
        ))}
      </div>
      <div ref={loaderRef}>{isLoading && <CircularProgress />}</div>
    </>
  );
};

export default ListImage;

import React, {useEffect, useRef, useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Images} from '../Images';

interface Props {
  images: any[];
  isLoading: boolean;
  loadFunc: () => void;
}

const ListImage: React.SFC<Props> = ({images, isLoading, loadFunc}: Props) => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    console.log('loaderRef', loaderRef);

    if (loaderRef.current) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting && loaderRef.current) {
              observer.unobserve(loaderRef.current);
              loadFunc();
              console.log('load more ....');
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
  }, [loaderRef]);

  // if (isLoading) return <CircularProgress />;

  return (
    <>
      <div className="list-image">
        {images.length > 0 ? (
          <>
            {images.map((item) => (
              <Images key={item.id} item={item} />
            ))}
            {/* <div className="list-image__loader" ref={loaderRef}>
              <div className="loader">
                <button className="loader__btn">Load more ...</button>
              </div>
            </div> */}
          </>
        ) : (
          'No data'
        )}
      </div>
      <div ref={loaderRef}>
        {isLoading && <CircularProgress />}
      </div>
    </>
  );
};

export default ListImage;

import React, {useEffect, useCallback, useState, useRef} from 'react';

interface Props {
  item: {
    url: string;
    slug: string;
  };
}
const placeHolder =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAFBQUFBVUFpkZFp9h3iHfbmqm5uquf/I18jXyP////////////////////////////////////////////////8BUFBQUFVQWmRkWn2HeId9uaqbm6q5/8jXyNfI///////////////////////////////////////////////////CABEIAZACWAMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAAAv/aAAgBAQAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECEAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/2gAIAQMQAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//8QAFBABAAAAAAAAAAAAAAAAAAAAsP/aAAgBAQABPwBqb//EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQIBAT8Abb//xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAEDAQE/AG2//9k=';

export const Images: React.SFC<Props> = ({item}: Props) => {
  const [imageSrc, setImageSrc] = useState(placeHolder);
  // const [imageRef, setImageRef] = useState();
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (imageRef.current && imageSrc !== item.url) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && imageRef.current) {
              setImageSrc(item.url);
              observer.unobserve(imageRef.current);
            }
          });
        });
        observer.observe(imageRef.current);
      } else {
        setImageSrc(item.url);
      }
    }
    return () => {
      if (observer && observer.unobserve && imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [item, imageSrc, imageRef]);

  return (
    <div className="image">
      <img src={imageSrc} alt={item.slug} ref={imageRef} />
    </div>
  );
};

import * as React from "react";
import ProgressiveImage from "react-progressive-image";
import { BlurhashCanvas } from "react-blurhash";
import { Image } from "@chakra-ui/react";
import placeholder from "../assets/images/placeholder.png";

type LazyImageProps = {
  src: string;
  blurHash: string;
};

const LazyImage = (props: LazyImageProps) => {
  const { src, blurHash } = props;

  return (
    <ProgressiveImage delay={500} src={src} placeholder={placeholder}>
      {(src, loading) => {
        return loading ? (
          <BlurhashCanvas hash={blurHash} width={400} height={300} punch={1} />
        ) : (
          <Image
            src={src}
            objectFit="cover"
            alt="cover image"
            fallbackSrc={placeholder}
          />
        );
      }}
    </ProgressiveImage>
  );
};

export default LazyImage;

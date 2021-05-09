import * as React from "react";
import ProgressiveImage from "react-progressive-image";
import { BlurhashCanvas } from "react-blurhash";
import { Image } from "@chakra-ui/react";
import placeholder from "assets/images/placeholder.png";

type LazyImageProps = {
  src: string;
  blurHash: string;
  size?: string;
  width?: number;
  height?: number;
  layout?: string;
  rounded?: string;
};

const LazyImage = (props: LazyImageProps) => {
  const { src, blurHash, width, height, size, layout, rounded } = props;

  return (
    <ProgressiveImage delay={500} src={src} placeholder={placeholder}>
      {(src, loading) => {
        return loading ? (
          <BlurhashCanvas
            hash={blurHash}
            width={width}
            height={height}
            punch={1}
            style={{ borderRadius: rounded ? "5px" : "" }}
          />
        ) : (
          <Image
            src={src}
            objectFit="cover"
            alt="cover image"
            width={width}
            height={height}
            size={size}
            layout={layout}
            rounded={rounded}
            fallbackSrc={placeholder}
          />
        );
      }}
    </ProgressiveImage>
  );
};

export default LazyImage;

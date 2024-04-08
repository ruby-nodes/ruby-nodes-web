import React from "react";
import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

export function MdxImage(props: ImageProps) {
  const { width, height } = props;
  if (width && height) {
    return (
      <Image
        {...props}
        className={twMerge("object-contain", props.className)}
        alt={props.alt}
      />
    );
  }
  return (
    <Image
      {...props}
      style={{
        width: "100%",
        height: "auto",
      }}
      className={twMerge(
        "object-contain mx-auto max-h-[300px]",
        props.className
      )}
      alt={props.alt}
    />
  );
}

'use client';

import { useState } from 'react';

export default function SafeImage({ src, alt, className, fallback }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`${className} img-fallback`} role="img" aria-label={alt}>
        {fallback}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

import React, { useState } from 'react';

interface VKVideoPlayerProps {
  ownerId: number; // ID владельца (пользователь или группа)
  videoId: string; // Идентификатор видео
  className?: string;
  poster?: string; // превью до загрузки iframe
}

{
  /* <VKVideoPlayer ownerId={-220754053} videoId="456243399" /> */
}

export const VKVideoPlayer: React.FC<VKVideoPlayerProps> = ({
  ownerId,
  videoId,
  className,
  poster,
}) => {
  const src = `https://vk.com/video_ext.php?oid=${ownerId}&id=${videoId}&hd=2&`;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: poster
          ? `center / cover no-repeat url(${poster})`
          : 'linear-gradient(135deg, #1c1a1a 0%, #2f2621 100%)',
      }}
    >
      {!isLoaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#e3c7a3',
            fontSize: 16,
            letterSpacing: '0.02em',
            background: 'rgba(0,0,0,0.35)',
            backdropFilter: 'blur(2px)',
            zIndex: 1,
          }}
        >
          Загрузка видео…
        </div>
      )}
      <iframe
        src={src}
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        sandbox="allow-same-origin allow-scripts"
        onLoad={() => setIsLoaded(true)}
        style={{
          border: 'none',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 200ms ease',
          display: 'block',
        }}
      ></iframe>
    </div>
  );
};

import React from 'react';

interface VKVideoPlayerProps {
  ownerId: number; // ID владельца (пользователь или группа)
  videoId: string; // Идентификатор видео
  width?: string;
  height?: string;
}

{/* <VKVideoPlayer ownerId={-220754053} videoId="456243399" /> */}

export const VKVideoPlayer: React.FC<VKVideoPlayerProps> = ({
  ownerId,
  videoId,
  width = '768px',
  height = '432px',
}) => {
  const src = `https://vk.com/video_ext.php?oid=${ownerId}&id=${videoId}&hd=2&autoplay=0`;

  return (
    <div style={{ position: 'relative', width, height, margin: '0 auto' }}>
      <iframe
        src={src}
        width="100%"
        height="100%"
        allow="autoplay; encrypted-media"
        allowFullScreen
        frameBorder="0"
        style={{ borderRadius: '8px' }}
      ></iframe>
    </div>
  );
};

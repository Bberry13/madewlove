import React from 'react';

interface VKVideoPlayerProps {
  ownerId: number; // ID владельца (пользователь или группа)
  videoId: string; // Идентификатор видео
  className?: string;
}

{
  /* <VKVideoPlayer ownerId={-220754053} videoId="456243399" /> */
}

export const VKVideoPlayer: React.FC<VKVideoPlayerProps> = ({
  ownerId,
  videoId,
  className,
}) => {
  const src = `https://vk.com/video_ext.php?oid=${ownerId}&id=${videoId}&hd=2&`;

  return (
    <div className={className}>
      <iframe
        src={src}
        width="100%"
        height="100%"
        allowFullScreen
        sandbox="allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
};

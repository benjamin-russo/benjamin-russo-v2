import { IconColors } from '../consts';

interface CloseProps {
  color?: IconColors;
  height?: number;
  width?: number;
}

const Close = (props: CloseProps) => {
  const { color = IconColors.primary, height = 24, width = 24 } = props;
  return (
    <svg width={width} height={height} viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_418_436)'>
        <path
          d='M20 17.6433L28.25 9.39334L30.6066 11.75L22.3566 20L30.6066 28.25L28.25 30.6067L20 22.3567L11.75 30.6067L9.39331 28.25L17.6433 20L9.39331 11.75L11.75 9.39334L20 17.6433Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_418_436'>
          <rect width='40' height='40' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Close;

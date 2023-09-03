import { IconColors } from '../consts';

interface ArrowUpProps {
  color?: IconColors;
  height?: number;
  width?: number;
}

const ArrowUp = (props: ArrowUpProps) => {
  const { color = IconColors.primary, height = 24, width = 24 } = props;
  return (
    <svg width={width} height={height} viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_464_86)'>
        <path d='M20 21.9533L28.25 13.7033L30.6066 16.06L20 26.6667L9.39331 16.06L11.75 13.7033L20 21.9533Z' fill={color} />
      </g>
      <defs>
        <clipPath id='clip0_464_86'>
          <rect width='40' height='40' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowUp;

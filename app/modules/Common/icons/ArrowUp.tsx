import { IconColors } from '../consts';

interface ArrowDownProps {
  color?: IconColors;
  height?: number;
  width?: number;
}

const ArrowDown = (props: ArrowDownProps) => {
  const { color = IconColors.primary, height = 24, width = 24 } = props;
  return (
    <svg width={width} height={height} viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_478_11)'>
        <path d='M20 18.0467L11.75 26.2967L9.39331 23.94L20 13.3333L30.6066 23.94L28.25 26.2967L20 18.0467Z' fill={color} />
      </g>
      <defs>
        <clipPath id='clip0_478_11'>
          <rect width='40' height='40' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowDown;

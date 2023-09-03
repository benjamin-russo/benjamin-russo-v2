import { IconColors } from '../consts';

interface BurgerProps {
  color?: IconColors;
  height?: number;
  width?: number;
}

const Burger = (props: BurgerProps) => {
  const { color = IconColors.primary, height = 24, width = 24 } = props;
  return (
    <svg width={width} height={height} viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_418_420)'>
        <path d='M5 6.66669H35V10H5V6.66669ZM5 18.3334H35V21.6667H5V18.3334ZM5 30H35V33.3334H5V30Z' fill={color} />
      </g>
      <defs>
        <clipPath id='clip0_418_420'>
          <rect width='40' height='40' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Burger;

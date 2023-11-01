import { IconColors } from '../consts';

interface CheckProps {
  color?: IconColors;
  height?: number;
  width?: number;
}

const Check = (props: CheckProps) => {
  const { color = IconColors.white, height = 24, width = 24 } = props;
  return (
    <svg width={width} height={height} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_418_516)'>
        <path
          d='M8.33336 12.6433L15.9934 4.9825L17.1725 6.16083L8.33336 15L3.03003 9.69666L4.20836 8.51833L8.33336 12.6433Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_418_516'>
          <rect width='20' height='20' fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Check;

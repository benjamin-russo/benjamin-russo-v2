import { IconColors } from '../consts';

interface CodeProps {
  color?: IconColors;
  height?: number;
  width?: number;
}

const Code = (props: CodeProps) => {
  const { color = IconColors.primary, height = 24, width = 24 } = props;
  return (
    <svg width={width} height={height} viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_464_78)'>
        <path
          d='M27.5001 30L9.8226 47.6775L6.2876 44.1425L20.4301 30L6.2876 15.8575L9.8226 12.325L27.5001 30ZM27.5001 47.5H52.5001V52.5H27.5001V47.5Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_464_78'>
          <rect width='60' height='60' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Code;

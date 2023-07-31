interface LinkedinProps {
  height?: number;
  width?: number;
}

const Linkedin = (props: LinkedinProps) => {
  const { height = 24, width = 24 } = props;
  return (
    <svg aria-label='linkedin' width={width} height={height} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1.33333 0H22.6667C23.0203 0 23.3594 0.140476 23.6095 0.390524C23.8595 0.640573 24 0.979711 24 1.33333V22.6667C24 23.0203 23.8595 23.3594 23.6095 23.6095C23.3594 23.8595 23.0203 24 22.6667 24H1.33333C0.979711 24 0.640573 23.8595 0.390524 23.6095C0.140476 23.3594 0 23.0203 0 22.6667V1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0ZM2.66667 2.66667V21.3333H21.3333V2.66667H2.66667ZM6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8ZM4.66667 9.33333H7.33333V19.3333H4.66667V9.33333ZM12 9.90667C12.7787 9.15333 13.688 8.66667 14.6667 8.66667C17.428 8.66667 19.3333 10.9053 19.3333 13.6667V19.3333H16.6667V13.6667C16.6667 13.0478 16.4208 12.4543 15.9832 12.0168C15.5457 11.5792 14.9522 11.3333 14.3333 11.3333C13.7145 11.3333 13.121 11.5792 12.6834 12.0168C12.2458 12.4543 12 13.0478 12 13.6667V19.3333H9.33333V9.33333H12V9.90667Z'
        fill='#1CB4CD'
      />
    </svg>
  );
};

export default Linkedin;
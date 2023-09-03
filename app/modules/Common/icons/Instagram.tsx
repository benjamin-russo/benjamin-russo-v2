import { IconColors } from '../consts';

interface InstagramProps {
  color?: IconColors;
  height?: number;
  width?: number;
}

const Instagram = (props: InstagramProps) => {
  const { color = IconColors.primary, height = 24, width = 24 } = props;
  return (
    <svg aria-label='instagram' width={width} height={height} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12 8.4C11.0452 8.4 10.1295 8.77928 9.45442 9.45442C8.77928 10.1295 8.4 11.0452 8.4 12C8.4 12.9548 8.77928 13.8705 9.45442 14.5456C10.1295 15.2207 11.0452 15.6 12 15.6C12.9548 15.6 13.8705 15.2207 14.5456 14.5456C15.2207 13.8705 15.6 12.9548 15.6 12C15.6 11.0452 15.2207 10.1295 14.5456 9.45442C13.8705 8.77928 12.9548 8.4 12 8.4ZM12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6ZM19.8 5.7C19.8 6.09783 19.642 6.47936 19.3607 6.76066C19.0794 7.04197 18.6978 7.2 18.3 7.2C17.9022 7.2 17.5206 7.04197 17.2393 6.76066C16.958 6.47936 16.8 6.09783 16.8 5.7C16.8 5.30218 16.958 4.92064 17.2393 4.63934C17.5206 4.35804 17.9022 4.2 18.3 4.2C18.6978 4.2 19.0794 4.35804 19.3607 4.63934C19.642 4.92064 19.8 5.30218 19.8 5.7ZM12 2.4C9.0312 2.4 8.5464 2.4084 7.1652 2.4696C6.2244 2.514 5.5932 2.64 5.0076 2.868C4.51754 3.04793 4.0745 3.33631 3.7116 3.7116C3.33601 4.07448 3.04722 4.5175 2.8668 5.0076C2.6388 5.5956 2.5128 6.2256 2.4696 7.1652C2.4072 8.49 2.4 8.9532 2.4 12C2.4 14.9688 2.4084 15.4536 2.4696 16.8348C2.514 17.7744 2.64 18.4068 2.8668 18.9912C3.0708 19.5132 3.3108 19.8888 3.7092 20.2872C4.1136 20.6904 4.4892 20.9316 5.0052 21.1308C5.598 21.36 6.2292 21.4872 7.1652 21.5304C8.49 21.5928 8.9532 21.6 12 21.6C14.9688 21.6 15.4536 21.5916 16.8348 21.5304C17.7732 21.486 18.4056 21.36 18.9912 21.1332C19.4805 20.9524 19.9233 20.6646 20.2872 20.2908C20.6916 19.8864 20.9328 19.5108 21.132 18.9948C21.36 18.4032 21.4872 17.7708 21.5304 16.8348C21.5928 15.51 21.6 15.0468 21.6 12C21.6 9.0312 21.5916 8.5464 21.5304 7.1652C21.486 6.2268 21.36 5.5932 21.132 5.0076C20.9512 4.518 20.6629 4.07515 20.2884 3.7116C19.9257 3.33582 19.4826 3.047 18.9924 2.8668C18.4044 2.6388 17.7732 2.5128 16.8348 2.4696C15.51 2.4072 15.0468 2.4 12 2.4ZM12 0C15.2604 0 15.6672 0.0119999 16.9464 0.0719999C18.2244 0.132 19.0944 0.3324 19.86 0.63C20.652 0.9348 21.3192 1.3476 21.9864 2.0136C22.5966 2.61348 23.0687 3.33911 23.37 4.14C23.6664 4.9044 23.868 5.7756 23.928 7.0536C23.9844 8.3328 24 8.7396 24 12C24 15.2604 23.988 15.6672 23.928 16.9464C23.868 18.2244 23.6664 19.0944 23.37 19.86C23.0696 20.6613 22.5973 21.3871 21.9864 21.9864C21.3864 22.5964 20.6608 23.0685 19.86 23.37C19.0956 23.6664 18.2244 23.868 16.9464 23.928C15.6672 23.9844 15.2604 24 12 24C8.7396 24 8.3328 23.988 7.0536 23.928C5.7756 23.868 4.9056 23.6664 4.14 23.37C3.33879 23.0694 2.61303 22.5971 2.0136 21.9864C1.40329 21.3866 0.931118 20.661 0.63 19.86C0.3324 19.0956 0.132 18.2244 0.0719999 16.9464C0.0155999 15.6672 0 15.2604 0 12C0 8.7396 0.0119999 8.3328 0.0719999 7.0536C0.132 5.7744 0.3324 4.9056 0.63 4.14C0.930283 3.33862 1.40256 2.61279 2.0136 2.0136C2.61321 1.40308 3.33891 0.930875 4.14 0.63C4.9056 0.3324 5.7744 0.132 7.0536 0.0719999C8.3328 0.0155999 8.7396 0 12 0Z'
        fill={color}
      />
    </svg>
  );
};

export default Instagram;

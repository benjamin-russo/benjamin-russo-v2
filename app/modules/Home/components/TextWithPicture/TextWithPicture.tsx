import Image from 'next/image';

import styles from './TextWithPicture.module.scss';

const TextWithPicture = () => {
  return (
    <section className={styles['TextWithPicture']} id='about-me'>
      <div className={styles['TextWithPicture-left']}>
        <Image fill height={500} width={500} src='' alt='' placeholder='empty' />
      </div>
      <div className={styles['TextWithPicture-right']}>
        <h2 className={styles['TextWithPicture-title']}>A propos de moi ...</h2>
        <p className={styles['TextWithPicture-text']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum ex faucibus lectus rutrum, in lacinia ligula
          volutpat. Donec posuere imperdiet neque eget ultricies. Nam id ex nec mi iaculis luctus. Integer vel metus ipsum. Duis a
          est vel sapien posuere fringilla eget hendrerit nisl. Sed tincidunt erat id lacus mattis efficitur. Sed vehicula ut diam
          imperdiet pellentesque. Ut et dapibus mauris. Mauris tincidunt elit tortor, in tincidunt nunc volutpat ut. Nullam sed
          fringilla velit. Donec feugiat sodales ipsum, sit amet egestas metus hendrerit condimentum. Vestibulum viverra nisl id
          dui maximus eleifend. Duis cursus enim tempus, blandit lacus ut, vehicula lectus. Nunc tellus leo, aliquam at efficitur
          id, semper eget felis. Donec sagittis purus id tristique aliquet. Sed porttitor, augue posuere feugiat tincidunt, nisl
          est ultricies mauris,
        </p>
      </div>
    </section>
  );
};

export default TextWithPicture;

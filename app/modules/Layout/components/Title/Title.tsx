import styles from './Title.module.scss';

interface TitleProps {
  content: string;
}

const Title = (props: TitleProps) => {
  const { content } = props;
  return (
    <div className={styles['Title']}>
      <div className={styles['Title-line']}></div>
      <h1 className={styles['Title-content']}>{content}</h1>
    </div>
  );
};

export default Title;

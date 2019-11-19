import Link from 'umi/link'
import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>index</h1>
      <Link to="/user">user</Link>
    </div>
  );
}

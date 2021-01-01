import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styles from './CheckBox.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CheckBox({ checked, children, ...rest }) {
  return (
    <div className={cx('checkbox')}>
      <label>
        <input type="checkbox" checked={checked} { ... rest } />
        <div className={cx('icon')}>{checked ? <MdCheckBox className={styles.checked} /> : <MdCheckBoxOutlineBlank />}</div>
        <div>{checked ? '체크됨' : '체크 안됨'}</div>
      </label>
      <span>
        {children}
      </span>
    </div>
  )
}

export default CheckBox;
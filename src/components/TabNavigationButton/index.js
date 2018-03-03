import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.scss';

export default function NavigationButton({
  active,
  activeIcon,
  icon,
  label,
  noticeCounts,
  onClick,
  width,
  keepStyle,
}) {
  let notice = null;
  if (noticeCounts && noticeCounts > 0) {
    if (noticeCounts > 99) {
      notice = <div className={styles.notices}>99+</div>;
    } else {
      notice = <div className={styles.notice}>{noticeCounts}</div>;
    }
  }
  const styleClass = !keepStyle ? styles.iconStyles : null;
  return (
    <div
      onClick={onClick}
      className={classnames(
        styles.navigationButton,
        active && styles.active
      )}
      style={{
        width,
      }}
    >
      <div className={styles.iconHolder} title={label}>
        <div className={classnames(styles.icon, styleClass)}>
          {active ? activeIcon : icon}
        </div>
        {notice}
      </div>
    </div>
  );
}
NavigationButton.propTypes = {
  icon: PropTypes.node.isRequired,
  activeIcon: PropTypes.node.isRequired,
  active: PropTypes.bool,
  label: PropTypes.string,
  noticeCounts: PropTypes.number,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  onClick: PropTypes.func,
  keepStyle: PropTypes.bool,
};
NavigationButton.defaultProps = {
  active: false,
  label: undefined,
  noticeCounts: undefined,
  onClick: undefined,
  keepStyle: false,
};

import React from 'react'
import css from './style.scss'
function Collapse(props) {
  const [isCollapsed, setIsCollapsed] = React.useState(props.collapsed);

  const style = {
    collapsed: {
      display: 'none'
    },
    expanded: {
      display: 'block'
    },
    buttonStyle: {
      display: 'block',
      width: '100%'
    }
  };

  return (
    <div className={css.allCol}>
      <button style={style.buttonStyle} onClick={() => setIsCollapsed(!isCollapsed)}>
      {isCollapsed ? 'x' : '+'} {props.button}
      </button>
      <div
        className={css.collapseContent}
        style={!isCollapsed ? style.collapsed : style.expanded}
        aria-expanded={!isCollapsed}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Collapse;

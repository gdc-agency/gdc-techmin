import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { useLayoutContext } from '@/context/useLayoutContext';
import useViewPort from '@/hooks/useViewPort';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
const LeftSidebarToggle = () => {
  const {
    menu: {
      size
    },
    changeMenu: {
      size: changeMenuSize
    },
    toggleBackdrop
  } = useLayoutContext();
  const {
    width
  } = useViewPort();
  const isFirstRender = useRef(true);
  const {
    pathname
  } = useLocation();
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else if (size === 'full') {
      toggleBackdrop();
    }
    if (width <= 768) {
      if (size !== 'full') changeMenuSize('full');
    } else if (width <= 1140) {
      if (size !== 'condensed') changeMenuSize('condensed');
    } else {
      changeMenuSize('default');
    }
  }, [width, pathname]);
  const handleMenuSize = () => {
    if (size === 'full') toggleBackdrop();
    if (size === 'condensed') changeMenuSize('default');
    if (size === 'compact') changeMenuSize('condensed');else if (size === 'default') changeMenuSize('condensed');
  };
  return <button onClick={handleMenuSize} className="button-toggle-menu">
      <IconifyIcon icon="mdi:menu" />
    </button>;
};
export default LeftSidebarToggle;
const minimizeWrapper = (CrossMenuContainer) => {
  const menuItems = CrossMenuContainer.querySelector('.menu-items');
  const menuItem = CrossMenuContainer.querySelectorAll('.menu-item');
  // const bulletLinks = CrossMenuContainer.querySelectorAll('.bullet-link');
  // const bullet1 = CrossMenuContainer.querySelector('#bullet-link-1');
  // const bullet2 = CrossMenuContainer.querySelector('#bullet-link-2');
  // const bullet3 = CrossMenuContainer.querySelector('#bullet-link-3');
  // const bullet4 = CrossMenuContainer.querySelector('#bullet-link-4');
  // const linkGroups = CrossMenuContainer.querySelectorAll('.link-group');
  const linkTexts = CrossMenuContainer.querySelectorAll('.link-text');
  console.log('CrossMenuContainer: ', CrossMenuContainer);
  console.log('menuItems: ', menuItems);

  new TimelineLite()     //  eslint-disable-line no-undef
  //  Animation sequence #1
  .to(linkTexts, 6, {
    opacity: 0,
  })
  .to(menuItems, 0.4, {
    scale: 0.10,
    rotation: 45,
  // })
  // }, 0)
  }, '-=1')

  .to(CrossMenuContainer, 0.1, {
    left: 'auto',
    top: 'auto',
    bottom: '7rem',
    right: '7rem',
    transform: 'translate(0%, 0%)',
  })
  .to(menuItems, 0.3, {
    left: 'auto',
    top: 'auto',
    right: '3rem',
    bottom: '3rem',
    // transform: matrix(0.07071, 0.07071, -0.07071, 0.07071, 0, 0);
    // justify-content: space-around;

    transformOrigin: '287% 260% rem',
    // transform: 'translate(0, 0)',
    // x: 290,
    // y: 0,
    // ease: Sine.easeOut,     //  eslint-disable-line no-undef
  }, '+=0.1')

  .to(menuItem, 0.3, {
    // border: '14px solid var(--black)',
    background: 'var(--black)',
  // }, 1.3)
  })

  .set(menuItems, {
  // .to(menuItems, 1, {
    justifyContent: 'space-around',
  })
  .to(menuItem, 0.3, {
    // background: 'var(--black)',
    width: '45%',
    height: '45%',
    //  NOTE: once animation is complete, then re-render with new props/state
    onComplete: () => console.log('Minimize     ended!'),
  // }, '+=0.5')
  });

  // .to(linkGroups, 3, {
  //   right: '50%',
  //   top: '50%',
  //   transform: 'translate(-50%, -50%)',
  // }, '-=3')
  // .to(bulletLinks, 3, {
  //   scale: 4,
  // }, '-=3')
  // .staggerTo([bullet1, bullet2, bullet3, bullet4], 1.5, { rotation: 0 }, 0.25);
};

const maximizeWrapper = (CrossMenuContainer) => {
  const menuItems = CrossMenuContainer.querySelector('.menu-items');
  const menuItem = CrossMenuContainer.querySelectorAll('.menu-item');
  // const bulletLinks = CrossMenuContainer.querySelectorAll('.bullet-link');
  // const bullet1 = CrossMenuContainer.querySelector('#bullet-link-1');
  // const bullet2 = CrossMenuContainer.querySelector('#bullet-link-2');
  // const bullet3 = CrossMenuContainer.querySelector('#bullet-link-3');
  // const bullet4 = CrossMenuContainer.querySelector('#bullet-link-4');
  // const linkGroups = CrossMenuContainer.querySelectorAll('.link-group');
  const linkTexts = CrossMenuContainer.querySelectorAll('.link-text');

  new TimelineLite()     //  eslint-disable-line no-undef
  .to(menuItem, 0.3, {
    width: '50%',
    height: '50%',
  })
  .set(menuItems, {
    justifyContent: 'none',
  })
  .to(menuItem, 0.3, {
    background: 'transparent',
  })
  .to(menuItems, 0.3, {
    right: 'auto',
    bottom: 'auto',
    left: '50%',
    top: '50%',
    // transformOrigin: '140% 150%',
    ease: Sine.easeOut,     //  eslint-disable-line no-undef
  // }, '+=0.1')
  })
  .to(menuItems, 1, {
    scale: 1,
    rotation: 0,
  // }, '-=1')
  })
  .to(linkTexts, 1, {
    // autoAlpha: 1,
    opacity: 1,
    onComplete: () => console.log('Maximize     ended!'),
  });
};

export default {
  minimizeWrapper,
  maximizeWrapper,
};

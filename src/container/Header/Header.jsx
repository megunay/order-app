import React from 'react';

import {SubHeading} from '../../components';
import {images} from '../../constants';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Mobile Mexican Gourmet Food</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Feel the flavour of gourmet Mexican street food with <style color='var(--color-golden)'>Bato's</style> gourme food van. </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="WelcomeImg" />
    </div>
  </div>
);

export default Header;

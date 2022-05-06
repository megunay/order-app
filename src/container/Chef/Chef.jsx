import React from 'react';

import './Chef.css';
import {images} from '../../constants';
import {SubHeading} from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="Mr.Bato" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className='app__chef-content'>
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="C.Quote" />
          <p className='p__opensans'>Mexican Cuisine is always a passion to me.</p>
        </div>
        <p className='p__opensans'>I am trying to get better and better day by day. Hope you can share my passion with tasting my food.</p>
      </div>

      <div className="app__chef-sign">
        <p>B. Bato</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="ChefSign" />
      </div>
    </div>
  </div>
);

export default Chef;

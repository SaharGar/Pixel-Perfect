import React from 'react';

import { BestTalent } from '../components/BestTalent'
import { Promotion } from '../components/Promotion'
import { About } from '../components/About'
import { Ready } from '../components/Ready'

export function HomePage() {
  return (
    <section className='home full'>
      <section className='upper'>
        <div className="best-talent-container">
          <BestTalent />
        </div>
      </section>
      <section className='middle'>
        <div className="promotion-container">
          <Promotion/>
        </div>
      </section>
      <section className='lower'>
        <div className="about-container">
          <About/>
        </div>
      </section>
      <section className='ready'>
        <div className='ready-container'>
         <Ready/>
        </div>
      </section>
    </section>
  );
}

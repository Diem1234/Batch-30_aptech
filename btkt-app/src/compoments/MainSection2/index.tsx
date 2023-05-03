import React from 'react'
import MainSection2Item from '../MainSection2Item';
import { images } from '../../data/images'
import Images from '../Images'
import Content from '../Content';
import ContentTitle from '../ContentTitle'
import Section_desc from '../Section_desc';
import ElementA from '../ElementA';
import Section_btn from '../Section_btn';

const MainSection2 = () => {
  return (
    <div className="sections section_two">
      <h2 className="section_title" style={{ textAlign: "center" }}>
        What We Offer
      </h2>
      <ul className="homeproduct clearfix" id="_loadList">
        <MainSection2Item>
          <Images
              classs='photo'
              link='./images/lighting-upgrades-thumb-G3.jpg'
              lable='Lighting Upgrades'
          />
          <Content>
            <ContentTitle link="lighting-upgrades" lable="Lighting Upgrades" />
            <Section_desc
              lable="Electrical panel maintenance, therefore, should be part of your regular
              routine."
            />
            <Section_btn>
              <ElementA
                classs="readmore"
                link="lighting-upgrades"
                lable="Lighting Upgrades"
                name="Read more"
              />
            </Section_btn>
          </Content>
        </MainSection2Item>
        <MainSection2Item>
          <Images
              classs='photo'
              link='./images/electrical-repairs-thumb-G1.jpg'
              lable='Electrical repairs'
          />
          <Content>
            <ContentTitle link="electrical-repairs" lable="Electrical repairs" />
            <Section_desc
              lable="Electrical repairs should always be handled by a professional
              electrician."
            />
            <Section_btn>
              <ElementA
                classs="readmore"
                link="electrical-repairs"
                lable="Electrical repairs"
                name="Read more"
              />
            </Section_btn>
          </Content>
        </MainSection2Item>
        <MainSection2Item>
          <Images
              classs='photo'
              link='./images/surge-protection-thumb-G4.jpg'
              lable='Surge Protection'
          />
          <Content>
            <ContentTitle link="surge-protection" lable="Surge Protection" />
            <Section_desc
              lable="An electrical surge can happen for a number of reasons, including
              lightning strikes."
            />
            <Section_btn>
              <ElementA
                classs="readmore"
                link="surge-protection"
                lable="Surge Protection"
                name="Read more"
              />
            </Section_btn>
          </Content>
        </MainSection2Item>
      </ul>
    </div>
  );
}

export default MainSection2
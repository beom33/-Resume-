import React from 'react';
import { Section } from 'react-fullpage';
import ProfileImage from './ProfileImage';
import styled from 'styled-components';
import Item from './Item';

const Wrapper = styled.div`
  padding-top: 51px;
  .inner {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 0;
      flex-grow: 1;
      margin: 20px 0;
    }

    .item + .item {
      margin-left: 20px;
    }

    @media all and (max-width: 650px) {
      .item {
        width: 100%;
      }

      .item + .item {
        margin-left: 0;
      }
    }
  }
`;

const InfoAbout = () => {
  return (
    <Section>
      <Wrapper>
        <ProfileImage />
        <div className="layout-width inner">
          <Item title="INFO">
          <div style={{ display: 'flex', alignItems: 'center', gap: '167px' }}>
              <p style={{ marginBottom: '55px' }}> YU JUN BEOM</p>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p>MBTI</p>
                <p style={{ position: 'relative', top: '-15px', opacity: '0.6' }}>ISFP</p>
              </div>
            </div>
            <div style={{ position: 'relative', top: '-57px', opacity: '0.6' }}>
            <p >1996.10.09</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '50px', marginTop:'-40px' }}>
              <div>
              <p>ADRESS</p>
              <div style={{ position: 'relative', top: '-12px', opacity: '0.6' }}>
              <p>Gochon-eup, Gimpo-si, Gyeonggi-do</p>
              </div>
               </div>
               
              <div>
            <p>PHONE</p>
           <div style={{ position: 'relative', top: '-12px', opacity: '0.6' }}>
           <p>010-3738-6542</p>
         </div>
           </div>
              </div>
              

              <p style={{ marginTop: '35px' }}>EMAIL</p>
           <div style={{ position: 'relative', top: '-12px', opacity: '0.6' }}>
           <p>byby5546@NAVER.COM</p>
         </div>

          </Item>
          <Item title="ABOUT">
          <p>ABOUT 섹션에 표시될 내용입니다.</p>
          </Item>
        </div>
      </Wrapper>
    </Section>
  );
};

export default React.memo(InfoAbout);
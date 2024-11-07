import React from 'react';
import { Section } from 'react-fullpage';
import ProfileImage from './ProfileImage';
import styled from 'styled-components';
import Item from './Item';
import Image from 'next/image';


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

            <div style={{ display: 'flex', alignItems: 'center', gap: '45px', marginTop:'-40px' }}>
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
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '100px', marginTop: '35px' }}>
              <div>
                <p>EMAIL</p>
           <div style={{ position: 'relative', top: '-12px', opacity: '0.6' }}>
           <p>byby5546@NAVER.COM</p>
         </div>
        </div>

         <div>
         <p>GitHub</p>
            <div style={{ position: 'relative', top: '-10px',  marginBottom: '-55px', opacity: '1.0' }}>
              <Image
                src="/images/QR.jpg"
                alt="QR Code"
                width={85}
                height={85}
              />
            </div>
            </div>
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
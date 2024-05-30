import React, { useRef, useState } from 'react'
import { styled } from 'styled-components';
import Typo from '@components/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Card1  from '/images/main5.png'
import Card2  from '/images/main6.png'
import Card3  from '/images/main7.png'

import './style.css';

const CardFir = styled.div`
    width: 877px;
    height: 317px;
    border-radius: 20px;
    padding: 2px 15px;
    background:linear-gradient(90deg, #FDFFA1, #9C84FF);
    display: flex;
    padding: 50px 80px;
    justify-content: space-between;
`;

const CardSec = styled.div`
    width: 877px;
    height: 317px;
    border-radius: 20px;
    padding: 2px 15px;
    background:linear-gradient(90deg, #9C84FF, #FFBCF0);
    display: flex;
    padding: 50px 80px;
    justify-content: space-between;
`;

const CardThi = styled.div`
    width: 877px;
    height: 317px;
    border-radius: 20px;
    padding: 2px 15px;
    background:linear-gradient(90deg, #FFBCF0, #FDFFA1);
    display: flex;
    padding: 50px 80px;
    justify-content: space-between;
`;
function FunctionCard() {
    return (
        <>
            <Swiper
                slidesPerView={'1.4'}
                // centeredSlides={true}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <CardFir className='w-[877px] h-[317px]'>
                        <div className='w-[30%]'>
                        <img src={Card1} />
                        </div>
                        <div>
                            <div className='mb-[20px]'>
                                <Typo title={'가상 면접관 '} type={'body1'} />
                            </div>
                            <Typo title={'메타휴먼 가상면접관과의 모의면접을 '} type={'body2'} />
                            <Typo title={'통해 실제 면접관과 대화하는 연습을 '} type={'body2'} />
                            <Typo title={'해보세요! '} type={'body2'} />
                        </div>
                    </CardFir>
                </SwiperSlide>
                <SwiperSlide>
                    <CardSec className='w-[877px] h-[317px]'>
                    <div className='w-[30%] ml-[5%]'>
                        <img src={Card2}/>
                        </div>
                        <div>
                            <div className='mb-[20px]'>
                                <Typo title={'가상 면접관 '} type={'body1'} />
                            </div>
                            <Typo title={'메타휴먼 가상면접관과의 모의면접을 '} type={'body2'} />
                            <Typo title={'통해 실제 면접관과 대화하는 연습을 '} type={'body2'} />
                            <Typo title={'해보세요! '} type={'body2'} />
                        </div>
                    </CardSec>
                </SwiperSlide>
                <SwiperSlide>
                    <CardThi className='w-[877px] h-[317px]'>
                    <div className='w-[28%] ml-[5%]'>
                        <img src={Card3} />
                        </div>
                        <div>
                            <div className='mb-[20px]'>
                                <Typo title={'가상 면접관 '} type={'body1'} />
                            </div>
                            <Typo title={'메타휴먼 가상면접관과의 모의면접을 '} type={'body2'} />
                            <Typo title={'통해 실제 면접관과 대화하는 연습을 '} type={'body2'} />
                            <Typo title={'해보세요! '} type={'body2'} />
                        </div>
                    </CardThi>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default FunctionCard
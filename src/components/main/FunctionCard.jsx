import React, { useRef, useState } from 'react'
import { styled } from 'styled-components';
import Typo from '@components/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import './style.css';

const Card = styled.div`
    width: 877px;
    height: 317px;
    border: 2px solid white;
    color: white;
    border-radius: 20px;
    padding: 2px 15px;
    background-color: rgb(255,255,255,0.3);
    display: flex;
    padding: 50px 80px;
    justify-content: space-between;
`;
function FunctionCard() {
    return (
        <>
            <Swiper
        slidesPerView={1.4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

                    <SwiperSlide>
                        <Card className='w-[877px] h-[317px]'>
                            <div>이미지</div>
                            <div>
                                <div className='mb-[20px]'>
                                    <Typo title={'가상 면접관 '} type={'body1'} />
                                </div>
                                <Typo title={'메타휴먼 가상면접관과의 모의면접을 '} type={'body2'} />
                                <Typo title={'통해 실제 면접관과 대화하는 연습을 '} type={'body2'} />
                                <Typo title={'해보세요! '} type={'body2'} />
                            </div>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className='w-[877px] h-[317px]'>
                            <div>이미지</div>
                            <div>
                                <div className='mb-[20px]'>
                                    <Typo title={'가상 면접관 '} type={'body1'} />
                                </div>
                                <Typo title={'메타휴먼 가상면접관과의 모의면접을 '} type={'body2'} />
                                <Typo title={'통해 실제 면접관과 대화하는 연습을 '} type={'body2'} />
                                <Typo title={'해보세요! '} type={'body2'} />
                            </div>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className='w-[877px] h-[317px]'>
                            <div>이미지</div>
                            <div>
                                <div className='mb-[20px]'>
                                    <Typo title={'가상 면접관 '} type={'body1'} />
                                </div>
                                <Typo title={'메타휴먼 가상면접관과의 모의면접을 '} type={'body2'} />
                                <Typo title={'통해 실제 면접관과 대화하는 연습을 '} type={'body2'} />
                                <Typo title={'해보세요! '} type={'body2'} />
                            </div>
                        </Card>
                    </SwiperSlide>
            </Swiper>
        </>
    )
}

export default FunctionCard
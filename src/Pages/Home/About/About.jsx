import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import Image from '../../../assets/images/about/pro-removebg-preview.png'

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });
    return (
        <section ref={ref}>
            <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-10 lg:gap-y-0 h-screen max-w-screen-xl lg:px-4'>
                <div data-aos="fade-right">
                    <img className='h-[640px]' src={Image} alt="" />
                </div>
                <div className='flex-1'data-aos="fade-left">
                    <h2 className='text-accent text-xl mb-4' style={{ fontFamily: 'Kaushan Script' }}>About me.</h2>
                    <h3 className='mb-6 text-3xl font-bold' style={{ fontFamily: 'Kaushan Script' }}>I'm SI Sumon, Web Designer & Web Developer from Rajshahi,Joypurhat, Bangladesh. </h3>
                    <p className='lg:max-w-xl lg:mx-auto font-medium text-base leading-7'>I have rich experience in web site design & building and customization. Also I am good at html, css, javascript, wordpress, php, jquery, bootstrap. I love to talk with you about our unique approach. Feel free to contact me writing an email with your project idea.</p>
                    <div className='flex gap-x-6 lg:gap-x-10 mb-12 mt-4' style={{ fontFamily: 'Kaushan Script' }}>
                        <div>
                            <div className='text-[40px] mb-2 text-accent font-bold'>
                                {
                                    inView ?
                                        <CountUp start={0} end={13} duration={4} /> : null}
                            </div>
                            <div className='font-bold text-sm tracking-[2px]'>Years of <br />
                                Experience</div>
                        </div>
                        <div>
                            <div className='text-[40px] mb-2 text-accent font-bold'>
                                {
                                    inView ?
                                        <CountUp start={0} end={15} duration={4} /> : null}
                                k+
                            </div>
                            <div className='font-bold text-sm tracking-[2px]'>Projects <br />
                                Completed</div>
                        </div>
                        <div>
                            <div className='text-[40px] mb-2 text-accent font-bold'>
                                {
                                    inView ?
                                        <CountUp start={0} end={12} duration={4} /> : null}
                                k+
                            </div>
                            <div className='font-bold text-sm tracking-[2px]'>Satisfied <br />
                                Clients</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
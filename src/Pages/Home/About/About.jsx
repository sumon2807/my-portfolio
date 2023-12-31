import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import Image from '../../../assets/images/about/pro-removebg-preview.png'

const PDF_FILE_URL='http://localhost:5173/my-resume.pdf'
const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    const downloadFileAtURL=(url)=>{
        const fileName=url.split("/public/my-resume.pdf").pop();
        const aTag=document.createElement("a");
        aTag.href=url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    return (
        <section ref={ref} className='my-20'>
            <div className='flex flex-col lg:flex-row lg:gap-x-10 lg:gap-y-10 h-screen lg:px-4'>
                <div data-aos="fade-right" className=' hidden lg:block md:block w-1/2'>
                    <img className='lg:h-[520px] lg:w-full' src={Image} alt="" />
                </div>
                <div className='flex-col lg:w-1/2 w-full mx-auto text-center lg:text-start'data-aos="fade-left">
                    <h2 className='text-accent text-xl mb-4' style={{ fontFamily: 'Kaushan Script' }}>About me.</h2>
                    <h3 className='mb-6 lg:text-3xl text-xl font-bold' style={{ fontFamily: 'Kaushan Script' }}>I'm SI Sumon, Web Designer & Web Developer from Rajshahi,Joypurhat, Bangladesh. </h3>
                    <p className='font-medium lg:text-base text-sm leading-7'>I have rich experience in web site design & building and customization. Also I am good at html, css, javascript, wordpress, php, jquery, bootstrap. I love to talk with you about our unique approach. Feel free to contact me writing an email with your project idea.</p>
                    <div className='flex gap-x-6 lg:gap-x-10 mb-12 mt-4 text-center' style={{ fontFamily: 'Kaushan Script' }}>
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
                    <div className=" lg:text-start">
                    <button className='btn btn-sm border border-solid rounded-lg py-2 px-4 mr-4'>Hire Me</button>
                    <button onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}} className='btn btn-sm border border-solid rounded-lg py-2 px-4'>Download CV</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

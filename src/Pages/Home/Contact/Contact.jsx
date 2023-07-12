import React from 'react';

const Contact = () => {
    return (
        <section className='mt-10'>
            <h2 className=' text-accent font-bold text-4xl mb-8 text-center' style={{ fontFamily: 'Kaushan Script' }}>Get In Touch</h2>
            <div className='md:flex justify-between items-center'>
                <div className='w-full md:w-1/2 h-80 sm:h-96'>
                <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231206.01337257752!2d88.87954708296823!3d25.115602649180804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc921fbba1e55f%3A0x33766b8aaf8c4f!2sJoypurhat%20Sadar%20Upazila!5e0!3m2!1sen!2sbd!4v1689197920939!5m2!1sen!2sbd" className=' border-0 w-full h-full rounded-l-lg' allowfullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className=' w-full mt-8 md:mt-0 md:w-1/2 sm:h-3/4 lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-7 rounded-r-lg'>
                    <form className='w-full'>
                        <div className=' w-full'>
                            <input type="text" placeholder='Enter Your Name' className='w-full p-3 mb-2 focus:outline-none rounded-md' />
                        </div>
                        <div className=' w-full'>
                            <input type="email" placeholder='Enter Your Email' className='w-full p-3 mb-2 focus:outline-none rounded-md' />
                        </div>
                        <div className=' w-full'>
                            <input type="text" placeholder='Subject' className='w-full p-3 mb-2 focus:outline-none rounded-md' />
                        </div>
                        <div className=' w-full'>
                            <textarea rows={3} type="text" placeholder='Write Your Message' className='w-full p-3 mb-2 focus:outline-none rounded-md' />
                        </div>
                        <button className='w-full p-3 focus:outline-none rounded-md bg-slate-800 text-white hover:bg-accent text-center ease-linear duration-150'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
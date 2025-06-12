import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <div className='sec-gap bg-[var(--blue)]'>
            <div className='container'>
                <div className='flex md:justify-between max-md:justify-center flex-wrap gap-5'>
                    <div className='text-center'>
                        <strong className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-4 md:pb-5 lg:pb-6 text-[var(--dark_light)]'><CountUp
                            start={"0"}
                            end={"100"}
                            duration={2.75}
                        ></CountUp></strong>
                        <h4 className='text-[var(--dark_light)]'>Tutors Counts</h4>
                    </div>
                    <div className='text-center'>
                        <strong className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-4 md:pb-5 lg:pb-6 text-[var(--dark_light)]'><CountUp
                            start={"0"}
                            end={"100"}
                            duration={2.75}
                        ></CountUp></strong>
                        <h4 className='text-[var(--dark_light)]'>Review Counts</h4>
                    </div>
                    <div className='text-center'>
                        <strong className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-4 md:pb-5 lg:pb-6 text-[var(--dark_light)]'><CountUp
                            start={"0"}
                            end={"100"}
                            duration={2.75}
                        ></CountUp></strong>
                        <h4 className='text-[var(--dark_light)]'>Languages Count</h4>
                    </div>
                    <div className='text-center'>
                        <strong className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-4 md:pb-5 lg:pb-6 text-[var(--dark_light)]'><CountUp
                            start={"0"}
                            end={"100"}
                            duration={2.75}
                        ></CountUp></strong>
                        <h4 className='text-[var(--dark_light)]'>User's Counts</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
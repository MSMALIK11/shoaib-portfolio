import React from 'react'
import Heading from './shared/Heading'
import { certificates } from './data';
import { AiFillSafetyCertificate } from "react-icons/ai";
const CertificateAndAward = () => {

    return (
        <div className='mt-12'>
            <div className='flex items-center gap-2'>
                <AiFillSafetyCertificate />
                <Heading text='Licenses & certifications' />
            </div>
            <div>
                {
                    certificates.map((item) => {
                        return (
                            <div className='mt-6'>
                                <div className='flex gap-4 items-start'>
                                    <img width={36} src={item.icon} alt="" />
                                    <div className='flex flex-col gap-1'>
                                        <Heading text={item.title} />
                                        <Heading text={item.from} variant='secondary' />
                                        <Heading text={item.issueDate} variant='secondary' />
                                        <button className=' rounded-lg mt-3  bg-badge text-white px-4 py-1 hover:text-blue-400 hover:scale-105 transition-transform duration-300'><a>Show Credential</a></button>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CertificateAndAward
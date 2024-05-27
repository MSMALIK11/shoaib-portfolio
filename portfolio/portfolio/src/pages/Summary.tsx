import React from 'react'
import BackgroundInfo from '../component/BackgroundInfo'
import ExpertiseAndSkills from '../component/ExpertiseAndSkills'
import WorkHistory from '../component/WorkHistory'
import Education from '../component/Education'
import CertificateAndAward from '../component/CertificateAndAward'
import Project from '../component/Project'

const Summary = () => {
    return (
        <div className='w-full flex-1'>
            <BackgroundInfo />
            <ExpertiseAndSkills />
            <WorkHistory />
            <Education />
            <CertificateAndAward />
            <Project />
        </div>
    )
}

export default Summary
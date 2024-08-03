
import { educations } from './data'
import Heading from './shared/Heading'
import { FaGraduationCap } from "react-icons/fa6";

interface WorkProp {
    id: number,
    title: string,
    designation: string,
    date: string
}
const Education = () => {

    const Edu = ({ date, designation, title }: WorkProp) => {
        return (
            <div className='relative'>
                <div className='mt-6  ms-8  pb-4 min-h-[140px]  flex flex-col justify-between work'>
                    <div className='space-y-2'>

                        <Heading text={title} className='!text-md' />
                        <div className='flex  gap-2 flex-col'>

                            <Heading text={designation} variant="secondary" />
                            <Heading text={date} variant='secondary' />
                        </div>

                    </div>
                    <div>
                        --
                    </div>

                </div>
            </div>
        )
    }

    return (
        <div className='mt-6'>
            <div className='flex gap-3 items-center'>
                <FaGraduationCap />
                <Heading text='Edications' className='!text-md' />
            </div>
            {
                educations.map((item) => <Edu key={item.id} id={item.id} date={item.date} designation={item.designation} title={item.title} />)
            }
        </div>
    )
}

export default Education
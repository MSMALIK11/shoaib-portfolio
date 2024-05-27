
import { skillsList } from './data';
import Heading from './shared/Heading'
import { GiSkills } from "react-icons/gi";
import Badge from './ui/Badge';
const ExpertiseAndSkills = () => {


    const exp = (
        <div className='bg-secondary p-2 h-[140px]'>
            <div className='flex gap-4 items-cente pt-2 pb-4 px-2 min-w-[200px] flex-col justify-between'>
                <Heading text='Experience'  />
                <Heading text='2' variant='secondary' className='!text-2xl !font-bold' />
                <Heading text='Years' variant='secondary' />
            </div>
        </div>
    )
    const skills = (
        <div className='bg-secondary p-2 ] w-full'>
            <div className='flex gap-2 items-center'>
                <Heading text='Top Technical Skills' />
            </div>
            <div className='flex flex-wrap gap-4 mt-4'>
                {skillsList.map((item) => <Badge icon={item.icon} label={item.name} />)}
            </div>
        </div>
    )
    return (
        <div className='p-4 mt-4'>
            <div className='flex items-center gap-2'>
                <GiSkills />
                <Heading text='Expertise & Skills' className='!text-md' />
            </div>
            <div className='flex gap-6 mt-6 flex-start'>
                {exp}
                {skills}

            </div>
        </div>
    )
}

export default ExpertiseAndSkills
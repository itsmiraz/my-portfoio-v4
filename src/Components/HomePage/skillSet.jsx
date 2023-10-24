import { Auth, AuthTech, BackedEndTechs, DevOps, FrontEndTechs, ToolsConstant, othersTech } from '@/Constants/Constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SkillSet = () => {
    return (
        <div className='px-32 py-20'>
            <h2 className='head-text'>Skill - Set</h2>
            <div className='w-full mt-10 grid-cols-2 grid gap-20'>
                <div>
                    <h3 className='subtitle'>FRONT END</h3>
                    <div className='grid gap-5 grid-cols-4'>
                        {
                            FrontEndTechs.map((tech, i) => <SkillCard key={i} data={tech} />)
                        }
                    </div>


                    <div className='flex gap-5'>
                    <div className='w-full'>
                            <h3 className='subtitle'>AUTHENTICATION</h3>
                            <div className='grid w-full gap-5 grid-cols-2'>
                                {
                                    AuthTech.map((tech, i) => <SkillCard key={i} data={tech} />)
                                }
                            </div>
                        </div>
                        <div className='w-full'>
                            <h3 className='subtitle'>OTHERS</h3>
                            <div className='grid  w-full gap-5 grid-cols-2'>
                                {
                                    othersTech.map((tech, i) => <SkillCard key={i} data={tech} />)
                                }
                            </div>
                        </div>
                       </div>




                </div>
                <div>
                    <div>
                        <h3 className='subtitle'>BACK END</h3>
                        <div className='grid gap-5 grid-cols-4'>
                            {
                                BackedEndTechs.map((tech, i) => <SkillCard key={i} data={tech} />)
                            }
                        </div>
                        
                    </div>
                    <div className='w-full'>
                            <h3 className='subtitle'>TOOLS</h3>
                            <div className='grid w-full gap-5 grid-cols-4'>
                                {
                                    ToolsConstant.map((tech, i) => <SkillCard key={i} data={tech} />)
                                }
                            </div>
                        </div>
                    <div className='w-full'>
                            <h3 className='subtitle'>DEV OPS</h3>
                            <div className='grid w-full gap-5 grid-cols-4'>
                                {
                                    DevOps.map((tech, i) => <SkillCard key={i} data={tech} />)
                                }
                            </div>
                        </div>
                </div>

            </div>
        </div>
    );
};

export default SkillSet;

const SkillCard = ({ data }) => {

    return <div className='w-full'>
        <Link href={data.url}>
            <Image src={data.img} alt='miraj-skill' />

        </Link>
    </div>
}
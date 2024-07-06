import React from 'react'

export default function AccordionDetailsComponent() {
    return (

        <div className='flex '>
            <div className='flex flex-col w-[30%] justify-start bg-slate-300'>
                <div>Portugal / Germany</div>
                <div>2024</div>
                <div>remote</div>
            </div>

            <div className='flex flex-col w-full justify-center'>
                <div className='w-full'>junior web developer</div>
                <div className='flex'>The project for a company operating in the automotive sector that is undergoing a digital transformation, centered on the modernization of its company portal, which has revolutionized numerous internal operations, leading to significant cost savings and greater efficiency, while contributing to environmental conservation efforts.
                </div>
                <div>
                    <ul>
                        <li>Development of intuitive digital platforms to enhance customer interaction and personalize services.</li>
                        <li>Create and Develop Front-end with ReactJs and Tailwind CSS.</li>
                        <li>Testing front-end features with Playwright.</li>
                        <li>Develop Backend using AWS and NodeJs.</li>
                        <li>Database integration with Drizzle ORM.</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}


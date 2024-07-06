import React from 'react';

const CV_Layout = () => {
    return (
        <div className="flex w-auto h-screen">
            <div className="md:ml-20 flex flex-col items-center w-full max-w-96 min-w-60 h-full bg-[#191919] text-white">
                <div className="flex flex-col mt-96 max-w-96">
                    <div className="absolute top-20 left-25 z-20 w-full max-w-96 min-w-60 h-[20%] skew-x-[-20deg] bg-[#03173a89]">

                    </div>
                    <div className="flex w-96 h-96 relative bottom-[360px] rounded-full bg-transparent border-8 z-30 border-[#052B6B]">
                        <img className="w-[100%] h-[100%] rounded-full" src="https://lh3.googleusercontent.com/d/1eN9_PQ2JYoDaLcnUWZLAzDpmng7YVNAw" alt="Profile Foto" />
                    </div>
                    <div className="w-full h-20 bg-red-300">
                        aqui va el nombre
                    </div>


                </div>
            </div>
            <div className="flex flex-col items-center w-full h-full ">

                <div className="flex mt-20 items-center absolute left-0 w-full h-[20%] bg-[#052B6B] text-white">


                </div>
                <div className=" max-w-[100%] h-full">

                </div>



            </div>
        </div>
    );
}

export default CV_Layout;

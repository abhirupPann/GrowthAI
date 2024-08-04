"use client"
//Edit Banner Template
import { bannerBgState, bannerDesState, bannerImgState, bannerTitleState } from '@/app/recoil/bannerStateAtom';
import Image from 'next/image';
import React, {  useState } from 'react'
import toast from 'react-hot-toast';
import { RecoilRoot, useSetRecoilState } from 'recoil';

const imageSrc = ["/bannerimage/img1.jpg","/bannerimage/img2.jpg","/bannerimage/img3.jpg","/bannerimage/img4.jpg","/bannerimage/img5.jpg","/bannerimage/img6.jpg"]

function EditBannerTemplateBs() {

    const [clicked, setClicked] = useState(false);

    //Recoil States
    const setBannerBg = useSetRecoilState(bannerBgState);
    const setBannerImg = useSetRecoilState(bannerImgState);
    const setBannerTitle = useSetRecoilState(bannerTitleState);
    const setBannerDes = useSetRecoilState(bannerDesState);

    //Local States
    const [onChangebannerBg, setonChangebannerBg] = useState("null");
    const [onChangebannerImg, setonChangebannerImg] = useState("/bannerimg/img1.jpg");
    const [onChangebannerTitle, setonChangebannerTitle] = useState("Title");
    const [onChangebannerDes, setonChangebannerDes] = useState("Description");
    
    //Handle On Submit Function
    const handleOnSubmit = (e: any)=>{
          e.preventDefault();
          setBannerBg(onChangebannerBg);
          setBannerImg(onChangebannerImg);
          setBannerTitle(onChangebannerTitle);
          setBannerDes(onChangebannerDes);
          toast.success('Banner Updated Successfully!')
    }
  return (
  
    <div >
      {!clicked ? <button type='button' className='editbutton absolute top-[65vh] left-[62vw] rounded-full h-[5vh] w-[2.5vw] bg-gray-500 border-black flex items-center justify-center' onClick={()=>{setClicked(true)}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>
</button> : 
      <div className=' py-[10vh] px-[30vw] absolute top-0 w-[100vw] z-30 bg-black bg-opacity-80 h-full'>
        <form onSubmit={(e)=>{handleOnSubmit(e)}} className=' rounded-md bg-white p-[5vw] w-[36vw] cursor-default flex flex-col gap-10'>
            <div className='editbanner'>
                 <div className=' flex justify-between'>
                    <h1 className=' text-gray-400'>Edit Banner</h1>
                    <button type='button' onClick={()=>{setClicked(false)}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                    </svg>
                    </button>
                 </div>
            </div>
            <div className="image flex flex-col gap-3">
            <h1 className=' text-gray-400'>Images</h1>
             <div className='flex gap-2'>
                <button type='button' className='uploadimage bg-gray-400 h-[6vh] w-[3vw] rounded-full flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                </button>
                <div className="loadedimages flex gap-2">{
                  imageSrc.map((img, i)=>(<Image key={i} src={img} width={40} height={5} alt='Image'className=' rounded-full cursor-pointer transition-opacity opacity-0 duration-[2s]' onLoadingComplete={(image)=> image.classList.remove("opacity-0")} onClick={()=>{setonChangebannerImg(img)}}/>))}
                        
                </div>
             </div>
            </div>
            <div>
                <label className='text-gray-400'>Title</label>
                <input type="text" className=' w-[25vw] h-[5vh] border-2 rounded-md px-3 py-1'onChange={(e: any)=>{setonChangebannerTitle(e.target.value)}}/>
            </div>
            <div>
                <label className='text-gray-400'>Description</label>
                <input type="text" className=' w-[25vw] h-[5vh] border-2 rounded-md px-3 py-1' onChange={(e: any)=>{setonChangebannerDes(e.target.value)}}/>
            </div>
            <div className=' flex justify-between'>
                <button type="submit" className=' px-[2vw] py-[1.5vh] bg-blue-600 rounded-md' >Done</button>
                <button type="button" className='hover:underline text-blue-500 transition-all ease-in-out duration-700 inline-block'>Download</button>
            </div>
        </form>
      </div>}
        
    </div>

  )
}

export default EditBannerTemplateBs

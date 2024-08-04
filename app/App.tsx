"use client";
import React, { useRef } from 'react';
import BannerImageComp from './components/BannerImageComp/BannerImageComp';
import EditBannerTemplateBs from './components/EditBannerTemplateBs/EditBannerTemplateBs';
import { useRecoilValue } from 'recoil';
import { bannerBgState, bannerDesState, bannerImgState, bannerTitleState } from './recoil/bannerStateAtom';
import { Toaster } from 'react-hot-toast';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import toast from 'react-hot-toast';

const bannerbgPaths = ["/square.png", "/square2.png", "/square3.png", "/square4.png"];

function App() {
  //Recoil States
  const title = useRecoilValue(bannerTitleState);
  const description = useRecoilValue(bannerDesState);
  const image = useRecoilValue(bannerImgState);
  const background = useRecoilValue(bannerBgState);

  const pdfRef = useRef<HTMLDivElement>(null);
  
  //Downloading banner logic
  const downloadPDF = () => {
    const input = pdfRef.current;
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF('p', 'mm', 'a4', true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 30;
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save('banner.pdf');
        toast.success("Banner Saved Successfully!");
      });
    } else {
      toast.error("Failed to find the banner element.");
    }
  };

  return (
    <div>
      <div><Toaster /></div>
      <div>
        {bannerbgPaths.map((bannerBgPath, i) => (
          <div key={i} className='banners relative'>
            <BannerImageComp
              ref={i === 0 ? pdfRef : null}
              bannerBg={bannerBgPath}
              bannerImg={image}
              title={title}
              description={description}
              cta='Learn More'
            />
            <EditBannerTemplateBs />
          </div>
        ))}
      </div>
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
}

export default App;

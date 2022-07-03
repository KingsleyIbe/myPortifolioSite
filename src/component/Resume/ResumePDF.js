import kingsleyPDF from '../../assets/images/kingsley-ibe-cv.pdf';

const ResumePDF = () => (
  <div className="relative top-[100px]">
    <object aria-label="resume-pdF" data={kingsleyPDF} type="application/pdf" className="w-full h-[80vh]" />
    <button
      onClick={() => window.open('https://drive.google.com/file/d/1YTvGYhXIZWw906Dz8dMCATxpHgid0OW2/view?usp=sharing', '_blank')}
      type="submit"
      className="mt-5 ml-2 rounded px-4 py-3 bg-[#ff6b00] text-[#fff] font-medium btn-hover"
    >
      Download Resume
    </button>
  </div>
);

export default ResumePDF;

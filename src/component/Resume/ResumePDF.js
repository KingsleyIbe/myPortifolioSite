import kingsleyPDF from '../../assets/images/FRONT-END-WEB-DEVELOPER-KINGSLEY-IBE.pdf';

const ResumePDF = () => (
  <div className="relative top-[100px]">
    <object aria-label="resume-pdF" data={kingsleyPDF} type="application/pdf" className="w-full h-[80vh]" />
    <button
      onClick={() => window.open('https://docs.google.com/document/d/10etIPoQN0_tcB8dOijZK5923Ynz4hDX5qcdBlU2haQQ/edit?usp=sharing', '_blank')}
      type="submit"
      className="mt-5 ml-2 button-1 rounded px-4 py-3 bg-[#ff6b00] text-[#fff] font-medium btn-hover"
    >
      Download Resume
    </button>
  </div>
);

export default ResumePDF;

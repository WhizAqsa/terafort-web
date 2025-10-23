export default function Loader() {
  return (
    <div className='loader'>
      <style jsx='true'>{`
        .loader {
          margin-left: 2rem;
          border: 3px solid #f3f3f3;
          border-top: 3px solid #272727;
          border-radius: 50%;
          width: 17px;
          height: 17px;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}

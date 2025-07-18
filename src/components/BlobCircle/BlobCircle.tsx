type BlobCircleProps = {

}

const BlobCircle = ({}:BlobCircleProps) => (
  <div className="fixed pointer-events-none z-10 rounded-full inset-0 m-auto w-[500px] h-[500px] overflow-hidden blur-[40px]">
    <div className="absolute w-[100vw] h-[100vh] inset-0 m-auto bg-conic-0 from-yellow-400 via-red-400 to-pink-400 animate-radial-gradient">

    </div>
  </div>
);

export default BlobCircle;

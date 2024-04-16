import React from "react";

const Aiaudio = () => {
  return (
    <div className="sticky top-0   md:flex-auto h-[100vh] w-full md:w-2/6  pt-4">
      <div className=" mt-5 p-5 flex flex-col gap-2">
        <h1 className="font-semibold text-n-8 text-lg mb-2">
          Character Voices:
        </h1>
        <div className="flex gap-4 items-center justify-between">
          <span className="font-semibold text-n-8">Alloy:</span>
          <audio controls controlsList="nodownload">
            <source src="/assets/aiaudio/Alloy.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <div className="flex gap-4 items-center justify-between">
          <span className="font-semibold text-n-8">Echo</span>
          <audio controls controlsList="nodownload">
            <source src="/assets/aiaudio/echo.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <div className="flex gap-4 items-center justify-between">
          <span className="font-semibold text-n-8">Fable</span>
          <audio controls controlsList="nodownload">
            <source src="/assets/aiaudio/fable.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <div className="flex gap-4 items-center justify-between">
          <span className="font-semibold text-n-8">Onyx</span>
          <audio controls controlsList="nodownload">
            <source src="/assets/aiaudio/onyx.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <div className="flex gap-4 items-center justify-between">
          <span className="font-semibold text-n-8">Nova</span>
          <audio controls controlsList="nodownload">
            <source src="/assets/aiaudio/nova.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <span className="font-semibold text-n-8">Shimmer</span>
          <audio controls controlsList="nodownload">
            <source src="/assets/aiaudio/shimmer.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  );
};

export default Aiaudio;

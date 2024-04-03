import QrScanner from "qr-scanner";
import { useEffect, useRef, useState } from "react";

export default function QrReader({ onGetScannedResult }) {
  const scanner = useRef(null);
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);
  const [qrOn, setQrOn] = useState(true);
  const [scanned, setScanned] = useState("");
  useEffect(() => {
    if (videoEl.current && !scanner.current) {
      scanner.current = new QrScanner(
        videoEl.current,
        (result) => {
          console.log(result.data);
          const save = JSON.stringify(result);
          setScanned(save);
          console.log(scanned);

          localStorage.setItem("qrCode", JSON.stringify(result));
          if (onGetScannedResult instanceof Function) {
            onGetScannedResult(result.data);
          } else console.log(`onGetScannedResult must be a function`);
        },
        {
          onDecodeError: (error) => console.log(error),
          preferredCamera: "environment",
          highlightCodeOutline: true,
          calculateScanRegion: () => {
            return {
              x: 0,
              y: 0,
              width: videoEl.current.videoWidth,
              height: videoEl.current.videoHeight,
            };
          },
          highlightScanRegion: true,
          overlay: qrBoxEl.current || undefined,
        },
      );

      scanner.current
        .start()
        .then(() => setQrOn(true))
        .catch(() => setQrOn(false));
    }

    return () => {
      if (!videoEl.current && scanner.current) {
        scanner.current.stop();
      }
    };
  }, [onGetScannedResult]);

  useEffect(() => {
    if (!qrOn)
      alert(
        "Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload.",
      );
  }, [qrOn]);

  return (
    <>
      {
        <div className={"relative h-full w-full "}>
          <video
            ref={videoEl}
            className={"h-full w-full rounded-2xl object-cover"}
          ></video>
          <div ref={qrBoxEl} className={"w-full"}></div>
        </div>
      }
    </>
  );
}

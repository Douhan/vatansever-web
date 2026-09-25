import iphoneFrame from "../../assets/mockups/iphone-frame.jpg";
import macbookFrame from "../../assets/mockups/macbook-frame.jpg";
import "./RealDeviceFrame.css";

interface RealDeviceFrameProps {
  frame: "phone" | "mac";
  screenshot?: string;
  alt?: string;
  className?: string;
}

const FRAME_IMAGE: Record<RealDeviceFrameProps["frame"], string> = {
  phone: iphoneFrame,
  mac: macbookFrame,
};

export function RealDeviceFrame({ frame, screenshot, alt, className }: RealDeviceFrameProps) {
  return (
    <div className={`real-frame real-frame--${frame} ${className ?? ""}`}>
      <img className="real-frame__body" src={FRAME_IMAGE[frame]} alt="" aria-hidden="true" />
      {screenshot ? <img className="real-frame__screen" src={screenshot} alt={alt ?? ""} /> : null}
    </div>
  );
}

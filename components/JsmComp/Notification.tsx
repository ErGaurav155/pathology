import Image from "next/image";
import bike from "@/public/assets/notification/bike.png";
import profil1 from "@/public/assets/notification/profile1.png";
import profile2 from "@/public/assets/notification/profile2.png";
import profile3 from "@/public/assets/notification/profile3.png";
const Notification = ({ className, title }: any) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <Image
        src={bike}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            <li className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden">
              <Image
                src={profil1}
                className="w-full"
                width={20}
                height={20}
                alt=""
              />
            </li>
            <li className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden">
              <Image
                src={profile2}
                className="w-full"
                width={20}
                height={20}
                alt=""
              />
            </li>
            <li className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden">
              <Image
                src={profile3}
                className="w-full"
                width={20}
                height={20}
                alt=""
              />
            </li>
          </ul>
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

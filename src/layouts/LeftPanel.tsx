import LeftIcon from "../Components/LeftIcon";
import home from "./iconhome.png";
import git from "./icongitmerge.png";
import dashboard from "./iconDashboard.png";

const LeftIconPack = [
  { src: home, alt: "home" },
  { src: dashboard, alt: "dashboard" },
  { src: git, alt: "git" },
];

function LeftPanel() {
  return (
    <div className="flex-row justify-around bg-gray-50 h-full border-gray-600 border-r rounded-r-md py-4 space-y-32">
      <div className="">
        <div className="text-4xl text-cyan-500 text-center">🦈</div>
        <div className="text-xs text-gray-800 text-center italic">WorkFlow</div>
        <div className="flex-row align-center py-12">
          {LeftIconPack.map(({ src, alt }) => (
            <div className="cursor-pointer" key={alt}>
              <LeftIcon key={alt} imageSrc={src} alt={alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute w-16 bottom-8 ">
        <div className="space-y-4">
          <div
            onClick={() => alert("file saved")}
            className="text-xs text-center rounded-lg border w-8  mx-auto cursor-pointer hover:bg-gray-200 border-black"
          >
            Save
          </div>
          <div
            className="text-xs text-center rounded-lg border w-8  mx-auto cursor-pointer hover:bg-gray-200 border-black"
            onClick={() => alert("New fork created")}
          >
            Fork
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;

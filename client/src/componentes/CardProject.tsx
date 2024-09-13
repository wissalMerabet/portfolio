export const CardProject: React.FC<{
    project: {
      title: string;
      imageSrc: string;
      description: string;
      skills: string[];
      source: string;
    };
  }> = ({
    project: { title, imageSrc, description, skills, source },
  }) => {
  return (
    <div className="flex flex-col space-y-3 bg-BgPurpleF text-white rounded-xl p-2 transition-transform transform hover:scale-105 shadow-md item ">
      <img src={imageSrc} alt={title}  className="w-full h-48 rounded-xl" />
      <h3 className="font-bold text-white text-lg md:text-xl my-2">{title}</h3>
      <p className="">{description}</p>
      <div className="">
        {skills.length > 0 && (
          <ul className="grid grid-cols-3 gap-2">
            {skills.map((skill, index) => (
              <li className="bg-BgPurpleC rounded-2xl py-1  " key={index}>{skill}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex flex-row space-x-3">
        <a href={source} className="btn font-semibold bg-bgYellow text-BgPurpleF rounded-full p-2">
          Source
        </a>
        
      </div>
    </div>
  );
};

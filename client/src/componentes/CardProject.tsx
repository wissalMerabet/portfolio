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
    <div className="container flex flex-col space-y-2 bg-BgPurpleF text-white  rounded-xl p-5 md:w-1/3 item">
      <img src={imageSrc} alt={title}  className="w-full h-48 rounded-xl" />
      <h3 className="font-bold text-white text-lg md:text-xl my-2">{title}</h3>
      <p className="">{description}</p>
      <div className="">
        {skills.length > 0 && (
          <ul className="flex flex-row space-x-3">
            {skills.map((skill, index) => (
              <li className="bg-BgPurpleC  rounded-2xl p-2 " key={index}>{skill}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex flex-row space-x-3">
        <a href={source} className="btn bg-bgYellow text-BgPurpleF font-bold rounded-full p-2">
          Source
        </a>
        
      </div>
    </div>
  );
};

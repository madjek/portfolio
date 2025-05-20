type Skill = {
  name: string;
  level: number;
};

export default function SkillCard({
  skill,
  index,
}: {
  skill: Skill;
  index: number;
}) {
  return (
    <div
      className="transform rounded-lg bg-white p-2 shadow-lg duration-300 hover:scale-105 md:p-4 dark:bg-gray-800"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'fadeIn 0.5s ease forwards',
      }}
    >
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-medium md:text-lg">{skill.name}</h3>
        <span className="text-sm font-semibold">{skill.level}%</span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className="h-2.5 rounded-full bg-indigo-600"
          style={{
            width: '0%',
            animation: `growWidth-${skill.level} 1s ease-out forwards`,
            animationDelay: `${index * 100 + 200}ms`,
          }}
        ></div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes growWidth-${skill.level} {
          from {
            width: 0%;
          }
          to {
            width: ${skill.level}%;
          }
        }
      `}</style>
    </div>
  );
}

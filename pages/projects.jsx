import Navbar from '../components/Navbar';
import swr from '../lib/swr';

export default function Projects() {
  const { data: _projects } = swr('/api/projects');
  const projects = _projects ? _projects : null;

  return (
    <>
      <Navbar />
      <div className="py-20">
        <p className="text-3xl text-white font-semibold text-center"></p>
        <p className="text-xl text-white/50 font-normal text-center mb-5">
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 w-full gap-4 items-center mt-2">
          {_projects ? (
            projects.map((project, index) => (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                key={index}
                className="bg-neutral-800/10 p-4 hover:bg-neutral-800/20 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full"
              >
                <img
                  alt={project.name}
                  src={project.image}
                  width="1024"
                  className="rounded-lg"
                  height="512"
                />
                <p className="text-xl font-semibold mt-5">{project.name}</p>
                <p
                  className="text-md font-normal text-white/50 h-24 overflow-small"
                  style={{ overflow: 'auto' }}
                >
                  {project.description}
                </p>
              </a>
            ))
          ) : (
            <p className="text-center text-white">Loading projects...</p>
          )}
        </div>
      </div>
    </>
  );
}

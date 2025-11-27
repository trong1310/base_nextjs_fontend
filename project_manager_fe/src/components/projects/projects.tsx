import { useEffect, useState } from "react";
import { projectService } from "../../services/projectService";
import styles from "./projects.module.scss";

interface Project {
  uuid: string;
  name: string;
  description: string;
  imageUrls: string[];
}

function ProjectItem() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const response: any = await projectService.listProject({
          page: 1,
          limit: 10,
        });
        const payload = response?.Data
          ? response
          : response?.data
          ? response.data
          : response || {};

        const items: any[] = payload?.Data?.Items ?? payload?.Items ?? [];

        if (!Array.isArray(items)) {
          setProjects([]);
          console.warn("Unexpected API response (not an array):", payload);
        } else {
          const mapped: Project[] = items.map((it: any) => ({
            uuid: it.uuid,
            name: it.name,
            description: it.description ,
            imageUrls: it.imageUrls,
          }));

          console.log("Projects fetched (mapped):", mapped);
          setProjects(mapped);
        }
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Error fetching projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {projects.map((project) => (
        <div key={project.uuid} className={styles.projectItem}>
          <div className={styles.projectText}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
          <div className={styles.projectImgBox}>
            {project.imageUrls.length > 0 &&
              project.imageUrls.map((url, idx) => (
                <img key={idx} src={url} alt={project.name} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectItem;

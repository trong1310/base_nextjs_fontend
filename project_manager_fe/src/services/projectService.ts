import axios from ".";

export const projectService = {
  listProject(request: { page?: number; limit?: number }) {
    return axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/projects`,
      request
    );
  },
  detailProject(uuid: string) {
    return axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/projects/${uuid}`
    );
  }
};

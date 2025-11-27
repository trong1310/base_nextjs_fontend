import axios from ".";

export const projectService = {
  listProject(request: { page?: number; limit?: number }) {
    return axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/projects`,
      request
    );
  },
};

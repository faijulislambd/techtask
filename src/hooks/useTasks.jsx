import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useTask = (page, pageLimit) => {
  const { refetch: refetchAllTasks, data: tasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const response = await axios.get(
        `https://techops.sohochor.com/api/tasks/allTasks?page=${page}&pageLimit=${pageLimit}`
      );
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      return response.data;
    },
  });
  return [tasks, refetchAllTasks];
};

export default useTask;

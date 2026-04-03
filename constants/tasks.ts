type Task = {
  id: string;
  title: string;
  cateogry: string;
  time: string;
  status: string;
  icon: {
    name: string;
    color: string;
  };
};
export const TASKS: Task[] = [
  {
    id: "1",
    title: "Task 1",
    cateogry: "Market Reaserch",
    time: "10:00",
    status: "Pending",
    icon: {
      name: "grid",
      color: "green",
    },
  },
  {
    id: "2",
    title: "Task 2",
    cateogry: "Market Reaserch",
    time: "10:00",
    status: "Pending",
    icon: {
      name: "grid",
      color: "green",
    },
  },
  {
    id: "3",
    title: "Task 3",
    cateogry: "Market Reaserch",
    time: "10:00",
    status: "Pending",
    icon: {
      name: "grid",
      color: "green",
    },
  },
  {
    id: "4",
    title: "Task 4",
    cateogry: "Market Reaserch",
    time: "10:00",
    status: "Pending",
    icon: {
      name: "grid",
      color: "green",
    },
  },
];

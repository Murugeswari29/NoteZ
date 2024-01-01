import {
  createBrowserRouter
} from "react-router-dom";
import SelectAction from "../components/selectAction";
import AllEvents from "../components/events/viewAllEvents";

// all route elements
const router = createBrowserRouter([
  {
    path: "/NoteZ",
    element: <SelectAction/>,
  },
  {
    path: "/NoteZ/all_events",
    element: <AllEvents/>,
  },
]);

export default router;
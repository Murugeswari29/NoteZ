import {
  createBrowserRouter
} from "react-router-dom";
import SelectAction from "../components/selectAction";
import EventsHome from "../components/events/eventsHome";

// all route elements
const router = createBrowserRouter([
  {
    path: "/NoteZ",
    element: <SelectAction/>,
  },
  {
    path: "/NoteZ/all_events",
    element: <EventsHome/>,
  },
]);

export default router;
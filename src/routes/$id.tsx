import { createFileRoute } from "@tanstack/react-router";
import Invgate from "../components/invgate";
import { TTodoList, TTodoItem } from "../types/general";

export const Route = createFileRoute("/$id")({
  validateSearch: (search: Record<string, unknown>): TTodoList => {
    return {
      id: search.id as number,
      todoList: search.todoList as TTodoItem[],
    };
  },
  component: App,
});

function App() {
  const { id } = Route.useParams();
  console.log(id);
  return <Invgate />;
}

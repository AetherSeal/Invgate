import { createFileRoute, redirect } from "@tanstack/react-router";
import Invgate from "../components/invgate";
import { uniqueID } from "../utils/helpers";

const id = uniqueID();
export const Route = createFileRoute("/")({
  loader: () => {
    redirect({
      to: `/${id}`,
      throw: true,
    });
  },
  component: () => <Invgate />,
});

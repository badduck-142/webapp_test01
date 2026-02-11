import { getTickets } from "@/app/actions";
import ServiceContent from "./service-content";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ITServicePage() {
    const session = await getSession();

    if (!session) {
        redirect("/login");
    }

    const tickets = await getTickets();

    return <ServiceContent initialTickets={tickets} user={session} />;
}

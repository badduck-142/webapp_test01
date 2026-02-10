import { getTickets } from "@/app/actions";
import ServiceContent from "./service-content";

export default async function ITServicePage() {
    const tickets = await getTickets();

    return <ServiceContent initialTickets={tickets} />;
}

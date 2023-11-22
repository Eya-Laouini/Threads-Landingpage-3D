import { Heart, Link, MessageCircle, LucideIcon } from "lucide-react";

interface IInfoCard {
    title:string;
    icon: LucideIcon;
    bodyText:string;
    id:number;
}

const infoCards: IInfoCard[] = [
    {
        title: "Streamlined Communication",
        bodyText: "Threads' intuitive design ensures your conversations flow smoothly. With instant posts and direct messaging, it’s never been easier to stay in touch.",
        icon: MessageCircle,
        id: 1
    },
    {
        title: "Engage Effortlessly",
        bodyText: "Share memories, exchange ideas, and get instant reactions with a single tap. Threads’ like and share functions make engagement a breeze.",
        icon: Heart,
        id: 2
    },
    {
        title: "Unified Connections",
        bodyText: "Build stronger relationships with smart threading that keeps your conversations organized. Enjoy meaningful interactions without the clutter.",
        icon: Link,
        id: 3
    },
]

export default infoCards
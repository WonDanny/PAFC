import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export const SIDE_MENU = [
    {
        id: 1,
        name: 'HOME',
        linkUrl: '/',
        icon: faHouse
    },
    {
        id: 2,
        name: 'TEAMS',
        linkUrl: '/teams',
        icon: faPeopleGroup
    },
];
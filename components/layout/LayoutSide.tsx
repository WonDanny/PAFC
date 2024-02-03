// next
import Link from "next/link";


// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";



// constants
import { SIDE_MENU } from "@/constants/layout/SideMenu";

interface SideProps {

};

interface SideMenu {
    id: number;
    name: string;
    linkUrl: string;
    icon: any;
}
const LayoutSide = (props: SideProps) => {
    const {  } = props;

    return (
        <div className="basis-60 p-5 space-y-2 border-r border-B100">
            {SIDE_MENU.map((menu: SideMenu) => {
                return (
                    <div key={menu.id}>
                        <Link href={menu.linkUrl} className="flex items-center gap-2">
                            <FontAwesomeIcon icon={menu.icon as IconProp} color="white"/>
                            <p className="text-white text-lg font-bold">{menu.name}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
};

export default LayoutSide;
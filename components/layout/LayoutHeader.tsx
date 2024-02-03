// next
import Link from "next/link";




interface HeaderProps {

};

const LayoutHeader = (props: HeaderProps) => {
    const {  } = props;

    return (
        <div className="flex-center p-5 border-b border-B100 text-white text-3xl font-bold ">
            <Link href='/'>PAFC</Link>
        </div>
    );
};

export default LayoutHeader
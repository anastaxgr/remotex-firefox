import { FLIcon } from "../enums"


interface Icon {
    icon: FLIcon
}
const FooterLink = ({icon}:Icon) => {
    return (
        <>
            <a href="">
                <div className="footerlink">
                <i className={icon}></i>
                </div>
            </a>
        </>
    )
}


export default FooterLink;
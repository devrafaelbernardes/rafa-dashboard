import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSpinner, faEye, faEyeSlash, faLock, faShoppingBag, faGraduationCap, faPhotoVideo, faProjectDiagram, faHome, faTimes, faTrashAlt, faPlus, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons'

export const UserIcon = (props) => (
    <Icon icon={faUser} {...props} />
);

export const UsersIcon = (props) => (
    <Icon icon={faUsers} {...props} />
);

export const RemoveIcon = (props) => (
    <Icon icon={faTrashAlt} {...props} />
);

export const PlusIcon = (props) => (
    <Icon icon={faPlus} {...props} />
);

export const CloseIcon = (props) => (
    <Icon icon={faTimes} {...props} />
);

export const HomeIcon = (props) => (
    <Icon icon={faHome} {...props} />
);

export const BagIcon = (props) => (
    <Icon icon={faShoppingBag} {...props} />
);

export const CourseIcon = (props) => (
    <Icon icon={faGraduationCap} {...props} />
);

export const MediaIcon = (props) => (
    <Icon icon={faPhotoVideo} {...props} />
);

export const SocialNetworkIcon = (props) => (
    <Icon icon={faProjectDiagram} {...props} />
);

export const LoadingIcon = (props) => (
    <Icon icon={faSpinner} {...props} />
);

export const PasswordIcon = (props) => (
    <Icon icon={faLock} {...props} />
);

export const LogoutIcon = (props) => (
    <Icon icon={faSignOutAlt} {...props} />
);

export const SeePasswordIcon = (props) => (
    <Icon icon={faEye} {...props} />
);

export const DontSeePasswordIcon = (props) => (
    <Icon icon={faEyeSlash} {...props} />
);

export const InstagramIcon = (props) => (
    <Icon icon="fab fa-instagram" isHTML {...props} />
);

export const FacebookIcon = (props) => (
    <Icon icon="fab fa-facebook" isHTML {...props} />
);

function Icon(props) {
    var { icon, className, style, isHTML } = props;
    isHTML = isHTML === true;
    className = className ? className : "";
    if (isHTML) {
        return (<i className={icon + " " + className} style={style}></i>);
    }
    return (<FontAwesomeIcon icon={icon} {...props} />);
}
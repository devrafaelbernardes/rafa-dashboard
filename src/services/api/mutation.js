import gql from 'graphql-tag';
import { ADMIN_ACCESS, TOKEN_ACCESS, BAG, IMAGE, MEDIA, SOCIAL_NETWORK, COURSE, COURSE_STUDENT, COURSE_ACCESS, STUDENT, COURSE_VIDEO, VIDEO, ADMIN } from './responseAPI';

export const DO_LOGIN = gql`
    mutation MutationLoginAdmin($input : InputLoginAdmin){
        response : loginAdmin(input : $input){
            ${ADMIN_ACCESS.TOKEN}{
                ${TOKEN_ACCESS.TOKEN}
            }
        }
    }
`;

export const UPDATE_PASSWORD = gql`
    mutation MutationUpdatePasswordAdmin($input : InputUpdatePassword){
        response : updatePasswordAdmin(input : $input)
    }
`;

export const UPDATE_POSITON_BAGS = gql`
    mutation MutationUpdatePositionBags($input : InputUpdateMultiplePosition){
        response : updatePositionBag(input : $input)
    }
`;

export const UPDATE_POSITON_MEDIAS = gql`
    mutation MutationUpdatePositionMedias($input : InputUpdateMultiplePosition){
        response : updatePositionMedia(input : $input)
    }
`;

export const UPDATE_POSITON_SOCIAL_NETWORKS = gql`
    mutation MutationUpdatePositionSocialNetworks($input : InputUpdateMultiplePosition){
        response : updatePositionSocialNetwork(input : $input)
    }
`;

export const UPDATE_BAG = gql`
    mutation MutationUpdateBag($input : InputUpdateBag, $firstImage : Upload, $secondImage : Upload){
        response : updateBag(input : $input, firstImage : $firstImage, secondImage : $secondImage){
            ${BAG.ID}
            ${BAG.NAME}
            ${BAG.FIRST_IMAGE} {
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
            ${BAG.SECOND_IMAGE} {
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
        }
    }
`;

export const CREATE_BAG = gql`
    mutation MutationCreateBag($input : InputCreateBag, $firstImage : Upload, $secondImage : Upload){
        response : createBag(input : $input, firstImage : $firstImage, secondImage : $secondImage){
            ${BAG.ID}
            ${BAG.NAME}
            ${BAG.FIRST_IMAGE} {
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
            ${BAG.SECOND_IMAGE} {
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
        }
    }
`;

export const REMOVE_BAG = gql`
    mutation MutationRemoveBag($input : InputRemove){
        response : removeBag(input : $input){
            ${BAG.ID}
            ${BAG.NAME}
            ${BAG.FIRST_IMAGE} {
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
        }
    }
`;

export const REMOVE_MEDIA = gql`
    mutation MutationRemoveMedia($input : InputRemove){
        response : removeMedia(input : $input){
            ${MEDIA.ID}
            ${MEDIA.LINK}
            ${MEDIA.IMAGE}{
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
        }
    }
`;

export const CREATE_MEDIA = gql`
    mutation MutationCreateMedia($input : InputCreateMedia, $image : Upload){
        response : createMedia(input : $input, image : $image){
            ${MEDIA.ID}
            ${MEDIA.LINK}
            ${MEDIA.IMAGE}{
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
        }
    }
`;

export const REMOVE_SOCIAL_NETWORK = gql`
    mutation MutationRemoveSocialNetwork($input : InputRemove){
        response : removeSocialNetwork(input : $input){
            ${SOCIAL_NETWORK.ID}
            ${SOCIAL_NETWORK.LINK}
            ${SOCIAL_NETWORK.IMAGE}{
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
        }
    }
`;

export const CREATE_SOCIAL_NETWORK = gql`
    mutation MutationCreateSocialNetwork($input : InputCreateSocialNetwork, $image : Upload){
        response : createSocialNetwork(input : $input, image : $image){
            ${SOCIAL_NETWORK.ID}
            ${SOCIAL_NETWORK.LINK}
            ${SOCIAL_NETWORK.IMAGE}{
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
        }
    }
`;

export const CREATE_COURSE = gql`
    mutation MutationCreateCourse($input : InputCreateCourse, $image : Upload){
        response : createCourse(input : $input, image : $image){
            ${COURSE.ID}
            ${COURSE.NAME}
            ${COURSE.PROFILE_IMAGE}{
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
        }
    }
`;

export const CREATE_COURSE_VIDEO = gql`
    mutation MutationAddCourseVideo($input : InputAddCourseVideo, $video : Upload){
        response : addCourseVideo(input : $input, video : $video){
            ${COURSE_VIDEO.ID}
            ${COURSE_VIDEO.NAME}
            ${COURSE_VIDEO.VIDEO}{
                ${VIDEO.ID}
                ${VIDEO.URL}
            }
        }
    }
`;

export const UPDATE_COURSE_VIDEO = gql`
    mutation MutationUpdateCourseVideo($input : InputUpdateCourseVideo){
        response : updateCourseVideo(input : $input){
            ${COURSE_VIDEO.ID}
            ${COURSE_VIDEO.NAME}
            ${COURSE_VIDEO.DESCRIPTION}
            ${COURSE_VIDEO.VIDEO}{
                ${VIDEO.URL}
            }
        }
    }
`;

export const REMOVE_COURSE = gql`
    mutation MutationRemoveCourse($input : InputRemove){
        response : removeCourse(input : $input){
            ${COURSE.ID}
            ${COURSE.NAME}
            ${COURSE.PROFILE_IMAGE}{
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
        }
    }
`;

export const UPDATE_COURSE = gql`
    mutation MutationUpdateCourse($input : InputUpdateCourse, $image : Upload){
        response : updateCourse(input : $input, image : $image){
            ${COURSE.ID}
            ${COURSE.NAME}
            ${COURSE.DESCRIPTION}
            ${COURSE.PURCHASE_LINK}
            ${COURSE.PROFILE_IMAGE}{
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
        }
    }
`;

export const UPDATE_ADMIN = gql`
    mutation MutationUpdateAdmin($input : InputUpdateAdmin, $image : Upload){
        response : updateAdmin(input : $input, image : $image){
            ${ADMIN.ID}
            ${ADMIN.NAME}
            ${ADMIN.LASTNAME}
            ${ADMIN.FULL_NAME}
            ${ADMIN.PROFILE_IMAGE}{
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
        }
    }
`;

export const REMOVE_COURSE_STUDENT = gql`
    mutation MutationRemoveCourseStudent($input : InputRemoveCourseStudent){
        response : removeCourseStudent(input : $input){
            ${COURSE_STUDENT.ID}
        }
    }
`;

export const REMOVE_COURSE_VIDEO = gql`
    mutation MutationRemoveCourseVideo($input : InputRemoveCourseVideo){
        response : removeCourseVideo(input : $input){
            ${COURSE_VIDEO.ID}
        }
    }
`;

export const ADD_COURSE_STUDENT = gql`
    mutation MutationAddCourseStudentByInstructor($input : InputAddCourseStudentByInstructor){
        response : addCourseStudentByInstructor(input : $input){
            ${COURSE_STUDENT.ID}
        }
    }
`;

export const GENERATE_COURSE_ACCESS = gql`
    mutation MutationGenerateCourseAccess($input : InputGenerateCourseAccess){
        response : generateCourseAccess(input : $input){
            ${COURSE_ACCESS.ID}
            ${COURSE_ACCESS.CURRENTY_STATE}
            ${COURSE_ACCESS.CREATED_AT}
            ${COURSE_ACCESS.TOKEN}{
                ${TOKEN_ACCESS.TOKEN}
            }
            ${COURSE_ACCESS.STUDENT}{
                ${STUDENT.FULL_NAME}
                ${STUDENT.PROFILE_IMAGE}{
                    ${IMAGE.URL}
                }
            }
        }
    }
`;

export const objectMutation = (input, params) => ({
    variables: { input, ...params }
});

export default objectMutation;
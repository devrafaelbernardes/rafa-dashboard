import gql from 'graphql-tag';
import { ADMIN, IMAGE, BAG, PAGINATION, MEDIA, SOCIAL_NETWORK, PAGE_INFO, COURSE, COURSE_STUDENT, STUDENT, COURSE_ACCESS, COURSE_VIDEO, VIDEO, COURSE_MATERIAL, MATERIAL } from './responseAPI';

export const GET_CURRENTY_USER = gql`{   
    response : me_admin{
        ${ADMIN.ID}
        ${ADMIN.NAME}
        ${ADMIN.LASTNAME}
        ${ADMIN.FULL_NAME}
        ${ADMIN.PROFILE_IMAGE}{
            ${IMAGE.ID}
            ${IMAGE.URL}
        }
    }
}`;

export const GET_BAGS = gql`
    query QueryGetBags($pagination : InputPagination, $orderBy : [InputOrderQuery!]){
        response : bags(pagination : $pagination, orderBy : $orderBy){
            ${PAGINATION.ITEMS} {
                ${BAG.ID}
                ${BAG.NAME}
                ${BAG.LINK}
                ${BAG.FIRST_IMAGE}{
                    ${IMAGE.ID}
                    ${IMAGE.URL}
                }
            }
        }
    }
`;

export const GET_BAG = gql`
    query QueryGetBag($id : ID){
        response : bag(id : $id){
            ${BAG.ID}
            ${BAG.NAME}
            ${BAG.DISCOUNT_PRICE}
            ${BAG.TOTAL_PRICE}
            ${BAG.INSTALLMENTS_PRICE}
            ${BAG.INSTALLMENTS}
            ${BAG.POSITION}
            ${BAG.DEPOSIT}
            ${BAG.LINK}
            ${BAG.CREATED_AT}
            ${BAG.FIRST_IMAGE}{
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
            ${BAG.SECOND_IMAGE}{
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
        }
    }
`;

export const GET_MEDIAS = gql`
    query QueryGetMedias($pagination : InputPagination, $orderBy : [InputOrderQuery!]){
        response : medias(pagination : $pagination, orderBy : $orderBy){
            ${PAGINATION.ITEMS} {
                ${MEDIA.ID}
                ${MEDIA.LINK}
                ${MEDIA.IMAGE}{
                    ${IMAGE.ID}
                    ${IMAGE.URL}
                }
            }
        }
    }
`;

export const GET_SOCIAL_NETWORKS = gql`
    query QueryGetMedias($pagination : InputPagination, $orderBy : [InputOrderQuery!]){
        response : social_networks(pagination : $pagination, orderBy : $orderBy){
            ${PAGINATION.ITEMS} {
                ${SOCIAL_NETWORK.ID}
                ${SOCIAL_NETWORK.LINK}
                ${SOCIAL_NETWORK.IMAGE}{
                    ${IMAGE.ID}
                    ${IMAGE.URL}
                }
            }
        }
    }
`;

export const GET_COURSES = gql`
    query QueryGetMedias($pagination : InputPagination, $orderBy : [InputOrderQuery!]){
        response : courses(pagination : $pagination, orderBy : $orderBy){
            ${PAGINATION.TOTAL_ITEMS}
            ${PAGINATION.ITEMS} {
                ${COURSE.ID}
                ${COURSE.NAME}
                ${COURSE.DESCRIPTION}
                ${COURSE.PURCHASE_LINK}
                ${COURSE.PROFILE_IMAGE}{
                    ${IMAGE.ID}
                    ${IMAGE.URL}
                }
            }
            ${PAGINATION.PAGE_INFO} {
                ${PAGE_INFO.HAS_PREVIOUS_PAGE}
                ${PAGE_INFO.HAS_NEXT_PAGE}
            }
        }
    }
`;

export const GET_STUDENTS = gql`
    query QueryGetStudents($pagination : InputPagination, $orderBy : [InputOrderQuery!]){
        response : students(pagination : $pagination, orderBy : $orderBy){
            ${PAGINATION.TOTAL_ITEMS}
            ${PAGINATION.ITEMS} {
                ${STUDENT.ID}
                ${STUDENT.NAME}
                ${STUDENT.LASTNAME}
                ${STUDENT.FULL_NAME}
                ${STUDENT.EMAIL}
                ${STUDENT.PROFILE_IMAGE}{
                    ${IMAGE.ID}
                    ${IMAGE.URL}
                }
            }
            ${PAGINATION.PAGE_INFO} {
                ${PAGE_INFO.HAS_PREVIOUS_PAGE}
                ${PAGE_INFO.HAS_NEXT_PAGE}
            }
        }
    }
`;

export const GET_COURSE_ACCESSES = gql`
    query QueryGetCourseAccesses($courseId : ID, $pagination : InputPagination, $orderBy : [InputOrderQuery!]){
        response : course_accesses(courseId: $courseId, pagination : $pagination, orderBy : $orderBy){
            ${PAGINATION.TOTAL_ITEMS}
            ${PAGINATION.ITEMS} {
                ${COURSE_ACCESS.ID}
                ${COURSE_ACCESS.CURRENTY_STATE}
                ${COURSE_ACCESS.CREATED_AT}
                ${COURSE_ACCESS.TOKEN}
                ${COURSE_ACCESS.STUDENT}{
                    ${STUDENT.FULL_NAME}
                    ${STUDENT.PROFILE_IMAGE}{
                        ${IMAGE.ID}
                        ${IMAGE.URL}
                    }
                }
            }
            ${PAGINATION.PAGE_INFO} {
                ${PAGE_INFO.HAS_PREVIOUS_PAGE}
                ${PAGE_INFO.HAS_NEXT_PAGE}
            }
        }
    }
`;

export const GET_COURSE = gql`
    query QueryGetCourse($id : ID){
        response : course(id : $id){
            ${COURSE.ID}
            ${COURSE.NAME}
            ${COURSE.DESCRIPTION}
            ${COURSE.PURCHASE_LINK}
            ${COURSE.COUNT_STUDENTS}
            ${COURSE.COUNT_VIDEOS}
            ${COURSE.PROFILE_IMAGE}{
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
        }
    }
`;

export const GET_COURSE_STUDENTS = gql`
    query QueryGetCourseStudents($id : ID, $pagination : InputPagination, $orderBy : [InputOrderQuery!]){
        response : course(id : $id){
            ${COURSE.ID}
            ${COURSE.STUDENTS}(pagination : $pagination, orderBy : $orderBy){
                ${PAGINATION.TOTAL_ITEMS}
                ${PAGINATION.ITEMS}{
                    ${COURSE_STUDENT.ID}
                    ${COURSE_STUDENT.CREATED_AT}
                    ${COURSE_STUDENT.STUDENT}{
                        ${STUDENT.ID}
                        ${STUDENT.FULL_NAME}
                        ${STUDENT.EMAIL}
                        ${STUDENT.PROFILE_IMAGE} {
                            ${IMAGE.ID}
                            ${IMAGE.URL}
                        }
                    }
                }
                ${PAGINATION.PAGE_INFO} {
                    ${PAGE_INFO.HAS_PREVIOUS_PAGE}
                    ${PAGE_INFO.HAS_NEXT_PAGE}
                }
            }
        }
    }
`;

export const GET_COURSE_MATERIALS = gql`
    query QueryGetCourseStudents($id : ID, $pagination : InputPagination, $orderBy : [InputOrderQuery!]){
        response : course(id : $id){
            ${COURSE.ID}
            ${COURSE.MATERIALS}(pagination : $pagination, orderBy : $orderBy){
                ${PAGINATION.TOTAL_ITEMS}
                ${PAGINATION.ITEMS}{
                    ${COURSE_MATERIAL.ID}
                    ${COURSE_MATERIAL.NAME}
                    ${COURSE_MATERIAL.CREATED_AT}
                    ${COURSE_MATERIAL.MATERIAL}{
                        ${MATERIAL.ID}
                        ${MATERIAL.URL}
                    }
                }
                ${PAGINATION.PAGE_INFO} {
                    ${PAGE_INFO.HAS_PREVIOUS_PAGE}
                    ${PAGE_INFO.HAS_NEXT_PAGE}
                }
            }
        }
    }
`;

export const GET_COURSE_VIDEOS = gql`
    query QueryGetCourseVideos($id : ID, $pagination : InputPagination, $orderBy : [InputOrderQuery!]){
        response : course(id : $id){
            ${COURSE.ID}
            ${COURSE.VIDEOS}(pagination : $pagination, orderBy : $orderBy){
                ${PAGINATION.TOTAL_ITEMS}
                ${PAGINATION.ITEMS}{
                    ${COURSE_VIDEO.ID}
                    ${COURSE_VIDEO.NAME}
                    ${COURSE_VIDEO.CREATED_AT}
                    ${COURSE_VIDEO.VIDEO}{
                        ${VIDEO.ID}
                    }
                    ${COURSE_VIDEO.THUMBNAIL}{
                        ${IMAGE.ID}
                        ${IMAGE.URL}
                    }
                }
            }
        }
    }
`;

export const GET_COURSE_VIDEO = gql`
    query QueryGetCourseVideo($courseId : ID, $videoId : ID){
        response : course_video(courseId : $courseId, videoId : $videoId){
            ${COURSE_VIDEO.ID}
            ${COURSE_VIDEO.NAME}
            ${COURSE_VIDEO.DESCRIPTION}
            ${COURSE_VIDEO.VIDEO}{
                ${VIDEO.ID}
                ${VIDEO.URL}
            }
            ${COURSE_VIDEO.THUMBNAIL}{
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
        }
    }
`;

export const GET_SYSTEM_INFOS = gql`{
    bags{
        ${PAGE_INFO.TOTAL_ITEMS}
    }
    courses{
        ${PAGE_INFO.TOTAL_ITEMS}
    }
    course_students{
        ${PAGE_INFO.TOTAL_ITEMS}
    }
    medias{
        ${PAGE_INFO.TOTAL_ITEMS}
    }
    social_networks{
        ${PAGE_INFO.TOTAL_ITEMS}
    }
    students{
        ${PAGE_INFO.TOTAL_ITEMS}
    }
}`;

export const getImageUser = (image) => {
    return image && image[IMAGE.URL];
};

export const objectQuery = (params) => ({
    variables: { ...params }
});

export default objectQuery;
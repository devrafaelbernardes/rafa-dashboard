import gql from 'graphql-tag';
import { ADMIN, IMAGE, BAG, PAGINATION, MEDIA, SOCIAL_NETWORK, PAGE_INFO, COURSE, COURSE_STUDENT, STUDENT, COURSE_ACCESS, COURSE_VIDEO, VIDEO, COURSE_MATERIAL, MATERIAL, EMAIL, MODELING } from './responseAPI';

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

export const GET_MODELINGS = gql`
    query QueryGetMedias($pagination : InputPagination, $orderBy : [InputOrderQuery!]){
        response : modelings(pagination : $pagination, orderBy : $orderBy){
            ${PAGINATION.ITEMS} {
                ${MODELING.ID}
                ${MODELING.NAME}
                ${MODELING.LINK}
                ${MODELING.IMAGE}{
                    ${IMAGE.ID}
                    ${IMAGE.URL}
                }
            }
        }
    }
`;

export const GET_MEDIAS = (isLandingPage = false) => gql`
    query QueryGetMedias($pagination : InputPagination, $orderBy : [InputOrderQuery!]){
        response : medias(is_landding_page: ${isLandingPage}, pagination : $pagination, orderBy : $orderBy){
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
    query QueryGetCourses($pagination : InputPagination, $orderBy : [InputOrderQuery!]){
        response : courses(pagination : $pagination, orderBy : $orderBy){
            ${PAGINATION.TOTAL_ITEMS}
            ${PAGINATION.ITEMS} {
                ${COURSE.ID}
                ${COURSE.NAME}
                ${COURSE.MONTHS_TO_EXPIRES}
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

export const GET_COURSES_TO_SEND_EMAIL = gql`
    query QueryGetCoursesToSendEmail($pagination : InputPagination, $orderBy : [InputOrderQuery!]){
        response : courses(pagination : $pagination, orderBy : $orderBy){
            ${PAGINATION.TOTAL_ITEMS}
            ${PAGINATION.ITEMS} {
                ${COURSE.ID}
                ${COURSE.NAME}
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

export const GET_EMAILS = gql`
    query QueryGetEmails($pagination : InputPagination, $orderBy : [InputOrderQuery!]){
        response : emails(pagination : $pagination, orderBy : $orderBy){
            ${PAGINATION.TOTAL_ITEMS}
            ${PAGINATION.ITEMS} {
                ${EMAIL.ID}
                ${EMAIL.TO}
                ${EMAIL.SUBJECT}
                ${EMAIL.MESSAGE}
                ${EMAIL.CREATED_AT}
                ${EMAIL.STUDENT}{
                    ${STUDENT.ID}
                    ${STUDENT.NAME}
                    ${STUDENT.LASTNAME}
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
                ${STUDENT.IS_VALIDATED_EMAIL}
                ${STUDENT.COUNT_COURSES}
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

export const GET_STUDENTS_NO_COURSE = gql`
    query QueryGetStudentsNoCourse($pagination : InputPagination, $orderBy : [InputOrderQuery!]){
        response : students_no_course(pagination : $pagination, orderBy : $orderBy){
            ${PAGINATION.TOTAL_ITEMS}
            ${PAGINATION.ITEMS} {
                ${STUDENT.ID}
                ${STUDENT.NAME}
                ${STUDENT.LASTNAME}
                ${STUDENT.FULL_NAME}
                ${STUDENT.EMAIL}
                ${STUDENT.IS_VALIDATED_EMAIL}
                ${STUDENT.COUNT_COURSES}
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

export const GET_STUDENTS_HAVE_COURSE = gql`
    query QueryGetStudentsHaveCourse($pagination : InputPagination, $orderBy : [InputOrderQuery!]){
        response : students_have_course(pagination : $pagination, orderBy : $orderBy){
            ${PAGINATION.TOTAL_ITEMS}
            ${PAGINATION.ITEMS} {
                ${STUDENT.ID}
                ${STUDENT.NAME}
                ${STUDENT.LASTNAME}
                ${STUDENT.FULL_NAME}
                ${STUDENT.EMAIL}
                ${STUDENT.IS_VALIDATED_EMAIL}
                ${STUDENT.COUNT_COURSES}
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
                ${COURSE_ACCESS.EMAIL}
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
            ${COURSE.MONTHS_TO_EXPIRES}
            ${COURSE.COUNT_STUDENTS}
            ${COURSE.COUNT_VIDEOS}
            ${COURSE.PROFILE_IMAGE}{
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
        }
    }
`;

export const GET_MODELING = gql`
    query QueryGetModeling($id : ID){
        response : modeling(id : $id){
            ${MODELING.ID}
            ${MODELING.NAME}
            ${MODELING.LINK}
            ${MODELING.IMAGE}{
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
        }
    }
`;

export const GET_COURSE_STUDENTS = gql`
    query QueryGetCourseStudents($id : ID, $pagination : InputPagination, $orderBy : [InputOrderQuery!]){
        response : course_students(courseId : $id, pagination : $pagination, orderBy : $orderBy){
            ${PAGINATION.TOTAL_ITEMS}
            ${PAGINATION.ITEMS}{
                ${COURSE_STUDENT.ID}
                ${COURSE_STUDENT.EXPIRES_AT}
                ${COURSE_STUDENT.CREATED_AT}
                ${COURSE_STUDENT.STUDENT}{
                    ${STUDENT.ID}
                    ${STUDENT.FULL_NAME}
                    ${STUDENT.EMAIL}
                    ${STUDENT.IS_VALIDATED_EMAIL}
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
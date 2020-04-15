import gql from 'graphql-tag';
import { IMAGE, COURSE, COURSE_STUDENT, STUDENT, ADMIN } from './responseAPI';

export const COURSE_ADDED = gql`
    subscription SubscriptionCourseAdded{
        response : courseAdded{
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

export const COURSE_UPDATED = gql`
    subscription SubscriptionCourseUpdated($courseId : ID!){
        response : courseUpdated(courseId:$courseId){
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

export const ADMIN_UPDATED = gql`
    subscription SubscriptionAdminUpdated($adminId : ID!){
        response : adminUpdated(adminId:$adminId){
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

export const COURSE_STUDENT_ADDED = gql`
    subscription SubscriptionCourseStudentAdded($courseId : ID!){
        response : courseStudentAdded(courseId:$courseId){
            ${COURSE_STUDENT.ID}
            ${COURSE_STUDENT.CREATED_AT}
            ${COURSE_STUDENT.STUDENT}{
                ${STUDENT.ID}
                ${STUDENT.FULL_NAME}
                ${STUDENT.PROFILE_IMAGE} {
                    ${IMAGE.URL}
                }
            }
        }
    }
`;

export const STUDENT_ADDED = gql`
    subscription SubscriptionStudentAdded{
        response : studentAdded{
            ${STUDENT.ID}
            ${STUDENT.NAME}
            ${STUDENT.LASTNAME}
            ${STUDENT.FULL_NAME}
            ${STUDENT.EMAIL}
            ${STUDENT.PROFILE_IMAGE}{
                ${IMAGE.URL}
            }
        }
    }
`;

export const objectSubscription = (params) => ({
    variables: { ...params }
});

export default objectSubscription;
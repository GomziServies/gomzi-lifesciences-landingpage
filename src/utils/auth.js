export const isUserLoggedIn = () => {
    const hasAuth = !!localStorage.getItem('fg_group_user_authorization');
    const hasUserInfo = !!localStorage.getItem('user_info');
    return hasAuth && hasUserInfo;
};

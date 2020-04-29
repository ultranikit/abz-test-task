import React, { useEffect } from "react";
import { connect } from "react-redux";
import useWindowDimensions from "../../WindowWidth";
import { getUsers, setLoadAnimation } from "../../../store";
import { UsersList } from "../../UsersList";
import { Button } from "../../Button";
import "./styles.scss";

// userList - data from request
// usersPageLoadStatus - flag for show button or not
// loading - flag for loading animation when we clicking show more
const mapStateToProps = (state) => ({
  userList: state.users.userList,
  usersPageLoadStatus: state.users.usersPageLoadStatus,
  loading: state.users.loading,
});
const actionCreator = { getUsers, setLoadAnimation };

// default settings on start
const mobileUsersPerPage = 3;
const desktopUsersPerPage = 6;
const mobileStartList = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${mobileUsersPerPage}`;
const desktopStartList = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${desktopUsersPerPage}`;

export const UsersSection = connect(
  mapStateToProps,
  actionCreator
)((props) => {
  const {
    getUsers,
    userList,
    usersPageLoadStatus,
    loading,
    setLoadAnimation,
  } = props;

  // mockup mobile has 3 users in section and desktop 6 users
  /* I try to separate logic mob/desktop 
  when we have mob device we will recive 3 users but when we tablet/desktop we'll get 6 users
  just for the first request
  */
  const { width } = useWindowDimensions();

  useEffect(() => {
    const getUsersOnLoad = () => {
      // check user-list was recived or not
      if (userList && !userList.length) {
        // check width for mobile device
        if (width < 768) {
          return getUsers(mobileStartList);
          // check width for tablet/desktop device
        } else if (width >= 768) {
          return getUsers(desktopStartList);
        }
      }
    };

    getUsersOnLoad();
  }, [width, getUsers, userList]);

  // load more users with button
  /* when we changing width on dragging screen like from 1000px to 500px
  we weill send different requests for each screen
  for mobile it weill be 3 users per 1 page
  for tablet/desktop 6 users per 1 page
  So wee need make some math to make next request clear and not repeat users wich was recived */
  const loadMoreUsers = () => {
    setLoadAnimation(true);
    const mobPageNumber = userList.length / 3 + 1;
    const desktopPageNumber = userList.length / 6 + 1;
    const mobileList = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${mobPageNumber}&count=${mobileUsersPerPage}`;
    const desktopList = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${desktopPageNumber}&count=${desktopUsersPerPage}`;
    if (width < 768) {
      getUsers(mobileList);
    } else {
      if (userList.length % 6 === 0) {
        getUsers(desktopList);
      } else {
        getUsers(mobileList);
      }
    }
  };

  const btnOptions = {
    title: "Show more",
    className: "users-section__button",
    onClick: loadMoreUsers,
  };

  return (
    <div className="users-section">
      <div className="container">
        <h1 className="users-section__title">Our cheerful users</h1>
        <p className="users-section__subtitle">
          Attention! Sorting users by registration date
        </p>
        <div className="users-section__user-list-grid-container">
          <UsersList users={userList} />
        </div>
        {loading && <div className="loader"></div>}
        {!loading ? (
          usersPageLoadStatus ? (
            <Button options={btnOptions} />
          ) : null
        ) : null}
      </div>
    </div>
  );
});

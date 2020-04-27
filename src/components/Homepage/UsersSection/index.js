import React, { useEffect } from "react";
import { connect } from "react-redux";
import useWindowDimensions from "../../WindowWidth";
import { getUsers, setLoadAnimation } from "../../../store";
import { UsersList } from "../../UsersList";
import { Button } from "../Button";
import "./styles.scss";

const mapStateToProps = (state) => ({
  userList: state.users.userList,
  usersPageLoadStatus: state.users.usersPageLoadStatus,
  loading: state.users.loading,
});
const actionCreator = { getUsers, setLoadAnimation };

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
        <div className="users-section__user-list-flex-container">
          <UsersList users={userList} />
        </div>
        {loading && <div className="loader"></div>}
        {!loading ? (
          usersPageLoadStatus ? (
            <Button options={btnOptions} />
          ) : (
            <p>All happy users loaded :D</p>
          )
        ) : null}
      </div>
    </div>
  );
});

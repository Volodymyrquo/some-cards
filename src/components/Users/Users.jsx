import React from 'react';
import s from './Users.module.css';
/* import { usersList } from '../../common/usersData';
 */ import { connect } from 'react-redux';
import { getNewUser } from '../../redux/users-reducer';

const Users = ({ usersList }) => {
  return (
    <div className={s.main}>
      <div className={s.header}>
        <div className={s.user}>Users</div>
        <div>
          <button className={s.button}>+ Add new user</button>
        </div>
      </div>
      <table className={s.table}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Type of user</th>
          <th>Tariff</th>
          <th>Country</th>
          <th>Status</th>
        </tr>
        {usersList.map((obj, index) => (
          <tr key={index}>
            {Object.keys(obj).map((keys) => (
              <td key={obj.id}> {obj[keys]}</td>
            ))}{' '}
          </tr>
        ))}
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  usersList: state.users.usersList,
});

export default connect(mapStateToProps, { getNewUser })(Users);

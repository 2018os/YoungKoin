import React, { useState, useCallback } from "react";
import { dummyUser } from './_app';
import Router from 'next/router';

const Logout = () => {
  dummyUser.isLoggedin = false;
  return (
    <div>
      sdf
    </div>
  )
}

export default Logout;

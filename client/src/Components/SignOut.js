import React from 'react';
import Button from 'material-ui/Button';

import { auth } from '../firebase';

const SignOutButton = () =>
  <Button
    type="button"
    color="inherit"
    onClick={auth.doSignOut}
    href="/signin">
    Logout
  </Button>

export default SignOutButton;
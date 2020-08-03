import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // width:'100%'
    marginTop:"2em"
  },
  margin: {
    display: 'flex',
    justifyContent:"center",
    alignItems:"center"
  },
  // withoutLabel: {
  //   marginTop: theme.spacing(3),
  // },
  // textField: {
  //   width: '55ch',
  // },
}));

export default function InputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className={classes.root}>
        <FormControl fullWidth className={classes.margin} variant="filled">
          <FilledInput
          disableUnderline
          style={{
            backgroundColor:"white",
            borderRadius:"2.5em",
            width:"65ch",
            padding:"0 1em"}}
            placeholder="Search"
            id="filled-adornment-amount"
            value={values.amount}
            onChange={handleChange('amount')}
            endAdornment={<InputAdornment position="end">
              <SearchIcon style={{cursor:"pointer"}} />
            </InputAdornment>}
          />
        </FormControl>
    </div>
  );
}

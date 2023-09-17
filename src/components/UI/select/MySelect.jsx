import classes from './MySelect.module.css'

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select
      className={classes.mySelect}
      value={value}
      onChange={(e => onChange(e.target.value))}
    >
        <option disabled value="">{defaultValue}</option>
        {options.map((el) => <option key={el.value} value={el.value}>{el.name}</option>)}
    </select>
  )
}

export default MySelect;
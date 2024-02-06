import PropTypes from 'prop-types'

const TableRow = ({name}) => {
  return (
    <li className=" border-b block w-full text-center py-1 bg-white ">
      {name}
    </li>
  );
}

TableRow.propTypes={
  name:PropTypes.string
}

export default TableRow
const findByKey = (list, value, column) => {
  return list.filter(item => {
    return item[column].toLowerCase().includes(value.toLowerCase())
  });
};
export default findByKey

function createData(id, driverName, phoneNum, createdDate, status) {
  return {
    id,
    driverName,
    phoneNum,
    createdDate,
    status,
  };
}

const DriverData = [
  createData(0, "Jack", "012801802", "2 August 2020", true),
  createData(1, "Jack", "012801802", "2 August 2020", true),
  createData(2, "Jack", "012801802", "2 August 2020", true),
  createData(3, "Jack", "012801802", "2 August 2020", true),
];

export default DriverData;

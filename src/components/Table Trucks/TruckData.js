function createData(id, license, truckType, plateType, productionYear, status) {
  return {
    id,
    license,
    truckType,
    plateType,
    productionYear,
    status,
  };
}

const truckData = [
  createData(
    0,
    "B 1234 EAF",
    "Tronton",
    "Yellow",
    "2022",
    true
  ),
  createData(
    1,
    "B 1234 EAF",
    "Tronton",
    "Yellow",
    "2022",
    true
  ),
  createData(
    2,
    "B 1234 EAF",
    "Tronton",
    "Yellow",
    "2022",
    true
  ),
  createData(
    3,
    "B 1234 EAF",
    "Tronton",
    "Yellow",
    "2022",
    true
  ),
  createData(
    4,
    "B 1234 EAF",
    "Tronton",
    "Yellow",
    "2022",
    true
  ),
  createData(
    5,
    "B 1234 EAF",
    "Tronton",
    "Yellow",
    "2022",
    true
  ),
];

export default truckData;

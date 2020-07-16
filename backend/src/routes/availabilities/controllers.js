import AvailabilityContext from "./contexts";

export const getAvailabilities = async (req, res) => {
  try {
    let availabilities;
    const { volunteerId } = req.params;
    if (volunteerId) {
      availabilities = await AvailabilityContext.findAll({ volunteerId });
    } else {
      availabilities = await AvailabilityContext.findAll();
    }
    return res.status(200).send(availabilities);
  } catch (error) {
    return res.status(400).send("Could not get Availabilities");
  }
};

export const createAvailability = async (req, res) => {
  const startDate = Date(req.body.startDate);
  const endDate = Date(req.body.endDate);
  const availabilityData = { ...req.body, startDate, endDate };
  try {
    const availability = await AvailabilityContext.create(availabilityData);
    return res.status(200).send(availability);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Could not create your availability");
  }
};

// export const updateAvailability = async (req, res) => {
//   const availabilityData = req.body;
//   const _id = req.body._id;
//   try {
//     const availability = await AvailabilityContext.findOneAndUpdate(
//       { _id },
//       availabilityData
//     );
//     return res.status(200).send(availability);
//   } catch (err) {
//     return res.status(400).send("Could not update your availability");
//   }
// };

// export const deleteAvailability = async (req, res) => {
//   const { _id } = req.params;
//   try {
//     const response = AvailabilityContext.hardDelete({ _id });
//     return res.status(200).send(response);
//   } catch (err) {
//     return res.status(400).send("Could not delete the availability");
//   }
// };
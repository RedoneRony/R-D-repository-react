// submit the data 
const upddatedData = {
        Who: who === "" ? modalData[0].who : who,
        CompanyType:
          companyType === "" ? modalData[0].CompanyType : companyType,
        Priority: priority === "" ? modalData[0].Priority : priority,
        StartDate: startDate === "" ? modalData[0].StartDate : startDate,
        EndDate: endDate === "" ? modalData[0].EndDate : endDate,
        Description:
          description === "" ? modalData[0].Description : description,
        TrackStatus:
          trackStatus === "" ? modalData[0].TrackStatus : trackStatus,
        Progress: progress === "" ? modalData[0].Progress : progress,
      };
      const updateModalData = async () => {
        if (id && createdAt) {
          await siteApi.patch(
            `/KeyPriority/update/${id}/${createdAt}`,
            upddatedData
          );
        }
      };
// add the id 
upddatedData.id = id;
updateItemHandler(upddatedData);

// update the state

const updateItemHandler = (updatedData) => {
  const newItems = modalData.map((item) => {
    let itemProps = { ...item };
    if (item.id === updatedData.id) {
      itemProps = {
        ...itemProps,
        ...updatedData,
      };
    }
    return itemProps;
  });
  setModalData(newItems);
  handleCloseModal();
};





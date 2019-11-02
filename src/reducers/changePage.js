const ChangePageReducer = (page = "Recentes", action) => {
  switch (action.type) {
    case "CHANGEPAGE":
      page = action.page;
      return page;
    default:
      return page;
  }
};

export default ChangePageReducer;

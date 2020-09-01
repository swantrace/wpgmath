import { UPDATE_BRANCH_INFO, SWITCH_BRANCH_NAME } from "../constants/index";

const INITIAL_STATE = {
  country: "",
  provinceOrState: "",
  branchName: "请选择分校",
  branchInfo: {
    _id: "",
    handle: "",
    teachers: [],
    mathnasium_hours: [],
    holiday_closures: [],
    pictures: [],
    videos: [],
    phone: "",
    notices: [],
    branch_name: "",
    country: "",
    province_or_state: "",
    on_hire: false,
    postal_code: "",
    city: "",
    text_address: "",
    location: { type: "Point", coordinates: [0, 0] },
    history: "",
    methods: [],
    activities: "",
    faq: [],
    history_head_image: "",
    activities_head_image: "",
    contact: "",
    contact_head_image: "",
    index_top_image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    index_bottom_image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
  }
};

export default function branchUpdater(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SWITCH_BRANCH_NAME:
      return {
        ...state,
        country: action.payload.country,
        provinceOrState: action.payload.provinceOrState,
        branchName: action.payload.branchName
      };
    case UPDATE_BRANCH_INFO:
      return {
        ...state,
        branchInfo: action.payload.branchInfo
      };
    default:
      return state;
  }
}

const requests = {
    common_config: "v1/common/config",
    facility_cities:"v1/unit/location",
    //Unit Filters
    unit_filters: "v2/unit/filters?UnitVisibility=1&Availability=2",
    user_login:"v1/user/login",
    forgot_password:"v1/user/password/forgot",
    user_signup :"v1/user/signup",
    unit_info_by_id :"v1/movein/lease/calculation",
    promo_discount : "v1/unit/discount",
    validate_promocode: "v1/unit/discount/promocode"
}

export default requests; 
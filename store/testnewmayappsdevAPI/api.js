import axios from "axios";
const testnewmayappsdevAPI = axios.create({
  baseURL: "https://testnewmayapps-dev-84102.botics.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function api_v1_login_create(payload) {
  return testnewmayappsdevAPI.post(`/api/v1/login/`, payload.data);
}

function api_v1_signup_create(payload) {
  return testnewmayappsdevAPI.post(`/api/v1/signup/`, payload.data);
}

function rest_auth_user_retrieve(payload) {
  return testnewmayappsdevAPI.get(`/rest-auth/user/`);
}

function rest_auth_user_update(payload) {
  return testnewmayappsdevAPI.put(`/rest-auth/user/`, payload.data);
}

function rest_auth_user_partial_update(payload) {
  return testnewmayappsdevAPI.patch(`/rest-auth/user/`, payload.data);
}

function api_docs_schema_retrieve(payload) {
  return testnewmayappsdevAPI.get(`/api-docs/schema/`, {
    params: {
      lang: payload.lang
    }
  });
}

function rest_auth_login_create(payload) {
  return testnewmayappsdevAPI.post(`/rest-auth/login/`, payload.data);
}

function rest_auth_logout_retrieve(payload) {
  return testnewmayappsdevAPI.get(`/rest-auth/logout/`);
}

function rest_auth_logout_create(payload) {
  return testnewmayappsdevAPI.post(`/rest-auth/logout/`);
}

function rest_auth_registration_create(payload) {
  return testnewmayappsdevAPI.post(`/rest-auth/registration/`, payload.data);
}

function api_v1_ravitestdatamodel_list(payload) {
  return testnewmayappsdevAPI.get(`/api/v1/ravitestdatamodel/`);
}

function api_v1_ravitestdatamodel_create(payload) {
  return testnewmayappsdevAPI.post(`/api/v1/ravitestdatamodel/`, payload.data);
}

function rest_auth_password_reset_create(payload) {
  return testnewmayappsdevAPI.post(`/rest-auth/password/reset/`, payload.data);
}

function rest_auth_password_change_create(payload) {
  return testnewmayappsdevAPI.post(`/rest-auth/password/change/`, payload.data);
}

function api_v1_ravitestdatamodel_retrieve(payload) {
  return testnewmayappsdevAPI.get(`/api/v1/ravitestdatamodel/${payload.id}/`);
}

function api_v1_ravitestdatamodel_update(payload) {
  return testnewmayappsdevAPI.put(`/api/v1/ravitestdatamodel/${payload.id}/`, payload.data);
}

function api_v1_ravitestdatamodel_partial_update(payload) {
  return testnewmayappsdevAPI.patch(`/api/v1/ravitestdatamodel/${payload.id}/`, payload.data);
}

function api_v1_ravitestdatamodel_destroy(payload) {
  return testnewmayappsdevAPI.delete(`/api/v1/ravitestdatamodel/${payload.id}/`);
}

function rest_auth_password_reset_confirm_create(payload) {
  return testnewmayappsdevAPI.post(`/rest-auth/password/reset/confirm/`, payload.data);
}

function rest_auth_registration_verify_email_create(payload) {
  return testnewmayappsdevAPI.post(`/rest-auth/registration/verify-email/`, payload.data);
}

export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_registration_create,
  api_v1_ravitestdatamodel_list,
  api_v1_ravitestdatamodel_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  api_v1_ravitestdatamodel_retrieve,
  api_v1_ravitestdatamodel_update,
  api_v1_ravitestdatamodel_partial_update,
  api_v1_ravitestdatamodel_destroy,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
};
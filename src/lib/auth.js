export default function getCurrentUser() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return user;
  } else {
    return null;
  }
}

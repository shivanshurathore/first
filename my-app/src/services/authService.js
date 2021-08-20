const keyName = "user";

function login(obj) {
  let str = JSON.stringify(obj);
  localStorage.setItem(keyName, str);
}

const exportData = {
  login,
};

export default exportData;
